"use client";

import { useState } from "react";
import Navbar from "@/components/navigation/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import ProfileSection from "@/components/profile/ProfileSection";
import DataWorkflowSection from "@/components/workflow/DataWorkflowSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import SkillsSection from "@/components/skills/SkillsSection";
import ProofSection from "@/components/proof/ProofSection";
import RecruiterViewSection from "@/components/recruiter/RecruiterViewSection";
import ContactSection from "@/components/contact/ContactSection";
import CustomCursor from "@/components/ui/CustomCursor";
import BackgroundEnvironment from "@/components/ui/BackgroundEnvironment";

export default function Home() {
  const [cursorText, setCursorText] = useState("");

  return (
    <main className="min-h-screen bg-[#07090D] text-white relative selection:bg-[#8B5CF6] selection:text-white">
      {/* Background Interactive Data Environment */}
      <BackgroundEnvironment />

      {/* Custom Desktop Cursor */}
      <CustomCursor cursorText={cursorText} />

      {/* Workspace Sticky Navigation */}
      <Navbar onCursorChange={setCursorText} />

      {/* Hero Section */}
      <HeroSection onCursorChange={setCursorText} />

      {/* Compact Profile Section */}
      <ProfileSection onCursorChange={setCursorText} />

      {/* Signature Interactive Data Workflow Section */}
      <DataWorkflowSection onCursorChange={setCursorText} />

      {/* Featured Projects & Case Studies */}
      <ProjectsSection onCursorChange={setCursorText} />

      {/* Skills & Evidence Toolkit */}
      <SkillsSection onCursorChange={setCursorText} />

      {/* Proof / Credentials */}
      <ProofSection onCursorChange={setCursorText} />

      {/* Recruiter View */}
      <RecruiterViewSection onCursorChange={setCursorText} />

      {/* Connect Section */}
      <ContactSection onCursorChange={setCursorText} />
    </main>
  );
}