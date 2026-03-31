import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Best Magento Website Development Services | Trusted Experts",
  description:
    "Get top Magento website development services from expert and trusted developers. We build fast, secure, and scalable Magento eCommerce stores for growth.",
  keywords: [
    "Magento Website Development",
    "Best Magento Developers",
    "Trusted Magento Development Services",
    "Magento eCommerce Development",
    "Custom Magento Store Development"
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/magento-website-development",
  },
  openGraph: {
    title: "Top Magento Website Development Services | Expert Developers",
    description:
      "Professional Magento website development services for scalable, secure, and high-performing eCommerce stores.",
    url: "https://laserwebmaker.com/magento-website-development",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/magento-web-dev.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Magento Website Development | Top Trusted Developers",
    description:
      "Build a powerful, secure, and SEO-friendly Magento eCommerce store with our expert development team.",
    images: ["https://laserwebmaker.com/og/magento-web-dev.png"],
  },
};
export default function MagentoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}

      {/* JSON-LD Schema: Breadcrumbs */}
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
              name: "Magento Website Development",
              item: "https://laserwebmaker.com/magento-website-development",
            },
          ],
        })}
      </Script>

      {/* JSON-LD Schema: Organization */}
      <Script type="application/ld+json" id="organization">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "LaserWebMaker",
          url: "https://laserwebmaker.com",
          logo: "https://laserwebmaker.com/logo.png",
          sameAs: [
            "https://www.facebook.com/laserwebmaker",
            "https://www.instagram.com/laserwebmaker",
            "https://www.linkedin.com/company/laserwebmaker"
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91 72919 34043",
            contactType: "customer service",
          },
        })}
      </Script>

      {/* JSON-LD Schema: Service */}
      <Script type="application/ld+json" id="service">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Magento Website Development",
          provider: {
            "@type": "Organization",
            name: "LaserWebMaker",
            url: "https://laserwebmaker.com",
          },
          description:
            "Best Magento website development services by trusted experts. We build secure, fast, and scalable Magento eCommerce stores.",
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
