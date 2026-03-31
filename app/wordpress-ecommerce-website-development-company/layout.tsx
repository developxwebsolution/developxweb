import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "WordPress E-commerce Development Company | WooCommerce Experts",
  description: "Professional WordPress e-commerce development company specializing in WooCommerce stores, custom themes, plugin development, and complete online shopping solutions.",
  keywords: [
    "WordPress e-commerce development",
    "WooCommerce development company",
    "WordPress online store development",
    "custom WooCommerce themes",
    "WooCommerce plugin development",
    "WordPress shopping cart",
    "e-commerce website development",
    "online store development",
    "WooCommerce customization",
    "WordPress payment gateway integration",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/wordpress-ecommerce-website-development-company",
  },
  openGraph: {
    title: "WordPress E-commerce Development Services | Laser Web Maker",
    description: "Professional WordPress e-commerce development company offering WooCommerce stores and online shopping solutions.",
    url: "https://laserwebmaker.com/wordpress-ecommerce-website-development-company",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/wordpress-ecommerce.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress E-commerce Development Company",
    description: "WooCommerce stores and WordPress e-commerce solutions development.",
    images: ["https://laserwebmaker.com/og/wordpress-ecommerce.jpg"],
  },
};

export default function WordPressEcommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script type="application/ld+json" id="localbusiness-wordpress-ecommerce">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - WordPress E-commerce Development Company",
          url: "https://laserwebmaker.com/wordpress-ecommerce-website-development-company",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description: "Professional WordPress e-commerce development company specializing in WooCommerce solutions.",
          areaServed: [
            { "@type": "Place", name: "Worldwide" },
            { "@type": "Place", name: "India" },
            { "@type": "Place", name: "USA" },
            { "@type": "Place", name: "UK" },
            { "@type": "Place", name: "UAE" },
          ],
          address: {
            "@type": "PostalAddress",
            addressCountry: "IN",
          },
          openingHours: "Mo-Sa 09:30-19:00",
          priceRange: "₹₹-₹₹₹₹",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "1500",
          },
        })}
      </Script>

      <Script type="application/ld+json" id="faq-schema-wordpress-ecommerce">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which company is best for WordPress e-commerce development?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Laser Web Maker is a leading WordPress e-commerce development company specializing in WooCommerce stores, offering custom theme development, plugin customization, payment gateway integration, and complete online shopping solutions with mobile optimization.",
              },
            },
            {
              "@type": "Question",
              name: "What features can you add to a WooCommerce store?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We can add product variations, advanced filters, wishlists, quick view, AJAX cart, one-page checkout, subscription plans, membership systems, multi-vendor marketplace functionality, and integrations with shipping carriers and payment gateways.",
              },
            },
            {
              "@type": "Question",
              name: "How much does a WordPress e-commerce website cost?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our WordPress e-commerce development starts from ₹54,999 for basic WooCommerce stores and goes up to ₹2,50,000+ for advanced multi-vendor marketplaces with custom features. The cost depends on features, design complexity, and integrations required.",
              },
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}