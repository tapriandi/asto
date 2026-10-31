import Image from "next/image";
import Reveal from "@/app/components/primitives/Reveal";
import StickyStack from "@/app/components/primitives/StickyStack";
import SplitText from "@/app/components/primitives/SplitText";
import { site } from "@/site.config";

/**
 * Bungee testimonials: centred label + heading, then full-width pale cards that
 * stack on top of each other as you scroll (sticky + scale/opacity scrub).
 */
export default function Testimonials() {
  return (
    <section className="pb-[var(--section-gap)]">
      <div className="site-shell">
        <Reveal>
          <div className="flex flex-col items-center gap-5 pb-6 text-center">
            <span className="label">( TESTIMONIALS )</span>
            <SplitText
              as="h2"
              scroll
              text="Dibuat untuk bisnis yang ingin tampil beda."
              className="display-section max-w-[600px] text-center"
            />
          </div>
        </Reveal>

        <StickyStack>
          {site.testimonials.map((t) => (
            <article
              key={t.name}
              data-stack-item
              className="overflow-hidden rounded-[2rem] bg-soft p-8 text-fg md:p-12"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
                <div className="relative aspect-[1.2] overflow-hidden rounded-[1.5rem] bg-fg/10">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <blockquote className="display-lead leading-tight text-fg">“{t.quote}”</blockquote>
                  <p className="mt-8 text-lg font-medium">{t.name}</p>
                  <p className="label text-muted-2">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </StickyStack>
      </div>
    </section>
  );
}
