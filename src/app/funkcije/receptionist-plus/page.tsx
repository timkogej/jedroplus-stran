import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/redesign/Nav";
import { Footer } from "@/components/redesign/Footer";
import { RevealOnScroll } from "@/components/redesign/RevealOnScroll";
import { JsonLd } from "@/components/JsonLd";
import { receptionistBreadcrumbSchema, faqPageSchema } from "@/lib/schema";

const title = "Receptionist+ — AI recepcionistka za storitvena podjetja | Jedro+";
const description =
  "Receptionist+ je AI recepcionistka, ki namesto vas sprejme telefonski klic, odgovori na vprašanja in vpiše termin v koledar. Brez zamujenih klicev, v slovenščini.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
};

const Chk = () => (
  <span className="chk">
    <svg viewBox="0 0 12 12" fill="none">
      <path d="M2 6.2l2.6 2.6L10 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const steps = [
  { n: "01 — Klic", t: "Stranka pokliče vašo številko, medtem ko ste pri delu ali zaprti." },
  { n: "02 — Pogovor", t: "AI recepcionistka jo pozdravi z vašim besedilom in odgovori v slovenščini." },
  { n: "03 — Termin", t: "Če stranka želi termin, ga vpiše v vaš koledar — brez dvojnega vnosa." },
  { n: "04 — Pregled", t: "Pogovor in izid klica najdete v klicnem dnevniku, z zapisom pogovora." },
];

const features = [
  { title: "Sprejme klic namesto vas", text: "Nobenega zamujenega klica, ko ste pri stranki, na odmoru ali po delovnem času." },
  { title: "Vpiše termin v koledar", text: "Rezervacija se zapiše neposredno v Jedro+ koledar, zato ni ročnega prepisovanja." },
  { title: "Vaš pozdrav", text: "Pozdravno besedilo ob klicu nastavite sami, ali pustite privzeto." },
  { title: "Klicni dnevnik", text: "Vsak klic ima trajanje, izid (rezervirano, informacije, sporočilo, prekinjeno) in zapis pogovora." },
  { title: "Pregleden strošek", text: "Plačujete s krediti, ki jih dokupite po potrebi. Prag za nizko stanje vas opozori pravočasno." },
  { title: "Vklop in izklop z enim klikom", text: "AI recepcionistko po želji vklopite samo za čas, ko ne morete dvigniti telefona." },
];

const packs = [
  { name: "Zagon", credits: "100 kreditov", price: "15 €" },
  { name: "Standard", credits: "300 kreditov", price: "39 €" },
  { name: "Profi", credits: "750 kreditov", price: "89 €" },
];

const faq = [
  {
    q: "Kaj je Receptionist+?",
    a: "Receptionist+ je AI recepcionistka, ki v imenu vašega podjetja odgovarja na telefonske klice. Odgovori na osnovna vprašanja, sprejme sporočilo ali stranki vpiše termin v vaš koledar.",
  },
  {
    q: "V katerem jeziku govori?",
    a: "Trenutno v slovenščini.",
  },
  {
    q: "Kako se obračuna uporaba?",
    a: "Uporaba se obračunava v kreditih. Pri aktivaciji prejmete 30 brezplačnih preizkusnih kreditov, nato kredite dokupite v paketih Zagon (100), Standard (300) ali Profi (750). Ko stanje pade pod prag, ki ga nastavite sami, vas aplikacija opozori.",
  },
  {
    q: "Ali vidim, kaj se je dogajalo na klicu?",
    a: "Da. Klicni dnevnik prikaže čas, trajanje, porabljene kredite, izid klica in zapis pogovora, če je bil termin ustvarjen, pa tudi povezavo nanj.",
  },
  {
    q: "Kako ga vklopim?",
    a: "Receptionist+ se aktivira na zahtevo, ni vezan na paket. Pišite nam ali rezervirajte predstavitev, pa ga vklopimo za vaše podjetje.",
  },
];

export default function ReceptionistPlus() {
  return (
    <>
      <JsonLd schema={receptionistBreadcrumbSchema()} />
      <JsonLd schema={faqPageSchema(faq)} />
      <Nav variant="light" active="/funkcije/receptionist-plus" />

      <section className="imghero imghero--plain">
        <div className="imghero__in">
          <div className="wrap">
            <nav aria-label="Drobtine" className="crumbs">
              <Link href="/">Domov</Link>
              <span aria-hidden="true">/</span>
              <Link href="/funkcije">Funkcije</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Receptionist+</span>
            </nav>
            <span className="eyebrow">Receptionist+</span>
            <h1 style={{ marginTop: 16 }}>AI recepcionistka, ki dvigne telefon namesto vas</h1>
            <p className="imghero__sub">
              Sprejme klic, odgovori stranki v slovenščini in vpiše termin v vaš
              koledar. Vi pa se posvetite delu.
            </p>
            <div className="imghero__cta">
              <a className="btn btn--grad btn--lg" href="/#kontakt">
                Povprašaj za aktivacijo <span className="arr">→</span>
              </a>
              <a className="btn btn--light btn--lg" href="/funkcije">
                Vse funkcije
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: "left", maxWidth: 820 }}>
            <span className="eyebrow">Zakaj</span>
            <h2 style={{ marginTop: 18 }}>
              Vsak zamujen klic je <span className="grad-text">izgubljena stranka</span>
            </h2>
            <p className="subintro__lead" style={{ marginTop: 24 }}>
              Ko ste pri stranki, ne morete dvigniti telefona. Stranka, ki ne dobi
              odgovora, pogosto pokliče naslednjega. Receptionist+ sprejme klic
              namesto vas, ostane povezan z Jedro+ koledarjem in zbira vse na
              enem mestu.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Kako deluje</span>
            <h2 style={{ marginTop: 18 }}>Od klica do termina <span className="grad-text">brez vas</span></h2>
          </div>
          <div className="steps reveal" style={{ marginTop: 40 }}>
            {steps.map((s) => (
              <div className="step" key={s.n}>
                <span className="step__n">{s.n}</span>
                <p>{s.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: "left", maxWidth: 820 }}>
            <span className="eyebrow">Kaj zna</span>
            <h2 style={{ marginTop: 18 }}>Vse, kar dobra <span className="grad-text">recepcija</span> počne</h2>
          </div>
          <div className="t-grid" style={{ marginTop: 48 }}>
            {features.map((c) => (
              <article className="fcard reveal" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft" id="krediti">
        <div className="wrap">
          <div className="section-head center reveal">
            <span className="eyebrow eyebrow--plain" style={{ justifyContent: "center" }}>Krediti</span>
            <h2 style={{ marginTop: 18 }}>Plačate le, kar <span className="grad-text">porabite</span></h2>
            <p className="lead">
              Ob aktivaciji prejmete 30 brezplačnih preizkusnih kreditov. Nato
              kredite dokupite v paketu, ki vam ustreza.
            </p>
          </div>
          <div className="price-grid" style={{ marginTop: 40 }}>
            {packs.map((p, i) => (
              <div className={`ptier reveal${i === 1 ? " ptier--feat" : ""}`} key={p.name} data-d={i}>
                {i === 1 && <div className="pglow" />}
                <div className="ptier__name">{p.name}</div>
                <div className="ptier__price">{p.price}</div>
                <p className="ptier__desc">{p.credits}</p>
                <ul>
                  <li><Chk /><span>Brez mesečne vezave</span></li>
                  <li><Chk /><span>Opozorilo ob nizkem stanju</span></li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Pogosta vprašanja</span>
            <h2 style={{ marginTop: 18 }}>Vse, kar vas <span className="grad-text">zanima</span></h2>
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

      <section className="section">
        <div className="wrap">
          <div className="cta-band reveal">
            <div className="cta-band__glow"></div>
            <div className="cta-band__in">
              <span className="eyebrow" style={{ color: "rgba(255,255,255,.75)" }}>Pripravljeni?</span>
              <h2 style={{ marginTop: 18 }}>Nikoli več zamujenega klica.</h2>
              <p>Pokažemo vam Receptionist+ v živo in ga vklopimo za vaše podjetje.</p>
              <div className="cta-band__btns">
                <a className="btn btn--light btn--lg" href="/#kontakt">
                  Povprašaj za aktivacijo <span className="arr">→</span>
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
