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
    question: "Why should I hire a professional website developer?",
    answer:
      "A professional developer ensures your website is custom-built, fast, secure, and optimized for conversions. This saves you time, avoids technical errors, and results in a high-quality website that grows your business.",
  },
  {
    question: "Is your team one of the most trusted website developers?",
    answer:
      "Yes. Our team is known as one of the top and most trusted website development teams, delivering websites for businesses across various industries.",
  },
  {
    question: "How much does it cost to hire a website developer?",
    answer:
      "Costs depend on website type, complexity, and features. We offer **affordable packages** suitable for startups, small businesses, and enterprises.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Typically, a standard website takes 7–15 days. Larger or more complex websites may take longer, depending on requirements.",
  },
  {
    question: "Do you provide website redesign services?",
    answer:
      "Yes, we can **redesign your existing website** to improve UI/UX, speed, responsiveness, and conversions.",
  },
  {
    question: "Are your websites mobile-friendly and responsive?",
    answer:
      "Absolutely. Every website we build is fully responsive, working seamlessly on desktops, tablets, and smartphones.",
  },
  {
    question: "Do you offer ongoing support after website launch?",
    answer:
      "Yes, we provide **long-term support and maintenance** to keep your website secure, fast, and up-to-date.",
  },
  {
    question: "Can you develop e-commerce websites?",
    answer:
      "Yes, we develop **high-performing e-commerce websites** with smooth checkout, payment integration, and easy product management.",
  },
  {
    question: "Can I hire a dedicated website developer from your team?",
    answer:
      "Yes. You can hire a **dedicated developer** who will work exclusively on your project for faster execution and personalized attention.",
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
