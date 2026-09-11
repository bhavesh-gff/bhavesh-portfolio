"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface DataLabVisualProps {
  onCursorChange: (text: string) => void;
}

export default function DataLabVisual({ onCursorChange }: DataLabVisualProps) {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const nodes = [
    { id: 1, label: "RAW DATA", x: 50, y: 40, detail: "Dataset retrieved" },
    { id: 2, label: "CLEANING", x: 150, y: 120, detail: "Fields checked and transformed" },
    { id: 3, label: "ANALYSIS", x: 260, y: 70, detail: "Patterns compared across segments" },
    { id: 4, label: "INSIGHT", x: 370, y: 140, detail: "Findings summarized" },
    { id: 5, label: "DECISION", x: 450, y: 80, detail: "Business recommendations" },
  ];

  return (
    <div 
      className="relative flex h-[380px] w-full flex-col justify-between overflow-hidden rounded-2xl border border-[#D8D3C8] bg-[#F4F1E9] p-6 shadow-[0_18px_45px_rgba(36,35,35,0.08)]"
      onMouseEnter={() => onCursorChange("ANALYSE")}
      onMouseLeave={() => onCursorChange("")}
    >
      {/* Top Header of Lab Window */}
      <div className="flex items-center justify-between border-b border-[#D8D3C8] pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-[11px] font-mono text-[#8A857D]">LAB_ENVIRONMENT // PIPELINE_ACTIVE</span>
        </div>
        <div className="rounded border border-[#D8D3C8] bg-[#ECE8DE] px-2 py-0.5 text-[10px] font-mono text-[#3F3D3B]">
          DATA → DECISION
        </div>
      </div>

      {/* Interactive SVG / Canvas Data Flow Visual */}
      <div className="relative flex-1 my-4 flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 200">
          {/* Connecting lines */}
          <path
            d="M 50 100 Q 100 40 150 120 T 260 70 T 370 140 T 450 90"
            fill="none"
            stroke="#D8D3C8"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* Animated data flow pulse */}
          <motion.path
            d="M 50 100 Q 100 40 150 120 T 260 70 T 370 140 T 450 90"
            fill="none"
            stroke="#F15A24"
            strokeWidth="2.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        {/* Nodes */}
        <div className="absolute inset-0">
          {nodes.map((node) => (
            <motion.div
              key={node.id}
              className="absolute cursor-pointer"
              style={{ left: `${(node.x / 500) * 100}%`, top: `${(node.y / 200) * 100}%` }}
              whileHover={{ scale: 1.15 }}
              onHoverStart={() => setActiveNode(node.id)}
              onHoverEnd={() => setActiveNode(null)}
            >
              <div className="-ml-2 -mt-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#F4F1E9] bg-[#F15A24]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FFFCF2] animate-ping" />
              </div>
              <div className="absolute left-1/2 top-5 -translate-x-1/2 whitespace-nowrap rounded border border-[#D8D3C8] bg-[#242323] px-2 py-0.5 text-[10px] font-mono text-[#FFFCF2]">
                {node.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Active Node Detail Tooltip Box */}
        {activeNode && (
          <motion.div 
            className="absolute bottom-2 left-2 right-2 flex items-center justify-between rounded border border-[#D8D3C8] bg-[#ECE8DE] p-2 text-xs font-mono text-[#625F59]"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span>STATUS: {nodes.find(n => n.id === activeNode)?.detail}</span>
            <span className="text-[#F15A24]">NODE_ID: 0{activeNode}</span>
          </motion.div>
        )}
      </div>

      {/* Bottom Footer of Lab Window */}
      <div className="flex items-center justify-between border-t border-[#D8D3C8] pt-3 text-[11px] font-mono text-[#8A857D]">
        <span>ENGINE: PYTHON / SQL / PANDAS</span>
        <span className="text-[#3F6B50]">● READY FOR DEPLOYMENT</span>
      </div>
    </div>
  );
}