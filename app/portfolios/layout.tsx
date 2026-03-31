import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Our Portfolio | Web Development & Design Projects | Laser Web Maker",
  description: "Explore our portfolio of successful web development projects. See our work in WordPress, React, e-commerce, and custom web solutions for businesses worldwide.",
  keywords: [
    "web development portfolio",
    "website design portfolio",
    "web design projects",
    "development case studies",
    "WordPress portfolio",
    "e-commerce website portfolio",
    "React projects portfolio",
    "web agency portfolio",
    "portfolio of websites",
    "web development work examples",
    "website redesign portfolio",
    "mobile app development portfolio",
    "UI/UX design portfolio",
    "responsive website portfolio",
    "custom web development projects",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/our-portfolio",
  },
  openGraph: {
    title: "Web Development Portfolio | Laser Web Maker Projects",
    description: "Browse our portfolio of web development projects including websites, e-commerce stores, and custom applications we've built for clients.",
    url: "https://laserwebmaker.com/our-portfolio",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/portfolio-showcase.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Portfolio | Laser Web Maker",
    description: "Check out our portfolio of web development and design projects for various industries.",
    images: ["https://laserwebmaker.com/og/portfolio-showcase.jpg"],
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* ✅ Portfolio Collection Schema */}
      <Script type="application/ld+json" id="portfolio-schema">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Laser Web Maker Portfolio",
          "description": "Portfolio of web development and design projects completed by Laser Web Maker",
          "url": "https://laserwebmaker.com/our-portfolio",
          "mainEntity": {
            "@type": "ItemList",
            "numberOfItems": 20,
            "itemListOrder": "https://schema.org/ItemListOrderDescending",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "CreativeWork",
                  "name": "E-commerce Website Development",
                  "description": "Custom e-commerce solutions built with WooCommerce, Shopify, and custom platforms",
                  "url": "https://laserwebmaker.com/our-portfolio#ecommerce",
                  "genre": ["Web Development", "E-commerce"]
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "CreativeWork",
                  "name": "WordPress Website Development",
                  "description": "Custom WordPress themes, plugins, and CMS solutions",
                  "url": "https://laserwebmaker.com/our-portfolio#wordpress",
                  "genre": ["Web Development", "WordPress"]
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "CreativeWork",
                  "name": "React & Next.js Applications",
                  "description": "Modern web applications built with React, Next.js, and TypeScript",
                  "url": "https://laserwebmaker.com/our-portfolio#react",
                  "genre": ["Web Development", "React"]
                }
              },
              {
                "@type": "ListItem",
                "position": 4,
                "item": {
                  "@type": "CreativeWork",
                  "name": "Corporate Website Design",
                  "description": "Professional corporate websites for businesses and organizations",
                  "url": "https://laserwebmaker.com/our-portfolio#corporate",
                  "genre": ["Web Design", "Corporate"]
                }
              },
              {
                "@type": "ListItem",
                "position": 5,
                "item": {
                  "@type": "CreativeWork",
                  "name": "Mobile App Development",
                  "description": "Cross-platform mobile applications for iOS and Android",
                  "url": "https://laserwebmaker.com/our-portfolio#mobile",
                  "genre": ["Mobile Development", "Apps"]
                }
              }
            ]
          }
        })}
      </Script>

      {/* ✅ Organization Schema with Portfolio */}
      <Script type="application/ld+json" id="organization-portfolio">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Laser Web Maker",
          "url": "https://laserwebmaker.com",
          "logo": "https://laserwebmaker.com/logo.png",
          "description": "Professional web development company with extensive portfolio of successful projects",
          "knowsAbout": [
            "Web Development",
            "Web Design",
            "E-commerce Development",
            "WordPress Development",
            "React Development",
            "UI/UX Design",
            "Mobile App Development",
            "SEO Optimization"
          ],
          "hasCredential": [
            {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "Portfolio",
              "recognizedBy": {
                "@type": "Organization",
                "name": "Client Testimonials"
              }
            }
          ],
          "award": [
            "100+ Projects Completed",
            "95% Client Satisfaction",
            "50+ Happy Clients",
            "30+ Industries Served"
          ]
        })}
      </Script>

      {/* ✅ Breadcrumb Schema */}
      <Script type="application/ld+json" id="breadcrumb-portfolio">
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
              "name": "Portfolio",
              "item": "https://laserwebmaker.com/our-portfolio"
            }
          ]
        })}
      </Script>

      {/* ✅ FAQ Schema for Portfolio */}
      <Script type="application/ld+json" id="faq-schema-portfolio">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What types of projects are in your portfolio?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our portfolio includes e-commerce websites, corporate websites, WordPress CMS solutions, React/Next.js applications, mobile apps, PSD to HTML conversions, UI/UX design projects, and custom web applications across various industries including healthcare, education, retail, and technology."
              }
            },
            {
              "@type": "Question",
              "name": "Can I see live examples of your work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide live demo links for most of our portfolio projects. Each portfolio item includes project details, technologies used, challenges faced, solutions implemented, and when possible, links to live websites. Some client projects have confidentiality agreements, so we showcase them with client permission."
              }
            },
            {
              "@type": "Question",
              "name": "How many projects have you completed?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We have successfully completed 100+ web development projects for clients across India, USA, UK, UAE, and other countries. Our portfolio includes projects of varying complexity from simple brochure websites to complex e-commerce platforms and enterprise applications."
              }
            },
            {
              "@type": "Question",
              "name": "What industries have you worked with?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We've worked with 30+ industries including education, healthcare, real estate, e-commerce, manufacturing, hospitality, technology startups, finance, logistics, non-profits, government organizations, and service-based businesses."
              }
            },
            {
              "@type": "Question",
              "name": "Do you redesign existing websites?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, website redesign is a significant part of our portfolio. We showcase before/after examples of websites we've redesigned, highlighting improved user experience, modern design, better performance, and increased conversion rates for our clients."
              }
            },
            {
              "@type": "Question",
              "name": "What technologies do you use in your projects?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our portfolio demonstrates expertise in WordPress, WooCommerce, Shopify, React, Next.js, Node.js, PHP, Laravel, HTML5, CSS3, JavaScript, TypeScript, MySQL, MongoDB, and various frameworks and libraries. Each project lists the specific technologies used."
              }
            },
            {
              "@type": "Question",
              "name": "Can you work on projects similar to my requirements?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. Our portfolio shows our versatility. If you have specific requirements, we can show you similar projects we've completed. We also offer free consultations to discuss how we can apply our experience to your project."
              }
            },
            {
              "@type": "Question",
              "name": "What is your typical project timeline?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Based on our portfolio projects: Simple websites: 2-3 weeks. E-commerce stores: 4-6 weeks. Custom web applications: 6-12 weeks. Actual timelines depend on project complexity, features, and client responsiveness, which we discuss during project planning."
              }
            },
            {
              "@type": "Question",
              "name": "How do you handle project confidentiality?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We respect client confidentiality. Some portfolio items are showcased with client permission, while others are shown as case studies without revealing sensitive information. We can sign NDAs and provide private portfolio access for serious inquiries."
              }
            },
            {
              "@type": "Question",
              "name": "What results have your projects achieved for clients?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our portfolio includes measurable results like increased website traffic (up to 300%), improved conversion rates (up to 150%), faster page load times (up to 70% improvement), better mobile experience, and increased sales for e-commerce clients. We include testimonials and results when available."
              }
            }
          ]
        })}
      </Script>

      {/* ✅ Image Gallery Schema */}
      <Script type="application/ld+json" id="gallery-schema">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": "Web Development Project Gallery",
          "description": "Gallery of screenshots from our web development and design projects",
          "url": "https://laserwebmaker.com/our-portfolio",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://laserwebmaker.com/our-portfolio"
          },
          "thumbnail": {
            "@type": "ImageObject",
            "contentUrl": "https://laserwebmaker.com/og/portfolio-showcase.jpg",
            "width": 1200,
            "height": 630
          }
        })}
      </Script>

      {children}
    </>
  );
}