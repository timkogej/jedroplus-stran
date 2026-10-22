'use client';
import { saveLanguagePreference } from '@/lib/language-preference';
const choices = [
  { code:'sl', label:'Slovenščina', action:'Nadaljuj v slovenščini', href:'/sl' },
  { code:'en', label:'English', action:'Continue in English', href:'/en' },
  { code:'it', label:'Italiano', action:'Continua in italiano', href:'/it' },
  { code:'de', label:'Deutsch', action:'Auf Deutsch fortfahren', href:'/de' },
];
export function LanguageEntry() {
  return <nav className="language-entry__choices" aria-label="Languages / Jeziki">
    {choices.map(choice=><a key={choice.code} href={choice.href} lang={choice.code} hrefLang={choice.code} onClick={event=>{
      saveLanguagePreference(choice.code);
      event.currentTarget.href=choice.href+window.location.search+window.location.hash;
    }}><strong>{choice.label}</strong><span>{choice.action} <span aria-hidden="true">↗</span></span></a>)}
  </nav>;
}
