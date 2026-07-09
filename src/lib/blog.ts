import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogFaqItem = { q: string; a: string };

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  readingTime: number;
  category: string;
  ogImage?: string;
  faq?: BlogFaqItem[];
};

export type BlogPost = BlogFrontmatter & {
  slug: string;
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), "content/blog");

// Vsak .mdx v content/blog/ postane en članek; ime datoteke je slug.
export function getBlogSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getBlogPost(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    readingTime: data.readingTime,
    category: data.category,
    ogImage: data.ogImage || undefined,
    faq: data.faq || undefined,
    content,
  };
}

// Vsi članki, razvrščeni od najnovejšega do najstarejšega — za /blog pregled in sitemap.
export function getAllBlogPosts(): BlogPost[] {
  return getBlogSlugs()
    .map((slug) => getBlogPost(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
