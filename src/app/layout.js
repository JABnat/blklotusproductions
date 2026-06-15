import "./globals.css";
import SiteShell from "@/components/SiteShell/SiteShell";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import localFont from "next/font/local";
import { Koulen, Instrument_Sans, DM_Mono, Zen_Kaku_Gothic_New, Exo } from "next/font/google";

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

const bicroad = localFont({
  src: "./fonts/BICRODE.ttf",
  variable: "--font-bicroad",
  display: "swap",
});

const koulen = Koulen({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-koulen",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-mono",
  display: "swap",
});

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-zen-kaku",
  display: "swap",
});

const exo = Exo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-exo",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bicroad.variable} ${koulen.variable} ${instrumentSans.variable} ${dmMono.variable} ${zenKaku.variable} ${exo.variable}`}
    >
      <body suppressHydrationWarning>
        <CustomCursor />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
