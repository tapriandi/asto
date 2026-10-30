import Link from "next/link";
import { site } from "@/site.config";
import SectionHeading from "@/app/components/primitives/SectionHeading";
import Reveal from "@/app/components/primitives/Reveal";

export default function Services() {
  return (
    <section className="container-edge py-[var(--spacing-section)]">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading title="Services." meta="( _04 )" />
          <Link href="/contact" className="label line-hover" data-cursor="hover">
            Get in touch →
          </Link>
        </div>
      </Reveal>

      <ul className="mt-14 border-t border-line">
        {site.services.map((service, i) => (
          <Reveal as="li" key={service.no} delay={i * 0.04}>
            <Link
              href="/contact"
              className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-6 border-b border-line py-8 transition-colors duration-300 hover:bg-surface/40 md:gap-12 md:py-10"
              data-cursor="hover"
            >
              <span className="label w-12 text-muted">({service.no})</span>
              <div className="grid gap-2 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:items-baseline md:gap-8">
                <h3 className="display-md font-display transition-transform duration-500 group-hover:translate-x-1">
                  {service.title}
                </h3>
                <p className="max-w-[44ch] text-sm leading-relaxed text-muted">
                  {service.desc}
                </p>
              </div>
              <span className="text-xl transition-transform duration-500 group-hover:translate-x-2">
                ↗
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
