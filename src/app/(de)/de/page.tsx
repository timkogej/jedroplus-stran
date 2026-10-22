// Generated from Slovenian source and src/locales/de.json.
import Image from "next/image";
import { pageMetadata, DEFAULT_DESCRIPTION } from "@/german/lib/seo";
import { ReceptionistSpotlight } from "@/german/components/redesign/ReceptionistSpotlight";
import { Nav } from "@/german/components/redesign/Nav";
import { Footer } from "@/german/components/redesign/Footer";
import { HeroCalendar } from "@/german/components/redesign/HeroCalendar";
import { RevealOnScroll } from "@/german/components/redesign/RevealOnScroll";
import { industries } from "@/german/components/redesign/data";
import { JsonLd } from "@/components/JsonLd";
import { Faq } from "@/german/components/redesign/Faq";
import { homeFaq } from "@/german/components/redesign/faq-data";
import { softwareApplicationSchema } from "@/german/lib/schema";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata = pageMetadata("/de", {
  title: "Jedro+ | Buchungssoftware und KI-Rezeptionistin",
  description: DEFAULT_DESCRIPTION,
});

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
    title: "Erinnerungen vor dem Termin",
    text: "Personalisierte Erinnerungen per E-Mail und SMS, in deinem Ton und zur richtigen Zeit.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
    title: "Nachrichten nach dem Termin",
    text: "Dankesnachrichten, Hinweise zur Nachsorge und Einladungen zur nächsten Buchung.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4.5" width="18" height="16" rx="2" />
        <path d="M3 9.5h18M8 3v3M16 3v3" />
      </svg>
    ),
    title: "Terminkalender",
    text: "Klare Übersicht mit schneller Buchung, Verschiebung und Stornierung.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3.5 20a5.5 5.5 0 0111 0" />
        <path d="M16 5.4a3.2 3.2 0 010 5.2M17 13.5a5.5 5.5 0 013.5 6" />
      </svg>
    ),
    title: "Kundendatenbank (CRM)",
    text: "Kontakte, Besuchsverlauf, Notizen und Vorlieben an einem Ort.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 14.5l5-5" />
        <path d="M14 7.5l1-1a3.8 3.8 0 015.4 5.4l-2 2a3.8 3.8 0 01-5.4 0" />
        <path d="M10 16.5l-1 1a3.8 3.8 0 01-5.4-5.4l2-2a3.8 3.8 0 015.4 0" />
      </svg>
    ),
    title: "Onlinebuchung",
    text: "Ein teilbarer Link für einfache Buchungen, wo immer deine Kunden sind.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19V5M4 19h16" />
        <path d="M7 15l4-4 3 3 5-6" />
      </svg>
    ),
    title: "Auswertungen",
    text: "Termine, Auslastung, Absagen, Nichterscheinen und Trends auf einen Blick.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 7L4 12l5 5" />
        <path d="M4 12h11a5 5 0 015 5v1" />
      </svg>
    ),
    title: "Inaktive Kunden",
    text: "Automatische Kampagnen bringen inaktive Kunden zurück. Fülle deinen Kalender.",
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
  { n: "24/7", l: "Onlinebuchung" },
  { n: "1", l: "Kalender für alle Buchungen" },
  { n: "30 min", l: "für deinen ersten Receptionist+ Test" },
  { n: "0 €", l: "für den kostenlosen Free-Einstieg" },
];

const steps = [
  { n: "01 — Konto erstellen", t: "Registriere dich in Sekunden und richte die Grundlagen deines Unternehmens ein." },
  { n: "02 — Kunden importieren", t: "Wir können deine bestehende Datenbank importieren oder du ergänzt Kunden in der App." },
  { n: "03 — Termine & Erinnerungen", t: "Kalender, Datenbanken und Benachrichtigungen arbeiten zusammen." },
  { n: "04 — Mit KI wachsen", t: "Das System hilft, deinen Kalender zu füllen und Kommunikation und Ergebnisse zu verbessern." },
];

export default function Home() {
  return (
    <>
      <JsonLd schema={softwareApplicationSchema} />
      <Nav variant="flow" active="/de" tone="light" />
      <main id="main-content">

      {/* 01 — CINEMATIC HERO */}
      <HeroCalendar />

      {/* 02 — FUNKCIJE */}
      <section className="section" id="funkcije">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Funktionen</p>
            <h2 style={{ marginTop: 18 }}>
               Alles, was du brauchst, <br />
               verbunden an <span className="grad-text">einem Ort</span>
            </h2>
            <p className="lead">
               Jedro+ ist Buchungssoftware für Dienstleister in der Europäischen Union. Kalender, Online-Buchung, Kundendatenbank und KI-Telefonassistent arbeiten zusammen. </p>
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

      <ReceptionistSpotlight />

      {/* 03 — KOMUNIKACIJA */}
      <section className="section section--soft" id="komunikacija">
        <div className="wrap">
          <div className="split">
            <div className="reveal">
              <p className="eyebrow">Kommunikation</p>
              <h2 style={{ marginTop: 18 }}>
                 Zeige deinen Kunden, <br />
                 dass sie dir wichtig sind </h2>
              <p className="lead" style={{ maxWidth: "46ch" }}>
                 Lass KI das Kundenerlebnis verbessern. Dein Ton, dein Name und die richtigen Hinweise zur richtigen Zeit. </p>
              <ul className="split__list">
                <li>
                  <Check />
                  <span>
                    <b>Jede Nachricht neu formuliert.</b>  KI schreibt jede Nachricht individuell, persönlich und natürlich. </span>
                </li>
                <li>
                  <Check />
                  <span>
                    <b>Alles automatisch.</b>  Erinnerungen und Dankesnachrichten werden automatisch versendet und sparen Zeit und Tipparbeit. </span>
                </li>
                <li>
                  <Check />
                  <span>
                    <b>Ein besseres Kundenerlebnis.</b>  Die richtige Nachricht im richtigen Moment lässt Kunden gerne wiederkommen. </span>
                </li>
                <li>
                  <Check />
                  <span>
                    <b>Weniger versäumte Termine.</b>  Rechtzeitige Erinnerungen sorgen für einen volleren Kalender und weniger Absagen. </span>
                </li>
              </ul>
            </div>
            <div className="chat reveal" data-d="1">
              <div className="chat__time">Heute, 14:23</div>
              <div className="bubble bubble--out">
                 Hallo Ana! 😊 Nach deiner Zahnaufhellung heute empfehlen wir, 24 Stunden auf dunkle Getränke und Lebensmittel wie Kaffee, Rotwein und Blaubeeren zu verzichten. Lass dein Lächeln strahlen! ✨ </div>
              <div className="bubble bubble--in">
                 Hallo Luka! ✂️ Dein Haarschnitt ist morgen um 14:30 Uhr. Bitte komm 5 Minuten früher. Einen schönen Tag! </div>
              <div className="bubble bubble--out">
                 Danke für dein Vertrauen, Sara! 💙 Wir haben uns gerne um dich gekümmert. Deine Meinung bedeutet uns viel. Bis bald! 🌟 </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — REZULTATI */}
      <section className="section" id="rezultati">
        <div className="wrap">
          <div className="section-head center reveal">
            <p className="eyebrow eyebrow--plain" style={{ justifyContent: "center" }}>
               Ergebnisse </p>
            <h2 style={{ marginTop: 18 }}>Von Anfang an klar</h2>
            <p className="lead">
               Starte mit den Grundlagen und ergänze Funktionen, die deine Arbeitsweise unterstützen. </p>
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
            <p className="eyebrow">Branchen</p>
            <h2 style={{ marginTop: 18 }}>
               Für alle, die <br />
               mit Kunden arbeiten </h2>
            <p className="lead">
               Wo Termine und Kunden zusammenkommen, passt sich Jedro+ deiner Arbeitsweise an. </p>
          </div>
          <div className="industries-marquee reveal">
            <div className="industries-marquee__track">
              {industries.map((d, i) => (
                <Link className="ind" href={`/de/branchen/${d.slug}`} key={d.slug}>
                  {d.bg && (
                    <Image
                      className="ind__img"
                      src={`/images/industries/${d.bg}`}
                      alt={d.t}
                      fill
                      sizes="(max-width: 600px) 80vw, 30vw"
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
                  href={`/de/branchen/${d.slug}`}
                  key={`duplicate-${d.slug}`}
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  {d.bg && (
                    <Image
                      className="ind__img"
                      src={`/images/industries/${d.bg}`}
                      alt=""
                      fill
                      sizes="(max-width: 600px) 80vw, 30vw"
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
            <a className="btn btn--grad btn--lg" href="/de/branchen">
               Alle Branchen <span className="arr">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 06 — KAKO DELUJE */}
      <section className="section" id="kako">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">So funktioniert es</p>
            <h2 style={{ marginTop: 18 }}>
               Registriere dich. <br />
               Wir sind bereit, wenn du es bist. </h2>
            <p className="lead">In wenigen Schritten läuft dein Unternehmen.</p>
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
                 Bereit, dein Unternehmen <br />
                 auf das nächste Level zu bringen? </h2>
              <p>
                 Übernimm die Kontrolle über Termine, Kunden und Kommunikation. Erlebe Jedro+ in einer kostenlosen 15-minütigen Live-Demo. </p>
              <div className="cta-band__btns">
                <a className="btn btn--light btn--lg" href="mailto:info@jedroplus.com">
                   Demo buchen <span className="arr">→</span>
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
             Häufige <span className="grad-text">Fragen</span>
          </>
        }
        soft
      />

      </main>
      <Footer />
      <RevealOnScroll />
    </>
  );
}
