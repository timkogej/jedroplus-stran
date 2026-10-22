// Generated from Slovenian source and src/locales/en.json.
import { pageMetadata } from "@/english/lib/seo";
import type { Metadata } from "next";
import { Nav } from "@/english/components/redesign/Nav";
import { Footer } from "@/english/components/redesign/Footer";
import { FlowController } from "@/english/components/redesign/FlowController";
import { Rotor } from "@/english/components/redesign/Rotor";
import { Faq } from "@/english/components/redesign/Faq";
import { agencijaFaq } from "@/english/components/redesign/faq-data";
import { JsonLd } from "@/components/JsonLd";
import { professionalServiceSchema } from "@/english/lib/schema";

export const metadata: Metadata = pageMetadata("/en/agency", {
  title: "Agency | Jedro+ — AI agency for service businesses",
  description:
    "Jedro+ Agency builds AI booking, reminder and automation solutions tailored to service businesses.",
  openGraph: {
    title: "Agency | Jedro+ — AI agency for service businesses",
    description:
      "Jedro+ Agency builds AI booking, reminder and automation solutions tailored to service businesses.",
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
    title: "Business systems",
    text: "Bring your business into one platform: appointments, clients, bookings, records and reports in one place, with no duplicate work.",
  },
  {
    title: "Communication systems",
    text: "We build client communication systems with automated reminders, personalised messages and notifications before and after appointments.",
  },
  {
    title: "Websites",
    text: "We build modern websites that bring in clients. Launch in days and connect your site to your business system.",
  },
  {
    title: "AI image and video production",
    text: "We use AI to create professional images, ads and videos for websites and social media — quickly, consistently and in your brand’s style.",
  },
  {
    title: "AI agents and automation",
    text: "We develop AI agents that answer clients, process enquiries and automate repetitive tasks to save your team time.",
  },
];

export default function Agencija() {
  return (
    <div className="theme-agency agency-page">
      <JsonLd schema={professionalServiceSchema} />
      <Nav variant="flow" active="/en/agency" />
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
            <p className="flow__eyebrow">01 — Jedro+ Agency</p>
            <hr className="flow__rule" />
            <h1 className="flow__h flow__h--hero" style={{ fontSize: 65 }}>
               We build{" "}
              <Rotor
                id="agRotor"
                words={["systems", "communication", "websites", "growth"]}
              />
              <br />
               for service businesses </h1>
            <hr className="flow__rule" />
            <p className="flow__lead">
               Quality. Speed. Innovation. Everything your business needs from an agency. </p>
            <div className="flow__cta flow__cta--spaced">
              <a className="btn btn--light btn--lg" href="tel:068663410">
                 Call +386 68 663 410 </a>
              <a className="flow__link" href="#kaj">
                 Explore our work <span className="arr">→</span>
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
            <p className="flow__eyebrow">02 — Who we are</p>
            <hr className="flow__rule" />
            <h2 className="flow__h flow__h--md" style={{ maxWidth: "18ch", fontSize: 65 }}>
               An AI agency for <br />
               service businesses </h2>
            <p className="flow__lead">
               We specialise in businesses that work with clients. Built on AI, our solutions work smarter, faster and more automatically. </p>
            <ul className="adv">
              <li>
                <Adv />
                <span>
                  <b>Built on AI.</b>  Automation, smart communication and systems that work for you. </span>
              </li>
              <li>
                <Adv />
                <span>
                  <b>Focused on services.</b>  We understand appointments, clients and the daily work of service businesses. </span>
              </li>
              <li>
                <Adv />
                <span>
                  <b>One team for everything.</b>  From your business system to your website — one place, one team. </span>
              </li>
              <li>
                <Adv />
                <span>
                  <b>Fast delivery.</b>  We get you up and running in days. </span>
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
            <p className="flow__eyebrow">03 — Speed</p>
            <hr className="flow__rule" />
            <h2 className="flow__h flow__h--md" style={{ fontSize: 65 }}>
               Projects in weeks. <br />
               Launch sooner. </h2>
            <hr className="flow__rule" />
            <p className="flow__lead">
               Get your business moving with systems and websites delivered quickly, with quality built into every step. </p>
            <hr className="flow__rule" />
            <p className="flow__lead flow__lead--r">Less waiting. More results.</p>
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
            <p className="flow__eyebrow">04 — What we offer</p>
            <hr className="flow__rule" />
            <h2 className="flow__h flow__h--md" style={{ fontSize: 65 }}>
               Everything your <br />
               business needs to grow </h2>
            <p className="flow__sub" style={{ marginTop: "clamp(14px,2vh,26px)" }}>
               We build the tools your business needs for its next stage.{" "}
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
                 Call us to discuss your project <span className="arr">→</span>
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
            <p className="flow__eyebrow">05 — Everything connected</p>
            <hr className="flow__rule" />
            <h2 className="flow__h flow__h--md" style={{ maxWidth: "16ch", fontSize: 65 }}>
               Your whole business <br />
               in one platform </h2>
            <p className="flow__lead">
               Bring your operations, communication and online presence into one system that is easy to manage and grows with you. </p>
            <div className="onerow">
              <span>Appointments</span>
              <i>→</i>
              <span>Clients</span>
              <i>→</i>
              <span>Communication</span>
              <i>→</i>
              <span>Booking</span>
              <i>→</i>
              <span>Reports</span>
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
            <p className="flow__eyebrow">06 — Call us</p>
            <hr className="flow__rule" />
            <h2 className="flow__h flow__h--sm" style={{ maxWidth: "22ch", fontSize: 65 }}>
               Ready for the next step? </h2>
            <hr className="flow__rule" />
            <p className="flow__lead">
               Call us for a free 15-minute introduction to a smarter, connected business with AI. No obligation. </p>
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
             Frequently asked <span className="grad-text">questions</span>
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
