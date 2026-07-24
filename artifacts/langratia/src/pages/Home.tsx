import { Link } from "wouter";
import TrustBadges from "@/components/TrustBadges";
import SprintTimeline from "@/components/SprintTimeline";
import ServicesShowcase from "@/components/ServicesShowcase";
import TechStackGrid from "@/components/TechStackGrid";

export default function Home() {
  return (
    <>
      {/* ============================================================
          HERO — Clean Typography & Bento Layout
          ============================================================ */}
      <section className="pt-24 pb-32 bg-[#FAFAFA]" id="hero-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left Column: Typography */}
            <div className="lg:col-span-7">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-[#1E1548] leading-[1.05]">
                Reliable Custom
                <br />
                <span className="text-[#6855F0]">Software Engineering</span>
              </h1>

              <p className="mt-8 text-lg sm:text-xl text-[#1E1548]/70 leading-relaxed max-w-xl">
                We build scalable enterprise systems, web platforms, and mobile applications with senior architectural rigor. Headquartered in Kampala, Uganda, serving clients across East Africa and worldwide.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Link
                  href="/contact"
                  className="rounded-lg px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-[#6855F0] hover:bg-[#5b4be0]"
                >
                  Discuss Your Project
                </Link>
                <Link
                  href="/case-studies"
                  className="rounded-lg px-8 py-4 text-base font-bold text-[#1E1548] bg-white border border-[#E2E8F0] transition-all duration-200 hover:bg-[#F8FAFC]"
                >
                  View Our Work →
                </Link>
              </div>
            </div>

            {/* Right Column: Clean Bento Stats */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="col-span-2 bg-white border border-[#E2E8F0] p-8 rounded-2xl shadow-sm">
                <p className="text-sm font-bold text-[#1E1548]/50 uppercase tracking-wider mb-2">Delivery Track Record</p>
                <p className="text-4xl font-extrabold text-[#1E1548]">100%</p>
                <p className="text-sm text-[#1E1548]/70 mt-2">On-time milestone delivery across all scale phases.</p>
              </div>
              <div className="bg-white border border-[#E2E8F0] p-6 rounded-2xl shadow-sm">
                <p className="text-sm font-bold text-[#1E1548]/50 uppercase tracking-wider mb-2">Systems</p>
                <p className="text-3xl font-extrabold text-[#6855F0]">Zero</p>
                <p className="text-xs text-[#1E1548]/70 mt-2">Vendor lock-in.</p>
              </div>
              <div className="bg-white border border-[#E2E8F0] p-6 rounded-2xl shadow-sm">
                <p className="text-sm font-bold text-[#1E1548]/50 uppercase tracking-wider mb-2">Architecture</p>
                <p className="text-3xl font-extrabold text-[#6855F0]">Clean</p>
                <p className="text-xs text-[#1E1548]/70 mt-2">Scalable by design.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <TrustBadges />

      {/* SERVICES SHOWCASE */}
      <ServicesShowcase />

      {/* ============================================================
          ENGINEERING PHILOSOPHY
          ============================================================ */}
      <section className="py-28 bg-white border-t border-[#E2E8F0]" id="philosophy">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F3FF] border border-[#6855F0]/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#6855F0]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#6855F0]">Engineering Philosophy</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1E1548] tracking-tighter leading-tight mb-6">
                Clear Scoping.<br />
                <span className="text-[#6855F0]">Predictable Delivery.</span>
              </h2>
              <p className="text-base text-[#1E1548]/70 leading-relaxed mb-8">
                Every software project at LANGRATIA starts with a mathematically tight scope document. We don't believe in ambiguous timelines or opaque agency workflows. Our 14-day Anti-Black Hole sprint cadence means you always know exactly what is being built, when it will be ready, and what it costs.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { label: "Change Order Protocol", desc: "No unbudgeted scope additions — every feature change triggers an immediate cost/timeline impact review." },
                  { label: "Senior Architecture Lock", desc: "In-house Senior Architects hold full system context. Zero knowledge drain from contractor rotation." },
                  { label: "30-Day Post-Launch Warranty", desc: "All code ships with a post-launch warranty covering critical bugs and deployment anomalies at no charge." },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 items-start">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-[#6855F0]/15 flex items-center justify-center shrink-0">
                      <span className="w-2 h-2 rounded-full bg-[#6855F0]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#1E1548]">{item.label}</p>
                      <p className="text-xs text-[#1E1548]/60 leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "14", unit: "Days", label: "Maximum sprint horizon before a live clickable demo" },
                { value: "0", unit: "Bugs", label: "Post-launch defect tolerance under our SLA warranty" },
                { value: "100%", unit: "Yours", label: "IP, source code and repository ownership transferred" },
                { value: "48h", unit: "SLA", label: "Guaranteed scope review response time for all tiers" },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#FAFAFA] border border-[#E2E8F0] rounded-2xl p-6 flex flex-col gap-2">
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-black text-[#6855F0]">{stat.value}</span>
                    <span className="text-sm font-bold text-[#1E1548]/50 mb-0.5">{stat.unit}</span>
                  </div>
                  <p className="text-xs text-[#1E1548]/60 leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SPRINT TIMELINE */}
      <SprintTimeline />

      {/* TECH STACK */}
      <TechStackGrid />

      {/* ============================================================
          TIERED SOLUTIONS
          ============================================================ */}
      <section className="py-28 bg-white border-t border-[#E2E8F0]" id="tiers">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1E1548] tracking-tighter">
              Solutions for Every Scale
            </h2>
            <p className="mt-4 text-base text-[#1E1548]/60 max-w-2xl mx-auto">
              From solo founders to enterprise institutions — structured tiers ensure your engineering investment matches your actual scale phase.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                tier: "Tier I",
                name: "Creator Launchpad",
                badge: "14-Day MVP",
                color: "#6855F0",
                desc: "Full-stack MVP in 14 days. Designed for solo founders and startups validating ideas without agency bloat.",
                href: "/creators",
                features: ["Single 14-day sprint", "Full-stack production app", "Payment integration", "Source code ownership"],
              },
              {
                tier: "Tier II",
                name: "SMB Systems Hub",
                badge: "Scale & Automation",
                color: "#29B5F6",
                desc: "Custom ERP, mobile money APIs, and business platforms for companies scaling from 10 to 100+ employees.",
                href: "/smb",
                features: ["MTN MoMo & Airtel APIs", "Custom CRM & ERP", "Real-time dashboards", "SLA retainer available"],
              },
              {
                tier: "Tier III",
                name: "Enterprise Gateway",
                badge: "SOC 2 Ready",
                color: "#8B74F8",
                desc: "Cloud-native microservices and enterprise security architecture for institutions with mission-critical systems.",
                href: "/enterprise",
                features: ["SOC 2 Type II compliance", "Multi-region deployment", "Legacy migration", "Dedicated architect"],
              },
            ].map((tier) => (
              <div key={tier.tier} className="flex flex-col border border-[#E2E8F0] rounded-2xl overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300">
                <div className="p-6 border-b border-[#E2E8F0]" style={{ background: `${tier.color}10` }}>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest" style={{ color: tier.color }}>{tier.tier}</span>
                  <h3 className="text-xl font-extrabold text-[#1E1548] mt-1">{tier.name}</h3>
                  <span className="inline-block mt-2 text-[10px] font-bold px-2.5 py-1 rounded-full text-white" style={{ background: tier.color }}>
                    {tier.badge}
                  </span>
                </div>
                <div className="flex flex-col flex-1 p-6 gap-4">
                  <p className="text-sm text-[#1E1548]/70 leading-relaxed">{tier.desc}</p>
                  <ul className="flex flex-col gap-2 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-[#1E1548]/70">
                        <svg className="w-3.5 h-3.5 shrink-0" style={{ color: tier.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={tier.href}
                    className="mt-2 text-center rounded-xl px-5 py-3 text-xs font-bold text-white transition-all hover:opacity-90"
                    style={{ background: tier.color }}
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          FINAL CTA
          ============================================================ */}
      <section className="py-24 bg-[#1E1548] text-white" id="final-cta">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter leading-tight">
            Ready to Build Something <span className="text-[#29B5F6]">Remarkable</span>?
          </h2>
          <p className="mt-6 text-base text-white/70 max-w-xl mx-auto leading-relaxed">
            Our senior engineering team will review your scope and return a custom architectural proposal within 48 hours — guaranteed.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="rounded-xl px-9 py-4 text-base font-bold text-white transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #6855F0 0%, #29B5F6 100%)" }}
            >
              Request Architectural Proposal →
            </Link>
            <Link
              href="/case-studies"
              className="rounded-xl px-9 py-4 text-base font-bold text-white/80 border border-white/20 hover:bg-white/10 transition-all duration-200"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
