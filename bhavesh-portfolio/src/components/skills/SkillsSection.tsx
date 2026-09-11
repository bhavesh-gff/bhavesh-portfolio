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
    <section id="skills" className="flex justify-center bg-[#FFFCF2] px-4 py-20 sm:py-24">
      <div className="w-full max-w-7xl">
        <div className="mb-8">
          <div className="text-[10px] font-medium tracking-[0.22em] text-[#F15A24] uppercase">Skills & Toolkit</div>
          <h2 className="mt-2 text-2xl font-semibold text-[#242323] sm:text-3xl">Analytical capabilities</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-5 lg:col-span-7">
            {skillsData.map((cat) => (
              <div key={cat.category} className="rounded-2xl border border-[#D8D3C8] bg-[#F4F1E9] p-6 shadow-sm">
                <h3 className="mb-4 flex items-center gap-2 text-[10px] font-medium tracking-[0.2em] text-[#F15A24] uppercase">
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
                        className={`rounded-md border px-3.5 py-2 text-[10px] font-semibold tracking-[0.16em] uppercase transition-all ${
                          isSelected
                            ? "border-[#F15A24] bg-[#F15A24] text-[#FFFCF2]"
                            : "border-[#D8D3C8] bg-[#FFFCF2] text-[#625F59] hover:border-[#F15A24]"
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
                className="rounded-2xl border border-[#D8D3C8] bg-[#F4F1E9] p-6 shadow-sm"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex items-center justify-between gap-3 border-b border-[#D8D3C8] pb-4">
                  <h3 className="text-2xl font-semibold text-[#242323]">{selectedSkill.name}</h3>
                  <span className="rounded-md border border-[#D8D3C8] bg-[#FCE2D6] px-2 py-1 text-[9px] font-medium tracking-[0.14em] text-[#3F3D3B] uppercase">Verified</span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#625F59]">{selectedSkill.description}</p>

                <div className="mt-6">
                  <div className="mb-3 text-[10px] font-medium tracking-[0.18em] text-[#8A857D] uppercase">What I use it for</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkill.keyPoints.map((kp) => (
                      <span key={kp} className="inline-flex items-center gap-2 rounded-md border border-[#D8D3C8] bg-[#FFFCF2] px-2.5 py-1 text-[10px] font-medium tracking-[0.12em] text-[#625F59] uppercase">
                        <CheckCircle size={12} className="text-[#F15A24]" />
                        {kp}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-[#D8D3C8] pt-4">
                  <div className="mb-3 text-[10px] font-medium tracking-[0.18em] text-[#8A857D] uppercase">Where I applied it</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkill.usedIn.map((proj) => (
                      <span key={proj} className="rounded-md border border-[#D8D3C8] bg-[#FCE2D6] px-2.5 py-1 text-[10px] font-medium tracking-[0.12em] text-[#3F3D3B] uppercase">
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