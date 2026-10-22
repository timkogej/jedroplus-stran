// Generated from Slovenian source and src/locales/de.json.
import { pageMetadata } from "@/german/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/german/components/redesign/Nav";
import { Footer } from "@/german/components/redesign/Footer";
import { RevealOnScroll } from "@/german/components/redesign/RevealOnScroll";
import { SubpageHero } from "@/german/components/redesign/SubpageHero";
import { getAllBlogPosts } from "@/german/lib/blog";
import { formatBlogDate } from "@/german/lib/blog-format";

export const metadata: Metadata = pageMetadata("/de/blog", {
  title: "Blog & Einblicke | Jedro+",
  description:
    "Tipps zu Buchungsverwaltung, weniger Absagen und KI-Erinnerungen: der Jedro+ Blog für Dienstleistungsunternehmen in Slowenien.",
  openGraph: {
    title: "Blog & Einblicke | Jedro+",
    description:
      "Tipps zu Buchungsverwaltung, weniger Absagen und KI-Erinnerungen: der Jedro+ Blog für Dienstleistungsunternehmen in Slowenien.",
  },
});

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <Nav variant="light" />
      <main id="main-content">

      <SubpageHero
        eyebrow="Blog"
        title={
          <>
             Tipps für <span className="grad-text">Termine und Kunden</span>
          </>
        }
        description={
          <>
             Praktische Ratgeber, Vergleiche und Neuigkeiten für weniger Verwaltung und mehr Zeit für Kunden. </>
        }
      />

      <section className="section subpage-first">
        <div className="wrap">
          <div className="t-grid">
            {posts.map((post) => (
              <Link className="fcard reveal" href={`/de/blog/${post.slug}`} key={post.slug}>
                <span
                  className="eyebrow"
                  style={{ display: "block", marginBottom: 14 }}
                >
                  {post.category}
                </span>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <p
                  style={{
                    marginTop: 18,
                    fontSize: 14,
                    color: "var(--ink-2)",
                  }}
                >
                  {formatBlogDate(post.date)} · {post.readingTime}  Min. Lesezeit </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      </main>
      <Footer />
      <RevealOnScroll />
    </>
  );
}
