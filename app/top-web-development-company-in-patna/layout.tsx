import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Web Development Company in Patna | Laser Web Maker",
  description:
    "Leading web development company in Patna offering professional website design, e-commerce solutions & digital marketing services. Get your business online today.",
  keywords: [
    "web development company Patna",
    "website development Patna",
    "web design Patna",
    "Patna web developers",
    "e-commerce website Patna",
    "SEO services Patna",
    "digital marketing Patna",
    "best web company in Patna",
    "top website designing company in Patna",
    "best website desinging company in Patna",
    "website designing company in Patna",
    "website development company in Patna",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/top-web-development-company-in-patna",
  },
  openGraph: {
    title: "Professional Web Development Services in Patna | Laser Web Maker",
    description:
      "Build your online presence with Patna's top web development company. Custom websites, e-commerce & digital solutions.",
    url: "https://laserwebmaker.com/top-web-development-company-in-patna",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/patna-web-development.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Web Development Company in Patna",
    description:
      "Professional website design & development services in Patna for businesses of all sizes.",
    images: ["https://laserwebmaker.com/og/patna-web-development.jpg"],
  },
};

export default function PatnaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script type="application/ld+json" id="localbusiness-patna">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - Web Development Company in Patna",
          url: "https://laserwebmaker.com/top-web-development-company-in-patna",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description:
            "Professional web development company in Patna providing custom websites and digital solutions.",
          areaServed: [
            { "@type": "Place", name: "Patna, Bihar" },
            { "@type": "Place", name: "Danapur" },
            { "@type": "Place", name: "Phulwari Sharif" },
          ],
          address: {
            "@type": "PostalAddress",
            addressRegion: "BR",
            addressCountry: "IN",
          },
          openingHours: "Mo-Sa 09:30-19:00",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.7",
            ratingCount: "950",
          },
        })}
      </Script>

      <Script type="application/ld+json" id="faq-schema-patna">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which is the best web development company in Patna?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Laser Web Maker is recognized as one of Patna's top web development companies, known for creating responsive, SEO-optimized websites that help local businesses grow online.",
              },
            },
            {
              "@type": "Question",
              name: "What web services do you offer in Patna?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We offer complete web solutions in Patna including website design, e-commerce development, mobile apps, SEO, digital marketing, and ongoing website maintenance.",
              },
            },
            {
              "@type": "Question",
              name: "How much does a website cost in Patna?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Website costs in Patna start from ₹15,000 for basic sites and go up to ₹2,00,000+ for advanced e-commerce platforms, depending on your specific requirements.",
              },
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}
