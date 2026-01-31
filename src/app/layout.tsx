import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jedro+ | Sistem za termine, stranke in opomnike",
  description:
    "Jedro+ je all-in-one aplikacija za storitvena podjetja. Združi koledar terminov, baze strank in storitev, personalizirane opomnike, spletno naročanje ter pametne AI funkcije v eno enostavno, pregledno rešitev.",
  keywords: [
    "termini",
    "stranke",
    "opomniki",
    "booking",
    "naročanje",
    "salon",
    "klinika",
    "CRM",
    "storitvena podjetja",
    "Slovenija",
  ],
  authors: [{ name: "Jedro+" }],
  openGraph: {
    title: "Jedro+ | Sistem za termine, stranke in opomnike",
    description:
      "All-in-one aplikacija za storitvena podjetja. Koledar, baze, opomniki, booking in AI na enem mestu.",
    type: "website",
    locale: "sl_SI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sl">
      <body className="antialiased">{children}</body>
    </html>
  );
}
