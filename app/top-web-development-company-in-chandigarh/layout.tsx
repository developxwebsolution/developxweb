import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Best Web Development Company in Chandigarh | Laser Web Maker",
  description:
    "Professional web development services in Chandigarh. We create responsive websites, e-commerce stores & digital solutions for Chandigarh businesses.",
  keywords: [
    "web development Chandigarh",
    "website company Chandigarh",
    "Chandigarh web designers",
    "e-commerce development Chandigarh",
    "SEO services Chandigarh",
    "digital marketing Chandigarh",
    "Mohali web development",
    "Panchkula website design",
    "top website designing company in Chandigarh",
    "best website desinging company in Chandigarh",
    "website designing company in Chandigarh",
    "website development company in Chandigarh",
  ],
  robots: "index, follow",
  alternates: {
    canonical:
      "https://laserwebmaker.com/top-web-development-company-in-chandigarh",
  },
  openGraph: {
    title: "Web Development Services in Chandigarh | Laser Web Maker",
    description:
      "Chandigarh's leading web development company. Custom websites, e-commerce & digital marketing solutions.",
    url: "https://laserwebmaker.com/top-web-development-company-in-chandigarh",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/chandigarh-web-development.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company in Chandigarh",
    description:
      "Professional web solutions for Chandigarh, Mohali & Panchkula businesses.",
    images: ["https://laserwebmaker.com/og/chandigarh-web-development.jpg"],
  },
};

export default function ChandigarhLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script type="application/ld+json" id="localbusiness-chandigarh">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - Web Development Company in Chandigarh",
          url: "https://laserwebmaker.com/top-web-development-company-in-chandigarh",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description:
            "Leading web development company in Chandigarh providing modern digital solutions.",
          areaServed: [
            { "@type": "Place", name: "Chandigarh" },
            { "@type": "Place", name: "Mohali" },
            { "@type": "Place", name: "Panchkula" },
            { "@type": "Place", name: "Zirakpur" },
          ],
          address: {
            "@type": "PostalAddress",
            addressRegion: "CH",
            addressCountry: "IN",
          },
          openingHours: "Mo-Sa 09:30-19:00",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.7",
            ratingCount: "1100",
          },
        })}
      </Script>

      <Script type="application/ld+json" id="faq-schema-chandigarh">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Looking for web development services in Chandigarh?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we serve Chandigarh, Mohali, Panchkula and surrounding areas with professional web development, e-commerce, and digital marketing services.",
              },
            },
            {
              "@type": "Question",
              name: "What industries do you serve in Chandigarh?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We work with various sectors in Chandigarh including education, healthcare, real estate, hospitality, and startups, creating industry-specific web solutions.",
              },
            },
            {
              "@type": "Question",
              name: "Do you provide startup website packages in Chandigarh?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we offer special startup-friendly packages for Chandigarh-based businesses, helping new ventures establish their online presence affordably.",
              },
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}
