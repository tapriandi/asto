import Reveal from "@/app/components/primitives/Reveal";
import { site } from "@/site.config";

export default function Statement() {
  return (
    <section className="py-12 md:py-16">
      <div className="site-shell">
        <Reveal>
          <p className="label mb-6">( _Studio )</p>
          <p className="display-section max-w-[26ch]">{site.processStatement}</p>
        </Reveal>
      </div>
    </section>
  );
}
