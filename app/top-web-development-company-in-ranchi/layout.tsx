import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Web Development Company in Ranchi | Custom Websites",
  description: "Leading web development company in Ranchi offering professional website design, e-commerce solutions, and digital marketing services for local businesses.",
  keywords: [
    "web development company Ranchi",
    "website development Ranchi",
    "Ranchi web developers",
    "e-commerce development Ranchi",
    "SEO services Ranchi",
    "digital marketing Ranchi",
    "best web company in Ranchi",
    "website design Ranchi",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/top-web-development-company-in-ranchi",
  },
  openGraph: {
    title: "Professional Web Development Services in Ranchi | Laser Web Maker",
    description: "Build your online presence with Ranchi's top web development company. Custom websites, e-commerce & digital solutions.",
    url: "https://laserwebmaker.com/top-web-development-company-in-ranchi",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/ranchi-web-development.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Web Development Company in Ranchi",
    description: "Professional website design & development services in Ranchi for businesses of all sizes.",
    images: ["https://laserwebmaker.com/og/ranchi-web-development.jpg"],
  },
};

export default function RanchiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script type="application/ld+json" id="localbusiness-ranchi">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - Web Development Company in Ranchi",
          url: "https://laserwebmaker.com/top-web-development-company-in-ranchi",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description: "Professional web development company in Ranchi providing custom websites and digital solutions.",
          areaServed: [
            { "@type": "Place", name: "Ranchi, Jharkhand" },
            { "@type": "Place", name: "HEC Colony" },
            { "@type": "Place", name: "Doranda" },
            { "@type": "Place", name: "Lalpur" },
            { "@type": "Place", name: "Main Road" },
          ],
          address: {
            "@type": "PostalAddress",
            addressRegion: "JH",
            addressCountry: "IN",
          },
          openingHours: "Mo-Sa 09:30-19:00",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.6",
            ratingCount: "720",
          },
        })}
      </Script>

      <Script type="application/ld+json" id="faq-schema-ranchi">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which is the best web development company in Ranchi?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Laser Web Maker is recognized as Ranchi's top web development company, known for creating responsive, SEO-optimized websites that help local businesses establish a strong online presence in Jharkhand's capital.",
              },
            },
            {
              "@type": "Question",
              name: "What web services do you offer in Ranchi?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We offer complete web solutions in Ranchi including website design, e-commerce development, mobile apps, SEO, digital marketing, and ongoing website maintenance for businesses across HEC, Doranda, and Lalpur areas.",
              },
            },
            {
              "@type": "Question",
              name: "Do you work with government organizations in Ranchi?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we have experience developing websites for educational institutions, NGOs, and government-related organizations in Ranchi, ensuring compliance, security, and user-friendly interfaces for public services.",
              },
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}