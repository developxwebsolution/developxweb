import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Framework Website Development Company in Noida | Laravel, React, Angular",
  description: "Professional framework-based website development company in Noida offering Laravel, React, Angular, Vue.js, and custom framework solutions for scalable web applications.",
  keywords: [
    "framework development company Noida",
    "Laravel development Noida",
    "React development Noida",
    "Angular development Noida",
    "Vue.js development Noida",
    "Node.js development Noida",
    "custom framework development Noida",
    "web application development Noida",
    "API development Noida",
    "full-stack development Noida",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/framework-website-development-company-in-noida",
  },
  openGraph: {
    title: "Framework Development Services in Noida | Laser Web Maker",
    description: "Professional framework development company in Noida offering Laravel, React, Angular, and custom solutions.",
    url: "https://laserwebmaker.com/framework-website-development-company-in-noida",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/framework-development-noida.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Framework Development Company in Noida",
    description: "Laravel, React, Angular, and custom framework development in Noida.",
    images: ["https://laserwebmaker.com/og/framework-development-noida.jpg"],
  },
};

export default function FrameworkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script type="application/ld+json" id="localbusiness-framework">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - Framework Development Company in Noida",
          url: "https://laserwebmaker.com/framework-website-development-company-in-noida",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description: "Professional framework development company in Noida offering Laravel, React, Angular solutions.",
          areaServed: [
            { "@type": "Place", name: "Noida, Uttar Pradesh" },
            { "@type": "Place", name: "Delhi NCR" },
            { "@type": "Place", name: "India" },
          ],
          address: {
            "@type": "PostalAddress",
            addressRegion: "UP",
            addressCountry: "IN",
          },
          openingHours: "Mo-Sa 09:30-19:00",
          priceRange: "₹₹₹-₹₹₹₹",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "720",
          },
        })}
      </Script>

      <Script type="application/ld+json" id="faq-schema-framework">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which framework development company is best in Noida?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Laser Web Maker is Noida's leading framework development company, specializing in Laravel, React, Angular, Vue.js, Node.js, and custom framework solutions for building scalable, high-performance web applications and APIs.",
              },
            },
            {
              "@type": "Question",
              name: "How do you choose the right framework for a project?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We analyze project requirements, scalability needs, team expertise, maintenance considerations, and business goals to recommend the most suitable framework - Laravel for robust backend, React for dynamic UIs, Angular for enterprise applications, or custom solutions for unique needs.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer full-stack framework development in Noida?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we provide complete full-stack framework development in Noida, handling both frontend (React/Angular/Vue) and backend (Laravel/Node.js) development with database design, API integration, and deployment.",
              },
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}