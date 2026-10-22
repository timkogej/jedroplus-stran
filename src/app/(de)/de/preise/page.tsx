// Generated from Slovenian source and src/locales/de.json.
import { pageMetadata } from "@/german/lib/seo";
import { ReceptionistPricing } from "@/german/components/redesign/ReceptionistPricing";
import type { Metadata } from "next";
import { Nav } from "@/german/components/redesign/Nav";
import { Footer } from "@/german/components/redesign/Footer";
import { RevealOnScroll } from "@/german/components/redesign/RevealOnScroll";
import { PricingDetails } from "@/german/components/redesign/PricingDetails";
import { PricingTiers } from "@/german/components/redesign/PricingTiers";
import { Faq } from "@/german/components/redesign/Faq";
import { cenikFaq } from "@/german/components/redesign/faq-data";
import { JsonLd } from "@/components/JsonLd";
import { pricingProductsSchema, receptionistServiceSchema } from "@/german/lib/schema";
import { SubpageHero } from "@/german/components/redesign/SubpageHero";

export const metadata: Metadata = pageMetadata("/de/preise", {
  title: "Jedro+ Preise | Free, Plus, Pro und Receptionist+",
  description:
    "Vergleiche Free, Jedro Plus und Pro: Funktionen, SMS- und E-Mail-Kontingente sowie monatliche oder jährliche Zahlung. Receptionist+: 100, 300 oder 750 Gesprächsminuten.",
  openGraph: {
    title: "Jedro+ Preise | Free, Plus, Pro und Receptionist+",
    description:
      "Vergleiche Free, Jedro Plus und Pro: Funktionen, SMS- und E-Mail-Kontingente sowie monatliche oder jährliche Zahlung. Receptionist+: 100, 300 oder 750 Gesprächsminuten.",
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
      <Nav variant="light" active="/de/preise" />
      <main id="main-content">

      <SubpageHero
        eyebrow="Preise"
        title={
          <>
             Einfache Preise für{" "}
            <span className="grad-text">jede Wachstumsphase.</span>
          </>
        }
        description={
          <>
             Starte mit Free. Bei kostenpflichtigen Tarifen wählst du zwischen monatlicher und jährlicher Zahlung; Minuten für Receptionist+ kaufst du separat. </>
        }
        actions={
          <>
            <a className="btn btn--grad btn--lg" href="https://app.jedroplus.com/signup">
               Kostenlos testen <span className="arr">→</span>
            </a>
            <a className="btn btn--ghost btn--lg" href="/de#kontakt">
               Demo buchen </a>
          </>
        }
      />

      {/* PRICING */}
      <section className="section subpage-first" id="cenik">
        <div className="wrap">
          <div className="section-head center reveal">
            <span className="eyebrow eyebrow--plain" style={{ justifyContent: "center" }}>
               Tarife </span>
            <h2 style={{ marginTop: 18 }}>
               Wähle deinen Tarif danach,{" "}
              <span className="grad-text">wie viel du automatisieren möchtest</span>
            </h2>
            <p className="lead">
               Alle kostenpflichtigen Tarife enthalten: Datenbanken, Terminkalender, Onlinebuchung und Auswertungen </p>
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
             Brauchst du auch Rechnungen?{" "}
            <a className="grad-text" href="/de/fiskalkasse" style={{ fontWeight: 600 }}>
               Fiskalkasse (FURS) </a>{" "}
             ist als separates Modul erhältlich, verbunden mit Onlinebuchung und Zahlungen. </p>
        </div>
      </section>

      <PricingDetails />
      <ReceptionistPricing />

      {/* VSE VKLJUČENO */}
      <section className="section section--soft">
        <div className="wrap">
          <div className="split__body reveal" style={{ maxWidth: 760 }}>
            <span className="eyebrow">In kostenpflichtigen Tarifen</span>
            <h2 style={{ marginTop: 18 }}>
               Die Grundlage, die <span className="grad-text">zuverlässig funktioniert</span>
            </h2>
            <p className="lead">
               Die kostenpflichtigen Tarife verbinden Kalender, Kunden und Buchungen zu einem System. </p>
            <ul className="split__list">
              <li>
                <Chk />
                <span>
                  <b>Onlinebuchung</b>  angepasst an deine Farben und dein Logo </span>
              </li>
              <li>
                <Chk />
                <span>
                  <b>Verbundenes CRM</b>  mit Kundenverlauf und Vorlieben </span>
              </li>
              <li>
                <Chk />
                <span>
                  <b>Erinnerungen</b>  vor und nach dem Termin, damit deine Kunden rechtzeitig informiert sind </span>
              </li>
              <li>
                <Chk />
                <span>
                  <b>Mobile Nutzung</b>  — für dich und deine Kunden, überall </span>
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
             Häufige <span className="grad-text">Fragen</span>
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
                 Bereit? </span>
              <h2 style={{ marginTop: 18 }}>Starte noch heute kostenlos.</h2>
              <p>
                 Ohne langfristige Bindung und ohne Kreditkarte. Erlebe Jedro+ in einer 15-minütigen Demo. </p>
              <div className="cta-band__btns">
                <a className="btn btn--light btn--lg" href="https://app.jedroplus.com/signup">
                   Kostenlos testen <span className="arr">→</span>
                </a>
                <a
                  className="btn btn--ghost btn--lg"
                  href="/de#kontakt"
                  style={{ color: "#fff", borderColor: "rgba(255,255,255,.25)" }}
                >
                   Demo buchen </a>
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
