// Generated from Slovenian source and src/locales/de.json.
import { pageMetadata } from "@/german/lib/seo";
import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/german/components/redesign/Nav";
import { Footer } from "@/german/components/redesign/Footer";
import { RevealOnScroll } from "@/german/components/redesign/RevealOnScroll";
import { SubpageHero } from "@/german/components/redesign/SubpageHero";

export const metadata: Metadata = pageMetadata("/de/ueber-uns", {
  title: "Über uns | Jedro+ — In Slowenien für Dienstleistungsunternehmen entwickelt",
  description:
    "Jedro+ ist eine slowenische App für Dienstleistungsunternehmen. Entdecke unsere Geschichte, Mission und warum wir Werkzeuge für Salons, Kliniken, Fitnessstudios und andere Anbieter entwickeln.",
  openGraph: {
    title: "Über uns | Jedro+ — In Slowenien für Dienstleistungsunternehmen entwickelt",
    description:
      "Jedro+ ist eine slowenische App für Dienstleistungsunternehmen. Entdecke unsere Geschichte, Mission und warum wir Werkzeuge für Salons, Kliniken, Fitnessstudios und andere Anbieter entwickeln.",
  },
});

export default function ONas() {
  return (
    <>
      <Nav variant="light" active="/de/ueber-uns" />
      <main id="main-content">

      <SubpageHero
        eyebrow="Über uns"
        title={
          <>
             In Slowenien entwickelt,{" "}
            <span className="grad-text">für Dienstleistungsunternehmen.</span>
          </>
        }
        description={
          <>
             Jedro+ verbindet Termine, Kunden, Erinnerungen und Onlinebuchung an einem Ort, damit du dich auf deine Kunden konzentrieren kannst. </>
        }
      />

      {/* ZGODBA */}
      <section className="section subpage-first">
        <div className="wrap split">
          <div className="split__body reveal">
            <span className="eyebrow">Unsere Geschichte</span>
            <h2 style={{ marginTop: 18 }}>
               Entstanden aus den <span className="grad-text">alltäglichen Herausforderungen</span>{" "}
               von Dienstleistungsunternehmen </h2>
            <p className="lead">
               Jeder Salon, jede Klinik und jedes Studio kennt den Kreislauf: Anrufe während der Behandlung, handschriftliche Buchungen, leere Stunden nach vergessenen Besuchen und verstreute Kundendaten. </p>
            <p className="lead" style={{ marginTop: 18 }}>
               Wir haben Jedro+ entwickelt, um diesen Alltag zu vereinfachen. Termine, Kundendaten, Erinnerungen und Onlinebuchung sind verbunden und ersparen doppelte Arbeit und App-Wechsel. Wir entwickeln in Slowenien, gemeinsam mit den Unternehmen, die Jedro+ täglich nutzen. </p>
          </div>
          <div className="split__media reveal" data-d="1">
            <figure style={{ margin: 0 }}><div className="ph about-team-photo" style={{ aspectRatio: "16/9" }}>
              <Image
                src="/images/jedro-stran-team.webp"
                alt="Illustrative Darstellung gemeinsamer Planung"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div><figcaption className="illustration-caption">Illustrative Darstellung.</figcaption></figure>
          </div>
        </div>
      </section>

      {/* POSLANSTVO */}
      <section className="section section--soft">
        <div className="wrap">
          <div className="section-head center reveal" style={{ marginInline: "auto", textAlign: "center" }}>
            <span className="eyebrow eyebrow--plain" style={{ justifyContent: "center" }}>
               Unsere Mission </span>
            <h2 style={{ marginTop: 18 }}>
               Dienstleistungsunternehmen{" "}
              <span className="grad-text">mehr Zeit für Kunden geben</span>
            </h2>
            <p className="lead" style={{ marginInline: "auto" }}>
               Technologie für kleine und mittlere Unternehmen sollte einfach, bezahlbar und vertraut sein. Deshalb entwickeln wir ein zugängliches Werkzeug auf Slowenisch, das Verwaltungsarbeit tatsächlich reduziert. </p>
          </div>

          <div className="about-cards">
            <div className="about-card reveal">
              <h3>Einfachheit</h3>
              <p>
                 In wenigen Tagen eingerichtet. Eine Oberfläche, die das ganze Team ohne Kurse und Handbücher versteht. </p>
            </div>
            <div className="about-card reveal" data-d="1">
              <h3>Lokal und zugänglich</h3>
              <p>
                 In Slowenien und auf Slowenisch entwickelt, mit Preisen, die zu kleineren Dienstleistungsunternehmen passen. </p>
            </div>
            <div className="about-card reveal" data-d="2">
              <h3>Intelligenter mit KI</h3>
              <p>
                 Erinnerungen und Nachrichten reduzieren Absagen und bringen inaktive Kunden zurück, automatisch im Hintergrund. </p>
            </div>
          </div>
        </div>
      </section>

      {/* ZA KOGA */}
      <section className="section">
        <div className="wrap split split--rev">
          <div className="split__body reveal">
            <span className="eyebrow">Für wen es geeignet ist</span>
            <h2 style={{ marginTop: 18 }}>
               Für <span className="grad-text">Dienstleistungsunternehmen</span>die mit Terminen arbeiten </h2>
            <p className="lead">
               Jedro+ passt überall, wo Buchungen und Kundenbeziehungen den Tag bestimmen: Friseur- und Kosmetiksalons, medizinische und ästhetische Kliniken, Fitnessstudios, Therapeuten, Werkstätten und weitere Dienstleister. </p>
            <p className="lead" style={{ marginTop: 18 }}>
               Unser Versprechen gilt branchenübergreifend: weniger manuelle Arbeit, weniger leere Termine und ein klarer Geschäftsüberblick. </p>
          </div>
          <div className="split__media reveal" data-d="1">
            <figure style={{ margin: 0 }}><div className="ph about-closeup-photo" style={{ aspectRatio: "16/9" }}>
              <Image
                src="/images/jedro-stran-closeup.webp"
                alt="Illustrative Darstellung der Terminplanung"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div><figcaption className="illustration-caption">Illustrative Darstellung.</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="section" id="jeziki" aria-labelledby="language-scope-heading">
        <div className="wrap">
          <div className="section-head reveal"><span className="eyebrow">Sprachen und Nutzung</span><h2 id="language-scope-heading" style={{ marginTop: 18 }}>Ein klarer Überblick <span className="grad-text">vor dem Start.</span></h2><p className="lead">Die Sprachen der Website, der App und der Telefongespräche betreffen unterschiedliche Teile der Jedro+ Nutzung.</p></div>
          <dl className="language-scope">
            <div><dt>Unternehmen in der Europäischen Union</dt><dd>Jedro+ ist für Dienstleistungsbetriebe in der EU verfügbar. Wir stimmen die Einrichtung auf deine Leistungen, dein Team und deine Arbeitsweise ab.</dd></div>
            <div><dt>Anpassung an weitere Sprachen</dt><dd>Brauchst du eine andere Sprache? Weitere Sprachanpassungen sind nach Vereinbarung möglich. Umfang und Umsetzung stimmen wir vor der Einführung ab.</dd></div>
            <div><dt>Website</dt><dd>Slowenisch, Englisch, Italienisch und Deutsch.</dd></div>
            <div><dt>Jedro+ App</dt><dd>Die Benutzeroberfläche der App ist auf Slowenisch und Englisch verfügbar.</dd></div>
            <div><dt>Gespräche mit Receptionist+</dt><dd>Der KI-Telefonassistent spricht die Sprache der Kunden. Die Telefonie-Einstellungen für deinen Betrieb prüfen wir bei der Aktivierung.</dd></div>
            <div><dt>Fiskalkasse</dt><dd>Ein separates Modul für die FURS-Rechnungsbestätigung in Slowenien.</dd></div>
          </dl>
          <p className="language-scope__contact">Bei Fragen zur Einrichtung und Unterstützung schreibe an <a href="mailto:info@jedroplus.com">info@jedroplus.com</a>.</p>
        </div>
      </section>

      {/* KONTAKT */}
      <section className="section section--soft" id="kontakt">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Kontakt</span>
            <h2 style={{ marginTop: 18 }}>
               Sprechen wir über dein <span className="grad-text">Unternehmen</span>
            </h2>
            <p className="lead">
               Hast du eine Frage oder möchtest Jedro+ erleben? Schreib uns oder ruf an. Wir antworten schnell. </p>
          </div>
          <div className="about-cards" style={{ marginTop: 40 }}>
            <div className="about-card reveal">
              <h3>E-Mail</h3>
              <p>
                <a href="mailto:info@jedroplus.com">info@jedroplus.com</a>
              </p>
            </div>
            <div className="about-card reveal" data-d="1">
              <h3>Telefon</h3>
              <p>
                <a href="tel:068663410">068 663 410</a>
              </p>
            </div>
            <div className="about-card reveal" data-d="2">
              <h3>Unser Standort</h3>
              <p>Slowenien 🇸🇮 — Lokal entwickelt, mit Unterstützung auf Slowenisch.</p>
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
