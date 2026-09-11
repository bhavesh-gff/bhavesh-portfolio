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
          <div className="text-[10px] font-medium tracking-[0.22em] text-[#F15A24] uppercase">Credentials</div>
          <h2 className="mt-2 text-2xl font-semibold text-[#242323] sm:text-3xl">Certifications & Experience</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {certificationsData.map((cred) => (
            <motion.article
              key={cred.id}
              className="flex min-h-[260px] flex-col justify-between rounded-2xl border border-[#D8D3C8] bg-[#FFFCF2] p-6 transition-colors hover:bg-[#F4F1E9]"
              whileHover={{ y: -4 }}
              onMouseEnter={() => onCursorChange("CRED")}
              onMouseLeave={() => onCursorChange("")}
            >
              <div>
                <div className="mb-5 flex items-center justify-between">
                  <div className="rounded-lg bg-[#FCE2D6] p-2.5 text-[#F15A24]">
                    <Award size={20} />
                  </div>
                  {cred.year && <span className="text-[10px] font-medium tracking-[0.16em] text-[#F15A24] uppercase">{cred.year}</span>}
                </div>

                <h3 className="text-lg font-semibold text-[#242323]">{cred.name}</h3>
                <p className="mt-2 text-[11px] font-medium tracking-[0.16em] text-[#242323] uppercase">{cred.organization}</p>

                {cred.description && <p className="mt-4 text-sm leading-relaxed text-[#625F59]">{cred.description}</p>}
              </div>

              {cred.verificationLink ? (
                <a
                  href={cred.verificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-lg border border-[#F15A24] bg-[#FCE2D6] px-3 py-2 text-[10px] font-semibold tracking-[0.16em] text-[#3F3D3B] uppercase"
                >
                  View Certificate
                </a>
              ) : (
                <div className="mt-6 inline-flex items-center text-[10px] font-medium tracking-[0.16em] text-[#8A857D] uppercase">Credential</div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}