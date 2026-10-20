import Link from "next/link";
import { notFound } from "next/navigation";
import ContactForm from "../ContactForm";
import LeadDemo from "../LeadDemo";
import { services, serviceGroups, carePlans, serviceHref } from "./data";
import { serviceSearchContent } from "./search-content";

export function serviceMetadata(slug) {
  const service = services.find(item => item.slug === slug);
  if (!service) return {};
  const content = serviceSearchContent[slug];
  const title = content?.title || (slug === "website-design" ? "Small Business Web Design in Jackson, MS" : `${service.title} in Jackson, MS`);
  const description = content?.description || service.description;
  const images = [{ url: "/social-card.png", width: 1200, height: 630, alt: "The Sip Web Studio — Jackson MS Web Design" }];
  return {
    title, description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: { type: "website", siteName: "The Sip Web Studio", title, description, url: `/services/${slug}`, images },
    twitter: { card: "summary_large_image", title, description, images: ["/social-card.png"] },
  };
}

export default function ServicePage({ slug }) {
  const service = services.find(item => item.slug === slug);
  if (!service) notFound();
  const content = serviceSearchContent[slug];
  const group = serviceGroups.find(item => item.slugs.includes(slug));
  const related = services.filter(item => item.slug !== slug && group.slugs.includes(item.slug));
  const schema = { "@context": "https://schema.org", "@type": "Service", name: service.title, description: content?.description || service.description, url: `https://thesipwebstudio.com/services/${slug}`, provider: { "@id": "https://thesipwebstudio.com/#studio" }, areaServed: ["Jackson, MS", "Madison, MS", "Ridgeland, MS", "Brandon, MS", "Flowood, MS", "Pearl, MS", "Clinton, MS"] };
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://thesipwebstudio.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://thesipwebstudio.com/services" },
      { "@type": "ListItem", position: 3, name: service.title, item: schema.url },
    ],
  };
  return <main id="main-content">
    <section className="section wrap">
      <nav aria-label="Breadcrumb" className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/services">Services</Link><span>/</span><span>{service.title}</span></nav>
      <div className="service-hero"><div><p className="eyebrow">{service.title} · Jackson, MS</p><h1>{content?.title || (slug === "website-design" ? "Small Business Web Design in Jackson, MS" : `${service.title} in Jackson, MS`)}</h1><p>{service.tagline}</p><p className="lead">{content?.description || service.description}</p><div className="actions"><a className="button" href="#service-contact">Discuss your project ↗</a></div></div><aside className="service-price"><p className="eyebrow">Your starting point</p><p className="price">{service.price}</p><p>{service.unit}</p><p>{service.timing}</p><a className="text-link" href="#included">See what’s included ↓</a></aside></div>
      {content && <section aria-label="Project approach">{content.sections.map(([heading, text]) => <div className="case-grid" key={heading}><h2>{heading}</h2><p>{text}</p></div>)}<div className="case-grid"><h2>Work directly with your developer</h2><div><p>Work with Wes at The Sip Web Studio, serving Jackson and surrounding Mississippi communities. Start with your current process and the outcome you need; your proposal defines the work, costs, testing, and handoff.</p><p>Related services: {content.links.map((relatedSlug, index) => <span key={relatedSlug}>{index > 0 && " · "}<Link href={serviceHref(relatedSlug)}>{services.find(item => item.slug === relatedSlug).title}</Link></span>)}</p></div></div></section>}
      {slug === "website-design" && <section aria-labelledby="website-process">
        <div className="case-grid"><h2 id="website-process">A website built around your customers</h2><div><p>We start with your services, service area, existing content, and the action you want visitors to take. That guides the page structure, copy, and contact options before design begins.</p><p>Next, we build mobile-friendly layouts, organize your key services, and review the site with you. Before launch, we check navigation, forms, page metadata, and the experience on smaller screens.</p></div></div>
        <div className="case-grid"><h2>See a completed project</h2><div><p>Our Magnolia Mergers &amp; Acquisitions project shows how clear service descriptions and a considered design can present a Mississippi advisory business online.</p><Link className="text-link" href="/work/magnolia-mergers-acquisitions">Read the Magnolia website case study ↗</Link></div></div>
        <div className="case-grid"><h2>Serving the Jackson metro</h2><div><p>We work with businesses in Jackson, Madison, Ridgeland, Brandon, Flowood, Pearl, and Clinton. Tell us where your customers are so your website explains your actual service area.</p><p>Pair your website with <Link href="/services/local-seo">local SEO</Link>, <Link href="/services/google-business-profile">Google Business Profile support</Link>, or <Link href="/services/website-care">website care</Link> when those services fit your needs.</p></div></div>
      </section>}
      <div className="case-grid"><h2>Is this a good fit?</h2><p>{service.fit}</p></div>
      {slug === "website-care" && <section className="care-plan-comparison" aria-labelledby="care-plans-title">
        <h2 id="care-plans-title">Choose your <em>monthly plan.</em></h2>
        <div className="service-catalog">{carePlans.map(plan => <article key={plan.slug}>
          <h3><Link href={serviceHref(plan.slug)}>{plan.title}</Link></h3>
          <p className="catalog-price"><strong>{plan.price}</strong><span>{plan.unit}</span></p>
          <p>{plan.description}</p>
          <Link className="text-link" href={serviceHref(plan.slug)}>View {plan.title} details ↗</Link>
        </article>)}</div>
      </section>}
      <div id="included" className="case-grid"><h2>What you get</h2><ul className="deliverables">{service.includes.map(item => <li key={item}>{item}</li>)}</ul></div>
      <div className="case-grid"><h2>In everyday terms</h2><div><p className="eyebrow">Illustrative example</p><p>{service.example}</p></div></div>
      <div className="case-grid"><h2>A clear scope</h2><div><p>{service.scope}</p><p>Before work begins, you receive a written scope covering deliverables, account access, revisions, payment milestones, and support. You keep ownership of your domain and business accounts.</p></div></div>
      {slug === "google-business-profile" && <aside className="disclosure" id="disclosure"><h3>Working with a third party</h3><p>Google Business Profile is a free Google product. SIP charges for independent setup, optimization, or management services, with fees agreed in writing. You retain ownership and control of your profile; SIP only accesses it with your authorization. You can end manager access. We do not guarantee verification, rankings, or placement and are not affiliated with Google.</p><p><a className="text-link" href="https://support.google.com/business/answer/7163406">Read Google’s notice about working with a third party ↗</a></p></aside>}
      {slug === "lead-capture" && <LeadDemo />}
      <div className="case-grid"><h2>A few good questions</h2><div className="faq">{service.faqs.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div>
      <div className="service-related"><p className="eyebrow">Keep exploring</p>{related.map(item => <Link className="text-link" key={item.slug} href={`/services/${item.slug}`}>{item.title} ↗</Link>)}<Link className="text-link" href="/services">All services ↗</Link></div>
    </section>
    <section id="service-contact" className="section contact-section"><div className="wrap contact-grid"><div><p className="eyebrow">Let’s find your next step</p><h2>Start with a<br /><em>free growth review.</em></h2><p>Tell me about your business and the problem you want to solve. I’ll review your online presence or workflow and suggest a practical next step, with no obligation to buy.</p><a className="text-link email-link" href="mailto:wes@thesipwebstudio.com">wes@thesipwebstudio.com ↗</a></div><ContactForm initialService={service.title} /></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([schema, breadcrumbs]).replace(/</g, "\\u003c") }} />
  </main>;
}
