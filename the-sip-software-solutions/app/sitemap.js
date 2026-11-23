import { services } from "./services/data.js";
export default function sitemap() {
  const base = "https://thesipwebstudio.com";
  const previous = "2026-11-18";
  const revised = "2026-11-23";
  const revisedPaths = new Set([
    "/",
    "/about",
    "/contact",
    "/services",
    "/services/crm-integrations",
    "/services/website-design",
    "/services/local-seo",
    "/web-design-ridgeland-ms",
    "/work/magnolia-mergers-acquisitions",
  ]);
  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about` },
    { url: `${base}/contact` },
    { url: `${base}/web-design-ridgeland-ms` },
    { url: `${base}/services`, changeFrequency: "monthly", priority: 0.9 },
    ...services.map(({ slug }) => ({ url: `${base}/services/${slug}`, changeFrequency: "monthly", priority: 0.8 })),
    { url: `${base}/work/magnolia-mergers-acquisitions`, changeFrequency: "monthly", priority: 0.8 },
  ].map(entry => {
    const path = new URL(entry.url).pathname.replace(/\/$/, "") || "/";
    return { ...entry, lastModified: revisedPaths.has(path) ? revised : previous };
  });
}
