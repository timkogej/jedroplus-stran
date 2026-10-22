// Generated from Slovenian source and src/locales/it.json.
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
    t: "Saloni di bellezza, parrucchieri e barber shop",
    slug: "saloni-parrucchieri",
    img: "salon / barber",
    d: "I promemoria riducono le assenze, riempiono l’agenda e invogliano i clienti a tornare. I messaggi personalizzati prima e dopo la visita creano un’esperienza da ricordare.",
    tg: ["Promemoria", "Prenotazioni online", "Fedeltà"],
    bg: "jedro-stran-panoge-1.webp",
    photo: "jedro-bar",
  },
  {
    t: "Cliniche dentali, estetiche e mediche",
    slug: "cliniche",
    img: "clinica / ambulatorio",
    d: "Le indicazioni prima e dopo gli appuntamenti partono automaticamente, le schede pazienti restano ordinate e le cancellazioni diminuiscono. Più tempo per i pazienti, meno amministrazione.",
    tg: ["Indicazioni", "Schede pazienti", "Meno cancellazioni"],
    bg: "jedro-stran-panoge-5.webp",
    photo: "jedro-zob-2",
  },
  {
    t: "Studi di massaggio, centri benessere e fisioterapia",
    slug: "benessere",
    img: "benessere / massaggi",
    d: "Cicli di appuntamenti, promemoria discreti e inviti a tornare funzionano in background, così puoi concentrarti sui clienti.",
    tg: ["Cicli di appuntamenti", "Promemoria", "Visite successive"],
    bg: "jedro-stran-panoge-3.webp",
    photo: "jedro-mas",
  },
  {
    t: "Palestre, personal trainer, yoga e pilates",
    slug: "fitness",
    img: "fitnes / studio",
    d: "Lezioni di gruppo, registri degli iscritti e notifiche sui posti liberi. L’agenda si riempie mentre tu alleni.",
    tg: ["Gruppi", "Abbonamenti", "Occupazione"],
    bg: "jedro-stran-panoge-2.webp",
    photo: "jedro-fit",
  },
  {
    t: "Officine, gommisti e servizi di pulizia",
    slug: "officine",
    img: "officina / laboratorio",
    d: "Promemoria per la manutenzione e notifiche automatiche quando il veicolo è pronto. Meno telefonate e attese inutili.",
    tg: ["Promemoria manutenzione", "Notifiche", "Ritiro"],
    bg: "jedro-stran-panoge-4.webp",
    photo: "jedro-meh",
  },
  {
    t: "Consulenza, coaching e terapia",
    slug: "coaching",
    img: "consulenza / ufficio",
    d: "Promemoria discreti, appuntamenti ricorrenti e monitoraggio dei progressi costruiscono relazioni di fiducia.",
    tg: ["Discrezione", "Appuntamenti ricorrenti", "Progressi"],
    bg: "jedro-stran-panoge-7.webp",
  },
  {
    t: "IT, servizi aziendali e agenzie",
    slug: "servizi-aziendali",
    img: "ufficio / team",
    d: "Riunioni, onboarding e comunicazione automatica con meno lavoro manuale. Tutto collegato in un unico posto.",
    tg: ["Riunioni", "Onboarding", "Automazione"],
    bg: "jedro-stran-panoge-6.webp",
  },
  {
    t: "Altre imprese di servizi",
    slug: "altri-servizi",
    img: "servizio / cliente",
    d: "Qualunque sia la tua attività con appuntamenti e clienti, Jedro+ si adatta al tuo modo di lavorare.",
    tg: ["Flessibile", "Appuntamenti", "Clienti"],
    bg: "jedro-stran-panoge-8.webp",
  },
];
