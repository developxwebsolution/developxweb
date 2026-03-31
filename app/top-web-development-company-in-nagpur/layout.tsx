import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Web Development Company in Nagpur | Laser Web Maker",
  description:
    "Laser Web Maker is a trusted web development company in Nagpur, delivering fast, secure, and SEO-friendly websites for businesses and startups.",
  keywords: [
    "top web development company in Nagpur",
    "best web development company Nagpur",
    "website developers near me Nagpur",
    "professional web developers in Nagpur",
    "custom website development Nagpur",
    "SEO friendly website development Nagpur",
    "Laser Web Maker Nagpur",
    "top website designing company in Nagpur",
    "best website desinging company in Nagpur",
    "website designing company in Nagpur",
    "website development company in Nagpur",
  ],
  robots: "index, follow",
  alternates: {
    canonical:
      "https://laserwebmaker.com/top-web-development-company-in-nagpur",
  },
  openGraph: {
    title: "Top Web Development Company in Nagpur | Laser Web Maker",
    description:
      "Trusted web development company in Nagpur building SEO-ready, high-performance websites for modern businesses.",
    url: "https://laserwebmaker.com/top-web-development-company-in-nagpur",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/nagpur-web-development.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Web Development Company in Nagpur",
    description:
      "Professional web development services in Nagpur. We create fast, secure, and SEO-friendly websites.",
    images: [
      "https://laserwebmaker.com/og/nagpur-web-development.png",
    ],
  },
};

export default function NagpurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* ✅ LocalBusiness Schema – Nagpur */}
      <Script type="application/ld+json" id="localbusiness-nagpur">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - Web Development Company in Nagpur",
          url: "https://laserwebmaker.com/top-web-development-company-in-nagpur",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description:
            "Laser Web Maker is a professional web development company in Nagpur, offering SEO-friendly and custom website development services for businesses.",
          areaServed: [
            {
              "@type": "Place",
              name: "Nagpur, Maharashtra",
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

      {/* ✅ FAQ Schema – Nagpur */}
      <Script type="application/ld+json" id="faq-schema-nagpur">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which is the best web development company in Nagpur?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Laser Web Maker is a trusted web development company in Nagpur, known for building SEO-friendly and high-performance websites.",
              },
            },
            {
              "@type": "Question",
              name: "Do you provide web development services near me in Nagpur?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we provide professional web development services across Nagpur and nearby areas for businesses of all sizes.",
              },
            },
            {
              "@type": "Question",
              name: "How much does website development cost in Nagpur?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Website development cost depends on features and design. We offer transparent pricing with customized quotations.",
              },
            },
            {
              "@type": "Question",
              name: "Do you build SEO-friendly websites for Nagpur-based businesses?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, all our websites are optimized for SEO, speed, mobile responsiveness, and local search visibility.",
              },
            },
            {
              "@type": "Question",
              name: "Can you redesign an existing website in Nagpur?",
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
