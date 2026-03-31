import {
  Layout,
  Code2,
  ShoppingCart,
  Briefcase,
  Newspaper,
  Settings,
  Mail,
  Zap,
  Cpu,
  Puzzle,
  RefreshCw,
  Shield,
  Globe,
  Server,
  Layers,
  TrendingUp,
  CreditCard,
} from "lucide-react";

import { LucideIcon } from "lucide-react";


export interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface ServicesContentItem {
  heading: string;
  description: string;
  services: ServiceItem[];
}

export interface ServicesContent {
  default: ServicesContentItem;
  thane: ServicesContentItem;
  pune: ServicesContentItem;
  hyderabad: ServicesContentItem;

  nagpur: ServicesContentItem;
  kuwait: ServicesContentItem;
  chennai: ServicesContentItem;
  bangalore: ServicesContentItem;
  delhi: ServicesContentItem;
  noida: ServicesContentItem;
  kanpur: ServicesContentItem;
  faridabad: ServicesContentItem;
  ahmedabad: ServicesContentItem;
  abuDhabiUAE: ServicesContentItem;
  sharjahUAE: ServicesContentItem;
  surat: ServicesContentItem;
  indore: ServicesContentItem;
  chandigarh: ServicesContentItem;
  kolkata: ServicesContentItem;
  patna: ServicesContentItem;
  meerut: ServicesContentItem;
  dubaiUAE: ServicesContentItem;
  mumbai: ServicesContentItem;
  gurugram: ServicesContentItem;
  delhiNCR: ServicesContentItem;
  andheriMumbai: ServicesContentItem;
  amsterdam: ServicesContentItem;
  ranchi: ServicesContentItem;
  newyorkUS: ServicesContentItem;
  londonUK: ServicesContentItem;
  jaipur: ServicesContentItem;
  dohaQatar: ServicesContentItem;
  bhopal: ServicesContentItem;
  gonda: ServicesContentItem;
  rohini: ServicesContentItem;
  lucknow: ServicesContentItem;
  ghaziabad: ServicesContentItem;
  NewDelhi: ServicesContentItem;
  agra: ServicesContentItem;

  noidaWebDesign:ServicesContentItem;
  psdToHtmlNoida:ServicesContentItem;
  phpDevelopmentNoida:ServicesContentItem;
  wordpressNoida:ServicesContentItem;
  joomlaNoida:ServicesContentItem;
  drupalNoida:ServicesContentItem;
  frameworkNoida:ServicesContentItem;
  prestashopEcommerce:ServicesContentItem;
  wordpressEcommerce:ServicesContentItem;
}

export const servicesContent: ServicesContent = {
  default: {
    heading: "Custom Web Development Services We Offer",
    description:
      "Browse through a diverse range of web development services designed to transform your business vision into reality.",
    services: [
      {
        id: "01",
        title: "Website Designing",
        desc: "We build user-friendly and eye-catching website designs that reflect your brand identity. We focus on layout, color combination, and typography to ensure the visitor reads your content easily. We also make sure the website supports all devices and browsers.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Website Development",
        desc: "Laser Web Maker focuses on speed, security, and scalable website development. We use modern technology, minimal coding, and ensure smooth functionality across browsers.",
        icon: Code2,
      },
      {
        id: "03",
        title: "E-commerce Development",
        desc: "We develop powerful eCommerce websites for selling products online efficiently with secure payment gateways and user-friendly checkout.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Corporate Website",
        desc: "Professional corporate websites with structured layouts highlighting your services, values, and achievements.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "News & Blogs Website",
        desc: "Content-driven news and blog websites with easy CMS, SEO optimization, and reader-friendly layouts.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Website",
        desc: "Tailored websites with unique features, integrations, and functionality to match your business goals.",
        icon: Settings,
      },
    ],
  },

  hyderabad: {
    heading: "Leading Web Development Services in Hyderabad",
    description:
      "Discover our premium web development solutions tailored for Hyderabad businesses to enhance digital presence and accelerate growth.",
    services: [
      {
        id: "01",
        title: "Website Designing in Hyderabad",
        desc: "We create visually appealing and user-friendly website designs in Hyderabad. We focus on web design that supports all devices and is easy to navigate for first-time visitors so that they can easily get the information as they want.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Website Development in Hyderabad",
        desc: "As a top Hyderabad web development company, we create robust, fast, and scalable websites. Our expert developers use modern technologies to create an attractive and smooth website to ensure seamless functionality and a secure website in Hyderabad.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Development in Hyderabad",
        desc: "We offer beautifully designed online stores with a feature-rich ecommerce experience that includes easy product management, secure payment gateways and user-friendly shopping carts to ensure your digital sales are maximized and you reach more of the people who matter.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Corporate Website Development",
        desc: "Build a professional online footprint thru our corporate website services. We create polished, responsive websites that showcase your brand story, show off your services and help with lead generation to fulfill your business goals.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "News & Blogs Website",
        desc: "Start a vibrant content platform with our news and blog website development. We develop SEO friendly, more appealing sites that are easy to manage-and-upload new posts. The most ideal website for publishing articles and engaging your audience or establishing thought leadership in your industry through consistent updates.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Website Development",
        desc: "Receive a personalized digital solution that matches your needs. Our team is specialized with a unique Custom website development service in Hyderabad. we've been pioneering bespoke and tailor-made web-apps to match your exact business requirements.",
        icon: Settings,
      },
    ],
  },
  // PUNE
  pune: {
    heading: "Best Web Development Company in Pune",
    description:
      "Get custom web development services in Pune designed to boost your online presence, attract more customers, and grow your business revenue with cutting-edge solutions.",
    services: [
      {
        id: "01",
        title: "Website Designing Services in Pune",
        desc: "We create stunning, responsive website designs in Pune that captivate visitors and reflect your brand's personality. Our Pune-based design team focuses on intuitive navigation, mobile optimization, and visual appeal to keep users engaged longer and reduce bounce rates significantly.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Website Development Services Pune",
        desc: "As Pune's leading web development agency, we build fast-loading, secure websites using modern frameworks like React and Node.js. Our Pune developers create scalable solutions that handle traffic spikes during peak seasons while maintaining optimal performance for Pune businesses.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Website Development Pune",
        desc: "Transform your online sales with our comprehensive eCommerce development in Pune. We build Shopify and WooCommerce stores with advanced features like AI product recommendations, one-click checkout, and multi-payment options tailored for Pune's diverse market.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Corporate Website Design Pune",
        desc: "Establish your brand authority with our professional corporate websites in Pune. We design corporate portals that showcase your company culture, highlight client testimonials, and integrate lead capture forms to convert visitors into qualified Pune-based leads.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "News Portal Development Pune",
        desc: "Launch your digital publication with our news website development in Pune. We create content management systems that allow instant publishing, social sharing integration, and ad management – perfect for Pune media companies and bloggers.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Web Applications Pune",
        desc: "Get bespoke web applications developed specifically for your Pune business needs. From inventory management systems to customer portals, we build custom solutions that streamline operations and give you competitive advantage in Pune's market.",
        icon: Settings,
      },
    ],
  },

  // THANE (Mumbai Metropolitan)
  thane: {
    heading:
      "Professional Web Development Services in Thane for Local Businesses",
    description:
      "Elevate your Thane business with responsive, high-converting websites that dominate local search results and drive foot traffic to your physical locations.",
    services: [
      {
        id: "01",
        title: "Website Designing Company Thane",
        desc: "Our Thane website design services focus on creating local-business-friendly designs that highlight your Thane location, service areas, and customer testimonials from nearby areas like Ghodbunder Road and Majiwada.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Web Development Services Thane",
        desc: "We develop business websites specifically optimized for Thane's competitive market. Our Thane web developers ensure your site loads quickly even during monsoon internet fluctuations and integrates with local business directories.",
        icon: Code2,
      },
      {
        id: "03",
        title: "Online Store Development Thane",
        desc: "Capture Thane's growing eCommerce market with our localized online stores. We include features like same-day delivery scheduling for Thane areas, local payment methods, and Marathi language options for wider reach.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Business Website Development Thane",
        desc: "Build trust with Thane customers through professional corporate websites that display your physical address, parking availability, nearby landmarks, and easy contact options for Thane residents.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "Local News Website Thane",
        desc: "Create hyper-local content platforms for Thane communities. We develop news websites optimized for Thane-specific keywords, local event calendars, and community forums to engage Thane residents.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Solutions for Thane Businesses",
        desc: "We understand Thane's unique business landscape and develop custom solutions for Thane's retail, education, and service sectors with features like appointment booking, class schedules, and service area mapping.",
        icon: Settings,
      },
    ],
  },

  // NAGPUR
  nagpur: {
    heading: "Leading Web Development Agency in Nagpur ",
    description:
      "Partner with Nagpur's most trusted web development company for websites that rank higher, convert better, and establish your dominance in Nagpur's digital marketplace.",
    services: [
      {
        id: "01",
        title: "Website Design Services Nagpur",
        desc: "Our Nagpur web design team creates visually stunning websites that reflect Nagpur's vibrant culture while maintaining professional aesthetics that appeal to both local and national customers.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Website Development Company Nagpur",
        desc: "As Nagpur's premier web development agency, we build robust websites optimized for Nagpur's internet infrastructure, ensuring smooth performance across Sitabuldi, Civil Lines, and all Nagpur neighborhoods.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Solutions Nagpur",
        desc: "Tap into Nagpur's booming online shopping market with our specialized eCommerce development. We include features like Nagpur-specific delivery zones, local festival promotions, and regional language support.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Corporate Web Design Nagpur",
        desc: "Showcase your Nagpur business legacy with corporate websites that highlight your years of service, local partnerships, and community involvement in Nagpur's development.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "Nagpur News & Media Websites",
        desc: "Launch your digital news platform for Nagpur audiences. We develop media websites with breaking news alerts for Nagpur, local weather widgets, and election coverage specifically for Nagpur constituencies.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Web Development Nagpur",
        desc: "Get tailored solutions for Nagpur's unique industries including orange trade portals, educational institute management systems, and healthcare platforms specific to Nagpur's needs.",
        icon: Settings,
      },
    ],
  },

  // KUWAIT
  kuwait: {
    heading: "Premium Web Development Company in Kuwait",
    description:
      "Get culturally adapted web development services in Kuwait that understand local business etiquette, Arabic language requirements, and Kuwait's specific digital regulations.",
    services: [
      {
        id: "01",
        title: "Website Design Kuwait",
        desc: "We design websites for Kuwait businesses that respect cultural norms while delivering modern aesthetics. Our Kuwait website designs feature right-to-left Arabic layouts, appropriate imagery, and Kuwaiti color preferences.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Web Development Services Kuwait",
        desc: "Our Kuwait web development team builds websites compliant with Kuwait's internet regulations, optimized for local hosting, and integrated with Kuwait payment gateways like KNET.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Development Kuwait",
        desc: "Launch successful online stores in Kuwait with our specialized eCommerce solutions featuring Arabic/English bilingual interfaces, Kuwait delivery integration, and local currency support.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Corporate Websites Kuwait",
        desc: "Establish your professional presence with corporate websites that showcase your Kuwait commercial license, Arabic/English documentation, and compliance with Kuwait business standards.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "Arabic News Portals Kuwait",
        desc: "Create engaging Arabic news websites for Kuwait audiences with features like prayer time displays, Ramadan sections, and Kuwait-specific news categorization for Hawalli, Salmiya, and other areas.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Web Applications Kuwait",
        desc: "Get bespoke solutions for Kuwait's unique market including government portal integration, Arabic document management systems, and Kuwait-specific business process automation.",
        icon: Settings,
      },
    ],
  },

  // CHENNAI
  chennai: {
    heading: "Top Web Development Company in Chennai ",
    description:
      "Partner with Chennai's most experienced web developers for websites that combine Tamil cultural elements with cutting-edge technology for maximum impact.",
    services: [
      {
        id: "01",
        title: "Website Design Chennai",
        desc: "Our Chennai web designers create beautiful websites that incorporate Tamil aesthetics, traditional color schemes, and imagery that resonates with Chennai's cultural sensibilities.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Web Development Services Chennai",
        desc: "We develop high-performance websites optimized for Chennai's internet ecosystem, ensuring fast loading times across Anna Nagar, T Nagar, and all Chennai localities.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Website Chennai",
        desc: "Capture Chennai's enthusiastic online shopping market with Tamil-English bilingual stores, Chennai-specific delivery options, and integration with local Chennai logistics partners.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Corporate Web Design Chennai",
        desc: "Showcase your Chennai business heritage with corporate websites that highlight your local presence, Tamil Nadu partnerships, and community engagement in Chennai.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "Tamil News Website Development",
        desc: "Launch powerful Tamil news portals for Chennai audiences with Unicode Tamil font support, Chennai local news sections, and integration with Tamil media networks.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Software Chennai",
        desc: "Get tailored solutions for Chennai's manufacturing, IT, and automotive sectors with features specific to Chennai's industrial requirements and business practices.",
        icon: Settings,
      },
    ],
  },

  // BANGALORE
  bangalore: {
    heading: "Best Web Development Company in Bangalore | IT Capital Solutions",
    description:
      "Get Silicon Valley quality web development in Bangalore at local prices. Our Bangalore team delivers tech-savvy solutions for India's IT capital.",
    services: [
      {
        id: "01",
        title: "Website Design Bangalore",
        desc: "Create cutting-edge website designs that appeal to Bangalore's tech-savvy audience. Our Bangalore designs feature modern UI/UX trends, dark modes, and innovative interactions perfect for IT professionals.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Web Development Bangalore",
        desc: "As Bangalore's leading web development agency, we use the latest technologies favored in Koramangala and Whitefield's tech parks to build scalable, high-performance websites.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Solutions Bangalore",
        desc: "Build online stores for Bangalore's diverse population with features like instant delivery scheduling for HSR Layout, Marathahalli, and tech park delivery zones.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Corporate Website Bangalore",
        desc: "Establish your tech authority with corporate websites that showcase your Bangalore office, team credentials, and IT partnerships in India's startup capital.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "Tech News Portal Development",
        desc: "Launch tech-focused news platforms for Bangalore audiences with features like coding tutorials, startup news sections, and IT event calendars specific to Bangalore.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Web Apps Bangalore",
        desc: "Get enterprise-grade custom applications tailored for Bangalore's tech companies, startups, and IT services with API integrations and cloud solutions.",
        icon: Settings,
      },
    ],
  },

  // DELHI
  delhi: {
    heading: "Premium Web Development Services in Delhi",
    description:
      "Dominate Delhi's competitive digital landscape with websites designed to convert the capital's diverse audience into loyal customers.",
    services: [
      {
        id: "01",
        title: "Website Design Delhi",
        desc: "Our Delhi website designers create versatile designs that appeal to both South Delhi's premium audience and North Delhi's traditional markets, ensuring broad appeal across Delhi NCR.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Web Development Company Delhi",
        desc: "We build websites optimized for Delhi's internet conditions, with fast loading times across Connaught Place, Chandni Chowk, and all Delhi locations despite varying connectivity.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Development Delhi",
        desc: "Capture Delhi's massive online market with multi-language stores, Delhi-specific delivery promises, and integration with local Delhi delivery services for same-day fulfillment.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Corporate Website Delhi",
        desc: "Establish your authority in India's capital with corporate websites that showcase your Delhi headquarters, government certifications, and capital city partnerships.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "Delhi News Portal Development",
        desc: "Create authoritative news platforms for Delhi audiences with Parliament coverage, Delhi government updates, and hyper-local news for Delhi neighborhoods.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Solutions Delhi",
        desc: "Get tailored web applications for Delhi's unique needs including government tender portals, political campaign websites, and Delhi-specific business tools.",
        icon: Settings,
      },
    ],
  },

  // NOIDA
  noida: {
    heading:
      "Professional Web Development in Noida | Sector-Based Business Solutions",
    description:
      "Grow your Noida business with websites specifically designed for Noida's corporate sectors, residential sectors, and industrial areas.",
    services: [
      {
        id: "01",
        title: "Website Design Noida",
        desc: "Create sector-specific website designs for Noida businesses that highlight your Sector location, nearby landmarks, and accessibility from Delhi and other NCR areas.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Web Development Services Noida",
        desc: "Our Noida web developers build websites optimized for Noida's excellent internet infrastructure, ensuring enterprise-grade performance for Sector 62 IT companies and Sector 18 businesses.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Solutions Noida",
        desc: "Build online stores perfect for Noida's mixed residential-commercial landscape with features like office delivery scheduling, gated community delivery options, and Noida-specific promotions.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Corporate Website Noida",
        desc: "Showcase your Noida corporate presence with websites that highlight your Sector address, metro connectivity, and Noida business community involvement.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "Noida News & Community Portals",
        desc: "Launch community-focused platforms for Noida residents with sector-wise news, RWA information, and local event calendars specific to Noida's organized sectors.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Web Apps Noida",
        desc: "Get tailored solutions for Noida's IT parks, call centers, and manufacturing units with features specific to Noida's business ecosystem and workforce.",
        icon: Settings,
      },
    ],
  },

  // KANPUR
  kanpur: {
    heading: "Affordable Web Development Company in Kanpur",
    description:
      "Transform your Kanpur business with cost-effective websites that compete nationally while serving Kanpur's local market exceptionally well.",
    services: [
      {
        id: "01",
        title: "Website Design Kanpur",
        desc: "We design websites that reflect Kanpur's industrial heritage while maintaining modern appeal, perfect for leather businesses, educational institutes, and manufacturing units in Kanpur.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Web Development Kanpur",
        desc: "Build robust websites optimized for Kanpur's growing digital infrastructure with fast loading times across Civil Lines, P Road, and all Kanpur areas.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Development Kanpur",
        desc: "Showcase Kanpur's famous leather products and local specialties through online stores with Kanpur manufacturer direct pricing, bulk order options, and worldwide shipping capabilities.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Corporate Website Kanpur",
        desc: "Establish your Kanpur business legacy with corporate websites highlighting your years of service, local manufacturing facilities, and Kanpur-based clientele.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "Kanpur News & Information Portals",
        desc: "Create community information platforms for Kanpur with local news, educational updates from IIT Kanpur, and industrial development news specific to Kanpur.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Solutions Kanpur",
        desc: "Get tailored web applications for Kanpur's leather industry, educational coaching centers, and small-scale manufacturing businesses unique to Kanpur.",
        icon: Settings,
      },
    ],
  },

  // FARIDABAD
  faridabad: {
    heading: "Best Web Development Services in Faridabad",
    description:
      "Boost your Faridabad manufacturing or service business with websites that highlight your industrial capabilities and serve Delhi NCR markets effectively.",
    services: [
      {
        id: "01",
        title: "Website Design Faridabad",
        desc: "Create industrial-strength website designs that showcase Faridabad's manufacturing prowess while maintaining customer-friendly interfaces for B2B and B2C clients.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Web Development Company Faridabad",
        desc: "We build durable websites optimized for Faridabad's business needs with features like product catalogs, inquiry systems, and industrial certification displays.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Solutions Faridabad",
        desc: "Launch industrial eCommerce platforms for Faridabad manufacturers with bulk quoting systems, technical specifications downloads, and industrial buyer registration.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Corporate Website Faridabad",
        desc: "Showcase your Faridabad factory facilities, industrial certifications, and manufacturing capabilities to attract national and international buyers.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "Industrial News Portals Faridabad",
        desc: "Create industry-focused news platforms covering Faridabad's manufacturing sector, industrial policies, and local business development news.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Industrial Web Apps",
        desc: "Get specialized solutions for Faridabad's industries including inventory management for factories, supplier portals, and industrial equipment tracking systems.",
        icon: Settings,
      },
    ],
  },

  // AHMEDABAD
  ahmedabad: {
    heading:
      "Best Web Development Company in Ahmedabad | Textile Capital Digital Solutions",
    description:
      "Transform your Ahmedabad business with websites that capture Gujarat's entrepreneurial spirit while driving sales from local Sabarmati to international markets.",
    services: [
      {
        id: "01",
        title: "Website Design Ahmedabad",
        desc: "We create vibrant website designs for Ahmedabad businesses that reflect Gujarat's cultural richness while maintaining modern professionalism. Perfect for textile showrooms in Law Garden, educational institutes near Navrangpura, and retail stores across Ahmedabad.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Web Development Ahmedabad",
        desc: "Build robust websites optimized for Ahmedabad's growing tech ecosystem. Our Ahmedabad developers create solutions that perform excellently for businesses in SG Highway, Prahlad Nagar, and all areas of Ahmedabad, ensuring smooth user experience across Gujarat.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Solutions Ahmedabad",
        desc: "Showcase Ahmedabad's famous textiles, handicrafts, and industrial products through powerful online stores. We integrate Gujarati language options, wholesale pricing systems, and export-friendly features for Ahmedabad's manufacturing businesses.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Corporate Website Ahmedabad",
        desc: "Establish your Ahmedabad business authority with corporate websites that highlight your Gujarat roots, industrial capabilities, and partnerships across India. Perfect for AMA members and Gujarat Chamber of Commerce businesses.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "Gujarati News Portal Development",
        desc: "Launch engaging Gujarati content platforms for Ahmedabad audiences. We create news websites with Unicode Gujarati support, Ahmedabad-specific sections, and features for cultural festivals like Navratri and Uttarayan.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Web Applications Ahmedabad",
        desc: "Get tailored solutions for Ahmedabad's unique industries including textile inventory management, diamond trading portals, and pharmaceutical company websites specific to Gujarat's business needs.",
        icon: Settings,
      },
    ],
  },

  // ABU DHABI - UAE
  abuDhabiUAE: {
    heading:
      "Premium Web Development Company in Abu Dhabi | UAE Capital Digital Excellence",
    description:
      "Establish your digital presence in Abu Dhabi with websites that meet UAE government standards, Arabic language requirements, and premium business expectations of the capital city.",
    services: [
      {
        id: "01",
        title: "Website Design in Abu Dhabi",
        desc: "Create luxurious website designs that reflect Abu Dhabi's prestige and sophistication. We design with UAE cultural considerations, Arabic aesthetics, and international standards suitable for businesses on Corniche Road and Yas Island.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Web Development in Abu Dhabi",
        desc: "Build compliant websites meeting Abu Dhabi's digital regulations and government portal integration requirements. Our UAE developers ensure your website performs perfectly across all Emirates with Arabic/English bilingual support.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Development in Abu Dhabi",
        desc: "Launch premium online stores for Abu Dhabi's discerning customers. We integrate UAE payment gateways, Arabic product descriptions, and luxury shopping experiences for high-end retailers in Abu Dhabi Mall and Khalidiya.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Corporate Website in Abu Dhabi",
        desc: "Showcase your Abu Dhabi business credentials with corporate websites that display UAE trade license details, Arabic/English documentation, and professional presence in the UAE capital.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "Arabic Media Portal Development",
        desc: "Create authoritative Arabic news and media platforms for Abu Dhabi audiences with features like Islamic calendar integration, prayer time displays, and UAE government news sections.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Web Solutions in Abu Dhabi",
        desc: "Get bespoke applications for Abu Dhabi's unique requirements including government tender systems, oil & gas industry portals, and luxury hospitality management solutions.",
        icon: Settings,
      },
    ],
  },

  // SHARJAH - UAE
  sharjahUAE: {
    heading:
      "Affordable Web Development in Sharjah | Cultural Capital Digital Solutions",
    description:
      "Get cost-effective web development services in Sharjah that respect UAE cultural values while delivering excellent functionality for businesses in the Emirates' cultural capital.",
    services: [
      {
        id: "01",
        title: "Website Design Sharjah",
        desc: "Create culturally appropriate website designs that honor Sharjah's heritage while embracing modern technology. We design with UAE modesty standards, Arabic calligraphy elements, and family-friendly aesthetics perfect for Al Qasimia businesses.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Web Development Sharjah",
        desc: "Build reliable websites optimized for Sharjah's business community with Arabic-first development approach. Our Sharjah team ensures your website serves both local UAE customers and international visitors to Sharjah's cultural centers.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Solutions Sharjah",
        desc: "Launch online stores serving Sharjah's residential communities like Al Nahda and Al Taawun. We integrate COD options, Arabic customer support, and Sharjah-specific delivery zones for maximum local reach.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Corporate Website Sharjah",
        desc: "Establish your professional presence in Sharjah with websites that highlight your UAE commercial license, Sharjah Chamber membership, and Arabic business credentials.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "Educational Portal Development",
        desc: "Create educational websites for Sharjah's numerous universities and schools with features like Arabic learning modules, student portals, and UAE curriculum information.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Applications Sharjah",
        desc: "Get tailored solutions for Sharjah's educational institutions, cultural organizations, and small businesses with Arabic-first development approach and UAE compliance.",
        icon: Settings,
      },
    ],
  },

  // PATNA
  patna: {
    heading:
      "Professional Web Development in Patna | Bihar's Capital Digital Growth",
    description:
      "Grow your Patna business with websites designed for Bihar's capital city, serving both local Patna customers and the wider Bihar market with culturally relevant solutions.",
    services: [
      {
        id: "01",
        title: "Website Design Patna",
        desc: "Create website designs that resonate with Bihar's cultural identity while maintaining modern functionality. Perfect for businesses in Boring Road, Exhibition Road, and throughout Patna looking to serve Bihar's growing market.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Web Development Patna",
        desc: "Build robust websites optimized for Patna's digital infrastructure. Our Patna developers ensure fast loading times across Bailey Road, Kankarbagh, and all areas of Bihar's capital city.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Development Patna",
        desc: "Tap into Bihar's growing online market with eCommerce stores featuring Bihari products, local language options, and delivery networks covering all districts of Bihar from your Patna base.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Corporate Website Patna",
        desc: "Establish your business authority in Bihar with corporate websites showcasing your Patna headquarters, Bihar market experience, and regional partnerships across Eastern India.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "Bihar News Portal Development",
        desc: "Launch comprehensive news platforms for Bihar audiences with Patna political coverage, Bihari cultural content, and regional news from across Bihar's 38 districts.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Solutions Patna",
        desc: "Get tailored web applications for Patna's educational coaching centers, government tender businesses, and agricultural trading companies unique to Bihar's economy.",
        icon: Settings,
      },
    ],
  },

  // MEERUT
  meerut: {
    heading:
      "Best Web Development Company in Meerut | Sports & Industrial Hub Solutions",
    description:
      "Boost your Meerut business with websites showcasing your sports goods manufacturing, industrial capabilities, and services to both local and international markets.",
    services: [
      {
        id: "01",
        title: "Website Design Meerut",
        desc: "Create dynamic website designs that highlight Meerut's industrial strength and sporting goods heritage. Perfect for manufacturers in Partapur Industrial Area and businesses across Meerut's commercial centers.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Web Development Meerut",
        desc: "Build high-performance websites optimized for Meerut's business needs with features like product catalogs, inquiry systems, and B2B capabilities for Meerut's industrial sector.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Solutions Meerut",
        desc: "Showcase Meerut's famous sports equipment, musical instruments, and industrial products through dedicated online stores with wholesale pricing and export capabilities.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Corporate Website Meerut",
        desc: "Establish your manufacturing credentials with corporate websites highlighting your Meerut factory facilities, production capabilities, and quality certifications for international buyers.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "Local News Portal Development",
        desc: "Create community-focused news platforms for Meerut with sports coverage, industrial news, and local event information for Meerut's diverse population.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Industrial Web Apps",
        desc: "Get specialized solutions for Meerut's manufacturing industries including inventory management for sports goods, supply chain portals, and B2B trading platforms.",
        icon: Settings,
      },
    ],
  },

  // KOLKATA
  kolkata: {
    heading:
      "Leading Web Development Company in Kolkata | Cultural Capital Digital Innovation",
    description:
      "Combine Kolkata's rich heritage with cutting-edge web technology to create websites that serve both Bengali audiences and international markets from India's cultural capital.",
    services: [
      {
        id: "01",
        title: "Website Design Kolkata",
        desc: "Create elegant website designs that reflect Kolkata's artistic heritage while delivering modern functionality. Our designs incorporate Bengali aesthetic elements suitable for businesses in Park Street, Salt Lake, and across Kolkata.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Web Development Kolkata",
        desc: "Build sophisticated websites optimized for Kolkata's diverse market. Our Kolkata developers create solutions that perform excellently across all boroughs of the city, from New Town to Howrah.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Solutions Kolkata",
        desc: "Showcase Kolkata's unique products - from terracotta handicrafts to Bengali sweets - through beautifully designed online stores with Bengali language options and worldwide shipping.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Corporate Website Kolkata",
        desc: "Establish your Eastern India headquarters presence with corporate websites highlighting your Kolkata office, Bengali workforce, and regional market expertise.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "Bengali News Portal Development",
        desc: "Launch engaging Bengali content platforms with Unicode Bengali support, Kolkata-specific news sections, and cultural content celebrating Durga Puja and other Bengali festivals.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Web Applications Kolkata",
        desc: "Get tailored solutions for Kolkata's jute industry, tea trading portals, educational institutions, and cultural organizations unique to Bengal's economy.",
        icon: Settings,
      },
    ],
  },

  // DUBAI - UAE
  dubaiUAE: {
    heading:
      "Premium Web Development Company in Dubai | Global Business Hub Solutions",
    description:
      "Establish your digital presence in Dubai with world-class websites designed for international audiences, meeting UAE regulations while competing globally from the Middle East's business capital.",
    services: [
      {
        id: "01",
        title: "Website Design Dubai",
        desc: "Create luxurious, cutting-edge website designs that reflect Dubai's global status and innovation leadership. Perfect for businesses in Dubai Marina, DIFC, and across the UAE's commercial hub.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Web Development Dubai",
        desc: "Build enterprise-grade websites meeting Dubai's high standards for performance and security. Our Dubai developers ensure your website delivers exceptional experience to visitors from Sheikh Zayed Road to global markets.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Development Dubai",
        desc: "Launch premium online stores for Dubai's luxury market with features like same-day delivery scheduling across Dubai, Arabic/English/Russian multilingual support, and high-end shopping experiences.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Corporate Website Dubai",
        desc: "Showcase your Dubai business credentials with corporate websites displaying UAE free zone licenses, international partnerships, and professional presence in the Middle East's commercial capital.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "International News Portal Development",
        desc: "Create global media platforms from Dubai with multi-language support, real-time financial news, and Middle East business coverage for international audiences.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Enterprise Solutions Dubai",
        desc: "Get bespoke applications for Dubai's unique market including real estate portals, tourism platforms, logistics management systems, and international trade solutions.",
        icon: Settings,
      },
    ],
  },

  // CHANDIGARH
  chandigarh: {
    heading:
      "Best Web Development Company in Chandigarh | Planned City Digital Excellence",
    description:
      "Grow your Chandigarh business with beautifully designed websites that match the city's architectural elegance while delivering exceptional functionality for sectors across the tricity area.",
    services: [
      {
        id: "01",
        title: "Website Design Chandigarh",
        desc: "Create clean, minimalist website designs reflecting Chandigarh's architectural beauty and organized layout. Perfect for businesses in Sector 17, Sector 35, and across the planned sectors of Chandigarh.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Web Development Chandigarh",
        desc: "Build efficient websites optimized for Chandigarh's tech-savvy population. Our Chandigarh developers create solutions that serve the tricity area of Chandigarh, Mohali, and Panchkula with equal excellence.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Solutions Chandigarh",
        desc: "Launch sophisticated online stores serving Chandigarh's premium market with features like tricity delivery scheduling, luxury product showcases, and multi-channel retail integration.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Corporate Website Chandigarh",
        desc: "Establish your professional presence in North India with corporate websites highlighting your Chandigarh headquarters, Punjab-Haryana market coverage, and regional business networks.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "Educational Portal Development",
        desc: "Create advanced educational websites for Chandigarh's numerous colleges and coaching centers with features like online test systems, student progress tracking, and academic resource libraries.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Web Applications Chandigarh",
        desc: "Get tailored solutions for Chandigarh's government offices, educational institutions, and healthcare facilities with features specific to the city's organized sector system.",
        icon: Settings,
      },
    ],
  },

  // INDORE
  indore: {
    heading:
      "Top Web Development Company in Indore | Cleanest City Digital Solutions",
    description:
      "Transform your Indore business with websites that capture the city's entrepreneurial energy while serving both Madhya Pradesh markets and national customers.",
    services: [
      {
        id: "01",
        title: "Website Design Indore",
        desc: "Create vibrant website designs that reflect Indore's dynamic business environment and food culture. Perfect for businesses in Vijay Nagar, Sapna-Sangeeta, and commercial centers across Indore.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Web Development Indore",
        desc: "Build robust websites optimized for Indore's growing digital ecosystem. Our Indore developers ensure your website performs excellently across all areas of the city, from Rajwada to new developments.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Solutions Indore",
        desc: "Showcase Indore's famous food products, textiles, and industrial goods through powerful online stores with features like local delivery networks covering all of Madhya Pradesh.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Corporate Website Indore",
        desc: "Establish your Central India business headquarters with corporate websites highlighting your Indore base, MP market expertise, and regional manufacturing capabilities.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "MP News Portal Development",
        desc: "Launch comprehensive news platforms for Madhya Pradesh audiences with Indore-specific coverage, Bhopal political news, and cultural content from across the state.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Web Applications Indore",
        desc: "Get tailored solutions for Indore's pharmaceutical industry, educational institutions, and food processing businesses unique to Madhya Pradesh's commercial capital.",
        icon: Settings,
      },
    ],
  },

  // SURAT
  surat: {
    heading:
      "Professional Web Development in Surat | Diamond & Textile Capital Solutions",
    description:
      "Boost your Surat business with websites showcasing your diamond trading, textile manufacturing, and industrial capabilities to both domestic and international markets.",
    services: [
      {
        id: "01",
        title: "Website Design Surat",
        desc: "Create sparkling website designs that reflect Surat's diamond industry brilliance and textile manufacturing strength. Perfect for businesses in Varachha, Adajan, and Surat's industrial zones.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Web Development Surat",
        desc: "Build high-performance websites optimized for Surat's fast-paced business environment. Our Surat developers create solutions that handle high traffic for diamond auctions and textile wholesale portals.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Solutions Surat",
        desc: "Launch powerful B2B and B2C platforms for Surat's diamond traders and textile manufacturers with features like bulk order systems, international payment gateways, and multi-language support.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Corporate Website Surat",
        desc: "Establish your global trading credentials with corporate websites highlighting your Surat manufacturing facilities, diamond certification details, and international export capabilities.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "Business News Portal Development",
        desc: "Create industry-focused news platforms covering Surat's diamond market, textile trends, and Gujarat business news for traders and manufacturers.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Trading Applications",
        desc: "Get specialized solutions for Surat's diamond industry including inventory management for precious stones, textile order tracking systems, and export documentation portals.",
        icon: Settings,
      },
    ],
  },

  // MUMBAI (Enhanced version)
  mumbai: {
    heading:
      "Top Web Development Company in Mumbai | Financial Capital Digital Solutions",
    description:
      "Dominate Mumbai's competitive digital market with websites designed to convert India's busiest business audience into loyal customers across South Mumbai, Bandra, and all suburbs.",
    services: [
      {
        id: "01",
        title: "Website Designing in Mumbai",
        desc: "Create stunning website designs that capture Mumbai's dynamic energy while ensuring seamless user experience. Our Mumbai designers craft responsive layouts perfect for businesses in Nariman Point, BKC, and across Mumbai's bustling commercial districts.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Website Development Company Mumbai",
        desc: "Build lightning-fast websites optimized for Mumbai's high-speed internet infrastructure. Our Mumbai developers create scalable solutions that handle peak traffic during business hours, perfect for financial services and corporate headquarters in India's financial capital.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Development Mumbai",
        desc: "Tap into Mumbai's massive online shopping market with multi-language eCommerce stores featuring same-day delivery across South Mumbai, next-day delivery to suburbs, and integration with local Mumbai logistics partners.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Corporate Website Development Mumbai",
        desc: "Establish your business authority with corporate websites showcasing your Mumbai headquarters, Cuffe Parade address, and partnerships across India's financial and entertainment capital.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "Media & Entertainment Portals",
        desc: "Launch cutting-edge media websites for Mumbai's entertainment industry with video streaming capabilities, celebrity news sections, and Bollywood event coverage features.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Web Solutions Mumbai",
        desc: "Get bespoke applications for Mumbai's unique financial services, stock trading platforms, and entertainment industry needs with features specific to India's business capital.",
        icon: Settings,
      },
    ],
  },

  // GURUGRAM
  gurugram: {
    heading:
      "Best Web Development Company in Gurugram | Millennium City Digital Solutions",
    description:
      "Transform your Gurugram business with cutting-edge websites designed for corporate offices in Cyber City, DLF phases, and service providers across the millennium city.",
    services: [
      {
        id: "01",
        title: "Website Designing Gurugram",
        desc: "Create professional website designs that appeal to Gurugram's corporate audience. Our designs feature clean aesthetics perfect for Cyber City offices, Udyog Vihar industries, and premium services across Gurugram sectors.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Web Development Services Gurugram",
        desc: "Build enterprise-grade websites optimized for Gurugram's corporate environment. Our Gurugram developers create solutions with seamless CRM integration and corporate communication features for businesses in Golf Course Road and MG Road.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Solutions Gurugram",
        desc: "Launch premium online stores for Gurugram's affluent market with features like luxury product showcases, corporate gifting options, and express delivery across DLF phases and Sohna Road.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Corporate Website Gurugram",
        desc: "Showcase your Gurugram corporate headquarters with professional websites highlighting your Cyber City address, Fortune 500 clientele, and premium office facilities.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "Corporate Blog Development",
        desc: "Create professional blog platforms for Gurugram companies with thought leadership features, white paper downloads, and corporate news sections.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Enterprise Applications",
        desc: "Get tailored solutions for Gurugram's MNC offices, startups, and service industries with features specific to corporate needs in the millennium city.",
        icon: Settings,
      },
    ],
  },

  // DELHI-NCR
  delhiNCR: {
    heading:
      "Premium Web Development Services in Delhi NCR | National Capital Region Solutions",
    description:
      "Reach the entire Delhi NCR market with websites optimized for businesses in Noida, Gurugram, Faridabad, Ghaziabad, and all surrounding regions from your Delhi base.",
    services: [
      {
        id: "01",
        title: "Website Design Delhi NCR",
        desc: "Create versatile website designs that appeal to diverse NCR audiences from South Delhi's premium market to Noida's corporate sector and Gurugram's millennials.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Web Development Delhi NCR",
        desc: "Build comprehensive websites serving the entire National Capital Region. Our NCR developers ensure your website performs perfectly across all connected cities and towns in the Delhi metropolitan area.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Development Delhi NCR",
        desc: "Launch regional online stores serving Delhi NCR's 28+ million population with multi-city delivery networks, regional language options, and NCR-wide service coverage.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Corporate Website Delhi NCR",
        desc: "Establish your regional headquarters presence with corporate websites showcasing your NCR coverage, multiple office locations, and pan-NCR service capabilities.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "Regional News Portal Development",
        desc: "Create comprehensive news platforms covering Delhi NCR with hyper-local sections for each city, traffic updates for NCR highways, and regional event calendars.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Multi-Location Solutions",
        desc: "Get tailored applications for businesses operating across Delhi NCR with features like multi-branch management, regional inventory tracking, and NCR-wide service scheduling.",
        icon: Settings,
      },
    ],
  },

  // ANDHERI-MUMBAI
  andheriMumbai: {
    heading:
      "Professional Web Development in Andheri | Mumbai's Business Hub Solutions",
    description:
      "Boost your Andheri business with websites designed specifically for Mumbai's commercial heart, serving both Eastern and Western suburbs from your Andheri base.",
    services: [
      {
        id: "01",
        title: "Website Designing Andheri",
        desc: "Create dynamic website designs perfect for Andheri's mix of entertainment industry offices in Andheri West and corporate businesses in Andheri East, with easy access directions from Lokhandwala to MIDC.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Web Development Andheri",
        desc: "Build robust websites optimized for Andheri's commercial environment. Our Andheri developers create solutions that serve both Sakinaka's industrial area and Juhu's premium market seamlessly.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Solutions Andheri",
        desc: "Launch online stores with hyper-local delivery for Andheri's dense population. Features include same-hour delivery in Lokhandwala, next-day service across Western suburbs, and Andheri-specific promotions.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Corporate Website Andheri",
        desc: "Showcase your Andheri business location advantages with websites highlighting your proximity to Mumbai airport, metro connectivity, and Andheri's commercial ecosystem.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "Local Business Portal Development",
        desc: "Create community-focused platforms for Andheri businesses with local event listings, Andheri market updates, and neighborhood business directories.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Solutions for Andheri",
        desc: "Get tailored applications for Andheri's entertainment industry, advertising agencies, and industrial units with features specific to Mumbai's business hub.",
        icon: Settings,
      },
    ],
  },

  // AMSTERDAM
  amsterdam: {
    heading:
      "Premium Web Development Company in Amsterdam | European Digital Innovation Hub",
    description:
      "Establish your digital presence in Amsterdam with websites meeting European standards, Dutch business practices, and multi-language requirements for the Netherlands market.",
    services: [
      {
        id: "01",
        title: "Website Design Amsterdam",
        desc: "Create clean, minimalist website designs reflecting Amsterdam's innovative spirit and Dutch design principles. Perfect for businesses in Zuidas financial district and creative agencies in Jordaan.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Web Development Amsterdam",
        desc: "Build websites compliant with EU GDPR regulations and optimized for Netherlands' excellent internet infrastructure. Our Amsterdam developers ensure multilingual support for Dutch and international audiences.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Development Amsterdam",
        desc: "Launch European-standard online stores with iDEAL payment integration, multilingual Dutch/English interfaces, and eco-friendly delivery options preferred by Amsterdam's conscious consumers.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Corporate Website Amsterdam",
        desc: "Showcase your European headquarters with corporate websites displaying Dutch KvK registration, EU compliance, and your Amsterdam office in the business capital of Netherlands.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "European Media Portal Development",
        desc: "Create sophisticated news platforms for Amsterdam audiences with EU news coverage, Dutch politics sections, and multilingual content for international readers.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom EU-Compliant Solutions",
        desc: "Get bespoke applications meeting European standards including GDPR-compliant systems, multi-currency platforms, and solutions for Amsterdam's tech startups.",
        icon: Settings,
      },
    ],
  },

  // RANCHI
  ranchi: {
    heading:
      "Best Web Development Company in Ranchi | Jharkhand Capital Growth Solutions",
    description:
      "Grow your Ranchi business with websites designed to serve Jharkhand's capital city and connect with markets across Eastern India from your Ranchi base.",
    services: [
      {
        id: "01",
        title: "Website Design Ranchi",
        desc: "Create vibrant website designs reflecting Ranchi's natural beauty and industrial growth. Perfect for businesses in Lalpur, Main Road, and throughout Jharkhand's capital city.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Web Development Ranchi",
        desc: "Build reliable websites optimized for Ranchi's growing digital infrastructure. Our Ranchi developers ensure your website serves both local customers and reaches markets across Jharkhand state.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Solutions Ranchi",
        desc: "Launch online stores showcasing Ranchi's unique products - from tribal handicrafts to mineral resources - with features serving both local customers and national buyers.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Corporate Website Ranchi",
        desc: "Establish your Jharkhand headquarters presence with corporate websites highlighting your Ranchi office, state government partnerships, and regional mining/industrial capabilities.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "Jharkhand News Portal Development",
        desc: "Create regional news platforms covering Ranchi politics, Jharkhand development news, and cultural content from across the tribal heartland of Eastern India.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Solutions for Ranchi",
        desc: "Get tailored applications for Ranchi's mining industry, government projects, and educational institutions unique to Jharkhand's capital city.",
        icon: Settings,
      },
    ],
  },

  // NEW YORK - US
  newyorkUS: {
    heading:
      "Premium Web Development Company in New York | USA Business Capital Solutions",
    description:
      "Dominate the New York market with high-performance websites designed for Manhattan's fast pace, Brooklyn's creativity, and the entire US market from your NYC base.",
    services: [
      {
        id: "01",
        title: "Website Design New York",
        desc: "Create cutting-edge website designs that capture New York's energy and sophistication. Perfect for Wall Street financial firms, Madison Avenue agencies, and businesses across all five boroughs.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Web Development New York",
        desc: "Build enterprise-grade websites optimized for America's most competitive market. Our NYC developers create solutions that perform flawlessly for Manhattan businesses and reach customers nationwide.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Development New York",
        desc: "Launch premium online stores for New York's demanding customers with same-day delivery in Manhattan, luxury shopping experiences, and integration with US payment systems.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Corporate Website New York",
        desc: "Establish your US headquarters presence with corporate websites showcasing your NYC office address, American business credentials, and global partnerships.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "Media & News Portal Development",
        desc: "Create powerful media platforms for New York audiences with real-time financial news, entertainment sections, and features matching NYC's media industry standards.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Enterprise Solutions NYC",
        desc: "Get bespoke applications for New York's financial industry, media companies, and global headquarters with features specific to America's business capital.",
        icon: Settings,
      },
    ],
  },

  // LONDON - UK
  londonUK: {
    heading:
      "Top Web Development Company in London | UK Digital Excellence Solutions",
    description:
      "Establish your digital presence in London with websites meeting British business standards, UK regulations, and European market expectations from your London base.",
    services: [
      {
        id: "01",
        title: "Website Design London",
        desc: "Create sophisticated website designs combining British tradition with modern innovation. Perfect for City of London financial firms, Mayfair luxury brands, and businesses across London boroughs.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Web Development London",
        desc: "Build compliant websites meeting UK regulations and GDPR requirements. Our London developers create solutions optimized for British audiences with multi-currency and multi-language capabilities.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Development London",
        desc: "Launch premium online stores for UK customers with GBP pricing, next-day delivery across London, and integration with British payment systems preferred by UK shoppers.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Corporate Website London",
        desc: "Showcase your UK headquarters with corporate websites displaying your London office, British company registration, and European market coverage.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "UK Media Portal Development",
        desc: "Create authoritative news platforms for London audiences with UK politics coverage, European business news, and features meeting British media standards.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom UK-Compliant Solutions",
        desc: "Get bespoke applications meeting UK regulations including financial compliance systems, healthcare portals, and solutions for London's diverse industries.",
        icon: Settings,
      },
    ],
  },

  // JAIPUR
  jaipur: {
    heading:
      "Best Web Development Company in Jaipur | Pink City Heritage & Modern Solutions",
    description:
      "Combine Jaipur's royal heritage with modern web technology to create websites that serve both Rajasthan's traditional markets and national customers.",
    services: [
      {
        id: "01",
        title: "Website Design Jaipur",
        desc: "Create beautiful website designs incorporating Rajasthan's artistic traditions and Jaipur's pink city aesthetics. Perfect for heritage hotels in Civil Lines, handicraft businesses in MI Road, and tourism services across Jaipur.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Web Development Jaipur",
        desc: "Build robust websites optimized for Jaipur's growing tech scene. Our Jaipur developers create solutions that serve both local Rajasthani customers and international tourists visiting the pink city.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Solutions Jaipur",
        desc: "Showcase Jaipur's famous handicrafts, precious stones, and traditional products through beautifully designed online stores with worldwide shipping and Rajasthani cultural elements.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Corporate Website Jaipur",
        desc: "Establish your Rajasthan headquarters presence with corporate websites highlighting your Jaipur office, Rajasthani heritage, and regional business networks.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "Rajasthan Tourism Portal Development",
        desc: "Create engaging tourism websites for Jaipur with heritage site information, cultural festival calendars, and booking systems for Rajasthan's hotels and tour services.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Solutions for Jaipur",
        desc: "Get tailored applications for Jaipur's tourism industry, gemstone trading, handicraft businesses, and heritage hospitality unique to the pink city.",
        icon: Settings,
      },
    ],
  },

  // DOHA - QATAR
  dohaQatar: {
    heading:
      "Premium Web Development Company in Doha | Qatar Business Excellence Solutions",
    description:
      "Establish your digital presence in Doha with websites meeting Qatari business standards, Arabic language requirements, and premium expectations of Qatar's market.",
    services: [
      {
        id: "01",
        title: "Website Design Doha",
        desc: "Create luxurious website designs reflecting Doha's modern skyline and Qatari heritage. Perfect for businesses in West Bay, Pearl Qatar, and commercial centers across Doha with Arabic/English bilingual support.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Web Development Doha",
        desc: "Build compliant websites meeting Qatar's digital regulations and Arabic language requirements. Our Doha developers ensure your website performs excellently for both local Qatari and international expat audiences.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Development Doha",
        desc: "Launch premium online stores for Qatar's affluent market with Arabic/English interfaces, Qatar payment gateway integration, and luxury shopping experiences for Doha's discerning customers.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Corporate Website Doha",
        desc: "Showcase your Qatar business credentials with corporate websites displaying Qatari commercial registration, Arabic documentation, and professional presence in Doha's business district.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "Arabic Business Portal Development",
        desc: "Create sophisticated business platforms for Doha audiences with Arabic financial news, Qatar market updates, and features for Qatar's growing economy.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Qatari Solutions",
        desc: "Get bespoke applications for Qatar's energy sector, luxury retail market, and hospitality industry with features specific to Doha's business environment.",
        icon: Settings,
      },
    ],
  },

  // BHOPAL
  bhopal: {
    heading:
      "Web Development Company in Bhopal | City of Lakes Digital Solutions",
    description:
      "Develop your Bhopal business with high-quality websites that reflect the charm of Madhya Pradesh’s capital city, focusing on both local and statewide audiences.",
    services: [
      {
        id: "01",
        title: "Website Design Bhopal",
        desc: "Build stunning website designs inspired by Bhopal’s lakes and rich heritage. Ideal for businesses in MP Nagar, New Market, and government offices across Madhya Pradesh.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Web Development Bhopal",
        desc: "Create robust websites tailored for Bhopal’s growing digital ecosystem. Our developers build solutions connecting businesses with customers and government departments across MP.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Solutions Bhopal",
        desc: "Sell Bhopal’s handicrafts, tribal art, and local products through powerful online stores with delivery coverage across Madhya Pradesh.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Corporate Website Bhopal",
        desc: "Establish your Madhya Pradesh headquarters online with corporate websites showcasing your Bhopal office, government projects, and regional credibility.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "MP Government Portal Development",
        desc: "Develop portals for Madhya Pradesh government departments, PSUs, online applications, and public grievance redressal systems for the Bhopal region.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Solutions for Bhopal",
        desc: "Get custom-built applications for government bodies, educational institutions, and tourism businesses tailored to Bhopal’s needs.",
        icon: Settings,
      },
    ],
  },

  // GONDA
  gonda: {
    heading:
      "Professional Web Development in Gonda | Uttar Pradesh Business Solutions",
    description:
      "Take your Gonda business online with affordable websites designed for local customers and the wider eastern Uttar Pradesh market.",
    services: [
      {
        id: "01",
        title: "Website Design Gonda",
        desc: "Create practical and reliable website designs for businesses and agriculture in Gonda, ideal for local markets, schools, and service providers.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Web Development Gonda",
        desc: "Develop lightweight and cost-effective websites optimized for Gonda’s internet infrastructure, ensuring smooth performance in both urban and rural areas.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Solutions Gonda",
        desc: "Launch online marketplaces for Gonda’s agro products, handicrafts, and traditional goods with delivery across nearby UP districts.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Business Website Gonda",
        desc: "Build trust and credibility with professional websites highlighting your Gonda location, experience, and community presence.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "Local Information Portal",
        desc: "Create community portals featuring local news, agricultural market rates, and government schemes available in Gonda district.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Solutions for Gonda",
        desc: "Get tailored applications for agriculture businesses, coaching centers, and small-scale industries in eastern Uttar Pradesh.",
        icon: Settings,
      },
    ],
  },

  // ROHINI – DELHI
  rohini: {
    heading: "Premium Web Development in Rohini Delhi | North Delhi Solutions",
    description:
      "Empower Rohini’s residential and commercial areas with websites built for local businesses, schools, and service providers in North Delhi.",
    services: [
      {
        id: "01",
        title: "Website Design Rohini Delhi",
        desc: "Design family-friendly websites ideal for businesses, schools, and service providers across Rohini sectors 3 to 24.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Web Development Rohini Delhi",
        desc: "Build reliable websites optimized for Rohini’s residential internet usage while connecting businesses with nearby central Delhi markets.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Solutions Rohini",
        desc: "Set up hyper-local online stores with same-day delivery and community-focused promotions for North Delhi families.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Local Business Website Rohini",
        desc: "Strengthen neighborhood visibility with location-based websites, local SEO, and customer testimonials.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "Community Information Portal",
        desc: "Develop community portals for Rohini residents featuring local events, RWA updates, and North Delhi news.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Solutions for Rohini",
        desc: "Get custom applications for schools, coaching centers, retailers, and service providers in Delhi’s northern residential hub.",
        icon: Settings,
      },
    ],
  },

  // LUCKNOW
  lucknow: {
    heading:
      "Top Web Development Company in Lucknow | City of Nawabs Digital Excellence",
    description:
      "Blend Lucknow’s rich Nawabi heritage with modern web technologies to build websites serving Uttar Pradesh’s capital and beyond.",
    services: [
      {
        id: "01",
        title: "Website Design Lucknow",
        desc: "Design elegant websites showcasing Lucknow’s culture and architecture, ideal for businesses in Hazratganj and Gomti Nagar.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Web Development Lucknow",
        desc: "Develop scalable websites supporting Lucknow’s growing tech ecosystem, from simple business sites to complex platforms.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Solutions Lucknow",
        desc: "Sell Chikankari, perfumes, and culinary specialties through online stores with delivery across Uttar Pradesh.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Corporate Website Lucknow",
        desc: "Set up your Uttar Pradesh headquarters online with corporate websites highlighting government ties and regional networks.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "UP Government Portal Development",
        desc: "Create information and service portals for Lucknow-based government departments and public offices.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Solutions for Lucknow",
        desc: "Build custom applications for handicrafts, education, hospitality, and government sectors in Uttar Pradesh’s capital.",
        icon: Settings,
      },
    ],
  },

  // GHAZIABAD
  ghaziabad: {
    heading:
      "Web Development in Ghaziabad | Delhi NCR Industrial Hub Solutions",
    description:
      "Grow your Ghaziabad business with websites tailored for manufacturers, industrial units, and service providers in Delhi NCR.",
    services: [
      {
        id: "01",
        title: "Website Design Ghaziabad",
        desc: "Create heavy-duty website designs suitable for manufacturing and industrial businesses in Sahibabad and Raj Nagar.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Web Development Ghaziabad",
        desc: "Develop robust websites with industrial catalogs, bulk product listings, and B2B inquiry systems.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Solutions Ghaziabad",
        desc: "Launch B2B eCommerce platforms with wholesale pricing, bulk orders, and industrial buyer registration.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Industrial Corporate Website",
        desc: "Showcase manufacturing capacity, factory locations, and certifications with professional corporate websites.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "Industrial News Portal",
        desc: "Create industry-focused portals featuring manufacturing news, policies, and business updates in Delhi NCR.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Industrial Solutions",
        desc: "Develop custom applications for inventory management, supplier portals, and production tracking.",
        icon: Settings,
      },
    ],
  },

  // DELHI
  NewDelhi: {
    heading:
      "Best Web Development Company in Delhi | India Capital Digital Mastery",
    description:
      "Dominate Delhi’s digital landscape with professional, user-friendly, and visually powerful websites for every business scale.",
    services: [
      {
        id: "01",
        title: "Website Design Delhi",
        desc: "Design versatile websites catering to audiences from Connaught Place corporates to Chandni Chowk traders and South Delhi elites.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Web Development Delhi",
        desc: "Build enterprise-grade websites optimized for Delhi’s massive user base and varying internet conditions.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Development Delhi",
        desc: "Capture Delhi NCR’s massive eCommerce market with multilingual platforms and hyper-local delivery systems.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Corporate Website Delhi",
        desc: "Establish national-headquarter-level corporate websites showcasing government tie-ups and business authority.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "National News Portal Development",
        desc: "Build powerful news platforms with national political coverage, government policy analysis, and media-grade features.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Enterprise Solutions Delhi",
        desc: "Create tailor-made solutions including government integrations, political platforms, and enterprise systems.",
        icon: Settings,
      },
    ],
  },

  // AGRA
  agra: {
    heading:
      "Professional Web Development in Agra | Tourism Capital Digital Solutions",
    description:
      "Promote your Agra business globally with websites designed for tourists visiting the Taj Mahal and customers across Uttar Pradesh.",
    services: [
      {
        id: "01",
        title: "Website Design Agra",
        desc: "Design visually stunning websites showcasing Agra’s heritage, ideal for hotels, travel agencies, and handicraft shops.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Web Development Agra",
        desc: "Develop multilingual websites for Agra’s tourism-driven economy, serving both international and local audiences.",
        icon: Code2,
      },
      {
        id: "03",
        title: "eCommerce Solutions Agra",
        desc: "Sell marble handicrafts, leather goods, and souvenirs worldwide with multi-currency online stores.",
        icon: ShoppingCart,
      },
      {
        id: "04",
        title: "Tourism Business Website Agra",
        desc: "Build credibility with tourism-focused websites featuring Taj Mahal proximity, landmarks, and global testimonials.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "Tourism Information Portal",
        desc: "Create tourism portals with Taj Mahal guides, attraction listings, hotel bookings, and cultural information.",
        icon: Newspaper,
      },
      {
        id: "06",
        title: "Custom Tourism Solutions",
        desc: "Develop custom systems for hotels, tour bookings, and multi-currency travel services in Agra.",
        icon: Settings,
      },
    ],
  },
  noidaWebDesign: {
    heading:
      "Top Website Designing Company in Noida | Creative Digital Solutions",
    description:
      "Transform your business with stunning website designs in Noida that captivate visitors and drive conversions across all sectors from Sector 62 to Sector 18.",
    services: [
      {
        id: "01",
        title: "Website Designing Services Noida",
        desc: "Create visually stunning website designs that reflect Noida's dynamic business environment. Our Noida designers craft responsive layouts perfect for IT companies in Sector 62, retail businesses in Sector 18, and service providers across all Noida sectors.",
        icon: Layout,
      },
      {
        id: "02",
        title: "Responsive Web Design Noida",
        desc: "Build mobile-friendly websites that work perfectly across all devices used by Noida's tech-savvy audience. We ensure your website looks great and functions flawlessly on smartphones, tablets, and desktops used by customers across Delhi NCR.",
        icon: Code2,
      },
      {
        id: "03",
        title: "UI/UX Design Services Noida",
        desc: "Design intuitive user interfaces that provide exceptional experiences for Noida's diverse audience. We focus on user journey optimization, navigation simplicity, and visual appeal that keeps visitors engaged longer.",
        icon: Layout,
      },
      {
        id: "04",
        title: "Corporate Website Design Noida",
        desc: "Establish your professional presence with corporate website designs that showcase your Noida office location, business credentials, and corporate values to clients across Delhi NCR and beyond.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "E-commerce Website Design",
        desc: "Create beautiful online stores designed specifically for Noida's competitive e-commerce market. We design shopping experiences that convert visitors into customers and drive sales growth.",
        icon: ShoppingCart,
      },
      {
        id: "06",
        title: "Custom Website Design Solutions",
        desc: "Get unique website designs tailored to your specific business needs in Noida. We create custom solutions that stand out in Noida's crowded digital marketplace and reflect your brand identity.",
        icon: Settings,
      },
    ],
  },

  psdToHtmlNoida: {
    heading:
      "Professional PSD to HTML Services in Noida | Pixel-Perfect Conversion",
    description:
      "Convert your Photoshop designs into flawless, responsive HTML/CSS websites with our expert PSD to HTML conversion services in Noida.",
    services: [
      {
        id: "01",
        title: "PSD to HTML Conversion Noida",
        desc: "Transform your Photoshop designs into pixel-perfect HTML websites that work perfectly across all browsers and devices. Our Noida developers ensure every detail matches your original PSD design while maintaining optimal performance.",
        icon: Code2,
      },
      {
        id: "02",
        title: "Responsive PSD to HTML",
        desc: "Convert your PSD designs into fully responsive HTML websites that adapt beautifully to all screen sizes. Perfect for businesses in Noida targeting customers on mobile, tablet, and desktop devices.",
        icon: Layout,
      },
      {
        id: "03",
        title: "PSD to WordPress Conversion",
        desc: "Transform your Photoshop designs into fully functional WordPress themes. We convert PSD files into customizable WordPress themes with all necessary features for easy content management.",
        icon: Code2,
      },
      {
        id: "04",
        title: "Cross-Browser Compatible Coding",
        desc: "Get HTML/CSS code that works flawlessly across all modern browsers. Our Noida developers ensure your website looks perfect in Chrome, Firefox, Safari, and Edge for all your Noida customers.",
        icon: Settings,
      },
      {
        id: "05",
        title: "Clean Semantic HTML",
        desc: "Receive clean, well-structured HTML code that follows web standards and best practices. We write semantic markup that improves SEO and accessibility for your Noida business website.",
        icon: Code2,
      },
      {
        id: "06",
        title: "PSD to Email Template Conversion",
        desc: "Convert your PSD designs into responsive HTML email templates that work across all email clients. Perfect for Noida businesses running email marketing campaigns.",
        icon: Mail,
      },
    ],
  },

  phpDevelopmentNoida: {
    heading:
      "Top PHP Website Development Company in Noida | Custom PHP Solutions",
    description:
      "Build robust, scalable web applications with our expert PHP development services in Noida, perfect for businesses across all sectors from IT to manufacturing.",
    services: [
      {
        id: "01",
        title: "PHP Web Development Noida",
        desc: "Create powerful web applications using PHP for businesses in Noida. Our PHP developers build custom solutions tailored to your specific requirements, whether you're in Sector 62 or Sector 18.",
        icon: Code2,
      },
      {
        id: "02",
        title: "Laravel Development Services",
        desc: "Build enterprise-grade applications using Laravel PHP framework. We create scalable solutions perfect for Noida's growing businesses needing robust backend systems.",
        icon: Settings,
      },
      {
        id: "03",
        title: "CodeIgniter Development",
        desc: "Develop fast and lightweight web applications using CodeIgniter framework. Ideal for Noida businesses needing efficient, high-performance solutions.",
        icon: Zap,
      },
      {
        id: "04",
        title: "Custom PHP Application Development",
        desc: "Get bespoke PHP applications designed specifically for your Noida business needs. We build from scratch to ensure your application perfectly matches your workflow.",
        icon: Briefcase,
      },
      {
        id: "05",
        title: "PHP E-commerce Development",
        desc: "Build powerful online stores using PHP platforms like Magento, OpenCart, and custom solutions. Perfect for Noida retailers expanding their online presence.",
        icon: ShoppingCart,
      },
      {
        id: "06",
        title: "PHP API Development",
        desc: "Create RESTful APIs and web services using PHP for your Noida business applications. We build secure, well-documented APIs that integrate with other systems.",
        icon: Cpu,
      },
    ],
  },

  wordpressNoida: {
    heading: "Best WordPress Development Company in Noida | CMS Solutions",
    description:
      "Create powerful, easy-to-manage websites with our expert WordPress development services in Noida, serving businesses across all Delhi NCR sectors.",
    services: [
      {
        id: "01",
        title: "WordPress Development Noida",
        desc: "Build professional WordPress websites that are easy to manage and update. Our Noida WordPress developers create custom solutions perfect for businesses of all sizes in Delhi NCR.",
        icon: Code2,
      },
      {
        id: "02",
        title: "Custom WordPress Theme Development",
        desc: "Get unique WordPress themes designed specifically for your Noida business. We create responsive themes that reflect your brand identity and work perfectly across all devices.",
        icon: Layout,
      },
      {
        id: "03",
        title: "WordPress Plugin Development",
        desc: "Extend your WordPress functionality with custom plugins. Our Noida developers create secure, efficient plugins that add exactly the features your business needs.",
        icon: Puzzle,
      },
      {
        id: "04",
        title: "WordPress Migration Services",
        desc: "Safely migrate your existing website to WordPress without losing data or SEO rankings. We handle everything from content transfer to URL redirection for Noida businesses.",
        icon: RefreshCw,
      },
      {
        id: "05",
        title: "WordPress Maintenance & Support",
        desc: "Keep your WordPress website running smoothly with our maintenance services. We handle updates, security, backups, and troubleshooting for Noida businesses.",
        icon: Shield,
      },
      {
        id: "06",
        title: "Multisite WordPress Development",
        desc: "Build WordPress multisite networks for managing multiple websites from a single dashboard. Perfect for Noida businesses with multiple brands or locations.",
        icon: Globe,
      },
    ],
  },

  joomlaNoida: {
    heading:
      "Professional Joomla Development Company in Noida | Enterprise CMS",
    description:
      "Build sophisticated, feature-rich websites with our expert Joomla development services in Noida, perfect for complex business requirements.",
    services: [
      {
        id: "01",
        title: "Joomla Development Noida",
        desc: "Create powerful Joomla websites that handle complex content management needs. Our Noida Joomla developers build custom solutions for businesses needing advanced functionality.",
        icon: Code2,
      },
      {
        id: "02",
        title: "Custom Joomla Template Development",
        desc: "Get unique Joomla templates designed specifically for your Noida business. We create responsive templates that provide excellent user experience across all devices.",
        icon: Layout,
      },
      {
        id: "03",
        title: "Joomla Extension Development",
        desc: "Extend your Joomla website functionality with custom extensions. Our Noida developers create secure, efficient extensions tailored to your specific business needs.",
        icon: Puzzle,
      },
      {
        id: "04",
        title: "Joomla E-commerce Development",
        desc: "Build powerful online stores using Joomla with VirtueMart or other e-commerce extensions. Perfect for Noida retailers needing feature-rich shopping experiences.",
        icon: ShoppingCart,
      },
      {
        id: "05",
        title: "Joomla Migration Services",
        desc: "Migrate your existing website to Joomla safely and efficiently. We handle data transfer, template conversion, and extension setup for Noida businesses.",
        icon: RefreshCw,
      },
      {
        id: "06",
        title: "Joomla Support & Maintenance",
        desc: "Keep your Joomla website secure and up-to-date with our maintenance services. We provide regular updates, security patches, and technical support for Noida clients.",
        icon: Shield,
      },
    ],
  },

  drupalNoida: {
    heading: "Top Drupal Development Company in Noida | Enterprise Solutions",
    description:
      "Build enterprise-grade websites and applications with our expert Drupal development services in Noida, perfect for large organizations and complex requirements.",
    services: [
      {
        id: "01",
        title: "Drupal Development in Noida",
        desc: "Create powerful Drupal websites for enterprise-level requirements. Our Noida Drupal developers build scalable solutions perfect for large organizations in Delhi NCR.",
        icon: Code2,
      },
      {
        id: "02",
        title: "Custom Drupal Theme Development",
        desc: "Get unique Drupal themes designed specifically for your Noida business. We create responsive, accessible themes that meet enterprise design standards.",
        icon: Layout,
      },
      {
        id: "03",
        title: "Drupal Module Development",
        desc: "Extend your Drupal functionality with custom modules. Our Noida developers create secure, efficient modules that add exactly the features your enterprise needs.",
        icon: Puzzle,
      },
      {
        id: "04",
        title: "Drupal Migration Services",
        desc: "Migrate your existing website to Drupal with minimal disruption. We handle complex migrations for Noida businesses, ensuring data integrity and SEO preservation.",
        icon: RefreshCw,
      },
      {
        id: "05",
        title: "Drupal Multisite Development",
        desc: "Build Drupal multisite platforms for managing multiple websites efficiently. Perfect for Noida organizations with multiple departments or regional sites.",
        icon: Globe,
      },
      {
        id: "06",
        title: "Drupal Performance Optimization",
        desc: "Optimize your Drupal website for maximum speed and performance. We implement caching, database optimization, and other techniques for Noida businesses.",
        icon: Zap,
      },
    ],
  },

  frameworkNoida: {
    heading:
      "Expert Framework Development Company in Noida | Modern Web Applications",
    description:
      "Build cutting-edge web applications with our professional framework development services in Noida, using the latest technologies for optimal performance.",
    services: [
      {
        id: "01",
        title: "Framework Development Noida",
        desc: "Create modern web applications using popular frameworks. Our Noida developers specialize in React, Angular, Vue.js, and other frameworks for building dynamic applications.",
        icon: Code2,
      },
      {
        id: "02",
        title: "React.js Development",
        desc: "Build fast, interactive user interfaces with React.js. Perfect for Noida businesses needing single-page applications with excellent user experience.",
        icon: Cpu,
      },
      {
        id: "03",
        title: "Angular Development",
        desc: "Create robust enterprise applications with Angular framework. Ideal for Noida businesses needing scalable, maintainable solutions with TypeScript.",
        icon: Settings,
      },
      {
        id: "04",
        title: "Vue.js Development",
        desc: "Build progressive web applications with Vue.js. Perfect for Noida startups and businesses needing lightweight, flexible frontend solutions.",
        icon: Zap,
      },
      {
        id: "05",
        title: "Node.js Backend Development",
        desc: "Create high-performance backend services with Node.js. Our Noida developers build scalable APIs and server-side applications for modern web projects.",
        icon: Server,
      },
      {
        id: "06",
        title: "Full Stack Framework Development",
        desc: "Get complete web applications using MERN or MEAN stacks. We provide end-to-end development services for Noida businesses needing full-stack solutions.",
        icon: Layers,
      },
    ],
  },

  prestashopEcommerce: {
    heading:
      "Professional PrestaShop E-commerce Development | Online Store Solutions",
    description:
      "Launch powerful online stores with our expert PrestaShop development services, creating feature-rich e-commerce platforms that drive sales and growth.",
    services: [
      {
        id: "01",
        title: "PrestaShop Development",
        desc: "Build feature-rich online stores using PrestaShop e-commerce platform. We create custom PrestaShop solutions with advanced features for product management, orders, and customer relationships.",
        icon: ShoppingCart,
      },
      {
        id: "02",
        title: "Custom PrestaShop Theme Development",
        desc: "Get unique PrestaShop themes designed specifically for your brand. We create responsive, conversion-optimized themes that provide excellent shopping experiences.",
        icon: Layout,
      },
      {
        id: "03",
        title: "PrestaShop Module Development",
        desc: "Extend your PrestaShop functionality with custom modules. Our developers create secure, efficient modules for payment gateways, shipping methods, and special features.",
        icon: Puzzle,
      },
      {
        id: "04",
        title: "PrestaShop Migration Services",
        desc: "Migrate your existing online store to PrestaShop safely and efficiently. We handle product data, customer information, and order history transfer with care.",
        icon: RefreshCw,
      },
      {
        id: "05",
        title: "PrestaShop SEO Optimization",
        desc: "Optimize your PrestaShop store for search engines. We implement SEO best practices, technical optimizations, and content strategies to improve your rankings.",
        icon: TrendingUp,
      },
      {
        id: "06",
        title: "PrestaShop Maintenance & Support",
        desc: "Keep your PrestaShop store running smoothly with our maintenance services. We provide updates, security patches, performance optimization, and technical support.",
        icon: Shield,
      },
    ],
  },

  wordpressEcommerce: {
    heading: "Expert WordPress E-commerce Development | WooCommerce Solutions",
    description:
      "Create powerful online stores with our professional WordPress e-commerce development services using WooCommerce, building custom solutions that maximize sales.",
    services: [
      {
        id: "01",
        title: "WordPress E-commerce Development",
        desc: "Build feature-rich online stores using WordPress and WooCommerce. We create custom e-commerce solutions with advanced features for product management, payments, and customer experience.",
        icon: ShoppingCart,
      },
      {
        id: "02",
        title: "Custom WooCommerce Theme Development",
        desc: "Get unique WooCommerce themes designed specifically for your brand. We create responsive, conversion-focused themes that provide excellent shopping experiences across all devices.",
        icon: Layout,
      },
      {
        id: "03",
        title: "WooCommerce Plugin Development",
        desc: "Extend your WooCommerce functionality with custom plugins. Our developers create secure, efficient plugins for special features, integrations, and custom requirements.",
        icon: Puzzle,
      },
      {
        id: "04",
        title: "WooCommerce Migration Services",
        desc: "Migrate your existing online store to WooCommerce safely and efficiently. We handle product data, customer information, and order history transfer with precision.",
        icon: RefreshCw,
      },
      {
        id: "05",
        title: "WooCommerce Payment Gateway Integration",
        desc: "Integrate multiple payment gateways into your WooCommerce store. We set up secure payment processing with popular options like PayPal, Stripe, Razorpay, and more.",
        icon: CreditCard,
      },
      {
        id: "06",
        title: "WooCommerce Maintenance & Optimization",
        desc: "Keep your WooCommerce store running at peak performance. We provide regular updates, security enhancements, speed optimization, and technical support.",
        icon: Shield,
      },
    ],
  },
};
