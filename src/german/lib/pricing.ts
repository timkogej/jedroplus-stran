// Generated from Slovenian source and src/locales/de.json.
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
    subtitle: "Starte mit einem einfachen Kalender und Kundenverwaltung, dauerhaft kostenlos",
    description: "Kalender, Termine und Kunden für Selbstständige beim Einstieg.",
    features: [
      "Kalender, Termine und Kunden",
      "Unbegrenzte Leistungen und Mitarbeiter",
      "1 App-Nutzer",
      "Kundenimport aus Excel",
      "Einmaliger Test der Erinnerungen (SMS und E-Mail)",
    ],
    ctaLabel: "Kostenlos starten",
    ctaHref: "https://app.jedroplus.com/signup",
  },
  {
    name: "Jedro Plus",
    monthlyPrice: "19 €",
    yearlyPrice: "15 €",
    subtitle: "Für Unternehmen, die ein geordnetes System und einen klaren Überblick suchen",
    description: "Kalender, Datenbanken und Erinnerungen für einen einfacheren Alltag.",
    features: [
      "Kunden- und Termindatenbank",
      "Leistungs- und Mitarbeiterdatenbank",
      "Personalisierte Erinnerungen vor und nach Terminen",
      "E-Mail-Versand (500 E-Mails/Monat)",
      "SMS-Erinnerungen mit optionalen Paketen (ab 4 € für 50 SMS)",
      "Kommunikation",
      "Vollständige Auswertungen",
      "Onlinebuchung",
      "Verschiedene Designs für die Onlinebuchung",
    ],
    ctaLabel: "Tarif wählen",
  },
  {
    name: "Jedro Pro",
    monthlyPrice: "35 €",
    yearlyPrice: "28 €",
    subtitle: "Für Unternehmen, die mehr Auslastung und weniger freie Termine möchten",
    description:
      "Enthält Benachrichtigungen für inaktive Kunden, SMS-Erinnerungen und erweiterte Kommunikationswerkzeuge.",
    features: [
      "Alles aus Jedro Plus",
      "Benachrichtigungen für inaktive Kunden",
      "SMS-Versand (250 SMS/Monat)",
      "E-Mail-Versand (2.000 E-Mails/Monat)",
      "Zusätzliche Designs für die Onlinebuchung",
    ],
    popular: true,
    ctaLabel: "Tarif wählen",
  },
  {
    name: "Enterprise",
    monthlyPrice: "Auf Anfrage",
    yearlyPrice: "Auf Anfrage",
    subtitle: "Für Unternehmen mit besonderen Anforderungen und individuellem Anpassungsbedarf",
    description:
      "Wir passen Designs, Funktionen und das gesamte System an dein Unternehmen an.",
    features: [
      "Individuelle KI-Funktionen (Chatbot, Assistent, Rezeptionist und mehr)",
      "Individuelle Buchungsdesigns mit Bildbearbeitung und erweiterten Elementen",
      "Individuelle Automatisierung von Geschäftsprozessen",
      "Individuelle SMS- und E-Mail-Kontingente",
      "Persönlicher Ansprechpartner und bevorzugter Support",
    ],
    ctaLabel: "Anfrage senden",
    ctaHref: "mailto:info@jedroplus.com?subject=Enterprise-Anfrage",
  },
];

// Reviewed plan limits; columns follow subscriptionPlans order.
export const planComparisonRows = [
  { label: "Kalender, Termine und Kunden", values: ["Enthalten", "Enthalten", "Enthalten", "Auf Anfrage"] },
  { label: "Online-Buchung und Analysen", values: ["Nicht enthalten", "Enthalten", "Enthalten", "Auf Anfrage"] },
  { label: "Personalisierte Erinnerungen", values: ["Einmaliger Test", "Vor und nach dem Termin", "Vor und nach dem Termin", "Auf Anfrage"] },
  { label: "E-Mail-Nachrichten", values: ["Einmaliger Test", "500 pro Monat", "2.000 pro Monat", "Individuelles Kontingent"] },
  { label: "SMS-Nachrichten", values: ["Einmaliger Test", "Zukauf: ab 4 € für 50 SMS", "250 pro Monat", "Individuelles Kontingent"] },
  { label: "Benachrichtigungen für inaktive Kunden", values: ["Nicht enthalten", "Nicht enthalten", "Enthalten", "Auf Anfrage"] },
  { label: "Minuten für Receptionist+", values: ["Separater Kauf", "Separater Kauf", "Separater Kauf", "Separater Kauf"] },
];

export const PRICING_TAX_NOTE = "Alle Preise in EUR, zzgl. MwSt.";
