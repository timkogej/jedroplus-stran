import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/redesign/Nav";
import { Footer } from "@/components/redesign/Footer";
import { FlowController } from "@/components/redesign/FlowController";
import { Rotor } from "@/components/redesign/Rotor";
import { Faq } from "@/components/redesign/Faq";
import { agencijaFaq } from "@/components/redesign/faq-data";
import { JsonLd } from "@/components/JsonLd";
import { professionalServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Agencija | Jedro+ — AI agencija za storitvena podjetja",
  description:
    "Jedro+ Agencija je AI agencija za storitvena podjetja: razvijamo pametne rešitve za naročanje, opomnike in avtomatizacijo, prilagojene vaši dejavnosti.",
  openGraph: {
    title: "Agencija | Jedro+ — AI agencija za storitvena podjetja",
    description:
      "Jedro+ Agencija je AI agencija za storitvena podjetja: razvijamo pametne rešitve za naročanje, opomnike in avtomatizacijo, prilagojene vaši dejavnosti.",
  },
};

const Adv = () => (
  <span className="chk">
    <svg viewBox="0 0 12 12" fill="none">
      <path d="M2 6.2l2.6 2.6L10 3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const agencyServices = [
  {
    title: "Poslovni sistemi",
    text: "Združimo celotno poslovanje vašega podjetja v eno platformo: termini, stranke, naročanje, evidence in poročila — vse na enem mestu, brez podvajanja dela.",
  },
  {
    title: "Komunikacijski sistemi",
    text: "Izdelamo sisteme za komunikacijo s strankami: samodejni opomniki, personalizirana sporočila in obveščanje pred ter po terminu — vse poteka samodejno.",
  },
  {
    title: "Spletne strani",
    text: "Hitro izdelamo sodobne spletne strani, ki pripeljejo stranke. Postavimo jih v nekaj dneh in jih povežemo z vašim poslovnim sistemom.",
  },
  {
    title: "AI produkcija slik in videov",
    text: "Z umetno inteligenco ustvarimo profesionalne slike, oglase in videe za spletne strani ter družbena omrežja — hitro, usklajeno in v slogu vaše znamke.",
  },
  {
    title: "AI agenti in avtomatizacije",
    text: "Razvijemo AI agente, ki odgovarjajo strankam, obdelujejo povpraševanja in avtomatizirajo ponavljajoča se opravila, da vaša ekipa prihrani čas.",
  },
];

export default function Agencija() {
  return (
    <div className="theme-agency agency-page">
      <JsonLd schema={professionalServiceSchema} />
      <Nav variant="flow" active="/agencija" />

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
          <div className="flow__bg">
            <div className="imgslot"></div>
            <span className="slot-tag">SLIKA V OZADJU — ekipa / pisarna agencije</span>
          </div>
          <div className="flow__tint"></div>
          <div className="flow__inner">
            <p className="flow__eyebrow">01 — Agencija Jedro+</p>
            <hr className="flow__rule" />
            <h1 className="flow__h flow__h--hero" style={{ fontSize: 65 }}>
              Gradimo{" "}
              <Rotor
                id="agRotor"
                words={["sisteme", "komunikacijo", "spletne strani", "rast"]}
              />
              <br />
              za storitvena podjetja
            </h1>
            <hr className="flow__rule" />
            <p className="flow__lead">
              Kakovost. Hitrost. Inovativnost. - Vse kar si vaše podjetje želi pri
              ageciji.
            </p>
            <div className="flow__cta flow__cta--spaced">
              <a className="btn btn--light btn--lg" href="tel:068663410">
                Pokličite 068 663 410
              </a>
              <a className="flow__link" href="#kaj">
                Oglej si, kaj delamo <span className="arr">→</span>
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
          <div className="flow__bg">
            <div className="imgslot"></div>
            <span className="slot-tag">SLIKA V OZADJU — delo z AI / zaslon</span>
          </div>
          <div className="flow__tint"></div>
          <div className="flow__inner">
            <p className="flow__eyebrow">02 — Kdo smo</p>
            <hr className="flow__rule" />
            <h2 className="flow__h flow__h--md" style={{ maxWidth: "18ch", fontSize: 65 }}>
              AI agencija za
              <br />
              storitvena podjetja
            </h2>
            <p className="flow__lead">
              Specializirani smo za podjetja, ki delajo s strankami. Naše rešitve
              temeljijo na umetni inteligenci, zato delajo pametneje, hitreje in
              bolj samodejno.
            </p>
            <ul className="adv">
              <li>
                <Adv />
                <span>
                  <b>Vse temelji na AI.</b> Avtomatizacija, pametna komunikacija in
                  sistemi, ki delajo namesto vas.
                </span>
              </li>
              <li>
                <Adv />
                <span>
                  <b>Osredotočeni na storitve.</b> Razumemo termine, stranke in
                  vsakdan storitvenih podjetij.
                </span>
              </li>
              <li>
                <Adv />
                <span>
                  <b>Vse iz ene roke.</b> Od poslovnega sistema do spletne strani —
                  eno mesto, ena ekipa.
                </span>
              </li>
              <li>
                <Adv />
                <span>
                  <b>Hitra izvedba.</b> Postavimo vas v dnevih, ne tednih.
                </span>
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
          <div className="flow__bg">
            <Image
              src="/images/jedro-stran-agency-hitrost.png"
              alt="Turkizne svetlobne linije, ki ponazarjajo hitrost in digitalni pretok"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flow__tint"></div>
          <div className="flow__inner">
            <p className="flow__eyebrow">03 — Hitrost</p>
            <hr className="flow__rule" />
            <h2 className="flow__h flow__h--md" style={{ fontSize: 65 }}>
              Projekt v tednih.
              <br />
              Ne mesecih.
            </h2>
            <hr className="flow__rule" />
            <p className="flow__lead">
              Medtem ko drugi šele načrtujejo, vaše podjetje že deluje. Sisteme in
              spletne strani postavimo v rekordnem času — brez kompromisov pri
              kakovosti.
            </p>
            <hr className="flow__rule" />
            <p className="flow__lead flow__lead--r">Manj čakanja. Več rezultatov.</p>
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
          <div className="flow__bg">
            <div className="imgslot imgslot--light"></div>
          </div>
          <div className="flow__tint"></div>
          <div className="flow__inner">
            <p className="flow__eyebrow">04 — Kaj ponujamo?</p>
            <hr className="flow__rule" />
            <h2 className="flow__h flow__h--md" style={{ fontSize: 65 }}>
              Bolje je vprašati
              <br />
              česa ne ponujamo?
            </h2>
            <p className="flow__sub" style={{ marginTop: "clamp(14px,2vh,26px)" }}>
              Naredimo vse, kar vaše podjetje potrebuje za rast.{" "}
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
                Pokliči in se pogovoriva <span className="arr">→</span>
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
          <div className="flow__bg">
            <Image
              src="/images/jedro-stran-agency-vsenaenem.png"
              alt="Povezana poslovna platforma Jedro+ na računalniku in telefonu"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flow__tint"></div>
          <div className="flow__inner">
            <p className="flow__eyebrow">05 — Vse povezano</p>
            <hr className="flow__rule" />
            <h2 className="flow__h flow__h--md" style={{ maxWidth: "16ch", fontSize: 65 }}>
              Celotno podjetje
              <br />
              v eni platformi
            </h2>
            <p className="flow__lead">
              Konec preklapljanja med orodji. Vaše poslovanje, komunikacijo in
              spletno prisotnost združimo v en sistem, ki ga je preprosto
              upravljati — in ki raste z vami.
            </p>
            <div className="onerow">
              <span>Termini</span>
              <i>→</i>
              <span>Stranke</span>
              <i>→</i>
              <span>Komunikacija</span>
              <i>→</i>
              <span>Naročanje</span>
              <i>→</i>
              <span>Poročila</span>
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
          <div className="flow__bg">
            <div className="imgslot"></div>
            <span className="slot-tag">SLIKA V OZADJU — vzdušje agencije</span>
          </div>
          <div className="flow__tint"></div>
          <div className="flow__inner">
            <p className="flow__eyebrow">06 — Pokličite nas</p>
            <hr className="flow__rule" />
            <h2 className="flow__h flow__h--sm" style={{ maxWidth: "22ch", fontSize: 65 }}>
              Pripravljeni za naslednji korak?
            </h2>
            <hr className="flow__rule" />
            <p className="flow__lead">
              Pokličite nas in v 15 minutah vam pokažemo, kako lahko vaše podjetje
              deluje pametneje — povezano, hitro in z AI. Brezplačno in brez
              obveznosti.
            </p>
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
            Pogosta <span className="grad-text">vprašanja</span>
          </>
        }
        soft
      />

      <Footer variant="agency" />

      <FlowController />
    </div>
  );
}
