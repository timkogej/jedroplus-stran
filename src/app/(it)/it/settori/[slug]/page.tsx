// Generated from Slovenian source and src/locales/it.json.
import { RelatedContent } from "@/components/RelatedContent";
import Image from "next/image";
import { pageMetadata } from "@/italian/lib/seo";
import { getSearchCopy } from "@/lib/search-copy";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/italian/components/redesign/Nav";
import { Footer } from "@/italian/components/redesign/Footer";
import { RevealOnScroll } from "@/italian/components/redesign/RevealOnScroll";
import { HeroEmojis } from "@/italian/components/redesign/HeroEmojis";
import { panoge, panogeSlugs } from "@/italian/components/redesign/panoge-data";
import { Faq } from "@/italian/components/redesign/Faq";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/italian/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return panogeSlugs.map((slug) => ({ slug }));
}

// Unique meta descriptions per panoga (140–160 znakov, brez keyword stuffinga).
const panogeDesc: Record<string, string> = {
  "saloni-parrucchieri":
    "Software di prenotazione per parrucchieri: prenotazioni online, agenda intelligente per più operatori, schede clienti e promemoria SMS automatici.",
  "cliniche":
    "Software per cliniche dentali ed estetiche: schede digitali dei pazienti, conferme e promemoria automatici per ridurre cancellazioni e ritardi.",
  "benessere":
    "Prenotazioni per studi di massaggio e benessere: prenotazioni online, pacchetti e promemoria discreti per far tornare i clienti inattivi.",
  "fitness":
    "Software di prenotazione per palestre e personal trainer: orari dei corsi, iscrizioni di gruppo e promemoria automatici per mantenere il ritmo.",
  "officine":
    "Software per officine e gommisti: prenotazioni online, storico del veicolo e promemoria stagionali per manutenzione e cambio gomme.",
  "coaching":
    "Software per coaching e terapia: prenotazioni online, appuntamenti ricorrenti, note private protette e promemoria automatici per i clienti.",
  "servizi-aziendali":
    "Software per agenzie e servizi aziendali: calendario riunioni con link di prenotazione, schede clienti, conferme e promemoria automatici.",
  "altri-servizi":
    "Jedro+ per tutte le imprese di servizi: agenda flessibile, prenotazioni online 24/7 e promemoria automatici in ogni settore.",
};

// Relevantne primerjave po panogi — prikažemo le, kjer se dejansko sklada
// (Lime Booking in mojsalon.si ciljata predvsem salone in wellness).
const panogaCompare: Record<string, { slug: string; label: string }[]> = {
  "saloni-parrucchieri": [
    { slug: "jedroplus-vs-lime-booking", label: "Jedro+ o Lime Booking?" },
  ],
  "benessere": [
    { slug: "jedroplus-vs-lime-booking", label: "Jedro+ o Lime Booking?" },
  ],
};

// Emojiji, ki lebdijo čez beli hero posamezne panoge.
const heroEmojis: Record<string, string[]> = {
  "saloni-parrucchieri": ["✂️", "💅", "💇‍♀️"],
  "cliniche": ["🦷", "🩺", "💉"],
  "benessere": ["💆", "🌿", "💧"],
  "fitness": ["🧘", "🏋️", "🤸"],
  "officine": ["🚗", "🛞", "🔧"],
  "coaching": ["💬", "🧠", "🌱"],
  "servizi-aziendali": ["💼", "📊", "💻"],
  "altri-servizi": ["📅", "✨", "🔔"],
};

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const p = panoge[params.slug];
  const title = p ? `${p.title} | Jedro+` : "Settore | Jedro+";
  const description =
    panogeDesc[params.slug] ??
    "Jedro+ per imprese di servizi: prenotazioni online, database clienti e promemoria automatici prima degli appuntamenti.";
  return pageMetadata(`/it/settori/${params.slug}`, {
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
    "saloni-parrucchieri": "1", "cliniche": "5", "benessere": "3", "fitness": "2",
    "officine": "4", "coaching": "7", "servizi-aziendali": "6", "altri-servizi": "8",
  };
  const compare = panogaCompare[params.slug];

  return (
    <>
      <JsonLd schema={breadcrumbSchema(params.slug, p.title)} />
      <Nav variant="light" active="/it/settori" />
      <main id="main-content">

      {/* EMOJI HERO (bel, lebdeči emojiji) */}
      <section className="imghero imghero--plain">
        <HeroEmojis emojis={emojis} />
        <div className="imghero__in">
          <div className="wrap">
            <span className="eyebrow">Settore</span>
            <h1 style={{ marginTop: 16 }}>{getSearchCopy(`/it/settori/${params.slug}`)?.heading ?? p.title}</h1>
            <p className="imghero__sub">{p.heroSub}</p>
            <div className="imghero__cta">
              <a className="btn btn--grad btn--lg" href="https://app.jedroplus.com/signup">
                 Prova gratis <span className="arr">→</span>
              </a>
              <a className="btn btn--light btn--lg" href="/it/settori">
                 Tutti i settori </a>
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
               Tutto ciò che ti serve, <span className="grad-text">in un unico posto</span>
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
                 Inizia ora <span className="arr">→</span>
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
            <span className="eyebrow">Come Jedro+ semplifica la tua giornata</span>
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
            <span className="eyebrow">Il tuo tono, in modo naturale</span>
            <h2 style={{ marginTop: 18 }}>{p.msgHead}</h2>
            <p className="subintro__lead">
               Jedro+ scrive con il tuo tono e invia i messaggi al momento giusto: promemoria, inviti e ringraziamenti che sembrano scritti da te. </p>
            <div style={{ marginTop: 30 }}>
              <a className="btn btn--primary btn--lg" href="https://app.jedroplus.com/signup">
                 Inizia ora <span className="arr">→</span>
              </a>
            </div>
          </div>
          <div className="split__media reveal" data-d="1">
            <div className="chat">
              <div className="chat__time">Oggi, 14:23</div>
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
            <span className="eyebrow">Cosa ottieni</span>
            <h2 style={{ marginTop: 18 }}>
               Meno amministrazione, <span className="grad-text">più clienti</span>
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
            <span className="eyebrow">Perché scegliere Jedro+</span>
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
               Stai confrontando i fornitori?{" "}
              {compare.map((c, i) => (
                <span key={c.slug}>
                  {i > 0 && " · "}
                  <a className="grad-text" href={`/it/confronti/${c.slug}`} style={{ fontWeight: 600 }}>
                    {c.label}
                  </a>
                </span>
              ))}
            </p>
          )}
        </div>
      </section>

      <RelatedContent path={`/it/settori/${params.slug}`} />
      {/* FAQ */}
      <Faq
        items={p.faq}
        title={
          <>
             Domande <span className="grad-text">frequenti</span>
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
