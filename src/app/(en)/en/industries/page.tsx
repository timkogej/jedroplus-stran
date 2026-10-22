// Generated from Slovenian source and src/locales/en.json.
import Image from "next/image";
import { pageMetadata } from "@/english/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/english/components/redesign/Nav";
import { Footer } from "@/english/components/redesign/Footer";
import { RevealOnScroll } from "@/english/components/redesign/RevealOnScroll";
import { SubpageHero } from "@/english/components/redesign/SubpageHero";

export const metadata: Metadata = pageMetadata("/en/industries", {
  title: "Industries | Jedro+",
  description:
    "Jedro+ supports hair salons, clinics, wellness studios, gyms, garages and coaching businesses. Find a booking solution for your industry.",
  openGraph: {
    title: "Industries | Jedro+",
    description:
      "Jedro+ supports hair salons, clinics, wellness studios, gyms, garages and coaching businesses. Find a booking solution for your industry.",
  },
});

const rows = [
  {
    slug: "hair-salons",
    n: "01",
    title: "Hair, beauty & barber salons",
    desc: "A fuller schedule, fewer cancellations and clients who love coming back.",
    img: "jedro-stran-panoge-1.webp",
  },
  {
    slug: "clinics",
    n: "02",
    title: "Dental, aesthetic & medical clinics",
    desc: "Organised patient records, timely instructions and fewer cancellations.",
    img: "jedro-stran-panoge-5.webp",
  },
  {
    slug: "wellness",
    n: "03",
    title: "Massage & wellness studios, physiotherapy",
    desc: "Appointment series, gentle reminders and invitations to return.",
    img: "jedro-stran-panoge-3.webp",
  },
  {
    slug: "fitness",
    n: "04",
    title: "Gyms, yoga, Pilates & personal trainers",
    desc: "Group sessions, membership records and notifications about available places.",
    img: "jedro-stran-panoge-2.webp",
  },
  {
    slug: "garages",
    n: "05",
    title: "Garages, tyre centres & cleaning services",
    desc: "Service reminders and notifications when a vehicle is ready for collection.",
    img: "jedro-stran-panoge-4.webp",
  },
  {
    slug: "coaching",
    n: "06",
    title: "Consulting, coaching & therapy",
    desc: "Discreet reminders, recurring appointments and progress tracking.",
    img: "jedro-stran-panoge-7.webp",
  },
  {
    slug: "business-services",
    n: "07",
    title: "IT, business services & agencies",
    desc: "Meetings, client onboarding and communication with less manual work.",
    img: "jedro-stran-panoge-6.webp",
  },
  {
    slug: "other-services",
    n: "08",
    title: "Other service businesses",
    desc: "Whatever your business does with appointments and clients, Jedro+ adapts to your way of working.",
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
      <Nav variant="light" active="/en/industries" />
      <main id="main-content">

      <SubpageHero
        eyebrow="Industries"
        title={
          <>
             For every business working with{" "}
            <span className="grad-text">appointments and clients</span>
          </>
        }
        description={
          <>
             Salons, clinics, studios, garages or agencies — choose your industry and see how Jedro+ can help. </>
        }
        actions={
          <>
            <a className="btn btn--grad btn--lg" href="https://app.jedroplus.com/signup">
               Try for free <span className="arr">→</span>
            </a>
            <a className="btn btn--ghost btn--lg" href="/en/pricing">
               View pricing </a>
          </>
        }
      />

      <section className="section subpage-first panoge-list" id="panoge">
        <div className="wrap">
          <div className="panoge-grid">
            {rows.map((r) => (
              <Link className="pcard reveal" href={`/en/industries/${r.slug}`} key={r.slug}>
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
                     Explore this industry <Arrow />
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
                 Can’t find your industry? </span>
              <h2 style={{ marginTop: 18 }}>
                 If you work with appointments, Jedro+ works for you. </h2>
              <p>
                 Tell us how you work and we’ll set up a solution for your industry. </p>
              <div className="cta-band__btns">
                <a className="btn btn--light btn--lg" href="/en#kontakt">
                   Book a demo <span className="arr">→</span>
                </a>
                <a
                  className="btn btn--ghost btn--lg"
                  href="/en#kontakt"
                  style={{ color: "#fff", borderColor: "rgba(255,255,255,.25)" }}
                >
                   Send an enquiry </a>
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
