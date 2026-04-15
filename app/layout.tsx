import type { Metadata } from "next";
import ClientLayout from "./ClientLayout";
import GlobalQuoteModal from "@/components/GlobalQuoteModal";
import "./globals.css";
import Script from "next/script";

// ✅ Metadata (SEO Optimized)
export const metadata: Metadata = {
  title:
    "DevelopX Web | Website Developer in India | Affordable Web Development Services",
  description:
    "DevelopX Web is a leading website developer in India offering affordable web design, business website development, ecommerce solutions, and SEO-friendly websites to grow your business online.",
  icons: {
    icon: "./favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  keywords: [
    "website developer in India",
    "web development company India",
    "affordable web design",
    "business website development",
    "ecommerce website development",
    "SEO-friendly website",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://developxweb.com",
  },

  openGraph: {
    title:
      "DevelopX Web | Professional Website Development Company in India",
    description:
      "Get modern, fast, and SEO-friendly websites with DevelopX Web. We help businesses grow online with affordable web development services.",
    url: "https://developxweb.com",
    type: "website",
    images: [
      {
        url: "https://developxweb.com/og/homepage.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "DevelopX Web - Website Developer in India | Web Development Services",
    description:
      "Affordable and professional web development services. Build your business website with DevelopX Web.",
    images: ["https://developxweb.com/og/homepage.png"],
  },
};

// ✅ Root Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientLayout>
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
              item: "https://developxweb.com/",
            },
          ],
        })}
      </Script>

      {/* Organization */}
      <Script type="application/ld+json" id="organization">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "DevelopX Web",
          url: "https://developxweb.com",
          logo: "https://developxweb.com/logo.png",
          sameAs: [
            "https://www.facebook.com/",
            "https://www.instagram.com/",
            "https://www.linkedin.com/",
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91 9625148434",
            contactType: "customer service",
          },
        })}
      </Script>

      {/* Local Business */}
      <Script type="application/ld+json" id="localbusiness">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "DevelopX Web - Website Developer in India",
          url: "https://developxweb.com",
          telephone: "+91 9625148434",
          description:
            "DevelopX Web is a trusted web development company in India offering affordable web design, business website development, ecommerce solutions, and SEO-friendly websites.",
          openingHours: "Mo-Su 09:30-18:30",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            ratingCount: "150",
          },
        })}
      </Script>
      <Script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "DevelopX Web",
          "url": "https://developxweb.com",
          "logo": "https://developxweb.com/logo.png"
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
            name: "DevelopX Web",
            url: "https://developxweb.com",
          },
          areaServed: "India",
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            price: "2999",
            url: "https://developxweb.com/contact",
          },
        })}
      </Script>

      {/* Global Modal */}
      <GlobalQuoteModal />
    </ClientLayout>
  );
}