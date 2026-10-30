import Image from "next/image";
import { site } from "@/site.config";
import Reveal from "@/app/components/primitives/Reveal";
import MarqueeRow from "@/app/components/primitives/MarqueeRow";

export default function AboutPage() {
  return (
    <>
      <section className="container-edge pb-[var(--spacing-section)] pt-40">
        <Reveal>
          <span className="label">( _03 ) About</span>
          <p className="display-lg mt-8 max-w-[20ch] font-display">
            {site.about.lead}{" "}
            <span className="text-muted">{site.statement}</span>
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-12 max-w-[58ch] border-t border-line pt-8 text-lg leading-relaxed text-muted">
            {site.about.body}
          </p>
        </Reveal>
      </section>

      <div className="border-y border-line py-4">
        <MarqueeRow items={["Design", "Engineering", "Brand", "Strategy", "Product"]} />
      </div>

      <section className="container-edge py-[var(--spacing-section)]">
        <Reveal>
          <h2 className="display-lg font-display">How we work.</h2>
        </Reveal>
        <ol className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
          {site.about.process.map((step, i) => (
            <Reveal as="li" key={step.no} delay={i * 0.06}>
              <div className="flex h-full flex-col gap-8 bg-ink p-8 md:p-10">
                <span className="label">({step.no})</span>
                <h3 className="display-md font-display">{step.title}</h3>
                <p className="max-w-[34ch] text-sm leading-relaxed text-muted">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="container-edge pb-[var(--spacing-section)]">
        <Reveal>
          <h2 className="display-lg font-display">The studio.</h2>
        </Reveal>
        <ul className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
          {site.team.map((member, i) => (
            <Reveal as="li" key={member.name} delay={i * 0.05}>
              <div className="relative aspect-[3/4] overflow-hidden bg-surface">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 font-display text-lg">{member.name}</p>
              <p className="label mt-1">{member.role}</p>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}
