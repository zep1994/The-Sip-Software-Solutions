import "./globals.css";
import Link from "next/link";
export const metadata = {
  metadataBase: new URL("https://thesipwebstudio.com"),
  title: {
    default: "Web Developer in Jackson, MS | The Sip Web Studio",
    template: "%s | The Sip Web Studio",
  },
  description:
    "Custom web design and development in Jackson, MS. The Sip Web Studio builds professional websites for Mississippi businesses, with local SEO and ongoing website care.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "The Sip Web Studio",
    title: "Web Design with Southern Soul | The Sip Web Studio",
    description:
      "Custom websites, local SEO, and personal support for businesses in Jackson, Mississippi.",
    images: [
      {
        url: "/social-card.png",
        width: 1200,
        height: 630,
        alt: "The Sip Web Studio — web design with Southern soul",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Sip Web Studio | Jackson, MS Web Design",
    description: "Thoughtful websites for Mississippi businesses.",
    images: ["/social-card.png"],
  },
  icons: { icon: "/studio-icon.svg" },
  robots: { index: true, follow: true },
};
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://thesipwebstudio.com/#studio",
      name: "The Sip Web Studio",
      url: "https://thesipwebstudio.com",
      email: "thesipsoftwaresolutions@gmail.com",
      areaServed: [
        "Jackson, Mississippi",
        "Ridgeland, Mississippi",
        "Madison, Mississippi",
        "Flowood, Mississippi",
        "Brandon, Mississippi",
        "Pearl, Mississippi",
        "Clinton, Mississippi",
      ],
      description:
        "Independent web design and development studio serving Jackson and Mississippi businesses.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Website services",
        itemListElement: [
          "Web design and development",
          "Local SEO",
          "Website maintenance",
          "Hosting",
        ].map((name) => ({ "@type": "OfferCatalog", name })),
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://thesipwebstudio.com/#website",
      url: "https://thesipwebstudio.com",
      name: "The Sip Web Studio",
      publisher: { "@id": "https://thesipwebstudio.com/#studio" },
      inLanguage: "en-US",
    },
  ],
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <header className="site-header">
          <div className="wrap nav">
            <Link
              href="/"
              className="wordmark"
              aria-label="The Sip Web Studio home"
            >
              the sip<span>WEB STUDIO</span>
            </Link>
            <nav aria-label="Main navigation">
              <Link href="/#services">Services</Link>
              <Link href="/#portfolio">Work</Link>
              <Link href="/#about">About</Link>
              <Link href="/#pricing">Pricing</Link>
              <Link className="nav-cta" href="/#contact">
                Let’s talk ↗
              </Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="wrap footer">
          <Link href="/" className="wordmark">
            the sip<span>WEB STUDIO</span>
          </Link>
          <p>Thoughtfully built in Mississippi.</p>
          <p>© {new Date().getFullYear()} The Sip Web Studio</p>
        </footer>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
