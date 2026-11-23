import FaqJsonLd from "../FaqJsonLd";
import Link from "next/link";
import { socialMetadata } from "../socialMetadata";

const description = "Custom website design and development for Ridgeland, MS small businesses. Work directly with Wes on responsive websites, redesigns, and clear inquiry paths.";
const faqs = [
  ["How much does a Ridgeland small business website cost?", "The starting website package is $1,500 for up to five custom pages, with responsive layouts, a contact form, and basic SEO setup. Your proposal confirms the page list, content responsibilities, and revisions. Hosting, domain registration, and ongoing care are separate unless the agreement includes them."],
  ["Do I need a Ridgeland storefront?", "No. The website explains the communities you actually serve. You work directly with Wes, and the scope is agreed in writing. A Ridgeland business does not need a public storefront for the site to say where it works."],
  ["Can the site cover Madison County and Jackson?", "Yes. Many Ridgeland businesses also serve Madison, Jackson, and nearby communities such as Flowood, Brandon, Pearl, and Clinton. We write the service area around the places you name, rather than copying one page for each city."],
  ["Does this include local SEO?", "Basic page titles, descriptions, and a clear heading structure are part of the starting website. Ongoing local SEO, including a review of search visibility and an eligible Google Business Profile, is a separate scope."],
];

export const metadata = socialMetadata({
  path: "/web-design-ridgeland-ms",
  title: "Web Design in Ridgeland, MS | From $1,500 | The Sip Web Studio",
  description,
});

export default function Ridgeland() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://thesipwebstudio.com/" },
      { "@type": "ListItem", position: 2, name: "Web design in Ridgeland, MS", item: "https://thesipwebstudio.com/web-design-ridgeland-ms" },
    ],
  };
  return (
    <main id="main-content" className="section wrap">
      <FaqJsonLd faqs={faqs} />
      <nav aria-label="Breadcrumb" className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>Web design in Ridgeland, MS</span></nav>
      <p className="eyebrow">Serving the Jackson metro</p>
      <h1>Web design for <br /><em>Ridgeland, MS businesses.</em></h1>
      <p className="lead">Give customers a clear view of your services and a straightforward way to reach you. Work directly with Wes on a custom website or redesign, starting at $1,500 for up to five pages.</p>
      <div className="case-grid">
        <h2>Explain where you work</h2>
        <div>
          <p>A Ridgeland business may serve customers in Ridgeland, across Madison County, and into the wider Jackson metro. The website should say that plainly. A visitor needs to know what you do, whether you work in their community, and how to ask for a quote or a consultation. We plan those answers around the places you actually work.</p>
          <p>We do not copy the same page once for Ridgeland and again for Madison, Jackson, Flowood, Brandon, Pearl, or Clinton. A list of city names does not help a customer decide. The useful page names the services you offer and the area you cover, then gives a direct way to get in touch.</p>
          <p>Appointment-based businesses can point visitors toward a consultation. Trades and home services can explain the jobs they accept and collect the details needed for an estimate. The page list follows that work. It is agreed before design begins, so the site is built for your customers rather than for a generic small-business template.</p>
        </div>
      </div>
      <div className="case-grid">
        <h2>Plan the website before the build</h2>
        <div>
          <p>You work directly with Wes at The Sip Web Studio, from the first conversation through launch. The written proposal sets the page list, who provides the words and photos, how many revisions are included, and what has to be finished before the site goes live.</p>
          <p>Design covers the layout, navigation, type, and the use of your real photographs. Development turns that plan into pages that work on a phone and on a larger screen. The contact form, click-to-call link, and the path from a service description to an inquiry are part of that build. We review those paths before launch.</p>
          <p>The starting website is typically two to three weeks after content, account access, and approvals are in hand. Additional pages, content writing, or a booking tool can change the timeline, and those items are scoped before the work starts. Hosting, domain registration, and monthly care stay separate unless your agreement includes them.</p>
        </div>
      </div>
      <div className="case-grid">
        <h2>What the starting website includes</h2>
        <div>
          <p>The $1,500 starting package covers up to five custom pages. That includes responsive layouts, service descriptions, service-area content, a contact form, click-to-call, page titles and descriptions, and a basic on-page SEO setup. Before launch we check navigation, the form, and how the agreed pages read on a smaller screen.</p>
          <p>You receive a launch review, training, and a handoff. You keep ownership of your domain and of your business accounts. If you want someone to make later updates, monthly care can be discussed separately. It is not assumed in the starting website price.</p>
          <p>If you already have a website, we look at the current addresses and the pages that still help customers. Useful URLs can stay. When an address has to change, the scope includes a permanent redirect and updates to the internal links, so people who already have the old page can still reach you.</p>
        </div>
      </div>
      <div className="case-grid">
        <h2>Connect your website and local presence</h2>
        <div>
          <p>Use the same business name, phone number, and description of your services on the website and on an eligible Google Business Profile. Customers notice when those details disagree. We can scope <Link href="/services/local-seo">local SEO support</Link> with the website or after it, including a look at search visibility and improvements to existing service pages.</p>
          <p>That work does not guarantee a position on Google or on Maps. It makes the business easier to understand: what you offer, where you work, and how to ask for the next step. Rankings depend on competition and on factors outside a single website project.</p>
          <p>For a look at how a Mississippi professional-services site can present its work, read the <Link href="/work/magnolia-mergers-acquisitions">Magnolia Mergers &amp; Acquisitions case study</Link>. It shows clear services and a guided path to contact. It is one completed website, not a Ridgeland storefront and not a promised result for every business.</p>
          <p>When you are ready, <Link href="/services/website-design">explore website design and development</Link> for the Jackson package details, or tell Wes about the Ridgeland site you need. Bring your service area, the pages you think you need, and a link to the current site if you have one.</p>
        </div>
      </div>
      <div className="case-grid">
        <h3>A few good questions</h3>
        <div className="faq">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
      <Link className="button" href="/contact">Discuss your Ridgeland website ↗</Link>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c") }} />
    </main>
  );
}
