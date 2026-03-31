import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top & Most Trusted E-mailer Designing Services | Laser Web Maker", 
  description: "Laser Web Maker is a most trusted e-mailer designing company offering professional, creative, and high-converting e-mail campaigns for businesses.", 
  keywords: [
    "e-mailer designing services",
    "professional e-mailer design",
    "top e-mailer designing",
    "most trusted e-mailer designer",
    "creative e-mail campaigns"
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/emailer-designing",
  },
  openGraph: {
    title: "Best & Most Trusted E-mailer Designing Company | Laser Web Maker", 
    description: "Looking for top e-mailer designing services? Laser Web Maker delivers professional, creative, and high-converting e-mail designs to boost your business campaigns.", 
    url: "https://laserwebmaker.com/emailer-designing",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/emailer-design.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laser Web Maker - Top & Most Trusted E-mailer Designing", 
    description: "Professional and most trusted e-mailer designing services. Create high-converting, creative e-mail campaigns that engage your audience effectively.",
    images: ["https://laserwebmaker.com/og/emailer-design.png"],
  },
};
export default function EmailerDesigningLayout({ children }: { children: React.ReactNode }) {
  return <>
    {children}

    {/* Breadcrumbs */}
    <Script type="application/ld+json" id="breadcrumbs">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://laserwebmaker.com/" },
          { "@type": "ListItem", position: 2, name: "E-mailer Designing", item: "https://laserwebmaker.com/emailer-designing" },
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
        name: "Laser Web Maker - Most Trusted E-mailer Designing",
        url: "https://laserwebmaker.com/emailer-designing",
        telephone: "+91 72919 34043",
        description: "Laser Web Maker is a most trusted e-mailer designing company delivering professional, creative, and high-converting e-mail campaigns for businesses.",
        openingHours: "Mo-Su 09:30-18:30",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "1200" },
      })}
    </Script>

    {/* Service */}
    <Script type="application/ld+json" id="service">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "E-mailer Designing",
        provider: { "@type": "Organization", name: "Laser Web Maker", url: "https://laserwebmaker.com" },
        areaServed: "Global",
        offers: { "@type": "Offer", priceCurrency: "INR", price: "Starting at 2999", url: "https://laserwebmaker.com/contact" },
      })}
    </Script>

  </>;
}
