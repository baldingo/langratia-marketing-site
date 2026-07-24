import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Langratia Software Engineering",
  description:
    "Langratia Terms of Service detailing 100% IP transfer, 14-day anti-black hole sprint governance, mutual non-disclosure, and engineering SLA guarantees.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-16 px-6 lg:px-8">
      <div className="mx-auto max-w-4xl bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-[#E2E8F0]">
        <div className="mb-8 border-b border-[#E2E8F0] pb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#8B74F8] bg-[#8B74F8]/10 px-3 py-1 rounded-full">
            Engineering Governance
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-[#1E1548] mt-3">
            Terms of Service
          </h1>
          <p className="text-xs text-[#1E1548]/60 mt-2">
            Effective Date: July 2026 &middot; Global Engineering Master Services Agreement (MSA) Standard
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-sm leading-relaxed text-[#1E1548]/80 space-y-6">
          <section>
            <h2 className="text-lg font-bold text-[#1E1548]">1. Engineering Master Agreement Overview</h2>
            <p>
              These Terms of Service govern all engagement models with LANGRATIA Software Engineering Studio ("LANGRATIA"), including Creator Launchpad MVPs (Tier I), SMB Operating Platforms (Tier II), and Enterprise Architecture (Tier III). By engaging LANGRATIA, clients agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1E1548]">2. 100% Intellectual Property Ownership</h2>
            <p>
              Upon final milestone payment, 100% of all custom source code, software architecture, database models, user interface designs, and deployment scripts belong exclusively to the Client. LANGRATIA enforces zero vendor lock-in and provides full git repository ownership transfer.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1E1548]">3. 14-Day Anti-Black Hole Sprint Guarantee</h2>
            <p>
              LANGRATIA operates on strict 14-day sprint cycles. At the end of every 14 days, the client receives a live, interactive, clickable production build. If a sprint fails to deliver agreed milestone deliverables without written extension justification, the client retains the right to audit and pause payments.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1E1548]">4. Payment Terms &amp; Milestones</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Tier I (Creator MVP):</strong> 50% deposit upon scope sign-off; 50% upon 14-day production handover.</li>
              <li><strong>Tier II (SMB Systems):</strong> Milestone-based invoicing per 14-day sprint demo approval.</li>
              <li><strong>Tier III (Enterprise):</strong> Retainer or custom architecture milestones governed by a dedicated Master Services Agreement (MSA).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1E1548]">5. Warranty &amp; Post-Launch SLA</h2>
            <p>
              All production code shipped by LANGRATIA includes a 30-day post-launch warranty covering critical bug remediation and deployment support at zero extra charge.
            </p>
          </section>

          <section className="pt-4 border-t border-[#E2E8F0]">
            <p className="text-xs text-[#1E1548]/60">
              For custom contract modifications, institutional procurement requirements, or enterprise MSAs, contact{" "}
              <a href="mailto:legal@langratia.com" className="text-[#6855F0] font-bold underline">
                legal@langratia.com
              </a>.
            </p>
          </section>
        </div>

        <div className="mt-10 pt-6 border-t border-[#E2E8F0] flex justify-between items-center text-xs font-bold text-[#6855F0]">
          <Link href="/privacy" className="hover:underline">
            &larr; View Privacy Policy
          </Link>
          <Link href="/faq" className="hover:underline">
            Browse Engineering FAQs &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
