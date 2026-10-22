// Generated from Slovenian source and src/locales/en.json.
import { RelatedContent } from "@/components/RelatedContent";
import Image from "next/image";
import { pageMetadata } from "@/english/lib/seo";
import { getSearchCopy } from "@/lib/search-copy";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/english/components/redesign/Nav";
import { Footer } from "@/english/components/redesign/Footer";
import { RevealOnScroll } from "@/english/components/redesign/RevealOnScroll";
import { HeroEmojis } from "@/english/components/redesign/HeroEmojis";
import { panoge, panogeSlugs } from "@/english/components/redesign/panoge-data";
import { Faq } from "@/english/components/redesign/Faq";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/english/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return panogeSlugs.map((slug) => ({ slug }));
}

// Unique meta descriptions per panoga (140–160 znakov, brez keyword stuffinga).
const panogeDesc: Record<string, string> = {
  "hair-salons":
    "Booking software for hair salons: online booking, smart schedules for multiple stylists, client records and automated SMS appointment reminders.",
  "clinics":
    "Software for dental and aesthetic clinics: digital patient records, booking confirmations and automated reminders to reduce cancellations and late arrivals.",
  wellness:
    "Booking for massage and wellness studios: online booking, appointment packages and gentle reminders to bring inactive clients back.",
  "fitness":
    "Booking software for gyms and personal trainers: class schedules, group bookings and automated reminders that keep members on track.",
  "garages":
    "Software for garages and tyre centres: online appointment booking, vehicle history and seasonal reminders for servicing and tyre changes.",
  coaching:
    "Software for coaching and therapy: online booking, recurring appointments, secure private notes and automated reminders for your clients.",
  "business-services":
    "Software for agencies and business services: a meeting calendar with a booking link, client records and automated confirmations and reminders.",
  "other-services":
    "Jedro+ for all service businesses: flexible schedules, 24/7 online booking and automated appointment reminders for any industry.",
};

// Relevantne primerjave po panogi — prikažemo le, kjer se dejansko sklada
// (Lime Booking in mojsalon.si ciljata predvsem salone in wellness).
const panogaCompare: Record<string, { slug: string; label: string }[]> = {
  "hair-salons": [
    { slug: "jedroplus-vs-lime-booking", label: "Jedro+ or Lime Booking?" },
  ],
  wellness: [
    { slug: "jedroplus-vs-lime-booking", label: "Jedro+ or Lime Booking?" },
  ],
};

// Emojiji, ki lebdijo čez beli hero posamezne panoge.
const heroEmojis: Record<string, string[]> = {
  "hair-salons": ["✂️", "💅", "💇‍♀️"],
  "clinics": ["🦷", "🩺", "💉"],
  wellness: ["💆", "🌿", "💧"],
  "fitness": ["🧘", "🏋️", "🤸"],
  "garages": ["🚗", "🛞", "🔧"],
  coaching: ["💬", "🧠", "🌱"],
  "business-services": ["💼", "📊", "💻"],
  "other-services": ["📅", "✨", "🔔"],
};

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const p = panoge[params.slug];
  const title = p ? `${p.title} | Jedro+` : "Industry | Jedro+";
  const description =
    panogeDesc[params.slug] ??
    "Jedro+ for service businesses: online appointment booking, a client database and automated appointment reminders.";
  return pageMetadata(`/en/industries/${params.slug}`, {
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

export default function PanogaPage({ params }: { params: { slug: string } }) {
  const p = panoge[params.slug];
  if (!p) notFound();
  const emojis = heroEmojis[params.slug] ?? heroEmojis.ostalo;
  const industryPhotos: Record<string, string> = {
    "hair-salons": "1", "clinics": "5", wellness: "3", "fitness": "2",
    "garages": "4", coaching: "7", "business-services": "6", "other-services": "8",
  };
  const compare = panogaCompare[params.slug];

  return (
    <>
      <JsonLd schema={breadcrumbSchema(params.slug, p.title)} />
      <Nav variant="light" active="/en/industries" />
      <main id="main-content">

      {/* EMOJI HERO (bel, lebdeči emojiji) */}
      <section className="imghero imghero--plain">
        <HeroEmojis emojis={emojis} />
        <div className="imghero__in">
          <div className="wrap">
            <span className="eyebrow">Industry</span>
            <h1 style={{ marginTop: 16 }}>{getSearchCopy(`/en/industries/${params.slug}`)?.heading ?? p.title}</h1>
            <p className="imghero__sub">{p.heroSub}</p>
            <div className="imghero__cta">
              <a className="btn btn--grad btn--lg" href="https://app.jedroplus.com/signup">
                 Try for free <span className="arr">→</span>
              </a>
              <a className="btn btn--light btn--lg" href="/en/industries">
                 All industries </a>
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
               Everything you need, <span className="grad-text">in one place</span>
            </h2>
            <p className="subintro__lead">{p.lead}</p>
            {p.pains.map((para, i) => (
              <p
                key={i}
                style={{
                  marginTop: 16,
                  color: "var(--ink-2)",
                  fontSize: 16.5,
                  lineHeight: 1.65,
                }}
              >
                {para}
              </p>
            ))}
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
              <a className="btn btn--primary btn--lg" href="https://app.jedroplus.com/signup">
                 Start now <span className="arr">→</span>
              </a>
            </div>
          </div>
          <div className="split__media reveal" data-d="1">
            <div className="industry-detail-photo">
              <Image src={`/images/industries/jedro-stran-panoge-${industryPhotos[params.slug]}.webp`} alt={p.title} fill sizes="(max-width: 860px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section section--soft">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">How Jedro+ makes your day easier</span>
            <h2 style={{ marginTop: 18 }}>{p.useCasesHead}</h2>
          </div>
          <div className="t-grid" style={{ marginTop: 48 }}>
            {p.useCases.map((c) => (
              <article className="fcard reveal" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MESSAGE EXAMPLE */}
      <section className="section">
        <div className="wrap split">
          <div className="split__body reveal">
            <span className="eyebrow">Your voice, naturally</span>
            <h2 style={{ marginTop: 18 }}>{p.msgHead}</h2>
            <p className="subintro__lead">
               Jedro+ writes messages in your voice and sends them at the right time — reminders, invitations and thank-you notes that sound like you. </p>
            <div style={{ marginTop: 30 }}>
              <a className="btn btn--primary btn--lg" href="https://app.jedroplus.com/signup">
                 Start now <span className="arr">→</span>
              </a>
            </div>
          </div>
          <div className="split__media reveal" data-d="1">
            <div className="chat">
              <div className="chat__time">Today, 14:23</div>
              {p.messages.map((m, i) => (
                <div key={i} className={`bubble bubble--${m.dir}`}>
                  {m.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="section section--soft">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">What you gain</span>
            <h2 style={{ marginTop: 18 }}>
               Less admin, <span className="grad-text">more clients</span>
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

      {/* WHY CHOOSE */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Why choose Jedro+</span>
            <h2 style={{ marginTop: 18 }}>{p.whyTitle}</h2>
            <p className="lead">{p.whyLead}</p>
          </div>
          <ul
            className="split__list reveal"
            style={{ maxWidth: 760, margin: "34px auto 0" }}
          >
            {p.whyList.map((it) => (
              <li key={it.b}>
                <Chk />
                <span>
                  <b>{it.b}</b>
                  {it.rest}
                </span>
              </li>
            ))}
          </ul>
          {compare && (
            <p
              className="reveal"
              style={{
                maxWidth: 760,
                margin: "30px auto 0",
                textAlign: "center",
                color: "var(--ink-2)",
                fontSize: 16,
              }}
            >
               Comparing providers?{" "}
              {compare.map((c, i) => (
                <span key={c.slug}>
                  {i > 0 && " · "}
                  <a className="grad-text" href={`/en/compare/${c.slug}`} style={{ fontWeight: 600 }}>
                    {c.label}
                  </a>
                </span>
              ))}
            </p>
          )}
        </div>
      </section>

      <RelatedContent path={`/en/industries/${params.slug}`} />
      {/* FAQ */}
      <Faq
        items={p.faq}
        title={
          <>
             Frequently asked <span className="grad-text">questions</span>
          </>
        }
        soft
        reveal
      />

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
