// Generated from Slovenian source and src/locales/de.json.
// Industries shown in the home "Panoge" flow panel (marquee cards + modal)
export type Industry = {
  t: string; // title (may contain &amp; — rendered as HTML in original)
  slug: string;
  img: string; // image slot label
  d: string; // modal description
  tg: string[]; // tags
  photo?: string; // real photo in /images/industries/<photo>.webp (else striped placeholder)
  bg?: string; // square panoge image in /images/industries/<bg>
};

export const industries: Industry[] = [
  {
    t: "Kosmetik-, Friseur- und Barbersalons",
    slug: "friseursalons",
    img: "salon / barber",
    d: "Erinnerungen reduzieren Nichterscheinen, füllen den Kalender und bringen Kunden zurück. Persönliche Nachrichten vor und nach Terminen schaffen ein bleibendes Erlebnis.",
    tg: ["Erinnerungen", "Onlinebuchung", "Treue"],
    bg: "jedro-stran-panoge-1.webp",
    photo: "jedro-bar",
  },
  {
    t: "Zahn-, Ästhetik- und medizinische Kliniken",
    slug: "praxen",
    img: "Klinik / Praxis",
    d: "Hinweise vor und nach Terminen werden automatisch gesendet, Akten bleiben ordentlich und Absagen nehmen ab. Mehr Zeit für Patienten, weniger Verwaltung.",
    tg: ["Hinweise", "Patientenakten", "Weniger Absagen"],
    bg: "jedro-stran-panoge-5.webp",
    photo: "jedro-zob-2",
  },
  {
    t: "Massage- und Wellnessstudios, Physiotherapie",
    slug: "wellness",
    img: "Wellness / Massage",
    d: "Terminserien, dezente Erinnerungen und Einladungen laufen im Hintergrund, damit du dich auf Kunden konzentrieren kannst.",
    tg: ["Terminserien", "Erinnerungen", "Folgebesuche"],
    bg: "jedro-stran-panoge-3.webp",
    photo: "jedro-mas",
  },
  {
    t: "Fitnessstudios, Personal Training, Yoga und Pilates",
    slug: "fitness",
    img: "fitnes / studio",
    d: "Gruppentermine, Mitgliederverwaltung und Hinweise auf freie Plätze. Dein Kalender füllt sich, während du trainierst.",
    tg: ["Gruppen", "Mitgliedschaften", "Auslastung"],
    bg: "jedro-stran-panoge-2.webp",
    photo: "jedro-fit",
  },
  {
    t: "Werkstätten, Reifendienste und Reinigungsunternehmen",
    slug: "werkstaetten",
    img: "Autoservice / Werkstatt",
    d: "Serviceerinnerungen und automatische Abholbenachrichtigungen sorgen für weniger unnötige Anrufe und Wartezeiten.",
    tg: ["Serviceerinnerungen", "Benachrichtigungen", "Abholung"],
    bg: "jedro-stran-panoge-4.webp",
    photo: "jedro-meh",
  },
  {
    t: "Beratung, Coaching und Therapie",
    slug: "coaching",
    img: "Beratung / Büro",
    d: "Diskrete Erinnerungen, regelmäßige Termine und Fortschrittsübersicht stärken vertrauensvolle Beziehungen.",
    tg: ["Diskretion", "Regelmäßige Termine", "Fortschritt"],
    bg: "jedro-stran-panoge-7.webp",
  },
  {
    t: "IT, Unternehmensdienste und Agenturen",
    slug: "dienstleistungen",
    img: "Büro / Team",
    d: "Besprechungen, Kundeneinführung und automatische Kommunikation mit weniger manueller Arbeit. Alles an einem Ort.",
    tg: ["Besprechungen", "Onboarding", "Automatisierung"],
    bg: "jedro-stran-panoge-6.webp",
  },
  {
    t: "Andere Dienstleistungsunternehmen",
    slug: "weitere-branchen",
    img: "Leistung / Kunde",
    d: "Wo Termine und Kunden zusammenkommen, passt sich Jedro+ deiner Arbeitsweise an.",
    tg: ["Flexibel", "Termine", "Kunden"],
    bg: "jedro-stran-panoge-8.webp",
  },
];
