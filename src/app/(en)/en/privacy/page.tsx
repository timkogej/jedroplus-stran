// Generated from Slovenian source and src/locales/en.json.
import { pageMetadata } from "@/english/lib/seo";
import type { Metadata } from "next";
import { Nav } from "@/english/components/redesign/Nav";
import { Footer } from "@/english/components/redesign/Footer";

export const metadata: Metadata = pageMetadata("/en/privacy", {
  title: "Privacy Policy | Jedro+",
  description:
    "Jedro+ Privacy Policy — how we collect, process and protect personal data under the General Data Protection Regulation (GDPR).",
  robots: { index: true, follow: true },
});

export default function Zasebnost() {
  return (
    <>
      <Nav variant="plain" active="/en/privacy" />
      <main id="main-content">

      {/* HERO */}
      <section className="vhero" style={{ minHeight: "46vh" }}>
        <div className="wrap vhero__in" style={{ paddingBlock: "clamp(124px,17vh,160px) clamp(40px,6vh,72px)" }}>
          <p className="vhero__eyebrow">Legal information</p>
          <hr className="vhero__rule" />
          <h1 className="vhero__h">Privacy Policy</h1>
        </div>
      </section>

      {/* VSEBINA */}
      <section className="section">
        <div className="wrap">
          <div className="legal">
            <p className="legal__updated">Last updated: 24 June 2026</p>

            <p>
               Your privacy matters to us. This Privacy Policy explains what personal data we collect, why we process it, the legal bases for processing and your rights. Processing follows Regulation (EU) 2016/679 (GDPR) and Slovenia’s Personal Data Protection Act (ZVOP-2). </p>

            <h2>1. Data controller</h2>
            <p>
               The personal data controller is: </p>
            <ul>
              <li>
                <strong>Sonja Žužek s.p.</strong>
              </li>
              <li>Tax number: 97477621</li>
              <li>
                 Email:{" "}
                <a href="mailto:info@jedroplus.com">info@jedroplus.com</a>
              </li>
            </ul>
            <p>
               For questions about personal data processing or exercising your rights, contact us at the email address above. </p>

            <h2>2. Data we collect</h2>
            <p>Depending on your interaction with us, we process the following categories:</p>
            <ul>
              <li>
                <strong>Enquiry and contact details:</strong>  name, email address, telephone number, company name and message content. </li>
              <li>
                <strong>Service user data:</strong>  account details, login information and settings. </li>
              <li>
                <strong>Data entered by users:</strong>
                 information about their clients and appointments (we act as processor in this case — see section 7). </li>
              <li>
                <strong>Technical data:</strong>  IP address, device and browser type, and usage data collected through cookies and similar technologies. </li>
            </ul>

            <h2>3. Purposes and legal bases</h2>
            <ul>
              <li>
                <strong>Responding to enquiries and communicating</strong>  — legal basis: steps prior to entering a contract or legitimate interests (GDPR Article 6(1)(b) and (f)). </li>
              <li>
                <strong>Providing and managing the Service</strong>  — legal basis: performance of a contract (GDPR Article 6(1)(b)). </li>
              <li>
                <strong>Compliance with legal obligations</strong>  (such as accounting and tax rules) — legal basis: legal obligation (GDPR Article 6(1)(c)). </li>
              <li>
                <strong>Service improvements and analytics</strong>  — legal basis: legitimate interests or consent for optional cookies (GDPR Article 6(1)(f) or 6(1)(a)). </li>
            </ul>

            <h2>4. Retention</h2>
            <p>
               We retain personal data only as long as needed for the purpose for which it was collected, or until statutory retention periods expire (for example, for accounting records). Once the processing purpose ends, we delete or anonymise the data. </p>

            <h2>5. Sharing data with third parties</h2>
            <p>
               We do not sell personal data. We may share data with trusted processors that help us provide the Service, such as hosting providers, email and SMS infrastructure providers and automation tools. We have appropriate data processing agreements with all processors. Where data is transferred outside the EU/EEA, we ensure appropriate safeguards under the GDPR. </p>

            <h2>6. Cookies</h2>
            <p>
               The website uses cookies for essential operation and, with your consent, analytics and improvements to the user experience. You can change cookie settings in your browser at any time. </p>

            <h2>7. Processing users’ client data</h2>
            <p>
               When a user enters their clients’ personal data into Jedro+, that user is the controller and we act as processor. We process this data only on the user’s instructions and to provide the Service, as set out in a data processing agreement. </p>

            <h2>8. Your rights</h2>
            <p>Under the GDPR, you have the following rights:</p>
            <ul>
              <li>access to your personal data;</li>
              <li>rectification of inaccurate data;</li>
              <li>erasure (the “right to be forgotten”);</li>
              <li>restriction of processing;</li>
              <li>data portability;</li>
              <li>
                 objection to processing based on legitimate interests; </li>
              <li>
                 withdrawal of consent where processing is based on consent. </li>
            </ul>
            <p>
               To exercise your rights, email us at{" "}
              <a href="mailto:info@jedroplus.com">info@jedroplus.com</a>. If you believe the processing of your data breaches the rules, you may lodge a complaint with the supervisory authority, the Information Commissioner of the Republic of Slovenia ( <a href="https://www.ip-rs.si" target="_blank" rel="noopener noreferrer">
                www.ip-rs.si
              </a>
              ).
            </p>

            <h2>9. Data security</h2>
            <p>
               We implement appropriate technical and organisational measures to protect personal data against unauthorised access, loss, alteration or disclosure. </p>

            <h2>10. Changes to this Privacy Policy</h2>
            <p>
               We may update this Privacy Policy from time to time. The current version is always published on this page with the date of the latest update. </p>

            <div className="legal__note">
              <p>
                <strong>Note:</strong>  This is a privacy policy template and is not legal advice. Before publication in production, a lawyer or data protection officer should review and approve it, especially the actual processor list, retention periods and cookie descriptions, to ensure it reflects the real arrangements and complies with the GDPR. </p>
            </div>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </>
  );
}
