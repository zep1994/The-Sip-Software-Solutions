import Link from "next/link";
import { services, serviceGroups, serviceHref } from "./data";

export const metadata = {
  title: "Small Business Services & Prices in Jackson, MS",
  description: "Compare prices for website design, Google Business Profiles, local SEO, lead capture, reviews, booking, CRM integrations, portals, AI, and monthly website care.",
  alternates: { canonical: "/services" },
  openGraph: { title: "Small Business Services & Prices in Jackson, MS", url: "/services" },
};

export default function ServicesPage() {
  return (
    <main id="main-content">
      <section className="section wrap">
        <div className="case-hero">
          <p className="eyebrow">Small business technology · Jackson, Mississippi</p>
          <h1>The right help.<br /><em>At the right stage.</em></h1>
          <p className="lead">Every service. A clear starting price. Explore what is included, then choose the next step that fits your business.</p>
          <div className="actions">
            <Link className="button" href="/#contact">Get a free business growth review ↗</Link>
            <a className="text-link" href="#service-prices">Compare all services & prices ↓</a>
          </div>
        </div>
        <p className="service-intro">Serving Jackson, Madison, Ridgeland, Brandon, Flowood, Pearl, and Clinton. Work directly with Wes on a defined scope and a clear price. Third-party software, hosting, messaging, and usage are separate unless your proposal includes them. Custom work is quoted after a review of your requirements.</p>
        <nav className="service-jump-links" aria-label="Service categories">
          {serviceGroups.map(group => <a key={group.title} href={`#${group.slugs[0]}`}>{group.title} ↓</a>)}
        </nav>
        <section className="service-price-overview" id="service-prices" aria-labelledby="prices-title">
          <p className="eyebrow">Your options at a glance</p>
          <h2 id="prices-title">Services & <em>starting prices.</em></h2>
          <p>Open any service to see its deliverables, scope, examples, and frequently asked questions.</p>
          <div className="price-directory">
            {serviceGroups.map(group => (
              <div key={group.title}>
                <h3>{group.title}</h3>
                <ul>{group.slugs.map(slug => {
                  const service = services.find(item => item.slug === slug);
                  return <li key={slug}><Link href={serviceHref(slug)}><span>{service.title} ↗</span><span><strong>{service.price}</strong><small>{service.unit}</small></span></Link></li>;
                })}</ul>
              </div>
            ))}
          </div>
        </section>
        {serviceGroups.map(group => (
          <section className="service-category" id={group.slugs[0]} key={group.title}>
            <div className="section-heading"><h2>{group.title}</h2><p>{group.description}</p></div>
            <div className="service-catalog">
              {group.slugs.map(slug => {
                const service = services.find(item => item.slug === slug);
                return <article key={slug}>
                  <h3><Link href={serviceHref(slug)}>{service.title}</Link></h3>
                  <p className="catalog-price"><strong>{service.price}</strong><span>{service.unit}</span></p>
                  <p>{service.description}</p>
                  <Link className="text-link" href={serviceHref(slug)}>Explore {service.title} ↗</Link>
                </article>;
              })}
            </div>
          </section>
        ))}
        <div className="care-row"><p>Not sure where to start? Tell me what is taking time or costing you inquiries. Your free review gives you a practical starting point and a recommendation.</p><Link className="button" href="/#contact">Request your free review ↗</Link></div>
      </section>
    </main>
  );
}
