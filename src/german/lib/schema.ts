// Generated from Slovenian source and src/locales/de.json.
// Centralized Schema.org JSON-LD definitions for jedroplus.com.
// Each helper returns a plain object that is serialized via the <JsonLd> component.

import { parsePrice, formatEuro } from "@/german/lib/price";
import { subscriptionPlans } from "@/german/lib/pricing";
import { SITE_URL } from "@/german/lib/seo";
import { receptionistPacks, RECEPTIONIST_PATH } from "@/german/lib/receptionist";
export { SITE_URL } from "@/german/lib/seo";

import { organizationIdentity, websiteIdentity, ORGANIZATION_ID, SOFTWARE_APPLICATION_ID, BOOKING_SERVICE_ID, RECEPTIONIST_SERVICE_ID, AGENCY_SERVICE_ID, EU_SERVICE_AREA } from "@/lib/site-identity";
export const organizationSchema = {
  "@context": "https://schema.org", ...organizationIdentity,
  description: "Jedro+ ist eine Buchungssoftware für Dienstleistungsbetriebe in Slowenien mit Onlinebuchungen, Kundenprofilen und intelligenten KI-Erinnerungen für weniger Absagen.",
};

// Each offer uses the amount actually billed, including yearly totals.
const subscriptionOffers = subscriptionPlans.flatMap((tier) => {
  const price = parsePrice(tier.monthlyPrice);
  const base = { "@type": "Offer", name: tier.name, description: tier.description, url: `${SITE_URL}/de/preise` };
  if (Number.isNaN(price)) return [base];
  const monthly = { ...base, price: price.toFixed(2), priceCurrency: "EUR" };
  if (price === 0) return [monthly];
  const yearlyTotal = Math.round(parsePrice(tier.yearlyPrice) * 12 * 100) / 100;
  return [
    { ...monthly, name: `${tier.name} — monatlich`, priceSpecification: { "@type": "UnitPriceSpecification", price: price.toFixed(2), priceCurrency: "EUR", unitText: "Monat", valueAddedTaxIncluded: false } },
    { ...base, name: `${tier.name} — jährlich`, price: yearlyTotal.toFixed(2), priceCurrency: "EUR", description: `${tier.description} Jährliche Abrechnung: ${formatEuro(yearlyTotal)} € für ein Jahr, entsprechend ${tier.yearlyPrice} pro Monat.`, priceSpecification: { "@type": "UnitPriceSpecification", price: yearlyTotal.toFixed(2), priceCurrency: "EUR", unitText: "Jahr", valueAddedTaxIncluded: false } },
  ];
});


export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": SOFTWARE_APPLICATION_ID,
  name: "Jedro+",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: `${SITE_URL}/de`,
  description:
    "Jedro+ ist eine Buchungssoftware für Dienstleistungsbetriebe: Online-Terminbuchung, Kundenprofile und intelligente KI-Erinnerungen, die Absagen reduzieren.",
  publisher: { "@id": ORGANIZATION_ID },
  offers: subscriptionOffers,
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": AGENCY_SERVICE_ID,
  name: "Jedro+-Agentur",
  description:
    "Jedro+ Agentur entwickelt KI-Lösungen für Buchungen, Erinnerungen und Automatisierung, passend für Dienstleistungsunternehmen.",
  url: `${SITE_URL}/de/agentur`,
  provider: { "@id": ORGANIZATION_ID },
  areaServed: {
    "@type": "Country",
    name: "Slowenien",
  },
  serviceType: "KI-Agentur für Dienstleistungsbetriebe",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Leistungen",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Unternehmenssysteme",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kommunikationssysteme",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Websites",
        },
      },
    ],
  },
};

// Domov > Panoge > [ime panoge]
export function breadcrumbSchema(slug: string, name: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Startseite",
        item: `${SITE_URL}/de`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Branchen",
        item: `${SITE_URL}/de/branchen`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name,
        item: `${SITE_URL}/de/branchen/${slug}`,
      },
    ],
  };
}

// Domov > Funkcije > [ime funkcije]
export function funkcijeBreadcrumbSchema(slug: string, name: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Startseite",
        item: `${SITE_URL}/de`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Funktionen",
        item: `${SITE_URL}/de/funktionen`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name,
        item: `${SITE_URL}/de/funktionen/${slug}`,
      },
    ],
  };
}

// Domov > Primerjava > [naslov primerjave]
export function primerjavaBreadcrumbSchema(slug: string, name: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Startseite",
        item: `${SITE_URL}/de`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Vergleich",
        item: `${SITE_URL}/de/vergleich`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name,
        item: `${SITE_URL}/de/vergleich/${slug}`,
      },
    ],
  };
}

// ItemList za /primerjava (hub) — seznam posameznih primerjav.
export function primerjavaItemListSchema(
  items: { slug: string; title: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Buchungssoftware im Vergleich",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.title,
      url: `${SITE_URL}/de/vergleich/${it.slug}`,
    })),
  };
}

// Domov > Davčna blagajna
export function davcnaBlagajnaBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Startseite",
        item: `${SITE_URL}/de`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Fiskalkasse",
        item: `${SITE_URL}/de/fiskalkasse`,
      },
    ],
  };
}

// Domov > Funkcije > Receptionist+
export function receptionistBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: `${SITE_URL}/de` },
      { "@type": "ListItem", position: 2, name: "Funktionen", item: `${SITE_URL}/de/funktionen` },
      { "@type": "ListItem", position: 3, name: "Receptionist+", item: `${SITE_URL}/de/funktionen/receptionist-plus` },
    ],
  };
}

// Domov > Blog > [naslov članka]
export function blogBreadcrumbSchema(slug: string, title: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Startseite",
        item: `${SITE_URL}/de`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/de/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `${SITE_URL}/de/blog/${slug}`,
      },
    ],
  };
}

// BlogPosting — posamezen članek na /blog/[slug].
export function blogPostingSchema({
  slug,
  title,
  description,
  datePublished,
  dateModified,
  image,
}: {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished,
    dateModified: dateModified ?? datePublished,
    url: `${SITE_URL}/de/blog/${slug}`,
    image: `${SITE_URL}${image}`,
    author: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "Jedro+",
      url: `${SITE_URL}/de`,
    },
    publisher: {
      "@id": ORGANIZATION_ID,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/de/blog/${slug}`,
    },
  };
}

// FAQPage mirrors the visible questions and answers; rich results are not guaranteed.
export function faqPageSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

// SaaS pricing is modeled as a Service with an OfferCatalog instead of
// Product/Offer. Product/Offer triggers Google's e-commerce validators
// (Product snippets, Merchant listings), which then demand image,
// shippingDetails and hasMerchantReturnPolicy — none of which apply to a
// software subscription. Service + OfferCatalog keeps the tier names and
// prices machine-readable (for GEO / AI) without those requirements.
export const pricingProductsSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": BOOKING_SERVICE_ID,
  name: "Jedro+ — Buchungssoftware",
  serviceType: "Buchungssoftware für Dienstleistungsbetriebe",
  url: `${SITE_URL}/de/preise`,
  provider: { "@id": ORGANIZATION_ID },
  areaServed: EU_SERVICE_AREA,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Jedro+-Preise",
    itemListElement: subscriptionOffers,
  },
};


export const websiteSchema = {
  "@context": "https://schema.org", ...websiteIdentity,
};

export const receptionistServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": RECEPTIONIST_SERVICE_ID,
  name: "Receptionist+",
  serviceType: "KI-Rezeptionistin für Dienstleistungsbetriebe",
  url: `${SITE_URL}${RECEPTIONIST_PATH}`,
  description: "Receptionist+ nimmt Anrufe in der Sprache des Kunden entgegen, bucht, verschiebt oder storniert Termine, beantwortet Fragen, sendet Erinnerungen und dokumentiert Vereinbarungen in Jedro+. Bei der ersten Aktivierung sind 30 kostenlose Testminuten enthalten.",
  provider: { "@id": ORGANIZATION_ID },
  areaServed: EU_SERVICE_AREA,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Minuten für Receptionist+",
    itemListElement: receptionistPacks.map((pack) => ({
      "@type": "Offer",
      name: `Receptionist+ ${pack.name}`,
      description: `${pack.credits} Gesprächsminuten. Einmaliger Kauf, separat zu deinem Jedro+-Abonnement.`,
      price: pack.price,
      priceSpecification: { "@type": "PriceSpecification", price: pack.price, priceCurrency: "EUR", valueAddedTaxIncluded: false },
      priceCurrency: "EUR",
      url: `${SITE_URL}${RECEPTIONIST_PATH}#cenik-receptionist`,
      eligibleQuantity: { "@type": "QuantitativeValue", value: pack.credits, unitCode: "MIN", unitText: "Gesprächsminute" },
      itemOffered: { "@type": "Service", "@id": RECEPTIONIST_SERVICE_ID, name: "Receptionist+" },
    })),
  },
};
