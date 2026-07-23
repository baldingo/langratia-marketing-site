import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tier II: SMB Systems Hub | Custom Business Software Engineering | Langratia",
  description:
    "Custom operating platforms, Mobile Money & e-commerce integrations, and workflow automation for growing SMBs in Uganda, East Africa, and international markets.",
  keywords: [
    "custom business software Uganda",
    "mobile money API integration Kampala",
    "e-commerce platform development East Africa",
    "SMB software engineering firm",
    "business automation systems Uganda",
  ],
};

const services = [
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.877-7.08a60.026 60.026 0 00-16.38-1.032 60.606 60.606 0 01-.017.583m-4.992.835l-1.386-5.217A1.875 1.875 0 007.5 5.25h1.5" />
    ),
    title: "Custom E-Commerce Platforms",
    desc: "End-to-end storefronts with payment integrations, inventory management, and analytics dashboards calibrated to your exact business logic.",
    model: "Milestone-Based Fixed Price",
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-3 3h3M6.75 3h.008v.008H6.75V3zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM6.75 15h.008v.008H6.75V15zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    ),
    title: "Mobile Money Integrations",
    desc: "Seamless MTN MoMo, Airtel Money, and MPESA integrations embedded directly into your digital workflow — built for regional and global payment realities.",
    model: "Time & Materials (T&M)",
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3" />
    ),
    title: "Real-Time Inventory Systems",
    desc: "Live dashboards and warehouse management systems that eliminate the spreadsheet chaos that strangles growing businesses.",
    model: "Milestone-Based Fixed Price",
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
    ),
    title: "Internal Operations Portals",
    desc: "Custom administrative software replacing fragile manual spreadsheets with role-based permissions and automated audit logging.",
    model: "Time & Materials (T&M)",
  },
];

export default function SMBPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#F8FAFC] border-b border-[#E2E8F0]" id="smb-hero">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#29B5F6]/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#29B5F6] mb-4">
              Tier II — SMB Digitalization Hub
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#1E1548] sm:text-5xl lg:text-6xl leading-tight mb-6">
              Custom Systems Built to{" "}
              <span className="bg-gradient-to-r from-[#29B5F6] to-[#6855F0] bg-clip-text text-transparent drop-shadow-sm">
                Scale Operations
              </span>
            </h1>
            <p className="text-lg text-[#1E1548]/70 leading-relaxed mb-10">
              E-commerce platforms, Point of Sale systems, real-time inventory
              trackers, and mobile money payment integrations built specifically
              for growing businesses (10–100 employees).
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="gradient-data rounded-brand-lg px-8 py-4 text-base font-semibold text-white text-center transition-all duration-300 hover:shadow-xl hover:shadow-sky-cyan/25 hover:scale-[1.03]"
                id="smb-cta-primary"
              >
                Get a Systems Audit
              </Link>
              <Link
                href="/case-studies"
                className="rounded-brand-lg border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white text-center transition-all duration-300 hover:bg-white/10"
              >
                See SMB Case Studies
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Engagement Models */}
      <section className="bg-white py-16 sm:py-20" id="smb-models">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#29B5F6] mb-3">
              Pricing Frameworks
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-[#1E1548] sm:text-4xl">
              Total Cost Predictability
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-[#1E1548]/55 text-lg leading-relaxed">
              We offer two engagement models so your financial outlays are always
              tied directly to validated architectural value.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Fixed Price */}
            <div className="rounded-brand-lg border-2 border-[#29B5F6]/30 bg-[#29B5F6]/5 p-8 flex flex-col gap-5">
              <div className="w-12 h-12 rounded-brand gradient-cyan-action flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1E1548]">Milestone-Based Fixed Price</h3>
              <p className="text-[#1E1548]/60 leading-relaxed">
                Defined scope, defined cost, defined timeline. Payment is released
                at pre-agreed milestones after you verify the deliverable. Zero
                budget overruns — guaranteed.
              </p>
              <p className="text-sm font-semibold text-[#0EA5E9] mt-auto">Best for: Well-defined projects with stable requirements</p>
            </div>
            {/* T&M */}
            <div className="rounded-brand-lg border border-[#E2E8F0] bg-white p-8 flex flex-col gap-5 shadow-sm">
              <div className="w-12 h-12 rounded-brand bg-[#1E1548]/5 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#1E1548]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1E1548]">Time &amp; Materials (T&amp;M)</h3>
              <p className="text-[#1E1548]/60 leading-relaxed">
                Flexible capacity billed on actual engineering hours consumed.
                Ideal for evolving requirements where the full scope cannot be
                locked upfront. Full transparency — you see every hour logged.
              </p>
              <p className="text-sm font-semibold text-[#1E1548]/40 mt-auto">Best for: Dynamic projects with evolving requirements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#F1F5F9] py-20 sm:py-28" id="smb-services">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#29B5F6] mb-3">Our Offerings</p>
            <h2 className="text-3xl font-bold tracking-tight text-[#1E1548] sm:text-4xl">
              Core Systems We Build
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-white rounded-brand-lg p-8 border border-[#E2E8F0] flex flex-col gap-5 transition-all duration-300 hover:shadow-lg hover:border-[#29B5F6]/30">
                <div className="w-11 h-11 rounded-brand bg-[#29B5F6]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0EA5E9]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    {s.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#1E1548]">{s.title}</h3>
                <p className="text-[#1E1548]/60 text-sm leading-relaxed">{s.desc}</p>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0EA5E9] border border-[#29B5F6]/25 rounded-brand px-3 py-1.5 w-fit">
                  {s.model}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-[#F8FAFC] py-20 border-t border-[#E2E8F0]" id="smb-cta">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1E1548] mb-6">
            Ready to replace the spreadsheets?
          </h2>
          <p className="text-[#1E1548]/70 mb-10 text-lg leading-relaxed">
            Start with a free systems audit. We&apos;ll identify your biggest
            operational bottlenecks and propose the most elegant fix.
          </p>
          <Link
            href="/contact"
            className="gradient-cyan-action rounded-brand-lg px-10 py-4 text-base font-semibold text-white inline-block transition-all duration-300 hover:shadow-xl hover:shadow-[#29B5F6]/25 hover:scale-[1.03]"
          >
            Request a Systems Audit
          </Link>
        </div>
      </section>
    </>
  );
}
