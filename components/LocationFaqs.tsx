"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageSquare } from "lucide-react";
import { FAQContent } from "@/data/faqContent";

interface FaqProps {
  content: FAQContent;
}

export default function Faq({ content }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <motion.div
      className="w-full section-style"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-5">
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

      <motion.div
        className="pt-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="space-y-4">
          {content.faqs.map((faq, index) => {
            const isActive = openIndex === index;

            return (
              <motion.div
                key={index}
                className={`p-4 rounded-xl cursor-pointer border transition-all 
                  ${
                    isActive
                      ? "border-[#5E9ED5] bg-[#ffffff] dark:bg-[#ffffff]"
                      : "border-neutral-300 dark:border-neutral-300 bg-white dark:bg-[#ffffff] hover:bg-[#e0e0e0] dark:hover:bg-[#e0e0e0]"
                  }
                `}
                onClick={() => toggle(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Question */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <MessageSquare className="mr-3" />
                    <h3
                      className={`faq-heading transition-colors ${
                        isActive ? "text-[#5E9ED5]" : "text-black"
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  <motion.div
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown
                      className={`transition-colors ${
                        isActive ? "text-[#5E9ED5]" : "text-black"
                      }`}
                    />
                  </motion.div>
                </div>

                {/* Answer */}
                <AnimatePresence>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="faq-answer mt-3 text-neutral-700 dark:text-neutral-800 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
