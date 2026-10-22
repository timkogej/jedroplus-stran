// Generated from Slovenian source and src/locales/de.json.
import { pageMetadata } from "@/german/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/german/components/redesign/Nav";
import { Footer } from "@/german/components/redesign/Footer";
import { RevealOnScroll } from "@/german/components/redesign/RevealOnScroll";
import { SubpageHero } from "@/german/components/redesign/SubpageHero";
import { JsonLd } from "@/components/JsonLd";
import { primerjavaItemListSchema } from "@/german/lib/schema";
import { primerjave, publishedPrimerjaveSlugs } from "@/german/components/redesign/primerjava-data";

export const metadata: Metadata = pageMetadata("/de/vergleich", {
  title: "Vergleiche von Buchungssoftware | Jedro+",
  description:
    "Transparente Vergleiche von Jedro+ und anderen slowenischen Buchungssystemen: Funktionen, Preise, KI-Erinnerungen, Treuepunkte und Fiskalkassen nebeneinander.",
  openGraph: {
    title: "Vergleiche von Buchungssoftware | Jedro+",
    description:
      "Transparente Vergleiche von Jedro+ und anderen slowenischen Buchungssystemen: Funktionen, Preise, KI-Erinnerungen, Treuepunkte und Fiskalkassen nebeneinander.",
  },
});

const DeepArrow = () => (
  <span className="indrow__go">
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

export default function PrimerjavaHub() {
  const items = publishedPrimerjaveSlugs.map((slug) => primerjave[slug]);

  return (
    <>
      <JsonLd
        schema={primerjavaItemListSchema(
          publishedPrimerjaveSlugs.map((slug) => ({ slug, title: primerjave[slug].title })),
        )}
      />
      <Nav variant="light" />
      <main id="main-content">

      <SubpageHero
        eyebrow="Vergleich"
        title={
          <>
             Jedro+ im <span className="grad-text">transparenten Vergleich</span>
          </>
        }
        description={
          <>
             Vergleiche Jedro+ mit anderen slowenischen Buchungssystemen: Funktionen, Preise und Fiskalkassen nebeneinander. Wir zeigen auch die Stärken der Mitbewerber. </>
        }
        actions={
          <>
            <a className="btn btn--grad btn--lg" href="https://app.jedroplus.com/signup">
               Kostenlos testen <span className="arr">→</span>
            </a>
            <a className="btn btn--ghost btn--lg" href="/de/preise">
               Preise ansehen </a>
          </>
        }
      />

      {/* SEZNAM PRIMERJAV */}
      <section className="section subpage-first">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Vergleiche</span>
            <h2 style={{ marginTop: 18 }}>
               Wähle einen <span className="grad-text">Vergleich</span>
            </h2>
            <p className="lead">
               Jeder Vergleich enthält Funktionen, Preise, Stärken beider Systeme und häufige Fragen. </p>
          </div>
          <div className="ind-rows" style={{ marginTop: 40 }}>
            {items.map((p, i) => (
              <Link
                className="indrow indrow--nomedia reveal"
                href={`/de/vergleich/${publishedPrimerjaveSlugs[i]}`}
                key={publishedPrimerjaveSlugs[i]}
              >
                <div className="indrow__body">
                  <span className="indrow__n">{String(i + 1).padStart(2, "0")}</span>
                  <h3>Jedro+ oder {p.rivalName}?</h3>
                  <p>{p.cardText}</p>
                </div>
                <DeepArrow />
              </Link>
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
                 Noch unentschlossen? </span>
              <h2 style={{ marginTop: 18 }}>Teste Jedro+ und überzeuge dich selbst.</h2>
              <p>
                 Teste kostenlos oder buche eine kurze Demo für dein Unternehmen. </p>
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
