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
      className="relative w-full h-[380px] bg-[#0A0D13] border border-white/10 rounded-2xl p-6 flex flex-col justify-between overflow-hidden shadow-2xl"
      onMouseEnter={() => onCursorChange("ANALYSE")}
      onMouseLeave={() => onCursorChange("")}
    >
      {/* Top Header of Lab Window */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-[11px] font-mono text-[#64748B]">LAB_ENVIRONMENT // PIPELINE_ACTIVE</span>
        </div>
        <div className="text-[10px] font-mono text-[#8B5CF6] bg-[#8B5CF6]/10 px-2 py-0.5 rounded border border-[#8B5CF6]/30">
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
            stroke="rgba(139, 92, 246, 0.3)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* Animated data flow pulse */}
          <motion.path
            d="M 50 100 Q 100 40 150 120 T 260 70 T 370 140 T 450 90"
            fill="none"
            stroke="#06B6D4"
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
              <div className="w-4 h-4 -ml-2 -mt-2 rounded-full bg-[#8B5CF6] border-2 border-[#0A0D13] shadow-lg shadow-[#8B5CF6]/50 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              </div>
              <div className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#0D1118] border border-white/10 px-2 py-0.5 rounded text-[10px] font-mono text-white">
                {node.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Active Node Detail Tooltip Box */}
        {activeNode && (
          <motion.div 
            className="absolute bottom-2 left-2 right-2 bg-[#0D1118]/95 border border-[#8B5CF6]/40 p-2 rounded text-xs font-mono text-[#94A3B8] flex items-center justify-between backdrop-blur-md"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span>STATUS: {nodes.find(n => n.id === activeNode)?.detail}</span>
            <span className="text-[#06B6D4]">NODE_ID: 0{activeNode}</span>
          </motion.div>
        )}
      </div>

      {/* Bottom Footer of Lab Window */}
      <div className="flex items-center justify-between pt-3 border-t border-white/10 text-[11px] font-mono text-[#64748B]">
        <span>ENGINE: PYTHON / SQL / PANDAS</span>
        <span className="text-emerald-400">● READY FOR DEPLOYMENT</span>
      </div>
    </div>
  );
}