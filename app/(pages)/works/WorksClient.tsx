"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { site } from "@/site.config";
import ProjectCard from "@/app/components/primitives/ProjectCard";
import Reveal from "@/app/components/primitives/Reveal";
import SplitText from "@/app/components/primitives/SplitText";

export default function WorksClient() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(site.projects.map((p) => p.category)))],
    []
  );
  const [active, setActive] = useState("All");

  const shown =
    active === "All" ? site.projects : site.projects.filter((p) => p.category === active);

  return (
    <section className="pb-[var(--section-gap)] pt-36">
      <div className="site-shell">
        <Reveal>
          <span className="label">( _02 ) Works</span>
          <SplitText as="h1" text="Demo Concept." className="display-section mt-6 max-w-[12ch]" />
          <p className="mt-4 max-w-[56ch] text-sm leading-relaxed text-muted-2">
            Dirancang untuk menunjukkan pendekatan dan standar pengerjaan kami — bukan pekerjaan klien.
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-6">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={`label transition-opacity ${active === c ? "text-fg" : "text-muted hover:text-fg"}`}
                data-cursor="hover"
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2">
          {shown.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 0.06}>
              <Link href={`/works/${project.slug}`} className="block" data-cursor="hover">
                <ProjectCard project={project} priority={i < 2} />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
