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
                <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold">
                  Free Consultation
                </button>

                <button className="border border-slate-700 px-8 py-4 rounded-lg font-semibold hover:bg-slate-900">
                  View My Work
                </button>
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
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">
            Recent Projects
          </h2>

          <p className="text-center text-slate-400 mt-4">
            Replace these placeholders with screenshots
            from your previous work.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-slate-950 rounded-xl overflow-hidden">
              <div className="h-56 bg-slate-800"></div>
              <div className="p-6">
                <h3 className="font-bold text-xl">
                  Contractor Website
                </h3>

                <p className="text-slate-400 mt-3">
                  Custom website focused on generating
                  calls and quote requests.
                </p>
              </div>
            </div>

            <div className="bg-slate-950 rounded-xl overflow-hidden">
              <div className="h-56 bg-slate-800"></div>
              <div className="p-6">
                <h3 className="font-bold text-xl">
                  Restaurant Website
                </h3>

                <p className="text-slate-400 mt-3">
                  Modern responsive website with menu,
                  gallery, and online inquiries.
                </p>
              </div>
            </div>

            <div className="bg-slate-950 rounded-xl overflow-hidden">
              <div className="h-56 bg-slate-800"></div>
              <div className="p-6">
                <h3 className="font-bold text-xl">
                  Local Service Business
                </h3>

                <p className="text-slate-400 mt-3">
                  SEO-focused redesign built to improve
                  local search rankings.
                </p>
              </div>
            </div>
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
            I'm the founder of The Sip Software Solutions.
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
                "The Sip Software Solutions completely
                transformed our website and helped us
                establish a professional online presence."
              </p>

              <p className="mt-4 font-semibold">
                John Smith | ABC Roofing
              </p>
            </div>

            <div className="bg-slate-950 p-8 rounded-xl">
              <p className="text-slate-300">
                "Professional, responsive, and incredibly
                easy to work with."
              </p>

              <p className="mt-4 font-semibold">
                Sarah Jones | Local Business Owner
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">
            Website Care Plans
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">

            <div className="bg-slate-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold">
                Starter
              </h3>

              <p className="text-4xl font-bold mt-4">
                $79<span className="text-lg">/mo</span>
              </p>

              <ul className="mt-6 space-y-2 text-slate-300">
                <li>Hosting</li>
                <li>Security Updates</li>
                <li>Weekly Backups</li>
              </ul>
            </div>

            <div className="bg-blue-950 border border-blue-500 p-8 rounded-xl">
              <h3 className="text-2xl font-bold">
                Growth
              </h3>

              <p className="text-4xl font-bold mt-4">
                $149<span className="text-lg">/mo</span>
              </p>

              <ul className="mt-6 space-y-2 text-slate-300">
                <li>Everything in Starter</li>
                <li>Content Updates</li>
                <li>SEO Monitoring</li>
                <li>Monthly Reports</li>
              </ul>
            </div>

            <div className="bg-slate-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold">
                Premium
              </h3>

              <p className="text-4xl font-bold mt-4">
                $299<span className="text-lg">/mo</span>
              </p>

              <ul className="mt-6 space-y-2 text-slate-300">
                <li>Everything in Growth</li>
                <li>Priority Support</li>
                <li>Landing Pages</li>
                <li>Performance Optimization</li>
              </ul>
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
            Let's build a website that earns trust,
            attracts customers, and helps your company
            stand out online.
          </p>

          <button className="bg-white text-black font-semibold px-8 py-4 rounded-lg mt-10">
            Schedule A Free Consultation
          </button>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">
            Contact The Sip Software Solutions
          </h2>

          <form className="space-y-4 mt-10">
            <input
              className="w-full p-4 rounded-lg bg-slate-900"
              placeholder="Name"
            />

            <input
              className="w-full p-4 rounded-lg bg-slate-900"
              placeholder="Email"
            />

            <input
              className="w-full p-4 rounded-lg bg-slate-900"
              placeholder="Business Name"
            />

            <textarea
              className="w-full p-4 rounded-lg bg-slate-900"
              rows="5"
              placeholder="Tell me about your project..."
            />

            <button
              type="submit"
              className="bg-blue-600 px-8 py-4 rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}