import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/redesign/Nav";
import { Footer } from "@/components/redesign/Footer";
import { RevealOnScroll } from "@/components/redesign/RevealOnScroll";
import { panoge, panogeSlugs } from "@/components/redesign/panoge-data";

export function generateStaticParams() {
  return panogeSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const p = panoge[params.slug];
  return { title: p ? `${p.title} | Jedro+` : "Panoga | Jedro+" };
}

const Chk = () => (
  <span className="chk">
    <svg viewBox="0 0 12 12" fill="none">
      <path d="M2 6.2l2.6 2.6L10 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

export default function PanogaPage({ params }: { params: { slug: string } }) {
  const p = panoge[params.slug];
  if (!p) notFound();

  return (
    <>
      <Nav variant="light" active="/panoge" />

      {/* IMAGE HERO (full-bleed) */}
      <section className="imghero">
        <div className="imghero__img">
          <div className="ph">
            <span className="ph__tag">{p.heroTag}</span>
          </div>
        </div>
        <div className="imghero__scrim"></div>
        <div className="imghero__in">
          <div className="wrap">
            <span className="eyebrow">Panoga</span>
            <h1 style={{ marginTop: 16 }}>{p.title}</h1>
            <p className="imghero__sub">{p.heroSub}</p>
            <div className="imghero__cta">
              <a className="btn btn--grad btn--lg" href="/#kontakt">
                Preizkusi brezplačno <span className="arr">→</span>
              </a>
              <a className="btn btn--light btn--lg" href="/panoge">
                Vse panoge
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO + ADVANTAGES */}
      <section className="section">
        <div className="wrap split">
          <div className="split__body reveal">
            <span className="eyebrow">Kako Jedro+ pomaga</span>
            <h2 style={{ marginTop: 18 }}>
              Vse, kar potrebujete, <span className="grad-text">na enem mestu</span>
            </h2>
            <p className="subintro__lead">{p.lead}</p>
            <ul className="split__list">
              {p.list.map((it) => (
                <li key={it.b}>
                  <Chk />
                  <span>
                    <b>{it.b}</b>
                    {it.rest}
                  </span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 30 }}>
              <a className="btn btn--primary btn--lg" href="/#kontakt">
                Začni zdaj <span className="arr">→</span>
              </a>
            </div>
          </div>
          <div className="split__media reveal" data-d="1">
            <div className="ph" style={{ aspectRatio: "4/5" }}>
              <span className="ph__tag">{p.mediaTag}</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="section section--soft">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Kaj pridobite</span>
            <h2 style={{ marginTop: 18 }}>
              Manj administracije, <span className="grad-text">več strank</span>
            </h2>
          </div>
          <div className="t-grid" style={{ marginTop: 48 }}>
            {p.cards.map((c) => (
              <article className="fcard reveal" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </article>
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
                Pripravljeni začeti?
              </span>
              <h2 style={{ marginTop: 18 }}>
                Naj Jedro+ poskrbi za termine in stranke.
              </h2>
              <p>
                Preizkusite brezplačno ali se dogovorite za kratko predstavitev po
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
