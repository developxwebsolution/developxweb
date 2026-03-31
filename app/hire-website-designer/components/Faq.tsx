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
      "Why should I hire a professional website designer instead of using a ready-made template?",
    answer:
      "A professional website designer creates a unique, fully customized, and SEO-friendly website that fits your brand perfectly. Templates look generic and often limit functionality, while a designer ensures better performance, better user experience, and higher conversion rates.",
  },
  {
    question:
      "Is Laser Web Maker one of the most trusted website design companies?",
    answer:
      "Yes. Laser Web Maker is known as a top and most trusted website design company, delivering high-quality, affordable, and business-focused website solutions for clients across different industries.",
  },
  {
    question: "How much does it cost to hire a website designer?",
    answer:
      "The cost depends on the type of website, number of pages, features, and design complexity. We offer affordable pricing options suitable for startups, small businesses, and enterprises.",
  },
  {
    question: "How long will it take to complete my website?",
    answer:
      "Most standard websites take between 7 to 15 days to complete. Larger or advanced projects may take more time depending on the required functionality and design scope.",
  },
  {
    question: "Do you provide revisions if I want changes in the design?",
    answer:
      "Yes. We offer multiple revision rounds to make sure the design matches your expectations and perfectly represents your brand.",
  },
  {
    question: "Can you redesign my existing website and improve its UI/UX?",
    answer:
      "Absolutely. We can redesign your old website with a fresh layout, modern visuals, smooth navigation, and better user experience to help you increase engagement and conversions.",
  },
  {
    question: "Is the website mobile-friendly and responsive?",
    answer:
      "Yes. Every website we design is fully responsive, meaning it works smoothly on mobiles, tablets, and desktops without any layout issues.",
  },
  {
    question: "Do you also build WordPress websites?",
    answer:
      "Yes, we specialize in building custom WordPress websites that are easy to manage, secure, fast, and completely tailored to your business needs.",
  },
  {
    question: "Do you offer support after the website is launched?",
    answer:
      "Yes. We provide ongoing support, updates, and maintenance to ensure your website runs smoothly even after launch.",
  },
  {
    question: "Can I hire a dedicated website designer for my project?",
    answer:
      "Yes. You can hire a dedicated designer from our team who will work exclusively on your project, ensuring faster execution and personalized attention.",
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
