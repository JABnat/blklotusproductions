/** @type {import('next').NextConfig} */

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
      // Next.js hydration scripts + any inline scripts (JSON-LD on home page)
      "script-src 'self' 'unsafe-inline'",
      // Next.js inline styles + CSS modules
      "style-src 'self' 'unsafe-inline'",
      // Local images + data URIs for placeholders
      "img-src 'self' data: blob:",
      // Local fonts (next/font/google downloads at build time, serves from /_next)
      "font-src 'self'",
      // Cloudflare R2 video in Hero component
      "media-src 'self' https://*.r2.dev",
      // Contact form API (server-side only, but listed for completeness)
      // Looker Studio / GA embed in admin dashboard
      "frame-src 'self' https://lookerstudio.google.com https://datastudio.google.com https://analytics.google.com",
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
