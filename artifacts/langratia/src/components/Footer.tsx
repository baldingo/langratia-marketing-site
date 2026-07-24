import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#F8FAFC] text-[#1E1548] border-t border-[#E2E8F0]" id="main-footer">
      {/* Global Trust & Compliance Banner */}
      <div className="border-b border-[#E2E8F0] bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-[#29B5F6] uppercase tracking-wider">Security First</span>
              <p className="text-xs text-[#1E1548]/70">SOC 2 Type II Ready &amp; ISO 27001 Security Standards</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-[#8B74F8] uppercase tracking-wider">100% IP Ownership</span>
              <p className="text-xs text-[#1E1548]/70">Zero vendor lock-in. Full source code &amp; schema rights</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-[#29B5F6] uppercase tracking-wider">Transparent Governance</span>
              <p className="text-xs text-[#1E1548]/70">Anti-Black Hole Sprints with 14-day live clickable demos</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-[#8B74F8] uppercase tracking-wider">Top-Quartile Engineering</span>
              <p className="text-xs text-[#1E1548]/70">6x fewer design defects &amp; 70% faster time-to-market</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand Column */}
          <div className="flex flex-col gap-4 max-w-sm">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-xl overflow-hidden shadow-md">
                <img
                  src="/logo.png"
                  alt="Langratia Custom Software Engineering Studio Logo"
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="brand-wordmark text-[#1E1548] text-lg tracking-[0.18em]">LANGRATIA</span>
            </div>
            <p className="text-xs leading-relaxed text-[#1E1548]/70">
              LANGRATIA is a global software engineering firm building high-precision custom architecture for founders, SMBs, and enterprise institutions across Uganda, East Africa, North America, Europe, and worldwide.
            </p>
            <div className="flex flex-col gap-1 text-xs text-[#1E1548]/60 pt-2">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#29B5F6]" />
                <span className="font-semibold text-[#1E1548]">HQ: Kampala, Uganda (East Africa Hub)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#6855F0]" />
                <span>Global Distributed Engineering Operations</span>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="flex flex-wrap gap-12 sm:gap-16">
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E1548]/50">
                Services &amp; Tiers
              </h4>
              <Link href="/services" className="text-xs font-semibold text-[#6855F0] hover:underline transition-colors duration-200">
                All Engineering Services &rarr;
              </Link>
              <Link href="/creators" className="text-xs hover:text-[#6855F0] transition-colors duration-200">
                Tier I: Creator Launchpad
              </Link>
              <Link href="/smb" className="text-xs hover:text-[#6855F0] transition-colors duration-200">
                Tier II: SMB Systems Hub
              </Link>
              <Link href="/enterprise" className="text-xs hover:text-[#6855F0] transition-colors duration-200">
                Tier III: Enterprise Gateway
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E1548]/50">
                Company &amp; Governance
              </h4>
              <Link href="/about" className="text-xs hover:text-[#6855F0] transition-colors duration-200">
                About Us &amp; Philosophy
              </Link>
              <Link href="/case-studies" className="text-xs hover:text-[#6855F0] transition-colors duration-200">
                Case Studies &amp; Blueprints
              </Link>
              <Link href="/contact" className="text-xs hover:text-[#6855F0] transition-colors duration-200">
                Mutual NDA Proposal Request
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E1548]/50">
                Legal &amp; Support
              </h4>
              <Link href="/privacy" className="text-xs hover:text-[#6855F0] transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs hover:text-[#6855F0] transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/faq" className="text-xs hover:text-[#6855F0] transition-colors duration-200">
                Engineering FAQs
              </Link>
            </div>

            <div className="flex flex-col gap-3 max-w-xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E1548]/50">
                Client SLA Guarantee
              </h4>
              <p className="text-xs text-[#1E1548]/60 leading-relaxed">
                48-hour guaranteed response time on all project scoping requests with custom architecture proposals.
              </p>
              <Link
                href="/contact"
                className="mt-2 text-center rounded-xl bg-[#1E1548]/5 border border-[#1E1548]/20 px-4 py-2.5 text-xs font-bold text-[#1E1548] transition-all hover:bg-[#6855F0] hover:text-white hover:border-[#6855F0]"
              >
                Schedule Scope Review
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#E2E8F0] flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-xs text-[#1E1548]/50">
          <p>
            &copy; {new Date().getFullYear()} LANGRATIA. All rights reserved. Custom Software Built for Your Exact Scale.
          </p>
          <div className="flex items-center gap-4 text-[#1E1548]/40">
            <span>Engineering Excellence</span>
            <span>&middot;</span>
            <span>Strategic Transparency</span>
            <span>&middot;</span>
            <span>Radical Adaptability</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
