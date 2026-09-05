"use client";

import { projectsData } from "@/data/projects";
import ProjectCard from "./ProjectCard";

interface ProjectsSectionProps {
  onCursorChange: (text: string) => void;
}

export default function ProjectsSection({ onCursorChange }: ProjectsSectionProps) {
  return (
    <section id="work" className="py-24 px-4 flex justify-center border-t border-white/5">
      <div className="w-full max-w-7xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-[#8B5CF6]">03</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono">FEATURED WORK</h2>
        </div>
        <p className="text-[#94A3B8] text-sm mb-12 max-w-xl">
          Analytical case studies and data systems built with Python, SQL, and robust business logic.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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