import Hero from "@/components/Hero/Hero";
import FeaturedWorks from "@/components/FeaturedWorks/FeaturedWorks";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import AboutSummary from "@/components/AboutSummary/AboutSummary";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSummary />
      <FeaturedWorks />
      <Services />
      <Testimonials />
    </>
  );
}
