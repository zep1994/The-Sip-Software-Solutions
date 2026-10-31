import { services } from "./services/data.js";
export default function sitemap() {
  const base = "https://thesipwebstudio.com";
  const lastModified = "2026-10-31";
  return [
    ...["/about", "/contact", "/web-design-ridgeland-ms"].map(path => ({ url: `${base}${path}`, lastModified })),
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/services`, changeFrequency: "monthly", priority: 0.9 },
    ...services.map(({ slug }) => ({ url: `${base}/services/${slug}`, changeFrequency: "monthly", priority: 0.8 })),
    { url: `${base}/work/magnolia-mergers-acquisitions`, changeFrequency: "monthly", priority: 0.8 },
  ].map(entry => ({ ...entry, lastModified }));
}

