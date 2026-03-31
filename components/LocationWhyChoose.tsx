"use client";
import React from "react";
import { motion } from "framer-motion";
import { WhyChooseContent } from "@/data/whyChooseContent";

/* Color palette (auto repeat) */
const colors = [
  "#f05a29",
  "#8dc53e",
  "#662c91",
  "#b5041a",
  "#f8bd4a",
  "#27aae0",
];

interface WhyChooseProps {
  content: WhyChooseContent;
}

export const WhyChoose = ({ content }: WhyChooseProps) => {
  const items = content.items.length ? content.items : [];

  return (
    <section className="section-style2 bg-[#F6F7FA] ">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 text-center mb-5 md:mb-5">
              {content.heading}
            </h2>

            <p className="second-heading-content text-center">
              {content.subheading}
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6 md:gap-x-10">
          {items.map((item, index) => {
            const Icon = item.icon;
            const color = colors[index % colors.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                className="flex items-center gap-2 md:gap-4 group"
              >
                {/* Icon Box */}
                <div
                  className="relative w-8 h-8 md:w-12 md:h-12 rounded-full bg-white shadow-md 
                             flex items-center justify-center 
                             overflow-hidden transition-all duration-300
                             group-hover:shadow-lg"
                  style={{ color }}
                >
                  <div
                    style={{ backgroundColor: color }}
                    className="absolute inset-0 rounded-full 
                               opacity-0 group-hover:opacity-100 
                               transition-opacity duration-300"
                  />

                  <Icon className="relative z-10 w-4 h-4 md:w-[22px] md:h-[22px] transition-colors duration-300 group-hover:text-white" />
                </div>

                {/* Text */}
                <p className="text-black font-medium text-sm md:text-base">
                  {item.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
