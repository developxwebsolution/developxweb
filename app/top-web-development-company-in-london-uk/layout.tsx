import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Web Development Company in London, UK | Laser Web Maker",
  description:
    "Professional web development agency in London offering custom websites, e-commerce solutions, mobile apps, and digital services for UK businesses.",
  keywords: [
    "web development London",
    "website company London",
    "London web developers",
    "e-commerce development London",
    "mobile app development London",
    "digital agency London",
    "best web developers in London",
    "web design agency London",
    "top website designing company in London",
    "best website desinging company in London",
    "website designing company in London",
    "website development company in London",
  ],
  robots: "index, follow",
  alternates: {
    canonical:
      "https://laserwebmaker.com/top-web-development-company-in-london-uk",
  },
  openGraph: {
    title: "Web Development Agency in London, UK | Laser Web Maker",
    description:
      "Professional web solutions for London businesses. Custom websites, e-commerce & mobile apps for the UK market.",
    url: "https://laserwebmaker.com/top-web-development-company-in-london-uk",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/london-web-development.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company in London, UK",
    description:
      "Professional website solutions for London businesses. E-commerce, mobile apps & digital marketing.",
    images: ["https://laserwebmaker.com/og/london-web-development.jpg"],
  },
};

export default function LondonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script type="application/ld+json" id="localbusiness-london">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - Web Development Company in London, UK",
          url: "https://laserwebmaker.com/top-web-development-company-in-london-uk",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description:
            "Professional web development company serving London and surrounding areas.",
          areaServed: [
            { "@type": "Place", name: "London, UK" },
            { "@type": "Place", name: "Central London" },
            { "@type": "Place", name: "City of London" },
            { "@type": "Place", name: "West End" },
            { "@type": "Place", name: "East London" },
            { "@type": "Place", name: "South London" },
            { "@type": "Place", name: "North London" },
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "London",
            addressRegion: "Greater London",
            postalCode: "EC1A 1BB",
            addressCountry: "GB",
          },
          openingHours: "Mo-Fr 09:00-18:00",
          priceRange: "£££-££££",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "1650",
          },
        })}
      </Script>

      <Script type="application/ld+json" id="faq-schema-london">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which web development company is best in London?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Laser Web Maker is recognized among London's leading web development agencies, known for creating sophisticated, high-performance websites for businesses in the City, West End, and across Greater London.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer GDPR-compliant websites for UK businesses?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely. All our London websites are built with full GDPR compliance, including cookie consent systems, data protection measures, and privacy policy integration required for UK and EU businesses.",
              },
            },
            {
              "@type": "Question",
              name: "What is your pricing structure for London clients?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our London pricing ranges from £2,000 for basic business websites to £25,000+ for complex enterprise solutions. We provide transparent quotes based on your specific requirements for Central London and surrounding areas.",
              },
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}
