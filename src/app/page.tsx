import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* ============================================================
          HERO SECTION
          Premium dark hero with brand tagline and subtle gradient
          ============================================================ */}
      <section
        className="relative overflow-hidden bg-dark-navy"
        id="hero-section"
      >
        {/* Background glow effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary-purple/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-sky-cyan/8 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="flex flex-col items-center text-center gap-8">
            {/* Logo mark */}
            <div className="relative w-20 h-20 mb-2 animate-pulse">
              <Image
                src="/logo.png"
                alt="Langratia node icon"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>

            {/* Main headline */}
            <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
              Custom Software Built for{" "}
              <span className="bg-gradient-to-r from-primary-purple via-electric-indigo to-sky-cyan bg-clip-text text-transparent">
                Your Exact Scale
              </span>
            </h1>

            {/* Subheadline */}
            <p className="max-w-2xl text-lg leading-relaxed text-cloud-gray/80 sm:text-xl">
              Enterprise-grade architecture with the agility of a startup. We
              deliver precision-engineered software systems that eliminate
              technical debt and accelerate your time-to-market by 70%.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                href="/contact"
                className="gradient-action rounded-brand-lg px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:shadow-xl hover:shadow-primary-purple/30 hover:scale-[1.03] text-center"
                id="hero-cta-primary"
              >
                Start Your Project
              </Link>
              <Link
                href="/case-studies"
                className="rounded-brand-lg border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/25 text-center"
                id="hero-cta-secondary"
              >
                View Our Work
              </Link>
            </div>

            {/* Trust metrics */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-sm text-cloud-gray/50">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-primary-purple" />
                <span>3x Higher Productivity</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-electric-indigo" />
                <span>6x Fewer Defects</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-sky-cyan" />
                <span>70% Faster Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ============================================================
          THREE-TIER SELF-SELECTION MATRIX
          The Switchboard — route users to the right pipeline
          ============================================================ */}
      <section
        className="bg-white py-20 sm:py-28"
        id="tier-selection"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-purple mb-3">
              Choose Your Path
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-dark-navy sm:text-4xl">
              Three Tiers. One Standard of Excellence.
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-dark-navy/60 leading-relaxed">
              Whether you&apos;re launching an MVP, scaling operations, or
              building enterprise infrastructure — we have a delivery model
              engineered for your exact complexity.
            </p>
          </div>

          {/* Three cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Creator Card — Action Gradient */}
            <Link
              href="/creators"
              className="group relative flex flex-col rounded-brand-lg overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary-purple/15"
              id="tier-card-creator"
            >
              <div className="gradient-action p-8 flex flex-col gap-5 flex-1">
                {/* Icon */}
                <div className="w-12 h-12 rounded-brand bg-white/15 flex items-center justify-center backdrop-blur-sm">
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
                <p className="text-white/80 leading-relaxed flex-1">
                  From vision to live product in 14 days. A high-velocity MVP
                  service designed for founders who need to validate fast and
                  build smart.
                </p>

                {/* Bottom indicator */}
                <div className="flex items-center gap-2 text-white/60 text-sm font-medium group-hover:text-white transition-colors duration-300">
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

            {/* SMB Card — Data Gradient */}
            <Link
              href="/smb"
              className="group relative flex flex-col rounded-brand-lg overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-sky-cyan/15"
              id="tier-card-smb"
            >
              <div className="gradient-data p-8 flex flex-col gap-5 flex-1">
                {/* Icon */}
                <div className="w-12 h-12 rounded-brand bg-white/15 flex items-center justify-center backdrop-blur-sm">
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
                <p className="text-white/80 leading-relaxed flex-1">
                  Custom digital systems for businesses scaling from 10 to 100
                  employees. E-commerce platforms, inventory trackers, and
                  mobile integrations built on predictable frameworks.
                </p>

                {/* Bottom indicator */}
                <div className="flex items-center gap-2 text-white/60 text-sm font-medium group-hover:text-white transition-colors duration-300">
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

            {/* Enterprise Card — Depth Gradient (Premium metal plate) */}
            <Link
              href="/enterprise"
              className="group relative flex flex-col rounded-brand-lg overflow-hidden border border-cloud-gray/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-dark-navy/10"
              id="tier-card-enterprise"
            >
              <div className="gradient-depth p-8 flex flex-col gap-5 flex-1">
                {/* Icon */}
                <div className="w-12 h-12 rounded-brand bg-dark-navy/8 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-dark-navy"
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

                <h3 className="text-2xl font-bold text-dark-navy">
                  Enterprise Gateway
                </h3>
                <p className="text-dark-navy/65 leading-relaxed flex-1">
                  Dedicated engineering capacity for institutions requiring
                  long-term stability, total data control, and deep
                  integration with SOC 2 and ISO 27001 compliance.
                </p>

                {/* Bottom indicator */}
                <div className="flex items-center gap-2 text-dark-navy/40 text-sm font-medium group-hover:text-dark-navy transition-colors duration-300">
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
          Reinforce core differentiators
          ============================================================ */}
      <section className="bg-dark-navy py-16" id="value-strip">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {/* Value 1 */}
            <div className="flex flex-col gap-3 text-center md:text-left">
              <div className="mx-auto md:mx-0 w-10 h-10 rounded-brand bg-primary-purple/15 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-primary-purple"
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
              <p className="text-sm text-cloud-gray/60 leading-relaxed">
                The pursuit of the most elegant architectural path. 6x fewer
                design defects than industry averages.
              </p>
            </div>

            {/* Value 2 */}
            <div className="flex flex-col gap-3 text-center md:text-left">
              <div className="mx-auto md:mx-0 w-10 h-10 rounded-brand bg-sky-cyan/15 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-sky-cyan"
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
              <p className="text-sm text-cloud-gray/60 leading-relaxed">
                Our Anti-Black Hole governance ensures you&apos;re never more
                than 14 days from tangible progress.
              </p>
            </div>

            {/* Value 3 */}
            <div className="flex flex-col gap-3 text-center md:text-left">
              <div className="mx-auto md:mx-0 w-10 h-10 rounded-brand bg-electric-indigo/15 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-electric-indigo"
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
              <p className="text-sm text-cloud-gray/60 leading-relaxed">
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
