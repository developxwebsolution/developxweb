import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Web Designing Company in Lucknow | Creative Websites",
  description: "Leading web design company in Lucknow offering creative UI/UX design, responsive websites, and digital branding for businesses in the City of Nawabs.",
  keywords: [
    "web design company Lucknow",
    "website designers Lucknow",
    "Lucknow web design agency",
    "UI/UX design Lucknow",
    "creative agency Lucknow",
    "responsive web design Lucknow",
    "graphic design Lucknow",
    "digital branding Lucknow",
    "top website designing company in Lucknow",
    "best website desinging company in Lucknow",
    "website designing company in Lucknow",
    "website development company in Lucknow",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/top-web-designing-company-in-lucknow",
  },
  openGraph: {
    title: "Creative Web Design Agency in Lucknow | Laser Web Maker",
    description: "Premium web design services in Lucknow. Creative websites, UI/UX design, and digital solutions for local businesses.",
    url: "https://laserwebmaker.com/top-web-designing-company-in-lucknow",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/lucknow-web-design.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Company in Lucknow",
    description: "Creative website design and UI/UX services for Lucknow businesses.",
    images: ["https://laserwebmaker.com/og/lucknow-web-design.jpg"],
  },
};

export default function LucknowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script type="application/ld+json" id="localbusiness-lucknow">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - Web Design Company in Lucknow",
          url: "https://laserwebmaker.com/top-web-designing-company-in-lucknow",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description: "Creative web design company in Lucknow providing premium design services.",
          areaServed: [
            { "@type": "Place", name: "Lucknow, Uttar Pradesh" },
            { "@type": "Place", name: "Gomti Nagar" },
            { "@type": "Place", name: "Hazratganj" },
            { "@type": "Place", name: "Aliganj" },
            { "@type": "Place", name: "Indira Nagar" },
            { "@type": "Place", name: "Chowk" },
          ],
          address: {
            "@type": "PostalAddress",
            addressRegion: "UP",
            addressCountry: "IN",
          },
          openingHours: "Mo-Sa 09:30-19:00",
          priceRange: "₹₹-₹₹₹",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.7",
            ratingCount: "920",
          },
        })}
      </Script>

      <Script type="application/ld+json" id="faq-schema-lucknow">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which web design company is best in Lucknow?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Laser Web Maker is recognized as Lucknow's leading web design agency, known for creating sophisticated, culturally resonant websites for businesses in Gomti Nagar, Hazratganj, and across the City of Nawabs.",
              },
            },
            {
              "@type": "Question",
              name: "What makes your Lucknow web design services unique?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We blend Lucknow's rich cultural heritage with modern design principles, creating websites that reflect the city's elegance while delivering exceptional user experiences and functionality.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer e-commerce design for Lucknow businesses?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we design beautiful e-commerce websites for Lucknow's retail, fashion, and food businesses with features like product catalogs, online ordering, and secure payment gateways.",
              },
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}