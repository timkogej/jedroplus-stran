import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/redesign/Nav";
import { Footer } from "@/components/redesign/Footer";
import { RevealOnScroll } from "@/components/redesign/RevealOnScroll";
import { funkcije, funkcijeSlugs } from "@/components/redesign/funkcije-data";
import { JsonLd } from "@/components/JsonLd";
import { funkcijeBreadcrumbSchema, faqPageSchema } from "@/lib/schema";

export function generateStaticParams() {
  return funkcijeSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const f = funkcije[params.slug];
  const title = f ? f.metaTitle : "Funkcija | Jedro+";
  const description =
    f?.metaDescription ??
    "Jedro+ za storitvena podjetja: spletno naročanje terminov, baza strank in samodejni opomniki pred terminom.";
  return {
    title,
    description,
    openGraph: { title, description },
  };
}

const Chk = () => (
  <span className="chk">
    <svg viewBox="0 0 12 12" fill="none">
      <path d="M2 6.2l2.6 2.6L10 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

export default function FunkcijaPage({ params }: { params: { slug: string } }) {
  const f = funkcije[params.slug];
  if (!f) notFound();

  return (
    <>
      <JsonLd schema={funkcijeBreadcrumbSchema(params.slug, f.title)} />
      <JsonLd schema={faqPageSchema(f.faq)} />
      <Nav variant="light" active="/funkcije" />

      {/* IMAGE HERO (full-bleed) */}
      <section className="imghero">
        <div className="imghero__img">
          <div className="ph">
            <span className="ph__tag">{f.heroTag}</span>
          </div>
        </div>
        <div className="imghero__scrim"></div>
        <div className="imghero__in">
          <div className="wrap">
            {/* BREADCRUMB */}
            <nav aria-label="Drobtine" className="crumbs">
              <Link href="/">Domov</Link>
              <span aria-hidden="true">/</span>
              <Link href="/funkcije">Funkcije</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{f.title}</span>
            </nav>
            <span className="eyebrow">{f.eyebrow}</span>
            <h1 style={{ marginTop: 16 }}>{f.title}</h1>
            <p className="imghero__sub">{f.heroSub}</p>
            <div className="imghero__cta">
              <a className="btn btn--grad btn--lg" href="/#kontakt">
                Preizkusi brezplačno <span className="arr">→</span>
              </a>
              <a className="btn btn--light btn--lg" href="/funkcije">
                Vse funkcije
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
              Manj pozabljenih terminov, <span className="grad-text">poln urnik</span>
            </h2>
            <p className="subintro__lead">{f.lead}</p>
            <ul className="split__list">
              {f.list.map((it) => (
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
              <span className="ph__tag">{f.mediaTag}</span>
            </div>
          </div>
        </div>
      </section>

      {/* DEEPER CONTENT */}
      <section className="section section--soft">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: "left", maxWidth: 760 }}>
            <span className="eyebrow">Kako deluje</span>
            <h2 style={{ marginTop: 18 }}>
              Vse povezano, <span className="grad-text">brez ročnega dela</span>
            </h2>
            <div style={{ marginTop: 24, display: "grid", gap: 18 }}>
              {f.body.map((para, i) => (
                <p className="subintro__lead" key={i}>
                  {para}
                </p>
              ))}
            </div>
          </div>
          <div className="t-grid" style={{ marginTop: 48 }}>
            {f.cards.map((c) => (
              <article className="fcard reveal" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Pogosta vprašanja</span>
            <h2 style={{ marginTop: 18 }}>
              Vse, kar vas <span className="grad-text">zanima</span>
            </h2>
          </div>
          <div className="faq-list" style={{ marginTop: 40, maxWidth: 820, marginInline: "auto" }}>
            {f.faq.map((item) => (
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
