import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Refund Policy | Laser Web Maker | Web Development Services",
  description: "Our refund policy for web development services. Details on eligibility, process, and conditions for refunds. Customer satisfaction is our priority.",
  keywords: [
    "refund policy",
    "money back guarantee",
    "web development refund",
    "service refund policy",
    "cancellation policy",
    "refund terms",
    "project cancellation",
    "refund process",
    "client refund",
    "service cancellation",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/refund-policy",
  },
  openGraph: {
    title: "Refund Policy | Laser Web Maker",
    description: "Our refund and cancellation policy for web development services. Understand your rights and our process.",
    url: "https://laserwebmaker.com/refund-policy",
    type: "article",
    images: [
      {
        url: "https://laserwebmaker.com/og/refund-policy.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund Policy | Laser Web Maker",
    description: "Our refund and cancellation policy for web development services.",
    images: ["https://laserwebmaker.com/og/refund-policy.jpg"],
  },
};

export default function RefundPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* ✅ WebPage Schema for Refund Policy */}
      <Script type="application/ld+json" id="webpage-schema-refund">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Refund Policy",
          "description": "Refund and cancellation policy for web development services provided by Laser Web Maker",
          "url": "https://laserwebmaker.com/refund-policy",
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
            "headline": "Refund Policy for Web Development Services",
            "datePublished": "2026-01-26",
            "dateModified": new Date().toISOString().split('T')[0],
            "author": {
              "@type": "Organization",
              "name": "Laser Web Maker"
            }
          }
        })}
      </Script>

      {/* ✅ Breadcrumb Schema */}
      <Script type="application/ld+json" id="breadcrumb-refund">
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
              "name": "Refund Policy",
              "item": "https://laserwebmaker.com/refund-policy"
            }
          ]
        })}
      </Script>

      {/* ✅ FAQ Schema for Refund Policy */}
      <Script type="application/ld+json" id="faq-schema-refund">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is your refund policy for web development services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We offer refunds within 7 days of initial payment if no work has commenced. Once project work begins, refunds are calculated based on work completed minus administrative fees. No refunds are provided after project completion and delivery."
              }
            },
            {
              "@type": "Question",
              "name": "How long does it take to process a refund?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Refunds are processed within 7-10 business days after approval. The actual time for funds to reflect in your account depends on your bank's processing time."
              }
            },
            {
              "@type": "Question",
              "name": "What are valid reasons for requesting a refund?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Valid reasons include: service not rendered as agreed, significant deviation from project scope without consent, or cancellation within 7 days before work begins. Change of mind after work has started is not a valid reason."
              }
            },
            {
              "@type": "Question",
              "name": "Do you charge any cancellation fees?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "If you cancel after work has started, we charge for work completed up to that point plus a 20% administrative fee of the remaining contract value."
              }
            },
            {
              "@type": "Question",
              "name": "How do I request a refund?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Send a written refund request to info@laserwebmaker.com with your project details, reason for refund, and payment receipt. Our team will review and respond within 3 business days."
              }
            },
            {
              "@type": "Question",
              "name": "What happens to the intellectual property if I cancel?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "If you cancel after work has started, we retain ownership of all work completed. You may not use any code, design, or assets created up to that point without purchasing the completed work."
              }
            }
          ]
        })}
      </Script>

      {/* ✅ MoneyBackGuarantee Schema */}
      <Script type="application/ld+json" id="moneyback-schema">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MoneyBackGuarantee",
          "name": "7-Day Money Back Guarantee",
          "description": "Full refund within 7 days if no work has started on your project",
          "applicableCountry": "IN",
          "url": "https://laserwebmaker.com/refund-policy"
        })}
      </Script>

      {children}
    </>
  );
}