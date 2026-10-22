// Generated from Slovenian source and src/locales/it.json.
import { RelatedContent } from "@/components/RelatedContent";
import { pageMetadata } from "@/italian/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Nav } from "@/italian/components/redesign/Nav";
import { Footer } from "@/italian/components/redesign/Footer";
import { RevealOnScroll } from "@/italian/components/redesign/RevealOnScroll";
import { Faq } from "@/italian/components/redesign/Faq";
import { JsonLd } from "@/components/JsonLd";
import { getAllBlogPosts, getBlogPost, getBlogSlugs } from "@/italian/lib/blog";
import { formatBlogDate } from "@/italian/lib/blog-format";
import { blogBreadcrumbSchema, blogPostingSchema } from "@/italian/lib/schema";
import styles from "@/italian/components/redesign/BlogArticle.module.css";

const DEFAULT_OG_IMAGE = "/it/opengraph-image";

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
    return { title: "Articolo | Jedro+" };
  }

  const title = `${post.title} | Jedro+ Blog`;
  const image = post.ogImage || DEFAULT_OG_IMAGE;

  return pageMetadata(`/it/blog/${params.slug}`, {
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
            <nav aria-label="Percorso di navigazione" className="crumbs">
              <Link href="/it">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/it/blog">Blog</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{post.title}</span>
            </nav>
            <span className="eyebrow">{post.category}</span>
            <h1 style={{ marginTop: 16 }}>{post.title}</h1>
            <p className="imghero__sub">{post.description}</p>
            <div className={styles.meta} style={{ marginTop: 24 }}>
              <span>Pubblicato: {formatBlogDate(post.date)}</span>
              {post.updated && post.updated !== post.date && <span>Aggiornato: {formatBlogDate(post.updated)}</span>}
              <span>Redazione Jedro+</span>
              <span className={styles.metaDot} aria-hidden="true">
                ·
              </span>
              <span>{post.readingTime}  min di lettura</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Link href="/it/blog" className={styles.backLink}>
             ← Torna al blog </Link>
          <div className={styles.body}>
            <MDXRemote source={post.content} />
          </div>
        </div>
      </section>

      <RelatedContent path={`/it/blog/${post.slug}`} />
      {post.faq && post.faq.length > 0 && (
        <Faq
          items={post.faq}
          title={
            <>
               Domande <span className="grad-text">frequenti</span>
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
              <span className="eyebrow">Leggi anche</span>
              <h2 style={{ marginTop: 18 }}>
                 Altri articoli dal <span className="grad-text">blog</span>
              </h2>
            </div>
            <div className="t-grid" style={{ marginTop: 48 }}>
              {otherPosts.map((p) => (
                <Link className="fcard reveal" href={`/it/blog/${p.slug}`} key={p.slug}>
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
                 Pronto a iniziare? </span>
              <h2 style={{ marginTop: 18 }}>
                 Lascia che Jedro+ gestisca appuntamenti e clienti. </h2>
              <p>
                 Provalo gratis oppure prenota una breve demo su misura per la tua attività. </p>
              <div className="cta-band__btns">
                <a className="btn btn--light btn--lg" href="https://app.jedroplus.com/signup">
                   Prova gratis <span className="arr">→</span>
                </a>
                <a
                  className="btn btn--ghost btn--lg"
                  href="/it#kontakt"
                  style={{ color: "#fff", borderColor: "rgba(255,255,255,.25)" }}
                >
                   Prenota una demo </a>
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
