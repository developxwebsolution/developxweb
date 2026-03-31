import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Best Shopify Website Development Services | LaserWebMaker",
  description:
    "LaserWebMaker offers the best and most trusted Shopify website development services with custom themes, fast performance, and SEO-friendly solutions.",
  keywords: [
    "Shopify website development",
    "best Shopify developer",
    "top Shopify development company",
    "LaserWebMaker",
    "Shopify ecommerce"
  ],

  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/shopify-website-development",
  },
  openGraph: {
    title: "Top Shopify Website Development Services | LaserWebMaker",
    description:
      "Get custom, high-performing, and SEO-optimized Shopify development services from the trusted experts at LaserWebMaker.",
    url: "https://laserwebmaker.com/shopify-website-development",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/shopify-dev.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LaserWebMaker - Best Shopify Web Development Services",
    description:
      "We create top-quality Shopify stores with fast loading, strong SEO, and modern UI.",
    images: ["https://laserwebmaker.com/og/shopify-dev.png"],
  },
};
export default function ShopifyLayout({ children }: { children: React.ReactNode }) {
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
              name: "Shopify Website Development",
              item: "https://laserwebmaker.com/shopify-website-development",
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
          serviceType: "Shopify Website Development",
          provider: {
            "@type": "Organization",
            name: "LaserWebMaker",
            url: "https://laserwebmaker.com",
          },
          description:
            "LaserWebMaker provides top Shopify website development services with custom themes, fast performance, and SEO-friendly solutions.",
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
