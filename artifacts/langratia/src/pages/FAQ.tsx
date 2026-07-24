import { useState } from "react";
import { Link } from "wouter";

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

const categories = [
  { id: "all", label: "All Questions" },
  { id: "sprints", label: "Sprint Delivery" },
  { id: "ip", label: "IP & Legal" },
  { id: "payments", label: "Fintech & Payments" },
  { id: "security", label: "Security & SOC 2" },
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
            Engineering FAQs
          </h1>
          <p className="text-sm text-[#1E1548]/60 mt-3 max-w-lg mx-auto leading-relaxed">
            Radical transparency is a core LANGRATIA principle. Every common question about our process, IP policy, and security is answered here.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1E1548]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input
            type="search"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#1E1548] outline-none focus:border-[#6855F0] focus:ring-2 focus:ring-[#6855F0]/20 placeholder:text-[#1E1548]/30"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? "bg-[#6855F0] text-white"
                  : "bg-white border border-[#E2E8F0] text-[#1E1548]/70 hover:border-[#6855F0]/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 text-[#1E1548]/50 text-sm">
              No questions match your search.
            </div>
          ) : (
            filteredFaqs.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden">
                <button
                  onClick={() => setOpenId(openId === item.id ? null : item.id)}
                  className="w-full flex items-start justify-between px-6 py-5 text-left gap-4"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#6855F0]">
                      {item.categoryLabel}
                    </span>
                    <span className="text-sm font-bold text-[#1E1548] leading-snug">{item.question}</span>
                  </div>
                  <svg
                    className={`w-4 h-4 text-[#1E1548]/40 shrink-0 mt-1 transition-transform duration-200 ${openId === item.id ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                {openId === item.id && (
                  <div className="px-6 pb-5 border-t border-[#E2E8F0] pt-4">
                    <p className="text-sm text-[#1E1548]/70 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#1E1548]/60 mb-4">Still have questions about our engineering process?</p>
          <Link
            href="/contact"
            className="inline-block rounded-xl px-7 py-3 text-xs font-bold text-white transition-all shadow-md hover:scale-[1.02]"
            style={{ background: "linear-gradient(135deg, #6855F0 0%, #29B5F6 100%)" }}
          >
            Ask Our Engineering Team →
          </Link>
        </div>
      </div>
    </div>
  );
}
