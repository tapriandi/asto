import Image from "next/image";
import Link from "next/link";
import { site } from "@/site.config";
import Reveal from "@/app/components/primitives/Reveal";
import SplitText from "@/app/components/primitives/SplitText";

/** Bungee blog index: a "Creative Dispatch" masthead then a list of dated entries. */
export default function BlogPage() {
  return (
    <section className="pb-[var(--section-gap)] pt-36">
      <div className="site-shell">
        <Reveal>
          <span className="label">( _04 ) Blog</span>
          <SplitText as="h1" text="Creative Dispatch" className="display-section mt-6 max-w-[12ch]" />
          <p className="label mt-6 max-w-[40ch] leading-relaxed">
            Catatan singkat tentang desain, strategi, dan cara membangun website yang dipakai.
          </p>
        </Reveal>

        <ul className="mt-14 border-t border-line">
          {site.posts.map((post, i) => (
            <Reveal as="li" key={post.slug} delay={i * 0.05}>
              <Link
                href={`/blog/${post.slug}`}
                className="group grid grid-cols-1 items-baseline gap-x-6 gap-y-2 border-b border-line py-7 md:grid-cols-[8rem_minmax(0,1fr)_8rem]"
                data-cursor="hover"
              >
                <span className="label">{post.date}</span>
                <span className="text-[clamp(1.25rem,2.4vw,2rem)] font-medium leading-tight tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-2">
                  {post.title}
                </span>
                <span className="label md:text-right">{post.category}</span>
              </Link>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {site.posts.map((post, i) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block" data-cursor="hover">
                <div className="relative aspect-[1.2] overflow-hidden rounded-[1.5rem] bg-soft">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) calc(100vw - 32px), 33vw"
                    className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                </div>
                <p className="label mt-4">{post.category} / {post.date}</p>
                <p className="mt-2 text-lg leading-snug">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
