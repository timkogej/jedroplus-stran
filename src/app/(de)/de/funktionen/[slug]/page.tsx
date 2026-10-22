// Generated from Slovenian source and src/locales/de.json.
import { RelatedContent } from "@/components/RelatedContent";
import { FeaturePreview } from "@/german/components/redesign/FeaturePreview";
import { pageMetadata } from "@/german/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/german/components/redesign/Nav";
import { Footer } from "@/german/components/redesign/Footer";
import { RevealOnScroll } from "@/german/components/redesign/RevealOnScroll";
import { funkcije, funkcijeSlugs } from "@/german/components/redesign/funkcije-data";
import { HeroEmojis } from "@/german/components/redesign/HeroEmojis";
import { HeroWords } from "@/german/components/redesign/HeroWords";
import { JsonLd } from "@/components/JsonLd";
import { funkcijeBreadcrumbSchema, faqPageSchema } from "@/german/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return funkcijeSlugs.map((slug) => ({ slug }));
}

// Emojiji, ki lebdijo čez beli hero pri funkcijah, ki jih ponazorijo s slikicami.
const heroEmojis: Record<string, string[]> = {
  "sms-erinnerungen": ["💬", "🕐", "🔔", "📲", "✉️", "⏰"],
  "online-terminbuchung": ["📅", "🗓️", "📲", "✅", "🕐", "✨"],
  "aktionen-rabatte": ["🏷️", "🎉", "⏰", "💸", "✨", "🎁"],
  "ressourcen": ["🛏️", "🪑", "🚪", "🧴", "⚙️", "✅"],
  "terminanfragen": ["📩", "🗓️", "✅", "🕐", "📲", "✨"],
  "qr-codes-buchungsdesigns": ["📱", "🎨", "🔗", "✨", "🖨️", "📅"],
};

// Lebdeče besede v gradient barvi za funkcije, kjer besede povedo več kot emoji.
const heroWords: Record<string, string[]> = {
  "crm-kundendatenbank": [
    "Ana", "Luka", "Maja", "Marko", "Eva", "Nejc", "Sara", "Žan",
    "Nina", "Matej", "Lara", "Tilen", "Mojca", "Jure", "Tina", "Rok",
    "Petra", "Miha", "Katja", "David",
  ],
  "ki-kommunikation": [
    "Hallo, Ana!", "Danke für dein Vertrauen, Maja", "Bis bald, Luka",
    "Liebe Grüße, Sara", "Willkommen zurück, Marko", "Danke für deinen Besuch, Eva",
    "Wir freuen uns auf dich, Nina", "Willkommen, Nejc", "Bis bald, Lara",
    "Danke, Tina ❤️", "Komm gerne wieder, Rok", "Einen schönen Tag, Petra",
  ],
};

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const f = funkcije[params.slug];
  const title = f ? f.metaTitle : "Funktion | Jedro+";
  const description =
    f?.metaDescription ??
    "Jedro+ für Dienstleistungsunternehmen: Onlinebuchung, Kundendatenbank und automatische Terminerinnerungen.";
  return pageMetadata(`/de/funktionen/${params.slug}`, {
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
      <Nav variant="light" active={`/de/funktionen/${params.slug}`} />
      <main id="main-content">

      {/* EMOJI / WORD HERO (bel, lebdeči motivi) */}
      <section className="imghero imghero--plain">
        {emojis && <HeroEmojis emojis={emojis} />}
        {words && <HeroWords words={words} />}
        <div className="imghero__in">
          <div className="wrap">
            {/* BREADCRUMB */}
            <nav aria-label="Brotkrumennavigation" className="crumbs">
              <Link href="/de">Startseite</Link>
              <span aria-hidden="true">/</span>
              <Link href="/de/funktionen">Funktionen</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{f.title}</span>
            </nav>
            <span className="eyebrow">{f.eyebrow}</span>
            <h1 style={{ marginTop: 16 }}>{f.title}</h1>
            <p className="imghero__sub">{f.heroSub}</p>
            <div className="imghero__cta">
              <a className="btn btn--grad btn--lg" href="https://app.jedroplus.com/signup">
                 Kostenlos testen <span className="arr">→</span>
              </a>
              <a className="btn btn--light btn--lg" href="/de/funktionen">
                 Alle Funktionen </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO + ADVANTAGES */}
      <section className="section">
        <div className="wrap split">
          <div className="split__body reveal">
            <span className="eyebrow">Wie Jedro+ hilft</span>
            <h2 style={{ marginTop: 18 }}>
              {f.title} <span className="grad-text">in der Praxis</span>
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
                 Jetzt starten <span className="arr">→</span>
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
            <span className="eyebrow">So funktioniert es</span>
            <h2 style={{ marginTop: 18 }}>
               Alles verbunden, <span className="grad-text">weniger manuelle Arbeit</span>
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

      <RelatedContent path={`/de/funktionen/${params.slug}`} />
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
                 Bereit für den Start? </span>
              <h2 style={{ marginTop: 18 }}>
                 Lass Jedro+ Termine und Kunden organisieren. </h2>
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
