import Link from "next/link";
import Image from "next/image";
import TrustBadges from "@/components/TrustBadges";
import SprintTimeline from "@/components/SprintTimeline";

export default function Home() {
  return (
    <>
      {/* ============================================================
          HERO — Immersive Mesh + White Glassmorphism
          ============================================================ */}
      <section
        className="relative overflow-hidden pt-16 pb-32"
        id="hero-section"
        style={{
          background:
            "linear-gradient(135deg, #f5f3ff 0%, #ffffff 40%, #e0f2fe 100%)",
        }}
      >
        {/* Mesh gradient orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-60"
            style={{
              background:
                "radial-gradient(circle, rgba(104,85,240,0.22) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full opacity-60"
            style={{
              background:
                "radial-gradient(circle, rgba(41,181,246,0.22) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-40"
            style={{
              background:
                "radial-gradient(circle, rgba(139,116,248,0.15) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #6855F0 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          {/* Central headline block */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2.5 mb-8 px-5 py-2 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#6855F0] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#6855F0]">
                Software Engineering Studio
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-[#1E1548] leading-[1.05]">
              Reliable Custom
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #6855F0 0%, #8B74F8 50%, #29B5F6 100%)",
                }}
              >
                Software Engineering
              </span>
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-[#1E1548]/60 leading-relaxed max-w-2xl mx-auto">
              We build scalable, maintainable systems with a focus on
              transparent delivery, clean architecture, and a partnership built
              on trust.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
              <Link
                href="/contact"
                id="hero-cta-primary"
                className="rounded-2xl px-10 py-4 text-base font-bold text-white transition-all duration-300 hover:scale-[1.03]"
                style={{
                  background:
                    "linear-gradient(135deg, #6855F0 0%, #29B5F6 100%)",
                  boxShadow: "0 8px 40px rgba(104,85,240,0.35)",
                }}
              >
                Discuss Your Project
              </Link>
              <Link
                href="/case-studies"
                id="hero-cta-secondary"
                className="rounded-2xl px-10 py-4 text-base font-bold text-[#6855F0] bg-white/70 backdrop-blur-md border border-white/80 shadow-sm transition-all duration-300 hover:bg-white hover:shadow-md hover:scale-[1.02]"
              >
                View Our Work →
              </Link>
            </div>
          </div>

          {/* Hero Image — Large White Glass Portal */}
          <div className="relative mx-auto max-w-5xl">
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(104,85,240,0.2) 0%, rgba(41,181,246,0.2) 100%)",
                filter: "blur(40px)",
                transform: "scale(1.05)",
              }}
            />
            <div className="relative rounded-3xl overflow-hidden bg-white/55 backdrop-blur-2xl border border-white/85 shadow-[0_32px_80px_rgba(104,85,240,0.18)] p-3">
              {/* Faux browser bar */}
              <div className="absolute top-3 left-3 right-3 z-10 h-8 flex items-center px-4 gap-2 rounded-t-xl bg-white/60 backdrop-blur-sm border-b border-white/40">
                <span className="w-3 h-3 rounded-full bg-red-400/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <span className="w-3 h-3 rounded-full bg-green-400/70" />
              </div>
              <Image
                src="/images/hero_architecture.png"
                alt="Langratia Engineering Team at Work"
                width={1200}
                height={680}
                className="rounded-2xl object-cover w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          TRUST BAR
          ============================================================ */}
      <TrustBadges />

      {/* ============================================================
          ENGINEERING PHILOSOPHY — Split Layout with White Glass Image
          ============================================================ */}
      <section
        className="py-32 relative overflow-hidden"
        id="engineering-values"
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #f5f3ff 100%)",
        }}
      >
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(104,85,240,0.08) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Image — white glass frame */}
            <div className="order-2 lg:order-1 relative">
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(41,181,246,0.12) 0%, rgba(104,85,240,0.12) 100%)",
                  filter: "blur(30px)",
                  transform: "scale(1.04)",
                }}
              />
              <div className="relative rounded-3xl overflow-hidden bg-white/60 backdrop-blur-2xl border border-white/90 shadow-[0_20px_60px_rgba(104,85,240,0.1)] p-3">
                <Image
                  src="/images/team_collaboration.png"
                  alt="Team Collaboration"
                  width={700}
                  height={500}
                  className="rounded-2xl object-cover w-full h-auto"
                />
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2 flex flex-col gap-8">
              <span className="self-start text-xs font-bold uppercase tracking-widest text-[#6855F0] bg-[#6855F0]/8 px-4 py-1.5 rounded-full">
                Our Philosophy
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1E1548] leading-tight tracking-tighter">
                Built on Balance,
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #6855F0 0%, #29B5F6 100%)",
                  }}
                >
                  Driven by Care
                </span>
              </h2>
              <p className="text-lg text-[#1E1548]/60 leading-relaxed">
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
                    className="flex items-start gap-5 p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span
                      className="mt-1 w-3 h-3 rounded-full flex-shrink-0"
                      style={{ background: item.color }}
                    />
                    <div>
                      <span className="block text-sm font-bold text-[#1E1548] mb-1">
                        {item.title}
                      </span>
                      <span className="text-sm text-[#1E1548]/55">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SPRINT TIMELINE
          ============================================================ */}
      <SprintTimeline />

      {/* ============================================================
          SOLUTIONS — White Glass Cards on Rich Mesh
          ============================================================ */}
      <section className="py-32 relative overflow-hidden" id="tier-selection">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #eef2ff 0%, #f0f9ff 60%, #f5f3ff 100%)",
          }}
        />
        <div
          className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(104,85,240,0.14) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(41,181,246,0.14) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-[#1E1548]">
              Solutions for Every Stage
            </h2>
            <p className="mt-5 text-lg text-[#1E1548]/55 leading-relaxed">
              Whether you&apos;re validating an idea or scaling a team, we have
              a balanced approach that fits where you are right now.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                id: "tier-card-creator",
                href: "/creators",
                label: "Creators",
                labelColor: "#6855F0",
                labelBg: "rgba(104,85,240,0.08)",
                glowColor: "rgba(104,85,240,0.15)",
                arrowColor: "#6855F0",
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
                labelColor: "#29B5F6",
                labelBg: "rgba(41,181,246,0.08)",
                glowColor: "rgba(41,181,246,0.15)",
                arrowColor: "#29B5F6",
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
                labelColor: "#8B74F8",
                labelBg: "rgba(139,116,248,0.08)",
                glowColor: "rgba(139,116,248,0.15)",
                arrowColor: "#8B74F8",
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
                className="group relative flex flex-col rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_24px_80px_rgba(104,85,240,0.15)] bg-white/65 backdrop-blur-2xl border border-white/90 shadow-[0_8px_32px_rgba(30,21,72,0.07)]"
              >
                {/* Inner glow orb */}
                <div
                  className="absolute -top-10 -right-10 w-56 h-56 rounded-full pointer-events-none transition-all duration-500 group-hover:scale-125"
                  style={{
                    background: `radial-gradient(circle, ${tier.glowColor} 0%, transparent 70%)`,
                    filter: "blur(20px)",
                  }}
                />
                <div className="p-8 flex flex-col gap-6 flex-1 relative z-10">
                  <span
                    className="self-start text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full"
                    style={{
                      color: tier.labelColor,
                      background: tier.labelBg,
                    }}
                  >
                    {tier.label}
                  </span>

                  <div>
                    <h3 className="text-2xl font-extrabold text-[#1E1548] tracking-tight">
                      {tier.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#1E1548]/55 leading-relaxed">
                      {tier.desc}
                    </p>
                  </div>

                  <ul className="flex flex-col gap-3">
                    {tier.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-xs text-[#1E1548]/65"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: tier.labelColor }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div
                    className="flex items-center gap-2 text-sm font-bold mt-auto group-hover:translate-x-1 transition-transform"
                    style={{ color: tier.arrowColor }}
                  >
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
          FINAL CTA — Bold Gradient with White Glass Card
          ============================================================ */}
      <section className="py-32 relative overflow-hidden" id="final-cta">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #6855F0 0%, #8B74F8 50%, #29B5F6 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full"
          style={{ background: "rgba(255,255,255,0.1)", filter: "blur(60px)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full"
          style={{ background: "rgba(255,255,255,0.1)", filter: "blur(60px)" }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <div className="p-12 sm:p-16 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_24px_80px_rgba(0,0,0,0.15)]">
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
                className="rounded-2xl px-10 py-4 text-base font-bold text-[#6855F0] bg-white transition-all duration-300 hover:shadow-[0_8px_40px_rgba(255,255,255,0.3)] hover:scale-[1.03]"
              >
                Start the Conversation
              </Link>
              <Link
                href="/case-studies"
                className="rounded-2xl px-10 py-4 text-base font-bold text-white bg-white/10 backdrop-blur-md border border-white/30 transition-all duration-300 hover:bg-white/20 hover:scale-[1.02]"
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
