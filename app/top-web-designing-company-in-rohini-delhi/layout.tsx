import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Web Designing Company in Rohini, Delhi | Local Experts",
  description:
    "Professional web design company in Rohini, Delhi offering creative websites, UI/UX design, and digital solutions for local businesses and residential services.",
  keywords: [
    "web design company Rohini",
    "website designers Rohini Delhi",
    "Rohini web design",
    "UI/UX design Rohini",
    "Rohini Sector web design",
    "local web designers Rohini",
    "best web design in Rohini Delhi",
    "Delhi web design services",
    "top website designing company in Rohini",
    "best website desinging company in Rohini",
    "website designing company in Rohini",
    "website development company in Rohini",
  ],
  robots: "index, follow",
  alternates: {
    canonical:
      "https://laserwebmaker.com/top-web-designing-company-in-rohini-delhi",
  },
  openGraph: {
    title: "Web Design Company in Rohini, Delhi | Laser Web Maker",
    description:
      "Local web design experts serving Rohini sectors. Creative websites for businesses, schools, and services in Rohini.",
    url: "https://laserwebmaker.com/top-web-designing-company-in-rohini-delhi",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/rohini-web-design.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Services in Rohini, Delhi",
    description:
      "Local website design experts for Rohini sectors and businesses.",
    images: ["https://laserwebmaker.com/og/rohini-web-design.jpg"],
  },
};

export default function RohiniLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script type="application/ld+json" id="localbusiness-rohini">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - Web Design Company in Rohini, Delhi",
          url: "https://laserwebmaker.com/top-web-designing-company-in-rohini-delhi",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description:
            "Local web design experts serving Rohini sectors and surrounding areas.",
          areaServed: [
            { "@type": "Place", name: "Rohini, Delhi" },
            { "@type": "Place", name: "Rohini Sector 1-25" },
            { "@type": "Place", name: "Pitampura" },
            { "@type": "Place", name: "Prashant Vihar" },
            { "@type": "Place", name: "Rithala" },
            { "@type": "Place", name: "Rohini Sec-3" },
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Rohini",
            addressRegion: "Delhi",
            addressCountry: "IN",
          },
          openingHours: "Mo-Sa 09:30-19:00",
          priceRange: "₹₹",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.7",
            ratingCount: "680",
          },
        })}
      </Script>

      <Script type="application/ld+json" id="faq-schema-rohini">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Looking for web designers in Rohini, Delhi?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we're local web design experts serving Rohini sectors 1-25, Pitampura, and surrounding areas, offering personalized website design services for schools, local businesses, clinics, and residential services.",
              },
            },
            {
              "@type": "Question",
              name: "Do you specialize in school website design in Rohini?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely. We create beautiful, functional websites for Rohini's schools and educational institutes with features like admission forms, student portals, gallery sections, and parent communication systems.",
              },
            },
            {
              "@type": "Question",
              name: "Can you visit our Rohini office for design discussions?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, as local Rohini web designers, we can visit your office in any Rohini sector, Pitampura, or nearby areas for in-person design consultations and project discussions.",
              },
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}
