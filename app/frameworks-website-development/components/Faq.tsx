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
    question: "Which framework is best for startups?",
    answer:
      "For startups, we recommend Laravel, Node.js, or React.js because they are the top choices for fast implementation, scalability, and cost-effectiveness. These frameworks offer modern functionalities and are trusted by many successful startups worldwide.",
  },
  {
    question: "Can you migrate my existing website to a new framework?",
    answer:
      "Yes! Our team specializes in seamless migration services with zero data loss, optimized speed, and updated features. We provide the most trusted migration solutions to ensure your website performs at its best on a modern framework.",
  },
  {
    question: "How do you ensure website security?",
    answer:
      "We follow the most secure coding practices, perform thorough vulnerability testing, integrate SSL certificates, and use advanced firewalls and encryption techniques to protect sensitive data. Our approach is trusted by businesses of all sizes to keep their websites safe.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely! All our frameworks are designed to ensure fully responsive, mobile-friendly websites. This guarantees that your website will work flawlessly across all devices—mobile, tablet, and desktop—ensuring the best user experience possible.",
  },
  {
    question: "Do you provide ongoing support after deployment?",
    answer:
      "Yes, we offer continuous support after deployment, including maintenance, updates, bug fixes, and performance optimization. We are one of the most trusted teams to keep your website running smoothly with ongoing technical support.",
  },
  {
    question: "How long will it take to build my website?",
    answer:
      "The development timeline varies depending on the complexity of your project, but typically, it takes from 4 to 12 weeks to launch a fully functional website. Our experienced team ensures the fastest delivery time without compromising quality.",
  },
  {
    question: "Can I manage my website content after launch?",
    answer:
      "Yes! We provide easy-to-use content management systems (CMS) that allow you to manage and update your website’s content quickly and efficiently. This makes us one of the top choices for businesses that want full control over their website content.",
  },
  {
    question: "Do you offer SEO optimization services?",
    answer:
      "Yes, we specialize in SEO-friendly web development to ensure your website ranks higher on search engines. Our team uses the latest SEO techniques and best practices to increase your website's visibility, making us the most trusted partner for businesses seeking better search rankings.",
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
