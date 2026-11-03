import Link from "next/link";
import { site } from "@/site.config";
import SplashClock from "@/app/components/chrome/SplashClock";
import MarqueeRow from "@/app/components/primitives/MarqueeRow";
import Reveal from "@/app/components/primitives/Reveal";
import SplitText from "@/app/components/primitives/SplitText";

export default function Hero() {
  const ticker = site.hero.ticker;

  return (
    <section className="flex min-h-[92svh] flex-col">
      {/* Centered wordmark block — mirrors Bungee's oversized logo + tagline */}
      <div className="site-shell flex flex-1 flex-col items-center justify-center pb-10 pt-32 text-center">
        <Reveal scroll={false} y={-40}>
          <h1 className="text-[clamp(4.5rem,13vw,11rem)] font-medium leading-[0.86] tracking-[-0.05em]">
            {site.brand.mark}
          </h1>
        </Reveal>

        <Reveal scroll={false} delay={0.15} y={0}>
          <p className="label mt-6 text-fg">{site.brand.tagline}</p>
        </Reveal>

        <SplitText
          as="p"
          delay={0.3}
          stagger={0.035}
          text={site.hero.headline}
          className="mt-8 max-w-[30rem] text-[clamp(1.1rem,1.8vw,1.5rem)] leading-[1.3] text-muted-2"
        />

        <SplitText
          as="p"
          delay={0.45}
          stagger={0.035}
          text={site.statement}
          className="mt-10 max-w-[62rem] text-[clamp(1.5rem,3vw,2.9rem)] font-medium leading-[1.12] tracking-[-0.02em]"
        />

        <Reveal scroll={false} delay={0.9}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span className="label flex items-center gap-2">
              <span className="text-muted">ID</span>
              <SplashClock timeZone="Asia/Jakarta" />
            </span>
            <span className="label text-line">/</span>
            {site.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="label line-hover"
                data-cursor="hover"
              >
                {social.label}
              </a>
            ))}
            <span className="label text-line">/</span>
            <span className="label text-muted-2">{site.brand.location}</span>
          </div>
        </Reveal>
        <Reveal scroll={false} delay={1}>
          <div className="mt-7 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full border border-fg bg-fg px-7 py-3.5 text-base text-bg transition-colors hover:bg-transparent hover:text-fg"
              data-cursor="hover"
            >
              {site.hero.cta} <span aria-hidden>↗</span>
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="border-y border-line py-3.5">
        <MarqueeRow items={ticker} />
      </div>
    </section>
  );
}
