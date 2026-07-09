import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/redesign/Nav";
import { Footer } from "@/components/redesign/Footer";
import { RevealOnScroll } from "@/components/redesign/RevealOnScroll";
import { primerjave, primerjaveSlugs } from "@/components/redesign/primerjava-data";
import { JsonLd } from "@/components/JsonLd";
import { primerjavaBreadcrumbSchema, faqPageSchema } from "@/lib/schema";
import styles from "@/components/redesign/Primerjava.module.css";

export function generateStaticParams() {
  return primerjaveSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const p = primerjave[params.slug];
  const title = p ? p.metaTitle : "Primerjava | Jedro+";
  const description =
    p?.metaDescription ??
    "Poštena primerjava rezervacijskih sistemov za storitvena podjetja: funkcije, cene, AI opomniki in davčna blagajna.";
  return {
    title,
    description,
    openGraph: { title, description },
  };
}

// Označi vrstico tabele s kljukico, kadar je vrednost preprosto "Da".
function Cell({ value, strong }: { value: string; strong?: boolean }) {
  if (value === "Da") {
    return (
      <span className={styles.yes} style={strong ? { color: "var(--ink)" } : undefined}>
        Da
      </span>
    );
  }
  return <>{value}</>;
}

const Tick = () => (
  <span className={styles.tick}>
    <svg viewBox="0 0 12 12" fill="none">
      <path d="M2 6.2l2.6 2.6L10 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

export default function PrimerjavaPage({ params }: { params: { slug: string } }) {
  const p = primerjave[params.slug];
  if (!p) notFound();

  return (
    <>
      <JsonLd schema={primerjavaBreadcrumbSchema(params.slug, p.title)} />
      <JsonLd schema={faqPageSchema(p.faq)} />
      <Nav variant="light" />

      {/* HERO */}
      <section className="imghero imghero--plain">
        <div className="imghero__in">
          <div className="wrap">
            <nav aria-label="Drobtine" className="crumbs">
              <Link href="/">Domov</Link>
              <span aria-hidden="true">/</span>
              <Link href="/primerjava">Primerjava</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Jedro+ ali {p.rivalName}?</span>
            </nav>
            <span className="eyebrow">{p.eyebrow}</span>
            <h1 style={{ marginTop: 16 }}>{p.title}</h1>
            <p className="imghero__sub">{p.heroSub}</p>
            <div className="imghero__cta">
              <a className="btn btn--grad btn--lg" href="/#kontakt">
                Preizkusi brezplačno <span className="arr">→</span>
              </a>
              <a className="btn btn--light btn--lg" href="/cenik">
                Poglej cenik
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* UVOD + VERDICT BOX */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: "left", maxWidth: 820 }}>
            <span className="eyebrow">Uvod</span>
            <h2 style={{ marginTop: 18 }}>
              Dva slovenska sistema, <span className="grad-text">dva pristopa</span>
            </h2>
            <div style={{ marginTop: 24, display: "grid", gap: 18 }}>
              {p.intro.map((para, i) => (
                <p className="subintro__lead" key={i}>
                  {para}
                </p>
              ))}
            </div>
          </div>

          <div className={styles.verdict}>
            <div className={`${styles.verdictCol} ${styles.verdictColJedro} reveal`}>
              <div className={styles.verdictGlow} />
              <div className={styles.verdictHead} style={{ color: "#fff" }}>
                Izberite Jedro+, če želite:
              </div>
              <ul className={styles.verdictList}>
                {p.verdictJedro.map((li) => (
                  <li key={li}>
                    <Tick />
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${styles.verdictCol} reveal`} data-d="1">
              <div className={styles.verdictHead}>Izberite {p.rivalName}, če želite:</div>
              <ul className={styles.verdictList}>
                {p.verdictRival.map((li) => (
                  <li key={li}>
                    <Tick />
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRIMERJALNA TABELA */}
      <section className="section section--soft">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: "left", maxWidth: 820 }}>
            <span className="eyebrow">Funkcije drug ob drugem</span>
            <h2 style={{ marginTop: 18 }}>
              Primerjalna <span className="grad-text">tabela</span>
            </h2>
          </div>
          <div className={`${styles.tableWrap} reveal`}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.colFeature}>Funkcija</th>
                  <th className={styles.colJedro}>Jedro+</th>
                  <th>{p.rivalName}</th>
                </tr>
              </thead>
              <tbody>
                {p.table.map((row) => (
                  <tr key={row.feature}>
                    <td className={styles.cellFeature}>{row.feature}</td>
                    <td className={styles.cellJedro}>
                      <Cell value={row.jedro} strong />
                    </td>
                    <td>
                      <Cell value={row.rival} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {p.tableNote && <p className={styles.tableNote}>{p.tableNote}</p>}
        </div>
      </section>

      {/* KJE JEDRO+ IZSTOPA */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: "left", maxWidth: 820 }}>
            <span className="eyebrow">Prednosti Jedro+</span>
            <h2 style={{ marginTop: 18 }}>
              Kje Jedro+ <span className="grad-text">izstopa</span>
            </h2>
            {p.jedroWinsLead && (
              <p className="subintro__lead" style={{ marginTop: 20 }}>
                {p.jedroWinsLead}
              </p>
            )}
          </div>
          {p.jedroWins.length > 0 && (
            <div className={styles.blocks}>
              {p.jedroWins.map((b) => (
                <article className={`${styles.block} reveal`} key={b.title}>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* KJE JE KONKURENT BOLJŠI (pošteno) */}
      <section className="section section--soft">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: "left", maxWidth: 820 }}>
            <span className="eyebrow">Pošteno</span>
            <h2 style={{ marginTop: 18 }}>{p.rivalWinsTitle}</h2>
            {p.rivalWinsIntro && (
              <p className="subintro__lead" style={{ marginTop: 20 }}>
                {p.rivalWinsIntro}
              </p>
            )}
          </div>
          {p.rivalWins.length > 0 && (
            <div className={styles.blocks}>
              {p.rivalWins.map((b) => (
                <article className={`${styles.block} reveal`} key={b.title}>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CENA — POŠTENO */}
      {p.priceTable.length > 0 && (
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: "left", maxWidth: 820 }}>
            <span className="eyebrow">Cene</span>
            <h2 style={{ marginTop: 18 }}>
              Cena — <span className="grad-text">pošteno</span>
            </h2>
          </div>
          <div className={`${styles.tableWrap} reveal`}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.colFeature} />
                  <th className={styles.colJedro}>Jedro+</th>
                  <th>{p.rivalName}</th>
                </tr>
              </thead>
              <tbody>
                {p.priceTable.map((row) => (
                  <tr key={row.label}>
                    <td className={styles.cellFeature}>{row.label}</td>
                    <td className={styles.cellJedro}>{row.jedro}</td>
                    <td>{row.rival}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: 24, display: "grid", gap: 18, maxWidth: 820 }}>
            {p.priceNote.map((para, i) => (
              <p className="subintro__lead reveal" key={i}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* KATERO IZBRATI (po scenariju) */}
      {p.scenarios.length > 0 && (
      <section className="section section--soft">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: "left", maxWidth: 820 }}>
            <span className="eyebrow">Odločitev</span>
            <h2 style={{ marginTop: 18 }}>
              Katero <span className="grad-text">izbrati</span>
            </h2>
          </div>
          <div className={styles.scenarios}>
            {p.scenarios.map((s) => (
              <div className={`${styles.scenario} reveal`} key={s.need}>
                <span className={styles.scenarioNeed}>{s.need}</span>
                <span className={styles.scenarioArrow} aria-hidden="true">
                  →
                </span>
                <span className={`${styles.pill} ${s.pick === "jedro" ? styles.pillJedro : ""}`}>
                  {s.label}
                  <span className={styles.pillWhy}>({s.why})</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

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
            {p.faq.map((item) => (
              <details className="faq-item reveal" key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
          <p className={styles.sourceNote} style={{ maxWidth: 820, marginInline: "auto" }}>
            {p.sourceNote}
          </p>
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
              <h2 style={{ marginTop: 18 }}>Naj Jedro+ poskrbi za termine in stranke.</h2>
              <p>
                Preizkusite brezplačno ali se dogovorite za kratko predstavitev po meri
                vaše dejavnosti.
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
