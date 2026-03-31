
export interface StatItem {
  end: number;
  suffix: string;
  label: string;
  color: string;
}

export interface TrustContentItem {
  heading: string;
  description: string;
  stats: StatItem[];
}
const webDevStats = [
  { end: 5000, suffix: "+", label: "Website\nDeveloped", color: "text-orange-400" },
  { end: 99, suffix: "%", label: "Client\nSatisfaction", color: "text-purple-400" },
  { end: 7, suffix: "+", label: "Years of \nJourney", color: "text-pink-400" },
  { end: 3000, suffix: "+", label: "Happy\nCustomers", color: "text-violet-400" },
  { end: 50, suffix: "+", label: "Clients\nWorldwide", color: "text-yellow-400" },
];

export interface TrustContent {
  default: TrustContentItem;
  thane: TrustContentItem;
  pune: TrustContentItem;
  nagpur: TrustContentItem;
  kuwait: TrustContentItem;
  chennai: TrustContentItem;
  bangalore: TrustContentItem;
  delhi: TrustContentItem;
  noida: TrustContentItem;
  kanpur: TrustContentItem;
  faridabad: TrustContentItem;
  hyderabad: TrustContentItem;
  ahmedabad: TrustContentItem;
  abuDhabiUAE: TrustContentItem;
  sharjahUAE: TrustContentItem;
  patna: TrustContentItem;
  meerut: TrustContentItem;
  kolkata: TrustContentItem;
  dubaiUAE: TrustContentItem;
  chandigarh: TrustContentItem;
  indore: TrustContentItem;
  surat: TrustContentItem;
  mumbai: TrustContentItem;
  gurugram: TrustContentItem;
  delhiNCR: TrustContentItem;
  andheriMumbai: TrustContentItem;
  amsterdam: TrustContentItem;
  ranchi: TrustContentItem;
  newyorkUS: TrustContentItem;
  londonUK: TrustContentItem;
  jaipur: TrustContentItem;
  dohaQatar: TrustContentItem;
  bhopal: TrustContentItem;
  gonda: TrustContentItem;
  rohini: TrustContentItem;
  lucknow: TrustContentItem;
  ghaziabad: TrustContentItem;
  NewDelhi: TrustContentItem;
  agra: TrustContentItem;
  
  noidaWebDesign: TrustContentItem;
  psdToHtmlNoida: TrustContentItem;
  phpDevelopmentNoida: TrustContentItem;
wordpressNoida: TrustContentItem;
joomlaNoida: TrustContentItem;
drupalNoida: TrustContentItem;
frameworkNoida: TrustContentItem;
prestashopEcommerce: TrustContentItem;
wordpressEcommerce: TrustContentItem;
} 

export const trustContent: TrustContent = {
  default: {
    heading: "Why Businesses Trust Laser Web Maker for Web Development?",
    description:
      "Laser Web Maker empowers businesses with innovative, scalable, and secure web solutions. Our expert team combines creativity and technology to build high-performing websites that drive real business growth.",
    stats: [
      { end: 5000, suffix: "+", label: "Website\nDeveloped", color: "text-orange-400" },
      { end: 99, suffix: "%", label: "Client\nSatisfaction", color: "text-purple-400" },
      { end: 7, suffix: "+", label: "Years of \nJourney", color: "text-pink-400" },
      { end: 3000, suffix: "+", label: "Happy\nCustomers", color: "text-violet-400" },
      { end: 50, suffix: "+", label: "Clients\nWorldwide", color: "text-yellow-400" },
    ],
  },

  thane: {
    heading: "Why Companies in Mumbai Trust Laser Web Maker?",
    description:
      "Mumbai brands rely on us for high-performance and conversion-focused websites.",
    stats: [
      { end: 5000, suffix: "+", label: "Website\nDeveloped", color: "text-orange-400" },
      { end: 99, suffix: "%", label: "Client\nSatisfaction", color: "text-purple-400" },
      { end: 7, suffix: "+", label: "Years of\nJourney", color: "text-pink-400" },
      { end: 3000, suffix: "+", label: "Happy\nCustomers", color: "text-violet-400" },
      { end: 50, suffix: "+", label: "Clients\nWorldwide", color: "text-yellow-400" },
    ],
  },
  pune: {
    heading: "Why Businesses Trust Our Web Development Services in Pune",
  description:
    "We empower Pune businesses with innovative, scalable, and secure web solutions. Our expert team combines creativity and technology to deliver high-performing websites that drive real results and business growth.",
  stats: [
      { end: 5000, suffix: "+", label: "Website\nDeveloped", color: "text-orange-400" },
      { end: 99, suffix: "%", label: "Client\nSatisfaction", color: "text-purple-400" },
      { end: 7, suffix: "+", label: "Years of \nJourney", color: "text-pink-400" },
      { end: 3000, suffix: "+", label: "Happy\nCustomers", color: "text-violet-400" },
      { end: 50, suffix: "+", label: "Clients\nWorldwide", color: "text-yellow-400" },
    ],
  },
  nagpur: {
    heading: "Why Businesses Trust Our Web Development Services in Nagpur",
  description:
    "We empower Nagpur businesses with innovative, scalable, and secure web solutions. Our expert team combines creativity and technology to deliver high-performing websites that drive real results and business growth.",
  stats: [
      { end: 5000, suffix: "+", label: "Website\nDeveloped", color: "text-orange-400" },
      { end: 99, suffix: "%", label: "Client\nSatisfaction", color: "text-purple-400" },
      { end: 7, suffix: "+", label: "Years of \nJourney", color: "text-pink-400" },
      { end: 3000, suffix: "+", label: "Happy\nCustomers", color: "text-violet-400" },
      { end: 50, suffix: "+", label: "Clients\nWorldwide", color: "text-yellow-400" },
    ],
  },
  hyderabad: {
    heading: "Why Businesses Trust Our Web Development Services in Hyderabad",
  description:
    "We empower Hyderabad businesses with innovative, scalable, and secure web solutions. Our expert team combines creativity and technology to deliver high-performing websites that drive real results and business growth.",
  stats: [
      { end: 5000, suffix: "+", label: "Website\nDeveloped", color: "text-orange-400" },
      { end: 99, suffix: "%", label: "Client\nSatisfaction", color: "text-purple-400" },
      { end: 7, suffix: "+", label: "Years of \nJourney", color: "text-pink-400" },
      { end: 3000, suffix: "+", label: "Happy\nCustomers", color: "text-violet-400" },
      { end: 50, suffix: "+", label: "Clients\nWorldwide", color: "text-yellow-400" },
    ],
  },
  kuwait: {
    heading: "Why Businesses Trust Our Web Development Services in Kuwait",
  description:
    "We empower Kuwait businesses with innovative, scalable, and secure web solutions. Our expert team combines creativity and technology to deliver high-performing websites that drive real results and business growth.",
  stats: [
      { end: 5000, suffix: "+", label: "Website\nDeveloped", color: "text-orange-400" },
      { end: 99, suffix: "%", label: "Client\nSatisfaction", color: "text-purple-400" },
      { end: 7, suffix: "+", label: "Years of \nJourney", color: "text-pink-400" },
      { end: 3000, suffix: "+", label: "Happy\nCustomers", color: "text-violet-400" },
      { end: 50, suffix: "+", label: "Clients\nWorldwide", color: "text-yellow-400" },
    ],
  },
  chennai: {
    heading: "Why Businesses Trust Our Web Development Services in Chennai",
  description:
    "We empower Chennai businesses with innovative, scalable, and secure web solutions. Our expert team combines creativity and technology to deliver high-performing websites that drive real results and business growth.",
  stats: [
      { end: 5000, suffix: "+", label: "Website\nDeveloped", color: "text-orange-400" },
      { end: 99, suffix: "%", label: "Client\nSatisfaction", color: "text-purple-400" },
      { end: 7, suffix: "+", label: "Years of \nJourney", color: "text-pink-400" },
      { end: 3000, suffix: "+", label: "Happy\nCustomers", color: "text-violet-400" },
      { end: 50, suffix: "+", label: "Clients\nWorldwide", color: "text-yellow-400" },
    ],
  },
  bangalore: {
    heading: "Why Businesses Trust Our Web Development Services in Bangalore",
  description:
    "We empower Bangalore businesses with innovative, scalable, and secure web solutions. Our expert team combines creativity and technology to deliver high-performing websites that drive real results and business growth.",
  stats: [
      { end: 5000, suffix: "+", label: "Website\nDeveloped", color: "text-orange-400" },
      { end: 99, suffix: "%", label: "Client\nSatisfaction", color: "text-purple-400" },
      { end: 7, suffix: "+", label: "Years of \nJourney", color: "text-pink-400" },
      { end: 3000, suffix: "+", label: "Happy\nCustomers", color: "text-violet-400" },
      { end: 50, suffix: "+", label: "Clients\nWorldwide", color: "text-yellow-400" },
    ],
  },
  delhi: {
    heading: "Why Businesses Trust Our Web Development Services in Delhi",
  description:
    "We empower Delhi businesses with innovative, scalable, and secure web solutions. Our expert team combines creativity and technology to deliver high-performing websites that drive real results and business growth.",
  stats: [
      { end: 5000, suffix: "+", label: "Website\nDeveloped", color: "text-orange-400" },
      { end: 99, suffix: "%", label: "Client\nSatisfaction", color: "text-purple-400" },
      { end: 7, suffix: "+", label: "Years of \nJourney", color: "text-pink-400" },
      { end: 3000, suffix: "+", label: "Happy\nCustomers", color: "text-violet-400" },
      { end: 50, suffix: "+", label: "Clients\nWorldwide", color: "text-yellow-400" },
    ],
  },
  noida: {
    heading: "Why Businesses Trust Our Web Development Services in Noida",
  description:
    "We empower Noida businesses with innovative, scalable, and secure web solutions. Our expert team combines creativity and technology to deliver high-performing websites that drive real results and business growth.",
  stats: [
      { end: 5000, suffix: "+", label: "Website\nDeveloped", color: "text-orange-400" },
      { end: 99, suffix: "%", label: "Client\nSatisfaction", color: "text-purple-400" },
      { end: 7, suffix: "+", label: "Years of \nJourney", color: "text-pink-400" },
      { end: 3000, suffix: "+", label: "Happy\nCustomers", color: "text-violet-400" },
      { end: 50, suffix: "+", label: "Clients\nWorldwide", color: "text-yellow-400" },
    ],
  },
  kanpur: {
    heading: "Why Businesses Trust Our Web Development Services in Kanpur",
  description:
    "We empower Kanpur businesses with innovative, scalable, and secure web solutions. Our expert team combines creativity and technology to deliver high-performing websites that drive real results and business growth.",
  stats: [
      { end: 5000, suffix: "+", label: "Website\nDeveloped", color: "text-orange-400" },
      { end: 99, suffix: "%", label: "Client\nSatisfaction", color: "text-purple-400" },
      { end: 7, suffix: "+", label: "Years of \nJourney", color: "text-pink-400" },
      { end: 3000, suffix: "+", label: "Happy\nCustomers", color: "text-violet-400" },
      { end: 50, suffix: "+", label: "Clients\nWorldwide", color: "text-yellow-400" },
    ],
  },
  faridabad: {
    heading: "Why Businesses Trust Our Web Development Services in Faridabad",
  description:
    "We empower Faridabad businesses with innovative, scalable, and secure web solutions. Our expert team combines creativity and technology to deliver high-performing websites that drive real results and business growth.",
  stats: [
      { end: 5000, suffix: "+", label: "Website\nDeveloped", color: "text-orange-400" },
      { end: 99, suffix: "%", label: "Client\nSatisfaction", color: "text-purple-400" },
      { end: 7, suffix: "+", label: "Years of \nJourney", color: "text-pink-400" },
      { end: 3000, suffix: "+", label: "Happy\nCustomers", color: "text-violet-400" },
      { end: 50, suffix: "+", label: "Clients\nWorldwide", color: "text-yellow-400" },
    ],
  },
  ahmedabad: {
    heading: "Why Businesses Trust Our Web Development Services in Ahmedabad",
  description:
    "We empower Ahmedabad businesses with innovative, scalable, and secure web solutions. Our expert team combines creativity and technology to deliver high-performing websites that drive real results and business growth.",
  stats: [
      { end: 5000, suffix: "+", label: "Website\nDeveloped", color: "text-orange-400" },
      { end: 99, suffix: "%", label: "Client\nSatisfaction", color: "text-purple-400" },
      { end: 7, suffix: "+", label: "Years of \nJourney", color: "text-pink-400" },
      { end: 3000, suffix: "+", label: "Happy\nCustomers", color: "text-violet-400" },
      { end: 50, suffix: "+", label: "Clients\nWorldwide", color: "text-yellow-400" },
    ],
  },
  abuDhabiUAE: {
    heading: "Why Businesses Trust Our Web Development Services in Abu Dhabi UAE",
  description:
    "We empower Abu Dhabi UAE businesses with innovative, scalable, and secure web solutions. Our expert team combines creativity and technology to deliver high-performing websites that drive real results and business growth.",
  stats: [
      { end: 5000, suffix: "+", label: "Website\nDeveloped", color: "text-orange-400" },
      { end: 99, suffix: "%", label: "Client\nSatisfaction", color: "text-purple-400" },
      { end: 7, suffix: "+", label: "Years of \nJourney", color: "text-pink-400" },
      { end: 3000, suffix: "+", label: "Happy\nCustomers", color: "text-violet-400" },
      { end: 50, suffix: "+", label: "Clients\nWorldwide", color: "text-yellow-400" },
    ],
  },
  sharjahUAE: {
    heading: "Why Businesses Trust Our Web Development Services in Sharjah UAE",
  description:
    "We empower Sharjah UAE businesses with innovative, scalable, and secure web solutions. Our expert team combines creativity and technology to deliver high-performing websites that drive real results and business growth.",
  stats: [
      { end: 5000, suffix: "+", label: "Website\nDeveloped", color: "text-orange-400" },
      { end: 99, suffix: "%", label: "Client\nSatisfaction", color: "text-purple-400" },
      { end: 7, suffix: "+", label: "Years of \nJourney", color: "text-pink-400" },
      { end: 3000, suffix: "+", label: "Happy\nCustomers", color: "text-violet-400" },
      { end: 50, suffix: "+", label: "Clients\nWorldwide", color: "text-yellow-400" },
    ],
  },
  patna: {
    heading: "Why Businesses Trust Our Web Development Services in Patna",
  description:
    "We empower Patna businesses with innovative, scalable, and secure web solutions. Our expert team combines creativity and technology to deliver high-performing websites that drive real results and business growth.",
  stats: [
      { end: 5000, suffix: "+", label: "Website\nDeveloped", color: "text-orange-400" },
      { end: 99, suffix: "%", label: "Client\nSatisfaction", color: "text-purple-400" },
      { end: 7, suffix: "+", label: "Years of \nJourney", color: "text-pink-400" },
      { end: 3000, suffix: "+", label: "Happy\nCustomers", color: "text-violet-400" },
      { end: 50, suffix: "+", label: "Clients\nWorldwide", color: "text-yellow-400" },
    ],
  },
  meerut: {
    heading: "Why Businesses Trust Our Web Development Services in Meerut",
  description:
    "We empower Meerut businesses with innovative, scalable, and secure web solutions. Our expert team combines creativity and technology to deliver high-performing websites that drive real results and business growth.",
  stats: [
      { end: 5000, suffix: "+", label: "Website\nDeveloped", color: "text-orange-400" },
      { end: 99, suffix: "%", label: "Client\nSatisfaction", color: "text-purple-400" },
      { end: 7, suffix: "+", label: "Years of \nJourney", color: "text-pink-400" },
      { end: 3000, suffix: "+", label: "Happy\nCustomers", color: "text-violet-400" },
      { end: 50, suffix: "+", label: "Clients\nWorldwide", color: "text-yellow-400" },
    ],
  },
  kolkata: {
    heading: "Why Businesses Trust Our Web Development Services in Kolkata",
  description:
    "We empower Kolkata businesses with innovative, scalable, and secure web solutions. Our expert team combines creativity and technology to deliver high-performing websites that drive real results and business growth.",
  stats: [
      { end: 5000, suffix: "+", label: "Website\nDeveloped", color: "text-orange-400" },
      { end: 99, suffix: "%", label: "Client\nSatisfaction", color: "text-purple-400" },
      { end: 7, suffix: "+", label: "Years of \nJourney", color: "text-pink-400" },
      { end: 3000, suffix: "+", label: "Happy\nCustomers", color: "text-violet-400" },
      { end: 50, suffix: "+", label: "Clients\nWorldwide", color: "text-yellow-400" },
    ],
  },
  dubaiUAE: {
    heading: "Why Businesses Trust Our Web Development Services in Dubai UAE",
  description:
    "We empower Dubai UAE businesses with innovative, scalable, and secure web solutions. Our expert team combines creativity and technology to deliver high-performing websites that drive real results and business growth.",
  stats: [
      { end: 5000, suffix: "+", label: "Website\nDeveloped", color: "text-orange-400" },
      { end: 99, suffix: "%", label: "Client\nSatisfaction", color: "text-purple-400" },
      { end: 7, suffix: "+", label: "Years of \nJourney", color: "text-pink-400" },
      { end: 3000, suffix: "+", label: "Happy\nCustomers", color: "text-violet-400" },
      { end: 50, suffix: "+", label: "Clients\nWorldwide", color: "text-yellow-400" },
    ],
  },
  chandigarh: {
    heading: "Why Businesses Trust Our Web Development Services in Chandigarh",
  description:
    "We empower Chandigarh businesses with innovative, scalable, and secure web solutions. Our expert team combines creativity and technology to deliver high-performing websites that drive real results and business growth.",
  stats: [
      { end: 5000, suffix: "+", label: "Website\nDeveloped", color: "text-orange-400" },
      { end: 99, suffix: "%", label: "Client\nSatisfaction", color: "text-purple-400" },
      { end: 7, suffix: "+", label: "Years of \nJourney", color: "text-pink-400" },
      { end: 3000, suffix: "+", label: "Happy\nCustomers", color: "text-violet-400" },
      { end: 50, suffix: "+", label: "Clients\nWorldwide", color: "text-yellow-400" },
    ],
  },
  indore: {
    heading: "Why Businesses Trust Our Web Development Services in Indore",
  description:
    "We empower Indore businesses with innovative, scalable, and secure web solutions. Our expert team combines creativity and technology to deliver high-performing websites that drive real results and business growth.",
  stats: [
      { end: 5000, suffix: "+", label: "Website\nDeveloped", color: "text-orange-400" },
      { end: 99, suffix: "%", label: "Client\nSatisfaction", color: "text-purple-400" },
      { end: 7, suffix: "+", label: "Years of \nJourney", color: "text-pink-400" },
      { end: 3000, suffix: "+", label: "Happy\nCustomers", color: "text-violet-400" },
      { end: 50, suffix: "+", label: "Clients\nWorldwide", color: "text-yellow-400" },
    ],
  },
  surat: {
    heading: "Why Businesses Trust Our Web Development Services in Surat",
  description:
    "We empower Surat businesses with innovative, scalable, and secure web solutions. Our expert team combines creativity and technology to deliver high-performing websites that drive real results and business growth.",
  stats: [
      { end: 5000, suffix: "+", label: "Website\nDeveloped", color: "text-orange-400" },
      { end: 99, suffix: "%", label: "Client\nSatisfaction", color: "text-purple-400" },
      { end: 7, suffix: "+", label: "Years of \nJourney", color: "text-pink-400" },
      { end: 3000, suffix: "+", label: "Happy\nCustomers", color: "text-violet-400" },
      { end: 50, suffix: "+", label: "Clients\nWorldwide", color: "text-yellow-400" },
    ],
  },
  mumbai: {
    heading: "Why Businesses Trust Our Web Development Services in Mumbai",
  description:
    "We empower Mumbai businesses with innovative, scalable, and secure web solutions. Our expert team combines creativity and technology to deliver high-performing websites that drive real results and business growth.",
  stats: [
      { end: 5000, suffix: "+", label: "Website\nDeveloped", color: "text-orange-400" },
      { end: 99, suffix: "%", label: "Client\nSatisfaction", color: "text-purple-400" },
      { end: 7, suffix: "+", label: "Years of \nJourney", color: "text-pink-400" },
      { end: 3000, suffix: "+", label: "Happy\nCustomers", color: "text-violet-400" },
      { end: 50, suffix: "+", label: "Clients\nWorldwide", color: "text-yellow-400" },
    ],
  },
  gurugram: {
    heading: "Why Businesses Trust Our Web Development Services in Gurugram",
  description:
    "We empower Gurugram businesses with innovative, scalable, and secure web solutions. Our expert team combines creativity and technology to deliver high-performing websites that drive real results and business growth.",
  stats: [
      { end: 5000, suffix: "+", label: "Website\nDeveloped", color: "text-orange-400" },
      { end: 99, suffix: "%", label: "Client\nSatisfaction", color: "text-purple-400" },
      { end: 7, suffix: "+", label: "Years of \nJourney", color: "text-pink-400" },
      { end: 3000, suffix: "+", label: "Happy\nCustomers", color: "text-violet-400" },
      { end: 50, suffix: "+", label: "Clients\nWorldwide", color: "text-yellow-400" },
    ],
  },
  delhiNCR: {
    heading: "Why Businesses Trust Our Web Development Services in Delhi NCR",
  description:
    "We empower Delhi NCR businesses with innovative, scalable, and secure web solutions. Our expert team combines creativity and technology to deliver high-performing websites that drive real results and business growth.",
  stats: [
      { end: 5000, suffix: "+", label: "Website\nDeveloped", color: "text-orange-400" },
      { end: 99, suffix: "%", label: "Client\nSatisfaction", color: "text-purple-400" },
      { end: 7, suffix: "+", label: "Years of \nJourney", color: "text-pink-400" },
      { end: 3000, suffix: "+", label: "Happy\nCustomers", color: "text-violet-400" },
      { end: 50, suffix: "+", label: "Clients\nWorldwide", color: "text-yellow-400" },
    ],
  },
  andheriMumbai: {
    heading: "Why Businesses Trust Our Web Development Services in Andheri Mumbai",
  description:
    "We empower Andheri Mumbai businesses with innovative, scalable, and secure web solutions. Our expert team combines creativity and technology to deliver high-performing websites that drive real results and business growth.",
  stats: [
      { end: 5000, suffix: "+", label: "Website\nDeveloped", color: "text-orange-400" },
      { end: 99, suffix: "%", label: "Client\nSatisfaction", color: "text-purple-400" },
      { end: 7, suffix: "+", label: "Years of \nJourney", color: "text-pink-400" },
      { end: 3000, suffix: "+", label: "Happy\nCustomers", color: "text-violet-400" },
      { end: 50, suffix: "+", label: "Clients\nWorldwide", color: "text-yellow-400" },
    ],
  },
  amsterdam: {
    heading: "Why Businesses Trust Our Web Development Services in Amsterdam",
  description:
    "We empower Amsterdam businesses with innovative, scalable, and secure web solutions. Our expert team combines creativity and technology to deliver high-performing websites that drive real results and business growth.",
  stats: [
      { end: 5000, suffix: "+", label: "Website\nDeveloped", color: "text-orange-400" },
      { end: 99, suffix: "%", label: "Client\nSatisfaction", color: "text-purple-400" },
      { end: 7, suffix: "+", label: "Years of \nJourney", color: "text-pink-400" },
      { end: 3000, suffix: "+", label: "Happy\nCustomers", color: "text-violet-400" },
      { end: 50, suffix: "+", label: "Clients\nWorldwide", color: "text-yellow-400" },
    ],
  },
  ranchi: {
    heading: "Why Businesses Trust Our Web Development Services in Ranchi",
  description:
    "We empower Ranchi businesses with innovative, scalable, and secure web solutions. Our expert team combines creativity and technology to deliver high-performing websites that drive real results and business growth.",
  stats: [
      { end: 5000, suffix: "+", label: "Website\nDeveloped", color: "text-orange-400" },
      { end: 99, suffix: "%", label: "Client\nSatisfaction", color: "text-purple-400" },
      { end: 7, suffix: "+", label: "Years of \nJourney", color: "text-pink-400" },
      { end: 3000, suffix: "+", label: "Happy\nCustomers", color: "text-violet-400" },
      { end: 50, suffix: "+", label: "Clients\nWorldwide", color: "text-yellow-400" },
    ],
  },
  newyorkUS: {
    heading: "Why Businesses Trust Our Web Development Services in New York US",
  description:
    "We empower New York US businesses with innovative, scalable, and secure web solutions. Our expert team combines creativity and technology to deliver high-performing websites that drive real results and business growth.",
  stats: [
      { end: 5000, suffix: "+", label: "Website\nDeveloped", color: "text-orange-400" },
      { end: 99, suffix: "%", label: "Client\nSatisfaction", color: "text-purple-400" },
      { end: 7, suffix: "+", label: "Years of \nJourney", color: "text-pink-400" },
      { end: 3000, suffix: "+", label: "Happy\nCustomers", color: "text-violet-400" },
      { end: 50, suffix: "+", label: "Clients\nWorldwide", color: "text-yellow-400" },
    ],
  },
  londonUK: {
    heading: "Why Businesses Trust Our Web Development Services in London UK",
  description:
    "We empower London UK businesses with innovative, scalable, and secure web solutions. Our expert team combines creativity and technology to deliver high-performing websites that drive real results and business growth.",
  stats: [
      { end: 5000, suffix: "+", label: "Website\nDeveloped", color: "text-orange-400" },
      { end: 99, suffix: "%", label: "Client\nSatisfaction", color: "text-purple-400" },
      { end: 7, suffix: "+", label: "Years of \nJourney", color: "text-pink-400" },
      { end: 3000, suffix: "+", label: "Happy\nCustomers", color: "text-violet-400" },
      { end: 50, suffix: "+", label: "Clients\nWorldwide", color: "text-yellow-400" },
    ],
  },
  jaipur: {
    heading: "Why Businesses Trust Our Web Development Services in Jaipur",
  description:
    "We empower Jaipur businesses with innovative, scalable, and secure web solutions. Our expert team combines creativity and technology to deliver high-performing websites that drive real results and business growth.",
  stats: [
      { end: 5000, suffix: "+", label: "Website\nDeveloped", color: "text-orange-400" },
      { end: 99, suffix: "%", label: "Client\nSatisfaction", color: "text-purple-400" },
      { end: 7, suffix: "+", label: "Years of \nJourney", color: "text-pink-400" },
      { end: 3000, suffix: "+", label: "Happy\nCustomers", color: "text-violet-400" },
      { end: 50, suffix: "+", label: "Clients\nWorldwide", color: "text-yellow-400" },
    ],
  },
  dohaQatar: {
    heading: "Why Businesses Trust Our Web Development Services in Doha Qatar",
  description:
    "We empower Doha Qatar businesses with innovative, scalable, and secure web solutions. Our expert team combines creativity and technology to deliver high-performing websites that drive real results and business growth.",
  stats: [
      { end: 5000, suffix: "+", label: "Website\nDeveloped", color: "text-orange-400" },
      { end: 99, suffix: "%", label: "Client\nSatisfaction", color: "text-purple-400" },
      { end: 7, suffix: "+", label: "Years of \nJourney", color: "text-pink-400" },
      { end: 3000, suffix: "+", label: "Happy\nCustomers", color: "text-violet-400" },
      { end: 50, suffix: "+", label: "Clients\nWorldwide", color: "text-yellow-400" },
    ],
  },

   bhopal: {
    heading: "Why Businesses Rely on Our Web Development Services in Bhopal",
    description:
      "In Bhopal, we help businesses thrive with innovative, secure, and high-performing web solutions. Our skilled team blends creativity and technology to craft websites that boost engagement and drive growth.",
    stats: webDevStats,
  },

  gonda: {
    heading: "Trusted Web Development Services for Businesses in Gonda",
    description:
      "Our Gonda-based web development services empower companies with modern, secure, and scalable websites. We focus on performance, creativity, and business impact to help clients achieve their goals.",
    stats: webDevStats,
  },

  rohini: {
    heading: "Web Development Solutions That Businesses Trust in Rohini-Delhi",
    description:
      "In Rohini-Delhi, we provide businesses with creative and reliable web development solutions. Our team combines cutting-edge technology with design expertise to deliver websites that fuel growth.",
    stats: webDevStats,
  },

  lucknow: {
    heading: "Why Companies Choose Our Web Development Services in Lucknow",
    description:
      "Our Lucknow services empower businesses with innovative and secure web solutions. We focus on creating websites that perform seamlessly and contribute directly to business growth.",
    stats: webDevStats,
  },

  ghaziabad: {
    heading: "Reliable Web Development Services for Businesses in Ghaziabad",
    description:
      "In Ghaziabad, we craft high-performing, creative, and secure websites that help businesses grow. Our team focuses on delivering measurable results and client satisfaction every time.",
    stats: webDevStats,
  },

  NewDelhi: {
    heading: "Top-Notch Web Development Services in Delhi",
    description:
      "Our Delhi-based web development services help businesses build secure, innovative, and high-performing websites. We focus on delivering solutions that drive engagement, revenue, and long-term growth.",
    stats: webDevStats,
  },

  agra: {
    heading: "Empowering Businesses with Web Development in Agra",
    description:
      "In Agra, we offer businesses creative, secure, and performance-driven web development services. Our team is dedicated to building websites that deliver results and enhance growth.",
    stats: webDevStats,
  },

 noidaWebDesign: {
  heading: "Crafting Digital Experiences: Your Premier Web Design Partner in Noida",
  description: "As a leading website designing company in Noida, we blend stunning visuals with intuitive user experience (UX). We create websites that not only look exceptional but also drive engagement and convert visitors into customers for your business.",
  stats: webDevStats, // (Assuming you have a similar stats array for design)
},
psdToHtmlNoida: {
  heading: "Precision-Coded Websites: Expert PSD to HTML Conversion in Noida",
  description: "Turn your visual designs into flawless, pixel-perfect, and responsive websites. Our PSD to HTML company in Noida, India, ensures clean, fast-loading, and cross-browser compatible code that brings your designer's vision to life on the web.",
  stats: webDevStats,
},
phpDevelopmentNoida: {
  heading: "Robust & Scalable Solutions: Professional PHP Website Development in Noida",
  description: "Harness the power of custom PHP development to build dynamic, feature-rich web applications. Our PHP website development company in Noida creates secure, scalable, and high-performance solutions tailored to your unique business logic and needs.",
  stats: webDevStats,
},
wordpressNoida: {
  heading: "Effortless Management with Powerful WordPress Websites in Noida",
  description: "Get a versatile and easy-to-manage website with our expert WordPress development services in Noida. We build custom themes and plugins, ensuring your site is powerful, SEO-friendly, and perfectly aligned with your brand's goals.",
  stats: webDevStats,
},
joomlaNoida: {
  heading: "Building Advanced Portals & Communities with Joomla in Noida",
  description: "For complex content structures and community-driven websites, our Joomla development experts in Noida deliver. We create flexible, powerful, and extensible web solutions perfect for organizations, magazines, and membership sites.",
  stats: webDevStats,
},
drupalNoida: {
  heading: "Enterprise-Grade Digital Experiences with Drupal Development in Noida",
  description: "Need a highly secure and scalable website for large volumes of content? Our Drupal website development company in Noida, India, builds robust, high-performance digital platforms for enterprises and institutions demanding the best.",
  stats: webDevStats,
},
frameworkNoida: {
  heading: "Tailored Web Applications with Modern Framework Development in Noida",
  description: "Leverage cutting-edge technologies like Laravel, React, or Angular for your custom web application. Our framework website development company in Noida builds fast, secure, and sophisticated solutions that give your business a competitive digital edge.",
  stats: webDevStats,
},
prestashopEcommerce: {
  heading: "Launch Your Online Store with Expert PrestaShop E-Commerce Development",
  description: "Specialize in feature-rich, cost-effective online stores using PrestaShop. We provide complete PrestaShop e-commerce website development, creating user-friendly shopping experiences with powerful product management and secure payment gateways to boost your sales.",
  stats: webDevStats, // (Assuming a separate stats array for e-commerce)
},

wordpressEcommerce: {
  heading: "Sell More with WooCommerce: WordPress E-Commerce Development Experts",
  description: "Combine the flexibility of WordPress with the power of WooCommerce. As a leading WordPress ecommerce website development company, we build beautiful, high-converting online stores that are easy to manage and optimized to grow your revenue.",
  stats: webDevStats,
}
};
