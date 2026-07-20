"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Creators", href: "/creators" },
  { label: "SMB", href: "/smb" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "ROI Tool", href: "/roi" },
  { label: "Case Studies", href: "/case-studies" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#6855F0]/10"
      id="main-header"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo & Brand Name */}
        <Link href="/" className="flex items-center gap-3 group" id="brand-link">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-110">
            <Image
              src="/logo.png"
              alt="Langratia logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="brand-wordmark text-[#0F172A] text-xl tracking-[0.18em]">LANGRATIA</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#0F172A]/70 transition-colors duration-200 hover:text-[#6855F0]"
              id={`nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-[12px] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
            id="nav-cta"
            style={{ background: "linear-gradient(135deg, #6855F0 0%, #29B5F6 100%)", boxShadow: "0 4px 16px rgba(104,85,240,0.25)" }}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="lg:hidden flex flex-col items-center justify-center gap-1.5 w-10 h-10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          <span
            className={`block h-0.5 w-6 bg-[#0F172A] transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#0F172A] transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#0F172A] transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        id="mobile-menu"
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-3 border-t border-[#6855F0]/10 bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-[#0F172A]/70 py-2 transition-colors duration-200 hover:text-[#6855F0]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-[12px] px-5 py-3 text-center text-sm font-semibold text-white mt-2 transition-all duration-300 hover:shadow-lg"
            onClick={() => setMobileMenuOpen(false)}
            style={{ background: "linear-gradient(135deg, #6855F0 0%, #29B5F6 100%)" }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
