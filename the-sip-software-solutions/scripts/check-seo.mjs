import assert from 'node:assert/strict';
import fs from 'node:fs';
import { services } from '../app/services/data.js';
import { primaryServices, serviceSearchContent } from '../app/services/search-content.js';
const base='https://thesipwebstudio.com';
const routes=['/','/about','/contact','/web-design-ridgeland-ms','/services',...services.map(s=>`/services/${s.slug}`),'/work/magnolia-mergers-acquisitions'];
const decode = value => value.replaceAll('&amp;','&').replaceAll('&quot;','"').replaceAll('&#x27;',"'").replaceAll('&#39;',"'").replaceAll('&apos;',"'");
const pages=new Map();
const ogTitles=new Map();
for(const route of routes){
 const file=`.next/server/app/${route==='/'?'index':route.slice(1)}.html`;
 const html=fs.readFileSync(file,'utf8'); pages.set(route,html);
 const canonicals=[...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*>/g)];
 assert.equal(canonicals.length,1,`${route}: one canonical`);
 const expectedCanonical = route === '/' ? `${base}/` : `${base}${route}`;
 assert.ok(canonicals[0][0].includes(`href="${expectedCanonical}"`),`${route}: self canonical`);
 const h1 = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/);
 if (h1 && /<br\s*\/?>/i.test(h1[1])) assert.ok(/ <br\s*\/?>/i.test(h1[1]), `${route}: space before h1 line break`);
 assert.equal([...html.matchAll(/<h1\b/g)].length,1,`${route}: one H1`);
 const title = decode(html.match(/<title>(.*?)<\/title>/s)?.[1] || '');
 assert.ok(title,`${route}: title`);
 assert.ok(title.length <= 70, `${route}: title is ${title.length} characters (${title})`);
 const ogUrl = html.match(/<meta property="og:url" content="([^"]+)"/);
 assert.ok(ogUrl, `${route}: og:url`);
 assert.equal(new URL(ogUrl[1]).pathname.replace(/\/$/, '') || '/', route, `${route}: og:url ${ogUrl[1]}`);
 const ogTitle = decode(html.match(/<meta property="og:title" content="([^"]+)"/)?.[1] || '');
 assert.ok(ogTitle, `${route}: og:title`);
 ogTitles.set(route, ogTitle);
 const ogDescription = html.match(/<meta property="og:description" content="([^"]+)"/)?.[1];
 assert.ok(ogDescription, `${route}: og:description`);
 assert.ok(/<meta name="description" content="[^"]+"/.test(html),`${route}: description`);
 assert.ok(!/<meta name="robots" content="[^"]*noindex/.test(html), `${route}: indexable`);
 const entities = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)]
  .flatMap(m => { const value = JSON.parse(m[1]); return value['@graph'] || value; });
 const webPages = entities.filter(item => item['@type'] === 'WebPage');
 if (route === '/' || route.startsWith('/services/')) {
  assert.equal(webPages.length, 1, `${route}: one page-specific WebPage entity`);
  assert.equal(new URL(webPages[0].url).pathname, route, `${route}: WebPage identifies current route`);
 } else assert.equal(webPages.length, 0, `${route}: no inherited homepage entity`);
 for(const m of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)) JSON.parse(m[1]);
 if(route.startsWith('/services/')){
  const data = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)].flatMap(m => JSON.parse(m[1]));
  const breadcrumb = data.find(item => item['@type'] === 'BreadcrumbList');
  assert.ok(breadcrumb, route + ': breadcrumb schema');
  assert.deepEqual(breadcrumb.itemListElement.map(item => item.item), [base, base + '/services', base + route], route + ': breadcrumb URLs');
  assert.equal(data.find(item => item['@type'] === 'Service').description, html.match(/<meta name="description" content="([^"]+)"/)[1].replaceAll('&amp;', '&'), route + ': service schema matches description');
  assert.ok(html.includes('property="og:image"'),`${route}: social image`);
  assert.ok(html.includes('name="twitter:title"'),`${route}: twitter metadata`);
 }
}
let count=0;
for(const [route,html] of pages){
 for(const [,href] of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)){
  if(!href.startsWith('/')&&!href.startsWith('#'))continue;
  const target=new URL(href,new URL(route,base));
  const targetHtml=pages.get(target.pathname);
  assert.ok(targetHtml,`${route}: route ${target.pathname}`);
  if(target.hash)assert.ok(targetHtml.includes(`id="${decodeURIComponent(target.hash.slice(1))}"`),`${route}: anchor ${href}`);
  count++;
 }
}
const {default:sitemap}=await import('../app/sitemap.js');
assert.deepEqual(sitemap().map(s=>new URL(s.url).pathname).sort(),routes.slice().sort());
const {default:robots}=await import('../app/robots.js');
assert.equal(robots().sitemap,base+'/sitemap.xml');
assert.ok(pages.get('/').includes('Jackson, MS.'));
assert.ok(pages.get('/').includes('"@type":"ProfessionalService"'));
const homeOgTitle = ogTitles.get('/');
for (const [route, ogTitle] of ogTitles) {
 if (route !== '/') assert.notEqual(ogTitle, homeOgTitle, `${route}: og:title must not repeat the homepage`);
}
const crmMain = pages.get('/services/crm-integrations').match(/<main[\s\S]*?<\/main>/)[0]
 .replace(/<script[\s\S]*?<\/script>/g, ' ')
 .replace(/<[^>]+>/g, ' ')
 .replace(/&amp;/g, '&');
const crmWords = crmMain.trim().split(/\s+/).filter(Boolean);
assert.ok(crmWords.length >= 1000, `CRM page has ${crmWords.length} words`);
assert.ok(pages.get('/').includes('>CRM integration services in Jackson, MS<'), 'Homepage promotes CRM integrations');
assert.ok(pages.get('/services/crm-integrations').includes('Starting at $750'), 'CRM pricing is visible');
const aiMain = pages.get('/services/ai-automation').match(/<main[\s\S]*?<\/main>/)[0]
 .replace(/<script[\s\S]*?<\/script>/g, ' ')
 .replace(/<[^>]+>/g, ' ')
 .replace(/&amp;/g, '&');
const aiWords = aiMain.trim().split(/\s+/).filter(Boolean);
assert.ok(aiWords.length >= 900, `AI automation page has ${aiWords.length} words`);
assert.ok(!/\$\d/.test(aiMain), 'AI automation page has no dollar prices');
assert.ok(aiMain.includes('Flat-price setup, quoted after a free 15-minute call'), 'AI pricing line is present');
assert.ok(pages.get('/').includes('href="/services/ai-automation"'), 'Homepage links to AI automation');
assert.ok(pages.get('/services').includes('href="/services/ai-automation"'), 'Services listing links to AI automation');
for (const service of primaryServices) assert.ok(pages.get('/').includes(`href="/services/${service.slug}"`), `Homepage links to ${service.slug}`);
for (const [slug, content] of Object.entries(serviceSearchContent)) {
 const html = pages.get(`/services/${slug}`);
 for (const [heading] of content.sections) assert.ok(html.includes(heading), `${slug}: server-rendered project content`);
}
assert.ok(pages.get('/work/magnolia-mergers-acquisitions').includes('href="/services/website-design"'), 'Case study links to website service');
console.log(`Passed: ${routes.length} generated pages, self canonicals, H1s, metadata, JSON-LD, ${count} internal links/anchors, sitemap coverage, robots sitemap, and organization schema.`);

assert.ok(pages.get('/').includes('<title>Web Design Jackson, MS | Websites from $1,500 | The Sip Web Studio</title>'), 'Homepage targets Jackson web design');
assert.ok(pages.get('/').includes('href="/services/local-seo"'), 'Homepage links to local SEO');
assert.ok(pages.get('/services/website-design').includes('Redesign without losing useful pages'), 'Redesign guidance is rendered');
assert.ok(pages.get('/').includes('<a href="/services/website-design">Web design</a>'), 'Direct main navigation link to web design');
assert.ok(pages.get('/services/website-design').includes('<title>Website Design in Jackson, MS | Web Development | The Sip Web Studio</title>'), 'Website design title leads with Jackson');
assert.ok(pages.get('/services/website-design').includes('Website design &amp; development in Jackson, MS') || pages.get('/services/website-design').includes('Website design & development in Jackson, MS'), 'Website design H1');
assert.ok(pages.get('/services/website-design').includes('Do you offer website development in Jackson, MS?'), 'Website development FAQ');
assert.ok(pages.get('/services/local-seo').includes('<title>SEO Jackson, MS | Local SEO &amp; Google Maps | The Sip Web Studio</title>') || pages.get('/services/local-seo').includes('<title>SEO Jackson, MS | Local SEO & Google Maps | The Sip Web Studio</title>'), 'Local SEO title leads with SEO Jackson, MS');
assert.ok(pages.get('/services/crm-integrations').includes('B2B CRM integration in Mississippi'), 'CRM B2B section');
assert.ok(pages.get('/').includes('Do you do website development in Jackson, MS?'), 'Homepage development FAQ');
const ridgelandMain = pages.get('/web-design-ridgeland-ms').match(/<main[\s\S]*?<\/main>/)[0].replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<[^>]+>/g, ' ');
const ridgelandWords = ridgelandMain.trim().split(/\s+/).filter(Boolean);
assert.ok(ridgelandWords.length >= 700, `Ridgeland page has ${ridgelandWords.length} words`);
assert.equal([...pages.get('/web-design-ridgeland-ms').matchAll(/<h2\b/g)].length, 4, 'Ridgeland has four H2s');
