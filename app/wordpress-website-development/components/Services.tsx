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
    id: "Highly Flexible & Customizable",
    label: "Highly Flexible & Customizable",
    content:
      "WordPress offers a highly flexible platform that can be designed to match your exact business goal needs. We design and develop custom WordPress websites that exactly fit your business growth. From layout changes to feature upgrades, everything can be customized without rebuilding the fully site.",
    image: "/images/wordpress/highly-flexible-customizable.jpg",
    button: [{ text: "Get Highly Flexible & Customizable" }],
    alt: "Highly Flexible & Customizable",
  },

  {
    id: "User-friendly-Backend",
    label: "User-Friendly Backend",
    content:
      "Handling your website should be simple. With the help of WordPress, you get an easy-to-use backend that allows you to update pages, blogs, images, and content without technical skills. We ensure the admin panel is clean and organized so you can manage your website easily.",
    image: "/images/wordpress/user-friendly-backend.jpg",
    button: [{ text: "Get User-Friendly Backend" }],
    alt: "User-friendly Backend",
  },

  {
    id: "Cost-Effective Solution",
    label: "Cost-Effective Solution",
    content:
      "WordPress is a cost-effective website development solution for all types of businesses because WordPress is open-source software; it doesn't charge anything, and it's completely free to use.  It reduces development time and maintenance costs while still delivering a professional and high-quality website. This makes it ideal for startups, small businesses, and growing brands.",
    image: "/images/wordpress/cost-effective-solution.jpg",
    button: [{ text: "Get Cost-Effective Solution" }],
    alt: "Cost-Effectively",
  },

  {
    id: "Strong-Plugin-Ecosystem",
    label: "Strong Plugin Ecosystem",
    content:
      "WordPress comes with a robust plugin ecosystem that allows you to add new features very easily. From SEO tools and contact forms to security and performance plugins, we integrate reliable plugins that improve your website’s functionality without slowing it down.",
    image: "/images/wordpress/strong-plugin-ecosystem.jpg",
    button: [{ text: "Get Strong Plugin Ecosystem" }],
    alt: "Strong-Plugin-Ecosystem",
  },
  {
    id: "Easy-to-Customization-CMS-Panel",
    label: "Easy-to-Customize CMS Panel",
    content:
      "The WordPress CMS panel is designed for easy customization and control. We set up the dashboard in a way that makes editing content, managing media, and updating settings simple. This gives you full control over your website while keeping everything organized and efficient.",
    image: "/images/wordpress/easy-to-customize-cms-panel.jpg",
    button: [{ text: "Get Easy-to-Customize CMS Panel" }],
    alt: "Easy-to-Customization-CMS-Panel",
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
            Major Benefits of WordPress Development
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
