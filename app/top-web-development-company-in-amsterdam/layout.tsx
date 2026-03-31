import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Web Development Company in Amsterdam | EU Experts",
  description: "Professional web development company in Amsterdam offering custom websites, e-commerce solutions, and digital services for Dutch and international businesses.",
  keywords: [
    "web development Amsterdam",
    "website company Amsterdam",
    "Amsterdam web developers",
    "e-commerce development Amsterdam",
    "Dutch web development",
    "EU web development",
    "responsive websites Amsterdam",
    "digital agency Amsterdam",
    "top website designing company in Amsterdam",
    "best website desinging company in Amsterdam",
    "website designing company in Amsterdam",
    "website development company in Amsterdam",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/top-web-development-company-in-amsterdam",
  },
  openGraph: {
    title: "Web Development Services in Amsterdam | Laser Web Maker",
    description: "Professional web solutions for Amsterdam businesses. Custom websites, e-commerce & digital services in the Netherlands.",
    url: "https://laserwebmaker.com/top-web-development-company-in-amsterdam",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/amsterdam-web-development.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company in Amsterdam",
    description: "Professional web solutions for Dutch and international businesses in Amsterdam.",
    images: ["https://laserwebmaker.com/og/amsterdam-web-development.jpg"],
  },
};

export default function AmsterdamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script type="application/ld+json" id="localbusiness-amsterdam">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - Web Development Company in Amsterdam",
          url: "https://laserwebmaker.com/top-web-development-company-in-amsterdam",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description: "Professional web development company serving Amsterdam and EU markets.",
          areaServed: [
            { "@type": "Place", name: "Amsterdam, Netherlands" },
            { "@type": "Place", name: "Zuidas" },
            { "@type": "Place", name: "Amsterdam Centrum" },
            { "@type": "Place", name: "Amsterdam Noord" },
            { "@type": "Place", name: "Rotterdam" },
            { "@type": "Place", name: "Utrecht" },
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Amsterdam",
            addressRegion: "North Holland",
            addressCountry: "NL",
          },
          openingHours: "Mo-Fr 09:00-18:00",
          priceRange: "€€€",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "420",
          },
          sameAs: [
            "https://www.linkedin.com/company/laserwebmaker",
          ],
        })}
      </Script>

      <Script type="application/ld+json" id="faq-schema-amsterdam">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which web development company is best in Amsterdam?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Laser Web Maker is a top web development company in Amsterdam, known for creating sophisticated websites for Dutch and international businesses with a focus on European design standards and GDPR compliance.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer multilingual websites for Amsterdam businesses?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we specialize in Dutch/English bilingual websites and can create multilingual sites for Amsterdam's international community, ensuring proper language switching and cultural adaptation.",
              },
            },
            {
              "@type": "Question",
              name: "Are your websites GDPR compliant for EU clients?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely. All our Amsterdam websites are built with GDPR compliance, including cookie consent systems, data protection measures, and privacy policy integration required for EU businesses.",
              },
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}