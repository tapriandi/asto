import Hero from "@/app/components/sections/Hero";
import LatestProjects from "@/app/components/sections/LatestProjects";
import Services from "@/app/components/sections/Services";
import Statement from "@/app/components/sections/Statement";
import Stats from "@/app/components/sections/Stats";
import Testimonials from "@/app/components/sections/Testimonials";
import Faq from "@/app/components/sections/Faq";
import Newsletter from "@/app/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <LatestProjects />
      <Services />
      <Statement />
      <Stats />
      <Testimonials />
      <Faq />
      <Newsletter />
    </>
  );
}
