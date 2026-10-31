import Image from "next/image";
import Link from "next/link";
import { site } from "@/site.config";
import Reveal from "@/app/components/primitives/Reveal";
import SplitText from "@/app/components/primitives/SplitText";

/**
 * Bungee's Services section: "Get in touch" on the left, right-aligned heading,
 * then a horizontally scrolling row of tall shapes with cut diagonal corners.
 */
export default function Services() {
  return (
    <section className="overflow-hidden pb-[var(--section-gap)]">
      <div className="site-shell">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <Link href="/contact" className="mb-1 shrink-0 text-base line-hover" data-cursor="hover">
              Get in touch ↗
            </Link>
            <SplitText as="h2" scroll text="Services." className="display-section ml-auto text-right" />
          </div>
        </Reveal>
      </div>

      <div className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-3 overflow-x-auto px-[var(--spacing-edge)] pb-2">
        {site.services.map((service, i) => (
          <Reveal key={service.no} delay={i * 0.05} className="w-[13.5rem] shrink-0 snap-start md:w-[15rem]">
            <article
              className={`shape-card relative flex h-[30rem] flex-col justify-between overflow-hidden p-6 text-deep md:h-[32.5rem] ${
                i % 2 === 1 ? "shape-card--flip" : ""
              }`}
              data-cursor="hover"
            >
              <Image
                src={service.image}
                alt=""
                fill
                sizes="15rem"
                className="object-cover opacity-20 mix-blend-luminosity"
              />
              <div className="relative flex items-start justify-between">
                <span className="label text-deep/70">( {service.no} )</span>
                <span className="text-xl">↗</span>
              </div>
              <div className="relative">
                <h3 className="display-lead max-w-[8ch] text-deep">{service.title}</h3>
                <p className="mt-4 max-w-[26ch] text-sm leading-relaxed text-deep/70">{service.desc}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
