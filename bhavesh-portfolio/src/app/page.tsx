"use client";

import { useState } from "react";
import Navbar from "@/components/navigation/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import RecruiterViewSection from "@/components/recruiter/RecruiterViewSection";
import ProfileSection from "@/components/profile/ProfileSection";
import DataWorkflowSection from "@/components/workflow/DataWorkflowSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import SkillsSection from "@/components/skills/SkillsSection";
import ProofSection from "@/components/proof/ProofSection";
import ContactSection from "@/components/contact/ContactSection";
import CustomCursor from "@/components/ui/CustomCursor";
import BackgroundEnvironment from "@/components/ui/BackgroundEnvironment";

export default function Home() {
  const [cursorText, setCursorText] = useState("");

  return (
    <main id="home" className="min-h-screen bg-[#07090D] text-white relative selection:bg-[#8B5CF6] selection:text-white">
      <BackgroundEnvironment />
      <CustomCursor cursorText={cursorText} />
      <Navbar onCursorChange={setCursorText} />
      <HeroSection onCursorChange={setCursorText} />
      <RecruiterViewSection onCursorChange={setCursorText} />
      <ProfileSection onCursorChange={setCursorText} />
      <DataWorkflowSection onCursorChange={setCursorText} />
      <ProjectsSection onCursorChange={setCursorText} />
      <SkillsSection onCursorChange={setCursorText} />
      <ProofSection onCursorChange={setCursorText} />
      <ContactSection onCursorChange={setCursorText} />
    </main>
  );
}