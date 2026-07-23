import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us & Software Engineering Discipline | Langratia",
  description:
    "Discover Langratia's engineering governance. Based in Kampala, Uganda, serving global enterprises with 14-day anti-black hole sprints, senior architect ownership, and zero-compromise security.",
  keywords: [
    "software engineering philosophy Uganda",
    "top software company Kampala",
    "anti black hole software methodology",
    "software development firm East Africa",
    "senior software architects Kampala",
  ],
};

const corePrinciples = [
  {
    title: "14-Day Anti-Black Hole Sprint Cadence",
    desc: "We structurally eliminate the traditional agency pattern of disappearing behind closed doors for months. Every sprint closes with a live, clickable demo of production code.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    badge: "Cadence Rule",
  },
  {
    title: "Central Node Senior Architecture",
    desc: "In-house Senior Architects retain full system context across every project phase. Contractors scale capacity dynamically, but core architecture stays locked with our senior leads.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.7a9.1 9.1 0 003.74-.48 3 3 0 00-4.68-2.72m.94 3.2.001.03a11.94 11.94 0 01-5.96 1.58 11.94 11.94 0 01-5.96-1.58m12 0a5.97 5.97 0 00-.94-3.2m0 0A6 6 0 0012 12.75a6 6 0 00-5.06 2.77m0 0a3 3 0 00-4.68 2.72 9 9 0 003.74.48m.94-3.2a5.97 5.97 0 00-.94 3.2M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    ),
    badge: "Architecture Lock",
  },
  {
    title: "Strict Change Order Protocol",
    desc: "Scope creep is mathematically prevented. No feature enters a sprint backlog without an immediate, transparent impact assessment on budget, timeline, and security posture.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    badge: "Risk Control",
  },
  {
    title: "Zero Defect Guarantee",
    desc: "Every release undergoes strict automated testing pipelines, type-safe compilation checks, and human verification before entering client production environments.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    ),
    badge: "Quality Assurance",
  },
];

const teamStats = [
  { stat: "100%", label: "In-House System Ownership", sub: "Zero vendor lock-in or knowledge drain" },
  { stat: "14-Day", label: "Max Delivery Horizon", sub: "Tangible output delivered every sprint" },
  { stat: "SOC 2", label: "Security Preparedness", sub: "Enterprise governance out of the box" },
  { stat: "0%", label: "Unbudgeted Scope Creep", sub: "Enforced via strict Change Order Protocol" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#F8FAFC] border-b border-[#E2E8F0] py-20 sm:py-28" id="about-hero">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#6855F0]/10 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#6855F0] bg-[#6855F0]/10 px-3.5 py-1 rounded-full inline-block mb-4">
              Engineering Discipline Over Agency Fluff
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#1E1548] sm:text-5xl lg:text-6xl leading-tight mb-6">
              Built on Precision,{" "}
              <span className="bg-gradient-to-r from-[#6855F0] to-[#29B5F6] bg-clip-text text-transparent">
                Transparency
              </span>{" "}
              &amp; System Longevity.
            </h1>
            <p className="text-lg text-[#1E1548]/70 leading-relaxed mb-8">
              LANGRATIA was founded to solve a structural flaw in software engineering services: traditional agencies charge premium fees for slow, opaque delivery while offshore budget shops compromise on security, architecture, and maintainability.
            </p>
            <p className="text-base text-[#1E1548]/60 leading-relaxed mb-10">
              We bridge this gap through our **Hybrid Staffing Architecture**: in-house Senior Architects maintain permanent institutional memory, while agile development capacity scales dynamically on demand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="rounded-xl px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:shadow-xl hover:scale-[1.02] text-center"
                style={{ background: "linear-gradient(135deg, #6855F0 0%, #29B5F6 100%)" }}
              >
                Schedule Technical Discovery
              </Link>
              <Link
                href="/case-studies"
                className="rounded-xl border border-[#E2E8F0] bg-white px-8 py-4 text-base font-bold text-[#1E1548] transition-all duration-300 hover:border-[#6855F0]/40 text-center"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="bg-white py-20 sm:py-28" id="about-principles">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-[#6855F0] mb-3">Our Operational DNA</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1E1548] sm:text-4xl">
              The 4 Pillars of LANGRATIA Engineering
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-[#1E1548]/60 text-base leading-relaxed">
              Every line of code we ship and every sprint we run adheres strictly to these unshakeable architectural standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {corePrinciples.map((p, i) => (
              <div
                key={i}
                className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-8 flex flex-col justify-between gap-6 transition-all duration-300 hover:shadow-xl hover:border-[#6855F0]/30"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#6855F0]/10 flex items-center justify-center text-[#6855F0]">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        {p.icon}
                      </svg>
                    </div>
                    <span className="text-xs font-extrabold text-[#6855F0] bg-[#6855F0]/10 px-3 py-1 rounded-full uppercase tracking-wider">
                      {p.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#1E1548]">{p.title}</h3>
                  <p className="text-sm text-[#1E1548]/70 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Model Section */}
      <section className="bg-[#F1F5F9] py-20 sm:py-28 border-y border-[#E2E8F0]" id="about-model">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#29B5F6] bg-[#29B5F6]/10 px-3.5 py-1 rounded-full w-fit">
                System Ownership
              </span>
              <h2 className="text-3xl font-extrabold text-[#1E1548] sm:text-4xl leading-snug">
                How Our Central Node Architecture Protects Your Vision
              </h2>
              <p className="text-sm text-[#1E1548]/75 leading-relaxed">
                When you hire traditional dev shops, individual engineers come and go, taking system knowledge with them. At LANGRATIA, our **Central Architecture Node** is staffed by permanent in-house lead architects.
              </p>
              <p className="text-sm text-[#1E1548]/75 leading-relaxed">
                They design the system blueprints, write core integration layers, conduct mandatory code reviews, and maintain full institutional context. Contractors scale output, but system governance remains 100% stable.
              </p>
            </div>

            {/* Stat Cards Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {teamStats.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm flex flex-col gap-2">
                  <span className="text-3xl font-black text-[#6855F0]">{item.stat}</span>
                  <span className="text-xs font-extrabold text-[#1E1548]">{item.label}</span>
                  <span className="text-[11px] text-[#1E1548]/50">{item.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-white py-20 text-center" id="about-cta">
        <div className="mx-auto max-w-3xl px-6 flex flex-col items-center gap-6">
          <div className="relative w-12 h-12 rounded-2xl overflow-hidden shadow-md">
            <Image src="/logo.png" alt="Langratia logo" fill className="object-contain" />
          </div>
          <h2 className="text-3xl font-extrabold text-[#1E1548]">Ready to Experience Engineered Software?</h2>
          <p className="text-sm text-[#1E1548]/60 max-w-lg leading-relaxed">
            Tell us about your system requirements. We analyze your tech stack and return a transparent engineering roadmap within 48 hours.
          </p>
          <Link
            href="/contact"
            className="rounded-xl px-9 py-4 text-sm font-bold text-white transition-all shadow-lg hover:scale-[1.02]"
            style={{ background: "linear-gradient(135deg, #6855F0 0%, #29B5F6 100%)" }}
          >
            Request Architectural Proposal &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
