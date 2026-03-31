import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Best Web Development Company in Meerut | Laser Web Maker - Website Designing",
  description:
    "Professional web development services in Meerut. We create responsive websites, e-commerce stores & digital solutions for Meerut businesses.",
  keywords: [
    "web development Meerut",
    "website company Meerut",
    "web designers Meerut",
    "Meerut web development",
    "e-commerce development Meerut",
    "SEO company Meerut",
    "digital marketing Meerut",
    "top website designing company in Meerut",
    "best website desinging company in Meerut",
    "website designing company in Meerut",
    "website development company in Meerut",
  ],
  robots: "index, follow",
  alternates: {
    canonical:
      "https://laserwebmaker.com/top-web-development-company-in-meerut",
  },
  openGraph: {
    title: "Web Development Services in Meerut | Laser Web Maker",
    description:
      "Get a professional website for your Meerut business. Custom web design, development & digital marketing solutions.",
    url: "https://laserwebmaker.com/top-web-development-company-in-meerut",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/meerut-web-development.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company in Meerut",
    description:
      "Professional website design & development services for Meerut businesses.",
    images: ["https://laserwebmaker.com/og/meerut-web-development.jpg"],
  },
};

export default function MeerutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script type="application/ld+json" id="localbusiness-meerut">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - Web Development Company in Meerut",
          url: "https://laserwebmaker.com/top-web-development-company-in-meerut",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description:
            "Leading web development company in Meerut providing modern website solutions.",
          areaServed: [
            { "@type": "Place", name: "Meerut, Uttar Pradesh" },
            { "@type": "Place", name: "Hapur" },
            { "@type": "Place", name: "Ghaziabad" },
          ],
          address: {
            "@type": "PostalAddress",
            addressRegion: "UP",
            addressCountry: "IN",
          },
          openingHours: "Mo-Sa 09:30-19:00",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.6",
            ratingCount: "800",
          },
        })}
      </Script>

      <Script type="application/ld+json" id="faq-schema-meerut">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Looking for web development services in Meerut?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we serve Meerut and surrounding areas with professional web development, e-commerce solutions, and digital marketing services tailored for local businesses.",
              },
            },
            {
              "@type": "Question",
              name: "What industries do you serve in Meerut?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We work with various industries in Meerut including manufacturing, education, retail, healthcare, and service-based businesses, creating industry-specific web solutions.",
              },
            },
            {
              "@type": "Question",
              name: "Do you provide website maintenance in Meerut?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we offer comprehensive website maintenance packages including updates, security checks, performance optimization, and technical support for Meerut clients.",
              },
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}
