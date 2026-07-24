import { Link } from "wouter";

const sections = [
  {
    title: "Engagement Terms and Scope",
    content: `All LANGRATIA engineering engagements are governed by a written Project Scope Agreement (PSA) executed before any development work begins. The PSA defines the precise deliverables, timeline, payment milestones, and technology stack for each sprint.

No engineering work begins without a fully executed PSA. Verbal or email-based agreements do not constitute binding project commitments. Any scope changes after PSA execution require a formal Change Order reviewed and approved by both parties.`,
  },
  {
    title: "Anti-Black Hole Sprint Protocol",
    content: `LANGRATIA's 14-day Anti-Black Hole Sprint Protocol is a mandatory delivery framework applied to all Tier I and Tier II engagements. Under this protocol:

• Every sprint period not to exceed 14 calendar days
• Each sprint must close with a live, clickable staging deployment available for client review
• Sprints that fail to produce a functional, testable output are considered incomplete regardless of hours logged
• Clients retain the right to review and reject sprint outputs before the next sprint begins`,
  },
  {
    title: "Intellectual Property and Ownership",
    content: `Upon full payment of each project milestone, LANGRATIA transfers complete intellectual property rights to the client including:

• All custom source code (frontend, backend, mobile)
• Database schemas and migration scripts
• API integration documentation
• Deployment configurations and CI/CD pipeline definitions
• Design assets created specifically for the project

LANGRATIA retains no license, ownership, or sub-licensing rights to client-specific intellectual property after final IP transfer.`,
  },
  {
    title: "Payment and Milestone Terms",
    content: `All projects are structured around milestone-based payments aligned with sprint deliverables. Payment terms are defined in the PSA and typically include:

• Milestone 1: Project initiation fee (covers architecture scoping and environment setup)
• Milestone 2+: Per-sprint delivery payments upon client acceptance of sprint output
• Final Milestone: IP transfer payment upon project completion and final sign-off

Late payments beyond 14 days of invoice date may result in sprint suspension. LANGRATIA is not liable for project delays caused by client payment delays.`,
  },
  {
    title: "30-Day Post-Launch Warranty",
    content: `All completed projects include a 30-day post-launch warranty covering:

• Critical production bugs causing application downtime or data integrity issues
• Security vulnerabilities introduced by LANGRATIA code (not third-party services)
• Deployment failures directly attributable to LANGRATIA infrastructure configurations

The warranty does not cover issues introduced by client-side code changes, third-party API changes, or scope modifications made after final sign-off.`,
  },
  {
    title: "Limitation of Liability",
    content: `LANGRATIA's total liability for any project shall not exceed the total fees paid by the client for that specific engagement. We are not liable for indirect, incidental, or consequential damages including lost revenue, data loss, or business interruption.

Clients are responsible for maintaining independent backups of all project data and ensuring their own disaster recovery procedures are in place.`,
  },
  {
    title: "Governing Law",
    content: `These terms and all LANGRATIA engineering engagements are governed by the laws of the Republic of Uganda. Disputes that cannot be resolved amicably within 30 days shall be submitted to arbitration under the Arbitration and Conciliation Act of Uganda.`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero */}
      <section className="bg-white border-b border-[#E2E8F0] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#6855F0] bg-[#6855F0]/10 px-3.5 py-1 rounded-full inline-block mb-4">
            Legal &amp; Compliance
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1E1548] tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-[#1E1548]/60">
            Last updated: January 2026 &middot; Effective for all LANGRATIA engineering engagements
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-8 sm:p-12 shadow-sm">
            <p className="text-sm text-[#1E1548]/70 leading-relaxed mb-8">
              These Terms of Service govern all engineering engagements and use of the LANGRATIA website and services. By submitting a project proposal request or entering into a Project Scope Agreement, you agree to these terms.
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

          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-block rounded-xl px-6 py-3 text-xs font-bold text-white transition-all shadow-sm hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #6855F0 0%, #29B5F6 100%)" }}
            >
              Contact Us for Legal Inquiries
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
