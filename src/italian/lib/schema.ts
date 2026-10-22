// Generated from Slovenian source and src/locales/it.json.
// Centralized Schema.org JSON-LD definitions for jedroplus.com.
// Each helper returns a plain object that is serialized via the <JsonLd> component.

import { subscriptionPlans } from "@/italian/lib/pricing";
import { SITE_URL } from "@/italian/lib/seo";
import { receptionistPacks, RECEPTIONIST_PATH } from "@/italian/lib/receptionist";
export { SITE_URL } from "@/italian/lib/seo";

import { organizationIdentity, websiteIdentity, ORGANIZATION_ID, SOFTWARE_APPLICATION_ID, BOOKING_SERVICE_ID, RECEPTIONIST_SERVICE_ID, AGENCY_SERVICE_ID, EU_SERVICE_AREA } from "@/lib/site-identity";
export const organizationSchema = {
  "@context": "https://schema.org", ...organizationIdentity,
  description: "Jedro+ è un software di prenotazione per imprese di servizi in Slovenia, con appuntamenti online, schede clienti e promemoria AI per ridurre le cancellazioni.",
};

// Each offer uses the amount actually billed, including yearly totals.
const subscriptionOffers = subscriptionPlans.flatMap((tier) => {
  const price = Number.parseInt(tier.monthlyPrice);
  const base = { "@type": "Offer", name: tier.name, description: tier.description, url: `${SITE_URL}/it/prezzi` };
  if (Number.isNaN(price)) return [base];
  const monthly = { ...base, price: String(price), priceCurrency: "EUR" };
  if (price === 0) return [monthly];
  const yearlyTotal = Number.parseInt(tier.yearlyPrice) * 12;
  return [
    { ...monthly, name: `${tier.name} — mensile`, priceSpecification: { "@type": "UnitPriceSpecification", price: String(price), priceCurrency: "EUR", unitText: "mese", valueAddedTaxIncluded: false } },
    { ...base, name: `${tier.name} — annuale`, price: String(yearlyTotal), priceCurrency: "EUR", description: `${tier.description} Fatturazione annuale: ${yearlyTotal} € per un anno, equivalenti a ${tier.yearlyPrice} al mese.`, priceSpecification: { "@type": "UnitPriceSpecification", price: String(yearlyTotal), priceCurrency: "EUR", unitText: "anno", valueAddedTaxIncluded: false } },
  ];
});


export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": SOFTWARE_APPLICATION_ID,
  name: "Jedro+",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: `${SITE_URL}/it`,
  description:
    "Jedro+ è un software per imprese di servizi: prenotazioni online, schede clienti e promemoria AI intelligenti che riducono le cancellazioni.",
  publisher: { "@id": ORGANIZATION_ID },
  offers: subscriptionOffers,
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": AGENCY_SERVICE_ID,
  name: "Jedro+ Agenzia",
  description:
    "Jedro+ Agenzia sviluppa soluzioni AI per prenotazioni, promemoria e automazioni su misura per imprese di servizi.",
  url: `${SITE_URL}/it/agenzia`,
  provider: { "@id": ORGANIZATION_ID },
  areaServed: {
    "@type": "Country",
    name: "Slovenia",
  },
  serviceType: "Agenzia AI per imprese di servizi",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servizi",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sistemi gestionali",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sistemi di comunicazione",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Siti web",
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
        item: `${SITE_URL}/it`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Settori",
        item: `${SITE_URL}/it/settori`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name,
        item: `${SITE_URL}/it/settori/${slug}`,
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
        item: `${SITE_URL}/it`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Funzionalità",
        item: `${SITE_URL}/it/funzionalita`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name,
        item: `${SITE_URL}/it/funzionalita/${slug}`,
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
        item: `${SITE_URL}/it`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Confronto",
        item: `${SITE_URL}/it/confronti`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name,
        item: `${SITE_URL}/it/confronti/${slug}`,
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
    name: "Confronti tra software di prenotazione",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.title,
      url: `${SITE_URL}/it/confronti/${it.slug}`,
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
        item: `${SITE_URL}/it`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Registratore di cassa fiscale",
        item: `${SITE_URL}/it/cassa-fiscale`,
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
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/it` },
      { "@type": "ListItem", position: 2, name: "Funzionalità", item: `${SITE_URL}/it/funzionalita` },
      { "@type": "ListItem", position: 3, name: "Receptionist+", item: `${SITE_URL}/it/funzionalita/receptionist-plus` },
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
        item: `${SITE_URL}/it`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/it/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `${SITE_URL}/it/blog/${slug}`,
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
    url: `${SITE_URL}/it/blog/${slug}`,
    image: `${SITE_URL}${image}`,
    author: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "Jedro+",
      url: `${SITE_URL}/it`,
    },
    publisher: {
      "@id": ORGANIZATION_ID,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/it/blog/${slug}`,
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
  name: "Jedro+ — Software di prenotazione",
  serviceType: "Software di prenotazione per imprese di servizi",
  url: `${SITE_URL}/it/prezzi`,
  provider: { "@id": ORGANIZATION_ID },
  areaServed: EU_SERVICE_AREA,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Prezzi Jedro+",
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
  serviceType: "Receptionist AI per imprese di servizi",
  url: `${SITE_URL}${RECEPTIONIST_PATH}`,
  description: "Receptionist+ risponde al telefono nella lingua del cliente, prenota, sposta o annulla appuntamenti, risponde alle domande, invia promemoria e registra gli accordi in Jedro+. Alla prima attivazione ricevi 30 minuti gratuiti di prova.",
  provider: { "@id": ORGANIZATION_ID },
  areaServed: EU_SERVICE_AREA,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Minuti per Receptionist+",
    itemListElement: receptionistPacks.map((pack) => ({
      "@type": "Offer",
      name: `Receptionist+ ${pack.name}`,
      description: `${pack.credits} minuti di chiamata. Acquisto singolo, separato dall’abbonamento Jedro+.`,
      price: pack.price,
      priceSpecification: { "@type": "PriceSpecification", price: pack.price, priceCurrency: "EUR", valueAddedTaxIncluded: false },
      priceCurrency: "EUR",
      url: `${SITE_URL}${RECEPTIONIST_PATH}#cenik-receptionist`,
      eligibleQuantity: { "@type": "QuantitativeValue", value: pack.credits, unitCode: "MIN", unitText: "minuto di chiamata" },
      itemOffered: { "@type": "Service", "@id": RECEPTIONIST_SERVICE_ID, name: "Receptionist+" },
    })),
  },
};
