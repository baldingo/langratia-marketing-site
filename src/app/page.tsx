import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* ============================================================
          HERO SECTION
          Light background — logo colours own the page
          ============================================================ */}
      <section
        className="relative overflow-hidden bg-white"
        id="hero-section"
      >
        {/* Ambient brand glows — purple left, cyan right */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#6855F0]/12 blur-[120px]" />
          <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#29B5F6]/12 blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#8B74F8]/6 blur-[80px]" />
        </div>

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#6855F0 1px, transparent 1px), linear-gradient(to right, #6855F0 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto px-6 pt-28 pb-28">
            {/* Logo — large and proud on the light background */}
            <div className="relative w-28 h-28 mb-8 drop-shadow-2xl">
              <Image
                src="/logo.png"
                alt="Langratia logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#6855F0]/20 bg-[#6855F0]/6 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6855F0] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#6855F0]">
                Premium Software Engineering
              </span>
            </div>

            {/* Main headline */}
            <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-[#0F172A] sm:text-6xl lg:text-7xl leading-tight">
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
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#0F172A]/60 sm:text-xl">
              Enterprise-grade architecture with the agility of a startup. We
              deliver precision-engineered software systems that eliminate
              technical debt and accelerate your time-to-market by 70%.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                href="/contact"
                className="rounded-[12px] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-[1.03] text-center"
                id="hero-cta-primary"
                style={{
                  background:
                    "linear-gradient(135deg, #6855F0 0%, #29B5F6 100%)",
                  boxShadow: "0 8px 32px rgba(104,85,240,0.3)",
                }}
              >
                Start Your Project
              </Link>
              <Link
                href="/case-studies"
                className="rounded-[12px] border-2 border-[#6855F0]/25 bg-[#6855F0]/5 px-8 py-4 text-base font-semibold text-[#6855F0] transition-all duration-300 hover:bg-[#6855F0]/10 hover:border-[#6855F0]/40 text-center"
                id="hero-cta-secondary"
              >
                View Our Work
              </Link>
            </div>

            {/* Trust metrics */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-[#0F172A]/50">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#6855F0]" />
                <span>3x Higher Productivity</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#8B74F8]" />
                <span>6x Fewer Defects</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#29B5F6]" />
                <span>70% Faster Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          THREE-TIER SELF-SELECTION MATRIX
          Soft lavender background — keeps the brand colour alive
          ============================================================ */}
      <section
        className="py-20 sm:py-28"
        id="tier-selection"
        style={{
          background:
            "linear-gradient(180deg, #F5F3FF 0%, #EFF9FF 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#6855F0] mb-3">
              Choose Your Path
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Three Tiers. One Standard of Excellence.
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-[#0F172A]/55 leading-relaxed">
              Whether you&apos;re launching an MVP, scaling operations, or
              building enterprise infrastructure — we have a delivery model
              engineered for your exact complexity.
            </p>
          </div>

          {/* Three cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Creator Card */}
            <Link
              href="/creators"
              className="group relative flex flex-col rounded-[16px] overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
              id="tier-card-creator"
              style={{ boxShadow: "0 4px 24px rgba(104,85,240,0.12)" }}
            >
              <div
                className="p-8 flex flex-col gap-5 flex-1"
                style={{
                  background:
                    "linear-gradient(135deg, #6855F0 0%, #29B5F6 100%)",
                }}
              >
                <div className="w-12 h-12 rounded-[12px] bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Creator Launchpad
                </h3>
                <p className="text-white/85 leading-relaxed flex-1">
                  From vision to live product in 14 days. A high-velocity MVP
                  service designed for founders who need to validate fast and
                  build smart.
                </p>
                <div className="flex items-center gap-2 text-white/70 text-sm font-medium group-hover:text-white transition-colors duration-300">
                  <span>Launch your MVP</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>

            {/* SMB Card */}
            <Link
              href="/smb"
              className="group relative flex flex-col rounded-[16px] overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
              id="tier-card-smb"
              style={{ boxShadow: "0 4px 24px rgba(41,181,246,0.12)" }}
            >
              <div
                className="p-8 flex flex-col gap-5 flex-1"
                style={{
                  background:
                    "linear-gradient(135deg, #29B5F6 0%, #6855F0 100%)",
                }}
              >
                <div className="w-12 h-12 rounded-[12px] bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  SMB Systems Hub
                </h3>
                <p className="text-white/85 leading-relaxed flex-1">
                  Custom digital systems for businesses scaling from 10 to 100
                  employees. E-commerce platforms, inventory trackers, and
                  mobile integrations built on predictable frameworks.
                </p>
                <div className="flex items-center gap-2 text-white/70 text-sm font-medium group-hover:text-white transition-colors duration-300">
                  <span>Scale your systems</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Enterprise Card */}
            <Link
              href="/enterprise"
              className="group relative flex flex-col rounded-[16px] overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
              id="tier-card-enterprise"
              style={{
                boxShadow: "0 4px 24px rgba(104,85,240,0.08)",
                border: "2px solid #E0D9FF",
              }}
            >
              <div
                className="p-8 flex flex-col gap-5 flex-1"
                style={{
                  background: "linear-gradient(135deg, #FFFFFF 0%, #F5F3FF 100%)",
                }}
              >
                <div className="w-12 h-12 rounded-[12px] bg-[#6855F0]/10 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#6855F0]"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A]">
                  Enterprise Gateway
                </h3>
                <p className="text-[#0F172A]/60 leading-relaxed flex-1">
                  Dedicated engineering capacity for institutions requiring
                  long-term stability, total data control, and deep
                  integration with SOC 2 and ISO 27001 compliance.
                </p>
                <div className="flex items-center gap-2 text-[#6855F0]/60 text-sm font-medium group-hover:text-[#6855F0] transition-colors duration-300">
                  <span>Request capacity review</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          VALUE PROPOSITION STRIP
          Brand gradient background — vibrant, not black
          ============================================================ */}
      <section
        className="py-16"
        id="value-strip"
        style={{
          background:
            "linear-gradient(135deg, #6855F0 0%, #8B74F8 50%, #29B5F6 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {/* Value 1 */}
            <div className="flex flex-col gap-3 text-center md:text-left">
              <div className="mx-auto md:mx-0 w-10 h-10 rounded-[12px] bg-white/20 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.42 15.17l-5.69 3.39.96-6.33L1.5 7.27l6.36-.55L11.42 1.5l3.56 5.22 6.36.55-5.19 4.96.96 6.33z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">
                Engineering Excellence
              </h3>
              <p className="text-sm text-white/75 leading-relaxed">
                The pursuit of the most elegant architectural path. 6x fewer
                design defects than industry averages.
              </p>
            </div>

            {/* Value 2 */}
            <div className="flex flex-col gap-3 text-center md:text-left">
              <div className="mx-auto md:mx-0 w-10 h-10 rounded-[12px] bg-white/20 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">
                Strategic Transparency
              </h3>
              <p className="text-sm text-white/75 leading-relaxed">
                Our Anti-Black Hole governance ensures you&apos;re never more
                than 14 days from tangible progress.
              </p>
            </div>

            {/* Value 3 */}
            <div className="flex flex-col gap-3 text-center md:text-left">
              <div className="mx-auto md:mx-0 w-10 h-10 rounded-[12px] bg-white/20 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">
                Radical Adaptability
              </h3>
              <p className="text-sm text-white/75 leading-relaxed">
                Systems that evolve alongside market shifts, future-proofing
                your product against volatility.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
