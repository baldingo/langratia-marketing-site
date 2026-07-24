"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ServiceItem {
  id: string;
  category: string;
  title: string;
  shortDesc: string;
  tag: string;
  color: string;
  gradient: string;
  accentBg: string;
  icon: React.ReactNode;
  techStack: string[];
  metrics: string;
  route: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "mvp-launchpad",
    category: "Tier I Launchpad",
    title: "Startup MVP & Rapid Prototyping",
    shortDesc: "Turn product specs into production-ready web and mobile apps in 14-day Anti-Black Hole sprint cycles.",
    tag: "High Velocity",
    color: "#6855F0",
    gradient: "from-[#6855F0]/20 via-[#6855F0]/5 to-transparent",
    accentBg: "bg-[#6855F0]",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699-2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.24a6 6 0 00-5.84-7.38v4.8m5.84 2.58a14.98 14.98 0 00-6.16 12.12A14.98 14.98 0 0014.369 15.59" />
      </svg>
    ),
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Supabase"],
    metrics: "14-Day Delivery",
    route: "/creators",
  },
  {
    id: "smb-systems",
    category: "Tier II Systems",
    title: "Custom Business Platforms & Mobile Money",
    shortDesc: "End-to-end operational software, local payment integrations (MTN MoMo, Airtel Money, M-Pesa), and custom CRM systems.",
    tag: "Scale & Automation",
    color: "#29B5F6",
    gradient: "from-[#29B5F6]/20 via-[#29B5F6]/5 to-transparent",
    accentBg: "bg-[#29B5F6]",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    techStack: ["Node.js", "React Native", "GraphQL", "Mobile Money APIs", "Docker"],
    metrics: "99.9% Uptime",
    route: "/smb",
  },
  {
    id: "enterprise-architecture",
    category: "Tier III Enterprise",
    title: "Cloud Infrastructure & High-Scale Microservices",
    shortDesc: "Dedicated senior architectural teams building secure, fault-tolerant cloud platforms compliant with SOC 2 & ISO 27001.",
    tag: "Mission Critical",
    color: "#8B74F8",
    gradient: "from-[#8B74F8]/20 via-[#8B74F8]/5 to-transparent",
    accentBg: "bg-[#8B74F8]",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25rem0 0l-1.5-1.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    techStack: ["Kubernetes", "AWS / Cloudflare", "Go", "PostgreSQL", "Kafka"],
    metrics: "SOC 2 Ready",
    route: "/enterprise",
  },
  {
    id: "mobile-engineering",
    category: "Specialized Engineering",
    title: "Cross-Platform Mobile App Engineering",
    shortDesc: "High-performance iOS and Android mobile applications crafted with native polish, offline sync, and bank-grade security.",
    tag: "iOS & Android",
    color: "#10B981",
    gradient: "from-[#10B981]/20 via-[#10B981]/5 to-transparent",
    accentBg: "bg-[#10B981]",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-3 3h3M6.75 3h.008v.008H6.75V3zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM6.75 15h.008v.008H6.75V15zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    metrics: "60 FPS Native",
    route: "/services#mobile-engineering",
  },
];

export default function ServicesShowcase() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleServiceClick = (route: string) => {
    router.push(route);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveCardId(null);
      }}
      className="relative py-28 bg-[#FAFAFA] border-t border-[#E2E8F0] overflow-hidden select-none"
      id="services-showcase"
    >
      {/* Interactive Cursor Spotlight Glow Effect */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full w-[450px] h-[450px] bg-[#6855F0]/15 blur-3xl transition-opacity duration-300 z-0"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
          }}
        />
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-[#6855F0] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#1E1548]">
                Interactive Service Capabilities
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1E1548] tracking-tighter leading-tight">
              Engineering Excellence Across <br />
              <span className="text-[#6855F0]">Every Delivery Tier</span>
            </h2>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl bg-[#6855F0] hover:bg-[#5b4be0] text-white px-6 py-3.5 text-sm font-bold shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
          >
            <span>Explore All Software Services</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service) => {
            const isCardActive = activeCardId === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveCardId(service.id)}
                onClick={() => handleServiceClick("/services")}
                className={`group relative cursor-pointer rounded-2xl bg-white border transition-all duration-300 p-8 shadow-sm hover:shadow-xl ${
                  isCardActive ? "border-[#6855F0] -translate-y-1.5" : "border-[#E2E8F0]"
                }`}
              >
                {/* Background Gradient Spotlight on Hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  {/* Top Bar */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-xl ${service.accentBg} shadow-md`}>
                          {service.icon}
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-[#1E1548]/50 block">
                            {service.category}
                          </span>
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-[#F1F5F9] text-[#1E1548] border border-[#E2E8F0]">
                            {service.tag}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold text-[#6855F0] bg-[#6855F0]/10 px-3 py-1 rounded-full border border-[#6855F0]/20">
                          {service.metrics}
                        </span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold text-[#1E1548] mb-3 group-hover:text-[#6855F0] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#1E1548]/70 leading-relaxed mb-6">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Tech Stack Pills & Arrow CTA */}
                  <div className="pt-6 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {service.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-semibold text-[#1E1548]/70 bg-[#F8FAFC] border border-[#E2E8F0] px-2.5 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-xs font-bold text-[#6855F0] group-hover:translate-x-1 transition-transform">
                      <span>View Service Page</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global & Local Target Sub-Banner */}
        <div className="mt-12 bg-white border border-[#E2E8F0] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3 text-sm text-[#1E1548]/80">
            <span className="w-3 h-3 rounded-full bg-[#10B981] animate-ping" />
            <span className="font-semibold">
              Serving startups, SMBs, and enterprises in Kampala, Uganda, East Africa, and Globally.
            </span>
          </div>
          <Link
            href="/services"
            className="text-xs font-bold uppercase tracking-wider text-[#6855F0] hover:underline"
          >
            Browse Full Service Directory &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
