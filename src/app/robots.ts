import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Search and AI crawlers can access all public content. Crawl permission
// does not imply indexing or inclusion in an AI answer.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
