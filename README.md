# Dare Tech X

Corporate website for **Dare Tech X** — a freelance software development & cyber security studio based in Lanham, Maryland.

Built with [Astro](https://astro.build) (static output) and Tailwind CSS 4.

## Pages

- Home (`/`)
- About (`/about`)
- Services (`/services`) — includes FAQ
- Contact (`/contact`) — Web3Forms-powered contact form
- Privacy Policy (`/privacy`)
- Terms of Service (`/terms`)
- 404 page (auto-generated)

## Configuration

All business details and placeholders live in [`src/consts.ts`](src/consts.ts):

| Constant | Purpose | Status |
| --- | --- | --- |
| `EMAIL` | Business email shown site-wide | `info@daretechx.com` |
| `WEB3FORMS_ACCESS_KEY` | Web3Forms API key for the contact form | Filled in |
| Phone / Address | Real business details | Filled in |

`site` in [`astro.config.mjs`](astro.config.mjs) is set to the real domain (`https://daretechx.com`) — it drives the canonical URLs, Open Graph links, and the sitemap.

## Commands

| Command | Action |
| :--- | :--- |
| `bun install` | Install dependencies |
| `bun dev` | Start local dev server at `localhost:4321` |
| `bun build` | Build the production site to `./dist/` |
| `bun preview` | Preview the production build locally |
| `bun check` | Run `astro check` type checking |

## Deploy

Deploys as a static site (output: `dist/`). Works with Cloudflare Pages, Netlify, or Vercel:

- Build command: `bun run build`
- Output directory: `dist/`

> **Note:** `bun.lock` is kept in the `lockfileVersion: 1` format so it is readable by the
> Bun version bundled with the Cloudflare Pages build image (1.2.x). Bun 1.4+ reads this
> format fine. If the lockfile ever changes, verify with a Bun 1.2.x build before pushing.
