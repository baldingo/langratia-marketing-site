import { useState, useRef } from "react";
import { Link, useLocation } from "wouter";

const servicesData = [
  {
    id: "mvp-launchpad",
    title: "Tier I: Creator Launchpad",
    badge: "14-Day MVP",
    description:
      "Productized rapid MVP development for solo founders and startups who need market validation fast, without the overhead of traditional agencies.",
    gradient: "from-[#6855F0]/20 via-[#6855F0]/5 to-transparent",
    accentBg: "bg-[#6855F0]",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    techStack: ["Next.js", "React Native", "PostgreSQL", "Stripe", "Tailwind CSS"],
    metrics: "14-Day Launch",
    route: "/creators",
  },
  {
    id: "smb-systems",
    title: "Tier II: SMB Systems Hub",
    badge: "Scale & Automation",
    description:
      "Custom ERP platforms, Mobile Money API integrations, and operational software for SMBs scaling from 10 to 100+ employees across East Africa.",
    gradient: "from-[#29B5F6]/20 via-[#29B5F6]/5 to-transparent",
    accentBg: "bg-[#29B5F6]",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    techStack: ["MTN MoMo API", "Node.js", "PostgreSQL", "React", "Docker"],
    metrics: "99% Uptime SLA",
    route: "/smb",
  },
  {
    id: "enterprise-gateway",
    title: "Tier III: Enterprise Gateway",
    badge: "SOC 2 Ready",
    description:
      "High-throughput cloud architecture, microservices, and SOC 2 Type II & ISO 27001 compliant security frameworks for mission-critical institutions.",
    gradient: "from-[#8B74F8]/20 via-[#8B74F8]/5 to-transparent",
    accentBg: "bg-[#8B74F8]",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 01.15 13.424a11.942 11.942 0 003.36 3.59l1.184.79a11.948 11.948 0 0010.614 0l1.184-.79a11.942 11.942 0 003.36-3.59A11.955 11.955 0 0020.402 6 11.96 11.96 0 0012 2.964z" />
      </svg>
    ),
    techStack: ["Kubernetes", "Go", "AWS", "Cloudflare", "PostgreSQL"],
    metrics: "99.99% Uptime",
    route: "/enterprise",
  },
  {
    id: "mobile-engineering",
    title: "Mobile App Engineering",
    badge: "iOS & Android",
    description:
      "Native cross-platform mobile applications using React Native with seamless fintech integrations, biometric auth, and offline-first architecture.",
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
  const [, navigate] = useLocation();
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
      {/* Interactive Cursor Spotlight */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full w-[450px] h-[450px] bg-[#6855F0]/15 blur-3xl transition-opacity duration-300 z-0"
          style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service) => {
            const isCardActive = activeCardId === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveCardId(service.id)}
                onMouseLeave={() => setActiveCardId(null)}
                onClick={() => navigate(service.route)}
                className={`relative overflow-hidden rounded-2xl border bg-white transition-all duration-300 cursor-pointer ${
                  isCardActive
                    ? "border-[#6855F0]/40 shadow-2xl -translate-y-1"
                    : "border-[#E2E8F0] shadow-sm"
                }`}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-300 ${isCardActive ? "opacity-100" : ""}`} />

                <div className="relative p-8 flex flex-col gap-5">
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-xl ${service.accentBg} flex items-center justify-center shadow-md`}>
                      {service.icon}
                    </div>
                    <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full ${service.accentBg} text-white`}>
                      {service.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold text-[#1E1548] leading-tight">{service.title}</h3>
                    <p className="text-sm text-[#1E1548]/60 mt-2 leading-relaxed">{service.description}</p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {service.techStack.map((tech) => (
                      <span key={tech} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#F8FAFC] border border-[#E2E8F0] text-[#1E1548]/70">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#E2E8F0]">
                    <span className="text-xs font-bold text-[#6855F0]">{service.metrics}</span>
                    <span className="text-xs font-bold text-[#1E1548]/40 group-hover:text-[#6855F0] transition-colors">
                      Learn More →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
