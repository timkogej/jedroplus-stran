import fs from 'node:fs';
import assert from 'node:assert/strict';
const base = process.argv[2] || 'http://127.0.0.1:3109';
const origin='https://www.jedroplus.com';
const tags={sl:'sl-SI',en:'en-GB',it:'it-IT',de:'de-DE'};
const ogTags={sl:'sl_SI',en:'en_GB',it:'it_IT',de:'de_DE'};
const sitemap=await (await fetch(base+'/sitemap.xml')).text();
const entries=[...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(([,s])=>s);
const pages=new Map();
for(let i=0;i<entries.length;i+=4)await Promise.all(entries.slice(i,i+4).map(async entry=>{
 const url=entry.match(/<loc>(.*?)<\/loc>/)[1];
 const path=new URL(url).pathname;
 const response=await fetch(base+path);assert.equal(response.status,200,path);
 pages.set(path,{url,entry,html:await response.text()});
}));
const counts={sl:0,en:0,it:0,de:0};
for(const [path,{url,entry,html}] of pages){
 const locale=path.match(/^\/(en|it|de)(?:\/|$)/)?.[1]||'sl';if(path !== '/') counts[locale]++;
 const links=[...html.matchAll(/<link\b[^>]*rel="alternate"[^>]*>/g)].map(([x])=>x);
 assert.equal(links.length,5,`${path}: expected sl, en, it, de and x-default`);
 for(const lang of ['sl','en','it','de','x-default']){
  const link=links.find(x=>x.includes(`hrefLang="${lang}"`)||x.includes(`hreflang="${lang}"`));assert.ok(link,`${path}: ${lang}`);
  const href=link.match(/href="([^"]+)"/)[1];assert.ok(href.startsWith(origin));
  const targetPath=new URL(href).pathname;const target=pages.get(targetPath)?.html;
  assert.ok(target,`${path}: alternate target missing ${targetPath}`);
  assert.ok(target.includes(`href="${url}"`),`${path}: non-reciprocal language link`);
 }
 for(const lang of ['sl','en','it','de'])assert.ok(entry.includes(`hreflang="${lang}"`),`${path}: sitemap ${lang}`);
 if(path==='/'){
 for(const lang of ['sl','en','it','de'])assert.ok(html.includes(`hrefLang="${lang}"`),`${path}: missing ${lang} choice`);
 }else assert.ok(html.includes('class="language-switch"'),`${path}: switcher missing`);
 assert.match(html,new RegExp('<html[^>]+lang="'+tags[locale]+'"'),`${path}: html language`);
 assert.ok(html.includes(`property="og:locale" content="${ogTags[locale]}"`),`${path}: OG locale`);
 if(locale!=='sl'){
  const visible=html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,'').replace(/<style\b[^>]*>[\s\S]*?<\/style>/g,'').replace(/<[^>]*>/g,' ').replace(/\s+/g,' ');
  assert.doesNotMatch(visible,/\b(Poglej|Preizkusi|Prijavi|Cenik|Funkcije|Panoge|Pogosta|vprašanja|Opomniki|Stranka|Zagon|kreditov|mesečno|naročanje)\b/,`${path}: Slovenian copy remains`);
  if(locale==='it'||locale==='de')assert.doesNotMatch(visible,/\b(View pricing|Start for free|Choose plan|Frequently asked|Call transcript|Appointment booked|More time for clients|Try it now|Main navigation|Before your first|About us|Privacy Policy|Terms of Use)\b/,`${path}: English copy remains`);
 }
}
const searchCopy=JSON.parse(fs.readFileSync('src/locales/seo-pages.json','utf8'));assert.equal(counts.sl,Object.values(searchCopy.sl).filter(page=>page.indexable!==false).length);assert.equal(counts.en,counts.sl);assert.equal(counts.it,counts.sl);assert.equal(counts.de,counts.sl);
for(const path of ['/en/features/does-not-exist','/en/blog/does-not-exist','/en/industries/does-not-exist','/it/funzionalita/non-esiste','/it/blog/non-esiste','/it/settori/non-esiste','/de/funktionen/nicht-vorhanden','/de/blog/nicht-vorhanden','/de/branchen/nicht-vorhanden'])assert.equal((await fetch(base+path)).status,404,path);
console.log(`PASS: ${pages.size} pages (${counts.sl} per language plus neutral entry); reciprocal hreflang, sitemap alternates, switchers, translated content, locales and unknown routes.`);
