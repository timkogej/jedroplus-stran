import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { LanguageEntry } from '@/components/LanguageEntry';
import { languageAlternates } from '@/lib/localized-routes';
const title='Jedro+ | Izberite jezik · Choose your language';
const description='Izberite slovensko, angleško, italijansko ali nemško različico Jedro+. Choose your language: Slovenščina, English, Italiano, Deutsch.';
export const metadata: Metadata={
  title, description, alternates:{canonical:'/',languages:languageAlternates('/')},
  openGraph:{title,description,url:'/',type:'website',locale:'sl_SI',siteName:'Jedro+',images:['/og-default.png']},
  twitter:{card:'summary_large_image',title,description,images:['/og-default.png']},
};
export default function LanguageEntryPage(){
 return <main id="main-content" className="language-entry wrap">
   <Link href="/" aria-label="Jedro+"><Image src="/redesign/logo.png" width={132} height={34} alt="Jedro+" priority /></Link>
   <div className="language-entry__intro"><h1>Izberite jezik.<br/><span className="grad-text" lang="en">Choose your language.</span></h1><p>Slovenščina · English · Italiano · Deutsch</p></div>
   <LanguageEntry/>
 </main>;
}
