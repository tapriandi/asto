import Image from "next/image";
import Reveal from "@/app/components/primitives/Reveal";
import { site } from "@/site.config";

export default function Stats() {
  return (
    <section className="py-[var(--spacing-section)]">
      <div className="site-shell">
        <Reveal>
          <div className="relative aspect-[1.646] overflow-hidden rounded-[2.5rem] bg-surface">
            <Image
              src="/img/hero/img-1.png"
              alt="Contoh visual digital Asto untuk bisnis lokal"
              fill
              sizes="(max-width: 1520px) calc(100vw - 2rem), 1520px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-ink/15" />
            <div className="absolute left-6 top-6 max-w-[26rem] md:left-10 md:top-10">
              <span className="label text-bone">AstoDigi / Digital presence</span>
            </div>
            <div className="absolute bottom-6 right-6 flex h-20 w-20 items-center justify-center rounded-full border border-bone/70 text-2xl text-bone md:bottom-10 md:right-10 md:h-28 md:w-28">
              ↗
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {site.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.04}>
              <div className="border-t border-line pt-4">
                <p className="display-md">{stat.value}</p>
                <p className="label mt-3 max-w-[23ch] leading-relaxed">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
