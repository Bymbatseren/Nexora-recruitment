"use client";

import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Role } from "./components/Role";
import { Requirements } from "./components/Requirements";
import { TechStack, Benefits } from "./components/TechAndBenefits";
import { InteractiveQuiz } from "./components/InteractiveQuiz";
import { ApplyForm } from "./components/ApplyForm";
import { Footer } from "./components/Footer";

export default function RecruitmentLanding() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 overflow-x-hidden font-sans selection:bg-indigo-500/30">
      <main className="flex flex-col items-center w-full">
        <Hero />
        <About />
        <Role />
        <Requirements />
        <TechStack />
        <Benefits />
        <InteractiveQuiz />
        <ApplyForm />
        <Footer />
      </main>
    </div>
  );
}
