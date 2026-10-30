import { site } from "@/site.config";
import Reveal from "@/app/components/primitives/Reveal";

export default function Statement() {
  return (
    <section className="bg-surface py-[var(--spacing-section)]">
      <div className="container-edge">
        <Reveal>
          <p className="display-lg max-w-[18ch] font-display text-bone">
            {site.statement}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
