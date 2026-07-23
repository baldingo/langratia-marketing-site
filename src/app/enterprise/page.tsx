import Link from "next/link";

export const metadata = {
  title: "Enterprise Infrastructure Gateway — Langratia",
  description:
    "Dedicated engineering capacity for institutions requiring long-term stability, total data control, and deep integration. SOC 2 and ISO 27001 compliant.",
};

const capabilities = [
  { label: "Custom ERP & Business Intelligence", icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5" },
  { label: "Data Dashboards & Analytics Platforms", icon: "M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" },
  { label: "SOC 2 & ISO 27001 Compliance Frameworks", icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" },
  { label: "Legacy System Migration & API Layers", icon: "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" },
  { label: "Dedicated Senior Architecture Teams", icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" },
  { label: "120–140% Net Retention Rate Architecture", icon: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" },
];

export default function EnterprisePage() {
  return (
    <>
      {/* Hero — Premium White-Silver aesthetic */}
      <section className="relative overflow-hidden bg-white border-b border-[#E2E8F0]" id="enterprise-hero">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[#6855F0]/5 blur-3xl translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#6855F0] mb-4">
              Tier III — Enterprise Infrastructure Gateway
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#1E1548] sm:text-5xl lg:text-6xl leading-tight mb-6">
              Engineering Depth.{" "}
              <span className="text-[#6855F0]">
                Absolute Security.
              </span>{" "}
              Long-Term Partnership.
            </h1>
            <p className="text-lg text-[#1E1548]/70 leading-relaxed mb-10">
              Built for institutions requiring long-term stability, total data
              control, and deep system integration. Our dedicated team model
              embeds senior architects into your value chain — not as vendors,
              but as strategic infrastructure partners.
            </p>
            {/* Consultative CTA */}
            <Link
              href="/contact"
              className="inline-block rounded-brand-lg gradient-action px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-[1.03]"
              id="enterprise-cta"
            >
              Request Technical Capacity Review
            </Link>
          </div>
        </div>
      </section>

      {/* Why Dedicated Capacity */}
      <section className="bg-[#F8FAFC] py-20 sm:py-28 border-b border-[#E2E8F0]" id="enterprise-model">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#6855F0] mb-3">
                The Dedicated Team Model
              </p>
              <h2 className="text-3xl font-bold text-[#1E1548] sm:text-4xl mb-6">
                Eliminate the Bench Time Trap
              </h2>
              <p className="text-[#1E1548]/70 leading-relaxed mb-8 text-lg">
                Traditional enterprise engagements force you to pay for idle
                developers between phases. Our Hybrid Staffing Architecture
                keeps in-house Senior Architects as your stable &quot;Central Node&quot;
                — maintaining institutional knowledge — while scaling
                development capacity dynamically via pre-vetted contractors.
              </p>
              <p className="text-[#1E1548]/70 leading-relaxed">
                The result: you only pay for active, verified engineering output.
                And because our architects own the institutional knowledge, your
                system never depends on a single contractor relationship.
              </p>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { stat: "120–140%", label: "Net Retention Rate", sub: "Enterprise excellence benchmark" },
                { stat: "6x", label: "Fewer Design Defects", sub: "vs. industry bottom-quartile" },
                { stat: "SOC 2", label: "Compliance Ready", sub: "ISO 27001 frameworks available" },
                { stat: "2-week", label: "Sprint Cadence", sub: "Live demo every cycle" },
              ].map((item, i) => (
                <div key={i} className="rounded-brand-lg border border-[#E2E8F0] bg-white shadow-sm p-6 flex flex-col gap-2">
                  <p className="text-3xl font-extrabold text-[#1E1548]">{item.stat}</p>
                  <p className="text-sm font-semibold text-[#6855F0]">{item.label}</p>
                  <p className="text-xs text-[#1E1548]/50">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-white py-20 sm:py-28" id="enterprise-capabilities">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#6855F0] mb-3">
              Core Capabilities
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-[#1E1548] sm:text-4xl">
              Built for Institutional Scale
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-brand-lg border border-[#E2E8F0] p-6 transition-all duration-300 hover:border-[#6855F0]/40 hover:shadow-md group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-brand bg-[#6855F0]/10 flex items-center justify-center group-hover:bg-[#6855F0]/20 transition-colors duration-300">
                  <svg className="w-5 h-5 text-[#6855F0]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d={cap.icon} />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-[#1E1548] leading-snug pt-1">{cap.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anti-Black Hole Governance */}
      <section className="bg-[#F1F5F9] py-20" id="enterprise-governance">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#6855F0] mb-3">Governance</p>
            <h2 className="text-3xl font-bold tracking-tight text-[#1E1548] sm:text-4xl">
              The Anti-&quot;Black Hole&quot; Sprint Cadence
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-[#1E1548]/60 text-lg leading-relaxed">
              Enterprise buyers should never lose visibility for months.
              Our sprint model ensures you are never more than 14 days
              from tangible, demonstrable progress.
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
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-brand-lg p-8 border border-[#E2E8F0] flex flex-col gap-4">
                <div className="w-2 h-8 rounded-full gradient-action" />
                <h3 className="text-lg font-bold text-[#1E1548]">{item.title}</h3>
                <p className="text-sm text-[#1E1548]/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultative CTA */}
      <section className="bg-[#F8FAFC] py-20 border-t border-[#E2E8F0]" id="enterprise-bottom-cta">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1E1548] mb-6">
            Let&apos;s discuss your infrastructure requirements
          </h2>
          <p className="text-[#1E1548]/70 mb-10 text-lg leading-relaxed">
            Enterprise engagements begin with a Technical Capacity Review — a
            structured discovery session where we map your architecture needs
            to an optimal team and delivery model.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-brand-lg gradient-action px-10 py-4 text-base font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-[1.03]"
          >
            Request Technical Capacity Review
          </Link>
        </div>
      </section>
    </>
  );
}
