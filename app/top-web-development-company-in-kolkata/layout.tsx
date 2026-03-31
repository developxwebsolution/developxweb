import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Web Development Company in Kolkata | Laser Web Maker",
  description:
    "Professional website development company in Kolkata offering custom web design, e-commerce solutions & SEO services. Boost your online presence today.",
  keywords: [
    "web development company Kolkata",
    "Kolkata web designers",
    "website development Kolkata",
    "e-commerce Kolkata",
    "SEO services Kolkata",
    "digital agency Kolkata",
    "best web developers Kolkata",
    "Kolkata IT company",
    "top website designing company in Kolkata",
    "best website desinging company in Kolkata",
    "website designing company in Kolkata",
    "website development company in Kolkata",
  ],
  robots: "index, follow",
  alternates: {
    canonical:
      "https://laserwebmaker.com/top-web-development-company-in-kolkata",
  },
  openGraph: {
    title: "Web Development Services in Kolkata | Laser Web Maker",
    description:
      "Kolkata's premier web development company. We build responsive websites, e-commerce platforms & digital solutions for businesses.",
    url: "https://laserwebmaker.com/top-web-development-company-in-kolkata",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/kolkata-web-development.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company in Kolkata",
    description:
      "Professional web solutions for Kolkata businesses. Custom websites & digital marketing.",
    images: ["https://laserwebmaker.com/og/kolkata-web-development.jpg"],
  },
};

export default function KolkataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script type="application/ld+json" id="localbusiness-kolkata">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - Web Development Company in Kolkata",
          url: "https://laserwebmaker.com/top-web-development-company-in-kolkata",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description:
            "Leading web development company in Kolkata offering premium digital solutions.",
          areaServed: [
            { "@type": "Place", name: "Kolkata, West Bengal" },
            { "@type": "Place", name: "Salt Lake" },
            { "@type": "Place", name: "Howrah" },
            { "@type": "Place", name: "New Town" },
          ],
          address: {
            "@type": "PostalAddress",
            addressRegion: "WB",
            addressCountry: "IN",
          },
          openingHours: "Mo-Sa 09:30-19:00",
          priceRange: "₹₹₹",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "1200",
          },
        })}
      </Script>

      <Script type="application/ld+json" id="faq-schema-kolkata">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Who is the best web development company in Kolkata?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Laser Web Maker is among Kolkata's top-rated web development companies, known for delivering high-quality, responsive websites with excellent customer support.",
              },
            },
            {
              "@type": "Question",
              name: "What makes your Kolkata web services different?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We focus on Kolkata's market needs, offering localized SEO, multilingual support (Bengali/English), and industry-specific solutions for retail, hospitality, and services sectors.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer multilingual website development in Kolkata?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we create bilingual websites (English/Bengali) tailored for Kolkata's diverse audience, ensuring better engagement with local customers.",
              },
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}
