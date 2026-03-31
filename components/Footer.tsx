import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Download,
 
  ChevronRight,
  X,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaInstagram 
} from "react-icons/fa";

import { 
  FiDownload, 
  FiChevronRight, 
  FiX, 
  FiMapPin, 
  FiPhone, 
  FiMail 
} from "react-icons/fi";

import { motion } from "framer-motion";
const currentYear: number = new Date().getFullYear();
interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  heading: string;
  links: FooterLink[];
}
const countriesWithFlags = [
  { name: "India", flag: "🇮🇳" },
  { name: "United States (USA)", flag: "🇺🇸" },
  { name: "United Kingdom (UK)", flag: "🇬🇧" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "United Arab Emirates (UAE)", flag: "🇦🇪" },
  { name: "Singapore", flag: "🇸🇬" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "Italy", flag: "🇮🇹" },
  { name: "Switzerland", flag: "🇨🇭" },
  { name: "New Zealand", flag: "🇳🇿" },
  { name: "South Africa", flag: "🇿🇦" },
];

const footerSections: FooterSection[] = [
  {
    heading: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "Company Overview", href: "/company-overview" },
      { label: "Services", href: "#" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Packages", href: "/packages" },
      { label: "Clients", href: "/clients" },
      { label: "Careers", href: "#" },

      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Website Designing", href: "/website-designing" },
      { label: "Catalog Designing", href: "/catalog-designing" },
      { label: "E-mailer Designing", href: "/e-mailer-designing" },
      { label: "PSD To HTML Designing", href: "/psd-to-html-designing" },
      { label: "Logo Designing", href: "/logo-designing" },
      { label: "Hire Website Designer", href: "/hire-website-designer" },
    ],
  },
  {
    heading: "Technologies",
    links: [
      { label: "Web Development", href: "/web-development" },
      { label: "Core PHP", href: "/php-web-development" },
      { label: "Wordpress", href: "/wordpress-website-development" },
      { label: "Joomla!", href: "/joomla-web-development" },
      { label: "Framework", href: "/frameworks-website-development" },
      { label: "Hire Website Developer", href: "/hire-website-developer" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Shopify", href: "/shopify-website-development" },
      { label: "WooCommerce", href: "/WooCommerce-website-development" },
      { label: "Magento", href: "/magento-website-development" },
      { label: "Prestashop", href: "/prestashop-website-development" },
      { label: "Drupal", href: "/drupal-website-development" },
      { label: "Hire Shopify Developer", href: "/hire-shopify-developer" },
    ],
  },
];

export default function Footer() {
  return (
    <div className="footer-section">
      <div className="container-width mx-auto  md:px-[60px] pt-20 pb-10">
        <div className="flex flex-col gap-10">
          {/* <div className="footer-location relative md:h-[250px] h-full">
         
            <div className="absolute inset-0 items-center justify-center pointer-events-none z-10 flex   md:flex">
              <Image
                src="/images/footer/map-1.png"
                alt="Map Desktop"
                width={992}
                height={250}
                priority
                className="object-contain w-[992px] h-[250px]"
              />
            </div>

           
            <div className="absolute inset-0 items-center justify-center pointer-events-none z-10 lg:hidden  md:hidden">
              <Image
                src="/images/footer/footer-phone-map1.png"
                alt="Map Mobile"
                width={400}
                height={250}
                priority
                className="object-contain w-full"
              />
            </div>

            <div className="inner-location-section z-10 relative flex flex-wrap flex-col lg:flex-row md:gap-30 gap-[16px] ">
     
              {[
                {
                  country: "India",
                  flag: "/images/icons/twemoji_flag-india.svg",
                },
                {
                  country: "Malaysia",
                  flag: "/images/icons/twemoji_flag-malaysia.svg",
                },
                {
                  country: "Saudi Arabia",
                  flag: "/images/icons/emojione-v1_flag-for-saudi-arabia.svg",
                },
              ].map((loc, idx) => (
                <div key={idx} className="flex">
                  <div className="border-l border-white/10 bg-[#5098D6]/50 rounded-[3px] h-auto mr-[30px] "></div>
                  <div className="first-location inline-grid gap-[14px] h-[132px] w-[295px] md:w-[370px] xl:w-[295px]">
                    <div className="flex items-center gap-3">
                      <div>
                        <Image
                          src={loc.flag}
                          alt={loc.country}
                          width={50}
                          height={50}
                        />
                      </div>
                      <h4 className="text-[20px] text-white/90 leading-[150%] font-medium">
                        {loc.country}
                      </h4>
                    </div>
                    <div className="contact-details inline-grid gap-3">
                      <div className="gap-[6px] flex items-start">
                        <Image
                          src="/images/home_img/svg-logo/phone.svg"
                          alt="phone"
                          width={20}
                          height={20}
                        />
                        <p className="text-[12px] leading-[150%] font-light text-white/90">
                          +91-1203202969
                        </p>
                        <p className="text-[12px] leading-[150%] font-light text-white/90">
                          ,
                        </p>
                        <p className="text-[12px] leading-[150%] font-light text-white/90">
                          7291934043
                        </p>
                      </div>
                      <div className="gap-[6px] flex items-start">
                        <Image
                          src="/images/home_img/svg-logo/location.svg"
                          alt="location"
                          width={20}
                          height={20}
                        />
                        <p className="text-[12px] leading-[150%] font-light text-white/90">
                          Office No 623, Noida One Building, Sector 62, Noida
                          UP-201309
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          <div className="flex flex-col gap-[40px] px-[15px] relative">
            <div className="absolute inset-0 items-start justify-center pointer-events-none mr-30 z-10 flex   md:flex">
              <Image
                src="/images/footer/map-base.png"
                alt="Map Desktop"
                width={992}
                height={250}
                loading="lazy"
                className="object-contain w-[992px] h-[250px]"
              />
            </div>

            <div className="absolute inset-0 items-center justify-center pointer-events-none z-10 lg:hidden  md:hidden">
              <Image
                src="/images/footer/map-base-mobile.png"
                alt="Map Mobile"
                width={400}
                height={250}
                loading="lazy"
                className="object-contain w-full"
              />
            </div>
            <div className="footer-content flex flex-col md:gap-[60px] md:flex-row gap-y-[30px] items-start">
              <div className="w-full md:w-2/3 flex flex-col gap-[20px] md:gap-10">
                <div className=" footer-heading location-section social-icons">
                  <h4 className="text-white mb-[10px]">
                    Connect on Social Media
                  </h4>
                  <p className="text-white mb-[20px]">
                    Don&apos;t miss To Follow Us On Social Media For Our Latest
                    Updates. Updates.
                  </p>

                  <ul className="socials-icons flex gap-4">
                    <li className="group">
                      <a
                        href="https://www.facebook.com/LaserWebMaker"
                        className="w-[44px] h-[44px] rounded-full bg-white shadow-md 
                 flex items-center justify-center
                 transition-all duration-300
                 hover:bg-[#1877F2]"
                      >
                        <FaFacebookF
                          size={22}
                          className="text-[#1877F2] group-hover:text-white transition-colors"
                        />
                      </a>
                    </li>

                    <li className="group">
                      <a
                        href="https://www.instagram.com/laserwebmaker/"
                        className="w-[44px] h-[44px] rounded-full bg-white shadow-md 
                 flex items-center justify-center
                 transition-all duration-300
                 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF]"
                      >
                        <FaInstagram
                          size={22}
                          className="text-[#E1306C] group-hover:text-white transition-colors"
                        />
                      </a>
                    </li>

                    <li className="group">
                      <a
                        href="https://x.com/laserwebmaker/"
                        className="w-[44px] h-[44px] rounded-full bg-white shadow-md 
                 flex items-center justify-center
                 transition-all duration-300
                 hover:bg-black"
                      >
                        <X
                          size={22}
                          className="text-black group-hover:text-white transition-colors"
                        />
                      </a>
                    </li>

                    <li className="group">
                      <a
                        href="https://www.linkedin.com/company/laserwebmaker-com"
                        className="w-[44px] h-[44px] rounded-full bg-white shadow-md 
                 flex items-center justify-center
                 transition-all duration-300
                 hover:bg-[#0A66C2]"
                      >
                        <FaLinkedinIn
                          size={22}
                          className="text-[#0A66C2] group-hover:text-white transition-colors"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-1/3 flex flex-col md:items-center gap-6">
                <div className="footer-heading">
                  <h4 className="text-white text-[20px] md:text-[24px] font-semibold mb-4">
                    Location
                  </h4>
                  <div className="gap-[14px] ">
                    <div className="location-section flex items-start gap-3 mb-2">
                      <span
                        className="min-w-[28px] h-[28px] rounded-full bg-white shadow-sm 
               flex items-center justify-center mt-[2px]"
                      >
                        <MapPin size={14} className="text-[#5E9ED5]" />
                      </span>

                      <p className="text-[12px] leading-[150%] font-light text-white/90">
                        Office No 623, Noida One Building, Sector 62, Noida
                        UP-201309
                      </p>
                    </div>

                    <div className="location-section flex items-center gap-3 mb-2">
                      <span
                        className="min-w-[28px] h-[28px] rounded-full bg-white shadow-sm 
               flex items-center justify-center"
                      >
                        <Phone size={14} className="text-[#5E9ED5]" />
                      </span>

                      <p className="text-[12px] leading-[150%] font-light text-white/90">
                        <span><Link href={"tel:+91-1203202969"}>+91 120 320 2969</Link></span>, <span><Link href={"tel:+917291934043"}>+91 72919 34043</Link></span>
                      </p>  
                    </div>

                    <div className="location-section flex items-center gap-3">
                      <span
                        className="min-w-[28px] h-[28px] rounded-full bg-white shadow-sm 
               flex items-center justify-center"
                      >
                        <Mail size={14} className="text-[#5E9ED5]" />
                      </span>

                      <p className="text-[12px] leading-[150%] font-light text-white/90 break-all">
                        <Link href="mailto:info@laserwebmaker.com">info@laserwebmaker.com</Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <a
                    href="#"
                    className="group download-brochure-button px-[16px] py-3 w-full text-white/90 text-[16px] md:text-[20px] border rounded leading-[26px] bg-[#5E9ED5] hover:bg-transparent hover:text-[#5E9ED5] hover:border-[#5E9ED5] transition-all duration-500 font-semibold text-center flex justify-center"
                  >
                    <span className="flex gap-[10px] items-center">
                      <span>Download Brochure</span>
                      <Download
                        className="text-white group-hover:text-[#5E9ED5] transition-all duration-500 transform group-hover:translate-y-1"
                        size={24}
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* Heading */}
            <div>
              <div className="text-center footer-heading  max-w-3xl mx-auto mb-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h4 className=" footer-heading-color text-center  mb-5 md:mb-5">
                    Who We Are
                  </h4>
                </motion.div>
              </div>
              <div className="linkes grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-y-5 gap[0px] md:gap-[80px]">
                {footerSections.map((section, i) => (
                  <ul key={i} className="gap-1 flex flex-col">
                    {section.links.map((link, j) => (
                      <li key={j}>
                        <Link
                          href={link.href}
                          className="
      group flex items-center gap-2
      text-[14px] sm:text-[15px]
      text-white/90 font-normal
      leading-[150%]
      px-0 md:px-2 py-1
      rounded-md
      border-l-2 border-transparent
      transition-all duration-300 ease-in-out

      hover:text-[#5E9ED5]
      hover:border-[#5E9ED5]
      hover:bg-white/5

      active:bg-white/5
    "
                        >
                          <ChevronRight
                            size={16}
                            className="
        text-[#5E9ED5]/70
        flex-shrink-0
        transition-transform duration-300
        group-hover:translate-x-1
        
      "
                          />
                          <span className="transition-transform duration-300 group-hover:translate-x-1">
                            {link.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>

            <div>
              <div className="text-left footer-heading  mb-0 md:mb-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h4 className="footer-heading-color  text-left  mb-5 md:mb-5">
                    Delivering Web Solutions Across Multiple Countries
                  </h4>

                  <div className="content">
                    <p className="text-white/90 text-[14px] md:text-[16px] flex flex-wrap gap-x-2 gap-y-1">
                      {countriesWithFlags.map((c, idx) => (
                        <span key={idx}>
                          {c.flag} {c.name}{" "}
                          {idx < countriesWithFlags.length - 1 && "|"}
                        </span>
                      ))}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="flex py-[20px] border-t border-t-[#FFFFFF]/50 px-[15px]">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10">
              <div className="w-full md:w-1/2 order-2 md:order-1 flex flex-col gap-4 md:gap-[0px]">
                <h5 className="text-white text-[15px] font-semibold leading-[150%]">
                  &copy; {currentYear} LaserWebMaker.Com | All Rights Reserved.
                </h5>
                <div className="flex gap-4 md:gap-[40px] items-start md:items-end">
                  <div className="flex flex-col md:gap-1 gap-4">
                    {/* <div>
                      <p className="text-white">All Rights Reserved</p>
                    </div> */}
                    <div className="flex gap-[14px] md:gap-[10px] polices-sections ">
                      <p className="text-white"><Link href="/terms-condition">Terms & Condition </Link></p>
                      <span className="flex md:gap-[40px] gap-[10px]">
                        <p className="text-white"><Link href="/privacy-policy">Privacy Policy</Link></p>
                        <p className="text-white"><Link href="/refund-policy">Refund Policy</Link></p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 order-1 md:order-2 flex flex-col items-start md:items-end gap-5 md:gap-[40px]">
                {/* <div className="order-2 md:order-1">
                  <ul className="flex flex-wrap justify-end gap-6 md:gap-10">
                    <li className="text-white text-[15px] font-semibold">
                      Facebook
                    </li>
                    <li className="text-white text-[15px] font-semibold">
                      Instagram
                    </li>
                    <li className="text-white text-[15px] font-semibold">
                      Twitter
                    </li>
                    <li className="text-white text-[15px] font-semibold">
                      Google +
                    </li>
                  </ul>
                </div> */}

                <div>
                  <Image
                    src="/images/logos/developxweb-logo.png"
                    alt="Logo"
                    width={247}
                    height={43}
                  />
                </div>
              </div>
            </div>
          </div>



          {/* whatsapp icon  */}
          <section className="whatsapp">
        <Link href="https://wa.me/+9625148434?text=I'm%20interested%20in%20your%20services" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
          <div className="whatsapp-content">
            <Image width={35} height={35} src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="whatsapp-icon" />
            {/* <span className="whatsapp-text">Let's Chat On WhatsApp</span> */}
          </div>
        </Link>

      </section>


          {/* whatsapp icon end */}
        </div>
      </div>
    </div>
  );
}
