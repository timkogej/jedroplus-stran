// Content for each /primerjava/[slug] comparison subpage. Mirrors the shape of
// panoge-data.ts / funkcije-data.ts: a shared template renders these fields and
// the CTA band is identical across pages. Each entry targets one comparison
// keyword ("Jedro+ vs <rival>"). Reviewed content and sources are in src/locales/comparisons.json.

export type CmpRow = { feature: string; jedro: string; rival: string };
export type CmpBlock = { title: string; text: string };
export type CmpPriceRow = { label: string; jedro: string; rival: string };
export type CmpScenario = {
  need: string;
  pick: "jedro" | "rival";
  label: string; // ime izbranega sistema
  why: string;
};
export type CmpFaq = { q: string; a: string };

export type Primerjava = {
  verified: boolean;
  sources: { title: string; url: string }[];
  title: string; // h1 — vsebuje ciljni keyword
  metaTitle: string; // <title>
  metaDescription: string; // 140–160 znakov
  eyebrow: string; // hero eyebrow
  rivalName: string; // ime konkurenta (za drobtine, breadcrumb, ...)
  cardText: string; // kratek opis za kartico na /primerjava (hub)
  heroSub: string;
  intro: string[]; // uvodni odstavki

  verdictJedro: string[]; // "Izberite Jedro+, če želite" — alineje
  verdictRival: string[]; // "Izberite <rival>, če želite" — alineje

  table: CmpRow[]; // primerjalna tabela
  tableNote?: string; // opomba pod tabelo (zvezdica)

  jedroWinsLead?: string; // uvodni stavek k "Kje Jedro+ izstopa"
  jedroWins: CmpBlock[];

  rivalWinsTitle: string; // "Kje je <rival> boljša izbira (pošteno)"
  rivalWinsIntro?: string;
  rivalWins: CmpBlock[];

  priceLead?: string;
  priceTable: CmpPriceRow[];
  priceNote: string[]; // odstavki pod cenovno tabelo

  scenarios: CmpScenario[]; // "Katero izbrati" po scenariju

  faq: CmpFaq[];
  sourceNote: string; // opomba o virih na dnu
};

import comparisonCopy from "@/locales/comparisons.json";
export const primerjave = comparisonCopy["sl-SI"] as Record<string, Primerjava>;
export const primerjaveSlugs = Object.keys(primerjave);
export const publishedPrimerjaveSlugs = primerjaveSlugs.filter(slug => primerjave[slug].verified);
