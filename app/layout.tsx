import type { Metadata } from "next";
import ClientLayout from "./ClientLayout";
import GlobalQuoteModal from "@/components/GlobalQuoteModal";
import "./globals.css";
// Metadata (server component)
import Script from "next/script";

export const metadata: Metadata = {
  title: "#Top Website Designing Company In India | Best eCommerce Website Development Company",
  description:
    "Laser Web Maker is a most trusted Website development company offering custom websites, SEO-friendly designs, full-stack development, and professional digital solutions.",
  icons: {
    icon: "/favicon.ico", // standard favicon
    shortcut: "/favicon.ico", // for browser shortcut
    apple: "/apple-touch-icon.png", // optional for iOS devices
  },
  keywords: [
    "top Website development company",
    "most trusted Website development",
    "best website Desigining company Noida",
    "custom Website development",
    "SEO-friendly website",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com",
  },
  openGraph: {
    title: "Best & Most Trusted Website Designing Company Noida | Laser Web Maker",
    description:
      "Looking for the best Website development company? Laser Web Maker delivers top-quality, responsive, SEO-friendly websites, custom web solutions, and professional digital services.",
    url: "https://laserwebmaker.com",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/homepage.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laser Web Maker - Top & Most Trusted Website Development Company",
    description:
      "Professional, SEO-friendly Website development services. Build the best websites with Laser Web Maker and grow your online presence.",
    images: ["https://laserwebmaker.com/og/homepage.png"],
  },
};

// Root layout (server component)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientLayout>
      {children}
      {/* ✅ Global Quote Form Modal */}
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
          name: "Laser Web Maker - Most Trusted Web Development Company",
          url: "https://laserwebmaker.com",
          telephone: "+91 7291934043",
          description:
            "Laser Web Maker is a most trusted and top Website development company providing custom websites, SEO-friendly designs, full-stack development, and professional digital solutions.",
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
          serviceType: "Web Development",
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
      <GlobalQuoteModal />
    </ClientLayout>
  );
}
