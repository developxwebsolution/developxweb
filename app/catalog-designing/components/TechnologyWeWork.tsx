import React from "react";
import { motion, Variants, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
interface Feature {
  title: string;
  description: string;
  bgImage: string;
  link: string;
}

const features: Feature[] = [
  {
    title: "Adobe InDesign",
    description:
      "Professional-grade layout software for structured, premium catalog designs.",
    bgImage:
      "https://images.unsplash.com/photo-1658297063569-162817482fb6?auto=format&fit=crop&w=800&q=80",
    link: "/services/shopify-ecommerce",
  },
  {
    title: "Photoshop & Illustrator",
    description:
      "Used for retouching, editing, and creating high-quality visual assets",
    bgImage: "/images/web-dev/webservices/E-commerce-Website-WooCommerce.jpg",
    link: "/services/woocommerce-ecommerce",
  },
  {
    title: "Digital Catalog Tools",
    description:
      "Create responsive catalogs compatible with mobile, tablets, and web platforms.",
    bgImage: "/images/web-dev/webservices/Domain-Registration.jpg",
    link: "/services/domain-registration",
  },
  {
    title: "SEO-Optimized Content Tools",
    description:
      "Ensures your digital catalog ranks better and reaches more customers.",
    bgImage: "/images/web-dev/webservices/Server-Management.jpg",
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
        <Link
          href={feature.link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1 text-[#589CD5] text-[14px] rounded-[99px] border border-[#589CD5] hover:bg-[#589CD5] hover:text-white transition-all inline-block"
        >
          Learn More
        </Link>
      </div>
    </motion.div>
  );
};
// technologies We Use section end
export const TechnologyWeWork = () => {
  return (
    <div>
      <div className="px-[15px] md:px-[60px] pt-20">
        <div className="container mx-auto">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="heading-second text-[32px] md:text-[40px]font-normal leading-[120%] text-center  mb-10"
          >
            Technologies We Use – Building Modern, Reliable Websites
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
