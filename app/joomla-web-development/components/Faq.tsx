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
    question: "Why should I choose Joomla for my business website?",
    answer:
      "Joomla is flexible, secure, and SEO-friendly, making it the most trusted CMS for businesses seeking dynamic websites with rich functionality.",
  },
  {
    question: "Can you develop custom Joomla templates for my brand?",
    answer:
      "Yes. We create unique, fully branded Joomla templates that reflect your business identity and meet your functional requirements.",
  },
  {
    question: "Will my Joomla website be mobile-friendly?",
    answer:
      "Absolutely. All our Joomla websites are fully responsive and optimized for seamless viewing across devices.",
  },
  {
    question: "Can Joomla support eCommerce and complex web applications?",
    answer:
      "Yes. Joomla supports eCommerce, corporate portals, community sites, NGOs, and educational institutions, allowing for robust and scalable solutions.",
  },
  {
    question: "Do you provide Joomla maintenance and support?",
    answer:
      "Our team offers ongoing maintenance, updates, backups, and performance optimization, keeping your website secure and running smoothly.",
  },
  {
    question: "Can I integrate third-party extensions in Joomla?",
    answer:
      "Absolutely. Joomla’s extensive extension library allows you to integrate various plugins to enhance functionality.",
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
