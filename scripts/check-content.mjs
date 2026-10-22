import assert from 'node:assert/strict';
import fs from 'node:fs';
import matter from 'gray-matter';
const base=process.argv[2]||'http://127.0.0.1:3109';
const sitemap=await(await fetch(base+'/sitemap.xml')).text();
const indexable=new Set([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>new URL(m[1]).pathname));
const scripts=html=>[...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
let articles=0;
for(const locale of ['sl','en','it','de']){
 const prefix=locale==='sl'?'':'/'+locale;
 const folder=locale==='sl'?'content/blog':'content/blog-'+locale;
 for(const file of fs.readdirSync(folder).filter(n=>n.endsWith('.mdx'))){
  const path=prefix+'/blog/'+file.slice(0,-4);assert.ok(indexable.has(path),path);
  const {data,content}=matter(fs.readFileSync(folder+'/'+file,'utf8'));
  const html=await(await fetch(base+path)).text();
  const article=scripts(html).find(s=>s['@type']==='BlogPosting');assert.ok(article,path);
  assert.equal(article.datePublished,data.date,path+': original publication date');
  assert.equal(article.dateModified,data.updated||data.date,path+': actual revision date');
  assert.equal(article.author['@id'],'https://www.jedroplus.com/#organization',path+': responsible author');
  assert.ok(content.trim().split(/\s+/).length>180,path+': substantive guide');
  assert.ok(html.includes('id="related-content-heading"'),path+': contextual next steps');
  assert.ok(html.includes(data.updated),path+': visible revision date');articles++;
 }
 const comparison=prefix+({'sl':'/primerjava/','en':'/compare/','it':'/confronti/','de':'/vergleich/'}[locale]);
 const verified=await(await fetch(base+comparison+'jedroplus-vs-lime-booking')).text();
 for(const url of ['https://business.lime-booking.com/si/cenik/','https://lime-booking.com/sl/business'])assert.ok(verified.includes('href="'+url+'"'),locale+': primary comparison source');
 const unverified=comparison+'jedroplus-vs-mojsalon';assert.ok(!indexable.has(unverified),locale+': unverified comparison excluded');
 const response=await fetch(base+unverified);assert.equal(response.status,200);const html=await response.text();
 assert.match(html,/<meta name="robots" content="noindex, follow"/);
 assert.ok(!html.includes('7 dni')&&!html.includes('7-day')&&!html.includes('7 giorni')&&!html.includes('7 Tage'),locale+': unsupported trial claim removed');
}
assert.equal(articles,24);
console.log(`PASS: ${articles} substantive guides with publication/revision dates, responsible author and contextual links; four sourced comparisons and four preserved noindex review routes.`);
