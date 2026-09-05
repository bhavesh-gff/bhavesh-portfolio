"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BackgroundEnvironment() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Technical Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Cursor Spotlight */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, rgba(6, 182, 212, 0.02) 40%, transparent 70%)",
        }}
        animate={{
          x: mousePos.x - 250,
          y: mousePos.y - 250,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 25 }}
      />

      {/* Subtle Data Nodes & Connections Background Accents */}
      <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-[#8B5CF6]/30 animate-pulse" />
      <div className="absolute top-1/3 right-20 w-1.5 h-1.5 rounded-full bg-[#06B6D4]/30" />
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-[#6366F1]/30" />
    </div>
  );
}