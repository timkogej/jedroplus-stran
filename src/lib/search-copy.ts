import searchPages from "@/locales/seo-pages.json";
import { pageLocale, slovenianPath } from "@/lib/localized-routes";

type SearchCopy = { title: string; description: string; heading?: string };
const pages: Record<string, Record<string, SearchCopy>> = searchPages;

/** Reviewed per-language copy, keyed by the stable Slovenian route identity. */
export function getSearchCopy(path: string): SearchCopy | undefined {
  const pathname = path.split(/[?#]/)[0];
  if (pathname === "/") return undefined; // The neutral language entry is not the Slovenian home.
  return pages[pageLocale(pathname)]?.[slovenianPath(pathname)];
}
