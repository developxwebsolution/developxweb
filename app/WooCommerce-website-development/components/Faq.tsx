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
    question:
      "Why is WooCommerce one of the most trusted e-commerce platforms?",
    answer:
      "WooCommerce is widely trusted because it is flexible, cost-effective, open-source, and built on WordPress. It lets businesses customize everything—design, checkout, SEO, and integrations—making it perfect for small and large brands alike.",
  },
  {
    question: "How much does a WooCommerce website cost?",
    answer:
      "The cost depends on design complexity, custom features, payment integrations, and the number of products. At Laser Web Maker, we offer affordable packages tailored to all business sizes.",
  },
  {
    question: "Is WooCommerce secure for online transactions?",
    answer:
      "Yes. When paired with SSL, secure hosting, and trusted payment gateways, WooCommerce becomes a highly secure and reliable platform for processing online transactions.",
  },
  {
    question:
      "Can you help me migrate my existing Shopify or Magento store to WooCommerce?",
    answer:
      "Absolutely. Our team handles complete migration—products, orders, customers, and SEO structure—without any data loss, ensuring a smooth transition to WooCommerce.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, we offer monthly and annual support packages that include updates, security monitoring, bug fixes, speed optimization, and the integration of new features as your business evolves.",
  },
  {
    question: "How long does it take to set up a WooCommerce store?",
    answer:
      "A basic WooCommerce store can be set up within 7–14 days, while custom-built stores with advanced features and integrations may take 3–6 weeks, depending on complexity.",
  },
  {
    question: "Can you create custom features for my WooCommerce store?",
    answer:
      "Yes! We offer custom development for plugins, themes, and integrations, ensuring that your store has the exact functionality needed to meet your business goals.",
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
