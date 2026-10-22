import assert from "node:assert/strict";

const base = new URL(process.argv[2] || "http://127.0.0.1:3000");
const canonicalOrigin = "https://www.jedroplus.com";
const decode = (value) => value.replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&#x27;", "'").replaceAll("&lt;", "<").replaceAll("&gt;", ">");
const attrs = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key, decode(value)]));
const get = async (path) => {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 200, `${path}: HTTP ${response.status}`);
  return response.text();
};
const sitemap = await get("/sitemap.xml");
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => decode(match[1]));
assert.equal(new Set(urls).size, urls.length, "Duplicate sitemap entries");
const pages = new Map();
const titles = new Set();
for (let offset = 0; offset < urls.length; offset += 4) {
  await Promise.all(urls.slice(offset, offset + 4).map(async (url) => {
    assert.equal(new URL(url).origin, canonicalOrigin, `Sitemap host: ${url}`);
    const path = new URL(url).pathname;
    const html = await get(path);
    pages.set(path, html);
    const title = decode(html.match(/<title>(.*?)<\/title>/s)?.[1] || "");
    assert.ok(title.length > 5, `${path}: missing page title`);
    assert.ok(!titles.has(title), `${path}: duplicate title ${title}`);
    titles.add(title);
    const metadata = [...html.matchAll(/<meta\b[^>]*>/g)].map((match) => attrs(match[0]));
    const meta = (name) => metadata.find((tag) => tag.name === name || tag.property === name)?.content;
    assert.ok(meta("description")?.length > 30, `${path}: missing description`);
    assert.equal(meta("og:title"), title, `${path}: stale Open Graph title`);
    assert.equal(meta("twitter:title"), title, `${path}: stale Twitter title`);
    assert.ok(!meta("robots")?.includes("noindex"), `${path}: noindex in sitemap`);
    const canonicals = [...html.matchAll(/<link\b[^>]*>/g)].map((match) => attrs(match[0])).filter((tag) => tag.rel === "canonical");
    assert.equal(canonicals.length, 1, `${path}: expected one canonical URL`);
    assert.equal(new URL(canonicals[0].href).href, new URL(url).href, `${path}: canonical mismatch`);
    assert.equal((html.match(/<h1\b/g) || []).length, 1, `${path}: expected one H1`);
    assert.equal((html.match(/<main\b/g) || []).length, 1, `${path}: expected one main landmark`);
    const htmlLanguage = path === "/de" || path.startsWith("/de/") ? "de-DE" : path === "/it" || path.startsWith("/it/") ? "it-IT" : path === "/en" || path.startsWith("/en/") ? "en-GB" : "sl-SI";
    assert.match(html, new RegExp('<html[^>]+lang="'+htmlLanguage+'"'), `${path}: wrong page language`);
    const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
    assert.ok(schemas.length >= 2, `${path}: missing site schemas`);
    for (const [, content] of schemas) JSON.parse(content);
  }));
}
const checkedImages = new Set();
for (const [path, html] of pages) {
  for (const match of html.matchAll(/<a\b[^>]*>/g)) {
    const href = attrs(match[0]).href;
    if (!href || !(href.startsWith("/") || href.startsWith("#")) || href.startsWith("//")) continue;
    const link = new URL(href, new URL(path, base));
    if (/^\/images\/.*\.(?:webp|png|jpe?g|svg|avif)$/.test(link.pathname)) {
      if (!checkedImages.has(link.pathname)) {
        const image = await fetch(link, { method: "HEAD" });
        assert.equal(image.status, 200, `${path}: missing image link ${href}`);
        assert.match(image.headers.get("content-type") || "", /^image\//, `${path}: wrong image response ${href}`);
        checkedImages.add(link.pathname);
      }
      continue;
    }
    assert.ok(pages.has(link.pathname), `${path}: link outside sitemap: ${href}`);
    if (link.hash) assert.ok(pages.get(link.pathname).includes(`id="${decodeURIComponent(link.hash.slice(1))}"`), `${path}: broken anchor ${href}`);
  }
}
const robots = await get("/robots.txt");
assert.match(robots, /Allow: \//);
assert.ok(robots.includes(`${canonicalOrigin}/sitemap.xml`), "Wrong robots sitemap host");
const credits = [...pages.get("/funkcije/receptionist-plus").matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(([, content]) => JSON.parse(content)).find((schema) => schema["@type"] === "Service");
assert.deepEqual(credits.hasOfferCatalog.itemListElement.map((offer) => [offer.price, offer.eligibleQuantity.value]), [[15, 100], [39, 300], [89, 750]]);
const missing = await fetch(new URL("/funkcije/neobstojeca-funkcija", base));
assert.equal(missing.status, 404, "Unknown feature must return 404");
console.log(`PASS: ${pages.size} sitemap pages; unique titles, canonicals, social previews, one H1, main landmarks, valid JSON-LD, internal links, anchors, credit offers, robots.txt and 404.`);
