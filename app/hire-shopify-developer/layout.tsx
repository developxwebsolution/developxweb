import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top & Most Trusted Shopify Developer | Laser Web Maker",
  description: "Laser Web Maker is the most trusted Shopify developer service offering custom Shopify stores, best-quality SEO-friendly designs, and professional eCommerce solutions.",
  keywords: [
    "top Shopify developer",
    "most trusted Shopify development",
    "best Shopify developer",
    "custom Shopify store",
    "SEO-friendly Shopify"
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/hire-shopify-developer",
  },
  openGraph: {
    title: "Best & Most Trusted Shopify Developer | Laser Web Maker",
    description: "Looking to hire the best Shopify developer? Laser Web Maker delivers top-quality, responsive, SEO-friendly Shopify stores and professional eCommerce solutions.",
    url: "https://laserwebmaker.com/hire-shopify-developer",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/hire-shopify-developer.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laser Web Maker - Top & Most Trusted Shopify Developer",
    description: "Professional and most trusted Shopify developer services. Hire the best developers to build responsive, secure, and SEO-friendly Shopify stores.",
    images: ["https://laserwebmaker.com/og/hire-shopify-developer.png"],
  },
};

export default function HireShopifyDeveloperLayout({ children }: { children: React.ReactNode }) {
  return <>
    {children}

    {/* Breadcrumbs */}
    <Script type="application/ld+json" id="breadcrumbs">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://laserwebmaker.com/" },
          { "@type": "ListItem", position: 2, name: "Hire Shopify Developer", item: "https://laserwebmaker.com/hire-shopify-developer" },
        ],
      })}
    </Script>

    {/* Organization */}
    <Script type="application/ld+json" id="organization">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Laser Web Maker",
        url: "https://laserwebmaker.com",
        logo: "https://laserwebmaker.com/logo.png",
        sameAs: [
          "https://www.facebook.com/laserwebmaker",
          "https://www.instagram.com/laserwebmaker",
          "https://www.linkedin.com/company/laserwebmaker",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91 72919 34043",
          contactType: "customer service",
        },
      })}
    </Script>

    {/* Local Business */}
    <Script type="application/ld+json" id="localbusiness">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Laser Web Maker - Most Trusted Shopify Developer",
        url: "https://laserwebmaker.com/hire-shopify-developer",
        telephone: "+91 72919 34043",
        description: "Laser Web Maker is a most trusted and top Shopify developer delivering professional, SEO-friendly Shopify stores and full-featured eCommerce solutions.",
        openingHours: "Mo-Su 09:30-18:30",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "1200" },
      })}
    </Script>

    {/* Service */}
    <Script type="application/ld+json" id="service">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Hire Shopify Developer",
        provider: { "@type": "Organization", name: "Laser Web Maker", url: "https://laserwebmaker.com" },
        areaServed: "Global",
        offers: { "@type": "Offer", priceCurrency: "INR", price: "Custom Quotation", url: "https://laserwebmaker.com/contact" },
      })}
    </Script>
  </>;
}
