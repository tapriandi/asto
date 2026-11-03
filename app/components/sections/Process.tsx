import Reveal from "@/app/components/primitives/Reveal";
import SplitText from "@/app/components/primitives/SplitText";
import { site } from "@/site.config";

/** Process cards: how the studio works, from first call to handover. */
export default function Process() {
  return (
    <section className="py-[var(--section-gap)]">
      <div className="site-shell">
        <Reveal>
          <div className="flex flex-col items-center gap-5 pb-12 text-center">
            <span className="label">( PROSES )</span>
            <SplitText
              as="h2"
              scroll
              text="Cara kami bekerja."
              className="display-section max-w-[600px] text-center"
            />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {site.process.map((step, i) => (
            <Reveal key={step.no} delay={i * 0.06}>
              <article className="flex h-full flex-col rounded-[2rem] border border-line bg-bg p-8 md:p-10">
                <span className="label">({step.no})</span>
                <h3 className="mt-8 text-[clamp(1.5rem,2.2vw,2rem)] font-medium leading-tight">{step.title}</h3>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-2">{step.body}</p>
                <p className="mt-8 border-t border-line pt-5 text-sm leading-relaxed">
                  <span className="label block">Yang Anda terima</span>
                  <span className="mt-2 block">{step.deliver}</span>
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
