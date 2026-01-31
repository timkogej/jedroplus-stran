export type IndustryItem = {
  id: string;
  title: string;
  intro: string;
  benefits: string[];
  scenario: string;
};

export const industries: IndustryItem[] = [
  {
    id: "saloni",
    title: "Kozmetični, frizerski in barber saloni",
    intro:
      "Jedro+ poskrbi za urejene termine, jasne opomnike in ponovne obiske brez dodatnega ročnega dela.",
    benefits: [
      "Manj no-show in odpovedi s personaliziranimi opomniki",
      "Koledar po izvajalcih in storitvah",
      "Follow-up z navodili po storitvi",
      "Povabilo k ponovnemu obisku ali oceni",
    ],
    scenario:
      "Stranka prejme opomnik dan pred obiskom, po storitvi pa zahvalo z navodili in povabilom na naslednji termin.",
  },
  {
    id: "klinike",
    title: "Zobne, estetske in medicinske klinike",
    intro:
      "Zanesljiv urnik, jasna navodila in varna komunikacija s pacienti v enem sistemu.",
    benefits: [
      "Navodila pred posegi in priprava na termin",
      "Follow-up po storitvi z navodili za nego",
      "Pregledna evidenca pacientov in terminov",
      "Manj zamud in odpovedi",
    ],
    scenario:
      "Pacient prejme opomnik z navodili pred posegom, po obisku pa priporočila za nego in kontrolni termin.",
  },
  {
    id: "wellness",
    title: "Masažni in wellness studii, fizioterapija",
    intro:
      "Jedro+ pomaga ohranjati poln urnik in boljše ponovne obiske z jasnimi opomniki.",
    benefits: [
      "Urejeni urniki terapevtov",
      "Navodila po storitvi za boljše rezultate",
      "Hitro naročanje s booking linkom",
      "Povečanje ponovnih terminov",
    ],
    scenario:
      "Po terapiji stranka prejme priporočila za vaje in predlog za naslednji obisk v pravem času.",
  },
  {
    id: "fitnes",
    title: "Fitnesi, osebni trenerji, joga/pilates",
    intro:
      "Termini, vadbe in opomniki so usklajeni, zato je manj izpadov in več rednih obiskov.",
    benefits: [
      "Opomniki za treninge in vadbe",
      "Pregled zasedenosti trenerjev",
      "Enostavno naročanje prek povezave",
      "Analitika obiska in trendov",
    ],
    scenario:
      "Trener pošlje opomnik za trening, stranka pa po vadbi prejme povabilo na naslednji termin.",
  },
  {
    id: "servisi",
    title: "Avtoservisi, vulkanizerji, čistilni servisi",
    intro:
      "Urejeni termini, manj zgrešenih prihodov in boljša organizacija ekipe.",
    benefits: [
      "Jasni termini po trajanju storitev",
      "Opomniki s pripravo pred obiskom",
      "Evidenca strank in zgodovine storitev",
      "Follow-up za ponovne servise",
    ],
    scenario:
      "Stranka prejme opomnik za servis z navodili, po storitvi pa priporočilo za naslednji pregled.",
  },
  {
    id: "svetovanje",
    title: "Svetovalne, coaching in terapevtske storitve",
    intro:
      "Jedro+ pomaga pri rednih seansah, opomnikih in jasnem vodenju strank.",
    benefits: [
      "Opomniki za srečanja in seanse",
      "Zapiski in zgodovina terminov",
      "Personalizirana komunikacija",
      "Več rednih obiskov",
    ],
    scenario:
      "Klient prejme opomnik z morebitnimi pripravljalnimi vprašanji in po srečanju povzetek naslednjih korakov.",
  },
  {
    id: "agencije",
    title: "IT in poslovne storitve, agencije",
    intro:
      "Bolje organizirani sestanki, jasni opomniki in centralna evidenca strank.",
    benefits: [
      "Urejeni termini in sestanki",
      "Evidenca strank in storitev",
      "Hitro usklajevanje z booking linkom",
      "Pregled nad aktivnostmi",
    ],
    scenario:
      "Pred sestankom stranka prejme opomnik, po sestanku pa povzetek dogovorov.",
  },
  {
    id: "ostalo",
    title: "Ostala storitvena podjetja",
    intro:
      "Jedro+ je prilagodljiv za vse panoge, kjer so termini in komunikacija ključni.",
    benefits: [
      "Prilagodljive storitve in urniki",
      "Personalizirani opomniki",
      "Centralna evidenca strank",
      "Več ponovnih obiskov",
    ],
    scenario:
      "Podjetje pošlje opomnik stranki, sistem pa sam predlaga naslednji termin ob pravem času.",
  },
];
