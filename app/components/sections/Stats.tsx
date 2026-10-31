import Image from "next/image";
import Reveal from "@/app/components/primitives/Reveal";
import SplitText from "@/app/components/primitives/SplitText";
import FillReveal from "@/app/components/primitives/FillReveal";
import { site } from "@/site.config";

/**
 * Bungee's Metrics block: statement (max 800px) → wide media card (ratio 1.646,
 * radius 40) on a white panel → metric grid underneath.
 */
export default function Stats() {
  return (
    <section className="pb-[var(--section-gap)]">
      <div className="site-shell">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <FillReveal>
              <span className="display-lead block max-w-[800px]">{site.metricLead}</span>
            </FillReveal>
          </div>

          <div className="flex flex-col gap-8 bg-bg">
            <Reveal>
              <div className="relative aspect-[1.646] w-full overflow-hidden rounded-[2.5rem] bg-soft">
                <Image
                  src="/img/hero/img-1.png"
                  alt="Contoh visual digital Asto untuk bisnis lokal"
                  fill
                  sizes="(max-width: 1520px) calc(100vw - 2rem), 1520px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-fg/10" />
                <div className="absolute left-6 top-6 max-w-[26rem] md:left-8 md:top-8">
                  <span className="label text-white">AstoDigi / Digital presence</span>
                </div>
                <div className="absolute bottom-6 right-6 flex h-20 w-20 items-center justify-center rounded-full border border-white/70 text-2xl text-white md:bottom-8 md:right-8 md:h-[7.5rem] md:w-[7.5rem]">
                  ↗
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {site.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.04}>
                <div className="border-t border-line pt-4">
                  <p className="text-[clamp(2.5rem,4.5vw,4.5rem)] font-medium leading-none tracking-[-0.03em]">
                    {stat.value}
                  </p>
                  <p className="label mt-3 max-w-[23ch] leading-relaxed">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
