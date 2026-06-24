import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/schema";
import { panogeSlugs } from "@/components/redesign/panoge-data";
import { funkcijeSlugs } from "@/components/redesign/funkcije-data";

// Sitemap se gradi samodejno iz slug seznamov, da ostane sinhroniziran
// z dejanskimi pod-stranmi (/panoge/[slug] in /funkcije/[slug]).
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const home: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  // Glavne strani
  const mainPages: MetadataRoute.Sitemap = [
    "/funkcije",
    "/panoge",
    "/agencija",
    "/cenik",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Panožne pod-strani (8) — /panoge/<slug>
  const panogePages: MetadataRoute.Sitemap = panogeSlugs.map((slug) => ({
    url: `${SITE_URL}/panoge/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Funkcijske pod-strani (4) — /funkcije/<slug>
  const funkcijePages: MetadataRoute.Sitemap = funkcijeSlugs.map((slug) => ({
    url: `${SITE_URL}/funkcije/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Pravne / informativne strani
  const legalPages: MetadataRoute.Sitemap = [
    "/o-nas",
    "/pogoji-uporabe",
    "/zasebnost",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  return [
    ...home,
    ...mainPages,
    ...funkcijePages,
    ...panogePages,
    ...legalPages,
  ];
}
