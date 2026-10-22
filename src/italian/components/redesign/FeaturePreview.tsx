// Generated from Slovenian source and src/locales/it.json.
import { CalendarCheck2, Check, Clock3, LayoutGrid, MessageSquareText, QrCode, Sparkles, Tag, UsersRound } from "lucide-react";

const previews = {
  "promemoria-sms": { icon: MessageSquareText, title: "Il momento giusto. Il messaggio giusto.", label: "Promemoria appuntamento", rows: [["Cliente", "Ana"], ["Appuntamento", "Giovedì, 14:30"], ["Servizio", "Taglio"]], message: "Ciao Ana! Il tuo appuntamento per il taglio è domani alle 14:30. Ti aspettiamo!", result: "Promemoria collegato all’appuntamento" },
  "prenotazioni-online": { icon: CalendarCheck2, title: "La tua prossima visita.", label: "Prenotazioni online", rows: [["Scegli un servizio", "Taglio"], ["Operatore", "Maja"], ["Orario disponibile", "Giovedì, 14:30"]], message: "Il cliente sceglie servizio, operatore e orario. La prenotazione compare nel tuo calendario.", result: "Dalla scelta alla prenotazione" },
  "crm-clienti": { icon: UsersRound, title: "Ogni cliente ha una storia.", label: "Scheda cliente", rows: [["Cliente", "Ana"], ["Ultima visita", "Taglio"], ["Nota", "Preferisce appuntamenti pomeridiani"]], message: "Contatti, storico visite e note importanti rimangono in un unico posto.", result: "Collegato allo storico visite" },
  "comunicazione-ai": { icon: Sparkles, title: "Parole con il tuo tono.", label: "Comunicazione AI", rows: [["Tipo di messaggio", "Ringraziamento dopo la visita"], ["Tono", "Personale e cordiale"], ["Destinataria", "Ana"]], message: "Ana, grazie della visita di oggi! Siamo felici che tu abbia dedicato del tempo a te stessa. Ci vediamo al prossimo appuntamento.", result: "Personalizzato per cliente e servizio" },
  "promozioni-sconti": { icon: Tag, title: "Un’offerta al momento giusto.", label: "Esempio di promozione", rows: [["Promozione", "Offerta pomeridiana"], ["Servizio", "Servizio selezionato"], ["Sconto nell’esempio", "10 %"]], message: "Imposta regole, servizi interessati e periodo di validità della promozione.", result: "Le tue regole, la tua offerta" },
  "risorse": { icon: LayoutGrid, title: "Anche gli spazi hanno un’agenda.", label: "Sale e attrezzature", rows: [["Appuntamento", "Massaggio, 14:30"], ["Operatrice", "Maja"], ["Sala", "Cabina 1"]], message: "Pianifica gli appuntamenti tenendo conto di operatore, sala e attrezzature necessarie.", result: "Risorse collegate all’appuntamento" },
  "richieste-appuntamento": { icon: Clock3, title: "Il cliente propone. Tu confermi.", label: "Richiesta di appuntamento", rows: [["Cliente", "Ana"], ["Servizio", "Consulenza"], ["Orario preferito", "Giovedì pomeriggio"]], message: "Valuta la richiesta del cliente e conferma un orario preciso compatibile con la tua agenda.", result: "Controllo prima della conferma" },
  "design-prenotazioni-codici-qr": { icon: QrCode, title: "Il tuo marchio. Le tue prenotazioni.", label: "Design di prenotazione e codici QR", rows: [["Aspetto", "Con i colori del tuo marchio"], ["Canale", "Sito web, Instagram o reception"], ["Destinazione", "La tua pagina di prenotazione"]], message: "Condividi un link o stampa un QR che porti alle prenotazioni online.", result: "Una strada più breve verso il prossimo appuntamento" },
};

export function FeaturePreview({ slug }: { slug: string }) {
  const preview = previews[slug as keyof typeof previews];
  if (!preview) return null;
  const Icon = preview.icon;
  return (
    <figure className="feature-preview">
      <div className="feature-preview__brand"><span>Jedro+</span><small>{preview.label}</small></div>
      <div className="feature-preview__body"><span className="feature-preview__icon"><Icon size={30} strokeWidth={1.4} aria-hidden="true" /></span><p className="feature-preview__title">{preview.title}</p><dl>{preview.rows.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><p className="feature-preview__message">{preview.message}</p><div className="feature-preview__result"><Check size={16} aria-hidden="true" />{preview.result}</div></div>
      <figcaption>Esempio illustrativo con dati dimostrativi.</figcaption>
    </figure>
  );
}
