"use client";

import { useState } from "react";

interface TechItem {
  name: string;
  category: "frontend" | "backend" | "cloud" | "payments";
  description: string;
  badge: string;
}

const techItems: TechItem[] = [
  {
    name: "Next.js 15 & React 19",
    category: "frontend",
    description: "App Router, Server Components, and zero-bundle hydration for fast performance.",
    badge: "Web Platform",
  },
  {
    name: "TypeScript 5",
    category: "frontend",
    description: "End-to-end type safety eliminating runtime type errors before production.",
    badge: "Language",
  },
  {
    name: "Tailwind CSS v4",
    category: "frontend",
    description: "Utility-first design system with customized HSL brand design tokens.",
    badge: "Styling",
  },
  {
    name: "Node.js & Python FastAPI",
    category: "backend",
    description: "High-throughput asynchronous backend microservices and REST/GraphQL APIs.",
    badge: "Core Backend",
  },
  {
    name: "PostgreSQL & Prisma",
    category: "backend",
    description: "ACID-compliant relational data modeling with automated migration pipelines.",
    badge: "Database",
  },
  {
    name: "Redis",
    category: "backend",
    description: "In-memory caching and real-time pub/sub queue infrastructure.",
    badge: "Caching",
  },
  {
    name: "MTN MoMo & Airtel Money APIs",
    category: "payments",
    description: "Native mobile money payment integrations with automated real-time reconciliation.",
    badge: "Fintech",
  },
  {
    name: "Stripe & Global Merchant APIs",
    category: "payments",
    description: "Multi-currency credit card and checkout flow integration.",
    badge: "Global Checkout",
  },
  {
    name: "AWS & Google Cloud",
    category: "cloud",
    description: "Auto-scaling serverless and containerized deployment with 99.9% uptime SLA.",
    badge: "Infrastructure",
  },
  {
    name: "Docker & Kubernetes",
    category: "cloud",
    description: "Isolated containerization and horizontal orchestration across clusters.",
    badge: "DevOps",
  },
  {
    name: "GitHub Actions CI/CD",
    category: "cloud",
    description: "Automated linting, security audits, test runs, and zero-downtime deployments.",
    badge: "Automation",
  },
  {
    name: "SOC 2 & ISO Audit Logging",
    category: "backend",
    description: "Tamper-evident audit trails and encryption-at-rest for sensitive enterprise data.",
    badge: "Compliance",
  },
];

export default function TechStackGrid() {
  const [filter, setFilter] = useState<"all" | "frontend" | "backend" | "payments" | "cloud">("all");

  const filteredItems = filter === "all" ? techItems : techItems.filter((t) => t.category === filter);

  return (
    <section className="py-20 bg-[#F8FAFC]" id="tech-stack">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#6855F0] mb-2">
              Engineering Architecture
            </p>
            <h2 className="text-3xl font-extrabold text-[#1E1548] sm:text-4xl">
              Modern Tech Stack Built for Scale
            </h2>
            <p className="mt-3 text-base text-[#1E1548]/60 max-w-xl leading-relaxed">
              We select battle-tested, maintainable frameworks designed to eliminate tech debt and scale seamlessly.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-white p-1.5 rounded-2xl border border-[#E2E8F0] shadow-sm">
            {[
              { id: "all", label: "All Stack" },
              { id: "frontend", label: "Frontend & Web" },
              { id: "backend", label: "Backend & Data" },
              { id: "payments", label: "Payments & Mobile Money" },
              { id: "cloud", label: "Cloud & DevOps" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-200 ${
                  filter === tab.id
                    ? "bg-[#6855F0] text-white shadow-md"
                    : "text-[#1E1548]/70 hover:text-[#6855F0] hover:bg-[#F1F5F9]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#6855F0]/30 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#6855F0] bg-[#6855F0]/8 px-2.5 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1E1548] mb-2">{item.name}</h3>
                <p className="text-sm text-[#1E1548]/60 leading-relaxed">{item.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex items-center justify-between text-xs text-[#1E1548]/40">
                <span>Enterprise Grade</span>
                <span className="text-[#29B5F6] font-semibold">&bull; Production Ready</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
