import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies & Engineering Blueprints | Langratia",
  description:
    "Explore production-proven software engineering case studies, enterprise architecture blueprints, and startup launch results across Uganda, East Africa, and global markets.",
  keywords: [
    "software engineering case studies Uganda",
    "custom software development blueprints",
    "fintech application case study East Africa",
    "enterprise software development portfolio",
    "scalable web platform case study",
  ],
  openGraph: {
    title: "Case Studies & Engineering Blueprints — Langratia",
    description:
      "Real metrics and production architecture built for startups, mid-market platforms, and enterprise institutions.",
  },
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
