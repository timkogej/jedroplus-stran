// Generated from Slovenian source and src/locales/en.json.
import { pageMetadata } from "@/english/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/english/components/redesign/Nav";
import { Footer } from "@/english/components/redesign/Footer";
import { RevealOnScroll } from "@/english/components/redesign/RevealOnScroll";
import { SubpageHero } from "@/english/components/redesign/SubpageHero";
import { getAllBlogPosts } from "@/english/lib/blog";
import { formatBlogDate } from "@/english/lib/blog-format";

export const metadata: Metadata = pageMetadata("/en/blog", {
  title: "Blog & insights | Jedro+",
  description:
    "Advice on managing bookings, reducing cancellations and using AI reminders — the Jedro+ blog for service businesses in Slovenia.",
  openGraph: {
    title: "Blog & insights | Jedro+",
    description:
      "Advice on managing bookings, reducing cancellations and using AI reminders — the Jedro+ blog for service businesses in Slovenia.",
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
             Advice on <span className="grad-text">appointments and clients</span>
          </>
        }
        description={
          <>
             Practical guides, comparisons and news for service businesses that want less admin and more time for clients. </>
        }
      />

      <section className="section subpage-first">
        <div className="wrap">
          <div className="t-grid">
            {posts.map((post) => (
              <Link className="fcard reveal" href={`/en/blog/${post.slug}`} key={post.slug}>
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
                  {formatBlogDate(post.date)} · {post.readingTime}  min read </p>
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
