const badges = [
  {
    icon: (
      <svg className="w-5 h-5 text-[#6855F0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 01.15 13.424a11.942 11.942 0 003.36 3.59l1.184.79a11.948 11.948 0 0010.614 0l1.184-.79a11.942 11.942 0 003.36-3.59A11.955 11.955 0 0020.402 6 11.96 11.96 0 0012 2.964z" />
      </svg>
    ),
    label: "SOC 2 Type II Ready",
    sub: "Security-first architecture",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#29B5F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
    label: "100% IP Ownership",
    sub: "Zero vendor lock-in",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#8B74F8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "14-Day Sprint Cadence",
    sub: "Anti-Black Hole methodology",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    label: "Senior-Led Engineering",
    sub: "No junior handoffs",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#F59E0B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    label: "Mobile Money APIs",
    sub: "MTN MoMo, Airtel, M-Pesa",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#6855F0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
      </svg>
    ),
    label: "Global Operations",
    sub: "Uganda · East Africa · Worldwide",
  },
];

export default function TrustBadges() {
  return (
    <section className="bg-white border-y border-[#E2E8F0] py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, i) => (
            <div key={i} className="flex flex-col items-center gap-2 text-center group">
              <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center group-hover:border-[#6855F0]/30 transition-colors duration-200">
                {badge.icon}
              </div>
              <p className="text-[11px] font-bold text-[#1E1548] leading-tight">{badge.label}</p>
              <p className="text-[10px] text-[#1E1548]/50 leading-tight">{badge.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
