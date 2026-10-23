import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";
import LeadDemo from "./LeadDemo";
import { services, serviceGroups, serviceHref } from "./services/data";

const exampleSites = [
  {
    name: "Southern Shine",
    category: "Pressure washing",
    url: "https://southern-shine.thomasmatlockbba.workers.dev/",
    image: "/images/southern-shine-example.png",
    width: 1825,
    height: 988,
    alt: "Southern Shine website with a blue exterior cleaning headline and a pressure washing photo",
    description: "A fresh direction for a pressure washing business. Explore the example and imagine your own services in the spotlight.",
  },
  {
    name: "Magnolia Landscaping",
    category: "Landscaping",
    url: "https://magnolia-landscaping.pages.dev/",
    image: "/images/magnolia-landscaping-example.png",
    width: 1836,
    height: 991,
    alt: "Magnolia Lawn and Landscape website with green branding and a lawn photograph behind the headline Good things grow here",
    description: "An online home for a landscaping business. Take a look at an example built around work that makes a first impression.",
  },
  {
    name: "Red Clay Handyman Service",
    category: "Handyman services",
    url: "https://redclayhandymanservice.pages.dev/",
    image: "/images/red-clay-example.png",
    width: 1822,
    height: 981,
    alt: "Red Clay Home Services website with a home repair headline, orange accents, and a handyman working with a saw",
    description: "A website direction for a handyman business. See an example of how local services can have a presence worth sharing.",
  },
];

const packages = [
  [
    "Professional Presence",
    "$1,500",
    "A considered first step online.",
    [
      "Professional website design",
      "Mobile responsive layouts",
      "Up to 5 pages & service-area content",
      "Contact form, basic SEO & analytics",
      "Launch training · typically 2–3 weeks",
    ],
  ],
  [
    "Business Growth System",
    "$2,750",
    "A website with a better inquiry process.",
    [
      "Everything in Professional Presence",
      "Up to 10 pages, including service pages",
      "Local SEO & eligible Google Profile setup",
      "Estimate form & inquiry acknowledgment",
      "Owner notifications & basic lead tracking",
      "Conversion tracking · typically 3–5 weeks",
    ],
  ],
  [
    "Custom Business Systems",
    "$4,500",
    "Built around your next big idea.",
    [
      "Custom websites, applications & portals",
      "Advanced integrations",
      "Customer dashboards & approved AI tools",
      "Workflow automation & reporting",
      "Training & documented handoff",
    ],
  ],
];
const homeTitle = "Web Design in Jackson, MS | The Sip Web Studio";
const homeDescription = "Custom web design and web development for Jackson, MS small businesses. Mobile-friendly websites, redesigns, and SEO foundations. Projects start at $1,500.";
const websiteServices = [
  ["Custom website design", "Plan your pages, navigation, typography, and images around your services. Give visitors a clear explanation of your business and an easy path to request an estimate.", "See website design details", "#website-process"],
  ["Web development", "Turn the design into a working website with responsive layouts, service pages, and contact forms. Review page delivery, navigation, and the inquiry process before launch.", "Explore web development", "#included"],
  ["Website redesign", "Improve an existing website’s layout, content, and mobile experience. Review useful pages and current URLs before deciding what to keep, rebuild, or redirect.", "Plan your website redesign", "#website-process"],
];
export const metadata = {
  title: { absolute: homeTitle },
  description: homeDescription,
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: "The Sip Web Studio", title: homeTitle, description: homeDescription, url: "/", images: [{ url: "/social-card.png", width: 1200, height: 630, alt: "The Sip Web Studio" }] },
  twitter: { card: "summary_large_image", title: homeTitle, description: homeDescription, images: ["/social-card.png"] },
};

export default function Home() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "WebPage",
        "@id": "https://thesipwebstudio.com/#webpage", url: "https://thesipwebstudio.com",
        name: homeTitle, description: homeDescription,
        isPartOf: { "@id": "https://thesipwebstudio.com/#website" },
        about: { "@id": "https://thesipwebstudio.com/#studio" },
      }).replace(/</g, "\\u003c") }} />
      <section className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">
            Custom websites · Jackson, Mississippi
          </p>
          <h1>
            Web design &amp; development<br />in <em>Jackson, MS.</em>
          </h1>
          <p className="lead">
            Custom website design, web development, and website redesign for Jackson small businesses. Give customers clear service information, a mobile-friendly experience, and a straightforward way to contact you.
          </p>
          <p>
            Work directly with Wes from page planning and design through development and launch. Website projects start at $1,500 for up to five pages, with a written scope covering content, revisions, and handoff.
          </p>
          <div className="actions">
            <a className="button" href="#contact">
              Discuss your website <span>↗</span>
            </a>
            <Link className="text-link" href="/services/website-design">
              Web design services &amp; pricing ↗
            </Link>
          </div>
          <div className="hero-note">
            <span className="dot" /> Mississippi roots. A little Southern soul.
          </div>
        </div>
        <div
          className="hero-art"
          aria-label="Featured website project for Magnolia Mergers and Acquisitions"
        >
          <div className="art-top">
            <span>GOOD BUSINESS. GREAT WEBSITES.</span>
            <span>EST. IN THE SIP</span>
          </div>
          <div className="browser-frame">
            <div className="browser-bar">
              <span>● ● ●</span>
              <span>magnolia-ma.com</span>
              <span>↗</span>
            </div>
            <Image
              src="/images/magnolia1.png"
              width={1822}
              height={985}
              alt="Magnolia Mergers and Acquisitions website with navy branding and a clear advisory headline"
              priority
              sizes="(max-width: 850px) 90vw, 48vw"
            />
          </div>
          <div className="art-bottom">
            <span className="studio-seal">
              SIP
              <br />
              <small>WEB STUDIO</small>
            </span>
            <p>
              A polished presence.
              <br />A purposeful first impression.
            </p>
            <span className="spark">✳</span>
          </div>
        </div>
      </section>
      <section className="section wrap" aria-labelledby="core-services">
        <div className="section-heading">
          <div><p className="eyebrow">Website design &amp; development</p><h2 id="core-services">A new website.<br /><em>Or a better one.</em></h2></div>
          <p>Start with a custom website or improve the site you already have. Design shapes how your business looks and communicates; development makes the pages, forms, and navigation work.</p>
        </div>
        <div className="service-catalog">
          {websiteServices.map(([title, description, label, anchor]) => <article key={title}><h3><Link href={`/services/website-design${anchor}`}>{title}</Link></h3><p>{description}</p><Link className="text-link" href={`/services/website-design${anchor}`}>{label} ↗</Link></article>)}
        </div>
        <p className="service-intro">Support your website after launch with <Link href="/services/local-seo">local SEO</Link> and <Link href="/services/website-care">website maintenance</Link>. For a connected website and inquiry workflow, explore the <Link href="/services/business-growth-system">Business Growth System</Link>.</p>
      </section>
      <section className="section wrap" aria-labelledby="local-web-design">
        <div className="section-heading">
          <div><p className="eyebrow">Serving the Jackson metro</p><h2 id="local-web-design">Small business websites.<br /><em>Built around your services.</em></h2></div>
          <p>The Sip Web Studio designs professional, mobile-friendly websites for small businesses in Jackson, Madison, Ridgeland, Brandon, Flowood, Pearl, Clinton, and surrounding Mississippi communities.</p>
        </div>
        <p>A contractor’s website needs to explain the work offered, show real project photos, and help homeowners request an estimate. A professional services website needs clear service descriptions and a direct consultation path. We plan the pages around your customers, your actual service area, and the information they need before getting in touch.</p>
        <Link className="text-link" href="/work/magnolia-mergers-acquisitions">See our Mississippi website design case study ↗</Link>
      </section>

      <div className="service-strip">
        <div className="wrap">
          Mississippi roots. Digital possibilities.
          <span>Jackson / Ridgeland / Madison / Flowood / Beyond</span>
        </div>
      </div>
      <section id="services" className="section wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Website services &amp; additional support</p>
            <h2>
              Start with your website.
              <br />
              <em>Connect what comes next.</em>
            </h2>
          </div>
          <p>
            Explore website design, local search support, and care plans. When your project needs more than a website, we can scope inquiry workflows, integrations, or custom software separately.
          </p>
        </div>
        <div className="services-grid">
          {serviceGroups.map(({ title: t, description: d, slugs }, index) => (
            <article key={t}>
              <span className="eyebrow">0{index + 1} /</span>
              <h3><Link href={serviceHref(slugs[0])}>{t}</Link></h3>
              <p>{d}</p>
              <ul className="home-service-links">
                {slugs.filter(slug => !["essential-care", "business-care", "local-growth"].includes(slug)).map(slug => {
                  const service = services.find(item => item.slug === slug);
                  return <li key={slug}><Link href={serviceHref(slug)}>{service.title} ↗</Link></li>;
                })}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="quick-start section wrap"><div className="section-heading"><div><p className="eyebrow">Start with one improvement</p><h2>Small step.<br /><em>Useful change.</em></h2></div><p>You do not need a full website project to get started. These one-time services solve a specific problem.</p></div><div className="pricing-grid">{[["Google Business Profile", "$299", "Accurate details, services, photos, and verification guidance.", "google-business-profile"], ["Lead capture & follow-up", "$399", "One estimate form, a lead log, owner email, and customer acknowledgment.", "lead-capture"], ["Local Visibility Boost", "$499", "An SEO audit, eligible profile optimization, and improvements to 2 pages.", "local-seo"]].map(([title, price, description, slug]) => <article key={slug}><p className="eyebrow">One-time setup</p><h3>{title}</h3><p className="price">{price}</p><p>{description}</p><div className="actions"><Link className="text-link" href={`/services/${slug}`}>See what’s included ↗</Link></div></article>)}</div><p className="small service-intro">External software and larger integrations are additional. <Link className="text-link" href="/services">Browse all services, including reviews, booking, and AI ↗</Link></p></section>
      <section id="portfolio" className="work-section section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected work / Client project</p>
              <h2>
                Serious business.
                <br />
                <em>Thoughtful presentation.</em>
              </h2>
            </div>
            <p>
              A closer look at a website built for a Mississippi advisory firm
              helping business owners navigate important transactions.
            </p>
          </div>
          <Link
            href="/work/magnolia-mergers-acquisitions"
            className="project-image"
          >
            <Image
              src="/images/magnolia1.png"
              width={1822}
              height={985}
              alt="Featured Magnolia Mergers and Acquisitions web design project"
              sizes="(max-width: 1200px) 90vw, 1120px"
            />
          </Link>
          <div className="project-caption">
            <div>
              <p className="eyebrow">Professional services · Mississippi</p>
              <h3>Magnolia Mergers & Acquisitions</h3>
              <p>Custom website design & development</p>
            </div>
            <Link className="button" href="/work/magnolia-mergers-acquisitions">
              Read the case study ↗
            </Link>
          </div>
          <div className="example-showcase">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Explore the examples</p>
                <h2>
                  Local services.
                  <br />
                  <em>Plenty of possibilities.</em>
                </h2>
              </div>
              <p>
                Three example websites for businesses that keep homes and
                outdoor spaces at their best. Browse them for inspiration
                for your own website.
              </p>
            </div>
            <div className="example-grid">
              {exampleSites.map((site) => (
                <article className="example-card" key={site.url}>
                  <a
                    className="example-cover"
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Explore ${site.name} example website (opens in a new tab)`}
                  >
                    <Image
                      src={site.image}
                      width={site.width}
                      height={site.height}
                      alt={site.alt}
                      sizes="(max-width: 750px) 90vw, 33vw"
                    />
                  </a>
                  <div className="example-details">
                    <p className="eyebrow">Example / {site.category}</p>
                    <h3>{site.name}</h3>
                    <p>{site.description}</p>
                    <a
                      className="text-link"
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Explore ${site.name} example website (opens in a new tab)`}
                    >
                      Explore the example ↗
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="wrap"><LeadDemo /></div>
      <section id="about" className="section wrap about-grid">
        <div>
          <p className="eyebrow">Meet your developer</p>
          <h2>
            A small studio.
            <br />
            <em>A personal approach.</em>
          </h2>
        </div>
        <div>
          <p className="lead">
            Hey, I’m Wes. I’m the developer behind The Sip Web Studio.
          </p>
          <p>
            I design and develop websites for Mississippi small businesses.
            You work directly with me on the page structure, visual design,
            service content, development, and launch review, from the first
            conversation through the handoff.
          </p>
          <p>
            Whether you’re starting fresh or ready to improve an existing site,
            we’ll focus on what visitors need to know: your services, where you work, examples of your work, and how to contact you.
          </p>
          <p>That work can include a customer-facing website, a connection between your business tools, a custom application, or a reporting dashboard. We agree on deliverables, access, testing, and handoff before building so you know what your project includes.</p>
          <a className="text-link" href="#contact">
            Let’s get acquainted ↗
          </a>
        </div>
      </section>
      <section className="quote-section">
        <div className="wrap">
          <p className="eyebrow">From the client</p>
          <blockquote>
            “This certainly exceeded my expectations, so thank you very much for
            completing in short order during your busy schedule.”
          </blockquote>
          <p>
            Chadwick Word <span>- Magnolia Mergers & Acquisitions</span>
          </p>
        </div>
      </section>
      <section className="section wrap" id="process">
        <div className="section-heading">
          <div>
            <p className="eyebrow">How we work</p>
            <h2>
              From first hello
              <br />
              <em>to a confident launch.</em>
            </h2>
          </div>
          <p>
            Clear steps, direct communication, and a shared understanding of
            what your website or business system needs to do.
          </p>
        </div>
        <div className="process-grid">
          {[
            [
              "01",
              "Listen",
              "We talk through your business, your customers, and what you want to accomplish.",
            ],
            [
              "02",
              "Design & build",
              "We agree on a clear scope, build your solution, and test the customer experience together.",
            ],
            [
              "03",
              "Launch & care",
              "We review the details, launch your solution, and hand it over with training and a support plan.",
            ],
          ].map(([n, t, d]) => (
            <article key={n}>
              <span className="eyebrow">{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="pricing" className="section pricing-section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">An investment in your business</p>
              <h2>
                A good fit.
                <br />
                <em>A clear starting point.</em>
              </h2>
            </div>
            <p>
              Every project is different. These starting prices help you plan;
              your proposal will reflect the scope we agree on together.
            </p>
          </div>
          <div className="pricing-grid">
            {packages.map(([t, p, d, items], i) => (
              <article className={i === 1 ? "featured" : ""} key={t}>
                <p className="eyebrow">
                  {i === 1 ? "For growing businesses" : "Business package"}
                </p>
                <h3>{t}</h3>
                <p>{d}</p>
                <p className="price">
                  {p}
                  <small>+</small>
                </p>
                <p className="small">Starting price</p>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a className="button" href="#contact">
                  Request a free growth review ↗
                </a>
                <Link className="text-link package-details" href={`/services/${["website-design", "business-growth-system", "custom-business-systems"][i]}`}>
                  Read the full package details ↗
                </Link>
              </article>
            ))}
          </div>
          <p className="small service-intro">Starting prices reflect a defined scope, not a fixed quote for every project. Hosting, messaging, CRM, and AI usage costs are separate. No guaranteed leads or rankings. A written scope and upfront payment are required before development.</p>
          <div className="care-row">
            <div>
              <h3>A little care goes a long way.</h3>
              <p>
                Monthly support: Essential Care $99/month · Business Care $199/month · Local Growth $499/month. Defined update time and clear monthly deliverables.
              </p>
            </div>
            <Link className="text-link" href="/services/website-care">
              Compare care plans ↗
            </Link>
          </div>
        </div>
      </section>
      <section className="section wrap local-grid">
        <div>
          <p className="eyebrow">Made for Mississippi businesses</p>
          <h2>
            Web design for businesses
            <br />
            in <em>Jackson, MS.</em>
          </h2>
          <p>
            Serving Jackson and the surrounding metro, including Ridgeland,
            Madison, Brandon, Flowood, Pearl, and Clinton. From professional
            services to local trades, I design and build websites that explain what you offer and help customers request an estimate or consultation.
          </p>
        </div>
        <div className="faq">
          <h3>A few good questions</h3>
          {[
            [
              "What is included in a $1,500 website?",
              "Professional Presence starts at $1,500 for up to five custom pages with responsive layouts, service content, a contact form, and basic SEO setup. The written proposal confirms your page list, content responsibilities, and revisions. Hosting, domain registration, and ongoing care are separate unless included.",
            ],
            [
              "What is the difference between web design and web development?",
              "Web design covers the page layout, visual style, navigation, and presentation of your content. Web development builds those designs into working pages and forms. The Sip Web Studio handles both within the agreed website scope.",
            ],
            [
              "Can you redesign my existing website?",
              "Yes. We can review your current website, keep what serves your business, and improve the design, content, mobile experience, and SEO foundation.",
            ],
            [
              "What does SEO setup include?",
              "Page titles and descriptions, a clear heading structure, crawlable content, a sitemap, and performance considerations. Ongoing SEO can build on that foundation with useful content and search performance reviews.",
            ],
            [
              "Can you guarantee a top Google ranking?",
              "No. Search rankings depend on competition, relevance, and many factors beyond a website’s design. I focus on a sound foundation and useful content, with ongoing improvements guided by results.",
            ],
            [
              "Do you offer support after launch?",
              "Yes. Monthly care plans are available for hosting, maintenance, content updates, and ongoing SEO support depending on the plan.",
            ],
          ].map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
      <section id="contact" className="contact-section section">
        <div className="wrap contact-grid">
          <div>
            <p className="eyebrow">Let’s make something good</p>
            <h2>
              Tell me about
              <br />
              <em>your website.</em>
            </h2>
            <p>
              Planning a new business website or a redesign? Share your current website, services, service area, and the pages or features you need. I’ll suggest a practical web design and development scope with no obligation to buy.
            </p>
            <a
              className="text-link email-link"
              href="mailto:wes@thesipwebstudio.com"
            >
              wes@thesipwebstudio.com ↗
            </a>
            <p className="small">Serving Jackson, Mississippi & beyond.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
