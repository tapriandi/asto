import Image from "next/image";
import { site } from "@/site.config";
import Reveal from "@/app/components/primitives/Reveal";

export default function BlogPage() {
  return (
    <section className="pb-[var(--section-gap)] pt-36">
      <Reveal>
        <span className="label">( _04 ) Blog</span>
        <h1 className="display-section mt-6 max-w-[12ch] font-display">Notes.</h1>
      </Reveal>

      <ul className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
        {site.posts.map((post, i) => (
          <Reveal as="li" key={post.title} delay={(i % 2) * 0.06}>
            <article className="group" data-cursor="hover">
              <div className="relative aspect-[16/10] overflow-hidden bg-soft">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h2 className="font-display text-2xl tracking-tight">{post.title}</h2>
                <span className="label whitespace-nowrap">{post.date}</span>
              </div>
              <p className="label mt-2">{post.category}</p>
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
