import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Web Designing Company in Andheri Mumbai | Local Experts",
  description: "Local web design experts in Andheri Mumbai offering creative websites, UI/UX design, and digital solutions for Andheri East & West businesses, startups, and restaurants.",
  keywords: [
    "web design company Andheri",
    "Andheri web designers",
    "website design Andheri Mumbai",
    "Andheri East web agency",
    "Andheri West website design",
    "UI/UX design Andheri",
    "local web designers Andheri",
    "best web design in Andheri",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/top-web-designing-company-in-andheri-mumbai",
  },
  openGraph: {
    title: "Web Design Company in Andheri Mumbai | Laser Web Maker",
    description: "Local web design experts serving Andheri East & West. Creative websites for restaurants, startups, and businesses in Andheri.",
    url: "https://laserwebmaker.com/top-web-designing-company-in-andheri-mumbai",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/andheri-web-design.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Services in Andheri Mumbai",
    description: "Local website design experts for Andheri East & West businesses.",
    images: ["https://laserwebmaker.com/og/andheri-web-design.jpg"],
  },
};

export default function AndheriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script type="application/ld+json" id="localbusiness-andheri">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - Web Design Company in Andheri Mumbai",
          url: "https://laserwebmaker.com/top-web-designing-company-in-andheri-mumbai",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description: "Local web design experts serving Andheri East and West areas.",
          areaServed: [
            { "@type": "Place", name: "Andheri East, Mumbai" },
            { "@type": "Place", name: "Andheri West, Mumbai" },
            { "@type": "Place", name: "Lokhandwala" },
            { "@type": "Place", name: "Versova" },
            { "@type": "Place", name: "Chakala" },
            { "@type": "Place", name: "MIDC Andheri" },
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Andheri",
            addressRegion: "MH",
            addressCountry: "IN",
          },
          openingHours: "Mo-Sa 09:30-19:00",
          priceRange: "₹₹-₹₹₹",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.7",
            ratingCount: "650",
          },
        })}
      </Script>

      <Script type="application/ld+json" id="faq-schema-andheri">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Looking for web designers in Andheri?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we're local web design experts serving Andheri East and West, offering personalized website design services for restaurants, startups, retail stores, and businesses across Andheri's diverse commercial areas.",
              },
            },
            {
              "@type": "Question",
              name: "Do you specialize in restaurant website design in Andheri?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely. We create mouth-watering restaurant websites for Andheri's food scene with online menus, reservation systems, food photography, and delivery integrations that attract Lokhandwala, Versova, and Juhu diners.",
              },
            },
            {
              "@type": "Question",
              name: "Can you visit our Andheri office for design discussions?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, as local Andheri web designers, we can visit your office in Andheri East, Andheri West, Chakala, or nearby areas for in-person design consultations and project discussions.",
              },
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}