import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/redesign/Nav";
import { Footer } from "@/components/redesign/Footer";
import { RevealOnScroll } from "@/components/redesign/RevealOnScroll";

export const metadata: Metadata = {
  title: "Panoge | Jedro+",
  description:
    "Jedro+ pokriva panoge od frizerskih salonov in klinik do wellnessa, fitnesa, avtoservisov in coachinga. Poiščite rešitev za naročanje v svoji panogi.",
  openGraph: {
    title: "Panoge | Jedro+",
    description:
      "Jedro+ pokriva panoge od frizerskih salonov in klinik do wellnessa, fitnesa, avtoservisov in coachinga. Poiščite rešitev za naročanje v svoji panogi.",
  },
};

const rows = [
  {
    slug: "frizerski-saloni",
    n: "01",
    title: "Frizerski, kozmetični & barber saloni",
    desc: "Poln urnik, manj odpovedi in stranke, ki se rade vračajo.",
    tag: "FOTO — frizerski / barber salon (širok kader)",
  },
  {
    slug: "klinike",
    n: "02",
    title: "Zobne, estetske & medicinske klinike",
    desc: "Urejena kartoteka, pravočasna navodila in manj odpovedi.",
    tag: "FOTO — estetska / zobna klinika (čist, svetel prostor)",
  },
  {
    slug: "wellness",
    n: "03",
    title: "Masažni & wellness studii, fizioterapija",
    desc: "Serije terminov, nežni opomniki in povabila k ponovnemu obisku.",
    tag: "FOTO — wellness / masažni studio (umirjeno vzdušje)",
  },
  {
    slug: "fitnes",
    n: "04",
    title: "Fitnes, joga, pilates & osebni trenerji",
    desc: "Skupinski termini, članske evidence in obveščanje o prostih mestih.",
    tag: "FOTO — fitnes / joga studio",
  },
  {
    slug: "avtoservisi",
    n: "05",
    title: "Avtoservisi, vulkanizerji & čistilni servisi",
    desc: "Opomniki za servis in obvestilo, ko je vozilo pripravljeno za prevzem.",
    tag: "FOTO — avtoservis / delavnica",
  },
  {
    slug: "coaching",
    n: "06",
    title: "Svetovanje, coaching & terapija",
    desc: "Diskretni opomniki, ponavljajoči se termini in sledenje napredku.",
    tag: "FOTO — svetovalni / coaching prostor",
  },
  {
    slug: "poslovne-storitve",
    n: "07",
    title: "IT, poslovne storitve & agencije",
    desc: "Sestanki, onboarding strank in komunikacija brez ročnega dela.",
    tag: "FOTO — pisarna / agencija",
  },
  {
    slug: "ostalo",
    n: "08",
    title: "Ostala storitvena podjetja",
    desc: "Karkoli s termini in strankami — Jedro+ se prilagodi vašemu načinu dela.",
    tag: "FOTO — storitvena dejavnost",
  },
];

const Arrow = () => (
  <span className="indrow__go">
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

export default function Panoge() {
  return (
    <>
      <Nav variant="light" active="/panoge" />

      <section className="vhero vhero--white">
        <div className="vhero__tint"></div>
        <div className="wrap vhero__in">
          <p className="vhero__eyebrow">Panoge</p>
          <hr className="vhero__rule" />
          <h1 className="vhero__h">
            Za vsako podjetje, ki dela s{" "}
            <span className="grad-text">termini in strankami</span>
          </h1>
          <hr className="vhero__rule" />
          <p className="vhero__sub">
            Saloni, klinike, studii, servisi ali agencije — izberite svojo panogo
            in poglejte, kako vam Jedro+ konkretno pomaga.
          </p>
          <div className="vhero__cta">
            <a className="btn btn--grad btn--lg" href="/#kontakt">
              Preizkusi brezplačno <span className="arr">→</span>
            </a>
            <a className="btn btn--ghost btn--lg" href="/cenik">
              Poglej cenik
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="panoge" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="ind-rows">
            {rows.map((r) => (
              <Link className="indrow reveal" href={`/panoge/${r.slug}`} key={r.slug}>
                <div className="indrow__media">
                  <div className="ph">
                    <span className="ph__tag">{r.tag}</span>
                  </div>
                </div>
                <div className="indrow__body">
                  <span className="indrow__n">{r.n}</span>
                  <h3>{r.title}</h3>
                  <p>{r.desc}</p>
                </div>
                <Arrow />
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
                <a className="btn btn--light btn--lg" href="/#kontakt">
                  Rezerviraj predstavitev <span className="arr">→</span>
                </a>
                <a
                  className="btn btn--ghost btn--lg"
                  href="/#kontakt"
                  style={{ color: "#fff", borderColor: "rgba(255,255,255,.25)" }}
                >
                  Pošlji povpraševanje
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <RevealOnScroll />
    </>
  );
}
