# jobgraph-com

Marketing site for [jobgraph.com](https://jobgraph.com) — homepage, blog, research, talent, contact, and pitch pages.

Built with Vite + React + TypeScript + Tailwind CSS.

## Structure

- `src/pages/` — marketing pages (Index, Blog, BlogPost, Contact, Research, Talent, QBNCapital, Customer/pitch)
- `src/components/` — shared UI components (Layout, Navbar, Footer, FadeIn, SEO, etc.)
- `src/data/blogPosts.ts` — blog post data
- `public/` — static assets (images, icons, client logos)

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs to `dist/` — static site ready for Cloudflare Pages or any CDN.

## Deployment

Hosted on Cloudflare Pages (TBD). The `dist/` output is a fully static site.

## Related

- [`jobgraph-website`](https://github.com/Jobgraph/jobgraph-website) — app at `app.jobgraph.com` (login, dashboard, /try)
