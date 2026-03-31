import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Web Development Company in Doha, Qatar | Laser Web Maker",
  description: "Professional web development company in Doha offering custom websites, e-commerce solutions, mobile apps, and digital services for Qatar businesses.",
  keywords: [
    "web development Doha",
    "website company Qatar",
    "Doha web developers",
    "e-commerce development Doha",
    "mobile app development Qatar",
    "digital agency Doha",
    "best web developers in Qatar",
    "Arabic website development Doha",
    "top website designing company in Doha",
    "best website desinging company in Doha",
    "website designing company in Doha",
    "website development company in Doha",
    "top website designing company in Qatar",
    "best website desinging company in Qatar",
    "website designing company in Qatar",
    "website development company in Qatar",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/top-web-development-company-in-doha-qatar",
  },
  openGraph: {
    title: "Web Development Company in Doha, Qatar | Laser Web Maker",
    description: "Professional web solutions for Doha businesses. Custom websites, e-commerce & mobile apps for the Qatari market.",
    url: "https://laserwebmaker.com/top-web-development-company-in-doha-qatar",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/doha-web-development.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company in Doha, Qatar",
    description: "Professional website solutions for Qatar businesses. E-commerce, mobile apps & digital marketing.",
    images: ["https://laserwebmaker.com/og/doha-web-development.jpg"],
  },
};

export default function DohaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script type="application/ld+json" id="localbusiness-doha">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - Web Development Company in Doha, Qatar",
          url: "https://laserwebmaker.com/top-web-development-company-in-doha-qatar",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description: "Professional web development company serving Doha and surrounding areas.",
          areaServed: [
            { "@type": "Place", name: "Doha, Qatar" },
            { "@type": "Place", name: "West Bay" },
            { "@type": "Place", name: "Al Sadd" },
            { "@type": "Place", name: "Al Wakrah" },
            { "@type": "Place", name: "Al Rayyan" },
            { "@type": "Place", name: "The Pearl" },
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Doha",
            addressCountry: "QA",
          },
          openingHours: "Mo-Th 08:00-17:00, Su 08:00-17:00",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
              opens: "08:00",
              closes: "17:00",
            },
          ],
          priceRange: "QAR QAR",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "750",
          },
        })}
      </Script>

      <Script type="application/ld+json" id="faq-schema-doha">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which web development company is best in Doha?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Laser Web Maker is recognized among Doha's top web development companies, specializing in creating sophisticated, Arabic/English bilingual websites for businesses in West Bay, Al Sadd, and across Qatar.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer Arabic website development in Doha?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we specialize in RTL Arabic website development with proper Arabic typography, cultural considerations, and bilingual interfaces essential for Qatar's business market.",
              },
            },
            {
              "@type": "Question",
              name: "What industries do you serve in Qatar?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We serve diverse Qatari industries including real estate, hospitality, oil & gas, construction, retail, healthcare, and government-related organizations with industry-specific web solutions.",
              },
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}