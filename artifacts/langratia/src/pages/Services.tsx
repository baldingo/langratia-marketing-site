import { Link } from "wouter";

const mainServices = [
  {
    id: "mvp-launchpad",
    tier: "Tier I",
    badge: "14-Day Delivery",
    title: "Creator Launchpad & Startup MVP Development",
    subtitle: "Rapid productization for tech founders validating high-growth ideas.",
    description:
      "We turn detailed specs into production-ready web and mobile applications within 14-day Anti-Black Hole sprint cycles. Built with modern type-safe stack architecture without incurring tech debt.",
    features: [
      "Fullstack web or mobile application (Next.js / React Native)",
      "Database schema setup (PostgreSQL / Supabase / Prisma)",
      "Authentication & user access control",
      "Stripe / Mobile Money payment integration",
      "Automated CI/CD deployment pipelines",
    ],
    deliverables: "Production deployment, source code repository, documentation",
    link: "/creators",
    color: "#6855F0",
  },
  {
    id: "smb-systems",
    tier: "Tier II",
    badge: "Scale & Automation",
    title: "SMB Systems Hub & Custom Business Software",
    subtitle: "Digital platforms for companies scaling operations from 10 to 100+ employees.",
    description:
      "Operational software, inventory management, customer portals, and seamless East African payment integrations (MTN MoMo, Airtel Money, M-Pesa). Designed for reliability and clean maintainability.",
    features: [
      "Custom ERP & operational business management software",
      "East Africa Mobile Money APIs & international payment gateways",
      "Real-time inventory and supply chain tracking",
      "Custom CRM and client management portals",
      "Automated reporting and executive dashboards",
    ],
    deliverables: "Custom platform, API integrations, SLA support agreement",
    link: "/smb",
    color: "#29B5F6",
  },
  {
    id: "enterprise-gateway",
    tier: "Tier III",
    badge: "SOC 2 / ISO 27001 Ready",
    title: "Enterprise Gateway Architecture & Cloud Engineering",
    subtitle: "High-throughput infrastructure for institutions requiring zero downtime.",
    description:
      "Senior architectural oversight for mission-critical systems. We build scalable microservices, cloud native backend infrastructure, and security frameworks compliant with SOC 2 & ISO 27001 standards.",
    features: [
      "High-concurrency microservices (Go, Node.js, Kubernetes)",
      "Legacy system migration and API middleware layers",
      "SOC 2 Type II & ISO 27001 compliance preparedness",
      "Multi-region cloud deployment (AWS, Cloudflare, GCP)",
      "Senior architect code review and governance",
    ],
    deliverables: "Enterprise cloud architecture, security audit reports, dedicated SLA team",
    link: "/enterprise",
    color: "#8B74F8",
  },
  {
    id: "mobile-engineering",
    tier: "Specialized",
    badge: "iOS & Android",
    title: "Cross-Platform Mobile Application Engineering",
    subtitle: "Native app experiences for iOS and Android with East Africa fintech integration.",
    description:
      "Full-lifecycle React Native and Flutter development with biometric authentication, offline-first architecture, and deep integration with East African payment systems.",
    features: [
      "React Native & Flutter development",
      "MTN MoMo, Airtel Money & M-Pesa in-app payment flows",
      "Biometric authentication & push notifications",
      "Offline-first data synchronization",
      "App Store & Google Play deployment",
    ],
    deliverables: "Production mobile app, store deployment, source code & documentation",
    link: "/contact",
    color: "#10B981",
  },
  {
    id: "fintech-payments",
    tier: "Specialized",
    badge: "Uganda & Global",
    title: "Fintech & Payment API Engineering",
    subtitle: "Deep-native East African and global payment gateway integration.",
    description:
      "Specialized payment engineering for mobile money ecosystems, cross-border transactions, and regulatory-compliant financial platforms serving Uganda, East Africa, and global markets.",
    features: [
      "MTN Mobile Money OpenAPI integration",
      "Airtel Money Developer API",
      "Stripe, PayPal & Flutterwave global gateways",
      "M-Pesa Daraja API (Kenya & Tanzania)",
      "PCI DSS compliant transaction flows",
    ],
    deliverables: "Full payment integration, webhook systems, reconciliation tools",
    link: "/contact",
    color: "#F59E0B",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-20 sm:py-28 text-[#1E1548]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#6855F0] bg-[#6855F0]/10 px-3.5 py-1 rounded-full inline-block mb-4">
            Full Engineering Services Directory
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-[#1E1548] sm:text-6xl mb-6">
            Software Engineering Services
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-[#1E1548]/70 leading-relaxed">
            Custom software built to your exact scale — from 14-day MVPs to enterprise cloud architecture across Uganda, East Africa, and worldwide.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-[#F8FAFC] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            {mainServices.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden"
              >
                <div className="p-8 sm:p-10">
                  <div className="flex flex-col lg:flex-row lg:gap-12">
                    {/* Left */}
                    <div className="flex-1 mb-8 lg:mb-0">
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full text-white"
                          style={{ background: service.color }}
                        >
                          {service.tier}
                        </span>
                        <span
                          className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                          style={{ background: `${service.color}20`, color: service.color }}
                        >
                          {service.badge}
                        </span>
                      </div>
                      <h2 className="text-2xl font-extrabold text-[#1E1548] mb-2 leading-tight">{service.title}</h2>
                      <p className="text-sm font-semibold text-[#1E1548]/50 mb-4">{service.subtitle}</p>
                      <p className="text-sm text-[#1E1548]/70 leading-relaxed">{service.description}</p>
                    </div>

                    {/* Right */}
                    <div className="lg:w-80 shrink-0 flex flex-col gap-5">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1E1548]/40 block mb-3">
                          What's Included
                        </span>
                        <ul className="flex flex-col gap-2">
                          {service.features.map((f) => (
                            <li key={f} className="flex items-start gap-2 text-xs text-[#1E1548]/70">
                              <svg className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: service.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="border-t border-[#E2E8F0] pt-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1E1548]/40 block mb-1">
                          Deliverables Package
                        </span>
                        <p className="text-xs text-[#1E1548]/80 font-medium">
                          {service.deliverables}
                        </p>
                      </div>

                      <div className="border-t border-[#E2E8F0] pt-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1E1548]/40 block mb-1">
                          Geographic Availability
                        </span>
                        <p className="text-xs text-[#1E1548]/80 font-medium">
                          Uganda &middot; East Africa &middot; United States &middot; Europe &middot; Global Remote
                        </p>
                      </div>

                      <Link
                        href="/contact"
                        className="w-full text-center rounded-xl bg-[#6855F0]/10 hover:bg-[#6855F0] text-[#6855F0] hover:text-white border border-[#6855F0]/20 px-4 py-3 text-xs font-bold transition-all duration-200"
                      >
                        Request Custom Proposal &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E1548] tracking-tight mb-4">
            Need a Custom Architecture Proposal?
          </h2>
          <p className="text-base text-[#1E1548]/70 max-w-2xl mx-auto mb-8">
            Schedule a mutual NDA scoping session with our senior engineering team. Guaranteed 48-hour SLA proposal response.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-xl bg-[#6855F0] hover:bg-[#5b4be0] text-white px-8 py-4 text-base font-bold shadow-md transition-all duration-200"
          >
            Start Your Project Scope &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
