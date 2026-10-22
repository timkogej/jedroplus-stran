import assert from 'node:assert/strict';
import { gzipSync } from 'node:zlib';
import { writeFile } from 'node:fs/promises';

// HTTP payload audit; browser/field Core Web Vitals must be measured separately.
const base = new URL(process.argv[2] || 'http://127.0.0.1:3107');
const baseline = process.argv.includes('--baseline');
const cache = new Map();
const decode = s => s.replaceAll('&amp;', '&');
async function asset(path) {
  if (!cache.has(path)) cache.set(path, (async () => {
    const r = await fetch(new URL(path, base));
    assert.equal(r.status, 200, path);
    return Buffer.from(await r.arrayBuffer());
  })());
  return cache.get(path);
}
const pages = ['/sl','/en','/it','/de','/funkcije/receptionist-plus','/en/features/receptionist-plus','/it/funzionalita/receptionist-plus','/de/funktionen/receptionist-plus','/cenik','/en/pricing','/it/prezzi','/de/preise','/blog','/en/blog','/it/blog','/de/blog','/o-nas','/en/about','/it/chi-siamo','/de/ueber-uns'];
const report = [];
for (const path of pages) {
  const start = performance.now();
  const r = await fetch(new URL(path, base));
  assert.equal(r.status, 200, path);
  const html = await r.text();
  const responseMs = Math.round(performance.now() - start);
  const scripts = [...new Set([...html.matchAll(/<script[^>]+src="([^"]+)"/g)].map(m=>decode(m[1])))];
  const css = [...new Set([...html.matchAll(/<link[^>]+href="([^"]+\.css[^"]*)"/g)].map(m=>decode(m[1])).filter(p=>p.startsWith('/')))];
  const jsBytes = (await Promise.all(scripts.map(asset))).reduce((s,b)=>s+gzipSync(b).length,0);
  const sheets = await Promise.all(css.map(asset));
  const cssBytes = sheets.reduce((s,b)=>s+gzipSync(b).length,0);
  if (!baseline) {
    assert.ok(html.includes('/fonts/inter-latin.woff2'),path+': local font preloads');
    assert.ok(!sheets.some(b=>b.toString().includes('@import')),path+': render-blocking CSS import');
    assert.ok(!html.includes('fonts.googleapis.com'),path+': Google Fonts request');
    assert.ok(!html.includes('JEDRO_LOCAL_AUDIT'),path+': temporary diagnostics still present');
    assert.ok(jsBytes<300*1024,path+': initial JS gzip >300KiB');
  }
  report.push({path,responseMs,htmlGzipBytes:gzipSync(html).length,jsGzipBytes:jsBytes,cssGzipBytes:cssBytes});
}
if (!baseline) for (const name of ['jedro-stran-team','jedro-stran-closeup',...Array.from({length:8},(_,i)=>'industries/jedro-stran-panoge-'+(i+1))]) {
  const b = await asset('/images/'+name+'.webp');
  assert.ok(b.length<300*1024,name+': image source >300KiB');
}
console.table(report);
if (process.env.PERFORMANCE_REPORT) await writeFile(process.env.PERFORMANCE_REPORT,JSON.stringify({base:base.origin,baseline,note:'Local HTTP payload audit; response timings are not field Core Web Vitals.',pages:report},null,2)+'\n');
console.log('Passed local payload audit. Browser/field measurements are separate.');
