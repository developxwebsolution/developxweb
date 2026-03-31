import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Best Web Development Company in Gonda | Laser Web Maker",
  description:
    "Professional web development services in Gonda offering affordable website design, e-commerce solutions, and digital marketing for local businesses.",
  keywords: [
    "web development company Gonda",
    "website development Gonda",
    "Gonda web developers",
    "affordable website design Gonda",
    "SEO services Gonda",
    "digital marketing Gonda",
    "best web company in Gonda",
    "UP web development",
    "top website designing company in Gonda",
    "best website desinging company in Gonda",
    "website designing company in Gonda",
    "website development company in Gonda",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/top-web-development-company-in-gonda",
  },
  openGraph: {
    title: "Web Development Services in Gonda | Laser Web Maker",
    description:
      "Local web development experts in Gonda. Affordable websites, e-commerce & digital solutions for local businesses.",
    url: "https://laserwebmaker.com/top-web-development-company-in-gonda",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/gonda-web-development.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company in Gonda",
    description: "Affordable website design & development services in Gonda.",
    images: ["https://laserwebmaker.com/og/gonda-web-development.jpg"],
  },
};

export default function GondaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script type="application/ld+json" id="localbusiness-gonda">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - Web Development Company in Gonda",
          url: "https://laserwebmaker.com/top-web-development-company-in-gonda",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description:
            "Local web development experts in Gonda providing affordable website solutions.",
          areaServed: [
            { "@type": "Place", name: "Gonda, Uttar Pradesh" },
            { "@type": "Place", name: "Colonelganj" },
            { "@type": "Place", name: "Mankapur" },
            { "@type": "Place", name: "Tarabganj" },
          ],
          address: {
            "@type": "PostalAddress",
            addressRegion: "UP",
            addressCountry: "IN",
          },
          openingHours: "Mo-Sa 09:30-19:00",
          priceRange: "₹",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.5",
            ratingCount: "420",
          },
        })}
      </Script>

      <Script type="application/ld+json" id="faq-schema-gonda">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Looking for web development services in Gonda?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we're the leading web development company serving Gonda and surrounding areas, offering professional yet affordable website solutions for local shops, businesses, educational institutes, and service providers.",
              },
            },
            {
              "@type": "Question",
              name: "What types of websites do you build for Gonda businesses?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We create business websites, e-commerce stores, educational portals, and service websites tailored for Gonda's local market, with features that help you reach customers in Colonelganj, Mankapur, and nearby areas.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer budget-friendly packages for small businesses in Gonda?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely. We have special affordable packages starting from ₹8,000 for small businesses in Gonda, including mobile-responsive design, basic SEO, and easy content management.",
              },
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}
