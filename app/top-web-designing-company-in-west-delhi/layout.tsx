import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Web Designing Company in West Delhi | Laser Web Maker",
  description:
    "Laser Web Maker is a trusted web designing company in West Delhi offering creative, SEO-friendly, and responsive website designs for businesses.",
  keywords: [
    "top web designing company in west delhi",
    "best website designers in west delhi",
    "web design company near me",
    "professional web designers west delhi",
    "top website designing company in west delhi",
    "best website desinging company in west delhi",
    "website designing company in west delhi",
    "website development company in west delhi",
  ],
  robots: "index, follow",
  alternates: {
    canonical:
      "https://laserwebmaker.com/top-web-designing-company-in-west-delhi",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
          <Script type="application/ld+json" id="localbusiness-west-delhi">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - Web Design Company in West Delhi",
          url: "https://laserwebmaker.com/top-web-designing-company-in-west-delhi",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description:
            "Creative web design company in west delhi specializing in responsive websites for textile and diamond industries.",
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
      <Script type="application/ld+json" id="localbusiness-westdelhi">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker",
          description:
            "Laser Web Maker is a professional web designing company in West Delhi delivering visually appealing and SEO-optimized websites.",
          areaServed: {
            "@type": "AdministrativeArea",
            name: "West Delhi",
          },
        })}
      </Script>

      <Script type="application/ld+json" id="faq-schema">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which is the top web development company in West Delhi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Laser Web Maker is a trusted and top-rated web development company in West Delhi, known for building fast, secure, and SEO-friendly websites for businesses.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide web development services near me in West Delhi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Laser Web Maker provides professional web development services across West Delhi and nearby areas with full online support.",
        },
      },
      {
        "@type": "Question",
        name: "What types of websites do you develop?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We develop business websites, corporate sites, eCommerce platforms, landing pages, and custom web applications based on client requirements.",
        },
      },
      {
        "@type": "Question",
        name: "Are your websites SEO-friendly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all our websites are built following SEO best practices to help businesses rank better on Google and attract organic traffic.",
        },
      },
      {
        "@type": "Question",
        name: "How much does website development cost in West Delhi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Website development cost depends on design, features, and project scope. We provide flexible and affordable pricing tailored to your needs.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to develop a website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most websites are completed within 2 to 4 weeks, depending on complexity and content readiness.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer website maintenance after launch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer ongoing website maintenance, performance optimization, and security updates after project delivery.",
        },
      },
      {
        "@type": "Question",
        name: "Why choose Laser Web Maker for web development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Clients choose Laser Web Maker for transparent communication, modern technologies, SEO-focused development, and reliable long-term support.",
        },
      },
    ],
  })}
</Script>


      {children}
    </>
  );
}
