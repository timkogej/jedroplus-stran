// Generated from Slovenian source and src/locales/de.json.
import { pageMetadata } from "@/german/lib/seo";
import type { Metadata } from "next";
import { Nav } from "@/german/components/redesign/Nav";
import { Footer } from "@/german/components/redesign/Footer";
import { FlowController } from "@/german/components/redesign/FlowController";
import { Rotor } from "@/german/components/redesign/Rotor";
import { Faq } from "@/german/components/redesign/Faq";
import { agencijaFaq } from "@/german/components/redesign/faq-data";
import { JsonLd } from "@/components/JsonLd";
import { professionalServiceSchema } from "@/german/lib/schema";

export const metadata: Metadata = pageMetadata("/de/agentur", {
  title: "Agentur | Jedro+ — KI-Agentur für Dienstleistungsunternehmen",
  description:
    "Jedro+ Agentur entwickelt KI-Lösungen für Buchungen, Erinnerungen und Automatisierung, passend für Dienstleistungsunternehmen.",
  openGraph: {
    title: "Agentur | Jedro+ — KI-Agentur für Dienstleistungsunternehmen",
    description:
      "Jedro+ Agentur entwickelt KI-Lösungen für Buchungen, Erinnerungen und Automatisierung, passend für Dienstleistungsunternehmen.",
  },
});

const Adv = () => (
  <span className="chk">
    <svg viewBox="0 0 12 12" fill="none">
      <path d="M2 6.2l2.6 2.6L10 3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const agencyServices = [
  {
    title: "Unternehmenssysteme",
    text: "Wir verbinden dein Unternehmen auf einer Plattform: Termine, Kunden, Buchungen, Aufzeichnungen und Berichte an einem Ort, ohne doppelte Arbeit.",
  },
  {
    title: "Kommunikationssysteme",
    text: "Wir entwickeln Kundenkommunikation mit automatischen Erinnerungen, persönlichen Nachrichten und Informationen vor und nach Terminen.",
  },
  {
    title: "Websites",
    text: "Wir entwickeln moderne Websites, die Kunden gewinnen. In wenigen Tagen online und mit deinem Unternehmenssystem verbunden.",
  },
  {
    title: "KI-Produktion für Bilder und Videos",
    text: "Mit KI erstellen wir professionelle Bilder, Anzeigen und Videos für Websites und soziale Medien, schnell und passend zu deiner Marke.",
  },
  {
    title: "KI-Agenten und Automatisierung",
    text: "Wir entwickeln KI-Agenten, die Kunden antworten, Anfragen bearbeiten und wiederkehrende Aufgaben automatisieren, damit dein Team Zeit spart.",
  },
];

export default function Agencija() {
  return (
    <div className="theme-agency agency-page">
      <JsonLd schema={professionalServiceSchema} />
      <Nav variant="flow" active="/de/agentur" />
      <main id="main-content">

      <div className="flow">
        {/* 01 — HERO */}
        <section
          className="flow__panel"
          data-ink="dark"
          style={{
            "--p-bg": "#0C0D10",
            "--p-ink": "#fff",
            "--p-tint":
              "linear-gradient(100deg, rgba(8,9,12,.92) 0%, rgba(8,9,12,.66) 46%, rgba(8,9,12,.34) 80%), linear-gradient(0deg, rgba(8,9,12,.5), rgba(8,9,12,0) 36%)",
          } as React.CSSProperties}
        >
          <div className="flow__tint"></div>
          <div className="flow__inner">
            <p className="flow__eyebrow">01 — Jedro+ Agentur</p>
            <hr className="flow__rule" />
            <h1 className="flow__h flow__h--hero" style={{ fontSize: 65 }}>
               Wir entwickeln{" "}
              <Rotor
                id="agRotor"
                words={["Systeme", "Kommunikation", "Websites", "Wachstum"]}
              />
              <br />
               für Dienstleistungsunternehmen </h1>
            <hr className="flow__rule" />
            <p className="flow__lead">
               Qualität. Tempo. Innovation. Alles, was dein Unternehmen von einer Agentur braucht. </p>
            <div className="flow__cta flow__cta--spaced">
              <a className="btn btn--light btn--lg" href="tel:068663410">
                 Ruf +386 68 663 410 an </a>
              <a className="flow__link" href="#kaj">
                 Entdecke unsere Arbeit <span className="arr">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* 02 — KDO SMO */}
        <section
          className="flow__panel flow__panel--tall"
          data-ink="dark"
          style={{
            "--p-bg": "#00ffef",
            "--p-ink": "#fff",
            "--p-tint":
              "linear-gradient(155deg, rgba(0,255,239,.95) 0%, rgba(0,230,218,.93) 100%)",
          } as React.CSSProperties}
        >
          <div className="flow__tint"></div>
          <div className="flow__inner">
            <p className="flow__eyebrow">02 — Über uns</p>
            <hr className="flow__rule" />
            <h2 className="flow__h flow__h--md" style={{ maxWidth: "18ch", fontSize: 65 }}>
               Eine KI-Agentur für <br />
               Dienstleistungsunternehmen </h2>
            <p className="flow__lead">
               Wir sind auf Unternehmen spezialisiert, die mit Kunden arbeiten. Unsere KI-Lösungen arbeiten intelligenter, schneller und automatischer. </p>
            <ul className="adv">
              <li>
                <Adv />
                <span>
                  <b>Alles basiert auf KI.</b>  Automatisierung, intelligente Kommunikation und Systeme, die für dich arbeiten. </span>
              </li>
              <li>
                <Adv />
                <span>
                  <b>Auf Dienstleistungen spezialisiert.</b>  Wir verstehen Termine, Kunden und den Alltag von Dienstleistungsunternehmen. </span>
              </li>
              <li>
                <Adv />
                <span>
                  <b>Ein Team für alles.</b>  Vom Unternehmenssystem bis zur Website: ein Ansprechpartner, ein Team. </span>
              </li>
              <li>
                <Adv />
                <span>
                  <b>Schnelle Umsetzung.</b>  Wir bringen dich in wenigen Tagen an den Start. </span>
              </li>
            </ul>
          </div>
        </section>

        {/* 03 — HITROST */}
        <section
          className="flow__panel"
          data-ink="dark"
          style={{
            "--p-bg": "#0C0D10",
            "--p-ink": "#fff",
            "--p-tint":
              "linear-gradient(100deg, rgba(8,9,12,.95) 0%, rgba(8,9,12,.84) 44%, rgba(8,9,12,.58) 78%, rgba(8,9,12,.5) 100%)",
          } as React.CSSProperties}
        >
          <div className="flow__tint"></div>
          <div className="flow__inner">
            <p className="flow__eyebrow">03 — Tempo</p>
            <hr className="flow__rule" />
            <h2 className="flow__h flow__h--md" style={{ fontSize: 65 }}>
               Projekte in Wochen. <br />
               Früher starten. </h2>
            <hr className="flow__rule" />
            <p className="flow__lead">
               Bring dein Unternehmen mit schnell umgesetzten Systemen und Websites voran, mit Qualität in jedem Schritt. </p>
            <hr className="flow__rule" />
            <p className="flow__lead flow__lead--r">Weniger warten. Mehr erreichen.</p>
          </div>
        </section>

        {/* 04 — KAJ PONUJAMO */}
        <section
          className="flow__panel flow__panel--tall"
          id="kaj"
          data-ink="light"
          style={{
            "--p-bg": "#FFFFFF",
            "--p-ink": "#15161B",
            "--p-tint":
              "linear-gradient(155deg, rgba(255,255,255,.96) 0%, rgba(248,248,245,.92) 100%)",
          } as React.CSSProperties}
        >
          <div className="flow__tint"></div>
          <div className="flow__inner">
            <p className="flow__eyebrow">04 — Unser Angebot</p>
            <hr className="flow__rule" />
            <h2 className="flow__h flow__h--md" style={{ fontSize: 65 }}>
               Alles, was dein Unternehmen <br />
               zum Wachsen braucht </h2>
            <p className="flow__sub" style={{ marginTop: "clamp(14px,2vh,26px)" }}>
               Wir entwickeln die Werkzeuge für deinen nächsten Wachstumsschritt.{" "}
            </p>
            <div
              className="marquee svc-marquee"
              style={{ marginTop: "clamp(22px,3vh,40px)" }}
            >
              <div className="marquee__track svc-track">
                {agencyServices.map((service) => (
                  <article className="svc" key={service.title}>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </article>
                ))}
                {agencyServices.map((service) => (
                  <article
                    className="svc"
                    key={`duplicate-${service.title}`}
                    aria-hidden="true"
                  >
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="flow__cta" style={{ marginTop: "clamp(22px,3vh,40px)" }}>
              <a className="btn btn--primary btn--lg" href="tel:068663410">
                 Ruf uns an und besprich dein Projekt <span className="arr">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* 05 — ENA PLATFORMA */}
        <section
          className="flow__panel flow__panel--tall"
          data-ink="dark"
          style={{
            "--p-bg": "#00ffef",
            "--p-ink": "#fff",
            "--p-tint":
              "linear-gradient(100deg, rgba(0,255,239,.95) 0%, rgba(0,255,239,.86) 38%, rgba(0,230,218,.45) 70%, rgba(0,230,218,.28) 100%), linear-gradient(0deg, rgba(0,230,218,.40), rgba(0,230,218,0) 55%)",
          } as React.CSSProperties}
        >
          <div className="flow__tint"></div>
          <div className="flow__inner">
            <p className="flow__eyebrow">05 — Alles verbunden</p>
            <hr className="flow__rule" />
            <h2 className="flow__h flow__h--md" style={{ maxWidth: "16ch", fontSize: 65 }}>
               Dein ganzes Unternehmen <br />
               auf einer Plattform </h2>
            <p className="flow__lead">
               Verbinde Betrieb, Kommunikation und Onlinepräsenz in einem System, das einfach zu verwalten ist und mit dir wächst. </p>
            <div className="onerow">
              <span>Termine</span>
              <i>→</i>
              <span>Kunden</span>
              <i>→</i>
              <span>Kommunikation</span>
              <i>→</i>
              <span>Buchung</span>
              <i>→</i>
              <span>Berichte</span>
            </div>
          </div>
        </section>

        {/* 06 — KONTAKT */}
        <section
          className="flow__panel"
          id="kontakt"
          data-ink="dark"
          style={{
            "--p-bg": "#0C0D10",
            "--p-ink": "#fff",
            "--p-tint":
              "linear-gradient(100deg, rgba(8,9,12,.92) 0%, rgba(8,9,12,.72) 52%, rgba(8,9,12,.44) 100%)",
          } as React.CSSProperties}
        >
          <div className="flow__tint"></div>
          <div className="flow__inner">
            <p className="flow__eyebrow">06 — Ruf uns an</p>
            <hr className="flow__rule" />
            <h2 className="flow__h flow__h--sm" style={{ maxWidth: "22ch", fontSize: 65 }}>
               Bereit für den nächsten Schritt? </h2>
            <hr className="flow__rule" />
            <p className="flow__lead">
               Ruf uns für eine kostenlose 15-minütige Einführung an und entdecke ein intelligenteres, vernetztes Unternehmen mit KI. Unverbindlich. </p>
            <div className="flow__cta flow__cta--spaced">
              <a className="btn btn--light btn--lg" href="tel:068663410">
                068 663 410 <span className="arr">→</span>
              </a>
              <a className="btn btn--lg btn--out" href="mailto:info@jedroplus.com">
                info@jedroplus.com
              </a>
            </div>
          </div>
        </section>
      </div>

      <Faq
        items={agencijaFaq}
        title={
          <>
             Häufige <span className="grad-text">Fragen</span>
          </>
        }
        soft
      />

      </main>
      <Footer variant="agency" />

      <FlowController />
    </div>
  );
}
