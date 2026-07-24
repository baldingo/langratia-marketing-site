import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Software Engineering Services | Uganda, East Africa & Global | Langratia",
  description:
    "Explore Langratia's full spectrum of custom software engineering services: 14-day MVP development, enterprise cloud architecture, mobile apps, and Mobile Money integrations in Uganda, East Africa, and worldwide.",
  keywords: [
    "software engineering services Uganda",
    "custom software development services Kampala",
    "mobile app development services East Africa",
    "MVP development services",
    "enterprise software architecture",
    "mobile money API integration services",
    "cloud native software engineering",
  ],
  openGraph: {
    title: "Software Engineering Services — Langratia Studio",
    description:
      "Enterprise architecture, 14-day startup MVPs, custom web & mobile app engineering across Uganda, East Africa, and global markets.",
  },
};

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
    subtitle: "Native-quality mobile applications built for East Africa and global app stores.",
    description:
      "We design and engineer high-performance mobile apps with offline capability, secure biometric auth, push notifications, and seamless background sync across iOS and Android.",
    features: [
      "React Native & Flutter cross-platform development",
      "Offline-first state synchronization & local database caching",
      "Biometric security & encrypted storage",
      "Push notification service integration (FCM / APNs)",
      "App Store & Google Play submission governance",
    ],
    deliverables: "iOS & Android build binaries, store listing setup, source code",
    link: "/contact",
    color: "#10B981",
  },
  {
    id: "fintech-payments",
    tier: "Specialized",
    badge: "East Africa & Global Payments",
    title: "Fintech & Mobile Money API Engineering",
    subtitle: "Secure payment infrastructure for digital transactions.",
    description:
      "Integrate regional East African mobile money providers (MTN MoMo API, Airtel Money, M-Pesa, Flutterwave, Paystack) along with international card processors (Stripe, PayPal) for unified billing.",
    features: [
      "MTN MoMo API & Airtel Money payment collection and payouts",
      "M-Pesa C2B / B2C integration for Kenya & Tanzania",
      "Stripe & Credit Card gateway integrations",
      "Automated reconciliation ledger & webhook handling",
      "PCI-DSS compliant transaction data pipelines",
    ],
    deliverables: "Payment engine, webhook handler microservice, audit logs",
    link: "/contact",
    color: "#F59E0B",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#FAFAFA] border-b border-[#E2E8F0] py-24 sm:py-32 overflow-hidden" id="services-hero">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#6855F0]/10 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#6855F0] bg-[#6855F0]/10 px-4 py-1.5 rounded-full inline-block mb-6">
              Engineering Directory &middot; Uganda, East Africa &amp; Global
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#1E1548] tracking-tighter leading-[1.05]">
              Software Engineering <br />
              <span className="text-[#6855F0]">Services &amp; Solutions</span>
            </h1>
            <p className="mt-8 text-xl text-[#1E1548]/70 leading-relaxed">
              From 14-day startup MVP launches to complex enterprise cloud architectures and East African Mobile Money integrations, we engineer software built for your exact scale.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-[#6855F0] hover:bg-[#5b4be0] text-white px-8 py-4 text-base font-bold shadow-md transition-all duration-200"
              >
                Schedule Scope Review &rarr;
              </Link>
              <Link
                href="/case-studies"
                className="rounded-xl bg-white border border-[#E2E8F0] hover:bg-[#F8FAFC] text-[#1E1548] px-8 py-4 text-base font-bold shadow-sm transition-all duration-200"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services List */}
      <section className="py-24 bg-white" id="all-services-list">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {mainServices.map((service, idx) => (
              <div
                key={service.id}
                id={service.id}
                className="group relative rounded-3xl bg-[#FAFAFA] border border-[#E2E8F0] p-8 sm:p-12 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Left Column */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <span
                      className="text-xs font-extrabold uppercase tracking-wider text-white px-3 py-1 rounded-md"
                      style={{ backgroundColor: service.color }}
                    >
                      {service.tier}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1E1548]/60 bg-white border border-[#E2E8F0] px-3 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E1548] tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-base font-semibold text-[#6855F0] mt-1">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#1E1548]/70 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E1548]/50 mb-3">
                      Core Engineering Capabilities
                    </h4>
                    {service.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-3 text-sm text-[#1E1548]">
                        <svg className="w-5 h-5 text-[#6855F0] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#1E1548] hover:bg-[#6855F0] text-white px-6 py-3 text-sm font-bold transition-all duration-200"
                    >
                      <span>Explore Tier Blueprint</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Right Summary Card */}
                <div className="lg:col-span-5 bg-white border border-[#E2E8F0] p-8 rounded-2xl shadow-sm flex flex-col gap-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1E1548]/40 block mb-1">
                      Service Scope
                    </span>
                    <p className="text-lg font-bold text-[#1E1548]">
                      {service.badge}
                    </p>
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
