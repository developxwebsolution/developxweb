import { LocationProcess } from "@/components/Process";


type Step = {
  step: string;
  position: "left" | "right";
  title: string;
  description: string;
};
const commonSteps: Step[] = [
  { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
  { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
  { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
  { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
  { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." }
];

export const processData: Record<string, LocationProcess> = {
  default: {
    heading: "Turning Concepts into Digital Products ",
    subheading: "A step-by-step approach to delivering flawless websites.",

    themeColor: "#5E9ED5",
    steps: [
      { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
      { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
      { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
      { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
      { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
    ],
  },
  thane: {
    heading: "Turning Concepts into Digital Products in Mumbai",
    subheading: "From planning to launch, our Thane-based web agency delivers tailored digital solutions for Mumbai Metropolitan Region businesses.",

    themeColor: "#5E9ED5",
    steps: [
      { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
      { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
      { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
      { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
      { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
    ],
  },
  pune: {
    heading: "Turning Concepts into Digital Products in Pune",
    subheading: "A step-by-step approach to delivering flawless websites.",

    themeColor: "#5E9ED5",
    steps: [
      { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
      { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
      { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
      { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
      { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
    ],
  },
  nagpur: {
    heading: "Elevate Your Online Presence with Nagpur's Leading Web Design Studio",
    subheading: "We provide end-to-end website design in Nagpur, creating scalable digital products for Central India's vibrant market.",

    themeColor: "#5E9ED5",
    steps: [
      { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
      { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
      { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
      { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
      { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
    ],
  },
  kuwait: {
    heading: "Building Results-Driven Websites for Businesses in Kuwait",
    subheading: "Our Kuwait web development services blend strategic planning with robust coding to deliver exceptional digital experiences.",

    themeColor: "#5E9ED5",
    steps: [
      { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
      { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
      { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
      { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
      { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
    ],
  },
  chennai: {
    heading: "Innovative Web Design & Development Services in Chennai",
    subheading: "As a leading Chennai software development agency, we transform your vision into a flawless, functional website.",

    themeColor: "#5E9ED5",
    steps: [
      { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
      { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
      { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
      { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
      { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
    ],
  },
  bangalore: {
    heading: "Bangalore's Agile Partner for Digital Product Development",
    subheading: "Leverage expert UI/UX design and development in Bangalore's tech hub to create cutting-edge websites and applications.",

    themeColor: "#5E9ED5",
    steps: [
      { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
      { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
      { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
      { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
      { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
    ],
  },
  delhi: {
    heading: "Strategic Website Design & Development for Delhi NCR Businesses",
    subheading: "Our Delhi web design agency focuses on creating conversion-focused digital products that stand out in a competitive capital market.",

    themeColor: "#5E9ED5",
    steps: [
      { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
      { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
      { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
      { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
      { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
    ],
  },
  noida: {
    heading: "Delivering Robust Web Solutions for Noida's Growing Businesses",
    subheading: "Partner with our Noida development team for seamless, step-by-step website creation that powers your business goals.",

    themeColor: "#5E9ED5",
    steps: [
      { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
      { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
      { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
      { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
      { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
    ],
  },
  kanpur: {
    heading: "Modern Web Design Services to Accelerate Your Business in Kanpur",
    subheading: "We help Kanpur industries and startups establish a powerful online footprint with custom, professionally built websites.",

    themeColor: "#5E9ED5",
    steps: [
      { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
      { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
      { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
      { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
      { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
    ],
  },
  hyderabad: {
    heading: "Modern Web Design Services to Accelerate Your Business in Hyderabad",
    subheading: "We help Hyderabad industries and startups establish a powerful online footprint with custom, professionally built websites.",

    themeColor: "#5E9ED5",
    steps: [
      { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
      { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
      { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
      { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
      { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
    ],
  },
  faridabad: {
    heading: "Faridabad's Full-Service Agency for Website Design & Development",
    subheading: "From initial concept to successful launch, we provide complete digital product development for Faridabad manufacturers and enterprises.",

    themeColor: "#5E9ED5",
    steps: [
      { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
      { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
      { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
      { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
      { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
    ],
  },

   ahmedabad: {
    heading: "Transforming Gujarat's Businesses with Bespoke Web Design in Ahmedabad",
   subheading: "Partner with Ahmedabad's leading web development agency to create digital experiences that connect with your local audience and drive sales.",

    themeColor: "#5E9ED5",
    steps: [
      { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
      { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
      { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
      { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
      { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
    ],
  },

  abuDhabiUAE: {
    heading: "Professional Web Development in Abu Dhabi for Ambitious UAE Enterprises",

subheading: "Our Abu Dhabi web studio delivers premium, strategically-planned websites designed to elevate your brand's authority in the UAE market.",

    themeColor: "#5E9ED5",
    steps: [
      { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
      { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
      { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
      { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
      { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
    ],
  },

  sharjahUAE: {
    heading: "Strategic Website Design Services for Sharjah's Growing Commercial Hub",

subheading: "We build culturally-resonant, high-performance websites that help Sharjah-based businesses attract and engage their ideal customers.",

    themeColor: "#5E9ED5",
    steps: [
      { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
      { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
      { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
      { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
      { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
    ],
  },

  patna: {
  heading: "Empowering Bihar's Growth with Expert Website Design in Patna",

subheading: "Our Patna web design team crafts affordable, professional websites that help local businesses establish a strong and credible online presence.",

    themeColor: "#5E9ED5",
    steps: [
      { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
      { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
      { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
      { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
      { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
    ],
  },

  meerut: {
     heading: "Affordable & Effective Web Solutions for Meerut's MSMEs and Startups",

subheading: "Get a custom website that works for your Meerut business, built through our clear, step-by-step design and development process.",

    themeColor: "#5E9ED5",
    steps: [
      { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
      { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
      { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
      { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
      { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
    ],
  },

  kolkata: {
     heading: "Crafting Culturally-Smart Digital Products from Our Kolkata Web Studio",

subheading: "As a top web design company in Kolkata, we blend creative storytelling with technical expertise to build websites that resonate in Eastern India.",

    themeColor: "#5E9ED5",
    steps: [
      { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
      { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
      { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
      { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
      { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
    ],
  },

  dubaiUAE: {
     heading: "Building Award-Winning Websites for Dubai's Competitive Digital Landscape",

subheading: "Our Dubai web agency combines innovative design with agile development to launch fast, scalable, and stunning websites that convert visitors.",

    themeColor: "#5E9ED5",
    steps: [
      { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
      { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
      { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
      { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
      { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
    ],
  },

  chandigarh: {
    heading: "Modern Web Design & Development for Chandigarh's Premium Brands",

subheading: "Create a sophisticated online identity with our Chandigarh-based team, specializing in clean, user-friendly websites for the Tri-City region.",

    themeColor: "#5E9ED5",
    steps: [
      { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
      { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
      { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
      { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
      { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
    ],
  },

  indore: {
    heading: "Your Local Agency for Dynamic Website Development in Indore",

subheading: "We help Indore’s ambitious businesses succeed online by crafting beautiful, easy-to-manage websites that get you discovered.",

    themeColor: "#5E9ED5",
    steps: [
      { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
      { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
      { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
      { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
      { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
    ],
  },

  surat: {
   heading: "E-commerce & Business Growth with Surat's Trusted Web Agency",

subheading: "From diamond merchants to textile vendors, we create speedy-loading mobile-friendly websites that are suited for Surat’s special industries.",

    themeColor: "#5E9ED5",
    steps: [
      { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
      { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
      { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
      { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
      { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
    ],
  },
  mumbai: {
   heading: "Partner with a Premier Web Design Agency in Mumbai's Dynamic Business Landscape",

subheading: "We craft high-impact websites for Mumbai's ambitious brands, combining strategic insight with cutting-edge development to fuel your growth.",

    themeColor: "#5E9ED5",
    steps: [
      { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
      { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
      { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
      { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
      { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
    ],
  },
  gurugram: {
   heading: "Driving Digital Innovation with Gurugram's Leading Web Development Company",

subheading:  "Our Gurugram-based team delivers agile, performance-focused websites for the city's startups and corporate hubs, ensuring a standout digital presence.",

    themeColor: "#5E9ED5",
    steps: [
      { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
      { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
      { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
      { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
      { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
    ],
  },
  delhiNCR: {
   heading: "Your Strategic Digital Partner for Comprehensive Web Solutions in Delhi NCR",

subheading: "From Noida to Gurugram, we provide end-to-end website design and development tailored to the diverse and competitive Delhi NCR market.",

    themeColor: "#5E9ED5",
    steps: [
      { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
      { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
      { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
      { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
      { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
    ],
  },
  andheriMumbai: {
   heading:  "Elevating Brands with Expert Web Design & Development in Andheri, Mumbai",

subheading:  "Located in Mumbai's vibrant commercial heart, we build fast, responsive, and engaging websites for Andheri's businesses and creative agencies.",

    themeColor: "#5E9ED5",
    steps: [
      { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
      { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
      { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
      { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
      { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
    ],
  },
  amsterdam: {
   heading: "Creating User-Centric Digital Experiences with an Amsterdam Web Design Studio",

subheading:  "We blend Dutch design excellence with robust development to build clear, functional, and beautiful websites for Amsterdam's international businesses.",

    themeColor: "#5E9ED5",
    steps: [
      { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
      { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
      { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
      { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
      { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
    ],
  },
  ranchi: {
   heading:  "Building a Powerful Online Foundation for Businesses in Ranchi",

subheading:  "Our Ranchi web design services help local enterprises and entrepreneurs create professional, growth-oriented websites with a clear, step-by-step approach.",

    themeColor: "#5E9ED5",
    steps: [
      { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
      { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
      { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
      { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
      { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
    ],
  },
  newyorkUS: {
   heading: "Crafting Competitive, High-Performance Websites for New York City Businesses",

subheading: "Meet the pace of New York with a sleek, strategic website from our expert team, designed to capture attention and convert in a crowded digital marketplace.",

    themeColor: "#5E9ED5",
    steps: [
      { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
      { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
      { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
      { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
      { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
    ],
  },
  londonUK: {
   heading: "Professional Website Design & Development for London's Established and Emerging Brands",

subheading:  "We deliver sophisticated, results-driven web solutions that align with the high standards and diverse audience of London's global commercial centre.",

    themeColor: "#5E9ED5",
    steps: [
      { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
      { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
      { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
      { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
      { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
    ],
  },
 
  jaipur: {
   heading: "Blending Heritage with Technology through Expert Web Design in Jaipur",

subheading: "We help Jaipur's vibrant tourism, retail, and hospitality sectors create stunning, user-friendly websites that tell their unique story and drive engagement.",

    themeColor: "#5E9ED5",
    steps: [
      { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
      { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
      { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
      { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
      { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
    ],
  },
  dohaQatar: {
   heading: "Delivering Premium Web Development Services for Businesses in Doha, Qatar",

subheading: "We support Qatar's vision with modern, scalable website solutions designed for the local market, helping your brand achieve digital excellence and authority.",

    themeColor: "#5E9ED5",
    steps: [
      { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
      { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
      { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
      { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
      { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
    ],
  },
bhopal: {
  heading: "Energise Bhopal with Tailor-Made Websites",
  subheading: "Our Bhopal web design company develops digital products that help local businesses connect with Madhya Pradesh and expand their online footprint.",
  themeColor: "#5E9ED5",
  steps: [
    { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
    { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
    { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
    { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
    { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
  ],
},

gonda: {
  heading: "Affordable Web Designing Solutions in Gonda for Local Businesses",
  subheading: "We help businesses start, market, and manage their presence online in Gonda with fast, reliable, and affordable web solutions.",
  themeColor: "#5E9ED5",
  steps: [
    { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
    { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
    { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
    { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
    { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
  ],
},

rohini: {
  heading: "Your Neighborhood Partner for Professional Web Development in Rohini, Delhi",
  subheading: "Get a blazing-fast, mobile-friendly website for your Delhi local business, built step by step with your Rohini web designers to deliver real results.",
  themeColor: "#5E9ED5",
  steps: [
    { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
    { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
    { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
    { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
    { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
  ],
},

lucknow: {
  heading: "Crafting Digital Narratives for the Heritage and Modern Brands of Lucknow",
  subheading: "Our Lucknow web studio combines cultural understanding with modern design to create websites that resonate with the city’s unique audience.",
  themeColor: "#5E9ED5",
  steps: [
    { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
    { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
    { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
    { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
    { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
  ],
},

ghaziabad: {
  heading: "Boosting Industrial and Commercial Development with Web Solutions in Ghaziabad",
  subheading: "Collaborate with a Ghaziabad web development company to create secure and scalable websites for manufacturing and service businesses across Delhi NCR.",
  themeColor: "#5E9ED5",
  steps: [
    { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
    { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
    { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
    { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
    { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
  ],
},

NewDelhi: {
  heading: "Empowering Digital Excellence for India’s Capital: Leading Website Design in Delhi",
  subheading: "From idea to launch, our Delhi web agency designs strategic, high-converting websites that enable your brand to succeed in a competitive metropolis.",
  themeColor: "#5E9ED5",
  steps: [
    { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
    { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
    { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
    { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
    { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
  ],
},

agra: {
  heading: "Using Strategic Web Design to Highlight Agra’s Businesses Beyond the Taj",
  subheading: "We create visually compelling websites that act as the face of your business or work behind the scenes, helping Agra’s hospitality, craft, and local service businesses attract a global audience.",
  themeColor: "#5E9ED5",
  steps: [
    { step: "01", position: "left", title: "Research", description: "We gather insights and analyze requirements before starting any project." },
    { step: "02", position: "right", title: "Planning", description: "We carefully plan each stage of the project to ensure smooth execution." },
    { step: "03", position: "left", title: "Design", description: "Our team creates user-friendly and visually appealing designs execution." },
    { step: "04", position: "right", title: "Development", description: "We turn designs into fully functional applications with clean code." },
    { step: "05", position: "left", title: "Launch", description: "After thorough testing, we launch the product and ensure success success." },
  ],
},
noidaWebDesign: {
  heading: "Award-Winning Website Design in Noida: Your Partner for Stunning Digital Experiences",
  subheading: "As a top web designing company in Noida, we blend creative UI/UX with strategic thinking to build websites that are beautiful, functional, and drive real results for your business.",
  themeColor: "#5E9ED5",
  steps: commonSteps
},

psdToHtmlNoida: {
  heading: "Pixel-Perfect PSD to HTML Conversion Services in Noida",
  subheading: "Trust our Noida development team to flawlessly convert your Photoshop designs into clean, semantic, and responsive HTML/CSS code for faster, cross-browser compatible websites.",
  themeColor: "#5E9ED5",
  steps: commonSteps
},

phpDevelopmentNoida: {
  heading: "Custom PHP Web Application Development for Noida Businesses",
  subheading: "Leverage our expertise as a leading PHP development company in Noida to build scalable, secure, and dynamic web applications tailored to your unique business logic and needs.",
  themeColor: "#5E9ED5",
  steps: commonSteps
},

wordpressNoida: {
  heading: "Expert WordPress Development in Noida: From Blogs to Enterprise Sites",
  subheading: "Our Noida WordPress developers create fast, secure, and easy-to-manage websites and CMS solutions, empowering you to take full control of your digital content.",
  themeColor: "#5E9ED5",
  steps: commonSteps
},
joomlaNoida: {
  heading: "Building Powerful & Flexible Websites with Joomla Development in Noida",
  subheading: "We specialize in complex Joomla website development in Noida, crafting versatile content management systems ideal for communities, publications, and organizations.",
  themeColor: "#5E9ED5",
  steps: commonSteps
},

drupalNoida: {
  heading: "Enterprise-Grade Drupal Development Solutions from Our Noida Studio",
  subheading: "Partner with our Drupal experts in Noida for robust, high-performance websites that handle complex data, high traffic, and deliver unparalleled security for large-scale projects.",
  themeColor: "#5E9ED5",
  steps: commonSteps
},

frameworkNoida: {
  heading: "Custom Web Development Using Laravel, CodeIgniter & More in Noida",
  subheading: "We use modern PHP frameworks like Laravel and CodeIgniter to build exceptionally fast, maintainable, and feature-rich web applications for Noida's tech-driven businesses.",
  themeColor: "#5E9ED5",
  steps: commonSteps
},

prestashopEcommerce: {
  heading: "Launch Your Online Store with Expert PrestaShop E-commerce Development",
  subheading: "We design and develop high-converting PrestaShop e-commerce websites packed with powerful features to manage products, payments, and drive sales growth effectively.",
  themeColor: "#5E9ED5",
   steps: commonSteps
},

wordpressEcommerce: {
  heading: "Create a Powerful Online Store with WooCommerce & WordPress Development",
  subheading: "We specialize in building stunning, user-friendly WordPress ecommerce websites using WooCommerce, turning your vision into a fully functional, sales-ready digital storefront.",
  themeColor: "#5E9ED5",
 steps: commonSteps
}


 
};
