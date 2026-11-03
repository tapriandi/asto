import Hero from "@/app/components/sections/Hero";
import LatestProjects from "@/app/components/sections/LatestProjects";
import Services from "@/app/components/sections/Services";
import Statement from "@/app/components/sections/Statement";
import Stats from "@/app/components/sections/Stats";
import Process from "@/app/components/sections/Process";
import Faq from "@/app/components/sections/Faq";
import BlogPreview from "@/app/components/sections/BlogPreview";
import Newsletter from "@/app/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <LatestProjects />
      <Services />
      <Statement />
      <Stats />
      <Process />
      <Faq />
      <BlogPreview />
      <Newsletter />
    </>
  );
}
