"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillsData, SkillItem } from "@/data/skills";
import { Cpu, CheckCircle } from "lucide-react";

interface SkillsSectionProps {
  onCursorChange: (text: string) => void;
}

export default function SkillsSection({ onCursorChange }: Readonly<SkillsSectionProps>) {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(skillsData[0].skills[0]);

  return (
    <section id="skills" className="flex justify-center bg-[#0a0f16] px-4 py-20 sm:py-24">
      <div className="w-full max-w-7xl">
        <div className="mb-8">
          <div className="text-[10px] font-medium tracking-[0.22em] text-[#8b5cf6] uppercase">Skills & Toolkit</div>
          <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Analytical capabilities</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-5 lg:col-span-7">
            {skillsData.map((cat) => (
              <div key={cat.category} className="rounded-3xl border border-white/10 bg-[#0b0f16] p-6">
                <h3 className="mb-4 flex items-center gap-2 text-[10px] font-medium tracking-[0.2em] text-[#8b5cf6] uppercase">
                  <Cpu size={14} />
                  {cat.category}
                </h3>

                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => {
                    const isSelected = selectedSkill.name === skill.name;
                    return (
                      <button
                        key={skill.name}
                        type="button"
                        onClick={() => setSelectedSkill(skill)}
                        className={`rounded-full border px-3.5 py-2 text-[10px] font-semibold tracking-[0.16em] uppercase transition-all ${
                          isSelected
                            ? "border-[#8b5cf6] bg-[#8b5cf6] text-white"
                            : "border-white/10 bg-[#0d1320] text-[#dfeaf6] hover:border-white/30"
                        }`}
                        onMouseEnter={() => onCursorChange("INSPECT")}
                        onMouseLeave={() => onCursorChange("")}
                      >
                        {skill.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSkill.name}
                className="rounded-3xl border border-[#8b5cf6]/25 bg-[#0d1320] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.4)]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                  <h3 className="text-2xl font-semibold text-white">{selectedSkill.name}</h3>
                  <span className="rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 px-2 py-1 text-[9px] font-medium tracking-[0.14em] text-[#e9ddff] uppercase">Verified</span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#b4c0cf]">{selectedSkill.description}</p>

                <div className="mt-6">
                  <div className="mb-3 text-[10px] font-medium tracking-[0.18em] text-[#8ea0b6] uppercase">What I use it for</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkill.keyPoints.map((kp) => (
                      <span key={kp} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0b0f16] px-2.5 py-1 text-[10px] font-medium tracking-[0.12em] text-[#dfeaf6] uppercase">
                        <CheckCircle size={12} className="text-[#8b5cf6]" />
                        {kp}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <div className="mb-3 text-[10px] font-medium tracking-[0.18em] text-[#8ea0b6] uppercase">Where I applied it</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkill.usedIn.map((proj) => (
                      <span key={proj} className="rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/10 px-2.5 py-1 text-[10px] font-medium tracking-[0.12em] text-[#e9ddff] uppercase">
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}