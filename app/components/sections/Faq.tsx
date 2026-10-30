import { site } from "@/site.config";
import SectionHeading from "@/app/components/primitives/SectionHeading";
import Reveal from "@/app/components/primitives/Reveal";

export default function Faq() {
  return (
    <section className="container-edge py-[var(--spacing-section)]">
      <Reveal>
        <SectionHeading title="FAQ." meta={`( ${site.faq.length} )`} />
      </Reveal>

      <div className="mt-14 border-t border-line">
        {site.faq.map((item, i) => (
          <Reveal key={item.q} delay={i * 0.03}>
            <details className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 text-xl tracking-tight transition-colors hover:text-muted">
                <span className="flex items-baseline gap-5">
                  <span className="label text-muted">
                    ({String(i + 1).padStart(2, "0")})
                  </span>
                  {item.q}
                </span>
                <span className="shrink-0 text-xl transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="max-w-[62ch] pb-8 pl-[3.25rem] text-sm leading-relaxed text-muted">
                {item.a}
              </p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
