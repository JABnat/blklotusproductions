import "./globals.css";
import SiteShell from "@/components/SiteShell/SiteShell";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import localFont from "next/font/local";
import { Koulen, Instrument_Sans, DM_Mono, Zen_Kaku_Gothic_New, Exo } from "next/font/google";

export const metadata = {
  title: "BLK Lotus | Photography & Videography",
  description:
    "Professional photography and videography services based in San Luis Obispo, California. Available for travel within the US.",
  icons: {
    icon: "/assets/logo/blklotus-logo-black.webp",
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
