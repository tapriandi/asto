import Reveal from "@/app/components/primitives/Reveal";
import FillReveal from "@/app/components/primitives/FillReveal";
import { site } from "@/site.config";

/** Bungee-style statement block — colour sweeps in from the left on scroll. */
export default function Statement() {
  return (
    <section className="pb-[var(--section-gap)]">
      <div className="site-shell">
        <Reveal>
          <p className="label mb-6">( _Studio )</p>
        </Reveal>
        <FillReveal>
          <span className="display-section block max-w-[16ch]">{site.statement}</span>
        </FillReveal>
      </div>
    </section>
  );
}
