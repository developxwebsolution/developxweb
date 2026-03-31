import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top & Most Trusted Website Developer | Laser Web Maker", 
  description: "Laser Web Maker is the most trusted website developer service offering custom websites, best-quality SEO-friendly designs, and full-stack development solutions.", 
  keywords: [
    "top website developer",
    "most trusted web development",
    "best full stack developer",
    "custom website development",
    "SEO-friendly website",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/hire-website-developer",
  },
  openGraph: {
    title: "Best & Most Trusted Website Developer | Laser Web Maker", 
    description: "Looking to hire the best website developer? Laser Web Maker delivers top-quality, responsive, SEO-friendly websites and professional full-stack development services.", 
    url: "https://laserwebmaker.com/hire-website-developer",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/hire-website-developer.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laser Web Maker - Top & Most Trusted Website Developer", 
    description: "Professional and most trusted website development services. Hire the best developers to build responsive, secure, and SEO-friendly websites.",
    images: ["https://laserwebmaker.com/og/hire-website-developer.png"],
  },
};

export default function HireDeveloperLayout({ children }: { children: React.ReactNode }) {
  return <>
    {children}

    {/* Breadcrumbs */}
    <Script type="application/ld+json" id="breadcrumbs">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://laserwebmaker.com/" },
          { "@type": "ListItem", position: 2, name: "Hire Website Developer", item: "https://laserwebmaker.com/hire-website-developer" },
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
        name: "Laser Web Maker - Most Trusted Website Developer",
        url: "https://laserwebmaker.com/hire-website-developer",
        telephone: "+91 72919 34043",
        description: "Laser Web Maker is a most trusted and top website developer delivering professional, SEO-friendly website designing and full-stack development solutions.",
        openingHours: "Mo-Su 09:30-18:30",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "1200" },
      })}
    </Script>

    {/* Service */}
    <Script type="application/ld+json" id="service">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Hire Website Developer",
        provider: { "@type": "Organization", name: "Laser Web Maker", url: "https://laserwebmaker.com" },
        areaServed: "Global",
        offers: { "@type": "Offer", priceCurrency: "INR", price: "Custom Quotation", url: "https://laserwebmaker.com/contact" },
      })}
    </Script>
  </>;
}
