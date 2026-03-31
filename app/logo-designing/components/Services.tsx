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
    id: "Logo-Customization",
    label: "Logo Customization",
    content:
      "We customize logos to better match your brand identity and business goals. Whether you want small changes or a complete refresh, we refine colors, fonts, and layout to give your logo a cleaner and more professional look. Our logo customization service helps your brand stay fresh while keeping its original identity intact.",
    image: "/images/LogoDesigning/Logo-Customization.jpg",
    button: [{ text: "Get Logo Customization" }],
    alt: "Logo Customization",
  },

  {
    id: "business-logo-designing",
    label: "Business Logo Designing",
    content:
      "Our business logo designing service focuses on creating logos that clearly represent your company and values. We design logos that are simple, memorable, and easy to recognize across all platforms. Each logo is crafted to help your business look professional and build trust with customers.",
    image: "/images/LogoDesigning/Business-Logo-Designing.jpg",
    button: [{ text: "Get Business Logo Design" }],
    alt: "Business Logo Designing",
  },
  {
    id: "Corporate-logo-designing",
    label: "Corporate logo designing",
    content:
      "We create corporate logos that reflect professionalism, reliability, and brand strength. Our corporate logo designs are clean, balanced, and timeless, making them ideal for long-term use. These logos work seamlessly across websites, presentations, stationery, and marketing materials.",
    image: "/images/LogoDesigning/Corporate-Logo-Designing.jpg",
    button: [{ text: "Get Corporate Logo Design" }],
    alt: "Corporate logo designing",
  },
  {
    id: "ecommerce-brand-logo-designing",
    label: "E-commerce Brand Logo Designing",
    content:
      "Our e-commerce brand logo designing service is focused on creating logos that stand out in competitive online marketplaces. We design logos that look strong on websites, mobile apps, social media, and product packaging. The goal is to help your online brand look trustworthy and easy to remember.",
    image: "/images/LogoDesigning/E-commerce-Brand-Logo-Designing.jpg",
    button: [{ text: "Get E-commerce Brand Logo Design" }],
    alt: "E-commerce Brand Logo Designing",
  },
  {
    id: "gaming-logo-designing",
    label: "Gaming Logo Designing",
    content:
      "We design creative and high-impact gaming logos that reflect energy, style, and personality. From esports teams to gaming channels and streaming brands, our gaming logos are bold, unique, and visually powerful. Each design is made to stand out across digital platforms and gaming communities.",
    image: "/images/LogoDesigning/Gaming-Logo-Designing.jpg",
    button: [{ text: "Get Gaming Logo Designing" }],
    alt: "Gaming Logo Designing",
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
            Types of Logos We Design
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
