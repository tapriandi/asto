import { site } from "@/site.config";
import Reveal from "@/app/components/primitives/Reveal";
import MarqueeRow from "@/app/components/primitives/MarqueeRow";

export default function AboutPage() {
  return (
    <>
      <section className="pb-[var(--spacing-section)] pt-36">
        <div className="site-shell">
          <Reveal>
            <span className="label">( _03 ) About</span>
            <p className="display-lg mt-8 max-w-[18ch]">
              {site.about.lead} <span className="text-muted">{site.statement}</span>
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-12 max-w-[58ch] border-t border-line pt-8 text-lg leading-relaxed text-muted">{site.about.body}</p>
          </Reveal>
        </div>
      </section>
      <div className="border-y border-line py-4"><MarqueeRow items={["Strategy", "Design", "Development", "Launch", "Growth"]} /></div>
      <section className="py-[var(--spacing-section)]">
        <div className="site-shell">
          <Reveal><h2 className="display-lg">How we work.</h2></Reveal>
          <ol className="mt-14 grid grid-cols-1 gap-3 md:grid-cols-3">
            {site.about.process.map((step, i) => (
              <Reveal as="li" key={step.no} delay={i * 0.06}>
                <div className="h-full rounded-[2rem] bg-paper p-8 text-ink md:p-10">
                  <span className="label text-ink/60">({step.no})</span>
                  <h3 className="display-md mt-12">{step.title}</h3>
                  <p className="mt-5 max-w-[28ch] text-sm leading-relaxed text-ink/65">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
