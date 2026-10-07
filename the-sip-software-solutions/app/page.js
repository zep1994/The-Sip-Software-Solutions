import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";

const services = [
  [
    "01",
    "Web design & development",
    "A custom website that feels like your business. Clear messaging, thoughtful design, and layouts that work beautifully on phones and desktops.",
  ],
  [
    "02",
    "Local SEO",
    "Help search engines understand what you do and where you work with useful service content, page metadata, and a sound technical foundation.",
  ],
  [
    "03",
    "Website care",
    "Keep your website current with content updates, software maintenance, backups, and practical support as your business grows.",
  ],
  [
    "04",
    "Hosting & performance",
    "Fast, secure hosting and performance improvements that make it easier for customers to explore your website and get in touch.",
  ],
];
const packages = [
  [
    "Starter",
    "$1,500",
    "A considered first step online.",
    [
      "Professional website design",
      "Mobile responsive layouts",
      "Essential business pages",
      "Contact form & basic SEO",
    ],
  ],
  [
    "Business Growth",
    "$3,000",
    "More room to tell your story.",
    [
      "Custom design & lead generation",
      "Expanded SEO setup",
      "Analytics integration",
      "Performance optimization",
    ],
  ],
  [
    "Custom",
    "$5,000",
    "Built around your next big idea.",
    [
      "Custom functionality",
      "Advanced integrations",
      "Applications & interactive features",
      "Scalable architecture",
    ],
  ],
];
export default function Home() {
  return (
    <main id="main-content">
      <section className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">
            Independent web studio · Jackson, Mississippi
          </p>
          <h1>
            Web design with
            <br />a little <em>Southern soul.</em>
          </h1>
          <p className="lead">
            Your business has a story. Let’s give it a website worth sharing.
          </p>
          <p>
            Custom web design, development, and local SEO for businesses in
            Jackson, MS and across Mississippi. Thoughtfully built. Easy to use.
            Ready for what’s next.
          </p>
          <div className="actions">
            <a className="button" href="#contact">
              Let’s talk about your website <span>↗</span>
            </a>
            <a className="text-link" href="#portfolio">
              Explore the work ↓
            </a>
          </div>
          <div className="hero-note">
            <span className="dot" /> Local perspective. Personal attention.
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
      <div className="service-strip">
        <div className="wrap">
          Mississippi roots. Digital possibilities.
          <span>Jackson / Ridgeland / Madison / Flowood / Beyond</span>
        </div>
      </div>
      <section id="services" className="section wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">What I do</p>
            <h2>
              Good design.
              <br />
              <em>Real purpose.</em>
            </h2>
          </div>
          <p>
            A website should do more than look the part. It should explain your
            business, earn trust, and give people a clear next step.
          </p>
        </div>
        <div className="services-grid">
          {services.map(([n, t, d]) => (
            <article key={n}>
              <span className="eyebrow">{n} /</span>
              <h3>{t}</h3>
              <p>{d}</p>
              <a className="text-link" href="#contact">
                Let’s discuss it ↗
              </a>
            </article>
          ))}
        </div>
      </section>
      <section id="portfolio" className="work-section section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected work / 01</p>
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
        </div>
      </section>
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
            I help Mississippi businesses turn what makes them special into a
            clear, professional online presence. You work directly with the
            person designing and building your website—from the first
            conversation to the finishing touches.
          </p>
          <p>
            Whether you’re starting fresh or ready to improve an existing site,
            we’ll focus on your customers, your goals, and a website you’re
            proud to put your name on.
          </p>
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
            Chadwick Word <span>— Magnolia Mergers & Acquisitions</span>
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
            what your website needs to do.
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
              "Your story becomes a thoughtful design, then a responsive, working website.",
            ],
            [
              "03",
              "Launch & care",
              "We review the details together, launch your site, and plan for ongoing support.",
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
                  {i === 1 ? "For growing businesses" : "Website package"}
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
                  Discuss your project ↗
                </a>
              </article>
            ))}
          </div>
          <div className="care-row">
            <div>
              <h3>A little care goes a long way.</h3>
              <p>
                Monthly support: Essential Care $99/month · Growth Care
                $199/month · SEO Growth $499/month.
              </p>
            </div>
            <a className="text-link" href="#contact">
              Find your care plan ↗
            </a>
          </div>
        </div>
      </section>
      <section className="section wrap local-grid">
        <div>
          <p className="eyebrow">Made for Mississippi businesses</p>
          <h2>
            Your web developer
            <br />
            in <em>Jackson, MS.</em>
          </h2>
          <p>
            Serving Jackson and the surrounding metro, including Ridgeland,
            Madison, Brandon, Flowood, Pearl, and Clinton. From professional
            services to local small businesses, I build websites that make your
            expertise easier to find and understand.
          </p>
        </div>
        <div className="faq">
          <h3>A few good questions</h3>
          {[
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
              Your next chapter
              <br />
              <em>starts here.</em>
            </h2>
            <p>
              Tell me a little about your business and what you have in mind.
              Let’s start with a free consultation.
            </p>
            <a
              className="text-link email-link"
              href="mailto:thesipsoftwaresolutions@gmail.com"
            >
              thesipsoftwaresolutions@gmail.com ↗
            </a>
            <p className="small">Serving Jackson, Mississippi & beyond.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
