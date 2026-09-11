"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onCursorChange: (text: string) => void;
}

export default function Navbar({ onCursorChange }: Readonly<NavbarProps>) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "credentials", label: "Credentials", href: "#credentials" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        className={`w-full max-w-7xl flex items-center justify-between rounded-xl border border-[#D8D3C8] bg-[#FFFCF2] px-4 shadow-[0_12px_30px_rgba(36,35,35,0.06)] sm:px-6 ${
          scrolled ? "py-3 shadow-md" : "py-3.5"
        }`}
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
      >
        <a
          href="#home"
          className="flex items-center gap-2 text-sm font-semibold tracking-[0.18em] text-[#242323]"
          onMouseEnter={() => onCursorChange("HOME")}
          onMouseLeave={() => onCursorChange("")}
        >
          <span className="h-2 w-2 rounded-full bg-[#F15A24]" />
          <span className="text-[10px] sm:text-xs">BHAVESH SUTHAR</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-[11px] font-medium tracking-[0.16em] text-[#625F59] hover:text-[#F15A24]"
              onMouseEnter={() => onCursorChange("GO")}
              onMouseLeave={() => onCursorChange("")}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="/bhavesh-suthar-resume.txt"
            download="Bhavesh-Suthar-Resume.txt"
            className="hidden rounded-lg border border-[#F15A24] bg-[#FFFCF2] px-3 py-1.5 text-[10px] font-semibold tracking-[0.14em] text-[#242323] hover:bg-[#F15A24] hover:text-[#FFFCF2] sm:inline-flex"
            onMouseEnter={() => onCursorChange("RESUME")}
            onMouseLeave={() => onCursorChange("")}
          >
            RESUME
          </a>

          <button
            className="inline-flex items-center justify-center rounded-lg border border-[#D8D3C8] bg-[#F4F1E9] p-2 text-[#242323] lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="absolute left-4 right-4 top-20 z-50 rounded-xl border border-[#D8D3C8] bg-[#FFFCF2] p-5 shadow-xl lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between border-b border-[#D8D3C8] py-3 text-sm font-medium text-[#242323] last:border-b-0"
              >
                <span>{item.label}</span>
                <span className="text-[#F15A24]">→</span>
              </a>
            ))}
            <a
              href="/bhavesh-suthar-resume.txt"
              download="Bhavesh-Suthar-Resume.txt"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-[#242323] px-4 py-3 text-xs font-semibold tracking-[0.18em] text-[#FFFCF2]"
            >
              RESUME
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}