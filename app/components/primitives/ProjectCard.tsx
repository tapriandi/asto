"use client";

import Image from "next/image";
import { useRef } from "react";
import type { Project } from "@/site.config";

type ProjectCardProps = { project: Project; priority?: boolean };

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <article
      className="group relative"
      data-cursor="hover"
      onMouseEnter={() => void videoRef.current?.play().catch(() => {})}
      onMouseLeave={() => videoRef.current?.pause()}
    >
      <div className="relative aspect-[.927] overflow-hidden rounded-[2rem] bg-surface">
        <Image
          src={project.image}
          alt={`${project.title} visual concept`}
          fill
          priority={priority}
          sizes="(max-width: 809px) calc(100vw - 32px), (max-width: 1520px) calc((100vw - 80px) / 2), 748px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
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
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/45 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="label text-bone">Preview concept</span>
          <span className="text-xl">↗</span>
        </div>
      </div>
      <div className="flex items-baseline justify-between gap-5 px-1 pt-3">
        <h3 className="text-lg">{project.title}</h3>
        <span className="label shrink-0">_ {project.year}</span>
      </div>
      <p className="label px-1 pt-1">{project.category}</p>
    </article>
  );
}
