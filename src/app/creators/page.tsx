import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tier I: Creator Launchpad | 14-Day MVP Development | Langratia",
  description:
    "Launch your startup MVP in 14 days with production-ready architecture. Specialized for tech founders in Uganda, East Africa, and globally with zero tech debt.",
  keywords: [
    "MVP development agency Uganda",
    "startup software development Kampala",
    "rapid MVP builder East Africa",
    "14 day software sprint",
    "founder tech partner Uganda",
  ],
};

export default function CreatorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#F8FAFC] border-b border-[#E2E8F0]" id="creators-hero">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#6855F0]/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#6855F0] mb-4">
              Tier I — Creator Launchpad
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#1E1548] sm:text-5xl lg:text-6xl leading-tight mb-6">
              From Vision to{" "}
              <span className="bg-gradient-to-r from-[#6855F0] to-[#29B5F6] bg-clip-text text-transparent drop-shadow-sm">
                Live Product
              </span>{" "}
              in 14 Days
            </h1>
            <p className="text-lg text-[#1E1548]/70 leading-relaxed mb-10">
              A high-velocity, productized MVP service for solo founders and
              creators who need to validate market hypotheses fast — without
              the overhead of traditional development agencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="gradient-action rounded-brand-lg px-8 py-4 text-base font-semibold text-white text-center transition-all duration-300 hover:shadow-xl hover:shadow-[#6855F0]/30 hover:scale-[1.03]"
                id="creator-cta-primary"
              >
                Start Your MVP
              </Link>
              <Link
                href="/case-studies"
                className="rounded-brand-lg border border-[#6855F0]/30 bg-white px-8 py-4 text-base font-semibold text-[#6855F0] text-center transition-all duration-300 hover:bg-[#6855F0]/10"
                id="creator-cta-secondary"
              >
                See Examples
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-white py-20 sm:py-28" id="creators-offering">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#6855F0] mb-3">
                What You Get
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-[#1E1548] sm:text-4xl mb-6">
                A complete, production-ready MVP — no fluff.
              </h2>
              <p className="text-lg text-[#1E1548]/60 leading-relaxed mb-10">
                We eliminate the &quot;scoping overhead&quot; that typically consumes
                20-30% of project budgets. By standardizing the prototype
                phase, we protect your engineering hours and deliver a working
                product — not a wireframe.
              </p>
              <ul className="flex flex-col gap-5">
                {[
                  {
                    title: "14-Day Guaranteed Delivery",
                    desc: "Fixed timeline, fixed scope. No surprises.",
                  },
                  {
                    title: "Full Source Code Ownership",
                    desc: "Everything we build is yours — no vendor lock-in.",
                  },
                  {
                    title: "Mobile-Responsive Design",
                    desc: "Production-grade UI that works on every device.",
                  },
                  {
                    title: "1 Live Demo Sprint",
                    desc: "Clickable walkthrough at the end of the build cycle.",
                  },
                  {
                    title: "30-Day Post-Launch Support",
                    desc: "Bug fixes and minor adjustments at no extra cost.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full gradient-action flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[#1E1548]">{item.title}</p>
                      <p className="text-sm text-[#1E1548]/55 mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing card */}
            <div className="gradient-action rounded-brand-lg p-10 flex flex-col gap-6 shadow-2xl shadow-[#6855F0]/20 text-white">
              <p className="text-white/70 text-sm font-semibold uppercase tracking-widest">
                Flat-Rate Pricing
              </p>
              <div>
                <p className="text-6xl font-extrabold text-white">
                  Starting at
                </p>
                <p className="text-2xl font-semibold text-white/80 mt-1">
                  $1,500 <span className="text-base font-normal opacity-60">/ project</span>
                </p>
              </div>
              <p className="text-white/75 leading-relaxed text-sm">
                No hourly billing. No hidden fees. One flat rate for a
                production-ready MVP delivered in 14 days or less.
              </p>
              <div className="h-px bg-white/15" />
              <p className="text-white/50 text-xs leading-relaxed">
                Pricing varies based on scope and complexity. Contact us for
                a precise quote tailored to your project.
              </p>
              <Link
                href="/contact"
                className="w-full rounded-brand py-3.5 bg-white text-[#6855F0] text-center font-bold text-sm transition-all duration-300 hover:bg-[#F8FAFC] hover:shadow-lg"
                id="creator-pricing-cta"
              >
                Get a Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#F1F5F9] py-20 sm:py-28" id="creators-process">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-[#1E1548] sm:text-4xl">
              The 14-Day Build Cycle
            </h2>
            <p className="mt-4 text-lg text-[#1E1548]/55">
              A transparent, structured sprint with zero black holes.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { day: "Day 1–2", step: "Discovery", desc: "Define scope, architecture, and success criteria in a focused kick-off." },
              { day: "Day 3–8", step: "Build", desc: "Rapid engineering sprint. Daily async updates. Zero surprises." },
              { day: "Day 9–12", step: "QA & Polish", desc: "Testing, UI refinement, and performance optimization." },
              { day: "Day 13–14", step: "Launch", desc: "Live demo walkthrough, deployment, and source code handoff." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-brand-lg p-6 border border-[#E2E8F0] flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6855F0]">
                  {item.day}
                </span>
                <h3 className="text-lg font-bold text-[#1E1548]">{item.step}</h3>
                <p className="text-sm text-[#1E1548]/55 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#F8FAFC] py-20 border-t border-[#E2E8F0]" id="creators-bottom-cta">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1E1548] mb-6">
            Ready to launch in 14 days?
          </h2>
          <p className="text-[#1E1548]/70 mb-10 text-lg leading-relaxed">
            Tell us about your idea and we&apos;ll send back a scoped proposal
            within 48 hours.
          </p>
          <Link
            href="/contact"
            className="gradient-action rounded-brand-lg px-10 py-4 text-base font-semibold text-white inline-block transition-all duration-300 hover:shadow-xl hover:shadow-[#6855F0]/30 hover:scale-[1.03]"
          >
            Start Your MVP Today
          </Link>
        </div>
      </section>
    </>
  );
}
