import Hero from "@/components/Hero/Hero";
import FeaturedWorks from "@/components/FeaturedWorks/FeaturedWorks";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import AboutSummary from "@/components/AboutSummary/AboutSummary";

export const metadata = {
  title: "BLK Lotus Productions | Photography & Videography",
  description:
    "Cinematic photography and videography based in San Luis Obispo, CA. Concerts, events, fashion, brand content — available nationwide.",
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "BLK Lotus Productions",
  url: "https://blklotus-productions.com",
  logo: "https://blklotus-productions.com/assets/logo/blklotus-logo_white.png",
  image: "https://blklotus-productions.com/assets/images/og-cover.jpg",
  description:
    "Cinematic photography and videography based in San Luis Obispo, CA. Concerts, events, fashion, brand content — available nationwide.",
  email: "contact@blklotus-productions.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Luis Obispo",
    addressRegion: "CA",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  serviceType: [
    "Photography",
    "Videography",
    "Event Photography",
    "Concert Photography",
    "Brand Content",
    "Music Video Production",
    "Fashion Photography",
  ],
  sameAs: [
    "https://instagram.com/blklotusproductions",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <AboutSummary />
      <FeaturedWorks />
      <Services />
      <Testimonials />
    </>
  );
}
