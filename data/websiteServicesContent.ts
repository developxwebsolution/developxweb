export interface Feature {
  title: string;
  description: string;
  bgImage: string;
  link: string;
}

export interface WebsiteServicesContent {
  heading: string;
  subheading: string;
  features: Feature[];
}

const commonFeatures = [
  {
    title: "Shopify Website Development",
    description:
      "Launch your online store quickly with Shopify. We design and customize Shopify stores for smooth shopping experiences, secure payments, and easy product management.",
    bgImage:
      "/images/web-dev/webservices/shopify-website-development.jpeg",
    link: "/services/shopify-ecommerce",
  },
  {
    title: "WooCommerce",
    description:
      "Build flexible and powerful online stores using WooCommerce on WordPress. Perfect for scalable, SEO-friendly, and customizable eCommerce websites.",
    bgImage: "/images/web-dev/webservices/E-commerce-Website-WooCommerce.jpg",
    link: "/services/woocommerce-ecommerce",
  },
  {
    title: "Domain Registration",
    description:
      "Secure your online identity with our domain registration service. We help you choose and register the perfect domain name for your brand.",
    bgImage: "/images/web-dev/webservices/Domain-Registration.jpg",
    link: "/services/domain-registration",
  },
  {
    title: "Server Management",
    description:
      "Ensure your website runs smoothly with our professional server management services — from setup to performance monitoring and maintenance.",
    bgImage: "/images/web-dev/webservices/Server-Management.jpg",
    link: "/services/server-management",
  },
  {
    title: "AWS Cloud Management",
    description:
      "We manage and optimize your AWS cloud infrastructure for maximum uptime, scalability, and cost-efficiency.",
    bgImage: "/images/web-dev/webservices/aws-img.jpg",
    link: "/services/aws-server-management",
  },
  {
    title: "Web Hosting",
    description:
      "Get reliable, fast, and secure web hosting with 99.9% uptime and technical support that keeps your site online without interruptions.",
    bgImage: "/images/web-dev/webservices/web-hosting.jpg",
    link: "/services/web-hosting",
  },
  {
    title: "SSL Certificate",
    description:
      "Protect your website and customers' data with trusted SSL certificates that boost your site's security and SEO ranking.",
    bgImage: "/images/web-dev/webservices/ssl-certificate-img.jpg",
    link: "/services/ssl-certificate",
  },
  {
    title: "WordPress Development",
    description:
      "We build modern, user-friendly, and SEO-optimized WordPress websites that you can easily manage and scale as your business grows.",
    bgImage: "/images/web-dev/webservices/wordpress-website-development.jpg",
    link: "/services/wordpress-website",
  },
  {
    title: "Custom Development",
    description:
      "Need something unique? We create tailor-made websites from scratch with custom designs, features, and integrations to fit your brand.",
    bgImage: "/images/web-dev/webservices/custom-website-development.jpg",
    link: "/services/custom-website",
  },
  {
    title: "Magento Development",
    description:
      "Power your large-scale eCommerce business with Magento — offering enterprise-grade performance, advanced features, and complete customization.",
    bgImage: "/images/web-dev/webservices/magento-website-development.jpg",
    link: "/services/magento-development",
  },
  {
    title: "Maintenance & Support",
    description:
      "Keep your website secure, updated, and running smoothly with our reliable maintenance and support services.",
    bgImage: "/images/web-dev/webservices/website-maintenance-support.jpg",
    link: "/services/website-maintenance-support",
  },
  {
    title: "Speed Optimization",
    description:
      "Improve your website’s loading speed and performance for a faster, smoother user experience.",
    bgImage: "/images/web-dev/webservices/website-speed-optimization.jpg",
    link: "/services/website-speed-optimization",
  },
];

export const websiteServicesCommon: Record<string, WebsiteServicesContent> = {
 

   default: {
    heading: "Complete Web Solutions",
  subheading:
    "From e-commerce to custom websites, hosting, and maintenance—we handle it all.",
  features: [
    {
      title: "Shopify website Development",
      description:
        "Launch your online store quickly with Shopify. We design and customize Shopify stores for smooth shopping experiences, secure payments, and easy product management.",
      bgImage:
        "/images/web-dev/webservices/shopify-website-development.jpeg",
      link: "/services/shopify-ecommerce",
    },
    {
      title: "WooCommerce",
      description:
        "Build flexible and powerful online stores using WooCommerce on WordPress. Perfect for scalable, SEO-friendly, and customizable eCommerce websites.",
      bgImage: "/images/web-dev/webservices/E-commerce-Website-WooCommerce.jpg",
      link: "/services/woocommerce-ecommerce",
    },
    {
      title: "Domain Registration",
      description:
        "Secure your online identity with our domain registration service. We help you choose and register the perfect domain name for your brand.",
      bgImage: "/images/web-dev/webservices/Domain-Registration.jpg",
      link: "/services/domain-registration",
    },
    {
      title: "Server Management",
      description:
        "Ensure your website runs smoothly with our professional server management services — from setup to performance monitoring and maintenance.",
      bgImage: "/images/web-dev/webservices/Server-Management.jpg",
      link: "/services/server-management",
    },
    {
      title: "AWS Cloud Management",
      description:
        "We manage and optimize your AWS cloud infrastructure for maximum uptime, scalability, and cost-efficiency.",
      bgImage: "/images/web-dev/webservices/aws-img.jpg",
      link: "/services/aws-server-management",
    },
    {
      title: "Web Hosting",
      description:
        "Get reliable, fast, and secure web hosting with 99.9% uptime and technical support that keeps your site online without interruptions.",
      bgImage: "/images/web-dev/webservices/web-hosting.jpg",
      link: "/services/web-hosting",
    },
    {
      title: "SSL Certificate",
      description:
        "Protect your website and customers' data with trusted SSL certificates that boost your site's security and SEO ranking.",
      bgImage: "/images/web-dev/webservices/ssl-certificate-img.jpg",
      link: "/services/ssl-certificate",
    },
    {
      title: "WordPress Development",
      description:
        "We build modern, user-friendly, and SEO-optimized WordPress websites that you can easily manage and scale as your business grows.",
      bgImage: "/images/web-dev/webservices/wordpress-website-development.jpg",
      link: "/services/wordpress-website",
    },
    {
      title: "Custom Development",
      description:
        "Need something unique? We create tailor-made websites from scratch with custom designs, features, and integrations to fit your brand.",
      bgImage: "/images/web-dev/webservices/custom-website-development.jpg",
      link: "/services/custom-website",
    },
    {
      title: "Magento Development",
      description:
        "Power your large-scale eCommerce business with Magento — offering enterprise-grade performance, advanced features, and complete customization.",
      bgImage: "/images/web-dev/webservices/magento-website-development.jpg",
      link: "/services/magento-development",
    },
    {
      title: "Maintenance & Support",
      description:
        "Keep your website secure, updated, and running smoothly with our reliable maintenance and support services.",
      bgImage: "/images/web-dev/webservices/website-maintenance-support.jpg",
      link: "/services/website-maintenance-support",
    },
    {
      title: "Speed Optimization",
      description:
        "Improve your website’s loading speed and performance for a faster, smoother user experience.",
      bgImage: "/images/web-dev/webservices/website-speed-optimization.jpg",
      link: "/services/website-speed-optimization",
    },
  ],
  },
   thane: {
    heading: "Complete Web Solutions in Thane & Mumbai",
  subheading:
    "From e-commerce to custom websites, hosting, and maintenance—we handle it all.",
  features: [
    {
      title: "Shopify website Development",
      description:
        "Launch your online store quickly with Shopify. We design and customize Shopify stores for smooth shopping experiences, secure payments, and easy product management.",
      bgImage:
        "/images/web-dev/webservices/shopify-website-development.jpeg",
      link: "/services/shopify-ecommerce",
    },
    {
      title: "WooCommerce",
      description:
        "Build flexible and powerful online stores using WooCommerce on WordPress. Perfect for scalable, SEO-friendly, and customizable eCommerce websites.",
      bgImage: "/images/web-dev/webservices/E-commerce-Website-WooCommerce.jpg",
      link: "/services/woocommerce-ecommerce",
    },
    {
      title: "Domain Registration",
      description:
        "Secure your online identity with our domain registration service. We help you choose and register the perfect domain name for your brand.",
      bgImage: "/images/web-dev/webservices/Domain-Registration.jpg",
      link: "/services/domain-registration",
    },
    {
      title: "Server Management",
      description:
        "Ensure your website runs smoothly with our professional server management services — from setup to performance monitoring and maintenance.",
      bgImage: "/images/web-dev/webservices/Server-Management.jpg",
      link: "/services/server-management",
    },
    {
      title: "AWS Cloud Management",
      description:
        "We manage and optimize your AWS cloud infrastructure for maximum uptime, scalability, and cost-efficiency.",
      bgImage: "/images/web-dev/webservices/aws-img.jpg",
      link: "/services/aws-server-management",
    },
    {
      title: "Web Hosting",
      description:
        "Get reliable, fast, and secure web hosting with 99.9% uptime and technical support that keeps your site online without interruptions.",
      bgImage: "/images/web-dev/webservices/web-hosting.jpg",
      link: "/services/web-hosting",
    },
    {
      title: "SSL Certificate",
      description:
        "Protect your website and customers' data with trusted SSL certificates that boost your site's security and SEO ranking.",
      bgImage: "/images/web-dev/webservices/ssl-certificate-img.jpg",
      link: "/services/ssl-certificate",
    },
    {
      title: "WordPress Development",
      description:
        "We build modern, user-friendly, and SEO-optimized WordPress websites that you can easily manage and scale as your business grows.",
      bgImage: "/images/web-dev/webservices/wordpress-website-development.jpg",
      link: "/services/wordpress-website",
    },
    {
      title: "Custom Development",
      description:
        "Need something unique? We create tailor-made websites from scratch with custom designs, features, and integrations to fit your brand.",
      bgImage: "/images/web-dev/webservices/custom-website-development.jpg",
      link: "/services/custom-website",
    },
    {
      title: "Magento Development",
      description:
        "Power your large-scale eCommerce business with Magento — offering enterprise-grade performance, advanced features, and complete customization.",
      bgImage: "/images/web-dev/webservices/magento-website-development.jpg",
      link: "/services/magento-development",
    },
    {
      title: "Maintenance & Support",
      description:
        "Keep your website secure, updated, and running smoothly with our reliable maintenance and support services.",
      bgImage: "/images/web-dev/webservices/website-maintenance-support.jpg",
      link: "/services/website-maintenance-support",
    },
    {
      title: "Speed Optimization",
      description:
        "Improve your website’s loading speed and performance for a faster, smoother user experience.",
      bgImage: "/images/web-dev/webservices/website-speed-optimization.jpg",
      link: "/services/website-speed-optimization",
    },
  ],
  },

   pune: {
    heading: "Website Development & Web Solutions in Pune",
  subheading:
    "Professional e-commerce, hosting, and custom website services for Pune businesses—end-to-end digital solutions.",
  features: [
    {
      title: "Shopify website Development",
      description:
        "Launch your online store quickly with Shopify. We design and customize Shopify stores for smooth shopping experiences, secure payments, and easy product management.",
      bgImage:
        "/images/web-dev/webservices/shopify-website-development.jpeg",
      link: "/services/shopify-ecommerce",
    },
    {
      title: "WooCommerce",
      description:
        "Build flexible and powerful online stores using WooCommerce on WordPress. Perfect for scalable, SEO-friendly, and customizable eCommerce websites.",
      bgImage: "/images/web-dev/webservices/E-commerce-Website-WooCommerce.jpg",
      link: "/services/woocommerce-ecommerce",
    },
    {
      title: "Domain Registration",
      description:
        "Secure your online identity with our domain registration service. We help you choose and register the perfect domain name for your brand.",
      bgImage: "/images/web-dev/webservices/Domain-Registration.jpg",
      link: "/services/domain-registration",
    },
    {
      title: "Server Management",
      description:
        "Ensure your website runs smoothly with our professional server management services — from setup to performance monitoring and maintenance.",
      bgImage: "/images/web-dev/webservices/Server-Management.jpg",
      link: "/services/server-management",
    },
    {
      title: "AWS Cloud Management",
      description:
        "We manage and optimize your AWS cloud infrastructure for maximum uptime, scalability, and cost-efficiency.",
      bgImage: "/images/web-dev/webservices/aws-img.jpg",
      link: "/services/aws-server-management",
    },
    {
      title: "Web Hosting",
      description:
        "Get reliable, fast, and secure web hosting with 99.9% uptime and technical support that keeps your site online without interruptions.",
      bgImage: "/images/web-dev/webservices/web-hosting.jpg",
      link: "/services/web-hosting",
    },
    {
      title: "SSL Certificate",
      description:
        "Protect your website and customers' data with trusted SSL certificates that boost your site's security and SEO ranking.",
      bgImage: "/images/web-dev/webservices/ssl-certificate-img.jpg",
      link: "/services/ssl-certificate",
    },
    {
      title: "WordPress Development",
      description:
        "We build modern, user-friendly, and SEO-optimized WordPress websites that you can easily manage and scale as your business grows.",
      bgImage: "/images/web-dev/webservices/wordpress-website-development.jpg",
      link: "/services/wordpress-website",
    },
    {
      title: "Custom Development",
      description:
        "Need something unique? We create tailor-made websites from scratch with custom designs, features, and integrations to fit your brand.",
      bgImage: "/images/web-dev/webservices/custom-website-development.jpg",
      link: "/services/custom-website",
    },
    {
      title: "Magento Development",
      description:
        "Power your large-scale eCommerce business with Magento — offering enterprise-grade performance, advanced features, and complete customization.",
      bgImage: "/images/web-dev/webservices/magento-website-development.jpg",
      link: "/services/magento-development",
    },
    {
      title: "Maintenance & Support",
      description:
        "Keep your website secure, updated, and running smoothly with our reliable maintenance and support services.",
      bgImage: "/images/web-dev/webservices/website-maintenance-support.jpg",
      link: "/services/website-maintenance-support",
    },
    {
      title: "Speed Optimization",
      description:
        "Improve your website’s loading speed and performance for a faster, smoother user experience.",
      bgImage: "/images/web-dev/webservices/website-speed-optimization.jpg",
      link: "/services/website-speed-optimization",
    },
  ],
  },
   nagpur: {
    heading: "Website Development & Web Solutions in Nagpur",
    subheading: "Expert e-commerce, hosting, and custom website services for Nagpur businesses—full-cycle web development.",
  features: [
    {
      title: "Shopify website Development",
      description:
        "Launch your online store quickly with Shopify. We design and customize Shopify stores for smooth shopping experiences, secure payments, and easy product management.",
      bgImage:
        "/images/web-dev/webservices/shopify-website-development.jpeg",
      link: "/services/shopify-ecommerce",
    },
    {
      title: "WooCommerce",
      description:
        "Build flexible and powerful online stores using WooCommerce on WordPress. Perfect for scalable, SEO-friendly, and customizable eCommerce websites.",
      bgImage: "/images/web-dev/webservices/E-commerce-Website-WooCommerce.jpg",
      link: "/services/woocommerce-ecommerce",
    },
    {
      title: "Domain Registration",
      description:
        "Secure your online identity with our domain registration service. We help you choose and register the perfect domain name for your brand.",
      bgImage: "/images/web-dev/webservices/Domain-Registration.jpg",
      link: "/services/domain-registration",
    },
    {
      title: "Server Management",
      description:
        "Ensure your website runs smoothly with our professional server management services — from setup to performance monitoring and maintenance.",
      bgImage: "/images/web-dev/webservices/Server-Management.jpg",
      link: "/services/server-management",
    },
    {
      title: "AWS Cloud Management",
      description:
        "We manage and optimize your AWS cloud infrastructure for maximum uptime, scalability, and cost-efficiency.",
      bgImage: "/images/web-dev/webservices/aws-img.jpg",
      link: "/services/aws-server-management",
    },
    {
      title: "Web Hosting",
      description:
        "Get reliable, fast, and secure web hosting with 99.9% uptime and technical support that keeps your site online without interruptions.",
      bgImage: "/images/web-dev/webservices/web-hosting.jpg",
      link: "/services/web-hosting",
    },
    {
      title: "SSL Certificate",
      description:
        "Protect your website and customers' data with trusted SSL certificates that boost your site's security and SEO ranking.",
      bgImage: "/images/web-dev/webservices/ssl-certificate-img.jpg",
      link: "/services/ssl-certificate",
    },
    {
      title: "WordPress Development",
      description:
        "We build modern, user-friendly, and SEO-optimized WordPress websites that you can easily manage and scale as your business grows.",
      bgImage: "/images/web-dev/webservices/wordpress-website-development.jpg",
      link: "/services/wordpress-website",
    },
    {
      title: "Custom Development",
      description:
        "Need something unique? We create tailor-made websites from scratch with custom designs, features, and integrations to fit your brand.",
      bgImage: "/images/web-dev/webservices/custom-website-development.jpg",
      link: "/services/custom-website",
    },
    {
      title: "Magento Development",
      description:
        "Power your large-scale eCommerce business with Magento — offering enterprise-grade performance, advanced features, and complete customization.",
      bgImage: "/images/web-dev/webservices/magento-website-development.jpg",
      link: "/services/magento-development",
    },
    {
      title: "Maintenance & Support",
      description:
        "Keep your website secure, updated, and running smoothly with our reliable maintenance and support services.",
      bgImage: "/images/web-dev/webservices/website-maintenance-support.jpg",
      link: "/services/website-maintenance-support",
    },
    {
      title: "Speed Optimization",
      description:
        "Improve your website’s loading speed and performance for a faster, smoother user experience.",
      bgImage: "/images/web-dev/webservices/website-speed-optimization.jpg",
      link: "/services/website-speed-optimization",
    },
  ],
  },
   kuwait: {
   heading: "Website Development & Web Solutions in Kuwait",
    subheading: "International e-commerce, hosting, and custom website services for Kuwait businesses—global web standards.",
  features: [
    {
      title: "Shopify website Development",
      description:
        "Launch your online store quickly with Shopify. We design and customize Shopify stores for smooth shopping experiences, secure payments, and easy product management.",
      bgImage:
        "/images/web-dev/webservices/shopify-website-development.jpeg",
      link: "/services/shopify-ecommerce",
    },
    {
      title: "WooCommerce",
      description:
        "Build flexible and powerful online stores using WooCommerce on WordPress. Perfect for scalable, SEO-friendly, and customizable eCommerce websites.",
      bgImage: "/images/web-dev/webservices/E-commerce-Website-WooCommerce.jpg",
      link: "/services/woocommerce-ecommerce",
    },
    {
      title: "Domain Registration",
      description:
        "Secure your online identity with our domain registration service. We help you choose and register the perfect domain name for your brand.",
      bgImage: "/images/web-dev/webservices/Domain-Registration.jpg",
      link: "/services/domain-registration",
    },
    {
      title: "Server Management",
      description:
        "Ensure your website runs smoothly with our professional server management services — from setup to performance monitoring and maintenance.",
      bgImage: "/images/web-dev/webservices/Server-Management.jpg",
      link: "/services/server-management",
    },
    {
      title: "AWS Cloud Management",
      description:
        "We manage and optimize your AWS cloud infrastructure for maximum uptime, scalability, and cost-efficiency.",
      bgImage: "/images/web-dev/webservices/aws-img.jpg",
      link: "/services/aws-server-management",
    },
    {
      title: "Web Hosting",
      description:
        "Get reliable, fast, and secure web hosting with 99.9% uptime and technical support that keeps your site online without interruptions.",
      bgImage: "/images/web-dev/webservices/web-hosting.jpg",
      link: "/services/web-hosting",
    },
    {
      title: "SSL Certificate",
      description:
        "Protect your website and customers' data with trusted SSL certificates that boost your site's security and SEO ranking.",
      bgImage: "/images/web-dev/webservices/ssl-certificate-img.jpg",
      link: "/services/ssl-certificate",
    },
    {
      title: "WordPress Development",
      description:
        "We build modern, user-friendly, and SEO-optimized WordPress websites that you can easily manage and scale as your business grows.",
      bgImage: "/images/web-dev/webservices/wordpress-website-development.jpg",
      link: "/services/wordpress-website",
    },
    {
      title: "Custom Development",
      description:
        "Need something unique? We create tailor-made websites from scratch with custom designs, features, and integrations to fit your brand.",
      bgImage: "/images/web-dev/webservices/custom-website-development.jpg",
      link: "/services/custom-website",
    },
    {
      title: "Magento Development",
      description:
        "Power your large-scale eCommerce business with Magento — offering enterprise-grade performance, advanced features, and complete customization.",
      bgImage: "/images/web-dev/webservices/magento-website-development.jpg",
      link: "/services/magento-development",
    },
    {
      title: "Maintenance & Support",
      description:
        "Keep your website secure, updated, and running smoothly with our reliable maintenance and support services.",
      bgImage: "/images/web-dev/webservices/website-maintenance-support.jpg",
      link: "/services/website-maintenance-support",
    },
    {
      title: "Speed Optimization",
      description:
        "Improve your website’s loading speed and performance for a faster, smoother user experience.",
      bgImage: "/images/web-dev/webservices/website-speed-optimization.jpg",
      link: "/services/website-speed-optimization",
    },
  ],
  },
   chennai: {
   heading: "Website Development & Web Solutions in Chennai",
    subheading: "Advanced e-commerce, hosting, and custom website services for Chennai businesses—technology-driven solutions.",
  features: [
    {
      title: "Shopify website Development",
      description:
        "Launch your online store quickly with Shopify. We design and customize Shopify stores for smooth shopping experiences, secure payments, and easy product management.",
      bgImage:
        "/images/web-dev/webservices/shopify-website-development.jpeg",
      link: "/services/shopify-ecommerce",
    },
    {
      title: "WooCommerce",
      description:
        "Build flexible and powerful online stores using WooCommerce on WordPress. Perfect for scalable, SEO-friendly, and customizable eCommerce websites.",
      bgImage: "/images/web-dev/webservices/E-commerce-Website-WooCommerce.jpg",
      link: "/services/woocommerce-ecommerce",
    },
    {
      title: "Domain Registration",
      description:
        "Secure your online identity with our domain registration service. We help you choose and register the perfect domain name for your brand.",
      bgImage: "/images/web-dev/webservices/Domain-Registration.jpg",
      link: "/services/domain-registration",
    },
    {
      title: "Server Management",
      description:
        "Ensure your website runs smoothly with our professional server management services — from setup to performance monitoring and maintenance.",
      bgImage: "/images/web-dev/webservices/Server-Management.jpg",
      link: "/services/server-management",
    },
    {
      title: "AWS Cloud Management",
      description:
        "We manage and optimize your AWS cloud infrastructure for maximum uptime, scalability, and cost-efficiency.",
      bgImage: "/images/web-dev/webservices/aws-img.jpg",
      link: "/services/aws-server-management",
    },
    {
      title: "Web Hosting",
      description:
        "Get reliable, fast, and secure web hosting with 99.9% uptime and technical support that keeps your site online without interruptions.",
      bgImage: "/images/web-dev/webservices/web-hosting.jpg",
      link: "/services/web-hosting",
    },
    {
      title: "SSL Certificate",
      description:
        "Protect your website and customers' data with trusted SSL certificates that boost your site's security and SEO ranking.",
      bgImage: "/images/web-dev/webservices/ssl-certificate-img.jpg",
      link: "/services/ssl-certificate",
    },
    {
      title: "WordPress Development",
      description:
        "We build modern, user-friendly, and SEO-optimized WordPress websites that you can easily manage and scale as your business grows.",
      bgImage: "/images/web-dev/webservices/wordpress-website-development.jpg",
      link: "/services/wordpress-website",
    },
    {
      title: "Custom Development",
      description:
        "Need something unique? We create tailor-made websites from scratch with custom designs, features, and integrations to fit your brand.",
      bgImage: "/images/web-dev/webservices/custom-website-development.jpg",
      link: "/services/custom-website",
    },
    {
      title: "Magento Development",
      description:
        "Power your large-scale eCommerce business with Magento — offering enterprise-grade performance, advanced features, and complete customization.",
      bgImage: "/images/web-dev/webservices/magento-website-development.jpg",
      link: "/services/magento-development",
    },
    {
      title: "Maintenance & Support",
      description:
        "Keep your website secure, updated, and running smoothly with our reliable maintenance and support services.",
      bgImage: "/images/web-dev/webservices/website-maintenance-support.jpg",
      link: "/services/website-maintenance-support",
    },
    {
      title: "Speed Optimization",
      description:
        "Improve your website’s loading speed and performance for a faster, smoother user experience.",
      bgImage: "/images/web-dev/webservices/website-speed-optimization.jpg",
      link: "/services/website-speed-optimization",
    },
  ],
  },
   bangalore: {
    heading: "Website Development & Web Solutions in Bangalore",
    subheading: "Innovative e-commerce, hosting, and custom website services for Bangalore businesses—cutting-edge web solutions.",
  features: [
    {
      title: "Shopify website Development",
      description:
        "Launch your online store quickly with Shopify. We design and customize Shopify stores for smooth shopping experiences, secure payments, and easy product management.",
      bgImage:
        "/images/web-dev/webservices/shopify-website-development.jpeg",
      link: "/services/shopify-ecommerce",
    },
    {
      title: "WooCommerce",
      description:
        "Build flexible and powerful online stores using WooCommerce on WordPress. Perfect for scalable, SEO-friendly, and customizable eCommerce websites.",
      bgImage: "/images/web-dev/webservices/E-commerce-Website-WooCommerce.jpg",
      link: "/services/woocommerce-ecommerce",
    },
    {
      title: "Domain Registration",
      description:
        "Secure your online identity with our domain registration service. We help you choose and register the perfect domain name for your brand.",
      bgImage: "/images/web-dev/webservices/Domain-Registration.jpg",
      link: "/services/domain-registration",
    },
    {
      title: "Server Management",
      description:
        "Ensure your website runs smoothly with our professional server management services — from setup to performance monitoring and maintenance.",
      bgImage: "/images/web-dev/webservices/Server-Management.jpg",
      link: "/services/server-management",
    },
    {
      title: "AWS Cloud Management",
      description:
        "We manage and optimize your AWS cloud infrastructure for maximum uptime, scalability, and cost-efficiency.",
      bgImage: "/images/web-dev/webservices/aws-img.jpg",
      link: "/services/aws-server-management",
    },
    {
      title: "Web Hosting",
      description:
        "Get reliable, fast, and secure web hosting with 99.9% uptime and technical support that keeps your site online without interruptions.",
      bgImage: "/images/web-dev/webservices/web-hosting.jpg",
      link: "/services/web-hosting",
    },
    {
      title: "SSL Certificate",
      description:
        "Protect your website and customers' data with trusted SSL certificates that boost your site's security and SEO ranking.",
      bgImage: "/images/web-dev/webservices/ssl-certificate-img.jpg",
      link: "/services/ssl-certificate",
    },
    {
      title: "WordPress Development",
      description:
        "We build modern, user-friendly, and SEO-optimized WordPress websites that you can easily manage and scale as your business grows.",
      bgImage: "/images/web-dev/webservices/wordpress-website-development.jpg",
      link: "/services/wordpress-website",
    },
    {
      title: "Custom Development",
      description:
        "Need something unique? We create tailor-made websites from scratch with custom designs, features, and integrations to fit your brand.",
      bgImage: "/images/web-dev/webservices/custom-website-development.jpg",
      link: "/services/custom-website",
    },
    {
      title: "Magento Development",
      description:
        "Power your large-scale eCommerce business with Magento — offering enterprise-grade performance, advanced features, and complete customization.",
      bgImage: "/images/web-dev/webservices/magento-website-development.jpg",
      link: "/services/magento-development",
    },
    {
      title: "Maintenance & Support",
      description:
        "Keep your website secure, updated, and running smoothly with our reliable maintenance and support services.",
      bgImage: "/images/web-dev/webservices/website-maintenance-support.jpg",
      link: "/services/website-maintenance-support",
    },
    {
      title: "Speed Optimization",
      description:
        "Improve your website’s loading speed and performance for a faster, smoother user experience.",
      bgImage: "/images/web-dev/webservices/website-speed-optimization.jpg",
      link: "/services/website-speed-optimization",
    },
  ],
  },
   delhi: {
   heading: "Website Development & Web Solutions in Delhi",
    subheading: "Comprehensive e-commerce, hosting, and custom website services for Delhi businesses—complete digital services.",
  features: [
    {
      title: "Shopify website Development",
      description:
        "Launch your online store quickly with Shopify. We design and customize Shopify stores for smooth shopping experiences, secure payments, and easy product management.",
      bgImage:
        "/images/web-dev/webservices/shopify-website-development.jpeg",
      link: "/services/shopify-ecommerce",
    },
    {
      title: "WooCommerce",
      description:
        "Build flexible and powerful online stores using WooCommerce on WordPress. Perfect for scalable, SEO-friendly, and customizable eCommerce websites.",
      bgImage: "/images/web-dev/webservices/E-commerce-Website-WooCommerce.jpg",
      link: "/services/woocommerce-ecommerce",
    },
    {
      title: "Domain Registration",
      description:
        "Secure your online identity with our domain registration service. We help you choose and register the perfect domain name for your brand.",
      bgImage: "/images/web-dev/webservices/Domain-Registration.jpg",
      link: "/services/domain-registration",
    },
    {
      title: "Server Management",
      description:
        "Ensure your website runs smoothly with our professional server management services — from setup to performance monitoring and maintenance.",
      bgImage: "/images/web-dev/webservices/Server-Management.jpg",
      link: "/services/server-management",
    },
    {
      title: "AWS Cloud Management",
      description:
        "We manage and optimize your AWS cloud infrastructure for maximum uptime, scalability, and cost-efficiency.",
      bgImage: "/images/web-dev/webservices/aws-img.jpg",
      link: "/services/aws-server-management",
    },
    {
      title: "Web Hosting",
      description:
        "Get reliable, fast, and secure web hosting with 99.9% uptime and technical support that keeps your site online without interruptions.",
      bgImage: "/images/web-dev/webservices/web-hosting.jpg",
      link: "/services/web-hosting",
    },
    {
      title: "SSL Certificate",
      description:
        "Protect your website and customers' data with trusted SSL certificates that boost your site's security and SEO ranking.",
      bgImage: "/images/web-dev/webservices/ssl-certificate-img.jpg",
      link: "/services/ssl-certificate",
    },
    {
      title: "WordPress Development",
      description:
        "We build modern, user-friendly, and SEO-optimized WordPress websites that you can easily manage and scale as your business grows.",
      bgImage: "/images/web-dev/webservices/wordpress-website-development.jpg",
      link: "/services/wordpress-website",
    },
    {
      title: "Custom Development",
      description:
        "Need something unique? We create tailor-made websites from scratch with custom designs, features, and integrations to fit your brand.",
      bgImage: "/images/web-dev/webservices/custom-website-development.jpg",
      link: "/services/custom-website",
    },
    {
      title: "Magento Development",
      description:
        "Power your large-scale eCommerce business with Magento — offering enterprise-grade performance, advanced features, and complete customization.",
      bgImage: "/images/web-dev/webservices/magento-website-development.jpg",
      link: "/services/magento-development",
    },
    {
      title: "Maintenance & Support",
      description:
        "Keep your website secure, updated, and running smoothly with our reliable maintenance and support services.",
      bgImage: "/images/web-dev/webservices/website-maintenance-support.jpg",
      link: "/services/website-maintenance-support",
    },
    {
      title: "Speed Optimization",
      description:
        "Improve your website’s loading speed and performance for a faster, smoother user experience.",
      bgImage: "/images/web-dev/webservices/website-speed-optimization.jpg",
      link: "/services/website-speed-optimization",
    },
  ],
  },
   noida: {
    heading: "Website Development & Web Solutions in Noida",
    subheading: "Reliable e-commerce, hosting, and custom website services for Noida businesses—trusted web solutions.",
  features: [
    {
      title: "Shopify website Development",
      description:
        "Launch your online store quickly with Shopify. We design and customize Shopify stores for smooth shopping experiences, secure payments, and easy product management.",
      bgImage:
        "/images/web-dev/webservices/shopify-website-development.jpeg",
      link: "/services/shopify-ecommerce",
    },
    {
      title: "WooCommerce",
      description:
        "Build flexible and powerful online stores using WooCommerce on WordPress. Perfect for scalable, SEO-friendly, and customizable eCommerce websites.",
      bgImage: "/images/web-dev/webservices/E-commerce-Website-WooCommerce.jpg",
      link: "/services/woocommerce-ecommerce",
    },
    {
      title: "Domain Registration",
      description:
        "Secure your online identity with our domain registration service. We help you choose and register the perfect domain name for your brand.",
      bgImage: "/images/web-dev/webservices/Domain-Registration.jpg",
      link: "/services/domain-registration",
    },
    {
      title: "Server Management",
      description:
        "Ensure your website runs smoothly with our professional server management services — from setup to performance monitoring and maintenance.",
      bgImage: "/images/web-dev/webservices/Server-Management.jpg",
      link: "/services/server-management",
    },
    {
      title: "AWS Cloud Management",
      description:
        "We manage and optimize your AWS cloud infrastructure for maximum uptime, scalability, and cost-efficiency.",
      bgImage: "/images/web-dev/webservices/aws-img.jpg",
      link: "/services/aws-server-management",
    },
    {
      title: "Web Hosting",
      description:
        "Get reliable, fast, and secure web hosting with 99.9% uptime and technical support that keeps your site online without interruptions.",
      bgImage: "/images/web-dev/webservices/web-hosting.jpg",
      link: "/services/web-hosting",
    },
    {
      title: "SSL Certificate",
      description:
        "Protect your website and customers' data with trusted SSL certificates that boost your site's security and SEO ranking.",
      bgImage: "/images/web-dev/webservices/ssl-certificate-img.jpg",
      link: "/services/ssl-certificate",
    },
    {
      title: "WordPress Development",
      description:
        "We build modern, user-friendly, and SEO-optimized WordPress websites that you can easily manage and scale as your business grows.",
      bgImage: "/images/web-dev/webservices/wordpress-website-development.jpg",
      link: "/services/wordpress-website",
    },
    {
      title: "Custom Development",
      description:
        "Need something unique? We create tailor-made websites from scratch with custom designs, features, and integrations to fit your brand.",
      bgImage: "/images/web-dev/webservices/custom-website-development.jpg",
      link: "/services/custom-website",
    },
    {
      title: "Magento Development",
      description:
        "Power your large-scale eCommerce business with Magento — offering enterprise-grade performance, advanced features, and complete customization.",
      bgImage: "/images/web-dev/webservices/magento-website-development.jpg",
      link: "/services/magento-development",
    },
    {
      title: "Maintenance & Support",
      description:
        "Keep your website secure, updated, and running smoothly with our reliable maintenance and support services.",
      bgImage: "/images/web-dev/webservices/website-maintenance-support.jpg",
      link: "/services/website-maintenance-support",
    },
    {
      title: "Speed Optimization",
      description:
        "Improve your website’s loading speed and performance for a faster, smoother user experience.",
      bgImage: "/images/web-dev/webservices/website-speed-optimization.jpg",
      link: "/services/website-speed-optimization",
    },
  ],
  },
   kanpur: {
       heading: "Website Development & Web Solutions in Kanpur",
    subheading: "Professional e-commerce, hosting, and custom website services for Kanpur businesses—quality web development.",
  features: [
    {
      title: "Shopify website Development",
      description:
        "Launch your online store quickly with Shopify. We design and customize Shopify stores for smooth shopping experiences, secure payments, and easy product management.",
      bgImage:
        "/images/web-dev/webservices/shopify-website-development.jpeg",
      link: "/services/shopify-ecommerce",
    },
    {
      title: "WooCommerce",
      description:
        "Build flexible and powerful online stores using WooCommerce on WordPress. Perfect for scalable, SEO-friendly, and customizable eCommerce websites.",
      bgImage: "/images/web-dev/webservices/E-commerce-Website-WooCommerce.jpg",
      link: "/services/woocommerce-ecommerce",
    },
    {
      title: "Domain Registration",
      description:
        "Secure your online identity with our domain registration service. We help you choose and register the perfect domain name for your brand.",
      bgImage: "/images/web-dev/webservices/Domain-Registration.jpg",
      link: "/services/domain-registration",
    },
    {
      title: "Server Management",
      description:
        "Ensure your website runs smoothly with our professional server management services — from setup to performance monitoring and maintenance.",
      bgImage: "/images/web-dev/webservices/Server-Management.jpg",
      link: "/services/server-management",
    },
    {
      title: "AWS Cloud Management",
      description:
        "We manage and optimize your AWS cloud infrastructure for maximum uptime, scalability, and cost-efficiency.",
      bgImage: "/images/web-dev/webservices/aws-img.jpg",
      link: "/services/aws-server-management",
    },
    {
      title: "Web Hosting",
      description:
        "Get reliable, fast, and secure web hosting with 99.9% uptime and technical support that keeps your site online without interruptions.",
      bgImage: "/images/web-dev/webservices/web-hosting.jpg",
      link: "/services/web-hosting",
    },
    {
      title: "SSL Certificate",
      description:
        "Protect your website and customers' data with trusted SSL certificates that boost your site's security and SEO ranking.",
      bgImage: "/images/web-dev/webservices/ssl-certificate-img.jpg",
      link: "/services/ssl-certificate",
    },
    {
      title: "WordPress Development",
      description:
        "We build modern, user-friendly, and SEO-optimized WordPress websites that you can easily manage and scale as your business grows.",
      bgImage: "/images/web-dev/webservices/wordpress-website-development.jpg",
      link: "/services/wordpress-website",
    },
    {
      title: "Custom Development",
      description:
        "Need something unique? We create tailor-made websites from scratch with custom designs, features, and integrations to fit your brand.",
      bgImage: "/images/web-dev/webservices/custom-website-development.jpg",
      link: "/services/custom-website",
    },
    {
      title: "Magento Development",
      description:
        "Power your large-scale eCommerce business with Magento — offering enterprise-grade performance, advanced features, and complete customization.",
      bgImage: "/images/web-dev/webservices/magento-website-development.jpg",
      link: "/services/magento-development",
    },
    {
      title: "Maintenance & Support",
      description:
        "Keep your website secure, updated, and running smoothly with our reliable maintenance and support services.",
      bgImage: "/images/web-dev/webservices/website-maintenance-support.jpg",
      link: "/services/website-maintenance-support",
    },
    {
      title: "Speed Optimization",
      description:
        "Improve your website’s loading speed and performance for a faster, smoother user experience.",
      bgImage: "/images/web-dev/webservices/website-speed-optimization.jpg",
      link: "/services/website-speed-optimization",
    },
  ],
  },
   hyderabad: {
       heading: "Website Development & Web Solutions in Hyderabad",
    subheading: "Professional e-commerce, hosting, and custom website services for Hyderabad businesses—quality web development.",
  features: [
    {
      title: "Shopify website Development",
      description:
        "Launch your online store quickly with Shopify. We design and customize Shopify stores for smooth shopping experiences, secure payments, and easy product management.",
      bgImage:
        "/images/web-dev/webservices/shopify-website-development.jpeg",
      link: "/services/shopify-ecommerce",
    },
    {
      title: "WooCommerce",
      description:
        "Build flexible and powerful online stores using WooCommerce on WordPress. Perfect for scalable, SEO-friendly, and customizable eCommerce websites.",
      bgImage: "/images/web-dev/webservices/E-commerce-Website-WooCommerce.jpg",
      link: "/services/woocommerce-ecommerce",
    },
    {
      title: "Domain Registration",
      description:
        "Secure your online identity with our domain registration service. We help you choose and register the perfect domain name for your brand.",
      bgImage: "/images/web-dev/webservices/Domain-Registration.jpg",
      link: "/services/domain-registration",
    },
    {
      title: "Server Management",
      description:
        "Ensure your website runs smoothly with our professional server management services — from setup to performance monitoring and maintenance.",
      bgImage: "/images/web-dev/webservices/Server-Management.jpg",
      link: "/services/server-management",
    },
    {
      title: "AWS Cloud Management",
      description:
        "We manage and optimize your AWS cloud infrastructure for maximum uptime, scalability, and cost-efficiency.",
      bgImage: "/images/web-dev/webservices/aws-img.jpg",
      link: "/services/aws-server-management",
    },
    {
      title: "Web Hosting",
      description:
        "Get reliable, fast, and secure web hosting with 99.9% uptime and technical support that keeps your site online without interruptions.",
      bgImage: "/images/web-dev/webservices/web-hosting.jpg",
      link: "/services/web-hosting",
    },
    {
      title: "SSL Certificate",
      description:
        "Protect your website and customers' data with trusted SSL certificates that boost your site's security and SEO ranking.",
      bgImage: "/images/web-dev/webservices/ssl-certificate-img.jpg",
      link: "/services/ssl-certificate",
    },
    {
      title: "WordPress Development",
      description:
        "We build modern, user-friendly, and SEO-optimized WordPress websites that you can easily manage and scale as your business grows.",
      bgImage: "/images/web-dev/webservices/wordpress-website-development.jpg",
      link: "/services/wordpress-website",
    },
    {
      title: "Custom Development",
      description:
        "Need something unique? We create tailor-made websites from scratch with custom designs, features, and integrations to fit your brand.",
      bgImage: "/images/web-dev/webservices/custom-website-development.jpg",
      link: "/services/custom-website",
    },
    {
      title: "Magento Development",
      description:
        "Power your large-scale eCommerce business with Magento — offering enterprise-grade performance, advanced features, and complete customization.",
      bgImage: "/images/web-dev/webservices/magento-website-development.jpg",
      link: "/services/magento-development",
    },
    {
      title: "Maintenance & Support",
      description:
        "Keep your website secure, updated, and running smoothly with our reliable maintenance and support services.",
      bgImage: "/images/web-dev/webservices/website-maintenance-support.jpg",
      link: "/services/website-maintenance-support",
    },
    {
      title: "Speed Optimization",
      description:
        "Improve your website’s loading speed and performance for a faster, smoother user experience.",
      bgImage: "/images/web-dev/webservices/website-speed-optimization.jpg",
      link: "/services/website-speed-optimization",
    },
  ],
  },
   faridabad: {
       heading: "Website Development & Web Solutions in Faridabad",
    subheading: "Expert e-commerce, hosting, and custom website services for Faridabad businesses—premium web solutions.",
  features: [
    {
      title: "Shopify website Development",
      description:
        "Launch your online store quickly with Shopify. We design and customize Shopify stores for smooth shopping experiences, secure payments, and easy product management.",
      bgImage:
        "/images/web-dev/webservices/shopify-website-development.jpeg",
      link: "/services/shopify-ecommerce",
    },
    {
      title: "WooCommerce",
      description:
        "Build flexible and powerful online stores using WooCommerce on WordPress. Perfect for scalable, SEO-friendly, and customizable eCommerce websites.",
      bgImage: "/images/web-dev/webservices/E-commerce-Website-WooCommerce.jpg",
      link: "/services/woocommerce-ecommerce",
    },
    {
      title: "Domain Registration",
      description:
        "Secure your online identity with our domain registration service. We help you choose and register the perfect domain name for your brand.",
      bgImage: "/images/web-dev/webservices/Domain-Registration.jpg",
      link: "/services/domain-registration",
    },
    {
      title: "Server Management",
      description:
        "Ensure your website runs smoothly with our professional server management services — from setup to performance monitoring and maintenance.",
      bgImage: "/images/web-dev/webservices/Server-Management.jpg",
      link: "/services/server-management",
    },
    {
      title: "AWS Cloud Management",
      description:
        "We manage and optimize your AWS cloud infrastructure for maximum uptime, scalability, and cost-efficiency.",
      bgImage: "/images/web-dev/webservices/aws-img.jpg",
      link: "/services/aws-server-management",
    },
    {
      title: "Web Hosting",
      description:
        "Get reliable, fast, and secure web hosting with 99.9% uptime and technical support that keeps your site online without interruptions.",
      bgImage: "/images/web-dev/webservices/web-hosting.jpg",
      link: "/services/web-hosting",
    },
    {
      title: "SSL Certificate",
      description:
        "Protect your website and customers' data with trusted SSL certificates that boost your site's security and SEO ranking.",
      bgImage: "/images/web-dev/webservices/ssl-certificate-img.jpg",
      link: "/services/ssl-certificate",
    },
    {
      title: "WordPress Development",
      description:
        "We build modern, user-friendly, and SEO-optimized WordPress websites that you can easily manage and scale as your business grows.",
      bgImage: "/images/web-dev/webservices/wordpress-website-development.jpg",
      link: "/services/wordpress-website",
    },
    {
      title: "Custom Development",
      description:
        "Need something unique? We create tailor-made websites from scratch with custom designs, features, and integrations to fit your brand.",
      bgImage: "/images/web-dev/webservices/custom-website-development.jpg",
      link: "/services/custom-website",
    },
    {
      title: "Magento Development",
      description:
        "Power your large-scale eCommerce business with Magento — offering enterprise-grade performance, advanced features, and complete customization.",
      bgImage: "/images/web-dev/webservices/magento-website-development.jpg",
      link: "/services/magento-development",
    },
    {
      title: "Maintenance & Support",
      description:
        "Keep your website secure, updated, and running smoothly with our reliable maintenance and support services.",
      bgImage: "/images/web-dev/webservices/website-maintenance-support.jpg",
      link: "/services/website-maintenance-support",
    },
    {
      title: "Speed Optimization",
      description:
        "Improve your website’s loading speed and performance for a faster, smoother user experience.",
      bgImage: "/images/web-dev/webservices/website-speed-optimization.jpg",
      link: "/services/website-speed-optimization",
    },
  ],
  },
   ahmedabad: {
       heading: "Website Development & Digital Solutions in Ahmedabad",
    subheading:"Professional e-commerce websites, custom development, and hosting services for Ahmedabad businesses—growing your online presence.",
  features: [
    {
      title: "Shopify website Development",
      description:
        "Launch your online store quickly with Shopify. We design and customize Shopify stores for smooth shopping experiences, secure payments, and easy product management.",
      bgImage:
        "/images/web-dev/webservices/shopify-website-development.jpeg",
      link: "/services/shopify-ecommerce",
    },
    {
      title: "WooCommerce",
      description:
        "Build flexible and powerful online stores using WooCommerce on WordPress. Perfect for scalable, SEO-friendly, and customizable eCommerce websites.",
      bgImage: "/images/web-dev/webservices/E-commerce-Website-WooCommerce.jpg",
      link: "/services/woocommerce-ecommerce",
    },
    {
      title: "Domain Registration",
      description:
        "Secure your online identity with our domain registration service. We help you choose and register the perfect domain name for your brand.",
      bgImage: "/images/web-dev/webservices/Domain-Registration.jpg",
      link: "/services/domain-registration",
    },
    {
      title: "Server Management",
      description:
        "Ensure your website runs smoothly with our professional server management services — from setup to performance monitoring and maintenance.",
      bgImage: "/images/web-dev/webservices/Server-Management.jpg",
      link: "/services/server-management",
    },
    {
      title: "AWS Cloud Management",
      description:
        "We manage and optimize your AWS cloud infrastructure for maximum uptime, scalability, and cost-efficiency.",
      bgImage: "/images/web-dev/webservices/aws-img.jpg",
      link: "/services/aws-server-management",
    },
    {
      title: "Web Hosting",
      description:
        "Get reliable, fast, and secure web hosting with 99.9% uptime and technical support that keeps your site online without interruptions.",
      bgImage: "/images/web-dev/webservices/web-hosting.jpg",
      link: "/services/web-hosting",
    },
    {
      title: "SSL Certificate",
      description:
        "Protect your website and customers' data with trusted SSL certificates that boost your site's security and SEO ranking.",
      bgImage: "/images/web-dev/webservices/ssl-certificate-img.jpg",
      link: "/services/ssl-certificate",
    },
    {
      title: "WordPress Development",
      description:
        "We build modern, user-friendly, and SEO-optimized WordPress websites that you can easily manage and scale as your business grows.",
      bgImage: "/images/web-dev/webservices/wordpress-website-development.jpg",
      link: "/services/wordpress-website",
    },
    {
      title: "Custom Development",
      description:
        "Need something unique? We create tailor-made websites from scratch with custom designs, features, and integrations to fit your brand.",
      bgImage: "/images/web-dev/webservices/custom-website-development.jpg",
      link: "/services/custom-website",
    },
    {
      title: "Magento Development",
      description:
        "Power your large-scale eCommerce business with Magento — offering enterprise-grade performance, advanced features, and complete customization.",
      bgImage: "/images/web-dev/webservices/magento-website-development.jpg",
      link: "/services/magento-development",
    },
    {
      title: "Maintenance & Support",
      description:
        "Keep your website secure, updated, and running smoothly with our reliable maintenance and support services.",
      bgImage: "/images/web-dev/webservices/website-maintenance-support.jpg",
      link: "/services/website-maintenance-support",
    },
    {
      title: "Speed Optimization",
      description:
        "Improve your website’s loading speed and performance for a faster, smoother user experience.",
      bgImage: "/images/web-dev/webservices/website-speed-optimization.jpg",
      link: "/services/website-speed-optimization",
    },
  ],
  },
   abuDhabiUAE: {
       heading: "Website Development & Digital Solutions in Abu Dhabi, UAE",
    subheading:"Premium e-commerce, custom websites, and hosting services for Abu Dhabi businesses—elevating your digital footprint in the UAE.",
  features: [
    {
      title: "Shopify website Development",
      description:
        "Launch your online store quickly with Shopify. We design and customize Shopify stores for smooth shopping experiences, secure payments, and easy product management.",
      bgImage:
        "/images/web-dev/webservices/shopify-website-development.jpeg",
      link: "/services/shopify-ecommerce",
    },
    {
      title: "WooCommerce",
      description:
        "Build flexible and powerful online stores using WooCommerce on WordPress. Perfect for scalable, SEO-friendly, and customizable eCommerce websites.",
      bgImage: "/images/web-dev/webservices/E-commerce-Website-WooCommerce.jpg",
      link: "/services/woocommerce-ecommerce",
    },
    {
      title: "Domain Registration",
      description:
        "Secure your online identity with our domain registration service. We help you choose and register the perfect domain name for your brand.",
      bgImage: "/images/web-dev/webservices/Domain-Registration.jpg",
      link: "/services/domain-registration",
    },
    {
      title: "Server Management",
      description:
        "Ensure your website runs smoothly with our professional server management services — from setup to performance monitoring and maintenance.",
      bgImage: "/images/web-dev/webservices/Server-Management.jpg",
      link: "/services/server-management",
    },
    {
      title: "AWS Cloud Management",
      description:
        "We manage and optimize your AWS cloud infrastructure for maximum uptime, scalability, and cost-efficiency.",
      bgImage: "/images/web-dev/webservices/aws-img.jpg",
      link: "/services/aws-server-management",
    },
    {
      title: "Web Hosting",
      description:
        "Get reliable, fast, and secure web hosting with 99.9% uptime and technical support that keeps your site online without interruptions.",
      bgImage: "/images/web-dev/webservices/web-hosting.jpg",
      link: "/services/web-hosting",
    },
    {
      title: "SSL Certificate",
      description:
        "Protect your website and customers' data with trusted SSL certificates that boost your site's security and SEO ranking.",
      bgImage: "/images/web-dev/webservices/ssl-certificate-img.jpg",
      link: "/services/ssl-certificate",
    },
    {
      title: "WordPress Development",
      description:
        "We build modern, user-friendly, and SEO-optimized WordPress websites that you can easily manage and scale as your business grows.",
      bgImage: "/images/web-dev/webservices/wordpress-website-development.jpg",
      link: "/services/wordpress-website",
    },
    {
      title: "Custom Development",
      description:
        "Need something unique? We create tailor-made websites from scratch with custom designs, features, and integrations to fit your brand.",
      bgImage: "/images/web-dev/webservices/custom-website-development.jpg",
      link: "/services/custom-website",
    },
    {
      title: "Magento Development",
      description:
        "Power your large-scale eCommerce business with Magento — offering enterprise-grade performance, advanced features, and complete customization.",
      bgImage: "/images/web-dev/webservices/magento-website-development.jpg",
      link: "/services/magento-development",
    },
    {
      title: "Maintenance & Support",
      description:
        "Keep your website secure, updated, and running smoothly with our reliable maintenance and support services.",
      bgImage: "/images/web-dev/webservices/website-maintenance-support.jpg",
      link: "/services/website-maintenance-support",
    },
    {
      title: "Speed Optimization",
      description:
        "Improve your website’s loading speed and performance for a faster, smoother user experience.",
      bgImage: "/images/web-dev/webservices/website-speed-optimization.jpg",
      link: "/services/website-speed-optimization",
    },
  ],
  },
   sharjahUAE: {
       heading: "Website Development & Digital Solutions in Sharjah, UAE",
    subheading:"Expert e-commerce, custom websites, and hosting services for Sharjah businesses—building your digital success in the UAE.",
  features: [
    {
      title: "Shopify website Development",
      description:
        "Launch your online store quickly with Shopify. We design and customize Shopify stores for smooth shopping experiences, secure payments, and easy product management.",
      bgImage:
        "/images/web-dev/webservices/shopify-website-development.jpeg",
      link: "/services/shopify-ecommerce",
    },
    {
      title: "WooCommerce",
      description:
        "Build flexible and powerful online stores using WooCommerce on WordPress. Perfect for scalable, SEO-friendly, and customizable eCommerce websites.",
      bgImage: "/images/web-dev/webservices/E-commerce-Website-WooCommerce.jpg",
      link: "/services/woocommerce-ecommerce",
    },
    {
      title: "Domain Registration",
      description:
        "Secure your online identity with our domain registration service. We help you choose and register the perfect domain name for your brand.",
      bgImage: "/images/web-dev/webservices/Domain-Registration.jpg",
      link: "/services/domain-registration",
    },
    {
      title: "Server Management",
      description:
        "Ensure your website runs smoothly with our professional server management services — from setup to performance monitoring and maintenance.",
      bgImage: "/images/web-dev/webservices/Server-Management.jpg",
      link: "/services/server-management",
    },
    {
      title: "AWS Cloud Management",
      description:
        "We manage and optimize your AWS cloud infrastructure for maximum uptime, scalability, and cost-efficiency.",
      bgImage: "/images/web-dev/webservices/aws-img.jpg",
      link: "/services/aws-server-management",
    },
    {
      title: "Web Hosting",
      description:
        "Get reliable, fast, and secure web hosting with 99.9% uptime and technical support that keeps your site online without interruptions.",
      bgImage: "/images/web-dev/webservices/web-hosting.jpg",
      link: "/services/web-hosting",
    },
    {
      title: "SSL Certificate",
      description:
        "Protect your website and customers' data with trusted SSL certificates that boost your site's security and SEO ranking.",
      bgImage: "/images/web-dev/webservices/ssl-certificate-img.jpg",
      link: "/services/ssl-certificate",
    },
    {
      title: "WordPress Development",
      description:
        "We build modern, user-friendly, and SEO-optimized WordPress websites that you can easily manage and scale as your business grows.",
      bgImage: "/images/web-dev/webservices/wordpress-website-development.jpg",
      link: "/services/wordpress-website",
    },
    {
      title: "Custom Development",
      description:
        "Need something unique? We create tailor-made websites from scratch with custom designs, features, and integrations to fit your brand.",
      bgImage: "/images/web-dev/webservices/custom-website-development.jpg",
      link: "/services/custom-website",
    },
    {
      title: "Magento Development",
      description:
        "Power your large-scale eCommerce business with Magento — offering enterprise-grade performance, advanced features, and complete customization.",
      bgImage: "/images/web-dev/webservices/magento-website-development.jpg",
      link: "/services/magento-development",
    },
    {
      title: "Maintenance & Support",
      description:
        "Keep your website secure, updated, and running smoothly with our reliable maintenance and support services.",
      bgImage: "/images/web-dev/webservices/website-maintenance-support.jpg",
      link: "/services/website-maintenance-support",
    },
    {
      title: "Speed Optimization",
      description:
        "Improve your website’s loading speed and performance for a faster, smoother user experience.",
      bgImage: "/images/web-dev/webservices/website-speed-optimization.jpg",
      link: "/services/website-speed-optimization",
    },
  ],
  },
   patna: {
       heading:  "Website Development & Digital Solutions in Patna",
    subheading: "Professional e-commerce, custom websites, and hosting services for Patna businesses empowering your digital growth journey.",
  features: [
    {
      title: "Shopify website Development",
      description:
        "Launch your online store quickly with Shopify. We design and customize Shopify stores for smooth shopping experiences, secure payments, and easy product management.",
      bgImage:
        "/images/web-dev/webservices/shopify-website-development.jpeg",
      link: "/services/shopify-ecommerce",
    },
    {
      title: "WooCommerce",
      description:
        "Build flexible and powerful online stores using WooCommerce on WordPress. Perfect for scalable, SEO-friendly, and customizable eCommerce websites.",
      bgImage: "/images/web-dev/webservices/E-commerce-Website-WooCommerce.jpg",
      link: "/services/woocommerce-ecommerce",
    },
    {
      title: "Domain Registration",
      description:
        "Secure your online identity with our domain registration service. We help you choose and register the perfect domain name for your brand.",
      bgImage: "/images/web-dev/webservices/Domain-Registration.jpg",
      link: "/services/domain-registration",
    },
    {
      title: "Server Management",
      description:
        "Ensure your website runs smoothly with our professional server management services — from setup to performance monitoring and maintenance.",
      bgImage: "/images/web-dev/webservices/Server-Management.jpg",
      link: "/services/server-management",
    },
    {
      title: "AWS Cloud Management",
      description:
        "We manage and optimize your AWS cloud infrastructure for maximum uptime, scalability, and cost-efficiency.",
      bgImage: "/images/web-dev/webservices/aws-img.jpg",
      link: "/services/aws-server-management",
    },
    {
      title: "Web Hosting",
      description:
        "Get reliable, fast, and secure web hosting with 99.9% uptime and technical support that keeps your site online without interruptions.",
      bgImage: "/images/web-dev/webservices/web-hosting.jpg",
      link: "/services/web-hosting",
    },
    {
      title: "SSL Certificate",
      description:
        "Protect your website and customers' data with trusted SSL certificates that boost your site's security and SEO ranking.",
      bgImage: "/images/web-dev/webservices/ssl-certificate-img.jpg",
      link: "/services/ssl-certificate",
    },
    {
      title: "WordPress Development",
      description:
        "We build modern, user-friendly, and SEO-optimized WordPress websites that you can easily manage and scale as your business grows.",
      bgImage: "/images/web-dev/webservices/wordpress-website-development.jpg",
      link: "/services/wordpress-website",
    },
    {
      title: "Custom Development",
      description:
        "Need something unique? We create tailor-made websites from scratch with custom designs, features, and integrations to fit your brand.",
      bgImage: "/images/web-dev/webservices/custom-website-development.jpg",
      link: "/services/custom-website",
    },
    {
      title: "Magento Development",
      description:
        "Power your large-scale eCommerce business with Magento — offering enterprise-grade performance, advanced features, and complete customization.",
      bgImage: "/images/web-dev/webservices/magento-website-development.jpg",
      link: "/services/magento-development",
    },
    {
      title: "Maintenance & Support",
      description:
        "Keep your website secure, updated, and running smoothly with our reliable maintenance and support services.",
      bgImage: "/images/web-dev/webservices/website-maintenance-support.jpg",
      link: "/services/website-maintenance-support",
    },
    {
      title: "Speed Optimization",
      description:
        "Improve your website’s loading speed and performance for a faster, smoother user experience.",
      bgImage: "/images/web-dev/webservices/website-speed-optimization.jpg",
      link: "/services/website-speed-optimization",
    },
  ],
  },
   meerut: {
       heading:  "Website Development & Digital Solutions in Meerut",
    subheading: "Reliable e-commerce, custom websites, and hosting services for Meerut businesses—transforming your online business presence.",
  features: [
    {
      title: "Shopify website Development",
      description:
        "Launch your online store quickly with Shopify. We design and customize Shopify stores for smooth shopping experiences, secure payments, and easy product management.",
      bgImage:
        "/images/web-dev/webservices/shopify-website-development.jpeg",
      link: "/services/shopify-ecommerce",
    },
    {
      title: "WooCommerce",
      description:
        "Build flexible and powerful online stores using WooCommerce on WordPress. Perfect for scalable, SEO-friendly, and customizable eCommerce websites.",
      bgImage: "/images/web-dev/webservices/E-commerce-Website-WooCommerce.jpg",
      link: "/services/woocommerce-ecommerce",
    },
    {
      title: "Domain Registration",
      description:
        "Secure your online identity with our domain registration service. We help you choose and register the perfect domain name for your brand.",
      bgImage: "/images/web-dev/webservices/Domain-Registration.jpg",
      link: "/services/domain-registration",
    },
    {
      title: "Server Management",
      description:
        "Ensure your website runs smoothly with our professional server management services — from setup to performance monitoring and maintenance.",
      bgImage: "/images/web-dev/webservices/Server-Management.jpg",
      link: "/services/server-management",
    },
    {
      title: "AWS Cloud Management",
      description:
        "We manage and optimize your AWS cloud infrastructure for maximum uptime, scalability, and cost-efficiency.",
      bgImage: "/images/web-dev/webservices/aws-img.jpg",
      link: "/services/aws-server-management",
    },
    {
      title: "Web Hosting",
      description:
        "Get reliable, fast, and secure web hosting with 99.9% uptime and technical support that keeps your site online without interruptions.",
      bgImage: "/images/web-dev/webservices/web-hosting.jpg",
      link: "/services/web-hosting",
    },
    {
      title: "SSL Certificate",
      description:
        "Protect your website and customers' data with trusted SSL certificates that boost your site's security and SEO ranking.",
      bgImage: "/images/web-dev/webservices/ssl-certificate-img.jpg",
      link: "/services/ssl-certificate",
    },
    {
      title: "WordPress Development",
      description:
        "We build modern, user-friendly, and SEO-optimized WordPress websites that you can easily manage and scale as your business grows.",
      bgImage: "/images/web-dev/webservices/wordpress-website-development.jpg",
      link: "/services/wordpress-website",
    },
    {
      title: "Custom Development",
      description:
        "Need something unique? We create tailor-made websites from scratch with custom designs, features, and integrations to fit your brand.",
      bgImage: "/images/web-dev/webservices/custom-website-development.jpg",
      link: "/services/custom-website",
    },
    {
      title: "Magento Development",
      description:
        "Power your large-scale eCommerce business with Magento — offering enterprise-grade performance, advanced features, and complete customization.",
      bgImage: "/images/web-dev/webservices/magento-website-development.jpg",
      link: "/services/magento-development",
    },
    {
      title: "Maintenance & Support",
      description:
        "Keep your website secure, updated, and running smoothly with our reliable maintenance and support services.",
      bgImage: "/images/web-dev/webservices/website-maintenance-support.jpg",
      link: "/services/website-maintenance-support",
    },
    {
      title: "Speed Optimization",
      description:
        "Improve your website’s loading speed and performance for a faster, smoother user experience.",
      bgImage: "/images/web-dev/webservices/website-speed-optimization.jpg",
      link: "/services/website-speed-optimization",
    },
  ],
  },
   kolkata: {
       heading:  "Website Development & Digital Solutions in Kolkata",
    subheading: "Comprehensive e-commerce, custom websites, and hosting services for Kolkata businesses—crafting your digital excellence.",
  features: [
    {
      title: "Shopify website Development",
      description:
        "Launch your online store quickly with Shopify. We design and customize Shopify stores for smooth shopping experiences, secure payments, and easy product management.",
      bgImage:
        "/images/web-dev/webservices/shopify-website-development.jpeg",
      link: "/services/shopify-ecommerce",
    },
    {
      title: "WooCommerce",
      description:
        "Build flexible and powerful online stores using WooCommerce on WordPress. Perfect for scalable, SEO-friendly, and customizable eCommerce websites.",
      bgImage: "/images/web-dev/webservices/E-commerce-Website-WooCommerce.jpg",
      link: "/services/woocommerce-ecommerce",
    },
    {
      title: "Domain Registration",
      description:
        "Secure your online identity with our domain registration service. We help you choose and register the perfect domain name for your brand.",
      bgImage: "/images/web-dev/webservices/Domain-Registration.jpg",
      link: "/services/domain-registration",
    },
    {
      title: "Server Management",
      description:
        "Ensure your website runs smoothly with our professional server management services — from setup to performance monitoring and maintenance.",
      bgImage: "/images/web-dev/webservices/Server-Management.jpg",
      link: "/services/server-management",
    },
    {
      title: "AWS Cloud Management",
      description:
        "We manage and optimize your AWS cloud infrastructure for maximum uptime, scalability, and cost-efficiency.",
      bgImage: "/images/web-dev/webservices/aws-img.jpg",
      link: "/services/aws-server-management",
    },
    {
      title: "Web Hosting",
      description:
        "Get reliable, fast, and secure web hosting with 99.9% uptime and technical support that keeps your site online without interruptions.",
      bgImage: "/images/web-dev/webservices/web-hosting.jpg",
      link: "/services/web-hosting",
    },
    {
      title: "SSL Certificate",
      description:
        "Protect your website and customers' data with trusted SSL certificates that boost your site's security and SEO ranking.",
      bgImage: "/images/web-dev/webservices/ssl-certificate-img.jpg",
      link: "/services/ssl-certificate",
    },
    {
      title: "WordPress Development",
      description:
        "We build modern, user-friendly, and SEO-optimized WordPress websites that you can easily manage and scale as your business grows.",
      bgImage: "/images/web-dev/webservices/wordpress-website-development.jpg",
      link: "/services/wordpress-website",
    },
    {
      title: "Custom Development",
      description:
        "Need something unique? We create tailor-made websites from scratch with custom designs, features, and integrations to fit your brand.",
      bgImage: "/images/web-dev/webservices/custom-website-development.jpg",
      link: "/services/custom-website",
    },
    {
      title: "Magento Development",
      description:
        "Power your large-scale eCommerce business with Magento — offering enterprise-grade performance, advanced features, and complete customization.",
      bgImage: "/images/web-dev/webservices/magento-website-development.jpg",
      link: "/services/magento-development",
    },
    {
      title: "Maintenance & Support",
      description:
        "Keep your website secure, updated, and running smoothly with our reliable maintenance and support services.",
      bgImage: "/images/web-dev/webservices/website-maintenance-support.jpg",
      link: "/services/website-maintenance-support",
    },
    {
      title: "Speed Optimization",
      description:
        "Improve your website’s loading speed and performance for a faster, smoother user experience.",
      bgImage: "/images/web-dev/webservices/website-speed-optimization.jpg",
      link: "/services/website-speed-optimization",
    },
  ],
  },
   dubaiUAE: {
       heading: "Website Development & Digital Solutions in Dubai, UAE",
    subheading:  "Premium e-commerce, custom websites, and hosting services for Dubai businesses—leading digital innovation in the UAE market.",
  features: [
    {
      title: "Shopify website Development",
      description:
        "Launch your online store quickly with Shopify. We design and customize Shopify stores for smooth shopping experiences, secure payments, and easy product management.",
      bgImage:
        "/images/web-dev/webservices/shopify-website-development.jpeg",
      link: "/services/shopify-ecommerce",
    },
    {
      title: "WooCommerce",
      description:
        "Build flexible and powerful online stores using WooCommerce on WordPress. Perfect for scalable, SEO-friendly, and customizable eCommerce websites.",
      bgImage: "/images/web-dev/webservices/E-commerce-Website-WooCommerce.jpg",
      link: "/services/woocommerce-ecommerce",
    },
    {
      title: "Domain Registration",
      description:
        "Secure your online identity with our domain registration service. We help you choose and register the perfect domain name for your brand.",
      bgImage: "/images/web-dev/webservices/Domain-Registration.jpg",
      link: "/services/domain-registration",
    },
    {
      title: "Server Management",
      description:
        "Ensure your website runs smoothly with our professional server management services — from setup to performance monitoring and maintenance.",
      bgImage: "/images/web-dev/webservices/Server-Management.jpg",
      link: "/services/server-management",
    },
    {
      title: "AWS Cloud Management",
      description:
        "We manage and optimize your AWS cloud infrastructure for maximum uptime, scalability, and cost-efficiency.",
      bgImage: "/images/web-dev/webservices/aws-img.jpg",
      link: "/services/aws-server-management",
    },
    {
      title: "Web Hosting",
      description:
        "Get reliable, fast, and secure web hosting with 99.9% uptime and technical support that keeps your site online without interruptions.",
      bgImage: "/images/web-dev/webservices/web-hosting.jpg",
      link: "/services/web-hosting",
    },
    {
      title: "SSL Certificate",
      description:
        "Protect your website and customers' data with trusted SSL certificates that boost your site's security and SEO ranking.",
      bgImage: "/images/web-dev/webservices/ssl-certificate-img.jpg",
      link: "/services/ssl-certificate",
    },
    {
      title: "WordPress Development",
      description:
        "We build modern, user-friendly, and SEO-optimized WordPress websites that you can easily manage and scale as your business grows.",
      bgImage: "/images/web-dev/webservices/wordpress-website-development.jpg",
      link: "/services/wordpress-website",
    },
    {
      title: "Custom Development",
      description:
        "Need something unique? We create tailor-made websites from scratch with custom designs, features, and integrations to fit your brand.",
      bgImage: "/images/web-dev/webservices/custom-website-development.jpg",
      link: "/services/custom-website",
    },
    {
      title: "Magento Development",
      description:
        "Power your large-scale eCommerce business with Magento — offering enterprise-grade performance, advanced features, and complete customization.",
      bgImage: "/images/web-dev/webservices/magento-website-development.jpg",
      link: "/services/magento-development",
    },
    {
      title: "Maintenance & Support",
      description:
        "Keep your website secure, updated, and running smoothly with our reliable maintenance and support services.",
      bgImage: "/images/web-dev/webservices/website-maintenance-support.jpg",
      link: "/services/website-maintenance-support",
    },
    {
      title: "Speed Optimization",
      description:
        "Improve your website’s loading speed and performance for a faster, smoother user experience.",
      bgImage: "/images/web-dev/webservices/website-speed-optimization.jpg",
      link: "/services/website-speed-optimization",
    },
  ],
  },
   chandigarh: {
       heading: "Website Development & Digital Solutions in Chandigarh",
    subheading: "Modern e-commerce, custom websites, and hosting services for Chandigarh businesses—shaping your digital future.",
  features: [
    {
      title: "Shopify website Development",
      description:
        "Launch your online store quickly with Shopify. We design and customize Shopify stores for smooth shopping experiences, secure payments, and easy product management.",
      bgImage:
        "/images/web-dev/webservices/shopify-website-development.jpeg",
      link: "/services/shopify-ecommerce",
    },
    {
      title: "WooCommerce",
      description:
        "Build flexible and powerful online stores using WooCommerce on WordPress. Perfect for scalable, SEO-friendly, and customizable eCommerce websites.",
      bgImage: "/images/web-dev/webservices/E-commerce-Website-WooCommerce.jpg",
      link: "/services/woocommerce-ecommerce",
    },
    {
      title: "Domain Registration",
      description:
        "Secure your online identity with our domain registration service. We help you choose and register the perfect domain name for your brand.",
      bgImage: "/images/web-dev/webservices/Domain-Registration.jpg",
      link: "/services/domain-registration",
    },
    {
      title: "Server Management",
      description:
        "Ensure your website runs smoothly with our professional server management services — from setup to performance monitoring and maintenance.",
      bgImage: "/images/web-dev/webservices/Server-Management.jpg",
      link: "/services/server-management",
    },
    {
      title: "AWS Cloud Management",
      description:
        "We manage and optimize your AWS cloud infrastructure for maximum uptime, scalability, and cost-efficiency.",
      bgImage: "/images/web-dev/webservices/aws-img.jpg",
      link: "/services/aws-server-management",
    },
    {
      title: "Web Hosting",
      description:
        "Get reliable, fast, and secure web hosting with 99.9% uptime and technical support that keeps your site online without interruptions.",
      bgImage: "/images/web-dev/webservices/web-hosting.jpg",
      link: "/services/web-hosting",
    },
    {
      title: "SSL Certificate",
      description:
        "Protect your website and customers' data with trusted SSL certificates that boost your site's security and SEO ranking.",
      bgImage: "/images/web-dev/webservices/ssl-certificate-img.jpg",
      link: "/services/ssl-certificate",
    },
    {
      title: "WordPress Development",
      description:
        "We build modern, user-friendly, and SEO-optimized WordPress websites that you can easily manage and scale as your business grows.",
      bgImage: "/images/web-dev/webservices/wordpress-website-development.jpg",
      link: "/services/wordpress-website",
    },
    {
      title: "Custom Development",
      description:
        "Need something unique? We create tailor-made websites from scratch with custom designs, features, and integrations to fit your brand.",
      bgImage: "/images/web-dev/webservices/custom-website-development.jpg",
      link: "/services/custom-website",
    },
    {
      title: "Magento Development",
      description:
        "Power your large-scale eCommerce business with Magento — offering enterprise-grade performance, advanced features, and complete customization.",
      bgImage: "/images/web-dev/webservices/magento-website-development.jpg",
      link: "/services/magento-development",
    },
    {
      title: "Maintenance & Support",
      description:
        "Keep your website secure, updated, and running smoothly with our reliable maintenance and support services.",
      bgImage: "/images/web-dev/webservices/website-maintenance-support.jpg",
      link: "/services/website-maintenance-support",
    },
    {
      title: "Speed Optimization",
      description:
        "Improve your website’s loading speed and performance for a faster, smoother user experience.",
      bgImage: "/images/web-dev/webservices/website-speed-optimization.jpg",
      link: "/services/website-speed-optimization",
    },
  ],
  },
   indore: {
       heading: "Website Development & Digital Solutions in Indore",
    subheading: "Professional e-commerce, custom websites, and hosting services for Indore businesses—driving your online business growth.",
  features: [
    {
      title: "Shopify website Development",
      description:
        "Launch your online store quickly with Shopify. We design and customize Shopify stores for smooth shopping experiences, secure payments, and easy product management.",
      bgImage:
        "/images/web-dev/webservices/shopify-website-development.jpeg",
      link: "/services/shopify-ecommerce",
    },
    {
      title: "WooCommerce",
      description:
        "Build flexible and powerful online stores using WooCommerce on WordPress. Perfect for scalable, SEO-friendly, and customizable eCommerce websites.",
      bgImage: "/images/web-dev/webservices/E-commerce-Website-WooCommerce.jpg",
      link: "/services/woocommerce-ecommerce",
    },
    {
      title: "Domain Registration",
      description:
        "Secure your online identity with our domain registration service. We help you choose and register the perfect domain name for your brand.",
      bgImage: "/images/web-dev/webservices/Domain-Registration.jpg",
      link: "/services/domain-registration",
    },
    {
      title: "Server Management",
      description:
        "Ensure your website runs smoothly with our professional server management services — from setup to performance monitoring and maintenance.",
      bgImage: "/images/web-dev/webservices/Server-Management.jpg",
      link: "/services/server-management",
    },
    {
      title: "AWS Cloud Management",
      description:
        "We manage and optimize your AWS cloud infrastructure for maximum uptime, scalability, and cost-efficiency.",
      bgImage: "/images/web-dev/webservices/aws-img.jpg",
      link: "/services/aws-server-management",
    },
    {
      title: "Web Hosting",
      description:
        "Get reliable, fast, and secure web hosting with 99.9% uptime and technical support that keeps your site online without interruptions.",
      bgImage: "/images/web-dev/webservices/web-hosting.jpg",
      link: "/services/web-hosting",
    },
    {
      title: "SSL Certificate",
      description:
        "Protect your website and customers' data with trusted SSL certificates that boost your site's security and SEO ranking.",
      bgImage: "/images/web-dev/webservices/ssl-certificate-img.jpg",
      link: "/services/ssl-certificate",
    },
    {
      title: "WordPress Development",
      description:
        "We build modern, user-friendly, and SEO-optimized WordPress websites that you can easily manage and scale as your business grows.",
      bgImage: "/images/web-dev/webservices/wordpress-website-development.jpg",
      link: "/services/wordpress-website",
    },
    {
      title: "Custom Development",
      description:
        "Need something unique? We create tailor-made websites from scratch with custom designs, features, and integrations to fit your brand.",
      bgImage: "/images/web-dev/webservices/custom-website-development.jpg",
      link: "/services/custom-website",
    },
    {
      title: "Magento Development",
      description:
        "Power your large-scale eCommerce business with Magento — offering enterprise-grade performance, advanced features, and complete customization.",
      bgImage: "/images/web-dev/webservices/magento-website-development.jpg",
      link: "/services/magento-development",
    },
    {
      title: "Maintenance & Support",
      description:
        "Keep your website secure, updated, and running smoothly with our reliable maintenance and support services.",
      bgImage: "/images/web-dev/webservices/website-maintenance-support.jpg",
      link: "/services/website-maintenance-support",
    },
    {
      title: "Speed Optimization",
      description:
        "Improve your website’s loading speed and performance for a faster, smoother user experience.",
      bgImage: "/images/web-dev/webservices/website-speed-optimization.jpg",
      link: "/services/website-speed-optimization",
    },
  ],
  },
   surat: {
       heading: "Website Development & Digital Solutions in Surat",
    subheading: "Expert e-commerce, custom websites, and hosting services for Surat businesses—building your successful online platform.",
  features: [
    {
      title: "Shopify website Development",
      description:
        "Launch your online store quickly with Shopify. We design and customize Shopify stores for smooth shopping experiences, secure payments, and easy product management.",
      bgImage:
        "/images/web-dev/webservices/shopify-website-development.jpeg",
      link: "/services/shopify-ecommerce",
    },
    {
      title: "WooCommerce",
      description:
        "Build flexible and powerful online stores using WooCommerce on WordPress. Perfect for scalable, SEO-friendly, and customizable eCommerce websites.",
      bgImage: "/images/web-dev/webservices/E-commerce-Website-WooCommerce.jpg",
      link: "/services/woocommerce-ecommerce",
    },
    {
      title: "Domain Registration",
      description:
        "Secure your online identity with our domain registration service. We help you choose and register the perfect domain name for your brand.",
      bgImage: "/images/web-dev/webservices/Domain-Registration.jpg",
      link: "/services/domain-registration",
    },
    {
      title: "Server Management",
      description:
        "Ensure your website runs smoothly with our professional server management services — from setup to performance monitoring and maintenance.",
      bgImage: "/images/web-dev/webservices/Server-Management.jpg",
      link: "/services/server-management",
    },
    {
      title: "AWS Cloud Management",
      description:
        "We manage and optimize your AWS cloud infrastructure for maximum uptime, scalability, and cost-efficiency.",
      bgImage: "/images/web-dev/webservices/aws-img.jpg",
      link: "/services/aws-server-management",
    },
    {
      title: "Web Hosting",
      description:
        "Get reliable, fast, and secure web hosting with 99.9% uptime and technical support that keeps your site online without interruptions.",
      bgImage: "/images/web-dev/webservices/web-hosting.jpg",
      link: "/services/web-hosting",
    },
    {
      title: "SSL Certificate",
      description:
        "Protect your website and customers' data with trusted SSL certificates that boost your site's security and SEO ranking.",
      bgImage: "/images/web-dev/webservices/ssl-certificate-img.jpg",
      link: "/services/ssl-certificate",
    },
    {
      title: "WordPress Development",
      description:
        "We build modern, user-friendly, and SEO-optimized WordPress websites that you can easily manage and scale as your business grows.",
      bgImage: "/images/web-dev/webservices/wordpress-website-development.jpg",
      link: "/services/wordpress-website",
    },
    {
      title: "Custom Development",
      description:
        "Need something unique? We create tailor-made websites from scratch with custom designs, features, and integrations to fit your brand.",
      bgImage: "/images/web-dev/webservices/custom-website-development.jpg",
      link: "/services/custom-website",
    },
    {
      title: "Magento Development",
      description:
        "Power your large-scale eCommerce business with Magento — offering enterprise-grade performance, advanced features, and complete customization.",
      bgImage: "/images/web-dev/webservices/magento-website-development.jpg",
      link: "/services/magento-development",
    },
    {
      title: "Maintenance & Support",
      description:
        "Keep your website secure, updated, and running smoothly with our reliable maintenance and support services.",
      bgImage: "/images/web-dev/webservices/website-maintenance-support.jpg",
      link: "/services/website-maintenance-support",
    },
    {
      title: "Speed Optimization",
      description:
        "Improve your website’s loading speed and performance for a faster, smoother user experience.",
      bgImage: "/images/web-dev/webservices/website-speed-optimization.jpg",
      link: "/services/website-speed-optimization",
    },
  ],
  },
   mumbai: {
       heading: "Mumbai's Leading Web Development Agency | E-commerce & Website Solutions",
    subheading: "Professional web services for Mumbai companies: Shopify stores, WordPress websites, hosting, and maintenance—helping you succeed online.",
  features: [
    {
      title: "Shopify website Development",
      description:
        "Launch your online store quickly with Shopify. We design and customize Shopify stores for smooth shopping experiences, secure payments, and easy product management.",
      bgImage:
        "/images/web-dev/webservices/shopify-website-development.jpeg",
      link: "/services/shopify-ecommerce",
    },
    {
      title: "WooCommerce",
      description:
        "Build flexible and powerful online stores using WooCommerce on WordPress. Perfect for scalable, SEO-friendly, and customizable eCommerce websites.",
      bgImage: "/images/web-dev/webservices/E-commerce-Website-WooCommerce.jpg",
      link: "/services/woocommerce-ecommerce",
    },
    {
      title: "Domain Registration",
      description:
        "Secure your online identity with our domain registration service. We help you choose and register the perfect domain name for your brand.",
      bgImage: "/images/web-dev/webservices/Domain-Registration.jpg",
      link: "/services/domain-registration",
    },
    {
      title: "Server Management",
      description:
        "Ensure your website runs smoothly with our professional server management services — from setup to performance monitoring and maintenance.",
      bgImage: "/images/web-dev/webservices/Server-Management.jpg",
      link: "/services/server-management",
    },
    {
      title: "AWS Cloud Management",
      description:
        "We manage and optimize your AWS cloud infrastructure for maximum uptime, scalability, and cost-efficiency.",
      bgImage: "/images/web-dev/webservices/aws-img.jpg",
      link: "/services/aws-server-management",
    },
    {
      title: "Web Hosting",
      description:
        "Get reliable, fast, and secure web hosting with 99.9% uptime and technical support that keeps your site online without interruptions.",
      bgImage: "/images/web-dev/webservices/web-hosting.jpg",
      link: "/services/web-hosting",
    },
    {
      title: "SSL Certificate",
      description:
        "Protect your website and customers' data with trusted SSL certificates that boost your site's security and SEO ranking.",
      bgImage: "/images/web-dev/webservices/ssl-certificate-img.jpg",
      link: "/services/ssl-certificate",
    },
    {
      title: "WordPress Development",
      description:
        "We build modern, user-friendly, and SEO-optimized WordPress websites that you can easily manage and scale as your business grows.",
      bgImage: "/images/web-dev/webservices/wordpress-website-development.jpg",
      link: "/services/wordpress-website",
    },
    {
      title: "Custom Development",
      description:
        "Need something unique? We create tailor-made websites from scratch with custom designs, features, and integrations to fit your brand.",
      bgImage: "/images/web-dev/webservices/custom-website-development.jpg",
      link: "/services/custom-website",
    },
    {
      title: "Magento Development",
      description:
        "Power your large-scale eCommerce business with Magento — offering enterprise-grade performance, advanced features, and complete customization.",
      bgImage: "/images/web-dev/webservices/magento-website-development.jpg",
      link: "/services/magento-development",
    },
    {
      title: "Maintenance & Support",
      description:
        "Keep your website secure, updated, and running smoothly with our reliable maintenance and support services.",
      bgImage: "/images/web-dev/webservices/website-maintenance-support.jpg",
      link: "/services/website-maintenance-support",
    },
    {
      title: "Speed Optimization",
      description:
        "Improve your website’s loading speed and performance for a faster, smoother user experience.",
      bgImage: "/images/web-dev/webservices/website-speed-optimization.jpg",
      link: "/services/website-speed-optimization",
    },
  ],
  },
   gurugram: {
       heading: "Gurugram's Trusted Web Development Agency | E-commerce & Website Solutions",
    subheading: "Professional web services for Gurugram companies: WooCommerce stores, custom websites, hosting, and maintenance—growing your business digitally.",
  features: [
    {
      title: "Shopify website Development",
      description:
        "Launch your online store quickly with Shopify. We design and customize Shopify stores for smooth shopping experiences, secure payments, and easy product management.",
      bgImage:
        "/images/web-dev/webservices/shopify-website-development.jpeg",
      link: "/services/shopify-ecommerce",
    },
    {
      title: "WooCommerce",
      description:
        "Build flexible and powerful online stores using WooCommerce on WordPress. Perfect for scalable, SEO-friendly, and customizable eCommerce websites.",
      bgImage: "/images/web-dev/webservices/E-commerce-Website-WooCommerce.jpg",
      link: "/services/woocommerce-ecommerce",
    },
    {
      title: "Domain Registration",
      description:
        "Secure your online identity with our domain registration service. We help you choose and register the perfect domain name for your brand.",
      bgImage: "/images/web-dev/webservices/Domain-Registration.jpg",
      link: "/services/domain-registration",
    },
    {
      title: "Server Management",
      description:
        "Ensure your website runs smoothly with our professional server management services — from setup to performance monitoring and maintenance.",
      bgImage: "/images/web-dev/webservices/Server-Management.jpg",
      link: "/services/server-management",
    },
    {
      title: "AWS Cloud Management",
      description:
        "We manage and optimize your AWS cloud infrastructure for maximum uptime, scalability, and cost-efficiency.",
      bgImage: "/images/web-dev/webservices/aws-img.jpg",
      link: "/services/aws-server-management",
    },
    {
      title: "Web Hosting",
      description:
        "Get reliable, fast, and secure web hosting with 99.9% uptime and technical support that keeps your site online without interruptions.",
      bgImage: "/images/web-dev/webservices/web-hosting.jpg",
      link: "/services/web-hosting",
    },
    {
      title: "SSL Certificate",
      description:
        "Protect your website and customers' data with trusted SSL certificates that boost your site's security and SEO ranking.",
      bgImage: "/images/web-dev/webservices/ssl-certificate-img.jpg",
      link: "/services/ssl-certificate",
    },
    {
      title: "WordPress Development",
      description:
        "We build modern, user-friendly, and SEO-optimized WordPress websites that you can easily manage and scale as your business grows.",
      bgImage: "/images/web-dev/webservices/wordpress-website-development.jpg",
      link: "/services/wordpress-website",
    },
    {
      title: "Custom Development",
      description:
        "Need something unique? We create tailor-made websites from scratch with custom designs, features, and integrations to fit your brand.",
      bgImage: "/images/web-dev/webservices/custom-website-development.jpg",
      link: "/services/custom-website",
    },
    {
      title: "Magento Development",
      description:
        "Power your large-scale eCommerce business with Magento — offering enterprise-grade performance, advanced features, and complete customization.",
      bgImage: "/images/web-dev/webservices/magento-website-development.jpg",
      link: "/services/magento-development",
    },
    {
      title: "Maintenance & Support",
      description:
        "Keep your website secure, updated, and running smoothly with our reliable maintenance and support services.",
      bgImage: "/images/web-dev/webservices/website-maintenance-support.jpg",
      link: "/services/website-maintenance-support",
    },
    {
      title: "Speed Optimization",
      description:
        "Improve your website’s loading speed and performance for a faster, smoother user experience.",
      bgImage: "/images/web-dev/webservices/website-speed-optimization.jpg",
      link: "/services/website-speed-optimization",
    },
  ],
  },
   delhiNCR: {
       heading: "Delhi NCR's Premier Web Development Agency | E-commerce & Website Solutions",
    subheading: "Professional web services for Delhi NCR companies: Magento stores, custom websites, hosting, and maintenance—expanding your digital footprint.",
  features: [
    {
      title: "Shopify website Development",
      description:
        "Launch your online store quickly with Shopify. We design and customize Shopify stores for smooth shopping experiences, secure payments, and easy product management.",
      bgImage:
        "/images/web-dev/webservices/shopify-website-development.jpeg",
      link: "/services/shopify-ecommerce",
    },
    {
      title: "WooCommerce",
      description:
        "Build flexible and powerful online stores using WooCommerce on WordPress. Perfect for scalable, SEO-friendly, and customizable eCommerce websites.",
      bgImage: "/images/web-dev/webservices/E-commerce-Website-WooCommerce.jpg",
      link: "/services/woocommerce-ecommerce",
    },
    {
      title: "Domain Registration",
      description:
        "Secure your online identity with our domain registration service. We help you choose and register the perfect domain name for your brand.",
      bgImage: "/images/web-dev/webservices/Domain-Registration.jpg",
      link: "/services/domain-registration",
    },
    {
      title: "Server Management",
      description:
        "Ensure your website runs smoothly with our professional server management services — from setup to performance monitoring and maintenance.",
      bgImage: "/images/web-dev/webservices/Server-Management.jpg",
      link: "/services/server-management",
    },
    {
      title: "AWS Cloud Management",
      description:
        "We manage and optimize your AWS cloud infrastructure for maximum uptime, scalability, and cost-efficiency.",
      bgImage: "/images/web-dev/webservices/aws-img.jpg",
      link: "/services/aws-server-management",
    },
    {
      title: "Web Hosting",
      description:
        "Get reliable, fast, and secure web hosting with 99.9% uptime and technical support that keeps your site online without interruptions.",
      bgImage: "/images/web-dev/webservices/web-hosting.jpg",
      link: "/services/web-hosting",
    },
    {
      title: "SSL Certificate",
      description:
        "Protect your website and customers' data with trusted SSL certificates that boost your site's security and SEO ranking.",
      bgImage: "/images/web-dev/webservices/ssl-certificate-img.jpg",
      link: "/services/ssl-certificate",
    },
    {
      title: "WordPress Development",
      description:
        "We build modern, user-friendly, and SEO-optimized WordPress websites that you can easily manage and scale as your business grows.",
      bgImage: "/images/web-dev/webservices/wordpress-website-development.jpg",
      link: "/services/wordpress-website",
    },
    {
      title: "Custom Development",
      description:
        "Need something unique? We create tailor-made websites from scratch with custom designs, features, and integrations to fit your brand.",
      bgImage: "/images/web-dev/webservices/custom-website-development.jpg",
      link: "/services/custom-website",
    },
    {
      title: "Magento Development",
      description:
        "Power your large-scale eCommerce business with Magento — offering enterprise-grade performance, advanced features, and complete customization.",
      bgImage: "/images/web-dev/webservices/magento-website-development.jpg",
      link: "/services/magento-development",
    },
    {
      title: "Maintenance & Support",
      description:
        "Keep your website secure, updated, and running smoothly with our reliable maintenance and support services.",
      bgImage: "/images/web-dev/webservices/website-maintenance-support.jpg",
      link: "/services/website-maintenance-support",
    },
    {
      title: "Speed Optimization",
      description:
        "Improve your website’s loading speed and performance for a faster, smoother user experience.",
      bgImage: "/images/web-dev/webservices/website-speed-optimization.jpg",
      link: "/services/website-speed-optimization",
    },
  ],
  },
   andheriMumbai: {
       heading: "Andheri's Local Web Development Experts | E-commerce & Website Solutions",
    subheading: "Professional web services for Andheri companies: complete website development, hosting, and maintenance—building your community presence.",
  features: [
    {
      title: "Shopify website Development",
      description:
        "Launch your online store quickly with Shopify. We design and customize Shopify stores for smooth shopping experiences, secure payments, and easy product management.",
      bgImage:
        "/images/web-dev/webservices/shopify-website-development.jpeg",
      link: "/services/shopify-ecommerce",
    },
    {
      title: "WooCommerce",
      description:
        "Build flexible and powerful online stores using WooCommerce on WordPress. Perfect for scalable, SEO-friendly, and customizable eCommerce websites.",
      bgImage: "/images/web-dev/webservices/E-commerce-Website-WooCommerce.jpg",
      link: "/services/woocommerce-ecommerce",
    },
    {
      title: "Domain Registration",
      description:
        "Secure your online identity with our domain registration service. We help you choose and register the perfect domain name for your brand.",
      bgImage: "/images/web-dev/webservices/Domain-Registration.jpg",
      link: "/services/domain-registration",
    },
    {
      title: "Server Management",
      description:
        "Ensure your website runs smoothly with our professional server management services — from setup to performance monitoring and maintenance.",
      bgImage: "/images/web-dev/webservices/Server-Management.jpg",
      link: "/services/server-management",
    },
    {
      title: "AWS Cloud Management",
      description:
        "We manage and optimize your AWS cloud infrastructure for maximum uptime, scalability, and cost-efficiency.",
      bgImage: "/images/web-dev/webservices/aws-img.jpg",
      link: "/services/aws-server-management",
    },
    {
      title: "Web Hosting",
      description:
        "Get reliable, fast, and secure web hosting with 99.9% uptime and technical support that keeps your site online without interruptions.",
      bgImage: "/images/web-dev/webservices/web-hosting.jpg",
      link: "/services/web-hosting",
    },
    {
      title: "SSL Certificate",
      description:
        "Protect your website and customers' data with trusted SSL certificates that boost your site's security and SEO ranking.",
      bgImage: "/images/web-dev/webservices/ssl-certificate-img.jpg",
      link: "/services/ssl-certificate",
    },
    {
      title: "WordPress Development",
      description:
        "We build modern, user-friendly, and SEO-optimized WordPress websites that you can easily manage and scale as your business grows.",
      bgImage: "/images/web-dev/webservices/wordpress-website-development.jpg",
      link: "/services/wordpress-website",
    },
    {
      title: "Custom Development",
      description:
        "Need something unique? We create tailor-made websites from scratch with custom designs, features, and integrations to fit your brand.",
      bgImage: "/images/web-dev/webservices/custom-website-development.jpg",
      link: "/services/custom-website",
    },
    {
      title: "Magento Development",
      description:
        "Power your large-scale eCommerce business with Magento — offering enterprise-grade performance, advanced features, and complete customization.",
      bgImage: "/images/web-dev/webservices/magento-website-development.jpg",
      link: "/services/magento-development",
    },
    {
      title: "Maintenance & Support",
      description:
        "Keep your website secure, updated, and running smoothly with our reliable maintenance and support services.",
      bgImage: "/images/web-dev/webservices/website-maintenance-support.jpg",
      link: "/services/website-maintenance-support",
    },
    {
      title: "Speed Optimization",
      description:
        "Improve your website’s loading speed and performance for a faster, smoother user experience.",
      bgImage: "/images/web-dev/webservices/website-speed-optimization.jpg",
      link: "/services/website-speed-optimization",
    },
  ],
  },
   amsterdam: {
       heading: "Amsterdam's International Web Development Agency | E-commerce & Website Solutions",
    subheading: "Professional web services for Amsterdam companies: global e-commerce, custom websites, hosting, and maintenance—connecting you with Europe.",
  features: [
    {
      title: "Shopify website Development",
      description:
        "Launch your online store quickly with Shopify. We design and customize Shopify stores for smooth shopping experiences, secure payments, and easy product management.",
      bgImage:
        "/images/web-dev/webservices/shopify-website-development.jpeg",
      link: "/services/shopify-ecommerce",
    },
    {
      title: "WooCommerce",
      description:
        "Build flexible and powerful online stores using WooCommerce on WordPress. Perfect for scalable, SEO-friendly, and customizable eCommerce websites.",
      bgImage: "/images/web-dev/webservices/E-commerce-Website-WooCommerce.jpg",
      link: "/services/woocommerce-ecommerce",
    },
    {
      title: "Domain Registration",
      description:
        "Secure your online identity with our domain registration service. We help you choose and register the perfect domain name for your brand.",
      bgImage: "/images/web-dev/webservices/Domain-Registration.jpg",
      link: "/services/domain-registration",
    },
    {
      title: "Server Management",
      description:
        "Ensure your website runs smoothly with our professional server management services — from setup to performance monitoring and maintenance.",
      bgImage: "/images/web-dev/webservices/Server-Management.jpg",
      link: "/services/server-management",
    },
    {
      title: "AWS Cloud Management",
      description:
        "We manage and optimize your AWS cloud infrastructure for maximum uptime, scalability, and cost-efficiency.",
      bgImage: "/images/web-dev/webservices/aws-img.jpg",
      link: "/services/aws-server-management",
    },
    {
      title: "Web Hosting",
      description:
        "Get reliable, fast, and secure web hosting with 99.9% uptime and technical support that keeps your site online without interruptions.",
      bgImage: "/images/web-dev/webservices/web-hosting.jpg",
      link: "/services/web-hosting",
    },
    {
      title: "SSL Certificate",
      description:
        "Protect your website and customers' data with trusted SSL certificates that boost your site's security and SEO ranking.",
      bgImage: "/images/web-dev/webservices/ssl-certificate-img.jpg",
      link: "/services/ssl-certificate",
    },
    {
      title: "WordPress Development",
      description:
        "We build modern, user-friendly, and SEO-optimized WordPress websites that you can easily manage and scale as your business grows.",
      bgImage: "/images/web-dev/webservices/wordpress-website-development.jpg",
      link: "/services/wordpress-website",
    },
    {
      title: "Custom Development",
      description:
        "Need something unique? We create tailor-made websites from scratch with custom designs, features, and integrations to fit your brand.",
      bgImage: "/images/web-dev/webservices/custom-website-development.jpg",
      link: "/services/custom-website",
    },
    {
      title: "Magento Development",
      description:
        "Power your large-scale eCommerce business with Magento — offering enterprise-grade performance, advanced features, and complete customization.",
      bgImage: "/images/web-dev/webservices/magento-website-development.jpg",
      link: "/services/magento-development",
    },
    {
      title: "Maintenance & Support",
      description:
        "Keep your website secure, updated, and running smoothly with our reliable maintenance and support services.",
      bgImage: "/images/web-dev/webservices/website-maintenance-support.jpg",
      link: "/services/website-maintenance-support",
    },
    {
      title: "Speed Optimization",
      description:
        "Improve your website’s loading speed and performance for a faster, smoother user experience.",
      bgImage: "/images/web-dev/webservices/website-speed-optimization.jpg",
      link: "/services/website-speed-optimization",
    },
  ],
  },
   ranchi: {
       heading: "Ranchi's Reliable Web Development Agency | E-commerce & Website Solutions",
    subheading: "Professional web services for Ranchi companies: responsive websites, hosting, and maintenance—supporting your local business growth.",
  features: [
    {
      title: "Shopify website Development",
      description:
        "Launch your online store quickly with Shopify. We design and customize Shopify stores for smooth shopping experiences, secure payments, and easy product management.",
      bgImage:
        "/images/web-dev/webservices/shopify-website-development.jpeg",
      link: "/services/shopify-ecommerce",
    },
    {
      title: "WooCommerce",
      description:
        "Build flexible and powerful online stores using WooCommerce on WordPress. Perfect for scalable, SEO-friendly, and customizable eCommerce websites.",
      bgImage: "/images/web-dev/webservices/E-commerce-Website-WooCommerce.jpg",
      link: "/services/woocommerce-ecommerce",
    },
    {
      title: "Domain Registration",
      description:
        "Secure your online identity with our domain registration service. We help you choose and register the perfect domain name for your brand.",
      bgImage: "/images/web-dev/webservices/Domain-Registration.jpg",
      link: "/services/domain-registration",
    },
    {
      title: "Server Management",
      description:
        "Ensure your website runs smoothly with our professional server management services — from setup to performance monitoring and maintenance.",
      bgImage: "/images/web-dev/webservices/Server-Management.jpg",
      link: "/services/server-management",
    },
    {
      title: "AWS Cloud Management",
      description:
        "We manage and optimize your AWS cloud infrastructure for maximum uptime, scalability, and cost-efficiency.",
      bgImage: "/images/web-dev/webservices/aws-img.jpg",
      link: "/services/aws-server-management",
    },
    {
      title: "Web Hosting",
      description:
        "Get reliable, fast, and secure web hosting with 99.9% uptime and technical support that keeps your site online without interruptions.",
      bgImage: "/images/web-dev/webservices/web-hosting.jpg",
      link: "/services/web-hosting",
    },
    {
      title: "SSL Certificate",
      description:
        "Protect your website and customers' data with trusted SSL certificates that boost your site's security and SEO ranking.",
      bgImage: "/images/web-dev/webservices/ssl-certificate-img.jpg",
      link: "/services/ssl-certificate",
    },
    {
      title: "WordPress Development",
      description:
        "We build modern, user-friendly, and SEO-optimized WordPress websites that you can easily manage and scale as your business grows.",
      bgImage: "/images/web-dev/webservices/wordpress-website-development.jpg",
      link: "/services/wordpress-website",
    },
    {
      title: "Custom Development",
      description:
        "Need something unique? We create tailor-made websites from scratch with custom designs, features, and integrations to fit your brand.",
      bgImage: "/images/web-dev/webservices/custom-website-development.jpg",
      link: "/services/custom-website",
    },
    {
      title: "Magento Development",
      description:
        "Power your large-scale eCommerce business with Magento — offering enterprise-grade performance, advanced features, and complete customization.",
      bgImage: "/images/web-dev/webservices/magento-website-development.jpg",
      link: "/services/magento-development",
    },
    {
      title: "Maintenance & Support",
      description:
        "Keep your website secure, updated, and running smoothly with our reliable maintenance and support services.",
      bgImage: "/images/web-dev/webservices/website-maintenance-support.jpg",
      link: "/services/website-maintenance-support",
    },
    {
      title: "Speed Optimization",
      description:
        "Improve your website’s loading speed and performance for a faster, smoother user experience.",
      bgImage: "/images/web-dev/webservices/website-speed-optimization.jpg",
      link: "/services/website-speed-optimization",
    },
  ],
  },
  newyorkUS: {
       heading: "New York's Digital Web Development Agency | E-commerce & Website Solutions",
    subheading: "Professional web services for New York companies: American market e-commerce, hosting, and maintenance—advancing your US business online.",
  features: [
    {
      title: "Shopify website Development",
      description:
        "Launch your online store quickly with Shopify. We design and customize Shopify stores for smooth shopping experiences, secure payments, and easy product management.",
      bgImage:
        "/images/web-dev/webservices/shopify-website-development.jpeg",
      link: "/services/shopify-ecommerce",
    },
    {
      title: "WooCommerce",
      description:
        "Build flexible and powerful online stores using WooCommerce on WordPress. Perfect for scalable, SEO-friendly, and customizable eCommerce websites.",
      bgImage: "/images/web-dev/webservices/E-commerce-Website-WooCommerce.jpg",
      link: "/services/woocommerce-ecommerce",
    },
    {
      title: "Domain Registration",
      description:
        "Secure your online identity with our domain registration service. We help you choose and register the perfect domain name for your brand.",
      bgImage: "/images/web-dev/webservices/Domain-Registration.jpg",
      link: "/services/domain-registration",
    },
    {
      title: "Server Management",
      description:
        "Ensure your website runs smoothly with our professional server management services — from setup to performance monitoring and maintenance.",
      bgImage: "/images/web-dev/webservices/Server-Management.jpg",
      link: "/services/server-management",
    },
    {
      title: "AWS Cloud Management",
      description:
        "We manage and optimize your AWS cloud infrastructure for maximum uptime, scalability, and cost-efficiency.",
      bgImage: "/images/web-dev/webservices/aws-img.jpg",
      link: "/services/aws-server-management",
    },
    {
      title: "Web Hosting",
      description:
        "Get reliable, fast, and secure web hosting with 99.9% uptime and technical support that keeps your site online without interruptions.",
      bgImage: "/images/web-dev/webservices/web-hosting.jpg",
      link: "/services/web-hosting",
    },
    {
      title: "SSL Certificate",
      description:
        "Protect your website and customers' data with trusted SSL certificates that boost your site's security and SEO ranking.",
      bgImage: "/images/web-dev/webservices/ssl-certificate-img.jpg",
      link: "/services/ssl-certificate",
    },
    {
      title: "WordPress Development",
      description:
        "We build modern, user-friendly, and SEO-optimized WordPress websites that you can easily manage and scale as your business grows.",
      bgImage: "/images/web-dev/webservices/wordpress-website-development.jpg",
      link: "/services/wordpress-website",
    },
    {
      title: "Custom Development",
      description:
        "Need something unique? We create tailor-made websites from scratch with custom designs, features, and integrations to fit your brand.",
      bgImage: "/images/web-dev/webservices/custom-website-development.jpg",
      link: "/services/custom-website",
    },
    {
      title: "Magento Development",
      description:
        "Power your large-scale eCommerce business with Magento — offering enterprise-grade performance, advanced features, and complete customization.",
      bgImage: "/images/web-dev/webservices/magento-website-development.jpg",
      link: "/services/magento-development",
    },
    {
      title: "Maintenance & Support",
      description:
        "Keep your website secure, updated, and running smoothly with our reliable maintenance and support services.",
      bgImage: "/images/web-dev/webservices/website-maintenance-support.jpg",
      link: "/services/website-maintenance-support",
    },
    {
      title: "Speed Optimization",
      description:
        "Improve your website’s loading speed and performance for a faster, smoother user experience.",
      bgImage: "/images/web-dev/webservices/website-speed-optimization.jpg",
      link: "/services/website-speed-optimization",
    },
  ],
  },
   londonUK: {
       heading: "London's Professional Web Development Agency | E-commerce & Website Solutions",
    subheading: "Professional web services for London companies: UK-focused websites, hosting, and maintenance—strengthening your British market presence.",
  features: [
    {
      title: "Shopify website Development",
      description:
        "Launch your online store quickly with Shopify. We design and customize Shopify stores for smooth shopping experiences, secure payments, and easy product management.",
      bgImage:
        "/images/web-dev/webservices/shopify-website-development.jpeg",
      link: "/services/shopify-ecommerce",
    },
    {
      title: "WooCommerce",
      description:
        "Build flexible and powerful online stores using WooCommerce on WordPress. Perfect for scalable, SEO-friendly, and customizable eCommerce websites.",
      bgImage: "/images/web-dev/webservices/E-commerce-Website-WooCommerce.jpg",
      link: "/services/woocommerce-ecommerce",
    },
    {
      title: "Domain Registration",
      description:
        "Secure your online identity with our domain registration service. We help you choose and register the perfect domain name for your brand.",
      bgImage: "/images/web-dev/webservices/Domain-Registration.jpg",
      link: "/services/domain-registration",
    },
    {
      title: "Server Management",
      description:
        "Ensure your website runs smoothly with our professional server management services — from setup to performance monitoring and maintenance.",
      bgImage: "/images/web-dev/webservices/Server-Management.jpg",
      link: "/services/server-management",
    },
    {
      title: "AWS Cloud Management",
      description:
        "We manage and optimize your AWS cloud infrastructure for maximum uptime, scalability, and cost-efficiency.",
      bgImage: "/images/web-dev/webservices/aws-img.jpg",
      link: "/services/aws-server-management",
    },
    {
      title: "Web Hosting",
      description:
        "Get reliable, fast, and secure web hosting with 99.9% uptime and technical support that keeps your site online without interruptions.",
      bgImage: "/images/web-dev/webservices/web-hosting.jpg",
      link: "/services/web-hosting",
    },
    {
      title: "SSL Certificate",
      description:
        "Protect your website and customers' data with trusted SSL certificates that boost your site's security and SEO ranking.",
      bgImage: "/images/web-dev/webservices/ssl-certificate-img.jpg",
      link: "/services/ssl-certificate",
    },
    {
      title: "WordPress Development",
      description:
        "We build modern, user-friendly, and SEO-optimized WordPress websites that you can easily manage and scale as your business grows.",
      bgImage: "/images/web-dev/webservices/wordpress-website-development.jpg",
      link: "/services/wordpress-website",
    },
    {
      title: "Custom Development",
      description:
        "Need something unique? We create tailor-made websites from scratch with custom designs, features, and integrations to fit your brand.",
      bgImage: "/images/web-dev/webservices/custom-website-development.jpg",
      link: "/services/custom-website",
    },
    {
      title: "Magento Development",
      description:
        "Power your large-scale eCommerce business with Magento — offering enterprise-grade performance, advanced features, and complete customization.",
      bgImage: "/images/web-dev/webservices/magento-website-development.jpg",
      link: "/services/magento-development",
    },
    {
      title: "Maintenance & Support",
      description:
        "Keep your website secure, updated, and running smoothly with our reliable maintenance and support services.",
      bgImage: "/images/web-dev/webservices/website-maintenance-support.jpg",
      link: "/services/website-maintenance-support",
    },
    {
      title: "Speed Optimization",
      description:
        "Improve your website’s loading speed and performance for a faster, smoother user experience.",
      bgImage: "/images/web-dev/webservices/website-speed-optimization.jpg",
      link: "/services/website-speed-optimization",
    },
  ],
  },
   jaipur: {
       heading: "Jaipur's Creative Web Development Agency | E-commerce & Website Solutions",
    subheading: "Professional web services for Jaipur companies: beautiful websites, hosting, and maintenance—showcasing your business heritage online.",
  features: [
    {
      title: "Shopify website Development",
      description:
        "Launch your online store quickly with Shopify. We design and customize Shopify stores for smooth shopping experiences, secure payments, and easy product management.",
      bgImage:
        "/images/web-dev/webservices/shopify-website-development.jpeg",
      link: "/services/shopify-ecommerce",
    },
    {
      title: "WooCommerce",
      description:
        "Build flexible and powerful online stores using WooCommerce on WordPress. Perfect for scalable, SEO-friendly, and customizable eCommerce websites.",
      bgImage: "/images/web-dev/webservices/E-commerce-Website-WooCommerce.jpg",
      link: "/services/woocommerce-ecommerce",
    },
    {
      title: "Domain Registration",
      description:
        "Secure your online identity with our domain registration service. We help you choose and register the perfect domain name for your brand.",
      bgImage: "/images/web-dev/webservices/Domain-Registration.jpg",
      link: "/services/domain-registration",
    },
    {
      title: "Server Management",
      description:
        "Ensure your website runs smoothly with our professional server management services — from setup to performance monitoring and maintenance.",
      bgImage: "/images/web-dev/webservices/Server-Management.jpg",
      link: "/services/server-management",
    },
    {
      title: "AWS Cloud Management",
      description:
        "We manage and optimize your AWS cloud infrastructure for maximum uptime, scalability, and cost-efficiency.",
      bgImage: "/images/web-dev/webservices/aws-img.jpg",
      link: "/services/aws-server-management",
    },
    {
      title: "Web Hosting",
      description:
        "Get reliable, fast, and secure web hosting with 99.9% uptime and technical support that keeps your site online without interruptions.",
      bgImage: "/images/web-dev/webservices/web-hosting.jpg",
      link: "/services/web-hosting",
    },
    {
      title: "SSL Certificate",
      description:
        "Protect your website and customers' data with trusted SSL certificates that boost your site's security and SEO ranking.",
      bgImage: "/images/web-dev/webservices/ssl-certificate-img.jpg",
      link: "/services/ssl-certificate",
    },
    {
      title: "WordPress Development",
      description:
        "We build modern, user-friendly, and SEO-optimized WordPress websites that you can easily manage and scale as your business grows.",
      bgImage: "/images/web-dev/webservices/wordpress-website-development.jpg",
      link: "/services/wordpress-website",
    },
    {
      title: "Custom Development",
      description:
        "Need something unique? We create tailor-made websites from scratch with custom designs, features, and integrations to fit your brand.",
      bgImage: "/images/web-dev/webservices/custom-website-development.jpg",
      link: "/services/custom-website",
    },
    {
      title: "Magento Development",
      description:
        "Power your large-scale eCommerce business with Magento — offering enterprise-grade performance, advanced features, and complete customization.",
      bgImage: "/images/web-dev/webservices/magento-website-development.jpg",
      link: "/services/magento-development",
    },
    {
      title: "Maintenance & Support",
      description:
        "Keep your website secure, updated, and running smoothly with our reliable maintenance and support services.",
      bgImage: "/images/web-dev/webservices/website-maintenance-support.jpg",
      link: "/services/website-maintenance-support",
    },
    {
      title: "Speed Optimization",
      description:
        "Improve your website’s loading speed and performance for a faster, smoother user experience.",
      bgImage: "/images/web-dev/webservices/website-speed-optimization.jpg",
      link: "/services/website-speed-optimization",
    },
  ],
  },
   dohaQatar: {
       heading: "Doha's Premier Web Development Agency | E-commerce & Website Solutions",
    subheading: "Professional web services for Doha companies: Middle East e-commerce, hosting, and maintenance—growing your Qatar business digitally.",
  features: [
    {
      title: "Shopify website Development",
      description:
        "Launch your online store quickly with Shopify. We design and customize Shopify stores for smooth shopping experiences, secure payments, and easy product management.",
      bgImage:
        "/images/web-dev/webservices/shopify-website-development.jpeg",
      link: "/services/shopify-ecommerce",
    },
    {
      title: "WooCommerce",
      description:
        "Build flexible and powerful online stores using WooCommerce on WordPress. Perfect for scalable, SEO-friendly, and customizable eCommerce websites.",
      bgImage: "/images/web-dev/webservices/E-commerce-Website-WooCommerce.jpg",
      link: "/services/woocommerce-ecommerce",
    },
    {
      title: "Domain Registration",
      description:
        "Secure your online identity with our domain registration service. We help you choose and register the perfect domain name for your brand.",
      bgImage: "/images/web-dev/webservices/Domain-Registration.jpg",
      link: "/services/domain-registration",
    },
    {
      title: "Server Management",
      description:
        "Ensure your website runs smoothly with our professional server management services — from setup to performance monitoring and maintenance.",
      bgImage: "/images/web-dev/webservices/Server-Management.jpg",
      link: "/services/server-management",
    },
    {
      title: "AWS Cloud Management",
      description:
        "We manage and optimize your AWS cloud infrastructure for maximum uptime, scalability, and cost-efficiency.",
      bgImage: "/images/web-dev/webservices/aws-img.jpg",
      link: "/services/aws-server-management",
    },
    {
      title: "Web Hosting",
      description:
        "Get reliable, fast, and secure web hosting with 99.9% uptime and technical support that keeps your site online without interruptions.",
      bgImage: "/images/web-dev/webservices/web-hosting.jpg",
      link: "/services/web-hosting",
    },
    {
      title: "SSL Certificate",
      description:
        "Protect your website and customers' data with trusted SSL certificates that boost your site's security and SEO ranking.",
      bgImage: "/images/web-dev/webservices/ssl-certificate-img.jpg",
      link: "/services/ssl-certificate",
    },
    {
      title: "WordPress Development",
      description:
        "We build modern, user-friendly, and SEO-optimized WordPress websites that you can easily manage and scale as your business grows.",
      bgImage: "/images/web-dev/webservices/wordpress-website-development.jpg",
      link: "/services/wordpress-website",
    },
    {
      title: "Custom Development",
      description:
        "Need something unique? We create tailor-made websites from scratch with custom designs, features, and integrations to fit your brand.",
      bgImage: "/images/web-dev/webservices/custom-website-development.jpg",
      link: "/services/custom-website",
    },
    {
      title: "Magento Development",
      description:
        "Power your large-scale eCommerce business with Magento — offering enterprise-grade performance, advanced features, and complete customization.",
      bgImage: "/images/web-dev/webservices/magento-website-development.jpg",
      link: "/services/magento-development",
    },
    {
      title: "Maintenance & Support",
      description:
        "Keep your website secure, updated, and running smoothly with our reliable maintenance and support services.",
      bgImage: "/images/web-dev/webservices/website-maintenance-support.jpg",
      link: "/services/website-maintenance-support",
    },
    {
      title: "Speed Optimization",
      description:
        "Improve your website’s loading speed and performance for a faster, smoother user experience.",
      bgImage: "/images/web-dev/webservices/website-speed-optimization.jpg",
      link: "/services/website-speed-optimization",
    },
  ],
  },

  bhopal: {
    heading:
      "Bhopal Web Design Services | MP Website Development & Digital Marketing",
    subheading:
      "Complete digital solutions for Bhopal and Madhya Pradesh: e-commerce websites, custom development, and hosting to help local businesses grow statewide.",
    features: commonFeatures,
  },

  gonda: {
    heading:
      "Gonda Web Design Services | UP Website Development & Digital Marketing",
    subheading:
      "End-to-end digital solutions for Gonda and nearby regions: e-commerce websites, custom development, and hosting for local business growth.",
    features: commonFeatures,
  },

  rohini: {
    heading:
      "Rohini Web Design Services | Website Development North Delhi",
    subheading:
      "Total digital solutions for Rohini and North Delhi including e-commerce websites, custom development, and hosting to help local businesses grow.",
    features: commonFeatures,
  },

  lucknow: {
    heading:
      "Lucknow Web Design Services | Uttar Pradesh Capital Website Development",
    subheading:
      "Complete digital solutions for Lucknow and Uttar Pradesh: e-commerce websites, custom development, and hosting to take capital city businesses forward.",
    features: commonFeatures,
  },

  ghaziabad: {
    heading:
      "Ghaziabad Web Design Services | Delhi NCR Website Development",
    subheading:
      "All-in-one digital solutions for Ghaziabad and Delhi NCR: e-commerce websites, custom development, and hosting to expand regional businesses.",
    features: commonFeatures,
  },

  NewDelhi: {
    heading:
      "Delhi Web Design Services | National Capital Website Development",
    subheading:
      "Full digital solutions for Delhi and NCR: e-commerce websites, custom development, and hosting to help capital businesses lead nationwide.",
    features: commonFeatures,
  },

  agra: {
    heading:
      "Agra Web Design Services | Heritage City Website Development",
    subheading:
      "Turnkey digital solutions for Agra and tourism businesses: e-commerce websites, custom development, and hosting to create a global presence.",
    features: commonFeatures,
  },

  // new

  noidaWebDesign: {
  heading: "We Design Beautiful Websites for Noida Businesses | Web Design Agency",
  subheading: "Helping Noida companies create stunning websites that attract customers, build trust, and grow your business with strategic design thinking.",
  features: commonFeatures,
},

psdToHtmlNoida: {
  heading: "We Convert Your Designs to Perfect Code in Noida | PSD to HTML Specialists",
  subheading: "Bringing your design visions to life in Noida with clean, efficient code that works flawlessly on all devices and browsers.",
  features: commonFeatures,
},

phpDevelopmentNoida: {
  heading: "We Build Powerful PHP Applications in Noida | PHP Development Team",
  subheading: "Creating custom PHP solutions for Noida businesses that solve complex problems, automate processes, and drive digital transformation.",
  features: commonFeatures,
},

wordpressNoida: {
  heading: "We Create Amazing WordPress Sites in Noida | WordPress Development Partners",
  subheading: "Building WordPress websites for Noida businesses that are easy to update, rank well in search, and deliver exceptional user experiences.",
  features: commonFeatures,
},

joomlaNoida: {
  heading: "We Develop Advanced Joomla Websites in Noida | Joomla Development Partners",
  subheading: "Creating sophisticated Joomla solutions for Noida organizations that need powerful content management and custom functionality.",
  features: commonFeatures,
},

drupalNoida: {
  heading: "We Build Enterprise Drupal Sites in Noida | Drupal Development Partners",
  subheading: "Developing robust Drupal platforms for Noida enterprises that need scalability, security, and complex content architecture.",
  features: commonFeatures,
},

frameworkNoida: {
  heading: "We Develop with Modern Frameworks in Noida | Framework Development Team",
  subheading: "Building with the right framework for your Noida project—whether it's Laravel's elegance or CodeIgniter's simplicity, we've got you covered.",
  features: commonFeatures,
},

prestashopEcommerce: {
  heading: "We Build Successful PrestaShop Stores | E-commerce Development Team",
  subheading: "Creating PrestaShop stores that sell more—with intuitive navigation, secure checkout, and features that boost your online sales.",
  features: commonFeatures,
},

wordpressEcommerce: {
  heading: "We Create High-Converting WordPress Stores | E-commerce Development Experts",
  subheading: "Building WordPress e-commerce stores that convert visitors into customers—with beautiful design, smooth checkout, and smart features.",
  features: commonFeatures,
},

};















