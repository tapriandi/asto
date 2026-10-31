import Link from "next/link";
import { site } from "@/site.config";
import SplashClock from "@/app/components/chrome/SplashClock";
import MarqueeRow from "@/app/components/primitives/MarqueeRow";
import Reveal from "@/app/components/primitives/Reveal";
import SplitText from "@/app/components/primitives/SplitText";

export default function Hero() {
  const ticker = ["Website Bisnis", "Landing Page", "Undangan Digital", "Toko Online", "Web App"];

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
          text={site.statement}
          className="mt-16 max-w-[62rem] text-[clamp(1.5rem,3vw,2.9rem)] font-medium leading-[1.12] tracking-[-0.02em]"
        />

        <Reveal scroll={false} delay={0.9}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
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
            <Link href="/contact" className="label line-hover text-fg" data-cursor="hover">
              {site.hero.cta} ↗
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
