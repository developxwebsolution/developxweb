import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Web Development Company in Kuwait City | Laser Web Maker",
  description:
    "Laser Web Maker is a trusted web development company in Kuwait City delivering custom, SEO-friendly, and high-performing websites for businesses.",
  keywords: [
    "top web development company in kuwait city",
    "best web developers in kuwait city",
    "website development company near me",
    "custom web development kuwait",
    "professional web design kuwait city",
    "top website designing company in kuwait",
    "best website desinging company in kuwait",
    "website designing company in kuwait",
    "website development company in kuwait",
  ],
  robots: "index, follow",
  alternates: {
    canonical:
      "https://laserwebmaker.com/top-web-development-company-in-kuwait-city",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* LocalBusiness Schema */}
      <Script type="application/ld+json" id="localbusiness-kuwait">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker",
          url: "https://laserwebmaker.com",
          description:
            "Laser Web Maker is a top web development company in Kuwait City offering SEO-friendly and custom website solutions.",
          areaServed: {
            "@type": "City",
            name: "Kuwait City",
          },
        })}
      </Script>

      {/* FAQ Schema */}
      <Script type="application/ld+json" id="faq-schema">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which is the top web development company in Kuwait?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Laser Web Maker is a trusted and top-rated web development company in Kuwait, known for building fast, secure, and SEO-friendly websites for businesses.",
              },
            },
            {
              "@type": "Question",
              name: "Do you provide web development services near me in Kuwait?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Laser Web Maker provides professional web development services across Kuwait and nearby areas with full online support.",
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
              name: "How much does website development cost in Kuwait?",
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
