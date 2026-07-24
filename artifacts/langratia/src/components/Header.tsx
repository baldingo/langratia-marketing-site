import { useState, useRef } from "react";
import { Link, useLocation } from "wouter";

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
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [pathname, navigate] = useLocation();

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
    navigate(href);
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
            <img
              src="/logo.png"
              alt="Langratia Software Engineering Studio Logo"
              className="object-contain w-full h-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="brand-wordmark text-[#1E1548] text-lg tracking-[0.18em] leading-tight">LANGRATIA</span>
            <span className="text-[9px] font-semibold tracking-wider text-[#6855F0] uppercase">Software Engineering</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-1.5">
          <Link
            href="/"
            className={`text-xs font-bold px-3.5 py-2 rounded-full transition-all duration-200 ${
              pathname === "/" ? "bg-[#6855F0] text-white shadow-sm" : "text-[#1E1548]/80 hover:text-[#1E1548] hover:bg-[#1E1548]/5"
            }`}
          >
            Home
          </Link>

          {/* Services Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`text-xs font-bold px-3.5 py-2 rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                pathname?.startsWith("/services") ? "bg-[#6855F0] text-white" : "text-[#1E1548]/80 hover:text-[#1E1548] hover:bg-[#1E1548]/5"
              }`}
            >
              Services
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${activeMenu === "services" ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {activeMenu === "services" && (
              <div className="absolute top-full left-0 mt-1.5 w-[480px] bg-white border border-[#E2E8F0] rounded-2xl shadow-2xl p-4 z-50">
                <div className="grid grid-cols-1 gap-1">
                  {serviceTypes.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavigate(item.href)}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-[#6855F0]/5 cursor-pointer text-left transition-colors"
                    >
                      <div>
                        <p className="text-xs font-bold text-[#1E1548]">{item.title}</p>
                        <p className="text-[11px] text-[#1E1548]/60 mt-0.5">{item.desc}</p>
                      </div>
                      <span
                        className="text-[9px] font-extrabold px-2 py-1 rounded-full ml-2 shrink-0"
                        style={{ background: `${item.color}20`, color: item.color }}
                      >
                        {item.badge}
                      </span>
                    </button>
                  ))}
                </div>
                <div className="mt-2 pt-2 border-t border-[#E2E8F0]">
                  <button
                    onClick={() => handleNavigate("/services")}
                    className="text-xs font-bold text-[#6855F0] hover:underline"
                  >
                    View All Engineering Services →
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* About Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`text-xs font-bold px-3.5 py-2 rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                pathname === "/about" ? "bg-[#6855F0] text-white" : "text-[#1E1548]/80 hover:text-[#1E1548] hover:bg-[#1E1548]/5"
              }`}
            >
              About
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${activeMenu === "about" ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {activeMenu === "about" && (
              <div className="absolute top-full left-0 mt-1.5 w-80 bg-white border border-[#E2E8F0] rounded-2xl shadow-2xl p-4 z-50">
                <div className="grid grid-cols-1 gap-1">
                  {[
                    { label: "About Us & Philosophy", href: "/about" },
                    { label: "Case Studies & Blueprints", href: "/case-studies" },
                    { label: "Engineering FAQs", href: "/faq" },
                  ].map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleNavigate(item.href)}
                      className="text-left p-3 rounded-xl hover:bg-[#6855F0]/5 text-xs font-bold text-[#1E1548] transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Tier Links */}
          {[
            { label: "Creators", href: "/creators" },
            { label: "SMB", href: "/smb" },
            { label: "Enterprise", href: "/enterprise" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-xs font-bold px-3.5 py-2 rounded-full transition-all duration-200 ${
                pathname === item.href ? "bg-[#6855F0] text-white" : "text-[#1E1548]/80 hover:text-[#1E1548] hover:bg-[#1E1548]/5"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="ml-2 rounded-full bg-[#6855F0] text-white px-5 py-2.5 text-xs font-bold transition-all duration-200 hover:bg-[#5b4be0] shadow-sm hover:shadow-md"
          >
            Start Project (48h SLA)
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-[#1E1548] transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#1E1548] transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#1E1548] transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E2E8F0] px-6 pb-4 shadow-xl">
          <div className="flex flex-col gap-1 border-y border-[#E2E8F0] py-2 my-1">
            <div className="flex items-center justify-between px-4 py-1 text-xs font-extrabold uppercase text-[#6855F0]">
              <span>Services Directory</span>
              <button onClick={() => handleNavigate("/services")} className="text-[11px] underline">
                View All &rarr;
              </button>
            </div>
            {serviceTypes.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.href)}
                className="flex items-center justify-between p-2 rounded-lg text-xs font-semibold text-[#1E1548]/80 hover:bg-[#6855F0]/10 cursor-pointer text-left"
              >
                <span>{item.title}</span>
                <span className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-[#6855F0]/10 text-[#6855F0]">
                  {item.badge}
                </span>
              </button>
            ))}
          </div>

          {[
            { label: "About Us & Philosophy", href: "/about" },
            { label: "Tier I: Creators", href: "/creators" },
            { label: "Tier II: SMB Systems", href: "/smb" },
            { label: "Tier III: Enterprise", href: "/enterprise" },
            { label: "Case Studies", href: "/case-studies" },
          ].map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavigate(item.href)}
              className="block text-sm font-bold px-4 py-2 text-[#1E1548] text-left w-full"
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={() => handleNavigate("/contact")}
            className="w-full rounded-full px-5 py-3 text-center text-sm font-bold text-white mt-2"
            style={{ background: "#6855F0" }}
          >
            Start Your Project (48h SLA)
          </button>
        </div>
      )}
    </header>
  );
}
