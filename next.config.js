/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === "development";

const securityHeaders = [
  // Prevent MIME-type sniffing
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Disallow embedding in iframes (clickjacking protection)
  { key: "X-Frame-Options", value: "DENY" },
  // Legacy XSS filter for older browsers
  { key: "X-XSS-Protection", value: "1; mode=block" },
  // Limit referrer data sent to third parties
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Restrict access to browser features not used by this site
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Force HTTPS for 2 years (Cloudflare also enforces this, belt+suspenders)
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Content Security Policy
  // Note: 'unsafe-inline' for scripts is required by Next.js App Router hydration.
  // To remove it, enable nonce-based CSP via Next.js middleware (future hardening step).
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js hydration scripts + JSON-LD inline scripts.
      // 'unsafe-eval' is only needed in dev mode (React source-map reconstruction).
      // React never uses eval() in production.
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
      // Next.js inline styles + CSS modules
      "style-src 'self' 'unsafe-inline'",
      // Local images + Bunny auto-thumbnails used as BunnyVideo posters
      "img-src 'self' data: blob: https://vz-2ae40eea-75b.b-cdn.net",
      // Local fonts (next/font/google downloads at build time, serves from /_next)
      "font-src 'self'",
      // HLS segments streamed by BunnyBackgroundLoop + R2 video in legacy Hero
      "media-src 'self' https://vz-2ae40eea-75b.b-cdn.net https://*.r2.dev",
      // hls.js XHR fetches the M3U8 manifest and TS segment URLs from the pull zone
      "connect-src 'self' https://vz-2ae40eea-75b.b-cdn.net",
      // hls.js spawns a Web Worker via blob: URL for segment demuxing
      "worker-src 'self' blob:",
      // Looker Studio / GA embed in admin + Bunny iframe player
      "frame-src 'self' https://iframe.mediadelivery.net https://lookerstudio.google.com https://datastudio.google.com https://analytics.google.com",
      // Prevent this page being framed anywhere (supersedes X-Frame-Options for modern browsers)
      "frame-ancestors 'none'",
      // Restrict form POST targets
      "form-action 'self'",
      // Base URI restriction
      "base-uri 'self'",
      // Block mixed content
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig = {
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
