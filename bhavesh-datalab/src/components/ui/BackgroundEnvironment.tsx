"use client";

export default function BackgroundEnvironment() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

      {/* Subtle Data Nodes & Connections Background Accents */}
      <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-[#F15A24]/20 animate-pulse" />
      <div className="absolute top-1/3 right-20 w-1.5 h-1.5 rounded-full bg-[#3F6B50]/30" />
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-[#D8D3C8]" />
    </div>
  );
}