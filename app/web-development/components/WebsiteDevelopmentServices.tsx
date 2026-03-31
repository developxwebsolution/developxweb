import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import ModalForm from "@/components/ModalForm";

// Define type for each tab
interface Tab {
  id: string;
  label: string;
  content: string;
  image: string;
  alt: string;
  button: {
    text: string;
  }[];
}
const tabs: Tab[] = [
  {
    id: "custom-website-development",
    label: "Custom Website Development",
    content:
      "We create websites built specifically to meet your business goals. Whether you need a corporate site, portfolio, or interactive web app, our team uses modern technologies like HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, PHP, React, and NextJs to deliver fast, secure, and visually appealing websites. Every single website is optimized for SEO, usability, and conversion, making us one of the most trusted web development companies in India.",
    image: "/images/website-development/website-development.jpg",
    button: [
      {
        text: "Get a Custom Website",
      },
    ],
    alt: "Custom website development - Fast, SEO-friendly websites for businesses",
  },

  {
    id: "ecommerce-development",
    label: "E-Commerce Development",
    content:
      "Our e-commerce solutions are built to help your online business grow by boosting sales and improving the overall shopping experience. We develop feature-rich online stores with secure payment systems, smooth product management, and a simple, user-friendly checkout process. Whether you prefer trusted platforms like WooCommerce, Magento, and Shopify, or need a fully custom solution, we make sure your store is fast, secure, reliable, and optimized for search engines—giving your business a strong competitive advantage.",
    image: "/images/website-development/ecommerce-development.jpg",
    button: [{ text: "Build Your Online Store" }],
    alt: "E-commerce development - Secure and SEO-optimized online stores",
  },

  {
    id: "responsive-mobile-design",
    label: "Responsive Design",
    content:
      "Responsive and mobile-friendly design is essential in a mobile-first environment. Laser Web Maker develops websites that maintain consistent layout and functionality across all device types, including desktops, tablets, and smartphones. The design approach uses flexible grids, optimized navigation, and performance-focused page structures to improve user engagement and reduce bounce rates.",
    image: "/images/website-development/responsive-mobile-design.jpg",
    button: [
      {
        text: "Get a Responsive Design",
      },
    ],
    alt: "Responsive and mobile-friendly web design for all devices",
  },

  {
    id: "cms-development",
    label: "CMS Development",
    content:
      "Managing your website content should be simple and stress-free. Our CMS solutions—WordPress, Joomla, or custom-built platforms—let you add new pages, update blogs, and manage products quickly, without any technical skills. The interface is intuitive, so you stay in full control. Every CMS site we design is secure, SEO-friendly, and designed to grow with your business.",
    image: "/images/website-development/cms-development.jpg",
    button: [{ text: "Start CMS Development" }],
    alt: "CMS development - Easy-to-manage and SEO-friendly content management systems",
  },

  {
    id: "website-maintenance-support",
    label: "Maintenance & Support",
    content:
      "Websites need regular attention. If they don’t get it, things break. We look after your website so that doesn’t happen. This includes fixing minor issues, updating plugins, checking security, backing up the site, and keeping the site running smoothly. Your website remains online and functions properly, so you don't need to worry about the technical aspects.",
    image: "/images/website-development/website-maintenance-support.jpg",
    button: [
      {
        text: "Get Maintenance & Support",
      },
    ],
    alt: "Website maintenance and support - Keep your website secure and running smoothly",
  },
];

export const WebsiteDevelopmentServices = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    <>
      <div className="section-web-services flex items-center  justify-center section-style">
        <div className="w-full  mx-auto text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="heading-second text-center mb-10"
          >
            Our Web Development Services
          </motion.h2>
          {/* Heading */}
          <div className="relative mb-6">
            <div className="flex justify-center w-full">
              <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto no-scrollbar gap-2 px-2 py-2 w-full max-w-max"
                style={{ WebkitOverflowScrolling: "touch" }}
                role="tablist"
                aria-label="Web Development Services"
              >
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    aria-controls={`panel-${tab.id}`}
                    id={`tab-${tab.id}`}
                    onClick={() => handleTabClick(tab.id, index)}
                    className={`${
                      activeTab === tab.id
                        ? " bg-[#5E9ED5] text-white border-none hover:border-[#5E9ED5]"
                        : "hover:text-[#589CD5]/80"
                    } relative rounded-full px-4 tabing-heading py-2   whitespace-nowrap`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="relative  mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col md:flex-row items-center gap-0 md:gap-6  bg-white/5 rounded-2xl"
                role="tabpanel"
                id={`panel-${activeData?.id}`}
                aria-labelledby={`tab-${activeData?.id}`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={activeData?.image ?? "/images/fallback.jpg"}
                      alt={activeData?.alt ?? "Web development service image"}
                      width={1200}
                      height={1000}
                      className="object-cover w-full h-full"
                      priority={activeTab === tabs[0].id}
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 text-left space-y-3 p-6">
                  {/* <h3 className="text-xl font-semibold">
                  {activeData?.label} Services
                </h3> */}
                  <p className="text-sm sm:text-base">{activeData?.content}</p>
                  <div className="flex gap-2 flex-wrap">
                    {activeData?.button.map((btn, i) => (
                      <button
                        key={i}
                        onClick={() => setIsModalOpen(true)}
                        className="px-4 py-1 text-[#589CD5] text-[15px] leading-[150%] rounded-[99px] border border-[#589CD5] hover:bg-[#589CD5] hover:text-white transition-all inline-block"
                      >
                        {btn.text}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* MODAL — always included */}
          <ModalForm isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        </div>
      </div>
    </>
  );
};
