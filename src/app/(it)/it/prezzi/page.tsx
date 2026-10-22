// Generated from Slovenian source and src/locales/it.json.
import { pageMetadata } from "@/italian/lib/seo";
import { ReceptionistPricing } from "@/italian/components/redesign/ReceptionistPricing";
import type { Metadata } from "next";
import { Nav } from "@/italian/components/redesign/Nav";
import { Footer } from "@/italian/components/redesign/Footer";
import { RevealOnScroll } from "@/italian/components/redesign/RevealOnScroll";
import { PricingDetails } from "@/italian/components/redesign/PricingDetails";
import { PricingTiers } from "@/italian/components/redesign/PricingTiers";
import { Faq } from "@/italian/components/redesign/Faq";
import { cenikFaq } from "@/italian/components/redesign/faq-data";
import { JsonLd } from "@/components/JsonLd";
import { pricingProductsSchema, receptionistServiceSchema } from "@/italian/lib/schema";
import { SubpageHero } from "@/italian/components/redesign/SubpageHero";

export const metadata: Metadata = pageMetadata("/it/prezzi", {
  title: "Prezzi Jedro+ | Free, Plus, Pro e Receptionist+",
  description:
    "Confronta Free, Jedro Plus e Pro: funzionalità, quantità di SMS ed e-mail, pagamento mensile o annuale. Receptionist+: 100, 300 o 750 minuti di chiamata.",
  openGraph: {
    title: "Prezzi Jedro+ | Free, Plus, Pro e Receptionist+",
    description:
      "Confronta Free, Jedro Plus e Pro: funzionalità, quantità di SMS ed e-mail, pagamento mensile o annuale. Receptionist+: 100, 300 o 750 minuti di chiamata.",
  },
});

const Chk = () => (
  <span className="chk">
    <svg viewBox="0 0 12 12" fill="none">
      <path d="M2 6.2l2.6 2.6L10 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

export default function Cenik() {
  return (
    <>
      <JsonLd schema={pricingProductsSchema} />
      <JsonLd schema={receptionistServiceSchema} />
      <Nav variant="light" active="/it/prezzi" />
      <main id="main-content">

      <SubpageHero
        eyebrow="Prezzi"
        title={
          <>
             Prezzi semplici per{" "}
            <span className="grad-text">ogni fase di crescita.</span>
          </>
        }
        description={
          <>
             Inizia con Free. Per i piani a pagamento scegli il pagamento mensile o annuale; i minuti di Receptionist+ si acquistano separatamente. </>
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

      {/* PRICING */}
      <section className="section subpage-first" id="cenik">
        <div className="wrap">
          <div className="section-head center reveal">
            <span className="eyebrow eyebrow--plain" style={{ justifyContent: "center" }}>
               Piani </span>
            <h2 style={{ marginTop: 18 }}>
               Scegli il piano in base a{" "}
              <span className="grad-text">quanto vuoi automatizzare</span>
            </h2>
            <p className="lead">
               Tutti i piani a pagamento includono: database, calendario appuntamenti, prenotazioni online e statistiche </p>
          </div>
          <PricingTiers />
          <p
            className="reveal"
            style={{
              margin: "34px auto 0",
              maxWidth: 680,
              textAlign: "center",
              color: "var(--ink-2)",
              fontSize: 16,
            }}
          >
             Ti serve anche la fatturazione?{" "}
            <a className="grad-text" href="/it/cassa-fiscale" style={{ fontWeight: 600 }}>
               Registratore di cassa fiscale (FURS) </a>{" "}
             è disponibile come modulo separato, collegato a prenotazioni e pagamenti online. </p>
        </div>
      </section>

      <PricingDetails />
      <ReceptionistPricing />

      {/* VSE VKLJUČENO */}
      <section className="section section--soft">
        <div className="wrap">
          <div className="split__body reveal" style={{ maxWidth: 760 }}>
            <span className="eyebrow">Incluso nei piani a pagamento</span>
            <h2 style={{ marginTop: 18 }}>
               Le funzioni essenziali che <span className="grad-text">fanno funzionare la tua attività</span>
            </h2>
            <p className="lead">
               I piani a pagamento offrono un sistema connesso: calendario, clienti e prenotazioni lavorano insieme. </p>
            <ul className="split__list">
              <li>
                <Chk />
                <span>
                  <b>Prenotazioni online</b>  personalizzate con i tuoi colori e il tuo logo </span>
              </li>
              <li>
                <Chk />
                <span>
                  <b>CRM collegato</b>  con storico e preferenze dei clienti </span>
              </li>
              <li>
                <Chk />
                <span>
                  <b>Promemoria</b>  prima e dopo l’appuntamento per informare i clienti in tempo </span>
              </li>
              <li>
                <Chk />
                <span>
                  <b>Esperienza mobile</b>  — per te e i tuoi clienti, ovunque siate </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Faq
        items={cenikFaq}
        title={
          <>
             Domande <span className="grad-text">frequenti</span>
          </>
        }
        reveal
      />

      {/* CTA */}
      <section className="section">
        <div className="wrap">
          <div className="cta-band reveal">
            <div className="cta-band__glow"></div>
            <div className="cta-band__in">
              <span className="eyebrow" style={{ color: "rgba(255,255,255,.75)" }}>
                 Pronto? </span>
              <h2 style={{ marginTop: 18 }}>Inizia gratis, oggi stesso.</h2>
              <p>
                 Senza vincoli e senza carta di credito. Scopri Jedro+ in azione con una demo di 15 minuti. </p>
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
