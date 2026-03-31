import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top & Most Trusted WordPress Website Development | Laser Web Maker", // 73 chars ✅
  description: "Laser Web Maker is a most trusted WordPress website development company offering professional, responsive, and SEO-friendly WordPress websites for businesses.", // 159 chars ✅
  keywords: [
    "WordPress website development",
    "professional WordPress developer",
    "top WordPress website development",
    "most trusted WordPress developer",
    "SEO-friendly WordPress websites"
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/wordpress-website-development",
  },
  openGraph: {
    title: "Best & Most Trusted WordPress Website Development | Laser Web Maker", // 72 chars ✅
    description: "Looking for top WordPress website development services? Laser Web Maker delivers professional, responsive, SEO-friendly WordPress websites tailored to your business needs.", // 176 chars ✅
    url: "https://laserwebmaker.com/wordpress-website-development",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/wordpress-development.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laser Web Maker - Top & Most Trusted WordPress Website Development", // 70 chars ✅
    description: "Professional and most trusted WordPress website development services. Build responsive, SEO-friendly, and custom WordPress websites for your business.", // 149 chars ✅
    images: ["https://laserwebmaker.com/og/wordpress-development.png"],
  },
};
export default function WordPressWebsiteDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return <>
    {children}

    {/* Breadcrumbs */}
    <Script type="application/ld+json" id="breadcrumbs">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://laserwebmaker.com/" },
          { "@type": "ListItem", position: 2, name: "WordPress Website Development", item: "https://laserwebmaker.com/wordpress-website-development" },
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
        name: "Laser Web Maker - Most Trusted WordPress Website Development",
        url: "https://laserwebmaker.com/wordpress-website-development",
        telephone: "+91 7291934043",
        description: "Laser Web Maker is a most trusted WordPress website development company providing professional, responsive, and SEO-friendly WordPress websites for businesses.", // 156 chars ✅
        openingHours: "Mo-Su 09:30-18:30",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "1200" },
      })}
    </Script>

    {/* Service */}
    <Script type="application/ld+json" id="service">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "WordPress Website Development",
        provider: { "@type": "Organization", name: "Laser Web Maker", url: "https://laserwebmaker.com" },
        areaServed: "Global",
        offers: { "@type": "Offer", priceCurrency: "INR", price: "Starting at 7999", url: "https://laserwebmaker.com/contact" },
      })}
    </Script>

  </>;
}
