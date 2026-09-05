"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Filter, Search, BarChart2, CheckCircle2, ArrowRight } from "lucide-react";

interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  techniques: string[];
  tools: string[];
  relatedProject: string;
  icon: any;
}

export default function DataWorkflowSection({ onCursorChange }: { onCursorChange: (text: string) => void }) {
  const [activeStep, setActiveStep] = useState(0);

  const workflowSteps: WorkflowStep[] = [
    {
      step: "01",
      title: "ASK",
      description: "Define the core commercial problem and outline precise analytical questions.",
      techniques: ["Business Question Framing", "Metric Definition", "Scope Alignment"],
      tools: ["Jupyter", "Documentation", "Requirement Specs"],
      relatedProject: "Sales Data Analysis",
      icon: Search
    },
    {
      step: "02",
      title: "COLLECT",
      description: "Gather raw data from CSV logs, relational databases, or transactional exports.",
      techniques: ["SQL Queries", "CSV Ingestion", "Database Extraction"],
      tools: ["Python", "SQL", "PostgreSQL"],
      relatedProject: "Smart Inventory ERP",
      icon: Database
    },
    {
      step: "03",
      title: "CLEAN",
      description: "Prepare reliable data by resolving missing values, duplicates, and type mismatches.",
      techniques: ["Null Imputation", "Duplicate Removal", "Type Casting", "Outlier Check"],
      tools: ["Pandas", "NumPy", "Python"],
      relatedProject: "Sales Data Analysis",
      icon: Filter
    },
    {
      step: "04",
      title: "EXPLORE",
      description: "Uncover patterns, correlations, and distribution characteristics through EDA.",
      techniques: ["Descriptive Stats", "Correlation Matrix", "Grouping & Aggregations"],
      tools: ["Pandas", "NumPy", "Statistics"],
      relatedProject: "Decision-Making Tool",
      icon: BarChart2
    },
    {
      step: "05",
      title: "VISUALISE",
      description: "Translate complex numerical outputs into intuitive visual charts and reports.",
      techniques: ["Time-Series Plots", "Comparative Bars", "Dashboard Layout"],
      tools: ["Matplotlib", "Power BI", "Streamlit"],
      relatedProject: "Sales Data Analysis",
      icon: CheckCircle2
    },
    {
      step: "06",
      title: "DECIDE",
      description: "Synthesize findings into concrete, actionable recommendations for decision-makers.",
      techniques: ["Insight Synthesis", "Risk Assessment", "Strategic Reporting"],
      tools: ["Executive Summaries", "Decision Matrices"],
      relatedProject: "Decision-Making Tool",
      icon: ArrowRight
    }
  ];

  return (
    <section className="py-24 px-4 flex justify-center border-t border-white/5 bg-[#0A0D13]">
      <div className="w-full max-w-7xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-[#8B5CF6]">WORKFLOW</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono">MY DATA WORKFLOW</h2>
        </div>
        <p className="text-[#94A3B8] text-sm mb-12 max-w-xl">
          A structured, repeatable analytical pipeline ensuring every data project translates into reliable business decisions.
        </p>

        {/* Workflow Grid / Interactive Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
          {workflowSteps.map((item, index) => {
            const Icon = item.icon;
            const isSelected = activeStep === index;
            return (
              <motion.div
                key={item.step}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer rounded-xl p-5 border transition-all flex flex-col justify-between ${
                  isSelected 
                    ? "bg-[#0D1118] border-[#8B5CF6] shadow-lg shadow-[#8B5CF6]/10" 
                    : "bg-[#07090D] border-white/10 hover:border-white/30"
                }`}
                onMouseEnter={() => onCursorChange("STEP")}
                onMouseLeave={() => onCursorChange("")}
                whileHover={{ y: -4 }}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-[#8B5CF6]">{item.step}</span>
                    <Icon size={18} className={isSelected ? "text-[#8B5CF6]" : "text-[#64748B]"} />
                  </div>
                  <h3 className="font-mono font-bold text-white text-base mb-2">{item.title}</h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-3">{item.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#64748B]">VIEW DETAILS</span>
                  <span className={`text-xs ${isSelected ? "text-[#8B5CF6]" : "text-[#64748B]"}`}>→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Active Step Detailed Inspector Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            className="bg-[#0D1118] border border-[#8B5CF6]/30 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col lg:flex-row gap-8 items-start justify-between"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs bg-[#8B5CF6]/10 text-[#8B5CF6] px-2.5 py-1 rounded border border-[#8B5CF6]/30">
                  STEP {workflowSteps[activeStep].step}
                </span>
                <h3 className="text-xl font-bold text-white font-mono">{workflowSteps[activeStep].title}</h3>
              </div>
              <p className="text-[#94A3B8] text-base leading-relaxed">
                {workflowSteps[activeStep].description}
              </p>
              <div>
                <span className="text-xs font-mono text-[#64748B] block mb-2">APPLIED TECHNIQUES:</span>
                <div className="flex flex-wrap gap-2">
                  {workflowSteps[activeStep].techniques.map((tech) => (
                    <span key={tech} className="text-xs font-mono bg-[#07090D] border border-white/10 px-2.5 py-1 rounded text-white">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full lg:w-80 flex flex-col gap-4 bg-[#07090D] p-6 rounded-xl border border-white/10">
              <div>
                <span className="text-[11px] font-mono text-[#64748B] block mb-1">TOOLS UTILIZED</span>
                <div className="flex flex-wrap gap-1.5">
                  {workflowSteps[activeStep].tools.map((tool) => (
                    <span key={tool} className="text-xs font-mono bg-[#0D1118] text-[#8B5CF6] px-2 py-0.5 rounded border border-[#8B5CF6]/20">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-white/10">
                <span className="text-[11px] font-mono text-[#64748B] block mb-1">RELATED PROJECT</span>
                <span className="text-xs font-mono text-white font-bold">
                  {workflowSteps[activeStep].relatedProject}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}