import React from "react";
import { motion, Variants, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

import { useEffect } from "react";
interface Feature {
  title: string;
  description: string;
  bgImage: string;
  link: string;
}

const features: Feature[] = [
  {
    title: "PSD to HTML Conversion",
    description:
      "We convert your PSD files into pixel-perfect, cleanly coded HTML that matches every detail of your design.",
    bgImage: "/images/PSDToHTMLDesigning/psd-to-html.jpeg",
    link: "/services/shopify-ecommerce",
  },
  {
    title: "Figma / XD / Sketch / PDF to HTML",
    description:
      "Your layouts from any design tool are transformed into high-quality, responsive HTML pages.",
    bgImage: "/images/PSDToHTMLDesigning/Figma-XD-Sketch-PDF-to-HTML.jpg",
    link: "/services/woocommerce-ecommerce",
  },
  {
    title: "Responsive HTML Development",
    description:
      "Every page is fully mobile-friendly and adapts smoothly across all screen sizes.",
    bgImage: "/images/PSDToHTMLDesigning/Responsive-HTML-Development.png",
    link: "/services/domain-registration",
  },
  {
    title: "Landing Page / Homepage Conversion",
    description:
      "We build fast-loading, conversion-ready HTML pages for promotions, campaigns, and homepages.",
    bgImage: "/images/PSDToHTMLDesigning/landing-page-psd-to-html.jpg",
    link: "/services/server-management",
  },
];

const boxVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const FeatureBox: React.FC<{ feature: Feature; index: number }> = ({
  feature,
  index,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={boxVariants}
      initial="hidden"
      animate={controls}
      className="relative group overflow-hidden rounded-2xl shadow-[0_2px_12px_rgba(230,230,230,0.2)] hover:shadow-2xl transition-all duration-500 cursor-pointer h-[260px]"
    >
      {/* BG Image */}
      <Image
        src={feature.bgImage}
        alt={feature.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Title (Hidden on mobile => always hovering mode) */}
      <div className="hidden md:flex absolute inset-0 flex-col justify-end bottom-8 items-center text-center px-4 text-white opacity-100 md:opacity-100 md:group-hover:opacity-0 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500">
        <h4 className="text-[15px] bg-[#2d2e2e71] shadow-[0_2px_10px_rgba(230,230,230,0.4)] px-3 py-1 rounded-3xl font-semibold mb-2">
          {feature.title}
        </h4>
      </div>

      {/* Hover Content — always visible on mobile */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500">
        <h4 className="text-[16px] font-semibold mb-1">{feature.title}</h4>
        <p className="text-sm leading-[140%] mb-3">{feature.description}</p>
      </div>
    </motion.div>
  );
};
// technologies We Use section end
export const TechnologyWeWork = () => {
  return (
    <div>
      <div className="section-style2">
        <div className="container mx-auto">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="heading-second text-[32px] md:text-[40px]font-normal leading-[120%] text-center  mb-10"
          >
            Our PSD to HTML Services
          </motion.h2>
          {/* Heading */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureBox key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
