import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Web Development Company in Sharjah, UAE | Laser Web Maker",
  description:
    "Laser Web Maker is a leading web development company in Sharjah, UAE, offering professional website design, e-commerce solutions, and digital services for businesses.",
  keywords: [
    "web development company Sharjah",
    "website development Sharjah",
    "web design Sharjah UAE",
    "e-commerce website development Sharjah",
    "best web developers in Sharjah",
    "professional web development Sharjah",
    "mobile app development Sharjah",
    "digital marketing Sharjah",
    "SEO services Sharjah",
    "Laser Web Maker UAE",
  ],
  robots: "index, follow",
  alternates: {
    canonical:
      "https://laserwebmaker.com/top-web-development-company-in-sharjah-uae",
  },
  openGraph: {
    title: "Top Web Development Company in Sharjah, UAE | Laser Web Maker",
    description:
      "Professional web development company in Sharjah offering custom websites, e-commerce solutions, and digital services for UAE businesses.",
    url: "https://laserwebmaker.com/top-web-development-company-in-sharjah-uae",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/sharjah-web-development.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Web Development Company in Sharjah, UAE",
    description:
      "Professional web development services in Sharjah. We create responsive, SEO-optimized websites for businesses in the UAE.",
    images: ["https://laserwebmaker.com/og/sharjah-web-development.png"],
  },
};

export default function SharjahLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* ✅ LocalBusiness Schema – Sharjah, UAE */}
      <Script type="application/ld+json" id="localbusiness-sharjah">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - Web Development Company in Sharjah, UAE",
          url: "https://laserwebmaker.com/top-web-development-company-in-sharjah-uae",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description:
            "Laser Web Maker is a professional web development company in Sharjah, UAE, delivering custom websites, e-commerce solutions, and digital services for businesses across the UAE.",
          areaServed: [
            {
              "@type": "Place",
              name: "Sharjah, United Arab Emirates",
            },
            {
              "@type": "Place",
              name: "Dubai, UAE",
            },
            {
              "@type": "Place",
              name: "Abu Dhabi, UAE",
            },
            {
              "@type": "Place",
              name: "Ajman, UAE",
            },
            {
              "@type": "Place",
              name: "Ras Al Khaimah, UAE",
            },
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Business Bay",
            addressLocality: "Sharjah",
            addressRegion: "Sharjah",
            postalCode: "00000",
            addressCountry: "AE",
          },
          openingHours: "Mo-Fr 09:00-18:00, Sa 09:00-14:00",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "09:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Saturday"],
              opens: "09:00",
              closes: "14:00",
            },
          ],
          priceRange: "$$",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            ratingCount: "850",
            bestRating: "5",
            worstRating: "1",
          },
          sameAs: [
            "https://www.facebook.com/laserwebmaker",
            "https://www.instagram.com/laserwebmaker",
            "https://www.linkedin.com/company/laserwebmaker",
          ],
        })}
      </Script>

      {/* ✅ FAQ Schema – Sharjah, UAE */}
      <Script type="application/ld+json" id="faq-schema-sharjah">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which is the best web development company in Sharjah, UAE?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Laser Web Maker is one of the leading web development companies in Sharjah, UAE, known for creating responsive, SEO-friendly websites and e-commerce solutions for businesses across the UAE.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer web development services for businesses in Dubai and Abu Dhabi?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we provide professional web development services across the entire UAE, including Dubai, Abu Dhabi, Sharjah, Ajman, and other emirates. We serve both local and international clients from our base in Sharjah.",
              },
            },
            {
              "@type": "Question",
              name: "What web development services do you offer in Sharjah?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We offer comprehensive web development services in Sharjah including custom website design, e-commerce development (Magento, Shopify, WooCommerce), mobile app development, SEO optimization, digital marketing, website maintenance, and hosting solutions.",
              },
            },
            {
              "@type": "Question",
              name: "How much does website development cost in Sharjah?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Website development costs in Sharjah vary based on project requirements, features, and complexity. We offer flexible pricing models starting from AED 2,500 for basic websites to AED 25,000+ for enterprise e-commerce solutions. Contact us for a free customized quote.",
              },
            },
            {
              "@type": "Question",
              name: "Do you provide Arabic website development in Sharjah?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we specialize in bilingual (Arabic/English) and multilingual website development tailored for the UAE market, ensuring RTL support, cultural appropriateness, and optimal user experience for Arabic-speaking audiences.",
              },
            },
            {
              "@type": "Question",
              name: "What is the typical timeline for website development in Sharjah?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our development timeline varies: 2-3 weeks for basic websites, 4-6 weeks for corporate websites, and 8-12 weeks for complex e-commerce platforms. We provide clear project timelines and regular updates throughout the process.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer ongoing website maintenance in Sharjah?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we provide comprehensive website maintenance packages in Sharjah including security updates, performance optimization, content updates, hosting management, and technical support to ensure your website runs smoothly.",
              },
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}
