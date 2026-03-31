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
    question: "What type of PHP websites do you develop?",
    answer:
      "We develop a wide range of PHP websites, including business websites, custom web applications, CMS-based sites, e-commerce platforms, and news or blog websites. Each project is tailored to match your business needs and goals.",
  },
  {
    question: "Do you offer custom PHP development?",
    answer:
      "Yes, we provide fully custom PHP development services. We build solutions from scratch based on your requirements, ensuring clean code, secure functionality, and scalable performance for long-term use.",
  },
  {
    question: "Can you build CMS websites using PHP?",
    answer:
      "Absolutely. We develop PHP-based CMS websites that make content management simple. You can easily update pages, blogs, and images without technical knowledge, while the website remains fast and SEO-friendly.",
  },
  {
    question: "Do you create PHP e-commerce websites?",
    answer:
      "Yes, we build PHP e-commerce websites with features like product management, secure payment gateways, order tracking, and smooth checkout processes. Our focus is on performance, security, and user experience.",
  },
  {
    question: "Can you develop news and blog websites in PHP?",
    answer:
      "Yes, we design and develop PHP-based news and blog websites that are easy to manage and easy to read. These websites are structured for fast loading, clean layouts, and regular content publishing.",
  },
  {
    question: "Do you provide PHP website maintenance and support?",
    answer:
      "Yes, we offer ongoing PHP maintenance and support services. This includes bug fixes, security updates, performance improvements, backups, and technical assistance to keep your website running smoothly.",
  },
  {
    question: "Why choose Laser Web Maker for PHP web development?",
    answer:
      "We focus on reliable development, clear communication, and long-term support. Our experienced PHP developers build secure, scalable, and easy-to-manage websites that help businesses grow online.",
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
