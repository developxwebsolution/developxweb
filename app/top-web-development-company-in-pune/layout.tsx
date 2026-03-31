import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Web Development Company in Pune | Laser Web Maker",
  description:
    "Laser Web Maker is a trusted web development company in Pune, offering fast, secure, and SEO-friendly websites for startups and businesses.",
  keywords: [
    "top web development company in Pune",
    "best web development company Pune",
    "website developers near me Pune",
    "professional web developers in Pune",
    "custom website development Pune",
    "SEO friendly website development Pune",
    "Laser Web Maker Pune",
    "top website designing company in Pune",
    "best website desinging company in Pune",
    "website designing company in Pune",
    "website development company in Pune",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/top-web-development-company-in-pune",
  },
  openGraph: {
    title: "Top Web Development Company in Pune | Laser Web Maker",
    description:
      "Trusted web development company in Pune building SEO-ready, high-performance websites for modern businesses.",
    url: "https://laserwebmaker.com/top-web-development-company-in-pune",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/pune-web-development.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Web Development Company in Pune",
    description:
      "Professional web development services in Pune. We create fast, secure, and SEO-friendly websites.",
    images: ["https://laserwebmaker.com/og/pune-web-development.png"],
  },
};

export default function PuneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* ✅ LocalBusiness Schema – Pune */}
      <Script type="application/ld+json" id="localbusiness-pune">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - Web Development Company in Pune",
          url: "https://laserwebmaker.com/top-web-development-company-in-pune",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description:
            "Laser Web Maker is a professional web development company in Pune, delivering custom and SEO-friendly websites for businesses and startups.",
          areaServed: [
            {
              "@type": "Place",
              name: "Pune, Maharashtra",
            },
          ],
          address: {
            "@type": "PostalAddress",
            addressRegion: "MH",
            addressCountry: "IN",
          },
          openingHours: "Mo-Su 09:30-18:30",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "1200",
          },
        })}
      </Script>

      {/* ✅ FAQ Schema – Pune */}
      <Script type="application/ld+json" id="faq-schema-pune">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which is the best web development company in Pune?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Laser Web Maker is a trusted web development company in Pune, known for building SEO-friendly and high-performance websites.",
              },
            },
            {
              "@type": "Question",
              name: "Do you provide web development services near me in Pune?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we provide professional web development services across Pune and nearby areas for businesses of all sizes.",
              },
            },
            {
              "@type": "Question",
              name: "How much does website development cost in Pune?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Website development cost depends on features and design. We offer transparent pricing with customized quotations.",
              },
            },
            {
              "@type": "Question",
              name: "Do you build SEO-friendly websites for Pune-based businesses?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, all our websites are optimized for SEO, speed, mobile responsiveness, and local search visibility.",
              },
            },
            {
              "@type": "Question",
              name: "Can you redesign an existing website in Pune?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we redesign existing websites to improve performance, user experience, and search engine rankings.",
              },
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}
