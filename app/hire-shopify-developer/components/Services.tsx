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
    id: "1",
    label: "Trusted & Experienced Team",
    content:
      "Our Shopify developers have years of experience working with businesses of all sizes and industries. From small startups to large enterprises, we’ve helped clients launch, optimize, and scale their online stores. You can trust our expertise to deliver a fully functional, professional, and high-converting Shopify store.",
    image: "/images/hire-shopify-developer/hire-shopify-developer.webp",
    button: [{ text: "Trusted & Experienced Team" }],
    alt: "Trusted & Experienced Team",
  },

  {
    id: "2",
    label: "Affordable for Every Business",
    content:
      "High-quality Shopify development doesn’t have to break the bank. Whether you are a small business or an established brand, we offer affordable development packages without compromising on quality. Our goal is to provide value, reliability, and results that fit your budget.",
    image: "/images/hire-shopify-developer/hire-shopify-developer-affordable.webp",
    button: [{ text: "Affordable for Every Business" }],
    alt: "Affordable for Every Business",
  },

  {
    id: "3",
    label: "Clean, Modern & Conversion-Focused Stores",
    content:
      "A beautiful website is just the beginning. Our developers focus on modern design combined with conversion optimization, ensuring your store looks professional and guides visitors toward purchases. From layout design to product pages and CTAs, everything is crafted to maximize sales.",
    image: "/images/hire-shopify-developer/hire-shopify-developer-clean-modern.webp",
    button: [{ text: "Clean, Modern & Conversion-Focused Stores" }],
    alt: "Clean, Modern & Conversion-Focused Stores",
  },

  {
    id: "4",
    label: "Fast Delivery & Dedicated Support",
    content:
      "Time is crucial in eCommerce, and we respect that. Our team works efficiently to deliver projects on schedule while providing dedicated support throughout the process. Even after launch, we stay available to resolve issues, make improvements, and help you succeed.",
    image: "/images/hire-shopify-developer/hire-shopify-developer-fast-delivery.webp",
    button: [{ text: "Fast Delivery & Dedicated Support" }],
    alt: "Fast Delivery & Dedicated Support",
  },

  {
    id: "5",
    label: "Fully Customizable Solutions",
    content:
      "Every business is unique, and so should your Shopify store be. From custom themes and layouts to app integrations and unique features, we tailor every aspect of your store to your brand, products, and customer needs. This ensures your online store stands out and meets your business goals perfectly.",
    image: "/images/hire-shopify-developer/hire-shopify-developer-customizable-solutions.webp",
    button: [{ text: "Fully Customizable Solutions" }],
    alt: "Fully Customizable Solutions",
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
            Top Reasons to Hire Our Shopify Developers
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
