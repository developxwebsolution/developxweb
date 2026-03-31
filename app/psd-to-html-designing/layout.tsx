import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top PSD to HTML Designing Services | Laser Web Maker", // 58 chars ✅
  description: "Laser Web Maker is a most trusted PSD to HTML designing company offering professional, responsive, and high-quality HTML conversions from PSD designs.", // 157 chars ✅
  keywords: [
    "PSD to HTML designing services",
    "professional PSD to HTML",
    "top PSD to HTML designer",
    "most trusted HTML conversion",
    "responsive HTML designs"
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/psd-to-html-designing",
  },
  openGraph: {
    title: "Best & Most Trusted PSD to HTML Designing | Laser Web Maker", // 62 chars ✅
    description: "Looking for top PSD to HTML designing services? Laser Web Maker delivers professional, responsive, and pixel-perfect HTML conversions from PSD designs.", // 174 chars ✅
    url: "https://laserwebmaker.com/psd-to-html-designing",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/psd-html.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laser Web Maker - Top PSD to HTML Designing Services", // 61 chars ✅
    description: "Professional and most trusted PSD to HTML designing services. Convert your PSD designs into responsive, high-quality HTML websites seamlessly.", // 147 chars ✅
    images: ["https://laserwebmaker.com/og/psd-html.png"],
  },
};


export default function PSDToHTMLLayout({ children }: { children: React.ReactNode }) {
  return <>
    {children}

    {/* Breadcrumbs */}
    <Script type="application/ld+json" id="breadcrumbs">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://laserwebmaker.com/" },
          { "@type": "ListItem", position: 2, name: "PSD to HTML Designing", item: "https://laserwebmaker.com/psd-to-html-designing" },
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
        name: "Laser Web Maker - Most Trusted PSD to HTML Designing",
        url: "https://laserwebmaker.com/psd-to-html-designing",
        telephone: "+91 7291934043",
        description: "Laser Web Maker is a most trusted PSD to HTML designing company providing professional, responsive, and pixel-perfect HTML conversion services from PSD.", // 157 chars ✅
        openingHours: "Mo-Su 09:30-18:30",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "1200" },
      })}
    </Script>

    {/* Service */}
    <Script type="application/ld+json" id="service">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "PSD to HTML Designing",
        provider: { "@type": "Organization", name: "Laser Web Maker", url: "https://laserwebmaker.com" },
        areaServed: "Global",
        offers: { "@type": "Offer", priceCurrency: "INR", price: "Starting at 6999", url: "https://laserwebmaker.com/contact" },
      })}
    </Script>

  </>;
}
