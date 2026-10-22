// Generated from Slovenian source and src/locales/de.json.
import { pageMetadata } from "@/german/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/german/components/redesign/Nav";
import { Footer } from "@/german/components/redesign/Footer";
import { RevealOnScroll } from "@/german/components/redesign/RevealOnScroll";
import { JsonLd } from "@/components/JsonLd";
import { davcnaBlagajnaBreadcrumbSchema, faqPageSchema } from "@/german/lib/schema";

export const metadata: Metadata = pageMetadata("/de/fiskalkasse", {
  title: "Fiskalkasse für Dienstleistungsunternehmen (FURS) | Jedro+",
  description:
    "Jedro+ Fiskalkasse mit FURS-Verifizierung, verbunden mit Onlinebuchung, Zahlungen, Treuepunkten und Rabatten. Alles an einem Ort, entsprechend slowenischem Recht.",
  openGraph: {
    title: "Fiskalkasse für Dienstleistungsunternehmen (FURS) | Jedro+",
    description:
      "Jedro+ Fiskalkasse mit FURS-Verifizierung, verbunden mit Onlinebuchung, Zahlungen, Treuepunkten und Rabatten. Alles an einem Ort, entsprechend slowenischem Recht.",
  },
});

// Kaj vključuje — vsak vnos: kratek naslov (pred —) in razlaga (za —).
const included: { title: string; text: string }[] = [
  {
    title: "FURS-Verifizierung mit gültigem Zertifikat",
    text: "Rechnungen werden von der slowenischen Finanzverwaltung bestätigt.",
  },
  {
    title: "Mit Onlinebuchung verbunden",
    text: "Termin, Zahlung und Rechnung in einem Ablauf.",
  },
  {
    title: "Onlinezahlungen und Anzahlungen",
    text: "Kunden können bereits bei der Buchung bezahlen.",
  },
  {
    title: "Treuepunkte",
    text: "Belohne Kunden bei jedem Kauf.",
  },
  {
    title: "Rabatte und Gutscheine",
    text: "Aktionen und Rabattcodes direkt an der Kasse anwenden.",
  },
  {
    title: "Umsatzübersicht",
    text: "Sieh, was wann und an wen verkauft wurde.",
  },
];

const faq = [
  {
    q: "Unterstützt die Jedro+ Kasse die FURS-Anforderungen?",
    a: "Ja. Die Jedro+ Fiskalkasse verwendet ein gültiges FURS-Zertifikat und bestätigt Rechnungen entsprechend slowenischem Recht.",
  },
  {
    q: "Ist die Kasse in den Jedro+ Tarifen enthalten?",
    a: "Die Fiskalkasse ist ein separates kostenpflichtiges Modul und nicht in den Basistarifen Plus und Pro enthalten.",
  },
  {
    q: "Ist sie mit Onlinebuchung und Zahlungen verbunden?",
    a: "Ja. Kasse, Onlinebuchung, Onlinezahlungen, Treuepunkte und Rabatte arbeiten in einem System zusammen.",
  },
  {
    q: "Kann ich Rabatte und Gutscheine an der Kasse nutzen?",
    a: "Ja. Rabatte und Gutscheine lassen sich direkt anwenden. Kunden können außerdem Treuepunkte sammeln.",
  },
];

export default function DavcnaBlagajna() {
  return (
    <>
      <JsonLd schema={davcnaBlagajnaBreadcrumbSchema()} />
      <JsonLd schema={faqPageSchema(faq)} />
      <Nav variant="light" active="/de/fiskalkasse" />
      <main id="main-content">

      {/* HERO */}
      <section className="imghero imghero--plain">
        <div className="imghero__in">
          <div className="wrap">
            <nav aria-label="Brotkrumennavigation" className="crumbs">
              <Link href="/de">Startseite</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Fiskalkasse</span>
            </nav>
            <span className="eyebrow">Fiskalkasse</span>
            <h1 style={{ marginTop: 16 }}>Fiskalkasse für Unternehmen in Slowenien</h1>
            <p className="imghero__sub">
               Ein Modul für Rechnungsausstellung und FURS-Bestätigung in Slowenien, verbunden mit Online-Buchungen, Zahlungen, Treuepunkten und Rabatten. </p>
            <div className="imghero__cta">
              <a className="btn btn--grad btn--lg" href="/de#kontakt">
                 Modul anfragen <span className="arr">→</span>
              </a>
              <a className="btn btn--light btn--lg" href="/de/preise">
                 Preise ansehen </a>
            </div>
          </div>
        </div>
      </section>

      {/* UVOD */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: "left", maxWidth: 820 }}>
            <span className="eyebrow">Einführung</span>
            <h2 style={{ marginTop: 18 }}>
               Eine Kasse, verbunden mit <span className="grad-text">allem anderen</span>
            </h2>
            <div style={{ marginTop: 24, display: "grid", gap: 18 }}>
              <p className="subintro__lead">
                 Die Jedro+ Kasse bestätigt Rechnungen mit einem gültigen FURS-Zertifikat entsprechend slowenischem Recht. Sie verbindet Onlinebuchung, Zahlungen, Treuepunkte und Rabatte. Vom abgeschlossenen Termin bis zur verifizierten Rechnung folgt alles einem Ablauf, ohne doppelte Arbeit. </p>
            </div>
          </div>
        </div>
      </section>

      {/* KAJ VKLJUČUJE */}
      <section className="section section--soft">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: "left", maxWidth: 820 }}>
            <span className="eyebrow">Enthaltene Funktionen</span>
            <h2 style={{ marginTop: 18 }}>
               Alles, was eine Kasse <span className="grad-text">braucht</span>
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
            <span className="eyebrow">Für wen sie geeignet ist</span>
            <h2 style={{ marginTop: 18 }}>
               Für Dienstleistungsunternehmen, die <span className="grad-text">Rechnungen ausstellen</span>
            </h2>
            <p className="subintro__lead" style={{ marginTop: 24 }}>
               Für Salons, Kliniken, Wellnessstudios, Werkstätten und andere Dienstleistungsunternehmen, die steuerlich bestätigte Rechnungen ausstellen und Kasse und Buchungen verbinden möchten. </p>
          </div>
        </div>
      </section>

      {/* KAKO DO NJE */}
      <section className="section section--soft">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: "left", maxWidth: 820 }}>
            <span className="eyebrow">So startest du</span>
            <h2 style={{ marginTop: 18 }}>
               Ein separates Modul, <span className="grad-text">mit dir eingerichtet</span>
            </h2>
            <p className="subintro__lead" style={{ marginTop: 24 }}>
               Die Fiskalkasse ist als separates Jedro+ Modul erhältlich. Wir helfen bei Zertifikat und Einrichtung für dein Unternehmen. </p>
            {/* TODO (Tim): dodaj, kako se modul naroči in koliko stane, ko določiš ceno. */}
            <div style={{ marginTop: 30 }}>
              <a className="btn btn--primary btn--lg" href="/de#kontakt">
                 Modul anfragen <span className="arr">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Häufige Fragen</span>
            <h2 style={{ marginTop: 18 }}>
               Alles, was du <span className="grad-text">wissen möchtest</span>
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
                 Bereit für den Start? </span>
              <h2 style={{ marginTop: 18 }}>Kasse und Buchung in einem System.</h2>
              <p>
                 Frage das Kassenmodul an oder vereinbare eine kurze Demo für dein Unternehmen. </p>
              <div className="cta-band__btns">
                <a className="btn btn--light btn--lg" href="/de#kontakt">
                   Modul anfragen <span className="arr">→</span>
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
