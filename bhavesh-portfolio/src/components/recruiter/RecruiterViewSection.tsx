"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin } from "lucide-react";
import { profileData } from "@/data/profile";

interface RecruiterViewSectionProps {
  onCursorChange: (text: string) => void;
}

export default function RecruiterViewSection({ onCursorChange }: RecruiterViewSectionProps) {
  return (
    <section className="py-24 px-4 flex justify-center border-t border-white/5 bg-[#0A0D13]">
      <div className="w-full max-w-7xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-[#8B5CF6]">SUMMARY</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono">RECRUITER VIEW</h2>
        </div>
        <p className="text-[#94A3B8] text-sm mb-12 max-w-xl">
          Quick-scan candidate overview designed for recruiters and technical interviewers in under 20 seconds.
        </p>

        <motion.div 
          className="bg-[#07090D] border border-[#8B5CF6]/40 rounded-2xl p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Left Column: Key Attributes */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <span className="text-[11px] font-mono text-[#64748B] block mb-1">TARGET ROLE</span>
              <span className="text-sm font-mono text-white font-bold block bg-[#0D1118] p-3 rounded-lg border border-white/10">
                Data Analyst → Aspiring Data Scientist
              </span>
            </div>

            <div>
              <span className="text-[11px] font-mono text-[#64748B] block mb-1">EDUCATION</span>
              <span className="text-sm font-mono text-white font-bold block bg-[#0D1118] p-3 rounded-lg border border-white/10">
                {profileData.education}
              </span>
            </div>

            <div className="sm:col-span-2">
              <span className="text-[11px] font-mono text-[#64748B] block mb-1">CORE SKILLS</span>
              <div className="flex flex-wrap gap-2">
                {["Python", "SQL", "Pandas", "NumPy", "Data Visualisation", "Power BI"].map((s) => (
                  <span key={s} className="text-xs font-mono bg-[#8B5CF6]/10 text-[#8B5CF6] px-3 py-1 rounded border border-[#8B5CF6]/30">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[11px] font-mono text-[#64748B] block mb-1">BEST PROJECT</span>
              <span className="text-xs font-mono text-white font-bold block bg-[#0D1118] p-3 rounded-lg border border-white/10">
                Sales Data Analysis
              </span>
            </div>

            <div>
              <span className="text-[11px] font-mono text-[#64748B] block mb-1">CURRENT FOCUS</span>
              <span className="text-xs font-mono text-white font-bold block bg-[#0D1118] p-3 rounded-lg border border-white/10">
                Statistics & Machine Learning
              </span>
            </div>
          </div>

          {/* Right Column: Quick Actions */}
          <div className="lg:col-span-4 flex flex-col gap-4 bg-[#0D1118] p-6 rounded-xl border border-white/10">
            <span className="text-xs font-mono text-[#8B5CF6] font-bold mb-2">VERIFICATION & CONTACT</span>
            <a
              href="#connect"
              className="w-full py-3 rounded-xl bg-[#8B5CF6] hover:bg-[#7c3aed] text-white font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#8B5CF6]/20"
              onMouseEnter={() => onCursorChange("OPEN")}
              onMouseLeave={() => onCursorChange("")}
            >
              <Download size={14} />
              <span>DOWNLOAD RESUME</span>
            </a>
            <a
              href="https://github.com/bhavesh-gff"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-[#07090D] hover:bg-[#111621] border border-white/10 text-white font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-all"
              onMouseEnter={() => onCursorChange("GITHUB")}
              onMouseLeave={() => onCursorChange("")}
            >
              <Github size={14} />
              <span>GITHUB PROFILE</span>
            </a>
            <a
              href="https://linkedin.com/in/bhavesh-suthar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-[#07090D] hover:bg-[#111621] border border-white/10 text-white font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-all"
              onMouseEnter={() => onCursorChange("LINKEDIN")}
              onMouseLeave={() => onCursorChange("")}
            >
              <Linkedin size={14} />
              <span>LINKEDIN PROFILE</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}