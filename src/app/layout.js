import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import localFont from "next/font/local";
import { Koulen, Instrument_Sans } from "next/font/google";

export const metadata = {
  title: "BLK Lotus | Photography & Videography",
  description:
    "Professional photography and videography services based in San Luis Obispo, California. Available for travel within the US.",
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

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bicroad.variable} ${koulen.variable} ${instrumentSans.variable}`}
    >
      <body>
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
