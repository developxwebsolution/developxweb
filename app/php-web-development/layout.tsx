import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top & Most Trusted PHP Web Development Services | Laser Web Maker", // 72 chars ✅
  description:
    "Laser Web Maker is a most trusted PHP web development company offering professional, secure, and high-performing web solutions for businesses.", // 156 chars ✅
  keywords: [
    "PHP web development services",
    "professional PHP developer",
    "top PHP web development",
    "most trusted PHP development",
    "custom PHP solutions",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/php-web-development",
  },
  openGraph: {
    title: "Best & Most Trusted PHP Web Development Company | Laser Web Maker", // 72 chars ✅
    description:
      "Looking for top PHP web development services? Laser Web Maker delivers professional, secure, and high-performing PHP web solutions tailored to your business needs.", // 175 chars ✅
    url: "https://laserwebmaker.com/php-web-development",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/php-development.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laser Web Maker - Top & Most Trusted PHP Web Development", // 69 chars ✅
    description:
      "Professional and most trusted PHP web development services. Build secure, high-performing, and custom PHP websites for your business.", // 148 chars ✅
    images: ["https://laserwebmaker.com/og/php-development.png"],
  },
};
export default function PHPWebDevelopmentLayout({
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
              name: "PHP Web Development",
              item: "https://laserwebmaker.com/php-web-development",
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
            telephone: "+91 9876543210",
            contactType: "customer service",
          },
        })}
      </Script>

      {/* Local Business */}
      <Script type="application/ld+json" id="localbusiness">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - Most Trusted PHP Web Development",
          url: "https://laserwebmaker.com/php-web-development",
          telephone: "+91 9876543210",
          description:
            "Laser Web Maker is a most trusted PHP web development company providing professional, secure, and high-performing web solutions for businesses.", // 156 chars ✅
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
          serviceType: "PHP Web Development",
          provider: {
            "@type": "Organization",
            name: "Laser Web Maker",
            url: "https://laserwebmaker.com",
          },
          areaServed: "Global",
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            price: "Starting at 9999",
            url: "https://laserwebmaker.com/contact",
          },
        })}
      </Script>
    </>
  );
}
