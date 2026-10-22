// Generated from Slovenian source and src/locales/en.json.
import { pageMetadata } from "@/english/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/english/components/redesign/Nav";
import { Footer } from "@/english/components/redesign/Footer";
import { RevealOnScroll } from "@/english/components/redesign/RevealOnScroll";
import { JsonLd } from "@/components/JsonLd";
import { davcnaBlagajnaBreadcrumbSchema, faqPageSchema } from "@/english/lib/schema";

export const metadata: Metadata = pageMetadata("/en/fiscal-cash-register", {
  title: "Fiscal cash register for service businesses (FURS) | Jedro+",
  description:
    "Jedro+ fiscal cash register with FURS fiscal verification, connected to online booking, payments, loyalty points and discounts. Everything in one place, in line with Slovenian law.",
  openGraph: {
    title: "Fiscal cash register for service businesses (FURS) | Jedro+",
    description:
      "Jedro+ fiscal cash register with FURS fiscal verification, connected to online booking, payments, loyalty points and discounts. Everything in one place, in line with Slovenian law.",
  },
});

// Kaj vključuje — vsak vnos: kratek naslov (pred —) in razlaga (za —).
const included: { title: string; text: string }[] = [
  {
    title: "FURS fiscal verification with a valid certificate",
    text: "Invoices are verified by the Slovenian tax authority.",
  },
  {
    title: "Connected to online booking",
    text: "Appointment, payment and invoice in one flow.",
  },
  {
    title: "Online payments and deposits",
    text: "Clients can pay when they book.",
  },
  {
    title: "Loyalty points",
    text: "Reward clients with each purchase.",
  },
  {
    title: "Discounts and vouchers",
    text: "Apply promotions and discount codes directly at checkout.",
  },
  {
    title: "Sales overview",
    text: "See what was sold, when and to whom.",
  },
];

const faq = [
  {
    q: "Does the Jedro+ cash register support FURS requirements?",
    a: "Yes. The Jedro+ cash register uses a valid FURS certificate and fiscally verifies invoices in accordance with Slovenian law.",
  },
  {
    q: "Is the cash register included in Jedro+ plans?",
    a: "The cash register is a separate paid module and is not included in the core Plus and Pro plans.",
  },
  {
    q: "Is it connected to online booking and payments?",
    a: "Yes. The cash register connects to online booking, online payments, loyalty points and discounts in one system.",
  },
  {
    q: "Can I use discounts and vouchers at checkout?",
    a: "Yes. You can apply discounts and vouchers directly at checkout, and clients can also earn loyalty points.",
  },
];

export default function DavcnaBlagajna() {
  return (
    <>
      <JsonLd schema={davcnaBlagajnaBreadcrumbSchema()} />
      <JsonLd schema={faqPageSchema(faq)} />
      <Nav variant="light" active="/en/fiscal-cash-register" />
      <main id="main-content">

      {/* HERO */}
      <section className="imghero imghero--plain">
        <div className="imghero__in">
          <div className="wrap">
            <nav aria-label="Breadcrumbs" className="crumbs">
              <Link href="/en">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Fiscal cash register</span>
            </nav>
            <span className="eyebrow">Fiscal cash register</span>
            <h1 style={{ marginTop: 16 }}>Fiscal cash register for businesses in Slovenia</h1>
            <p className="imghero__sub">
               A module for issuing invoices and FURS confirmation in Slovenia, connected to online bookings, payments, loyalty points and discounts. </p>
            <div className="imghero__cta">
              <a className="btn btn--grad btn--lg" href="/en#kontakt">
                 Ask about this module <span className="arr">→</span>
              </a>
              <a className="btn btn--light btn--lg" href="/en/pricing">
                 View pricing </a>
            </div>
          </div>
        </div>
      </section>

      {/* UVOD */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: "left", maxWidth: 820 }}>
            <span className="eyebrow">Introduction</span>
            <h2 style={{ marginTop: 18 }}>
               A cash register connected to <span className="grad-text">everything else</span>
            </h2>
            <div style={{ marginTop: 24, display: "grid", gap: 18 }}>
              <p className="subintro__lead">
                 The Jedro+ cash register uses a valid FURS certificate to fiscally verify invoices in accordance with Slovenian law. It connects to the rest of Jedro+: online booking, payments, loyalty points and discounts. From the completed appointment to a fiscally verified invoice, everything follows one flow without duplicate work. </p>
            </div>
          </div>
        </div>
      </section>

      {/* KAJ VKLJUČUJE */}
      <section className="section section--soft">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: "left", maxWidth: 820 }}>
            <span className="eyebrow">What’s included</span>
            <h2 style={{ marginTop: 18 }}>
               Everything a cash register <span className="grad-text">needs</span>
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
            <span className="eyebrow">Who it’s for</span>
            <h2 style={{ marginTop: 18 }}>
               For service businesses that issue <span className="grad-text">invoices</span>
            </h2>
            <p className="subintro__lead" style={{ marginTop: 24 }}>
               For salons, clinics, wellness studios, garages and other service businesses that need fiscally verified invoices and want their cash register and bookings in one system. </p>
          </div>
        </div>
      </section>

      {/* KAKO DO NJE */}
      <section className="section section--soft">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: "left", maxWidth: 820 }}>
            <span className="eyebrow">Getting started</span>
            <h2 style={{ marginTop: 18 }}>
               A separate module, <span className="grad-text">set up with you</span>
            </h2>
            <p className="subintro__lead" style={{ marginTop: 24 }}>
               The cash register is available as a separate module for Jedro+. We help you set up your certificate and adapt the module to your business. </p>
            {/* TODO (Tim): dodaj, kako se modul naroči in koliko stane, ko določiš ceno. */}
            <div style={{ marginTop: 30 }}>
              <a className="btn btn--primary btn--lg" href="/en#kontakt">
                 Ask about this module <span className="arr">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Frequently asked questions</span>
            <h2 style={{ marginTop: 18 }}>
               Everything you <span className="grad-text">want to know</span>
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
                 Ready to get started? </span>
              <h2 style={{ marginTop: 18 }}>Cash register and booking in one system.</h2>
              <p>
                 Ask about the cash register module or book a short demo tailored to your business. </p>
              <div className="cta-band__btns">
                <a className="btn btn--light btn--lg" href="/en#kontakt">
                   Ask about this module <span className="arr">→</span>
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
