// Generated from Slovenian source and src/locales/it.json.
// Content for each /funkcije/[slug] subpage. Mirrors the structure of
// panoge-data.ts: a shared template renders these fields, the CTA band is
// identical across pages. Each entry targets one SEO keyword.

export type FunkcijaListItem = { b: string; rest: string };
export type FunkcijaCard = { title: string; text: string };
export type FunkcijaFaq = { q: string; a: string };

export type Funkcija = {
  title: string; // h1 — vsebuje ciljni keyword
  metaTitle: string; // <title>
  metaDescription: string; // 140–160 znakov
  eyebrow: string; // hero eyebrow
  heroTag: string; // hero placeholder label
  mediaTag: string; // split media placeholder label
  heroSub: string;
  lead: string;
  body: string[]; // dodatni odstavki vsebine (pod prednostmi)
  list: FunkcijaListItem[];
  cards: FunkcijaCard[];
  faq: FunkcijaFaq[];
};

export const funkcije: Record<string, Funkcija> = {
  "promemoria-sms": {
    title: "Promemoria SMS per i clienti",
    metaTitle: "Promemoria SMS per i clienti | Jedro+",
    metaDescription:
      "I promemoria SMS automatici riducono cancellazioni e assenze. Jedro+ invia i messaggi al momento giusto, con il tuo tono, senza lavoro manuale.",
    eyebrow: "Funzionalità",
    heroTag: "FOTO — Telefono con promemoria SMS prima dell’appuntamento",
    mediaTag: "FOTO — Cliente che riceve un promemoria SMS",
    heroSub:
      "Ogni cliente riceve un promemoria puntuale: meno appuntamenti dimenticati, un’agenda più piena e nessun messaggio da digitare a mano.",
    lead: "Un promemoria SMS indica al cliente quando ha l’appuntamento e il servizio prenotato. Jedro+ collega l’invio al calendario e alla scheda cliente, evitando di scrivere ogni messaggio manualmente. Prima dell’avvio verifica recapito, orario e testo su un appuntamento di prova.",
    body: [
      "Scegli quando inviare i promemoria, ad esempio 24 ore e poi 2 ore prima. Ogni messaggio contiene nome, data, ora e servizio, con eventuali indicazioni di preparazione. Il cliente sa esattamente quando e dove arrivare, riducendo ore vuote e cancellazioni all’ultimo momento.",
      "I promemoria sono collegati a calendario e database, senza duplicare i dati. Una nuova prenotazione online o manuale attiva il promemoria. Se il cliente sposta o annulla, il messaggio si aggiorna o si ferma. Gli SMS servono anche per cambiamenti urgenti: avvisa con un clic tutti i clienti di una giornata se una malattia modifica l’agenda.",
      "Usa gli SMS anche per ringraziamenti, inviti a riprenotare e recupero dei clienti inattivi. Scegli SMS o email in base al messaggio e al cliente. Tutto rimane collegato allo storico di ciascuno.",
    ],
    list: [
      { b: "Meno assenze", rest: " — i promemoria puntuali riducono le cancellazioni tardive" },
      { b: "Elevata lettura", rest: " — i clienti leggono gli SMS molto più delle email" },
      { b: "Messaggi personalizzati", rest: " — nome, appuntamento e servizio inseriti automaticamente" },
      { b: "Meno lavoro manuale", rest: " — i promemoria partono dal calendario in automatico" },
    ],
    cards: [
      { title: "Promemoria programmabili", text: "Scegli quando inviare, ad esempio il giorno prima e 2 ore prima dell’appuntamento." },
      { title: "Collegato al calendario", text: "Un nuovo appuntamento attiva il promemoria. Una cancellazione lo interrompe." },
      { title: "Notifiche di gruppo", text: "Avvisa con un clic tutti i clienti di una giornata delle modifiche all’agenda." },
    ],
    faq: [
      {
        q: "Quando viene inviato il promemoria SMS?",
        a: "Decidi tu l’orario. Un’impostazione comune prevede 24 ore prima e un breve promemoria 2 ore prima. Il sistema li invia automaticamente in base al calendario.",
      },
      {
        q: "I promemoria SMS sono personalizzati?",
        a: "Sì. Ogni messaggio include nome, data, ora e servizio. Puoi aggiungere indicazioni di preparazione o altri dettagli, come in un messaggio scritto personalmente.",
      },
      {
        q: "Cosa succede se il cliente sposta o annulla?",
        a: "Il promemoria si aggiorna o si interrompe automaticamente. Essendo collegato al calendario, il cliente non riceve messaggi per appuntamenti già annullati.",
      },
      {
        q: "I promemoria SMS ed email possono lavorare insieme?",
        a: "Sì. Scegli il canale in base al messaggio e al cliente: SMS per promemoria urgenti, email per informazioni più lunghe. Tutto rimane nello storico del cliente, in un unico database.",
      },
    ],
  },

  "prenotazioni-online": {
    title: "Prenotazioni online, 24/7",
    metaTitle: "Prenotazione appuntamenti online | Jedro+",
    metaDescription:
      "Prenotazioni online che lavorano per te: i clienti prenotano 24/7 con un link condivisibile, riempiendo l’agenda senza chiamate o coordinamento manuale.",
    eyebrow: "Funzionalità",
    heroTag: "FOTO — Cliente che prenota online",
    mediaTag: "FOTO — Pagina prenotazioni su telefono e computer",
    heroSub:
      "I clienti prenotano quando preferiscono, di giorno o di notte. Tu ti concentri sul lavoro.",
    lead: "Le chiamate durante un servizio interrompono il lavoro o restano senza risposta. Chi non riesce a prenotare può rivolgersi altrove. Le prenotazioni online mostrano gli orari liberi e permettono di prenotare in qualsiasi momento, anche quando sei chiuso o impegnato.",
    body: [
      "La pagina usa i tuoi colori e il logo e mostra solo servizi, operatori e orari scelti da te. Il cliente seleziona il servizio, vede la disponibilità in base al calendario e alla durata e conferma in pochi passaggi. Tutto è ottimizzato per il telefono.",
      "Ogni prenotazione entra automaticamente nel calendario, senza doppio inserimento o sovrapposizioni. La disponibilità si aggiorna in tempo reale, eliminando gli orari già occupati. Ogni nuova prenotazione attiva conferma e promemoria, contribuendo a ridurre le cancellazioni.",
      "Le prenotazioni online costruiscono anche il database clienti. La prima crea una scheda con i dati essenziali e lo storico cresce a ogni visita. Ogni prenotazione organizza agenda e dati senza telefonate o messaggi manuali.",
    ],
    list: [
      { b: "Prenotazioni 24/7", rest: " — i clienti prenotano anche fuori orario" },
      { b: "Meno chiamate e messaggi", rest: " — le prenotazioni funzionano senza aspettare una risposta" },
      { b: "Con i tuoi colori", rest: " — una pagina con il tuo marchio, senza programmare" },
      { b: "Sincronizzato con il calendario", rest: " — disponibilità in tempo reale senza sovrapposizioni" },
    ],
    cards: [
      { title: "Link condivisibile", text: "Inserisci il link su Instagram, sul profilo Google o sul sito per prenotare con un clic." },
      { title: "Ottimizzato per mobile", text: "I clienti prenotano dal telefono in pochi secondi, ovunque siano." },
      { title: "Conferma automatica", text: "Il cliente riceve subito una conferma e successivamente un promemoria." },
    ],
    faq: [
      {
        q: "Mi serve un sito per le prenotazioni online?",
        a: "No. Jedro+ crea una pagina autonoma con un link dedicato. Condividilo sui social, sul profilo Google o via email. Se hai un sito, basta collegarlo.",
      },
      {
        q: "Come vengono evitate le sovrapposizioni?",
        a: "La disponibilità è mostrata in tempo reale in base al calendario e alla durata dei servizi. Dopo la prenotazione, l’orario non è più disponibile per altri, evitando doppie prenotazioni.",
      },
      {
        q: "Posso scegliere quali servizi si prenotano online?",
        a: "Sì. Decidi quali servizi, operatori e orari sono visibili. Puoi mantenere alcuni servizi solo su prenotazione manuale e aprirne altri online.",
      },
      {
        q: "Cosa succede dopo la prenotazione?",
        a: "L’appuntamento entra nel calendario automaticamente, il cliente riceve conferma e promemoria e la sua scheda viene creata o aggiornata senza lavoro manuale.",
      },
    ],
  },

  "crm-clienti": {
    title: "CRM per imprese di servizi",
    metaTitle: "CRM clienti per imprese di servizi | Jedro+",
    metaDescription:
      "CRM per imprese di servizi: contatti, storico visite, note e preferenze in un unico posto. Relazioni migliori, più ritorni e dati ordinati.",
    eyebrow: "Funzionalità",
    heroTag: "FOTO — Panoramica database clienti",
    mediaTag: "FOTO — Scheda cliente con storico visite",
    heroSub:
      "Ogni cliente, visita e nota in un unico posto, per sapere chi hai davanti e quando invitarlo a tornare.",
    lead: "Dati sparsi tra quaderni, telefoni e memoria del personale finiscono per costare ricavi. Il CRM riunisce contatti, visite, servizi, note e preferenze. Scopri chi è il cliente, cosa ha prenotato e quando invitarlo di nuovo.",
    body: [
      "Le schede si costruiscono da sole. Una prenotazione online o manuale crea una scheda che cresce a ogni visita, senza duplicazioni o trascrizioni. Consulta servizi, ultima visita, allergie, preferenze, prodotti utilizzati e messaggi precedenti a colpo d’occhio.",
      "Collegato a calendario e comunicazione, il CRM diventa uno strumento di crescita. Filtra i clienti, ad esempio chi non torna da tempo, e invitali con pochi clic. I messaggi personalizzati usano nome, ultimo servizio e altri dettagli per un contatto individuale.",
      "Un database ordinato conserva le conoscenze quando il team cambia o cresce. I dati rimangono nel sistema anche se un collaboratore lascia. Tutti vedono le stesse informazioni aggiornate, riducendo errori e lavoro doppio e facendo sentire i clienti riconosciuti.",
    ],
    list: [
      { b: "Tutto in un unico posto", rest: " — contatti, storico, note e preferenze di ogni cliente" },
      { b: "Schede create automaticamente", rest: " — ogni appuntamento aggiorna la scheda senza lavoro manuale" },
      { b: "Più visite successive", rest: " — filtra i clienti inattivi e invitali a tornare" },
      { b: "Le conoscenze restano nel sistema", rest: " — i dati rimangono anche quando il personale cambia" },
    ],
    cards: [
      { title: "Scheda cliente", text: "Storico visite, servizi effettuati e note in un’unica vista." },
      { title: "Filtri intelligenti", text: "Trova i clienti inattivi o migliori e invia messaggi mirati." },
      { title: "Collegato alla comunicazione", text: "I messaggi usano automaticamente i dati della scheda, rendendo personale ogni contatto." },
    ],
    faq: [
      {
        q: "Devo inserire i clienti manualmente?",
        a: "Non necessariamente. Le schede vengono create quando si prenota online o si inserisce un appuntamento. Puoi importare i clienti esistenti e aggiungerne di nuovi con ogni prenotazione.",
      },
      {
        q: "Quali dati del cliente vengono conservati?",
        a: "Contatti, storico visite e servizi, note su preferenze, allergie e prodotti, oltre ai messaggi inviati: tutto in una scheda cliente.",
      },
      {
        q: "Posso filtrare i clienti e inviare messaggi mirati?",
        a: "Sì. Filtra ad esempio chi non torna da tempo e invitalo con pochi clic, con un messaggio personalizzato che usa automaticamente i suoi dati.",
      },
      {
        q: "Cosa succede ai dati quando cambia il personale?",
        a: "I dati rimangono nel sistema. Tutto il team vede le stesse informazioni aggiornate, conservando le conoscenze quando il gruppo cambia o cresce.",
      },
    ],
  },

  "comunicazione-ai": {
    title: "Messaggi AI personalizzati per i clienti",
    metaTitle: "Messaggi AI personalizzati per i clienti | Jedro+",
    metaDescription:
      "Jedro+ usa l’AI per scrivere promemoria e messaggi successivi con il tuo tono, usando nome e servizio del cliente. Avvisa tutti con un clic e rafforza le relazioni.",
    eyebrow: "Funzionalità",
    heroTag: "FOTO — Telefono con messaggio personalizzato",
    mediaTag: "FOTO — Esempi di messaggi AI nella chat",
    heroSub:
      "L’AI scrive come te, usando nome, appuntamento e servizio. Avvisa tutti con un clic.",
    lead: "I messaggi generici vengono spesso ignorati. Jedro+ crea promemoria, messaggi successivi e indicazioni con il tuo tono, nome del cliente, data e servizio specifico. Ogni messaggio è rivolto a quella persona.",
    body: [
      "L’AI usa i dati di cliente e appuntamento per scrivere il messaggio adatto: un promemoria cortese, indicazioni dopo il servizio o un invito a tornare. Imposta un tono informale, cordiale o professionale secondo il marchio. Mantieni il controllo e puoi rivedere i testi prima dell’invio.",
      "Avvisa i clienti di una giornata o un gruppo con un clic. L’AI mantiene ogni messaggio personale, adattando nome, servizio e contesto anche quando ne invii decine insieme. Risparmia tempo ed evita errori di trascrizione.",
      "Calendario e CRM mantengono i messaggi precisi e puntuali: promemoria prima, ringraziamenti dopo e inviti a chi manca da tempo. Scegli SMS o email in base al cliente e al contenuto; tutto è registrato nello storico.",
    ],
    list: [
      { b: "Messaggi con il tuo tono", rest: " — l’AI scrive in modo naturale, come te" },
      { b: "Personalizzazione automatica", rest: " — nome, appuntamento e servizio per ogni cliente" },
      { b: "Un clic per avvisare tutti", rest: " — decine di messaggi personali contemporaneamente" },
      { b: "Sempre puntuali", rest: " — promemoria, ringraziamenti e inviti al momento giusto" },
    ],
    cards: [
      { title: "AI nel tuo stile", text: "Imposta tono e marchio per messaggi autentici e personali." },
      { title: "Il controllo è tuo", text: "Rivedi e modifica ogni messaggio prima dell’invio." },
      { title: "Collegato ai tuoi dati", text: "I messaggi usano automaticamente nome, appuntamento e servizio dalle schede clienti." },
    ],
    faq: [
      {
        q: "I messaggi sembrano robotici?",
        a: "No. L’AI segue il tono impostato, da informale a professionale, e usa nome, appuntamento e servizio. I testi sembrano scritti personalmente.",
      },
      {
        q: "Posso controllare cosa viene inviato?",
        a: "Sì. L’AI prepara una bozza che puoi verificare e modificare. Se lo desideri, nulla parte senza la tua conferma.",
      },
      {
        q: "Come sa l’AI cosa scrivere?",
        a: "Usa i dati di calendario e clienti: nome, appuntamento, servizio svolto o previsto e contesto, come promemoria, ringraziamento o invito. Quindi prepara un messaggio personale adeguato.",
      },
      {
        q: "Quali canali sono supportati?",
        a: "SMS ed email. Scegli il canale in base a messaggio e cliente. Tutti i messaggi inviati restano nello storico.",
      },
    ],
  },

  "promozioni-sconti": {
    title: "Sconti, happy hour e promozioni",
    metaTitle: "Sconti e happy hour per imprese di servizi | Jedro+",
    metaDescription:
      "Gestisci sconti, happy hour e servizi aggiuntivi scontati in Jedro+. Riempi gli orari tranquilli con offerte impostate in pochi clic.",
    eyebrow: "Funzionalità",
    heroTag: "FOTO — Offerta promozionale nel calendario",
    mediaTag: "FOTO — Panoramica sconti e happy hour",
    heroSub:
      "Riempi le ore tranquille con offerte decise da te: sconti su servizi selezionati, happy hour o un servizio aggiuntivo conveniente.",
    lead: "Ogni salone o studio ha ore più tranquille. Riempile con offerte mirate. Jedro+ raccoglie le promozioni e le collega ai servizi già presenti nel sistema.",
    body: [
      "Imposta uno sconto percentuale o fisso, scegli servizi e validità. Crea un’offerta estiva, uno sconto per nuovi clienti o una promozione per un solo servizio senza calcolare i prezzi a mano.",
      "Gli happy hour applicano sconti in giorni e fasce orarie selezionati. Aiutano a riempire gli orari meno richiesti, come le mattine infrasettimanali, per tutti o alcuni servizi.",
      "I servizi aggiuntivi offrono un extra a prezzo ridotto durante la prenotazione. Prezzo originale, sconto e prezzo finale sono mostrati chiaramente.",
    ],
    list: [
      { b: "Sconti in % o €", rest: " — per servizi e date selezionati" },
      { b: "Happy hours", rest: " — sconti in giorni e orari scelti" },
      { b: "Servizi aggiuntivi scontati", rest: " — più valore per appuntamento" },
      { b: "Tutto in un unico posto", rest: " — ogni promozione è collegata ai tuoi servizi" },
    ],
    cards: [
      { title: "Sconti", text: "Percentuale o importo fisso, servizi selezionati e date di inizio e fine." },
      { title: "Happy hours", text: "Giorni della settimana, fasce orarie e sconti per le ore tranquille." },
      { title: "Servizi aggiuntivi", text: "Un servizio extra insieme al principale, con prezzo originale e finale visibili." },
    ],
    faq: [
      {
        q: "Uno sconto può valere solo per alcuni servizi?",
        a: "Sì. Scegli i servizi ammessi per ogni sconto. Gli happy hour possono applicarsi anche a tutti insieme.",
      },
      {
        q: "Posso limitare uno sconto a un periodo?",
        a: "Sì. Imposta inizio e fine degli sconti. Gli happy hour valgono nei giorni e nella fascia oraria scelti.",
      },
      {
        q: "Cosa sono i servizi aggiuntivi?",
        a: "Servizi extra proposti insieme a quello principale a un prezzo ridotto. La panoramica mostra prezzo originale, sconto e prezzo finale.",
      },
      {
        q: "Posso impostare uno sconto fisso?",
        a: "Sì. Puoi scegliere una percentuale o un importo fisso in euro.",
      },
    ],
  },

  "risorse": {
    title: "Risorse: sale, cabine e attrezzature",
    metaTitle: "Gestione risorse: sale, cabine e attrezzature | Jedro+",
    metaDescription:
      "Gestisci le risorse necessarie ai servizi: lettini, cabine e attrezzature. Jedro+ evita doppie prenotazioni e mostra la disponibilità.",
    eyebrow: "Funzionalità",
    heroTag: "FOTO — Cabine e attrezzature in salone",
    mediaTag: "FOTO — Panoramica risorse e disponibilità",
    heroSub:
      "Un appuntamento dipende anche da lettino, sala o dispositivo, oltre che da una persona. Jedro+ tiene conto di tutto.",
    lead: "Molti servizi richiedono lettino, cabina, laser o sala, oltre all’operatore. Senza gestire le risorse possono verificarsi doppie prenotazioni. Jedro+ collega gli oggetti fisici ai servizi che li usano.",
    body: [
      "Ogni risorsa ha nome, numero di unità e capacità per unità. Vedi capacità totale, risorse attive e servizi collegati a colpo d’occhio.",
      "Imposta una risorsa sempre disponibile o assegna un orario. Disattivala quando non serve, senza eliminarla.",
      "Collegando risorse e servizi, il sistema sa cosa deve essere libero. Evita situazioni in cui l’operatore è disponibile ma l’attrezzatura è occupata.",
    ],
    list: [
      { b: "Meno doppie prenotazioni", rest: " — si considerano anche lettini, sale e attrezzature" },
      { b: "Unità e capacità", rest: " — più unità della stessa risorsa, con capacità per unità" },
      { b: "Orario della risorsa", rest: " — sempre disponibile o con un orario definito" },
      { b: "Collegato ai servizi", rest: " — scopri quali servizi usano ogni risorsa" },
    ],
    cards: [
      { title: "Unità e capacità", text: "Più unità della stessa risorsa e capacità di ogni unità." },
      { title: "Attivo / inattivo", text: "Disattiva temporaneamente una risorsa senza perderne i dati." },
      { title: "A colpo d’occhio", text: "Risorse totali, attive, capacità e servizi collegati." },
    ],
    faq: [
      {
        q: "Cos’è una risorsa in Jedro+?",
        a: "Un elemento fisico necessario al servizio, come lettino, cabina, sala o attrezzatura. È distinto dall’operatore che esegue il servizio.",
      },
      {
        q: "Posso avere più unità della stessa risorsa?",
        a: "Sì. Imposta numero di unità e capacità di ciascuna; il sistema mostra la capacità totale.",
      },
      {
        q: "Posso assegnare un orario a una risorsa?",
        a: "Sì. Una risorsa può essere sempre disponibile o avere un’agenda propria.",
      },
      {
        q: "Come collego una risorsa a un servizio?",
        a: "Collegala ai servizi che ne hanno bisogno. La scheda mostra tutti i servizi associati.",
      },
    ],
  },

  "richieste-appuntamento": {
    title: "Richieste di appuntamento: confermi tu",
    metaTitle: "Richieste di appuntamento e conferma manuale | Jedro+",
    metaDescription:
      "Il cliente richiede un periodo e tu confermi orario, servizio e operatore. Jedro+ supporta le attività in cui serve approvare le prenotazioni.",
    eyebrow: "Funzionalità",
    heroTag: "FOTO — Elenco richieste di appuntamento",
    mediaTag: "FOTO — Conferma di una richiesta",
    heroSub:
      "Alcune prenotazioni richiedono una verifica. Il cliente invia una richiesta e tu confermi l’appuntamento giusto.",
    lead: "Per alcuni servizi serve una conferma perché la durata varia, l’operatore deve approvare o l’agenda è complessa. Il cliente indica il periodo preferito e tu scegli servizio, persona e orario in pochi passaggi.",
    body: [
      "Le richieste sono in un unico posto, filtrabili per stato: in valutazione, confermate o rifiutate. Ognuna mostra data di invio e periodo richiesto.",
      "Conferma in tre passaggi: scegli servizio, operatore e un orario libero nel periodo richiesto, adatto a entrambi. L’appuntamento compare nel calendario.",
      "Se non puoi fissarlo, rifiuta la richiesta e indica un motivo, così il cliente comprende la ragione.",
    ],
    list: [
      { b: "Richieste in un unico posto", rest: " — filtra per stato: in valutazione, confermate o rifiutate" },
      { b: "Conferma in tre passaggi", rest: " — servizio, operatore, data e ora" },
      { b: "Solo orari disponibili", rest: " — nel periodo richiesto dal cliente" },
      { b: "Rifiuto con motivazione", rest: " — il cliente comprende perché non è possibile prenotare" },
    ],
    cards: [
      { title: "Periodo preferito", text: "Il cliente indica quando è disponibile e tu scegli l’ora precisa." },
      { title: "Orari disponibili", text: "Il sistema trova gli orari liberi per servizio e operatore scelti." },
      { title: "Stato tracciabile", text: "Ogni richiesta è in valutazione, confermata o rifiutata." },
    ],
    faq: [
      {
        q: "Quando sono utili le richieste di appuntamento?",
        a: "Quando vuoi approvare le prenotazioni: durata variabile, conferma dell’operatore o agenda poco prevedibile.",
      },
      {
        q: "Cosa vede il cliente se rifiuto?",
        a: "Inserisci un motivo, ad esempio mancanza di disponibilità nel periodo scelto, che viene registrato nella richiesta.",
      },
      {
        q: "Come confermo una richiesta?",
        a: "Seleziona servizio, operatore e un orario libero nel periodo richiesto. L’appuntamento confermato entra nel calendario.",
      },
      {
        q: "Posso filtrare le richieste?",
        a: "Sì. Visualizza tutte le richieste o filtra per stato: in valutazione, confermate e rifiutate.",
      },
    ],
  },

  "design-prenotazioni-codici-qr": {
    title: "Design di prenotazione, link e codici QR",
    metaTitle: "Pagine di prenotazione, design e codici QR | Jedro+",
    metaDescription:
      "Scegli il design delle prenotazioni, usa link diversi per ogni canale e stampa un QR per la reception. Tutto in Jedro+.",
    eyebrow: "Funzionalità",
    heroTag: "FOTO — Codice QR per prenotare alla reception",
    mediaTag: "FOTO — Scelta del design della pagina",
    heroSub:
      "Un aspetto coerente con il marchio, un link per canale e un QR da stampare alla reception.",
    lead: "La prenotazione online è spesso il primo contatto con l’attività. Scegli il design in Jedro+, usa link diversi per Instagram, sito e firma email e stampa un QR per reception, porta o vetrina.",
    body: [
      "I design standard sono Classico, Moderno ed Elegante. Jedro Pro aggiunge Stagionale, che cambia con stagioni e festività, Magazine e Casino. Nuovi design vengono aggiunti regolarmente.",
      "Usa un design diverso per ogni canale: Instagram, sito o firma email. Ogni link porta alla tua pagina con un aspetto diverso. Uno è il link principale, usato anche nei messaggi.",
      "Stampa un poster QR A6 (105 × 148 mm) in stile pulito, con i tuoi colori, elegante o scuro. Il codice punta al link principale e rimane valido quando cambia il design. Un QR separato permette ai nuovi clienti di registrarsi senza prenotare.",
    ],
    list: [
      { b: "6 design", rest: " — Classico, Moderno ed Elegante, più Stagionale, Magazine e Casino con Pro" },
      { b: "Un link per ogni canale", rest: " — Instagram, sito ed email, ciascuno con il proprio stile" },
      { b: "Poster QR A6", rest: " — per reception, porte o vetrine, in quattro stili" },
      { b: "QR per la registrazione clienti", rest: " — il cliente si registra senza prenotare" },
    ],
    cards: [
      { title: "Scelta del design", text: "Dal semplice al raffinato, in linea con il tuo marchio." },
      { title: "Più link", text: "La stessa pagina, un aspetto diverso per ogni canale." },
      { title: "QR pronto per la stampa", text: "Un poster A6 nello stile scelto, sempre collegato al link principale." },
    ],
    faq: [
      {
        q: "Quali design sono disponibili?",
        a: "Classico, Moderno ed Elegante sono standard. Jedro Pro include anche Stagionale, Magazine e Casino.",
      },
      {
        q: "Posso usare più link di prenotazione?",
        a: "Sì. Usa ogni link su un canale diverso con il proprio design. Uno è il principale, usato anche nei messaggi.",
      },
      {
        q: "Cosa succede ai QR stampati se cambio il design?",
        a: "Il codice punta al link principale e rimane valido dopo un cambio di design.",
      },
      {
        q: "Il cliente può usare un QR solo per registrarsi?",
        a: "Sì. Un QR dedicato permette di inserire i dati nel database clienti senza prenotare un appuntamento.",
      },
    ],
  },
};

export const funkcijeSlugs = Object.keys(funkcije);
