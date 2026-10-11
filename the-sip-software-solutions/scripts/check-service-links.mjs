import assert from "node:assert/strict";
import { services, serviceGroups, serviceHref } from "../app/services/data.js";

// Run against a running local preview: node scripts/check-service-links.mjs [origin]
const origin = process.argv[2] || "http://localhost:3000";
const slugs = services.map(service => service.slug);
assert.equal(new Set(slugs).size, slugs.length, "Service slugs must be unique");
const groupedSlugs = serviceGroups.flatMap(group => group.slugs);
assert.deepEqual([...groupedSlugs].sort(), [...slugs].sort(), "Every service must appear once in the catalog");

const pages = new Map();
async function load(path) {
  if (!pages.has(path)) {
    const response = await fetch(new URL(path, origin));
    assert.equal(response.status, 200, `Broken page: ${path}`);
    pages.set(path, await response.text());
  }
  return pages.get(path);
}
const catalog = await load("/services");
for (const service of services) {
  assert.ok(catalog.includes(`href="${serviceHref(service.slug)}"`), `Missing catalog link: ${service.slug}`);
  const html = await load(serviceHref(service.slug));
  assert.ok(html.includes(service.price), `Missing price: ${service.slug}`);
  assert.ok(html.includes(`https://thesipwebstudio.com${serviceHref(service.slug)}`), `Missing canonical: ${service.slug}`);
}
await load("/");
let checked = 0;
for (const [path, html] of [...pages]) {
  for (const match of html.matchAll(/<a\b[^>]*\bhref="([^"]*)"/g)) {
    const href = match[1].replaceAll("&amp;", "&");
    if (!href.startsWith("/") && !href.startsWith("#")) continue;
    const destination = new URL(href, new URL(path, origin));
    const target = await load(destination.pathname);
    if (destination.hash) {
      const id = decodeURIComponent(destination.hash.slice(1));
      assert.ok(target.includes(`id="${id}"`), `Broken anchor: ${path} -> ${href}`);
    }
    checked++;
  }
}
const sitemap = await load("/sitemap.xml");
for (const slug of slugs) assert.ok(sitemap.includes(serviceHref(slug)), `Missing sitemap route: ${slug}`);
console.log(`Passed: ${services.length} service pages, ${checked} internal links and anchors, all catalog entries, prices, canonicals, and sitemap routes.`);
