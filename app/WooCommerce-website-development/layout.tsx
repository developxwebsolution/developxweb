import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Best WooCommerce Website Development | LaserWebMaker",
  description:
    "LaserWebMaker offers the best WooCommerce website development services with secure, fast, and SEO-friendly eCommerce solutions for all industries.",
  keywords: [
    "WooCommerce website development",
    "best WooCommerce developer",
    "top WooCommerce development company",
    "LaserWebMaker",
    "WordPress ecommerce"
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/woocommerce-website-development",
  },
  openGraph: {
    title: "Top WooCommerce Website Development Services | LaserWebMaker",
    description:
      "Get secure, scalable, and SEO-optimized WooCommerce development services from the most trusted team at LaserWebMaker.",
    url: "https://laserwebmaker.com/woocommerce-website-development",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/woocommerce-dev.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LaserWebMaker - Best WooCommerce Web Development Services",
    description:
      "We create high-performing WooCommerce stores with fast speed, modern UI, and SEO-focused development.",
    images: ["https://laserwebmaker.com/og/woocommerce-dev.png"],
  },
};
export default function WooCommerceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}

      {/* JSON-LD: Breadcrumbs */}
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
              name: "WooCommerce Website Development",
              item: "https://laserwebmaker.com/woocommerce-website-development",
            },
          ],
        })}
      </Script>

      {/* JSON-LD: Organization */}
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
            contactType: "customer service"
          }
        })}
      </Script>

      {/* JSON-LD: Service */}
      <Script type="application/ld+json" id="service">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "WooCommerce Website Development",
          provider: {
            "@type": "Organization",
            name: "LaserWebMaker",
            url: "https://laserwebmaker.com",
          },
          description:
            "LaserWebMaker provides top WooCommerce website development services with SEO-friendly design, fast speed, and secure ecommerce features.",
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            price: "14999",
            url: "https://laserwebmaker.com/contact",
            availability: "https://schema.org/InStock"
          }
        })}
      </Script>
    </>
  );
}
