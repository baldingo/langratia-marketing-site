import Link from "next/link";

export const metadata = {
  title: "SMB Systems Hub — Langratia",
  description:
    "Custom digital systems for businesses scaling from 10 to 100 employees. E-commerce, mobile money integrations, and real-time inventory built on predictable frameworks.",
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
    desc: "Seamless MTN MoMo, Airtel Money, and MPESA integrations embedded directly into your digital workflow — built for East African market realities.",
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
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    ),
    title: "HR & Payroll Automation",
    desc: "Internal tools that automate the manual HR overhead that scales with headcount — from employee onboarding to automated local payroll processing.",
    model: "Time & Materials (T&M)",
  },
];

export default function SMBPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-dark-navy" id="smb-hero">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-sky-cyan/8 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-deep-cyan/8 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-cyan mb-4">
              Tier II — SMB Systems Hub
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight mb-6">
              Systems That Scale{" "}
              <span className="bg-gradient-to-r from-sky-cyan to-deep-cyan bg-clip-text text-transparent">
                With Your Business
              </span>
            </h1>
            <p className="text-lg text-cloud-gray/75 leading-relaxed mb-10">
              Targeted at businesses in the 10–100 employee "Danger Zone" — where informal
              processes collapse and custom digital systems become a survival requirement.
              We build the infrastructure that makes scaling predictable.
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
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-cyan mb-3">
              Pricing Frameworks
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-dark-navy sm:text-4xl">
              Total Cost Predictability
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-dark-navy/55 text-lg leading-relaxed">
              We offer two engagement models so your financial outlays are always
              tied directly to validated architectural value.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Fixed Price */}
            <div className="rounded-brand-lg border-2 border-sky-cyan/30 bg-sky-cyan/5 p-8 flex flex-col gap-5">
              <div className="w-12 h-12 rounded-brand gradient-data flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark-navy">Milestone-Based Fixed Price</h3>
              <p className="text-dark-navy/60 leading-relaxed">
                Defined scope, defined cost, defined timeline. Payment is released
                at pre-agreed milestones after you verify the deliverable. Zero
                budget overruns — guaranteed.
              </p>
              <p className="text-sm font-semibold text-sky-cyan mt-auto">Best for: Well-defined projects with stable requirements</p>
            </div>
            {/* T&M */}
            <div className="rounded-brand-lg border border-cloud-gray bg-white p-8 flex flex-col gap-5 shadow-sm">
              <div className="w-12 h-12 rounded-brand bg-dark-navy/5 flex items-center justify-center">
                <svg className="w-6 h-6 text-dark-navy" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark-navy">Time & Materials (T&M)</h3>
              <p className="text-dark-navy/60 leading-relaxed">
                Flexible capacity billed on actual engineering hours consumed.
                Ideal for evolving requirements where the full scope cannot be
                locked upfront. Full transparency — you see every hour logged.
              </p>
              <p className="text-sm font-semibold text-dark-navy/40 mt-auto">Best for: Dynamic projects with evolving requirements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-cloud-gray/30 py-20 sm:py-28" id="smb-services">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-deep-cyan mb-3">Our Offerings</p>
            <h2 className="text-3xl font-bold tracking-tight text-dark-navy sm:text-4xl">
              Core Systems We Build
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-white rounded-brand-lg p-8 border border-cloud-gray/50 flex flex-col gap-5 transition-all duration-300 hover:shadow-lg hover:border-sky-cyan/30">
                <div className="w-11 h-11 rounded-brand bg-sky-cyan/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-deep-cyan" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    {s.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-dark-navy">{s.title}</h3>
                <p className="text-dark-navy/60 text-sm leading-relaxed">{s.desc}</p>
                <span className="text-xs font-semibold uppercase tracking-wider text-deep-cyan border border-deep-cyan/25 rounded-brand px-3 py-1.5 w-fit">
                  {s.model}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-dark-navy py-20" id="smb-cta">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to replace the spreadsheets?
          </h2>
          <p className="text-cloud-gray/60 mb-10 text-lg leading-relaxed">
            Start with a free systems audit. We&apos;ll identify your biggest
            operational bottlenecks and propose the most elegant fix.
          </p>
          <Link
            href="/contact"
            className="gradient-data rounded-brand-lg px-10 py-4 text-base font-semibold text-white inline-block transition-all duration-300 hover:shadow-xl hover:shadow-sky-cyan/25 hover:scale-[1.03]"
          >
            Request a Systems Audit
          </Link>
        </div>
      </section>
    </>
  );
}
