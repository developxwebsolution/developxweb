import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Our Clients | Trusted by 1000+ Businesses Worldwide | Laser Web Maker",
  description:
    "Discover the trusted clients of Laser Web Maker. We are proud to work with startups, enterprises, and global brands across multiple industries.",
  keywords: [
    "Laser Web Maker clients",
    "trusted clients",
    "our clients",
    "business partners",
    "web development clients",
    "emailer designing clients",
    "digital marketing clients",
    "trusted by businesses",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/our-clients",
  },
  openGraph: {
    title: "Our Clients | Trusted by Leading Brands | Laser Web Maker",
    description:
      "Laser Web Maker is trusted by businesses worldwide. Explore our growing list of clients across industries and regions.",
    url: "https://laserwebmaker.com/our-clients",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/our-clients.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Clients | Laser Web Maker",
    description:
      "Trusted by startups, enterprises, and global brands. Explore the clients who rely on Laser Web Maker for digital success.",
    images: ["https://laserwebmaker.com/og/our-clients.png"],
  },
};

export default function OurClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
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
              item: "https://laserwebmaker.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Our Clients",
              item: "https://laserwebmaker.com/our-clients",
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
          name: "Laser Web Maker",
          url: "https://laserwebmaker.com",
          telephone: "+91 7291934043",
          description:
            "Laser Web Maker is a trusted digital agency serving clients worldwide with web development, e-mailer designing, and digital marketing solutions.",
          openingHours: "Mo-Su 09:30-18:30",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "1200",
          },
        })}
      </Script>

      {/* ItemList – Clients */}
      <Script type="application/ld+json" id="clients">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Laser Web Maker Clients",
          description:
            "A list of businesses and brands that trust Laser Web Maker for their digital solutions.",
          itemListOrder: "http://schema.org/ItemListOrderAscending",
        })}
      </Script>
    </>
  );
}
