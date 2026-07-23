"use client";

import { useState } from "react";

interface Step {
  num: string;
  title: string;
  subtitle: string;
  duration: string;
  deliverables: string[];
  riskMitigation: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    num: "01",
    title: "Precision Scoping & Architecture",
    subtitle: "Eliminating Non-Essential Bloat",
    duration: "Days 1 – 3",
    deliverables: [
      "Architectural System Blueprint & Data Schema",
      "Strict Scope Control Matrix & Change Order Protocol",
      "Environment Setup & CI/CD Security Pipeline",
    ],
    riskMitigation:
      "Prevents scope creep (which affects 52% of agency projects) by locking down core requirements before writing code.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.25 0H8.25" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "High-Velocity Sprints",
    subtitle: "Modular Component Construction",
    duration: "Days 4 – 10",
    deliverables: [
      "Production-Ready Frontend UI Components",
      "Scalable API Integrations & Database Logic",
      "Automated Unit & Integration Test Suites",
    ],
    riskMitigation:
      "Eliminates technical debt by enforcing top-quartile engineering standards and continuous code reviews.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.75L16.5 10l-2.25 2.25m-4.5 0L7.5 10l2.25-2.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Live Clickable Demo Sprint",
    subtitle: "Anti-Black Hole Transparency",
    duration: "Day 11 – 13",
    deliverables: [
      "Interactive Live Staging Deployment",
      "Client Stakeholder Walkthrough & Feedback Session",
      "Performance & Security Benchmark Verification",
    ],
    riskMitigation:
      "Guarantees visibility. You are never more than 14 days away from interacting with a live, functional system build.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Production Deployment & Handover",
    subtitle: "100% IP Transfer",
    duration: "Day 14 (Handover)",
    deliverables: [
      "Production Environment Launch",
      "Complete Source Code, Docs & Repository Access",
      "30-Day Post-Launch Zero-Defect SLA Warranty",
    ],
    riskMitigation:
      "Zero vendor lock-in. Full ownership of code, documentation, and infrastructure specs.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.24a6 6 0 00-5.84-7.38v4.8m5.84 2.58a14.98 14.98 0 00-6.16 12.12" />
      </svg>
    ),
  },
];

export default function SprintTimeline() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="py-20 bg-white" id="sprint-timeline">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#6855F0] mb-3">
            Proprietary Delivery Governance
          </p>
          <h2 className="text-3xl font-extrabold text-[#1E1548] sm:text-4xl">
            The Anti-&quot;Black Hole&quot; Sprint Cadence
          </h2>
          <p className="mt-4 text-lg text-[#1E1548]/60 leading-relaxed">
            52% of software projects suffer from scope creep or disappear into development black holes. We enforce a transparent 14-day sprint cadence where you test live code at every milestone.
          </p>
        </div>

        {/* Step Navigation Pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`flex flex-col gap-2 p-5 rounded-2xl border text-left transition-all duration-300 ${
                  isSelected
                    ? "bg-[#6855F0] text-white border-[#6855F0] shadow-xl scale-[1.02]"
                    : "bg-[#F8FAFC] text-[#1E1548] border-[#E2E8F0] hover:bg-[#F1F5F9]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      isSelected ? "bg-white/20 text-white" : "bg-[#6855F0]/10 text-[#6855F0]"
                    }`}
                  >
                    {step.duration}
                  </span>
                  <span className={`text-xs font-bold tracking-widest ${isSelected ? "text-white/70" : "text-[#1E1548]/40"}`}>
                    STEP {step.num}
                  </span>
                </div>
                <h3 className="text-base font-bold leading-snug mt-1">{step.title}</h3>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detail Panel */}
        <div className="rounded-3xl bg-gradient-to-br from-[#F8FAFC] via-[#EEF2FF] to-white text-[#1E1548] p-8 md:p-12 shadow-2xl border border-[#6855F0]/20 relative overflow-hidden">
          {/* Ambient decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#6855F0]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#6855F0] to-[#29B5F6] flex items-center justify-center text-white shadow-lg">
                  {steps[activeStep].icon}
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#29B5F6]">
                    Phase {steps[activeStep].num} &middot; {steps[activeStep].duration}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E1548]">
                    {steps[activeStep].title}
                  </h3>
                </div>
              </div>

              <p className="text-[#1E1548]/70 text-base leading-relaxed">
                {steps[activeStep].subtitle}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#6855F0] mb-3">
                  Guaranteed Deliverables
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {steps[activeStep].deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-[#1E1548]">
                      <span className="w-5 h-5 rounded-full bg-[#6855F0]/20 text-[#6855F0] flex items-center justify-center flex-shrink-0 font-bold text-xs">
                        &check;
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Card: Risk Governance Box */}
            <div className="lg:col-span-5 bg-white border border-[#6855F0]/20 rounded-2xl p-6 shadow-md flex flex-col justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#29B5F6]/15 border border-[#29B5F6]/30 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#29B5F6] animate-pulse" />
                  <span className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider">
                    Risk Governance Safeguard
                  </span>
                </div>
                <p className="text-[#1E1548]/80 text-sm leading-relaxed">
                  {steps[activeStep].riskMitigation}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#1E1548]/50">
                <span>Anti-Black Hole Standard</span>
                <span className="text-[#6855F0] font-semibold">100% Transparent</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
