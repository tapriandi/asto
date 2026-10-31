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
  const post = site.posts.find((item) => item.slug === slug);
  if (!post) notFound();

  const others = site.posts.filter((item) => item.slug !== slug);

  return (
    <article className="pb-[var(--section-gap)] pt-36">
      <div className="site-shell">
        <Reveal>
          <Link href="/blog" className="label line-hover" data-cursor="hover">
            ← Blog
          </Link>
          <p className="label mt-10">{post.category} / {post.date}</p>
          <h1 className="display-section mt-5 max-w-[18ch]">{post.title}</h1>
          <p className="mt-8 max-w-[52ch] text-xl leading-relaxed text-muted-2">{post.excerpt}</p>
        </Reveal>

        <div className="mt-14 max-w-[68ch] border-t border-line pt-10">
          {post.body.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <p className="mt-6 text-lg leading-relaxed first:mt-0">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 border-t border-line pt-10">
          <span className="label">Baca juga</span>
          <ul className="mt-6">
            {others.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/blog/${item.slug}`}
                  className="group flex items-baseline justify-between gap-6 border-b border-line py-5"
                  data-cursor="hover"
                >
                  <span className="text-lg transition-transform duration-500 group-hover:translate-x-2">
                    {item.title}
                  </span>
                  <span className="label shrink-0">{item.date}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
