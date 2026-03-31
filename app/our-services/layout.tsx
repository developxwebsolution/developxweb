import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "About Us - Top & Most Trusted Web Development Company | Laser Web Maker",
  description: "Learn about Laser Web Maker, a most trusted web development company providing professional, SEO-friendly, and custom web solutions with a top-quality team.",
  keywords: [
    "about Laser Web Maker",
    "top web development company",
    "most trusted web development",
    "professional web solutions",
    "custom website services"
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/about-us",
  },
  openGraph: {
    title: "About Us - Best & Most Trusted Web Development Company | Laser Web Maker",
    description: "Discover Laser Web Maker, a most trusted and professional web development company delivering SEO-friendly, custom websites and full-stack development solutions.",
    url: "https://laserwebmaker.com/about-us",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/about-us.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Laser Web Maker | Top & Most Trusted Web Development Company",
    description: "Laser Web Maker is a professional and most trusted web development company delivering top-quality custom websites and SEO-friendly solutions.",
    images: ["https://laserwebmaker.com/og/about-us.png"],
  },
};

export default function OurServicesLayout({ children }: { children: React.ReactNode }) {
  return <>
    {children}

    {/* Breadcrumbs */}
    <Script type="application/ld+json" id="breadcrumbs">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://laserwebmaker.com/" },
          { "@type": "ListItem", position: 2, name: "About Us", item: "https://laserwebmaker.com/about-us" },
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
        name: "Laser Web Maker - Most Trusted Web Development Company",
        url: "https://laserwebmaker.com/about-us",
        telephone: "+91 7291934043",
        description: "Laser Web Maker is a most trusted and professional web development company providing SEO-friendly, custom websites and full-stack solutions to help businesses grow online.",
        openingHours: "Mo-Su 09:30-18:30",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "1200" },
      })}
    </Script>

    {/* Service */}
    <Script type="application/ld+json" id="service">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Web Development",
        provider: { "@type": "Organization", name: "Laser Web Maker", url: "https://laserwebmaker.com" },
        areaServed: "Global",
        offers: { "@type": "Offer", priceCurrency: "INR", price: "Custom Quotation", url: "https://laserwebmaker.com/contact" },
      })}
    </Script>
  </>;
}
