import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/redesign/Nav";
import { Footer } from "@/components/redesign/Footer";
import { RevealOnScroll } from "@/components/redesign/RevealOnScroll";
import { SubpageHero } from "@/components/redesign/SubpageHero";

export const metadata: Metadata = pageMetadata("/panoge", {
  title: "Panoge | Jedro+",
  description:
    "Jedro+ pokriva panoge od frizerskih salonov in klinik do wellnessa, fitnesa, avtoservisov in coachinga. Poiščite rešitev za naročanje v svoji panogi.",
  openGraph: {
    title: "Panoge | Jedro+",
    description:
      "Jedro+ pokriva panoge od frizerskih salonov in klinik do wellnessa, fitnesa, avtoservisov in coachinga. Poiščite rešitev za naročanje v svoji panogi.",
  },
});

const rows = [
  {
    slug: "frizerski-saloni",
    n: "01",
    title: "Frizerski, kozmetični & barber saloni",
    desc: "Poln urnik, manj odpovedi in stranke, ki se rade vračajo.",
    img: "jedro-stran-panoge-1.webp",
  },
  {
    slug: "klinike",
    n: "02",
    title: "Zobne, estetske & medicinske klinike",
    desc: "Urejena kartoteka, pravočasna navodila in manj odpovedi.",
    img: "jedro-stran-panoge-5.webp",
  },
  {
    slug: "wellness",
    n: "03",
    title: "Masažni & wellness studii, fizioterapija",
    desc: "Serije terminov, nežni opomniki in povabila k ponovnemu obisku.",
    img: "jedro-stran-panoge-3.webp",
  },
  {
    slug: "fitnes",
    n: "04",
    title: "Fitnes, joga, pilates & osebni trenerji",
    desc: "Skupinski termini, članske evidence in obveščanje o prostih mestih.",
    img: "jedro-stran-panoge-2.webp",
  },
  {
    slug: "avtoservisi",
    n: "05",
    title: "Avtoservisi, vulkanizerji & čistilni servisi",
    desc: "Opomniki za servis in obvestilo, ko je vozilo pripravljeno za prevzem.",
    img: "jedro-stran-panoge-4.webp",
  },
  {
    slug: "coaching",
    n: "06",
    title: "Svetovanje, coaching & terapija",
    desc: "Diskretni opomniki, ponavljajoči se termini in sledenje napredku.",
    img: "jedro-stran-panoge-7.webp",
  },
  {
    slug: "poslovne-storitve",
    n: "07",
    title: "IT, poslovne storitve & agencije",
    desc: "Sestanki, onboarding strank in komunikacija brez ročnega dela.",
    img: "jedro-stran-panoge-6.webp",
  },
  {
    slug: "ostalo",
    n: "08",
    title: "Ostala storitvena podjetja",
    desc: "Karkoli s termini in strankami — Jedro+ se prilagodi vašemu načinu dela.",
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
      <Nav variant="light" active="/panoge" />
      <main id="main-content">

      <SubpageHero
        eyebrow="Panoge"
        title={
          <>
            Za vsako podjetje, ki dela s{" "}
            <span className="grad-text">termini in strankami</span>
          </>
        }
        description={
          <>
            Saloni, klinike, studii, servisi ali agencije — izberite svojo panogo
            in poglejte, kako vam Jedro+ konkretno pomaga.
          </>
        }
        actions={
          <>
            <a className="btn btn--grad btn--lg" href="https://app.jedroplus.com/signup">
              Preizkusi brezplačno <span className="arr">→</span>
            </a>
            <a className="btn btn--ghost btn--lg" href="/cenik">
              Poglej cenik
            </a>
          </>
        }
      />

      <section className="section subpage-first panoge-list" id="panoge">
        <div className="wrap">
          <div className="panoge-grid">
            {rows.map((r) => (
              <Link className="pcard reveal" href={`/panoge/${r.slug}`} key={r.slug}>
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
                    Poglej panogo <Arrow />
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
                Vaša panoga ni na seznamu?
              </span>
              <h2 style={{ marginTop: 18 }}>
                Če delate s termini, Jedro+ dela za vas.
              </h2>
              <p>
                Povejte nam, kako delate — pripravimo postavitev po meri vaše
                panoge.
              </p>
              <div className="cta-band__btns">
                <a className="btn btn--light btn--lg" href="/sl#kontakt">
                  Rezerviraj predstavitev <span className="arr">→</span>
                </a>
                <a
                  className="btn btn--ghost btn--lg"
                  href="/sl#kontakt"
                  style={{ color: "#fff", borderColor: "rgba(255,255,255,.25)" }}
                >
                  Pošlji povpraševanje
                </a>
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
