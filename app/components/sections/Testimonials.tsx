import { site } from "@/site.config";
import SectionHeading from "@/app/components/primitives/SectionHeading";
import Reveal from "@/app/components/primitives/Reveal";

export default function Testimonials() {
  return (
    <section className="container-edge py-[var(--spacing-section)]">
      <Reveal>
        <SectionHeading title="Testimonials." meta={`( ${site.testimonials.length} )`} />
      </Reveal>

      <ul className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
        {site.testimonials.map((t, i) => (
          <Reveal as="li" key={t.name} delay={i * 0.06}>
            <figure className="flex h-full flex-col justify-between gap-12 bg-surface p-8 md:p-10">
              <blockquote className="text-lg leading-relaxed text-bone">
                “{t.quote}”
              </blockquote>
              <figcaption>
                <p className="font-display text-base">{t.name}</p>
                <p className="label mt-1">{t.role}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
