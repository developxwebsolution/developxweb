// components/WhatWeDeliver.tsx
import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Eye,
  Code,
  Search,
  Smartphone,
  Zap,
  Settings,
  TrendingUp,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const WhatWeDeliver: React.FC = () => {
  const items = [
    {
      title: "Visually Attractive",
      description:
        "We design websites that instantly grab attention and represent your brand with a clean, modern, and professional look. Every layout, color choice, and element is crafted to create a memorable user experience.",
      icon: Eye,
      color: "text-purple-500",
      bgColor: "bg-purple-100",
    },
    {
      title: "Technically Strong",
      description:
        "Behind every beautiful design, we ensure solid development. Your website is built on stable, secure, and reliable code that can handle real customers and real traffic without breaking.",
      icon: Code,
      color: "text-blue-500",
      bgColor: "bg-blue-100",
    },
    {
      title: "SEO-Friendly",
      description:
        "We follow proper on-page SEO practices, clean coding standards, optimized content structure, and schema-friendly layouts so your website ranks better in Google and attracts organic traffic.",
      icon: Search,
      color: "text-green-500",
      bgColor: "bg-green-100",
    },
    {
      title: "Mobile Responsive",
      description:
        "Your audience uses different devices—and your website adapts to all of them. Every page is optimized for mobiles, tablets, desktops, and all screen sizes for a smooth browsing experience.",
      icon: Smartphone,
      color: "text-orange-500",
      bgColor: "bg-orange-100",
    },
    {
      title: "Fast Loading",
      description:
        "Speed matters. We compress assets, optimize structure, and follow best performance practices to make sure your website loads quickly, reducing bounce rates and improving conversions.",
      icon: Zap,
      color: "text-yellow-500",
      bgColor: "bg-yellow-100",
    },
    {
      title: "Easy to Manage",
      description:
        "You get full control over your website. We build user-friendly dashboards and CMS options so you can update text, images, and pages without depending on a developer every time.",
      icon: Settings,
      color: "text-indigo-500",
      bgColor: "bg-indigo-100",
    },
    {
      title: "Scalable & Future-Ready",
      description:
        "Your business will grow—and your website should grow with it. We build solutions that can be expanded with new features, pages, integrations, or redesigns without needing to start from scratch.",
      icon: TrendingUp,
      color: "text-red-500",
      bgColor: "bg-red-100",
    },
    {
      title: "Secure & Protected",
      description:
        "Your website is safeguarded with strong security layers like SSL, secure coding practices, and regular updates to keep your data safe from threats.",
      icon: ShieldCheck,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },

    {
      title: "Conversion-Focused",
      description:
        "Every page is designed to increase inquiries and boost results with clear CTAs, strategic layouts, and user-focused design elements.",
      icon: ArrowUpRight,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
  ];

  // Variants using only types Framer Motion allows
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut", // safest & valid for TypeScript + FM 11+
      },
    },
  };

  return (
    <div className="section-style2  relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#000"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="mx-auto relative z-10">
        {/* <motion.h2
          className="text-5xl font-extrabold text-center mb-16 bg-[#5e9ed5] bg-clip-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          What We Deliver
        </motion.h2> */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="heading-second text-[32px] md:text-[40px] font-normal leading-[120%] text-center mb-10"
        >
          What We Deliver
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {items.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200 group"
                variants={itemVariants}
                style={{ perspective: 1000 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center mb-2">
                  <div
                    className={`w-10 h-10 ${item.bgColor} rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className={`w-5 h-5 ${item.color}`} />
                  </div>

                  <h3 className="text-2xl text-black">{item.title}</h3>
                </div>

                <p className="text-black leading-relaxed text-justify">
                  {item.description}
                </p>

                <div className="mt-4 w-0 group-hover:w-full h-[2px] bg-[#5e9ed5] transition-all duration-500"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeDeliver;
