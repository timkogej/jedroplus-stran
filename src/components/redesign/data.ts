// Industries shown in the home "Panoge" flow panel (marquee cards + modal)
export type Industry = {
  t: string; // title (may contain &amp; — rendered as HTML in original)
  slug: string;
  img: string; // image slot label
  d: string; // modal description
  tg: string[]; // tags
  photo?: string; // real photo in /images/industries/<photo>.webp (else striped placeholder)
};

export const industries: Industry[] = [
  {
    t: "Kozmetični, frizerski & barber saloni",
    slug: "frizerski-saloni",
    img: "salon / barber",
    d: "Manj no-showov z opomniki, polnejši urnik in stranke, ki se rade vračajo. Personalizirana sporočila pred in po terminu poskrbijo za vtis, ki ga stranke ne pozabijo.",
    tg: ["Opomniki", "Spletno naročanje", "Zvestoba"],
    photo: "jedro-bar",
  },
  {
    t: "Zobne, estetske & medicinske klinike",
    slug: "klinike",
    img: "klinika / ordinacija",
    d: "Pred- in po-terminska navodila se pošljejo samodejno, kartoteka ostane urejena, odpovedi pa upadejo. Več časa za paciente, manj za administracijo.",
    tg: ["Navodila", "Kartoteka", "Manj odpovedi"],
    photo: "jedro-zob-2",
  },
  {
    t: "Masažni & wellness studii, fizioterapija",
    slug: "wellness",
    img: "wellness / masaža",
    d: "Serije terminov, nežni opomniki in povabila k ponovnemu obisku — vse poteka v ozadju, da se lahko v miru posvetite strankam.",
    tg: ["Serije terminov", "Opomniki", "Ponovni obiski"],
    photo: "jedro-mas",
  },
  {
    t: "Fitnesi, osebni trenerji, joga & pilates",
    slug: "fitnes",
    img: "fitnes / studio",
    d: "Skupinski termini, članske evidence in obveščanje o prostih mestih. Urnik se polni sam, vi pa trenirate.",
    tg: ["Skupine", "Članstva", "Zasedenost"],
    photo: "jedro-fit",
  },
  {
    t: "Avtoservisi, vulkanizerji, čistilni servisi",
    slug: "avtoservisi",
    img: "servis / delavnica",
    d: "Opomniki za redni servis in samodejno obvestilo, ko je vozilo pripravljeno za prevzem. Brez nepotrebnih klicev in čakanja.",
    tg: ["Servisni opomniki", "Obvestila", "Prevzem"],
    photo: "jedro-meh",
  },
  {
    t: "Svetovalne, coaching & terapevtske storitve",
    slug: "coaching",
    img: "svetovanje / pisarna",
    d: "Diskretni opomniki, ponavljajoči se termini in sledenje napredku strank — odnos, ki gradi zaupanje.",
    tg: ["Diskretnost", "Ponavljanje", "Napredek"],
  },
  {
    t: "IT & poslovne storitve, agencije",
    slug: "poslovne-storitve",
    img: "pisarna / ekipa",
    d: "Sestanki, onboarding strank in avtomatska komunikacija brez ročnega dela. Vse povezano na enem mestu.",
    tg: ["Sestanki", "Onboarding", "Avtomatizacija"],
  },
  {
    t: "Ostala storitvena podjetja",
    slug: "ostalo",
    img: "storitev / stranka",
    d: "Karkoli s termini in strankami — Jedro+ se prilagodi vašemu načinu dela, ne obratno.",
    tg: ["Prilagodljivo", "Termini", "Stranke"],
  },
];
