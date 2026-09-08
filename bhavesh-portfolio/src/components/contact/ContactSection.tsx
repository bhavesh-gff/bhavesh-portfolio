"use client";

import { useState } from "react";
import { Mail, BriefcaseBusiness, Code2, Download } from "lucide-react";
import { socialLinks } from "@/data/social";

interface ContactSectionProps {
  onCursorChange: (text: string) => void;
}

export default function ContactSection({ onCursorChange }: Readonly<ContactSectionProps>) {
  const [emailCopied, setEmailCopied] = useState(false);

  return (
    <section id="contact" className="flex justify-center px-4 py-20 sm:py-24">
      <div className="w-full max-w-5xl rounded-3xl border border-white/10 bg-[#0b0f16]/80 p-6 text-center shadow-[0_20px_60px_rgba(15,23,42,0.4)] sm:p-10">
        <div className="text-[10px] font-medium tracking-[0.22em] text-[#8b5cf6] uppercase">Let&apos;s Connect</div>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">I&apos;m open to data projects, collaborations, and meaningful opportunities.</h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {socialLinks.map((social) => {
            const isEmail = social.platform === "Email";
            let Icon = Code2;
            if (isEmail) Icon = Mail;
            else if (social.platform === "LinkedIn") Icon = BriefcaseBusiness;

            return (
              <a
                key={social.platform}
                href={isEmail ? "mailto:bhaveshsuthar08835@gmail.com" : social.url}
                target={isEmail ? undefined : "_blank"}
                rel={isEmail ? undefined : "noopener noreferrer"}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-[#0d1320] px-4 py-3 text-[10px] font-semibold tracking-[0.16em] text-white hover:border-[#8b5cf6]/40 hover:bg-[#101827]"
                onMouseEnter={() => onCursorChange(social.platform.toUpperCase())}
                onMouseLeave={() => onCursorChange("")}
                onClick={isEmail ? () => {
                  void navigator.clipboard?.writeText("bhaveshsuthar08835@gmail.com");
                  setEmailCopied(true);
                  window.setTimeout(() => setEmailCopied(false), 2000);
                } : undefined}
              >
                <Icon size={16} className="text-[#8b5cf6]" />
                <span>{isEmail && emailCopied ? "COPIED EMAIL" : social.platform.toUpperCase()}</span>
              </a>
            );
          })}

          <a
            href="/bhavesh-suthar-resume.txt"
            download="Bhavesh-Suthar-Resume.txt"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8b5cf6] px-4 py-3 text-[10px] font-semibold tracking-[0.16em] text-white shadow-lg shadow-[#8b5cf6]/20 hover:bg-[#7c3aed]"
            onMouseEnter={() => onCursorChange("DOWNLOAD")}
            onMouseLeave={() => onCursorChange("")}
          >
            <Download size={16} />
            DOWNLOAD RESUME
          </a>
        </div>
      </div>
    </section>
  );
}