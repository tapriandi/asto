import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/site.config";
import Reveal from "@/app/components/primitives/Reveal";
import SplitText from "@/app/components/primitives/SplitText";

export function generateStaticParams() {
  return site.projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = site.projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const others = site.projects.filter((item) => item.slug !== slug).slice(0, 2);

  return (
    <>
      <section className="pb-[var(--section-gap)] pt-36">
        <div className="site-shell">
          <Reveal>
            <span className="label">( Case Study )</span>
            <h1 className="mt-6 text-[clamp(3rem,9vw,8rem)] font-medium leading-[0.9] tracking-[-0.04em]">
              {project.title}
            </h1>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-10 border-t border-line pt-8 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
            <Reveal>
              <p className="max-w-[52ch] text-xl leading-relaxed text-muted-2">{project.summary}</p>
            </Reveal>
            <Reveal delay={0.06}>
              <dl className="grid grid-cols-2 gap-6">
                <div>
                  <dt className="label">Year</dt>
                  <dd className="mt-2 text-lg">{project.year}</dd>
                </div>
                <div>
                  <dt className="label">Scope</dt>
                  <dd className="mt-2 text-lg">{project.category}</dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative mt-14 aspect-[1.646] overflow-hidden rounded-[2.5rem] bg-soft">
              <Image
                src={project.image}
                alt={`${project.title} visual concept`}
                fill
                priority
                sizes="(max-width: 1520px) calc(100vw - 2rem), 1520px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-fg/10" />
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <SplitText as="h2" scroll text="The brief." className="display-lead" />
              {project.body.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-muted-2">{paragraph}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.08}>
              <span className="label">Scope of work</span>
              <ul className="mt-6 border-t border-line">
                {project.scope.map((item) => (
                  <li key={item} className="flex items-baseline justify-between gap-4 border-b border-line py-4 text-base">
                    <span>{item}</span>
                    <span className="label">↗</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="mt-10 inline-block text-lg line-hover" data-cursor="hover">
                Mulai proyek serupa ↗
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-[var(--section-gap)]">
        <div className="site-shell">
          <Reveal>
            <div className="flex items-end justify-between gap-6 pb-8">
              <h2 className="display-section">More projects.</h2>
              <Link href="/works" className="line-hover text-base" data-cursor="hover">See all ↗</Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2">
            {others.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.06}>
                <Link href={`/works/${item.slug}`} className="group block" data-cursor="hover">
                  <div className="relative aspect-[.927] overflow-hidden rounded-[2rem] bg-soft">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) calc(100vw - 32px), 50vw"
                      className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex items-baseline justify-between gap-4 pt-3">
                    <h3 className="display-sm">{item.title}</h3>
                    <span className="label shrink-0">_ {item.year}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
