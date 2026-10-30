import Reveal from "@/app/components/primitives/Reveal";
import { site } from "@/site.config";

export default function Statement() {
  return (
    <section className="py-8 md:py-16">
      <div className="site-shell">
        <Reveal>
          <p className="display-lg max-w-[16ch]">{site.statement}</p>
        </Reveal>
      </div>
    </section>
  );
}
