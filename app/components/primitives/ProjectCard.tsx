"use client";

import Image from "next/image";
import { useRef } from "react";
import type { Project } from "@/site.config";

type ProjectCardProps = { project: Project; priority?: boolean };

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <article
      className="group"
      data-cursor="hover"
      onMouseEnter={() => void videoRef.current?.play().catch(() => {})}
      onMouseLeave={() => videoRef.current?.pause()}
    >
      <div className="relative aspect-[.927] overflow-hidden rounded-[2rem] bg-soft">
        <Image
          src={project.image}
          alt={`${project.title} visual concept`}
          fill
          priority={priority}
          sizes="(max-width: 809px) calc(100vw - 32px), (max-width: 1520px) calc((100vw - 64px) / 2), 744px"
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
        {project.video ? (
          <video
            ref={videoRef}
            src={project.video}
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        ) : null}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/40 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="label text-white">Preview concept</span>
          <span className="text-xl text-white">↗</span>
        </div>
      </div>
      <div className="flex items-baseline justify-between gap-5 pt-3">
        <h3 className="display-sm">{project.title}</h3>
        <span className="label shrink-0">_ {project.year}</span>
      </div>
      <p className="label mt-1">{project.category}</p>
    </article>
  );
}
