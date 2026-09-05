"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { ArrowRight, Github } from "lucide-react";
import CaseStudyModal from "./CaseStudyModal";

interface ProjectCardProps {
  project: Project;
  onCursorChange: (text: string) => void;
}

export default function ProjectCard({ project, onCursorChange }: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="bg-[#0A0D13] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between group hover:border-[#8B5CF6]/50 transition-all shadow-xl"
        whileHover={{ y: -6 }}
        onMouseEnter={() => onCursorChange("VIEW")}
        onMouseLeave={() => onCursorChange("")}
      >
        <div>
          {/* Top Metadata */}
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-xs text-[#8B5CF6] font-bold">{project.number}</span>
            <div className="flex items-center gap-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <span key={tech} className="text-[10px] font-mono bg-[#0D1118] border border-white/5 px-2 py-0.5 rounded text-[#94A3B8]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Name & Description */}
          <h3 className="text-xl font-bold text-white font-mono mb-3 group-hover:text-[#8B5CF6] transition-colors">
            {project.name}
          </h3>
          <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
            {project.shortDescription}
          </p>

          {/* Focus Tags */}
          <div className="flex flex-wrap gap-1.5 mb-8">
            {project.focus.map((f) => (
              <span key={f} className="text-[11px] font-mono bg-[#07090D] px-2 py-1 rounded border border-white/5 text-[#64748B]">
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer / CTAs */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <button
            onClick={() => setModalOpen(true)}
            className="text-xs font-mono text-white font-semibold flex items-center gap-2 group-hover:text-[#8B5CF6] transition-colors"
          >
            <span>VIEW CASE STUDY</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-[#94A3B8] hover:text-white flex items-center gap-1.5"
            onMouseEnter={() => onCursorChange("GITHUB")}
            onMouseLeave={() => onCursorChange("")}
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={14} />
            <span>CODE</span>
          </a>
        </div>
      </motion.div>

      {/* Case Study Modal */}
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