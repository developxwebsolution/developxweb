import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Web Development Company in Indore | Laser Web Maker",
  description:
    "Professional web development company in Indore offering website design, e-commerce solutions & digital marketing services. Grow your business online.",
  keywords: [
    "web development in Indore",
    "website company in Indore",
    "Indore web developers",
    "e-commerce development Indore",
    "SEO services Indore",
    "digital marketing Indore",
    "best web agency Indore",
    "Indore IT company",
    "top website designing company in Indore",
    "best website desinging company in Indore",
    "website designing company in Indore",
    "website development company in Indore",
  ],
  robots: "index, follow",
  alternates: {
    canonical:
      "https://laserwebmaker.com/top-web-development-company-in-indore",
  },
  openGraph: {
    title: "Web Development Services in Indore | Laser Web Maker",
    description:
      "Indore's premier web development company. We build responsive websites & e-commerce platforms for local businesses.",
    url: "https://laserwebmaker.com/top-web-development-company-in-indore",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/indore-web-development.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company in Indore",
    description:
      "Professional web solutions for Indore businesses. Custom websites & digital marketing.",
    images: ["https://laserwebmaker.com/og/indore-web-development.jpg"],
  },
};

export default function IndoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script type="application/ld+json" id="localbusiness-indore">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - Web Development Company in Indore",
          url: "https://laserwebmaker.com/top-web-development-company-in-indore",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description:
            "Leading web development company in Indore providing innovative digital solutions.",
          areaServed: [
            { "@type": "Place", name: "Indore, Madhya Pradesh" },
            { "@type": "Place", name: "Vijay Nagar" },
            { "@type": "Place", name: "Bhawarkua" },
            { "@type": "Place", name: "Rau" },
          ],
          address: {
            "@type": "PostalAddress",
            addressRegion: "MP",
            addressCountry: "IN",
          },
          openingHours: "Mo-Sa 09:30-19:00",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.7",
            ratingCount: "1050",
          },
        })}
      </Script>

      <Script type="application/ld+json" id="faq-schema-indore">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Who is the best web development company in Indore?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Laser Web Maker is among Indore's top-rated web development companies, known for creating responsive, SEO-friendly websites that help local businesses succeed online.",
              },
            },
            {
              "@type": "Question",
              name: "What web services do you offer in Indore?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We offer complete web solutions in Indore including custom website development, e-commerce platforms, mobile apps, SEO optimization, and ongoing maintenance services.",
              },
            },
            {
              "@type": "Question",
              name: "Do you work with small businesses in Indore?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we work with businesses of all sizes in Indore, from small local shops to large enterprises, providing scalable web solutions that grow with your business.",
              },
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}
