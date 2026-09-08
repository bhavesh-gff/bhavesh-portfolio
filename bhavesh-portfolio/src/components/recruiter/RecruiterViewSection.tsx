"use client";

import { motion } from "framer-motion";
import { Download, GitBranch, BriefcaseBusiness } from "lucide-react";
import { profileData } from "@/data/profile";

interface RecruiterViewSectionProps {
  onCursorChange: (text: string) => void;
}

export default function RecruiterViewSection({ onCursorChange }: Readonly<RecruiterViewSectionProps>) {
  const coreSkills = ["Python", "SQL", "Pandas", "NumPy", "Matplotlib"];

  return (
    <section className="flex justify-center px-4 pb-6 pt-2 sm:pb-10">
      <div className="w-full max-w-7xl">
        <motion.div
          className="rounded-3xl border border-[#8b5cf6]/25 bg-[#0b0f16]/80 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.45)] sm:p-8"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="text-[10px] font-medium tracking-[0.22em] text-[#8b5cf6] uppercase">Recruiter Snapshot</div>
              <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">Data analyst with a strong analytical foundation.</h2>
            </div>
            <a
              href="/bhavesh-suthar-resume.txt"
              download="Bhavesh-Suthar-Resume.txt"
              className="hidden items-center gap-2 rounded-full border border-white/10 bg-[#0d1320] px-4 py-2 text-[10px] font-semibold tracking-[0.16em] text-white sm:inline-flex"
            >
              <Download size={14} />
              RESUME
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
            <div className="rounded-2xl border border-white/10 bg-[#0d1320] p-4">
              <div className="text-[10px] font-medium tracking-[0.18em] text-[#8ea0b6] uppercase">Target Role</div>
              <div className="mt-3 text-sm font-medium text-white">Data Analyst → Aspiring Data Scientist</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0d1320] p-4">
              <div className="text-[10px] font-medium tracking-[0.18em] text-[#8ea0b6] uppercase">Education</div>
              <div className="mt-3 text-sm font-medium text-white">{profileData.education}</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0d1320] p-4 md:col-span-2 xl:col-span-2">
              <div className="text-[10px] font-medium tracking-[0.18em] text-[#8ea0b6] uppercase">Core Skills</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {coreSkills.map((skill) => (
                  <span key={skill} className="rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 px-2.5 py-1 text-[10px] font-medium tracking-[0.12em] text-[#e9ddff] uppercase">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0d1320] p-4">
              <div className="text-[10px] font-medium tracking-[0.18em] text-[#8ea0b6] uppercase">Best Project</div>
              <div className="mt-3 text-sm font-medium text-white">Sales Data Analysis</div>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href="/bhavesh-suthar-resume.txt"
              download="Bhavesh-Suthar-Resume.txt"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8b5cf6] px-4 py-3 text-[10px] font-semibold tracking-[0.16em] text-white hover:bg-[#7c3aed]"
              onMouseEnter={() => onCursorChange("RESUME")}
              onMouseLeave={() => onCursorChange("")}
            >
              <Download size={14} />
              RESUME
            </a>
            <a
              href="https://github.com/bhavesh-gff"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-[#0d1320] px-4 py-3 text-[10px] font-semibold tracking-[0.16em] text-white"
              onMouseEnter={() => onCursorChange("GITHUB")}
              onMouseLeave={() => onCursorChange("")}
            >
              <GitBranch size={14} />
              GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/bhavesh-suthar-00761b315/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-[#0d1320] px-4 py-3 text-[10px] font-semibold tracking-[0.16em] text-white"
              onMouseEnter={() => onCursorChange("LINKEDIN")}
              onMouseLeave={() => onCursorChange("")}
            >
              <BriefcaseBusiness size={14} />
              LINKEDIN
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}