import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Web Designing Company in Mumbai | Creative Design Agency",
  description:
    "Award-winning web design company in Mumbai offering creative UI/UX design, responsive websites, and digital branding for Mumbai's competitive market.",
  keywords: [
    "web design company Mumbai",
    "website designers Mumbai",
    "Mumbai web design agency",
    "UI/UX design Mumbai",
    "creative agency Mumbai",
    "responsive web design Mumbai",
    "graphic design Mumbai",
    "digital branding Mumbai",
    "top website designing company in Mumbai",
    "best website desinging company in Mumbai",
    "website designing company in Mumbai",
    "website development company in Mumbai",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/top-web-designing-company-in-mumbai",
  },
  openGraph: {
    title: "Creative Web Design Agency in Mumbai | Laser Web Maker",
    description:
      "Premium web design services in Mumbai. Creative websites, UI/UX design, and digital solutions for businesses.",
    url: "https://laserwebmaker.com/top-web-designing-company-in-mumbai",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/mumbai-web-design.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Company in Mumbai",
    description:
      "Creative website design and UI/UX services for Mumbai businesses.",
    images: ["https://laserwebmaker.com/og/mumbai-web-design.jpg"],
  },
};

export default function MumbaiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script type="application/ld+json" id="localbusiness-mumbai">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - Web Design Company in Mumbai",
          url: "https://laserwebmaker.com/top-web-designing-company-in-mumbai",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description:
            "Award-winning web design company in Mumbai providing premium creative services.",
          areaServed: [
            { "@type": "Place", name: "Mumbai, Maharashtra" },
            { "@type": "Place", name: "South Mumbai" },
            { "@type": "Place", name: "Bandra" },
            { "@type": "Place", name: "Andheri" },
            { "@type": "Place", name: "Lower Parel" },
          ],
          address: {
            "@type": "PostalAddress",
            addressRegion: "MH",
            addressCountry: "IN",
          },
          openingHours: "Mo-Sa 09:30-19:00",
          priceRange: "₹₹₹",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "1500",
          },
        })}
      </Script>

      <Script type="application/ld+json" id="faq-schema-mumbai">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which web design company is best in Mumbai?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Laser Web Maker is among Mumbai's top web design agencies, known for creating sophisticated, conversion-focused websites for finance, entertainment, hospitality, and retail businesses across the city.",
              },
            },
            {
              "@type": "Question",
              name: "What industries do you design for in Mumbai?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We design for Mumbai's diverse industries including Bollywood/entertainment, finance, hospitality, retail, startups, and corporate businesses, creating industry-specific designs that stand out.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer mobile-responsive design in Mumbai?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely. All our Mumbai website designs are mobile-first, responsive, and optimized for the high mobile usage in India's commercial capital.",
              },
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}
