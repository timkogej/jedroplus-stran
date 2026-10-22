import assert from 'node:assert/strict';
const base=process.argv[2]||'http://127.0.0.1:3109';
const origin='https://www.jedroplus.com';
const organizationId=origin+'/#organization';
const sitemap=await(await fetch(base+'/sitemap.xml')).text();
const paths=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>new URL(m[1]).pathname);
const known=new Set(paths), facts=new Set();
let apps=0, checked=0;
for(let start=0;start<paths.length;start+=6)await Promise.all(paths.slice(start,start+6).map(async path=>{
 const response=await fetch(base+path);assert.equal(response.status,200,path);
 const html=await response.text();
 const entities=[...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
 const organizations=entities.filter(e=>e['@type']==='Organization');assert.equal(organizations.length,1,path+': one organization');
 const organization=organizations[0];assert.equal(organization['@id'],organizationId);assert.equal(organization.url,origin);
 assert.equal(organization.areaServed?.name,'European Union',path+': EU availability');
 const {description,...core}=organization;facts.add(JSON.stringify(core));
 const locale=path.match(/^\/(en|de|it)(?:\/|$)/)?.[1];
 for(const entity of entities){
  assert.equal(entity['@context'],'https://schema.org');assert.notEqual(entity['@type'],'ProfessionalService');
  for(const key of ['provider','publisher'])if(entity[key])assert.equal(entity[key]['@id'],organizationId,path+': '+key);
  if(entity['@type']==='WebSite'){
   assert.equal(entity['@id'],origin+'/#website');assert.equal(entity.url,origin);
   assert.deepEqual(entity.inLanguage,['sl-SI','en-GB','it-IT','de-DE']);
  }
  if(entity['@type']==='SoftwareApplication'){
   apps++;assert.equal(entity['@id'],origin+'/#application');assert.equal(new URL(entity.url).pathname,path);
   assert.equal(entity.applicationCategory,'BusinessApplication');assert.equal(entity.operatingSystem,'Web');
  }
  if(entity['@type']==='BreadcrumbList')entity.itemListElement.forEach((item,index)=>{
   assert.equal(item.position,index+1);assert.ok(known.has(new URL(item.item).pathname),path+': breadcrumb target');
  });
  if(entity['@type']==='BlogPosting'){
   assert.equal(new URL(entity.mainEntityOfPage['@id']).pathname,path);
   assert.ok(Number.isFinite(Date.parse(entity.datePublished)));
   assert.ok(Date.parse(entity.dateModified)>=Date.parse(entity.datePublished));
  }
  if(entity['@type']==='FAQPage'){
   assert.ok(entity.mainEntity.length);
   entity.mainEntity.forEach(q=>{assert.equal(q['@type'],'Question');assert.ok(q.name);assert.equal(q.acceptedAnswer['@type'],'Answer');assert.ok(q.acceptedAnswer.text);});
  }
  if(entity['@type']==='Service'){
   assert.ok(entity['@id']);assert.ok(entity.serviceType);
   const url=new URL(entity.url);assert.ok(known.has(url.pathname));assert.equal(url.pathname.match(/^\/(en|de|it)(?:\/|$)/)?.[1],locale);
   if([origin+'/#booking-service',origin+'/#receptionist-plus'].includes(entity['@id'])) assert.equal(entity.areaServed?.name,'European Union',path+': EU service availability');
   const offers=entity.hasOfferCatalog?.itemListElement||[];
   for(const offer of offers){
    assert.equal(offer['@type'],'Offer');
    if(offer.price!==undefined){assert.ok(Number.isFinite(Number(offer.price))&&Number(offer.price)>=0);assert.equal(offer.priceCurrency,'EUR');}
    if(Number(offer.price)>0){assert.equal(offer.priceSpecification?.valueAddedTaxIncluded,false,path+': prices exclude VAT');assert.equal(Number(offer.priceSpecification.price),Number(offer.price),path+': specified price matches offer');}
    if(offer.url)assert.ok(known.has(new URL(offer.url).pathname));
   }
   if(entity['@id']===origin+'/#receptionist-plus'){
    assert.deepEqual(offers.map(o=>[o.price,o.eligibleQuantity.value]),[[15,100],[39,300],[89,750]]);
    offers.forEach(o=>{assert.equal(o.eligibleQuantity.unitCode,'MIN');assert.equal(o.itemOffered['@id'],entity['@id']);});
   }
  }
 }
 checked++;
}));
assert.equal(facts.size,1,'all languages share the same organization facts');assert.equal(apps,4);
console.log(`PASS: ${checked} pages; shared identities and facts, publishers/providers, localized URLs, breadcrumbs, dates, FAQ, prices and minute units.`);
console.log('NOTE: Google software-app rich results require a genuine published rating/review; descriptive markup remains useful without invented ratings.');
