import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Web Development Company in New York, USA | 2026",
  description:
    "Premier web development agency in New York offering custom websites, e-commerce solutions, mobile apps, and digital services for US businesses.",
  keywords: [
    "web development New York",
    "website company NYC",
    "New York web developers",
    "e-commerce development NYC",
    "mobile app development New York",
    "digital agency NYC",
    "best web developers in New York",
    "web design agency Manhattan",
    "top website designing company in New York",
    "best website desinging company in New York",
    "website designing company in New York",
    "website development company in New York",
  ],
  robots: "index, follow",
  alternates: {
    canonical:
      "https://laserwebmaker.com/top-web-development-company-in-newyork-us",
  },
  openGraph: {
    title: "Web Development Agency in New York, USA | Laser Web Maker",
    description:
      "Professional web solutions for New York businesses. Custom websites, e-commerce & mobile apps for the competitive US market.",
    url: "https://laserwebmaker.com/top-web-development-company-in-newyork-us",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/newyork-web-development.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company in New York, USA",
    description:
      "Professional website solutions for NYC businesses. E-commerce, mobile apps & digital marketing.",
    images: ["https://laserwebmaker.com/og/newyork-web-development.jpg"],
  },
};

export default function NewYorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script type="application/ld+json" id="localbusiness-newyork">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - Web Development Company in New York, USA",
          url: "https://laserwebmaker.com/top-web-development-company-in-newyork-us",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description:
            "Premium web development company serving New York City and surrounding areas.",
          areaServed: [
            { "@type": "Place", name: "New York, NY" },
            { "@type": "Place", name: "Manhattan" },
            { "@type": "Place", name: "Brooklyn" },
            { "@type": "Place", name: "Queens" },
            { "@type": "Place", name: "Bronx" },
            { "@type": "Place", name: "Staten Island" },
            { "@type": "Place", name: "New Jersey" },
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "New York",
            addressRegion: "NY",
            postalCode: "10001",
            addressCountry: "US",
          },
          openingHours: "Mo-Fr 09:00-18:00",
          priceRange: "$$$-$$$$",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            ratingCount: "1850",
          },
        })}
      </Script>

      <Script type="application/ld+json" id="faq-schema-newyork">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which web development company is best in New York?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Laser Web Maker is recognized among New York's top web development agencies, specializing in creating high-performance websites and applications for Manhattan businesses, Wall Street firms, and innovative NYC startups.",
              },
            },
            {
              "@type": "Question",
              name: "What industries do you serve in New York?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We serve diverse NYC industries including finance (Wall Street), fashion, media, technology startups, hospitality, real estate, healthcare, and professional services across all five boroughs.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer 24/7 support for New York clients?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we provide 24/7 technical support and maintenance for our New York clients, ensuring maximum uptime and rapid response times for businesses that operate around the clock.",
              },
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}
