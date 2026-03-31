import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Best PrestaShop Website Development | Top Experts",
  description:
    "Get top PrestaShop website development services from trusted experts. We build secure, fast, and scalable PrestaShop eCommerce stores for growth.",
  keywords: [
    "PrestaShop Website Development",
    "Best PrestaShop Developers",
    "Trusted PrestaShop Development Services",
    "PrestaShop eCommerce Development",
    "Custom PrestaShop Store Development"
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/prestashop-website-development",
  },
  openGraph: {
    title: "Top PrestaShop Website Development Services | Expert Developers",
    description:
      "Professional PrestaShop website development services for secure, scalable, and high-performing eCommerce stores.",
    url: "https://laserwebmaker.com/prestashop-website-development",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/prestashop-web-dev.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best PrestaShop Website Development | Trusted Experts",
    description:
      "Build a powerful, secure, and SEO-friendly PrestaShop eCommerce store with our expert development team.",
    images: ["https://laserwebmaker.com/og/prestashop-web-dev.png"],
  },
};
export default function PrestaShopLayout({ children }: { children: React.ReactNode }) {
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
              name: "PrestaShop Website Development",
              item: "https://laserwebmaker.com/prestashop-website-development",
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
          serviceType: "PrestaShop Website Development",
          provider: {
            "@type": "Organization",
            name: "LaserWebMaker",
            url: "https://laserwebmaker.com",
          },
          description:
            "Best PrestaShop website development services by trusted experts. We build secure, fast, and scalable PrestaShop eCommerce stores.",
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
