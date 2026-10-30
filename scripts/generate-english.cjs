/** Compile reviewed locale copy into static pages, including client components.
 * Source layouts and styling stay shared. Edit src/locales/{locale}.json, then run
 * npm run generate:languages. Unknown copy fails generation instead of silently
 * publishing Slovenian text on localized pages. */
const ts=require('typescript'),fs=require('fs'),path=require('path');
const locale=process.argv[2]||'en';
const config={en:{folder:'english',html:'en-GB',og:'en_GB',label:'English',alternate:'de'},de:{folder:'german',html:'de-DE',og:'de_DE',label:'German',alternate:'en'},it:{folder:'italian',html:'it-IT',og:'it_IT',label:'Italian',alternate:'en'}}[locale];
if(!config)throw new Error('Unsupported build locale: '+locale);
const dictionary=require('../src/locales/'+locale+'.json');
const slugs=require('../src/locales/'+(locale==='en'?'route-slugs.json':'route-slugs-'+locale+'.json'));
const sections=require('../src/locales/route-sections.json')[locale];
const route=s=>(s==='/'||s==='/sl')?'/'+locale:s.startsWith('/sl#')||s.startsWith('/sl?')?'/'+locale+s.slice(3):s.startsWith('/#')?'/'+locale+s.slice(1):s.replace(/^\/([^/#?]+)(.*)$/,(_,a,b)=>sections[a]?'/'+locale+'/'+sections[a]+b.replace(/^\/([^/#?]+)/,(_,slug)=>'/'+(slugs[slug]||slug)):_);
const pages=['page.tsx','agencija/page.tsx','blog/page.tsx','blog/[slug]/page.tsx','cenik/page.tsx','davcna-blagajna/page.tsx','funkcije/page.tsx','funkcije/[slug]/page.tsx','funkcije/receptionist-plus/page.tsx','funkcije/receptionist-plus/opengraph-image.tsx','o-nas/page.tsx','panoge/page.tsx','panoge/[slug]/page.tsx','pogoji-uporabe/page.tsx','primerjava/page.tsx','primerjava/[slug]/page.tsx','zasebnost/page.tsx','prihaja-kmalu/page.tsx'];
const lib=['pricing','receptionist','seo','schema','blog-format','blog','price'];
const sourceFiles=[...pages.map(p=>'src/app/(sl)/'+(p==='page.tsx'?'sl/page.tsx':p)),...fs.readdirSync('src/components/redesign').filter(f=>/\.tsx?$/.test(f)&&f!=='LanguageSwitcher.tsx').map(f=>'src/components/redesign/'+f),...lib.map(f=>'src/lib/'+f+'.ts'),'src/app/(sl)/layout.tsx'];
const missing=new Set();
function translate(s){if(dictionary[s]!==undefined)return dictionary[s]; if(/[čšžČŠŽ]/.test(s)&&!s.includes('Sonja Žužek')&&s!=='Žan'&&!/^[/@.#]|^https?:|^mailto:/.test(s)) missing.add(s);return s;}
function localise(s){return s.replace(/@\/components\/redesign\//g,'@/'+config.folder+'/components/redesign/').replace(/@\/lib\/(pricing|receptionist|seo|schema|blog-format|blog|price)(?=["'/]|$)/g,'@/'+config.folder+'/lib/$1');}
for(const file of sourceFiles){let code=fs.readFileSync(file,'utf8'),sf=ts.createSourceFile(file,code,99,true),edits=[];
function visit(n){let replacement;
 if(ts.isIdentifier(n) && ts.isPropertyAssignment(n.parent) && n.parent.name === n && slugs[n.text]) replacement=JSON.stringify(slugs[n.text]);
 if(ts.isJsxText(n)&&n.text.trim()){
  const normalized=n.text.replace(/\s+/g,' ').trim(),t=translate(normalized);
  if(dictionary[normalized]===undefined && /[A-Za-z]/.test(normalized) && !['Blog','Instagram','Jedro+','Receptionist+','J+','L'].includes(normalized)) missing.add(normalized);
  if(t!==normalized) replacement=(/^\s/.test(n.text)?' ':'')+t.replace(/&/g,'&amp;').replace(/</g,'&lt;')+(/\s$/.test(n.text)?' ':'');
 } else if(ts.isStringLiteral(n)||ts.isNoSubstitutionTemplateLiteral(n)){
  const p=n.parent;let s=n.text;
  const isModule=ts.isImportDeclaration(p)||ts.isExportDeclaration(p);
  if(isModule)s=localise(s);
  else if(!(ts.isJsxAttribute(p)&&!['eyebrow','lang','href','active','aboutHref','alt','title','placeholder','aria-label'].includes(p.name.text)) && !(ts.isPropertyAssignment(p)&&p.name===n)){
   s=translate(s);s=route(s);if(s==='sl_SI')s=config.og;if(s==='sl-SI')s=config.html;
  }
  if(slugs[s])s=slugs[s];
  if(s!==n.text)replacement=JSON.stringify(s);
 } else if(ts.isTemplateHead(n)||ts.isTemplateMiddle(n)||ts.isTemplateTail(n)){
  let s=translate(n.text);s=route(s);if(s!==n.text){const raw=code.slice(n.getStart(sf),n.end);replacement=raw.slice(0,1)+s.replace(/`/g,'\\`').replace(/\$\{/g,'\\${')+(ts.isTemplateTail(n)?'`':'${');}
 }
 if(replacement!==undefined)edits.push({start:n.getStart(sf),end:n.end,value:replacement});
 ts.forEachChild(n,visit);
}visit(sf);
for(const edit of edits.sort((a,b)=>b.start-a.start))code=code.slice(0,edit.start)+edit.value+code.slice(edit.end);
let target;
if(file==='src/app/(sl)/layout.tsx'){
 target='src/app/('+locale+')/'+locale+'/layout.tsx';code=code.replace('"../globals.css"','"../../globals.css"');
} else if(file==='src/app/(sl)/sl/page.tsx'){
 target='src/app/('+locale+')/'+locale+'/page.tsx';
} else if(file.startsWith('src/app/(sl)/')){
 const relative=file.slice('src/app/(sl)/'.length),[first,...rest]=relative.split('/');target='src/app/('+locale+')/'+locale+'/'+(sections[first]||first)+(rest.length?'/'+rest.join('/'):'');
}else target=file.replace('src/','src/'+config.folder+'/');

if(file.endsWith('/blog/[slug]/page.tsx'))code=code.replaceAll('/og-default.png','/'+locale+'/opengraph-image');
if(locale==='en' && file.endsWith('/price.ts'))code=code.replace('const DECIMAL = ",";','const DECIMAL = ".";');
if(file.endsWith('/blog.ts'))code=code.replace('"content/blog"','"content/blog-'+locale+'"');
if(locale!=='de' && file.endsWith('/blog-format.ts'))code=code.replace('return `${day}. ${MONTHS_SI[month - 1]} ${year}`;','return `${day} ${MONTHS_SI[month - 1]} ${year}`;');
if(file.endsWith('/seo.ts'))code=code.replaceAll('/og-default.png','/'+locale+'/opengraph-image');
if(file.endsWith('/layout.tsx'))code=code.replaceAll('/og-default.png','/'+locale+'/opengraph-image');
if(file.endsWith('/ReceptionistDemo.tsx'))code=code.replace('selected === 4 && index > 0 ? "en" : "sl"','selected === 4 && index > 0 ? "'+config.alternate+'" : "'+locale+'"');
if(file.endsWith('/Nav.tsx'))code=code.replace('from "./LanguageSwitcher"','from "@/components/redesign/LanguageSwitcher"');
fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,'// Generated from Slovenian source and src/locales/'+locale+'.json.\n'+code);
}
for(const f of fs.readdirSync('src/components/redesign').filter(f=>f.endsWith('.css')))fs.copyFileSync('src/components/redesign/'+f,'src/'+config.folder+'/components/redesign/'+f);
if(missing.size){console.error('Missing '+config.label+' translations:\n'+[...missing].join('\n'));process.exit(1)}
console.log('Generated '+sourceFiles.length+' '+config.label+' page, component and data files.');
