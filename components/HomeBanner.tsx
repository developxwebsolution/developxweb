"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    title: "Build a Website That Brings Real Customers",
    desc: "We create high-performance, modern websites designed to grow your business online.",
    img: "/images/home_img/banner-1.jpg",
    btn: "Get Free Demo",
  },
  {
    title: "Grow Your Business with Smart Web Solutions",
    desc: "From design to development, we help you turn visitors into paying customers.",
    img: "/images/home_img/banner2.jpg",
    btn: "Start Now",
  },
  {
    title: "Affordable Websites Starting ₹2,999",
    desc: "Perfect for startups and small businesses looking to build a strong online presence.",
    img: "/images/home_img/banner3.jpg",
    btn: "Get Quote",
  },
];

export default function PremiumHero() {
  return (
    <section className="relative w-full h-[75vh] md:h-[80vh]">

      {/* CUSTOM ARROWS */}
      <div className="hidden md:flex justify-between absolute top-1/2 -translate-y-1/2 z-20 w-full px-4">
        <div className="hero-prev cursor-pointer text-black bg-white/90 backdrop-blur-md shadow-[0_2px_10px_rgb(94_158_213_/_50%)] hover:bg-blue-100 transition-all duration-500 p-3 rounded-full">
          <ArrowLeft size={20} />
        </div>
        <div className="hero-next cursor-pointer text-black bg-white/90 backdrop-blur-md shadow-[0_2px_10px_rgb(94_158_213_/_50%)] hover:bg-blue-100 transition-all duration-500 p-3 rounded-full">
          <ArrowRight size={20} />
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        loop
        className="h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-[75vh] md:h-[80vh]">

              {/* Background Image */}
              <Image
                src={slide.img}
                alt="hero"
                fill
                className="object-cover"
                priority
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center text-center px-6 z-10">
                <div className="max-w-3xl">

                  <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-white"
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 text-lg md:text-xl text-gray-200"
                  >
                    {slide.desc}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-8 flex justify-center gap-4"
                  >
                    <Link href="/contact" className="px-6 py-3 rounded-xl bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-[#113F87] hover:text-white transition-all duration-500">
                      {slide.btn}
                    </Link>

                    <Link href="/contact" className="px-6 py-3 rounded-xl border border-white text-white hover:bg-[#113F87] hover:text-white transition-all duration-500">
                      Contact Us
                    </Link>
                  </motion.div>

                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}