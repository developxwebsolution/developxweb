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
    id: "custom-development",
    label: "Custom Development",
    content:
      "We offers custom PHP development services design to your business needs. From simple basic websites to complex web applications, we build secure, scalable, and high-performing solutions using clean PHP code. Every single project is developed to support smooth functionality, better performance, and provide long-term growth.",
    image: "/images/php-web-development/custom-php-development.jpg",
    button: [{ text: "Get Custom Development" }],
    alt: "Custom PHP Development",
  },

  {
    id: "CMS-Development",
    label: "CMS Development",
    content:
      "Our PHP CMS development services make their website easy to manage. We build dynamic content management systems that allow the users to easily create multiple users that can manage separate tasks, update pages, blogs, and content without technical knowledge.  Whether it’s a custom PHP CMS or popular platforms like WordPress, we ensure your website is secure, fast, and SEO-friendly.",
    image: "/images/web-dev/webservices/dynamic-website.jpg",
    button: [{ text: "Get CMS Development" }],
    alt: "CMS Development",
  },

  {
    id: "eCommerce-Website-Development",
    label: "E-commerce Website Development",
    content:
      "We create reliable and user-friendly PHP e-commerce websites designed to grow your business sales and improve the shopping experience. From product management and secure payment integration to smooth checkout flows, our PHP e-commerce solutions are built for performance, security, and scalability.",
    image: "/images/web-dev/webservices/e-commerce-website.jpg",
    button: [{ text: "E-commerce Website Development" }],
    alt: "E-commerce Website Development",
  },

  {
    id: "News-Blogs-Website",
    label: "News & Blogs Website",
    content:
      "We develop PHP-based news and blog websites that are easy to manage and enjoyable to read. Our solutions focus on clean layouts, fast loading speeds, and simple content publishing. Whether you’re running a blog, magazine, or news portal, we ensure your website is organized, responsive, and search-engine friendly.",
    image: "/images/php-web-development/news-blogs-website.jpg",
    button: [{ text: "Get News & Blogs Website" }],
    alt: "News & Blogs Website",
  },
  {
    id: "Maintenance-Support",
    label: "Maintenance & Support",
    content:
      "Websites need regular care to stay secure and perform well. Our PHP maintenance and support services cover bug fixes, performance optimization, security updates, backups, and ongoing technical support. We handle the technical side so you can focus on running your business without worry.",
    image: "/images/web-dev/webservices/php-landing-page.jpg",
    button: [{ text: "Get Maintenance & Support" }],
    alt: "Maintenance & Support",
  },
];

export const Services = () => {
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
            Our PHP Web Development Services
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
