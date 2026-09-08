"use client";

import { projectsData } from "@/data/projects";
import ProjectCard from "./ProjectCard";

interface ProjectsSectionProps {
  onCursorChange: (text: string) => void;
}

export default function ProjectsSection({ onCursorChange }: Readonly<ProjectsSectionProps>) {
  return (
    <section id="projects" className="flex justify-center px-4 py-20 sm:py-24">
      <div className="w-full max-w-7xl">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="text-[10px] font-medium tracking-[0.22em] text-[#8b5cf6] uppercase">Featured Work</div>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Projects</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onCursorChange={onCursorChange}
            />
          ))}
        </div>
      </div>
    </section>
  );
}