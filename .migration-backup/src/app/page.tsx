import Link from "next/link";
import TrustBadges from "@/components/TrustBadges";
import SprintTimeline from "@/components/SprintTimeline";
import ServicesShowcase from "@/components/ServicesShowcase";

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

            {/* Right Column: Clean Bento Stats (No Code, No Images) */}
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

      {/* ============================================================
          TRUST BAR
          ============================================================ */}
      <TrustBadges />

      {/* ============================================================
          INTERACTIVE SERVICES SHOWCASE WITH HOVER ANIMATION
          ============================================================ */}
      <ServicesShowcase />

      {/* ============================================================
          ENGINEERING PHILOSOPHY
          ============================================================ */}
      <section className="py-32 bg-white border-t border-[#E2E8F0]" id="engineering-values">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Content (Text) */}
            <div className="flex flex-col gap-8 order-2 lg:order-1">
              <span className="self-start text-xs font-bold uppercase tracking-widest text-[#1E1548] border border-[#E2E8F0] px-4 py-1.5 rounded-full">
                Our Philosophy
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1E1548] leading-tight tracking-tighter">
                Built on Balance,
                <br />
                Driven by Care
              </h2>
              <p className="text-lg text-[#1E1548]/70 leading-relaxed">
                Great software comes from genuine partnership. We keep things
                clear, honest, and free of complexity so you can focus on
                growing your idea.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  {
                    color: "#6855F0",
                    title: "Clear Scoping",
                    desc: "We map out the full journey before writing a single line of code. No surprises.",
                  },
                  {
                    color: "#29B5F6",
                    title: "Predictable Delivery",
                    desc: "Transparent milestones so you always know exactly where your project stands.",
                  },
                  {
                    color: "#8B74F8",
                    title: "Lasting Architecture",
                    desc: "Systems built to grow with you — easy to maintain and scale over time.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-5 p-5 rounded-xl bg-white border border-[#E2E8F0] shadow-sm hover:border-[#6855F0]/30 transition-colors"
                  >
                    <span
                      className="mt-1 w-3 h-3 flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <div>
                      <span className="block text-sm font-bold text-[#1E1548] mb-1">
                        {item.title}
                      </span>
                      <span className="text-sm text-[#1E1548]/70">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Abstract Element (No Image) */}
            <div className="order-1 lg:order-2 bg-[#F8FAFC] border border-[#E2E8F0] p-12 rounded-3xl h-full flex flex-col justify-center min-h-[400px]">
                <h3 className="text-2xl font-bold text-[#1E1548] mb-6 tracking-tight">The Langratia Standard</h3>
                <ul className="flex flex-col gap-5 border-l-2 border-[#E2E8F0] pl-6">
                  <li>
                    <p className="font-bold text-[#1E1548] text-sm">Strict Quality Gates</p>
                    <p className="text-sm text-[#1E1548]/70 mt-1">Code is peer-reviewed and rigorously tested before deployment.</p>
                  </li>
                  <li>
                    <p className="font-bold text-[#1E1548] text-sm">Documentation First</p>
                    <p className="text-sm text-[#1E1548]/70 mt-1">Every system is comprehensively documented for your team.</p>
                  </li>
                  <li>
                    <p className="font-bold text-[#1E1548] text-sm">Continuous Integration</p>
                    <p className="text-sm text-[#1E1548]/70 mt-1">Automated pipelines ensure seamless updates and rollbacks.</p>
                  </li>
                </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          SPRINT TIMELINE
          ============================================================ */}
      <SprintTimeline />

      {/* ============================================================
          SOLUTIONS
          ============================================================ */}
      <section className="py-32 bg-[#FAFAFA] border-t border-[#E2E8F0]" id="tier-selection">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-left mb-16 max-w-3xl">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-[#1E1548]">
              Solutions for Every Stage
            </h2>
            <p className="mt-5 text-lg text-[#1E1548]/70 leading-relaxed">
              Whether you&apos;re validating an idea or scaling a team, we have
              a balanced approach that fits where you are right now.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                id: "tier-card-creator",
                href: "/creators",
                label: "Creators",
                color: "#6855F0",
                title: "MVP Launch",
                desc: "For solo founders and creators. We help you validate your idea quickly with a clean, functional first version.",
                items: [
                  "Full Source Code Ownership",
                  "Responsive Mobile Design",
                  "Supportive Partnership",
                ],
              },
              {
                id: "tier-card-smb",
                href: "/smb",
                label: "SMB Teams",
                color: "#29B5F6",
                title: "Scaling Hub",
                desc: "For growing businesses that need reliable digital systems. We simplify operations with robust custom tools.",
                items: [
                  "Streamlined E-Commerce",
                  "Internal Team Tools",
                  "Local Payment Integrations",
                ],
              },
              {
                id: "tier-card-enterprise",
                href: "/enterprise",
                label: "Enterprise",
                color: "#1E1548",
                title: "Enterprise Support",
                desc: "For larger organizations requiring dedicated capacity and a long-term engineering partner.",
                items: [
                  "Dedicated Team Capacity",
                  "Security & Compliance",
                  "Long-term Partnership",
                ],
              },
            ].map((tier) => (
              <Link
                key={tier.id}
                href={tier.href}
                id={tier.id}
                className="group flex flex-col rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#6855F0] transition-colors duration-200"
              >
                <div className="p-8 flex flex-col gap-6 flex-1">
                  <span
                    className="self-start text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full text-white"
                    style={{ backgroundColor: tier.color }}
                  >
                    {tier.label}
                  </span>

                  <div>
                    <h3 className="text-2xl font-extrabold text-[#1E1548] tracking-tight">
                      {tier.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#1E1548]/70 leading-relaxed">
                      {tier.desc}
                    </p>
                  </div>

                  <ul className="flex flex-col gap-3 mt-4">
                    {tier.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-xs text-[#1E1548]/80 font-medium"
                      >
                        <span
                          className="w-1.5 h-1.5 flex-shrink-0"
                          style={{ backgroundColor: tier.color }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-sm font-bold mt-auto text-[#1E1548] group-hover:text-[#6855F0] transition-colors">
                    <span>Learn More</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          FINAL CTA
          ============================================================ */}
      <section className="py-32 bg-[#1E1548]" id="final-cta">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="p-12 sm:p-16 rounded-3xl bg-[#261E53] border border-[#3A316E]">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tighter leading-tight">
              Let&apos;s Discuss Your
              <br />
              Next Project
            </h2>
            <p className="mt-6 text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
              We&apos;d love to hear what you&apos;re building. Tell us about
              your idea and we&apos;ll explore how we can help bring it to life.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="rounded-lg px-8 py-4 text-base font-bold text-white bg-[#6855F0] transition-colors duration-200 hover:bg-[#5b4be0]"
              >
                Start the Conversation
              </Link>
              <Link
                href="/case-studies"
                className="rounded-lg px-8 py-4 text-base font-bold text-white border border-white/20 transition-colors duration-200 hover:bg-white/5"
              >
                Browse Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
