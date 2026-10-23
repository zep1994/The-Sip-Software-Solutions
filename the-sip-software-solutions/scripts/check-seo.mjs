import assert from 'node:assert/strict';
import fs from 'node:fs';
import { services } from '../app/services/data.js';
import { primaryServices, serviceSearchContent } from '../app/services/search-content.js';
const base='https://thesipwebstudio.com';
const routes=['/','/services',...services.map(s=>`/services/${s.slug}`),'/work/magnolia-mergers-acquisitions'];
const pages=new Map();
for(const route of routes){
 const file=`.next/server/app/${route==='/'?'index':route.slice(1)}.html`;
 const html=fs.readFileSync(file,'utf8'); pages.set(route,html);
 const canonicals=[...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*>/g)];
 assert.equal(canonicals.length,1,`${route}: one canonical`);
 assert.ok(canonicals[0][0].includes(`href="${base}${route==='/'?'':route}"`),`${route}: self canonical`);
 assert.equal([...html.matchAll(/<h1\b/g)].length,1,`${route}: one H1`);
 assert.ok(/<title>.+?<\/title>/.test(html),`${route}: title`);
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
assert.ok(pages.get('/').includes('"@type":"Organization"'));
for (const service of primaryServices) assert.ok(pages.get('/').includes(`href="/services/${service.slug}"`), `Homepage links to ${service.slug}`);
for (const [slug, content] of Object.entries(serviceSearchContent)) {
 const html = pages.get(`/services/${slug}`);
 for (const [heading] of content.sections) assert.ok(html.includes(heading), `${slug}: server-rendered project content`);
}
assert.ok(pages.get('/work/magnolia-mergers-acquisitions').includes('href="/services/website-design"'), 'Case study links to website service');
console.log(`Passed: ${routes.length} generated pages, self canonicals, H1s, metadata, JSON-LD, ${count} internal links/anchors, sitemap coverage, robots sitemap, and organization schema.`);

assert.ok(pages.get('/').includes('<title>Web Design in Jackson, MS | The Sip Web Studio</title>'), 'Homepage targets Jackson web design');
assert.ok(pages.get('/').includes('href="/services/local-seo"'), 'Homepage links to local SEO');
assert.ok(pages.get('/services/website-design').includes('Redesign without losing useful pages'), 'Redesign guidance is rendered');
assert.ok(pages.get('/').includes('<a href="/services/website-design">Web design</a>'), 'Direct main navigation link to web design');
