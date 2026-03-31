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
    question: "Why is PretaShop a good choice for my online business?",
    answer:
      "PrestaShop is a top open-source eCommerce platform offering complete flexibility, zero licensing cost, and full control over your store. It’s trusted by thousands of brands for its lightweight structure, customization options, strong performance, and SEO advantages.",
  },

  {
    question: "Is Laser Web Maker a trusted PrestaShop development company?",
    answer:
      "Yes. Laser Web Maker is one of the most trusted and leading PrestaShop development companies, known for building fast, secure, and fully customized online stores that drive conversions and long-term business growth.",
  },

  {
    question:
      "Can you migrate my existing store to PrestaShop without losing data?",
    answer:
      "Absolutely. We provide safe, top-quality, and seamless PrestaShop migration services, ensuring your products, customers, orders, configurations, and reports remain fully intact throughout the process.",
  },

  {
    question: "Will my PrestaShop store be mobile-friendly and SEO-friendly?",
    answer:
      "Yes. Every PrestaShop store we build is fully responsive, fast-loading, and optimized for SEO, helping you achieve better rankings, higher visibility, and improved user engagement.",
  },

  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes. We offer trusted PrestaShop maintenance services, including security updates, bug fixes, speed optimization, performance enhancements, content changes, and new feature implementation whenever needed.",
  },

  {
    question: "Do you offer PrestaShop speed optimization services?",
    answer:
      "Yes. We deliver top PrestaShop speed optimization by improving caching, code, server performance, and images to ensure ultra-fast loading speeds and the best possible SEO results.",
  },

  {
    question:
      "Can you set up and configure my PrestaShop store professionally?",
    answer:
      "Yes. Our team provides the best PrestaShop setup and configuration services, giving you a fully optimized, secure, and launch-ready store with all essential features properly installed.",
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
