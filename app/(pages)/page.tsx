import Hero from "@/app/components/sections/Hero";
import LatestProjects from "@/app/components/sections/LatestProjects";
import Stats from "@/app/components/sections/Stats";
import Process from "@/app/components/sections/Process";
import Faq from "@/app/components/sections/Faq";
import BlogPreview from "@/app/components/sections/BlogPreview";
import Newsletter from "@/app/components/sections/Newsletter";
import { site } from "@/site.config";

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: site.faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Home() {
  return (
    <>
      <Hero />
      <LatestProjects />
      <Stats />
      <Process />
      <Faq />
      <BlogPreview />
      <Newsletter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage).replace(/</g, "\\u003c") }} />
    </>
  );
}
