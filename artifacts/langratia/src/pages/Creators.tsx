import { Link } from "wouter";

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
              <span className="bg-gradient-to-r from-[#6855F0] to-[#29B5F6] bg-clip-text text-transparent">
                Live Product
              </span>{" "}
              in 14 Days
            </h1>
            <p className="text-lg text-[#1E1548]/70 leading-relaxed mb-10">
              A high-velocity, productized MVP service for solo founders and creators who need to validate market hypotheses fast — without the overhead of traditional development agencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="rounded-xl px-8 py-4 text-base font-semibold text-white text-center transition-all duration-300 hover:shadow-xl hover:scale-[1.03]"
                style={{ background: "linear-gradient(135deg, #6855F0 0%, #29B5F6 100%)" }}
              >
                Start Your MVP
              </Link>
              <Link
                href="/case-studies"
                className="rounded-xl border border-[#6855F0]/30 bg-white px-8 py-4 text-base font-semibold text-[#6855F0] text-center transition-all duration-300 hover:bg-[#6855F0]/10"
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
                We eliminate the scoping overhead that typically consumes 20-30% of project budgets. By standardizing the prototype phase, we protect your engineering hours and deliver a working product — not a wireframe.
              </p>
              <ul className="flex flex-col gap-5">
                {[
                  {
                    title: "Fullstack Web Application",
                    desc: "Modern React or Next.js frontend + Node.js/PostgreSQL backend. Complete user auth, CRUD, and APIs.",
                  },
                  {
                    title: "Payment Integration",
                    desc: "Stripe, MTN MoMo, Airtel Money, or custom checkout flow integrated and tested in production.",
                  },
                  {
                    title: "Production Deployment",
                    desc: "CI/CD pipeline, live staging environment, and production deployment on your preferred cloud.",
                  },
                  {
                    title: "100% Source Code Ownership",
                    desc: "All code, schemas, and documentation transferred to your private GitHub organization on day 14.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <div className="mt-1 w-5 h-5 rounded-full bg-[#6855F0]/15 flex items-center justify-center shrink-0">
                      <span className="w-2 h-2 rounded-full bg-[#6855F0]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#1E1548]">{item.title}</p>
                      <p className="text-xs text-[#1E1548]/60 leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-8">
              <h3 className="text-lg font-extrabold text-[#1E1548] mb-6">14-Day Sprint Breakdown</h3>
              <div className="flex flex-col gap-4">
                {[
                  { days: "Days 1–3", title: "Precision Scoping", desc: "Architecture blueprint, data schema, and scope lock." },
                  { days: "Days 4–10", title: "High-Velocity Build", desc: "Frontend, backend, APIs, database, and auth." },
                  { days: "Days 11–13", title: "Live Demo & Review", desc: "Staging deployment, client walkthrough, feedback loop." },
                  { days: "Day 14", title: "Production Handover", desc: "Live deployment + full IP and repository transfer." },
                ].map((step, i) => (
                  <div key={step.days} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-[#6855F0] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#6855F0]">{step.days}</span>
                      <p className="text-sm font-bold text-[#1E1548]">{step.title}</p>
                      <p className="text-xs text-[#1E1548]/60">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anti-Black Hole Principles */}
      <section className="py-20 bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#1E1548]">The Anti-Black Hole Guarantee</h2>
            <p className="mt-3 text-sm text-[#1E1548]/60 max-w-xl mx-auto">
              Our process is structurally designed to prevent the agency patterns that cost founders time and money.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Change Order Protocol",
                desc: "No new features enter the backlog without an immediate, documented impact assessment on budget and timeline. Scope creep is structurally impossible.",
              },
              {
                title: "Live Demo Every Sprint",
                desc: "Every 1–2 week sprint closes with a clickable, live demonstration of completed functionality. You validate before we build further.",
              },
              {
                title: "Institutional Knowledge Lock",
                desc: "In-house architects hold the full system context. If a contractor rotates out, the project never misses a beat — no knowledge drain.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 border border-[#E2E8F0] flex flex-col gap-4">
                <div className="w-2 h-8 rounded-full" style={{ background: "linear-gradient(135deg, #6855F0, #29B5F6)" }} />
                <h3 className="text-lg font-bold text-[#1E1548]">{item.title}</h3>
                <p className="text-sm text-[#1E1548]/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1E1548] mb-6">
            Ready to Launch in 14 Days?
          </h2>
          <p className="text-[#1E1548]/70 mb-10 text-lg leading-relaxed">
            Schedule a free 30-minute scoping call and receive your custom architectural proposal within 48 hours.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-xl px-10 py-4 text-base font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-[1.03]"
            style={{ background: "linear-gradient(135deg, #6855F0 0%, #29B5F6 100%)" }}
          >
            Start Your MVP Today
          </Link>
        </div>
      </section>
    </>
  );
}
