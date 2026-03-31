import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top & Most Trusted Web Development Company | Laser Web Maker", 
  description: "Laser Web Maker is the most trusted web development company offering custom websites, best-quality SEO-friendly designs, and full-stack development solutions.", 
  keywords: [
    "top web development company",
    "most trusted website designing",
    "best full stack development",
    "custom web development",
    "SEO-friendly website",

  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/web-development",
  },
  openGraph: {
    title: "Best & Most Trusted Web Development Company | Laser Web Maker", 
    description: "Looking for the best web development company? Laser Web Maker delivers top-quality, responsive, SEO-friendly websites and professional full-stack development services.", 
    url: "https://laserwebmaker.com/web-development",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/web-dev.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laser Web Maker - Top & Most Trusted Web Development", 
    description: "Professional and most trusted web development services. Build the best websites that attract customers and grow your business online.",
    images: ["https://laserwebmaker.com/og/web-dev.png"],
  },
};
export default function WebDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return <>
    {children}

    {/* Breadcrumbs */}
    <Script type="application/ld+json" id="breadcrumbs">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://laserwebmaker.com/" },
          { "@type": "ListItem", position: 2, name: "Web Development", item: "https://laserwebmaker.com/web-development" },
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
        name: "Laser Web Maker - Most Trusted Web Development",
        url: "https://laserwebmaker.com/web-development",
        telephone: "+91 72919 34043",
        description: "Laser Web Maker is a most trusted and top web development company delivering professional, SEO-friendly website designing and full-stack development solutions.", // 159 chars ✅
        openingHours: "Mo-Su 09:30-18:30",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "1200" },
      })}
    </Script>

    {/* Service */}
    <Script type="application/ld+json" id="service">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Web Development",
        provider: { "@type": "Organization", name: "Laser Web Maker", url: "https://laserwebmaker.com" },
        areaServed: "Global",
        offers: { "@type": "Offer", priceCurrency: "INR", price: "Starting at 14999", url: "https://laserwebmaker.com/contact" },
      })}
    </Script>

    {/* faqs */}
      <Script type="application/ld+json" id="faq-schema">
{JSON.stringify({
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
   {
     "@type": "Question",
     "name": "Which is the best web development company in India?",
     "acceptedAnswer": {
       "@type": "Answer",
       "text": "Laser Web Maker is a trusted web development company in India offering SEO-friendly and custom website development services."
     }
   },
   {
     "@type": "Question",
     "name": "Do you provide SEO friendly websites?",
     "acceptedAnswer": {
       "@type": "Answer",
       "text": "Yes, we build fast, secure, and SEO-optimized websites designed to rank on Google."
     }
   }
 ]
})}
</Script>

  </>;
}
