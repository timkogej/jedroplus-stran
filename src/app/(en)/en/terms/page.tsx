// Generated from Slovenian source and src/locales/en.json.
import { pageMetadata } from "@/english/lib/seo";
import type { Metadata } from "next";
import { Nav } from "@/english/components/redesign/Nav";
import { Footer } from "@/english/components/redesign/Footer";

export const metadata: Metadata = pageMetadata("/en/terms", {
  title: "Terms of Use | Jedro+",
  description:
    "General terms for using Jedro+, the booking system for service businesses.",
  robots: { index: true, follow: true },
});

export default function PogojiUporabe() {
  return (
    <>
      <Nav variant="plain" active="/en/terms" />
      <main id="main-content">

      {/* HERO */}
      <section className="vhero" style={{ minHeight: "46vh" }}>
        <div className="wrap vhero__in" style={{ paddingBlock: "clamp(124px,17vh,160px) clamp(40px,6vh,72px)" }}>
          <p className="vhero__eyebrow">Legal information</p>
          <hr className="vhero__rule" />
          <h1 className="vhero__h">Terms of Use</h1>
        </div>
      </section>

      {/* VSEBINA */}
      <section className="section">
        <div className="wrap">
          <div className="legal">
            <p className="legal__updated">Last updated: 24 June 2026</p>

            <h2>1. General</h2>
            <p>
               These general terms of use (the “Terms”) govern use of the Jedro+ web application and service (the “Service”) supplied by the provider. By registering for, ordering or using the Service, the user confirms that they have read, understood and accepted the Terms. If you do not agree to the Terms, do not use the Service. </p>

            <h2>2. Description of the Service</h2>
            <p>
               Jedro+ is software as a service (SaaS) for service businesses to manage appointments, client records, reminders, online booking and related communications. The provider reserves the right to upgrade, change or discontinue features for development, maintenance or legal reasons. </p>

            <h2>3. User account</h2>
            <p>
               Use of the Service requires a registered user account. The user must provide accurate and complete information when registering and keep it up to date. The user is responsible for protecting their login details and for all activities performed through their account. Any unauthorised use must be reported to the provider immediately. </p>

            <h2>4. Subscription and payments</h2>
            <p>
               The Service is available in subscription plans as set out in the website pricing. Subscriptions are billed in advance for the selected period. Prices are in euros (EUR). The provider reserves the right to change prices and will inform the user in good time. New prices apply from the next billing period. </p>

            <h2>5. Duration and cancellation</h2>
            <p>
               The subscription runs for the selected period and may renew automatically unless the user cancels it. The user may cancel at any time; cancellation takes effect at the end of the current billing period. The provider may restrict or terminate access to the Service if these Terms are breached. </p>

            <h2>6. User obligations</h2>
            <p>The user agrees not to use the Service for:</p>
            <ul>
              <li>unlawful purposes or in breach of applicable law;</li>
              <li>interfering with the security, integrity or operation of the Service;</li>
              <li>
                 unauthorised access to other users’ or third parties’ data; </li>
              <li>
                 sending unsolicited messages (spam) or content that infringes third-party rights. </li>
            </ul>
            <p>
               The user is solely responsible for the lawful processing of client data entered into the Service and for obtaining any necessary consents. </p>

            <h2>7. Availability and maintenance</h2>
            <p>
               The provider strives for high availability but does not guarantee uninterrupted operation. The Service may be temporarily unavailable due to maintenance, upgrades or circumstances beyond the provider’s reasonable control. Where possible, users will be notified in advance of planned maintenance. </p>

            <h2>8. Limitation of liability</h2>
            <p>
               The Service is provided “as is”. To the fullest extent permitted by applicable law, the provider is not liable for indirect damage, lost profits, lost data or business disruption arising from use of, or inability to use, the Service. The user is responsible for regularly backing up their own data where appropriate. </p>

            <h2>9. Intellectual property</h2>
            <p>
               All intellectual property rights in the Service, including source code, design, branding and content, belong to the provider. A subscription grants the user a non-exclusive, non-transferable right to use the Service under these Terms. Data entered into the Service remains the user’s property. </p>

            <h2>10. Personal data protection</h2>
            <p>
               Personal data processing within the Service is governed by the{" "}
              <a href="/en/privacy">Privacy Policy</a>, which forms an integral part of these Terms. </p>

            <h2>11. Changes to the Terms</h2>
            <p>
               The provider may update these Terms from time to time. Users will be notified appropriately of material changes. Continued use of the Service after changes take effect constitutes acceptance of the updated Terms. </p>

            <h2>12. Jurisdiction and governing law</h2>
            <p>
               These relationships are governed by the law of the Republic of Slovenia. The parties will seek to resolve disputes amicably; failing this, the court with subject-matter jurisdiction in the Republic of Slovenia will have jurisdiction. </p>

            <h2>13. Contact</h2>
            <p>
               For questions about these Terms, contact us at{" "}
              <a href="mailto:info@jedroplus.com">info@jedroplus.com</a>.
            </p>

            <div className="legal__note">
              <p>
                <strong>Note:</strong>  This is a general terms template and is not legal advice. Before publication in production, a lawyer or accountant should review and approve the content to ensure it matches the actual business model, tax treatment and applicable law. </p>
            </div>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </>
  );
}
