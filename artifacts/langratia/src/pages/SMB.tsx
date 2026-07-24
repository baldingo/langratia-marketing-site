import { Link } from "wouter";

export default function SMBPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#F8FAFC] border-b border-[#E2E8F0]" id="smb-hero">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-[#29B5F6]/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#29B5F6] mb-4">
              Tier II — SMB Systems Hub
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#1E1548] sm:text-5xl lg:text-6xl leading-tight mb-6">
              Custom Software for <span className="text-[#29B5F6]">Growing Businesses</span>
            </h1>
            <p className="text-lg text-[#1E1548]/70 leading-relaxed mb-10">
              Operational platforms, East African payment integrations, and business automation systems for SMBs scaling from 10 to 100+ employees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="rounded-xl px-8 py-4 text-base font-semibold text-white text-center transition-all duration-300 hover:shadow-xl hover:scale-[1.03]"
                style={{ background: "#29B5F6" }}
              >
                Request SMB Proposal
              </Link>
              <Link
                href="/case-studies"
                className="rounded-xl border border-[#29B5F6]/30 bg-white px-8 py-4 text-base font-semibold text-[#29B5F6] text-center transition-all duration-300 hover:bg-[#29B5F6]/10"
              >
                See SMB Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#1E1548]">Built for East African Business Scale</h2>
            <p className="mt-3 text-sm text-[#1E1548]/60 max-w-xl mx-auto">
              Purpose-built systems that understand the unique operational and payment landscape of Uganda, Kenya, Tanzania, and broader East Africa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                color: "#29B5F6",
                title: "Mobile Money Integration",
                desc: "Native MTN MoMo OpenAPI, Airtel Money, and M-Pesa integration with automated reconciliation and webhook verification.",
              },
              {
                color: "#6855F0",
                title: "Custom ERP Systems",
                desc: "Business management platforms covering inventory, HR, finance, and operations — designed around your exact workflows.",
              },
              {
                color: "#8B74F8",
                title: "Customer Portals & CRMs",
                desc: "White-label client management systems with real-time dashboards, reporting, and automated communication flows.",
              },
              {
                color: "#10B981",
                title: "Inventory & Supply Chain",
                desc: "Real-time stock tracking, supplier management, and automated reorder systems integrated across multiple branches.",
              },
              {
                color: "#F59E0B",
                title: "Executive Dashboards",
                desc: "Data visualization and reporting tools giving leadership real-time visibility into business KPIs and financial metrics.",
              },
              {
                color: "#EF4444",
                title: "SLA Retainer Support",
                desc: "Ongoing engineering support with guaranteed response times for feature updates, bug fixes, and infrastructure scaling.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 hover:shadow-md transition-shadow">
                <div className="w-3 h-3 rounded-full mb-4" style={{ background: item.color }} />
                <h3 className="text-sm font-extrabold text-[#1E1548] mb-2">{item.title}</h3>
                <p className="text-xs text-[#1E1548]/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why LANGRATIA for SMBs */}
      <section className="py-20 bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-[#1E1548] mb-6">
                Why SMBs Choose LANGRATIA
              </h2>
              <div className="flex flex-col gap-6">
                {[
                  { stat: "850+", label: "Hours/Year Saved", desc: "Typical labor savings from our automated reconciliation systems." },
                  { stat: "100%", label: "Transaction Accuracy", desc: "Zero reconciliation errors across live mobile money deployments." },
                  { stat: "48h", label: "SLA Response", desc: "Guaranteed architecture proposal turnaround for all SMB tiers." },
                ].map((item) => (
                  <div key={item.label} className="flex gap-6 items-start">
                    <div className="shrink-0 text-3xl font-black text-[#29B5F6]">{item.stat}</div>
                    <div>
                      <p className="text-sm font-bold text-[#1E1548]">{item.label}</p>
                      <p className="text-xs text-[#1E1548]/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-8">
              <h3 className="text-lg font-extrabold text-[#1E1548] mb-4">Fintech Coverage</h3>
              <p className="text-sm text-[#1E1548]/60 mb-6 leading-relaxed">
                We are the only software studio in East Africa with native integration expertise across all major regional and global payment APIs.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {["MTN Mobile Money", "Airtel Money", "M-Pesa (Safaricom)", "Flutterwave", "Stripe", "PayPal", "Pesapal", "DPO Pay"].map((api) => (
                  <div key={api} className="flex items-center gap-2 text-xs font-semibold text-[#1E1548]/70 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg px-3 py-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#29B5F6] shrink-0" />
                    {api}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1E1548] mb-6">
            Ready to Automate Your Operations?
          </h2>
          <p className="text-[#1E1548]/70 mb-10 text-lg leading-relaxed">
            Tell us about your current operational challenges. We return a custom systems architecture within 48 hours.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-xl px-10 py-4 text-base font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-[1.03]"
            style={{ background: "#29B5F6" }}
          >
            Request SMB Architecture Proposal
          </Link>
        </div>
      </section>
    </>
  );
}
