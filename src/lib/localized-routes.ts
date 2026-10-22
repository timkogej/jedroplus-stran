import sections from '@/locales/route-sections.json';
import englishSlugs from '@/locales/route-slugs.json';
import germanSlugs from '@/locales/route-slugs-de.json';
import italianSlugs from '@/locales/route-slugs-it.json';

export const locales = ['sl', 'en', 'it', 'de'] as const;
export type Locale = typeof locales[number];
const sectionMaps: Record<string, Record<string,string>> = sections;
const slugMaps: Record<string, Record<string,string>> = { en: englishSlugs, it: italianSlugs, de: germanSlugs };
export const routeSections = sections.en;

export function pageLocale(path: string): Locale {
  return path === '/de' || path.startsWith('/de/') ? 'de' : path === '/it' || path.startsWith('/it/') ? 'it' : path === '/en' || path.startsWith('/en/') ? 'en' : 'sl';
}

/** Convert a public localized URL to the original Slovenian route identity. */
export function slovenianPath(path: string): string {
  const home = path.match(/^\/(?:sl|start)([?#].*)?$/);
  if (home) return "/" + (home[1] || "");
  const match = path.match(/^\/(en|it|de)(?=\/|[?#]|$)(.*)$/);
  if (!match) return path;
  const [, locale, rest] = match;
  if (!rest || rest === '/') return '/';
  if (/^[?#]/.test(rest)) return '/'+rest;
  const sectionMatch = rest.match(/^\/([^/#?]+)(.*)$/);
  if (!sectionMatch) return '/';
  const section = Object.keys(sectionMaps[locale]).find(key => sectionMaps[locale][key] === sectionMatch[1]);
  if (!section) return '/';
  const reverse = Object.fromEntries(Object.entries(slugMaps[locale]).map(([sl, local]) => [local, sl]));
  return '/'+section+sectionMatch[2].replace(/^\/([^/#?]+)/, (_, slug) => '/'+(reverse[slug] || slug));
}

export function localizedPath(path: string, locale: Locale): string {
  const original = slovenianPath(path);
  if (locale === 'sl') return original === '/' ? '/sl' : original.startsWith('/#') || original.startsWith('/?') ? '/sl'+original.slice(1) : original;
  if (original === '/' || original === '') return '/'+locale;
  if (original.startsWith('/#') || original.startsWith('/?')) return '/'+locale+original.slice(1);
  const match = original.match(/^\/([^/#?]+)(.*)$/);
  if (!match || !sectionMaps[locale][match[1]]) return original;
  return '/'+locale+'/'+sectionMaps[locale][match[1]]+match[2].replace(/^\/([^/#?]+)/, (_, slug) => '/'+(slugMaps[locale][slug] || slug));
}
export const englishPath = (path: string) => localizedPath(path, 'en');
export const italianPath = (path: string) => localizedPath(path, 'it');
export const germanPath = (path: string) => localizedPath(path, 'de');
export function languageAlternates(path: string) {
  const sl = slovenianPath(path);
  return { sl: localizedPath(sl, 'sl'), en: englishPath(sl), it: italianPath(sl), de: germanPath(sl), 'x-default': sl };
}
