import Image from "next/image";
import Link from "next/link";
import { site } from "@/site.config";
import Reveal from "@/app/components/primitives/Reveal";

export default function Services() {
  return (
    <section className="py-[var(--section-gap)]">
      <div className="site-shell">
        <Reveal>
          <div className="flex items-end justify-between gap-6 pb-12">
            <h2 className="display-section ml-auto text-right">Services.</h2>
            <Link href="/contact" className="mb-1 shrink-0 text-base line-hover" data-cursor="hover">
              Get in touch ↗
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto px-[var(--spacing-edge)] pb-3">
        {site.services.map((service, i) => (
          <Reveal key={service.no} delay={i * 0.05} className="min-w-[18rem] snap-start md:min-w-[28rem]">
            <article className="relative flex h-[31rem] flex-col justify-between overflow-hidden rounded-[2rem] bg-soft p-7 text-fg md:h-[32rem] md:p-8" data-cursor="hover">
              <Image
                src={service.image}
                alt=""
                fill
                sizes="(max-width: 768px) 18rem, 28rem"
                className="object-cover opacity-25 mix-blend-multiply"
              />
              <div className="relative flex items-start justify-between">
                <span className="label text-fg">( {service.no} )</span>
                <span className="text-2xl">↗</span>
              </div>
              <div className="relative">
                <h3 className="display-lead max-w-[10ch]">{service.title}</h3>
                <p className="mt-5 max-w-[29ch] text-base leading-relaxed text-muted-2">{service.desc}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
