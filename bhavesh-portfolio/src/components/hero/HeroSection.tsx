"use client";

import { motion } from "framer-motion";
import DataLabVisual from "./DataLabVisual";
import { profileData } from "@/data/profile";

interface HeroSectionProps {
  onCursorChange: (text: string) => void;
}

export default function HeroSection({ onCursorChange }: HeroSectionProps) {
  const skillsList = ["Python", "SQL", "Pandas", "NumPy", "Matplotlib"];

  return (
    <section id="lab" className="min-h-screen pt-32 pb-16 px-4 flex items-center justify-center relative">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Editorial Content */}
        <motion.div 
          className="lg:col-span-7 flex flex-col gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Small label */}
          <div className="inline-flex items-center gap-2 self-start bg-[#0D1118] border border-white/10 px-3 py-1.5 rounded-md">
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
            <span className="font-mono text-xs tracking-wider text-[#94A3B8]">
              {profileData.label}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-none">
            I TURN DATA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#6366F1] to-[#06B6D4]">
              INTO DECISIONS.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-[#94A3B8] text-base sm:text-lg max-w-2xl leading-relaxed">
            {profileData.tagline} I work with Python, SQL, Pandas, NumPy, and data visualisation to turn analysis into useful business insight.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#work"
              className="px-6 py-3 rounded-xl bg-[#8B5CF6] hover:bg-[#7c3aed] text-white font-mono text-xs tracking-wider font-semibold shadow-lg shadow-[#8B5CF6]/20 transition-all flex items-center gap-2"
              onMouseEnter={() => onCursorChange("OPEN")}
              onMouseLeave={() => onCursorChange("")}
            >
              EXPLORE MY WORK →
            </a>
            <a
              href="#connect"
              className="px-6 py-3 rounded-xl bg-[#0D1118] hover:bg-[#111621] border border-white/10 text-white font-mono text-xs tracking-wider font-semibold transition-all flex items-center gap-2"
              onMouseEnter={() => onCursorChange("OPEN")}
              onMouseLeave={() => onCursorChange("")}
            >
              DOWNLOAD RESUME ↓
            </a>
          </div>

          {/* Clean Skill Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-4">
            <span className="text-xs font-mono text-[#64748B] mr-2">CORE STACK:</span>
            {skillsList.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 rounded bg-[#0A0D13] border border-white/10 text-[11px] font-mono text-[#94A3B8]"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Original Interactive Data Lab Visualisation */}
        <motion.div
          className="lg:col-span-5 w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <DataLabVisual onCursorChange={onCursorChange} />
        </motion.div>

      </div>
    </section>
  );
}