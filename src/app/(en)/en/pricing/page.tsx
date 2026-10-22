// Generated from Slovenian source and src/locales/en.json.
import { pageMetadata } from "@/english/lib/seo";
import { ReceptionistPricing } from "@/english/components/redesign/ReceptionistPricing";
import type { Metadata } from "next";
import { Nav } from "@/english/components/redesign/Nav";
import { Footer } from "@/english/components/redesign/Footer";
import { RevealOnScroll } from "@/english/components/redesign/RevealOnScroll";
import { PricingDetails } from "@/english/components/redesign/PricingDetails";
import { PricingTiers } from "@/english/components/redesign/PricingTiers";
import { Faq } from "@/english/components/redesign/Faq";
import { cenikFaq } from "@/english/components/redesign/faq-data";
import { JsonLd } from "@/components/JsonLd";
import { pricingProductsSchema, receptionistServiceSchema } from "@/english/lib/schema";
import { SubpageHero } from "@/english/components/redesign/SubpageHero";

export const metadata: Metadata = pageMetadata("/en/pricing", {
  title: "Jedro+ pricing | Free, Plus, Pro and Receptionist+",
  description:
    "Compare Free, Jedro Plus and Pro: features, SMS and email allowances, and monthly or annual payment. Receptionist+: 100, 300 or 750 call minutes.",
  openGraph: {
    title: "Jedro+ pricing | Free, Plus, Pro and Receptionist+",
    description:
      "Compare Free, Jedro Plus and Pro: features, SMS and email allowances, and monthly or annual payment. Receptionist+: 100, 300 or 750 call minutes.",
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
      <Nav variant="light" active="/en/pricing" />
      <main id="main-content">

      <SubpageHero
        eyebrow="Pricing"
        title={
          <>
             Simple pricing for{" "}
            <span className="grad-text">every stage of growth.</span>
          </>
        }
        description={
          <>
             Start with Free. Choose monthly or annual payment for paid plans; Receptionist+ minutes are purchased separately. </>
        }
        actions={
          <>
            <a className="btn btn--grad btn--lg" href="https://app.jedroplus.com/signup">
               Try for free <span className="arr">→</span>
            </a>
            <a className="btn btn--ghost btn--lg" href="/en#kontakt">
               Book a demo </a>
          </>
        }
      />

      {/* PRICING */}
      <section className="section subpage-first" id="cenik">
        <div className="wrap">
          <div className="section-head center reveal">
            <span className="eyebrow eyebrow--plain" style={{ justifyContent: "center" }}>
               Plans </span>
            <h2 style={{ marginTop: 18 }}>
               Choose your plan based on{" "}
              <span className="grad-text">how much you want to automate</span>
            </h2>
            <p className="lead">
               All paid plans include: Databases, Appointment calendar, Online booking and Analytics </p>
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
             Need invoicing too?{" "}
            <a className="grad-text" href="/en/fiscal-cash-register" style={{ fontWeight: 600 }}>
               Fiscal cash register (FURS) </a>{" "}
             is available as a separate module, connected to online booking and payments. </p>
        </div>
      </section>

      <PricingDetails />
      <ReceptionistPricing />

      {/* VSE VKLJUČENO */}
      <section className="section section--soft">
        <div className="wrap">
          <div className="split__body reveal" style={{ maxWidth: 760 }}>
            <span className="eyebrow">Included in paid plans</span>
            <h2 style={{ marginTop: 18 }}>
               Essentials that <span className="grad-text">keep you running</span>
            </h2>
            <p className="lead">
               Paid plans give you a connected system — your calendar, clients and bookings work together. </p>
            <ul className="split__list">
              <li>
                <Chk />
                <span>
                  <b>Online booking</b>  customised with your colours and logo </span>
              </li>
              <li>
                <Chk />
                <span>
                  <b>Connected CRM</b>  with client history and preferences </span>
              </li>
              <li>
                <Chk />
                <span>
                  <b>Reminders</b>  before and after appointments to keep clients informed </span>
              </li>
              <li>
                <Chk />
                <span>
                  <b>Mobile experience</b>  — for you and your clients, wherever you are </span>
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
             Frequently asked <span className="grad-text">questions</span>
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
                 Ready? </span>
              <h2 style={{ marginTop: 18 }}>Start for free today.</h2>
              <p>
                 No long-term commitment and no credit card required. See Jedro+ in action in a 15-minute demo. </p>
              <div className="cta-band__btns">
                <a className="btn btn--light btn--lg" href="https://app.jedroplus.com/signup">
                   Try for free <span className="arr">→</span>
                </a>
                <a
                  className="btn btn--ghost btn--lg"
                  href="/en#kontakt"
                  style={{ color: "#fff", borderColor: "rgba(255,255,255,.25)" }}
                >
                   Book a demo </a>
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
