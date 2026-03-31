import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top & Most Trusted Website Designer | Laser Web Maker",
  description:
    "Laser Web Maker is the most trusted website designer service offering custom websites, creative SEO-friendly designs, and professional web design solutions.",
  keywords: [
    "top website designer",
    "most trusted web designing",
    "best website designer",
    "custom website design",
    "SEO-friendly web design",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/hire-website-designer",
  },
  openGraph: {
    title: "Best & Most Trusted Website Designer | Laser Web Maker",
    description:
      "Looking to hire the best website designer? Laser Web Maker delivers top-quality, responsive, SEO-friendly websites and creative web design solutions.",
    url: "https://laserwebmaker.com/hire-website-designer",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/hire-website-designer.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laser Web Maker - Top & Most Trusted Website Designer",
    description:
      "Professional and most trusted website designer services. Hire the best designers to create responsive, creative, and SEO-friendly websites.",
    images: ["https://laserwebmaker.com/og/hire-website-designer.png"],
  },
};

export default function HireDesignerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      {/* Breadcrumbs */}
      <Script type="application/ld+json" id="breadcrumbs">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://laserwebmaker.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Hire Website Designer",
              item: "https://laserwebmaker.com/hire-website-designer",
            },
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
          name: "Laser Web Maker - Most Trusted Website Designer",
          url: "https://laserwebmaker.com/hire-website-designer",
          telephone: "+91 72919 34043",
          description:
            "Laser Web Maker is a most trusted and top website designer delivering professional, SEO-friendly website designs and creative web solutions.",
          openingHours: "Mo-Su 09:30-18:30",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "1200",
          },
        })}
      </Script>

      {/* Service */}
      <Script type="application/ld+json" id="service">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Hire Website Designer",
          provider: {
            "@type": "Organization",
            name: "Laser Web Maker",
            url: "https://laserwebmaker.com",
          },
          areaServed: "Global",
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            price: "Custom Quotation",
            url: "https://laserwebmaker.com/contact",
          },
        })}
      </Script>
    </>
  );
}
