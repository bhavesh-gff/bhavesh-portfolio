"use client";

import { motion } from "framer-motion";
import DataLabVisual from "./DataLabVisual";
import { profileData } from "@/data/profile";

interface HeroSectionProps {
  onCursorChange: (text: string) => void;
}

export default function HeroSection({ onCursorChange }: Readonly<HeroSectionProps>) {
  const skillsList = ["Python", "SQL", "Pandas", "NumPy", "Matplotlib"];

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center px-4 pb-16 pt-32 sm:pt-36">
      <div className="w-full max-w-7xl grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0d1320]/80 px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[#8b5cf6]" />
            <span className="text-[10px] font-medium tracking-[0.18em] text-[#b4c0cf] uppercase">
              {profileData.label}
            </span>
          </div>

          <h1 className="max-w-2xl text-4xl font-semibold leading-[0.92] tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
            <span className="block">I TURN DATA</span>
            <span className="mt-2 block text-[#e5e7eb]">INTO DECISIONS.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-[#b4c0cf] sm:text-lg">
            {profileData.tagline} I turn raw data into clear business insight using Python, SQL, and modern analytical workflows.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-[#8b5cf6] px-5 py-3 text-[11px] font-semibold tracking-[0.18em] text-white shadow-lg shadow-[#8b5cf6]/20 hover:bg-[#7c3aed]"
              onMouseEnter={() => onCursorChange("PROJECTS")}
              onMouseLeave={() => onCursorChange("")}
            >
              VIEW MY PROJECTS
            </a>
            <a
              href="/bhavesh-suthar-resume.txt"
              download="Bhavesh-Suthar-Resume.txt"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-[#0b0f16] px-5 py-3 text-[11px] font-semibold tracking-[0.18em] text-white hover:border-[#8b5cf6]/50 hover:bg-[#0f172a]"
              onMouseEnter={() => onCursorChange("RESUME")}
              onMouseLeave={() => onCursorChange("")}
            >
              DOWNLOAD RESUME
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2 text-[11px] text-[#8ea0b6]">
            <span className="font-medium tracking-[0.16em] text-[#64748b]">CORE STACK</span>
            <span className="hidden h-1 w-1 rounded-full bg-[#8ea0b6] sm:inline-block" />
            {skillsList.map((skill, index) => (
              <span key={skill} className="inline-flex items-center gap-2">
                <span>{skill}</span>
                {index < skillsList.length - 1 && <span className="text-[#64748b]">•</span>}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15 }}
        >
          <DataLabVisual onCursorChange={onCursorChange} />
        </motion.div>
      </div>
    </section>
  );
}