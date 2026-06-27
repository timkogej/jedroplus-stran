import { Nav } from "@/components/redesign/Nav";
import { Footer } from "@/components/redesign/Footer";
import { HeroCalendar } from "@/components/redesign/HeroCalendar";
import { RevealOnScroll } from "@/components/redesign/RevealOnScroll";
import { industries } from "@/components/redesign/data";
import { JsonLd } from "@/components/JsonLd";
import { Faq } from "@/components/redesign/Faq";
import { homeFaq } from "@/components/redesign/faq-data";
import { softwareApplicationSchema } from "@/lib/schema";
import type { ReactNode } from "react";
import Link from "next/link";

const Check = () => (
  <span className="chk">
    <svg viewBox="0 0 12 12" fill="none">
      <path
        d="M2 6.2l2.6 2.6L10 3"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

type Feature = { icon: ReactNode; title: string; text: string };

const features: Feature[] = [
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
    text: "Pregleden pogled, hitro dodajanje, prestavljanje in preklic.",
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
    text: "Kontakti, zgodovina obiskov, opombe in preference na enem mestu.",
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
    text: "Deljiva povezava za hitro naročanje, kjerkoli je stranka.",
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
        <path d="M9 7L4 12l5 5" />
        <path d="M4 12h11a5 5 0 015 5v1" />
      </svg>
    ),
    title: "Izgubljene stranke",
    text: "Samodejne kampanje povrnejo neaktivne stranke. Zapolnite urnik.",
  },
];

const Fcard = ({ f, hidden }: { f: Feature; hidden?: boolean }) => (
  <article className="fcard" aria-hidden={hidden || undefined}>
    <div className="fcard__ico">{f.icon}</div>
    <h3>{f.title}</h3>
    <p>{f.text}</p>
  </article>
);

const stats = [
  { n: "80%", l: "manj časa za administracijo" },
  { n: "3×", l: "hitrejši odziv strankam" },
  { n: "120+", l: "zadovoljnih podjetij" },
  { n: "24/7", l: "delovanje AI funkcij" },
];

const steps = [
  { n: "01 — Ustvari račun", t: "Registracija v nekaj sekundah in osnovna konfiguracija vašega podjetja." },
  { n: "02 — Uvozi stranke", t: "Uvozimo obstoječo bazo ali začnete z vnosom neposredno v aplikaciji." },
  { n: "03 — Termini & opomniki", t: "Koledar, baze in obveščanje začnejo delovati kot ena celota." },
  { n: "04 — Rast z AI", t: "Sistem polni urnik in izboljšuje komunikacijo ter rezultate." },
];

export default function Home() {
  return (
    <>
      <JsonLd schema={softwareApplicationSchema} />
      <Nav variant="flow" active="/" />

      {/* 01 — CINEMATIC HERO */}
      <HeroCalendar />

      {/* 02 — FUNKCIJE */}
      <section className="section" id="funkcije">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Funkcije</p>
            <h2 style={{ marginTop: 18 }}>
              Vse, kar potrebujete,
              <br />
              povezano v <span className="grad-text">eno jedro</span>
            </h2>
            <p className="lead">
              Koledar, baza strank in pametni AI opomniki — brez preklapljanja
              med orodji.
            </p>
          </div>
        </div>
        <div className="marquee reveal" style={{ marginTop: 52 }}>
          <div className="marquee__track">
            {features.map((f, i) => (
              <Fcard key={"o" + i} f={f} />
            ))}
            {features.map((f, i) => (
              <Fcard key={"d" + i} f={f} hidden />
            ))}
          </div>
        </div>
      </section>

      {/* 03 — KOMUNIKACIJA */}
      <section className="section section--soft" id="komunikacija">
        <div className="wrap">
          <div className="split">
            <div className="reveal">
              <p className="eyebrow">Komunikacija</p>
              <h2 style={{ marginTop: 18 }}>
                Pokažite strankam,
                <br />
                da vam je mar
              </h2>
              <p className="lead" style={{ maxWidth: "46ch" }}>
                Prepustite AI, da vašim strankam polepša izkušnjo. Vaš ton, vaše
                ime, prava navodila ob pravem času.
              </p>
              <ul className="split__list">
                <li>
                  <Check />
                  <span>
                    <b>Vedno sveže besedilo.</b> AI sestavi vsako sporočilo
                    posebej — nikoli kopirano, nikoli robotsko.
                  </span>
                </li>
                <li>
                  <Check />
                  <span>
                    <b>Vse samodejno.</b> Brez dodatnega truda in ročnega
                    tipkanja — opomniki in zahvale gredo sami.
                  </span>
                </li>
                <li>
                  <Check />
                  <span>
                    <b>Boljša izkušnja stranke.</b> Pravo sporočilo ob pravem
                    trenutku — in stranke se rade vračajo.
                  </span>
                </li>
                <li>
                  <Check />
                  <span>
                    <b>Manj zamujenih terminov.</b> Pravočasni opomniki pomenijo
                    polnejši urnik in manj odpovedi.
                  </span>
                </li>
              </ul>
            </div>
            <div className="chat reveal" data-d="1">
              <div className="chat__time">Danes, 14:23</div>
              <div className="bubble bubble--out">
                Pozdravljeni Ana! 😊 Ker ste imeli danes beljenje zob, naslednjih
                24 ur priporočamo izogibanje temnim napitkom — kavi, rdečemu
                vinu, borovnicam. Vaš nasmeh bo zasijal! ✨
              </div>
              <div className="bubble bubble--in">
                Spoštovani Luka! ✂️ Jutri ob 14:30 vas čaka termin za striženje.
                Oglasite se 5 minut prej. Lepo se imejte!
              </div>
              <div className="bubble bubble--out">
                Hvala, Sara, za zaupanje! 💙 Bilo nam je v veselje skrbeti za vas.
                Vaše mnenje nam ogromno pomeni — se vidimo kmalu! 🌟
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — REZULTATI */}
      <section className="section" id="rezultati">
        <div className="wrap">
          <div className="section-head center reveal">
            <p className="eyebrow eyebrow--plain" style={{ justifyContent: "center" }}>
              Rezultati
            </p>
            <h2 style={{ marginTop: 18 }}>Številke govorijo</h2>
            <p className="lead">
              Manj administracije, več potrjenih terminov, bolj zadovoljne
              stranke — kaj drugega si lahko vaše podjetje sploh še želi?
            </p>
          </div>
          <div className="hero-stats reveal" style={{ marginTop: 56, borderRadius: "var(--r-lg)", border: "1px solid var(--line)", overflow: "hidden" }}>
            <div className="hero-stats__grid">
              {stats.map((s) => (
                <div className="stat" key={s.n}>
                  <div className="stat__n">{s.n}</div>
                  <div className="stat__l">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05 — PANOGE */}
      <section className="section section--soft" id="panoge">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Panoge</p>
            <h2 style={{ marginTop: 18 }}>
              Za vse, ki delajo
              <br />
              s strankami
            </h2>
            <p className="lead">
              Karkoli s termini in strankami — Jedro+ se prilagodi vašemu načinu
              dela, ne obratno.
            </p>
          </div>
          <div className="industries-marquee reveal">
            <div className="industries-marquee__track">
              {industries.map((d, i) => (
                <Link className="ind" href={`/panoge/${d.slug}`} key={d.slug}>
                  {d.bg && (
                    <img
                      className="ind__img"
                      src={`/images/industries/${d.bg}`}
                      alt={d.t}
                      loading="lazy"
                    />
                  )}
                  <span className="ind__scrim" aria-hidden="true" />
                  <div className="ind__bg" />
                  <span className="ind__n">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{d.t}</h3>
                  <span className="ind__arrow" aria-hidden="true">→</span>
                </Link>
              ))}
              {industries.map((d, i) => (
                <Link
                  className="ind"
                  href={`/panoge/${d.slug}`}
                  key={`duplicate-${d.slug}`}
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  {d.bg && (
                    <img
                      className="ind__img"
                      src={`/images/industries/${d.bg}`}
                      alt=""
                      loading="lazy"
                    />
                  )}
                  <span className="ind__scrim" aria-hidden="true" />
                  <div className="ind__bg" />
                  <span className="ind__n">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{d.t}</h3>
                  <span className="ind__arrow" aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="reveal" style={{ marginTop: 44 }}>
            <a className="btn btn--grad btn--lg" href="/panoge">
              Vse panoge <span className="arr">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 06 — KAKO DELUJE */}
      <section className="section" id="kako">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Kako deluje</p>
            <h2 style={{ marginTop: 18 }}>
              Prijavi se.
              <br />
              Samo še tebe čakamo.
            </h2>
            <p className="lead">En, dva, tri — in vaše podjetje že teče.</p>
          </div>
          <div className="steps reveal">
            {steps.map((s) => (
              <div className="step" key={s.n}>
                <span className="step__n">{s.n}</span>
                <p>{s.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — ZAČNI */}
      <section className="section" id="kontakt">
        <div className="wrap">
          <div className="cta-band reveal">
            <div className="cta-band__glow" />
            <div className="cta-band__in">
              <h2>
                Kdaj ste pripravljeni dvigniti
                <br />
                podjetje na višjo raven?
              </h2>
              <p>
                Prevzemite nadzor nad termini, strankami in komunikacijo.
                Pokažemo vam Jedro+ v živo — v 15 minutah, brezplačno.
              </p>
              <div className="cta-band__btns">
                <a className="btn btn--light btn--lg" href="mailto:info@jedroplus.com">
                  Rezerviraj predstavitev <span className="arr">→</span>
                </a>
                <a className="btn btn--lg btn--ghost" href="tel:068663410" style={{ color: "#fff", borderColor: "rgba(255,255,255,.3)" }}>
                  068 663 410
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq
        items={homeFaq}
        title={
          <>
            Pogosta <span className="grad-text">vprašanja</span>
          </>
        }
        soft
      />

      <Footer />
      <RevealOnScroll />
    </>
  );
}
