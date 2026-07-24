import { Link } from "wouter";

const sections = [
  {
    title: "Information We Collect",
    content: `We collect information you provide directly to us when you fill out our Project Scoping Form, request a proposal, or contact our engineering team. This includes your name, business email address, company name, project requirements, and whether you request a mutual NDA.

We may also collect technical information about your project such as architectural requirements, technology stack preferences, and timeline constraints. We do not collect financial payment information directly — all payment processing is handled through secure third-party processors.`,
  },
  {
    title: "How We Use Your Information",
    content: `Your information is used exclusively to:
• Respond to your engineering proposal request within our 48-hour SLA
• Prepare custom architectural proposals tailored to your project
• Execute mutual NDAs when requested
• Communicate project scope, timelines, and deliverables
• Improve our scoping and delivery processes

We never sell, rent, or share your personal or project information with third parties for marketing purposes.`,
  },
  {
    title: "NDA and Confidentiality Protocol",
    content: `When you request a Mutual Non-Disclosure Agreement (NDA), LANGRATIA executes a bilateral NDA before reviewing any confidential project details, source code, proprietary data, or business logic. All NDA communications are handled directly between senior architects and client legal contacts.

Project details shared during scoping are treated as strictly confidential regardless of whether a formal NDA has been executed.`,
  },
  {
    title: "IP Ownership and Source Code",
    content: `Upon project completion and final milestone sign-off, 100% of custom source code, database schemas, UI assets, and architectural documentation are transferred to your private GitHub/GitLab organization. LANGRATIA retains no ownership, license, or rights to your custom-built software.

We may retain anonymized architectural patterns or engineering approaches as general internal knowledge, but never in a form that identifies your project, organization, or proprietary business logic.`,
  },
  {
    title: "Data Security",
    content: `We implement SOC 2 Type II aligned security practices for all client data:
• All communications are encrypted in transit using TLS 1.3
• Project documents and communications are stored with AES-256 encryption at rest
• Access to client data is restricted to the assigned engineering team under RBAC controls
• We conduct regular security audits of our internal systems and tools`,
  },
  {
    title: "Contact Us",
    content: `For privacy inquiries, NDA requests, or data deletion requests, contact our engineering team through the Contact page. We respond to all privacy requests within 48 hours.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero */}
      <section className="bg-white border-b border-[#E2E8F0] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#6855F0] bg-[#6855F0]/10 px-3.5 py-1 rounded-full inline-block mb-4">
            Legal &amp; Compliance
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1E1548] tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#1E1548]/60">
            Last updated: January 2026 &middot; Effective for all LANGRATIA client engagements
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-8 sm:p-12 shadow-sm">
            <div className="prose prose-sm max-w-none">
              <p className="text-sm text-[#1E1548]/70 leading-relaxed mb-8">
                LANGRATIA (&quot;we&quot;, &quot;our&quot;, or &quot;the Studio&quot;) is committed to protecting the privacy and confidentiality of our clients and website visitors. This Privacy Policy explains how we collect, use, and protect information submitted through our website and engineering engagement process.
              </p>

              <div className="flex flex-col gap-10">
                {sections.map((section, i) => (
                  <div key={section.title}>
                    <h2 className="text-lg font-extrabold text-[#1E1548] mb-3 flex items-center gap-3">
                      <span className="text-[#6855F0] font-black text-sm">{String(i + 1).padStart(2, "0")}.</span>
                      {section.title}
                    </h2>
                    <div className="text-sm text-[#1E1548]/70 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-block rounded-xl px-6 py-3 text-xs font-bold text-white transition-all shadow-sm hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #6855F0 0%, #29B5F6 100%)" }}
            >
              Contact Our Team for Privacy Requests
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
