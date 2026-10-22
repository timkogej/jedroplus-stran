// Generated from Slovenian source and src/locales/de.json.
import { RelatedContent } from "@/components/RelatedContent";
import Image from "next/image";
import { pageMetadata } from "@/german/lib/seo";
import { getSearchCopy } from "@/lib/search-copy";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/german/components/redesign/Nav";
import { Footer } from "@/german/components/redesign/Footer";
import { RevealOnScroll } from "@/german/components/redesign/RevealOnScroll";
import { HeroEmojis } from "@/german/components/redesign/HeroEmojis";
import { panoge, panogeSlugs } from "@/german/components/redesign/panoge-data";
import { Faq } from "@/german/components/redesign/Faq";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/german/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return panogeSlugs.map((slug) => ({ slug }));
}

// Unique meta descriptions per panoga (140–160 znakov, brez keyword stuffinga).
const panogeDesc: Record<string, string> = {
  "friseursalons":
    "Buchungssoftware für Friseursalons: Onlinebuchung, intelligente Pläne für mehrere Friseure, Kundendaten und automatische SMS-Erinnerungen.",
  "praxen":
    "Software für Zahn- und Ästhetikkliniken: digitale Patientenakten, Terminbestätigungen und automatische Erinnerungen für weniger Absagen und Verspätungen.",
  wellness:
    "Buchungen für Massage und Wellness: Onlinebuchung, Terminpakete und dezente Erinnerungen, die inaktive Kunden zurückbringen.",
  "fitness":
    "Buchungssoftware für Fitness und Personal Training: Kurspläne, Gruppenanmeldungen und automatische Erinnerungen für regelmäßiges Training.",
  "werkstaetten":
    "Software für Werkstätten und Reifendienste: Onlinebuchung, Fahrzeughistorie und saisonale Erinnerungen an Wartung und Reifenwechsel.",
  coaching:
    "Software für Coaching und Therapie: Onlinebuchung, regelmäßige Termine, geschützte private Notizen und automatische Kundenerinnerungen.",
  "dienstleistungen":
    "Software für Agenturen und Unternehmensdienste: Besprechungskalender mit Buchungslink, Kundendaten und automatische Bestätigungen und Erinnerungen.",
  "weitere-branchen":
    "Jedro+ für alle Dienstleister: flexible Pläne, Onlinebuchung rund um die Uhr und automatische Terminerinnerungen in jeder Branche.",
};

// Relevantne primerjave po panogi — prikažemo le, kjer se dejansko sklada
// (Lime Booking in mojsalon.si ciljata predvsem salone in wellness).
const panogaCompare: Record<string, { slug: string; label: string }[]> = {
  "friseursalons": [
    { slug: "jedroplus-vs-lime-booking", label: "Jedro+ oder Lime Booking?" },
  ],
  wellness: [
    { slug: "jedroplus-vs-lime-booking", label: "Jedro+ oder Lime Booking?" },
  ],
};

// Emojiji, ki lebdijo čez beli hero posamezne panoge.
const heroEmojis: Record<string, string[]> = {
  "friseursalons": ["✂️", "💅", "💇‍♀️"],
  "praxen": ["🦷", "🩺", "💉"],
  wellness: ["💆", "🌿", "💧"],
  "fitness": ["🧘", "🏋️", "🤸"],
  "werkstaetten": ["🚗", "🛞", "🔧"],
  coaching: ["💬", "🧠", "🌱"],
  "dienstleistungen": ["💼", "📊", "💻"],
  "weitere-branchen": ["📅", "✨", "🔔"],
};

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const p = panoge[params.slug];
  const title = p ? `${p.title} | Jedro+` : "Branche | Jedro+";
  const description =
    panogeDesc[params.slug] ??
    "Jedro+ für Dienstleistungsunternehmen: Onlinebuchung, Kundendatenbank und automatische Terminerinnerungen.";
  return pageMetadata(`/de/branchen/${params.slug}`, {
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
    "friseursalons": "1", "praxen": "5", wellness: "3", "fitness": "2",
    "werkstaetten": "4", coaching: "7", "dienstleistungen": "6", "weitere-branchen": "8",
  };
  const compare = panogaCompare[params.slug];

  return (
    <>
      <JsonLd schema={breadcrumbSchema(params.slug, p.title)} />
      <Nav variant="light" active="/de/branchen" />
      <main id="main-content">

      {/* EMOJI HERO (bel, lebdeči emojiji) */}
      <section className="imghero imghero--plain">
        <HeroEmojis emojis={emojis} />
        <div className="imghero__in">
          <div className="wrap">
            <span className="eyebrow">Branche</span>
            <h1 style={{ marginTop: 16 }}>{getSearchCopy(`/de/branchen/${params.slug}`)?.heading ?? p.title}</h1>
            <p className="imghero__sub">{p.heroSub}</p>
            <div className="imghero__cta">
              <a className="btn btn--grad btn--lg" href="https://app.jedroplus.com/signup">
                 Kostenlos testen <span className="arr">→</span>
              </a>
              <a className="btn btn--light btn--lg" href="/de/branchen">
                 Alle Branchen </a>
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
               Alles, was du brauchst, <span className="grad-text">an einem Ort</span>
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
                 Jetzt starten <span className="arr">→</span>
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
            <span className="eyebrow">Wie Jedro+ deinen Tag erleichtert</span>
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
            <span className="eyebrow">Dein Ton, ganz natürlich</span>
            <h2 style={{ marginTop: 18 }}>{p.msgHead}</h2>
            <p className="subintro__lead">
               Jedro+ schreibt in deinem Ton und sendet Erinnerungen, Einladungen und Dankesnachrichten zur richtigen Zeit, als hättest du sie selbst geschrieben. </p>
            <div style={{ marginTop: 30 }}>
              <a className="btn btn--primary btn--lg" href="https://app.jedroplus.com/signup">
                 Jetzt starten <span className="arr">→</span>
              </a>
            </div>
          </div>
          <div className="split__media reveal" data-d="1">
            <div className="chat">
              <div className="chat__time">Heute, 14:23</div>
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
            <span className="eyebrow">Deine Vorteile</span>
            <h2 style={{ marginTop: 18 }}>
               Weniger Verwaltung, <span className="grad-text">mehr Kunden</span>
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
            <span className="eyebrow">Warum Jedro+</span>
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
               Du vergleichst Anbieter?{" "}
              {compare.map((c, i) => (
                <span key={c.slug}>
                  {i > 0 && " · "}
                  <a className="grad-text" href={`/de/vergleich/${c.slug}`} style={{ fontWeight: 600 }}>
                    {c.label}
                  </a>
                </span>
              ))}
            </p>
          )}
        </div>
      </section>

      <RelatedContent path={`/de/branchen/${params.slug}`} />
      {/* FAQ */}
      <Faq
        items={p.faq}
        title={
          <>
             Häufige <span className="grad-text">Fragen</span>
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
