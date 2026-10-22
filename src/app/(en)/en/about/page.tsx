// Generated from Slovenian source and src/locales/en.json.
import { pageMetadata } from "@/english/lib/seo";
import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/english/components/redesign/Nav";
import { Footer } from "@/english/components/redesign/Footer";
import { RevealOnScroll } from "@/english/components/redesign/RevealOnScroll";
import { SubpageHero } from "@/english/components/redesign/SubpageHero";

export const metadata: Metadata = pageMetadata("/en/about", {
  title: "About us | Jedro+ — made in Slovenia for service businesses",
  description:
    "Jedro+ is a Slovenian app for service businesses. Discover our story, mission and why we build tools for salons, clinics, gyms and other service providers.",
  openGraph: {
    title: "About us | Jedro+ — made in Slovenia for service businesses",
    description:
      "Jedro+ is a Slovenian app for service businesses. Discover our story, mission and why we build tools for salons, clinics, gyms and other service providers.",
  },
});

export default function ONas() {
  return (
    <>
      <Nav variant="light" active="/en/about" />
      <main id="main-content">

      <SubpageHero
        eyebrow="About us"
        title={
          <>
             Made in Slovenia,{" "}
            <span className="grad-text">for service businesses.</span>
          </>
        }
        description={
          <>
             Jedro+ brings appointments, clients, reminders and online booking into one place, so you can focus on what you do best: looking after your clients. </>
        }
      />

      {/* ZGODBA */}
      <section className="section subpage-first">
        <div className="wrap split">
          <div className="split__body reveal">
            <span className="eyebrow">Our story</span>
            <h2 style={{ marginTop: 18 }}>
               Built around the <span className="grad-text">everyday challenges</span>{" "}
               of service businesses </h2>
            <p className="lead">
               Every salon, clinic and studio knows the same cycle: calls during appointments, handwritten bookings, empty slots after forgotten visits and client information scattered across tools. </p>
            <p className="lead" style={{ marginTop: 18 }}>
               We designed Jedro+ to simplify that cycle. Appointments, client records, reminders and online booking connect in one place, saving duplicate work and app switching. We build it in Slovenia, working closely with the businesses that use it every day. </p>
          </div>
          <div className="split__media reveal" data-d="1">
            <figure style={{ margin: 0 }}><div className="ph about-team-photo" style={{ aspectRatio: "16/9" }}>
              <Image
                src="/images/jedro-stran-team.webp"
                alt="Illustrative view of collaborative planning"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div><figcaption className="illustration-caption">Illustrative image.</figcaption></figure>
          </div>
        </div>
      </section>

      {/* POSLANSTVO */}
      <section className="section section--soft">
        <div className="wrap">
          <div className="section-head center reveal" style={{ marginInline: "auto", textAlign: "center" }}>
            <span className="eyebrow eyebrow--plain" style={{ justifyContent: "center" }}>
               Our mission </span>
            <h2 style={{ marginTop: 18 }}>
               Giving service businesses{" "}
              <span className="grad-text">more time for clients</span>
            </h2>
            <p className="lead" style={{ marginInline: "auto" }}>
               We believe technology for small and medium businesses should be simple, affordable and familiar. We build an accessible tool in Slovenian that genuinely reduces administration. </p>
          </div>

          <div className="about-cards">
            <div className="about-card reveal">
              <h3>Simplicity</h3>
              <p>
                 Set up in days. An interface the whole team can understand without courses or manuals. </p>
            </div>
            <div className="about-card reveal" data-d="1">
              <h3>Local and accessible</h3>
              <p>
                 Developed in Slovenia, in Slovenian, at prices that make sense for smaller service businesses. </p>
            </div>
            <div className="about-card reveal" data-d="2">
              <h3>Smarter with AI</h3>
              <p>
                 Reminders and notifications that reduce cancellations and bring inactive clients back, automatically in the background. </p>
            </div>
          </div>
        </div>
      </section>

      {/* ZA KOGA */}
      <section className="section">
        <div className="wrap split split--rev">
          <div className="split__body reveal">
            <span className="eyebrow">Who it’s for</span>
            <h2 style={{ marginTop: 18 }}>
               For <span className="grad-text">service businesses</span>working with appointments </h2>
            <p className="lead">
               Jedro+ fits businesses where the day revolves around bookings and client relationships: hair and beauty salons, healthcare and aesthetic clinics, gyms, studios, therapists, garages and other service providers. </p>
            <p className="lead" style={{ marginTop: 18 }}>
               Across industries, our promise stays the same: less manual work, fewer empty slots and a clear business overview. </p>
          </div>
          <div className="split__media reveal" data-d="1">
            <figure style={{ margin: 0 }}><div className="ph about-closeup-photo" style={{ aspectRatio: "16/9" }}>
              <Image
                src="/images/jedro-stran-closeup.webp"
                alt="Illustrative view of appointment planning"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div><figcaption className="illustration-caption">Illustrative image.</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="section" id="jeziki" aria-labelledby="language-scope-heading">
        <div className="wrap">
          <div className="section-head reveal"><span className="eyebrow">Languages and getting started</span><h2 id="language-scope-heading" style={{ marginTop: 18 }}>A clear overview <span className="grad-text">before you start.</span></h2><p className="lead">The languages of the website, the app and phone conversations are separate parts of the Jedro+ experience.</p></div>
          <dl className="language-scope">
            <div><dt>Businesses across the European Union</dt><dd>Jedro+ is available to service businesses across the EU. We adapt setup to your services, team and way of working.</dd></div>
            <div><dt>Additional language customisation</dt><dd>Need another language? Additional language customisation is available by arrangement. We agree the scope and implementation before setup.</dd></div>
            <div><dt>Website</dt><dd>Slovenian, English, Italian and German.</dd></div>
            <div><dt>Jedro+ app</dt><dd>The app interface is available in Slovenian and English.</dd></div>
            <div><dt>Receptionist+ conversations</dt><dd>The AI receptionist speaks the client’s language. We check your business’s phone service settings during activation.</dd></div>
            <div><dt>Fiscal cash register</dt><dd>A separate module for FURS invoice confirmation in Slovenia.</dd></div>
          </dl>
          <p className="language-scope__contact">For setup and support questions, email <a href="mailto:info@jedroplus.com">info@jedroplus.com</a>.</p>
        </div>
      </section>

      {/* KONTAKT */}
      <section className="section section--soft" id="kontakt">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Contact</span>
            <h2 style={{ marginTop: 18 }}>
               Let’s talk about your <span className="grad-text">business</span>
            </h2>
            <p className="lead">
               Have a question or want to see Jedro+ in action? Email or call us — we respond quickly. </p>
          </div>
          <div className="about-cards" style={{ marginTop: 40 }}>
            <div className="about-card reveal">
              <h3>Email</h3>
              <p>
                <a href="mailto:info@jedroplus.com">info@jedroplus.com</a>
              </p>
            </div>
            <div className="about-card reveal" data-d="1">
              <h3>Phone</h3>
              <p>
                <a href="tel:068663410">068 663 410</a>
              </p>
            </div>
            <div className="about-card reveal" data-d="2">
              <h3>Where we are</h3>
              <p>Slovenia 🇸🇮 — locally developed, with support in Slovenian.</p>
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
