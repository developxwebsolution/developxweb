import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Web Development Company in Thane & Mumbai | Laser Web Maker",
  description:
    "Laser Web Maker is a leading web development company in Thane and Mumbai offering fast, affordable and SEO-friendly websites for small to medium-sized businesses.",
  keywords: [
    "top web development company in Thane",
    "web development company in Mumbai",
    "website developers near me",
    "best website development services Thane",
    "professional web developers Mumbai",
    "SEO friendly website development",
    "Laser Web Maker Thane Mumbai",
  "web development company thane",
  ],
  robots: "index, follow",
  alternates: {
    canonical:
      "https://laserwebmaker.com/top-web-development-company-in-thane-mumbai",
  },
  openGraph: {
    title:
      "Top Web Development Company in Thane & Mumbai | Laser Web Maker",
    description:
      "Trusted web development company in Thane and Mumbai creating SEO-friendly, high-performance websites for businesses.",
    url: "https://laserwebmaker.com/top-web-development-company-in-thane-mumbai",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/thane-mumbai-web-development.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Web Development Company in Thane & Mumbai",
    description:
      "Professional web development services in Thane and Mumbai. We build fast, secure, and SEO-ready websites.",
    images: [
      "https://laserwebmaker.com/og/thane-mumbai-web-development.png",
    ],
  },
};

export default function ThaneMumbaiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* ✅ LocalBusiness Schema (Thane + Mumbai) */}
      <Script type="application/ld+json" id="localbusiness-schema">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - Web Development Company in Thane & Mumbai",
          url: "https://laserwebmaker.com/top-web-development-company-in-thane-mumbai",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description:
            "Laser Web Maker is a professional web development company serving Thane and Mumbai, offering SEO-friendly and custom website development services.",
          areaServed: [
            { "@type": "Place", name: "Thane, Maharashtra" },
            { "@type": "Place", name: "Mumbai, Maharashtra" },
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

      {/* ✅ FAQ Schema (Rich Results) */}
      <Script type="application/ld+json" id="faq-schema">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which is the best web development company in Thane and Mumbai?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Laser Web Maker is a trusted web development company in Thane and Mumbai, known for delivering SEO-friendly and high-performance websites.",
              },
            },
            {
              "@type": "Question",
              name: "Do you provide website development services near me?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we provide professional web development services in Thane, Mumbai, and nearby areas for local and remote clients.",
              },
            },
            {
              "@type": "Question",
              name: "How much does website development cost in Thane or Mumbai?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The cost depends on design and features. We offer transparent pricing with customized quotations based on business needs.",
              },
            },
            {
              "@type": "Question",
              name: "Do you build SEO-friendly websites for local businesses?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, all our websites are optimized for SEO, mobile responsiveness, speed, and local search rankings.",
              },
            },
            {
              "@type": "Question",
              name: "Can you redesign an existing website?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we redesign outdated websites to improve performance, user experience, and search visibility.",
              },
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}
