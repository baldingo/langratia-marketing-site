export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://langratia.com/#organization",
    name: "Langratia",
    alternateName: "LANGRATIA Software Engineering Studio",
    url: "https://langratia.com",
    logo: {
      "@type": "ImageObject",
      url: "https://langratia.com/logo.png",
    },
    description:
      "LANGRATIA is a global custom software engineering studio headquartered in Kampala, Uganda. We deliver enterprise architecture, 14-day startup MVPs, and East African fintech integrations for founders and enterprises worldwide.",
    foundingDate: "2024",
    foundingLocation: {
      "@type": "Place",
      name: "Kampala, Uganda",
    },
    areaServed: [
      { "@type": "Country", name: "Uganda" },
      { "@type": "AdministrativeArea", name: "East Africa" },
      { "@type": "AdministrativeArea", name: "North America" },
      { "@type": "AdministrativeArea", name: "Europe" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Engineering Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tier I: Creator Launchpad",
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
