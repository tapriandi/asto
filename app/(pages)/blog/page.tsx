import Image from "next/image";
import Link from "next/link";
import { site } from "@/site.config";
import Reveal from "@/app/components/primitives/Reveal";
import SplitText from "@/app/components/primitives/SplitText";

/** Bungee blog index: centred masthead, then ruled cards with image + copy. */
export default function BlogPage() {
  return (
    <section className="pb-[var(--section-gap)] pt-36">
      <div className="site-shell">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <SplitText as="h1" text="Creative Dispatch" className="display-section" />
            <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-muted-2">
              Setiap warna, kata, dan piksel berangkat dari strategi yang jelas untuk membantu bisnis bertumbuh.
            </p>
          </div>
        </Reveal>

        <ul className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
          {site.posts.map((post, i) => (
            <Reveal as="li" key={post.slug} delay={(i % 2) * 0.06}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-[1.25rem] border border-line bg-bg p-3"
                data-cursor="hover"
              >
                <div className="relative aspect-[1.5] overflow-hidden rounded-[0.75rem] bg-soft">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) calc(100vw - 40px), 50vw"
                    className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-8 px-3 pb-3 pt-5">
                  <h2 className="text-[clamp(1.25rem,1.8vw,1.6rem)] font-medium leading-snug">
                    {post.title}
                  </h2>
                  <div className="flex items-center justify-between gap-4">
                    <span className="label">{post.category}</span>
                    <span className="label">{post.date}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
