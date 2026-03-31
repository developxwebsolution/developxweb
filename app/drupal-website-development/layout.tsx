import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Best Drupal Website Development Services | LaserWebMaker",
  description:
    "LaserWebMaker offers the best and most trusted Drupal website development services with secure, scalable, SEO-friendly solutions for all businesses.",
  keywords: [
    "Drupal website development",
    "best Drupal developer",
    "top Drupal development company",
    "LaserWebMaker",
    "Drupal services"
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/drupal-website-development",
  },
  openGraph: {
    title: "Top Drupal Website Development Services | LaserWebMaker",
    description:
      "Get secure, scalable, and SEO-optimized Drupal development services from LaserWebMaker. Trusted by businesses for quality and performance.",
    url: "https://laserwebmaker.com/drupal-website-development",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/drupal-dev.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LaserWebMaker - Best Drupal Web Development Services",
    description:
      "We deliver top-quality Drupal development with secure, fast, SEO-friendly solutions.",
    images: ["https://laserwebmaker.com/og/drupal-dev.png"],
  },
};
export default function DrupalLayout({ children }: { children: React.ReactNode }) {
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
              name: "Drupal Website Development",
              item: "https://laserwebmaker.com/drupal-website-development",
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
            "https://www.linkedin.com/company/laserwebmaker",
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91 72919 34043",
            contactType: "customer service",
          },
        })}
      </Script>

      {/* JSON-LD: Service */}
      <Script type="application/ld+json" id="service">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Drupal Website Development",
          provider: {
            "@type": "Organization",
            name: "LaserWebMaker",
            url: "https://laserwebmaker.com",
          },
          description:
            "LaserWebMaker provides top, secure, and SEO-optimized Drupal website development tailored for business growth.",
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            price: "14999",
            url: "https://laserwebmaker.com/contact",
            availability: "https://schema.org/InStock",
          },
        })}
      </Script>
    </>
  );
}
