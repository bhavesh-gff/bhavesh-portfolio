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
        className="fixed top-0 left-0 w-3 h-3 bg-[#8B5CF6] rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 50 }}
      />
      {/* Outer ring / context badge */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center border border-[#8B5CF6]/40 rounded-full backdrop-blur-[1px]"
        animate={{
          x: mousePosition.x - (cursorText ? 40 : 16),
          y: mousePosition.y - (cursorText ? 40 : 16),
          width: cursorText ? 80 : 32,
          height: cursorText ? 80 : 32,
          backgroundColor: cursorText ? "rgba(139, 92, 246, 0.15)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      >
        {cursorText && (
          <span className="text-[10px] font-semibold tracking-wider text-white uppercase select-none">
            {cursorText}
          </span>
        )}
      </motion.div>
    </>
  );
}