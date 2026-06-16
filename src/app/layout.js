import "./globals.css";
import SiteShell from "@/components/SiteShell/SiteShell";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import { Koulen, Instrument_Sans, DM_Mono, Exo } from "next/font/google";

const SITE_URL = "https://blklotus-productions.com";
const OG_IMAGE = `${SITE_URL}/assets/images/og-cover.jpg`;

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BLK Lotus Productions | Photography & Videography",
    template: "%s | BLK Lotus Productions",
  },
  description:
    "Cinematic photography and videography based in San Luis Obispo, CA. Concerts, events, fashion, brand content — available nationwide.",
  keywords: [
    "photographer",
    "videographer",
    "San Luis Obispo",
    "California",
    "event photography",
    "concert photography",
    "brand content",
    "music video",
    "BLK Lotus",
  ],
  authors: [{ name: "BLK Lotus Productions" }],
  creator: "BLK Lotus Productions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "BLK Lotus Productions",
    title: "BLK Lotus Productions | Photography & Videography",
    description:
      "Cinematic photography and videography based in San Luis Obispo, CA. Concerts, events, fashion, brand content — available nationwide.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "BLK Lotus Productions — Photography & Videography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BLK Lotus Productions | Photography & Videography",
    description:
      "Cinematic photography and videography based in San Luis Obispo, CA.",
    images: [OG_IMAGE],
  },
  icons: {
    icon: "/assets/logo/blklotus-logo-black.webp",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const koulen = Koulen({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-koulen",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  variable: "--font-instrument-sans",
  display: "swap",
});

// Used only in admin dashboard for code display
const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-dm-mono",
  display: "swap",
});

// Navbar + Footer: weights 100, 500, 600, 900 — no italic
const exo = Exo({
  subsets: ["latin"],
  weight: ["100", "500", "600", "900"],
  style: ["normal"],
  variable: "--font-exo",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${koulen.variable} ${instrumentSans.variable} ${dmMono.variable} ${exo.variable}`}
    >
      <head>
        {/* Preload the hero poster — it is the LCP element on the home page */}
        <link rel="preload" as="image" href="/assets/images/bhungra.png" />
        {/* Bunny Stream pull zone — HLS segments + auto-thumbnails */}
        <link rel="preconnect" href="https://vz-2ae40eea-75b.b-cdn.net" />
        {/* Bunny iframe embed player */}
        <link rel="preconnect" href="https://iframe.mediadelivery.net" />
        {/* Legacy R2 video (remove once Hero is fully migrated to BunnyBackgroundLoop) */}
        <link rel="preconnect" href="https://pub-e4760729ae4d4888ae3db5933e7300d8.r2.dev" />
      </head>
      <body suppressHydrationWarning>
        <CustomCursor />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
