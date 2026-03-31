"use client"; // Optional if you're in Next.js App Router and using Swiper interactivity

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";
import "swiper/css"; // ✅ Required Swiper styles
// import "swiper/css/navigation";
// import "swiper/css/pagination";

const cards = [
  {
    icon: "/images/home_img/svg-logo/real-estate.svg",
    title: "Real Estate & Property",
    image: "/images/home_img/real-estate-property.webp",
    link: "#",
  },
  {
    icon: "/images/home_img/svg-logo/travel.svg",
    title: "Travel",
    image: "/images/home_img/travel.webp",
    link: "#",
  },
  {
    icon: "/images/home_img/svg-logo/healthcare.svg",
    title: "Healthcare",
    image: "/images/home_img/healthcare.webp",
    link: "#",
  },
  {
    icon: "/images/home_img/svg-logo/education.svg",
    title: "Education",
    image: "/images/home_img/education.webp",
    link: "#",
  },
  {
    icon: "/images/home_img/svg-logo/transport.svg",
    title: "Transport",
    image: "/images/home_img/transport.webp",
    link: "#",
  },
  {
    icon: "/images/home_img/svg-logo/ecommerce.svg",
    title: "E-commerce, Retail & B2B",
    image: "/images/home_img/ecommerce.webp",
    link: "#",
  },
  {
    icon: "/images/home_img/svg-logo/gaming.svg",
    title: "Gaming & Leisure",
    image: "/images/home_img/gaming.webp",
    link: "#",
  },
  {
    icon: "/images/home_img/svg-logo/food.svg",
    title: "Food & Restaurant",
    image: "/images/home_img/food-restaurant.webp",
    link: "#",
  },
];

export default function Serving_Industries() {
  return (
    <div className="">
      <div className="section-style2  md:px-[15px] md:py-[15px] bg-[#F6F8FB] ">
        <div className="inner-section">
          {/* Heading */}
            <div className="heading flex flex-col md:flex-row justify-between items-center gap-4 mb-5 md:mb-10">
            
            <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="heading-second"
                  >
                    Serving Industries
                  </motion.h2>
            <Link
              href="#"
              className="view-all-btn hidden md:inline-block "
            >
              View All
            </Link>
          </div>

          {/* Mobile Swiper */}
          <div className="block md:hidden">
            <Swiper
              spaceBetween={15}
              slidesPerView={1.2}
              modules={[Autoplay]}
              autoplay={{ delay: 3000 }}
            >
              {cards.map((card, index) => (
                <SwiperSlide key={index}>
                  <Link href={card.link}>
                    <div className="relative h-[280px] rounded-lg overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${card.image}')` }}
                      >
                        <div className="absolute bottom-[10px] text-center w-full text-white p-3">
                          <div className="flex gap-[10px] justify-center items-center">
                            <Image
                              src={card.icon}
                              alt={card.title}
                              width={40}
                              height={40}
                              loading="lazy"
                            />

                            <h3 className="text-[15px] leading-[120%] font-normal">
                              {card.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:flex flex-wrap gap-4 justify-between">
            {cards.map((card, index) => (
              <Link
                key={index}
                href={card.link}
                className="relative w-full sm:w-[48%] lg:w-[23%] h-[280px] rounded-lg overflow-hidden group"
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${card.image}')` }}
                >
                  <div className="absolute bottom-[10px] text-center w-full text-white p-3">
                    <div className="flex gap-[10px] justify-center items-center">
                      <Image
                        src={card.icon}
                        alt={card.title}
                        width={40}
                        height={40}
                        loading="lazy"
                      />
                      <h3 className="serving_industries">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
{/* mobile mode */}
          <div className="text-center mt-5">
          <Link
          href="#"
          target="_blank"
          className="view-all-btn-mobile inline-block md:hidden "
        >
          View All
        </Link>
      </div>
          
        </div>
      </div>
    </div>
  );
}
