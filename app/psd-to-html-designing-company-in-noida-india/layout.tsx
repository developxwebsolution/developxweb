import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "PSD to HTML Company in Noida | Pixel-Perfect Conversion",
  description: "Professional PSD to HTML conversion services in Noida. We convert Photoshop designs to responsive HTML/CSS with pixel-perfect accuracy and W3C validation.",
  keywords: [
    "PSD to HTML Noida",
    "PSD to HTML conversion Noida",
    "PSD to responsive HTML Noida",
    "design to code Noida",
    "Photoshop to HTML Noida",
    "HTML5 CSS3 conversion Noida",
    "pixel perfect PSD to HTML",
    "PSD to WordPress Noida",
    "PSD to Bootstrap Noida",
    "web design conversion Noida",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/psd-to-html-designing-company-in-noida-india",
  },
  openGraph: {
    title: "PSD to HTML Conversion Services in Noida | Laser Web Maker",
    description: "Professional PSD to HTML, CSS, Bootstrap conversion services in Noida with pixel-perfect accuracy and responsive design.",
    url: "https://laserwebmaker.com/psd-to-html-designing-company-in-noida-india",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/psd-to-html-noida.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PSD to HTML Conversion Company in Noida",
    description: "Professional PSD to HTML, CSS, Bootstrap conversion services in Noida.",
    images: ["https://laserwebmaker.com/og/psd-to-html-noida.jpg"],
  },
};

export default function PSDtoHTMLLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script type="application/ld+json" id="localbusiness-psd-html">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - PSD to HTML Conversion Company in Noida",
          url: "https://laserwebmaker.com/psd-to-html-designing-company-in-noida-india",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description: "Professional PSD to HTML conversion services in Noida with pixel-perfect accuracy.",
          areaServed: [
            { "@type": "Place", name: "Noida, Uttar Pradesh" },
            { "@type": "Place", name: "Delhi NCR" },
            { "@type": "Place", name: "India" },
            { "@type": "Place", name: "Worldwide" },
          ],
          address: {
            "@type": "PostalAddress",
            addressRegion: "UP",
            addressCountry: "IN",
          },
          openingHours: "Mo-Sa 09:30-19:00",
          priceRange: "₹₹",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "650",
          },
        })}
      </Script>

      <Script type="application/ld+json" id="faq-schema-psd-html">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which company provides the best PSD to HTML conversion in Noida?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Laser Web Maker is Noida's premier PSD to HTML conversion company, specializing in pixel-perfect, responsive HTML/CSS conversion with W3C validation, cross-browser compatibility, and SEO-friendly code structure.",
              },
            },
            {
              "@type": "Question",
              name: "What formats do you convert to HTML?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We convert PSD, AI (Adobe Illustrator), Sketch, Figma, XD, and PNG designs to responsive HTML5, CSS3, Bootstrap, Foundation, and WordPress themes with complete accuracy.",
              },
            },
            {
              "@type": "Question",
              name: "How much does PSD to HTML conversion cost in Noida?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our PSD to HTML conversion services in Noida start from ₹3,999 per page for basic conversion to ₹15,000+ for complex designs with animations and interactions. We offer volume discounts for multi-page projects.",
              },
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}