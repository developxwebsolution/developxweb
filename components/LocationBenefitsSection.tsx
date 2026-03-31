"use client";

import { motion } from "framer-motion";
import { BenefitsContent } from "@/data/benefitsData";

interface BenefitsSectionProps {
  content: BenefitsContent;
}

export default function BenefitsSection({ content }: BenefitsSectionProps) {
  return (
    <section className="section-style">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 text-center mb-5 md:mb-5">{content.heading}</h2>
            <p className="second-heading-content text-center">{content.subheading}</p>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="p-3 border rounded-2xl border-[#5E9ED5] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-b-4 flex gap-5"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-[#5E9ED5]" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
