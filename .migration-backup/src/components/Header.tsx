"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const serviceTypes = [
  {
    id: "mvp-launchpad",
    title: "Tier I: Creator Launchpad",
    badge: "14-Day MVP",
    desc: "Rapid prototyping & startup productization",
    color: "#6855F0",
    href: "/services#mvp-launchpad",
  },
  {
    id: "smb-systems",
    title: "Tier II: SMB Systems Hub",
    badge: "Scale & Automation",
    desc: "Custom business platforms & Mobile Money APIs",
    color: "#29B5F6",
    href: "/services#smb-systems",
  },
  {
    id: "enterprise-gateway",
    title: "Tier III: Enterprise Gateway",
    badge: "SOC 2 Ready",
    desc: "Cloud architecture & high-scale microservices",
    color: "#8B74F8",
    href: "/services#enterprise-gateway",
  },
  {
    id: "mobile-engineering",
    title: "Mobile App Engineering",
    badge: "iOS & Android",
    desc: "Native cross-platform mobile app development",
    color: "#10B981",
    href: "/services#mobile-engineering",
  },
  {
    id: "fintech-payments",
    title: "Fintech & Payment APIs",
    badge: "Uganda & Global",
    desc: "MTN MoMo, Airtel Money, Stripe & M-Pesa",
    color: "#F59E0B",
    href: "/services#fintech-payments",
  },
];

const featuredCaseStudies = [
  { title: "East Africa MoMo Switch", metric: "3.8M Tx/day", tag: "Fintech" },
  { title: "Founder Creator SaaS", metric: "14-Day Launch", tag: "MVP" },
  { title: "Logistics Enterprise ERP", metric: "99.99% Uptime", tag: "Cloud" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const handleMouseEnter = (menuId: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  const handleNavigate = (href: string) => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    router.push(href);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#6855F0]/10 transition-all duration-300"
      id="main-header"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-8">
        {/* Logo & Brand Name */}
        <Link href="/" className="flex items-center gap-3 group" id="brand-link">
          <div className="relative w-9 h-9 rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-md">
            <Image
              src="/logo.png"
              alt="Langratia Software Engineering Studio Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="brand-wordmark text-[#1E1548] text-lg tracking-[0.18em] leading-tight">LANGRATIA</span>
            <span className="text-[9px] font-semibold tracking-wider text-[#6855F0] uppercase">Software Engineering</span>
          </div>
        </Link>

        {/* Desktop Navigation with Hover Popovers on Every Button */}
        <div className="hidden lg:flex lg:items-center lg:gap-1.5">
          {/* Home Link */}
          <Link
            href="/"
            className={`text-xs font-bold px-3.5 py-2 rounded-full transition-all duration-200 ${
              pathname === "/" ? "bg-[#6855F0] text-white shadow-sm" : "text-[#1E1548]/80 hover:text-[#1E1548] hover:bg-[#1E1548]/5"
            }`}
          >
            Home
          </Link>

          {/* Services Button with Mega Popover */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/services"
              className={`inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-full transition-all duration-200 ${
                pathname === "/services" || activeMenu === "services"
                  ? "bg-[#6855F0] text-white shadow-sm"
                  : "text-[#1E1548]/80 hover:text-[#1E1548] hover:bg-[#1E1548]/5"
              }`}
            >
              <span>Services</span>
              <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "services" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </Link>

            {activeMenu === "services" && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-96 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xl p-4 transition-all duration-300 animate-in fade-in slide-in-from-top-2 z-50"
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#E2E8F0]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#1E1548]/50">
                    Engineering Service Capabilities
                  </span>
                  <Link href="/services" onClick={() => setActiveMenu(null)} className="text-[11px] font-bold text-[#6855F0] hover:underline">
                    View Directory &rarr;
                  </Link>
                </div>

                <div className="flex flex-col gap-1">
                  {serviceTypes.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleNavigate(item.href)}
                      className="group/item flex items-start gap-3 p-2 rounded-xl hover:bg-[#F8FAFC] cursor-pointer transition-colors duration-150"
                    >
                      <span className="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: item.color }} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#1E1548] group-hover/item:text-[#6855F0]">
                            {item.title}
                          </span>
                          <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded bg-[#6855F0]/10 text-[#6855F0]">
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#1E1548]/60 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* About Popover Button */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/about"
              className={`inline-flex items-center gap-1 text-xs font-bold px-3.5 py-2 rounded-full transition-all duration-200 ${
                pathname === "/about" || activeMenu === "about"
                  ? "bg-[#6855F0] text-white shadow-sm"
                  : "text-[#1E1548]/80 hover:text-[#1E1548] hover:bg-[#1E1548]/5"
              }`}
            >
              <span>About</span>
              <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "about" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </Link>

            {activeMenu === "about" && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-2xl bg-white border border-[#E2E8F0] shadow-xl p-4 animate-in fade-in slide-in-from-top-2 z-50"
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#6855F0] bg-[#6855F0]/10 px-2.5 py-0.5 rounded-full inline-block mb-2">
                  Governance &amp; Discipline
                </span>
                <h4 className="text-sm font-bold text-[#1E1548] mb-1">Our Engineering Story</h4>
                <p className="text-xs text-[#1E1548]/70 leading-relaxed mb-3">
                  In-house Senior Architecture, 14-day Anti-Black Hole Sprints, and Kampala HQ global ops.
                </p>
                <div className="flex flex-col gap-1 mb-3 pt-2 border-t border-[#E2E8F0]">
                  <Link
                    href="/about"
                    onClick={() => setActiveMenu(null)}
                    className="text-xs font-bold text-[#1E1548] hover:text-[#6855F0] py-1 flex items-center justify-between"
                  >
                    <span>Philosophy &amp; Standards</span>
                    <span className="text-[#6855F0]">&rarr;</span>
                  </Link>
                  <Link
                    href="/faq"
                    onClick={() => setActiveMenu(null)}
                    className="text-xs font-bold text-[#1E1548] hover:text-[#6855F0] py-1 flex items-center justify-between"
                  >
                    <span>Engineering FAQs</span>
                    <span className="text-[#6855F0]">&rarr;</span>
                  </Link>
                </div>
                <button
                  onClick={() => handleNavigate("/about")}
                  className="w-full text-center rounded-xl bg-[#6855F0] text-white py-2 text-xs font-bold hover:bg-[#5b4be0] transition-colors"
                >
                  Explore About LANGRATIA &rarr;
                </button>
              </div>
            )}
          </div>

          {/* Creators Popover Button */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("creators")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/creators"
              className={`inline-flex items-center gap-1 text-xs font-bold px-3.5 py-2 rounded-full transition-all duration-200 ${
                pathname === "/creators" || activeMenu === "creators"
                  ? "bg-[#6855F0] text-white shadow-sm"
                  : "text-[#1E1548]/80 hover:text-[#1E1548] hover:bg-[#1E1548]/5"
              }`}
            >
              <span>Creators</span>
            </Link>

            {activeMenu === "creators" && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-2xl bg-white border border-[#E2E8F0] shadow-xl p-4 animate-in fade-in slide-in-from-top-2 z-50"
                onMouseEnter={() => handleMouseEnter("creators")}
                onMouseLeave={handleMouseLeave}
              >
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#6855F0] bg-[#6855F0]/10 px-2.5 py-0.5 rounded-full inline-block mb-2">
                  Tier I Launchpad
                </span>
                <h4 className="text-sm font-bold text-[#1E1548] mb-1">14-Day Startup MVP Delivery</h4>
                <p className="text-xs text-[#1E1548]/70 leading-relaxed mb-3">
                  Rapid production web &amp; mobile MVP engineering for founders. Zero tech debt out of the box.
                </p>
                <button
                  onClick={() => handleNavigate("/creators")}
                  className="w-full text-center rounded-xl bg-[#6855F0] text-white py-2 text-xs font-bold hover:bg-[#5b4be0] transition-colors"
                >
                  Explore Creator Tier &rarr;
                </button>
              </div>
            )}
          </div>

          {/* SMB Systems Popover Button */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("smb")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/smb"
              className={`inline-flex items-center gap-1 text-xs font-bold px-3.5 py-2 rounded-full transition-all duration-200 ${
                pathname === "/smb" || activeMenu === "smb"
                  ? "bg-[#6855F0] text-white shadow-sm"
                  : "text-[#1E1548]/80 hover:text-[#1E1548] hover:bg-[#1E1548]/5"
              }`}
            >
              <span>SMB Systems</span>
            </Link>

            {activeMenu === "smb" && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-2xl bg-white border border-[#E2E8F0] shadow-xl p-4 animate-in fade-in slide-in-from-top-2 z-50"
                onMouseEnter={() => handleMouseEnter("smb")}
                onMouseLeave={handleMouseLeave}
              >
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#29B5F6] bg-[#29B5F6]/10 px-2.5 py-0.5 rounded-full inline-block mb-2">
                  Tier II Systems Hub
                </span>
                <h4 className="text-sm font-bold text-[#1E1548] mb-1">Custom Operating Platforms</h4>
                <p className="text-xs text-[#1E1548]/70 leading-relaxed mb-3">
                  E-Commerce, Mobile Money integrations (MTN MoMo / Airtel Money), and automated workflow systems.
                </p>
                <button
                  onClick={() => handleNavigate("/smb")}
                  className="w-full text-center rounded-xl bg-[#29B5F6] text-white py-2 text-xs font-bold hover:bg-[#209dd9] transition-colors"
                >
                  Explore SMB Tier &rarr;
                </button>
              </div>
            )}
          </div>

          {/* Enterprise Popover Button */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("enterprise")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/enterprise"
              className={`inline-flex items-center gap-1 text-xs font-bold px-3.5 py-2 rounded-full transition-all duration-200 ${
                pathname === "/enterprise" || activeMenu === "enterprise"
                  ? "bg-[#6855F0] text-white shadow-sm"
                  : "text-[#1E1548]/80 hover:text-[#1E1548] hover:bg-[#1E1548]/5"
              }`}
            >
              <span>Enterprise</span>
            </Link>

            {activeMenu === "enterprise" && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-2xl bg-white border border-[#E2E8F0] shadow-xl p-4 animate-in fade-in slide-in-from-top-2 z-50"
                onMouseEnter={() => handleMouseEnter("enterprise")}
                onMouseLeave={handleMouseLeave}
              >
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#8B74F8] bg-[#8B74F8]/10 px-2.5 py-0.5 rounded-full inline-block mb-2">
                  Tier III Gateway
                </span>
                <h4 className="text-sm font-bold text-[#1E1548] mb-1">Cloud Architecture &amp; SOC 2</h4>
                <p className="text-xs text-[#1E1548]/70 leading-relaxed mb-3">
                  Dedicated senior architect capacity, microservices, and enterprise compliance governance.
                </p>
                <button
                  onClick={() => handleNavigate("/enterprise")}
                  className="w-full text-center rounded-xl bg-[#8B74F8] text-white py-2 text-xs font-bold hover:bg-[#775ee8] transition-colors"
                >
                  Explore Enterprise Tier &rarr;
                </button>
              </div>
            )}
          </div>

          {/* Case Studies Popover Button */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("case-studies")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/case-studies"
              className={`inline-flex items-center gap-1 text-xs font-bold px-3.5 py-2 rounded-full transition-all duration-200 ${
                pathname === "/case-studies" || activeMenu === "case-studies"
                  ? "bg-[#6855F0] text-white shadow-sm"
                  : "text-[#1E1548]/80 hover:text-[#1E1548] hover:bg-[#1E1548]/5"
              }`}
            >
              <span>Case Studies</span>
            </Link>

            {activeMenu === "case-studies" && (
              <div
                className="absolute top-full right-0 mt-2 w-80 rounded-2xl bg-white border border-[#E2E8F0] shadow-xl p-4 animate-in fade-in slide-in-from-top-2 z-50"
                onMouseEnter={() => handleMouseEnter("case-studies")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E2E8F0]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#1E1548]/50">
                    Production Track Record
                  </span>
                  <Link href="/case-studies" onClick={() => setActiveMenu(null)} className="text-[10px] font-bold text-[#6855F0] hover:underline">
                    All Blueprints &rarr;
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  {featuredCaseStudies.map((cs) => (
                    <div
                      key={cs.title}
                      onClick={() => handleNavigate("/case-studies")}
                      className="p-2 rounded-xl bg-[#F8FAFC] hover:bg-[#6855F0]/10 cursor-pointer transition-colors flex items-center justify-between text-xs"
                    >
                      <div>
                        <p className="font-bold text-[#1E1548]">{cs.title}</p>
                        <span className="text-[10px] text-[#6855F0] font-semibold">{cs.tag}</span>
                      </div>
                      <span className="text-[10px] font-bold text-[#1E1548]/60 bg-white px-2 py-1 rounded border border-[#E2E8F0]">
                        {cs.metric}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Start Project CTA Button with SLA Popover */}
          <div
            className="relative ml-2"
            onMouseEnter={() => handleMouseEnter("cta")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/contact"
              className="rounded-full px-5 py-2.5 text-xs font-bold text-white transition-all duration-200 hover:shadow-lg inline-block"
              style={{ background: "#6855F0", boxShadow: "0 4px 16px rgba(104,85,240,0.25)" }}
            >
              Start Your Project
            </Link>

            {activeMenu === "cta" && (
              <div
                className="absolute top-full right-0 mt-2 w-72 rounded-2xl bg-[#1E1548] text-white p-4 shadow-2xl animate-in fade-in slide-in-from-top-2 z-50"
                onMouseEnter={() => handleMouseEnter("cta")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center gap-2 text-[#29B5F6] text-xs font-bold mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#29B5F6] animate-ping" />
                  <span>48-Hour SLA Guarantee</span>
                </div>
                <p className="text-xs text-white/80 leading-relaxed mb-3">
                  Schedule a confidential scoping call. Custom architecture proposal &amp; mutual NDA included.
                </p>
                <button
                  onClick={() => handleNavigate("/contact")}
                  className="w-full rounded-xl bg-[#6855F0] hover:bg-[#5b4be0] text-white py-2 text-xs font-bold transition-colors"
                >
                  Schedule Scope Review Now &rarr;
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className="lg:hidden flex flex-col items-center justify-center gap-1.5 w-10 h-10 rounded-lg hover:bg-[#1E1548]/5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          <span
            className={`block h-0.5 w-6 bg-[#1E1548] transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#1E1548] transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#1E1548] transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
        id="mobile-menu"
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-2 border-t border-[#6855F0]/10 bg-white">
          <Link href="/" className="text-sm font-bold px-4 py-2 text-[#1E1548]" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>

          {/* Mobile Services Accordion */}
          <div className="flex flex-col gap-1 border-y border-[#E2E8F0] py-2 my-1">
            <div className="flex items-center justify-between px-4 py-1 text-xs font-extrabold uppercase text-[#6855F0]">
              <span>Services Directory</span>
              <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="text-[11px] underline">
                View All &rarr;
              </Link>
            </div>
            {serviceTypes.map((item) => (
              <div
                key={item.id}
                onClick={() => handleNavigate(item.href)}
                className="flex items-center justify-between p-2 rounded-lg text-xs font-semibold text-[#1E1548]/80 hover:bg-[#6855F0]/10 cursor-pointer"
              >
                <span>{item.title}</span>
                <span className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-[#6855F0]/10 text-[#6855F0]">
                  {item.badge}
                </span>
              </div>
            ))}
          </div>

          <Link href="/about" className="text-sm font-bold px-4 py-2 text-[#1E1548]" onClick={() => setMobileMenuOpen(false)}>
            About Us &amp; Philosophy
          </Link>
          <Link href="/creators" className="text-sm font-bold px-4 py-2 text-[#1E1548]" onClick={() => setMobileMenuOpen(false)}>
            Tier I: Creators
          </Link>
          <Link href="/smb" className="text-sm font-bold px-4 py-2 text-[#1E1548]" onClick={() => setMobileMenuOpen(false)}>
            Tier II: SMB Systems
          </Link>
          <Link href="/enterprise" className="text-sm font-bold px-4 py-2 text-[#1E1548]" onClick={() => setMobileMenuOpen(false)}>
            Tier III: Enterprise
          </Link>
          <Link href="/case-studies" className="text-sm font-bold px-4 py-2 text-[#1E1548]" onClick={() => setMobileMenuOpen(false)}>
            Case Studies
          </Link>

          <Link
            href="/contact"
            className="rounded-full px-5 py-3 text-center text-sm font-bold text-white mt-2"
            onClick={() => setMobileMenuOpen(false)}
            style={{ background: "#6855F0" }}
          >
            Start Your Project (48h SLA)
          </Link>
        </div>
      </div>
    </header>
  );
}
