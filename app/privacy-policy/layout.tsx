import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Privacy Policy | Laser Web Maker | Data Protection",
  description:
    "Our privacy policy explains how we collect, use, protect, and handle your personal information. We are committed to protecting your privacy and data security.",
  keywords: [
    "privacy policy",
    "data protection",
    "GDPR compliance",
    "privacy statement",
    "data privacy",
    "personal information",
    "data collection",
    "privacy terms",
    "cookie policy",
    "data security",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Laser Web Maker",
    description:
      "How we collect, use, and protect your personal information. Read our commitment to data privacy and security.",
    url: "https://laserwebmaker.com/privacy-policy",
    type: "article",
    images: [
      {
        url: "https://laserwebmaker.com/og/privacy-policy.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Laser Web Maker",
    description:
      "Our commitment to data protection and privacy for our clients and website visitors.",
    images: ["https://laserwebmaker.com/og/privacy-policy.jpg"],
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* ✅ WebPage Schema for Privacy Policy */}
      <Script type="application/ld+json" id="webpage-schema-privacy">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Privacy Policy",
          description:
            "Privacy policy for Laser Web Maker outlining data collection, usage, and protection practices",
          url: "https://laserwebmaker.com/privacy-policy",
          lastReviewed: new Date().toISOString().split("T")[0],
          reviewedBy: {
            "@type": "Organization",
            name: "Laser Web Maker",
          },
          publisher: {
            "@type": "Organization",
            name: "Laser Web Maker",
            url: "https://laserwebmaker.com",
          },
          mainEntity: {
            "@type": "Article",
            headline: "Privacy Policy for Web Development Services",
            datePublished: "26 January, 2026",
            dateModified: new Date().toISOString().split("T")[0],
            author: {
              "@type": "Organization",
              name: "Laser Web Maker",
            },
          },
        })}
      </Script>

      {/* ✅ Breadcrumb Schema */}
      <Script type="application/ld+json" id="breadcrumb-privacy">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://laserwebmaker.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Legal",
              item: "https://laserwebmaker.com/legal",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Privacy Policy",
              item: "https://laserwebmaker.com/privacy-policy",
            },
          ],
        })}
      </Script>

      {/* ✅ FAQ Schema for Privacy Policy */}
      <Script type="application/ld+json" id="faq-schema-privacy">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What information do you collect?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We collect information you provide directly (name, email, phone, company details), information automatically collected (IP address, browser type, pages visited), and information from third parties (analytics, payment processors).",
              },
            },
            {
              "@type": "Question",
              name: "How do you use my information?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We use your information to provide services, communicate with you, process payments, improve our website, comply with legal obligations, and send marketing communications (with your consent).",
              },
            },
            {
              "@type": "Question",
              name: "Do you share my information with third parties?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We only share information with trusted third parties who assist in service delivery (hosting, payment processing, email services), and only to the extent necessary to provide our services. We never sell your personal information.",
              },
            },
            {
              "@type": "Question",
              name: "How do you protect my data?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We implement security measures including SSL encryption, secure servers, regular security audits, access controls, and employee training to protect your data from unauthorized access, alteration, or destruction.",
              },
            },
            {
              "@type": "Question",
              name: "What are my data protection rights?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You have the right to access, correct, delete, restrict processing of, and object to processing of your personal data. You also have the right to data portability and to withdraw consent at any time.",
              },
            },
            {
              "@type": "Question",
              name: "How long do you retain my data?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We retain client data for as long as necessary to provide services and fulfill contractual obligations, or as required by law. Project data is retained for 5 years after project completion for reference and support purposes.",
              },
            },
            {
              "@type": "Question",
              name: "Do you use cookies?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we use cookies and similar tracking technologies to improve website functionality, analyze traffic, and personalize content. You can control cookies through your browser settings.",
              },
            },
            {
              "@type": "Question",
              name: "Is your privacy policy GDPR compliant?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, our privacy policy is designed to comply with GDPR requirements. We provide data protection rights, obtain explicit consent, implement security measures, and maintain transparency about data practices.",
              },
            },
            {
              "@type": "Question",
              name: "How can I contact you about privacy concerns?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You can contact our Data Protection Officer at info@laserwebmaker.com or by mail at our registered office address. We respond to all privacy inquiries within 7 business days.",
              },
            },
            {
              "@type": "Question",
              name: "Do you update this privacy policy?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we review and update this policy annually or as required by legal changes. We will notify you of significant changes via email or website notice at least 30 days before changes take effect.",
              },
            },
          ],
        })}
      </Script>

      {/* ✅ PrivacyPolicy Schema */}
      <Script type="application/ld+json" id="privacy-policy-schema">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "PrivacyPolicy",
          name: "Laser Web Maker Privacy Policy",
          description:
            "Privacy policy outlining data collection, usage, and protection practices",
          url: "https://laserwebmaker.com/privacy-policy",
          datePublished: "26 January, 2026",
          dateModified: new Date().toISOString().split("T")[0],
          publisher: {
            "@type": "Organization",
            name: "Laser Web Maker",
            url: "https://laserwebmaker.com",
          },
          copyrightYear: new Date().getFullYear(),
          copyrightHolder: {
            "@type": "Organization",
            name: "Laser Web Maker",
          },
        })}
      </Script>

      {children}
    </>
  );
}
