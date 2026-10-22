import { pageMetadata } from "@/lib/seo";
import { ReceptionistPricing } from "@/components/redesign/ReceptionistPricing";
import type { Metadata } from "next";
import { Nav } from "@/components/redesign/Nav";
import { Footer } from "@/components/redesign/Footer";
import { RevealOnScroll } from "@/components/redesign/RevealOnScroll";
import { PricingDetails } from "@/components/redesign/PricingDetails";
import { PricingTiers } from "@/components/redesign/PricingTiers";
import { Faq } from "@/components/redesign/Faq";
import { cenikFaq } from "@/components/redesign/faq-data";
import { JsonLd } from "@/components/JsonLd";
import { pricingProductsSchema, receptionistServiceSchema } from "@/lib/schema";
import { SubpageHero } from "@/components/redesign/SubpageHero";

export const metadata: Metadata = pageMetadata("/cenik", {
  title: "Cenik Jedro+ | Free, Plus, Pro in Receptionist+",
  description:
    "Primerjajte Free, Jedro Plus in Pro: funkcije, SMS in e-mail količine ter mesečno ali letno plačilo. Receptionist+: 100, 300 ali 750 minut za klice.",
  openGraph: {
    title: "Cenik Jedro+ | Free, Plus, Pro in Receptionist+",
    description:
      "Primerjajte Free, Jedro Plus in Pro: funkcije, SMS in e-mail količine ter mesečno ali letno plačilo. Receptionist+: 100, 300 ali 750 minut za klice.",
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
      <Nav variant="light" active="/cenik" />
      <main id="main-content">

      <SubpageHero
        eyebrow="Cenik"
        title={
          <>
            Preprost cenik za{" "}
            <span className="grad-text">vsako fazo rasti.</span>
          </>
        }
        description={
          <>
            Začnite s paketom Free. Za plačljive pakete izberite mesečno ali letno plačilo; minute za Receptionist+ dokupite posebej.
          </>
        }
        actions={
          <>
            <a className="btn btn--grad btn--lg" href="https://app.jedroplus.com/signup">
              Preizkusi brezplačno <span className="arr">→</span>
            </a>
            <a className="btn btn--ghost btn--lg" href="/sl#kontakt">
              Rezerviraj predstavitev
            </a>
          </>
        }
      />

      {/* PRICING */}
      <section className="section subpage-first" id="cenik">
        <div className="wrap">
          <div className="section-head center reveal">
            <span className="eyebrow eyebrow--plain" style={{ justifyContent: "center" }}>
              Paketi
            </span>
            <h2 style={{ marginTop: 18 }}>
              Izberi paket glede na to,{" "}
              <span className="grad-text">koliko želiš avtomatizirati</span>
            </h2>
            <p className="lead">
              Vsi plačljivi paketi vključujejo: Baze podatkov, Koledar terminov,
              Spletno naročanje, Analitiko
            </p>
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
            Potrebujete tudi izdajanje računov?{" "}
            <a className="grad-text" href="/davcna-blagajna" style={{ fontWeight: 600 }}>
              Davčna blagajna (FURS)
            </a>{" "}
            je na voljo kot ločen modul, povezan s spletnim naročanjem in plačili.
          </p>
        </div>
      </section>

      <PricingDetails />
      <ReceptionistPricing />

      {/* VSE VKLJUČENO */}
      <section className="section section--soft">
        <div className="wrap">
          <div className="split__body reveal" style={{ maxWidth: 760 }}>
            <span className="eyebrow">V plačljivih paketih</span>
            <h2 style={{ marginTop: 18 }}>
              Osnova, ki <span className="grad-text">vedno deluje</span>
            </h2>
            <p className="lead">
              V plačljivih paketih dobite povezan sistem — koledar, stranke in
              naročanje, ki delujejo kot ena celota.
            </p>
            <ul className="split__list">
              <li>
                <Chk />
                <span>
                  <b>Spletno naročanje</b> prilagojeno vašim barvam in logotipu
                </span>
              </li>
              <li>
                <Chk />
                <span>
                  <b>Povezan CRM</b> z zgodovino in preferencami strank
                </span>
              </li>
              <li>
                <Chk />
                <span>
                  <b>Opomniki</b> pred in po terminu za pravočasno obveščanje strank
                </span>
              </li>
              <li>
                <Chk />
                <span>
                  <b>Mobilna izkušnja</b> — vi in stranke kjerkoli
                </span>
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
            Pogosta <span className="grad-text">vprašanja</span>
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
                Pripravljeni?
              </span>
              <h2 style={{ marginTop: 18 }}>Začnite brezplačno, še danes.</h2>
              <p>
                Brez vezave, brez kreditne kartice. V 15 minutah vam pokažemo
                Jedro+ v praksi.
              </p>
              <div className="cta-band__btns">
                <a className="btn btn--light btn--lg" href="https://app.jedroplus.com/signup">
                  Preizkusi brezplačno <span className="arr">→</span>
                </a>
                <a
                  className="btn btn--ghost btn--lg"
                  href="/sl#kontakt"
                  style={{ color: "#fff", borderColor: "rgba(255,255,255,.25)" }}
                >
                  Rezerviraj predstavitev
                </a>
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
