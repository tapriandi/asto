import Image from "next/image";
import Link from "next/link";
import { site } from "@/site.config";
import Reveal from "@/app/components/primitives/Reveal";

export default function BlogPreview() {
  return (
    <section className="py-[var(--section-gap)]">
      <div className="site-shell">
        <Reveal>
          <div className="flex items-end justify-between gap-6 pb-12">
            <h2 className="display-section">From the Blog.</h2>
            <Link href="/blog" className="line-hover text-base" data-cursor="hover">See all ↗</Link>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {site.posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.05}>
              <Link href="/blog" className="group block" data-cursor="hover">
                <div className="relative aspect-[1.2] overflow-hidden rounded-[1.5rem] bg-soft">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) calc(100vw - 32px), 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <p className="label mt-4">{post.category} / {post.date}</p>
                <h3 className="mt-2 text-xl leading-tight">{post.title}</h3>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
