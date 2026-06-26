import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Nav } from "@/components/redesign/Nav";
import { Footer } from "@/components/redesign/Footer";
import { RevealOnScroll } from "@/components/redesign/RevealOnScroll";
import { SubpageHero } from "@/components/redesign/SubpageHero";

export const metadata: Metadata = {
  title: "Funkcije | Jedro+",
  description:
    "Vse funkcije Jedro+ na enem mestu: koledar terminov, CRM baza strank, samodejni AI opomniki, spletno naročanje in pametne funkcije za storitvena podjetja.",
  openGraph: {
    title: "Funkcije | Jedro+",
    description:
      "Vse funkcije Jedro+ na enem mestu: koledar terminov, CRM baza strank, samodejni AI opomniki, spletno naročanje in pametne funkcije za storitvena podjetja.",
  },
};

const ChkWhite = () => (
  <span className="chk">
    <svg viewBox="0 0 12 12" fill="none">
      <path d="M2 6.2l2.6 2.6L10 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

type Feat = { icon: ReactNode; title: string; text: string };

const feats: Feat[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M10.3 21a2 2 0 003.4 0" />
      </svg>
    ),
    title: "Opomniki pred terminom",
    text: "Prilagojeni e-mail/SMS opomniki v vašem tonu, ob pravem času.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
    title: "Opomniki po terminu",
    text: "Zahvala, navodila po storitvi in povabilo k ponovnemu obisku.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4.5" width="18" height="16" rx="2" />
        <path d="M3 9.5h18M8 3v3M16 3v3" />
      </svg>
    ),
    title: "Koledar terminov",
    text: "Pregleden koledarski pogled, hitro dodajanje, prestavljanje in preklic.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3.5 20a5.5 5.5 0 0111 0" />
        <path d="M16 5.4a3.2 3.2 0 010 5.2M17 13.5a5.5 5.5 0 013.5 6" />
      </svg>
    ),
    title: "Baza strank (CRM)",
    text: "Kontakti, zgodovina obiskov, opombe in preference strank na enem mestu.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3.2 2" />
      </svg>
    ),
    title: "Baza terminov",
    text: "Vsak termin ima zgodovino, status in povezavo s storitvijo ter izvajalcem.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 14.5l5-5" />
        <path d="M14 7.5l1-1a3.8 3.8 0 015.4 5.4l-2 2a3.8 3.8 0 01-5.4 0" />
        <path d="M10 16.5l-1 1a3.8 3.8 0 01-5.4-5.4l2-2a3.8 3.8 0 015.4 0" />
      </svg>
    ),
    title: "Spletno naročanje",
    text: "Deljiva povezava za hitro naročanje, kjerkoli se stranka nahaja.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l9 5-9 5-9-5 9-5z" />
        <path d="M3 13l9 5 9-5" />
      </svg>
    ),
    title: "Storitve in osebje",
    text: "Urejene storitve, trajanja, cene in razporedi izvajalcev.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 7L4 12l5 5" />
        <path d="M4 12h11a5 5 0 015 5v1" />
      </svg>
    ),
    title: "Izgubljene stranke",
    text: "Seznam neaktivnih strank + kampanje za ponovni obisk. Zapolnite urnik.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19V5M4 19h16" />
        <path d="M7 15l4-4 3 3 5-6" />
      </svg>
    ),
    title: "Analitika",
    text: "Termini, zasedenost, odpovedi/no-show in trendi na pogled.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 5.5h16a1 1 0 011 1V15a1 1 0 01-1 1H9.5L5 19.5V16H4a1 1 0 01-1-1V6.5a1 1 0 011-1z" />
        <path d="M8 9.5h8M8 12.5h5" />
      </svg>
    ),
    title: "Komunikacija",
    text: "AI generira personalizirana sporočila za vsako stranko — en klik, vsi obveščeni.",
  },
];

const deepDives = [
  {
    slug: "sms-opomniki",
    n: "01",
    title: "SMS opomniki za stranke",
    desc: "Samodejni opomniki ob pravem času — manj odpovedi in no-show terminov.",
    tag: "FOTO — SMS opomnik pred terminom",
  },
  {
    slug: "spletno-narocanje",
    n: "02",
    title: "Spletno naročanje in booking 24/7",
    desc: "Stranke rezervirajo same, kadarkoli — poln urnik brez klicev.",
    tag: "FOTO — spletno naročanje na telefonu",
  },
  {
    slug: "crm-baza-strank",
    n: "03",
    title: "CRM za storitvena podjetja",
    desc: "Kontakti, zgodovina obiskov in opombe vsake stranke na enem mestu.",
    tag: "FOTO — baza strank / kartica stranke",
  },
  {
    slug: "ai-komunikacija",
    n: "04",
    title: "AI personalizirana sporočila",
    desc: "AI napiše sporočilo v vašem tonu — z imenom, terminom in storitvijo.",
    tag: "FOTO — AI sporočila za stranke",
  },
];

const DeepArrow = () => (
  <span className="indrow__go">
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

export default function Funkcije() {
  return (
    <>
      <Nav variant="light" active="/funkcije" />

      <SubpageHero
        eyebrow="Funkcije"
        title={
          <>
            Vse kar potrebujete{" "}
            <span className="grad-text">in še več</span>
          </>
        }
        description={
          <>
            Vse je povezano: koledar → stranka → storitev → osebje → opomniki →
            analitika. Zgrajeno za učinkovitost — z AI, ki zmanjšuje ročno delo.
          </>
        }
        actions={
          <>
            <a className="btn btn--grad btn--lg" href="/#kontakt">
              Preizkusi brezplačno <span className="arr">→</span>
            </a>
            <a className="btn btn--ghost btn--lg" href="/#kontakt">
              Rezerviraj predstavitev
            </a>
          </>
        }
      />

      {/* FEATURE GRID */}
      <section className="section subpage-first">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Vse funkcije</span>
            <h2 style={{ marginTop: 18 }}>
              Vse, kar storitveno podjetje <span className="grad-text">res potrebuje</span>
            </h2>
            <p className="lead">
              Deset povezanih orodij, ki nadomestijo pet ločenih aplikacij — brez
              kompliciranja.
            </p>
          </div>
          <div className="feat-grid reveal">
            {feats.map((f) => (
              <article className="feat" key={f.title}>
                <div className="feat__ico">{f.icon}</div>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DEEP DIVES — povezave na funkcijske pod-strani */}
      <section className="section section--soft">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Podrobneje</span>
            <h2 style={{ marginTop: 18 }}>
              Spoznajte ključne funkcije <span className="grad-text">v globino</span>
            </h2>
            <p className="lead">
              Vsaka funkcija ima svojo stran z razlago, primeri in pogostimi
              vprašanji.
            </p>
          </div>
          <div className="ind-rows" style={{ marginTop: 40 }}>
            {deepDives.map((r) => (
              <Link className="indrow reveal" href={`/funkcije/${r.slug}`} key={r.slug}>
                <div className="indrow__media">
                  <div className="ph">
                    <span className="ph__tag">{r.tag}</span>
                  </div>
                </div>
                <div className="indrow__body">
                  <span className="indrow__n">{r.n}</span>
                  <h3>{r.title}</h3>
                  <p>{r.desc}</p>
                </div>
                <DeepArrow />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PERSONALIZACIJA */}
      <section className="section" id="personalizacija">
        <div className="wrap split">
          <div className="split__body reveal">
            <span className="eyebrow">Personalizacija</span>
            <h2 style={{ marginTop: 18 }}>
              Sporočila v <span className="grad-text">vašem tonu</span>
            </h2>
            <p className="lead">
              Jedro+ z AI ustvari sporočila, ki gradijo pravi odnos s strankami —
              opomniki, follow-upi in navodila, napisana, kot bi jih napisali
              sami.
            </p>
            <ul className="split__list">
              <li>
                <ChkWhite />
                <span>
                  <b>Ime, termin in navodila</b> za specifično storitev — stranka
                  čuti, da je sporočilo zanjo.
                </span>
              </li>
              <li>
                <ChkWhite />
                <span>
                  <b>Aplikacija po vaši meri.</b> Barvna shema, ton, chatbot —
                  sistem se prilagaja vam.
                </span>
              </li>
              <li>
                <ChkWhite />
                <span>
                  <b>E-mail in SMS</b> — kanal izberete glede na stranko in vrsto
                  sporočila.
                </span>
              </li>
            </ul>
          </div>
          <div className="split__media reveal" data-d="1">
            <div className="chat" style={{ background: "#fff" }}>
              <div className="chat__time">Danes, 14:23</div>
              <div className="bubble bubble--out">
                Pozdravljeni Ana! 😊 Ker ste imeli danes beljenje zob, naslednjih
                24 ur priporočamo izogibanje temnim napitkom. Vaš nasmeh bo
                zasijal! ✨
              </div>
              <div className="bubble bubble--in" style={{ background: "var(--bg-soft)" }}>
                Spoštovani Luka! ✂️ Jutri ob 14:30 vas čaka termin za striženje.
                Oglasite se 5 minut prej. Lepo se imejte!
              </div>
              <div className="bubble bubble--out">
                Hvala, Sara, za zaupanje! 💙 Bilo nam je v veselje skrbeti za vas.
                Se vidimo kmalu! 🌟
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section className="section">
        <div className="wrap split split--rev">
          <div className="split__body reveal">
            <span className="eyebrow">Spletno naročanje</span>
            <h2 style={{ marginTop: 18 }}>
              Rezervacije, ki <span className="grad-text">razbijejo rutino</span>
            </h2>
            <p className="lead">
              Desetine profesionalnih dizajnov za spletno naročanje — vsak
              oblikovan za izkušnjo, ki jo stranke rade ponovijo.
            </p>
            <ul className="split__list">
              <li>
                <ChkWhite />
                <span>
                  Prilagojeno vašim barvam in logotipu, <b>brez programiranja</b>
                </span>
              </li>
              <li>
                <ChkWhite />
                <span>
                  Optimizirano za mobilne naprave — stranke naročajo s telefona
                </span>
              </li>
              <li>
                <ChkWhite />
                <span>
                  Vsak mesec <b>novi dizajni</b> — naročanje ostaja sodobno
                </span>
              </li>
            </ul>
          </div>
          <div className="split__media reveal" data-d="1">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div className="ph" style={{ aspectRatio: "9/16" }}>
                <span className="ph__tag">dizajn naročanja — salon</span>
              </div>
              <div style={{ display: "grid", gap: 14 }}>
                <div className="ph" style={{ aspectRatio: "1/1" }}>
                  <span className="ph__tag">koledar</span>
                </div>
                <div className="ph" style={{ aspectRatio: "4/3" }}>
                  <span className="ph__tag">booking — klinika</span>
                </div>
              </div>
            </div>
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
                Začnite danes
              </span>
              <h2 style={{ marginTop: 18 }}>Postavite Jedro+ v nekaj minutah.</h2>
              <p>
                Od registracije do polne uporabe — termini, opomniki in AI funkcije
                na enem mestu.
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
