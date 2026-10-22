// Generated from Slovenian source and src/locales/de.json.
// Shared by the product page, the pricing page and structured data.
export const RECEPTIONIST_PATH = "/de/funktionen/receptionist-plus";
export const RECEPTIONIST_APP_URL = "https://app.jedroplus.com/receptionist-plus";
export const RECEPTIONIST_TRIAL_CREDITS = 30;
export const RECEPTIONIST_CREDITS_PER_MINUTE = 1;
export const RECEPTIONIST_GREETING = "Salon Luna, guten Tag! Ich bin die digitale Assistentin des Salons. Wie kann ich Ihnen helfen?";

export const receptionistPacks = [
  { name: "Starter", credits: 100, price: 15, description: "Für die ersten Anrufe und gelegentliche Nutzung." },
  { name: "Standard", credits: 300, price: 39, description: "Für Unternehmen, bei denen das Telefon täglich klingelt." },
  { name: "Professional", credits: 750, price: 89, description: "Für mehr Gespräche und ein größeres Team." },
];

export function receptionistMinuteRate(pack: { price: number; credits: number }) {
  return new Intl.NumberFormat("de-DE", { minimumFractionDigits: 3, maximumFractionDigits: 3 }).format(pack.price / pack.credits);
}

export const receptionistPricingAnswer = `Wähle aus unseren Paketen mit Gesprächsminuten. ${receptionistPacks.map((pack) => `Das Paket ${pack.name} enthält ${pack.credits} Minuten für ${pack.price} €`).join(". ")}. Bei der ersten Aktivierung erhältst du ${RECEPTIONIST_TRIAL_CREDITS} kostenlose Testminuten. Gesprächsminuten werden separat vom Jedro+ Abonnement gekauft. Preise zzgl. MwSt.`;

export const receptionistUsageFaq = [
  { q: "Verfallen die Minuten für Receptionist+?", a: "Nein. Gekaufte Minuten für Receptionist+ verfallen nicht. Sie bleiben für künftige Anrufe auf deinem Konto und können nach Bedarf deines Unternehmens genutzt werden." },
  { q: "Wie wird ein Anruf von weniger als einer Minute abgerechnet?", a: "Der Verbrauch wird anteilig nach Gesprächsdauer berechnet. Ein Gespräch von 30 Sekunden verbraucht zum Beispiel 0,5 Minuten aus dem Paket, eines von 90 Sekunden 1,5 Minuten. Den Verbrauch kannst du in der Jedro+ App verfolgen." },
  { q: "Bekommt jedes Unternehmen eine eigene Telefonnummer?", a: "Ja. Jedes Unternehmen erhält eine eigene Telefonnummer für Receptionist+. Unser Team unter info@jedroplus.com hilft bei der Telefonanbindung und prüft die Einstellungen deiner Nummer." },
];

export const receptionistFaq = [
  { q: "Was ist Receptionist+?", a: "Receptionist+ ist die KI-Rezeptionistin in Jedro+. Sie nimmt Anrufe in der Sprache des Kunden entgegen, bucht, verschiebt oder storniert Termine, beantwortet Fragen, sendet Erinnerungen und dokumentiert Vereinbarungen. Sie hilft Dienstleistungsbetrieben, Unterbrechungen zu reduzieren und telefonische Buchungen zu organisieren." },
  { q: "Welche Sprache spricht sie?", a: "Receptionist+ spricht die Sprache des Kunden, damit jede Person entspannt kommunizieren, einen Termin vereinbaren oder eine Antwort erhalten kann." },
  { q: "Wie viel kostet eine Gesprächsminute?", a: receptionistPricingAnswer },
  { q: "Kaufe ich Minuten oder ein Receptionist+ Abonnement?", a: "Die Pakete mit 100, 300 und 750 Minuten sind einmalige Käufe von Gesprächsminuten, getrennt vom Jedro+ Abonnement. Wähle ein Paket passend zu deinem Gesprächsvolumen und kaufe bei Bedarf weitere Minuten. Für die Aktivierung brauchst du ein Jedro+ Konto." },
  { q: "Werden Termine automatisch in Jedro+ eingetragen?", a: "Ja. Receptionist+ ist mit deinem Jedro+-Kalender verbunden und kann telefonisch vereinbarte Termine direkt im System anlegen. Das Anrufprotokoll ist ebenfalls mit dem Termin verknüpft." },
  { q: "Kann sie Termine auch verschieben oder stornieren?", a: "Ja. Auf Wunsch des Kunden kann Receptionist+ eine neue Buchung anlegen, einen bestehenden Termin auf einen anderen freien Zeitpunkt verschieben oder ihn stornieren. Änderungen werden in deinem Jedro+-Kalender erfasst." },
  { q: "Kann sie eine Erinnerung senden?", a: "Ja. Receptionist+ kann eine Erinnerung für einen vereinbarten Termin senden. Termine, Änderungen und Kommunikation bleiben in Jedro+ verbunden." },
  { q: "Kann ich Gespräche und Verbrauch einsehen?", a: "Ja. Das Anrufprotokoll zeigt Zeitpunkt, Dauer, verbrauchte Minuten und Ergebnis. Wenn verfügbar, zeigt es auch eine Gesprächsmitschrift und verlinkt den angelegten Termin." },
  { q: "Kann ich die KI-Rezeptionistin ausschalten?", a: "Ja. In den Einstellungen kannst du Receptionist+ ein- oder ausschalten, die Begrüßung bearbeiten und den Schwellenwert für die Warnung bei wenigen verbleibenden Minuten festlegen." },
  { q: "Wie starte ich und verbinde eine Telefonnummer?", a: "Öffne Receptionist+ in deinem Jedro+ Konto und aktiviere es. Bei der ersten Aktivierung erhältst du 30 kostenlose Testminuten. Jedes Unternehmen bekommt eine eigene Telefonnummer; für die Telefonanbindung und Einstellungsprüfung schreibe an info@jedroplus.com." },
  { q: "Wie richten wir Receptionist+ in einem anderen EU-Land ein?", a: "Jedro+ ist für Unternehmen in der EU verfügbar. Bei der Aktivierung von Receptionist+ prüfen wir die Rufnummernverfügbarkeit und Telefonie-Einstellungen für dein Land. Teile uns Land und Sprache unter info@jedroplus.com mit." },
  ...receptionistUsageFaq,
];
