import { useState } from "react";
import { Link } from "wouter";

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
    a: "Yes — we offer embedded engineering models where our senior architects integrate with your in-house team for specific system modules, code reviews, or security architecture phases.",
  },
];

export default function AboutPage() {
  const [activeId, setActiveId] = useState<string | null>("sprint-cadence");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-20 sm:py-28 text-[#1E1548] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6855F0]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#6855F0] bg-[#6855F0]/10 px-3.5 py-1 rounded-full inline-block mb-4">
              Our Studio &amp; Philosophy
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#1E1548] sm:text-6xl leading-tight mb-6">
              Built in Kampala.<br />
              <span className="text-[#6855F0]">Built for the World.</span>
            </h1>
            <p className="text-lg text-[#1E1548]/70 leading-relaxed max-w-2xl">
              LANGRATIA is a senior-led software engineering studio that eliminated the traditional agency model of opacity and unpredictable timelines. We build high-precision custom software with radical transparency.
            </p>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#1E1548] mb-12">Studio History</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-[#E2E8F0]" />
            <div className="flex flex-col gap-10">
              {historyMilestones.map((m) => (
                <div key={m.year} className="flex gap-8 items-start pl-14 relative">
                  <div className="absolute left-4 top-1 w-4 h-4 rounded-full bg-[#6855F0] border-2 border-white shadow" />
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-black text-[#6855F0]">{m.year}</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#6855F0]/10 text-[#6855F0]">{m.tag}</span>
                    </div>
                    <h3 className="text-base font-bold text-[#1E1548] mb-1">{m.title}</h3>
                    <p className="text-sm text-[#1E1548]/60 leading-relaxed max-w-xl">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#1E1548] tracking-tight">Core Engineering Principles</h2>
            <p className="mt-3 text-sm text-[#1E1548]/60 max-w-xl mx-auto">Click each principle to expand the full protocol detail.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {corePrinciples.map((p) => (
              <div
                key={p.id}
                onClick={() => setActiveId(activeId === p.id ? null : p.id)}
                className={`rounded-2xl border p-6 cursor-pointer transition-all duration-300 ${
                  activeId === p.id ? "border-[#6855F0]/30 bg-white shadow-lg" : "border-[#E2E8F0] bg-white hover:shadow-md"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full text-white" style={{ background: p.accent }}>
                    {p.badge}
                  </span>
                  <svg
                    className={`w-4 h-4 text-[#1E1548]/40 transition-transform duration-300 ${activeId === p.id ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
                <h3 className="text-sm font-extrabold text-[#1E1548] mb-1">{p.title}</h3>
                <p className="text-xs text-[#1E1548]/60">{p.summary}</p>
                {activeId === p.id && (
                  <div className="mt-4 pt-4 border-t border-[#E2E8F0]">
                    <p className="text-xs text-[#1E1548]/70 leading-relaxed">{p.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#1E1548] mb-8 text-center">About Us — FAQs</h2>
          <div className="flex flex-col gap-3">
            {aboutFaqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                  >
                    <span className="text-sm font-bold text-[#1E1548]">{faq.q}</span>
                    <svg
                      className={`w-4 h-4 text-[#1E1548]/40 shrink-0 ml-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
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

      {/* CTA */}
      <section className="bg-white py-20 text-center border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-3xl px-6 flex flex-col items-center gap-6">
          <div className="relative w-12 h-12 rounded-2xl overflow-hidden shadow-md">
            <img src="/logo.png" alt="Langratia logo" className="object-contain w-full h-full" />
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
