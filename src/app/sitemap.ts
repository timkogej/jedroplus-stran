import type { MetadataRoute } from "next";
import { localizedPath, locales, languageAlternates } from "@/lib/localized-routes";
import { SITE_URL } from "@/lib/schema";
import { panogeSlugs } from "@/components/redesign/panoge-data";
import { funkcijeSlugs } from "@/components/redesign/funkcije-data";
import { publishedPrimerjaveSlugs } from "@/components/redesign/primerjava-data";
import { getAllBlogPosts } from "@/lib/blog";

// Sitemap se gradi samodejno iz slug seznamov, da ostane sinhroniziran
// z dejanskimi pod-stranmi (/panoge/[slug] in /funkcije/[slug]).
export default function sitemap(): MetadataRoute.Sitemap {
  // Only publish dates for content that was actually updated; a fresh
  // deployment is not a content update.
  const updatedPages = new Set(["/", "/funkcije", "/funkcije/receptionist-plus", "/cenik"]);
  const lastModified = "2026-10-22";

  const home: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/sl`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  // Glavne strani
  const mainPages: MetadataRoute.Sitemap = [
    "/funkcije",
    "/funkcije/receptionist-plus",
    "/panoge",
    "/agencija",
    "/cenik",
    "/primerjava",
    "/davcna-blagajna",
    "/blog",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    ...(updatedPages.has(path) ? { lastModified } : {}),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Blog članki — /blog/<slug>, samodejno iz content/blog/*.mdx
  const blogPages: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updated ?? post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Panožne pod-strani (8) — /panoge/<slug>
  const panogePages: MetadataRoute.Sitemap = panogeSlugs.map((slug) => ({
    url: `${SITE_URL}/panoge/${slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Funkcijske pod-strani — /funkcije/<slug>
  const funkcijePages: MetadataRoute.Sitemap = funkcijeSlugs.map((slug) => ({
    url: `${SITE_URL}/funkcije/${slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Primerjalne pod-strani — /primerjava/<slug>
  const primerjavaPages: MetadataRoute.Sitemap = publishedPrimerjaveSlugs.map((slug) => ({
    url: `${SITE_URL}/primerjava/${slug}`,
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
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  const slovenian = [
    ...home,
    ...mainPages,
    ...funkcijePages,
    ...panogePages,
    ...primerjavaPages,
    ...blogPages,
    ...legalPages,
  ];
  const contentPages = slovenian.flatMap(entry => {
    const path = new URL(entry.url).pathname;
    const languages = Object.fromEntries(Object.entries(languageAlternates(path)).map(([lang, url]) => [lang, SITE_URL + url]));
    const alternates = { languages };
    return locales.map(locale => ({ ...entry, url: locale === "sl" ? entry.url : SITE_URL + localizedPath(path, locale), alternates }));
  });
  return [...contentPages, {
    url: SITE_URL,
    alternates: { languages: Object.fromEntries(Object.entries(languageAlternates("/")).map(([lang, url]) => [lang, SITE_URL + url])) },
    changeFrequency: "yearly", priority: 0.2,
  }];
}
