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
          className="rounded-2xl border border-[#D8D3C8] bg-[#F4F1E9] p-5 shadow-[0_20px_60px_rgba(36,35,35,0.08)] sm:p-8"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 flex items-center justify-between gap-4 border-b border-[#D8D3C8] pb-4">
            <div>
              <div className="text-[10px] font-medium tracking-[0.22em] text-[#F15A24] uppercase">Recruiter Snapshot</div>
              <h2 className="mt-2 text-xl font-semibold text-[#242323] sm:text-2xl">Data analyst with a strong analytical foundation.</h2>
            </div>
            <a
              href="/bhavesh-suthar-resume.txt"
              download="Bhavesh-Suthar-Resume.txt"
              className="hidden items-center gap-2 rounded-lg border border-[#242323] bg-[#242323] px-4 py-2 text-[10px] font-semibold tracking-[0.16em] text-[#FFFCF2] sm:inline-flex"
            >
              <Download size={14} />
              RESUME
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
            <div className="rounded-xl border border-[#D8D3C8] bg-[#FFFCF2] p-4">
              <div className="text-[10px] font-medium tracking-[0.18em] text-[#8ea0b6] uppercase">Target Role</div>
              <div className="mt-3 text-sm font-medium text-[#242323]">Data Analyst → Aspiring Data Scientist</div>
            </div>

            <div className="rounded-xl border border-[#D8D3C8] bg-[#FFFCF2] p-4">
              <div className="text-[10px] font-medium tracking-[0.18em] text-[#8ea0b6] uppercase">Education</div>
              <div className="mt-3 text-sm font-medium text-[#242323]">{profileData.education}</div>
            </div>

            <div className="rounded-xl border border-[#D8D3C8] bg-[#FFFCF2] p-4 md:col-span-2 xl:col-span-2">
              <div className="text-[10px] font-medium tracking-[0.18em] text-[#8ea0b6] uppercase">Core Skills</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {coreSkills.map((skill) => (
                  <span key={skill} className="rounded-md border border-[#D8D3C8] bg-[#FCE2D6] px-2.5 py-1 text-[10px] font-medium tracking-[0.12em] text-[#3F3D3B] uppercase">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[#D8D3C8] bg-[#FFFCF2] p-4">
              <div className="text-[10px] font-medium tracking-[0.18em] text-[#8ea0b6] uppercase">Best Project</div>
              <div className="mt-3 text-sm font-medium text-[#242323]">Sales Data Analysis</div>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href="/bhavesh-suthar-resume.txt"
              download="Bhavesh-Suthar-Resume.txt"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#242323] px-4 py-3 text-[10px] font-semibold tracking-[0.16em] text-[#FFFCF2] hover:bg-[#F15A24]"
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
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#242323] bg-transparent px-4 py-3 text-[10px] font-semibold tracking-[0.16em] text-[#242323] hover:bg-[#242323] hover:text-[#FFFCF2]"
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
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#242323] bg-transparent px-4 py-3 text-[10px] font-semibold tracking-[0.16em] text-[#242323] hover:bg-[#242323] hover:text-[#FFFCF2]"
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