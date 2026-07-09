import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/redesign/Nav";
import { Footer } from "@/components/redesign/Footer";
import { RevealOnScroll } from "@/components/redesign/RevealOnScroll";
import { SubpageHero } from "@/components/redesign/SubpageHero";
import { getAllBlogPosts } from "@/lib/blog";
import { formatBlogDate } from "@/lib/blog-format";

export const metadata: Metadata = {
  title: "Blog | Jedro+",
  description:
    "Nasveti za vodenje rezervacij, zmanjševanje odpovedi in AI opomnike — blog Jedro+ za storitvena podjetja v Sloveniji.",
  openGraph: {
    title: "Blog | Jedro+",
    description:
      "Nasveti za vodenje rezervacij, zmanjševanje odpovedi in AI opomnike — blog Jedro+ za storitvena podjetja v Sloveniji.",
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <Nav variant="light" />

      <SubpageHero
        eyebrow="Blog"
        title={
          <>
            Nasveti za <span className="grad-text">termine in stranke</span>
          </>
        }
        description={
          <>
            Praktični vodiči, primerjave in novice za storitvena podjetja, ki
            želijo manj administracije in več časa za stranke.
          </>
        }
      />

      <section className="section subpage-first">
        <div className="wrap">
          <div className="t-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
            {posts.map((post) => (
              <Link className="fcard reveal" href={`/blog/${post.slug}`} key={post.slug}>
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
                  {formatBlogDate(post.date)} · {post.readingTime} min branja
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <RevealOnScroll />
    </>
  );
}
