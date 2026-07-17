import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROI Diagnostic Tool — Langratia",
  description:
    "Calculate the annual cost of operational inefficiency in your business and see the recoverable value a precision-engineered system can unlock.",
};

export default function ROILayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
