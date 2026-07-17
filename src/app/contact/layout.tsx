import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Langratia",
  description:
    "Start your project with Langratia. Send us your brief and receive a scoped proposal within 48 hours.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
