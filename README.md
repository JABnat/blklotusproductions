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
