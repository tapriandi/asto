import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/site.config";
import Reveal from "@/app/components/primitives/Reveal";
import SplitText from "@/app/components/primitives/SplitText";

export function generateStaticParams() {
  return site.projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = site.projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.intro,
    alternates: { canonical: `/works/${project.slug}` },
    openGraph: {
      type: "article",
      title: project.title,
      description: project.intro,
      url: `/works/${project.slug}`,
      images: [{ url: project.image }],
    },
  };
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

  const meta = [
    { label: "Tahun", value: project.year },
    { label: "Kategori", value: project.category },
    { label: "Durasi", value: project.timeline },
    { label: "Status", value: project.label },
  ];

  return (
    <>
      <section className="pt-36">
        <div className="site-shell">
          <Reveal>
            <h1 className="text-[clamp(3rem,9vw,8rem)] font-medium leading-[0.9] tracking-[-0.04em]">
              {project.title}
            </h1>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
            <Reveal>
              <p className="max-w-[52ch] text-xl leading-relaxed text-muted-2">{project.intro}</p>
            </Reveal>
            <Reveal delay={0.06}>
              <dl className="grid grid-cols-2 gap-x-6 gap-y-8">
                {meta.map((item) => (
                  <div key={item.label} className="border-t border-line pt-4">
                    <dt className="label">{item.label}</dt>
                    <dd className="mt-2 text-lg">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative mt-14 aspect-[1.646] overflow-hidden rounded-[2.5rem] bg-soft">
              <Image
                src={project.image}
                alt={`${project.title} — Demo Concept`}
                fill
                priority
                sizes="(max-width: 1520px) calc(100vw - 2rem), 1520px"
                className="object-cover"
              />
              <span className="absolute left-5 top-5 rounded-full bg-bg/90 px-4 py-2 text-xs font-medium tracking-wide text-fg">
                Demo Concept
              </span>
              <div className="absolute inset-0 bg-fg/10" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-[var(--section-gap)]">
        <div className="site-shell">
          <Reveal>
            <span className="label">( Demo Concept )</span>
            <SplitText as="h2" scroll text={project.title} className="display-section mt-6 max-w-[14ch]" />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
            <Reveal>
              <h3 className="label">Tantangan</h3>
              <p className="mt-4 max-w-[50ch] text-lg leading-relaxed">{project.challenge}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h3 className="label">Solusi</h3>
              <p className="mt-4 max-w-[50ch] text-lg leading-relaxed">{project.solution}</p>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:gap-16">
            <div className="space-y-8">
              <h3 className="label">Studi kasus</h3>
              {project.body.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="max-w-[62ch] text-lg leading-relaxed">{paragraph}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.08}>
              <span className="label">Fitur utama</span>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.features.map((feature) => (
                  <li key={feature} className="rounded-full bg-soft px-4 py-2 text-sm">{feature}</li>
                ))}
              </ul>
              <span className="label mt-10 block">Cakupan kerja</span>
              <ul className="mt-4 border-t border-line">
                {project.scope.map((item) => (
                  <li key={item} className="flex items-baseline justify-between gap-4 border-b border-line py-4 text-base">
                    <span>{item}</span>
                    <span className="label">↗</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="mt-10 inline-block text-lg line-hover" data-cursor="hover">
                Diskusikan kebutuhan serupa ↗
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-[var(--section-gap)]">
        <div className="site-shell">
          <Reveal>
            <div className="flex items-end justify-between gap-6 pb-8">
              <h2 className="display-section">Demo lainnya.</h2>
              <Link href="/works" className="line-hover text-base" data-cursor="hover">Lihat semua ↗</Link>
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
