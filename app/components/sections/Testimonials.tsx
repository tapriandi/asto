import Image from "next/image";
import Reveal from "@/app/components/primitives/Reveal";
import { site } from "@/site.config";

export default function Testimonials() {
  return (
    <section className="py-[var(--spacing-section)]">
      <div className="site-shell">
        <Reveal>
          <div className="pb-12 text-center">
            <span className="label">( TESTIMONIALS )</span>
            <h2 className="display-lg mx-auto mt-4 max-w-[14ch]">
              Dibuat untuk bisnis yang ingin tampil beda.
            </h2>
          </div>
        </Reveal>

        <div className="space-y-6">
          {site.testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <article
                className="sticky top-20 overflow-hidden rounded-[2rem] bg-paper p-8 text-ink shadow-2xl md:p-12"
                data-cursor="hover"
              >
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
                  <div className="relative aspect-[1.2] overflow-hidden rounded-[1.5rem] bg-ink/10">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <blockquote className="display-md leading-tight text-ink">
                      “{t.quote}”
                    </blockquote>
                    <p className="mt-8 text-lg font-medium">{t.name}</p>
                    <p className="label text-ink/60">{t.role}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
