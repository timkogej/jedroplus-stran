// Generated from Slovenian source and src/locales/it.json.
import { SubpageHero } from "@/italian/components/redesign/SubpageHero";
import { pageMetadata } from "@/italian/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/italian/components/redesign/Nav";
import { Footer } from "@/italian/components/redesign/Footer";
import { RevealOnScroll } from "@/italian/components/redesign/RevealOnScroll";
import { primerjave, primerjaveSlugs } from "@/italian/components/redesign/primerjava-data";
import { JsonLd } from "@/components/JsonLd";
import { primerjavaBreadcrumbSchema, faqPageSchema } from "@/italian/lib/schema";
import styles from "@/italian/components/redesign/Primerjava.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return primerjaveSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const p = primerjave[params.slug];
  const title = p ? p.metaTitle : "Confronto | Jedro+";
  const description =
    p?.metaDescription ??
    "Un confronto trasparente tra software per imprese di servizi: funzionalità, prezzi, promemoria AI e casse fiscali.";
  return pageMetadata(`/it/confronti/${params.slug}`, {
    title,
    description,
    openGraph: { title, description },
    ...(p && !p.verified ? { robots: { index: false, follow: true } } : {}),
  });
}

// Označi vrstico tabele s kljukico, kadar je vrednost preprosto "Da".
function Cell({ value, strong }: { value: string; strong?: boolean }) {
  if (value === "Sì") {
    return (
      <span className={styles.yes} style={strong ? { color: "var(--ink)" } : undefined}>
         Sì </span>
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
  if (!p.verified) return <><Nav variant="light" /><main id="main-content"><SubpageHero eyebrow="Verifica delle fonti" title={p.title} description={p.heroSub} /><section className="section"><div className="wrap" style={{ maxWidth: 820 }}>{p.intro.map(text => <p className="lead" key={text}>{text}</p>)}<p style={{ marginTop: 28 }}><Link className="btn btn--primary" href="/it/confronti">Confronti verificati</Link></p></div></section></main><Footer /></>;


  return (
    <>
      <JsonLd schema={primerjavaBreadcrumbSchema(params.slug, p.title)} />
      <JsonLd schema={faqPageSchema(p.faq)} />
      <Nav variant="light" />
      <main id="main-content">

      {/* HERO */}
      <section className="imghero imghero--plain">
        <div className="imghero__in">
          <div className="wrap">
            <nav aria-label="Percorso di navigazione" className="crumbs">
              <Link href="/it">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/it/confronti">Confronto</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Jedro+ o {p.rivalName}?</span>
            </nav>
            <span className="eyebrow">{p.eyebrow}</span>
            <h1 style={{ marginTop: 16 }}>{p.title}</h1>
            <p className="imghero__sub">{p.heroSub}</p>
            <div className="imghero__cta">
              <a className="btn btn--grad btn--lg" href="https://app.jedroplus.com/signup">
                 Prova gratis <span className="arr">→</span>
              </a>
              <a className="btn btn--light btn--lg" href="/it/prezzi">
                 Vedi i prezzi </a>
            </div>
          </div>
        </div>
      </section>

      {/* UVOD + VERDICT BOX */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: "left", maxWidth: 820 }}>
            <span className="eyebrow">Introduzione</span>
            <h2 style={{ marginTop: 18 }}>
               Due sistemi sloveni, <span className="grad-text">due approcci</span>
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
                 Scegli Jedro+ se cerchi: </div>
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
              <div className={styles.verdictHead}>Scegli un {p.rivalName}se cerchi:</div>
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
            <span className="eyebrow">Funzionalità a confronto</span>
            <h2 style={{ marginTop: 18 }}>
               Tabella <span className="grad-text">comparativa</span>
            </h2>
          </div>
          <div className={`${styles.tableWrap} reveal`}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.colFeature}>Funzionalità</th>
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
            <span className="eyebrow">I vantaggi di Jedro+</span>
            <h2 style={{ marginTop: 18 }}>
               Dove Jedro+ <span className="grad-text">si distingue</span>
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
            <span className="eyebrow">Con trasparenza</span>
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
            <span className="eyebrow">Prezzi</span>
            <h2 style={{ marginTop: 18 }}>
               Prezzi — <span className="grad-text">spiegati con trasparenza</span>
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
            <span className="eyebrow">La tua scelta</span>
            <h2 style={{ marginTop: 18 }}>
               Quale <span className="grad-text">scegliere</span>
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
            <span className="eyebrow">Domande frequenti</span>
            <h2 style={{ marginTop: 18 }}>
               Tutto quello che <span className="grad-text">vuoi sapere</span>
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
          <nav className="comparison-sources" aria-label="Fonti del confronto"><h3>Fonti e metodo di verifica</h3><ul>{p.sources.map(source => <li key={source.url}><a href={source.url} rel="noopener noreferrer">{source.title} <span aria-hidden="true">↗</span></a></li>)}</ul><p>Il confronto è curato da Jedro+. I dati del concorrente provengono dalle fonti pubbliche indicate; «non confermato» non significa che una funzione sia assente.</p></nav>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="wrap">
          <div className="cta-band reveal">
            <div className="cta-band__glow"></div>
            <div className="cta-band__in">
              <span className="eyebrow" style={{ color: "rgba(255,255,255,.75)" }}>
                 Pronto a iniziare? </span>
              <h2 style={{ marginTop: 18 }}>Lascia che Jedro+ gestisca appuntamenti e clienti.</h2>
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
