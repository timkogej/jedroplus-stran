// Generated from Slovenian source and src/locales/it.json.
import { pageMetadata } from "@/italian/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/italian/components/redesign/Nav";
import { Footer } from "@/italian/components/redesign/Footer";
import { RevealOnScroll } from "@/italian/components/redesign/RevealOnScroll";
import { JsonLd } from "@/components/JsonLd";
import { davcnaBlagajnaBreadcrumbSchema, faqPageSchema } from "@/italian/lib/schema";

export const metadata: Metadata = pageMetadata("/it/cassa-fiscale", {
  title: "Registratore di cassa fiscale per imprese di servizi (FURS) | Jedro+",
  description:
    "Registratore di cassa Jedro+ con verifica fiscale FURS, collegato a prenotazioni online, pagamenti, punti fedeltà e sconti. Tutto in un unico posto, conforme alla normativa slovena.",
  openGraph: {
    title: "Registratore di cassa fiscale per imprese di servizi (FURS) | Jedro+",
    description:
      "Registratore di cassa Jedro+ con verifica fiscale FURS, collegato a prenotazioni online, pagamenti, punti fedeltà e sconti. Tutto in un unico posto, conforme alla normativa slovena.",
  },
});

// Kaj vključuje — vsak vnos: kratek naslov (pred —) in razlaga (za —).
const included: { title: string; text: string }[] = [
  {
    title: "Verifica fiscale FURS con certificato valido",
    text: "Le fatture vengono validate dall’amministrazione fiscale slovena.",
  },
  {
    title: "Collegato alle prenotazioni online",
    text: "Appuntamento, pagamento e fattura in un unico flusso.",
  },
  {
    title: "Pagamenti online e acconti",
    text: "Il cliente può pagare già alla prenotazione.",
  },
  {
    title: "Punti fedeltà",
    text: "Premia i clienti a ogni acquisto.",
  },
  {
    title: "Sconti e buoni",
    text: "Applica promozioni e codici sconto direttamente alla cassa.",
  },
  {
    title: "Panoramica delle vendite",
    text: "Scopri cosa è stato venduto, quando e a chi.",
  },
];

const faq = [
  {
    q: "Il registratore Jedro+ rispetta i requisiti FURS?",
    a: "Sì. Il registratore Jedro+ utilizza un certificato FURS valido e verifica fiscalmente le fatture secondo la normativa slovena.",
  },
  {
    q: "Il registratore di cassa è incluso nei piani Jedro+?",
    a: "Il registratore di cassa è un modulo separato a pagamento, non incluso nei piani base Plus e Pro.",
  },
  {
    q: "È collegato a prenotazioni e pagamenti online?",
    a: "Sì. Il registratore si collega a prenotazioni online, pagamenti, punti fedeltà e sconti in un unico sistema.",
  },
  {
    q: "Posso usare sconti e buoni alla cassa?",
    a: "Sì. Puoi applicare sconti e buoni direttamente alla cassa, mentre i clienti accumulano punti fedeltà.",
  },
];

export default function DavcnaBlagajna() {
  return (
    <>
      <JsonLd schema={davcnaBlagajnaBreadcrumbSchema()} />
      <JsonLd schema={faqPageSchema(faq)} />
      <Nav variant="light" active="/it/cassa-fiscale" />
      <main id="main-content">

      {/* HERO */}
      <section className="imghero imghero--plain">
        <div className="imghero__in">
          <div className="wrap">
            <nav aria-label="Percorso di navigazione" className="crumbs">
              <Link href="/it">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Registratore di cassa fiscale</span>
            </nav>
            <span className="eyebrow">Registratore di cassa fiscale</span>
            <h1 style={{ marginTop: 16 }}>Cassa fiscale per le imprese in Slovenia</h1>
            <p className="imghero__sub">
               Un modulo per emettere fatture e ottenere la conferma FURS in Slovenia, collegato a prenotazioni online, pagamenti, punti fedeltà e sconti. </p>
            <div className="imghero__cta">
              <a className="btn btn--grad btn--lg" href="/it#kontakt">
                 Richiedi informazioni sul modulo <span className="arr">→</span>
              </a>
              <a className="btn btn--light btn--lg" href="/it/prezzi">
                 Vedi i prezzi </a>
            </div>
          </div>
        </div>
      </section>

      {/* UVOD */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: "left", maxWidth: 820 }}>
            <span className="eyebrow">Introduzione</span>
            <h2 style={{ marginTop: 18 }}>
               Una cassa collegata a <span className="grad-text">tutto il resto</span>
            </h2>
            <div style={{ marginTop: 24, display: "grid", gap: 18 }}>
              <p className="subintro__lead">
                 Il registratore Jedro+ utilizza un certificato FURS valido per verificare fiscalmente le fatture secondo la normativa slovena. Si collega a prenotazioni online, pagamenti, punti fedeltà e sconti. Dal servizio completato alla fattura verificata, tutto segue un unico flusso senza duplicare il lavoro. </p>
            </div>
          </div>
        </div>
      </section>

      {/* KAJ VKLJUČUJE */}
      <section className="section section--soft">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: "left", maxWidth: 820 }}>
            <span className="eyebrow">Cosa include</span>
            <h2 style={{ marginTop: 18 }}>
               Tutto ciò che serve a una cassa <span className="grad-text">per lavorare</span>
            </h2>
          </div>
          <div className="t-grid" style={{ marginTop: 48 }}>
            {included.map((c) => (
              <article className="fcard reveal" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ZA KOGA JE */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: "left", maxWidth: 820 }}>
            <span className="eyebrow">A chi si rivolge</span>
            <h2 style={{ marginTop: 18 }}>
               Per imprese di servizi che emettono <span className="grad-text">fatture</span>
            </h2>
            <p className="subintro__lead" style={{ marginTop: 24 }}>
               Per saloni, cliniche, centri benessere, officine e altre imprese di servizi che emettono fatture verificate fiscalmente e vogliono cassa e prenotazioni in un unico sistema. </p>
          </div>
        </div>
      </section>

      {/* KAKO DO NJE */}
      <section className="section section--soft">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: "left", maxWidth: 820 }}>
            <span className="eyebrow">Come iniziare</span>
            <h2 style={{ marginTop: 18 }}>
               Un modulo separato, <span className="grad-text">configurato insieme a te</span>
            </h2>
            <p className="subintro__lead" style={{ marginTop: 24 }}>
               Il registratore è disponibile come modulo separato di Jedro+. Ti aiutiamo a configurare il certificato e adattare il modulo alla tua attività. </p>
            {/* TODO (Tim): dodaj, kako se modul naroči in koliko stane, ko določiš ceno. */}
            <div style={{ marginTop: 30 }}>
              <a className="btn btn--primary btn--lg" href="/it#kontakt">
                 Richiedi informazioni sul modulo <span className="arr">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Domande frequenti</span>
            <h2 style={{ marginTop: 18 }}>
               Tutto quello che <span className="grad-text">vuoi sapere</span>
            </h2>
          </div>
          <div className="faq-list" style={{ marginTop: 40, maxWidth: 820, marginInline: "auto" }}>
            {faq.map((item) => (
              <details className="faq-item reveal" key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
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
                 Pronto a iniziare? </span>
              <h2 style={{ marginTop: 18 }}>Cassa e prenotazioni in un unico sistema.</h2>
              <p>
                 Richiedi informazioni sul modulo cassa oppure prenota una breve demo su misura per la tua attività. </p>
              <div className="cta-band__btns">
                <a className="btn btn--light btn--lg" href="/it#kontakt">
                   Richiedi informazioni sul modulo <span className="arr">→</span>
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
