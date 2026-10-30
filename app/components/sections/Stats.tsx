import { site } from "@/site.config";
import Reveal from "@/app/components/primitives/Reveal";

export default function Stats() {
  return (
    <section className="container-edge py-[var(--spacing-section)]">
      <ul className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {site.stats.map((stat, i) => (
          <Reveal as="li" key={stat.label} delay={i * 0.05}>
            <div className="flex h-full flex-col justify-between gap-10 bg-ink p-8">
              <span className="display-lg font-display tabular-nums">{stat.value}</span>
              <span className="label max-w-[26ch] leading-relaxed text-muted">
                {stat.label}
              </span>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
