import Image from "next/image";
import Link from "next/link";
import { site } from "@/site.config";
import SplashClock from "@/app/components/chrome/SplashClock";
import Reveal from "@/app/components/primitives/Reveal";
import SplitText from "@/app/components/primitives/SplitText";

export default function Hero() {
  const colors = ["#e0edda", "#dce8f8", "#f9e1cf", "#e6dff4", "#f5dce7", "#f4edc9", "#d6ebeb", "#eadfd5"];

  return (
    <section className="flex min-h-[92svh] flex-col">
      {/* Centered wordmark block — mirrors Bungee's oversized logo + tagline */}
      <div className="site-shell flex flex-1 flex-col items-center justify-center pb-10 pt-32 text-center">
        <Reveal scroll={false} y={-40}>
          <h1 className="text-[clamp(4.5rem,13vw,11rem)] font-medium leading-[0.86] tracking-[-0.05em]">
            {site.brand.mark}
          </h1>
        </Reveal>

        <Reveal scroll={false} delay={0.15} y={0}>
          <p className="label mt-6 text-fg">Asto®</p>
        </Reveal>

        <SplitText
          as="p"
          delay={0.3}
          stagger={0.035}
          text={site.hero.headline}
          className="mt-7 max-w-[46rem] text-[clamp(1.6rem,3.4vw,3.1rem)] font-medium leading-[1.1] tracking-[-0.02em]"
        />

        <SplitText
          as="p"
          delay={0.45}
          stagger={0.035}
          text={site.hero.subhead}
          className="mt-7 max-w-[38rem] text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.45] text-muted-2"
        />

        <Reveal scroll={false} delay={0.9}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span className="label flex items-center gap-2">
              <span className="text-muted">ID</span>
              <SplashClock timeZone="Asia/Jakarta" />
            </span>
            <span className="label text-line">/</span>
            {site.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="label line-hover"
                data-cursor="hover"
              >
                {social.label}
              </a>
            ))}
            <span className="label text-line">/</span>
            <span className="label text-muted-2">{site.brand.location}</span>
          </div>
        </Reveal>
        <Reveal scroll={false} delay={1}>
          <div className="mt-7 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full border border-fg bg-fg px-7 py-3.5 text-base text-bg transition-colors hover:bg-transparent hover:text-fg"
              data-cursor="hover"
            >
              {site.hero.cta} <span aria-hidden>↗</span>
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="service-marquee border-y border-line py-3" aria-label="Layanan Astodigi">
        <div className="service-marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="service-marquee-group" aria-hidden={copy === 1} inert={copy === 1}>
              {site.services.map((service, i) => (
                <article
                  key={service.no}
                  style={{ backgroundColor: colors[i % colors.length] }}
                  className={`shape-card flex h-[calc(var(--spacing)*100)] w-[calc(var(--spacing)*68)] shrink-0 flex-col overflow-hidden text-deep ${i % 2 === 1 ? "shape-card--flip" : ""}`}
                >
                  <div className="relative h-40 shrink-0">
                    <Image src={service.image} alt="" fill loading="eager" sizes="17rem" className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="label text-deep/70">( {service.no} )</span>
                    <h2 className="mt-3 text-xl font-medium leading-tight text-deep">{service.title}</h2>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-deep/80">{service.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
