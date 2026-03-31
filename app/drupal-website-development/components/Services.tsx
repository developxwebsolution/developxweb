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
    id: "Scalable & Secure Architecture",
    label: "Scalable & Secure Architecture",
    content:
      "Drupal is developed for performance, security, and compatibility. We develop Drupal websites that handle a large quantity of content and traffic without the website slowing down. This makes Drupal a strong choice for businesses, enterprises, and growing platforms that need stability and long-term reliability.",
    image: "/images/drupal-web-development/scalable-secure-architecture.webp",
    button: [
      {
        text: "Get a Custom Website",
      },
    ],
    alt: "Scalable & Secure Architecture",
  },

  {
    id: "Advanced Content Management",
    label: "Advanced Content Management",
    content:
      "Drupal offers powerful content management features that give you full control over your website. We design structured content systems that make it easy to manage pages, media, and unique content types. Everything is well-organized for smooth updates and better user experience.",
    image: "/images/drupal-web-development/advanced-content-management.webp",
    button: [{ text: "Build Your Online Store" }],
    alt: "Advanced Content Management",
  },

  {
    id: "Enterprise-Level Security",
    label: "Enterprise-Level Security",
    content:
      "One of the biggest strengths is security. We follow best practices to build secure Drupal websites with strong access control, regular updates, and protection against common threats. This makes Drupal ideal for data-driven and high-traffic websites.",
    image: "/images/drupal-web-development/enterprise-level-security.webp",
    button: [
      {
        text: "Get Enterprise-Level Security",
      },
    ],
    alt: "Enterprise-Level Security",
  },

  {
    id: "Flexible & Custom Development",
    label: "Flexible & Custom Development",
    content:
      "Drupal allows wide functionality to match unique business needs. We build custom modules, themes, and features that fit your business requirements perfectly. Whether you need integrations, workflows, or advanced functionality, Drupal gives the flexibility to build powerful solutions.",
    image: "/images/drupal-web-development/flexible-custom-development.webp",
    button: [{ text: "Get Flexible & Custom Development" }],
    alt: "Flexible & Custom Development",
  },

  {
    id: " Maintenance & Support",
    label: "Maintenance & Support",
    content:
      "We provide Drupal maintenance and support services to keep your website updated, secure, and working smoothly. From performance optimization to bug fixes and upgrades, we handle the technical side so you can focus on your business.",
    image: "/images/drupal-web-development/maintenance-support.webp",
    button: [
      {
        text: "Get Ongoing Maintenance & Support",
      },
    ],
    alt: "Ongoing Maintenance & Support",
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
            Our Drupal Web Development Services
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
