# BLK Lotus Website - Copilot Instructions

## Project Overview
A responsive photography/videography website using Next.js, React, JavaScript, and CSS Modules.

## Key Rules
- **NO CSS GRID** - Use Flexbox only
- Use `clamp()`, `px`, `rem`, `vh`, `vw`, and `%` for spacing/sizing
- Background: `#000000` (black)
- Text: `#ffffff` (white)
- Footer background: `#192521`
- Brand colors: `#cac5b9`, `#6d6c67`, `#564e43`

## Responsive Breakpoints
- Desktop: > 1024px
- Tablet: 768px - 1024px
- Android: 360px - 767px
- iPhone: < 360px

## File Structure
- Components in `src/components/`
- Pages in `src/app/`
- Styles use CSS Modules (`.module.css`)
- Global styles in `src/app/globals.css`

## Component Guidelines
- Each homepage section is its own component
- Use CSS Modules for component-specific styles
- Marquee titles use CSS animation (no libraries)
- Page transitions use Lottie React

## Assets Location
- Logo: `public/assets/logo/blklotus-logo_white.png`
- Videos: `public/assets/videos/`
