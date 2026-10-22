// Generated from Slovenian source and src/locales/it.json.
import { pageMetadata } from "@/italian/lib/seo";
import type { Metadata } from "next";
import { Nav } from "@/italian/components/redesign/Nav";
import { Footer } from "@/italian/components/redesign/Footer";
import { FlowController } from "@/italian/components/redesign/FlowController";
import { Rotor } from "@/italian/components/redesign/Rotor";
import { Faq } from "@/italian/components/redesign/Faq";
import { agencijaFaq } from "@/italian/components/redesign/faq-data";
import { JsonLd } from "@/components/JsonLd";
import { professionalServiceSchema } from "@/italian/lib/schema";

export const metadata: Metadata = pageMetadata("/it/agenzia", {
  title: "Agenzia | Jedro+ — Agenzia AI per imprese di servizi",
  description:
    "Jedro+ Agenzia sviluppa soluzioni AI per prenotazioni, promemoria e automazioni su misura per imprese di servizi.",
  openGraph: {
    title: "Agenzia | Jedro+ — Agenzia AI per imprese di servizi",
    description:
      "Jedro+ Agenzia sviluppa soluzioni AI per prenotazioni, promemoria e automazioni su misura per imprese di servizi.",
  },
});

const Adv = () => (
  <span className="chk">
    <svg viewBox="0 0 12 12" fill="none">
      <path d="M2 6.2l2.6 2.6L10 3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const agencyServices = [
  {
    title: "Sistemi gestionali",
    text: "Riuniamo la tua attività in un’unica piattaforma: appuntamenti, clienti, prenotazioni, registri e report, senza duplicare il lavoro.",
  },
  {
    title: "Sistemi di comunicazione",
    text: "Realizziamo sistemi di comunicazione con i clienti: promemoria automatici, messaggi personalizzati e notifiche prima e dopo gli appuntamenti.",
  },
  {
    title: "Siti web",
    text: "Realizziamo siti web moderni che attirano clienti. Online in pochi giorni, collegati al tuo sistema gestionale.",
  },
  {
    title: "Produzione di immagini e video con AI",
    text: "Usiamo l’AI per creare immagini, annunci e video professionali per siti e social: rapidamente e in modo coerente con il tuo marchio.",
  },
  {
    title: "Agenti AI e automazioni",
    text: "Sviluppiamo agenti AI che rispondono ai clienti, elaborano richieste e automatizzano attività ripetitive, facendo risparmiare tempo al tuo team.",
  },
];

export default function Agencija() {
  return (
    <div className="theme-agency agency-page">
      <JsonLd schema={professionalServiceSchema} />
      <Nav variant="flow" active="/it/agenzia" />
      <main id="main-content">

      <div className="flow">
        {/* 01 — HERO */}
        <section
          className="flow__panel"
          data-ink="dark"
          style={{
            "--p-bg": "#0C0D10",
            "--p-ink": "#fff",
            "--p-tint":
              "linear-gradient(100deg, rgba(8,9,12,.92) 0%, rgba(8,9,12,.66) 46%, rgba(8,9,12,.34) 80%), linear-gradient(0deg, rgba(8,9,12,.5), rgba(8,9,12,0) 36%)",
          } as React.CSSProperties}
        >
          <div className="flow__tint"></div>
          <div className="flow__inner">
            <p className="flow__eyebrow">01 — Jedro+ Agenzia</p>
            <hr className="flow__rule" />
            <h1 className="flow__h flow__h--hero" style={{ fontSize: 65 }}>
               Realizziamo{" "}
              <Rotor
                id="agRotor"
                words={["sistemi", "comunicazione", "siti web", "crescita"]}
              />
              <br />
               per imprese di servizi </h1>
            <hr className="flow__rule" />
            <p className="flow__lead">
               Qualità. Velocità. Innovazione. Tutto ciò che cerchi in un’agenzia. </p>
            <div className="flow__cta flow__cta--spaced">
              <a className="btn btn--light btn--lg" href="tel:068663410">
                 Chiama il +386 68 663 410 </a>
              <a className="flow__link" href="#kaj">
                 Scopri cosa facciamo <span className="arr">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* 02 — KDO SMO */}
        <section
          className="flow__panel flow__panel--tall"
          data-ink="dark"
          style={{
            "--p-bg": "#00ffef",
            "--p-ink": "#fff",
            "--p-tint":
              "linear-gradient(155deg, rgba(0,255,239,.95) 0%, rgba(0,230,218,.93) 100%)",
          } as React.CSSProperties}
        >
          <div className="flow__tint"></div>
          <div className="flow__inner">
            <p className="flow__eyebrow">02 — Chi siamo</p>
            <hr className="flow__rule" />
            <h2 className="flow__h flow__h--md" style={{ maxWidth: "18ch", fontSize: 65 }}>
               Un’agenzia AI per <br />
               imprese di servizi </h2>
            <p className="flow__lead">
               Siamo specializzati nelle attività che lavorano con i clienti. Le nostre soluzioni basate sull’AI lavorano in modo più intelligente, rapido e automatico. </p>
            <ul className="adv">
              <li>
                <Adv />
                <span>
                  <b>Tutto si basa sull’AI.</b>  Automazione, comunicazione intelligente e sistemi che lavorano per te. </span>
              </li>
              <li>
                <Adv />
                <span>
                  <b>Specializzati nei servizi.</b>  Conosciamo appuntamenti, clienti e quotidianità delle imprese di servizi. </span>
              </li>
              <li>
                <Adv />
                <span>
                  <b>Un solo team per tutto.</b>  Dal gestionale al sito web: un unico punto di riferimento, un solo team. </span>
              </li>
              <li>
                <Adv />
                <span>
                  <b>Realizzazione rapida.</b>  Ti mettiamo in funzione in pochi giorni. </span>
              </li>
            </ul>
          </div>
        </section>

        {/* 03 — HITROST */}
        <section
          className="flow__panel"
          data-ink="dark"
          style={{
            "--p-bg": "#0C0D10",
            "--p-ink": "#fff",
            "--p-tint":
              "linear-gradient(100deg, rgba(8,9,12,.95) 0%, rgba(8,9,12,.84) 44%, rgba(8,9,12,.58) 78%, rgba(8,9,12,.5) 100%)",
          } as React.CSSProperties}
        >
          <div className="flow__tint"></div>
          <div className="flow__inner">
            <p className="flow__eyebrow">03 — Velocità</p>
            <hr className="flow__rule" />
            <h2 className="flow__h flow__h--md" style={{ fontSize: 65 }}>
               Progetti in settimane. <br />
               Parti prima. </h2>
            <hr className="flow__rule" />
            <p className="flow__lead">
               Metti in moto la tua attività con sistemi e siti web realizzati rapidamente, curando la qualità in ogni fase. </p>
            <hr className="flow__rule" />
            <p className="flow__lead flow__lead--r">Meno attese. Più risultati.</p>
          </div>
        </section>

        {/* 04 — KAJ PONUJAMO */}
        <section
          className="flow__panel flow__panel--tall"
          id="kaj"
          data-ink="light"
          style={{
            "--p-bg": "#FFFFFF",
            "--p-ink": "#15161B",
            "--p-tint":
              "linear-gradient(155deg, rgba(255,255,255,.96) 0%, rgba(248,248,245,.92) 100%)",
          } as React.CSSProperties}
        >
          <div className="flow__tint"></div>
          <div className="flow__inner">
            <p className="flow__eyebrow">04 — Cosa offriamo</p>
            <hr className="flow__rule" />
            <h2 className="flow__h flow__h--md" style={{ fontSize: 65 }}>
               Tutto ciò che serve alla tua <br />
               attività per crescere </h2>
            <p className="flow__sub" style={{ marginTop: "clamp(14px,2vh,26px)" }}>
               Realizziamo gli strumenti per la prossima fase della tua attività.{" "}
            </p>
            <div
              className="marquee svc-marquee"
              style={{ marginTop: "clamp(22px,3vh,40px)" }}
            >
              <div className="marquee__track svc-track">
                {agencyServices.map((service) => (
                  <article className="svc" key={service.title}>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </article>
                ))}
                {agencyServices.map((service) => (
                  <article
                    className="svc"
                    key={`duplicate-${service.title}`}
                    aria-hidden="true"
                  >
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="flow__cta" style={{ marginTop: "clamp(22px,3vh,40px)" }}>
              <a className="btn btn--primary btn--lg" href="tel:068663410">
                 Chiamaci per parlare del tuo progetto <span className="arr">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* 05 — ENA PLATFORMA */}
        <section
          className="flow__panel flow__panel--tall"
          data-ink="dark"
          style={{
            "--p-bg": "#00ffef",
            "--p-ink": "#fff",
            "--p-tint":
              "linear-gradient(100deg, rgba(0,255,239,.95) 0%, rgba(0,255,239,.86) 38%, rgba(0,230,218,.45) 70%, rgba(0,230,218,.28) 100%), linear-gradient(0deg, rgba(0,230,218,.40), rgba(0,230,218,0) 55%)",
          } as React.CSSProperties}
        >
          <div className="flow__tint"></div>
          <div className="flow__inner">
            <p className="flow__eyebrow">05 — Tutto collegato</p>
            <hr className="flow__rule" />
            <h2 className="flow__h flow__h--md" style={{ maxWidth: "16ch", fontSize: 65 }}>
               Tutta la tua attività <br />
               in un’unica piattaforma </h2>
            <p className="flow__lead">
               Riuniamo operatività, comunicazione e presenza online in un sistema facile da gestire, che cresce con te. </p>
            <div className="onerow">
              <span>Appuntamenti</span>
              <i>→</i>
              <span>Clienti</span>
              <i>→</i>
              <span>Comunicazione</span>
              <i>→</i>
              <span>Prenotazioni</span>
              <i>→</i>
              <span>Report</span>
            </div>
          </div>
        </section>

        {/* 06 — KONTAKT */}
        <section
          className="flow__panel"
          id="kontakt"
          data-ink="dark"
          style={{
            "--p-bg": "#0C0D10",
            "--p-ink": "#fff",
            "--p-tint":
              "linear-gradient(100deg, rgba(8,9,12,.92) 0%, rgba(8,9,12,.72) 52%, rgba(8,9,12,.44) 100%)",
          } as React.CSSProperties}
        >
          <div className="flow__tint"></div>
          <div className="flow__inner">
            <p className="flow__eyebrow">06 — Chiamaci</p>
            <hr className="flow__rule" />
            <h2 className="flow__h flow__h--sm" style={{ maxWidth: "22ch", fontSize: 65 }}>
               Pronto per il prossimo passo? </h2>
            <hr className="flow__rule" />
            <p className="flow__lead">
               Chiamaci per una presentazione gratuita di 15 minuti: scopri un’attività più intelligente e connessa grazie all’AI. Senza impegno. </p>
            <div className="flow__cta flow__cta--spaced">
              <a className="btn btn--light btn--lg" href="tel:068663410">
                068 663 410 <span className="arr">→</span>
              </a>
              <a className="btn btn--lg btn--out" href="mailto:info@jedroplus.com">
                info@jedroplus.com
              </a>
            </div>
          </div>
        </section>
      </div>

      <Faq
        items={agencijaFaq}
        title={
          <>
             Domande <span className="grad-text">frequenti</span>
          </>
        }
        soft
      />

      </main>
      <Footer variant="agency" />

      <FlowController />
    </div>
  );
}
