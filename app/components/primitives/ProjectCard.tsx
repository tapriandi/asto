"use client";

import Image from "next/image";
import { useRef } from "react";
import type { Project } from "@/site.config";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
  index?: number;
};

/**
 * Big editorial project card. Hover plays the optional video when present,
 * otherwise the still image scales slightly.
 */
export default function ProjectCard({ project, priority = false, index = 0 }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const onEnter = () => {
    const v = videoRef.current;
    if (v) {
      v.currentTime = 0;
      void v.play().catch(() => {});
    }
  };

  const onLeave = () => {
    const v = videoRef.current;
    if (v) v.pause();
  };

  return (
    <article
      className="group relative"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      data-cursor="hover"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-surface">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={priority}
          className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
        {project.video ? (
          <video
            ref={videoRef}
            src={project.video}
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        ) : null}
      </div>

      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-xl tracking-tight">{project.title}</h3>
        <span className="label whitespace-nowrap">
          _ {project.year}
        </span>
      </div>
      <p className="label mt-1">{project.category}</p>
    </article>
  );
}
