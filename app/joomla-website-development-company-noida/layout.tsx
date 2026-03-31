import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Joomla Website Development Company in Noida | CMS Specialists",
  description: "Professional Joomla website development company in Noida offering custom Joomla templates, extensions, and CMS solutions for enterprise websites.",
  keywords: [
    "Joomla development company Noida",
    "Joomla website development Noida",
    "custom Joomla templates Noida",
    "Joomla extension development Noida",
    "Joomla CMS development Noida",
    "Joomla migration Noida",
    "Joomla maintenance Noida",
    "best Joomla developers Noida",
    "responsive Joomla design Noida",
    "Joomla e-commerce Noida",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/joomla-website-development-company-noida",
  },
  openGraph: {
    title: "Joomla Development Services in Noida | Laser Web Maker",
    description: "Professional Joomla development company in Noida offering custom templates, extensions, and CMS solutions.",
    url: "https://laserwebmaker.com/joomla-website-development-company-noida",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/joomla-development-noida.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joomla Development Company in Noida",
    description: "Custom Joomla templates, extensions, and CMS development in Noida.",
    images: ["https://laserwebmaker.com/og/joomla-development-noida.jpg"],
  },
};

export default function JoomlaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script type="application/ld+json" id="localbusiness-joomla">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - Joomla Development Company in Noida",
          url: "https://laserwebmaker.com/joomla-website-development-company-noida",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description: "Professional Joomla development company in Noida offering custom CMS solutions.",
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
          priceRange: "₹₹₹",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.6",
            ratingCount: "420",
          },
        })}
      </Script>

      <Script type="application/ld+json" id="faq-schema-joomla">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which company provides the best Joomla development in Noida?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Laser Web Maker is Noida's specialized Joomla development company, offering custom Joomla templates, extension development, component customization, and enterprise Joomla solutions for complex websites requiring advanced content management.",
              },
            },
            {
              "@type": "Question",
              name: "What types of websites are best suited for Joomla?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Joomla is ideal for corporate websites, educational portals, government websites, e-commerce stores, social networks, and complex content management systems requiring advanced user management and multilingual support.",
              },
            },
            {
              "@type": "Question",
              name: "Do you provide Joomla to WordPress migration in Noida?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we offer professional Joomla to WordPress migration services in Noida, ensuring seamless transition of content, design, and functionality without data loss or downtime.",
              },
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}