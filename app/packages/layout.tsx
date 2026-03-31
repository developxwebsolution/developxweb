import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Web Development & Design Pricing Plans 2026 | Laser Web Maker",
  description: "Transparent pricing for professional website development, e-commerce stores, and custom web solutions. Compare packages and get your project quote today.",
  keywords: [
    "website development cost",
    "web design pricing",
    "e-commerce website price",
    "WooCommerce development cost",
    "Shopify store pricing",
    "React website cost",
    "custom web development price",
    "affordable website packages",
    "website design charges",
    "business website pricing",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/pricings",
  },
  openGraph: {
    title: "Web Development Pricing Plans 2026 | Laser Web Maker",
    description: "Compare our transparent pricing for WooCommerce, Shopify, React, and custom web development projects.",
    url: "https://laserwebmaker.com/pricings",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/pricing-plans.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Pricing Plans | Laser Web Maker",
    description: "Transparent pricing for professional website development and e-commerce solutions.",
    images: ["https://laserwebmaker.com/og/pricing-plans.jpg"],
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* ✅ FAQ Schema for Pricing Page */}
      <Script type="application/ld+json" id="faq-schema-pricing">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How much does a basic WooCommerce website cost?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our WooCommerce Starter package starts at ₹54,999 + GST, which includes basic setup, product listing, payment gateway integration, mobile responsive design, and order management system. This package is ideal for startups launching their first online store.",
              },
            },
            {
              "@type": "Question",
              name: "What's included in your Shopify development packages?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We offer three Shopify packages: Basic (₹69,999 for up to 50 products), Advanced (₹1,29,999 for up to 100 products), and Customized (₹1,79,999 for up to 200 products). All packages include theme customization, payment gateway setup, mobile optimization, and basic app integration.",
              },
            },
            {
              "@type": "Question",
              name: "What is the cost difference between WooCommerce and Shopify?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "WooCommerce packages start at ₹54,999 (self-hosted solution) while Shopify packages start at ₹69,999 (hosted platform). WooCommerce offers more customization flexibility, while Shopify provides easier maintenance and built-in hosting.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer custom web development solutions?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we offer custom e-commerce development starting at ₹2,69,999 using Laravel or CodeIgniter, and React + Node.js dynamic web applications starting at ₹79,999. These are tailored solutions built from scratch for specific business needs.",
              },
            },
            {
              "@type": "Question",
              name: "What payment terms do you offer?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We typically work on a 50% advance payment and 50% upon completion basis. For larger projects above ₹2,00,000, we can discuss milestone-based payment plans to ensure smooth project execution.",
              },
            },
            {
              "@type": "Question",
              name: "Is GST included in your pricing?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "All our prices are exclusive of 18% GST. The final invoice will include GST as applicable per Indian tax regulations for businesses registered in India.",
              },
            },
            {
              "@type": "Question",
              name: "How long does it take to develop a website?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Basic WooCommerce/Shopify stores: 2-3 weeks. Custom e-commerce solutions: 4-6 weeks. React static websites: 1-2 weeks. Complex custom applications: 8-12 weeks. Timelines may vary based on project complexity and client responsiveness.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer website maintenance packages?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we offer monthly maintenance packages starting from ₹2,999/month for basic updates, security patches, and performance optimization. We also provide dedicated support plans for e-commerce stores.",
              },
            },
            {
              "@type": "Question",
              name: "Can I upgrade my package later?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely. You can start with a basic package and upgrade as your business grows. We offer seamless migration and upgrade paths between our WooCommerce and Shopify packages.",
              },
            },
            {
              "@type": "Question",
              name: "Do you provide hosting and domain services?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "For WooCommerce projects, we can help you choose and set up hosting (additional cost). For Shopify, hosting is included. We assist with domain registration and can manage hosting for you with our managed hosting plans.",
              },
            },
          ],
        })}
      </Script>

      {/* ✅ Product/Service Schema for Each Package */}
      <Script type="application/ld+json" id="product-schema-pricing">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              "name": "WooCommerce Starter Package",
              "description": "Basic WooCommerce setup for startups launching their first online store",
              "brand": {
                "@type": "Brand",
                "name": "Laser Web Maker"
              },
              "offers": {
                "@type": "Offer",
                "price": "54999",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "priceValidUntil": "2026-12-31"
              },
              "includes": "WordPress, WooCommerce, PHP, MySQL, Basic SEO Setup, Mobile Responsive Design"
            },
            {
              "@type": "Product",
              "name": "WooCommerce Customized Package",
              "description": "Customized WooCommerce solution for growing brands with advanced features",
              "brand": {
                "@type": "Brand",
                "name": "Laser Web Maker"
              },
              "offers": {
                "@type": "Offer",
                "price": "79999",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "priceValidUntil": "2026-12-31"
              },
              "includes": "Custom Theme Design, Advanced Product Filters, Custom Checkout Flow, Admin Dashboard Control"
            },
            {
              "@type": "Product",
              "name": "Basic Shopify Website",
              "description": "Professional Shopify store for small businesses with up to 50 products",
              "brand": {
                "@type": "Brand",
                "name": "Laser Web Maker"
              },
              "offers": {
                "@type": "Offer",
                "price": "69999",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "priceValidUntil": "2026-12-31"
              },
              "includes": "Theme Customization, Payment Gateway Setup, Basic App Integration, Mobile Optimization"
            },
            {
              "@type": "Product",
              "name": "Advanced Shopify Website",
              "description": "High-performance Shopify store for scaling businesses with up to 100 products",
              "brand": {
                "@type": "Brand",
                "name": "Laser Web Maker"
              },
              "offers": {
                "@type": "Offer",
                "price": "129999",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "priceValidUntil": "2026-12-31"
              },
              "includes": "Advanced UI Customization, Speed Optimization, Advanced App Integration, Conversion-Focused UX"
            },
            {
              "@type": "Product",
              "name": "React Static Website",
              "description": "Fast, SEO-friendly static website using React and Next.js",
              "brand": {
                "@type": "Brand",
                "name": "Laser Web Maker"
              },
              "offers": {
                "@type": "Offer",
                "price": "39999",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "priceValidUntil": "2026-12-31"
              },
              "includes": "Blazing Fast Performance, Modern UI Design, SEO Optimized, Fully Responsive"
            },
            {
              "@type": "Product",
              "name": "React + Node.js Dynamic Web App",
              "description": "Full-stack web application with modern architecture and dynamic features",
              "brand": {
                "@type": "Brand",
                "name": "Laser Web Maker"
              },
              "offers": {
                "@type": "Offer",
                "price": "79999",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "priceValidUntil": "2026-12-31"
              },
              "includes": "Dynamic Admin Dashboard, API-Driven Architecture, Authentication, Scalable Backend"
            },
            {
              "@type": "Product",
              "name": "Custom CMS E-Commerce",
              "description": "Enterprise-grade custom e-commerce platform built from scratch",
              "brand": {
                "@type": "Brand",
                "name": "Laser Web Maker"
              },
              "offers": {
                "@type": "Offer",
                "price": "269999",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "priceValidUntil": "2026-12-31"
              },
              "includes": "Custom Admin Panel, Advanced Product Management, Role-Based Access Control, High Scalability"
            }
          ]
        })}
      </Script>

      {/* ✅ Breadcrumb Schema */}
      <Script type="application/ld+json" id="breadcrumb-schema">
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
              "name": "Services",
              "item": "https://laserwebmaker.com/services"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Pricing Plans",
              "item": "https://laserwebmaker.com/pricings"
            }
          ]
        })}
      </Script>

      {/* ✅ LocalBusiness Schema for Contact */}
      <Script type="application/ld+json" id="localbusiness-pricing">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Laser Web Maker - Web Development Company",
          "url": "https://laserwebmaker.com",
          "logo": "https://laserwebmaker.com/logo.png",
          "telephone": "+91 72919 34043",
          "email": "info@laserwebmaker.com",
          "priceRange": "₹₹ - ₹₹₹₹",
          "description": "Professional web development and design company offering transparent pricing for WooCommerce, Shopify, React, and custom web solutions.",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
          },
          "openingHours": "Mo-Sa 09:30-19:00",
          "currenciesAccepted": "INR, USD",
          "paymentAccepted": "Bank Transfer, Credit Card, UPI, PayPal",
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Web Development Packages",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "WooCommerce Development",
                  "description": "Custom WooCommerce online stores"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Shopify Development",
                  "description": "Professional Shopify e-commerce stores"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "React Web Development",
                  "description": "Modern React and Next.js websites"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Custom Web Applications",
                  "description": "Tailored web solutions for businesses"
                }
              }
            ]
          }
        })}
      </Script>

      {children}
    </>
  );
}