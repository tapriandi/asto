import { site } from "@/site.config";
import Reveal from "@/app/components/primitives/Reveal";

export default function Faq() {
  return (
    <section className="py-[var(--spacing-section)]">
      <div className="site-shell grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <h2 className="display-lg">FAQ.</h2>
        </Reveal>
        <div className="space-y-3">
          {site.faq.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.03}>
              <details className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-lg">
                  <span className="flex items-baseline gap-4">
                    <span className="label">({String(i + 1).padStart(2, "0")})</span>
                    {item.q}
                  </span>
                  <span className="text-2xl transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="pb-6 pl-9 text-sm leading-relaxed text-muted">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
