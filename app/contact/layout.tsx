import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact Us | Website Developer in India | DevelopX Web",
  description:
    "Contact DevelopX Web for affordable web design, business website development, ecommerce solutions, and SEO-friendly websites. Get a free consultation today.",
  keywords: [
    "contact website developer in India",
    "web development company contact",
    "affordable web design India",
    "business website development inquiry",
    "ecommerce website development contact",
    "free web development consultation",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://developxweb.com/contact",
  },

  openGraph: {
    title: "Contact DevelopX Web | Web Development Company in India",
    description:
      "Get in touch with DevelopX Web for professional website development and affordable web design services.",
    url: "https://developxweb.com/contact",
    type: "website",
    images: [
      {
        url: "https://developxweb.com/og/contact.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact DevelopX Web",
    description:
      "Contact us for website development, ecommerce solutions, and SEO-friendly websites.",
    images: ["https://developxweb.com/og/contact.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* ✅ Local Business */}
      <Script type="application/ld+json" id="localbusiness-contact">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "DevelopX Web",
          description:
            "DevelopX Web is a trusted website developer in India offering affordable web design, business website development, ecommerce solutions, and SEO-friendly websites.",
          url: "https://developxweb.com",
          logo: "https://developxweb.com/logo.png",
          telephone: "+91 9625148434",
          email: "info@developxweb.com",
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+91 9625148434",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi"],
            },
            {
              "@type": "ContactPoint",
              telephone: "+91 9625148434",
              contactType: "sales",
              areaServed: "Worldwide",
              availableLanguage: ["English"],
            },
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Your Office Address",
            addressLocality: "Delhi",
            addressRegion: "Delhi",
            postalCode: "110001",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "28.6139",
            longitude: "77.2090",
          },
          openingHours: "Mo-Su 09:30-18:30",
        })}
      </Script>

      {/* ✅ Contact Page */}
      <Script type="application/ld+json" id="contactpage-schema">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact DevelopX Web",
          description:
            "Contact page for DevelopX Web - Website developer in India",
          url: "https://developxweb.com/contact",
        })}
      </Script>

      {/* ✅ FAQ Schema (SEO Boost 🔥) */}
      <Script type="application/ld+json" id="faq-schema-contact">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How can I contact DevelopX Web?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You can contact us via phone at +91 9625148434 or email at info@developxweb.com. We usually respond within a few hours.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer free consultation?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we offer a free consultation to understand your requirements and suggest the best web development solution.",
              },
            },
            {
              "@type": "Question",
              name: "How much does a website cost?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our website development services start from ₹2,999 depending on your requirements.",
              },
            },
            {
              "@type": "Question",
              name: "How long does it take to build a website?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We typically deliver websites within 3-5 days for basic projects.",
              },
            },
            {
              "@type": "Question",
              name: "Do you provide support after delivery?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we provide ongoing support and maintenance services.",
              },
            },
          ],
        })}
      </Script>

      {/* ✅ Organization */}
      <Script type="application/ld+json" id="organization-schema">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "DevelopX Web",
          url: "https://developxweb.com",
          logo: "https://developxweb.com/logo.png",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91 9625148434",
            contactType: "customer service",
            areaServed: "Worldwide",
            availableLanguage: ["English", "Hindi"],
          },
        })}
      </Script>

      {/* ✅ Breadcrumb */}
      <Script type="application/ld+json" id="breadcrumb-contact">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://developxweb.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Contact Us",
              item: "https://developxweb.com/contact",
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}