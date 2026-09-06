"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { X, Github, CheckCircle2 } from "lucide-react";

interface CaseStudyModalProps {
  project: Project;
  onClose: () => void;
  onCursorChange: (text: string) => void;
}

export default function CaseStudyModal({ project, onClose, onCursorChange }: CaseStudyModalProps) {
  const cs = project.caseStudy;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <motion.div 
        className="relative w-full max-w-4xl bg-[#0A0D13] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0D1118] sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-bold text-white font-mono">{project.name}{" // CASE STUDY"}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#94A3B8] hover:text-white rounded-lg hover:bg-white/5"
            onMouseEnter={() => onCursorChange("CLOSE")}
            onMouseLeave={() => onCursorChange("")}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body / Scrollable Content */}
        <div className="p-6 sm:p-10 overflow-y-auto flex flex-col gap-8">
          
          {/* Overview Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#0D1118] p-6 rounded-xl border border-white/10">
            <div>
              <span className="text-[11px] font-mono text-[#8B5CF6] block mb-1">PROBLEM STATEMENT</span>
              <p className="text-sm text-[#94A3B8] leading-relaxed">{cs.problem}</p>
            </div>
            <div>
              <span className="text-[11px] font-mono text-[#06B6D4] block mb-1">ANALYTICAL OBJECTIVE</span>
              <p className="text-sm text-[#94A3B8] leading-relaxed">{cs.objective}</p>
            </div>
          </div>

          {/* Dataset Info */}
          <div>
            <h4 className="text-xs font-mono text-[#64748B] mb-2 uppercase tracking-wider">DATASET</h4>
            <div className="bg-[#07090D] p-4 rounded-xl border border-white/10 text-sm text-white font-mono">
              {cs.dataset}
            </div>
          </div>

          {/* Data Preparation */}
          <div>
            <h4 className="text-xs font-mono text-[#64748B] mb-2 uppercase tracking-wider">DATA PREPARATION & CLEANING</h4>
            <div className="flex flex-col gap-2">
              {cs.dataPreparation.map((prep, i) => (
                <div key={prep} className="flex items-start gap-3 bg-[#0D1118] p-3 rounded-lg border border-white/5 text-sm text-[#94A3B8]">
                  <span>{prep}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Analysis & Visualization */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-mono text-[#64748B] mb-2 uppercase tracking-wider">ANALYSIS STEPS</h4>
              <ul className="flex flex-col gap-2">
                {cs.analysis.map((step) => (
                  <li key={step} className="text-xs text-[#94A3B8] bg-[#0D1118] p-3 rounded-lg border border-white/5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-mono text-[#64748B] mb-2 uppercase tracking-wider">VISUALISATION & INSIGHTS</h4>
              <ul className="flex flex-col gap-2">
                {cs.insights.map((insight) => (
                  <li key={insight} className="text-xs text-white bg-[#0D1118] p-3 rounded-lg border border-white/5 flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Result & Impact */}
          <div>
            <h4 className="text-xs font-mono text-[#64748B] mb-2 uppercase tracking-wider">RESULT & COMMERCIAL IMPACT</h4>
            <div className="bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 p-6 rounded-xl text-sm text-white font-medium leading-relaxed">
              {cs.result}
            </div>
          </div>

          {/* Technologies & Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded bg-[#0D1118] border border-white/10 text-xs font-mono text-[#8B5CF6]">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#0D1118] hover:bg-[#111621] border border-white/10 text-white font-mono text-xs flex items-center gap-2 transition-colors"
                onMouseEnter={() => onCursorChange("GITHUB")}
                onMouseLeave={() => onCursorChange("")}
              >
                <Github size={14} />
                <span>GITHUB REPO</span>
              </a>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}