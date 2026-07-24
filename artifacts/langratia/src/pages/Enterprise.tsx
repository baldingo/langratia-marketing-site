import { Link } from "wouter";

export default function EnterprisePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1E1548] text-white" id="enterprise-hero">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#8B74F8]/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#29B5F6]/15 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-36 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#8B74F8] mb-4">
              Tier III — Enterprise Gateway
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-tight mb-6">
              Mission-Critical Cloud Architecture for{" "}
              <span className="text-[#8B74F8]">Zero-Downtime Systems</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-10">
              Senior architectural oversight for enterprise institutions requiring SOC 2 compliance, high-throughput microservices, and cloud infrastructure with zero vendor lock-in.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="rounded-xl px-8 py-4 text-base font-semibold text-white text-center transition-all duration-300 hover:shadow-xl hover:scale-[1.03]"
                style={{ background: "linear-gradient(135deg, #8B74F8 0%, #6855F0 100%)" }}
              >
                Request Technical Capacity Review
              </Link>
              <Link
                href="/case-studies"
                className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white text-center transition-all duration-300 hover:bg-white/20"
              >
                See Enterprise Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="bg-white py-20 border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#1E1548]">Enterprise Security & Compliance</h2>
            <p className="mt-3 text-sm text-[#1E1548]/60 max-w-xl mx-auto">
              Every enterprise engagement is designed for regulatory compliance from the first line of code.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { badge: "SOC 2 Type II", color: "#8B74F8", desc: "Immutable audit trails, access logging, and security controls meeting AICPA Trust Service Criteria." },
              { badge: "ISO 27001", color: "#6855F0", desc: "Information Security Management Systems aligned with international ISO/IEC 27001 standards." },
              { badge: "TLS 1.3 + AES-256", color: "#29B5F6", desc: "Mandatory encryption in transit (TLS 1.3) and at rest (AES-256) across all data stores and APIs." },
              { badge: "RBAC & Zero Trust", color: "#10B981", desc: "Role-Based Access Control with Zero Trust Network architecture for all internal service communications." },
            ].map((item) => (
              <div key={item.badge} className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6">
                <span
                  className="inline-block text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full text-white mb-3"
                  style={{ background: item.color }}
                >
                  {item.badge}
                </span>
                <p className="text-xs text-[#1E1548]/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-extrabold text-[#1E1548] mb-6">
                What Enterprise Gateway Includes
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  { title: "High-Concurrency Microservices", desc: "Go and Node.js microservices architected for horizontal scaling with Kubernetes orchestration." },
                  { title: "Legacy System Migration", desc: "API middleware layers and phased migration protocols for transitioning off monolithic legacy systems." },
                  { title: "Multi-Region Cloud Deployment", desc: "Active-active deployments across AWS, Cloudflare Workers, and GCP for geographic redundancy." },
                  { title: "Senior Architect Code Review", desc: "Dedicated senior architect governance across all sprint deliverables with mandatory security review gates." },
                  { title: "30-Day Post-Launch Warranty", desc: "Extended SLA warranty covering critical system anomalies and security incidents post-deployment." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="mt-1 w-5 h-5 rounded-full bg-[#8B74F8]/15 flex items-center justify-center shrink-0">
                      <span className="w-2 h-2 rounded-full bg-[#8B74F8]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#1E1548]">{item.title}</p>
                      <p className="text-xs text-[#1E1548]/60 leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-8">
              <h3 className="text-lg font-extrabold text-[#1E1548] mb-6">Enterprise Tech Stack</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Go (Golang)", "Node.js", "Kubernetes", "Docker",
                  "AWS ECS/EKS", "Cloudflare Workers", "PostgreSQL", "Redis",
                  "Kafka", "gRPC", "Prometheus", "Grafana",
                ].map((tech) => (
                  <div key={tech} className="flex items-center gap-2 text-xs font-semibold text-[#1E1548]/70 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg px-3 py-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B74F8] shrink-0" />
                    {tech}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-[#E2E8F0]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-black text-[#8B74F8]">99.99%</span>
                  <span className="text-xs text-[#1E1548]/60">Target uptime SLA for enterprise deployments</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black text-[#6855F0]">10x</span>
                  <span className="text-xs text-[#1E1548]/60">Throughput improvement on legacy system migrations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anti-Black Hole for Enterprise */}
      <section className="bg-white py-20 border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#1E1548] mb-8">
            Anti-Black Hole Protocol — At Enterprise Scale
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Change Order Protocol",
                desc: "No unbudgeted scope additions — every feature change triggers an immediate cost/timeline impact review.",
              },
              {
                title: "Live Demo Every Sprint",
                desc: "Every 1–2 week sprint closes with a clickable, live demonstration of completed functionality. You validate before we build further.",
              },
              {
                title: "Institutional Knowledge Lock",
                desc: "In-house architects hold the full system context. If a contractor rotates out, the project never misses a beat — no knowledge drain.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0] flex flex-col gap-4">
                <div className="w-2 h-8 rounded-full bg-[#8B74F8]" />
                <h3 className="text-lg font-bold text-[#1E1548]">{item.title}</h3>
                <p className="text-sm text-[#1E1548]/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8FAFC] py-20 border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1E1548] mb-6">
            Let&apos;s discuss your infrastructure requirements
          </h2>
          <p className="text-[#1E1548]/70 mb-10 text-lg leading-relaxed">
            Enterprise engagements begin with a Technical Capacity Review — a structured discovery session where we map your architecture needs to an optimal team and delivery model.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-xl px-10 py-4 text-base font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-[1.03]"
            style={{ background: "linear-gradient(135deg, #8B74F8 0%, #6855F0 100%)" }}
          >
            Request Technical Capacity Review
          </Link>
        </div>
      </section>
    </>
  );
}
