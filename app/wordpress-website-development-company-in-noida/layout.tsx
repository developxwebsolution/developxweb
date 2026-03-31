import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "WordPress Website Development Company in Noida | CMS Experts",
  description: "Professional WordPress website development company in Noida offering custom WordPress themes, plugins, e-commerce, and CMS solutions for businesses.",
  keywords: [
    "WordPress development company Noida",
    "WordPress website development Noida",
    "custom WordPress themes Noida",
    "WordPress plugin development Noida",
    "WordPress CMS development Noida",
    "WooCommerce development Noida",
    "WordPress maintenance Noida",
    "best WordPress developers Noida",
    "responsive WordPress design Noida",
    "WordPress migration Noida",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/wordpress-website-development-company-in-noida",
  },
  openGraph: {
    title: "WordPress Development Services in Noida | Laser Web Maker",
    description: "Professional WordPress development company in Noida offering custom themes, plugins, and e-commerce solutions.",
    url: "https://laserwebmaker.com/wordpress-website-development-company-in-noida",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/wordpress-development-noida.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress Development Company in Noida",
    description: "Custom WordPress themes, plugins, and e-commerce development in Noida.",
    images: ["https://laserwebmaker.com/og/wordpress-development-noida.jpg"],
  },
};

export default function WordPressLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script type="application/ld+json" id="localbusiness-wordpress">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - WordPress Development Company in Noida",
          url: "https://laserwebmaker.com/wordpress-website-development-company-in-noida",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description: "Professional WordPress development company in Noida offering custom CMS solutions.",
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
          priceRange: "₹₹-₹₹₹",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "1200",
          },
        })}
      </Script>

      <Script type="application/ld+json" id="faq-schema-wordpress">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which is the best WordPress development company in Noida?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Laser Web Maker is Noida's premier WordPress development company, specializing in custom WordPress themes, plugin development, WooCommerce stores, and enterprise WordPress solutions for businesses of all sizes.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer WordPress e-commerce development in Noida?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we specialize in WooCommerce development for Noida businesses, creating feature-rich e-commerce stores with product management, payment gateways, shipping integrations, and inventory management.",
              },
            },
            {
              "@type": "Question",
              name: "What is your WordPress development process?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our WordPress development process includes requirement analysis, wireframing, custom theme/plugin development, content integration, testing, and deployment. We ensure SEO optimization, security hardening, and performance optimization.",
              },
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}