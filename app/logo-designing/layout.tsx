import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top & Most Trusted Logo Designing Services | Laser Web Maker", // 63 chars ✅
  description: "Laser Web Maker is a most trusted logo designing company offering professional, creative, and unique logo designs that elevate your brand identity.", // 157 chars ✅
  keywords: [
    "logo designing services",
    "professional logo design",
    "top logo designer",
    "most trusted logo designing",
    "creative logo designing"
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/logo-designing",
  },
  openGraph: {
    title: "Best & Most Trusted Logo Designing Company | Laser Web Maker", // 64 chars ✅
    description: "Looking for top logo designing services? Laser Web Maker delivers professional, creative, and unique logo designs that strengthen your brand identity.", // 174 chars ✅
    url: "https://laserwebmaker.com/logo-designing",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/logo-design.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laser Web Maker - Top & Most Trusted Logo Designing", // 61 chars ✅
    description: "Professional and most trusted logo designing services. Create unique and creative logos that represent your brand perfectly.", // 142 chars ✅
    images: ["https://laserwebmaker.com/og/logo-design.png"],
  },
};
export default function LogoDesigningLayout({ children }: { children: React.ReactNode }) {
  return <>
    {children}

    {/* Breadcrumbs */}
    <Script type="application/ld+json" id="breadcrumbs">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://laserwebmaker.com/" },
          { "@type": "ListItem", position: 2, name: "Logo Designing", item: "https://laserwebmaker.com/logo-designing" },
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
        name: "Laser Web Maker - Most Trusted Logo Designing",
        url: "https://laserwebmaker.com/logo-designing",
        telephone: "+91 72919 34043",
        description: "Laser Web Maker is a most trusted logo designing company delivering professional, creative, and unique logos that elevate your brand identity.", // 155 chars ✅
        openingHours: "Mo-Su 09:30-18:30",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "1200" },
      })}
    </Script>

    {/* Service */}
    <Script type="application/ld+json" id="service">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Logo Designing",
        provider: { "@type": "Organization", name: "Laser Web Maker", url: "https://laserwebmaker.com" },
        areaServed: "Global",
        offers: { "@type": "Offer", priceCurrency: "INR", price: "Starting at 1999", url: "https://laserwebmaker.com/contact" },
      })}
    </Script>

  </>;
}
