"use client";

import { useState } from "react";
import Link from "next/link";

interface FAQItem {
  id: string;
  category: "sprints" | "ip" | "payments" | "security";
  categoryLabel: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "anti-black-hole",
    category: "sprints",
    categoryLabel: "Sprint Delivery",
    question: "What is the '14-Day Anti-Black Hole Sprint' methodology?",
    answer:
      "Traditional agency development often disappears into a 'black hole' for months with zero visible updates. LANGRATIA breaks projects into 14-day production sprints. Every 14 days, you get a fully functional, live clickable demo with production code to test on your own device.",
  },
  {
    id: "ip-ownership",
    category: "ip",
    categoryLabel: "IP & Legal",
    question: "Who owns the source code and IP after the project is completed?",
    answer:
      "You own 100% of the source code, database schemas, UI assets, and architecture from day one. We transfer full administrator access to your private GitHub/GitLab organization upon final sprint sign-off. Zero vendor lock-in.",
  },
  {
    id: "momo-payments",
    category: "payments",
    categoryLabel: "Fintech & Payments",
    question: "Do you build custom Mobile Money (MTN MoMo & Airtel Money) integrations?",
    answer:
      "Yes! Based in Kampala, Uganda, we have deep native expertise in East African fintech switches, MTN MoMo OpenAPI, Airtel Money Developer APIs, M-Pesa, Flutterwave, and global Stripe/PayPal gateways for cross-border SaaS.",
  },
  {
    id: "soc2-security",
    category: "security",
    categoryLabel: "Security & SOC 2",
    question: "How do you ensure enterprise security and data privacy?",
    answer:
      "All systems are architected following SOC 2 Type II principles and ISO 27001 guidelines. We implement mandatory TLS 1.3 encryption in transit, AES-256 at rest, automated vulnerability scanning, and strict role-based access control.",
  },
  {
    id: "team-structure",
    category: "sprints",
    categoryLabel: "Sprint Delivery",
    question: "Who will actually build my software?",
    answer:
      "You work directly with senior software architects and lead fullstack TypeScript engineers. We do not offshore your code to junior contractors. Your project lead remains dedicated to your codebase throughout the contract.",
  },
  {
    id: "post-launch-warranty",
    category: "sprints",
    categoryLabel: "Sprint Delivery",
    question: "What happens after the software goes live?",
    answer:
      "Every project comes with a 30-day post-launch warranty included. We fix any critical bugs or deployment anomalies at zero charge, and offer optional retainer plans (Tier II & Tier III) for continuous feature updates.",
  },
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [openId, setOpenId] = useState<string | null>("anti-black-hole");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-16 px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#6855F0] bg-[#6855F0]/10 px-3.5 py-1.5 rounded-full">
            Knowledge Base &amp; Transparency
          </span>
          <h1 className="text-3xl lg:text-5xl font-extrabold text-[#1E1548] mt-4 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-[#1E1548]/70 mt-3 max-w-xl mx-auto leading-relaxed">
            Everything you need to know about LANGRATIA's engineering sprints, IP ownership, East African fintech APIs, and SLA guarantees.
          </p>

          {/* Search Input */}
          <div className="mt-8 max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search questions (e.g. MoMo, IP, 14-day sprint)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl bg-white border border-[#E2E8F0] px-5 py-3.5 pl-11 text-xs font-medium text-[#1E1548] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6855F0]"
            />
            <svg
              className="w-4 h-4 text-[#1E1548]/40 absolute left-4 top-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {[
              { id: "all", label: "All Questions" },
              { id: "sprints", label: "14-Day Sprints" },
              { id: "ip", label: "IP & Legal" },
              { id: "payments", label: "Fintech & MoMo" },
              { id: "security", label: "Security & SOC 2" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`text-xs font-bold px-4 py-2 rounded-full transition-all duration-200 ${
                  selectedCategory === tab.id
                    ? "bg-[#1E1548] text-white shadow-md"
                    : "bg-white text-[#1E1548]/70 hover:bg-[#1E1548]/5 border border-[#E2E8F0]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion FAQs */}
        <div className="flex flex-col gap-4">
          {filteredFaqs.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 text-center border border-[#E2E8F0]">
              <p className="text-xs text-[#1E1548]/60 font-semibold">No questions matching "{searchQuery}" found.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-3 text-xs font-bold text-[#6855F0] underline"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#6855F0]/10 text-[#6855F0]">
                        {faq.categoryLabel}
                      </span>
                      <h3 className="text-xs lg:text-sm font-bold text-[#1E1548]">
                        {faq.question}
                      </h3>
                    </div>
                    <svg
                      className={`w-4 h-4 text-[#1E1548]/50 transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? "rotate-180 text-[#6855F0]" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs leading-relaxed text-[#1E1548]/80 border-t border-[#E2E8F0]/50 animate-in fade-in">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* CTA Footer Card */}
        <div className="mt-12 bg-gradient-to-r from-[#1E1548] to-[#6855F0] rounded-3xl p-8 text-white text-center shadow-xl">
          <h3 className="text-lg lg:text-xl font-extrabold mb-2">Have a question not listed here?</h3>
          <p className="text-xs text-white/80 max-w-md mx-auto mb-6">
            Book a confidential scoping session with our senior engineering architects. We respond within 48 hours.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-xl bg-white text-[#1E1548] font-bold text-xs px-6 py-3 shadow-md hover:bg-white/90 transition-all duration-200"
          >
            Schedule 48-Hour Scope Call &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
