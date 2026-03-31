"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const faqs = [
  {
    question: "Designing Services",
    answer:
      "We create beautiful websites and designs that capture your brand's personality and connect with your audience. From logos to full websites, we design every element to not only look great but also work perfectly on all devices. Our designs tell your story in a way that's both visually stunning and incredibly effective.",
    image: "/images/services-img/website-designing.webp",
    buttons: [
      { text: "Website Designing", link: "/website-designing" },
      { text: "Catalog Designing", link: "/catalog-designing" },
      { text: "E-mailer Designing", link: "/e-mailer-designing" },
      { text: "PSD To HTML Designing", link: "/psd-to-html-designing" },
      { text: "Logo Designing", link: "/logo-designing" },
    ],
  },
  {
    question: "Website Development",
    answer:
      "We build fast, reliable websites using modern technology that works exactly how you need it to. Whether you want a simple site or a complex web application, we create solutions that are easy to manage and built to last. Your website will load quickly, rank well, and give visitors a smooth experience.",

    image: "/images/services-img/Website-Development.webp",
    buttons: [
      { text: "Web Development", link: "/web-development" },
      { text: "Core PHP", link: "/php-web-development" },
      { text: "Wordpress", link: "/wordpress-website-development" },
      { text: "Joomla!", link: "/joomla-web-development" },
      { text: "Framework", link: "/frameworks-website-development" },
    ],
  },
  {
    question: "eCommerce Website Development",
    answer:
      "We create online stores that make selling easy and enjoyable. From product displays to secure checkout, we build everything your business needs to succeed online. Our e-commerce solutions help you manage orders, track inventory, and grow your sales effortlessly.",
    image: "/images/services-img/eCommerce-website-development.webp",
    buttons: [
      { text: "Shopify", link: "/web-development" },
      { text: "WooCommerce", link: "/php-web-development" },
      { text: "Magento", link: "/wordpress-website-development" },
      { text: "Prestashop", link: "/joomla-web-development" },
      { text: "Drupal", link: "/drupal-website-development" },
    ],
  },
  {
    question: "Hire Designer & Developer",
    answer:
      "Need extra help for your project? Hire our designers and developers who work just like your own team members. Get expert help when you need it, for as long as you need it perfect for projects big or small without the commitment of full-time hiring. ",
    image: "/images/services-img/hire-developer.webp",
    buttons: [
      { text: "Hire Website Designer", link: "/hire-website-designer" },
      { text: "Hire Website Developer", link: "/hire-website-developer" },
      { text: "Hire Shopify Developer", link: "/hire-shopify-developer" },
    ],
  },
];

export default function Services_faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className=" container-width mx-auto ">
      <div className=" mx-auto section-style">
        <div className="outer-div  grid grid-flow-row gap-[0px]">
          <div className="heading flex flex-col md:flex-row justify-between items-center gap-4 mb-5 md:mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="heading-second"
            >
              Our Services
            </motion.h2>
            <Link href="#" className="view-all-btn hidden md:inline-block ">
              View All
            </Link>
          </div>

          <div className="gap-[30px] grid grid-flow-row ">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className={`md:flex block gap-10 pt-[16px] transition-all duration-500 overflow-hidden border-t-4 border-[#5E9ED5] rounded-2xl ${
                    idx !== 0 ? "border-t-4 border-[#5E9ED5] rounded-2xl" : ""
                  }`}
                >
                  {/* Left Image Container */}
                  <div
                    className={`w-full md:w-[188px] flex-shrink-0 overflow-hidden transition-all duration-500 flex items-center ease-in-out  ${
                      isOpen ? "h-[250px]" : "h-auto"
                    }`}
                  >
                    <Image
                      src={faq.image}
                      alt="images"
                      width={188}
                      height={isOpen ? 250 : 38}
                      className={`object-cover object-top duration-500 transition-all ease-in-out w-full ${
                        isOpen ? "h-[250px]" : "h-[38px]"
                      }`}
                    />
                  </div>

                  {/* Right Content */}
                  <div className="flex-1 my-auto  ">
                    <button
                      aria-expanded={isOpen}
                      onClick={() => toggle(idx)}
                      className="w-full text-left focus:outline-none justify-between items-center flex cursor-pointer pt-[10px] lg:pt-[0px] "
                    >
                      <span className="text-[20px] md:text-[28px] font-normal  leading-[120%]  ">
                        {faq.question}
                      </span>
                      <span className="text-xl flex items-center bg-[#5e9ed5] rounded-full p-1 ">
                        {isOpen ? (
                          <Image
                            src="/images/icons/chevron-up.svg"
                            alt="Collapse"
                            width={30}
                            height={30}
                            className="transition-all text-black invert-0 dark:invert"
                          />
                        ) : (
                          <Image
                            src="/images/icons/chevron-down.svg"
                            alt="Expand"
                            width={30}
                            height={30}
                            className="transition-all text-white invert-0 dark:invert"
                          />
                        )}
                      </span>
                    </button>

                    <div
                      style={{
                        maxHeight: isOpen ? 500 : 0,
                        padding: isOpen ? "0px 0" : "0",
                        opacity: isOpen ? 1 : 0,
                        overflow: "hidden",
                        transition:
                          "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s, padding 0.3s",
                        willChange: "max-height, opacity, padding",
                      }}
                      className=" "
                    >
                      <div className="gap-5 inline-grid pt-5 pr-5">
                        <div className="flex gap-[12px] flex-wrap">
                          {faq.buttons?.map((btn, i) => (
                            <Link
                              key={i}
                              href={btn.link}
                              passHref
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-1 text-[#589CD5] text-[13px] md:text-[15px] leading-[150%] rounded-[99px] border border-[#589CD5] hover:bg-[#589CD5] hover:text-white transition-all inline-block"
                            >
                              {btn.text}
                            </Link>
                          ))}
                        </div>
                        <p className="text-[16px] font-normal  leading-[150%]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-5 mb-5">
            <Link
              href="#"
              target="_blank"
              className="view-all-btn-mobile inline-block md:hidden "
            >
              View All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
