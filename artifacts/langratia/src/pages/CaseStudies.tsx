import { useState } from "react";
import { Link } from "wouter";

interface CaseStudy {
  id: string;
  tier: "Creator" | "SMB" | "Enterprise";
  tierColor: string;
  badgeBg: string;
  title: string;
  clientType: string;
  problem: string;
  process: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  tags: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "fashion-mvp",
    tier: "Creator",
    tierColor: "text-[#6855F0]",
    badgeBg: "bg-[#6855F0]/10",
    title: "14-Day E-Commerce MVP for Fashion Founder",
    clientType: "Direct-to-Consumer Creator Startup",
    problem:
      "A solo founder needed a fully functional digital storefront before a critical investor pitch. Traditional agencies quoted 3 months and $15,000+ with zero timeline guarantees.",
    process:
      "Using our Tier I Creator Launchpad, we executed a single 14-day Anti-Black Hole sprint. We built a Next.js 15 storefront integrated with Stripe payments and real-time inventory management.",
    outcome:
      "The founder presented a live, functional store at the pitch, securing seed funding. The platform launched to initial customers with zero post-launch bugs.",
    metrics: [
      { label: "Turnaround Time", value: "14 Days" },
      { label: "Post-Launch Bugs", value: "Zero Defects" },
      { label: "Investor Pitch Outcome", value: "Seed Funded" },
    ],
    tags: ["Next.js", "Stripe", "Tailwind CSS", "14-Day MVP"],
  },
  {
    id: "momo-retail",
    tier: "SMB",
    tierColor: "text-[#0EA5E9]",
    badgeBg: "bg-[#0EA5E9]/10",
    title: "Mobile Money Automation for Retail Chain",
    clientType: "45-Person Multi-Branch Retail Business",
    problem:
      "Manual reconciliation of MTN MoMo and Airtel Money mobile payments was taking over 3 hours per day per store, leading to high transaction error rates and delayed financial auditing.",
    process:
      "We engineered a custom mobile money integration engine connected directly to their POS system, featuring instant webhook verification and automated ledger balancing.",
    outcome:
      "Daily reconciliation time was reduced from 3 hours to under 10 minutes. Transaction error rate dropped to zero across 6 months of continuous operation.",
    metrics: [
      { label: "Daily Reconciliation", value: "3h → 10m" },
      { label: "Transaction Accuracy", value: "100%" },
      { label: "Labor Time Saved", value: "850+ Hours/Yr" },
    ],
    tags: ["MTN MoMo API", "Airtel Money", "POS Integration", "Custom ERP"],
  },
  {
    id: "fintech-erp",
    tier: "Enterprise",
    tierColor: "text-[#1E1548]",
    badgeBg: "bg-[#1E1548]/10",
    title: "SOC 2-Compliant Core Migration for Financial Services",
    clientType: "Regional Financial Institution",
    problem:
      "A growing financial services firm was reliant on a legacy system lacking audit logging and horizontal scaling capability, posing direct compliance and security risks.",
    process:
      "Deployed a dedicated team under Tier III Enterprise Gateway over a 6-month timeline. Re-architected core ledgers onto PostgreSQL with immutable SOC 2 audit trails and ISO 27001 data encryption.",
    outcome:
      "Achieved full regulatory compliance. The new system comfortably handles 10x peak transaction loads with zero downtime.",
    metrics: [
      { label: "Compliance Status", value: "SOC 2 Ready" },
      { label: "Throughput Scalability", value: "10x Baseline" },
      { label: "System Availability", value: "99.99% Uptime" },
    ],
    tags: ["PostgreSQL", "SOC 2 Audit", "API Microservices", "Docker"],
  },
];

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState<"All" | "Creator" | "SMB" | "Enterprise">("All");

  const filteredCases =
    activeFilter === "All" ? caseStudies : caseStudies.filter((c) => c.tier === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-20 sm:py-28 text-[#1E1548]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#6855F0] bg-[#6855F0]/10 px-3.5 py-1 rounded-full inline-block mb-4">
            Case Studies &amp; Blueprints
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-[#1E1548] sm:text-6xl mb-6">
            Engineering Impact Stories
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-[#1E1548]/70 leading-relaxed">
            Real client engineering transformations — from 14-day MVPs to enterprise security migrations.
          </p>
        </div>
      </section>

      {/* Filter & Cases */}
      <section className="bg-[#F8FAFC] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {(["All", "Creator", "SMB", "Enterprise"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                  activeFilter === filter
                    ? "bg-[#6855F0] text-white shadow-md"
                    : "bg-white border border-[#E2E8F0] text-[#1E1548]/70 hover:border-[#6855F0]/30"
                }`}
              >
                {filter === "All" ? "All Tiers" : `Tier: ${filter}`}
              </button>
            ))}
          </div>

          {/* Case Study Cards */}
          <div className="grid grid-cols-1 gap-8">
            {filteredCases.map((c) => (
              <article
                key={c.id}
                className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden"
              >
                <div className="p-8 sm:p-10">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div>
                      <span className={`inline-block text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2 ${c.badgeBg} ${c.tierColor}`}>
                        Tier: {c.tier}
                      </span>
                      <h2 className="text-xl font-extrabold text-[#1E1548] leading-tight">{c.title}</h2>
                      <p className="text-xs text-[#1E1548]/50 mt-1">{c.clientType}</p>
                    </div>
                    {/* Metrics */}
                    <div className="flex flex-wrap gap-3 sm:shrink-0">
                      {c.metrics.map((m) => (
                        <div key={m.label} className="flex flex-col items-center bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 min-w-[100px]">
                          <span className="text-lg font-black text-[#6855F0]">{m.value}</span>
                          <span className="text-[9px] font-bold uppercase tracking-wider text-[#1E1548]/50 text-center mt-0.5">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="flex flex-col gap-1.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#EF4444] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
                        The Problem
                      </span>
                      <p className="text-sm text-[#1E1548]/75 leading-relaxed bg-[#FFF5F5] p-4 rounded-xl border border-red-100">
                        {c.problem}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#6855F0] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6855F0]" />
                        The LANGRATIA Process
                      </span>
                      <p className="text-sm text-[#1E1548]/75 leading-relaxed bg-[#F5F3FF] p-4 rounded-xl border border-[#6855F0]/10">
                        {c.process}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0EA5E9] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
                        The Business Transformation
                      </span>
                      <p className="text-sm text-[#1E1548]/75 leading-relaxed bg-[#F0F9FF] p-4 rounded-xl border border-[#0EA5E9]/10">
                        {c.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {c.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#1E1548]/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Contact Hook */}
          <div className="mt-16 text-center bg-white p-10 rounded-3xl border border-[#E2E8F0] shadow-md flex flex-col items-center gap-4">
            <h3 className="text-2xl font-bold text-[#1E1548]">Have a Similar Architectural Challenge?</h3>
            <p className="text-sm text-[#1E1548]/60 max-w-md">
              We review software specs and return a detailed architectural roadmap within 48 hours.
            </p>
            <Link
              href="/contact"
              className="rounded-xl px-7 py-3 text-xs font-bold text-white transition-all shadow-md hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #6855F0 0%, #29B5F6 100%)" }}
            >
              Start Proposal Request
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
