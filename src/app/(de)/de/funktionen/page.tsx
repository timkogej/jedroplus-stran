// Generated from Slovenian source and src/locales/de.json.
import { pageMetadata } from "@/german/lib/seo";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Nav } from "@/german/components/redesign/Nav";
import { Footer } from "@/german/components/redesign/Footer";
import { RevealOnScroll } from "@/german/components/redesign/RevealOnScroll";
import { SubpageHero } from "@/german/components/redesign/SubpageHero";

export const metadata: Metadata = pageMetadata("/de/funktionen", {
  title: "Funktionen | Jedro+",
  description:
    "Alle Jedro+ Funktionen an einem Ort: Terminkalender, Kunden-CRM, automatische KI-Erinnerungen, Onlinebuchung und intelligente Werkzeuge für Dienstleistungsunternehmen.",
  openGraph: {
    title: "Funktionen | Jedro+",
    description:
      "Alle Jedro+ Funktionen an einem Ort: Terminkalender, Kunden-CRM, automatische KI-Erinnerungen, Onlinebuchung und intelligente Werkzeuge für Dienstleistungsunternehmen.",
  },
});

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
    text: "Klare Kalenderansicht mit schneller Buchung, Verschiebung und Stornierung.",
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
    text: "Kundenkontakte, Besuchsverlauf, Notizen und Vorlieben an einem Ort.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3.2 2" />
      </svg>
    ),
    title: "Terminarchiv",
    text: "Jeder Termin hat Verlauf, Status und eine Verbindung zu Leistung und Mitarbeiter.",
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
        <path d="M12 3l9 5-9 5-9-5 9-5z" />
        <path d="M3 13l9 5 9-5" />
      </svg>
    ),
    title: "Leistungen und Team",
    text: "Organisiere Leistungen, Dauer, Preise und Teampläne.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 7L4 12l5 5" />
        <path d="M4 12h11a5 5 0 015 5v1" />
      </svg>
    ),
    title: "Inaktive Kunden",
    text: "Erkenne inaktive Kunden und lade sie mit Kampagnen wieder ein. Fülle deinen Kalender.",
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
        <path d="M4 5.5h16a1 1 0 011 1V15a1 1 0 01-1 1H9.5L5 19.5V16H4a1 1 0 01-1-1V6.5a1 1 0 011-1z" />
        <path d="M8 9.5h8M8 12.5h5" />
      </svg>
    ),
    title: "Kommunikation",
    text: "KI erstellt persönliche Nachrichten für jeden Kunden. Ein Klick informiert alle.",
  },
];

const deepDives = [
  {
    slug: "sms-erinnerungen",
    n: "01",
    title: "SMS-Erinnerungen für Kunden",
    desc: "Automatische Erinnerungen zur richtigen Zeit sorgen für weniger Absagen und Nichterscheinen.",
  },
  {
    slug: "online-terminbuchung",
    n: "02",
    title: "Onlinebuchung rund um die Uhr",
    desc: "Kunden buchen jederzeit und füllen deinen Kalender ohne Anrufe.",
  },
  {
    slug: "crm-kundendatenbank",
    n: "03",
    title: "CRM für Dienstleistungsunternehmen",
    desc: "Kontakte, Besuchsverlauf und Notizen jedes Kunden an einem Ort.",
  },
  {
    slug: "ki-kommunikation",
    n: "04",
    title: "KI-personalisierte Nachrichten",
    desc: "KI schreibt in deinem Ton und verwendet Name, Termin und Leistung.",
  },
  {
    slug: "aktionen-rabatte",
    n: "05",
    title: "Rabatte, Happy Hours und Aktionen",
    desc: "Fülle ruhigere Stunden mit gezielten Angeboten und Zusatzleistungen.",
  },
  {
    slug: "ressourcen",
    n: "06",
    title: "Ressourcen: Räume, Kabinen und Geräte",
    desc: "Termine berücksichtigen neben Mitarbeitern auch Räume, Liegen und Geräte.",
  },
  {
    slug: "terminanfragen",
    n: "07",
    title: "Terminanfragen",
    desc: "Kunden nennen einen Zeitraum, du bestätigst den genauen Termin.",
  },
  {
    slug: "qr-codes-buchungsdesigns",
    n: "08",
    title: "Buchungsdesigns, Links und QR-Codes",
    desc: "Dein Markenauftritt, ein Link für jeden Kanal und ein QR-Poster.",
  },
  {
    slug: "receptionist-plus",
    n: "09",
    title: "Receptionist+ — KI-Rezeptionistin",
    desc: "Nimmt Anrufe an, hilft Kunden und trägt Termine in deinen Kalender ein.",
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
      <Nav variant="light" active="/de/funktionen" />
      <main id="main-content">

      <SubpageHero
        eyebrow="Funktionen"
        title={
          <>
             Alles, was du brauchst{" "}
            <span className="grad-text">und mehr</span>
          </>
        }
        description={
          <>
             Alles ist verbunden: Kalender → Kunde → Leistung → Team → Erinnerungen → Auswertungen. Für effiziente Arbeit mit KI, die manuelle Aufgaben reduziert. </>
        }
        actions={
          <>
            <a className="btn btn--grad btn--lg" href="https://app.jedroplus.com/signup">
               Kostenlos testen <span className="arr">→</span>
            </a>
            <a className="btn btn--ghost btn--lg" href="/de#kontakt">
               Demo buchen </a>
          </>
        }
      />

      {/* FEATURE GRID */}
      <section className="section subpage-first">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Alle Funktionen</span>
            <h2 style={{ marginTop: 18 }}>
               Alles, was dein Unternehmen <span className="grad-text">wirklich braucht</span>
            </h2>
            <p className="lead">
               Zehn verbundene Werkzeuge ersetzen einzelne Apps und vereinfachen deine Arbeit. </p>
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
            <span className="eyebrow">Im Detail</span>
            <h2 style={{ marginTop: 18 }}>
               Entdecke die wichtigsten Funktionen <span className="grad-text">im Detail</span>
            </h2>
            <p className="lead">
               Jede Funktion hat eine eigene Seite mit Erklärungen, Beispielen und häufigen Fragen. </p>
          </div>
          <div className="ind-rows" style={{ marginTop: 40 }}>
            {deepDives.map((r) => (
              <Link className="indrow indrow--nomedia reveal" href={`/de/funktionen/${r.slug}`} key={r.slug}>
                <div className="indrow__body">
                  <span className="indrow__n">{r.n}</span>
                  <h3>{r.title}{r.slug === "receptionist-plus" && <span className="new-badge" style={{ marginLeft: 12, verticalAlign: "middle" }}>Neu</span>}</h3>
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
            <span className="eyebrow">Personalisierung</span>
            <h2 style={{ marginTop: 18 }}>
               Nachrichten in <span className="grad-text">deinem Ton</span>
            </h2>
            <p className="lead">
               Jedro+ erstellt mit KI Nachrichten für echte Kundenbeziehungen: Erinnerungen, Nachfragen und Hinweise, geschrieben wie von dir. </p>
            <ul className="split__list">
              <li>
                <ChkWhite />
                <span>
                  <b>Name, Termin und Hinweise</b>  für jede Leistung, damit sich die Nachricht persönlich anfühlt. </span>
              </li>
              <li>
                <ChkWhite />
                <span>
                  <b>Eine App nach deinen Bedürfnissen.</b>  Farben, Ton und Texte: Das System passt sich dir an. </span>
              </li>
              <li>
                <ChkWhite />
                <span>
                  <b>E-Mail und SMS</b>  — wähle den Kanal passend zu Kunde und Nachricht. </span>
              </li>
            </ul>
          </div>
          <div className="split__media reveal" data-d="1">
            <div className="chat" style={{ background: "#fff" }}>
              <div className="chat__time">Heute, 14:23</div>
              <div className="bubble bubble--out">
                 Hallo Ana! 😊 Nach deiner Zahnaufhellung heute empfehlen wir, 24 Stunden auf dunkle Getränke zu verzichten. Lass dein Lächeln strahlen! ✨ </div>
              <div className="bubble bubble--in" style={{ background: "var(--bg-soft)" }}>
                 Hallo Luka! ✂️ Dein Haarschnitt ist morgen um 14:30 Uhr. Bitte komm 5 Minuten früher. Einen schönen Tag! </div>
              <div className="bubble bubble--out">
                 Danke für dein Vertrauen, Sara! 💙 Wir haben uns gerne um dich gekümmert. Bis bald! 🌟 </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section className="section">
        <div className="wrap">
          <div className="split__body reveal" style={{ maxWidth: 760 }}>
            <span className="eyebrow">Onlinebuchung</span>
            <h2 style={{ marginTop: 18 }}>
               Buchungserlebnisse, <span className="grad-text">die auffallen</span>
            </h2>
            <p className="lead">
               Wähle ein Onlinebuchungsdesign, zu dem Kunden gerne zurückkehren. </p>
            <ul className="split__list">
              <li>
                <ChkWhite />
                <span>
                   An deine Farben und dein Logo angepasst, <b>ohne Programmierung</b>
                </span>
              </li>
              <li>
                <ChkWhite />
                <span>
                   Für Mobilgeräte optimiert, damit Kunden am Telefon buchen können </span>
              </li>
              <li>
                <ChkWhite />
                <span>
                  <b>Verschiedene Designs</b>  passend zu Tarif und Marke </span>
              </li>
            </ul>
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
                 Starte heute </span>
              <h2 style={{ marginTop: 18 }}>Richte Jedro+ in wenigen Minuten ein.</h2>
              <p>
                 Von der Registrierung bis zum Start: Termine, Erinnerungen und KI-Werkzeuge an einem Ort. </p>
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
