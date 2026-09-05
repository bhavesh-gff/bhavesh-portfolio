"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { User, GraduationCap, Target, Compass } from "lucide-react";

interface ProfileSectionProps {
  onCursorChange: (text: string) => void;
}

export default function ProfileSection({ onCursorChange }: ProfileSectionProps) {
  return (
    <section id="profile" className="py-24 px-4 flex justify-center border-t border-white/5">
      <div className="w-full max-w-7xl">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-[#8B5CF6]">02</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono">PROFILE</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Bio & Photo Placeholder */}
          <motion.div 
            className="lg:col-span-7 bg-[#0A0D13] border border-white/10 rounded-2xl p-8 flex flex-col gap-6 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4">
              {/* Photo Placeholder */}
              <div 
                className="w-16 h-16 rounded-xl bg-[#0D1118] border border-white/10 flex items-center justify-center text-[#8B5CF6]"
                onMouseEnter={() => onCursorChange("BS")}
                onMouseLeave={() => onCursorChange("")}
              >
                <User size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{profileData.name}</h3>
                <p className="text-xs font-mono text-[#8B5CF6]">{profileData.education}</p>
              </div>
            </div>

            <p className="text-[#94A3B8] text-base leading-relaxed">
              {profileData.bio}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div>
                <span className="text-[11px] font-mono text-[#64748B] block mb-1">CURRENT FOCUS</span>
                <div className="flex flex-wrap gap-1.5">
                  {profileData.currentFocus.map((focus) => (
                    <span key={focus} className="text-xs font-mono bg-[#0D1118] px-2 py-1 rounded border border-white/5 text-[#94A3B8]">
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#64748B] block mb-1">DATA INTERESTS</span>
                <div className="flex flex-wrap gap-1.5">
                  {profileData.interests.map((interest) => (
                    <span key={interest} className="text-xs font-mono bg-[#0D1118] px-2 py-1 rounded border border-white/5 text-[#94A3B8]">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Quick Stats / Pillars */}
          <motion.div 
            className="lg:col-span-5 grid grid-cols-1 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[#0A0D13] border border-white/10 rounded-xl p-6 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[#8B5CF6]/10 text-[#8B5CF6]">
                <GraduationCap size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Academic Foundation</h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed">Pursuing BCA Computer Science with rigorous grounding in algorithms, databases, and structural software design.</p>
              </div>
            </div>

            <div className="bg-[#0A0D13] border border-white/10 rounded-xl p-6 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[#06B6D4]/10 text-[#06B6D4]">
                <Target size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Analytical Orientation</h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed">Bridging raw technical code with commercial logic to ensure analysis directly supports operational decision-making.</p>
              </div>
            </div>

            <div className="bg-[#0A0D13] border border-white/10 rounded-xl p-6 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[#6366F1]/10 text-[#6366F1]">
                <Compass size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Continuous Exploration</h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed">Actively expanding toolkit into predictive statistics, SQL optimization, and advanced Python data frameworks.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}