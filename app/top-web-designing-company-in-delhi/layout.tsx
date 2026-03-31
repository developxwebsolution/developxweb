import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Website Designing Company in Delhi | Creative Design Agency",
  description: "Premier web design company in Delhi offering creative UI/UX design, responsive websites, and digital branding services for businesses across the capital.",
  keywords: [
    "website designing company in Delhi",
    "website designers in Delhi",
    "Delhi web design agency",
    "UI/UX design Delhi",
    "creative agency Delhi",
    "responsive web design Delhi",
    "graphic design Delhi",
    "digital branding Delhi",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/top-web-designing-company-in-delhi",
  },
  openGraph: {
    title: "Creative Website Designing Agency in Delhi | Laser Web Maker",
    description: "Delhi's leading web design company. Creative websites, UI/UX design, and digital solutions for businesses across the capital.",
    url: "https://laserwebmaker.com/top-web-designing-company-in-delhi",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/delhi-web-design.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Designing Company in Delhi",
    description: "Creative website design and UI/UX services for Delhi businesses.",
    images: ["https://laserwebmaker.com/og/delhi-web-design.jpg"],
  },
};

export default function DelhiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script type="application/ld+json" id="localbusiness-delhi">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - Web Design Company in Delhi",
          url: "https://laserwebmaker.com/top-web-designing-company-in-delhi",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description: "Leading web design company serving all areas of Delhi.",
          areaServed: [
            { "@type": "Place", name: "Delhi" },
            { "@type": "Place", name: "South Delhi" },
            { "@type": "Place", name: "North Delhi" },
            { "@type": "Place", name: "West Delhi" },
            { "@type": "Place", name: "East Delhi" },
            { "@type": "Place", name: "Central Delhi" },
            { "@type": "Place", name: "New Delhi" },
          ],
          address: {
            "@type": "PostalAddress",
            addressRegion: "DL",
            addressCountry: "IN",
          },
          openingHours: "Mo-Sa 09:30-19:00",
          priceRange: "₹₹-₹₹₹",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "2100",
          },
        })}
      </Script>

      <Script type="application/ld+json" id="faq-schema-delhi">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which is the best web design company in Delhi?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Laser Web Maker is recognized as Delhi's premier web design agency, known for creating sophisticated, high-converting websites for businesses across South Delhi, Connaught Place, and all Delhi regions.",
              },
            },
            {
              "@type": "Question",
              name: "What makes your Delhi web design services stand out?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We understand Delhi's diverse business landscape, creating websites that work for government organizations, corporate businesses, retail markets, and startups with designs that reflect Delhi's cosmopolitan character.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer multilingual website design in Delhi?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we create bilingual and multilingual websites for Delhi's diverse population, including Hindi/English combinations and designs that cater to Delhi's international and local business communities.",
              },
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}