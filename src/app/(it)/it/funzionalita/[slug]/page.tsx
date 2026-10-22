// Generated from Slovenian source and src/locales/it.json.
import { RelatedContent } from "@/components/RelatedContent";
import { FeaturePreview } from "@/italian/components/redesign/FeaturePreview";
import { pageMetadata } from "@/italian/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/italian/components/redesign/Nav";
import { Footer } from "@/italian/components/redesign/Footer";
import { RevealOnScroll } from "@/italian/components/redesign/RevealOnScroll";
import { funkcije, funkcijeSlugs } from "@/italian/components/redesign/funkcije-data";
import { HeroEmojis } from "@/italian/components/redesign/HeroEmojis";
import { HeroWords } from "@/italian/components/redesign/HeroWords";
import { JsonLd } from "@/components/JsonLd";
import { funkcijeBreadcrumbSchema, faqPageSchema } from "@/italian/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return funkcijeSlugs.map((slug) => ({ slug }));
}

// Emojiji, ki lebdijo čez beli hero pri funkcijah, ki jih ponazorijo s slikicami.
const heroEmojis: Record<string, string[]> = {
  "promemoria-sms": ["💬", "🕐", "🔔", "📲", "✉️", "⏰"],
  "prenotazioni-online": ["📅", "🗓️", "📲", "✅", "🕐", "✨"],
  "promozioni-sconti": ["🏷️", "🎉", "⏰", "💸", "✨", "🎁"],
  "risorse": ["🛏️", "🪑", "🚪", "🧴", "⚙️", "✅"],
  "richieste-appuntamento": ["📩", "🗓️", "✅", "🕐", "📲", "✨"],
  "design-prenotazioni-codici-qr": ["📱", "🎨", "🔗", "✨", "🖨️", "📅"],
};

// Lebdeče besede v gradient barvi za funkcije, kjer besede povedo več kot emoji.
const heroWords: Record<string, string[]> = {
  "crm-clienti": [
    "Ana", "Luka", "Maja", "Marko", "Eva", "Nejc", "Sara", "Žan",
    "Nina", "Matej", "Lara", "Tilen", "Mojca", "Jure", "Tina", "Rok",
    "Petra", "Miha", "Katja", "David",
  ],
  "comunicazione-ai": [
    "Ciao, Ana!", "Grazie per averci scelto, Maja", "A presto, Luka",
    "Un caro saluto, Sara", "Bentornato, Marko", "Grazie della visita, Eva",
    "Ti aspettiamo, Nina", "Benvenuto, Nejc", "Ci sentiamo presto, Lara",
    "Grazie, Tina ❤️", "Torna a trovarci, Rok", "Buona giornata, Petra",
  ],
};

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const f = funkcije[params.slug];
  const title = f ? f.metaTitle : "Funzionalità | Jedro+";
  const description =
    f?.metaDescription ??
    "Jedro+ per imprese di servizi: prenotazioni online, database clienti e promemoria automatici prima degli appuntamenti.";
  return pageMetadata(`/it/funzionalita/${params.slug}`, {
    title,
    description,
    openGraph: { title, description },
  });
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
  const emojis = heroEmojis[params.slug];
  const words = heroWords[params.slug];

  return (
    <>
      <JsonLd schema={funkcijeBreadcrumbSchema(params.slug, f.title)} />
      <JsonLd schema={faqPageSchema(f.faq)} />
      <Nav variant="light" active={`/it/funzionalita/${params.slug}`} />
      <main id="main-content">

      {/* EMOJI / WORD HERO (bel, lebdeči motivi) */}
      <section className="imghero imghero--plain">
        {emojis && <HeroEmojis emojis={emojis} />}
        {words && <HeroWords words={words} />}
        <div className="imghero__in">
          <div className="wrap">
            {/* BREADCRUMB */}
            <nav aria-label="Percorso di navigazione" className="crumbs">
              <Link href="/it">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/it/funzionalita">Funzionalità</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{f.title}</span>
            </nav>
            <span className="eyebrow">{f.eyebrow}</span>
            <h1 style={{ marginTop: 16 }}>{f.title}</h1>
            <p className="imghero__sub">{f.heroSub}</p>
            <div className="imghero__cta">
              <a className="btn btn--grad btn--lg" href="https://app.jedroplus.com/signup">
                 Prova gratis <span className="arr">→</span>
              </a>
              <a className="btn btn--light btn--lg" href="/it/funzionalita">
                 Tutte le funzionalità </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO + ADVANTAGES */}
      <section className="section">
        <div className="wrap split">
          <div className="split__body reveal">
            <span className="eyebrow">Come ti aiuta Jedro+</span>
            <h2 style={{ marginTop: 18 }}>
              {f.title} <span className="grad-text">in pratica</span>
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
              <a className="btn btn--primary btn--lg" href="https://app.jedroplus.com/signup">
                 Inizia ora <span className="arr">→</span>
              </a>
            </div>
          </div>
          <div className="split__media reveal" data-d="1">
            <FeaturePreview slug={params.slug} />
          </div>
        </div>
      </section>

      {/* DEEPER CONTENT */}
      <section className="section section--soft">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: "left", maxWidth: 760 }}>
            <span className="eyebrow">Come funziona</span>
            <h2 style={{ marginTop: 18 }}>
               Tutto collegato, <span className="grad-text">meno lavoro manuale</span>
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

      <RelatedContent path={`/it/funzionalita/${params.slug}`} />
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
                 Pronto a iniziare? </span>
              <h2 style={{ marginTop: 18 }}>
                 Lascia che Jedro+ gestisca appuntamenti e clienti. </h2>
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
