const techCategories = [
  {
    label: "Frontend",
    color: "#6855F0",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native"],
  },
  {
    label: "Backend",
    color: "#29B5F6",
    items: ["Node.js", "Go", "Express", "tRPC", "GraphQL"],
  },
  {
    label: "Database",
    color: "#8B74F8",
    items: ["PostgreSQL", "Redis", "Supabase", "Prisma", "Drizzle"],
  },
  {
    label: "Cloud & Infra",
    color: "#10B981",
    items: ["AWS", "Cloudflare", "GCP", "Docker", "Kubernetes"],
  },
  {
    label: "Fintech",
    color: "#F59E0B",
    items: ["MTN MoMo", "Airtel Money", "M-Pesa", "Stripe", "Flutterwave"],
  },
  {
    label: "Mobile",
    color: "#EF4444",
    items: ["React Native", "Expo", "Swift", "Kotlin", "Firebase"],
  },
];

export default function TechStackGrid() {
  return (
    <section className="py-20 bg-[#F8FAFC] border-t border-[#E2E8F0]" id="tech-stack">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#1E1548] tracking-tight">
            Our Engineering Stack
          </h2>
          <p className="mt-3 text-sm text-[#1E1548]/60 max-w-xl mx-auto">
            Modern, battle-tested technologies chosen for scalability and zero vendor lock-in.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {techCategories.map((cat) => (
            <div key={cat.label} className="flex flex-col gap-3">
              <h3
                className="text-[10px] font-extrabold uppercase tracking-widest"
                style={{ color: cat.color }}
              >
                {cat.label}
              </h3>
              <div className="flex flex-col gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-white border border-[#E2E8F0] text-[#1E1548]/80 hover:border-[#6855F0]/30 hover:text-[#6855F0] transition-colors duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
