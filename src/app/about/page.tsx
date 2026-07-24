"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Company History Milestones
const historyMilestones = [
  {
    year: "2024",
    title: "Foundations in Kampala, Uganda",
    desc: "LANGRATIA was established as a senior-led custom software engineering studio in Nakasero, Kampala, created to solve agency opacity.",
    tag: "HQ Founding",
  },
  {
    year: "2025",
    title: "The Anti-Black Hole Protocol",
    desc: "Pioneered our mandatory 14-day sprint horizon, guaranteeing clients a live clickable production build every two weeks.",
    tag: "Sprint Standard",
  },
  {
    year: "2026",
    title: "Global Distributed Operations",
    desc: "Expanded enterprise cloud architecture and mobile fintech capabilities across East Africa, North America, and European markets.",
    tag: "Global Reach",
  },
];

// Core Principles with Interactive Reveal Details
const corePrinciples = [
  {
    id: "sprint-cadence",
    title: "14-Day Anti-Black Hole Cadence",
    badge: "Cadence Rule",
    summary: "Eliminating traditional agency dark periods with live 14-day demo releases.",
    details:
      "We structurally eliminate the traditional agency pattern of disappearing behind closed doors for months. Every 14-day sprint closes with a live, clickable demo of production code hosted on staging environments for client review.",
    accent: "#6855F0",
  },
  {
    id: "architecture-lock",
    title: "Central Node Senior Architecture",
    badge: "Architecture Lock",
    summary: "Permanent senior lead oversight ensuring zero knowledge drain.",
    details:
      "In-house Senior Architects retain full system context across every project phase. Developers scale capacity dynamically, but core data models, security frameworks, and API integrations stay strictly locked under senior architect supervision.",
    accent: "#29B5F6",
  },
  {
    id: "risk-control",
    title: "Strict Change Order Protocol",
    badge: "Risk Control",
    summary: "Preventing unbudgeted scope creep with mathematical transparent impact reviews.",
    details:
      "Scope creep is mathematically prevented. No feature enters a sprint backlog without an immediate, transparent impact assessment detailing timeline, budget adjustment, and system security posture.",
    accent: "#8B74F8",
  },
  {
    id: "quality-assurance",
    title: "Zero Defect Assurance",
    badge: "Quality Assurance",
    summary: "Automated pipelines and type-safe compilation checks before release.",
    details:
      "Every release undergoes strict automated testing pipelines, type-safe compilation checks, and manual human verification before entering production environments. All code comes with a 30-day post-launch warranty.",
    accent: "#10B981",
  },
];

// About Page FAQs
const aboutFaqs = [
  {
    q: "Why is LANGRATIA headquartered in Kampala, Uganda?",
    a: "Kampala is one of Africa's fastest-growing technology hubs with world-class engineering talent. Our Kampala headquarters serves as our central architectural node, offering top-quartile global engineering discipline at competitive rates.",
  },
  {
    q: "How does LANGRATIA handle client NDA and IP ownership?",
    a: "We execute bilateral NDAs before technical discovery. Upon milestone completion, 100% of custom source code, repository access, and database schemas are transferred to your private organization.",
  },
  {
    q: "What makes your 14-day sprints different from standard Agile?",
    a: "Standard Agile often turns into endless backlog refinement. Our 14-day sprints have a strict 'clickable output' rule: if a sprint doesn't produce working code you can click and test, the sprint is incomplete.",
  },
  {
    q: "Can your team integrate with our existing engineering squad?",
    a: "Yes. We operate both as standalone project engineering teams and as co-pilots augmenting enterprise engineering departments.",
  },
];

export default function AboutPage() {
  const [activePillar, setActivePillar] = useState<string>("sprint-cadence");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const currentPillar = corePrinciples.find((p) => p.id === activePillar) || corePrinciples[0];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white border-b border-[#E2E8F0] py-20 sm:py-28">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#6855F0]/5 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#6855F0] bg-[#6855F0]/10 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Engineering Discipline Over Agency Fluff
            </span>
            <h1 className="text-4xl font-black tracking-tight text-[#1E1548] sm:text-5xl lg:text-6xl leading-tight mb-6">
              Built on Precision,{" "}
              <span className="bg-gradient-to-r from-[#6855F0] to-[#29B5F6] bg-clip-text text-transparent">
                Transparency
              </span>{" "}
              &amp; System Longevity.
            </h1>
            <p className="text-base sm:text-lg text-[#1E1548]/70 leading-relaxed mb-8">
              LANGRATIA was founded to solve a structural flaw in software engineering services: traditional agencies charge premium fees for slow, opaque delivery while budget offshore dev shops compromise on security, architecture, and maintainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="rounded-xl px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:shadow-xl hover:scale-[1.02] text-center"
                style={{ background: "linear-gradient(135deg, #6855F0 0%, #29B5F6 100%)" }}
              >
                Schedule Technical Scoping Call &rarr;
              </Link>
              <Link
                href="/case-studies"
                className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-8 py-4 text-sm font-bold text-[#1E1548] transition-all duration-300 hover:border-[#6855F0]/40 text-center"
              >
                View Production Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* History & Evolution Milestones */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6855F0] bg-[#6855F0]/10 px-3 py-1 rounded-full">
              Our Journey
            </span>
            <h2 className="text-3xl font-extrabold text-[#1E1548] sm:text-4xl mt-3">
              LANGRATIA History &amp; Growth
            </h2>
            <p className="text-xs sm:text-sm text-[#1E1548]/60 mt-2 max-w-xl mx-auto">
              How we grew from a Kampala-based engineering studio into a global custom software provider.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {historyMilestones.map((m, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-[#6855F0]/30 transition-all"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-[#6855F0]">{m.year}</span>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#1E1548]/5 text-[#1E1548]/70">
                    {m.tag}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1E1548] mb-2">{m.title}</h3>
                  <p className="text-xs text-[#1E1548]/70 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive 4 Pillars Dropdown & Reveal */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#29B5F6] bg-[#29B5F6]/10 px-3 py-1 rounded-full">
              Operational Standards
            </span>
            <h2 className="text-3xl font-extrabold text-[#1E1548] sm:text-4xl mt-3">
              The 4 Architectural Pillars
            </h2>
            <p className="text-xs sm:text-sm text-[#1E1548]/60 mt-2 max-w-lg mx-auto">
              Select or hover over any pillar below to inspect our exact technical enforcement mechanisms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Pillar Selector Tabs */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {corePrinciples.map((p) => {
                const isSelected = activePillar === p.id;
                return (
                  <div
                    key={p.id}
                    onClick={() => setActivePillar(p.id)}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? "bg-[#1E1548] text-white border-[#1E1548] shadow-md"
                        : "bg-[#F8FAFC] text-[#1E1548] border-[#E2E8F0] hover:bg-[#6855F0]/5"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold">{p.title}</span>
                      <span
                        className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded"
                        style={{
                          backgroundColor: isSelected ? "rgba(255,255,255,0.2)" : `${p.accent}20`,
                          color: isSelected ? "#ffffff" : p.accent,
                        }}
                      >
                        {p.badge}
                      </span>
                    </div>
                    <p className={`text-xs mt-1 leading-relaxed ${isSelected ? "text-white/80" : "text-[#1E1548]/60"}`}>
                      {p.summary}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Pillar Reveal Details Panel */}
            <div className="lg:col-span-7 bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col justify-between min-h-[360px]">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: currentPillar.accent }}
                  />
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#1E1548]/50">
                    Deep Architectural Specification
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-[#1E1548] mb-4">
                  {currentPillar.title}
                </h3>
                <p className="text-sm text-[#1E1548]/80 leading-relaxed">
                  {currentPillar.details}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-bold text-[#6855F0]">
                <span>Enforced across Tier I, II &amp; III</span>
                <Link href="/contact" className="hover:underline">
                  Discuss Contract Governance &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded FAQ Accordion Section */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6855F0] bg-[#6855F0]/10 px-3 py-1 rounded-full">
              Quick Governance FAQ
            </span>
            <h2 className="text-3xl font-extrabold text-[#1E1548] mt-3">
              Frequently Asked Questions About LANGRATIA
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {aboutFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-[#1E1548] focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <svg
                      className={`w-4 h-4 text-[#6855F0] transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-4 pt-1 text-xs text-[#1E1548]/70 leading-relaxed border-t border-[#E2E8F0]/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link href="/faq" className="text-xs font-bold text-[#6855F0] hover:underline">
              View All Frequently Asked Questions &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20 text-center border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-3xl px-6 flex flex-col items-center gap-6">
          <div className="relative w-12 h-12 rounded-2xl overflow-hidden shadow-md">
            <Image src="/logo.png" alt="Langratia logo" fill className="object-contain" />
          </div>
          <h2 className="text-3xl font-extrabold text-[#1E1548]">Ready to Experience Engineered Software?</h2>
          <p className="text-xs sm:text-sm text-[#1E1548]/60 max-w-lg leading-relaxed">
            Tell us about your system requirements. We analyze your tech stack and return a transparent engineering roadmap within 48 hours.
          </p>
          <Link
            href="/contact"
            className="rounded-xl px-9 py-4 text-xs font-bold text-white transition-all shadow-lg hover:scale-[1.02]"
            style={{ background: "linear-gradient(135deg, #6855F0 0%, #29B5F6 100%)" }}
          >
            Request Architectural Proposal &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
