"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillsData, SkillItem } from "@/data/skills";
import { Cpu, CheckCircle } from "lucide-react";

interface SkillsSectionProps {
  onCursorChange: (text: string) => void;
}

export default function SkillsSection({ onCursorChange }: SkillsSectionProps) {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(skillsData[0].skills[0]);

  return (
    <section id="toolkit" className="py-24 px-4 flex justify-center border-t border-white/5 bg-[#0A0D13]">
      <div className="w-full max-w-7xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-[#8B5CF6]">04</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono">SKILLS & TOOLKIT</h2>
        </div>
        <p className="text-[#94A3B8] text-sm mb-12 max-w-xl">
          Evidence-based technical capabilities prioritized for data analysis and data science roles. Click any skill to inspect evidence and application.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side: Grouped Categories */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {skillsData.map((cat) => (
              <div key={cat.category} className="bg-[#07090D] border border-white/10 rounded-2xl p-6">
                <h3 className="text-xs font-mono text-[#8B5CF6] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Cpu size={14} />
                  <span>{cat.category}</span>
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => {
                    const isSelected = selectedSkill.name === skill.name;
                    return (
                      <button
                        key={skill.name}
                        onClick={() => setSelectedSkill(skill)}
                        className={`px-4 py-2 rounded-xl text-xs font-mono transition-all border ${
                          isSelected
                            ? "bg-[#8B5CF6] text-white border-[#8B5CF6] shadow-md shadow-[#8B5CF6]/20 font-bold"
                            : "bg-[#0D1118] text-[#94A3B8] border-white/10 hover:border-white/30 hover:text-white"
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

          {/* Right Side: Skill Evidence Inspector Box */}
          <div className="lg:col-span-5 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSkill.name}
                className="bg-[#0D1118] border border-[#8B5CF6]/40 rounded-2xl p-8 shadow-2xl flex flex-col gap-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="text-2xl font-bold text-white font-mono">{selectedSkill.name}</h3>
                  <span className="text-[10px] font-mono text-[#8B5CF6] bg-[#8B5CF6]/10 px-2.5 py-1 rounded border border-[#8B5CF6]/30">
                    VERIFIED SKILL
                  </span>
                </div>

                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  {selectedSkill.description}
                </p>

                <div>
                  <span className="text-xs font-mono text-[#64748B] block mb-2">KEY CAPABILITIES:</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkill.keyPoints.map((kp) => (
                      <span key={kp} className="text-xs font-mono bg-[#07090D] border border-white/10 px-2.5 py-1 rounded text-white flex items-center gap-1.5">
                        <CheckCircle size={12} className="text-[#8B5CF6]" />
                        <span>{kp}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-xs font-mono text-[#64748B] block mb-2">APPLIED IN PROJECTS:</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkill.usedIn.map((proj) => (
                      <span key={proj} className="text-xs font-mono bg-[#8B5CF6]/10 text-white px-3 py-1 rounded border border-[#8B5CF6]/30">
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