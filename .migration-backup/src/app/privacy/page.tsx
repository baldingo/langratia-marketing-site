import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Langratia Software Engineering",
  description:
    "Langratia Privacy Policy outlining client data protection, NDA standards, cookieless analytics compliance, and global data privacy standards.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-16 px-6 lg:px-8">
      <div className="mx-auto max-w-4xl bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-[#E2E8F0]">
        <div className="mb-8 border-b border-[#E2E8F0] pb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#6855F0] bg-[#6855F0]/10 px-3 py-1 rounded-full">
            Legal &amp; Trust Governance
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-[#1E1548] mt-3">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#1E1548]/60 mt-2">
            Last Updated: July 2026 &middot; Compliant with GDPR, CCPA &amp; East Africa Data Protection Directives
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-sm leading-relaxed text-[#1E1548]/80 space-y-6">
          <section>
            <h2 className="text-lg font-bold text-[#1E1548]">1. Commitment to Client Confidentiality</h2>
            <p>
              At LANGRATIA Software Engineering Studio ("LANGRATIA", "we", "us"), we operate under strict mutual confidentiality protocols. We understand that proprietary code, enterprise architectures, and startup business models represent core strategic IP. We treat all client data with defense-grade security protocols.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1E1548]">2. Data We Collect</h2>
            <p>
              We collect minimal information necessary to initiate scoping, engineering sprints, and technical consultations:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Contact Information:</strong> Name, work email address, phone number, and company name provided via our contact or scoping forms.</li>
              <li><strong>Technical Requirements:</strong> Architecture details, project specifications, and scoping notes shared during mutual NDA discovery calls.</li>
              <li><strong>Telemetry &amp; Usage Data:</strong> Anonymized performance metrics via Google Analytics to optimize page load speeds and overall UI performance.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1E1548]">3. Source Code &amp; Intellectual Property Privacy</h2>
            <p>
              LANGRATIA claims zero ownership over client repositories, proprietary algorithms, database schemas, or business logic developed during project engagements. All repositories hosted on private GitHub/GitLab organizations remain 100% owned and controlled by the client.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1E1548]">4. Data Retention &amp; Security Standards</h2>
            <p>
              We implement enterprise security controls across all internal communication and code storage environments, including mandatory multi-factor authentication (MFA), encrypted database connections (TLS 1.3), and zero third-party data monetization.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1E1548]">5. Your Rights</h2>
            <p>
              You reserve the right to request deletion of your contact records, request an audit of stored communication, or execute a formal bilateral Non-Disclosure Agreement (NDA) prior to technical discussions.
            </p>
          </section>

          <section className="pt-4 border-t border-[#E2E8F0]">
            <p className="text-xs text-[#1E1548]/60">
              For any privacy inquiries or formal NDA requests, reach out directly to our engineering compliance desk at{" "}
              <a href="mailto:privacy@langratia.com" className="text-[#6855F0] font-bold underline">
                privacy@langratia.com
              </a>.
            </p>
          </section>
        </div>

        <div className="mt-10 pt-6 border-t border-[#E2E8F0] flex justify-between items-center text-xs font-bold text-[#6855F0]">
          <Link href="/" className="hover:underline">
            &larr; Return to Home
          </Link>
          <Link href="/terms" className="hover:underline">
            View Terms of Service &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
