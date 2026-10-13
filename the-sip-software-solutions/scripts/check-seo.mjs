import assert from 'node:assert/strict';
import fs from 'node:fs';
import { services } from '../app/services/data.js';
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
 for(const m of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)) JSON.parse(m[1]);
 if(route.startsWith('/services/')){
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
assert.ok(pages.get('/').includes('Professional Web Design'));
assert.ok(pages.get('/').includes('"@type":"ProfessionalService"'));
console.log(`Passed: ${routes.length} generated pages, self canonicals, H1s, metadata, JSON-LD, ${count} internal links/anchors, sitemap coverage, robots sitemap, and local business schema.`);
