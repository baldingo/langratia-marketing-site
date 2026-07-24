"use client";

import { useState } from "react";

interface TrustBadge {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

const trustBadges: TrustBadge[] = [
  {
    id: "soc2",
    title: "SOC 2 Type II Ready",
    subtitle: "Enterprise Data Protection",
    description:
      "All code architectures and deployment pipelines adhere strictly to SOC 2 security, confidentiality, and privacy controls.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    id: "ip-ownership",
    title: "100% IP Ownership",
    subtitle: "Zero Vendor Lock-In",
    description:
      "Upon project completion, all intellectual property, source code, database schemas, and infrastructure configs belong entirely to you.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
  },
  {
    id: "sprint-sla",
    title: "Anti-Black Hole SLA",
    subtitle: "14-Day Clickable Demos",
    description:
      "We operate on strict 1 to 2-week sprint cycles. You receive live, working demos at every checkpoint—no dark months or missing updates.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "defect-rate",
    title: "6x Fewer Defects",
    subtitle: "Top-Quartile Engineering",
    description:
      "Automated testing pipelines and modular architectural patterns ensure a defect density index of 27 vs the industry average of 155.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    id: "nda",
    title: "Mutual NDA Protection",
    subtitle: "Strict Confidentiality",
    description:
      "Every project engagement is legally protected under strict non-disclosure agreements before any proprietary code or data is shared.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
];

export default function TrustBadges() {
  const [activeBadge, setActiveBadge] = useState<string | null>(null);

  return (
    <div className="w-full bg-[#F8FAFC] py-8 border-y border-[#E2E8F0]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6 md:gap-4">
          {trustBadges.map((badge) => {
            const isActive = activeBadge === badge.id;

            return (
              <div
                key={badge.id}
                onMouseEnter={() => setActiveBadge(badge.id)}
                onMouseLeave={() => setActiveBadge(null)}
                className="relative group flex items-center gap-3 py-2 px-3.5 rounded-xl bg-white border border-[#E2E8F0] shadow-sm transition-all duration-300 hover:bg-[#F1F5F9] hover:border-[#6855F0]/40 cursor-default"
              >
                <div className="w-9 h-9 rounded-lg bg-[#6855F0] flex items-center justify-center text-white flex-shrink-0 shadow-md">
                  {badge.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-[#1E1548] tracking-wide">
                    {badge.title}
                  </span>
                  <span className="text-[11px] text-[#1E1548]/60 font-medium">
                    {badge.subtitle}
                  </span>
                </div>

                {/* Popover tooltip on hover */}
                {isActive && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-3.5 rounded-xl bg-white border border-[#6855F0]/30 shadow-2xl text-xs text-[#1E1548] z-30 pointer-events-none backdrop-blur-md">
                    <p className="font-bold text-[#1E1548] mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#29B5F6]" />
                      {badge.title}
                    </p>
                    <p className="leading-relaxed text-[#1E1548]/70">{badge.description}</p>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-8 border-transparent border-t-white" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
