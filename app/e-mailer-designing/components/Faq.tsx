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
    question: "What is an emailer and why does my business need it? ",
    answer:
      "An emailer is a professionally designed marketing email used to promote products, announce updates, share offers, or communicate with your audience. Businesses need emailers because they provide a direct way to reach customers, increase engagement, build brand recall, and drive conversions — all at a very low cost compared to other marketing methods.",
  },
  {
    question: "How long does it take to design an emailer?",
    answer:
      "The timeline depends on factors like design complexity, content availability, and the number of revisions. Usually, a standard emailer takes 24–48 hours, while more detailed, campaign-focused emailers may require 2–4 days. We always aim to deliver quickly without compromising on design quality.",
  },
  {
    question: "Do you provide both HTML emailers and image-based emailers?",
    answer:
      "Yes. We design:1. HTML Emailers that are responsive, lightweight, and ideal for high deliverability. 2. Image-Based Emailers that include creative visuals and graphics for brand impact.You can choose either based on your campaign goals.",
  },
  {
    question: "Will the emailer design work properly on all devices?",
    answer:
      "Absolutely. All our emailers are fully responsive, meaning they adapt smoothly to desktops, laptops, tablets, and mobile devices. We test layouts across multiple screen sizes to ensure perfect readability everywhere.",
  },
  {
    question: "Can you design emailers that match my brand guidelines?",
    answer:
      "Yes, 100%. We follow your brand colors, fonts, logo usage, imagery style, and tone of voice. Our goal is to create emailers that look like a natural extension of your brand, ensuring consistency across all communications.",
  },
  {
    question: "Do you help with writing the content for the emailer?",
    answer:
      "Yes. If you don’t have content ready, our team can create clear, engaging, and conversion-friendly copy for your campaign. Whether it’s for promotions, product launches, or newsletters, we help craft the right message.",
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
