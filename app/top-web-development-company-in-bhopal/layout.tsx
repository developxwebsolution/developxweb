import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Web Development Company in Bhopal | Laser Web Maker",
  description:
    "Leading web development company in Bhopal offering professional website design, e-commerce solutions, and digital marketing for Madhya Pradesh businesses.",
  keywords: [
    "web development company Bhopal",
    "website development Bhopal",
    "Bhopal web developers",
    "e-commerce development Bhopal",
    "SEO services Bhopal",
    "digital marketing Bhopal",
    "best web company in Bhopal",
    "MP web development",
    "top website designing company in Bhopal",
    "best website desinging company in Bhopal",
    "website designing company in Bhopal",
    "website development company in Bhopal",
  ],
  robots: "index, follow",
  alternates: {
    canonical:
      "https://laserwebmaker.com/top-web-development-company-in-bhopal",
  },
  openGraph: {
    title: "Professional Web Development Services in Bhopal | Laser Web Maker",
    description:
      "Build your online presence with Bhopal's top web development company. Custom websites, e-commerce & digital solutions.",
    url: "https://laserwebmaker.com/top-web-development-company-in-bhopal",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/bhopal-web-development.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Web Development Company in Bhopal",
    description:
      "Professional website design & development services in Bhopal for businesses.",
    images: ["https://laserwebmaker.com/og/bhopal-web-development.jpg"],
  },
};

export default function BhopalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script type="application/ld+json" id="localbusiness-bhopal">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - Web Development Company in Bhopal",
          url: "https://laserwebmaker.com/top-web-development-company-in-bhopal",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description:
            "Professional web development company in Bhopal providing custom websites for government and private sectors.",
          areaServed: [
            { "@type": "Place", name: "Bhopal, Madhya Pradesh" },
            { "@type": "Place", name: "Arera Colony" },
            { "@type": "Place", name: "MP Nagar" },
            { "@type": "Place", name: "New Market" },
            { "@type": "Place", name: "Hoshangabad Road" },
          ],
          address: {
            "@type": "PostalAddress",
            addressRegion: "MP",
            addressCountry: "IN",
          },
          openingHours: "Mo-Sa 09:30-19:00",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.6",
            ratingCount: "850",
          },
        })}
      </Script>

      <Script type="application/ld+json" id="faq-schema-bhopal">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which is the best web development company in Bhopal?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Laser Web Maker is recognized as Bhopal's top web development company, known for creating responsive websites for educational institutions, government organizations, and businesses across Arera Colony and MP Nagar areas.",
              },
            },
            {
              "@type": "Question",
              name: "Do you work with educational institutions in Bhopal?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we specialize in educational website development for Bhopal's schools, colleges, and coaching institutes, featuring student portals, admission systems, and e-learning platforms.",
              },
            },
            {
              "@type": "Question",
              name: "What industries do you serve in Bhopal?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We serve diverse industries in Bhopal including education, healthcare, tourism, real estate, government organizations, and local businesses, creating industry-specific web solutions.",
              },
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}
