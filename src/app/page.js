import Hero from "@/components/Hero/Hero";
import FeaturedWorks from "@/components/FeaturedWorks/FeaturedWorks";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWorks />
      <Services />
      <Testimonials />
    </>
  );
}
