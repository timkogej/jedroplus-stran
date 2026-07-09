import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Nav } from "@/components/redesign/Nav";
import { Footer } from "@/components/redesign/Footer";
import { RevealOnScroll } from "@/components/redesign/RevealOnScroll";
import { Faq } from "@/components/redesign/Faq";
import { JsonLd } from "@/components/JsonLd";
import { getAllBlogPosts, getBlogPost, getBlogSlugs } from "@/lib/blog";
import { formatBlogDate } from "@/lib/blog-format";
import { blogBreadcrumbSchema, blogPostingSchema } from "@/lib/schema";
import styles from "@/components/redesign/BlogArticle.module.css";

const DEFAULT_OG_IMAGE = "/og-default.png";

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) {
    return { title: "Članek | Jedro+" };
  }

  const title = `${post.title} | Jedro+ Blog`;
  const image = post.ogImage || DEFAULT_OG_IMAGE;

  return {
    title,
    description: post.description,
    openGraph: {
      title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      images: [image],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const image = post.ogImage || DEFAULT_OG_IMAGE;
  const otherPosts = getAllBlogPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      <JsonLd schema={blogBreadcrumbSchema(post.slug, post.title)} />
      <JsonLd
        schema={blogPostingSchema({
          slug: post.slug,
          title: post.title,
          description: post.description,
          datePublished: post.date,
          image,
        })}
      />
      <Nav variant="light" />

      <section className="imghero imghero--plain">
        <div className="imghero__in">
          <div className="wrap">
            <nav aria-label="Drobtine" className="crumbs">
              <Link href="/">Domov</Link>
              <span aria-hidden="true">/</span>
              <Link href="/blog">Blog</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{post.title}</span>
            </nav>
            <span className="eyebrow">{post.category}</span>
            <h1 style={{ marginTop: 16 }}>{post.title}</h1>
            <p className="imghero__sub">{post.description}</p>
            <div className={styles.meta} style={{ marginTop: 24 }}>
              <span>{formatBlogDate(post.date)}</span>
              <span className={styles.metaDot} aria-hidden="true">
                ·
              </span>
              <span>{post.readingTime} min branja</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Link href="/blog" className={styles.backLink}>
            ← Nazaj na blog
          </Link>
          <div className={styles.body}>
            <MDXRemote source={post.content} />
          </div>
        </div>
      </section>

      {post.faq && post.faq.length > 0 && (
        <Faq
          items={post.faq}
          title={
            <>
              Pogosta <span className="grad-text">vprašanja</span>
            </>
          }
          soft
          reveal
        />
      )}

      {otherPosts.length > 0 && (
        <section className="section section--soft">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow">Berite tudi</span>
              <h2 style={{ marginTop: 18 }}>
                Več z <span className="grad-text">bloga</span>
              </h2>
            </div>
            <div className="t-grid" style={{ marginTop: 48 }}>
              {otherPosts.map((p) => (
                <Link className="fcard reveal" href={`/blog/${p.slug}`} key={p.slug}>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="wrap">
          <div className="cta-band reveal">
            <div className="cta-band__glow"></div>
            <div className="cta-band__in">
              <span className="eyebrow" style={{ color: "rgba(255,255,255,.75)" }}>
                Pripravljeni začeti?
              </span>
              <h2 style={{ marginTop: 18 }}>
                Naj Jedro+ poskrbi za termine in stranke.
              </h2>
              <p>
                Preizkusite brezplačno ali se dogovorite za kratko predstavitev po
                meri vaše dejavnosti.
              </p>
              <div className="cta-band__btns">
                <a className="btn btn--light btn--lg" href="/#kontakt">
                  Preizkusi brezplačno <span className="arr">→</span>
                </a>
                <a
                  className="btn btn--ghost btn--lg"
                  href="/#kontakt"
                  style={{ color: "#fff", borderColor: "rgba(255,255,255,.25)" }}
                >
                  Rezerviraj predstavitev
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <RevealOnScroll />
    </>
  );
}
