import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/site.config";
import Reveal from "@/app/components/primitives/Reveal";
import SplitText from "@/app/components/primitives/SplitText";
import FillReveal from "@/app/components/primitives/FillReveal";
import MarqueeRow from "@/app/components/primitives/MarqueeRow";

export const metadata: Metadata = {
  title: "Tentang Astodigi — Studio Digital di Kabupaten Tegal",
  description:
    "Cara Astodigi bekerja: satu tim menangani struktur, desain, dan development. Prinsip kami sederhana — halaman harus jelas dan berguna.",
  alternates: { canonical: "/about" },
};

/** About: centred statement, facts row, marquee, then the studio principles. */
export default function AboutPage() {
  return (
    <>
      <section className="pt-36">
        <div className="site-shell flex flex-col items-center text-center">
          <Reveal>
            <span className="label">( _04 ) About</span>
          </Reveal>
          <FillReveal>
            <span className="display-section mt-8 block max-w-[24ch]">{site.about.lead}</span>
          </FillReveal>
          <div className="mt-10 max-w-[60ch] space-y-5">
            {site.about.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={0.08 + i * 0.04}>
                <p className="text-base leading-relaxed text-muted-2">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="site-shell mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line pt-8 md:grid-cols-4">
          {site.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.04}>
              <p className="text-[clamp(1.5rem,2.6vw,2.5rem)] font-medium leading-none tracking-[-0.03em]">
                {stat.value}
              </p>
              <p className="label mt-3 max-w-[26ch] leading-relaxed">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="mt-[var(--section-gap)] border-y border-line py-3.5">
        <MarqueeRow items={["Strategy", "Structure", "Design", "Development", "Launch", "Maintenance"]} />
      </div>

      <section className="py-[var(--section-gap)]">
        <div className="site-shell">
          <Reveal>
            <div className="flex flex-col gap-5">
              <span className="label">PRINSIP KERJA</span>
              <SplitText
                as="h2"
                scroll
                text="Empat hal yang tidak kami tawar."
                className="display-lead max-w-[20ch]"
              />
            </div>
          </Reveal>

          <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {site.about.principles.map((principle, i) => (
              <Reveal as="li" key={principle.no} delay={i * 0.05}>
                <div className="h-full rounded-[1.5rem] border border-line bg-bg p-8 md:p-10">
                  <span className="label">({principle.no})</span>
                  <h3 className="mt-6 text-[clamp(1.35rem,2vw,1.75rem)] font-medium leading-tight">
                    {principle.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-2">{principle.desc}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-[var(--section-gap)]">
        <div className="site-shell">
          <Reveal>
            <div className="flex flex-col items-center gap-5 text-center">
              <span className="label">MULAI DISKUSI</span>
              <SplitText
                as="h2"
                scroll
                text="Ceritakan bisnis Anda — kami bantu menyusun langkah berikutnya."
                className="display-lead max-w-[24ch] text-center"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-base">
              <Link href="/contact" className="line-hover" data-cursor="hover">
                Hubungi studio ↗
              </Link>
              <Link href="/works" className="line-hover" data-cursor="hover">
                Lihat Demo Concept ↗
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
