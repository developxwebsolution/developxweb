/* =========================
   TYPES
========================= */
export interface CTAContent {
  heading: string;
  description: string;
  buttonText: string;
}

/* =========================
   CTA CONTENT
   Default = NO location
========================= */
export const ctaContent: Record<string, CTAContent> = {
  default: {
    heading: "Ready to Take Your Project to the Next Level?",
    description:
      "Let’s collaborate and transform your vision into a powerful, result-driven digital experience. Partner with us today and make your brand stand out.",
    buttonText: "Get a Quote",
  },

 
  pune: {
    heading: "Looking for Top Web Designers in Pune?",
    description:
      "Partner with Pune's leading web experts near Koregaon Park & Hinjawadi. We craft fast, scalable websites that drive growth for IT & manufacturing businesses.",
    buttonText: "Discuss Your Pune Project",
  },
  thane: {
    heading: "Need Web Development in Thane or Mumbai?",
    description:
      "Serving Thane's growing businesses from Ghodbunder Road to Eastern Express Highway. Get a high-converting website that attracts customers across Mumbai Metropolitan Region.",
    buttonText: "Connect with Thane Experts",
  },
  nagpur: {
    heading: "Ready to Boost Your Nagpur Business Online?",
    description:
      "As Nagpur's (Orange City's) trusted web partners, we design user-friendly websites for logistics, education & local businesses to expand your digital footprint.",
    buttonText: "Get Your Nagpur Website Quote",
  },
  kuwait: {
    heading: "Seeking Professional Web Design in Kuwait?",
    description:
      "We build stunning, Arabic-English bilingual websites for Kuwaiti businesses in Hawalli & Kuwait City. Elevate your brand and engage the GCC market effectively.",
    buttonText: "Launch Your Kuwait Website",
  },
  chennai: {
    heading: "Want the Best Website Developers in Chennai?",
    description:
      "From OMR to Anna Nagar, we deliver robust web solutions for Chennai's IT, automotive & healthcare sectors. Create a powerful online presence that converts.",
    buttonText: "Start Your Chennai Project",
  },
  bangalore: {
    heading: "Need Cutting-Edge Web Development in Bangalore?",
    description:
      "Bangalore's tech-savvy audience demands excellence. We build high-performance websites & apps for startups and enterprises in Koramangala, Whitefield & beyond.",
    buttonText: "Hire Bangalore Developers",
  },
  delhi: {
    heading: "Want Award-Winning Web Design in Delhi?",
    description:
      "Leading Delhi website agency creating stunning digital experiences for businesses in Connaught Place, Saket & across NCR. Drive visibility and sales growth.",
    buttonText: "Get Your Delhi Website Audit",
  },
  noida: {
    heading: "Looking for Affordable Web Development in Noida?",
    description:
      "Premium yet cost-effective website solutions for Noida businesses. Specialists in SEO-friendly sites for startups and growing companies.",
    buttonText: "Talk to Noida Developers",
  },
  kanpur: {
    heading: "Ready to Grow Your Kanpur Business Online?",
    description:
      "Kanpur's trusted website partner for leather, textile & local commerce. We create mobile-first websites that help you reach more customers in Uttar Pradesh.",
    buttonText: "Build Your Kanpur Website",
  },
  faridabad: {
    heading: "Need a Modern Website in Faridabad?",
    description:
      "Serving Faridabad's industrial and residential sectors from Sector 14 to NIT. We develop responsive, lead-generating websites tailored for Delhi-NCR businesses.",
    buttonText: "Start in Faridabad Today",
  },
  hyderabad: {
    heading: "Need a Modern Website in Hyderabad?",
    description:
      "Serving Hyderabad's tech and business hubs from Jubilee Hills to Hitech City. We develop responsive, lead-generating websites tailored for Telangana businesses.",
    buttonText: "Start in Hyderabad Today",
  },

  ahmedabad: {
    heading: "Looking for Expert Web Design in Ahmedabad?",
    description:
      "Ahmedabad's leading web agency crafting stunning websites for businesses in Prahlad Nagar, SG Highway, and beyond. Boost your online presence in Gujarat's commercial capital.",
    buttonText: "Start Your Ahmedabad Project",
  },

  abuDhabiUAE: {
    heading: "Need Premium Web Development in Abu Dhabi?",
    description:
      "Abu Dhabi's top web design agency creating sophisticated, bilingual websites for businesses in Al Reem Island, Khalifa City, and across the UAE. Elevate your brand in the capital.",
    buttonText: "Launch Your Abu Dhabi Site",
  },

  sharjahUAE: {
    heading: "Seeking Professional Web Design in Sharjah?",
    description:
      "Sharjah's trusted web partners building compliant, Arabic-optimized websites for industrial, cultural, and educational sectors. Perfect for businesses in University City and Al Qasimia.",
    buttonText: "Build Your Sharjah Website",
  },

  patna: {
    heading: "Ready to Grow Your Patna Business Online?",
    description:
      "Patna's favorite web development company helping local businesses in Bailey Road, Kankarbagh, and across Bihar. Get a responsive, lead-generating website that works.",
    buttonText: "Create Your Patna Website",
  },

  meerut: {
    heading: "Looking for Affordable Web Design in Meerut?",
    description:
      "Meerut's top-rated web agency specializing in sports goods, textiles, and local commerce websites. We build mobile-friendly sites that drive sales in Uttar Pradesh.",
    buttonText: "Design Your Meerut Website",
  },

  kolkata: {
    heading: "Want the Best Website Developers in Kolkata?",
    description:
      "Kolkata's premier web design agency serving businesses in Salt Lake, New Town, and beyond. We create beautiful, functional websites for the City of Joy.",
    buttonText: "Start Your Kolkata Project",
  },

  dubaiUAE: {
    heading: "Need World-Class Web Development in Dubai?",
    description:
      "Dubai's award-winning web agency crafting luxury websites for businesses in DIFC, Dubai Marina, JLT, and across the UAE. Stand out in the world's most competitive market.",
    buttonText: "Elevate Your Dubai Website",
  },

  chandigarh: {
    heading: "Seeking Modern Web Design in Chandigarh?",
    description:
      "Chandigarh's leading web experts creating sleek, responsive websites for businesses in Sector 17, Mohali, and the Tricity. Perfect for startups, hospitality, and IT.",
    buttonText: "Build Your Chandigarh Site",
  },

  indore: {
    heading: "Looking for Top Web Developers in Indore?",
    description:
      "Indore's fastest-growing web agency building high-performance websites for businesses in Vijay Nagar, MR10, and across Madhya Pradesh. Drive growth with a stunning online presence.",
    buttonText: "Create Your Indore Website",
  },

  surat: {
    heading: "Ready for Expert Web Design in Surat?",
    description:
      "Surat's specialized web agency crafting brilliant websites for diamond, textile, and trading businesses. Get a website that shines as bright as your diamonds.",
    buttonText: "Polish Your Surat Website",
  },
mumbai: {
    heading: "Need Premium Web Development in Mumbai?",
    description:
      "Mumbai's top-rated web agency serving businesses from Bandra to Nariman Point. We create high-performance websites that thrive in India's financial capital.",
    buttonText: "Build Your Mumbai Website",
  },
  gurugram: {
    heading: "Looking for Modern Web Design in Gurugram?",
    description:
      "Gurugram's innovative web experts serving Cyber City, MG Road, and DLF areas. We build cutting-edge websites for corporates, startups, and enterprises.",
    buttonText: "Create Your Gurugram Website",
  },
  delhiNCR: {
    heading: "Want Professional Web Development in Delhi NCR?",
    description:
      "Serving the entire Delhi NCR region with premium web solutions for businesses in Gurgaon, Noida, Faridabad & Ghaziabad. Your complete NCR web partner.",
    buttonText: "Start Your NCR Project",
  },
  andheriMumbai: {
    heading: "Seeking Web Development in Andheri, Mumbai?",
    description:
      "Andheri's specialized web agency serving businesses in Andheri East & West. Perfect for entertainment, media, and corporate websites in Mumbai's western suburbs.",
    buttonText: "Develop Your Andheri Website",
  },
  amsterdam: {
    heading: "Need European Web Design in Amsterdam?",
    description:
      "Amsterdam's international web agency creating innovative, multilingual websites for businesses in the Netherlands and across Europe. Quality meets Dutch precision.",
    buttonText: "Create Your Amsterdam Website",
  },
  ranchi: {
    heading: "Ready for Web Development in Ranchi?",
    description:
      "Ranchi's trusted web partners helping Jharkhand businesses establish a strong online presence. We create affordable, effective websites for local and regional growth.",
    buttonText: "Build Your Ranchi Website",
  },
  newyorkUS: {
    heading: "Looking for Professional Web Design in New York?",
    description:
      "New York's dynamic web agency serving businesses in Manhattan, Brooklyn, and across the tri-state area. We build websites as ambitious as the city that never sleeps.",
    buttonText: "Launch Your New York Website",
  },
  londonUK: {
    heading: "Need Premium Web Development in London, UK?",
    description:
      "London's elite web agency creating sophisticated websites for businesses in the City, Canary Wharf, and across the UK. European excellence meets global standards.",
    buttonText: "Create Your London Website",
  },
  jaipur: {
    heading: "Want Beautiful Web Design in Jaipur?",
    description:
      "Jaipur's creative web experts crafting stunning websites for tourism, handicrafts, and hospitality businesses. Get a website as royal as the Pink City itself.",
    buttonText: "Design Your Jaipur Website",
  },
  dohaQatar: {
    heading: "Seeking Web Development in Doha, Qatar?",
    description:
      "Doha's premier web agency building sophisticated, Arabic-English websites for businesses in West Bay and across Qatar. Perfect for the 2023 World Cup legacy market.",
    buttonText: "Launch Your Doha Website",
  },
    bhopal: {
    heading: "Looking for Web Development in Bhopal?",
    description:
      "Bhopal's leading web agency creating beautiful, functional websites for tourism, education, and government sectors. We build digital solutions as lovely as the City of Lakes.",
    buttonText: "Create Your Bhopal Website",
  },
  gonda: {
    heading: "Need Website Design in Gonda, UP?",
    description:
      "Gonda's trusted web partners helping local businesses establish a strong online presence. We create affordable, effective websites for Uttar Pradesh's growing market.",
    buttonText: "Build Your Gonda Website",
  },
  rohini: {
    heading: "Seeking Web Development in Rohini, Delhi?",
    description:
      "Rohini's specialized web agency serving North Delhi businesses with premium website solutions. Perfect for educational institutions, healthcare, and local commerce.",
    buttonText: "Develop Your Rohini Website",
  },
  lucknow: {
    heading: "Want Premium Web Design in Lucknow?",
    description:
      "Lucknow's premier web agency creating elegant websites that reflect the city's Nawabi heritage. We build digital solutions for government, IT, and hospitality sectors.",
    buttonText: "Create Your Lucknow Website",
  },
  ghaziabad: {
    heading: "Looking for Web Development in Ghaziabad?",
    description:
      "Ghaziabad's expert web team serving industrial and residential sectors across Delhi NCR. We build responsive, lead-generating websites for manufacturing and service businesses.",
    buttonText: "Start Your Ghaziabad Project",
  },
   NewDelhi: {
    heading: "Want Award-Winning Web Design in Delhi?",
    description:
      "Leading Delhi website agency creating stunning digital experiences for businesses in Connaught Place, Saket & across NCR. Drive visibility and sales growth.",
    buttonText: "Get Your Delhi Website Audit",
  },
  agra: {
    heading: "Need Beautiful Web Design in Agra?",
    description:
      "Agra's creative web experts crafting stunning websites for tourism, handicrafts, and hospitality businesses. Get a website as magnificent as the Taj Mahal.",
    buttonText: "Design Your Agra Website",
  },


  // new
  noidaWebDesign: {
  heading: "Searching for the Best Website Designing Company in Noida?",
  description:
    "We are the best website design company in Sector 62 Noida - #1 website design services. We design pixel-perfect, conversion-focused websites so businesses get 3x more leads.",
  buttonText: "Get Your Noida Website Design Now!",
},

psdToHtmlNoida: {
  heading: "Require Expert PSD to HTML Conversion in Noida?",
  description:
    "Noida's best PSD to HTML service provider providing 100% hand-coded and W3C validated responsive website. We take your designs and convert them into high-speed, hand-coded SEO-optimized HTML/CSS.",
  buttonText: "PSD to HTML Conversion",
},

phpDevelopmentNoida: {
  heading: "Need Professional PHP Website Development in Noida?",
  description:
    "Noida's best PHP development company developing custom web applications using Laravel, CodeIgniter & CakePHP. Work for enterprises and startups at scale, securely.",
  buttonText: "Start PHP Development",
},

wordpressNoida: {
  heading: "Looking for WordPress Website Development Noida?",
  description:
    "WordPress designers in Noida making beautiful and performance oriented websites with custom themes and plugins. We make better WordPress sites that rank and convert.",
  buttonText: "Create Your WordPress Site",
},

joomlaNoida: {
  heading: "Search Joomla Website Development Company in Noida?",
  description:
    "Joomla experts in Noida crafting robust secable websites for complex needs. Great for corporate portals, e-learning systems, online communities and membership sites.",
  buttonText: "Grow Your Joomla Site",
},

drupalNoida: {
  heading: "Looking for Drupal Website Development in Noida?",
  description:
    "Noida based Drupal company builds robust websites for high-traffic portals. We develop secure, high-availability Drupal solutions for government and big business.",
  buttonText: "Start Drupal Development",
},

frameworkNoida: {
  heading: "Require Framework based Website development in Noida?",
  description:
    "Noida based Framework Specialist crafting custom applications with Laravel, Symfony, Django and Ruby on Rails. We build sturdy web apps that will scale with your company.",
  buttonText: "Choose Your Framework",
},

prestashopEcommerce: {
  heading: "Looking for PrestaShop E-commerce Development?",
  description:
    "India preferred PrestaShop development agency for beautiful eStore. We develop PrestaShop websites with features addons and easy payment integration.",
  buttonText: "Create Your PrestaShop Store",
},

wordpressEcommerce: {
  heading: "Need WordPress E-commerce Website Development?",
  description:
    "WooCommerce experts on developing great Online Stores with WordPress. Want To Learn More? Turn to us to develop a full featured E-Commerce website complete with inventory system, payment gateway and mobile-friendly responsive design.",
  buttonText: "Create Your WordPress E-commerce",
},


};
