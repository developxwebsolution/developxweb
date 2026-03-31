import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Web Development Company in Dubai, UAE | Laser Web Maker",
  description:
    "Premier web development company in Dubai offering professional website design, e-commerce solutions, mobile apps & digital marketing services in UAE.",
  keywords: [
    "web development Dubai",
    "website company Dubai",
    "Dubai web developers",
    "e-commerce development Dubai",
    "mobile app development Dubai",
    "SEO services Dubai",
    "digital marketing Dubai UAE",
    "best web agency Dubai",
    "top website designing company in Dubai",
    "best website desinging company in Dubai",
    "website designing company in Dubai",
    "website development company in Dubai",
  ],
  robots: "index, follow",
  alternates: {
    canonical:
      "https://laserwebmaker.com/top-web-development-company-in-dubai-uae",
  },
  openGraph: {
    title: "Web Development Company in Dubai, UAE | Laser Web Maker",
    description:
      "Professional web solutions for Dubai businesses. Custom websites, e-commerce & mobile apps for UAE market.",
    url: "https://laserwebmaker.com/top-web-development-company-in-dubai-uae",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/dubai-web-development.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Services in Dubai, UAE",
    description:
      "Professional website solutions for Dubai businesses. E-commerce, mobile apps & digital marketing.",
    images: ["https://laserwebmaker.com/og/dubai-web-development.jpg"],
  },
};

export default function DubaiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script type="application/ld+json" id="localbusiness-dubai">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - Web Development Company in Dubai, UAE",
          url: "https://laserwebmaker.com/top-web-development-company-in-dubai-uae",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description:
            "Premium web development company in Dubai offering cutting-edge digital solutions.",
          areaServed: [
            { "@type": "Place", name: "Dubai, UAE" },
            { "@type": "Place", name: "Dubai Marina" },
            { "@type": "Place", name: "Business Bay" },
            { "@type": "Place", name: "JLT" },
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Dubai",
            addressRegion: "Dubai",
            addressCountry: "AE",
          },
          openingHours: "Mo-Fr 09:00-18:00, Sa 09:00-14:00",
          priceRange: "$$$",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            ratingCount: "1500",
          },
        })}
      </Script>

      <Script type="application/ld+json" id="faq-schema-dubai">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which web development company is best in Dubai?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Laser Web Maker is recognized among Dubai's top web development companies, specializing in creating high-performance websites and e-commerce platforms for UAE businesses.",
              },
            },
            {
              "@type": "Question",
              name: "What services do you offer in Dubai?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We offer comprehensive web solutions in Dubai including custom website development, e-commerce platforms (Magento, Shopify), mobile apps, SEO, digital marketing, and enterprise solutions.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer Arabic website development in Dubai?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely. We specialize in bilingual (Arabic/English) websites with RTL support, ensuring your Dubai business connects effectively with both local and international audiences.",
              },
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}
