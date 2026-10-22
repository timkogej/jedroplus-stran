// Generated from Slovenian source and src/locales/en.json.
// Centralized Schema.org JSON-LD definitions for jedroplus.com.
// Each helper returns a plain object that is serialized via the <JsonLd> component.

import { subscriptionPlans } from "@/english/lib/pricing";
import { SITE_URL } from "@/english/lib/seo";
import { receptionistPacks, RECEPTIONIST_PATH } from "@/english/lib/receptionist";
export { SITE_URL } from "@/english/lib/seo";

import { organizationIdentity, websiteIdentity, ORGANIZATION_ID, SOFTWARE_APPLICATION_ID, BOOKING_SERVICE_ID, RECEPTIONIST_SERVICE_ID, AGENCY_SERVICE_ID, EU_SERVICE_AREA } from "@/lib/site-identity";
export const organizationSchema = {
  "@context": "https://schema.org", ...organizationIdentity,
  description: "Jedro+ is booking software for service businesses in Slovenia, with online appointments, client records and smart AI reminders to reduce cancellations.",
};

// Each offer uses the amount actually billed, including yearly totals.
const subscriptionOffers = subscriptionPlans.flatMap((tier) => {
  const price = Number.parseInt(tier.monthlyPrice);
  const base = { "@type": "Offer", name: tier.name, description: tier.description, url: `${SITE_URL}/en/pricing` };
  if (Number.isNaN(price)) return [base];
  const monthly = { ...base, price: String(price), priceCurrency: "EUR" };
  if (price === 0) return [monthly];
  const yearlyTotal = Number.parseInt(tier.yearlyPrice) * 12;
  return [
    { ...monthly, name: `${tier.name} — monthly`, priceSpecification: { "@type": "UnitPriceSpecification", price: String(price), priceCurrency: "EUR", unitText: "month", valueAddedTaxIncluded: false } },
    { ...base, name: `${tier.name} — yearly`, price: String(yearlyTotal), priceCurrency: "EUR", description: `${tier.description} Annual billing: ${yearlyTotal} € for one year, equivalent to ${tier.yearlyPrice} per month.`, priceSpecification: { "@type": "UnitPriceSpecification", price: String(yearlyTotal), priceCurrency: "EUR", unitText: "year", valueAddedTaxIncluded: false } },
  ];
});


export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": SOFTWARE_APPLICATION_ID,
  name: "Jedro+",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: `${SITE_URL}/en`,
  description:
    "Jedro+ is booking software for service businesses: online appointment booking, client records and smart AI reminders that reduce cancellations.",
  publisher: { "@id": ORGANIZATION_ID },
  offers: subscriptionOffers,
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": AGENCY_SERVICE_ID,
  name: "Jedro+ Agency",
  description:
    "Jedro+ Agency builds AI booking, reminder and automation solutions tailored to service businesses.",
  url: `${SITE_URL}/en/agency`,
  provider: { "@id": ORGANIZATION_ID },
  areaServed: {
    "@type": "Country",
    name: "Slovenia",
  },
  serviceType: "AI agency for service businesses",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business systems",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Communication systems",
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
        name: "Home",
        item: `${SITE_URL}/en`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Industries",
        item: `${SITE_URL}/en/industries`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name,
        item: `${SITE_URL}/en/industries/${slug}`,
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
        name: "Home",
        item: `${SITE_URL}/en`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Features",
        item: `${SITE_URL}/en/features`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name,
        item: `${SITE_URL}/en/features/${slug}`,
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
        name: "Home",
        item: `${SITE_URL}/en`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Comparison",
        item: `${SITE_URL}/en/compare`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name,
        item: `${SITE_URL}/en/compare/${slug}`,
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
    name: "Booking software comparisons",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.title,
      url: `${SITE_URL}/en/compare/${it.slug}`,
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
        name: "Home",
        item: `${SITE_URL}/en`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Fiscal cash register",
        item: `${SITE_URL}/en/fiscal-cash-register`,
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
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/en` },
      { "@type": "ListItem", position: 2, name: "Features", item: `${SITE_URL}/en/features` },
      { "@type": "ListItem", position: 3, name: "Receptionist+", item: `${SITE_URL}/en/features/receptionist-plus` },
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
        name: "Home",
        item: `${SITE_URL}/en`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/en/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `${SITE_URL}/en/blog/${slug}`,
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
    url: `${SITE_URL}/en/blog/${slug}`,
    image: `${SITE_URL}${image}`,
    author: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "Jedro+",
      url: `${SITE_URL}/en`,
    },
    publisher: {
      "@id": ORGANIZATION_ID,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/en/blog/${slug}`,
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
  name: "Jedro+ — booking software",
  serviceType: "Booking software for service businesses",
  url: `${SITE_URL}/en/pricing`,
  provider: { "@id": ORGANIZATION_ID },
  areaServed: EU_SERVICE_AREA,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Jedro+ pricing",
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
  serviceType: "AI receptionist for service businesses",
  url: `${SITE_URL}${RECEPTIONIST_PATH}`,
  description: "Receptionist+ answers phone calls in the client’s language, books, reschedules or cancels appointments, answers questions, sends reminders and records agreements in Jedro+. First activation includes 30 free trial minutes.",
  provider: { "@id": ORGANIZATION_ID },
  areaServed: EU_SERVICE_AREA,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Receptionist+ minutes",
    itemListElement: receptionistPacks.map((pack) => ({
      "@type": "Offer",
      name: `Receptionist+ ${pack.name}`,
      description: `${pack.credits} call minutes. One-time purchase, separate from your Jedro+ subscription.`,
      price: pack.price,
      priceSpecification: { "@type": "PriceSpecification", price: pack.price, priceCurrency: "EUR", valueAddedTaxIncluded: false },
      priceCurrency: "EUR",
      url: `${SITE_URL}${RECEPTIONIST_PATH}#cenik-receptionist`,
      eligibleQuantity: { "@type": "QuantitativeValue", value: pack.credits, unitCode: "MIN", unitText: "call minute" },
      itemOffered: { "@type": "Service", "@id": RECEPTIONIST_SERVICE_ID, name: "Receptionist+" },
    })),
  },
};
