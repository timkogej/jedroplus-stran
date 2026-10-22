// Generated from Slovenian source and src/locales/it.json.
import type { Metadata } from "next";
import { getSearchCopy } from "@/lib/search-copy";
import { languageAlternates } from "@/lib/localized-routes";

export const SITE_URL = "https://www.jedroplus.com";
export const SITE_NAME = "Jedro+";
export const DEFAULT_DESCRIPTION = "Jedro+ è un software di prenotazione per imprese di servizi: calendario, prenotazioni online, database clienti, promemoria e receptionist AI in un unico posto.";

/** Keep canonical URLs and link previews consistent on every public page. */
export function pageMetadata(path: string, metadata: Metadata): Metadata {
  const copy = getSearchCopy(path);
  const title = copy?.title ?? (typeof metadata.title === "string" ? metadata.title : SITE_NAME);
  const description = copy?.description ?? metadata.description ?? DEFAULT_DESCRIPTION;
  const images = metadata.openGraph?.images ?? [{ url: "/it/opengraph-image", width: 1200, height: 630, alt: "Jedro+ — Appuntamenti, clienti e AI" }];
  return {
    ...metadata,
    title, description,
    alternates: { ...metadata.alternates, canonical: path, languages: languageAlternates(path) },
    openGraph: { type: "website", siteName: SITE_NAME, locale: "it_IT", images, ...metadata.openGraph, title, description, url: path },
    twitter: { card: "summary_large_image", images, ...metadata.twitter, title, description },
  };
}
