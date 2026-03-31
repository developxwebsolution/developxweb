"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

import { TechnologyContent } from "@/data/technologyData";

interface TechnologyTabsProps {
  content: TechnologyContent; // pass the content dynamically
}

export default function TechnologyTabs({ content }: TechnologyTabsProps) {
  const [activeTab, setActiveTab] = useState(content.tabs[0]?.key || "");
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const currentLogos =
    content.tabs.find((tab) => tab.key === activeTab)?.logos || [];

  return (
    <div className=" relative mx-auto text-center section-style">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-second text-center mb-5 md:mb-5">{content.heading}</h2>
          <p className="second-heading-content text-center">{content.subheading}</p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-15">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center md:gap-5 gap-3">
          {content.tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 text-[15px] font-normal leading-[150%] py-2 border rounded-full transition-all duration-500 ease-in-out ${
                activeTab === tab.key
                  ? "bg-[#589CD5] text-white"
                  : "border-[#589CD5] text-[#589CD5] hover:bg-blue-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content with Animation and Swiper */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <div className="px-[40px] relative technology-tabs">
              {/* Arrows */}
              <div
                ref={prevRef}
                className="absolute z-10 left-1 md:left-0 top-1/2 -translate-y-1/2 text-black shadow-md p-2 rounded-full cursor-pointer hover:bg-blue-100 transition"
              >
                <ArrowLeft size={20} />
              </div>
              <div
                ref={nextRef}
                className="absolute z-10 right-1 md:right-0 top-1/2 -translate-y-1/2 text-black shadow-md p-2 rounded-full cursor-pointer hover:bg-blue-100 transition"
              >
                <ArrowRight size={20} />
              </div>

              <Swiper
                modules={[Navigation]}
                loop={false}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  if (typeof swiper.params.navigation !== "boolean" && swiper.params.navigation) {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                  }
                }}
                spaceBetween={30}
                speed={500}
                breakpoints={{
                  320: { slidesPerView: 3 },
                  640: { slidesPerView: 3 },
                  1024: { slidesPerView: 9 },
                }}
              >
                {currentLogos.map((src, i) => (
                  <SwiperSlide key={i} className="flex justify-center items-center">
                    <div className="relative w-full h-[74px] rounded-xl hover:scale-90 transition-transform duration-300 flex items-center justify-center">
                      <Image src={src} alt={`Logo ${i}`} fill className="object-contain" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
