# BLK Lotus Website

A responsive photography and videography website built with Next.js, React, and CSS Modules.

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm

### Installation

1. Navigate to the project directory:

```bash
cd BLKlotus
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.js          # Root layout with Navbar & Footer
│   ├── page.js            # Homepage
│   ├── globals.css        # Global styles
│   ├── about/page.js      # About page
│   ├── videos/page.js     # Videos portfolio page
│   ├── photos/page.js     # Photos portfolio page
│   ├── contact/page.js    # Contact form page
│   └── terms/page.js      # Terms and Conditions page
├── components/
│   ├── Navbar/            # Navigation bar
│   ├── Footer/            # Footer component
│   ├── Hero/              # Hero section with video
│   ├── FeaturedWorks/     # Featured works section
│   ├── Services/          # Services section
│   ├── Testimonials/      # Testimonials section
│   ├── PageTransition/    # Lottie page transition animation
│   └── PageWrapper/       # Wrapper for pages with transitions
└── styles/
    └── pages.module.css   # Shared page styles

public/
└── assets/
    ├── logo/
    │   └── blklotus-logo_white.png   # Logo file (ADD YOUR LOGO HERE)
    └── videos/
        └── hero.mp4                   # Hero video (ADD YOUR VIDEO HERE)
```

## Features

- **Responsive Design**: 4 breakpoints (Desktop, Tablet, Android, iPhone)
- **Flexbox Layout**: No CSS Grid - pure Flexbox
- **Smooth Scrolling**: Quick links navigation
- **Marquee Animations**: Section titles with looping marquee
- **Lottie Page Transitions**: Full-screen loading animation
- **CSS Modules**: Modular, scoped styling

## Brand Colors

- Background: `#000000` (black)
- Text: `#ffffff` (white)
- Footer: `#192521`
- Accents: `#cac5b9`, `#6d6c67`, `#564e43`

## Adding Your Assets

### Logo

Place your logo at:

```
public/assets/logo/blklotus-logo_white.png
```

### Hero Video

Place your hero video at:

```
public/assets/videos/hero.mp4
```

### Portfolio Media

Replace placeholder content in:

- `FeaturedWorks.js` - Featured images/videos
- `photos/page.js` - Photo gallery
- `videos/page.js` - Video gallery

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Android Mobile**: 360px - 767px
- **iPhone Mobile**: < 360px

## Infrastructure & Deployment

### Hosting — Netlify

The site is deployed and hosted on Netlify.

- Log in at [https://app.netlify.com](https://app.netlify.com) using the project owner's credentials.
- The site is connected to this GitHub repository. Every push to the `main` branch triggers an automatic deploy.
- To trigger a deploy manually without a code change: go to the site dashboard → **Deploys** → **Trigger deploy** → **Deploy site**.
- Alternatively, you can drag and drop a production build folder into the Netlify dashboard under **Deploys** for a one-off manual deploy.

### Custom Domain — Namecheap → Netlify

The custom domain was purchased through [Namecheap](https://www.namecheap.com).

DNS is managed by delegating nameservers from Namecheap to Netlify:

1. In the Netlify dashboard: **Domain settings** → **Add custom domain** → note the 4 Netlify nameservers provided (e.g. `dns1.p01.nsone.net`).
2. In Namecheap: go to **Domain List** → **Manage** → **Nameservers** → select **Custom DNS** → enter the 4 Netlify nameservers.
3. DNS propagation can take up to 48 hours. Once live, Netlify handles SSL automatically via Let's Encrypt.

To update or re-point the domain in the future, repeat step 2 with the new nameservers.

### Media Assets — Cloudflare R2

All photos and videos are hosted on Cloudflare R2 (not bundled with the site build).

- Log in at [https://dash.cloudflare.com](https://dash.cloudflare.com) and navigate to **R2** → **blklotus-assets** bucket.
- Assets are served via the public R2 URL: `https://pub-e4760729ae4d4888ae3db5933e7300d8.r2.dev/<filename>`

**To upload new photos or videos:**

1. Go to the R2 bucket in the Cloudflare dashboard.
2. Click **Upload** and select your files.
3. Once uploaded, the file is immediately available at `https://pub-e4760729ae4d4888ae3db5933e7300d8.r2.dev/<your-filename>`.
4. Update the relevant source file (`videos/page.js`, `WorksGallery.js`, `Hero.js`, etc.) with the new URL and push to `main` to redeploy.

> Note: Keep file sizes reasonable. Cloudflare Workers enforces a 25 MB per-asset limit for bundled assets — hosting on R2 bypasses this limit entirely.

### Triggering a New Deploy

| Method | Steps |
|--------|-------|
| Git push | Push any commit to `main` — Netlify auto-deploys |
| Manual (Netlify UI) | Netlify dashboard → Deploys → Trigger deploy |
| Manual (drag & drop) | Run `npm run build`, then drag the `.next` folder into Netlify's deploy drop zone |
