// Centralized Schema.org JSON-LD definitions for jedroplus.com.
// Each helper returns a plain object that is serialized via the <JsonLd> component.

export const SITE_URL = "https://jedroplus.com";

// Update these with the real profiles when available.
const SAME_AS = [
  "https://www.linkedin.com/company/jedroplus",
  "https://www.instagram.com/jedroplus",
];

const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Jedro+",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  description:
    "Jedro+ je rezervacijski sistem za storitvena podjetja v Sloveniji. Spletno naročanje terminov, baza strank in pametni AI opomniki, ki zmanjšajo odpovedi.",
  email: "info@jedroplus.com",
  telephone: "+386 68 663 410",
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@jedroplus.com",
    telephone: "+386 68 663 410",
    contactType: "customer support",
    areaServed: "SI",
    availableLanguage: ["Slovenian"],
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "SI",
  },
  sameAs: SAME_AS,
};

// Pricing mirrors src/components/redesign/PricingTiers.tsx (monthly prices).
export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Jedro+",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: SITE_URL,
  description:
    "Jedro+ je rezervacijski sistem za storitvena podjetja: spletno naročanje terminov, baza strank in pametni AI opomniki, ki zmanjšajo odpovedi.",
  publisher: { "@id": ORGANIZATION_ID },
  offers: [
    {
      "@type": "Offer",
      name: "Jedro Plus",
      price: "19",
      priceCurrency: "EUR",
      description: "Mesečna naročnina — koledar, baze in opomniki.",
    },
    {
      "@type": "Offer",
      name: "Jedro Pro",
      price: "35",
      priceCurrency: "EUR",
      description:
        "Mesečna naročnina — obveščanje izgubljenih strank, SMS opomniki in napredne komunikacijske funkcije.",
    },
    {
      "@type": "Offer",
      name: "Enterprise",
      priceCurrency: "EUR",
      description: "Cena po dogovoru — prilagoditve in custom AI funkcije.",
    },
  ],
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Jedro+ Agencija",
  description:
    "Jedro+ Agencija je AI agencija za storitvena podjetja: razvijamo pametne rešitve za naročanje, opomnike in avtomatizacijo, prilagojene vaši dejavnosti.",
  url: `${SITE_URL}/agencija`,
  parentOrganization: { "@id": ORGANIZATION_ID },
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
        item: SITE_URL,
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
        item: SITE_URL,
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

// FAQPage — seznam vprašanj/odgovorov za rich rezultate.
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

// One Product per pricing tier, mirroring PricingTiers.tsx.
type PricingTier = {
  name: string;
  price?: string; // monthly EUR amount; omitted for "Po dogovoru"
  description: string;
};

const pricingTiers: PricingTier[] = [
  {
    name: "Jedro Plus",
    price: "19",
    description:
      "Za podjetja, ki želijo urejen sistem in jasen pregled. Koledar, baze in opomniki, ki brez zapletov uredijo vsakdan.",
  },
  {
    name: "Jedro Pro",
    price: "35",
    description:
      "Za podjetja, ki želijo več zasedenosti in manj praznih terminov. Vključuje obveščanje izgubljenih strank, SMS opomnike in napredne komunikacijske funkcije.",
  },
  {
    name: "Enterprise",
    description:
      "Za podjetja s posebnimi zahtevami in prilagoditvami. Custom dizajni, custom funkcije in celoten sistem po meri vašega poslovanja.",
  },
];

export const pricingProductsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Cenik Jedro+",
  itemListElement: pricingTiers.map((tier, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: tier.name,
      description: tier.description,
      brand: { "@type": "Brand", name: "Jedro+" },
      offers: tier.price
        ? {
            "@type": "Offer",
            price: tier.price,
            priceCurrency: "EUR",
            url: `${SITE_URL}/cenik`,
            availability: "https://schema.org/InStock",
          }
        : {
            "@type": "Offer",
            priceCurrency: "EUR",
            url: `${SITE_URL}/cenik`,
            availability: "https://schema.org/InStock",
            description: "Cena po dogovoru",
          },
    },
  })),
};
