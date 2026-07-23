import type { Metadata } from "next";
import { Nunito, Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
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
  metadataBase: new URL("https://langratia.com"),
  title: {
    default: "Langratia — Custom Software Engineering Studio | Uganda, East Africa & Global",
    template: "%s | Langratia — Software Engineering",
  },
  description:
    "Langratia is a premier software engineering studio delivering custom enterprise architecture, high-scale web & mobile applications, and MVP development. Headquartered in Kampala, Uganda, powering businesses across East Africa and worldwide with radical transparency.",
  applicationName: "Langratia",
  authors: [{ name: "Langratia Engineering Team", url: "https://langratia.com" }],
  generator: "Next.js",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  keywords: [
    // Uganda & East Africa SEO Keywords
    "software development agency Uganda",
    "software engineering firm Kampala",
    "custom software development Uganda",
    "web development company Kampala",
    "mobile app developers Uganda",
    "tech company Kampala East Africa",
    "software engineers in Kampala",
    "Uganda software development firm",
    "East Africa tech developers",
    "software engineering studio East Africa",

    // Global & Enterprise SEO Keywords
    "custom software development company",
    "enterprise software engineering studio",
    "startup MVP development agency",
    "cloud native software architecture",
    "anti black hole sprint methodology",
    "fullstack TypeScript engineers",
    "offshore custom software development",
    "Langratia software studio",
    "Langratia engineering",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Langratia Software Engineering Studio",
  publisher: "Langratia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Langratia — Custom Software Built for Your Exact Scale",
    description:
      "Premier custom software engineering studio headquartered in Kampala, Uganda, serving East Africa and global enterprises. Enterprise-grade architecture with 14-day anti-black hole sprint delivery.",
    url: "https://langratia.com",
    siteName: "Langratia Software Engineering Studio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Langratia — Custom Software Engineering Studio Uganda & Worldwide",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Langratia — Custom Software Engineering Studio | Uganda & Global",
    description:
      "Enterprise architecture, custom app engineering, and startup MVPs. Serving Uganda, East Africa, and worldwide.",
    images: ["/logo.png"],
    creator: "@langratia",
  },
  other: {
    "geo.region": "UG-C",
    "geo.placename": "Kampala, Uganda",
    "geo.position": "0.3476;32.5825",
    ICBM: "0.3476, 32.5825",
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
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 pt-[60px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
