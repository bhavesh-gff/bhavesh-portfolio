"use client";

import { Mail, Linkedin, Github, Download } from "lucide-react";
import { socialLinks } from "@/data/social";

interface ContactSectionProps {
  onCursorChange: (text: string) => void;
}

export default function ContactSection({ onCursorChange }: ContactSectionProps) {
  return (
    <section id="connect" className="py-24 px-4 flex justify-center border-t border-white/5">
      <div className="w-full max-w-7xl text-center flex flex-col items-center">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-[#8B5CF6]">06</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono">LET&apos;S CONNECT.</h2>
        </div>
        <p className="text-[#94A3B8] text-base max-w-xl mb-12">
          &quot;Open to internships, entry-level opportunities, data projects and meaningful collaborations.&quot;
        </p>

        {/* Action Buttons Grid */}
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-2xl">
          {socialLinks.map((social) => {
            const isEmail = social.platform === "Email";
            let Icon = Github;
            if (isEmail) Icon = Mail;
            else if (social.platform === "LinkedIn") Icon = Linkedin;
            return (
              <a
                key={social.platform}
                href={social.url}
                target={isEmail ? "_self" : "_blank"}
                rel={isEmail ? "" : "noopener noreferrer"}
                className="px-6 py-3.5 rounded-xl bg-[#0A0D13] hover:bg-[#111621] border border-white/10 hover:border-[#8B5CF6]/50 text-white font-mono text-xs font-semibold flex items-center gap-2.5 transition-all shadow-xl"
                onMouseEnter={() => onCursorChange(social.platform.toUpperCase())}
                onMouseLeave={() => onCursorChange("")}
              >
                <Icon size={16} className="text-[#8B5CF6]" />
                <span>{social.platform.toUpperCase()}</span>
              </a>
            );
          })}
           <a
             href="/bhavesh-suthar-resume.txt"
             download="Bhavesh-Suthar-Resume.txt"
            className="px-6 py-3.5 rounded-xl bg-[#8B5CF6] hover:bg-[#7c3aed] text-white font-mono text-xs font-semibold flex items-center gap-2.5 transition-all shadow-lg shadow-[#8B5CF6]/20"
            onMouseEnter={() => onCursorChange("DOWNLOAD")}
            onMouseLeave={() => onCursorChange("")}
          >
            <Download size={16} />
            <span>DOWNLOAD RESUME</span>
          </a>
        </div>

        {/* Footer Metadata */}
        <div className="mt-20 pt-8 border-t border-white/10 w-full flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#64748B] gap-4">
          <span>© {new Date().getFullYear()} BHAVESH SUTHAR. ALL RIGHTS RESERVED.</span>
          <span>DATA ANALYST → ASPIRING DATA SCIENTIST</span>
        </div>
      </div>
    </section>
  );
}