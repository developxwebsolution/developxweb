import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "PHP Website Development Company in Noida | Custom PHP Solutions",
  description: "Professional PHP website development company in Noida offering custom PHP solutions, Laravel, CodeIgniter development, and dynamic website development services.",
  keywords: [
    "PHP development company Noida",
    "PHP website development Noida",
    "Laravel development Noida",
    "CodeIgniter development Noida",
    "custom PHP development Noida",
    "PHP MySQL development Noida",
    "dynamic website development Noida",
    "PHP web application Noida",
    "best PHP developers Noida",
    "enterprise PHP solutions Noida",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://laserwebmaker.com/php-website-development-company-in-noida",
  },
  openGraph: {
    title: "PHP Web Development Services in Noida | Laser Web Maker",
    description: "Professional PHP development company in Noida offering custom PHP solutions, Laravel, and CodeIgniter development.",
    url: "https://laserwebmaker.com/php-website-development-company-in-noida",
    type: "website",
    images: [
      {
        url: "https://laserwebmaker.com/og/php-development-noida.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PHP Development Company in Noida",
    description: "Custom PHP, Laravel, and CodeIgniter development services in Noida.",
    images: ["https://laserwebmaker.com/og/php-development-noida.jpg"],
  },
};

export default function PHPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script type="application/ld+json" id="localbusiness-php">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Laser Web Maker - PHP Development Company in Noida",
          url: "https://laserwebmaker.com/php-website-development-company-in-noida",
          logo: "https://laserwebmaker.com/logo.png",
          telephone: "+91 72919 34043",
          description: "Professional PHP development company in Noida offering custom PHP solutions and frameworks.",
          areaServed: [
            { "@type": "Place", name: "Noida, Uttar Pradesh" },
            { "@type": "Place", name: "Delhi NCR" },
            { "@type": "Place", name: "India" },
          ],
          address: {
            "@type": "PostalAddress",
            addressRegion: "UP",
            addressCountry: "IN",
          },
          openingHours: "Mo-Sa 09:30-19:00",
          priceRange: "₹₹₹",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.7",
            ratingCount: "850",
          },
        })}
      </Script>

      <Script type="application/ld+json" id="faq-schema-php">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which is the best PHP development company in Noida?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Laser Web Maker is Noida's leading PHP development company, specializing in custom PHP solutions, Laravel, CodeIgniter, and enterprise-grade web applications for businesses requiring robust, scalable backend systems.",
              },
            },
            {
              "@type": "Question",
              name: "What PHP frameworks do you specialize in?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We specialize in Laravel, CodeIgniter, Symfony, CakePHP, and custom PHP MVC frameworks. We choose the framework based on project requirements, scalability needs, and client preferences.",
              },
            },
            {
              "@type": "Question",
              name: "Do you provide PHP maintenance and support in Noida?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we offer comprehensive PHP maintenance and support packages for Noida clients, including security updates, performance optimization, bug fixes, and feature enhancements.",
              },
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}