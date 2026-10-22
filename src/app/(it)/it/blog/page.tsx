// Generated from Slovenian source and src/locales/it.json.
import { pageMetadata } from "@/italian/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/italian/components/redesign/Nav";
import { Footer } from "@/italian/components/redesign/Footer";
import { RevealOnScroll } from "@/italian/components/redesign/RevealOnScroll";
import { SubpageHero } from "@/italian/components/redesign/SubpageHero";
import { getAllBlogPosts } from "@/italian/lib/blog";
import { formatBlogDate } from "@/italian/lib/blog-format";

export const metadata: Metadata = pageMetadata("/it/blog", {
  title: "Blog e approfondimenti | Jedro+",
  description:
    "Consigli su prenotazioni, riduzione delle cancellazioni e promemoria AI: il blog Jedro+ per imprese di servizi in Slovenia.",
  openGraph: {
    title: "Blog e approfondimenti | Jedro+",
    description:
      "Consigli su prenotazioni, riduzione delle cancellazioni e promemoria AI: il blog Jedro+ per imprese di servizi in Slovenia.",
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
             Consigli su <span className="grad-text">appuntamenti e clienti</span>
          </>
        }
        description={
          <>
             Guide pratiche, confronti e novità per imprese di servizi che vogliono meno burocrazia e più tempo per i clienti. </>
        }
      />

      <section className="section subpage-first">
        <div className="wrap">
          <div className="t-grid">
            {posts.map((post) => (
              <Link className="fcard reveal" href={`/it/blog/${post.slug}`} key={post.slug}>
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
                  {formatBlogDate(post.date)} · {post.readingTime}  min di lettura </p>
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
