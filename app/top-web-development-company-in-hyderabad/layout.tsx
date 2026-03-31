import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Web Development Company in Hyderabad | Laser Web Maker",
  description:
    "Laser Web Maker is a leading web development company in Hyderabad delivering fast, secure, and SEO-optimized websites for businesses.",
  keywords: [
    "top web development company in hyderabad",
    "best website developers in hyderabad",
    "web development company near me",
    "custom website development hyderabad",
     "top website designing company in hyderabad",
    "best website desinging company in hyderabad",
    "website designing company in hyderabad",
    "website development company in hyderabad",
  ],
  robots: "index, follow",
  alternates: {
    canonical:
      "https://laserwebmaker.com/top-web-development-company-in-hyderabad",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script type="application/ld+json" id="localbusiness-hyderabad">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker",
          description:
            "Laser Web Maker provides professional web development services in Hyderabad for startups and enterprises.",
          areaServed: {
            "@type": "City",
            name: "Hyderabad",
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
              name: "Which is the top web development company in Hyderabad?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Laser Web Maker is a trusted and top-rated web development company in Hyderabad, known for building fast, secure, and SEO-friendly websites for businesses.",
              },
            },
            {
              "@type": "Question",
              name: "Do you provide web development services near me in Hyderabad?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Laser Web Maker provides professional web development services across Hyderabad and nearby areas with full online support.",
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
              name: "How much does website development cost in Hyderabad?",
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
