import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Web Designing Company in Ghaziabad | Local Experts",
  description:
    "Professional web design company in Ghaziabad offering creative websites, UI/UX design, and digital solutions for businesses in Delhi NCR region.",
  keywords: [
    "web design company Ghaziabad",
    "website designers Ghaziabad",
    "Ghaziabad web designing",
    "UI/UX design Ghaziabad",
    "Vaishali website design",
    "Indirapuram website design",
    "responsive design Ghaziabad",
    "best web agency Ghaziabad",
    "top website designing company in ghaziabad",
    "best website desinging company in Ghaziabad",
    "website designing company in ghaziabad",
  ],
  robots: "index, follow",
  alternates: {
    canonical:
      "https://laserwebmaker.com/top-web-designing-company-in-ghaziabad",
  },
  openGraph: {
    title: "Web Design Services in Ghaziabad | Laser Web Maker",
    description:
      "Ghaziabad's leading web design company for businesses and industries. Professional UI/UX design services.",
    url: "https://laserwebmaker.com/top-web-designing-company-in-ghaziabad",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/ghaziabad-web-design.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Company in Ghaziabad",
    description:
      "Professional UI/UX and website design services for Ghaziabad businesses.",
    images: ["https://laserwebmaker.com/og/ghaziabad-web-design.jpg"],
  },
};

export default function GhaziabadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script type="application/ld+json" id="localbusiness-ghaziabad">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - Web Design Company in Ghaziabad",
          url: "https://laserwebmaker.com/top-web-designing-company-in-ghaziabad",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description:
            "Professional web design company in Ghaziabad serving industrial and residential areas.",
          areaServed: [
            { "@type": "Place", name: "Ghaziabad, Uttar Pradesh" },
            { "@type": "Place", name: "Vaishali" },
            { "@type": "Place", name: "Indirapuram" },
            { "@type": "Place", name: "Kaushambi" },
            { "@type": "Place", name: "Raj Nagar" },
            { "@type": "Place", name: "Crossings Republik" },
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
            ratingValue: "4.6",
            ratingCount: "780",
          },
        })}
      </Script>

      <Script type="application/ld+json" id="faq-schema-ghaziabad">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Looking for web designers in Ghaziabad?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we're professional web design experts serving Ghaziabad, Vaishali, Indirapuram, and surrounding areas, offering personalized website design services for industrial units, local businesses, and residential services.",
              },
            },
            {
              "@type": "Question",
              name: "Do you specialize in industrial website design in Ghaziabad?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely. We have experience designing websites for Ghaziabad's industrial sector, featuring product catalogs, manufacturing capabilities, certification displays, and B2B lead generation features.",
              },
            },
            {
              "@type": "Question",
              name: "What is your design approach for Ghaziabad clients?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We focus on practical, conversion-focused designs for Ghaziabad businesses, ensuring mobile responsiveness, fast loading times, and user-friendly interfaces that work well for both industrial and consumer audiences.",
              },
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}
