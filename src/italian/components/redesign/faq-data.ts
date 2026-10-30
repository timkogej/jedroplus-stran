// Generated from Slovenian source and src/locales/it.json.
import { receptionistPricingAnswer, receptionistUsageFaq } from "@/italian/lib/receptionist";

// FAQ content for the redesign pages. Answers are written in natural language,
// 2–4 sentences, so they read well and are quotable. Panoga-specific FAQs live
// on each Panoga in panoge-data.ts.

export type FaqItem = { q: string; a: string };

export const homeFaq: FaqItem[] = [
  {
    q: "Quando possiamo iniziare a usare Jedro+?",
    a: "Subito. Crea un account, inserisci i dati dell’attività e il sistema è pronto in pochi minuti. Ti aiutiamo a importare il database esistente per iniziare immediatamente a ricevere prenotazioni.",
  },
  {
    q: "I promemoria sono davvero personalizzati?",
    a: "Sì. L’AI scrive ogni messaggio individualmente, adattandolo a servizio, appuntamento, operatore e tono dell’attività. Il cliente riceve un messaggio personale al momento giusto, senza occupare il tuo tempo.",
  },
  {
    q: "Jedro+ supporta promemoria email e SMS?",
    a: "Sì. I promemoria email sono inclusi in tutti i piani a pagamento. Gli SMS sono inclusi in Jedro Pro (250 SMS al mese) ed Enterprise. Con Jedro Plus puoi acquistare SMS quando serve, a partire da 4 € per 50 SMS. I promemoria partono automaticamente prima e dopo gli appuntamenti.",
  },
  {
    q: "Cosa sono i «clienti inattivi» e come mi aiutano?",
    a: "Questa funzione individua chi non torna da tempo e lo invita automaticamente a prenotare di nuovo. Aiuta a riempire gli spazi vuoti e recuperare ricavi.",
  },
  {
    q: "Come vengono protetti i dati?",
    a: "I dati sono conservati in modo sicuro, con accessi limitati e trattamenti conformi alle buone pratiche di sicurezza e al GDPR. I tuoi dati e quelli dei clienti rimangono riservati e sotto il tuo controllo.",
  },
  {
    q: "Quanto costa e posso iniziare gratis?",
    a: "Puoi iniziare con il piano Free, gratuito per sempre. Jedro Plus costa 14,90 € al mese oppure 142,80 € con pagamento annuale (11,90 € al mese). I minuti Receptionist+ si acquistano separatamente. Confronta piani e opzioni nella pagina Prezzi.",
  },
];

export const agencijaFaq: FaqItem[] = [
  {
    q: "Cosa offre Jedro+ Agenzia?",
    a: "Sviluppiamo gestionali, sistemi di comunicazione e siti web per imprese di servizi. Tutto si basa sull’AI ed è realizzato da un unico team, dal gestionale al sito.",
  },
  {
    q: "In quanto tempo realizzate un sistema o un sito?",
    a: "Misuriamo i progetti in giorni e settimane. Mettiamo rapidamente in funzione la tua attività curando la qualità di ogni fase.",
  },
  {
    q: "Cosa distingue Jedro+ Agenzia?",
    a: "Siamo specializzati nelle imprese di servizi e conosciamo appuntamenti, clienti e operatività quotidiana. Le nostre soluzioni AI lavorano in modo più intelligente, rapido e automatico.",
  },
  {
    q: "Potete collegare tutto in un unico sistema?",
    a: "Sì. Riuniamo operatività, comunicazione e presenza online in una piattaforma: appuntamenti, clienti, prenotazioni, messaggi e report.",
  },
];

export const cenikFaq: FaqItem[] = [
  { q: "I prezzi includono l’IVA?", a: "No. Tutti i prezzi indicati sono in euro (EUR), IVA esclusa. Questo vale sia per i piani in abbonamento sia per i pacchetti di minuti Receptionist+." },
  {
    q: "Quanto pago effettivamente con la fatturazione annuale?",
    a: "Paghi 142,80 € per un anno di Jedro Plus (equivalenti a 11,90 € al mese) oppure 298,80 € per un anno di Jedro Pro (equivalenti a 24,90 € al mese). La cifra mensile della fatturazione annuale serve a confrontare il costo, non indica un pagamento mensile. Rispetto a dodici pagamenti mensili risparmi 36 € con Plus o 60 € con Pro.",
  },
  {
    q: "Cosa include Free e quando scegliere un piano a pagamento?",
    a: "Free include calendario, appuntamenti e clienti, servizi e personale illimitati, un utente dell’app, importazione dei clienti da Excel e una prova una tantum dei promemoria SMS ed e-mail. Scegli Jedro Plus o Pro per prenotazioni online, analisi e promemoria personalizzati continuativi.",
  },
  {
    q: "Quali quantità di SMS ed e-mail sono incluse?",
    a: "Jedro Plus include 500 e-mail al mese; i pacchetti SMS si acquistano a partire da 4 € per 50 SMS. Jedro Pro include 2.000 e-mail e 250 SMS al mese. Le quantità di Enterprise sono concordate individualmente. I minuti di chiamata Receptionist+ sono separati da queste quantità.",
  },
  {
    q: "Posso provare Jedro+ gratis?",
    a: "Sì. Inizia senza carta di credito e passa a un piano superiore quando vuoi. Possiamo anche mostrarti Jedro+ con una demo di 15 minuti.",
  },
  {
    q: "Quanto costano i piani?",
    a: "Free è gratuito per sempre. Jedro Plus costa 14,90 € al mese e Jedro Pro 29,90 € al mese (rispettivamente 11,90 € e 24,90 € al mese con pagamento annuale). Enterprise è su richiesta. Tutti i piani a pagamento includono database, calendario, prenotazioni online e statistiche.",
  },
  {
    q: "Qual è la differenza tra Plus e Pro?",
    a: "Jedro Plus include calendario, database e promemoria per una gestione ordinata. Jedro Pro aggiunge notifiche ai clienti inattivi, SMS e comunicazioni avanzate per riempire l’agenda.",
  },
  {
    q: "Ci sono vincoli e come posso disdire?",
    a: "Puoi scegliere fatturazione mensile o annuale. L’importo annuale si paga per l’intero anno; il prezzo mensile mostrato ne è l’equivalente mensile. Puoi disdire nell’app secondo le Condizioni d’uso.",
  },
];

const receptionistPricingFaq: FaqItem = {
  q: "Receptionist+ è incluso nell’abbonamento?",
  a: receptionistPricingAnswer,
};

homeFaq.push(receptionistPricingFaq);
cenikFaq.push(receptionistPricingFaq);

cenikFaq.push(...receptionistUsageFaq);

const europeanAvailabilityFaq: FaqItem[] = [
  { q: "Possiamo usare Jedro+ fuori dalla Slovenia?", a: "Sì. Jedro+ è disponibile per le attività di servizi nell’Unione europea. Concordiamo l’attivazione in base a servizi, team e modalità di lavoro. La cassa fiscale con conferma delle fatture FURS è un modulo separato per la Slovenia." },
  { q: "Potete adattare Jedro+ a un’altra lingua?", a: "Sì, ulteriori personalizzazioni linguistiche sono possibili su accordo. Il sito è attualmente in sloveno, inglese, italiano e tedesco; l’app è in sloveno e inglese. Prima dell’attivazione concordiamo lingua e ambito della personalizzazione su info@jedroplus.com." },
];
homeFaq.push(...europeanAvailabilityFaq);
cenikFaq.push(...europeanAvailabilityFaq);
