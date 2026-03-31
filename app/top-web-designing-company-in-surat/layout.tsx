import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Web Designing Company in Surat | Creative Websites",
  description:
    "Leading web design company in Surat offering creative, responsive websites that convert visitors into customers. Professional design services for businesses.",
  keywords: [
    "web design company Surat",
    "website designing Surat",
    "Surat web designers",
    "graphic design Surat",
    "UI/UX design Surat",
    "responsive website design Surat",
    "creative web design Surat",
    "best web design in Surat",
    "top website designing company in Surat",
    "best website desinging company in Surat",
    "website designing company in Surat",
    "website development company in Surat",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/top-web-designing-company-in-surat",
  },
  openGraph: {
    title: "Professional Web Design Services in Surat | Laser Web Maker",
    description:
      "Transform your online presence with Surat's top web design company. Creative, responsive websites that drive results.",
    url: "https://laserwebmaker.com/top-web-designing-company-in-surat",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/surat-web-design.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Web Design Company in Surat",
    description:
      "Creative website design services in Surat for diamonds, textiles, and local businesses.",
    images: ["https://laserwebmaker.com/og/surat-web-design.jpg"],
  },
};

export default function SuratLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script type="application/ld+json" id="localbusiness-surat">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - Web Design Company in Surat",
          url: "https://laserwebmaker.com/top-web-designing-company-in-surat",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description:
            "Creative web design company in Surat specializing in responsive websites for textile and diamond industries.",
          areaServed: [
            { "@type": "Place", name: "Surat, Gujarat" },
            { "@type": "Place", name: "Adajan" },
            { "@type": "Place", name: "Vesu" },
            { "@type": "Place", name: "Varachha" },
          ],
          address: {
            "@type": "PostalAddress",
            addressRegion: "GJ",
            addressCountry: "IN",
          },
          openingHours: "Mo-Sa 09:30-19:00",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.7",
            ratingCount: "890",
          },
        })}
      </Script>

      <Script type="application/ld+json" id="faq-schema-surat">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Who is the best web design company in Surat?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Laser Web Maker is recognized as Surat's leading web design company, specializing in creative websites for textile, diamond, and manufacturing businesses with stunning visuals and user-friendly interfaces.",
              },
            },
            {
              "@type": "Question",
              name: "What makes your Surat web design services unique?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We create industry-specific designs for Surat's textile and diamond sectors, with Gujarati language support, mobile-first approaches, and designs that reflect local business aesthetics while maintaining global standards.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer e-commerce design for Surat businesses?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we design beautiful e-commerce websites for Surat's textile, jewelry, and retail businesses with product showcases, payment integrations, and mobile-responsive designs that drive sales.",
              },
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}
