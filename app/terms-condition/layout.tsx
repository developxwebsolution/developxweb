import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Terms & Conditions | Laser Web Maker | Web Development Services",
  description: "Terms and conditions for web development services, project agreements, intellectual property rights, and client obligations. Read our service terms carefully.",
  keywords: [
    "terms and conditions",
    "web development terms",
    "service agreement",
    "website development terms",
    "project terms",
    "client agreement",
    "development service terms",
    "legal terms",
    "contract terms",
    "website terms of service",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/terms-condition",
  },
  openGraph: {
    title: "Terms & Conditions | Laser Web Maker",
    description: "Terms and conditions for our web development and design services. Please read before engaging our services.",
    url: "https://laserwebmaker.com/terms-condition",
    type: "article",
    images: [
      {
        url: "https://laserwebmaker.com/og/terms-conditions.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Laser Web Maker",
    description: "Our terms and conditions for web development services and client agreements.",
    images: ["https://laserwebmaker.com/og/terms-conditions.jpg"],
  },
};

export default function TermsConditionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* ✅ WebPage Schema for Terms & Conditions */}
      <Script type="application/ld+json" id="webpage-schema-terms">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Terms & Conditions",
          "description": "Terms and conditions for web development services provided by Laser Web Maker",
          "url": "https://laserwebmaker.com/terms-condition",
          "lastReviewed": new Date().toISOString().split('T')[0],
          "reviewedBy": {
            "@type": "Organization",
            "name": "Laser Web Maker"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Laser Web Maker",
            "url": "https://laserwebmaker.com"
          },
          "mainEntity": {
            "@type": "Article",
            "headline": "Terms & Conditions for Web Development Services",
            "datePublished": "26 January, 2026",
            "dateModified": new Date().toISOString().split('T')[0],
            "author": {
              "@type": "Organization",
              "name": "Laser Web Maker"
            }
          }
        })}
      </Script>

      {/* ✅ Breadcrumb Schema */}
      <Script type="application/ld+json" id="breadcrumb-terms">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://laserwebmaker.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Legal",
              "item": "https://laserwebmaker.com/legal"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Terms & Conditions",
              "item": "https://laserwebmaker.com/terms-condition"
            }
          ]
        })}
      </Script>

      {/* ✅ FAQ Schema for Terms */}
      <Script type="application/ld+json" id="faq-schema-terms">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What are your payment terms?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We require 50% advance payment before starting any project, with the remaining 50% due upon project completion and before final delivery. For projects over ₹2,00,000, we offer milestone-based payment plans."
              }
            },
            {
              "@type": "Question",
              "name": "Who owns the intellectual property rights?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Upon full payment, the client owns the final delivered website code and design. However, we retain rights to our proprietary frameworks, reusable code components, and the right to showcase the project in our portfolio with client permission."
              }
            },
            {
              "@type": "Question",
              "name": "What is your project revision policy?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We include up to 3 rounds of revisions for design and 2 rounds for development within the quoted price. Additional revisions may incur extra charges based on complexity and time required."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide source code and documentation?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide complete source code, database files, and project documentation upon final payment. For WordPress projects, we provide admin access and training."
              }
            },
            {
              "@type": "Question",
              "name": "What happens if the project scope changes?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Scope changes after project initiation may require additional charges and timeline adjustments. We provide change requests with cost estimates for client approval before implementing scope changes."
              }
            }
          ]
        })}
      </Script>

      {children}
    </>
  );
}