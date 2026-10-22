// Generated from Slovenian source and src/locales/en.json.
import { RelatedContent } from "@/components/RelatedContent";
import { pageMetadata } from "@/english/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Bell, CalendarCheck2, CalendarClock, Check, FileText, Globe2, MessageSquareText, Phone, Settings2, Sparkles, Wallet } from "lucide-react";
import { Nav } from "@/english/components/redesign/Nav";
import { Footer } from "@/english/components/redesign/Footer";
import { RevealOnScroll } from "@/english/components/redesign/RevealOnScroll";
import { Faq } from "@/english/components/redesign/Faq";
import { ReceptionistDemo } from "@/english/components/redesign/ReceptionistDemo";
import { ReceptionistPricing } from "@/english/components/redesign/ReceptionistPricing";
import { JsonLd } from "@/components/JsonLd";
import { receptionistBreadcrumbSchema, receptionistServiceSchema } from "@/english/lib/schema";
import { receptionistFaq, RECEPTIONIST_APP_URL } from "@/english/lib/receptionist";

const title = "Receptionist+ | AI receptionist in your client’s language | Jedro+";
const description = "An AI receptionist that speaks your client’s language, books, reschedules and cancels appointments, answers questions and sends reminders. Meet Receptionist+.";

export const metadata: Metadata = pageMetadata("/en/features/receptionist-plus", {
  title, description,
  alternates: { canonical: "/en/features/receptionist-plus" },
  openGraph: { title, description, url: "/en/features/receptionist-plus", images: [{ url: "/en/features/receptionist-plus/opengraph-image", width: 1200, height: 630, alt: "Receptionist+ — Jedro+ AI receptionist" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/en/features/receptionist-plus/opengraph-image"] },
});

const features = [
  { icon: Globe2, title: "Speaks your client’s language", text: "Adapts to the client’s language so everyone can arrange an appointment or get an answer clearly." },
  { icon: CalendarClock, title: "Books, reschedules or cancels", text: "Creates a new booking, finds another available time or cancels an appointment. Every change is recorded in your Jedro+ calendar." },
  { icon: MessageSquareText, title: "Helps with answers", text: "Answers questions about your business, services and bookings, or takes a message for a callback." },
  { icon: Bell, title: "Sends appointment reminders", text: "Reminds the client of their appointment with clear, timely visit details." },
  { icon: FileText, title: "Records what was agreed", text: "Appointments and changes stay in the system. Review call outcomes, usage and transcripts where available in the call log." },
  { icon: Settings2, title: "Your greeting, your way of working", text: "The assistant introduces itself on behalf of your business. Manage the greeting, activation and other settings in the app." },
];

const steps = [
  { number: "01", title: "A client calls", text: "Receptionist+ answers through your connected phone service and greets the client on behalf of your business." },
  { number: "02", title: "The conversation starts", text: "In the client’s language, it helps book, reschedule or cancel an appointment, answers questions and sends a reminder." },
  { number: "03", title: "You stay informed", text: "New appointments and changes are recorded in your calendar. Review call outcomes and usage in the Jedro+ app." },
];

export default function ReceptionistPlus() {
  return (
    <>
      <JsonLd schema={receptionistBreadcrumbSchema()} />
      <JsonLd schema={receptionistServiceSchema} />
      <Nav variant="light" active="/en/features/receptionist-plus" />
      <main id="main-content">
        <section className="rp-hero">
          <div className="wrap">
            <div className="rp-hero__grid">
              <div className="rp-hero__copy">
                <nav className="crumbs" aria-label="Breadcrumbs"><Link href="/en">Home</Link><span aria-hidden="true">/</span><Link href="/en/features">Features</Link><span aria-hidden="true">/</span><span aria-current="page">Receptionist+</span></nav>
                <div className="rp-kicker">Receptionist+ · AI reception</div>
                <h1>You work.<br /><span className="grad-text">Your AI receptionist</span><br />takes the call.</h1>
                <p>Receptionist+ is your AI receptionist for phone bookings. It speaks your client’s language, books, reschedules or cancels appointments and answers questions. You can focus on the person in front of you.</p>
                <div className="rp-hero__actions"><a className="btn btn--primary btn--lg" href="https://app.jedroplus.com/signup">Start for free <ArrowUpRight size={18} aria-hidden="true" /></a><a className="btn btn--ghost btn--lg" href="#cenik-receptionist">View pricing</a></div>
                <p className="rp-hero__trial"><Check size={16} aria-hidden="true" />  30 free minutes on first activation</p>
                <a className="rp-hero__existing" href={RECEPTIONIST_APP_URL}>Already using Jedro+? Open Receptionist+ <ArrowUpRight size={14} aria-hidden="true" /></a>
              </div>
              <ReceptionistDemo />
            </div>
          </div>
        </section>

        <section className="rp-proof" aria-label="Receptionist+ at a glance"><div className="wrap rp-proof__grid"><span><Globe2 size={19} aria-hidden="true" />Conversations in the client’s language</span><span><CalendarClock size={19} aria-hidden="true" />Appointments, changes and reminders</span><span><Phone size={19} aria-hidden="true" />Fewer interruptions at work</span></div></section>

        <section className="section">
          <div className="wrap rp-benefit-intro">
            <div className="reveal"><span className="eyebrow">Fewer interruptions. More attention.</span><h2>You’re with a client.<br /><span className="grad-text">The phone rings again.</span></h2></div>
            <div className="reveal" data-d="1"><p>During a haircut, massage or meeting, every call breaks your focus. An unanswered call leaves a client waiting.</p><p>Receptionist+ takes the call and helps with what the client needs, from a first booking to rescheduling. It records the agreement in Jedro+, saving you from entering it again.</p></div>
          </div>
        </section>

        <section className="section section--soft" aria-labelledby="rp-how-heading">
          <div className="wrap">
            <div className="section-head reveal"><span className="eyebrow">How it works</span><h2 id="rp-how-heading" style={{ marginTop: 18 }}>From “hello”<br />to <span className="grad-text">a confirmed appointment.</span></h2></div>
            <div className="rp-steps">{steps.map((step, index) => <article className="reveal" data-d={index} key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
          </div>
        </section>

        <section className="section" aria-labelledby="rp-features-heading">
          <div className="wrap">
            <div className="section-head reveal"><span className="eyebrow">Your support on the phone</span><h2 id="rp-features-heading" style={{ marginTop: 18 }}>Call answered.<br /><span className="grad-text">Next step sorted.</span></h2><p className="lead">The conversation, appointment and usage stay connected in the system you already use.</p></div>
            <div className="rp-feature-grid">{features.map(({ icon: Icon, ...feature }, index) => <article className="reveal" data-d={index % 3} key={feature.title}><span className="rp-feature-grid__icon"><Icon size={23} strokeWidth={1.5} aria-hidden="true" /></span><h3>{feature.title}</h3><p>{feature.text}</p></article>)}</div>
          </div>
        </section>

        <section className="section rp-connection">
          <div className="wrap rp-connection__grid">
            <div className="reveal"><span className="rp-kicker"><Sparkles size={16} aria-hidden="true" />  One system, a connected working day</span><h2>One call.<br />Everything in <span>the right place.</span></h2><p>Receptionist+ is part of Jedro+. New, rescheduled or cancelled appointments appear in the same calendar as online and manually entered bookings. Reminders stay linked to the appointment too.</p><Link className="rp-text-link" href="/en/features">Explore more features <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
            <div className="rp-connection__diagram reveal" data-d="1" aria-label="Receptionist+ connects calls to your calendar, call log and usage overview"><div className="rp-connection__source"><Phone size={25} aria-hidden="true" /><strong>Receptionist+</strong><span>Phone conversation</span></div><div className="rp-connection__branches"><div><CalendarCheck2 size={21} aria-hidden="true" /><strong>Calendar</strong><span>Appointments and changes</span></div><div><FileText size={21} aria-hidden="true" /><strong>Call log</strong><span>Outcome and transcript</span></div><div><Wallet size={21} aria-hidden="true" /><strong>Minutes</strong><span>Usage overview</span></div></div></div>
          </div>
        </section>

      <RelatedContent path={"/en/features/receptionist-plus"} />
        <ReceptionistPricing productPage />
        <Faq reveal items={receptionistFaq} title={<>Before your first <span className="grad-text">call.</span></>} soft />
        <section className="section rp-final"><div className="wrap"><div className="rp-final__inner reveal"><span className="rp-kicker">Receptionist+</span><h2>Fewer calls for you.<br /><span className="grad-text">More time for your work.</span></h2><p>Let your AI receptionist handle calls, appointments and questions. Try Receptionist+ or arrange a demo with us.</p><div className="rp-hero__actions"><a className="btn btn--primary btn--lg" href={RECEPTIONIST_APP_URL}>Open Receptionist+ <ArrowUpRight size={18} aria-hidden="true" /></a><a className="btn btn--ghost btn--lg" href="mailto:info@jedroplus.com?subject=Receptionist%2B%20demo">Arrange a demo</a></div></div></div></section>
      </main>
      <Footer />
      <RevealOnScroll />
    </>
  );
}
