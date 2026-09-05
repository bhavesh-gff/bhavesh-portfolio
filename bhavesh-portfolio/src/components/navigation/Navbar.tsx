"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Command } from "lucide-react";

interface NavbarProps {
  onCursorChange: (text: string) => void;
}

export default function Navbar({ onCursorChange }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "lab", label: "LAB", href: "#lab" },
    { id: "profile", label: "PROFILE", href: "#profile" },
    { id: "work", label: "WORK", href: "#work" },
    { id: "toolkit", label: "TOOLKIT", href: "#toolkit" },
    { id: "proof", label: "PROOF", href: "#proof" },
    { id: "connect", label: "CONNECT", href: "#connect" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-4">
      <motion.nav
        className={`w-full max-w-7xl flex items-center justify-between transition-all duration-300 rounded-xl border border-white/10 bg-[#0A0D13]/85 backdrop-blur-md px-6 ${
          scrolled ? "py-3 shadow-lg shadow-black/40" : "py-4"
        }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Brand */}
        <a 
          href="#lab"
          className="font-mono text-sm tracking-widest text-white font-bold flex items-center gap-2 group"
          onMouseEnter={() => onCursorChange("LAB")}
          onMouseLeave={() => onCursorChange("")}
        >
          <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-ping" />
          <span>BHAVESH.SUTHAR</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-xs font-mono text-[#94A3B8] hover:text-white transition-colors tracking-wider"
              onMouseEnter={() => onCursorChange("GO")}
              onMouseLeave={() => onCursorChange("")}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right action / Cmd K & Mobile toggle */}
        <div className="flex items-center gap-3">
          <button 
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#111621] border border-white/10 text-[11px] font-mono text-[#94A3B8] hover:text-white hover:border-[#8B5CF6]/50 transition-colors"
            onMouseEnter={() => onCursorChange("CMD")}
            onMouseLeave={() => onCursorChange("")}
            onClick={() => alert("Data Lab Workspace active. Use navigation links to explore sections.")}
          >
            <Command size={12} />
            <span>K</span>
          </button>

          <button
            className="lg:hidden p-2 text-[#94A3B8] hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="absolute top-20 left-4 right-4 bg-[#0D1118] border border-white/10 rounded-xl p-6 flex flex-col gap-4 lg:hidden shadow-2xl z-50 backdrop-blur-xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono text-[#94A3B8] hover:text-white py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-[#8B5CF6]">→</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}