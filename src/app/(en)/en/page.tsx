// Generated from Slovenian source and src/locales/en.json.
import Image from "next/image";
import { pageMetadata, DEFAULT_DESCRIPTION } from "@/english/lib/seo";
import { ReceptionistSpotlight } from "@/english/components/redesign/ReceptionistSpotlight";
import { Nav } from "@/english/components/redesign/Nav";
import { Footer } from "@/english/components/redesign/Footer";
import { HeroCalendar } from "@/english/components/redesign/HeroCalendar";
import { RevealOnScroll } from "@/english/components/redesign/RevealOnScroll";
import { industries } from "@/english/components/redesign/data";
import { JsonLd } from "@/components/JsonLd";
import { Faq } from "@/english/components/redesign/Faq";
import { homeFaq } from "@/english/components/redesign/faq-data";
import { softwareApplicationSchema } from "@/english/lib/schema";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata = pageMetadata("/en", {
  title: "Jedro+ | Booking software and AI receptionist",
  description: DEFAULT_DESCRIPTION,
});

const Check = () => (
  <span className="chk">
    <svg viewBox="0 0 12 12" fill="none">
      <path
        d="M2 6.2l2.6 2.6L10 3"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

type Feature = { icon: ReactNode; title: string; text: string };

const features: Feature[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M10.3 21a2 2 0 003.4 0" />
      </svg>
    ),
    title: "Before-appointment reminders",
    text: "Personalised email and SMS reminders in your voice, at the right time.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
    title: "After-appointment messages",
    text: "Thank-you notes, aftercare instructions and invitations to book again.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4.5" width="18" height="16" rx="2" />
        <path d="M3 9.5h18M8 3v3M16 3v3" />
      </svg>
    ),
    title: "Appointment calendar",
    text: "A clear overview with quick booking, rescheduling and cancellation.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3.5 20a5.5 5.5 0 0111 0" />
        <path d="M16 5.4a3.2 3.2 0 010 5.2M17 13.5a5.5 5.5 0 013.5 6" />
      </svg>
    ),
    title: "Client database (CRM)",
    text: "Contacts, visit history, notes and preferences in one place.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 14.5l5-5" />
        <path d="M14 7.5l1-1a3.8 3.8 0 015.4 5.4l-2 2a3.8 3.8 0 01-5.4 0" />
        <path d="M10 16.5l-1 1a3.8 3.8 0 01-5.4-5.4l2-2a3.8 3.8 0 015.4 0" />
      </svg>
    ),
    title: "Online booking",
    text: "A shareable link for easy booking, wherever your clients are.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19V5M4 19h16" />
        <path d="M7 15l4-4 3 3 5-6" />
      </svg>
    ),
    title: "Analytics",
    text: "Appointments, occupancy, cancellations, no-shows and trends at a glance.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 7L4 12l5 5" />
        <path d="M4 12h11a5 5 0 015 5v1" />
      </svg>
    ),
    title: "Inactive clients",
    text: "Automated campaigns bring inactive clients back. Fill your schedule.",
  },
];

const Fcard = ({ f, hidden }: { f: Feature; hidden?: boolean }) => (
  <article className="fcard" aria-hidden={hidden || undefined}>
    <div className="fcard__ico">{f.icon}</div>
    <h3>{f.title}</h3>
    <p>{f.text}</p>
  </article>
);

const stats = [
  { n: "24/7", l: "online booking" },
  { n: "1", l: "calendar for every booking" },
  { n: "30 min", l: "for your first Receptionist+ trial" },
  { n: "0 €", l: "for the entry-level Free plan" },
];

const steps = [
  { n: "01 — Create an account", t: "Sign up in seconds and set up your business essentials." },
  { n: "02 — Import your clients", t: "We can import your existing database, or you can add clients in the app." },
  { n: "03 — Appointments & reminders", t: "Your calendar, databases and notifications start working together." },
  { n: "04 — Grow with AI", t: "The system helps fill your schedule and improve communication and results." },
];

export default function Home() {
  return (
    <>
      <JsonLd schema={softwareApplicationSchema} />
      <Nav variant="flow" active="/en" tone="light" />
      <main id="main-content">

      {/* 01 — CINEMATIC HERO */}
      <HeroCalendar />

      {/* 02 — FUNKCIJE */}
      <section className="section" id="funkcije">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Features</p>
            <h2 style={{ marginTop: 18 }}>
               Everything you need, <br />
               connected in <span className="grad-text">one place</span>
            </h2>
            <p className="lead">
               Jedro+ is appointment booking software for service businesses across the European Union. Your calendar, online booking, client records and AI receptionist work together. </p>
          </div>
        </div>
        <div className="marquee reveal" style={{ marginTop: 52 }}>
          <div className="marquee__track">
            {features.map((f, i) => (
              <Fcard key={"o" + i} f={f} />
            ))}
            {features.map((f, i) => (
              <Fcard key={"d" + i} f={f} hidden />
            ))}
          </div>
        </div>
      </section>

      <ReceptionistSpotlight />

      {/* 03 — KOMUNIKACIJA */}
      <section className="section section--soft" id="komunikacija">
        <div className="wrap">
          <div className="split">
            <div className="reveal">
              <p className="eyebrow">Communication</p>
              <h2 style={{ marginTop: 18 }}>
                 Show your clients <br />
                 you care </h2>
              <p className="lead" style={{ maxWidth: "46ch" }}>
                 Let AI improve your clients’ experience. Your voice, your name and the right instructions at the right time. </p>
              <ul className="split__list">
                <li>
                  <Check />
                  <span>
                    <b>Fresh wording every time.</b>  AI writes each message individually — personal and natural. </span>
                </li>
                <li>
                  <Check />
                  <span>
                    <b>Fully automatic.</b>  Reminders and thank-you messages go out automatically, saving you time and typing. </span>
                </li>
                <li>
                  <Check />
                  <span>
                    <b>A better client experience.</b>  The right message at the right moment keeps clients coming back. </span>
                </li>
                <li>
                  <Check />
                  <span>
                    <b>Fewer missed appointments.</b>  Timely reminders mean a fuller schedule and fewer cancellations. </span>
                </li>
              </ul>
            </div>
            <div className="chat reveal" data-d="1">
              <div className="chat__time">Today, 14:23</div>
              <div className="bubble bubble--out">
                 Hello Ana! 😊 Following your teeth whitening today, we recommend avoiding dark drinks and foods such as coffee, red wine and blueberries for the next 24 hours. Keep your smile shining! ✨ </div>
              <div className="bubble bubble--in">
                 Hello Luka! ✂️ Your haircut is tomorrow at 14:30. Please arrive 5 minutes early. Have a lovely day! </div>
              <div className="bubble bubble--out">
                 Thank you for choosing us, Sara! 💙 It was a pleasure looking after you. Your feedback means a lot to us — see you soon! 🌟 </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — REZULTATI */}
      <section className="section" id="rezultati">
        <div className="wrap">
          <div className="section-head center reveal">
            <p className="eyebrow eyebrow--plain" style={{ justifyContent: "center" }}>
               Results </p>
            <h2 style={{ marginTop: 18 }}>Clear from the start</h2>
            <p className="lead">
               Start with the essentials and add features that support the way you work. </p>
          </div>
          <div className="hero-stats reveal" style={{ marginTop: 56, borderRadius: "var(--r-lg)", border: "1px solid var(--line)", overflow: "hidden" }}>
            <div className="hero-stats__grid">
              {stats.map((s) => (
                <div className="stat" key={s.n}>
                  <div className="stat__n">{s.n}</div>
                  <div className="stat__l">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05 — PANOGE */}
      <section className="section section--soft" id="panoge">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Industries</p>
            <h2 style={{ marginTop: 18 }}>
               For everyone who works <br />
               with clients </h2>
            <p className="lead">
               Whatever your business does with appointments and clients, Jedro+ adapts to the way you work. </p>
          </div>
          <div className="industries-marquee reveal">
            <div className="industries-marquee__track">
              {industries.map((d, i) => (
                <Link className="ind" href={`/en/industries/${d.slug}`} key={d.slug}>
                  {d.bg && (
                    <Image
                      className="ind__img"
                      src={`/images/industries/${d.bg}`}
                      alt={d.t}
                      fill
                      sizes="(max-width: 600px) 80vw, 30vw"
                    />
                  )}
                  <span className="ind__scrim" aria-hidden="true" />
                  <div className="ind__bg" />
                  <span className="ind__n">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{d.t}</h3>
                  <span className="ind__arrow" aria-hidden="true">→</span>
                </Link>
              ))}
              {industries.map((d, i) => (
                <Link
                  className="ind"
                  href={`/en/industries/${d.slug}`}
                  key={`duplicate-${d.slug}`}
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  {d.bg && (
                    <Image
                      className="ind__img"
                      src={`/images/industries/${d.bg}`}
                      alt=""
                      fill
                      sizes="(max-width: 600px) 80vw, 30vw"
                    />
                  )}
                  <span className="ind__scrim" aria-hidden="true" />
                  <div className="ind__bg" />
                  <span className="ind__n">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{d.t}</h3>
                  <span className="ind__arrow" aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="reveal" style={{ marginTop: 44 }}>
            <a className="btn btn--grad btn--lg" href="/en/industries">
               All industries <span className="arr">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 06 — KAKO DELUJE */}
      <section className="section" id="kako">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">How it works</p>
            <h2 style={{ marginTop: 18 }}>
               Sign up. <br />
               We’re ready when you are. </h2>
            <p className="lead">A few simple steps to get your business running.</p>
          </div>
          <div className="steps reveal">
            {steps.map((s) => (
              <div className="step" key={s.n}>
                <span className="step__n">{s.n}</span>
                <p>{s.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — ZAČNI */}
      <section className="section" id="kontakt">
        <div className="wrap">
          <div className="cta-band reveal">
            <div className="cta-band__glow" />
            <div className="cta-band__in">
              <h2>
                 Ready to take your <br />
                 business to the next level? </h2>
              <p>
                 Take control of appointments, clients and communication. See Jedro+ in a free 15-minute live demo. </p>
              <div className="cta-band__btns">
                <a className="btn btn--light btn--lg" href="mailto:info@jedroplus.com">
                   Book a demo <span className="arr">→</span>
                </a>
                <a className="btn btn--lg btn--ghost" href="tel:068663410" style={{ color: "#fff", borderColor: "rgba(255,255,255,.3)" }}>
                  068 663 410
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq
        items={homeFaq}
        title={
          <>
             Frequently asked <span className="grad-text">questions</span>
          </>
        }
        soft
      />

      </main>
      <Footer />
      <RevealOnScroll />
    </>
  );
}
