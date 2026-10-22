// Generated from Slovenian source and src/locales/it.json.
// Content for each /panoge/[slug] subpage. The CTA band is identical across
// pages and is rendered directly in the page template.

import type { FaqItem } from "./faq-data";

export type PanogaListItem = { b: string; rest: string };
export type PanogaCard = { title: string; text: string };
export type PanogaMessage = { dir: "out" | "in"; text: string };

export type Panoga = {
  title: string; // h1 (may contain "&")
  heroTag: string; // hero placeholder label
  mediaTag: string; // split media placeholder label
  heroSub: string;
  lead: string;
  pains: string[]; // dodatni uvodni odstavki o specifičnih bolečinah panoge
  list: PanogaListItem[];
  useCasesHead: string; // h2 fragment za sekcijo use-casov
  useCases: PanogaCard[]; // 3–4 konkretni use-casi
  msgHead: string; // h2 za primer sporočila
  messages: PanogaMessage[]; // primer dejanskega opomnika
  cards: PanogaCard[]; // "kaj pridobite" – funkcijske kartice
  whyTitle: string; // h2 "zakaj … izberejo Jedro+"
  whyLead: string;
  whyList: PanogaListItem[];
  faq: FaqItem[]; // panoga-specific FAQ (3–4 items)
};

export const panoge: Record<string, Panoga> = {
  "saloni-parrucchieri": {
    title: "Saloni di parrucchieri, bellezza e barber shop",
    heroTag: "FOTO — Vista ampia di un salone di parrucchieri o barber shop",
    mediaTag: "FOTO — Servizio a un cliente in salone",
    heroSub:
      "Jedro+ gestisce prenotazioni e promemoria, così puoi dedicarti al cliente in poltrona.",
    lead: "Ogni ora vuota costa ricavi. Jedro+ invia promemoria puntuali con il tuo tono, invita i clienti inattivi a tornare e offre prenotazioni online 24/7 senza rispondere ai messaggi a mano.",
    pains: [
      "La giornata del salone ruota intorno alla poltrona, ma il telefono interrompe tagli e colori. Qualcuno vuole spostare un appuntamento, un altro chiede un prezzo, mentre un’assenza lascia un’ora difficile da riempire all’ultimo momento.",
      "I clienti tornano con un ritmo: tagli ogni quattro-sei settimane, ritocchi colore ogni tre. Se il ritmo si interrompe, spesso hanno semplicemente dimenticato di prenotare. Jedro+ li aiuta a mantenerlo.",
    ],
    list: [
      { b: "Meno cancellazioni", rest: " — i promemoria puntuali riducono le assenze" },
      { b: "Più visite successive", rest: " — messaggi automatici dopo il servizio" },
      { b: "Prenotazioni online", rest: " — con i tuoi colori, senza programmare" },
    ],
    useCasesHead: "Quattro problemi semplificati",
    useCases: [
      { title: "Ore vuote durante la giornata", text: "Il cliente riceve un promemoria il giorno prima e la mattina dell’appuntamento. Meno visite dimenticate significa meno ore con la poltrona vuota." },
      { title: "Clienti che «prenoteranno presto»", text: "Jedro+ nota quando qualcuno non torna da sette settimane e invia un invito cordiale. Riempi gli orari tranquilli senza telefonare." },
      { title: "Chiamate mentre lavori", text: "Le prenotazioni online accettano appuntamenti mentre tagli. Il cliente sceglie operatore, servizio e orario, lasciandoti un’agenda ordinata anziché chiamate perse." },
      { title: "Più parrucchieri, un calendario", text: "Ogni operatore ha turni, pause e servizi propri. Gli appuntamenti non si sovrappongono e i clienti vedono solo orari davvero disponibili." },
    ],
    msgHead: "Un promemoria dal tuo salone",
    messages: [
      { dir: "out", text: "Ciao Maja! ✂️ Il tuo appuntamento colore e piega con Nika è domani alle 16:00. Scrivici se cambia qualcosa, altrimenti a domani! 💜" },
      { dir: "out", text: "Ciao Tina! Sono passate sei settimane dall’ultimo taglio 😊 Abbiamo un posto giovedì mattina. Te lo prenotiamo? Un clic ed è fatto." },
      { dir: "in", text: "Sì, grazie! Grazie del promemoria 🙏" },
    ],
    cards: [
      { title: "Agenda intelligente", text: "Appuntamenti, pause e più operatori in un unico posto." },
      { title: "Database clienti", text: "Storico visite, colori e preferenze di ogni cliente." },
      { title: "Promemoria automatici", text: "SMS o email prima dell’appuntamento, inviati automaticamente." },
    ],
    whyTitle: "Perché i parrucchieri scelgono Jedro+",
    whyLead: "Jedro+ viene configurato su servizi, operatori e tono del salone. Una volta avviato, promemoria, conferme e inviti a tornare partono automaticamente, facendoti risparmiare tempo.",
    whyList: [
      { b: "Configurato per te", rest: " — importiamo servizi, prezzi e team per iniziare a ricevere prenotazioni." },
      { b: "Messaggi con il tuo tono", rest: " — messaggi caldi e personali, con la voce del tuo salone." },
      { b: "Tutto in un unico posto", rest: " — agenda, schede clienti con storico colori e preferenze, promemoria." },
      { b: "Senza vincoli", rest: " — prova gratis e valuta i risultati dai primi appuntamenti." },
    ],
    faq: [
      {
        q: "I clienti possono prenotare online da soli?",
        a: "Sì. Jedro+ offre prenotazioni 24/7 con colori e logo del salone, senza programmare. I clienti prenotano quando vogliono, senza che tu debba rispondere ai messaggi.",
      },
      {
        q: "Come riduce cancellazioni e assenze?",
        a: "Il sistema invia promemoria SMS o email puntuali prima degli appuntamenti, aiutando a ridurre dimenticanze e cancellazioni.",
      },
      {
        q: "Posso gestire l’agenda di più parrucchieri?",
        a: "Sì. L’agenda intelligente riunisce appuntamenti, pause e operatori in una panoramica dell’intero salone.",
      },
      {
        q: "Jedro+ conserva storico e preferenze?",
        a: "Sì. Le schede conservano visite, colori utilizzati e preferenze, per personalizzare ogni servizio.",
      },
    ],
  },
  "cliniche": {
    title: "Cliniche dentali, estetiche e mediche",
    heroTag: "FOTO — Clinica dentale o estetica luminosa",
    mediaTag: "FOTO — Reception e trattamento in clinica",
    heroSub:
      "Ogni paziente riceve le indicazioni giuste prima e dopo il trattamento, mentre tu mantieni una panoramica completa degli appuntamenti.",
    lead: "Indicazioni puntuali prima e dopo il trattamento costruiscono fiducia e professionalità. Consulta appuntamenti, stati e storico senza schede perse o inserimenti doppi.",
    pains: [
      "In clinica conta ogni dettaglio, dalla preparazione alle cure successive. Le indicazioni verbali o inviate a mano possono andare perse. I pazienti arrivano impreparati, i trattamenti ritardano o vengono spostati e l’esperienza ne risente.",
      "Le cancellazioni tardive costano particolarmente alle cliniche: appuntamenti lunghi, attrezzature riservate e personale pronto. Jedro+ ricorda al paziente la visita e condivide le indicazioni per arrivare preparato e puntuale.",
    ],
    list: [
      { b: "Indicazioni prima del trattamento", rest: " — automatiche per ogni servizio" },
      { b: "Cure successive", rest: " — fiducia e un’immagine professionale" },
      { b: "CRM ordinato", rest: " — storico, note e preferenze del paziente" },
    ],
    useCasesHead: "Dove Jedro+ aiuta di più",
    useCases: [
      { title: "Preparazione al trattamento", text: "Il paziente riceve automaticamente indicazioni specifiche, con cosa fare o evitare prima della visita. Meno trattamenti da spostare per preparazione insufficiente." },
      { title: "Indicazioni dopo la visita", text: "La clinica invia raccomandazioni e segnala quando serve un controllo. Il paziente si sente seguito e cresce la fiducia." },
      { title: "Cancellazioni costose", text: "I promemoria puntuali riducono le cancellazioni quando personale e attrezzature sono già pronti." },
      { title: "Dati sparsi", text: "Storico visite, note e controlli consigliati in un unico posto, senza cercare tra cartelle o duplicare i dati." },
    ],
    msgHead: "Un messaggio dalla tua clinica",
    messages: [
      { dir: "out", text: "Gentile sig. Novak, il suo appuntamento per lo sbiancamento è domani alle 9:00. Eviti cibi colorati e caffè nelle 2 ore precedenti. A domani!" },
      { dir: "out", text: "Buongiorno sig.ra Kos. Dopo il trattamento di oggi consigliamo impacchi freddi e riposo per 48 ore. Ci contatti per qualsiasi domanda. Buona guarigione! 💙" },
      { dir: "in", text: "Grazie per l’attenzione e le indicazioni chiare." },
    ],
    cards: [
      { title: "Schede pazienti digitali", text: "Dati dei pazienti conservati in sicurezza in un unico posto." },
      { title: "Promemoria puntuali", text: "I promemoria aiutano a ridurre cancellazioni e ritardi." },
      { title: "Monitoraggio delle visite", text: "Panoramica di trattamenti e controlli consigliati." },
    ],
    whyTitle: "Perché le cliniche scelgono Jedro+",
    whyLead: "I pazienti si aspettano affidabilità e comunicazione chiara. Jedro+ supporta entrambe senza caricare la reception. Configuriamo il sistema su servizi e indicazioni della clinica, poi promemoria e messaggi prima e dopo il trattamento partono automaticamente.",
    whyList: [
      { b: "Meno cancellazioni", rest: " — i promemoria puntuali riducono gli appuntamenti di valore persi." },
      { b: "Un’immagine professionale", rest: " — indicazioni corrette per il paziente in ogni fase." },
      { b: "Dati protetti", rest: " — storico e note in un unico posto ordinato." },
      { b: "Meno lavoro alla reception", rest: " — messaggi e promemoria partono automaticamente." },
    ],
    faq: [
      {
        q: "Jedro+ invia automaticamente preparazione e indicazioni successive?",
        a: "Sì. I pazienti ricevono indicazioni puntuali prima e dopo il trattamento, automaticamente in base al servizio, rafforzando fiducia e professionalità.",
      },
      {
        q: "Come vengono conservati i dati dei pazienti?",
        a: "In schede digitali protette in un unico posto, senza documenti persi o duplicati. L’accesso è limitato e conforme al GDPR.",
      },
      {
        q: "Il sistema aiuta a ridurre le cancellazioni?",
        a: "Sì. I promemoria automatici avvisano in tempo, aiutando a ridurre cancellazioni e ritardi.",
      },
    ],
  },
  "benessere": {
    title: "Studi di massaggio, centri benessere e fisioterapia",
    heroTag: "FOTO — Studio benessere o massaggi rilassante",
    mediaTag: "FOTO — Massaggio o fisioterapia",
    heroSub:
      "Dai trattamenti singoli ai cicli e pacchetti, Jedro+ collega tutto in un’agenda ordinata e tranquilla.",
    lead: "Molti servizi prevedono cicli o pacchetti. Jedro+ collega gli appuntamenti ricorrenti, invia promemoria discreti e invita i clienti inattivi a tornare, per un’agenda piena e un’atmosfera rilassata.",
    pains: [
      "Benessere e massaggi spesso richiedono più trattamenti. I clienti possono interrompere perché dimenticano di prenotare o perdono il ritmo. Un ciclo interrotto può ridurre i risultati e i ricavi.",
      "Un’atmosfera calma fa parte del servizio. Jedro+ invia promemoria delicati con il tono dello studio, preservando quella sensazione e riempiendo l’agenda senza messaggi manuali continui.",
    ],
    list: [
      { b: "Cicli e pacchetti", rest: " — appuntamenti collegati con un clic" },
      { b: "Promemoria discreti", rest: " — con il tono adatto al tuo servizio" },
      { b: "Visite successive", rest: " — inviti automatici ai clienti inattivi" },
    ],
    useCasesHead: "Dove Jedro+ fa la differenza",
    useCases: [
      { title: "Cicli di trattamento interrotti", text: "Dopo ogni trattamento, il sistema suggerisce il successivo al momento giusto, per mantenere il ritmo e completare il pacchetto." },
      { title: "Clienti inattivi", text: "Chi manca da tempo riceve un invito delicato, adattato alla stagione o all’ultimo trattamento." },
      { title: "Pacchetti e visite ripetute", text: "Prenota più trattamenti insieme; il sistema tiene conto di quelli rimanenti." },
      { title: "Prenotazioni senza interruzioni", text: "Il cliente prenota con un link mentre tu ti dedichi al trattamento." },
    ],
    msgHead: "Un promemoria dal tuo studio",
    messages: [
      { dir: "out", text: "Ciao Eva 🌿 Il tuo massaggio rilassante è domani alle 17:00. Arriva qualche minuto prima per rilassarti con una tisana. A presto!" },
      { dir: "out", text: "Ciao Nina! Per i risultati migliori consigliamo un trattamento questa settimana. Vuoi che prenotiamo un orario? 💆" },
      { dir: "in", text: "Sì, venerdì pomeriggio grazie 🙏" },
    ],
    cards: [
      { title: "Appuntamenti in pacchetto", text: "Più trattamenti prenotati insieme." },
      { title: "Proposta della prossima visita", text: "Il sistema suggerisce l’appuntamento al momento giusto." },
      { title: "Storico trattamenti", text: "Segui i progressi di ogni cliente." },
    ],
    whyTitle: "Perché i centri benessere scelgono Jedro+",
    whyLead: "Studi benessere e massaggi vivono di ritorni e tranquillità. Jedro+ sostiene entrambi con inviti puntuali e messaggi delicati con il tuo tono, automaticamente, lasciandoti il tempo per i trattamenti.",
    whyList: [
      { b: "Più cicli completati", rest: " — proposte del prossimo appuntamento al momento giusto." },
      { b: "Comunicazione delicata", rest: " — messaggi che preservano l’atmosfera dello studio." },
      { b: "Agenda piena", rest: " — i clienti inattivi tornano senza telefonate." },
      { b: "Meno interruzioni", rest: " — prenotazioni con un link durante i trattamenti." },
    ],
    faq: [
      {
        q: "Posso prenotare un intero ciclo o pacchetto?",
        a: "Sì. Jedro+ collega appuntamenti ricorrenti e pacchetti con un clic, prenotando l’intero ciclo insieme.",
      },
      {
        q: "I promemoria sono adattati al trattamento?",
        a: "Sì. Jedro+ invia promemoria delicati con il tono del tuo servizio, per far sentire i clienti rilassati e felici di tornare.",
      },
      {
        q: "Jedro+ invita a tornare chi manca da tempo?",
        a: "Sì. Individua automaticamente i clienti inattivi e invia un invito discreto per mantenere l’agenda piena.",
      },
    ],
  },
  "fitness": {
    title: "Palestre, yoga, pilates e personal trainer",
    heroTag: "FOTO — Palestra o studio yoga",
    mediaTag: "FOTO — Lezione di gruppo o personal training",
    heroSub:
      "Lezioni di gruppo e allenamenti individuali in una panoramica chiara.",
    lead: "Dagli allenamenti individuali ai corsi e pacchetti, Jedro+ avvisa gli iscritti, accetta prenotazioni con un link e invita a tornare chi manca da tempo. Meno coordinamento per telefono e messaggi, più posti occupati.",
    pains: [
      "Orari e corsi cambiano ogni settimana e gli iscritti spesso prenotano all’ultimo momento con messaggi da gestire a mano. Un’assenza lascia vuoto un posto che avrebbe potuto occupare qualcun altro.",
      "Anche chi sparisce gradualmente è una perdita silenziosa. Salta una settimana, poi due e non torna più. Jedro+ invia promemoria e inviti prima che perda il ritmo.",
    ],
    list: [
      { b: "Lezioni di gruppo", rest: " — iscrizioni ai corsi in un unico posto" },
      { b: "Promemoria allenamento", rest: " — gli iscritti ricordano la lezione prenotata" },
      { b: "Riattivazione iscritti", rest: " — inviti a tornare per chi è inattivo" },
    ],
    useCasesHead: "Dove Jedro+ aiuta di più",
    useCases: [
      { title: "Posti vuoti nei corsi", text: "Gli iscritti ricevono un promemoria prima della lezione, riducendo i posti prenotati ma inutilizzati." },
      { title: "Iscritti che si allontanano", text: "Chi non viene da tempo riceve un invito incoraggiante prima di perdere il ritmo." },
      { title: "Prenotazioni via messaggio", text: "Gli iscritti prenotano con un link, evitando il coordinamento telefonico e mostrandoti chi verrà." },
      { title: "Allenamenti individuali", text: "I personal trainer gestiscono facilmente gli appuntamenti e inviano promemoria puntuali." },
    ],
    msgHead: "Un promemoria dal tuo studio",
    messages: [
      { dir: "out", text: "Ciao Luka! 💪 La lezione di gruppo è domani alle 18:00. Ci vediamo lì: ricorda acqua e asciugamano!" },
      { dir: "out", text: "Ciao Sara! Non ti vediamo da un po’ 😊 Questa settimana c’è posto allo yoga del mattino. Ti unisci a noi? Un clic per prenotare." },
      { dir: "in", text: "Sì, grazie del promemoria! Prenoto per mercoledì 🧘" },
    ],
    cards: [
      { title: "Orario dei corsi", text: "Lezioni, capacità e iscrizioni in un unico posto." },
      { title: "Iscrizioni di gruppo", text: "Gli iscritti scelgono autonomamente corso e orario libero." },
      { title: "Promemoria per le lezioni", text: "Notifiche automatiche prima dell’allenamento." },
    ],
    whyTitle: "Perché palestre e trainer scelgono Jedro+",
    whyLead: "Mantenere il ritmo degli iscritti conta. Jedro+ gestisce prenotazioni, promemoria e inviti ai meno attivi automaticamente, lasciandoti più tempo per allenare.",
    whyList: [
      { b: "Meno posti inutilizzati", rest: " — promemoria prima di ogni lezione." },
      { b: "Meno telefonate", rest: " — gli iscritti prenotano con un link." },
      { b: "Iscritti che tornano", rest: " — inviti puntuali per chi è inattivo." },
      { b: "Panoramica presenze", rest: " — vedi chi verrà e quanto è piena ogni sessione." },
    ],
    faq: [
      {
        q: "Gli iscritti possono prenotare i corsi da soli?",
        a: "Sì. Prenotano con un link e il sistema tiene traccia delle iscrizioni per ogni lezione.",
      },
      {
        q: "Jedro+ mostra i posti disponibili?",
        a: "Sì. Il sistema mostra lezioni libere e prenotate, così tu e gli iscritti vedete la disponibilità.",
      },
      {
        q: "Posso invitare gli iscritti inattivi a tornare?",
        a: "Sì. Jedro+ individua chi manca da tempo e lo invita automaticamente a tornare.",
      },
    ],
  },
  "officine": {
    title: "Officine, gommisti e servizi di pulizia",
    heroTag: "FOTO — Officina / laboratorio",
    mediaTag: "FOTO — Meccanico al lavoro o gommista",
    heroSub:
      "I clienti sanno quando venire e ritirare il veicolo, con meno chiamate.",
    lead: "Jedro+ invia promemoria quando serve manutenzione o cambio gomme e avvisa quando il veicolo è pronto. Meno telefonate, lavoro ordinato e clienti soddisfatti che tornano.",
    pains: [
      "In officina la giornata si divide tra veicoli e telefonate su ritiro, disponibilità e cambio gomme. Le chiamate interrompono il lavoro, spesso quando hai le mani sporche.",
      "I servizi sono spesso stagionali e prevedibili: cambio gomme in primavera e autunno, tagliandi a intervalli chilometrici. I clienti rimandano fino all’urgenza, creando picchi. Jedro+ li avvisa in tempo e distribuisce meglio gli appuntamenti.",
    ],
    list: [
      { b: "Promemoria manutenzione", rest: " — automatici, al momento giusto" },
      { b: "Notifica di ritiro", rest: " — quando il veicolo è pronto" },
      { b: "Agenda ordinata", rest: " — panoramica per giorno e appuntamento" },
    ],
    useCasesHead: "Dove Jedro+ aiuta di più",
    useCases: [
      { title: "Il telefono che continua a squillare", text: "I clienti prenotano con un link e ricevono aggiornamenti sul ritiro, riducendo le chiamate mentre lavori." },
      { title: "Picchi stagionali", text: "Prima della stagione del cambio gomme, il sistema ricorda ai clienti di distribuire le prenotazioni." },
      { title: "Manutenzione rimandata", text: "Quando si avvicina la scadenza per tempo o chilometri, il cliente riceve un promemoria per prenotare." },
      { title: "Ritiro del veicolo", text: "Quando l’auto è pronta, parte una notifica automatica, riducendo chiamate e attese." },
    ],
    msgHead: "Una notifica dalla tua officina",
    messages: [
      { dir: "out", text: "Buongiorno sig. Horvat. La sua Golf è stata revisionata ed è pronta per il ritiro. Siamo aperti fino alle 17:00. Un saluto dal team! 🔧" },
      { dir: "out", text: "Buongiorno! Si avvicina il momento di montare le gomme estive 🛞 Abbiamo disponibilità la prossima settimana. Le prenotiamo un appuntamento?" },
      { dir: "in", text: "Sì, sarebbe possibile martedì mattina? Grazie!" },
    ],
    cards: [
      { title: "Prenotazione appuntamenti", text: "I clienti scelgono autonomamente un orario libero." },
      { title: "Promemoria stagionali", text: "Gomme invernali ed estive al momento giusto." },
      { title: "Storico del veicolo", text: "Panoramica dei servizi effettuati." },
    ],
    whyTitle: "Perché le officine scelgono Jedro+",
    whyLead: "In officina il tempo conta. Chiamate inutili e giornate squilibrate pesano sull’attività. Jedro+ gestisce prenotazioni, promemoria e notifiche di ritiro, lasciando il team concentrato sui veicoli.",
    whyList: [
      { b: "Meno chiamate", rest: " — prenotazioni e notifiche funzionano automaticamente." },
      { b: "Carico di lavoro uniforme", rest: " — i promemoria stagionali attenuano i picchi." },
      { b: "Clienti più fedeli", rest: " — i promemoria di manutenzione li fanno tornare." },
      { b: "Panoramica veicoli", rest: " — storico dei servizi di ogni veicolo in un unico posto." },
    ],
    faq: [
      {
        q: "Jedro+ invia promemoria per manutenzione e cambio gomme stagionali?",
        a: "Sì. Il sistema li invia automaticamente quando si avvicina la scadenza, al momento giusto per ogni cliente.",
      },
      {
        q: "Come sa il cliente che il veicolo è pronto?",
        a: "Jedro+ avvisa automaticamente quando il veicolo è pronto per il ritiro. Meno telefonate e clienti più soddisfatti.",
      },
      {
        q: "I clienti possono prenotare da soli?",
        a: "Sì. Scelgono un orario online, lasciandoti un’agenda giornaliera ordinata.",
      },
    ],
  },
  "coaching": {
    title: "Consulenza, coaching e terapia",
    heroTag: "FOTO — Sala per consulenza o coaching",
    mediaTag: "FOTO — Colloquio o seduta di terapia",
    heroSub:
      "Comunicazione discreta e affidabile per dedicarti ai clienti.",
    lead: "Il tuo lavoro richiede fiducia e affidabilità. Jedro+ invia promemoria discreti, gestisce gli appuntamenti ricorrenti e aiuta a seguire i progressi, lasciandoti concentrare sul colloquio.",
    pains: [
      "La fiducia è centrale in coaching, consulenza e terapia. Un messaggio che rivela troppo sullo schermo può mettere a disagio. Sedute dimenticate o annullate interrompono il percorso costruito insieme.",
      "Gli incontri regolari richiedono coordinamento, registrazione e monitoraggio. Farlo a mano sottrae energia al colloquio. Jedro+ gestisce promemoria discreti e appuntamenti ordinati, così puoi dedicarti al cliente.",
    ],
    list: [
      { b: "Promemoria discreti", rest: " — senza rivelare il contenuto della seduta" },
      { b: "Appuntamenti ricorrenti", rest: " — incontri settimanali o mensili" },
      { b: "Monitoraggio dei progressi", rest: " — note e storico delle visite" },
    ],
    useCasesHead: "Dove Jedro+ fa la differenza",
    useCases: [
      { title: "Comunicazione sensibile", text: "I promemoria sono discreti e non rivelano il contenuto della seduta. Il cliente riceve solo le informazioni necessarie." },
      { title: "Incontri regolari", text: "Imposta una volta gli incontri settimanali o mensili e il sistema invierà un promemoria per ciascuno." },
      { title: "Percorso interrotto", text: "I promemoria puntuali riducono cancellazioni e sedute dimenticate che potrebbero interrompere il lavoro insieme." },
      { title: "Nuovi clienti", text: "Le prenotazioni online accettano i primi incontri senza coordinamento via email." },
    ],
    msgHead: "Un promemoria dal tuo studio",
    messages: [
      { dir: "out", text: "Buongiorno, il nostro incontro è domani alle 10:00. Sarà un piacere parlare con lei. Mi scriva se desidera spostarlo. 🙂" },
      { dir: "out", text: "Buongiorno! Prima del prossimo incontro, rifletta su come è andata la settimana rispetto agli obiettivi discussi. Ci vediamo mercoledì." },
      { dir: "in", text: "Grazie, con piacere. Sarò presente all’orario concordato." },
    ],
    cards: [
      { title: "Note private", text: "Appunti protetti per ogni cliente." },
      { title: "Appuntamenti fissi", text: "Incontri ricorrenti con un clic." },
      { title: "Prenotazioni online", text: "I nuovi clienti prenotano autonomamente." },
    ],
    whyTitle: "Perché coach e terapeuti scelgono Jedro+",
    whyLead: "Il tuo lavoro richiede fiducia, discrezione e regolarità. Jedro+ invia promemoria senza rivelare il contenuto, gestisce gli incontri ricorrenti e conserva le note in sicurezza, lasciando l’attenzione al cliente.",
    whyList: [
      { b: "Discreto", rest: " — promemoria senza rivelare il contenuto della seduta." },
      { b: "Un ritmo regolare", rest: " — appuntamenti ricorrenti con meno cancellazioni." },
      { b: "Note protette", rest: " — storico e appunti conservati in sicurezza." },
      { b: "Meno organizzazione", rest: " — prenotazioni e promemoria automatici." },
    ],
    faq: [
      {
        q: "I promemoria sono discreti e senza contenuti sensibili?",
        a: "Sì. Jedro+ invia promemoria senza rivelare il contenuto della seduta, preservando riservatezza e professionalità.",
      },
      {
        q: "Posso gestire appuntamenti ricorrenti?",
        a: "Sì. Imposta incontri settimanali o mensili come ricorrenti con un clic.",
      },
      {
        q: "Come vengono conservate le note sui clienti?",
        a: "Le note private sono conservate in sicurezza in un unico posto, con accesso limitato.",
      },
    ],
  },
  "servizi-aziendali": {
    title: "IT, servizi aziendali e agenzie",
    heroTag: "FOTO — Ufficio / agenzia",
    mediaTag: "FOTO — Riunione o lavoro in agenzia",
    heroSub:
      "Riunioni e onboarding scorrono senza intoppi, così puoi dedicarti ai progetti.",
    lead: "Jedro+ gestisce prenotazioni di riunioni, onboarding e comunicazioni automatiche, evitando il coordinamento manuale via email. Più tempo per lavorare, meno amministrazione.",
    pains: [
      "Pianificare può assorbire il lavoro d’agenzia: email ripetute per un incontro, modifiche e sovrapposizioni. Il coordinamento sottrae tempo ai progetti e diventa più complesso quando il team cresce.",
      "Anche la prima impressione conta. I nuovi clienti si aspettano un percorso ordinato. Inviare indicazioni e conferme a mano può essere lento e incoerente. Jedro+ automatizza prenotazioni, conferme e passaggi di avvio, mantenendo un’esperienza uniforme.",
    ],
    list: [
      { b: "Prenotazione riunioni", rest: " — il cliente sceglie l’orario" },
      { b: "Onboarding clienti", rest: " — passaggi e notifiche automatici" },
      { b: "Meno lavoro manuale", rest: " — la comunicazione funziona in automatico" },
    ],
    useCasesHead: "Dove Jedro+ aiuta di più",
    useCases: [
      { title: "Coordinamento delle riunioni", text: "Il cliente sceglie con un link un orario libero dal calendario, evitando scambi continui di email." },
      { title: "Accoglienza dei nuovi clienti", text: "Dopo la firma, i primi passaggi e le notifiche partono automaticamente per un avvio professionale e ordinato." },
      { title: "Riunioni dimenticate", text: "I promemoria riducono cancellazioni e spazi vuoti nell’agenda." },
      { title: "Contatti sparsi", text: "Contatti e storico della collaborazione in un unico posto, accessibile al team." },
    ],
    msgHead: "Un messaggio dalla tua agenzia",
    messages: [
      { dir: "out", text: "Buongiorno sig.ra Zupan. Confermiamo la videochiamata di domani alle 11:00. Il link è qui sotto. A presto!" },
      { dir: "out", text: "Buongiorno e benvenuti! Abbiamo preparato una breve guida per iniziare con semplicità. Siamo a disposizione per qualsiasi domanda. 🙌" },
      { dir: "in", text: "Grazie, tutto chiaro. Ci vediamo alla riunione." },
    ],
    cards: [
      { title: "Calendario riunioni", text: "Un link per prenotare gli orari liberi." },
      { title: "Messaggi automatici", text: "Conferme e promemoria inviati automaticamente." },
      { title: "Database clienti", text: "Tutti i contatti e lo storico in un unico posto." },
    ],
    whyTitle: "Perché le agenzie scelgono Jedro+",
    whyLead: "Ogni ora di coordinamento pesa sulla redditività. Jedro+ gestisce prenotazioni, conferme e onboarding, così il team si dedica al lavoro per cui i clienti vi hanno scelto.",
    whyList: [
      { b: "Meno coordinamento", rest: " — i clienti scelgono autonomamente gli orari liberi." },
      { b: "Onboarding professionale", rest: " — primi passaggi coerenti e automatici." },
      { b: "Meno cancellazioni", rest: " — promemoria riunioni per agende piene." },
      { b: "Archivio ordinato", rest: " — contatti e storico accessibili al team." },
    ],
    faq: [
      {
        q: "I clienti possono prenotare riunioni da soli?",
        a: "Sì. Scelgono un orario libero tramite un link, senza coordinamento manuale via email.",
      },
      {
        q: "Jedro+ automatizza l’onboarding?",
        a: "Sì. Il sistema gestisce passaggi e notifiche automatici per i nuovi clienti, aiutando a non trascurare nulla.",
      },
      {
        q: "Conferme e promemoria sono automatici?",
        a: "Sì. Le conferme e i promemoria delle riunioni partono automaticamente, con contatti e storico in un unico posto.",
      },
    ],
  },
  "altri-servizi": {
    title: "Altre imprese di servizi",
    heroTag: "FOTO — Impresa di servizi",
    mediaTag: "FOTO — La tua attività",
    heroSub:
      "Se lavori con appuntamenti e clienti, Jedro+ lavora per te, configurato sulle tue esigenze.",
    lead: "In ogni settore Jedro+ gestisce appuntamenti, promemoria, prenotazioni online e comunicazione. Raccontaci come lavori e adatteremo la configurazione.",
    pains: [
      "Ogni attività è diversa, ma le difficoltà si ripetono: appuntamenti dimenticati o sovrapposti, clienti che non tornano e comunicazioni che richiedono ore ogni settimana. Se lavori con persone e appuntamenti, probabilmente le conosci.",
      "Jedro+ si adatta al settore e al flusso di lavoro. Raccontaci come operi e configureremo servizi, agenda e messaggi per aiutarti dal primo giorno.",
    ],
    list: [
      { b: "Flessibile", rest: " — configurazione su misura per la tua attività" },
      { b: "Tutto in un unico posto", rest: " — appuntamenti, clienti, promemoria e prenotazioni" },
      { b: "Aiuto per iniziare", rest: " — ti aiutiamo a partire" },
    ],
    useCasesHead: "Come Jedro+ aiuta in ogni settore",
    useCases: [
      { title: "Appuntamenti dimenticati", text: "I promemoria automatici riducono le cancellazioni ovunque la puntualità conti." },
      { title: "Clienti che non tornano", text: "Il sistema invia un invito al momento giusto per rimanere in contatto e incoraggiare una nuova visita." },
      { title: "Prenotazioni 24/7", text: "I clienti prenotano con un link anche quando non puoi rispondere al telefono." },
      { title: "Configurazione su misura", text: "Adattiamo servizi e tono dei messaggi alla tua attività." },
    ],
    msgHead: "Un promemoria dalla tua attività",
    messages: [
      { dir: "out", text: "Buongiorno! Le ricordiamo l’appuntamento di domani alle 13:00. Ci avvisi se cambia qualcosa. A presto! 🙂" },
      { dir: "out", text: "Buongiorno! Non la vediamo da un po’. Saremo felici di fissare un nuovo appuntamento quando preferisce. Ci contatti." },
      { dir: "in", text: "Grazie del promemoria. Prenoto per venerdì." },
    ],
    cards: [
      { title: "Un’agenda flessibile", text: "Appuntamenti e servizi secondo il tuo modo di lavorare." },
      { title: "Prenotazioni online", text: "I clienti prenotano autonomamente, 24/7." },
      { title: "Promemoria", text: "Notifiche automatiche prima degli appuntamenti." },
    ],
    whyTitle: "Perché le imprese di servizi scelgono Jedro+",
    whyLead: "In ogni settore, Jedro+ aiuta con prenotazioni, promemoria e ritorni dei clienti. Adattiamo la configurazione e ti aiutiamo a iniziare rapidamente.",
    whyList: [
      { b: "Per ogni settore", rest: " — configurazione su misura per il tuo flusso di lavoro." },
      { b: "Tutto in un unico posto", rest: " — appuntamenti, clienti, promemoria e prenotazioni." },
      { b: "Meno cancellazioni", rest: " — promemoria puntuali in ogni attività." },
      { b: "Aiuto per iniziare", rest: " — aiuto nell’avvio e nella configurazione." },
    ],
    faq: [
      {
        q: "Jedro+ funziona nel mio settore?",
        a: "Sì. Se lavori con appuntamenti e clienti, Jedro+ lavora per te, con una configurazione su misura.",
      },
      {
        q: "Potete adattare il sistema al mio modo di lavorare?",
        a: "Sì. Appuntamenti e servizi seguono il tuo flusso di lavoro e la configurazione viene adattata di conseguenza.",
      },
      {
        q: "Riceverò aiuto per iniziare?",
        a: "Sì. Ti aiutiamo a importare i clienti e configurare le funzioni principali per partire rapidamente.",
      },
    ],
  },
};

export const panogeSlugs = Object.keys(panoge);
