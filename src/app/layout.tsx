import type { Metadata } from "next";
import { Suspense } from "react";
import { Nunito, Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopProgressBar from "@/components/TopProgressBar";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Langratia — Custom Software Built for Your Exact Scale",
  description:
    "Langratia is a premium custom software engineering firm delivering enterprise-grade architecture with the agility of a startup. Engineering Excellence. Strategic Transparency. Radical Adaptability.",
  keywords: [
    "custom software development",
    "enterprise software",
    "MVP development",
    "software engineering",
    "Langratia",
  ],
  openGraph: {
    title: "Langratia — Custom Software Built for Your Exact Scale",
    description:
      "Premium custom software engineering. Enterprise-grade architecture with startup agility.",
    type: "website",
    locale: "en_US",
    siteName: "Langratia",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Suspense fallback={null}>
          <TopProgressBar />
        </Suspense>
        <Header />
        <main className="flex-1 pt-[60px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
