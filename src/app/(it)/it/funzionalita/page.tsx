// Generated from Slovenian source and src/locales/it.json.
import { pageMetadata } from "@/italian/lib/seo";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Nav } from "@/italian/components/redesign/Nav";
import { Footer } from "@/italian/components/redesign/Footer";
import { RevealOnScroll } from "@/italian/components/redesign/RevealOnScroll";
import { SubpageHero } from "@/italian/components/redesign/SubpageHero";

export const metadata: Metadata = pageMetadata("/it/funzionalita", {
  title: "Funzionalità | Jedro+",
  description:
    "Tutte le funzionalità Jedro+ in un unico posto: calendario, CRM clienti, promemoria AI automatici, prenotazioni online e strumenti intelligenti per imprese di servizi.",
  openGraph: {
    title: "Funzionalità | Jedro+",
    description:
      "Tutte le funzionalità Jedro+ in un unico posto: calendario, CRM clienti, promemoria AI automatici, prenotazioni online e strumenti intelligenti per imprese di servizi.",
  },
});

const ChkWhite = () => (
  <span className="chk">
    <svg viewBox="0 0 12 12" fill="none">
      <path d="M2 6.2l2.6 2.6L10 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

type Feat = { icon: ReactNode; title: string; text: string };

const feats: Feat[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M10.3 21a2 2 0 003.4 0" />
      </svg>
    ),
    title: "Promemoria prima dell’appuntamento",
    text: "Promemoria personalizzati via email e SMS, con il tuo tono, al momento giusto.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
    title: "Messaggi dopo l’appuntamento",
    text: "Ringraziamenti, indicazioni dopo il servizio e inviti a prenotare di nuovo.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4.5" width="18" height="16" rx="2" />
        <path d="M3 9.5h18M8 3v3M16 3v3" />
      </svg>
    ),
    title: "Calendario appuntamenti",
    text: "Una vista calendario chiara per aggiungere, spostare e annullare appuntamenti rapidamente.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3.5 20a5.5 5.5 0 0111 0" />
        <path d="M16 5.4a3.2 3.2 0 010 5.2M17 13.5a5.5 5.5 0 013.5 6" />
      </svg>
    ),
    title: "Database clienti (CRM)",
    text: "Contatti, storico visite, note e preferenze dei clienti in un unico posto.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3.2 2" />
      </svg>
    ),
    title: "Archivio appuntamenti",
    text: "Ogni appuntamento ha storico, stato e collegamento al servizio e all’operatore.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 14.5l5-5" />
        <path d="M14 7.5l1-1a3.8 3.8 0 015.4 5.4l-2 2a3.8 3.8 0 01-5.4 0" />
        <path d="M10 16.5l-1 1a3.8 3.8 0 01-5.4-5.4l2-2a3.8 3.8 0 015.4 0" />
      </svg>
    ),
    title: "Prenotazioni online",
    text: "Un link condivisibile per prenotare facilmente, ovunque siano i clienti.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l9 5-9 5-9-5 9-5z" />
        <path d="M3 13l9 5 9-5" />
      </svg>
    ),
    title: "Servizi e personale",
    text: "Organizza servizi, durate, prezzi e turni del team.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 7L4 12l5 5" />
        <path d="M4 12h11a5 5 0 015 5v1" />
      </svg>
    ),
    title: "Clienti inattivi",
    text: "Individua i clienti inattivi e invitali a tornare con campagne. Riempi l’agenda.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19V5M4 19h16" />
        <path d="M7 15l4-4 3 3 5-6" />
      </svg>
    ),
    title: "Statistiche",
    text: "Appuntamenti, occupazione, cancellazioni, assenze e tendenze a colpo d’occhio.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 5.5h16a1 1 0 011 1V15a1 1 0 01-1 1H9.5L5 19.5V16H4a1 1 0 01-1-1V6.5a1 1 0 011-1z" />
        <path d="M8 9.5h8M8 12.5h5" />
      </svg>
    ),
    title: "Comunicazione",
    text: "L’AI crea messaggi personalizzati per ogni cliente: avvisa tutti con un clic.",
  },
];

const deepDives = [
  {
    slug: "promemoria-sms",
    n: "01",
    title: "Promemoria SMS per i clienti",
    desc: "Promemoria automatici al momento giusto significano meno cancellazioni e assenze.",
  },
  {
    slug: "prenotazioni-online",
    n: "02",
    title: "Prenotazioni online, 24/7",
    desc: "I clienti prenotano quando vogliono, riempiendo l’agenda senza telefonate.",
  },
  {
    slug: "crm-clienti",
    n: "03",
    title: "CRM per imprese di servizi",
    desc: "Contatti, storico visite e note di ogni cliente in un unico posto.",
  },
  {
    slug: "comunicazione-ai",
    n: "04",
    title: "Messaggi personalizzati con AI",
    desc: "L’AI scrive con il tuo tono, usando nome, appuntamento e servizio del cliente.",
  },
  {
    slug: "promozioni-sconti",
    n: "05",
    title: "Sconti, happy hour e promozioni",
    desc: "Riempi le ore più tranquille con offerte mirate e servizi aggiuntivi.",
  },
  {
    slug: "risorse",
    n: "06",
    title: "Risorse: sale, cabine e attrezzature",
    desc: "Gli appuntamenti tengono conto anche della sala, del lettino o del dispositivo, oltre che dell’operatore.",
  },
  {
    slug: "richieste-appuntamento",
    n: "07",
    title: "Richieste di appuntamento",
    desc: "Il cliente propone un periodo e tu confermi l’orario preciso.",
  },
  {
    slug: "design-prenotazioni-codici-qr",
    n: "08",
    title: "Design di prenotazione, link e codici QR",
    desc: "Il tuo stile, un link per ogni canale e un poster QR.",
  },
  {
    slug: "receptionist-plus",
    n: "09",
    title: "Receptionist+ — Receptionist AI",
    desc: "Risponde alle chiamate, aiuta i clienti e aggiunge gli appuntamenti al calendario.",
  },
];

const DeepArrow = () => (
  <span className="indrow__go">
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

export default function Funkcije() {
  return (
    <>
      <Nav variant="light" active="/it/funzionalita" />
      <main id="main-content">

      <SubpageHero
        eyebrow="Funzionalità"
        title={
          <>
             Tutto ciò che ti serve{" "}
            <span className="grad-text">e molto altro</span>
          </>
        }
        description={
          <>
             Tutto è collegato: calendario → cliente → servizio → personale → promemoria → statistiche. Progettato per l’efficienza, con l’AI che riduce il lavoro manuale. </>
        }
        actions={
          <>
            <a className="btn btn--grad btn--lg" href="https://app.jedroplus.com/signup">
               Prova gratis <span className="arr">→</span>
            </a>
            <a className="btn btn--ghost btn--lg" href="/it#kontakt">
               Prenota una demo </a>
          </>
        }
      />

      {/* FEATURE GRID */}
      <section className="section subpage-first">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Tutte le funzionalità</span>
            <h2 style={{ marginTop: 18 }}>
               Tutto ciò che serve <span className="grad-text">alla tua attività</span>
            </h2>
            <p className="lead">
               Dieci strumenti connessi per sostituire app separate e semplificare il lavoro. </p>
          </div>
          <div className="feat-grid reveal">
            {feats.map((f) => (
              <article className="feat" key={f.title}>
                <div className="feat__ico">{f.icon}</div>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DEEP DIVES — povezave na funkcijske pod-strani */}
      <section className="section section--soft">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Nel dettaglio</span>
            <h2 style={{ marginTop: 18 }}>
               Scopri le funzionalità principali <span className="grad-text">nel dettaglio</span>
            </h2>
            <p className="lead">
               Ogni funzionalità ha una pagina dedicata con spiegazioni, esempi e domande frequenti. </p>
          </div>
          <div className="ind-rows" style={{ marginTop: 40 }}>
            {deepDives.map((r) => (
              <Link className="indrow indrow--nomedia reveal" href={`/it/funzionalita/${r.slug}`} key={r.slug}>
                <div className="indrow__body">
                  <span className="indrow__n">{r.n}</span>
                  <h3>{r.title}{r.slug === "receptionist-plus" && <span className="new-badge" style={{ marginLeft: 12, verticalAlign: "middle" }}>Novità</span>}</h3>
                  <p>{r.desc}</p>
                </div>
                <DeepArrow />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PERSONALIZACIJA */}
      <section className="section" id="personalizacija">
        <div className="wrap split">
          <div className="split__body reveal">
            <span className="eyebrow">Personalizzazione</span>
            <h2 style={{ marginTop: 18 }}>
               Messaggi con <span className="grad-text">il tuo tono</span>
            </h2>
            <p className="lead">
               Jedro+ usa l’AI per creare messaggi che costruiscono relazioni vere: promemoria, messaggi successivi e indicazioni scritte come le scriveresti tu. </p>
            <ul className="split__list">
              <li>
                <ChkWhite />
                <span>
                  <b>Nome, appuntamento e indicazioni</b>  per ogni servizio, così il messaggio è davvero personale. </span>
              </li>
              <li>
                <ChkWhite />
                <span>
                  <b>Un’app su misura per te.</b>  Colori, tono e testi: il sistema si adatta a te. </span>
              </li>
              <li>
                <ChkWhite />
                <span>
                  <b>Email e SMS</b>  — scegli il canale in base al cliente e al messaggio. </span>
              </li>
            </ul>
          </div>
          <div className="split__media reveal" data-d="1">
            <div className="chat" style={{ background: "#fff" }}>
              <div className="chat__time">Oggi, 14:23</div>
              <div className="bubble bubble--out">
                 Ciao Ana! 😊 Dopo lo sbiancamento di oggi, per le prossime 24 ore consigliamo di evitare bevande scure. Fai risplendere il tuo sorriso! ✨ </div>
              <div className="bubble bubble--in" style={{ background: "var(--bg-soft)" }}>
                 Ciao Luka! ✂️ Il tuo appuntamento per il taglio è domani alle 14:30. Ti aspettiamo 5 minuti prima. Buona giornata! </div>
              <div className="bubble bubble--out">
                 Grazie per averci scelto, Sara! 💙 È stato un piacere prenderci cura di te. A presto! 🌟 </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section className="section">
        <div className="wrap">
          <div className="split__body reveal" style={{ maxWidth: 760 }}>
            <span className="eyebrow">Prenotazioni online</span>
            <h2 style={{ marginTop: 18 }}>
               Esperienze di prenotazione <span className="grad-text">che si fanno notare</span>
            </h2>
            <p className="lead">
               Scegli un design per le prenotazioni online che invogli i clienti a tornare. </p>
            <ul className="split__list">
              <li>
                <ChkWhite />
                <span>
                   Personalizzato con i tuoi colori e il tuo logo, <b>senza programmare</b>
                </span>
              </li>
              <li>
                <ChkWhite />
                <span>
                   Ottimizzato per dispositivi mobili: i clienti prenotano dal telefono </span>
              </li>
              <li>
                <ChkWhite />
                <span>
                  <b>Diversi design</b>  in base al piano e al tuo marchio </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="wrap">
          <div className="cta-band reveal">
            <div className="cta-band__glow"></div>
            <div className="cta-band__in">
              <span className="eyebrow" style={{ color: "rgba(255,255,255,.75)" }}>
                 Inizia oggi </span>
              <h2 style={{ marginTop: 18 }}>Configura Jedro+ in pochi minuti.</h2>
              <p>
                 Dalla registrazione all’utilizzo: appuntamenti, promemoria e strumenti AI in un unico posto. </p>
              <div className="cta-band__btns">
                <a className="btn btn--light btn--lg" href="https://app.jedroplus.com/signup">
                   Prova gratis <span className="arr">→</span>
                </a>
                <a
                  className="btn btn--ghost btn--lg"
                  href="/it#kontakt"
                  style={{ color: "#fff", borderColor: "rgba(255,255,255,.25)" }}
                >
                   Prenota una demo </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      </main>
      <Footer />
      <RevealOnScroll />
    </>
  );
}
