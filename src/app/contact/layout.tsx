import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Mutual NDA Project Scoping | Langratia",
  description:
    "Schedule a confidential project scoping call with Langratia. Guaranteed 48-hour SLA response for custom software engineering in Uganda, East Africa, and worldwide.",
  keywords: [
    "contact software engineering firm Uganda",
    "hire software developers Kampala",
    "custom software development proposal East Africa",
    "software engineering agency contact Kampala",
    "offshore tech team quote",
  ],
  openGraph: {
    title: "Contact & Project Scoping | Langratia Software Engineering Studio",
    description:
      "Request a 48-hour SLA architecture proposal and project scope review for custom software engineering.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
