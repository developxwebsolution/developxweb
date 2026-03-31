import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact Us | Web Development Company | Laser Web Maker",
  description: "Get in touch with our web development team for custom website design, e-commerce solutions, and digital services. Contact us for free consultation.",
  keywords: [
    "contact web development company",
    "website development contact",
    "web design agency contact",
    "get website quote",
    "free web consultation",
    "website development support",
    "contact web designers",
    "web development inquiry",
    "website project discussion",
    "business website contact",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/contact-us",
  },
  openGraph: {
    title: "Contact Laser Web Maker | Web Development Company",
    description: "Contact our team for professional website development, e-commerce solutions, and digital services. Get a free consultation today.",
    url: "https://laserwebmaker.com/contact-us",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/contact-us.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Laser Web Maker",
    description: "Get in touch with our web development team for your next project.",
    images: ["https://laserwebmaker.com/og/contact-us.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* ✅ LocalBusiness Schema with Contact Information */}
      <Script type="application/ld+json" id="localbusiness-contact">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Laser Web Maker",
          "description": "Professional web development company offering custom website design, e-commerce solutions, and digital services.",
          "url": "https://laserwebmaker.com",
          "logo": "https://laserwebmaker.com/logo.png",
          "telephone": "+91 72919 34043",
          "email": "info@laserwebmaker.com",
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+91 72919 34043",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi"]
            },
            {
              "@type": "ContactPoint",
              "telephone": "+91 72919 34043",
              "contactType": "technical support",
              "areaServed": "Worldwide",
              "availableLanguage": ["English"]
            },
            {
              "@type": "ContactPoint",
              "telephone": "+91 72919 34043",
              "contactType": "sales",
              "areaServed": ["IN", "US", "UK", "AE", "QA"],
              "availableLanguage": ["English", "Hindi"]
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Office Address",
            "addressLocality": "Delhi NCR",
            "addressRegion": "NCR",
            "postalCode": "110001",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "28.6139",
            "longitude": "77.2090"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:30",
              "closes": "19:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Saturday"],
              "opens": "09:30",
              "closes": "17:00"
            }
          ],
          "sameAs": [
            "https://www.facebook.com/laserwebmaker",
            "https://www.instagram.com/laserwebmaker",
            "https://www.linkedin.com/company/laserwebmaker",
            "https://twitter.com/laserwebmaker",
            "https://www.youtube.com/@laserwebmaker"
          ],
          "areaServed": [
            {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "28.6139",
                "longitude": "77.2090"
              },
              "geoRadius": "500000"
            }
          ],
          "priceRange": "₹₹ - ₹₹₹₹",
          "currenciesAccepted": "INR, USD, EUR, AED, GBP, QAR"
        })}
      </Script>

      {/* ✅ ContactPage Schema */}
      <Script type="application/ld+json" id="contactpage-schema">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Laser Web Maker",
          "description": "Contact page for Laser Web Maker - Professional web development company",
          "url": "https://laserwebmaker.com/contact-us",
          "mainEntity": {
            "@type": "WebPageElement",
            "name": "Contact Form",
            "description": "Form to contact Laser Web Maker for web development services"
          }
        })}
      </Script>

      {/* ✅ FAQ Schema for Contact Page */}
      <Script type="application/ld+json" id="faq-schema-contact">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How do I contact Laser Web Maker for a website project?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can contact us via phone at +91 72919 34043, email at info@laserwebmaker.com, or fill out the contact form on this page. We typically respond within 2-4 business hours."
              }
            },
            {
              "@type": "Question",
              "name": "What information should I provide when contacting for a website?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Please provide your business name, project requirements, budget range, timeline, and any reference websites you like. This helps us provide accurate consultation and quotes."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer free consultation for web development projects?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer a free 30-minute consultation call to discuss your project requirements, understand your business goals, and provide preliminary recommendations."
              }
            },
            {
              "@type": "Question",
              "name": "What are your working hours for client communication?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our office hours are Monday to Friday 9:30 AM to 7:00 PM and Saturday 9:30 AM to 5:00 PM IST. For urgent matters, we can be reached via email 24/7."
              }
            },
            {
              "@type": "Question",
              "name": "How quickly can you start a new web development project?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Typically, we can start new projects within 3-5 business days after project discussion and agreement. For urgent projects, we can sometimes start within 24 hours."
              }
            },
            {
              "@type": "Question",
              "name": "Do you work with international clients?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we work with clients worldwide including USA, UK, UAE, Qatar, Canada, Australia, and European countries. We coordinate through video calls, email, and project management tools."
              }
            },
            {
              "@type": "Question",
              "name": "What payment methods do you accept?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We accept bank transfers, UPI, credit/debit cards, PayPal, and Wise for international clients. We typically work on 50% advance and 50% upon completion basis."
              }
            },
            {
              "@type": "Question",
              "name": "Can I visit your office for a face-to-face meeting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we welcome in-person meetings at our Delhi NCR office by appointment. Please contact us to schedule a meeting at least 24 hours in advance."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide ongoing support after website development?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer various maintenance and support packages starting from ₹2,999/month which include updates, security monitoring, backups, and technical support."
              }
            },
            {
              "@type": "Question",
              "name": "What is your typical response time for support requests?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "For urgent technical issues: 2-4 hours. For general support queries: 4-8 business hours. For new project inquiries: 2-4 business hours."
              }
            }
          ]
        })}
      </Script>

      {/* ✅ Organization Schema */}
      <Script type="application/ld+json" id="organization-schema">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Laser Web Maker",
          "alternateName": "LWM",
          "url": "https://laserwebmaker.com",
          "logo": "https://laserwebmaker.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-7291934043",
            "contactType": "customer service",
            "contactOption": "TollFree",
            "areaServed": "Worldwide",
            "availableLanguage": ["English", "Hindi"]
          },
          "sameAs": [
            "https://www.facebook.com/laserwebmaker",
            "https://www.instagram.com/laserwebmaker",
            "https://www.linkedin.com/company/laserwebmaker",
            "https://twitter.com/laserwebmaker"
          ]
        })}
      </Script>

      {/* ✅ Breadcrumb Schema */}
      <Script type="application/ld+json" id="breadcrumb-contact">
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
              "name": "Contact Us",
              "item": "https://laserwebmaker.com/contact-us"
            }
          ]
        })}
      </Script>

      {/* ✅ Site Navigation Schema */}
      <Script type="application/ld+json" id="sitenavigation-schema">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SiteNavigationElement",
          "name": "Contact Information",
          "description": "Navigation to contact Laser Web Maker",
          "url": "https://laserwebmaker.com/contact-us",
          "potentialAction": {
            "@type": "Action",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://laserwebmaker.com/contact-us",
              "actionPlatform": [
                "http://schema.org/DesktopWebPlatform",
                "http://schema.org/MobileWebPlatform"
              ]
            },
            "expectsAcceptanceOf": {
              "@type": "Offer",
              "name": "Web Development Consultation"
            }
          }
        })}
      </Script>

      {children}
    </>
  );
}