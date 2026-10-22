// Generated from Slovenian source and src/locales/de.json.
import { RelatedContent } from "@/components/RelatedContent";
import { pageMetadata } from "@/german/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Nav } from "@/german/components/redesign/Nav";
import { Footer } from "@/german/components/redesign/Footer";
import { RevealOnScroll } from "@/german/components/redesign/RevealOnScroll";
import { Faq } from "@/german/components/redesign/Faq";
import { JsonLd } from "@/components/JsonLd";
import { getAllBlogPosts, getBlogPost, getBlogSlugs } from "@/german/lib/blog";
import { formatBlogDate } from "@/german/lib/blog-format";
import { blogBreadcrumbSchema, blogPostingSchema } from "@/german/lib/schema";
import styles from "@/german/components/redesign/BlogArticle.module.css";

const DEFAULT_OG_IMAGE = "/de/opengraph-image";

export const dynamicParams = false;

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
    return { title: "Artikel | Jedro+" };
  }

  const title = `${post.title} | Jedro+ Blog`;
  const image = post.ogImage || DEFAULT_OG_IMAGE;

  return pageMetadata(`/de/blog/${params.slug}`, {
    title,
    description: post.description,
    openGraph: {
      title,
      description: post.description,
      type: "article",
      modifiedTime: post.updated ?? post.date,
      publishedTime: post.date,
      images: [image],
    },
  });
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
          dateModified: post.updated ?? post.date,
          image,
        })}
      />
      <Nav variant="light" />
      <main id="main-content">

      <section className="imghero imghero--plain">
        <div className="imghero__in">
          <div className="wrap">
            <nav aria-label="Brotkrumennavigation" className="crumbs">
              <Link href="/de">Startseite</Link>
              <span aria-hidden="true">/</span>
              <Link href="/de/blog">Blog</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{post.title}</span>
            </nav>
            <span className="eyebrow">{post.category}</span>
            <h1 style={{ marginTop: 16 }}>{post.title}</h1>
            <p className="imghero__sub">{post.description}</p>
            <div className={styles.meta} style={{ marginTop: 24 }}>
              <span>Veröffentlicht: {formatBlogDate(post.date)}</span>
              {post.updated && post.updated !== post.date && <span>Aktualisiert: {formatBlogDate(post.updated)}</span>}
              <span>Jedro+ Redaktion</span>
              <span className={styles.metaDot} aria-hidden="true">
                ·
              </span>
              <span>{post.readingTime}  Min. Lesezeit</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Link href="/de/blog" className={styles.backLink}>
             ← Zurück zum Blog </Link>
          <div className={styles.body}>
            <MDXRemote source={post.content} />
          </div>
        </div>
      </section>

      <RelatedContent path={`/de/blog/${post.slug}`} />
      {post.faq && post.faq.length > 0 && (
        <Faq
          items={post.faq}
          title={
            <>
               Häufige <span className="grad-text">Fragen</span>
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
              <span className="eyebrow">Auch interessant</span>
              <h2 style={{ marginTop: 18 }}>
                 Mehr aus dem <span className="grad-text">Blog</span>
              </h2>
            </div>
            <div className="t-grid" style={{ marginTop: 48 }}>
              {otherPosts.map((p) => (
                <Link className="fcard reveal" href={`/de/blog/${p.slug}`} key={p.slug}>
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
                 Bereit für den Start? </span>
              <h2 style={{ marginTop: 18 }}>
                 Lass Jedro+ Termine und Kunden organisieren. </h2>
              <p>
                 Teste kostenlos oder buche eine kurze Demo für dein Unternehmen. </p>
              <div className="cta-band__btns">
                <a className="btn btn--light btn--lg" href="https://app.jedroplus.com/signup">
                   Kostenlos testen <span className="arr">→</span>
                </a>
                <a
                  className="btn btn--ghost btn--lg"
                  href="/de#kontakt"
                  style={{ color: "#fff", borderColor: "rgba(255,255,255,.25)" }}
                >
                   Demo buchen </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      </main>
      <Footer />
      <RevealOnScroll />
    </>
  );
}
