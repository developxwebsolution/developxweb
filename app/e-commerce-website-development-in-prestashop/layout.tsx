import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "PrestaShop E-commerce Development Company | Online Stores",
  description: "Professional PrestaShop e-commerce development company offering custom PrestaShop themes, module development, and complete online store solutions for businesses.",
  keywords: [
    "PrestaShop development company",
    "PrestaShop e-commerce development",
    "PrestaShop theme development",
    "PrestaShop module development",
    "PrestaShop customization",
    "PrestaShop migration",
    "PrestaShop maintenance",
    "best PrestaShop developers",
    "PrestaShop online store",
    "PrestaShop SEO optimization",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/e-commerce-website-development-in-prestashop",
  },
  openGraph: {
    title: "PrestaShop E-commerce Development Services | Laser Web Maker",
    description: "Professional PrestaShop development company offering custom e-commerce solutions and online stores.",
    url: "https://laserwebmaker.com/e-commerce-website-development-in-prestashop",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/prestashop-development.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PrestaShop E-commerce Development Company",
    description: "Custom PrestaShop themes, modules, and online store development.",
    images: ["https://laserwebmaker.com/og/prestashop-development.jpg"],
  },
};

export default function PrestaShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script type="application/ld+json" id="localbusiness-prestashop">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - PrestaShop E-commerce Development Company",
          url: "https://laserwebmaker.com/e-commerce-website-development-in-prestashop",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description: "Professional PrestaShop e-commerce development company offering custom online store solutions.",
          areaServed: [
            { "@type": "Place", name: "Worldwide" },
            { "@type": "Place", name: "India" },
            { "@type": "Place", name: "USA" },
            { "@type": "Place", name: "Europe" },
            { "@type": "Place", name: "Middle East" },
          ],
          address: {
            "@type": "PostalAddress",
            addressCountry: "IN",
          },
          openingHours: "Mo-Sa 09:30-19:00",
          priceRange: "₹₹₹",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.7",
            ratingCount: "450",
          },
        })}
      </Script>

      <Script type="application/ld+json" id="faq-schema-prestashop">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which company provides the best PrestaShop development services?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Laser Web Maker is a premier PrestaShop development company, specializing in custom PrestaShop theme development, module customization, migration services, and complete e-commerce solutions with advanced features and SEO optimization.",
              },
            },
            {
              "@type": "Question",
              name: "What are the advantages of PrestaShop over other e-commerce platforms?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "PrestaShop offers complete source code access, high customization flexibility, lower transaction fees compared to hosted platforms, robust product management, advanced SEO features, and is available in 75+ languages making it ideal for global businesses.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer PrestaShop migration from other platforms?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we provide professional migration services from WooCommerce, Magento, Shopify, OpenCart, and other platforms to PrestaShop, ensuring seamless transition of products, customers, orders, and data without business interruption.",
              },
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}