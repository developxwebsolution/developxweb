import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Drupal Website Development Company in Noida | Enterprise CMS",
  description: "Professional Drupal website development company in Noida offering custom Drupal themes, modules, and enterprise-grade CMS solutions for large organizations.",
  keywords: [
    "Drupal development company Noida",
    "Drupal website development Noida",
    "custom Drupal themes Noida",
    "Drupal module development Noida",
    "Drupal CMS development Noida",
    "Drupal migration Noida",
    "Drupal maintenance Noida",
    "best Drupal developers Noida",
    "enterprise Drupal solutions Noida",
    "Drupal e-commerce Noida",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/drupal-website-development-company-in-noida-india",
  },
  openGraph: {
    title: "Drupal Development Services in Noida | Laser Web Maker",
    description: "Professional Drupal development company in Noida offering enterprise CMS solutions and custom modules.",
    url: "https://laserwebmaker.com/drupal-website-development-company-in-noida-india",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/drupal-development-noida.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drupal Development Company in Noida",
    description: "Enterprise Drupal CMS solutions and custom module development in Noida.",
    images: ["https://laserwebmaker.com/og/drupal-development-noida.jpg"],
  },
};

export default function DrupalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script type="application/ld+json" id="localbusiness-drupal">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - Drupal Development Company in Noida",
          url: "https://laserwebmaker.com/drupal-website-development-company-in-noida-india",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description: "Professional Drupal development company in Noida offering enterprise CMS solutions.",
          areaServed: [
            { "@type": "Place", name: "Noida, Uttar Pradesh" },
            { "@type": "Place", name: "Delhi NCR" },
            { "@type": "Place", name: "India" },
          ],
          address: {
            "@type": "PostalAddress",
            addressRegion: "UP",
            addressCountry: "IN",
          },
          openingHours: "Mo-Sa 09:30-19:00",
          priceRange: "₹₹₹₹",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.7",
            ratingCount: "380",
          },
        })}
      </Script>

      <Script type="application/ld+json" id="faq-schema-drupal">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which is the best Drupal development company in Noida?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Laser Web Maker is Noida's premier Drupal development company, specializing in enterprise-grade Drupal solutions, custom module development, complex integrations, and high-performance Drupal websites for large organizations and government projects.",
              },
            },
            {
              "@type": "Question",
              name: "What makes Drupal different from other CMS?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Drupal excels in enterprise-level content management, superior security, scalability for high-traffic websites, advanced user permission systems, and complex content relationships, making it ideal for large organizations and educational institutions.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer Drupal 7 to Drupal 9/10 migration in Noida?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we provide professional Drupal migration services in Noida, upgrading from Drupal 7 to Drupal 9/10 with complete data preservation, theme modernization, and functionality enhancements.",
              },
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}