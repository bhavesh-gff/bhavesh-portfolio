"use client";

import { motion } from "framer-motion";
import { certificationsData } from "@/data/certifications";
import { Award } from "lucide-react";

interface ProofSectionProps {
  onCursorChange: (text: string) => void;
}

export default function ProofSection({ onCursorChange }: Readonly<ProofSectionProps>) {
  return (
    <section id="proof" className="py-24 px-4 flex justify-center border-t border-white/5">
      <div className="w-full max-w-7xl">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono">PROOF</h2>
        </div>
        <p className="text-[#94A3B8] text-sm mb-12 max-w-xl">
          Real credentials, internships, and technical certifications validating professional readiness.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cred) => (
            <motion.div
              key={cred.id}
              className="bg-[#0A0D13] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#8B5CF6]/50 transition-all shadow-xl"
              whileHover={{ y: -4 }}
              onMouseEnter={() => onCursorChange("CRED")}
              onMouseLeave={() => onCursorChange("")}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#8B5CF6]/10 text-[#8B5CF6]">
                    <Award size={20} />
                  </div>
                  {cred.year && <span className="font-mono text-xs text-[#64748B]">{cred.year}</span>}
                </div>
                <h3 className="text-base font-bold text-white font-mono mb-2">{cred.name}</h3>
                <p className="text-xs text-[#94A3B8] font-mono mb-6">{cred.organization}</p>
                {cred.description && <p className="text-xs text-[#94A3B8] leading-relaxed whitespace-pre-line">{cred.description}</p>}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#8B5CF6]">LEARNING EVIDENCE</span>
                <span className="text-xs text-[#64748B]">✓</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}