// Generated from Slovenian source and src/locales/it.json.
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
    subtitle: "Per iniziare: calendario e clienti di base, gratis per sempre",
    description: "Calendario, appuntamenti e clienti per professionisti agli inizi.",
    features: [
      "Calendario, appuntamenti e clienti",
      "Servizi e personale illimitati",
      "1 utente dell’app",
      "Importazione clienti da Excel",
      "Prova una tantum dei promemoria (SMS ed email)",
    ],
    ctaLabel: "Inizia gratis",
    ctaHref: "https://app.jedroplus.com/signup",
  },
  {
    name: "Jedro Plus",
    monthlyPrice: "14,90 €",
    yearlyPrice: "11,90 €",
    subtitle: "Per attività che cercano un sistema ordinato e una panoramica chiara",
    description: "Calendario, database e promemoria per semplificare la giornata.",
    features: [
      "Database clienti e appuntamenti",
      "Database servizi e personale",
      "Promemoria personalizzati prima e dopo l’appuntamento",
      "Invio email (500 email/mese)",
      "Promemoria SMS con pacchetti opzionali (da 4 € per 50 SMS)",
      "Comunicazione",
      "Statistiche complete",
      "Prenotazioni online",
      "Diversi design per le prenotazioni online",
    ],
    ctaLabel: "Scegli il piano",
  },
  {
    name: "Jedro Pro",
    monthlyPrice: "29,90 €",
    yearlyPrice: "24,90 €",
    subtitle: "Per chi vuole più occupazione e meno spazi vuoti",
    description:
      "Include notifiche ai clienti inattivi, promemoria SMS e comunicazioni avanzate.",
    features: [
      "Tutto ciò che include Jedro Plus",
      "Notifiche ai clienti inattivi",
      "Invio SMS (250 SMS/mese)",
      "Invio email (2.000 email/mese)",
      "Design aggiuntivi per prenotazioni online",
    ],
    popular: true,
    ctaLabel: "Scegli il piano",
  },
  {
    name: "Enterprise",
    monthlyPrice: "Su richiesta",
    yearlyPrice: "Su richiesta",
    subtitle: "Per attività con esigenze e personalizzazioni specifiche",
    description:
      "Adattiamo design, funzioni e l’intero sistema alla tua attività.",
    features: [
      "Funzioni AI personalizzate (receptionist e altro)",
      "Design di prenotazione su misura con elaborazione immagini ed elementi avanzati",
      "Automazioni dei processi aziendali su misura",
      "Quote SMS ed email personalizzate",
      "Responsabile dedicato e assistenza prioritaria",
    ],
    ctaLabel: "Invia una richiesta",
    ctaHref: "mailto:info@jedroplus.com?subject=Richiesta%20Enterprise",
  },
];

// Reviewed plan limits; columns follow subscriptionPlans order.
export const planComparisonRows = [
  { label: "Calendario, appuntamenti e clienti", values: ["Incluso", "Incluso", "Incluso", "Su richiesta"] },
  { label: "Prenotazioni online e analisi", values: ["Non incluso", "Incluso", "Incluso", "Su richiesta"] },
  { label: "Promemoria personalizzati", values: ["Prova una tantum", "Prima e dopo l’appuntamento", "Prima e dopo l’appuntamento", "Su richiesta"] },
  { label: "Messaggi e-mail", values: ["Prova una tantum", "500 al mese", "2.000 al mese", "Quantità personalizzata"] },
  { label: "Messaggi SMS", values: ["Prova una tantum", "Acquisto aggiuntivo: da 4 € per 50 SMS", "250 al mese", "Quantità personalizzata"] },
  { label: "Nome mittente SMS personalizzato", values: ["Non incluso", "Non incluso", "Acquisto aggiuntivo: 4,90 € al mese", "Su richiesta"] },
  { label: "Notifiche ai clienti inattivi", values: ["Non incluso", "Non incluso", "Incluso", "Su richiesta"] },
  { label: "Minuti per Receptionist+", values: ["Acquisto separato", "Acquisto separato", "Acquisto separato", "Acquisto separato"] },
];

export const PRICING_TAX_NOTE = "Tutti i prezzi sono in EUR, IVA esclusa.";
