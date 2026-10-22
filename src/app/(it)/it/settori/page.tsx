// Generated from Slovenian source and src/locales/it.json.
import Image from "next/image";
import { pageMetadata } from "@/italian/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/italian/components/redesign/Nav";
import { Footer } from "@/italian/components/redesign/Footer";
import { RevealOnScroll } from "@/italian/components/redesign/RevealOnScroll";
import { SubpageHero } from "@/italian/components/redesign/SubpageHero";

export const metadata: Metadata = pageMetadata("/it/settori", {
  title: "Settori | Jedro+",
  description:
    "Jedro+ supporta saloni, cliniche, centri benessere, palestre, officine e coaching. Trova la soluzione di prenotazione per il tuo settore.",
  openGraph: {
    title: "Settori | Jedro+",
    description:
      "Jedro+ supporta saloni, cliniche, centri benessere, palestre, officine e coaching. Trova la soluzione di prenotazione per il tuo settore.",
  },
});

const rows = [
  {
    slug: "saloni-parrucchieri",
    n: "01",
    title: "Saloni di parrucchieri, bellezza e barber shop",
    desc: "Un’agenda più piena, meno cancellazioni e clienti felici di tornare.",
    img: "jedro-stran-panoge-1.webp",
  },
  {
    slug: "cliniche",
    n: "02",
    title: "Cliniche dentali, estetiche e mediche",
    desc: "Schede pazienti ordinate, indicazioni puntuali e meno cancellazioni.",
    img: "jedro-stran-panoge-5.webp",
  },
  {
    slug: "benessere",
    n: "03",
    title: "Studi di massaggio, centri benessere e fisioterapia",
    desc: "Cicli di appuntamenti, promemoria discreti e inviti a tornare.",
    img: "jedro-stran-panoge-3.webp",
  },
  {
    slug: "fitness",
    n: "04",
    title: "Palestre, yoga, pilates e personal trainer",
    desc: "Lezioni di gruppo, registri degli iscritti e notifiche sui posti disponibili.",
    img: "jedro-stran-panoge-2.webp",
  },
  {
    slug: "officine",
    n: "05",
    title: "Officine, gommisti e servizi di pulizia",
    desc: "Promemoria per la manutenzione e notifiche quando il veicolo è pronto per il ritiro.",
    img: "jedro-stran-panoge-4.webp",
  },
  {
    slug: "coaching",
    n: "06",
    title: "Consulenza, coaching e terapia",
    desc: "Promemoria discreti, appuntamenti ricorrenti e monitoraggio dei progressi.",
    img: "jedro-stran-panoge-7.webp",
  },
  {
    slug: "servizi-aziendali",
    n: "07",
    title: "IT, servizi aziendali e agenzie",
    desc: "Riunioni, onboarding dei clienti e comunicazione con meno lavoro manuale.",
    img: "jedro-stran-panoge-6.webp",
  },
  {
    slug: "altri-servizi",
    n: "08",
    title: "Altre imprese di servizi",
    desc: "Qualunque sia la tua attività con appuntamenti e clienti, Jedro+ si adatta al tuo modo di lavorare.",
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
      <Nav variant="light" active="/it/settori" />
      <main id="main-content">

      <SubpageHero
        eyebrow="Settori"
        title={
          <>
             Per ogni attività che lavora con{" "}
            <span className="grad-text">appuntamenti e clienti</span>
          </>
        }
        description={
          <>
             Saloni, cliniche, studi, officine o agenzie: scegli il tuo settore e scopri come ti aiuta Jedro+. </>
        }
        actions={
          <>
            <a className="btn btn--grad btn--lg" href="https://app.jedroplus.com/signup">
               Prova gratis <span className="arr">→</span>
            </a>
            <a className="btn btn--ghost btn--lg" href="/it/prezzi">
               Vedi i prezzi </a>
          </>
        }
      />

      <section className="section subpage-first panoge-list" id="panoge">
        <div className="wrap">
          <div className="panoge-grid">
            {rows.map((r) => (
              <Link className="pcard reveal" href={`/it/settori/${r.slug}`} key={r.slug}>
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
                     Scopri il settore <Arrow />
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
                 Non trovi il tuo settore? </span>
              <h2 style={{ marginTop: 18 }}>
                 Se lavori con appuntamenti, Jedro+ lavora per te. </h2>
              <p>
                 Raccontaci come lavori e prepareremo una soluzione per il tuo settore. </p>
              <div className="cta-band__btns">
                <a className="btn btn--light btn--lg" href="/it#kontakt">
                   Prenota una demo <span className="arr">→</span>
                </a>
                <a
                  className="btn btn--ghost btn--lg"
                  href="/it#kontakt"
                  style={{ color: "#fff", borderColor: "rgba(255,255,255,.25)" }}
                >
                   Invia una richiesta </a>
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
