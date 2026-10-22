// Generated from Slovenian source and src/locales/it.json.
import { pageMetadata } from "@/italian/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/italian/components/redesign/Nav";
import { Footer } from "@/italian/components/redesign/Footer";
import { RevealOnScroll } from "@/italian/components/redesign/RevealOnScroll";
import { SubpageHero } from "@/italian/components/redesign/SubpageHero";
import { JsonLd } from "@/components/JsonLd";
import { primerjavaItemListSchema } from "@/italian/lib/schema";
import { primerjave, publishedPrimerjaveSlugs } from "@/italian/components/redesign/primerjava-data";

export const metadata: Metadata = pageMetadata("/it/confronti", {
  title: "Confronti tra software di prenotazione | Jedro+",
  description:
    "Confronti trasparenti tra Jedro+ e altri sistemi sloveni: funzionalità, prezzi, promemoria AI, punti fedeltà e casse fiscali a confronto.",
  openGraph: {
    title: "Confronti tra software di prenotazione | Jedro+",
    description:
      "Confronti trasparenti tra Jedro+ e altri sistemi sloveni: funzionalità, prezzi, promemoria AI, punti fedeltà e casse fiscali a confronto.",
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
        eyebrow="Confronto"
        title={
          <>
             Jedro+ in un <span className="grad-text">confronto trasparente</span>
          </>
        }
        description={
          <>
             Scopri come si confronta Jedro+ con altri sistemi sloveni: funzionalità, prezzi e casse fiscali fianco a fianco. Spieghiamo anche dove i concorrenti hanno dei vantaggi. </>
        }
        actions={
          <>
            <a className="btn btn--grad btn--lg" href="https://app.jedroplus.com/signup">
               Prova gratis <span className="arr">→</span>
            </a>
            <a className="btn btn--ghost btn--lg" href="/it/prezzi">
               Vedi i prezzi </a>
          </>
        }
      />

      {/* SEZNAM PRIMERJAV */}
      <section className="section subpage-first">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Confronti</span>
            <h2 style={{ marginTop: 18 }}>
               Scegli un <span className="grad-text">confronto</span>
            </h2>
            <p className="lead">
               Ogni confronto include funzionalità, prezzi, vantaggi di entrambi i sistemi e domande frequenti. </p>
          </div>
          <div className="ind-rows" style={{ marginTop: 40 }}>
            {items.map((p, i) => (
              <Link
                className="indrow indrow--nomedia reveal"
                href={`/it/confronti/${publishedPrimerjaveSlugs[i]}`}
                key={publishedPrimerjaveSlugs[i]}
              >
                <div className="indrow__body">
                  <span className="indrow__n">{String(i + 1).padStart(2, "0")}</span>
                  <h3>Jedro+ o {p.rivalName}?</h3>
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
                 Hai ancora dubbi? </span>
              <h2 style={{ marginTop: 18 }}>Prova Jedro+ e valuta di persona.</h2>
              <p>
                 Provalo gratis oppure prenota una breve demo su misura per la tua attività. </p>
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
