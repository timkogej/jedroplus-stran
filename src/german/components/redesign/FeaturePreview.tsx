// Generated from Slovenian source and src/locales/de.json.
import { CalendarCheck2, Check, Clock3, LayoutGrid, MessageSquareText, QrCode, Sparkles, Tag, UsersRound } from "lucide-react";

const previews = {
  "sms-erinnerungen": { icon: MessageSquareText, title: "Die richtige Zeit. Die richtige Nachricht.", label: "Terminerinnerung", rows: [["Kunde", "Ana"], ["Termin", "Donnerstag, 14:30 Uhr"], ["Leistung", "Haarschnitt"]], message: "Hallo Ana! Dein Haarschnitt ist morgen um 14:30 Uhr. Wir freuen uns auf dich.", result: "Erinnerung mit dem Termin verbunden" },
  "online-terminbuchung": { icon: CalendarCheck2, title: "Dein nächster Besuch.", label: "Onlinebuchung", rows: [["Leistung auswählen", "Haarschnitt"], ["Mitarbeiter", "Maja"], ["Freier Termin", "Donnerstag, 14:30 Uhr"]], message: "Der Kunde wählt Leistung, Mitarbeiter und Uhrzeit. Die Buchung erscheint in deinem Kalender.", result: "Von der Auswahl zur Buchung" },
  "crm-kundendatenbank": { icon: UsersRound, title: "Jeder Kunde hat eine Geschichte.", label: "Kundenkarte", rows: [["Kunde", "Ana"], ["Letzter Besuch", "Haarschnitt"], ["Notiz", "Bevorzugt Nachmittagstermine"]], message: "Kontakte, Besuchsverlauf und wichtige Notizen bleiben an einem Ort.", result: "Mit dem Besuchsverlauf verbunden" },
  "ki-kommunikation": { icon: Sparkles, title: "Worte in deinem Ton.", label: "KI-Kommunikation", rows: [["Nachrichtenart", "Dank nach dem Besuch"], ["Ton", "Persönlich und freundlich"], ["Empfängerin", "Ana"]], message: "Ana, danke für deinen Besuch heute! Schön, dass du dir Zeit für dich genommen hast. Bis zum nächsten Termin.", result: "Auf Kunde und Leistung abgestimmt" },
  "aktionen-rabatte": { icon: Tag, title: "Ein Angebot im richtigen Moment.", label: "Beispielaktion", rows: [["Aktion", "Nachmittagsangebot"], ["Leistung", "Gewählte Leistung"], ["Beispielrabatt", "10 %"]], message: "Lege Regeln, Leistungen und Gültigkeitszeitraum der Aktion fest.", result: "Deine Regeln, dein Angebot" },
  "ressourcen": { icon: LayoutGrid, title: "Auch Räume brauchen einen Plan.", label: "Räume und Geräte", rows: [["Termin", "Massage, 14:30 Uhr"], ["Mitarbeiterin", "Maja"], ["Raum", "Behandlungsraum 1"]], message: "Plane Termine mit Mitarbeitern, Räumen und benötigten Geräten.", result: "Ressourcen mit dem Termin verbunden" },
  "terminanfragen": { icon: Clock3, title: "Kunden fragen an. Du bestätigst.", label: "Terminanfrage", rows: [["Kunde", "Ana"], ["Leistung", "Beratung"], ["Wunschzeit", "Donnerstagnachmittag"]], message: "Prüfe den Kundenwunsch und bestätige eine Uhrzeit, die in deinen Kalender passt.", result: "Prüfung vor Bestätigung" },
  "qr-codes-buchungsdesigns": { icon: QrCode, title: "Deine Marke. Dein Buchungserlebnis.", label: "Buchungsdesigns und QR-Codes", rows: [["Gestaltung", "In deinen Markenfarben"], ["Kanal", "Website, Instagram oder Empfang"], ["Ziel", "Deine Buchungsseite"]], message: "Teile einen Link oder drucke einen QR-Code zur Onlinebuchung.", result: "Ein kürzerer Weg zum nächsten Termin" },
};

export function FeaturePreview({ slug }: { slug: string }) {
  const preview = previews[slug as keyof typeof previews];
  if (!preview) return null;
  const Icon = preview.icon;
  return (
    <figure className="feature-preview">
      <div className="feature-preview__brand"><span>Jedro+</span><small>{preview.label}</small></div>
      <div className="feature-preview__body"><span className="feature-preview__icon"><Icon size={30} strokeWidth={1.4} aria-hidden="true" /></span><p className="feature-preview__title">{preview.title}</p><dl>{preview.rows.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><p className="feature-preview__message">{preview.message}</p><div className="feature-preview__result"><Check size={16} aria-hidden="true" />{preview.result}</div></div>
      <figcaption>Illustration mit Beispieldaten.</figcaption>
    </figure>
  );
}
