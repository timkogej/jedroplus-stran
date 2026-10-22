// Shared pricing for visible plans and structured data.
export interface Tier {
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  subtitle: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaLabel: string;
  ctaHref?: string;
}

export const subscriptionPlans: Tier[] = [
  {
    name: "Free",
    monthlyPrice: "0 €",
    yearlyPrice: "0 €",
    subtitle: "Za začetek: osnovni koledar in stranke, brezplačno za vedno",
    description: "Koledar, termini in stranke za samostojne začetnike.",
    features: [
      "Koledar, termini in stranke",
      "Storitve in osebje brez omejitev",
      "1 uporabnik aplikacije",
      "Uvoz strank iz Excela",
      "Enkratni preizkus opomnikov (SMS in email)",
    ],
    ctaLabel: "Začni brezplačno",
    ctaHref: "https://app.jedroplus.com/signup",
  },
  {
    name: "Jedro Plus",
    monthlyPrice: "19 €",
    yearlyPrice: "15 €",
    subtitle: "Za podjetja, ki želijo urejen sistem in jasen pregled",
    description: "Koledar, baze in opomniki, ki brez zapletov uredijo vsakdan.",
    features: [
      "Baza strank in terminov",
      "Baza storitev in osebja",
      "Personalizirani opomniki pred in po terminu",
      "Email pošiljanje (500 email/mesec)",
      "SMS opomniki z dokupom SMS paketov (od 4 € za 50 SMS)",
      "Komunikacija",
      "Celotna analitika",
      "Spletno naročanje",
      "Različni dizajni spletnega naročanja",
    ],
    ctaLabel: "Izberi paket",
  },
  {
    name: "Jedro Pro",
    monthlyPrice: "35 €",
    yearlyPrice: "28 €",
    subtitle: "Za podjetja, ki želijo več zasedenosti in manj praznih terminov",
    description:
      "Vključuje obveščanje izgubljenih strank, SMS opomnike in napredne komunikacijske funkcije.",
    features: [
      "Vse iz Jedro Plus",
      "Obveščanje izgubljenih strank",
      "SMS pošiljanje (250 sms/mesec)",
      "Email pošiljanje (2000 email/mesec)",
      "Dodatni dizajni spletnega naročanja",
    ],
    popular: true,
    ctaLabel: "Izberi paket",
  },
  {
    name: "Enterprise",
    monthlyPrice: "Po dogovoru",
    yearlyPrice: "Po dogovoru",
    subtitle: "Za podjetja s posebnimi zahtevami in prilagoditvami",
    description:
      "Prilagodimo custom dizajne, custom funkcije in celoten sistem vašemu poslovanju.",
    features: [
      "Custom AI funkcije (chatbot, asistent, receptionist in več)",
      "Custom booking dizajni z obdelavo slik in naprednimi elementi",
      "Avtomatizacije poslovnih procesov po meri",
      "SMS in Email kvota po meri",
      "Dedicirani manager in prioritetna podpora",
    ],
    ctaLabel: "Pošlji povpraševanje",
    ctaHref: "mailto:info@jedroplus.com?subject=Povpra%C5%A1evanje%20Enterprise",
  },
];

// Reviewed plan limits; columns follow subscriptionPlans order.
export const planComparisonRows = [
  { label: "Koledar, termini in stranke", values: ["Vključeno", "Vključeno", "Vključeno", "Po dogovoru"] },
  { label: "Spletno naročanje in analitika", values: ["Ni vključeno", "Vključeno", "Vključeno", "Po dogovoru"] },
  { label: "Personalizirani opomniki", values: ["Enkratni preizkus", "Pred in po terminu", "Pred in po terminu", "Po dogovoru"] },
  { label: "E-mail sporočila", values: ["Enkratni preizkus", "500 na mesec", "2.000 na mesec", "Količina po meri"] },
  { label: "SMS sporočila", values: ["Enkratni preizkus", "Dokup: od 4 € za 50 SMS", "250 na mesec", "Količina po meri"] },
  { label: "Obveščanje izgubljenih strank", values: ["Ni vključeno", "Ni vključeno", "Vključeno", "Po dogovoru"] },
  { label: "Minute za Receptionist+", values: ["Ločen nakup", "Ločen nakup", "Ločen nakup", "Ločen nakup"] },
];

export const PRICING_TAX_NOTE = "Vse cene so v EUR, brez DDV.";
