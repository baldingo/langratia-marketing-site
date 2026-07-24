import React from "react";

export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareCompany",
    "@id": "https://langratia.com/#organization",
    name: "Langratia",
    legalName: "Langratia Software Engineering",
    url: "https://langratia.com",
    logo: "https://langratia.com/logo.png",
    image: "https://langratia.com/logo.png",
    description:
      "Langratia is a global custom software engineering studio delivering enterprise-grade cloud architecture, web/mobile applications, and tech MVP development with headquarters in Kampala, Uganda, serving clients across East Africa, North America, Europe, and worldwide.",
    email: "contact@langratia.com",
    telephone: "+256-700-000-000",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kampala Technology Park, Nakasero",
      addressLocality: "Kampala",
      addressRegion: "Central Region",
      postalCode: "00256",
      addressCountry: "UG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 0.3476,
      longitude: 32.5825,
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Uganda",
      },
      {
        "@type": "Place",
        name: "East Africa",
      },
      {
        "@type": "Place",
        name: "Africa",
      },
      {
        "@type": "Country",
        name: "United States",
      },
      {
        "@type": "Country",
        name: "United Kingdom",
      },
      {
        "@type": "Place",
        name: "Worldwide",
      },
    ],
    knowsAbout: [
      "Custom Software Development",
      "Software Engineering Uganda",
      "Mobile App Engineering",
      "Cloud Native Architecture",
      "Fintech Systems",
      "Enterprise Web Applications",
      "Anti-Black Hole Sprint Delivery",
      "Next.js Development",
      "TypeScript & Microservices",
    ],
    sameAs: [
      "https://github.com/langratia",
      "https://twitter.com/langratia",
      "https://linkedin.com/company/langratia",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Engineering Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tier I: Creator Launchpad (MVP & Prototypes)",
            description: "Rapid, production-ready MVP development for tech startups in Uganda, East Africa & globally.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tier II: SMB Systems Hub",
            description: "Scalable business operating software and web platform engineering for growing enterprises.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tier III: Enterprise Gateway Architecture",
            description: "High-throughput cloud architecture, microservices, security compliance, and custom infrastructure.",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://langratia.com/#website",
    url: "https://langratia.com",
    name: "Langratia",
    description:
      "Custom Software Engineering Studio — Headquartered in Uganda, powering global and East African enterprises.",
    publisher: {
      "@id": "https://langratia.com/#organization",
    },
    inLanguage: "en-US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
