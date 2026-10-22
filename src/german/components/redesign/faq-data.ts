// Generated from Slovenian source and src/locales/de.json.
import { receptionistPricingAnswer, receptionistUsageFaq } from "@/german/lib/receptionist";

// FAQ content for the redesign pages. Answers are written in natural language,
// 2–4 sentences, so they read well and are quotable. Panoga-specific FAQs live
// on each Panoga in panoge-data.ts.

export type FaqItem = { q: string; a: string };

export const homeFaq: FaqItem[] = [
  {
    q: "Wann können wir Jedro+ nutzen?",
    a: "Sofort. Erstelle ein Konto, gib Unternehmensdaten ein und das System ist in Minuten bereit. Wir helfen beim Import bestehender Kundendaten, damit du direkt Buchungen annehmen kannst.",
  },
  {
    q: "Sind die Erinnerungen wirklich persönlich?",
    a: "Ja. KI erstellt jede Nachricht einzeln und berücksichtigt Leistung, Termin, Mitarbeiter und deinen Ton. Kunden erhalten eine persönliche Nachricht zur richtigen Zeit, ohne deinen Zeitaufwand.",
  },
  {
    q: "Unterstützt Jedro+ E-Mail- und SMS-Erinnerungen?",
    a: "Ja. E-Mail-Erinnerungen sind in allen kostenpflichtigen Tarifen enthalten. SMS sind in Jedro Pro mit 250 SMS pro Monat und in Enterprise enthalten. In Plus kannst du SMS nachkaufen, ab 4 € für 50 SMS. Erinnerungen gehen automatisch vor und nach Terminen heraus.",
  },
  {
    q: "Was sind „inaktive Kunden“ und wie hilft das?",
    a: "Die Funktion erkennt Kunden, die länger nicht da waren, und lädt sie automatisch wieder ein. So füllst du freie Termine und gewinnst Umsatz zurück.",
  },
  {
    q: "Wie werden Daten geschützt?",
    a: "Daten werden sicher gespeichert, Zugriffe beschränkt und gute Sicherheitspraktiken sowie DSGVO-Anforderungen berücksichtigt. Deine Daten und Kundendaten bleiben vertraulich und unter deiner Kontrolle.",
  },
  {
    q: "Was kostet Jedro+ und kann ich kostenlos starten?",
    a: "Starte mit Free, dauerhaft kostenlos. Jedro Plus kostet 19 € monatlich oder 180 € jährlich, entsprechend 15 € pro Monat. Receptionist+-Minuten wird separat gekauft. Vergleiche alle Tarife und Optionen auf der Preisseite.",
  },
];

export const agencijaFaq: FaqItem[] = [
  {
    q: "Was bietet die Jedro+ Agentur?",
    a: "Wir entwickeln Unternehmenssysteme, Kommunikationssysteme und Websites für Dienstleister. Alles basiert auf KI und kommt aus einem Team, vom System bis zur Website.",
  },
  {
    q: "Wie schnell entwickelt ihr ein System oder eine Website?",
    a: "Wir rechnen in Tagen und Wochen. Dein Unternehmen startet schnell, mit Qualität in jedem Schritt.",
  },
  {
    q: "Was unterscheidet die Jedro+ Agentur?",
    a: "Wir sind auf Dienstleister spezialisiert und verstehen Termine, Kunden und den Arbeitsalltag. Unsere KI-Lösungen arbeiten intelligenter, schneller und automatischer.",
  },
  {
    q: "Könnt ihr alles in einem System verbinden?",
    a: "Ja. Betrieb, Kommunikation und Onlinepräsenz kommen auf einer Plattform zusammen, von Terminen und Kunden bis zu Buchungen, Nachrichten und Berichten.",
  },
];

export const cenikFaq: FaqItem[] = [
  { q: "Ist die Mehrwertsteuer in den Preisen enthalten?", a: "Nein. Alle angezeigten Preise sind in Euro (EUR), zzgl. MwSt. Das gilt für Abonnements und Minutenpakete für Receptionist+." },
  {
    q: "Wie viel zahle ich bei jährlicher Abrechnung tatsächlich?",
    a: "Für ein ganzes Jahr Jedro Plus zahlst du 180 € (entspricht 15 € pro Monat), für Jedro Pro 336 € (entspricht 28 € pro Monat). Der Monatsbetrag bei jährlicher Abrechnung dient dem Kostenvergleich und ist keine monatliche Zahlung. Gegenüber zwölf monatlichen Zahlungen sparst du 48 € bei Plus bzw. 84 € bei Pro.",
  },
  {
    q: "Was enthält Free und wann lohnt sich ein kostenpflichtiger Tarif?",
    a: "Free enthält Kalender, Termine und Kunden, unbegrenzte Leistungen und Mitarbeiter, einen App-Benutzer, den Kundenimport aus Excel und einen einmaligen Test der SMS- und E-Mail-Erinnerungen. Für Online-Buchung, Analysen und regelmäßige personalisierte Erinnerungen wählst du Jedro Plus oder Pro.",
  },
  {
    q: "Welche SMS- und E-Mail-Kontingente sind enthalten?",
    a: "Jedro Plus enthält 500 E-Mails pro Monat; SMS-Pakete gibt es ab 4 € für 50 SMS. Jedro Pro enthält 2.000 E-Mails und 250 SMS pro Monat. Bei Enterprise werden die Kontingente individuell vereinbart. Gesprächsminuten für Receptionist+ sind davon getrennt.",
  },
  {
    q: "Kann ich Jedro+ kostenlos testen?",
    a: "Ja. Starte ohne Kreditkarte und erweitere, wenn du bereit bist. Wir zeigen dir Jedro+ auch in einer 15-minütigen Demo.",
  },
  {
    q: "Was kosten die Tarife?",
    a: "Free bleibt kostenlos. Jedro Plus kostet 19 € monatlich, Jedro Pro 35 €; bei jährlicher Zahlung entsprechend 15 € und 28 € pro Monat. Enterprise ist auf Anfrage erhältlich. Alle kostenpflichtigen Tarife enthalten Datenbanken, Kalender, Onlinebuchung und Auswertungen.",
  },
  {
    q: "Was unterscheidet Plus und Pro?",
    a: "Plus bietet Kalender, Datenbanken und Erinnerungen für klare Übersicht. Pro ergänzt Nachrichten an inaktive Kunden, SMS-Erinnerungen und erweiterte Kommunikation für höhere Auslastung.",
  },
  {
    q: "Gibt es eine Bindung und wie kündige ich?",
    a: "Wähle monatliche oder jährliche Abrechnung. Der Jahresbetrag wird für das ganze Jahr bezahlt; der angezeigte Monatspreis ist der rechnerische Anteil. Kündige in der App gemäß Nutzungsbedingungen.",
  },
];

const receptionistPricingFaq: FaqItem = {
  q: "Ist Receptionist+ im Abonnement enthalten?",
  a: receptionistPricingAnswer,
};

homeFaq.push(receptionistPricingFaq);
cenikFaq.push(receptionistPricingFaq);

cenikFaq.push(...receptionistUsageFaq);

const europeanAvailabilityFaq: FaqItem[] = [
  { q: "Können wir Jedro+ außerhalb Sloweniens nutzen?", a: "Ja. Jedro+ ist für Dienstleistungsbetriebe in der Europäischen Union verfügbar. Wir stimmen die Einrichtung auf Leistungen, Team und Arbeitsabläufe ab. Die Fiskalkasse mit FURS-Rechnungsbestätigung ist ein separates Modul für Slowenien." },
  { q: "Könnt ihr Jedro+ an eine weitere Sprache anpassen?", a: "Ja, weitere Sprachanpassungen sind nach Vereinbarung möglich. Die Website gibt es derzeit auf Slowenisch, Englisch, Italienisch und Deutsch; die App auf Slowenisch und Englisch. Sprache und Umfang stimmen wir vor der Einführung unter info@jedroplus.com ab." },
];
homeFaq.push(...europeanAvailabilityFaq);
cenikFaq.push(...europeanAvailabilityFaq);
