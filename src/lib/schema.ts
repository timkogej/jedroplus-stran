// Centralized Schema.org JSON-LD definitions for jedroplus.com.
// Each helper returns a plain object that is serialized via the <JsonLd> component.

import { subscriptionPlans } from "@/lib/pricing";
import { SITE_URL } from "@/lib/seo";
import { receptionistPacks, RECEPTIONIST_PATH } from "@/lib/receptionist";
export { SITE_URL } from "@/lib/seo";

import { organizationIdentity, websiteIdentity, ORGANIZATION_ID, SOFTWARE_APPLICATION_ID, BOOKING_SERVICE_ID, RECEPTIONIST_SERVICE_ID, AGENCY_SERVICE_ID, EU_SERVICE_AREA } from "@/lib/site-identity";
export const organizationSchema = {
  "@context": "https://schema.org", ...organizationIdentity,
  description: "Jedro+ je rezervacijski sistem za storitvena podjetja v Sloveniji. Spletno naročanje terminov, baza strank in pametni AI opomniki, ki zmanjšajo odpovedi.",
};

// Each offer uses the amount actually billed, including yearly totals.
const subscriptionOffers = subscriptionPlans.flatMap((tier) => {
  const price = Number.parseInt(tier.monthlyPrice);
  const base = { "@type": "Offer", name: tier.name, description: tier.description, url: `${SITE_URL}/cenik` };
  if (Number.isNaN(price)) return [base];
  const monthly = { ...base, price: String(price), priceCurrency: "EUR" };
  if (price === 0) return [monthly];
  const yearlyTotal = Number.parseInt(tier.yearlyPrice) * 12;
  return [
    { ...monthly, name: `${tier.name} — mesečno`, priceSpecification: { "@type": "UnitPriceSpecification", price: String(price), priceCurrency: "EUR", unitText: "mesec", valueAddedTaxIncluded: false } },
    { ...base, name: `${tier.name} — letno`, price: String(yearlyTotal), priceCurrency: "EUR", description: `${tier.description} Letni obračun: ${yearlyTotal} € za eno leto, kar ustreza ${tier.yearlyPrice} na mesec.`, priceSpecification: { "@type": "UnitPriceSpecification", price: String(yearlyTotal), priceCurrency: "EUR", unitText: "leto", valueAddedTaxIncluded: false } },
  ];
});


export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": SOFTWARE_APPLICATION_ID,
  name: "Jedro+",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: `${SITE_URL}/sl`,
  description:
    "Jedro+ je rezervacijski sistem za storitvena podjetja: spletno naročanje terminov, baza strank in pametni AI opomniki, ki zmanjšajo odpovedi.",
  publisher: { "@id": ORGANIZATION_ID },
  offers: subscriptionOffers,
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": AGENCY_SERVICE_ID,
  name: "Jedro+ Agencija",
  description:
    "Jedro+ Agencija je AI agencija za storitvena podjetja: razvijamo pametne rešitve za naročanje, opomnike in avtomatizacijo, prilagojene vaši dejavnosti.",
  url: `${SITE_URL}/agencija`,
  provider: { "@id": ORGANIZATION_ID },
  areaServed: {
    "@type": "Country",
    name: "Slovenija",
  },
  serviceType: "AI agencija za storitvena podjetja",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Storitve",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Poslovni sistemi",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Komunikacijski sistemi",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Spletne strani",
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
        name: "Domov",
        item: `${SITE_URL}/sl`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Panoge",
        item: `${SITE_URL}/panoge`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name,
        item: `${SITE_URL}/panoge/${slug}`,
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
        name: "Domov",
        item: `${SITE_URL}/sl`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Funkcije",
        item: `${SITE_URL}/funkcije`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name,
        item: `${SITE_URL}/funkcije/${slug}`,
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
        name: "Domov",
        item: `${SITE_URL}/sl`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Primerjava",
        item: `${SITE_URL}/primerjava`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name,
        item: `${SITE_URL}/primerjava/${slug}`,
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
    name: "Primerjave rezervacijskih sistemov",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.title,
      url: `${SITE_URL}/primerjava/${it.slug}`,
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
        name: "Domov",
        item: `${SITE_URL}/sl`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Davčna blagajna",
        item: `${SITE_URL}/davcna-blagajna`,
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
      { "@type": "ListItem", position: 1, name: "Domov", item: `${SITE_URL}/sl` },
      { "@type": "ListItem", position: 2, name: "Funkcije", item: `${SITE_URL}/funkcije` },
      { "@type": "ListItem", position: 3, name: "Receptionist+", item: `${SITE_URL}/funkcije/receptionist-plus` },
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
        name: "Domov",
        item: `${SITE_URL}/sl`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `${SITE_URL}/blog/${slug}`,
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
    url: `${SITE_URL}/blog/${slug}`,
    image: `${SITE_URL}${image}`,
    author: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "Jedro+",
      url: `${SITE_URL}/sl`,
    },
    publisher: {
      "@id": ORGANIZATION_ID,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${slug}`,
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
  name: "Jedro+ — rezervacijski sistem",
  serviceType: "Rezervacijski sistem za storitvena podjetja",
  url: `${SITE_URL}/cenik`,
  provider: { "@id": ORGANIZATION_ID },
  areaServed: EU_SERVICE_AREA,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cenik Jedro+",
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
  serviceType: "AI recepcionistka za storitvena podjetja",
  url: `${SITE_URL}${RECEPTIONIST_PATH}`,
  description: "Receptionist+ sprejema telefonske klice in govori v jeziku stranke. Rezervira, prestavi ali odpove termin, odgovori na vprašanja, pošlje opomnik ter zabeleži dogovor v Jedro+. Ob prvi aktivaciji prejmete 30 brezplačnih minut za preizkus.",
  provider: { "@id": ORGANIZATION_ID },
  areaServed: EU_SERVICE_AREA,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Minute za Receptionist+",
    itemListElement: receptionistPacks.map((pack) => ({
      "@type": "Offer",
      name: `Receptionist+ ${pack.name}`,
      description: `${pack.credits} minut klicev. Enkratni nakup, ločeno od naročnine za Jedro+.`,
      price: pack.price,
      priceSpecification: { "@type": "PriceSpecification", price: pack.price, priceCurrency: "EUR", valueAddedTaxIncluded: false },
      priceCurrency: "EUR",
      url: `${SITE_URL}${RECEPTIONIST_PATH}#cenik-receptionist`,
      eligibleQuantity: { "@type": "QuantitativeValue", value: pack.credits, unitCode: "MIN", unitText: "minuta klica" },
      itemOffered: { "@type": "Service", "@id": RECEPTIONIST_SERVICE_ID, name: "Receptionist+" },
    })),
  },
};
