// Generated from Slovenian source and src/locales/it.json.
// Shared by the product page, the pricing page and structured data.
export const RECEPTIONIST_PATH = "/it/funzionalita/receptionist-plus";
export const RECEPTIONIST_APP_URL = "https://app.jedroplus.com/receptionist-plus";
export const RECEPTIONIST_TRIAL_CREDITS = 30;
export const RECEPTIONIST_CREDITS_PER_MINUTE = 1;
export const RECEPTIONIST_GREETING = "Salon Luna, buongiorno! Sono l’assistente digitale del salone. Come posso aiutarla?";

export const receptionistPacks = [
  { name: "Avvio", credits: 100, price: 15, description: "Per le prime chiamate e un utilizzo ridotto." },
  { name: "Standard", credits: 300, price: 39, description: "Per attività in cui il telefono squilla ogni giorno." },
  { name: "Professionale", credits: 750, price: 89, description: "Per più conversazioni e un team più grande." },
];

export function receptionistMinuteRate(pack: { price: number; credits: number }) {
  return new Intl.NumberFormat("it-IT", { minimumFractionDigits: 3, maximumFractionDigits: 3 }).format(pack.price / pack.credits);
}

export const receptionistPricingAnswer = `Puoi scegliere tra i nostri pacchetti di minuti di chiamata. ${receptionistPacks.map((pack) => `Il pacchetto ${pack.name} include ${pack.credits} minuti a ${pack.price} €`).join(". ")}. Alla prima attivazione ricevi ${RECEPTIONIST_TRIAL_CREDITS} minuti gratuiti di prova. I minuti di chiamata si acquistano separatamente dall’abbonamento Jedro+. I prezzi sono IVA esclusa.`;

export const receptionistUsageFaq = [
  { q: "I minuti di Receptionist+ scadono?", a: "No. I minuti acquistati per Receptionist+ non scadono. Restano sul tuo account per le chiamate future e puoi usarli in base alle esigenze della tua attività." },
  { q: "Come viene conteggiata una chiamata di durata inferiore a un minuto?", a: "Il consumo è calcolato in proporzione alla durata della conversazione. Ad esempio, una conversazione di 30 secondi consuma 0,5 minuti del pacchetto e una di 90 secondi 1,5 minuti. Puoi monitorare il consumo nell’app Jedro+." },
  { q: "Ogni attività riceve un proprio numero di telefono?", a: "Sì. Ogni attività riceve un proprio numero di telefono per Receptionist+. Il nostro team all’indirizzo info@jedroplus.com ti aiuta a configurare la telefonia e verificare le impostazioni del numero." },
];

export const receptionistFaq = [
  { q: "Cos’è Receptionist+?", a: "Receptionist+ è la receptionist AI di Jedro+. Risponde nella lingua del cliente, prenota, sposta o annulla appuntamenti, risponde alle domande, invia promemoria e registra quanto concordato. Aiuta le imprese di servizi a ridurre le interruzioni e organizzare le prenotazioni telefoniche." },
  { q: "In quale lingua parla?", a: "Receptionist+ parla la lingua del cliente, permettendo a ciascuno di comunicare facilmente, fissare un appuntamento o ricevere una risposta." },
  { q: "Quanto costa un minuto di chiamata?", a: receptionistPricingAnswer },
  { q: "Acquisto minuti o un abbonamento Receptionist+?", a: "I pacchetti da 100, 300 e 750 minuti sono acquisti una tantum di minuti per le chiamate, separati dall’abbonamento Jedro+. Scegli in base al volume delle conversazioni e acquista altri minuti quando necessario. Per l’attivazione serve un account Jedro+." },
  { q: "Gli appuntamenti vengono aggiunti automaticamente a Jedro+?", a: "Sì. Receptionist+ è collegato al calendario e può creare direttamente gli appuntamenti concordati per telefono. Il registro chiamate include anche il link all’appuntamento." },
  { q: "Può anche spostare o annullare appuntamenti?", a: "Sì. Su richiesta del cliente può creare una prenotazione, spostarla a un altro orario libero o annullarla. Le modifiche vengono registrate nel calendario Jedro+." },
  { q: "Può inviare un promemoria?", a: "Sì. Receptionist+ può inviare un promemoria per l’appuntamento concordato. Appuntamenti, modifiche e comunicazioni rimangono collegati in Jedro+." },
  { q: "Posso consultare conversazioni e consumi?", a: "Sì. Il registro mostra orario, durata, minuti consumati ed esito. Include la trascrizione, quando disponibile, e il link all’appuntamento creato." },
  { q: "Posso disattivare la receptionist AI?", a: "Sì. Attiva o disattiva Receptionist+ nelle impostazioni, dove puoi modificare saluto e soglia di avviso quando restano pochi minuti." },
  { q: "Come inizio e collego un numero di telefono?", a: "Apri Receptionist+ nel tuo account Jedro+ e attivalo. Alla prima attivazione ricevi 30 minuti gratuiti di prova. Ogni attività riceve un proprio numero di telefono; scrivi a info@jedroplus.com per configurare la telefonia e verificare le impostazioni." },
  { q: "Come attivare Receptionist+ in un altro paese UE?", a: "Jedro+ è disponibile per le attività nell’UE. Per Receptionist+ verifichiamo all’attivazione la disponibilità del numero e le impostazioni telefoniche per il paese della tua attività. Comunica paese e lingua desiderati a info@jedroplus.com." },
  ...receptionistUsageFaq,
];
