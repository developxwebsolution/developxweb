"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { MessageSquare } from "lucide-react";
interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Do you provide printing services?",
    answer:
      "We focus on creating high-quality, print-ready catalog designs that can be easily used with any local or online printing service. This gives you complete flexibility to choose your preferred printer while keeping the process fast, smooth, and cost-effective.",
  },
  {
    question: "Can you design both print and digital catalogs?",
    answer:
      "Yes, we design catalogs for both print and digital use. Whether you need a physical catalog, a PDF, or an e-catalog for online sharing, we make sure the design looks professional and works perfectly across all formats.",
  },
  {
    question: "Do you customize catalog designs for different businesses?",
    answer:
      "Absolutely. Every catalog is designed based on your business type, products, and brand style. We do not use generic templates. Each layout is customized to match your brand identity and communicate your message clearly.",
  },
  {
    question: "Can you handle product photography for catalogs?",
    answer:
      "Yes, we can assist with product photography and image optimization for catalogs. High-quality visuals play a major role in catalog design, and we ensure your products are presented clearly, attractively, and professionally.",
  },
  {
    question: "How long does it take to design a catalog?",
    answer:
      "The timeline depends on the number of pages, product details, and design complexity. Smaller catalogs can be completed quickly, while larger catalogs may take more time. We always share a clear timeline before starting the project.",
  },
  {
    question: "Will my catalog be ready for e-commerce or online sharing?",
    answer:
      "Yes, our catalogs are designed to be e-commerce-friendly and easy to share online. We structure layouts so products are easy to browse, and digital catalogs can be used on websites, email campaigns, or messaging platforms.",
  },
  {
    question: "Why choose Laser Web Maker for catalog designing?",
    answer:
      "We focus on clean design, clear communication, and reliable delivery. With an experienced design team and a simple, transparent process, we create catalogs that look professional, support sales, and strengthen your brand image.",
  },
];

export default function Faq() {
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
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="heading-second text-center "
      >
        Frequently Asked Questions (FAQs)
      </motion.h2>
      <motion.div
        className="pt-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="space-y-4">
          {faqs.map((faq, index) => {
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
                {/* Question Row */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <MessageSquare className="mr-3" />
                    <h3
                      className={` faq-heading transition-colors ${
                        isActive ? "text-[#5E9ED5]" : "text-black"
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  <div>
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
