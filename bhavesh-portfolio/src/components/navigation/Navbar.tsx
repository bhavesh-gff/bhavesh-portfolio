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
        className={`w-full max-w-7xl flex items-center justify-between rounded-xl border border-white/10 bg-[#0b0f16]/80 backdrop-blur-md px-4 sm:px-6 ${
          scrolled ? "py-3 shadow-lg shadow-black/20" : "py-3.5"
        }`}
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
      >
        <a
          href="#home"
          className="flex items-center gap-2 text-sm font-semibold tracking-[0.18em] text-white"
          onMouseEnter={() => onCursorChange("HOME")}
          onMouseLeave={() => onCursorChange("")}
        >
          <span className="h-2 w-2 rounded-full bg-[#8b5cf6]" />
          <span className="text-[10px] sm:text-xs">BHAVESH SUTHAR</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-[11px] font-medium tracking-[0.16em] text-[#b4c0cf] hover:text-white"
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
            className="hidden rounded-full border border-[#8b5cf6]/40 bg-[#8b5cf6]/10 px-3 py-1.5 text-[10px] font-semibold tracking-[0.14em] text-[#e9ddff] hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/20 sm:inline-flex"
            onMouseEnter={() => onCursorChange("RESUME")}
            onMouseLeave={() => onCursorChange("")}
          >
            RESUME
          </a>

          <button
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-[#dbe4f0] lg:hidden"
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
            className="absolute left-4 right-4 top-20 z-50 rounded-2xl border border-white/10 bg-[#0d1320]/95 p-5 shadow-2xl backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between border-b border-white/5 py-3 text-sm font-medium text-[#dfeaf6] last:border-b-0"
              >
                <span>{item.label}</span>
                <span className="text-[#8b5cf6]">→</span>
              </a>
            ))}
            <a
              href="/bhavesh-suthar-resume.txt"
              download="Bhavesh-Suthar-Resume.txt"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#8b5cf6] px-4 py-3 text-xs font-semibold tracking-[0.18em] text-white"
            >
              RESUME
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}