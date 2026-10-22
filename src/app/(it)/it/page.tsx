// Generated from Slovenian source and src/locales/it.json.
import Image from "next/image";
import { pageMetadata, DEFAULT_DESCRIPTION } from "@/italian/lib/seo";
import { ReceptionistSpotlight } from "@/italian/components/redesign/ReceptionistSpotlight";
import { Nav } from "@/italian/components/redesign/Nav";
import { Footer } from "@/italian/components/redesign/Footer";
import { HeroCalendar } from "@/italian/components/redesign/HeroCalendar";
import { RevealOnScroll } from "@/italian/components/redesign/RevealOnScroll";
import { industries } from "@/italian/components/redesign/data";
import { JsonLd } from "@/components/JsonLd";
import { Faq } from "@/italian/components/redesign/Faq";
import { homeFaq } from "@/italian/components/redesign/faq-data";
import { softwareApplicationSchema } from "@/italian/lib/schema";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata = pageMetadata("/it", {
  title: "Jedro+ | Software di prenotazione e receptionist AI",
  description: DEFAULT_DESCRIPTION,
});

const Check = () => (
  <span className="chk">
    <svg viewBox="0 0 12 12" fill="none">
      <path
        d="M2 6.2l2.6 2.6L10 3"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

type Feature = { icon: ReactNode; title: string; text: string };

const features: Feature[] = [
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
    text: "Una panoramica chiara per aggiungere, spostare e annullare appuntamenti rapidamente.",
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
    text: "Contatti, storico visite, note e preferenze in un unico posto.",
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
    text: "Un link condivisibile per prenotare facilmente, ovunque siano i tuoi clienti.",
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
        <path d="M9 7L4 12l5 5" />
        <path d="M4 12h11a5 5 0 015 5v1" />
      </svg>
    ),
    title: "Clienti inattivi",
    text: "Le campagne automatiche fanno tornare i clienti inattivi. Riempi l’agenda.",
  },
];

const Fcard = ({ f, hidden }: { f: Feature; hidden?: boolean }) => (
  <article className="fcard" aria-hidden={hidden || undefined}>
    <div className="fcard__ico">{f.icon}</div>
    <h3>{f.title}</h3>
    <p>{f.text}</p>
  </article>
);

const stats = [
  { n: "24/7", l: "prenotazioni online" },
  { n: "1", l: "calendario per tutte le prenotazioni" },
  { n: "30 min", l: "per la prima prova di Receptionist+" },
  { n: "0 €", l: "per il piano iniziale Free" },
];

const steps = [
  { n: "01 — Crea un account", t: "Registrati in pochi secondi e configura i dati essenziali della tua attività." },
  { n: "02 — Importa i clienti", t: "Possiamo importare il tuo database esistente, oppure puoi aggiungere i clienti nell’app." },
  { n: "03 — Appuntamenti e promemoria", t: "Calendario, database e notifiche iniziano a lavorare insieme." },
  { n: "04 — Cresci con l’AI", t: "Il sistema aiuta a riempire l’agenda e a migliorare comunicazione e risultati." },
];

export default function Home() {
  return (
    <>
      <JsonLd schema={softwareApplicationSchema} />
      <Nav variant="flow" active="/it" tone="light" />
      <main id="main-content">

      {/* 01 — CINEMATIC HERO */}
      <HeroCalendar />

      {/* 02 — FUNKCIJE */}
      <section className="section" id="funkcije">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Funzionalità</p>
            <h2 style={{ marginTop: 18 }}>
               Tutto ciò che ti serve, <br />
               collegato in <span className="grad-text">un unico posto</span>
            </h2>
            <p className="lead">
               Jedro+ è il sistema di prenotazione per le attività di servizi nell’Unione europea. Calendario, prenotazioni online, schede clienti e receptionist AI lavorano insieme. </p>
          </div>
        </div>
        <div className="marquee reveal" style={{ marginTop: 52 }}>
          <div className="marquee__track">
            {features.map((f, i) => (
              <Fcard key={"o" + i} f={f} />
            ))}
            {features.map((f, i) => (
              <Fcard key={"d" + i} f={f} hidden />
            ))}
          </div>
        </div>
      </section>

      <ReceptionistSpotlight />

      {/* 03 — KOMUNIKACIJA */}
      <section className="section section--soft" id="komunikacija">
        <div className="wrap">
          <div className="split">
            <div className="reveal">
              <p className="eyebrow">Comunicazione</p>
              <h2 style={{ marginTop: 18 }}>
                 Dimostra ai clienti <br />
                 che ci tieni </h2>
              <p className="lead" style={{ maxWidth: "46ch" }}>
                 Lascia che l’AI migliori l’esperienza dei tuoi clienti. Il tuo tono, il tuo nome e le indicazioni giuste al momento giusto. </p>
              <ul className="split__list">
                <li>
                  <Check />
                  <span>
                    <b>Testi sempre nuovi.</b>  L’AI scrive ogni messaggio individualmente, in modo personale e naturale. </span>
                </li>
                <li>
                  <Check />
                  <span>
                    <b>Tutto automatico.</b>  Promemoria e ringraziamenti partono da soli, facendoti risparmiare tempo e lavoro. </span>
                </li>
                <li>
                  <Check />
                  <span>
                    <b>Un’esperienza migliore per il cliente.</b>  Il messaggio giusto al momento giusto invoglia i clienti a tornare. </span>
                </li>
                <li>
                  <Check />
                  <span>
                    <b>Meno appuntamenti saltati.</b>  Promemoria puntuali significano un’agenda più piena e meno cancellazioni. </span>
                </li>
              </ul>
            </div>
            <div className="chat reveal" data-d="1">
              <div className="chat__time">Oggi, 14:23</div>
              <div className="bubble bubble--out">
                 Ciao Ana! 😊 Dopo lo sbiancamento di oggi, per le prossime 24 ore consigliamo di evitare alimenti e bevande scuri come caffè, vino rosso e mirtilli. Fai risplendere il tuo sorriso! ✨ </div>
              <div className="bubble bubble--in">
                 Ciao Luka! ✂️ Il tuo appuntamento per il taglio è domani alle 14:30. Ti aspettiamo 5 minuti prima. Buona giornata! </div>
              <div className="bubble bubble--out">
                 Grazie per averci scelto, Sara! 💙 È stato un piacere prenderci cura di te. La tua opinione conta molto per noi. A presto! 🌟 </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — REZULTATI */}
      <section className="section" id="rezultati">
        <div className="wrap">
          <div className="section-head center reveal">
            <p className="eyebrow eyebrow--plain" style={{ justifyContent: "center" }}>
               Risultati </p>
            <h2 style={{ marginTop: 18 }}>Chiarezza fin dall’inizio</h2>
            <p className="lead">
               Parti dalle funzioni essenziali e aggiungi quelle che supportano il tuo modo di lavorare. </p>
          </div>
          <div className="hero-stats reveal" style={{ marginTop: 56, borderRadius: "var(--r-lg)", border: "1px solid var(--line)", overflow: "hidden" }}>
            <div className="hero-stats__grid">
              {stats.map((s) => (
                <div className="stat" key={s.n}>
                  <div className="stat__n">{s.n}</div>
                  <div className="stat__l">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05 — PANOGE */}
      <section className="section section--soft" id="panoge">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Settori</p>
            <h2 style={{ marginTop: 18 }}>
               Per chi lavora <br />
               con i clienti </h2>
            <p className="lead">
               Qualunque sia la tua attività con appuntamenti e clienti, Jedro+ si adatta al tuo modo di lavorare. </p>
          </div>
          <div className="industries-marquee reveal">
            <div className="industries-marquee__track">
              {industries.map((d, i) => (
                <Link className="ind" href={`/it/settori/${d.slug}`} key={d.slug}>
                  {d.bg && (
                    <Image
                      className="ind__img"
                      src={`/images/industries/${d.bg}`}
                      alt={d.t}
                      fill
                      sizes="(max-width: 600px) 80vw, 30vw"
                    />
                  )}
                  <span className="ind__scrim" aria-hidden="true" />
                  <div className="ind__bg" />
                  <span className="ind__n">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{d.t}</h3>
                  <span className="ind__arrow" aria-hidden="true">→</span>
                </Link>
              ))}
              {industries.map((d, i) => (
                <Link
                  className="ind"
                  href={`/it/settori/${d.slug}`}
                  key={`duplicate-${d.slug}`}
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  {d.bg && (
                    <Image
                      className="ind__img"
                      src={`/images/industries/${d.bg}`}
                      alt=""
                      fill
                      sizes="(max-width: 600px) 80vw, 30vw"
                    />
                  )}
                  <span className="ind__scrim" aria-hidden="true" />
                  <div className="ind__bg" />
                  <span className="ind__n">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{d.t}</h3>
                  <span className="ind__arrow" aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="reveal" style={{ marginTop: 44 }}>
            <a className="btn btn--grad btn--lg" href="/it/settori">
               Tutti i settori <span className="arr">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 06 — KAKO DELUJE */}
      <section className="section" id="kako">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Come funziona</p>
            <h2 style={{ marginTop: 18 }}>
               Registrati. <br />
               Siamo pronti quando lo sei tu. </h2>
            <p className="lead">Pochi semplici passaggi per avviare la tua attività.</p>
          </div>
          <div className="steps reveal">
            {steps.map((s) => (
              <div className="step" key={s.n}>
                <span className="step__n">{s.n}</span>
                <p>{s.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — ZAČNI */}
      <section className="section" id="kontakt">
        <div className="wrap">
          <div className="cta-band reveal">
            <div className="cta-band__glow" />
            <div className="cta-band__in">
              <h2>
                 Pronto a portare la tua <br />
                 attività al livello successivo? </h2>
              <p>
                 Gestisci appuntamenti, clienti e comunicazione. Scopri Jedro+ con una demo gratuita dal vivo di 15 minuti. </p>
              <div className="cta-band__btns">
                <a className="btn btn--light btn--lg" href="mailto:info@jedroplus.com">
                   Prenota una demo <span className="arr">→</span>
                </a>
                <a className="btn btn--lg btn--ghost" href="tel:068663410" style={{ color: "#fff", borderColor: "rgba(255,255,255,.3)" }}>
                  068 663 410
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq
        items={homeFaq}
        title={
          <>
             Domande <span className="grad-text">frequenti</span>
          </>
        }
        soft
      />

      </main>
      <Footer />
      <RevealOnScroll />
    </>
  );
}
