"use client";

import { motion } from "framer-motion";
import { certificationsData } from "@/data/certifications";
import { Award } from "lucide-react";

interface ProofSectionProps {
  onCursorChange: (text: string) => void;
}

export default function ProofSection({ onCursorChange }: Readonly<ProofSectionProps>) {
  return (
    <section id="credentials" className="flex justify-center px-4 py-20 sm:py-24">
      <div className="w-full max-w-7xl">
        <div className="mb-8">
          <div className="text-[10px] font-medium tracking-[0.22em] text-[#8b5cf6] uppercase">Credentials</div>
          <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Certifications & Experience</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {certificationsData.map((cred) => (
            <motion.article
              key={cred.id}
              className="flex min-h-[260px] flex-col justify-between rounded-3xl border border-white/10 bg-[#0b0f16] p-6 shadow-[0_18px_45px_rgba(15,23,42,0.28)]"
              whileHover={{ y: -4 }}
              onMouseEnter={() => onCursorChange("CRED")}
              onMouseLeave={() => onCursorChange("")}
            >
              <div>
                <div className="mb-5 flex items-center justify-between">
                  <div className="rounded-2xl bg-[#8b5cf6]/10 p-2.5 text-[#8b5cf6]">
                    <Award size={20} />
                  </div>
                  {cred.year && <span className="text-[10px] font-medium tracking-[0.16em] text-[#8ea0b6] uppercase">{cred.year}</span>}
                </div>

                <h3 className="text-lg font-semibold text-white">{cred.name}</h3>
                <p className="mt-2 text-[11px] font-medium tracking-[0.16em] text-[#8b5cf6] uppercase">{cred.organization}</p>

                {cred.description && <p className="mt-4 text-sm leading-relaxed text-[#b4c0cf]">{cred.description}</p>}
              </div>

              {cred.verificationLink ? (
                <a
                  href={cred.verificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-full border border-[#8b5cf6]/40 bg-[#8b5cf6]/10 px-3 py-2 text-[10px] font-semibold tracking-[0.16em] text-[#e9ddff] uppercase"
                >
                  View Certificate
                </a>
              ) : (
                <div className="mt-6 inline-flex items-center text-[10px] font-medium tracking-[0.16em] text-[#8ea0b6] uppercase">Credential</div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}