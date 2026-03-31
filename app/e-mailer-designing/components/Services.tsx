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
    id: "Promotional-Emailers",
    label: "Promotional Emailers",
    content:
      "We create promotional email campaigns that help businesses grow and more sales and quicker customer responses. We focus on clear messaging around discounts, seasonal sales, festive offers, and special promotions, keeping the design clean and simple  to follow. The emailers are well for online stores, retail shops, restaurants, fashion brands, and service businesses.",
    image: "/images/E-mailerDesigning/Promotional-Emailers.jpg",
    button: [{ text: "Promotional Emailers" }],
    alt: "Promotional Emailers",
  },

  {
    id: "Product-Launch-Emailers",
    label: "Product Launch Emailers",
    content:
      "Introduce new products or collections with clean, modern, and visually eye-catching designs. Whether it’s a new gadget, clothing line, beauty product, or service upgrade — we create emailers that helps the highlight key features, benefits, and visuals that excite and match your audience. These emailers help build curiosity and push customers toward your new launch.",
    image: "/images/E-mailerDesigning/Product-Launch-Emailers.jpg",
    button: [{ text: "Product Launch Emailers" }],
    alt: "Product Launch Emailers",
  },

  {
    id: "Service-Announcement-Emailers",
    label: "Service Announcement Emailers",
    content:
      "Keep your audience informed about important business updates. We fully design emailers for service expansions, feature upgrades, company updates, pricing changes, store openings, new policies, and more. Every single layout ensures clarity, professionalism, and high reader engagement.",
    image: "/images/E-mailerDesigning/Service-Announcement-Emailers.jpg",
    button: [{ text: "Service Announcement Emailers" }],
    alt: "Service Announcement Emailers",
  },

  {
    id: "Newsletter-Emailers",
    label: "Newsletter Emailers",
    content:
      "Ideal for brands that want to stay connected with their audience on a regular basis. We design multi-section newsletters that showcase articles, product highlights details, event updates, blogs, tips, and company news. These emailers are structured in a simple way for readability and are perfect for weekly or monthly engagement.",
    image: "/images/E-mailerDesigning/Newsletter-Emailers.jpg",
    button: [{ text: "Newsletter Emailers" }],
    alt: "Newsletter Emailers",
  },
  {
    id: "Corporate-Emailers",
    label: "Corporate Emailers",
    content:
      "Built for professional communication within or outside the organization. Corporate emailers include business announcements, investor updates, HR messages, internal communications, event invitations, performance summaries, greetings, and more. The design remains formal, polished, and aligned with brand guidelines.",
    image: "/images/E-mailerDesigning/Corporate-Emailers.jpg",
    button: [{ text: "Corporate Emailers" }],
    alt: "Corporate Emailers",
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
            Types of Emailers We Design
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
