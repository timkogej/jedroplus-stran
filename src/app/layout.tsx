import type { Metadata } from "next";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jedroplus.com"),
  title: "Jedro+ | Sistem za termine, stranke in opomnike",
  description:
    "Jedro+ je rezervacijski sistem za storitvena podjetja v Sloveniji. Spletno naročanje terminov, baza strank in pametni AI opomniki, ki zmanjšajo odpovedi.",
  authors: [{ name: "Jedro+" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Jedro+ | Sistem za termine, stranke in opomnike",
    description:
      "Jedro+ je rezervacijski sistem za storitvena podjetja v Sloveniji. Spletno naročanje terminov, baza strank in pametni AI opomniki, ki zmanjšajo odpovedi.",
    type: "website",
    locale: "sl_SI",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Jedro+ — sistem za termine, stranke in opomnike",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jedro+ | Sistem za termine, stranke in opomnike",
    description:
      "Jedro+ je rezervacijski sistem za storitvena podjetja v Sloveniji. Spletno naročanje terminov, baza strank in pametni AI opomniki, ki zmanjšajo odpovedi.",
    images: ["/og-default.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sl-SI">
      <body>
        <JsonLd schema={organizationSchema} />
        {children}
      </body>
    </html>
  );
}
