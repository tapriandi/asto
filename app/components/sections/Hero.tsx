import Link from "next/link";
import { site } from "@/site.config";
import SplashClock from "@/app/components/chrome/SplashClock";
import MarqueeRow from "@/app/components/primitives/MarqueeRow";
import Reveal from "@/app/components/primitives/Reveal";

export default function Hero() {
  const ticker = [
    "Branding",
    "Web Development",
    "Mobile App",
    "SEO Optimization",
    "Digital Strategy",
  ];

  return (
    <section className="relative flex min-h-[92svh] flex-col justify-end pt-32">
      <div className="container-edge">
        <Reveal>
          <div className="flex items-center justify-between gap-6">
            <span className="label">{site.brand.tagline}</span>
            <span className="label flex items-center gap-2">
              <span className="text-muted">ID</span>
              <SplashClock />
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="display-xl mt-10 font-display">
            <span className="block">{site.hero.lead}</span>
            <span className="block text-muted">{site.hero.headline}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-12 flex flex-col gap-8 border-t border-line pt-8 md:flex-row md:items-end md:justify-between">
            <p className="label max-w-[38ch] leading-relaxed text-muted">
              {site.hero.sub}
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 text-2xl tracking-tight"
              data-cursor="hover"
            >
              <span className="line-hover">{site.hero.cta}</span>
              <span className="transition-transform duration-500 group-hover:translate-x-2">
                →
              </span>
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="mt-16 border-y border-line py-4">
        <MarqueeRow items={ticker} />
      </div>
    </section>
  );
}
