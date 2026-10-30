import Link from "next/link";
import { site } from "@/site.config";
import SplashClock from "@/app/components/chrome/SplashClock";
import MarqueeRow from "@/app/components/primitives/MarqueeRow";
import Reveal from "@/app/components/primitives/Reveal";

export default function Hero() {
  const ticker = ["Website Bisnis", "Landing Page", "Undangan Digital", "Toko Online", "Web App"];

  return (
    <section className="flex min-h-[100svh] flex-col justify-between overflow-hidden pt-28">
      <div className="site-shell grid flex-1 content-center py-16">
        <Reveal>
          <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-16">
            <div className="max-w-[58rem]">
              <p className="label mb-7">{site.brand.tagline}</p>
              <h1 className="font-display text-[clamp(3rem,7.5vw,7rem)] font-medium leading-[0.94] tracking-[-0.035em]">
                {site.hero.lead} <span className="text-muted">{site.hero.headline}</span>
              </h1>
            </div>
            <div className="hidden min-w-44 pb-2 text-right md:block">
              <p className="label">{site.brand.location}</p>
              <p className="label mt-1"><SplashClock timeZone="Asia/Jakarta" /></p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="site-shell flex flex-col gap-8 pb-8 pt-20 md:flex-row md:items-end md:justify-between">
        <Reveal delay={0.08}>
          <p className="label max-w-[34rem] leading-relaxed text-muted">{site.hero.sub}</p>
        </Reveal>
        <Reveal delay={0.12}>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-5 text-xl"
            data-cursor="hover"
          >
            <span className="line-hover">{site.hero.cta}</span>
            <span className="transition-transform duration-500 group-hover:translate-x-2">↗</span>
          </Link>
        </Reveal>
      </div>

      <div className="border-y border-line py-4">
        <MarqueeRow items={ticker} />
      </div>
    </section>
  );
}
