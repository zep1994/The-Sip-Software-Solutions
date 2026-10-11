# Cloudflare deployment

The production site uses the Next.js / OpenNext Worker configuration in `wrangler.jsonc`. Its Worker is `the-sip-software-solutions`, with the custom domain `thesipwebstudio.com`.

Build and publish a fresh bundle with:

```sh
npm run deploy:cloudflare
```

For Cloudflare Workers Builds, use this project directory (`the-sip-software-solutions`) as the root directory, `npm run build:cloudflare` as the build command, and `npx opennextjs-cloudflare deploy` as the deploy command. The production branch should be `main`.

Generated `.open-next` and `.wrangler` files stay ignored. They must be regenerated from source before deployment. A Git push updates production only when the Cloudflare Git integration is connected and its build succeeds.

To test the actual Worker runtime locally:

```sh
npm run preview:cloudflare
node scripts/check-service-links.mjs http://127.0.0.1:8787
```

After deployment:

```sh
node scripts/check-service-links.mjs https://thesipwebstudio.com
```

Each service has an explicit route in `app/services/<slug>/page.js` and uses the shared `ServicePage` component. When adding a service, add its data, category membership, and route. The link audit verifies catalog coverage, prices, page responses, internal anchors, and sitemap entries.
