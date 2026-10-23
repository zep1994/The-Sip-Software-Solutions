import fs from 'node:fs';
import assert from 'node:assert/strict';
import sitemap from '../app/sitemap.js';

const base = 'https://thesipwebstudio.com';
const pages = sitemap().map(({ url }) => new URL(url).pathname);
const titles = new Set(), descriptions = new Set(), assets = new Set();
for (const route of pages) {
  const html = fs.readFileSync(`.next/server/app/${route === '/' ? 'index' : route.slice(1)}.html`, 'utf8');
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
  assert.ok(title && !titles.has(title), `${route}: unique title`);
  assert.ok(description && !descriptions.has(description), `${route}: unique description`);
  titles.add(title); descriptions.add(description);
  assert.ok(html.includes('name="viewport"'), `${route}: viewport`);
  assert.ok(html.includes('<html lang="en"'), `${route}: language`);
  for (const [, tag] of html.matchAll(/(<img\b[^>]*>)/g)) {
    assert.ok(/\balt="[^"]*"/.test(tag), `${route}: image alt attribute`);
    const src = tag.match(/\bsrc="([^"]+)"/)?.[1]?.replaceAll('&amp;', '&');
    if (src?.startsWith('/')) {
      const url = new URL(src, base);
      assets.add(url.pathname === '/_next/image' ? url.searchParams.get('url') : url.pathname);
    }
  }
  for (const [, url] of html.matchAll(/<meta (?:property="og:image"|name="twitter:image") content="([^"]+)"/g)) {
    assets.add(new URL(url, base).pathname);
  }
}
for (const asset of assets) assert.ok(fs.existsSync(`public${asset}`), `Missing public asset: ${asset}`);
console.log(`Passed: ${pages.length} unique titles/descriptions, language, viewport, image alt attributes and ${assets.size} referenced image assets.`);

if (process.argv.includes('--live')) {
  const checks = [...pages.map(route => base + route), ...[...assets].map(path => base + path),
    base + '/robots.txt', base + '/sitemap.xml', base + '/seo-audit-nonexistent-page',
    'http://thesipwebstudio.com/', 'https://www.thesipwebstudio.com/',
    base + '/services/website-design/'];
  for (let offset = 0; offset < checks.length; offset += 4) {
    const results = await Promise.all(checks.slice(offset, offset + 4).map(async url => {
      try {
        const response = await fetch(url, { redirect: 'manual', signal: AbortSignal.timeout(15000) });
        const body = response.headers.get('content-type')?.includes('text/html') ? await response.text() : '';
        return { url, status: response.status, location: response.headers.get('location'),
          robots: response.headers.get('x-robots-tag'),
          canonical: body.match(/<link rel="canonical" href="([^"]+)"/)?.[1] };
      } catch (error) { return { url, error: error.message }; }
    }));
    for (const result of results) console.log(JSON.stringify(result));
  }
}
