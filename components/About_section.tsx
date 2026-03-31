"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About_section() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Image
            src="/images/home_img/home-about-img1.jpg"
            alt="web development company"
            width={680}
            height={680}
            className="rounded-3xl shadow-2xl object-cover"
          />

          {/* Floating Card */}
          <div className="absolute -bottom-6 -right-6 bg-white shadow-xl rounded-2xl p-5 border border-[#113F87]">
            <p className="text-sm font-semibold text-black">
              50+ Business Websites Delivered 🚀
            </p>
          </div>
        </motion.div>

        {/* CONTENT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
            Leading Web Development Company in India for Growing Businesses
          </h2>

          <p className="mt-4 text-black leading-relaxed text-lg">
            At DevelopX Web, we are a <strong>best website designing company in noida</strong> offering
            modern and affordable web design solutions for businesses of all sizes.
            Our focus is not just on design, but on creating high-performing,
            SEO-friendly websites that help you attract more customers and grow faster.
          </p>

          <p className="mt-2 text-black leading-relaxed">
            We specialize in business website development, landing pages, and
            ecommerce website development, ensuring every website we build is
            fast, responsive, and optimized for search engines.
          </p>

          <p className="mt-2 text-black leading-relaxed">
            Whether you are a startup or an established business, our goal is to
            provide you with a powerful online presence that converts visitors
            into real customers.
          </p>

          {/* FEATURES */}
          <div className="mt-4 grid grid-cols-2 gap-5">
            {[
              "SEO-Friendly Websites",
              "Affordable Web Design",
              "Fast Loading Speed",
              "Mobile Responsive Design",
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-100 p-4 rounded-xl text-sm font-medium text-black hover:bg-blue-50 transition"
              >
                {item}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-6">
            <button className="view-all-btn">
              Get Free Demo
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}