"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Creators", href: "/creators" },
  { label: "SMB Systems", href: "/smb" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "Case Studies", href: "/case-studies" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
              alt="Langratia logo"
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

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-bold px-3.5 py-2 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-[#6855F0] text-white shadow-sm"
                    : "text-[#1E1548]/80 hover:text-[#6855F0] hover:bg-[#6855F0]/10"
                }`}
                id={`nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-full px-5 py-2.5 text-xs font-bold text-white transition-all duration-200 hover:shadow-lg ml-3"
            id="nav-cta"
            style={{ background: "linear-gradient(135deg, #6855F0 0%, #29B5F6 100%)", boxShadow: "0 4px 16px rgba(104,85,240,0.25)" }}
          >
            Start Your Project
          </Link>
        </div>

        {/* Mobile Hamburger */}
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
        className={`lg:hidden overflow-hidden transition-all duration-200 ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        id="mobile-menu"
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-2 border-t border-[#6855F0]/10 bg-white">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-bold px-4 py-2.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-[#6855F0] text-white"
                    : "text-[#1E1548]/80 hover:text-[#6855F0] hover:bg-[#6855F0]/10"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-full px-5 py-3 text-center text-sm font-bold text-white mt-2 transition-all duration-200 hover:shadow-lg"
            onClick={() => setMobileMenuOpen(false)}
            style={{ background: "linear-gradient(135deg, #6855F0 0%, #29B5F6 100%)" }}
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </header>
  );
}
