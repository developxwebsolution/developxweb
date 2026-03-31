import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Web Designing Company in Delhi NCR | Design Experts",
  description: "Premier web design company serving Delhi NCR region with creative websites, UI/UX design, and digital solutions for businesses across Noida, Gurugram, Faridabad & Delhi.",
  keywords: [
    "website design company Delhi NCR",
    "website designers Delhi",
    "Delhi NCR web agency",
    "Noida web design",
    "Ghaziabad website design",
    "Faridabad web designers",
    "UI/UX design Delhi NCR",
    "corporate web design NCR",
    "top website designing company in delhi",
    "best website desinging company in Delhi",
    "best website desinging company in Delhi, NCR"
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/top-web-designing-company-in-delhi-ncr",
  },
  openGraph: {
    title: "Web Design Services in Delhi NCR | Laser Web Maker",
    description: "Creative web design company serving entire Delhi NCR. Professional websites for businesses across Delhi, Noida, Gurugram, Ghaziabad & Faridabad.",
    url: "https://laserwebmaker.com/top-web-designing-company-in-delhi-ncr",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/delhi-ncr-web-design.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Company in Delhi NCR",
    description: "Professional web design services across Delhi, Noida, Gurugram & Ghaziabad.",
    images: ["https://laserwebmaker.com/og/delhi-ncr-web-design.jpg"],
  },
};

export default function DelhiNCRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script type="application/ld+json" id="localbusiness-delhi-ncr">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - Web Design Company in Delhi NCR",
          url: "https://laserwebmaker.com/top-web-designing-company-in-delhi-ncr",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description: "Leading web design company serving entire Delhi National Capital Region.",
          areaServed: [
            { "@type": "Place", name: "Delhi" },
            { "@type": "Place", name: "Noida, Uttar Pradesh" },
            { "@type": "Place", name: "Gurugram, Haryana" },
            { "@type": "Place", name: "Ghaziabad" },
            { "@type": "Place", name: "Faridabad" },
            { "@type": "Place", name: "Greater Noida" },
          ],
          address: {
            "@type": "PostalAddress",
            addressRegion: "NCR",
            addressCountry: "IN",
          },
          openingHours: "Mo-Sa 09:30-19:00",
          priceRange: "₹₹-₹₹₹",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "1800",
          },
        })}
      </Script>

      <Script type="application/ld+json" id="faq-schema-delhi-ncr">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which web design company serves entire Delhi NCR?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Laser Web Maker is one of the few web design companies that professionally serves the entire Delhi NCR region including Delhi, Noida, Gurugram, Ghaziabad, and Faridabad with consistent quality and service.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer different design styles for NCR cities?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we tailor designs for different NCR areas: corporate/minimalist for Delhi/Noida corporate sectors, vibrant for Delhi retail markets, and tech-focused for Gurugram startups - all while maintaining your brand identity.",
              },
            },
            {
              "@type": "Question",
              name: "How do you handle projects across Delhi NCR?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We combine virtual collaboration with occasional on-site meetings when needed, serving NCR clients efficiently through a mix of video calls, project management tools, and flexible meeting options across the region.",
              },
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}