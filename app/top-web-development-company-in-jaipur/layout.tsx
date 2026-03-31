import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Web Development Company in Jaipur | Laser Web Maker",
  description:
    "Premier web development company in Jaipur offering custom website design, e-commerce development, mobile apps, and digital marketing services for Pink City businesses.",
  keywords: [
    "web development company Jaipur",
    "website development Jaipur",
    "Jaipur web developers",
    "e-commerce development Jaipur",
    "SEO services Jaipur",
    "digital marketing Jaipur",
    "best web agency in Jaipur",
    "Pink City web development",
    "top website designing company in Jaipur",
    "best website desinging company in Jaipur",
    "website designing company in Jaipur",
    "website development company in Jaipur",
  ],
  robots: "index, follow",
  alternates: {
    canonical:
      "https://laserwebmaker.com/top-web-development-company-in-jaipur",
  },
  openGraph: {
    title: "Professional Web Development Services in Jaipur | Laser Web Maker",
    description:
      "Jaipur's leading web development company. Custom websites, e-commerce & digital solutions for Pink City businesses.",
    url: "https://laserwebmaker.com/top-web-development-company-in-jaipur",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/jaipur-web-development.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company in Jaipur",
    description:
      "Professional website design & development services for Jaipur's business community.",
    images: ["https://laserwebmaker.com/og/jaipur-web-development.jpg"],
  },
};

export default function JaipurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script type="application/ld+json" id="localbusiness-jaipur">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - Web Development Company in Jaipur",
          url: "https://laserwebmaker.com/top-web-development-company-in-jaipur",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description:
            "Professional web development company in Jaipur providing custom websites for tourism and business sectors.",
          areaServed: [
            { "@type": "Place", name: "Jaipur, Rajasthan" },
            { "@type": "Place", name: "Malviya Nagar" },
            { "@type": "Place", name: "Vaishali Nagar" },
            { "@type": "Place", name: "C-Scheme" },
            { "@type": "Place", name: "Tonk Road" },
            { "@type": "Place", name: "Mansarovar" },
          ],
          address: {
            "@type": "PostalAddress",
            addressRegion: "RJ",
            addressCountry: "IN",
          },
          openingHours: "Mo-Sa 09:30-19:00",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.7",
            ratingCount: "980",
          },
        })}
      </Script>

      <Script type="application/ld+json" id="faq-schema-jaipur">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Who is the best web development company in Jaipur?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Laser Web Maker is recognized as Jaipur's leading web development company, known for creating beautiful, responsive websites that reflect the Pink City's heritage while meeting modern business needs across Malviya Nagar, C-Scheme, and other commercial areas.",
              },
            },
            {
              "@type": "Question",
              name: "Do you specialize in tourism website design for Jaipur?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we have extensive experience creating tourism and hospitality websites for Jaipur's hotels, travel agencies, heritage sites, and tour operators, featuring stunning photography, booking systems, and multilingual support.",
              },
            },
            {
              "@type": "Question",
              name: "What makes your Jaipur web services unique?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We blend traditional Rajasthani aesthetics with modern web technology, creating websites that resonate with Jaipur's cultural heritage while delivering exceptional user experiences and functionality for today's digital audience.",
              },
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}
