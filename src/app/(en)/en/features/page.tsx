// Generated from Slovenian source and src/locales/en.json.
import { pageMetadata } from "@/english/lib/seo";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Nav } from "@/english/components/redesign/Nav";
import { Footer } from "@/english/components/redesign/Footer";
import { RevealOnScroll } from "@/english/components/redesign/RevealOnScroll";
import { SubpageHero } from "@/english/components/redesign/SubpageHero";

export const metadata: Metadata = pageMetadata("/en/features", {
  title: "Features | Jedro+",
  description:
    "All Jedro+ features in one place: appointment calendar, client CRM, automated AI reminders, online booking and smart tools for service businesses.",
  openGraph: {
    title: "Features | Jedro+",
    description:
      "All Jedro+ features in one place: appointment calendar, client CRM, automated AI reminders, online booking and smart tools for service businesses.",
  },
});

const ChkWhite = () => (
  <span className="chk">
    <svg viewBox="0 0 12 12" fill="none">
      <path d="M2 6.2l2.6 2.6L10 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

type Feat = { icon: ReactNode; title: string; text: string };

const feats: Feat[] = [
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
    text: "A clear calendar view with quick booking, rescheduling and cancellation.",
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
    text: "Client contacts, visit history, notes and preferences in one place.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3.2 2" />
      </svg>
    ),
    title: "Appointment records",
    text: "Each appointment has a history, status and connection to its service and team member.",
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
        <path d="M12 3l9 5-9 5-9-5 9-5z" />
        <path d="M3 13l9 5 9-5" />
      </svg>
    ),
    title: "Services and staff",
    text: "Organise services, durations, prices and team schedules.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 7L4 12l5 5" />
        <path d="M4 12h11a5 5 0 015 5v1" />
      </svg>
    ),
    title: "Inactive clients",
    text: "Identify inactive clients and invite them back with campaigns. Fill your schedule.",
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
        <path d="M4 5.5h16a1 1 0 011 1V15a1 1 0 01-1 1H9.5L5 19.5V16H4a1 1 0 01-1-1V6.5a1 1 0 011-1z" />
        <path d="M8 9.5h8M8 12.5h5" />
      </svg>
    ),
    title: "Communication",
    text: "AI creates personalised messages for every client — notify everyone with one click.",
  },
];

const deepDives = [
  {
    slug: "sms-reminders",
    n: "01",
    title: "SMS reminders for clients",
    desc: "Automated reminders at the right time mean fewer cancellations and no-shows.",
  },
  {
    slug: "online-booking",
    n: "02",
    title: "Online booking, 24/7",
    desc: "Clients book whenever they want, helping fill your schedule without phone calls.",
  },
  {
    slug: "client-crm",
    n: "03",
    title: "CRM for service businesses",
    desc: "Every client’s contacts, visit history and notes in one place.",
  },
  {
    slug: "ai-communication",
    n: "04",
    title: "AI personalised messages",
    desc: "AI writes in your voice, using the client’s name, appointment and service.",
  },
  {
    slug: "promotions-discounts",
    n: "05",
    title: "Discounts, happy hours and promotions",
    desc: "Fill quieter hours with targeted offers and extra services.",
  },
  {
    slug: "resources",
    n: "06",
    title: "Resources: rooms, treatment spaces and equipment",
    desc: "Appointments account for the room, treatment table or device as well as the team member.",
  },
  {
    slug: "appointment-requests",
    n: "07",
    title: "Appointment requests",
    desc: "Clients suggest a time window; you confirm the exact appointment.",
  },
  {
    slug: "booking-designs-qr-codes",
    n: "08",
    title: "Booking designs, links and QR codes",
    desc: "Your brand’s look, a link for every channel and a QR poster.",
  },
  {
    slug: "receptionist-plus",
    n: "09",
    title: "Receptionist+ — AI receptionist",
    desc: "Answers calls, helps clients and adds appointments to your calendar.",
  },
];

const DeepArrow = () => (
  <span className="indrow__go">
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

export default function Funkcije() {
  return (
    <>
      <Nav variant="light" active="/en/features" />
      <main id="main-content">

      <SubpageHero
        eyebrow="Features"
        title={
          <>
             Everything you need{" "}
            <span className="grad-text">and more</span>
          </>
        }
        description={
          <>
             Everything is connected: calendar → client → service → staff → reminders → analytics. Built for efficiency, with AI to reduce manual work. </>
        }
        actions={
          <>
            <a className="btn btn--grad btn--lg" href="https://app.jedroplus.com/signup">
               Try for free <span className="arr">→</span>
            </a>
            <a className="btn btn--ghost btn--lg" href="/en#kontakt">
               Book a demo </a>
          </>
        }
      />

      {/* FEATURE GRID */}
      <section className="section subpage-first">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">All features</span>
            <h2 style={{ marginTop: 18 }}>
               Everything a service business <span className="grad-text">really needs</span>
            </h2>
            <p className="lead">
               Ten connected tools to replace separate apps and simplify your work. </p>
          </div>
          <div className="feat-grid reveal">
            {feats.map((f) => (
              <article className="feat" key={f.title}>
                <div className="feat__ico">{f.icon}</div>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DEEP DIVES — povezave na funkcijske pod-strani */}
      <section className="section section--soft">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">In detail</span>
            <h2 style={{ marginTop: 18 }}>
               Explore the key features <span className="grad-text">in depth</span>
            </h2>
            <p className="lead">
               Each feature has its own page with explanations, examples and frequently asked questions. </p>
          </div>
          <div className="ind-rows" style={{ marginTop: 40 }}>
            {deepDives.map((r) => (
              <Link className="indrow indrow--nomedia reveal" href={`/en/features/${r.slug}`} key={r.slug}>
                <div className="indrow__body">
                  <span className="indrow__n">{r.n}</span>
                  <h3>{r.title}{r.slug === "receptionist-plus" && <span className="new-badge" style={{ marginLeft: 12, verticalAlign: "middle" }}>New</span>}</h3>
                  <p>{r.desc}</p>
                </div>
                <DeepArrow />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PERSONALIZACIJA */}
      <section className="section" id="personalizacija">
        <div className="wrap split">
          <div className="split__body reveal">
            <span className="eyebrow">Personalisation</span>
            <h2 style={{ marginTop: 18 }}>
               Messages in <span className="grad-text">your voice</span>
            </h2>
            <p className="lead">
               Jedro+ uses AI to create messages that build real client relationships — reminders, follow-ups and instructions written as you would write them. </p>
            <ul className="split__list">
              <li>
                <ChkWhite />
                <span>
                  <b>Name, appointment and instructions</b>  for each service, so the message feels personal. </span>
              </li>
              <li>
                <ChkWhite />
                <span>
                  <b>An app tailored to you.</b>  Colours, tone and chatbot — the system adapts to you. </span>
              </li>
              <li>
                <ChkWhite />
                <span>
                  <b>Email and SMS</b>  — choose the channel to suit the client and message. </span>
              </li>
            </ul>
          </div>
          <div className="split__media reveal" data-d="1">
            <div className="chat" style={{ background: "#fff" }}>
              <div className="chat__time">Today, 14:23</div>
              <div className="bubble bubble--out">
                 Hello Ana! 😊 Following your teeth whitening today, we recommend avoiding dark drinks for the next 24 hours. Keep your smile shining! ✨ </div>
              <div className="bubble bubble--in" style={{ background: "var(--bg-soft)" }}>
                 Hello Luka! ✂️ Your haircut is tomorrow at 14:30. Please arrive 5 minutes early. Have a lovely day! </div>
              <div className="bubble bubble--out">
                 Thank you for choosing us, Sara! 💙 It was a pleasure looking after you. See you soon! 🌟 </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section className="section">
        <div className="wrap">
          <div className="split__body reveal" style={{ maxWidth: 760 }}>
            <span className="eyebrow">Online booking</span>
            <h2 style={{ marginTop: 18 }}>
               Booking experiences <span className="grad-text">that stand out</span>
            </h2>
            <p className="lead">
               Choose an online booking design that makes clients happy to return. </p>
            <ul className="split__list">
              <li>
                <ChkWhite />
                <span>
                   Customised with your colours and logo, <b>no coding required</b>
                </span>
              </li>
              <li>
                <ChkWhite />
                <span>
                   Optimised for mobile, so clients can book on their phones </span>
              </li>
              <li>
                <ChkWhite />
                <span>
                  <b>A choice of designs</b>  to suit your plan and brand </span>
              </li>
            </ul>
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
                 Start today </span>
              <h2 style={{ marginTop: 18 }}>Set up Jedro+ in minutes.</h2>
              <p>
                 From signing up to getting started — appointments, reminders and AI tools in one place. </p>
              <div className="cta-band__btns">
                <a className="btn btn--light btn--lg" href="https://app.jedroplus.com/signup">
                   Try for free <span className="arr">→</span>
                </a>
                <a
                  className="btn btn--ghost btn--lg"
                  href="/en#kontakt"
                  style={{ color: "#fff", borderColor: "rgba(255,255,255,.25)" }}
                >
                   Book a demo </a>
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
