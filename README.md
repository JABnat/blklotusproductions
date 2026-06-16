# BLK Lotus Productions

Photography and videography portfolio site — cinematic, responsive, production-grade.

Built with Next.js App Router, deployed to Cloudflare Workers via OpenNext, with Bunny.net for all video streaming and auto-thumbnails.

---

## Tech Stack

### Framework

| Tool | Version | Purpose |
|------|---------|---------|
| [Next.js](https://nextjs.org) | 16.x | App Router, file-based routing, metadata API, server components |
| [React](https://react.dev) | 19.x | UI rendering |

### Deployment & Hosting

| Tool | Purpose |
|------|---------|
| [Cloudflare Workers](https://workers.cloudflare.com) | Serverless edge runtime hosting |
| [@opennextjs/cloudflare](https://github.com/opennextjs/opennextjs-cloudflare) | Adapts Next.js build output to run on Cloudflare Workers |
| [Wrangler](https://developers.cloudflare.com/workers/wrangler/) | Cloudflare CLI — deploys the Workers bundle |

Deploy command: `npm run deploy` (runs `opennextjs-cloudflare build && opennextjs-cloudflare deploy`)

### Domain & DNS

| Tool | Purpose |
|------|---------|
| [Namecheap](https://namecheap.com) | Domain registrar (`blklotus-productions.com`) |
| Cloudflare DNS | DNS management (nameservers pointed from Namecheap to Cloudflare) |

### Video & Media

| Tool | Purpose |
|------|---------|
| [Bunny.net Stream](https://bunny.net/stream) | Video hosting, HLS delivery, auto-thumbnail generation |
| [hls.js](https://github.com/video-dev/hls.js) | HLS playback in non-Safari browsers (dynamically imported, zero bundle cost until used) |

All videos are stored in Bunny Stream Library ID `683644`, delivered via pull zone `vz-2ae40eea-75b.b-cdn.net`.

Videos are referenced by GUID in `src/config/bunny.js` — never by file path.

### Email

| Tool | Purpose |
|------|---------|
| [Resend](https://resend.com) | Transactional email for the contact form (`/api/contact`) |

### Styling & Fonts

| Tool | Purpose |
|------|---------|
| CSS Modules | Scoped component styles (`*.module.css`) |
| CSS custom properties | Design tokens (colors, spacing) in `globals.css` |
| [Koulen](https://fonts.google.com/specimen/Koulen) | Display / heading font |
| [Instrument Sans](https://fonts.google.com/specimen/Instrument+Sans) | Body / UI font |
| [Exo](https://fonts.google.com/specimen/Exo) | Navbar and footer |
| [DM Mono](https://fonts.google.com/specimen/DM+Mono) | Admin dashboard code display |

Fonts are loaded via `next/font/google` — downloaded at build time, served from `/_next/static/` with no external requests at runtime.

### Dev Tooling

| Tool | Purpose |
|------|---------|
| ESLint + eslint-config-next | Linting |
| Node.js 18+ / nvm | Runtime version management |

---

## Getting Started

### Prerequisites

- Node.js 18.x or higher (managed via `.nvmrc` / nvm)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run start
```

Opens at [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
```

### Deploy to Cloudflare

```bash
npm run deploy
```

This runs `opennextjs-cloudflare build && opennextjs-cloudflare deploy`. Requires Wrangler to be authenticated (`wrangler login`).

### Lint

```bash
npm run lint
```

---

## Environment Variables

Create `.env.local` at the project root. **Never commit this file.**

```env
# Bunny Stream API key — server-side only (uploading/deleting videos)
# Dashboard: dash.bunny.net → Stream → Account → API
BUNNY_API_KEY=your_key_here

# Resend API key — contact form email delivery
# Dashboard: resend.com → API Keys
RESEND_API_KEY=your_key_here

# Email address that receives contact form submissions
CONTACT_EMAIL=you@yourdomain.com
```

> `BUNNY_API_KEY` and `RESEND_API_KEY` are never exposed to the client. Do **not** prefix them with `NEXT_PUBLIC_`.

---

## Project Structure

```
src/
├── app/
│   ├── layout.js                  # Root layout — fonts, metadata, security headers
│   ├── page.js                    # Homepage
│   ├── globals.css                # Design tokens + global resets
│   ├── about/page.js              # About page
│   ├── photos/
│   │   ├── page.js
│   │   └── PhotosGallery.js       # Photo grid with filter pills + lightbox
│   ├── videos/
│   │   ├── page.js
│   │   └── VideosGallery.js       # Bunny video grid with filter pills + lightbox
│   ├── works/
│   │   ├── page.js
│   │   └── WorksGallery.js        # Combined photo + video grid
│   ├── contact/
│   │   ├── page.js
│   │   └── ContactContent.js      # Contact form, FAQ accordion, photo marquee
│   ├── admin/
│   │   ├── page.js
│   │   └── AdminPage.js           # Password-protected dashboard
│   ├── api/contact/route.js       # Server route — sends email via Resend
│   ├── robots.js                  # Auto-generates /robots.txt
│   ├── sitemap.js                 # Auto-generates /sitemap.xml
│   ├── error.js                   # Error boundary
│   └── not-found.js               # 404 page
├── components/
│   ├── BunnyBackgroundLoop/       # Silent HLS hero background video
│   ├── BunnyVideo/                # Click-to-play video facade (poster → iframe)
│   ├── MediaGrid/                 # Photo/video grid with lightbox overlay
│   ├── Hero/                      # Homepage hero section
│   ├── FeaturedWorks/             # Homepage featured works cards
│   ├── AboutSummary/              # Homepage about + brand logo strip
│   ├── Services/                  # Services section
│   ├── Testimonials/              # Testimonials section
│   ├── Navbar/                    # Navigation bar
│   ├── Footer/                    # Footer
│   ├── CustomCursor/              # Custom cursor effect
│   ├── PageTransition/            # Page transition animation
│   ├── PageWrapper/               # Wraps pages with transition
│   └── SiteShell/                 # Navbar + Footer shell
├── config/
│   └── bunny.js                   # Bunny Stream GUIDs, URL helpers, video catalogue
└── styles/
    └── pages.module.css           # Shared page-level styles

public/
└── assets/
    ├── logo/                      # Site logo files
    ├── images/                    # UI images (hero poster, about portrait, brand logos)
    └── portfolio/
        └── photos/                # Portfolio photo files served as static assets
```

---

## Key Patterns

### Video: Bunny Stream

All videos go through Bunny.net — no local `.mp4` files. GUIDs are the single source of truth.

```js
// src/config/bunny.js
export const VIDEO_GALLERY = [
  { guid: "f3a6e51c-...", title: "Birthday Benefit Concert", eventType: "community" },
  // ...
];
```

- **Hero background** → `BunnyBackgroundLoop` (HLS via hls.js, pauses off-screen via IntersectionObserver)
- **Gallery grid** → `BunnyVideo` facade (poster shown until clicked; iframe only mounts on interaction)
- **Lightbox** → `BunnyVideo autoActivate` (iframe loads immediately, no second click needed)

Adding a new video: paste its GUID into `VIDEO_GALLERY` in `bunny.js`. No other changes needed.

### Photos: Static Assets

Photos live in `public/assets/portfolio/photos/` and are referenced by path in `WorksGallery.js` and `PhotosGallery.js`.

### Contact Form

`/contact` → `ContactContent.js` → `POST /api/contact` → Resend API → email to `CONTACT_EMAIL`.

Includes honeypot spam protection, server-side validation, and rate-limit-friendly error handling.

### Security Headers

Configured in `next.config.js` and applied to all routes:

- Content Security Policy (CSP)
- Strict-Transport-Security (HSTS)
- X-Frame-Options, X-Content-Type-Options
- Referrer-Policy, Permissions-Policy

---

## Responsive Breakpoints

| Breakpoint | Width |
|-----------|-------|
| Desktop | > 1024px |
| Tablet | 768px – 1024px |
| Android Mobile | 360px – 767px |
| iPhone Mobile | < 360px |

---

## Brand Colors

| Name | Value |
|------|-------|
| Background | `#000000` |
| White | `#ffffff` |
| Accent 1 (warm sand) | `#cac5b9` |
| Accent 2 (mid grey) | `#6d6c67` |
| Accent 3 (dark brown) | `#564e43` |
| Footer background | `#192521` |

---

## Deploying Changes

| Goal | Command / Steps |
|------|----------------|
| Push code + auto-deploy | `git push origin main` — Cloudflare Workers deploys automatically |
| Deploy manually | `npm run deploy` |
| Add a new video | Add GUID to `VIDEO_GALLERY` in `src/config/bunny.js` → push |
| Add new photos | Drop files into `public/assets/portfolio/photos/<Category>/` → update `PhotosGallery.js` → push |
| Update contact email | Change `CONTACT_EMAIL` in `.env.local` and in the Cloudflare Workers environment variables |
