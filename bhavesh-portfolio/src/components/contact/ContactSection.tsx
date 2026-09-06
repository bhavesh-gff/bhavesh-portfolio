"use client";

import { useState } from "react";
import { Mail, Linkedin, Github, Download } from "lucide-react";
import { socialLinks } from "@/data/social";

interface ContactSectionProps {
  onCursorChange: (text: string) => void;
}

export default function ContactSection({ onCursorChange }: ContactSectionProps) {
  const [emailCopied, setEmailCopied] = useState(false);

  return (
    <section id="connect" className="py-24 px-4 flex justify-center border-t border-white/5">
      <div className="w-full max-w-7xl text-center flex flex-col items-center">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono">LET&apos;S CONNECT.</h2>
        </div>
        <p className="text-[#94A3B8] text-base max-w-xl mb-12">
          Open to internships, entry-level opportunities, data projects and meaningful collaborations.
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
                onClick={isEmail ? () => {
                  void navigator.clipboard?.writeText("bhaveshsuthar08835@gmail.com");
                  setEmailCopied(true);
                  window.setTimeout(() => setEmailCopied(false), 2000);
                } : undefined}
              >
                <Icon size={16} className="text-[#8B5CF6]" />
                <span>{isEmail && emailCopied ? "COPIED EMAIL" : social.platform.toUpperCase()}</span>
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

      </div>
    </section>
  );
}