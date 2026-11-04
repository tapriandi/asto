import Link from "next/link";
import { site } from "@/site.config";
import ProjectCard from "@/app/components/primitives/ProjectCard";
import Reveal from "@/app/components/primitives/Reveal";
import SplitText from "@/app/components/primitives/SplitText";

export default function LatestProjects() {
  return (
    <section className="section">
      <div className="site-shell">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <SplitText as="h2" scroll text="Karya terbaru." className="display-section" />
            <span className="label shrink-0">( Demo Concept )</span>          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2">
          {site.projects.slice(0, 6).map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 0.08}>
              <ProjectCard project={project} priority={i < 2} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14">
            <Link href="/works" className="text-lg line-hover" data-cursor="hover">
              Lihat semua project ↗
            </Link>
            <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-muted-2">
              Semua karya di atas adalah Demo Concept — dirancang untuk menunjukkan pendekatan kami, bukan pekerjaan klien.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
