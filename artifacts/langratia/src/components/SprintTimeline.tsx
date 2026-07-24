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
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
];

export default function SprintTimeline() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-28 bg-white border-t border-[#E2E8F0]" id="sprint-timeline">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F3FF] border border-[#6855F0]/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#6855F0]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#6855F0]">
              Anti-Black Hole Sprint Protocol
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1E1548] tracking-tighter leading-tight">
            14-Day Sprint: From Scope to
            <br />
            <span className="text-[#6855F0]">Production Deploy</span>
          </h2>
          <p className="mt-6 text-base text-[#1E1548]/60 max-w-2xl mx-auto leading-relaxed">
            Our mandatory sprint structure eliminates the &quot;agency black hole&quot; — the period where months pass with zero visible client progress. Every 14 days, you receive a live, clickable production build.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.num}
              onMouseEnter={() => setActiveStep(i)}
              onMouseLeave={() => setActiveStep(null)}
              className={`relative flex flex-col gap-4 p-6 rounded-2xl border transition-all duration-300 cursor-default ${
                activeStep === i
                  ? "border-[#6855F0]/40 bg-[#F5F3FF] shadow-lg"
                  : "border-[#E2E8F0] bg-white"
              }`}
            >
              {/* Step number */}
              <div className="flex items-center justify-between">
                <span className="text-4xl font-black text-[#6855F0]/15 leading-none">{step.num}</span>
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    activeStep === i ? "bg-[#6855F0] text-white" : "bg-[#F8FAFC] text-[#6855F0]"
                  }`}
                >
                  {step.icon}
                </div>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#6855F0] bg-[#6855F0]/10 px-2 py-0.5 rounded-full">
                  {step.duration}
                </span>
                <h3 className="text-sm font-extrabold text-[#1E1548] mt-2 leading-tight">{step.title}</h3>
                <p className="text-[11px] text-[#1E1548]/50 mt-0.5">{step.subtitle}</p>
              </div>

              <ul className="flex flex-col gap-1.5">
                {step.deliverables.map((d, j) => (
                  <li key={j} className="flex items-start gap-2 text-[11px] text-[#1E1548]/70">
                    <span className="mt-0.5 shrink-0 w-3 h-3 rounded-full bg-[#6855F0]/20 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6855F0]" />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>

              {activeStep === i && (
                <div className="mt-2 p-3 rounded-xl bg-white border border-[#6855F0]/20">
                  <p className="text-[10px] text-[#1E1548]/70 leading-relaxed italic">
                    <span className="font-bold text-[#6855F0] not-italic">Risk Mitigation: </span>
                    {step.riskMitigation}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
