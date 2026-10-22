import assert from 'node:assert/strict';
const base = process.argv[2] || 'http://127.0.0.1:3109';
const checks = [
  { name: 'no browser hints show neutral entry', language: null, target: '/' },
  { name: 'Slovenian region', language: 'sl-SI,sl;q=0.9,en;q=0.8', target: '/sl' },
  { name: 'German region', language: 'de-AT,de;q=0.9,en;q=0.8', target: '/de' },
  { name: 'Italian region', language: 'it-CH,it;q=0.9', target: '/it' },
  { name: 'English region', language: 'en-US,en;q=0.9', target: '/en' },
  { name: 'weighted preferences', language: 'de;q=0.2,it;q=0.9,en;q=0.5', target: '/it' },
  { name: 'unsupported first preference', language: 'fr-FR,en;q=0.8,de;q=0.5', target: '/en' },
  { name: 'unsupported language fallback', language: 'fr-FR,fr;q=0.9', target: '/en' },
  { name: 'zero quality excluded', language: 'de;q=0,it;q=0.7', target: '/it' },
  { name: 'invalid quality excluded', language: 'de;q=oops,it;q=0.8', target: '/it' },
  { name: 'manual Slovenian overrides German browser', language: 'de-DE', cookie: 'sl', target: '/sl' },
  { name: 'manual Italian overrides Slovenian browser', language: 'sl-SI', cookie: 'it', target: '/it' },
  { name: 'invalid cookie ignored', language: 'de-DE', cookie: 'invalid', target: '/de' },
  { name: 'crawler without browser hints sees neutral entry', language: null, agent: 'Googlebot', target: '/' },
];
for (const check of checks) {
  const headers = {};
  if (check.language) headers['Accept-Language'] = check.language;
  if (check.cookie) headers.Cookie = `jedroplus_language=${check.cookie}`;
  if (check.agent) headers['User-Agent'] = check.agent;
  const response = await fetch(base+'/?utm_source=language-test', { headers, redirect: 'manual' });
  assert.equal(response.status, check.target === '/' ? 200 : 307, check.name);
  if (check.target !== '/') assert.equal(new URL(response.headers.get('location'), base).pathname+new URL(response.headers.get('location'), base).search, check.target+'?utm_source=language-test', check.name);
  assert.match(response.headers.get('cache-control'), /private.*no-store/, check.name);
  if (check.target !== '/') assert.match(response.headers.get('vary'), /Accept-Language/i, check.name);
}
for (const path of ['/sl','/en','/it','/de','/funkcije/receptionist-plus','/de/funktionen/receptionist-plus','/sitemap.xml','/robots.txt']) {
  const response = await fetch(base+path, { headers: { 'Accept-Language': 'it-IT', Cookie: 'jedroplus_language=de' }, redirect: 'manual' });
  assert.equal(response.status, 200, `direct link must stay stable: ${path}`);
}
const prefetch = await fetch(base+'/', { headers: { 'Accept-Language': 'de-DE', purpose: 'prefetch' }, redirect: 'manual' });
assert.equal(prefetch.status,200,'prefetch must not trigger a redirect');
assert.match(prefetch.headers.get('cache-control'), /private.*no-store/, 'prefetch cache isolation');
console.log('PASS: browser languages, regions, quality weights, manual preference, fallback, crawler, cache isolation, query preservation, prefetch and stable direct links.');
