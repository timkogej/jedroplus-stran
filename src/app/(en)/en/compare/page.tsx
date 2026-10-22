// Generated from Slovenian source and src/locales/en.json.
import { pageMetadata } from "@/english/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/english/components/redesign/Nav";
import { Footer } from "@/english/components/redesign/Footer";
import { RevealOnScroll } from "@/english/components/redesign/RevealOnScroll";
import { SubpageHero } from "@/english/components/redesign/SubpageHero";
import { JsonLd } from "@/components/JsonLd";
import { primerjavaItemListSchema } from "@/english/lib/schema";
import { primerjave, publishedPrimerjaveSlugs } from "@/english/components/redesign/primerjava-data";

export const metadata: Metadata = pageMetadata("/en/compare", {
  title: "Booking software comparisons | Jedro+",
  description:
    "Fair comparisons of Jedro+ and other Slovenian booking systems: features, pricing, AI reminders, loyalty points and fiscal cash registers side by side.",
  openGraph: {
    title: "Booking software comparisons | Jedro+",
    description:
      "Fair comparisons of Jedro+ and other Slovenian booking systems: features, pricing, AI reminders, loyalty points and fiscal cash registers side by side.",
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
        eyebrow="Comparison"
        title={
          <>
             Jedro+ in a <span className="grad-text">fair comparison</span>
          </>
        }
        description={
          <>
             See how Jedro+ compares with other Slovenian booking systems, with features, prices and fiscal cash registers side by side. We also explain where competitors have advantages. </>
        }
        actions={
          <>
            <a className="btn btn--grad btn--lg" href="https://app.jedroplus.com/signup">
               Try for free <span className="arr">→</span>
            </a>
            <a className="btn btn--ghost btn--lg" href="/en/pricing">
               View pricing </a>
          </>
        }
      />

      {/* SEZNAM PRIMERJAV */}
      <section className="section subpage-first">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Comparisons</span>
            <h2 style={{ marginTop: 18 }}>
               Choose a <span className="grad-text">comparison</span>
            </h2>
            <p className="lead">
               Every comparison includes features side by side, pricing, a fair look at each system’s strengths and frequently asked questions. </p>
          </div>
          <div className="ind-rows" style={{ marginTop: 40 }}>
            {items.map((p, i) => (
              <Link
                className="indrow indrow--nomedia reveal"
                href={`/en/compare/${publishedPrimerjaveSlugs[i]}`}
                key={publishedPrimerjaveSlugs[i]}
              >
                <div className="indrow__body">
                  <span className="indrow__n">{String(i + 1).padStart(2, "0")}</span>
                  <h3>Jedro+ or {p.rivalName}?</h3>
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
                 Still deciding? </span>
              <h2 style={{ marginTop: 18 }}>Try Jedro+ and see for yourself.</h2>
              <p>
                 Try it for free or book a short demo tailored to your business. </p>
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
