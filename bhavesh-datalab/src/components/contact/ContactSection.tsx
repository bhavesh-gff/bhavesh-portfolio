"use client";

import { Mail, BriefcaseBusiness, Code2, Download } from "lucide-react";
import { socialLinks } from "@/data/social";

interface ContactSectionProps {
  onCursorChange: (text: string) => void;
}

export default function ContactSection({ onCursorChange }: Readonly<ContactSectionProps>) {
  return (
    <section id="contact" className="flex justify-center bg-[#242323] px-4 py-20 sm:py-24">
      <div className="w-full max-w-5xl p-6 text-center sm:p-10">
        <div className="text-[10px] font-medium tracking-[0.22em] text-[#F15A24] uppercase">Let&apos;s Connect</div>
        <h2 className="mt-3 text-3xl font-semibold text-[#FFFCF2] sm:text-4xl">I&apos;m open to data projects, collaborations, and meaningful opportunities.</h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {socialLinks.map((social) => {
            const isEmail = social.platform === "Email";
            let Icon = Code2;
            if (isEmail) Icon = Mail;
            else if (social.platform === "LinkedIn") Icon = BriefcaseBusiness;

            return (
              <a
                key={social.platform}
                href={isEmail ? "https://mail.google.com/mail/?view=cm&fs=1&to=bhaveshsuthar08835@gmail.com" : social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#8A857D] bg-transparent px-4 py-3 text-[10px] font-semibold tracking-[0.16em] text-[#FFFCF2] hover:border-[#F15A24] hover:bg-[#3F3D3B]"
                onMouseEnter={() => onCursorChange(social.platform.toUpperCase())}
                onMouseLeave={() => onCursorChange("")}
              >
                <Icon size={16} className="text-[#F15A24]" />
                <span>{isEmail ? "MAIL" : social.platform.toUpperCase()}</span>
              </a>
            );
          })}

          <a
            href="/bhavesh-suthar-resume.txt"
            download="Bhavesh-Suthar-Resume.txt"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#F15A24] px-4 py-3 text-[10px] font-semibold tracking-[0.16em] text-[#FFFCF2] hover:bg-[#D94C1B]"
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