# Search visibility after deployment

## October 13 site improvements

The homepage now introduces website development, AI/business automation, custom software, and reporting dashboards, with direct links to existing service routes. The services hub highlights those four areas without removing the existing catalog or prices. Automation, AI, software, and reporting pages contain distinct project-planning content and related-service links. The Magnolia case study has a descriptive project heading, a deliverables section, and a link to the website-design service; no measured results or new client claims were added.

Each primary page keeps its existing URL and self-canonical. Root structured data uses Organization, with Service offers in its catalog, and no unverified address or phone. The sitemap and robots generator already covered the actual content routes and did not require changes. Cloudflare's prepended robots directives must be checked on the production response separately.

Public service-page contact links now use the same studio address as the homepage. The contact form retains its existing Gmail delivery destination and mailto workflow; it does not send messages automatically. Confirm both business mailboxes before changing delivery configuration.

After deploying, confirm homepage indexing in Search Console, confirm successful sitemap processing, inspect the Magnolia page and priority service routes, and request indexing after the live checks pass. Record query impressions, clicks, and qualified inquiries by service. Business Profile verification does not need to precede these website improvements.

The site targets Jackson, MS web design and development with server-rendered content, unique page titles/descriptions, canonical URLs, social previews, Organization/WebSite structured data, case-study breadcrumbs, robots.txt, and a sitemap. Organization schema is used because a verified street address and business phone were not provided. No address, review rating, or measured portfolio results were invented.

After publishing to https://thesipwebstudio.com:

1. Verify the domain in Google Search Console and submit https://thesipwebstudio.com/sitemap.xml. Inspect the homepage and case study and request indexing.
2. Create or update an eligible Google Business Profile with accurate business details and service areas. A service-area business should follow Google's address-display rules. Do not add a fictitious storefront.
3. Keep your business name and contact information consistent across real profiles and relevant local directories. Add verified phone/address information to the site only when available.
4. Ask clients for honest reviews. If Magnolia is willing, a genuine credit/link from their website can help people discover the studio.
5. Publish useful examples and service content based on real work. Avoid copied city pages or manufactured results. Track search impressions, clicks, and qualified inquiries over time.
6. Set up analytics only after choosing a provider and any necessary privacy disclosures. No analytics account or Search Console verification was configured by this change.

The contact form opens a mailto draft, retaining the existing email destination. It requires an email app and the visitor must send the draft. For server-side delivery, integrate a form/email provider and configure credentials separately.

No search position is guaranteed. Reference: https://developers.google.com/search/docs/fundamentals/seo-starter-guide and https://developers.google.com/search/docs/appearance/establish-business-details.

## October 20 Search Console priorities

Reviewed all seven supplied CSV exports. Filters identify Web search and Last 3 months, but Chart(1).csv contains October 6–18, 2026 only. The chart and device totals reconcile to 4 clicks and 155 impressions (2.58% CTR); desktop has 125 impressions and mobile 30. The country export has 151 US impressions. Search appearance contains headers only. Query rows may omit anonymized searches and should not be treated as a complete total. Page impressions are page-level and need not sum to property totals.

Priority evidence:
- /services/website-design: 17 impressions, 0 clicks, position 61.94. Queries include website design jackson ms (9 impressions, position 74.11) and web design jackson ms (3 impressions, position 83.67).
- /services/local-seo: 28 impressions, 0 clicks, position 70.89. Local SEO queries span Jackson, Ridgeland, and Madison. Preserve correct spelling in site copy rather than repeating query misspellings.
- The homepage has 4 clicks and 108 impressions, position 6.11. This aggregate is not the rank for Jackson web design. The 80 impressions for mobile app development are not a reason to add an unsupported service page.
- This is a small, short observed sample. It cannot establish a trend, a technical penalty, or a ranking improvement caused by these edits.

Implemented on seo/jackson-search-console-2026-10-20, created from SEOUpdate after confirming a clean working tree. No existing uncommitted changes were present. Main was not checked out or edited.

1. Focused homepage title, description, H1, and introduction on Jackson web design, retaining the existing automation/software offerings.
2. Added distinct website-design and local-SEO planning content and descriptions on their existing canonical URLs, including local service coverage, scope, measurement, and relevant links. Existing pricing and service data remain authoritative.
3. Added a sitewide Local SEO footer link. Kept the existing Magnolia case-study link and avoided duplicate city pages.
4. Aligned Service schema descriptions with page metadata and added BreadcrumbList data matching visible service breadcrumbs. Retained Organization schema because verified street-address/phone details are unavailable.
5. Extended generated-page checks for breadcrumb URLs, Service descriptions, the homepage title, and the local-SEO link, in addition to existing canonical, H1, JSON, internal-link, sitemap, and content checks.

Manual steps after review and deployment:
- Inspect the live homepage, website-design, and local-SEO URLs: successful HTTP status, canonical, rendered copy, and no accidental noindex or crawl block. Check Cloudflare's live robots response separately.
- Validate live structured data and social previews. Confirm sitemap processing in Search Console, inspect priority URLs, and request indexing if appropriate. No deployment, indexing request, or account configuration was performed here.
- Confirm eligibility and accurate details for a Google Business Profile, then verify/update it through the owner account. Use actual services, categories, hours, phone, service areas, and address-display settings. Add verified business facts to the website when available.
- Keep real directory profiles consistent. Request honest customer reviews and, with client permission, a credit/link from completed client work. Do not invent ratings, offices, or results.
- Confirm the existing contact form's mailto workflow and both business mailbox details. Server-side lead delivery and analytics require separate provider/account decisions.
- Save a fresh Search Console export after indexing and compare comparable 28-day periods, filtering the priority pages and relevant Jackson queries. Track qualified inquiries alongside impressions, clicks, CTR, and average position; separate website search from Business Profile/Maps performance.

References checked October 20, 2026:
- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/appearance/title-link
- https://support.google.com/business/answer/7091

Google describes local ranking in terms of relevance, distance, and prominence. These changes address useful content and clearer business relevance; they do not guarantee first place.

Validation: ESLint passed for app and scripts. The generated-page SEO audit passed for 22 pages and 631 internal links/anchors, including self-canonicals, one H1 per page, metadata, parseable JSON-LD, breadcrumb URLs, matching Service descriptions, sitemap coverage, robots sitemap, priority content, and homepage links. Git diff whitespace checks passed. The default Turbopack build encountered the local unconfigured Node launcher; a webpack build with the bundled Node compiled and generated all 27 static entries. Full build completion is recorded separately below.

Build limitation: the webpack production build exited with EPERM while copying traced dependencies into .next/standalone/node_modules (including next/router utilities and @webassemblyjs/ast). Compilation and all static-page generation succeeded, but standalone packaging did not complete. Re-run the production and Cloudflare builds in a normally configured local or CI environment before deployment. No build configuration or dependencies were changed to bypass this failure.
