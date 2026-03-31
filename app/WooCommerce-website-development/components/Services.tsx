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
    id: "Open-Source WooCommerce Development",
    label: "Open-Source WooCommerce Development",
    content:
      "WooCommerce is an open-source platform and giving you full control over your online store. We build WooCommerce websites that are flexible, secure, and scalable, give your business grow without any problems. Open-source ensures transparency, customization, and the freedom to adapt your store as needed.",
    image: "/images/woocommerce-web-development/open-source-website.webp",
    button: [{ text: "Get Open-Source WooCommerce Development" }],
    alt: "Open-Source WooCommerce Development",
  },

  {
    id: "Customizable & User-Friendly",
    label: "Customizable & User-Friendly",
    content:
      "We create WooCommerce stores that are easily fully customizable. From basic design to advanced features, your store will match your brand perfectly. The backend is very simple to manage, easy to add products, update the content, and manage inventory without technical skills.",
    image: "/images/woocommerce-web-development/customizable-website.webp",
    button: [{ text: "Get Customizable & User-Friendly" }],
    alt: "Customizable & User-Friendly",
  },

  {
    id: "Zero-Monthly-Fees",
    label: "Zero Monthly Fees",
    content:
      "WooCommerce itself has no monthly fees, making it a cost-effective solution for businesses of all sizes. We help you set up your store in a way that maximizes efficiency while keeping ongoing costs minimal.",
    image: "/images/woocommerce-web-development/zero-monthly-fees.webp",
    button: [{ text: "Get Zero Monthly Fees" }],
    alt: "Zero Monthly Fees",
  },

  {
    id: "SEO-Friendly Website",
    label: "SEO-Friendly Website",
    content:
      "Our WooCommerce stores are well optimized for search engines, helping your products reach the right audience. From best URLs and metadata to fast-loading pages, we check the store is visible and performs well in search results. We use free and open-source SEO plugins whenever possible, and if a paid plugin is required, the cost is shared clearly with you; there are no hidden fees.",
    image: "/images/woocommerce-web-development/seo-friendly-website.webp",
    button: [{ text: "Get SEO-Friendly Website" }],
    alt: "SEO-Friendly Website",
  },
  {
    id: "Payment Gateway Integration",
    label: "Payment Gateway Integration",
    content:
      "We integrate secure and reliable payment gateways to make transactions smooth and safe for your customers. From credit cards and UPI to wallets and international payment options, your store will be ready to accept payments seamlessly.",
    image: "/images/woocommerce-web-development/payment-gateway-integration.webp",
    button: [{ text: "Get Payment Gateway Integration" }],
    alt: "Payment Gateway Integration",
  },
  {
    id: "Complete User Control",
    label: "Complete User Control",
    content:
      "With WooCommerce, you get complete control over your store. Manage products, track orders, update prices, and handle customer information easily from an intuitive dashboard. Everything is designed to give you maximum control with minimum hassle.",
    image: "/images/woocommerce-web-development/complete-user-control.webp",
    button: [{ text: "Get Complete User Control" }],
    alt: "Complete User Control",
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
            Our WooCommerce Development Services
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
