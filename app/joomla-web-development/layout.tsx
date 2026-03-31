import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top & Most Trusted Joomla Web Development | Laser Web Maker", // 62 chars ✔
  description:
    "Laser Web Maker offers the best and most trusted Joomla web development services with secure, flexible, and business-ready websites for all industries.", // 156 chars ✔
  keywords: [
    "Joomla web development",
    "professional Joomla developer",
    "top Joomla development services",
    "most trusted Joomla development",
    "custom Joomla website"
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/joomla-web-development",
  },
  openGraph: {
    title: "Best & Most Trusted Joomla Web Development | Laser Web Maker", // 69 chars ✔
    description:
      "Looking for top Joomla web development? We deliver professional, secure, and high-performing Joomla websites tailored for your business.", // 150–180 chars ✔
    url: "https://laserwebmaker.com/joomla-web-development",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/joomla-development.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laser Web Maker – Top Joomla Web Development Services", // within limit ✔
    description:
      "Professional and most trusted Joomla website development services. Build secure, flexible, and dynamic Joomla websites for your business.", // within limit ✔
    images: ["https://laserwebmaker.com/og/joomla-development.png"],
  },
};
export default function JoomlaWebDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return <>
    {children}

    {/* Breadcrumbs */}
    <Script type="application/ld+json" id="breadcrumbs">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://laserwebmaker.com/" },
          { "@type": "ListItem", position: 2, name: "Joomla Web Development", item: "https://laserwebmaker.com/joomla-web-development" },
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
        name: "Laser Web Maker - Most Trusted Joomla Web Development",
        url: "https://laserwebmaker.com/joomla-web-development",
        telephone: "+91 72919 34043",
        description:
          "Laser Web Maker is a top and most trusted Joomla web development company delivering secure, scalable, and business-ready Joomla websites.", // limit ✔
        openingHours: "Mo-Su 09:30-18:30",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "1200" },
      })}
    </Script>

    {/* Service Schema */}
    <Script type="application/ld+json" id="service">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Joomla Web Development",
        provider: { "@type": "Organization", name: "Laser Web Maker", url: "https://laserwebmaker.com" },
        areaServed: "Global",
        offers: { "@type": "Offer", priceCurrency: "INR", price: "Starting at 9999", url: "https://laserwebmaker.com/contact" },
      })}
    </Script>
  </>;
}
