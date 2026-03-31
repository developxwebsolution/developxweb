"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Define type for each tab
interface Tab {
  id: string;
  label: string;
  content: string;
  image: string;
  button: {
    text: string;
    link: string;
  }[];
}

const tabs: Tab[] = [
  {
    id: "Web Development",
    label: "Web Development",
    content:
      "We build high-performance, user-friendly, and scalable websites tailored to your business needs. From modern UI/UX to powerful backend development, our team delivers complete web solutions that help your brand grow online.",
    image: "/images/web-dev/webservices/web-development.jpg",
    button: [{ text: "Web Development", link: "/web-development" }],
  },

  {
    id: "Dynamic Websites",
    label: "Dynamic Websites",
    content:
      "Get fully dynamic, database-driven websites that allow easy updates, smooth user interactions, and enhanced functionality. Perfect for businesses that want flexibility and real-time content control.",
    image: "/images/web-dev/webservices/dynamic-website.jpg",
    button: [{ text: "Dynamic Websites", link: "/dynamic-websites" }],
  },

  {
    id: "Static Websites",
    label: "Static Websites",
    content:
      "Fast, secure, and lightweight static websites ideal for startups and businesses looking for a simple online presence. We design clean and professional static sites that load instantly and perform flawlessly.",
    image: "/images/web-dev/webservices/static-website.jpg",
    button: [{ text: "Static Websites", link: "/static-websites" }],
  },

  {
    id: "E-commerce Websites",
    label: "E-commerce Websites",
    content:
      "Launch your online store with our powerful e-commerce solutions. We develop secure, feature-rich platforms with payment integration, product management, and a seamless shopping experience.",
    image: "/images/web-dev/webservices/e-commerce-website.jpg",
    button: [{ text: "E-commerce Websites", link: "/e-commerce-websites" }],
  },

  {
    id: "Landing Page",
    label: "Landing Page",
    content:
      "High-converting landing pages designed to boost sales, increase leads, and support your marketing campaigns. Optimized for speed, performance, and maximum conversion.",
    image: "/images/web-dev/webservices/landing-page.jpg",
    button: [{ text: "Landing Page", link: "/landing-page" }],
  },

  {
    id: "News & Blogs Websites",
    label: "News & Blogs Websites",
    content:
      "We develop fast, SEO-optimized news and blog websites with category management, author profiles, easy posting, and excellent readability. Perfect for publishers, bloggers, and media platforms.",
    image: "/images/web-dev/webservices/news-and-blogs-websites.jpg",
    button: [{ text: "News & Blogs Websites", link: "/news-blogs-websites" }],
  },

  {
    id: "Corporate Websites",
    label: "Corporate Websites",
    content:
      "Professional and brand-focused corporate websites that reflect your company's identity, values, and services. Designed for trust, credibility, and strong business presence.",
    image: "/images/web-dev/webservices/corporate-websites.jpg",
    button: [{ text: "Corporate Websites", link: "/corporate-websites" }],
  },
];

export const WebDevServices = () => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Get current tab data
  const activeData = tabs.find((tab) => tab.id === activeTab);

  const handleTabClick = (tabId: string, index: number) => {
    setActiveTab(tabId);

    // Scroll the clicked tab into view
    const container = scrollContainerRef.current;
    if (container) {
      const button = container.children[index] as HTMLElement;
      button.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  return (
    <div>
      {" "}
      <div className=" flex items-center  justify-center px-[15px] md:px-[60px] pb-20 pt-10">
        <div className="w-full container mx-auto text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="heading-second text-[32px] md:text-[40px] font-normal leading-[120%] text-center  mb-10"
          >
            Web Development Services{" "}
            <span className="text-[#5E9ED5]">We Offer</span>
          </motion.h2>
          {/* Heading */}
          <div className="relative mb-6 ">
            <div className="flex justify-center w-full">
              <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto no-scrollbar gap-2 px-2 py-2 w-full max-w-max"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id, index)}
                    className={`${activeTab === tab.id ? "text-[#589CD5] shadow-[0_2px_12px_rgba(230,230,230,0.6)]" : "hover:text-[#589CD5]/80"} relative rounded-full px-4 py-2 text-[16px] font-medium whitespace-nowrap`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="relative   max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col md:flex-row items-center gap-6 bg-white/5 rounded-2xl backdrop-blur-sm shadow-[0_2px_12px_rgba(230,230,230,0.6)]
"
              >
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={activeData?.image ?? "/images/fallback.jpg"}
                      alt={activeData?.label ?? "Service Image"}
                      width={1200}
                      height={1000}
                      className="rounded-t-2xl md:rounded-t-none md:rounded-l-2xl object-cover w-full h-full"
                    />
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 text-left space-y-3 p-6">
                  <h3 className="text-xl font-semibold ">
                    {activeData?.label}
                  </h3>
                  <p className=" text-sm sm:text-base ">
                    {activeData?.content}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {activeData?.button.map((btn, i) => (
                      <Link
                        key={i}
                        href={btn.link}
                        passHref
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1 text-[#589CD5] text-[15px] leading-[150%] rounded-[99px] border border-[#589CD5] hover:bg-[#589CD5] hover:text-white transition-all inline-block"
                      >
                        {btn.text}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
