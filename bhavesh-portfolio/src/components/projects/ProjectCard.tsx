"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { ArrowRight, GitBranch } from "lucide-react";
import CaseStudyModal from "./CaseStudyModal";

interface ProjectCardProps {
  project: Project;
  onCursorChange: (text: string) => void;
}

export default function ProjectCard({ project, onCursorChange }: Readonly<ProjectCardProps>) {
  const [modalOpen, setModalOpen] = useState(false);
  const projectNumber = `PROJECT ${String(project.id).substring(0, 2).toUpperCase()}`;
  const visualBars = [42, 56, 64, 78, 60, 48];

  return (
    <>
      <motion.article
        className="group flex min-h-[520px] flex-col justify-between rounded-3xl border border-white/10 bg-[#0b0f16]/80 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.3)] transition-all hover:border-[#8b5cf6]/40"
        whileHover={{ y: -6 }}
        onMouseEnter={() => onCursorChange("VIEW")}
        onMouseLeave={() => onCursorChange("")}
      >
        <div>
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[10px] font-medium tracking-[0.2em] text-[#8ea0b6] uppercase">{projectNumber}</span>
            <div className="flex flex-wrap justify-end gap-1.5">
              {project.technologies.slice(0, 3).map((tech) => (
                <span key={tech} className="rounded-full border border-white/10 bg-[#0d1320] px-2 py-1 text-[9px] font-medium tracking-[0.14em] text-[#b4c0cf] uppercase">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-5 overflow-hidden rounded-2xl border border-white/10 bg-[#0d1320] p-3">
            <div className="mb-3 flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#4ade80]" />
              <span className="ml-3 text-[9px] font-medium tracking-[0.18em] text-[#8ea0b6] uppercase">Dashboard Preview</span>
            </div>

            {project.imageUrl ? (
              <img
                src={project.imageUrl}
                alt={`${project.name} dashboard preview`}
                className="h-40 w-full rounded-xl border border-white/5 object-cover"
              />
            ) : (
              <div className="flex h-40 items-end gap-2 rounded-xl border border-white/5 bg-[#0b0f16] p-3">
                {visualBars.map((bar, index) => (
                  <div key={index} className="flex flex-1 flex-col items-center justify-end gap-2">
                    <div className="w-full rounded-t-md bg-gradient-to-t from-[#8b5cf6] via-[#8b5cf6]/70 to-[#5eead4]/70" style={{ height: `${bar}%` }} />
                    <span className="text-[7px] text-[#7f8ba1]">{index + 1}</span>
                  </div>
                ))}
              </div>
            )}

            {!project.imageUrl && (
              <div className="mt-3 grid grid-cols-3 gap-2">
                <div className="rounded-lg border border-white/5 bg-[#101827] p-2">
                  <div className="mb-1 h-1.5 w-10 rounded-full bg-[#8b5cf6]/60" />
                  <div className="h-1.5 w-6 rounded-full bg-white/10" />
                </div>
                <div className="rounded-lg border border-white/5 bg-[#101827] p-2">
                  <div className="mb-1 h-1.5 w-12 rounded-full bg-[#5eead4]/60" />
                  <div className="h-1.5 w-7 rounded-full bg-white/10" />
                </div>
                <div className="rounded-lg border border-white/5 bg-[#101827] p-2">
                  <div className="mb-1 h-1.5 w-9 rounded-full bg-[#c4b5fd]/60" />
                  <div className="h-1.5 w-5 rounded-full bg-white/10" />
                </div>
              </div>
            )}
          </div>

          <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-[#b4c0cf]">{project.shortDescription}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.focus.slice(0, 4).map((focus) => (
              <span key={focus} className="rounded-full border border-white/10 bg-[#0d1320] px-2 py-1 text-[9px] font-medium tracking-[0.14em] text-[#8ea0b6] uppercase">
                {focus}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4">
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] text-white hover:text-[#d9c7ff]"
            >
              <span>VIEW CASE STUDY</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </button>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] text-[#b4c0cf] hover:text-white"
                onMouseEnter={() => onCursorChange("GITHUB")}
                onMouseLeave={() => onCursorChange("")}
                onClick={(e) => e.stopPropagation()}
              >
                <GitBranch size={14} />
                CODE
              </a>
            )}
          </div>
        </div>
      </motion.article>

      {modalOpen && (
        <CaseStudyModal
          project={project}
          onClose={() => setModalOpen(false)}
          onCursorChange={onCursorChange}
        />
      )}
    </>
  );
}