import Image from "next/image";
import { site } from "@/site.config";
import Reveal from "@/app/components/primitives/Reveal";
import SplitText from "@/app/components/primitives/SplitText";
import FillReveal from "@/app/components/primitives/FillReveal";
import MarqueeRow from "@/app/components/primitives/MarqueeRow";

/** Bungee About: centred statement, metric row, marquee, team, awards. */
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
            <div className="flex flex-col gap-5">
              <span className="label">THE TEAM</span>
              <SplitText
                as="h2"
                scroll
                text="Kami bekerja sama untuk mencapai target, lalu melangkah lebih jauh."
                className="display-lead max-w-[24ch]"
              />
            </div>
          </Reveal>

          <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {site.team.map((member, i) => (
              <Reveal as="li" key={member.name} delay={i * 0.05}>
                <div className="overflow-hidden rounded-[1.5rem] border border-line bg-bg p-3">
                  <div className="relative aspect-[.86] overflow-hidden rounded-[0.75rem] bg-soft">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="px-3 pb-2 pt-4">
                    <p className="text-lg font-medium">{member.name}</p>
                    <p className="label mt-1">{member.role}</p>
                  </div>
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
              <span className="label">AWARDS</span>
              <SplitText
                as="h2"
                scroll
                text="Kami bangga dengan beberapa penghargaan yang pernah kami raih."
                className="display-lead max-w-[22ch] text-center"
              />
            </div>
          </Reveal>

          <ul className="mt-12 border-t border-line">
            {site.awards.map((award, i) => (
              <Reveal as="li" key={award.name + award.date} delay={i * 0.03}>
                <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-line py-5">
                  <span className="text-lg font-medium">{award.name}</span>
                  <span className="label flex-1 text-left md:pl-8">{award.detail}</span>
                  <span className="label shrink-0">{award.date}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
