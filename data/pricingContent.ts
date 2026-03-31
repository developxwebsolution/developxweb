/* =========================
   TYPES
========================= */
export interface PricingContent {
  heading: string;
  description: string;
}

/* =========================
   PRICING CONTENT (CITY WISE)
   Default = NO location
========================= */
export const pricingContent: Record<string, PricingContent> = {
  default: {
    heading: "Affordable Website Development Packages",
    description:
      "We offer competitive pricing for all our website development services, ensuring you get the best value for your investment.",
  },

pune: {
    heading: "Affordable Website Development Packages in Pune ",
    description: "Competitive, clear pricing for custom websites built for Pune's IT and manufacturing businesses. Get maximum value and local visibility in Wakad, Hinjewadi, and beyond.",
  },
thane: {
    heading: "Budget-Friendly Website Packages in Thane ",
    description: "Affordable website packages for Thane businesses. Get a professional site with local SEO to connect with customers across the MMR and grow your reach.",
  },
nagpur: {
    heading: "Cost-Effective Website Development in Nagpur ",
    description: "Affordable, professional websites for Nagpur's commercial hub. Get a strong online presence that offers excellent value and attracts local customers.",
  },
kuwait: {
    heading: "Professional & Affordable Website Development in Kuwait ",
    description: "Premium website development in Kuwait at a competitive price. Our value-packed packages are tailored for the local market to build trust and drive growth.",
  },
chennai: {
    heading: "Affordable Website Packages in Chennai",
    description: "Get a powerful website for your Chennai business at a great value. Our competitive packages are designed to capture the attention of the local market.",
  },
bangalore: {
    heading: "Scalable & Affordable Website Development in Bangalore",
    description: "Transparent, value-focused website packages for Bangalore's tech scene. Get a fast, SEO-ready site that delivers maximum impact for your investment.",
  },
delhi: {
    heading: "Affordable Website Development in Delhi ",
    description: "Professional websites for Delhi's competitive marketplace. Our value-conscious packages combine strategic design and local SEO for a strong ROI.",
  },
noida: {
    heading: "Best Value Website Packages in Noida ",
    description: "High-value website packages for Noida companies. Our affordable development includes essential SEO to connect with clients across the NCR.",
  },
kanpur: {
    heading: "Economical Website Development in Kanpur",
    description: "Professional, budget-friendly websites for Kanpur businesses. A cost-effective solution to build your brand and connect with local customers.",
  },
faridabad: {
    heading: "Affordable Website Packages in Faridabad ",
    description: "Cost-effective website development for Faridabad's industries. Get great value with an online presence built for growth and customer reach.",
  },
hyderabad: {
    heading: "Affordable Website Packages in Hyderabad",
    description: "Cost-effective website development for Hyderabad's industries. Get great value with an online presence built for growth and customer reach.",
  },
ahmedabad: {
    heading: "Affordable Website Development in Ahmedabad",
    description: "Grow your Ahmedabad business with a professional, value-packed website. Our competitive packages are tailored for the city's textile, manufacturing, and startup sectors to boost your local presence.",
  },
abuDhabiUAE: {
    heading: "Professional Website Development in Abu Dhabi",
    description: "Premium, cost-effective website packages for Abu Dhabi businesses. Get a polished online presence that reflects the capital's standards and connects with the UAE market effectively.",
  },
sharjahUAE: {
    heading: "Affordable Website Design in Sharjah",
    description: "Budget-friendly, culturally-appropriate websites for Sharjah's diverse community. Our packages help family businesses and entrepreneurs establish a strong digital presence in the UAE.",
  },
patna: {
    heading: "Economical Website Packages in Patna",
    description: "Affordable, professional websites for Patna's growing businesses. Get a strong online foundation that helps you connect with Bihar's expanding market at a great value.",
  },
meerut: {
    heading: "Budget-Friendly Website Development in Meerut",
    description: "Cost-effective web solutions for Meerut's industrial and sports businesses. Our affordable packages help local manufacturers and enterprises build a competitive online presence.",
  },
kolkata: {
    heading: "Affordable Website Development in Kolkata",
    description: "Professional, value-driven websites for Kolkata's diverse business scene. Our competitive packages help traditional and modern businesses establish a strong digital footprint in East India.",
  },
dubaiUAE: {
    heading: "Competitive Website Development in Dubai",
    description: "Premium website packages at competitive Dubai prices. Get a high-converting site tailored for the UAE's dynamic market, perfect for startups and established businesses alike.",
  },
chandigarh: {
    heading: "Modern Website Development in Chandigarh",
    description: "Clean, contemporary websites for Chandigarh's IT and service sectors. Our value-focused packages help Tricity businesses attract clients with a professional, mobile-friendly online presence.",
  },
indore: {
    heading: "Affordable Website Packages in Indore",
    description: "Competitive web solutions for Indore's thriving food and business sectors. Get a high-value website that helps you stand out in Central India's fastest-growing commercial center.",
  },
surat: {
    heading: "Cost-Effective Website Development in Surat",
    description: "Affordable, fast-loading websites for Surat's diamond and textile businesses. Our packages offer exceptional value to help you showcase your products and connect with global buyers.",
  },

  mumbai: {
    heading: "Affordable Website Development in Mumbai",
    description: "Get a high-impact website for your Mumbai business at competitive rates. Our value-focused packages are tailored for the city's fast-paced market, helping startups and enterprises stand out online.",
  },
gurugram: {
    heading: "Budget-Friendly Website Packages in Gurugram ",
    description: "Professional website solutions for Gurugram's corporate and startup ecosystem. Our affordable packages deliver excellent value for businesses in Cyber City and beyond, with local SEO included.",
  },
delhiNCR: {
    heading: "Cost-Effective Website Development in Delhi NCR",
    description: "Get a powerful website that works across the entire Delhi NCR region. Our affordable packages are optimized for local search, helping businesses connect with customers throughout the National Capital Region.",
  },
andheriMumbai: {
    heading: "Affordable Web Design in Andheri ",
    description: "Professional, budget-friendly websites for Andheri's entertainment and corporate hub. Our competitive packages help Lokhandwala, Powai, and Versova businesses attract local clients effectively.",
  },
amsterdam: {
    heading: "Professional Website Development in Amsterdam ",
    description: "Get a modern, responsive website for your Amsterdam business at competitive rates. Our value-driven packages help local startups and established companies connect with the Dutch and EU market.",
  },
ranchi: {
    heading: "Economical Website Development in Ranchi",
    description: "Affordable, professional websites for Ranchi's growing business community. Our cost-effective packages help local enterprises establish a strong digital presence in Eastern India.",
  },
newyorkUS: {
    heading: "Competitive Website Development in New York",
    description: "Professional website packages for New York businesses at surprisingly affordable rates. Get a site that matches the city's competitive pace without the Manhattan price tag.",
  },
londonUK: {
    heading: "Affordable Website Development in London",
    description: "Premium website solutions for London companies at competitive prices. Our value-packed packages help businesses across the City and Greater London establish a strong online presence.",
  },
jaipur: {
    heading: "Budget-Friendly Website Packages in Jaipur",
    description: "Professional, affordable websites for Jaipur's tourism and retail sectors. Our competitive packages help local businesses showcase their heritage and products to global customers.",
  },
dohaQatar: {
    heading: "Professional Website Development in Doha ",
    description: "Get a premium website for your Doha business at competitive Qatari market rates. Our value-driven packages are tailored to help local companies build trust and grow in the GCC region.",
  },
bhopal: {
  heading: "Cheap Cost Website Maker in Bhopal",
  description: "Professional and cost-effective websites for Bhopal’s emerging businesses. Our affordable offerings help local companies in the City of Lakes build a strong online presence across Madhya Pradesh.",
},

gonda: {
  heading: "Low Cost Website for Your Business in Gonda",
  description: "Affordable web solutions for Gonda’s local businesses and entrepreneurs. We create engaging local websites that help you get discovered and connect with customers across Uttar Pradesh.",
},

rohini: {
  heading: "Cheap Website Design in Rohini, Delhi",
  description: "Affordable website packages for Rohini’s residential and business community. Our budget-friendly solutions help small businesses, clinics, and professionals establish a strong online presence in North Delhi.",
},

lucknow: {
  heading: "Professional Web Designing in Lucknow",
  description: "Get a premium website for your business in Lucknow at affordable prices. Designed for the city’s IT, tourism, and service sectors, our value-driven packages help you stand out in Uttar Pradesh’s capital.",
},

ghaziabad: {
  heading: "Affordable Website Packages in Ghaziabad",
  description: "Cost-effective web development solutions for manufacturing units and local businesses in Ghaziabad. Our feature-rich websites help companies across Delhi NCR grow their digital presence.",
},

NewDelhi: {
  heading: "Budget Website Development in Delhi",
  description: "Professional business websites for Delhi’s competitive market. Our cost-effective packages combine strategic design and local SEO to deliver maximum ROI across India’s capital city.",
},

agra: {
  heading: "Affordable Website Development in Agra",
  description: "Affordable website solutions for Agra’s tourism, leather, and manufacturing businesses. Our competitive packages help local companies showcase their products and services to a global audience.",
},
psdToHtmlNoida: {
  heading: "PSD to HTML Designing Company in Noida, India | Pixel-Perfect Conversion",
  description: "Convert your Photoshop designs into clean, semantic HTML/CSS with our PSD to HTML services in Noida. We ensure pixel-perfect, responsive coding that loads fast and works flawlessly across all devices.",
},

phpDevelopmentNoida: {
  heading: "PHP Website Development Company in Noida | Custom PHP Web Solutions",
  description: "Build dynamic, scalable web applications with our expert PHP development team in Noida. We create custom PHP solutions, from CRM systems to complex portals, tailored to your business needs.",
},

wordpressNoida: {
  heading: "WordPress Website Development Company in Noida | Expert WordPress Developers",
  description: "Get a powerful, SEO-friendly website with our WordPress development services in Noida. We create custom themes, plugins, and WooCommerce stores that are easy to manage and scale.",
},

joomlaNoida: {
  heading: "Joomla Website Development Company in Noida | Professional Joomla Solutions",
  description: "Build feature-rich, extensible websites with our Joomla development expertise in Noida. Perfect for businesses needing powerful content management with multilingual capabilities.",
},

drupalNoida: {
  heading: "Drupal Website Development Company in Noida, India | Enterprise Drupal Solutions",
  description: "Create robust, secure enterprise websites with our Drupal development services in Noida. We build scalable, high-performance solutions for large organizations and complex requirements.",
},

frameworkNoida: {
  heading: "Framework Website Development Company in Noida | Laravel, CodeIgniter, CakePHP",
  description: "Develop fast, secure web applications using modern PHP frameworks. Our Noida team specializes in Laravel, CodeIgniter, and CakePHP for scalable, maintainable business solutions.",
},

prestashopEcommerce: {
  heading: "E-commerce Website Development in PrestaShop | Professional PrestaShop Developers",
  description: "Launch a powerful online store with our PrestaShop development services. We create feature-rich e-commerce websites with custom modules, payment gateways, and responsive design.",
},

wordpressEcommerce: {
  heading: "WordPress Ecommerce Website Development Company | WooCommerce Experts",
  description: "Build a high-converting online store with our WordPress e-commerce development. We specialize in WooCommerce solutions with custom design, payment integration, and inventory management.",
},

};
