import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/schema";

// AI / GEO boti — eksplicitno dovoljeni za vidnost v AI iskalnikih in odgovorih.
const AI_BOTS = [
  "GPTBot", // OpenAI — treniranje + ChatGPT browsing
  "OAI-SearchBot", // OpenAI — SearchGPT
  "ChatGPT-User", // OpenAI — uporabnikovi klici v ChatGPT
  "PerplexityBot", // Perplexity
  "Perplexity-User", // Perplexity — uporabnikovi klici
  "ClaudeBot", // Anthropic — indeksiranje
  "Claude-Web", // Anthropic — Claude browsing
  "anthropic-ai", // Anthropic
  "Google-Extended", // Google — Gemini / AI Overviews
  "Applebot-Extended", // Apple Intelligence
  "Amazonbot", // Amazon
  "CCBot", // Common Crawl (vir za mnoge LLM)
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Vsi standardni crawlerji (Googlebot, Bingbot, ...).
        userAgent: "*",
        allow: "/",
        // Blokiraj samo interne / ne-indeksabilne rute.
        disallow: ["/api/"],
      },
      {
        // AI boti — izrecno dovoljeni za GEO vidnost.
        userAgent: AI_BOTS,
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
