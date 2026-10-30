import { site } from "@/site.config";
import SectionHeading from "@/app/components/primitives/SectionHeading";
import ProjectCard from "@/app/components/primitives/ProjectCard";
import Reveal from "@/app/components/primitives/Reveal";

export default function LatestProjects() {
  const projects = site.projects.slice(0, 6);

  return (
    <section className="container-edge py-[var(--spacing-section)]">
      <Reveal>
        <SectionHeading title="Latest Projects." meta="( _©26 )" href="/works" />
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={(i % 2) * 0.08}>
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
