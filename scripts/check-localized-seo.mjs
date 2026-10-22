import assert from 'node:assert/strict';
import fs from 'node:fs';
const base = process.argv[2] || 'http://127.0.0.1:3109';
const copy = JSON.parse(fs.readFileSync('src/locales/seo-pages.json', 'utf8'));
const decode = text => text.replace(/&#x([\da-f]+);/gi, (_,n)=>String.fromCodePoint(parseInt(n,16))).replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(+n)).replaceAll('&amp;','&').replaceAll('&quot;','"').replaceAll('&lt;','<').replaceAll('&gt;','>');
const attributes = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([,key,value])=>[key.toLowerCase(),decode(value)]));
const sitemap = await (await fetch(base+'/sitemap.xml')).text();
const paths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>new URL(decode(m[1])).pathname).filter(p=>p!=='/');
const seen = Object.fromEntries(Object.keys(copy).map(locale=>[locale,new Set()]));
let checked=0, headings=0;
for(let start=0;start<paths.length;start+=6) await Promise.all(paths.slice(start,start+6).map(async path=>{
 const response=await fetch(base+path); assert.equal(response.status,200,path);
 const html=await response.text();
 const locale=path.match(/^\/(en|it|de)(?:\/|$)/)?.[1] || 'sl';
 const links=[...html.matchAll(/<link\b[^>]*>/g)].map(m=>attributes(m[0]));
 const sl=links.find(link=>link.hreflang==='sl'); assert.ok(sl,path+': Slovenian route identity');
 const slPath=new URL(sl.href).pathname; const key=slPath==='/sl'?'/':slPath;
 const expected=copy[locale][key]; assert.ok(expected,path+': independently reviewed search copy');
 assert.ok(!seen[locale].has(key),path+': unique route'); seen[locale].add(key);
 assert.equal(decode(html.match(/<title>(.*?)<\/title>/s)?.[1]||''),expected.title,path+': title');
 const metas=[...html.matchAll(/<meta\b[^>]*>/g)].map(m=>attributes(m[0]));
 for(const name of ['description','og:description','twitter:description']) assert.equal(metas.find(m=>m.name===name||m.property===name)?.content,expected.description,path+': '+name);
 for(const name of ['og:title','twitter:title']) assert.equal(metas.find(m=>m.name===name||m.property===name)?.content,expected.title,path+': '+name);
 if(expected.heading){
  const h1=html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1]||'';
  assert.equal(decode(h1.replace(/<[^>]*>/g,'')).replace(/\s+/g,' ').trim(),expected.heading,path+': audience-specific H1'); headings++;
 }
 checked++;
}));
for(const locale of Object.keys(copy)) assert.deepEqual([...seen[locale]].sort(),Object.keys(copy[locale]).filter(key=>copy[locale][key].indexable!==false).sort(),locale+': coverage');
assert.equal(checked,Object.values(copy).reduce((n,pages)=>n+Object.values(pages).filter(page=>page.indexable!==false).length,0));assert.equal(headings,32);
console.log(`PASS: ${checked} reviewed localized titles, descriptions and social previews; ${headings} industry headings; full route coverage in all four languages.`);
