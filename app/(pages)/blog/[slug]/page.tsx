import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/site.config";
import Reveal from "@/app/components/primitives/Reveal";

export function generateStaticParams() {
  return site.posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = site.posts.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();

  const post = site.posts[index];
  const previous = site.posts[index - 1] ?? site.posts[site.posts.length - 1];
  const next = site.posts[index + 1] ?? site.posts[0];

  return (
    <article className="pt-36">
      <div className="site-shell">
        <Reveal>
          <span className="label">{post.date}</span>
          <h1 className="mt-5 max-w-[22ch] text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.05] tracking-[-0.03em]">
            {post.title}
          </h1>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative mt-12 aspect-[1.5] overflow-hidden rounded-[2.5rem] bg-soft">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1520px) calc(100vw - 2rem), 1520px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-fg/10" />
          </div>
        </Reveal>

        <div className="mx-auto mt-14 max-w-[64ch]">
          <Reveal>
            <h2 className="text-[clamp(1.25rem,1.9vw,1.75rem)] font-medium leading-snug">{post.lead}</h2>
          </Reveal>
          {post.body.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <p className="mt-6 text-lg leading-relaxed text-muted-2">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-[64ch] border-t border-line pt-8">
          <span className="label">Pagination</span>
          <div className="mt-5 flex flex-col justify-between gap-4 sm:flex-row">
            <Link
              href={`/blog/${previous.slug}`}
              className="group flex flex-col gap-1"
              data-cursor="hover"
            >
              <span className="label">← Previous</span>
              <span className="text-lg transition-transform duration-500 group-hover:-translate-x-1">
                {previous.title}
              </span>
            </Link>
            <Link
              href={`/blog/${next.slug}`}
              className="group flex flex-col gap-1 sm:text-right"
              data-cursor="hover"
            >
              <span className="label sm:self-end">Next →</span>
              <span className="text-lg transition-transform duration-500 group-hover:translate-x-1">
                {next.title}
              </span>
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-[64ch] border-t border-line pt-8">
          <Link href="/blog" className="label line-hover" data-cursor="hover">← Semua artikel</Link>
        </div>
      </div>
    </article>
  );
}
