import Image from "next/image";
import { Nav } from "@/components/redesign/Nav";
import { Footer } from "@/components/redesign/Footer";
import { FlowController } from "@/components/redesign/FlowController";
import { industries } from "@/components/redesign/data";
import type { ReactNode } from "react";

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

const TapPlus = () => (
  <span className="icard__tap">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  </span>
);

export default function Home() {
  const indCards = (dup: boolean) =>
    industries.map((d, idx) => (
      <article
        key={(dup ? "d" : "o") + idx}
        className="icard"
        data-i={idx}
        aria-hidden={dup || undefined}
      >
        {d.photo ? (
          <Image
            src={`/images/industries/${d.photo}.webp`}
            alt={d.t}
            fill
            sizes="300px"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div className="imgslot"></div>
        )}
        <div className="icard__grad"></div>
        <div className="icard__scrim"></div>
        <span className="icard__n">{String(idx + 1).padStart(2, "0")}</span>
        <TapPlus />
        <div className="icard__body">
          <h3>{d.t}</h3>
        </div>
      </article>
    ));

  return (
    <>
      <Nav variant="flow" active="/" aboutHref="#kontakt" />

      <div className="flow">
        {/* 01 — HERO */}
        <section
          className="flow__panel"
          data-ink="dark"
          style={{
            "--p-bg": "#0C0D10",
            "--p-ink": "#fff",
            "--p-tint":
              "linear-gradient(96deg, rgba(8,9,12,.9) 0%, rgba(8,9,12,.58) 30%, rgba(8,9,12,.16) 56%, rgba(8,9,12,0) 80%), linear-gradient(0deg, rgba(8,9,12,.5), rgba(8,9,12,0) 34%)",
          } as React.CSSProperties}
        >
          <div className="flow__bg">
            <Image
              className="flow__hero-bg"
              src="/images/jedro-stran-home-hero.jpeg"
              alt="Podjetnica uporablja Jedro+ v sodobnem poslovnem prostoru"
              fill
              priority
              sizes="100vw"
              quality={90}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flow__tint"></div>
          <div className="flow__inner">
            <p className="flow__eyebrow">01 — Jedro+</p>
            <hr className="flow__rule" />
            <h1 className="flow__h flow__h--hero" style={{ fontSize: 60 }}>
              PRIHODNOST{" "}
              <span id="heroRotor" className="rotor grad-text">
                naročanja
              </span>{" "}
              VAŠEGA PODJETJA
            </h1>
            <hr className="flow__rule" />
            <p className="flow__lead">
              Koledar terminov, baze strank, personalizirani opomniki, spletno
              naročanje in pametni AI — povezani v eno jedro.
            </p>
            <div className="flow__cta flow__cta--spaced">
              <a className="btn btn--light btn--lg" href="#kontakt">
                Preizkusi brezplačno <span className="arr">→</span>
              </a>
              <a className="flow__link" href="/funkcije">
                Oglej si funkcije <span className="arr">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* 02 — FUNKCIJE */}
        <section
          className="flow__panel flow__panel--tall"
          data-ink="dark"
          style={{
            "--p-bg": "#2F6BF0",
            "--p-ink": "#fff",
            "--p-tint":
              "linear-gradient(100deg, rgba(33,86,210,.94) 0%, rgba(33,86,210,.85) 38%, rgba(33,86,210,.45) 70%, rgba(33,86,210,.30) 100%), linear-gradient(0deg, rgba(33,86,210,.40), rgba(33,86,210,0) 55%)",
          } as React.CSSProperties}
        >
          <div className="flow__bg">
            <div className="imgslot"></div>
            <span className="slot-tag">SLIKA V OZADJU — delovni prostor</span>
          </div>
          <div className="flow__tint"></div>
          <div className="flow__inner">
            <p className="flow__eyebrow">02 — Funkcije</p>
            <hr className="flow__rule" />
            <h2 className="flow__h flow__h--md" style={{ maxWidth: "15ch", fontSize: 65 }}>
              Prihodnost je bližje
              <br />
              kot si mislite
            </h2>
            <div className="fn-subrow">
              <p className="flow__sub">Skriva se v naših funkcijah.</p>
              <a className="flow__link" href="/funkcije">
                Poglej si več <span className="arr">→</span>
              </a>
            </div>
            <div className="marquee" style={{ marginTop: 6 }}>
              <div className="marquee__track">
                {features.map((f, i) => (
                  <Fcard key={"o" + i} f={f} />
                ))}
                {features.map((f, i) => (
                  <Fcard key={"d" + i} f={f} hidden />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 03 — KOMUNIKACIJA */}
        <section
          id="komunikacija"
          className="flow__panel flow__panel--tall"
          data-ink="light"
          style={{
            "--p-bg": "#F4F1EA",
            "--p-ink": "#15161B",
            "--p-tint":
              "linear-gradient(155deg, rgba(244,241,234,.96) 0%, rgba(236,232,222,.92) 100%)",
          } as React.CSSProperties}
        >
          <div className="flow__bg">
            <Image
              className="flow__communication-bg"
              src="/images/jedro-stran-home-komunikacija.png"
              alt="Osebna komunikacija med svetovalko in stranko"
              fill
              sizes="100vw"
              quality={90}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flow__tint"></div>
          <div className="flow__inner" style={{ transform: "translateY(-28px)" }}>
            <p className="flow__eyebrow">03 — Komunikacija</p>
            <hr className="flow__rule" />
            <h2 className="flow__h flow__h--sm" style={{ maxWidth: "18ch", fontSize: 65 }}>
              Pokažite strankam,
              <br />
              da vam je mar
            </h2>
            <div className="commgrid">
              <div>
                <p className="flow__lead" style={{ maxWidth: "46ch" }}>
                  Prepustite AI, da vašim strankam polepša izkušnjo. Vaš ton,
                  vaše ime, prava navodila ob pravem času.
                </p>
                <ul className="adv">
                  <li>
                    <Check />
                    <span>
                      <b>Vedno svežo besedilo.</b> AI sestavi vsako sporočilo
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
                      <b>Manj zamujenih terminov.</b> Pravočasni opomniki
                      pomenijo polnejši urnik in manj odpovedi.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="chat">
                <div className="chat__time">Danes, 14:23</div>
                <div className="bubble bubble--out">
                  Pozdravljeni Ana! 😊 Ker ste imeli danes beljenje zob,
                  naslednjih 24 ur priporočamo izogibanje temnim napitkom —
                  kavi, rdečemu vinu, borovnicam. Vaš nasmeh bo zasijal! ✨
                </div>
                <div className="bubble bubble--in">
                  Spoštovani Luka! ✂️ Jutri ob 14:30 vas čaka termin za
                  striženje. Oglasite se 5 minut prej. Lepo se imejte!
                </div>
                <div className="bubble bubble--out">
                  Hvala, Sara, za zaupanje! 💙 Bilo nam je v veselje skrbeti za
                  vas. Vaše mnenje nam ogromno pomeni — se vidimo kmalu! 🌟
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 — ŠTEVILKE GOVORIJO */}
        <section
          className="flow__panel"
          data-ink="dark"
          style={{
            "--p-bg": "#0C0D10",
            "--p-ink": "#fff",
            "--p-tint":
              "linear-gradient(100deg, rgba(8,9,12,.95) 0%, rgba(8,9,12,.88) 40%, rgba(8,9,12,.62) 72%, rgba(8,9,12,.55) 100%), linear-gradient(0deg, rgba(8,9,12,.45), rgba(8,9,12,0) 55%)",
          } as React.CSSProperties}
        >
          <div className="flow__bg">
            <Image
              src="/redesign/stranka-telefon.jpg"
              alt="Zadovoljna stranka uporablja telefon"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flow__tint"></div>
          <div className="flow__inner">
            <p className="flow__eyebrow">04 — Rezultati</p>
            <hr className="flow__rule" />
            <h2 className="flow__h flow__h--md" style={{ fontSize: 65 }}>
              Številke
              <br />
              govorijo
            </h2>
            <hr className="flow__rule" />
            <p className="flow__lead">
              Manj administracije, več potrjenih terminov, bolj zadovoljne
              stranke — kaj drugega si lahko vaše podjetje sploh še želi?
            </p>
            <hr className="flow__rule" />
            <div className="flow__stats">
              <div className="flow__stat">
                <b>80%</b>
                <span>manj časa za administracijo</span>
              </div>
              <div className="flow__stat">
                <b>3×</b>
                <span>hitrejši odziv strankam</span>
              </div>
              <div className="flow__stat">
                <b>120+</b>
                <span>zadovoljnih podjetij</span>
              </div>
              <div className="flow__stat">
                <b>24/7</b>
                <span>delovanje AI funkcij</span>
              </div>
            </div>
            <hr className="flow__rule" />
            <p className="flow__lead flow__lead--r">
              Vsak prazen termin je izgubljen prihodek. Jedro+ ga zapolni.
            </p>
          </div>
        </section>

        {/* 05 — PANOGE */}
        <section
          className="flow__panel flow__panel--tall"
          data-ink="dark"
          style={{
            "--p-bg": "#6E5BF6",
            "--p-ink": "#fff",
            "--p-tint":
              "linear-gradient(100deg, rgba(78,62,200,.94) 0%, rgba(78,62,200,.85) 38%, rgba(110,91,246,.45) 70%, rgba(110,91,246,.30) 100%), linear-gradient(0deg, rgba(60,46,170,.42), rgba(60,46,170,0) 55%)",
          } as React.CSSProperties}
        >
          <div className="flow__bg">
            <Image
              src="/redesign/brivnica.jpg"
              alt="Moderna brivnica — striženje stranke"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flow__tint"></div>
          <div className="flow__inner">
            <p className="flow__eyebrow">05 — Panoge</p>
            <hr className="flow__rule" />
            <h2 className="flow__h flow__h--md" style={{ maxWidth: "16ch", fontSize: 65 }}>
              Za vse, ki delajo
              <br />
              s strankami
            </h2>
            <p className="flow__sub">
              Kliknite panogo in poglejte, kje vse lahko Jedro+ pomaga prav vam.
            </p>
            <div className="marquee marquee--ind" style={{ marginTop: 6 }}>
              <div className="marquee__track" id="indTrack">
                {indCards(false)}
                {indCards(true)}
              </div>
            </div>
            <div className="flow__cta" style={{ marginTop: "clamp(18px,2.6vh,34px)" }}>
              <a className="btn btn--light btn--lg" href="#kontakt">
                Preizkusi zdaj <span className="arr">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* 06 — KAKO DELUJE */}
        <section
          className="flow__panel"
          data-ink="light"
          style={{
            "--p-bg": "#F4F1EA",
            "--p-ink": "#15161B",
            "--p-tint":
              "linear-gradient(155deg, rgba(244,241,234,.95) 0%, rgba(235,231,221,.9) 100%)",
          } as React.CSSProperties}
        >
          <div className="flow__bg">
            <div className="imgslot"></div>
            <span className="slot-tag">SLIKA V OZADJU — uporabnik / postavitev</span>
          </div>
          <div className="flow__tint"></div>
          <div className="flow__inner">
            <p className="flow__eyebrow">06 — Kako deluje</p>
            <hr className="flow__rule" />
            <h2 className="flow__h flow__h--md" style={{ fontSize: 65 }}>
              Prijavi se.
              <br />
              Samo še tebe čakamo.
            </h2>
            <p className="flow__sub" style={{ marginTop: "clamp(16px,2.4vh,30px)" }}>
              En, dva, tri — in vaše podjetje že teče.
            </p>
            <hr className="flow__rule" />
            <div className="flow__cols" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
              <div className="flow__col">
                <h4>01 — Ustvari račun</h4>
                <p>Registracija v nekaj sekundah in osnovna konfiguracija vašega podjetja.</p>
              </div>
              <div className="flow__col">
                <h4>02 — Uvozi stranke</h4>
                <p>Uvozimo obstoječo bazo ali začnete z vnosom neposredno v aplikaciji.</p>
              </div>
              <div className="flow__col">
                <h4>03 — Termini &amp; opomniki</h4>
                <p>Koledar, baze in obveščanje začnejo delovati kot ena celota.</p>
              </div>
              <div className="flow__col">
                <h4>04 — Rast z AI</h4>
                <p>Sistem polni urnik in izboljšuje komunikacijo ter rezultate.</p>
              </div>
            </div>
            <div className="flow__cta" style={{ marginTop: "clamp(20px,3vh,38px)" }}>
              <a className="btn btn--primary btn--lg" href="#kontakt">
                Preizkusi brezplačno <span className="arr">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* 07 — ZAČNI */}
        <section
          className="flow__panel"
          id="kontakt"
          data-ink="dark"
          style={{
            "--p-bg": "#0C0D10",
            "--p-ink": "#fff",
            "--p-tint":
              "linear-gradient(100deg, rgba(8,9,12,.88) 0%, rgba(8,9,12,.68) 52%, rgba(8,9,12,.24) 100%), linear-gradient(0deg, rgba(8,9,12,.34), rgba(8,9,12,0) 48%)",
          } as React.CSSProperties}
        >
          <div className="flow__bg">
            <Image
              className="flow__start-bg"
              src="/images/jedro-stran-home-zacni.jpeg"
              alt="Uspešna podjetnica v sodobnem poslovnem prostoru"
              fill
              sizes="100vw"
              quality={90}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flow__tint"></div>
          <div className="flow__inner">
            <p className="flow__eyebrow">07 — Začni</p>
            <hr className="flow__rule" />
            <h2 className="flow__h flow__h--sm" style={{ maxWidth: "24ch", fontSize: 65 }}>
              KDAJ STE PRIPRAVLJENI DVIGNITI PODJETJE NA VIŠJO RAVEN?
            </h2>
            <hr className="flow__rule" />
            <p className="flow__lead">
              Prevzemite nadzor nad termini, strankami in komunikacijo. Pokažemo
              vam Jedro+ v živo — v 15 minutah. Nič skrbeti, predstavimo vam
              brezplačno.
            </p>
            <div className="flow__cta flow__cta--spaced">
              <a className="btn btn--light btn--lg" href="mailto:info@jedroplus.com">
                Rezerviraj predstavitev <span className="arr">→</span>
              </a>
              <a className="btn btn--lg btn--out" href="tel:068663410">
                068 663 410
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* PANOGA MODAL */}
      <div className="pmodal" id="pmodal" aria-hidden="true" role="dialog" aria-modal="true">
        <div className="pmodal__bd" data-close></div>
        <div className="pmodal__card">
          <button className="pmodal__close" data-close aria-label="Zapri">
            ×
          </button>
          <div className="pmodal__img">
            <div className="imgslot"></div>
            <span className="slot-tag" id="pmImgTag">
              SLIKA — panoga
            </span>
          </div>
          <div className="pmodal__body">
            <span className="pmodal__n" id="pmNum">
              01
            </span>
            <h3 className="pmodal__title" id="pmTitle"></h3>
            <p className="pmodal__desc" id="pmDesc"></p>
            <div className="pmodal__tags" id="pmTags"></div>
          </div>
        </div>
      </div>

      <Footer />

      <FlowController
        wordmark
        rotors={[
          {
            id: "heroRotor",
            words: ["komunikacije", "naročanja", "izkušnje", "terminov"],
          },
        ]}
        industries={industries}
      />
    </>
  );
}
