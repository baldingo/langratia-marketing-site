import Link from "next/link";
import Image from "next/image";
import TrustBadges from "@/components/TrustBadges";
import SprintTimeline from "@/components/SprintTimeline";
import TechStackGrid from "@/components/TechStackGrid";

export default function Home() {
  return (
    <>
      {/* ============================================================
          HERO SECTION
          ============================================================ */}
      <section className="relative overflow-hidden bg-white pt-10 pb-20 sm:pb-28" id="hero-section">
        {/* Ambient brand glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#6855F0]/10 blur-[120px]" />
          <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#29B5F6]/10 blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#8B74F8]/5 blur-[80px]" />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#6855F0 1px, transparent 1px), linear-gradient(to right, #6855F0 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto pt-16">
            {/* Logo display */}
            <div className="relative w-24 h-24 mb-6 drop-shadow-xl">
              <Image
                src="/logo.png"
                alt="Langratia logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Trust badge pill */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#6855F0]/20 bg-[#6855F0]/6 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#29B5F6] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#6855F0]">
                Global Software Engineering Firm
              </span>
            </div>

            {/* Headline */}
            <h1 className="max-w-4xl text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1E1548] leading-tight">
              Custom Software Built for{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #6855F0 0%, #8B74F8 50%, #29B5F6 100%)",
                }}
              >
                Your Exact Scale
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 max-w-3xl text-lg sm:text-xl leading-relaxed text-[#1E1548]/65">
              Enterprise-grade architecture with the agility of a startup. We deliver precision-engineered software systems that eliminate technical debt and accelerate your time-to-market by 70%.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto">
              <Link
                href="/contact"
                className="rounded-xl px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:shadow-xl hover:scale-[1.03] text-center"
                id="hero-cta-primary"
                style={{
                  background: "linear-gradient(135deg, #6855F0 0%, #29B5F6 100%)",
                  boxShadow: "0 8px 32px rgba(104,85,240,0.3)",
                }}
              >
                Start Your Project Proposal
              </Link>
              <Link
                href="/case-studies"
                className="rounded-xl border-2 border-[#6855F0]/20 bg-[#6855F0]/5 px-8 py-4 text-base font-bold text-[#6855F0] transition-all duration-300 hover:bg-[#6855F0]/10 hover:border-[#6855F0]/40 text-center"
                id="hero-cta-secondary"
              >
                View Architectural Blueprints
              </Link>
            </div>

            {/* Core proof metrics */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs font-semibold text-[#1E1548]/60">
              <div className="flex items-center gap-2 bg-[#F8FAFC] border border-[#E2E8F0] px-3.5 py-1.5 rounded-full shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#6855F0]" />
                <span>3x Higher Productivity Index</span>
              </div>
              <div className="flex items-center gap-2 bg-[#F8FAFC] border border-[#E2E8F0] px-3.5 py-1.5 rounded-full shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#8B74F8]" />
                <span>6x Fewer Design Defects (Index 27)</span>
              </div>
              <div className="flex items-center gap-2 bg-[#F8FAFC] border border-[#E2E8F0] px-3.5 py-1.5 rounded-full shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#29B5F6]" />
                <span>70% Faster Delivery Velocity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          TRUST & COMPLIANCE SEAL BAR
          ============================================================ */}
      <TrustBadges />

      {/* ============================================================
          PERFORMANCE SCORECARD & ADVANTAGE SECTION
          ============================================================ */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]" id="scorecard-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col gap-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#6855F0]">
                Data-Backed Proof
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E1548] leading-tight">
                Top-Quartile Engineering Standards
              </h2>
              <p className="text-base text-[#1E1548]/65 leading-relaxed">
                Most software projects stall due to bloated scoping, weak architecture, and missing governance. LANGRATIA operates on strict data-backed benchmarks derived from top global engineering standards.
              </p>
              <div className="pt-3">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#6855F0] hover:text-[#29B5F6] transition-colors"
                >
                  <span>Explore verified case studies &amp; outcomes</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Scorecard Table */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xl">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#1E1548]/70 mb-6 flex items-center justify-between">
                <span>Industry Baseline vs. LANGRATIA Benchmark</span>
                <span className="text-xs text-[#29B5F6]">Verified Metrics</span>
              </h3>

              <div className="flex flex-col gap-4">
                {/* Metric 1 */}
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                  <div>
                    <span className="text-xs font-bold text-[#1E1548]/50 block">Metric</span>
                    <span className="text-sm font-bold text-[#1E1548]">Development Productivity</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-red-500 block">Industry Average</span>
                    <span className="text-sm text-[#1E1548]/60">Bottom-Quartile Baseline</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#6855F0] block">LANGRATIA Standard</span>
                    <span className="text-base font-extrabold text-[#6855F0]">3x Higher Productivity</span>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                  <div>
                    <span className="text-xs font-bold text-[#1E1548]/50 block">Metric</span>
                    <span className="text-sm font-bold text-[#1E1548]">Defect Density Index</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-red-500 block">Industry Average</span>
                    <span className="text-sm text-[#1E1548]/60">155 Index (High Defects)</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#6855F0] block">LANGRATIA Standard</span>
                    <span className="text-base font-extrabold text-[#6855F0]">27 Index (6x Fewer Defects)</span>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                  <div>
                    <span className="text-xs font-bold text-[#1E1548]/50 block">Metric</span>
                    <span className="text-sm font-bold text-[#1E1548]">Time-To-Market Velocity</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-red-500 block">Industry Average</span>
                    <span className="text-sm text-[#1E1548]/60">Standard Delayed Cycle</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#6855F0] block">LANGRATIA Standard</span>
                    <span className="text-base font-extrabold text-[#6855F0]">70% Shorter Time-to-Market</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PROPRIETARY SPRINT TIMELINE
          ============================================================ */}
      <SprintTimeline />

      {/* ============================================================
          THREE-TIER MATRIX
          ============================================================ */}
      <section
        className="py-20 sm:py-28"
        id="tier-selection"
        style={{
          background: "linear-gradient(180deg, #F8FAFC 0%, #EFF9FF 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#6855F0] mb-3">
              Segmented Operational Pipelines
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1E1548] sm:text-4xl">
              Three Tiers. One Standard of Excellence.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#1E1548]/60 leading-relaxed">
              To prevent operational drift, we maintain three dedicated delivery pipelines optimized for your specific scale, speed requirements, and complexity.
            </p>
          </div>

          {/* Three cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Tier 1 Card */}
            <Link
              href="/creators"
              className="group relative flex flex-col rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl border border-transparent"
              id="tier-card-creator"
              style={{ boxShadow: "0 8px 32px rgba(104,85,240,0.15)" }}
            >
              <div
                className="p-8 flex flex-col gap-5 flex-1"
                style={{
                  background: "linear-gradient(135deg, #6855F0 0%, #29B5F6 100%)",
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-widest bg-white/20 text-white px-3 py-1 rounded-full">
                    Tier I &middot; Launchpad
                  </span>
                  <span className="text-xs text-white/80 font-bold">14-Day Delivery</span>
                </div>

                <h3 className="text-2xl font-extrabold text-white mt-2">
                  Creator Launchpad
                </h3>
                <p className="text-white/85 text-sm leading-relaxed flex-1">
                  Productized MVP service for solo founders and creators who need fast market validation. Flat-rate $1,500 guaranteed 14-day turnaround.
                </p>

                <ul className="flex flex-col gap-2 text-xs text-white/90 my-2">
                  <li className="flex items-center gap-2">&check; Full Source Code Ownership</li>
                  <li className="flex items-center gap-2">&check; Mobile-First Responsive Design</li>
                  <li className="flex items-center gap-2">&check; 1 Live Clickable Demo Sprint</li>
                </ul>

                <div className="flex items-center gap-2 text-white text-sm font-bold group-hover:translate-x-1 transition-transform">
                  <span>Explore Creator Tier</span>
                  <span>&rarr;</span>
                </div>
              </div>
            </Link>

            {/* Tier 2 Card */}
            <Link
              href="/smb"
              className="group relative flex flex-col rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl border border-transparent"
              id="tier-card-smb"
              style={{ boxShadow: "0 8px 32px rgba(41,181,246,0.15)" }}
            >
              <div
                className="p-8 flex flex-col gap-5 flex-1"
                style={{
                  background: "linear-gradient(135deg, #29B5F6 0%, #6855F0 100%)",
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-widest bg-white/20 text-white px-3 py-1 rounded-full">
                    Tier II &middot; Systems
                  </span>
                  <span className="text-xs text-white/80 font-bold">Scaling Hub</span>
                </div>

                <h3 className="text-2xl font-extrabold text-white mt-2">
                  SMB Digitalization Hub
                </h3>
                <p className="text-white/85 text-sm leading-relaxed flex-1">
                  Custom systems for scaling teams (10–100 employees). E-commerce, POS, real-time inventory trackers, and mobile money payment gateways.
                </p>

                <ul className="flex flex-col gap-2 text-xs text-white/90 my-2">
                  <li className="flex items-center gap-2">&check; MTN MoMo &amp; Airtel Money</li>
                  <li className="flex items-center gap-2">&check; Milestone Fixed-Price or T&amp;M</li>
                  <li className="flex items-center gap-2">&check; Custom ERP &amp; Inventory Systems</li>
                </ul>

                <div className="flex items-center gap-2 text-white text-sm font-bold group-hover:translate-x-1 transition-transform">
                  <span>Explore SMB Systems Tier</span>
                  <span>&rarr;</span>
                </div>
              </div>
            </Link>

            {/* Tier 3 Card */}
            <Link
              href="/enterprise"
              className="group relative flex flex-col rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl border-2 border-[#E2E8F0] bg-white"
              id="tier-card-enterprise"
            >
              <div className="p-8 flex flex-col gap-5 flex-1 bg-white">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-widest bg-[#6855F0]/10 text-[#6855F0] px-3 py-1 rounded-full">
                    Tier III &middot; Enterprise
                  </span>
                  <span className="text-xs text-[#1E1548]/50 font-bold">Dedicated Team</span>
                </div>

                <h3 className="text-2xl font-extrabold text-[#1E1548] mt-2">
                  Enterprise Gateway
                </h3>
                <p className="text-[#1E1548]/60 text-sm leading-relaxed flex-1">
                  Dedicated engineering team capacity for institutions requiring total stability, data control, and strict SOC 2 &amp; ISO compliance standards.
                </p>

                <ul className="flex flex-col gap-2 text-xs text-[#1E1548]/70 my-2">
                  <li className="flex items-center gap-2">&check; Senior Architects &amp; Managers</li>
                  <li className="flex items-center gap-2">&check; SOC 2 Type II &amp; ISO 27001 Audit</li>
                  <li className="flex items-center gap-2">&check; Dedicated CI/CD &amp; SLA Controls</li>
                </ul>

                <div className="flex items-center gap-2 text-[#6855F0] text-sm font-bold group-hover:translate-x-1 transition-transform">
                  <span>Request Capacity Review</span>
                  <span>&rarr;</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          INTERACTIVE TECH STACK SHOWCASE
          ============================================================ */}
      <TechStackGrid />

      {/* ============================================================
          FINAL HIGH-IMPACT CALL TO ACTION
          ============================================================ */}
      <section
        className="py-20 text-[#1E1548] relative overflow-hidden border-t border-[#E2E8F0]"
        style={{
          background: "linear-gradient(135deg, #F8FAFC 0%, #EEF2FF 50%, #E0F2FE 100%)",
        }}
        id="final-cta"
      >
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6855F0] bg-[#6855F0]/10 px-4 py-1.5 rounded-full">
            Zero Risk &middot; 48-Hour SLA
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold mt-6 tracking-tight text-[#1E1548]">
            Ready to Build Software That Scales Without Friction?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1E1548]/75 max-w-2xl mx-auto leading-relaxed">
            Tell us about your project vision. We will return a clear, scoped architectural proposal within 48 hours under mutual NDA.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto rounded-xl px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] text-center"
              style={{ background: "linear-gradient(135deg, #6855F0 0%, #29B5F6 100%)" }}
            >
              Start Proposal Request
            </Link>
            <Link
              href="/case-studies"
              className="w-full sm:w-auto rounded-xl border border-[#6855F0]/30 bg-white px-8 py-4 text-base font-bold text-[#6855F0] transition-all duration-300 hover:bg-[#6855F0]/10 text-center"
            >
              Browse Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
