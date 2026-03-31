import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Website Designing Company in Noida | UI/UX Experts",
  description:
    "Premier website designing company in Noida offering creative UI/UX design, responsive websites, and digital branding for businesses in Noida and Delhi NCR.",
  keywords: [
    "website designing company Noida",
    "web design Noida",
    "Noida web designers",
    "UI/UX design Noida",
    "responsive website design Noida",
    "creative web design Noida",
    "best website design in Noida",
    "Noida web development",
    "Sector 62 web design",
    "corporate website design Noida",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/top-website-designing-company-noida",
  },
  openGraph: {
    title: "Professional Website Design Services in Noida | Laser Web Maker",
    description:
      "Noida's leading website designing company offering creative, responsive websites for businesses across all sectors.",
    url: "https://laserwebmaker.com/top-website-designing-company-noida",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/noida-website-design.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Designing Company in Noida",
    description:
      "Creative UI/UX design and responsive websites for Noida businesses.",
    images: ["https://laserwebmaker.com/og/noida-website-design.jpg"],
  },
};

export default function NoidaDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script type="application/ld+json" id="localbusiness-noida-design">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - Website Designing Company in Noida",
          url: "https://laserwebmaker.com/top-website-designing-company-noida",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description:
            "Creative website designing company in Noida offering UI/UX design and responsive websites.",
          areaServed: [
            { "@type": "Place", name: "Noida, Uttar Pradesh" },
            { "@type": "Place", name: "Sector 62" },
            { "@type": "Place", name: "Sector 63" },
            { "@type": "Place", name: "Sector 125" },
            { "@type": "Place", name: "Greater Noida" },
            { "@type": "Place", name: "Delhi NCR" },
          ],
          address: {
            "@type": "PostalAddress",
            addressRegion: "UP",
            addressCountry: "IN",
          },
          openingHours: "Mo-Sa 09:30-19:00",
          priceRange: "₹₹-₹₹₹",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.7",
            ratingCount: "980",
          },
        })}
      </Script>

      <Script type="application/ld+json" id="faq-schema-noida-design">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which is the best website designing company in Noida?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Laser Web Maker is recognized as Noida's leading website designing company, known for creating visually stunning, responsive websites with exceptional user experience for businesses across Sector 62, 63, and Greater Noida.",
              },
            },
            {
              "@type": "Question",
              name: "What industries do you design websites for in Noida?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We design websites for diverse Noida industries including IT companies, corporate offices, educational institutions, healthcare, real estate, manufacturing, and service-based businesses in Delhi NCR region.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer mobile-responsive website design in Noida?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, all our Noida website designs are mobile-first and fully responsive, ensuring optimal viewing experience across all devices including smartphones, tablets, and desktops.",
              },
            },
            {
              "@type": "Question",
              name: "Why choose your Noida agency for website design over others?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "As a top website design company in Noida, we focus on more than just aesthetics. We blend visual creativity with strategic thinking, understanding that your website must both captivate visitors and drive business goals. Our design process begins by learning about your Noida market, your competitors, and what makes your brand unique, ensuring the final design isn't just beautiful—it's effective.",
              },
            },
            {
              "@type": "Question",
              name: "How long does it take to design a custom website?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The timeline for custom website design in Noida typically ranges from 4 to 8 weeks, depending on the project's scope and complexity. We believe in taking the time needed to get every detail right, from the initial concept to the final polish, ensuring a website that you'll be proud to launch.",
              },
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}
