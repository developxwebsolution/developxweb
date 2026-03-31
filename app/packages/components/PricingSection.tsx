"use client";

import { useState, useMemo } from "react";

import { motion, AnimatePresence } from "framer-motion";
import PricingCard from "./PricingCard";
import { pricingPlans } from "@/data/pricingData";
import { Box, Monitor, ShoppingCart } from "lucide-react"; // Import icons

const tabIcons: Record<TabValue, React.ElementType> = {
  all: Box,
  web: Monitor,
  ecommerce: ShoppingCart,
};

const tabColors: Record<TabValue, string> = {
  all: "#5E9ED5", // Blue
  web: "#F59E0B", // Amber / Orange
  ecommerce: "#10B981", // Green
};
const tabs = [
  { label: "All Packages", value: "all" },
  { label: "E-commerce", value: "ecommerce" },
  { label: "Web Designing / Development", value: "web" },
] as const;

type TabValue = (typeof tabs)[number]["value"];
export default function PricingSection() {
  // const [activeTab, setActiveTab] = useState<"all" | "web" | "ecommerce">(
  //   "all",
  // );
  const [activeTab, setActiveTab] = useState<TabValue>("all");

  const filteredPlans = useMemo(() => {
    if (activeTab === "all") return pricingPlans;

    return pricingPlans.filter((plan) =>
      plan.category.includes(activeTab as "web" | "ecommerce"),
    );
  }, [activeTab]);

  // const filteredPlans = useMemo(() => {
  //   if (activeTab === "all") return pricingPlans;
  //   return pricingPlans.filter((plan) => plan.category === activeTab);
  // }, [activeTab, pricingPlans]);

  return (
    <section className="relative">
      <div className="mx-auto ">
        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {tabs.map((tab) => {
            const Icon = tabIcons[tab.value];
            const color = tabColors[tab.value];
            const isActive = activeTab === tab.value;

            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActiveTab(tab.value)}
                className={`
          relative border  border-gray-200  flex items-center gap-2 px-5 py-3 rounded-lg transition-all duration-300
          ${isActive ? "text-white shadow-lg" : "bg-white text-[#5E9ED5] hover:bg-gray-50"}
        `}
                style={isActive ? { backgroundColor: color } : {}}
              >
                {/* Icon with dynamic color */}
                <Icon
                  size={20}
                  className="md:text-[28px]"
                  stroke={isActive ? "#ffffff" : color} // stroke matches tab color
                />

                {/* Tab Label */}
                <span>{tab.label}</span>

                {/* Optional underline for active tab */}
              </button>
            );
          })}
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {filteredPlans.map((plan) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                <PricingCard plan={plan} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        
      </div>

   
              {/* Call to Action */}
       <div className="section-style flex justify-center ">
 <div className="bg-[#d3e8f7]  px-5 py-5 mt-2 rounded-xl w-full md:w-1/2 text-center">
                        <h2 className="heading-second custom-portal-heading">Create Custom Portal</h2>
                        <p className="italic">Build a powerful, fully customizable portal tailored to your business needs.
Trusted by <strong>5+ Lakh</strong> users worldwide.</p>

                        <a
                          href="/contact"
                          className="inline-block view-all-btn w-full text-center mt-5 py-3 text-white text-[15px] font-semibold rounded leading-[150%] bg-[#5E9ED5] border border-transparent hover:border-[#5E9ED5] hover:bg-transparent hover:text-[#5E9ED5] transition-all duration-500"
                        >
                          Get Started Free →
                        </a>
                      </div>
       </div>           
    </section>
  );
}
