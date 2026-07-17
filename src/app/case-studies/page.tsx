import Link from "next/link";

export const metadata = {
  title: "Case Studies — Langratia",
  description:
    "Real-world problem → process → transformation stories from our engineering portfolio.",
};

const placeholderCases = [
  {
    tier: "Creator",
    tierColor: "text-electric-indigo",
    badgeBg: "bg-primary-purple/10",
    title: "14-Day E-Commerce MVP for Fashion Startup",
    problem: "A solo founder needed a shoppable digital storefront before a critical investor pitch — with no technical background to evaluate agencies.",
    process: "We scoped, designed, and deployed a full Stripe-integrated storefront with mobile-first UX in one 14-day sprint.",
    outcome: "Founder secured seed funding at the pitch. Storefront went live with zero post-launch defects.",
    tags: ["Next.js", "Stripe", "14-Day MVP"],
  },
  {
    tier: "SMB",
    tierColor: "text-deep-cyan",
    badgeBg: "bg-sky-cyan/10",
    title: "Mobile Money Integration for Regional Retailer",
    problem: "A 45-person retail chain was processing mobile money payments manually — costing 3+ hours of reconciliation per day.",
    process: "We built a custom MTN MoMo integration embedded into their existing POS workflow with a live reconciliation dashboard.",
    outcome: "Reconciliation time dropped from 3 hours to under 10 minutes daily. Zero transaction errors in 6 months.",
    tags: ["MTN MoMo", "POS Integration", "Dashboard"],
  },
  {
    tier: "Enterprise",
    tierColor: "text-dark-navy",
    badgeBg: "bg-dark-navy/8",
    title: "ERP Migration for Regional Financial Institution",
    problem: "A financial institution was running critical operations on a legacy system with no audit trail — a direct compliance risk.",
    process: "Dedicated team of 4 architects over 6 months. Full data migration, API layer, and SOC 2-compliant audit logging.",
    outcome: "Full compliance achieved. 100% data integrity. System now processes 10x the transaction volume of the legacy system.",
    tags: ["ERP", "SOC 2", "API Architecture", "Migration"],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-navy py-20 sm:py-28" id="case-studies-hero">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-cyan mb-4">
            Authority Engine
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-6">
            Problem. Process. Transformation.
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-cloud-gray/70 leading-relaxed">
            Real engineering stories from our portfolio — each one a demonstration
            of precision architecture solving a concrete business challenge.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Case Study Cards */}
      <section className="bg-white py-20 sm:py-28" id="case-studies-grid">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-10">
            {placeholderCases.map((c, i) => (
              <article
                key={i}
                className="rounded-brand-lg border border-cloud-gray bg-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-cloud-gray/80 group"
                id={`case-study-${i + 1}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Left: Meta */}
                  <div className="border-b lg:border-b-0 lg:border-r border-cloud-gray p-8 flex flex-col gap-4">
                    <span className={`text-xs font-bold uppercase tracking-wider ${c.tierColor} ${c.badgeBg} px-3 py-1.5 rounded-brand w-fit`}>
                      {c.tier}
                    </span>
                    <h2 className="text-lg font-bold text-dark-navy leading-snug group-hover:text-primary-purple transition-colors duration-300">
                      {c.title}
                    </h2>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {c.tags.map((tag) => (
                        <span key={tag} className="text-xs text-dark-navy/50 border border-cloud-gray rounded-brand px-2.5 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="lg:col-span-2 p-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="flex flex-col gap-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-dark-navy/30">Problem</p>
                      <p className="text-sm text-dark-navy/70 leading-relaxed">{c.problem}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-dark-navy/30">Process</p>
                      <p className="text-sm text-dark-navy/70 leading-relaxed">{c.process}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-primary-purple">Outcome</p>
                      <p className="text-sm text-dark-navy leading-relaxed font-medium">{c.outcome}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* More coming soon note */}
          <div className="mt-16 text-center rounded-brand-lg border border-dashed border-cloud-gray p-12">
            <p className="text-dark-navy/40 text-sm">
              More case studies are being documented. Check back soon.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-navy py-20" id="case-studies-cta">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to become our next case study?
          </h2>
          <Link
            href="/contact"
            className="gradient-action rounded-brand-lg px-10 py-4 text-base font-semibold text-white inline-block transition-all duration-300 hover:shadow-xl hover:shadow-primary-purple/30 hover:scale-[1.03]"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
