import Link from "next/link";
import { services, serviceGroups } from "./data";

export const metadata = {
  title: "Small Business Services in Jackson, MS",
  description: "Explore website design, Google Business Profile optimization, local SEO, lead capture, business automation, AI, and monthly care with clear starting prices.",
  alternates: { canonical: "/services" },
  openGraph: { title: "Small Business Services in Jackson, MS", url: "/services" },
};

export default function ServicesPage() {
  return <main id="main-content">
    <section className="section wrap">
      <div className="case-hero"><p className="eyebrow">Small business technology · Jackson, Mississippi</p><h1>The right help.<br /><em>At the right stage.</em></h1><p className="lead">Start with one practical improvement, or build a complete system. Find the service that fits your business today.</p><div className="actions"><Link className="button" href="/#contact">Get a free business growth review ↗</Link><Link className="text-link" href="/#pricing">Compare core packages ↗</Link></div></div>
      <p className="service-intro">Serving Jackson, Madison, Ridgeland, Brandon, Flowood, Pearl, and Clinton. Work directly with Wes on a defined scope and a clear price. One-time starting prices exclude third-party software, hosting, messaging, and usage unless your proposal includes them.</p>
      {serviceGroups.map(group => <section className="service-category" id={group.slugs[0]} key={group.title}><div className="section-heading"><h2>{group.title}</h2><p>{group.description}</p></div><div className="service-catalog">{group.slugs.map(slug => { const service = services.find(item => item.slug === slug); return <article key={slug}><p className="eyebrow">{service.price} · {service.unit}</p><h3><Link href={`/services/${slug}`}>{service.title}</Link></h3><p>{service.description}</p><Link className="text-link" href={`/services/${slug}`}>See scope & details ↗</Link></article>; })}</div></section>)}
      <div className="care-row"><p>Not sure where to start? Tell me what is taking time or costing you inquiries. Your free review gives you a practical starting point and a recommendation.</p><Link className="button" href="/#contact">Request your free review ↗</Link></div>
    </section>
  </main>;
}
