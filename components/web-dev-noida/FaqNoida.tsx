"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Why choose a Web Development company in Noida?",
    answer:
      "Noida is a major IT hub with top developers, affordable pricing, and fast project delivery, making it a perfect location for high-quality web development.",
  },
  {
    question: "Do you build websites using Next.js?",
    answer:
      "Yes, we use Next.js for building fast, SEO-optimized, and scalable websites with server-side rendering and exceptional performance.",
  },
  {
    question: "Can I get a fully responsive and mobile-friendly website?",
    answer:
      "Absolutely. Every project we build is fully responsive, tested across devices, and optimized for mobile-first user experience.",
  },
  {
    question: "Do you offer complete UI/UX design services?",
    answer:
      "Yes, we offer modern UI/UX design with Tailwind CSS, Framer Motion animations, and pixel-perfect layouts tailored to your brand.",
  },
  {
    question: "Do you provide support and maintenance after project completion?",
    answer:
      "We provide monthly and yearly maintenance packages, including updates, bug fixes, performance tuning, and security enhancements.",
  },
  {
    question: "How long does it take to develop a website?",
    answer:
      "The timeline typically ranges from 7 days for simple websites to 30–45 days for advanced custom platforms depending on features.",
  },
];

export default function FaqNoida() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <motion.div
      className="w-full px-[15px] md:px-15 mx-auto pt-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* 🔥 Animated Heading (same as your sample) */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="heading-second text-[32px] md:text-[40px] font-normal leading-[120%] text-center mb-10"
      >
       Frequently Asked Questions{" "}
        <span className="text-[#5E9ED5]">(FAQs)</span>
      </motion.h2>
           <motion.div
      className="pt-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }} // plays once when 20% visible
    >
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isActive = openIndex === index;

          return (
            <motion.div
              key={index}
              className={`p-4 rounded-xl cursor-pointer shadow-sm border transition-all 
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
                <h3
                  className={`text-[16px] transition-colors ${
                    isActive ? "text-[#5E9ED5]" : "text-black"
                  }`}
                >
                  {faq.question}
                </h3>

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
                    className="mt-3 text-neutral-700 dark:text-neutral-800 leading-relaxed"
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
