"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CustomCursorProps {
  cursorText: string;
}

export default function CustomCursor({ cursorText }: CustomCursorProps) {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* Small dot follower */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#F15A24] rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 50 }}
      />
      {/* Outer ring / context badge */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center border border-[#F15A24]/50 rounded-full"
        animate={{
          x: mousePosition.x - (cursorText ? 40 : 16),
          y: mousePosition.y - (cursorText ? 40 : 16),
          width: cursorText ? 80 : 32,
          height: cursorText ? 80 : 32,
          backgroundColor: cursorText ? "rgba(241, 90, 36, 0.12)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      >
        {cursorText && (
          <span className="text-[10px] font-semibold tracking-wider text-[#242323] uppercase select-none">
            {cursorText}
          </span>
        )}
      </motion.div>
    </>
  );
}