import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/redesign/Nav";
import { Footer } from "@/components/redesign/Footer";
import { RevealOnScroll } from "@/components/redesign/RevealOnScroll";
import { HeroEmojis } from "@/components/redesign/HeroEmojis";
import { panoge, panogeSlugs } from "@/components/redesign/panoge-data";
import { Faq } from "@/components/redesign/Faq";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return panogeSlugs.map((slug) => ({ slug }));
}

// Unique meta descriptions per panoga (140–160 znakov, brez keyword stuffinga).
const panogeDesc: Record<string, string> = {
  "frizerski-saloni":
    "Rezervacijski sistem za frizerski salon: spletno naročanje, pameten urnik za več frizerjev, baza strank in samodejni SMS opomniki pred terminom.",
  klinike:
    "Sistem za zobne in estetske klinike: digitalna kartoteka pacientov, potrditve terminov in samodejni opomniki, ki zmanjšajo odpovedi in zamude.",
  wellness:
    "Rezervacije za masažni in wellness studio: spletno naročanje, paketni termini in nežni opomniki, ki neaktivne stranke pripeljejo nazaj na obisk.",
  fitnes:
    "Rezervacijski sistem za fitnes in osebne trenerje: urnik vadb, prijave na skupinske termine in samodejni opomniki, ki obdržijo člane v ritmu.",
  avtoservisi:
    "Sistem za avtoservis in vulkanizerstvo: spletno naročanje na termin, zgodovina vozila in sezonski opomniki za servis ter menjavo gum ob pravem času.",
  coaching:
    "Sistem za coaching in terapevtske storitve: spletno naročanje, ponavljajoči termini, varne zasebne opombe in samodejni opomniki za vaše stranke.",
  "poslovne-storitve":
    "Sistem za agencije in poslovne storitve: koledar sestankov s povezavo za rezervacijo, baza strank ter samodejne potrditve in opomniki brez vašega dela.",
  ostalo:
    "Jedro+ za vsa storitvena podjetja: prilagodljiv urnik, spletno naročanje 24/7 in samodejni opomniki pred terminom — ne glede na vašo panogo.",
};

// Emojiji, ki lebdijo čez beli hero posamezne panoge.
const heroEmojis: Record<string, string[]> = {
  "frizerski-saloni": ["✂️", "💅", "💇‍♀️"],
  klinike: ["🦷", "🩺", "💉"],
  wellness: ["💆", "🌿", "💧"],
  fitnes: ["🧘", "🏋️", "🤸"],
  avtoservisi: ["🚗", "🛞", "🔧"],
  coaching: ["💬", "🧠", "🌱"],
  "poslovne-storitve": ["💼", "📊", "💻"],
  ostalo: ["📅", "✨", "🔔"],
};

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const p = panoge[params.slug];
  const title = p ? `${p.title} | Jedro+` : "Panoga | Jedro+";
  const description =
    panogeDesc[params.slug] ??
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

export default function PanogaPage({ params }: { params: { slug: string } }) {
  const p = panoge[params.slug];
  if (!p) notFound();
  const emojis = heroEmojis[params.slug] ?? heroEmojis.ostalo;

  return (
    <>
      <JsonLd schema={breadcrumbSchema(params.slug, p.title)} />
      <Nav variant="light" active="/panoge" />

      {/* EMOJI HERO (bel, lebdeči emojiji) */}
      <section className="imghero imghero--plain">
        <HeroEmojis emojis={emojis} />
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

      {/* USE CASES */}
      <section className="section section--soft">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Kako Jedro+ reši vaš dan</span>
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
            <span className="eyebrow">Vaš glas, ne robot</span>
            <h2 style={{ marginTop: 18 }}>{p.msgHead}</h2>
            <p className="subintro__lead">
              Sporočila niso robotska. Jedro+ jih sestavi v vašem tonu in pošlje
              ob pravem času — opomniki, povabila in zahvale, ki zvenijo, kot bi
              jih napisali sami.
            </p>
            <div style={{ marginTop: 30 }}>
              <a className="btn btn--primary btn--lg" href="/#kontakt">
                Začni zdaj <span className="arr">→</span>
              </a>
            </div>
          </div>
          <div className="split__media reveal" data-d="1">
            <div className="chat">
              <div className="chat__time">Danes, 14:23</div>
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

      {/* WHY CHOOSE */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Zakaj prav Jedro+</span>
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
        </div>
      </section>

      {/* FAQ */}
      <Faq
        items={p.faq}
        title={
          <>
            Pogosta <span className="grad-text">vprašanja</span>
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
