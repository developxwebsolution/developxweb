import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Web Designing Company in Gurugram | UI/UX Experts",
  description: "Professional web design company in Gurugram specializing in corporate websites, SaaS platforms, and enterprise design solutions for tech companies and startups.",
  keywords: [
    "web design company Gurugram",
    "UI/UX design Gurugram",
    "Gurugram web designers",
    "corporate website design Gurugram",
    "SaaS design Gurugram",
    "tech startup design Gurugram",
    "responsive design Gurugram",
    "best web agency Gurugram",
    "top website designing company in Gurugram",
    "best website desinging company in Gurugram",
    "website designing company in Gurugram",
    "website development company in Gurugram",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/top-web-designing-company-in-gurugram",
  },
  openGraph: {
    title: "Web Design Services in Gurugram | Laser Web Maker",
    description: "Gurugram's leading web design company for tech startups, corporates, and SaaS businesses. Professional UI/UX design services.",
    url: "https://laserwebmaker.com/top-web-designing-company-in-gurugram",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/gurugram-web-design.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Company in Gurugram",
    description: "Professional UI/UX and website design services for Gurugram's tech hub.",
    images: ["https://laserwebmaker.com/og/gurugram-web-design.jpg"],
  },
};

export default function GurugramLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script type="application/ld+json" id="localbusiness-gurugram">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - Web Design Company in Gurugram",
          url: "https://laserwebmaker.com/top-web-designing-company-in-gurugram",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description: "Professional web design company in Gurugram specializing in tech and corporate design.",
          areaServed: [
            { "@type": "Place", name: "Gurugram, Haryana" },
            { "@type": "Place", name: "Cyber City" },
            { "@type": "Place", name: "Sector 44" },
            { "@type": "Place", name: "DLF Phase 1-5" },
            { "@type": "Place", name: "Sohna Road" },
          ],
          address: {
            "@type": "PostalAddress",
            addressRegion: "HR",
            addressCountry: "IN",
          },
          openingHours: "Mo-Sa 09:30-19:00",
          priceRange: "₹₹₹",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "1200",
          },
        })}
      </Script>

      <Script type="application/ld+json" id="faq-schema-gurugram">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Who are the best web designers in Gurugram?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Laser Web Maker is recognized among Gurugram's top web design agencies, specializing in creating sophisticated UI/UX designs for tech startups, corporate businesses, and SaaS platforms in Cyber City and surrounding areas.",
              },
            },
            {
              "@type": "Question",
              name: "Do you specialize in corporate website design in Gurugram?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we excel in corporate and B2B website design for Gurugram's business district, creating professional, conversion-focused websites that reflect your brand's authority and expertise.",
              },
            },
            {
              "@type": "Question",
              name: "What is your design process for Gurugram clients?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We follow a structured design process: discovery & research, wireframing, UI/UX design, prototyping, testing, and launch - ensuring your Gurugram business gets a website that meets both user needs and business goals.",
              },
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}