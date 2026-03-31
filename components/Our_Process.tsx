"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const faqs = [
  {
    question: "Inception",
    image: "/images/home_img/our-process/inception.webp",
    answer:
      "We begin by getting to know you, your business, and your goals. This is where we listen, ask questions, and understand what success looks like for you. Together, we'll plan the perfect path forward for your project.",
    // image: "/images/services-img/designing-service.png",
    icon: "inception",
  },
  {
    question: "Contract",
    answer:
      "We make everything clear and transparent with a simple agreement that outlines exactly what we'll deliver, when, and how. No surprises, just a clear plan that puts your mind at ease.",
    image: "/images/home_img/our-process/contract.webp",
    icon: "contract",
  },
  {
    question: "Build",
    answer:
      "This is where we bring your vision to life. We design and develop your website with regular check-ins, so you're always involved and informed. You'll see progress every step of the way.",
    image: "/images/home_img/our-process/build.webp",
    icon: "build",
  },
  {
    question: "UAT + Launch",
    answer:
      "Before launch, we test everything together to make sure it works perfectly for you and your visitors. Then, with your approval, we launch your new website to the world and celebrate together!",
    image: "/images/home_img/our-process/launch.webp",
    icon: "launch",
  },
];

export default function Our_Process() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [heights, setHeights] = useState<string[]>(
    Array(faqs.length).fill("0px"),
  );

  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const newHeights = [...heights];

    if (openIndex !== null && contentRefs.current[openIndex]) {
      newHeights[openIndex] =
        `${contentRefs.current[openIndex]?.scrollHeight}px`;
    }

    faqs.forEach((_, idx) => {
      if (idx !== openIndex) {
        newHeights[idx] = "0px";
      }
    });

    setHeights(newHeights);
  }, [openIndex]);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-[#F6F8FB]">
      <div className="container-width mx-auto px-[15px] py-10 md:px-15 md:py-15">
        <div className="process-heading flex flex-col gap-5">
          <div className="flex flex-col md:flex-row justify-between gap-9 md:gap-12 items-start">
            <div className="w-full md:w-1/2">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="heading-second"
              >
                Website Development Process
              </motion.h2>
            </div>
            <div className="w-full md:w-[36%]">
              <p className="text-black text-[16px] leading-[150%] font-normal">
                At <strong>Laser Web Maker</strong>, we follow a professional,
                step-by-step approach to deliver flawless websites focused on
                quality, performance, and your business goals.
              </p>
            </div>
          </div>

          <div className="outer-process-step bg-white p-5 w-full">
            <div className="flex flex-col w-full gap-[30px]">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                const isLast = idx === faqs.length - 1;

                return (
                  <div
                    key={idx}
                    className="flex flex-row w-full items-start gap-3 relative"
                  >
                    {/* Timeline */}
                    <div className="flex flex-col items-center pt-1 min-w-[10px]">
                      <div
                        className={`w-[32px] h-[32px] rounded-full flex items-center justify-center text-sm font-bold z-10 ${
                          isOpen
                            ? "bg-[#27AAE0] text-white"
                            : "bg-[#3d3d3d] text-white"
                        }`}
                      >
                        {idx + 1}
                      </div>
                      {!isLast && (
                        <div
                          className={`w-[2px] transition-all duration-500 ease-in-out ${
                            openIndex !== null && idx === openIndex
                              ? "bg-[#27AAE0] h-[300px] md:h-[250px]"
                              : openIndex !== null && idx < openIndex
                                ? "bg-[#27AAE0] h-[35px]"
                                : "bg-[#3d3d3d] h-[35px]"
                          }`}
                        />
                      )}
                    </div>

                    {/* FAQ Content */}
                    <div className="flex-1 transition-all duration-500 bg-[#F6F8FB] rounded-xl p-5">
                      <button
                        aria-expanded={isOpen}
                        onClick={() => toggle(idx)}
                        className="w-full text-left flex justify-between items-center"
                      >
                        <span className="text-[18px] md:text-[24px] font-normal text-black leading-[120%]">
                          {faq.question}
                        </span>
                        <span className="text-xl flex items-center cursor-pointer">
                          <Image
                            src={`/images/icons/${faq.icon || "chevron-down"}.svg`}
                            alt="Toggle"
                            width={32}
                            height={32}
                            className={`transition-all duration-300 ${
                              isOpen ? "filter-blue" : "opacity-50 brightness-0"
                            }`}
                          />
                        </span>
                      </button>

                      {/* Answer */}
                      <div
                        ref={(el) => {
                          contentRefs.current[idx] = el;
                        }}
                        style={{
                          maxHeight: heights[idx],
                          overflow: "hidden",
                          transition: "height 0.4s ease",
                        }}
                      >
                        <div className="pt-4 lg:flex-row gap-5 flex flex-col  ">
                          <Image
                            src={faq.image}
                            alt="location"
                            width={480}
                            height={440}
                          />
                          <p className="d-flex m-auto text-black ">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center">
            <Link href="/contact" className="view-all-btn">
              Get Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
