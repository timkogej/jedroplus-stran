// Generated from Slovenian source and src/locales/de.json.
import Image from "next/image";
import { pageMetadata } from "@/german/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/german/components/redesign/Nav";
import { Footer } from "@/german/components/redesign/Footer";
import { RevealOnScroll } from "@/german/components/redesign/RevealOnScroll";
import { SubpageHero } from "@/german/components/redesign/SubpageHero";

export const metadata: Metadata = pageMetadata("/de/branchen", {
  title: "Branchen | Jedro+",
  description:
    "Jedro+ unterstützt Salons, Kliniken, Wellnessstudios, Fitness, Werkstätten und Coaching. Finde die Buchungslösung für deine Branche.",
  openGraph: {
    title: "Branchen | Jedro+",
    description:
      "Jedro+ unterstützt Salons, Kliniken, Wellnessstudios, Fitness, Werkstätten und Coaching. Finde die Buchungslösung für deine Branche.",
  },
});

const rows = [
  {
    slug: "friseursalons",
    n: "01",
    title: "Friseur-, Kosmetik- und Barbersalons",
    desc: "Ein vollerer Kalender, weniger Absagen und Kunden, die gerne wiederkommen.",
    img: "jedro-stran-panoge-1.webp",
  },
  {
    slug: "praxen",
    n: "02",
    title: "Zahn-, Ästhetik- und medizinische Kliniken",
    desc: "Geordnete Patientenakten, rechtzeitige Hinweise und weniger Absagen.",
    img: "jedro-stran-panoge-5.webp",
  },
  {
    slug: "wellness",
    n: "03",
    title: "Massage- und Wellnessstudios, Physiotherapie",
    desc: "Terminserien, dezente Erinnerungen und Einladungen zum Wiederkommen.",
    img: "jedro-stran-panoge-3.webp",
  },
  {
    slug: "fitness",
    n: "04",
    title: "Fitness, Yoga, Pilates und Personal Training",
    desc: "Gruppentermine, Mitgliederverwaltung und Hinweise auf freie Plätze.",
    img: "jedro-stran-panoge-2.webp",
  },
  {
    slug: "werkstaetten",
    n: "05",
    title: "Werkstätten, Reifendienste und Reinigungsunternehmen",
    desc: "Serviceerinnerungen und Nachrichten, sobald das Fahrzeug abholbereit ist.",
    img: "jedro-stran-panoge-4.webp",
  },
  {
    slug: "coaching",
    n: "06",
    title: "Beratung, Coaching & Therapie",
    desc: "Diskrete Erinnerungen, regelmäßige Termine und Fortschrittsübersicht.",
    img: "jedro-stran-panoge-7.webp",
  },
  {
    slug: "dienstleistungen",
    n: "07",
    title: "IT, Unternehmensdienste und Agenturen",
    desc: "Besprechungen, Kundeneinführung und Kommunikation mit weniger manueller Arbeit.",
    img: "jedro-stran-panoge-6.webp",
  },
  {
    slug: "weitere-branchen",
    n: "08",
    title: "Andere Dienstleistungsunternehmen",
    desc: "Wo Termine und Kunden zusammenkommen, passt sich Jedro+ deiner Arbeitsweise an.",
    img: "jedro-stran-panoge-8.webp",
  },
];

const Arrow = () => (
  <svg className="pcard__arr" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Panoge() {
  return (
    <>
      <Nav variant="light" active="/de/branchen" />
      <main id="main-content">

      <SubpageHero
        eyebrow="Branchen"
        title={
          <>
             Für jedes Unternehmen mit{" "}
            <span className="grad-text">Terminen und Kunden</span>
          </>
        }
        description={
          <>
             Salons, Kliniken, Studios, Werkstätten oder Agenturen: Wähle deine Branche und entdecke, wie Jedro+ hilft. </>
        }
        actions={
          <>
            <a className="btn btn--grad btn--lg" href="https://app.jedroplus.com/signup">
               Kostenlos testen <span className="arr">→</span>
            </a>
            <a className="btn btn--ghost btn--lg" href="/de/preise">
               Preise ansehen </a>
          </>
        }
      />

      <section className="section subpage-first panoge-list" id="panoge">
        <div className="wrap">
          <div className="panoge-grid">
            {rows.map((r) => (
              <Link className="pcard reveal" href={`/de/branchen/${r.slug}`} key={r.slug}>
                <div className="pcard__media">
                  <Image
                    className="pcard__img"
                    src={`/images/industries/${r.img}`}
                    alt={r.title}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  />
                  <span className="pcard__n">{r.n}</span>
                </div>
                <div className="pcard__body">
                  <h3>{r.title}</h3>
                  <p>{r.desc}</p>
                  <span className="pcard__go">
                     Branche entdecken <Arrow />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cta-band reveal">
            <div className="cta-band__glow"></div>
            <div className="cta-band__in">
              <span className="eyebrow" style={{ color: "rgba(255,255,255,.75)" }}>
                 Deine Branche fehlt? </span>
              <h2 style={{ marginTop: 18 }}>
                 Wenn du mit Terminen arbeitest, arbeitet Jedro+ für dich. </h2>
              <p>
                 Erzähle uns von deinem Ablauf. Wir richten eine Lösung für deine Branche ein. </p>
              <div className="cta-band__btns">
                <a className="btn btn--light btn--lg" href="/de#kontakt">
                   Demo buchen <span className="arr">→</span>
                </a>
                <a
                  className="btn btn--ghost btn--lg"
                  href="/de#kontakt"
                  style={{ color: "#fff", borderColor: "rgba(255,255,255,.25)" }}
                >
                   Anfrage senden </a>
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
