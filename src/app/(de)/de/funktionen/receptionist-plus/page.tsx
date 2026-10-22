// Generated from Slovenian source and src/locales/de.json.
import { RelatedContent } from "@/components/RelatedContent";
import { pageMetadata } from "@/german/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Bell, CalendarCheck2, CalendarClock, Check, FileText, Globe2, MessageSquareText, Phone, Settings2, Sparkles, Wallet } from "lucide-react";
import { Nav } from "@/german/components/redesign/Nav";
import { Footer } from "@/german/components/redesign/Footer";
import { RevealOnScroll } from "@/german/components/redesign/RevealOnScroll";
import { Faq } from "@/german/components/redesign/Faq";
import { ReceptionistDemo } from "@/german/components/redesign/ReceptionistDemo";
import { ReceptionistPricing } from "@/german/components/redesign/ReceptionistPricing";
import { JsonLd } from "@/components/JsonLd";
import { receptionistBreadcrumbSchema, receptionistServiceSchema } from "@/german/lib/schema";
import { receptionistFaq, RECEPTIONIST_APP_URL } from "@/german/lib/receptionist";

const title = "Receptionist+ | KI-Rezeptionistin in der Sprache deiner Kunden | Jedro+";
const description = "Eine KI-Rezeptionistin, die die Sprache deiner Kunden spricht, Termine bucht, verschiebt und storniert, Fragen beantwortet und Erinnerungen sendet. Entdecke Receptionist+.";

export const metadata: Metadata = pageMetadata("/de/funktionen/receptionist-plus", {
  title, description,
  alternates: { canonical: "/de/funktionen/receptionist-plus" },
  openGraph: { title, description, url: "/de/funktionen/receptionist-plus", images: [{ url: "/de/funktionen/receptionist-plus/opengraph-image", width: 1200, height: 630, alt: "Receptionist+ — Die KI-Rezeptionistin von Jedro+" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/de/funktionen/receptionist-plus/opengraph-image"] },
});

const features = [
  { icon: Globe2, title: "Spricht die Sprache deiner Kunden", text: "Passt sich der Kundensprache an, damit jeder verständlich einen Termin vereinbaren oder eine Antwort erhalten kann." },
  { icon: CalendarClock, title: "Bucht, verschiebt oder storniert", text: "Erstellt eine neue Buchung, findet einen anderen freien Zeitpunkt oder storniert einen Termin. Jede Änderung wird im Jedro+ Kalender erfasst." },
  { icon: MessageSquareText, title: "Hilft mit Antworten", text: "Beantwortet Fragen zu Unternehmen, Leistungen und Buchungen oder nimmt eine Nachricht für einen Rückruf auf." },
  { icon: Bell, title: "Sendet Terminerinnerungen", text: "Erinnert Kunden mit klaren, rechtzeitigen Besuchsinformationen an ihren Termin." },
  { icon: FileText, title: "Hält Vereinbarungen fest", text: "Termine und Änderungen bleiben im System. Prüfe Anrufergebnis, Verbrauch und verfügbare Mitschriften im Anrufprotokoll." },
  { icon: Settings2, title: "Deine Begrüßung, deine Arbeitsweise", text: "Die Assistentin stellt sich im Namen deines Unternehmens vor. Begrüßung, Aktivierung und weitere Einstellungen verwaltest du in der App." },
];

const steps = [
  { number: "01", title: "Ein Kunde ruft an", text: "Receptionist+ nimmt über die verbundene Telefonie ab und begrüßt den Kunden im Namen deines Unternehmens." },
  { number: "02", title: "Das Gespräch beginnt", text: "In der Sprache des Kunden hilft sie bei Buchung, Verschiebung oder Stornierung, beantwortet Fragen und sendet Erinnerungen." },
  { number: "03", title: "Du behältst den Überblick", text: "Neue Termine und Änderungen erscheinen im Kalender. Anrufergebnisse und Verbrauch siehst du in der Jedro+ App." },
];

export default function ReceptionistPlus() {
  return (
    <>
      <JsonLd schema={receptionistBreadcrumbSchema()} />
      <JsonLd schema={receptionistServiceSchema} />
      <Nav variant="light" active="/de/funktionen/receptionist-plus" />
      <main id="main-content">
        <section className="rp-hero">
          <div className="wrap">
            <div className="rp-hero__grid">
              <div className="rp-hero__copy">
                <nav className="crumbs" aria-label="Brotkrumennavigation"><Link href="/de">Startseite</Link><span aria-hidden="true">/</span><Link href="/de/funktionen">Funktionen</Link><span aria-hidden="true">/</span><span aria-current="page">Receptionist+</span></nav>
                <div className="rp-kicker">Receptionist+ · KI-Empfang</div>
                <h1>Du arbeitest.<br /><span className="grad-text">Deine KI-Rezeptionistin</span><br />nimmt den Anruf an.</h1>
                <p>Receptionist+ ist dein KI-Telefonassistent für Terminbuchungen. Er spricht die Sprache deiner Kunden, bucht, verschiebt oder storniert Termine und beantwortet Fragen. Du widmest dich der Person vor dir.</p>
                <div className="rp-hero__actions"><a className="btn btn--primary btn--lg" href="https://app.jedroplus.com/signup">Kostenlos starten <ArrowUpRight size={18} aria-hidden="true" /></a><a className="btn btn--ghost btn--lg" href="#cenik-receptionist">Preise ansehen</a></div>
                <p className="rp-hero__trial"><Check size={16} aria-hidden="true" />  30 kostenlose Minuten bei der ersten Aktivierung</p>
                <a className="rp-hero__existing" href={RECEPTIONIST_APP_URL}>Du nutzt Jedro+ bereits? Receptionist+ öffnen <ArrowUpRight size={14} aria-hidden="true" /></a>
              </div>
              <ReceptionistDemo />
            </div>
          </div>
        </section>

        <section className="rp-proof" aria-label="Receptionist+ im Überblick"><div className="wrap rp-proof__grid"><span><Globe2 size={19} aria-hidden="true" />Gespräche in der Kundensprache</span><span><CalendarClock size={19} aria-hidden="true" />Termine, Änderungen und Erinnerungen</span><span><Phone size={19} aria-hidden="true" />Weniger Unterbrechungen bei der Arbeit</span></div></section>

        <section className="section">
          <div className="wrap rp-benefit-intro">
            <div className="reveal"><span className="eyebrow">Weniger Unterbrechungen. Mehr Aufmerksamkeit.</span><h2>Du bist bei einem Kunden.<br /><span className="grad-text">Das Telefon klingelt wieder.</span></h2></div>
            <div className="reveal" data-d="1"><p>Beim Haarschnitt, bei einer Massage oder im Gespräch unterbricht jeder Anruf deine Konzentration. Ohne Antwort wartet der Kunde weiter.</p><p>Receptionist+ übernimmt den Anruf und hilft von der ersten Buchung bis zur Verschiebung. Vereinbarungen werden in Jedro+ erfasst, ohne erneute Eingabe.</p></div>
          </div>
        </section>

        <section className="section section--soft" aria-labelledby="rp-how-heading">
          <div className="wrap">
            <div className="section-head reveal"><span className="eyebrow">So funktioniert es</span><h2 id="rp-how-heading" style={{ marginTop: 18 }}>Vom „Guten Tag“<br />zum <span className="grad-text">bestätigten Termin.</span></h2></div>
            <div className="rp-steps">{steps.map((step, index) => <article className="reveal" data-d={index} key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
          </div>
        </section>

        <section className="section" aria-labelledby="rp-features-heading">
          <div className="wrap">
            <div className="section-head reveal"><span className="eyebrow">Deine Unterstützung am Telefon</span><h2 id="rp-features-heading" style={{ marginTop: 18 }}>Anruf angenommen.<br /><span className="grad-text">Nächster Schritt geklärt.</span></h2><p className="lead">Gespräch, Termin und Verbrauch bleiben in deinem bestehenden System verbunden.</p></div>
            <div className="rp-feature-grid">{features.map(({ icon: Icon, ...feature }, index) => <article className="reveal" data-d={index % 3} key={feature.title}><span className="rp-feature-grid__icon"><Icon size={23} strokeWidth={1.5} aria-hidden="true" /></span><h3>{feature.title}</h3><p>{feature.text}</p></article>)}</div>
          </div>
        </section>

        <section className="section rp-connection">
          <div className="wrap rp-connection__grid">
            <div className="reveal"><span className="rp-kicker"><Sparkles size={16} aria-hidden="true" />  Ein System, ein vernetzter Arbeitstag</span><h2>Ein Anruf.<br />Alles am <span>richtigen Ort.</span></h2><p>Receptionist+ gehört zu Jedro+. Neue, verschobene oder stornierte Termine stehen im selben Kalender wie Onlinebuchungen und manuelle Einträge. Auch Erinnerungen bleiben verbunden.</p><Link className="rp-text-link" href="/de/funktionen">Weitere Funktionen entdecken <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
            <div className="rp-connection__diagram reveal" data-d="1" aria-label="Receptionist+ verbindet Anrufe mit Kalender, Anrufprotokoll und Verbrauchsübersicht"><div className="rp-connection__source"><Phone size={25} aria-hidden="true" /><strong>Receptionist+</strong><span>Telefongespräch</span></div><div className="rp-connection__branches"><div><CalendarCheck2 size={21} aria-hidden="true" /><strong>Kalender</strong><span>Termine und Änderungen</span></div><div><FileText size={21} aria-hidden="true" /><strong>Anrufprotokoll</strong><span>Ergebnis und Mitschrift</span></div><div><Wallet size={21} aria-hidden="true" /><strong>Minuten</strong><span>Verbrauchsübersicht</span></div></div></div>
          </div>
        </section>

      <RelatedContent path={"/de/funktionen/receptionist-plus"} />
        <ReceptionistPricing productPage />
        <Faq reveal items={receptionistFaq} title={<>Vor deinem ersten <span className="grad-text">Anruf.</span></>} soft />
        <section className="section rp-final"><div className="wrap"><div className="rp-final__inner reveal"><span className="rp-kicker">Receptionist+</span><h2>Weniger Anrufe für dich.<br /><span className="grad-text">Mehr Zeit für deine Arbeit.</span></h2><p>Überlasse Anrufe, Termine und Fragen deiner KI-Rezeptionistin. Teste Receptionist+ oder vereinbare eine Demo mit uns.</p><div className="rp-hero__actions"><a className="btn btn--primary btn--lg" href={RECEPTIONIST_APP_URL}>Receptionist+ öffnen <ArrowUpRight size={18} aria-hidden="true" /></a><a className="btn btn--ghost btn--lg" href="mailto:info@jedroplus.com?subject=Receptionist%2B%20Demo">Demo vereinbaren</a></div></div></div></section>
      </main>
      <Footer />
      <RevealOnScroll />
    </>
  );
}
