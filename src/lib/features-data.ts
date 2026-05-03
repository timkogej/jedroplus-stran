export type FeatureItem = {
  id: string;
  title: string;
  shortDescription: string;
  intro: string;
  benefits: string[];
  audience: string;
};

export const featuresData: FeatureItem[] = [
  {
    id: "opomniki-pred",
    title: "Personalizirani opomniki pred terminom",
    shortDescription: "E-mail/SMS opomniki v vašem tonu, ob pravem času.",
    intro:
      "Jedro+ samodejno pošlje opomnik, ki vsebuje vse pomembne informacije in pripravo na termin.",
    benefits: [
      "Manj pozabljenih terminov in odpovedi",
      "Prilagodljiv čas pošiljanja",
      "Personalizirano besedilo glede na storitev",
      "Možnost navodil pred obiskom",
    ],
    audience:
      "Najbolj uporabno za vsa podjetja, kjer je točnost terminov ključna.",
  },
  {
    id: "opomniki-po",
    title: "Personalizirani opomniki po terminu",
    shortDescription: "Zahvala, navodila po storitvi in povabilo k povratku.",
    intro:
      "Po obisku stranka prejme personalizirano sporočilo z zahvalo in naslednjimi koraki.",
    benefits: [
      "Več ponovnih obiskov",
      "Navodila za nego ali uporabo po storitvi",
      "Profesionalen vtis brez ročnega dela",
      "Možnost povabila k oceni",
    ],
    audience:
      "Idealno za panoge, kjer je pomemben follow-up in ponovni obisk.",
  },
  {
    id: "koledar",
    title: "Koledar terminov",
    shortDescription: "Pregleden pogled po dnevih, zaposlenih in storitvah.",
    intro:
      "Koledar, ki ga razume cela ekipa – hitro prestavljanje in jasen pregled.",
    benefits: [
      "Dnevni, tedenski in mesečni pogled",
      "Hitra prestavitev ali preklic",
      "Pregled po izvajalcih in lokacijah",
      "Preprečevanje dvojnih rezervacij",
    ],
    audience:
      "Najbolj uporabno za ekipe z več izvajalci in več termini na dan.",
  },
  {
    id: "crm",
    title: "Baza strank (CRM)",
    shortDescription: "Celotna zgodovina, opombe in preference strank.",
    intro:
      "Vse informacije o strankah na enem mestu za bolj osebno komunikacijo.",
    benefits: [
      "Zgodovina obiskov in storitev",
      "Opombe, preference in posebnosti",
      "Segmentacija za kampanje",
      "Hitrejši odziv na povpraševanja",
    ],
    audience:
      "Za podjetja, ki želijo bolj oseben pristop in urejen CRM.",
  },
  {
    id: "baza-terminov",
    title: "Baza terminov",
    shortDescription: "Vsak termin je povezan s stranko, storitvijo in osebjem.",
    intro:
      "Jasen zapis vseh terminov z zgodovino, statusi in ključnimi informacijami.",
    benefits: [
      "Popolna zgodovina terminov",
      "Jasni statusi in opombe",
      "Povezava s storitvami in izvajalci",
      "Hitro iskanje in filtriranje",
    ],
    audience:
      "Primerno za vse, ki želijo preglednost in evidenco terminov.",
  },
  {
    id: "booking-link",
    title: "Booking link / spletno naročanje",
    shortDescription: "Deljiva povezava za hitro naročanje kjerkoli.",
    intro:
      "Enostavno naročanje preko deljive povezave na spletni strani ali družbenih omrežjih.",
    benefits: [
      "Manj telefonskih klicev",
      "Stranka se naroči sama",
      "Vedno posodobljen urnik",
      "Primerno za bio in QR kode",
    ],
    audience:
      "Za podjetja, ki želijo razbremeniti recepcijo in telefon.",
  },
  {
    id: "baza-storitev-osebja",
    title: "Baza storitev in osebja",
    shortDescription: "Urejene storitve, cene, trajanja in urniki izvajalcev.",
    intro:
      "Povezana baza storitev in osebja omogoča hitro organizacijo in manj napak.",
    benefits: [
      "Jasne storitve s cenami in trajanji",
      "Povezava storitev z izvajalci",
      "Urejeni urniki in delovni časi",
      "Hitre spremembe brez zmede",
    ],
    audience:
      "Za ekipe z več storitvami in različnimi izvajalci.",
  },
  {
    id: "lost-leads",
    title: "Obveščanje izgubljenih strank",
    shortDescription: "Ponovna aktivacija strank, ki so prenehale prihajati.",
    intro:
      "Sistem sam prepozna neaktivne stranke in pripravi kampanjo za ponovni obisk.",
    benefits: [
      "Samodejno odkrivanje neaktivnih strank",
      "Kampanje za ponovni obisk",
      "Merjenje rezultatov kampanj",
      "Več prihodkov iz obstoječe baze",
    ],
    audience:
      "Za podjetja, ki želijo zapolniti prazne termine brez dodatnega oglaševanja.",
  },
  {
    id: "analitika",
    title: "Analitika",
    shortDescription: "Ključne metrike za boljše odločitve.",
    intro:
      "Pregled zasedenosti, trendov in uspešnosti storitev na enem mestu.",
    benefits: [
      "Pregled zasedenosti po dnevih",
      "Analiza no-show in odpovedi",
      "Najbolj iskane storitve",
      "Primerjava obdobij",
    ],
    audience:
      "Za podjetja, ki želijo odločati na podlagi podatkov.",
  },
  {
    id: "komunikacija",
    title: "Komunikacija",
    shortDescription: "AI generira personalizirana sporočila za vsako stranko hkrati.",
    intro:
      "Komunikacija je orodje za hitro množično obveščanje strank. AI za vsako stranko pripravi personalizirano sporočilo — vi le določite vsebino in kliknete pošlji. Predstavljajte si: zbolite en dan in morate odpovedati vseh 15 terminov. Namesto da pišete vsakemu posebej, Jedro+ v enem kliku vsem pošlje personalizirano sporočilo z opravičilom in predlogom novega termina.",
    benefits: [
      "AI pripravi personalizirano sporočilo za vsako stranko posebej",
      "Hkratno obveščanje 10, 20 ali več strank naenkrat",
      "Primerno za odpovedi, novosti, posebne ponudbe ali obvestila",
      "Pošiljanje po e-pošti ali SMS-u",
      "Prihranek časa pri ročnem pisanju sporočil",
      "Profesionalno in hitro — vsi obveščeni v enem kliku",
    ],
    audience:
      "Za vsako podjetje, ki želi hitro in profesionalno obvestiti stranke — ob odpovedi, spremembi urnika, posebni ponudbi ali kateremkoli obvestilu.",
  },
];
