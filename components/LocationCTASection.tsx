"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import ModalForm from "./ModalForm";
import { ctaContent, CTAContent } from "@/data/ctaContent";

export default function CTASection({
  content = ctaContent.default,
}: {
  content?: CTAContent;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="cta-section-style">
      <section
        className="relative overflow-hidden text-white px-5 md:px-15 pb-15 pt-15 rounded-2xl"
        style={{
          backgroundImage:
            "url('/images/home_img/cta-banner2.jpg'), linear-gradient(to right, #5E9ED5, #5E9ED5)",
          backgroundBlendMode: "overlay",
        }}
      >
        {/* Overlay for Depth */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

        <div className="relative container mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Left Side - Text */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <h2 className="our-trust-heading  text-3xl md:text-4xl font-bold mb-6 leading-snug">
              {content.heading}
            </h2>

            <p className="max-w-xl mx-auto md:mx-0 mb-8 text-lg opacity-90">
              {content.description}
            </p>

            {/* CTA Button */}
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center gap-2 cursor-pointer bg-white text-[#4A89C9] font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-[#f5f8ff] hover:shadow-xl transition-all text-[15px]"
              whileTap={{ scale: 0.95 }}
            >
              {content.buttonText}
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </motion.button>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            initial={{ opacity: 0, x: 60, y: 40 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <div
              className="
                relative
                mx-auto md:mx-0
                w-80 h-80 sm:w-62 sm:h-62 md:w-74 md:h-74 lg:w-70 lg:h-70
                rounded-full
                overflow-hidden
                bg-gray-300
                flex items-center justify-end
              "
            >
              <Image
                fill
                src="/images/home_img/call-to-action-img1.png"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* MODAL */}
        <ModalForm isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      </section>
    </div>
  );
}
