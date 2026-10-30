import { site } from "@/site.config";
import ProjectCard from "@/app/components/primitives/ProjectCard";
import Reveal from "@/app/components/primitives/Reveal";

export default function LatestProjects() {
  return (
    <section className="py-[var(--spacing-section)]">
      <div className="site-shell">
        <Reveal>
          <div className="flex items-end justify-between gap-6 pb-14">
            <h2 className="display-lg">Latest Projects.</h2>
            <span className="label">( _©26 )</span>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-x-6 gap-y-3 md:grid-cols-2">
          {site.projects.slice(0, 6).map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 0.06}>
              <ProjectCard project={project} priority={i < 2} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
