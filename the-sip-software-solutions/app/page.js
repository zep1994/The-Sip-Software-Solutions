import Image from "next/image";

import ContactForm from "./ContactForm";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      {/* HERO */}
        <section className="relative overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero.jpg')" }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-950/80 to-slate-900/90" />

          <div className="relative max-w-7xl mx-auto px-6 py-32">
            <div className="max-w-4xl">
              <p className="text-blue-400 font-semibold mb-4">
                Jackson, Mississippi Web Design & Website Maintenance
              </p>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Websites That Help Mississippi Businesses Generate More Customers
              </h1>

              <p className="text-xl text-slate-300 mt-8 max-w-2xl">
                Professional websites, local SEO, hosting, and website
                maintenance services for businesses across Jackson, Ridgeland,
                Madison, Brandon, Flowood, Pearl, Clinton, and surrounding areas.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold">
                  Free Consultation
                </a>

                <a href="#portfolio" className="border border-slate-700 px-8 py-4 rounded-lg font-semibold hover:bg-slate-900">
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </section>

      {/* TRUST SECTION */}
      <section className="py-12 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-400 uppercase tracking-widest">
            Helping Mississippi Businesses Grow Online
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">
            Services Designed To Grow Your Business
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="bg-slate-900 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">
                Website Design
              </h3>
              <p className="text-slate-400">
                Modern websites designed to convert visitors
                into paying customers.
              </p>
            </div>

            <div className="bg-slate-900 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">
                Website Maintenance
              </h3>
              <p className="text-slate-400">
                Updates, backups, security monitoring,
                and ongoing support.
              </p>
            </div>

            <div className="bg-slate-900 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">
                Local SEO
              </h3>
              <p className="text-slate-400">
                Help customers find your business on
                Google and local search results.
              </p>
            </div>

            <div className="bg-slate-900 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">
                Hosting
              </h3>
              <p className="text-slate-400">
                Fast, secure hosting with uptime
                monitoring and backups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 bg-slate-900 scroll-mt-8">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">
            Featured Project
          </h2>

          <p className="text-center text-slate-400 mt-4">
            A custom website for Magnolia Mergers & Acquisitions, designed around
            the provided reference and hosted on Cloudflare.
          </p>
          <p className="text-center mt-4">
            <a
              className="text-blue-400 hover:text-blue-300 underline underline-offset-4"
              href="https://magnolia-ma.com"
              target="_blank"
              rel="noreferrer"
            >
              Visit magnolia-ma.com
            </a>
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <article className="bg-slate-950 rounded-xl overflow-hidden">
              <div className="relative aspect-[16/9]">
                <Image
                  className="object-cover"
                  src="/images/magnolia1.png"
                  alt="Magnolia Mergers & Acquisitions homepage"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl">
                  Magnolia M&A Homepage
                </h3>
                <p className="text-slate-400 mt-3">
                  A polished first impression introducing Magnolia&apos;s
                  confidential business sale and acquisition advisory services.
                </p>
              </div>
            </article>

            <article className="bg-slate-950 rounded-xl overflow-hidden">
              <div className="relative aspect-[16/9]">
                <Image
                  className="object-cover"
                  src="/images/magnolia2.png"
                  alt="Magnolia website services page with four advisory offerings"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl">
                  Advisory Services
                </h3>
                <p className="text-slate-400 mt-3">
                  Clear service details help business owners explore pre-sale
                  advisory, M&A, valuations, and buy-side searches.
                </p>
              </div>
            </article>

            <article className="bg-slate-950 rounded-xl overflow-hidden">
              <div className="relative aspect-[16/9]">
                <Image
                  className="object-cover"
                  src="/images/magnolia3.png"
                  alt="Magnolia website process page describing a disciplined transaction process"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl">
                  A Guided Transaction Process
                </h3>
                <p className="text-slate-400 mt-3">
                  A step-by-step overview gives clients a clear path from
                  discovery and preparation through closing.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            Meet Your Local Mississippi Developer
          </h2>

          <p className="text-slate-300 text-lg mt-8">
            I&apos;m the founder of The Sip Software Solutions.
            I help businesses throughout Mississippi build
            professional websites that look great, rank
            better on Google, and convert visitors into
            customers.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div>✅ Local Support</div>
            <div>✅ Fast Websites</div>
            <div>✅ SEO Ready</div>
            <div>✅ Monthly Maintenance</div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">
            Client Testimonials
          </h2>

          <div className="mt-16 space-y-8">
            <div className="bg-slate-950 p-8 rounded-xl">
              <p className="text-slate-300">
                &ldquo;Thanks for making the final changes and getting the website live. 
                This certainly exceeded my expectations, 
                so thank you very much for completing in short order during your 
                busy schedule.&rdquo;
              </p>

              <p className="mt-4 font-semibold">
                Chadwick Word | Magnolia Mergers & Acquisitions
              </p>
            </div>

            <div className="bg-slate-950 p-8 rounded-xl">
              <p className="text-slate-300">
                &ldquo;This look fantastic, and certainly exceeded my expectations as well. 
                Thank you, Wes! &rdquo;
              </p>

              <p className="mt-4 font-semibold">
                Charles Word | Magnolia Mergers & Acquisitions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">

          {/* Website Packages */}
          <div>
            <div className="text-center">
              <p className="text-blue-400 font-semibold uppercase tracking-wider">
                Website Packages
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mt-3">
                Websites Built to Grow Your Business
              </h2>

              <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
                Professional websites designed around your business, your customers,
                and your goals.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mt-16">

              {/* Starter Website */}
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold">
                  Starter Website
                </h3>

                <p className="text-slate-400 mt-2">
                  A professional online presence for businesses getting started.
                </p>

                <p className="text-4xl font-bold mt-6">
                  $1,500
                  <span className="text-lg text-slate-400">+</span>
                </p>

                <p className="text-sm text-slate-500 mt-1">
                  Starting price
                </p>

                <ul className="mt-8 space-y-3 text-slate-300">
                  <li>✓ Professional website design</li>
                  <li>✓ Mobile responsive design</li>
                  <li>✓ Essential business pages</li>
                  <li>✓ Contact form</li>
                  <li>✓ Basic SEO setup</li>
                  <li>✓ Fast, modern performance</li>
                </ul>

                <a href="#contact" className="block text-center w-full mt-8 py-3 rounded-lg border border-slate-700 hover:bg-slate-800 transition">
                  Get Started
                </a>
              </div>

              {/* Business Growth Website */}
              <div className="bg-blue-950 border border-blue-500 p-8 rounded-2xl relative">

                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>

                <h3 className="text-2xl font-bold">
                  Business Growth Website
                </h3>

                <p className="text-slate-300 mt-2">
                  A powerful website built to generate leads and grow your business.
                </p>

                <p className="text-4xl font-bold mt-6">
                  $3,000
                  <span className="text-lg text-slate-300">+</span>
                </p>

                <p className="text-sm text-slate-400 mt-1">
                  Starting price
                </p>

                <ul className="mt-8 space-y-3 text-slate-200">
                  <li>✓ Everything in Starter</li>
                  <li>✓ Custom website design</li>
                  <li>✓ Conversion-focused layouts</li>
                  <li>✓ Lead generation features</li>
                  <li>✓ Advanced SEO setup</li>
                  <li>✓ Analytics integration</li>
                  <li>✓ Performance optimization</li>
                </ul>

                <a href="#contact" className="block text-center w-full mt-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition font-semibold">
                  Build My Website
                </a>
              </div>

              {/* Custom Website Solution */}
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold">
                  Custom Website Solution
                </h3>

                <p className="text-slate-400 mt-2">
                  Advanced custom solutions for businesses with unique requirements.
                </p>

                <p className="text-4xl font-bold mt-6">
                  $5,000
                  <span className="text-lg text-slate-400">+</span>
                </p>

                <p className="text-sm text-slate-500 mt-1">
                  Starting price
                </p>

                <ul className="mt-8 space-y-3 text-slate-300">
                  <li>✓ Everything in Business Growth</li>
                  <li>✓ Fully custom functionality</li>
                  <li>✓ Advanced integrations</li>
                  <li>✓ Custom applications & features</li>
                  <li>✓ Advanced SEO strategy</li>
                  <li>✓ Custom animations & interactions</li>
                  <li>✓ Scalable architecture</li>
                </ul>

                <a href="#contact" className="block text-center w-full mt-8 py-3 rounded-lg border border-slate-700 hover:bg-slate-800 transition">
                  Request a Quote
                </a>
              </div>

            </div>
          </div>


          {/* Monthly Care Plans */}
          <div className="mt-32">

            <div className="text-center">
              <p className="text-blue-400 font-semibold uppercase tracking-wider">
                Monthly Care Plans
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mt-3">
                Keep Your Website Working for You
              </h2>

              <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
                Ongoing maintenance, updates, security, and SEO support to keep
                your website fast, secure, and growing.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mt-16">

              {/* Essential Care */}
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold">
                  Essential Care
                </h3>

                <p className="text-4xl font-bold mt-6">
                  $99
                  <span className="text-lg text-slate-400">/month</span>
                </p>

                <ul className="mt-8 space-y-3 text-slate-300">
                  <li>✓ Website maintenance</li>
                  <li>✓ Hosting & security</li>
                  <li>✓ Software updates</li>
                  <li>✓ Backups</li>
                  <li>✓ Minor content updates</li>
                </ul>

                <a href="#contact" className="block text-center w-full mt-8 py-3 rounded-lg border border-slate-700 hover:bg-slate-800 transition">
                  Choose Essential
                </a>
              </div>


              {/* Growth Care */}
              <div className="bg-blue-950 border border-blue-500 p-8 rounded-2xl relative">

                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Recommended
                  </span>
                </div>

                <h3 className="text-2xl font-bold">
                  Growth Care
                </h3>

                <p className="text-4xl font-bold mt-6">
                  $199
                  <span className="text-lg text-slate-300">/month</span>
                </p>

                <ul className="mt-8 space-y-3 text-slate-200">
                  <li>✓ Everything in Essential</li>
                  <li>✓ Ongoing website updates</li>
                  <li>✓ Performance optimization</li>
                  <li>✓ Basic SEO</li>
                  <li>✓ Analytics monitoring</li>
                  <li>✓ Priority support</li>
                </ul>

                <a href="#contact" className="block text-center w-full mt-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition font-semibold">
                  Choose Growth
                </a>
              </div>


              {/* SEO Growth */}
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold">
                  SEO Growth
                </h3>

                <p className="text-4xl font-bold mt-6">
                  $499
                  <span className="text-lg text-slate-400">/month</span>
                </p>

                <ul className="mt-8 space-y-3 text-slate-300">
                  <li>✓ Everything in Growth Care</li>
                  <li>✓ Ongoing SEO optimization</li>
                  <li>✓ Keyword strategy</li>
                  <li>✓ Content updates</li>
                  <li>✓ Search performance monitoring</li>
                  <li>✓ Monthly SEO reporting</li>
                  <li>✓ Growth recommendations</li>
                </ul>

                <a href="#contact" className="block text-center w-full mt-8 py-3 rounded-lg border border-slate-700 hover:bg-slate-800 transition">
                  Choose SEO Growth
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold">
            Ready To Grow Your Business Online?
          </h2>

          <p className="mt-6 text-xl text-slate-300">
            Let&apos;s build a website that earns trust,
            attracts customers, and helps your company
            stand out online.
          </p>

          <a href="#contact" className="inline-block bg-white text-black font-semibold px-8 py-4 rounded-lg mt-10">
            Schedule A Free Consultation
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 scroll-mt-8">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">
            Contact The Sip Software Solutions
          </h2>

          <p className="text-slate-400 text-center mt-4">
            Tell us about your project and we'll get back to you.
          </p>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}