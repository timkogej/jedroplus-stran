import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/redesign/Nav";
import { Footer } from "@/components/redesign/Footer";
import { RevealOnScroll } from "@/components/redesign/RevealOnScroll";
import { SubpageHero } from "@/components/redesign/SubpageHero";
import { JsonLd } from "@/components/JsonLd";
import { primerjavaItemListSchema } from "@/lib/schema";
import { primerjave, primerjaveSlugs } from "@/components/redesign/primerjava-data";

export const metadata: Metadata = {
  title: "Primerjave rezervacijskih sistemov | Jedro+",
  description:
    "Poštene primerjave Jedro+ z drugimi slovenskimi rezervacijskimi sistemi: funkcije, cene, AI opomniki, točke zvestobe in davčna blagajna drug ob drugem.",
  openGraph: {
    title: "Primerjave rezervacijskih sistemov | Jedro+",
    description:
      "Poštene primerjave Jedro+ z drugimi slovenskimi rezervacijskimi sistemi: funkcije, cene, AI opomniki, točke zvestobe in davčna blagajna drug ob drugem.",
  },
};

const DeepArrow = () => (
  <span className="indrow__go">
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

export default function PrimerjavaHub() {
  const items = primerjaveSlugs.map((slug) => primerjave[slug]);

  return (
    <>
      <JsonLd
        schema={primerjavaItemListSchema(
          primerjaveSlugs.map((slug) => ({ slug, title: primerjave[slug].title })),
        )}
      />
      <Nav variant="light" />

      <SubpageHero
        eyebrow="Primerjava"
        title={
          <>
            Jedro+ v <span className="grad-text">pošteni primerjavi</span>
          </>
        }
        description={
          <>
            Kako se Jedro+ obnese v primerjavi z drugimi slovenskimi rezervacijskimi
            sistemi — funkcije, cene in davčna blagajna drug ob drugem. Brez
            olepševanja: povemo tudi, kje je konkurenca boljša.
          </>
        }
        actions={
          <>
            <a className="btn btn--grad btn--lg" href="/#kontakt">
              Preizkusi brezplačno <span className="arr">→</span>
            </a>
            <a className="btn btn--ghost btn--lg" href="/cenik">
              Poglej cenik
            </a>
          </>
        }
      />

      {/* SEZNAM PRIMERJAV */}
      <section className="section subpage-first">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Primerjave</span>
            <h2 style={{ marginTop: 18 }}>
              Izberite <span className="grad-text">primerjavo</span>
            </h2>
            <p className="lead">
              Vsaka primerjava vključuje funkcije drug ob drugem, cene, pošten
              pregled prednosti obeh strani in pogosta vprašanja.
            </p>
          </div>
          <div className="ind-rows" style={{ marginTop: 40 }}>
            {items.map((p, i) => (
              <Link
                className="indrow indrow--nomedia reveal"
                href={`/primerjava/${primerjaveSlugs[i]}`}
                key={primerjaveSlugs[i]}
              >
                <div className="indrow__body">
                  <span className="indrow__n">{String(i + 1).padStart(2, "0")}</span>
                  <h3>Jedro+ ali {p.rivalName}?</h3>
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
                Še vedno v dvomih?
              </span>
              <h2 style={{ marginTop: 18 }}>Preizkusite Jedro+ in se prepričajte sami.</h2>
              <p>
                Brezplačno preizkusite ali se dogovorite za kratko predstavitev po
                meri vaše dejavnosti.
              </p>
              <div className="cta-band__btns">
                <a className="btn btn--light btn--lg" href="/#kontakt">
                  Preizkusi brezplačno <span className="arr">→</span>
                </a>
                <a
                  className="btn btn--ghost btn--lg"
                  href="/#kontakt"
                  style={{ color: "#fff", borderColor: "rgba(255,255,255,.25)" }}
                >
                  Rezerviraj predstavitev
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <RevealOnScroll />
    </>
  );
}
