import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/redesign/Nav";
import { Footer } from "@/components/redesign/Footer";
import { RevealOnScroll } from "@/components/redesign/RevealOnScroll";
import { JsonLd } from "@/components/JsonLd";
import { davcnaBlagajnaBreadcrumbSchema, faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Davčna blagajna za storitvena podjetja (FURS) | Jedro+",
  description:
    "Davčna blagajna Jedro+ s FURS fiskalizacijo, povezana s spletnim naročanjem, plačili, točkami zvestobe in popusti. Vse na enem mestu, skladno z zakonodajo.",
  openGraph: {
    title: "Davčna blagajna za storitvena podjetja (FURS) | Jedro+",
    description:
      "Davčna blagajna Jedro+ s FURS fiskalizacijo, povezana s spletnim naročanjem, plačili, točkami zvestobe in popusti. Vse na enem mestu, skladno z zakonodajo.",
  },
};

// Kaj vključuje — vsak vnos: kratek naslov (pred —) in razlaga (za —).
const included: { title: string; text: string }[] = [
  {
    title: "FURS fiskalizacija z realnim certifikatom",
    text: "Računi se potrjujejo pri davčni upravi.",
  },
  {
    title: "Povezava s spletnim naročanjem",
    text: "Termin, plačilo in račun v enem toku.",
  },
  {
    title: "Spletna plačila in avansi",
    text: "Stranka lahko plača že ob rezervaciji.",
  },
  {
    title: "Točke zvestobe",
    text: "Nagrajevanje strank ob nakupu.",
  },
  {
    title: "Popusti in kuponi",
    text: "Akcije in kode za popust neposredno na blagajni.",
  },
  {
    title: "Pregled prometa",
    text: "Kaj se je prodalo, kdaj in komu.",
  },
];

const faq = [
  {
    q: "Ali je davčna blagajna Jedro+ skladna s FURS?",
    a: "Da. Davčna blagajna Jedro+ uporablja pravi FURS certifikat in davčno potrjuje račune v skladu s slovensko zakonodajo.",
  },
  {
    q: "Ali je davčna blagajna vključena v pakete Jedro+?",
    a: "Davčna blagajna je na voljo kot ločen modul z doplačilom, ne kot del osnovnih paketov Plus in Pro.",
  },
  {
    q: "Ali je blagajna povezana s spletnim naročanjem in plačili?",
    a: "Da. Blagajna je povezana s spletnim naročanjem, spletnimi plačili, točkami zvestobe in popusti — vse deluje v enem sistemu.",
  },
  {
    q: "Ali lahko na blagajni uporabljam popuste in kupone?",
    a: "Da. Popuste in kupone lahko uporabite neposredno na blagajni, prav tako pa stranke zbirajo točke zvestobe.",
  },
];

export default function DavcnaBlagajna() {
  return (
    <>
      <JsonLd schema={davcnaBlagajnaBreadcrumbSchema()} />
      <JsonLd schema={faqPageSchema(faq)} />
      <Nav variant="light" />

      {/* HERO */}
      <section className="imghero imghero--plain">
        <div className="imghero__in">
          <div className="wrap">
            <nav aria-label="Drobtine" className="crumbs">
              <Link href="/">Domov</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Davčna blagajna</span>
            </nav>
            <span className="eyebrow">Davčna blagajna</span>
            <h1 style={{ marginTop: 16 }}>Davčna blagajna za storitvena podjetja</h1>
            <p className="imghero__sub">
              Polnovredna fiskalna blagajna s pravim FURS certifikatom — povezana s
              spletnim naročanjem, plačili, točkami zvestobe in popusti.
            </p>
            <div className="imghero__cta">
              <a className="btn btn--grad btn--lg" href="/#kontakt">
                Povprašaj po modulu <span className="arr">→</span>
              </a>
              <a className="btn btn--light btn--lg" href="/cenik">
                Poglej cenik
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* UVOD */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: "left", maxWidth: 820 }}>
            <span className="eyebrow">Uvod</span>
            <h2 style={{ marginTop: 18 }}>
              Blagajna, povezana z <span className="grad-text">vsem ostalim</span>
            </h2>
            <div style={{ marginTop: 24, display: "grid", gap: 18 }}>
              <p className="subintro__lead">
                Davčna blagajna Jedro+ je polnovredna fiskalna blagajna s pravim FURS
                certifikatom — računi se davčno potrjujejo v skladu s slovensko
                zakonodajo. Razlika od samostojnih blagajn je v tem, da je pri Jedro+
                blagajna povezana z ostalim sistemom: s spletnim naročanjem, plačili,
                točkami zvestobe in popusti. Ko stranka opravi storitev, je pot od
                termina do davčno potrjenega računa ena sama, brez podvajanja dela.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KAJ VKLJUČUJE */}
      <section className="section section--soft">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: "left", maxWidth: 820 }}>
            <span className="eyebrow">Kaj vključuje</span>
            <h2 style={{ marginTop: 18 }}>
              Vse, kar blagajna <span className="grad-text">potrebuje</span>
            </h2>
          </div>
          <div className="t-grid" style={{ marginTop: 48 }}>
            {included.map((c) => (
              <article className="fcard reveal" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ZA KOGA JE */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: "left", maxWidth: 820 }}>
            <span className="eyebrow">Za koga je</span>
            <h2 style={{ marginTop: 18 }}>
              Za storitvena podjetja, ki izdajajo <span className="grad-text">račune</span>
            </h2>
            <p className="subintro__lead" style={{ marginTop: 24 }}>
              Za storitvena podjetja, ki morajo izdajati davčno potrjene račune —
              salone, klinike, wellness studie, avtoservise in druge, ki želijo
              blagajno in naročanje v enem sistemu namesto v dveh ločenih orodjih.
            </p>
          </div>
        </div>
      </section>

      {/* KAKO DO NJE */}
      <section className="section section--soft">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: "left", maxWidth: 820 }}>
            <span className="eyebrow">Kako do nje</span>
            <h2 style={{ marginTop: 18 }}>
              Ločen modul, <span className="grad-text">postavljen z vami</span>
            </h2>
            <p className="subintro__lead" style={{ marginTop: 24 }}>
              Davčna blagajna je na voljo kot ločen modul k Jedro+ sistemu. Za
              nastavitev certifikata in prilagoditev vašemu poslovanju vam pomagamo
              pri zagonu.
            </p>
            {/* TODO (Tim): dodaj, kako se modul naroči in koliko stane, ko določiš ceno. */}
            <div style={{ marginTop: 30 }}>
              <a className="btn btn--primary btn--lg" href="/#kontakt">
                Povprašaj po modulu <span className="arr">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Pogosta vprašanja</span>
            <h2 style={{ marginTop: 18 }}>
              Vse, kar vas <span className="grad-text">zanima</span>
            </h2>
          </div>
          <div className="faq-list" style={{ marginTop: 40, maxWidth: 820, marginInline: "auto" }}>
            {faq.map((item) => (
              <details className="faq-item reveal" key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
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
                Pripravljeni začeti?
              </span>
              <h2 style={{ marginTop: 18 }}>Blagajna in naročanje v enem sistemu.</h2>
              <p>
                Povprašajte po modulu davčne blagajne ali se dogovorite za kratko
                predstavitev po meri vaše dejavnosti.
              </p>
              <div className="cta-band__btns">
                <a className="btn btn--light btn--lg" href="/#kontakt">
                  Povprašaj po modulu <span className="arr">→</span>
                </a>
                <a
                  className="btn btn--ghost btn--lg"
                  href="/#kontakt"
                  style={{ color: "#fff", borderColor: "rgba(255,255,255,.25)" }}
                >
                  Rezerviraj predstavitev
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
