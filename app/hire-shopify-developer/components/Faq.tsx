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
    "question": "Why should I hire a professional Shopify developer?",
    "answer": "Hiring a Shopify developer ensures your store is built professionally with custom design, better performance, mobile responsiveness, and higher conversion potential. A professional developer saves you time and helps you avoid costly technical issues."
  },
  {
    "question": "Is your team one of the most trusted Shopify developers?",
    "answer": "Yes, our team is known as one of the top and most trusted Shopify development teams, helping businesses build high-quality and conversion-focused online stores."
  },
  {
    "question": "How much does it cost to hire a Shopify developer?",
    "answer": "The cost depends on the complexity of your store, features required, and customization level. We offer affordable pricing options suitable for startups and established brands."
  },
  {
    "question": "How long does it take to build a Shopify store?",
    "answer": "A standard Shopify store usually takes around 7 to 12 days. More advanced stores with custom features may take longer depending on project needs."
  },
  {
    "question": "Can you customize my Shopify theme?",
    "answer": "Yes, we can fully customize your existing Shopify theme to match your brand style, improve usability, and enhance performance."
  },
  {
    "question": "Do you provide Shopify SEO services?",
    "answer": "Yes, we make sure your Shopify store is SEO-friendly with optimized structure, clean URLs, fast speed, and better search visibility."
  },
  {
    "question": "Can you redesign my existing Shopify store?",
    "answer": "Absolutely. We can redesign your Shopify store with a modern layout, improved navigation, and better UI/UX to increase conversions."
  },
  {
    "question": "Do you offer long-term support after launch?",
    "answer": "Yes, we provide ongoing maintenance, updates, and support to ensure your store stays secure, fast, and up to date."
  },
  {
    "question": "Can I hire a full-time Shopify developer from your team?",
    "answer": "Yes. You can hire a dedicated Shopify developer who will work exclusively on your project for faster results."
  },
  {
    "question": "Do you help with Shopify apps and integrations?",
    "answer": "Yes, we integrate essential Shopify apps like SEO, payment systems, CRM, marketing tools, reviews, automation, and more."
  }
]

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
       Frequently Asked Questions{" "}
        <span className="text-[#5E9ED5]">(FAQs)</span>
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
