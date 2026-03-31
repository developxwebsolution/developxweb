import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Web Designing Company in Agra | Tourism Websites",
  description: "Professional web design company in Agra specializing in tourism websites, hotel booking systems, and creative designs for businesses in the City of Taj.",
  keywords: [
    "web design company Agra",
    "website designers Agra",
    "Agra web design agency",
    "tourism website design Agra",
    "hotel website design Agra",
    "responsive web design Agra",
    "graphic design Agra",
    "best web design in Agra",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/top-web-designing-company-in-agra",
  },
  openGraph: {
    title: "Creative Web Design Agency in Agra | Laser Web Maker",
    description: "Agra's leading web design company specializing in tourism and hospitality websites. Creative designs for Taj City businesses.",
    url: "https://laserwebmaker.com/top-web-designing-company-in-agra",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/agra-web-design.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Company in Agra",
    description: "Creative website design and tourism websites for Agra businesses.",
    images: ["https://laserwebmaker.com/og/agra-web-design.jpg"],
  },
};

export default function AgraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script type="application/ld+json" id="localbusiness-agra">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - Web Design Company in Agra",
          url: "https://laserwebmaker.com/top-web-designing-company-in-agra",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description: "Creative web design company in Agra specializing in tourism and hospitality websites.",
          areaServed: [
            { "@type": "Place", name: "Agra, Uttar Pradesh" },
            { "@type": "Place", name: "Taj Ganj" },
            { "@type": "Place", name: "Sadar Bazar" },
            { "@type": "Place", name: "Civil Lines" },
            { "@type": "Place", name: "Kamla Nagar" },
            { "@type": "Place", name: "Sanjay Place" },
          ],
          address: {
            "@type": "PostalAddress",
            addressRegion: "UP",
            addressCountry: "IN",
          },
          openingHours: "Mo-Sa 09:30-19:00",
          priceRange: "₹₹",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.7",
            ratingCount: "750",
          },
        })}
      </Script>

      <Script type="application/ld+json" id="faq-schema-agra">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which web design company is best for tourism websites in Agra?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Laser Web Maker is Agra's leading web design agency specializing in tourism and hospitality websites, creating stunning online presences for hotels, travel agencies, tour guides, and souvenir businesses in the City of Taj.",
              },
            },
            {
              "@type": "Question",
              name: "Do you design hotel booking websites for Agra properties?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we design complete hotel booking websites for Agra's hospitality sector with real-time availability, online reservations, room galleries, multilingual support, and integration with booking platforms.",
              },
            },
            {
              "@type": "Question",
              name: "What makes your Agra web design services unique?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We create designs that capture Agra's cultural heritage and tourism appeal, featuring beautiful Taj Mahal imagery, local craftsmanship elements, and user-friendly interfaces that convert visitors into customers.",
              },
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}