import { services } from "./services/data";
export default function sitemap() {
  const base = "https://thesipwebstudio.com";
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/services`, changeFrequency: "monthly", priority: 0.9 },
    ...services.map(({ slug }) => ({ url: `${base}/services/${slug}`, changeFrequency: "monthly", priority: 0.8 })),
    { url: `${base}/work/magnolia-mergers-acquisitions`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
