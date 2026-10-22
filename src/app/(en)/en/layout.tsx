// Generated from Slovenian source and src/locales/en.json.
import { FontResources } from "@/components/FontResources";
import type { Metadata } from "next";
import "../../globals.css";
import { SITE_URL, DEFAULT_DESCRIPTION } from "@/english/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/english/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Jedro+ | Appointments, clients and reminders",
  description:
    DEFAULT_DESCRIPTION,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  authors: [{ name: "Jedro+" }],
  // Ikon tu ne naštevamo: ročni `icons` prepiše Next.jsovo datotečno
  // konvencijo, zaradi česar apple-icon.png ni prišel v HTML. Zdaj jih Next
  // pobere sam iz src/app/{favicon.ico,icon.png,apple-icon.png}.
  openGraph: {
    title: "Jedro+ | Appointments, clients and reminders",
    description:
      DEFAULT_DESCRIPTION,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/en/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Jedro+ — appointments, clients and reminders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jedro+ | Appointments, clients and reminders",
    description:
      DEFAULT_DESCRIPTION,
    images: ["/en/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head><FontResources /></head>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <JsonLd schema={organizationSchema} />
        <JsonLd schema={websiteSchema} />
        {children}
      </body>
    </html>
  );
}
