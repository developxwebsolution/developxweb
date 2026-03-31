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
    question: "What is PSD to HTML conversion and why do I need it?",
    answer:
      "PSD to HTML conversion is the process of turning your design file (PSD, Figma, XD, Sketch, or PDF) into a fully functional, responsive HTML webpage. You need this service because a design alone cannot work on the web — it must be translated into clean, browser-compatible HTML, CSS, and JS. Proper conversion ensures fast loading, pixel-perfect accuracy, and a professional foundation for your website.",
  },
  {
    question: "Do you hand-code everything or use automated tools?",
    answer:
      "We write every line of code manually. Automated tools create messy, unoptimized code—causing slow performance and poor SEO. Hand-coded HTML gives you cleaner structure, faster loading, easier editing, and long-term stability, making it the best choice for professional websites.",
  },
  {
    question: "Can you convert designs from Figma, XD, Sketch, or PDF too?",
    answer:
      "Absolutely. Even though the term says “PSD to HTML,” we work with all major design formats including Figma, Adobe XD, Sketch, Illustrator, and even PDF layouts. No matter the file type, we convert it into clean, responsive, and high-quality HTML.",
  },
  {
    question: "Will the final HTML be mobile-friendly?",
    answer:
      "Yes, completely. Every layout we convert is made responsive using Flexbox, CSS Grid, Bootstrap, or Tailwind—depending on your preference. Your website will work smoothly on mobiles, tablets, desktops, and all screen sizes.",
  },
  {
    question: "Do you provide SEO-friendly coding?",
    answer:
      "Yes, SEO is built into every project. We use semantic HTML tags, optimized image sizes, structured content, and lightweight code to help your pages load faster and rank better on Google right from the start.",
  },
  {
    question: "How long does PSD to HTML conversion usually take?",
    answer:
      "The timeline depends on design complexity. A simple single-page conversion may take 1–2 days, while a multi-page, feature-rich layout can take anywhere from 4–7 days. We always prioritize quality while ensuring fast delivery.",
  },
  {
    question: "Can you integrate the HTML into WordPress or another CMS?",
    answer:
      "Yes. If you want your HTML pages converted into a WordPress theme or integrated into your CMS, we offer that as an add-on service. This makes it easier to manage your content without coding.",
  },
  {
    question: "Do you offer support after the project delivery?",
    answer:
      "Yes, we offer dedicated post-delivery support for bug fixes, updates, and minor adjustments. Your satisfaction matters, and we ensure the final output works perfectly across all browsers and devices.",
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
