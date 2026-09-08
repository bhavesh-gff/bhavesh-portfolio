"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Filter, Search, BarChart2, CheckCircle2, ArrowRight } from "lucide-react";

interface WorkflowStep {
  title: string;
  description: string;
  techniques: string[];
  tools: string[];
  relatedProject: string;
  icon: any;
}

export default function DataWorkflowSection({ onCursorChange }: Readonly<{ onCursorChange: (text: string) => void }>) {
  const [activeStep, setActiveStep] = useState(0);

  const workflowSteps: WorkflowStep[] = [
    { title: "ASK", description: "Define the analytical question and the decision the project needs to support.", techniques: ["Business Question Framing", "Metric Definition", "Scope Alignment"], tools: ["Project Context", "Business Metrics"], relatedProject: "Customer Churn Analysis; Ecommerce Sales & Conversion Analysis; Sales Data Analysis", icon: Search },
    { title: "COLLECT", description: "Retrieve the necessary datasets and query the records needed for analysis.", techniques: ["SQL Data Extraction", "Dataset Retrieval", "CSV Ingestion"], tools: ["SQL", "Google BigQuery", "Python"], relatedProject: "Ecommerce Sales & Conversion Analysis; Sales Data Analysis", icon: Database },
    { title: "CLEAN", description: "Validate structure, types, and values so the analysis is reliable from the start.", techniques: ["Data Quality Checks", "Data Type Validation", "Data Transformation"], tools: ["Python", "Pandas", "SQL"], relatedProject: "Customer Churn Analysis; Sales Data Analysis", icon: Filter },
    { title: "EXPLORE", description: "Compare segments, trends, products, revenue, and behavior to find meaningful patterns.", techniques: ["Exploratory Data Analysis", "Customer Segmentation", "Churn Analysis", "Conversion Analysis", "Revenue Analysis", "Trend Analysis"], tools: ["Python", "Pandas", "SQL", "Google BigQuery"], relatedProject: "Customer Churn Analysis; Ecommerce Sales & Conversion Analysis; Sales Data Analysis", icon: BarChart2 },
    { title: "VISUALISE", description: "Translate findings into visuals that clarify the story behind the numbers.", techniques: ["Trend Visualization", "Comparative Analysis", "Insight Communication"], tools: ["Python", "Pandas", "Matplotlib"], relatedProject: "Sales Data Analysis", icon: CheckCircle2 },
    { title: "DECIDE", description: "Turn evidence into recommendations that support retention, conversion, and business action.", techniques: ["Business Recommendations", "Insight Synthesis", "Risk Identification", "Decision Support"], tools: ["Analytical Findings", "Business Context"], relatedProject: "Customer Churn Analysis; Ecommerce Sales & Conversion Analysis; Sales Data Analysis", icon: ArrowRight }
  ];

  return (
    <section className="flex justify-center bg-[#0a0f16] px-4 py-20 sm:py-24">
      <div className="w-full max-w-7xl">
        <div className="mb-6">
          <div className="text-[10px] font-medium tracking-[0.22em] text-[#8b5cf6] uppercase">Workflow</div>
          <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">My Data Workflow</h2>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-6">
          {workflowSteps.map((item, index) => {
            const Icon = item.icon;
            const isSelected = activeStep === index;

            return (
              <motion.button
                key={item.title}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`flex min-h-[190px] cursor-pointer flex-col justify-between rounded-2xl border p-4 text-left transition-all ${
                  isSelected
                    ? "border-[#8b5cf6]/60 bg-[#0d1320] shadow-lg shadow-[#8b5cf6]/10"
                    : "border-white/10 bg-[#0b0f16] hover:border-white/20"
                }`}
                onMouseEnter={() => onCursorChange("STEP")}
                onMouseLeave={() => onCursorChange("")}
                whileHover={{ y: -3 }}
              >
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <Icon size={18} className={isSelected ? "text-[#8b5cf6]" : "text-[#7f8ba1]"} />
                  </div>
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#b4c0cf]">{item.description}</p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
                  <span className="text-[10px] font-medium tracking-[0.14em] text-[#8ea0b6] uppercase">Details</span>
                  <span className="text-[#8b5cf6]">→</span>
                </div>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            className="grid gap-6 rounded-3xl border border-[#8b5cf6]/20 bg-[#0d1320] p-5 sm:p-8 lg:grid-cols-[1.6fr_0.9fr]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <div>
              <div className="text-[10px] font-medium tracking-[0.2em] text-[#8b5cf6] uppercase">Stage</div>
              <h3 className="mt-2 text-2xl font-semibold text-white">{workflowSteps[activeStep].title}</h3>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-[#b4c0cf]">{workflowSteps[activeStep].description}</p>

              <div className="mt-6">
                <div className="mb-3 text-[10px] font-medium tracking-[0.18em] text-[#8ea0b6] uppercase">Techniques</div>
                <div className="flex flex-wrap gap-2">
                  {workflowSteps[activeStep].techniques.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-[#0b0f16] px-2.5 py-1 text-[10px] font-medium tracking-[0.12em] text-[#dfeaf6] uppercase">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0b0f16] p-4">
              <div className="mb-4 text-[10px] font-medium tracking-[0.18em] text-[#8ea0b6] uppercase">Tools Used</div>
              <div className="flex flex-wrap gap-2">
                {workflowSteps[activeStep].tools.map((tool) => (
                  <span key={tool} className="rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 px-2.5 py-1 text-[10px] font-medium tracking-[0.12em] text-[#e9ddff] uppercase">
                    {tool}
                  </span>
                ))}
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="text-[10px] font-medium tracking-[0.18em] text-[#8ea0b6] uppercase">Related Project</div>
                <p className="mt-2 text-sm font-medium text-white">{workflowSteps[activeStep].relatedProject}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}