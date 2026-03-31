import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Catalog Designing Services | Laser Web Maker", 
  description: "Laser Web Maker is the most trusted catalog designing company offering professional, creative, and high-quality catalog design services for businesses.", 
  keywords: [
    "catalog designing services",
    "professional catalog design",
    "creative catalog designing",
    "top catalog designing",
    "most trusted catalog designer"
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/catalog-designing",
  },
  openGraph: {
    title: "Best & Most Trusted Catalog Designing Company | Laser Web Maker", 
    description: "Looking for top catalog designing services? Laser Web Maker delivers professional, creative, and high-quality catalog designs to enhance your brand and sales.",
    url: "https://laserwebmaker.com/catalog-designing",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/catalog-design.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laser Web Maker - Top Catalog Designing Services",
    description: "Professional and most trusted catalog designing services to create creative, high-quality catalogs that boost your brand and sales.", 
    images: ["https://laserwebmaker.com/og/catalog-design.png"],
  },
};
export default function CatalogDesigningLayout({ children }: { children: React.ReactNode }) {
  return <>
    {children}

    {/* Breadcrumbs */}
    <Script type="application/ld+json" id="breadcrumbs">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://laserwebmaker.com/" },
          { "@type": "ListItem", position: 2, name: "Catalog Designing", item: "https://laserwebmaker.com/catalog-designing" },
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
          telephone: "+91 7291934043",
          contactType: "customer service",
        },
      })}
    </Script>

    {/* Local Business */}
    <Script type="application/ld+json" id="localbusiness">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Laser Web Maker - Most Trusted Catalog Designing",
        url: "https://laserwebmaker.com/catalog-designing",
        telephone: "+91 7291934043",
        description: "Laser Web Maker is a most trusted and top catalog designing company providing professional, creative, and high-quality catalog design services.",
        openingHours: "Mo-Su 09:30-18:30",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "1200" },
      })}
    </Script>

    {/* Service */}
    <Script type="application/ld+json" id="service">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Catalog Designing",
        provider: { "@type": "Organization", name: "Laser Web Maker", url: "https://laserwebmaker.com" },
        areaServed: "Global",
        offers: { "@type": "Offer", priceCurrency: "INR", price: "Starting at 4999", url: "https://laserwebmaker.com/contact" },
      })}
    </Script>

  </>;
}
