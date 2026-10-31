import { site } from "@/site.config";
import Reveal from "@/app/components/primitives/Reveal";
import SplitText from "@/app/components/primitives/SplitText";
import FillReveal from "@/app/components/primitives/FillReveal";
import MarqueeRow from "@/app/components/primitives/MarqueeRow";

/** Bungee About: centred statement, metric row, process, studio list. */
export default function AboutPage() {
  return (
    <>
      <section className="pt-36">
        <div className="site-shell flex flex-col items-center text-center">
          <Reveal>
            <span className="label">( _03 ) About</span>
          </Reveal>
          <FillReveal>
            <span className="display-section mt-8 block max-w-[22ch]">{site.about.lead}</span>
          </FillReveal>
          <Reveal delay={0.08}>
            <p className="mt-10 max-w-[58ch] text-base leading-relaxed text-muted-2">{site.about.body}</p>
          </Reveal>
        </div>

        <div className="site-shell mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line pt-8 md:grid-cols-4">
          {site.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.04}>
              <p className="text-[clamp(2.25rem,4vw,3.75rem)] font-medium leading-none tracking-[-0.03em]">
                {stat.value}
              </p>
              <p className="label mt-3 max-w-[23ch] leading-relaxed">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="mt-[var(--section-gap)] border-y border-line py-3.5">
        <MarqueeRow items={["Strategy", "Design", "Development", "Launch", "Growth"]} />
      </div>

      <section className="py-[var(--section-gap)]">
        <div className="site-shell">
          <Reveal>
            <SplitText as="h2" scroll text="Cara kami bekerja." className="display-section" />
          </Reveal>
          <ol className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-3">
            {site.about.process.map((step, i) => (
              <Reveal as="li" key={step.no} delay={i * 0.06}>
                <div className="flex h-full flex-col justify-between gap-16 rounded-[2rem] bg-soft p-8 md:p-10">
                  <span className="label">( {step.no} )</span>
                  <div>
                    <h3 className="display-lead">{step.title}</h3>
                    <p className="mt-4 max-w-[28ch] text-sm leading-relaxed text-muted-2">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="pb-[var(--section-gap)]">
        <div className="site-shell grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <Reveal>
            <span className="label">( The Studio )</span>
            <SplitText
              as="h2"
              scroll
              text="Satu tim kecil, kerja yang rapi."
              className="display-lead mt-6 max-w-[16ch]"
            />
          </Reveal>
          <Reveal delay={0.06}>
            <p className="max-w-[46ch] text-base leading-relaxed text-muted-2">
              Kami sengaja menjaga tim tetap kecil supaya komunikasi langsung dan pengerjaan tidak berlapis.
              Anda berbicara dengan orang yang benar-benar mengerjakan website Anda.
            </p>
            <ul className="mt-10 border-t border-line">
              {["Struktur & konten", "Desain antarmuka", "Development", "Perawatan setelah rilis"].map((item) => (
                <li key={item} className="flex items-baseline justify-between gap-4 border-b border-line py-4">
                  <span>{item}</span>
                  <span className="label">↗</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
