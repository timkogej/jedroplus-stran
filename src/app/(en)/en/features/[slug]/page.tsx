// Generated from Slovenian source and src/locales/en.json.
import { RelatedContent } from "@/components/RelatedContent";
import { FeaturePreview } from "@/english/components/redesign/FeaturePreview";
import { pageMetadata } from "@/english/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/english/components/redesign/Nav";
import { Footer } from "@/english/components/redesign/Footer";
import { RevealOnScroll } from "@/english/components/redesign/RevealOnScroll";
import { funkcije, funkcijeSlugs } from "@/english/components/redesign/funkcije-data";
import { HeroEmojis } from "@/english/components/redesign/HeroEmojis";
import { HeroWords } from "@/english/components/redesign/HeroWords";
import { JsonLd } from "@/components/JsonLd";
import { funkcijeBreadcrumbSchema, faqPageSchema } from "@/english/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return funkcijeSlugs.map((slug) => ({ slug }));
}

// Emojiji, ki lebdijo čez beli hero pri funkcijah, ki jih ponazorijo s slikicami.
const heroEmojis: Record<string, string[]> = {
  "sms-reminders": ["💬", "🕐", "🔔", "📲", "✉️", "⏰"],
  "online-booking": ["📅", "🗓️", "📲", "✅", "🕐", "✨"],
  "promotions-discounts": ["🏷️", "🎉", "⏰", "💸", "✨", "🎁"],
  "resources": ["🛏️", "🪑", "🚪", "🧴", "⚙️", "✅"],
  "appointment-requests": ["📩", "🗓️", "✅", "🕐", "📲", "✨"],
  "booking-designs-qr-codes": ["📱", "🎨", "🔗", "✨", "🖨️", "📅"],
};

// Lebdeče besede v gradient barvi za funkcije, kjer besede povedo več kot emoji.
const heroWords: Record<string, string[]> = {
  "client-crm": [
    "Ana", "Luka", "Maja", "Marko", "Eva", "Nejc", "Sara", "Žan",
    "Nina", "Matej", "Lara", "Tilen", "Mojca", "Jure", "Tina", "Rok",
    "Petra", "Miha", "Katja", "David",
  ],
  "ai-communication": [
    "Hi, Ana!", "Thank you for choosing us, Maja", "See you soon, Luka",
    "Best wishes, Sara", "Welcome back, Marko", "Thank you for visiting, Eva",
    "We look forward to seeing you, Nina", "Welcome, Nejc", "Speak soon, Lara",
    "Thank you, Tina ❤️", "Come back soon, Rok", "Have a lovely day, Petra",
  ],
};

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const f = funkcije[params.slug];
  const title = f ? f.metaTitle : "Feature | Jedro+";
  const description =
    f?.metaDescription ??
    "Jedro+ for service businesses: online appointment booking, a client database and automated appointment reminders.";
  return pageMetadata(`/en/features/${params.slug}`, {
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
      <Nav variant="light" active={`/en/features/${params.slug}`} />
      <main id="main-content">

      {/* EMOJI / WORD HERO (bel, lebdeči motivi) */}
      <section className="imghero imghero--plain">
        {emojis && <HeroEmojis emojis={emojis} />}
        {words && <HeroWords words={words} />}
        <div className="imghero__in">
          <div className="wrap">
            {/* BREADCRUMB */}
            <nav aria-label="Breadcrumbs" className="crumbs">
              <Link href="/en">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/en/features">Features</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{f.title}</span>
            </nav>
            <span className="eyebrow">{f.eyebrow}</span>
            <h1 style={{ marginTop: 16 }}>{f.title}</h1>
            <p className="imghero__sub">{f.heroSub}</p>
            <div className="imghero__cta">
              <a className="btn btn--grad btn--lg" href="https://app.jedroplus.com/signup">
                 Try for free <span className="arr">→</span>
              </a>
              <a className="btn btn--light btn--lg" href="/en/features">
                 All features </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO + ADVANTAGES */}
      <section className="section">
        <div className="wrap split">
          <div className="split__body reveal">
            <span className="eyebrow">How Jedro+ helps</span>
            <h2 style={{ marginTop: 18 }}>
              {f.title} <span className="grad-text">in practice</span>
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
                 Start now <span className="arr">→</span>
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
            <span className="eyebrow">How it works</span>
            <h2 style={{ marginTop: 18 }}>
               Everything connected, <span className="grad-text">less manual work</span>
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

      <RelatedContent path={`/en/features/${params.slug}`} />
      {/* FAQ */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Frequently asked questions</span>
            <h2 style={{ marginTop: 18 }}>
               Everything you <span className="grad-text">want to know</span>
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
                 Ready to get started? </span>
              <h2 style={{ marginTop: 18 }}>
                 Let Jedro+ take care of appointments and clients. </h2>
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
