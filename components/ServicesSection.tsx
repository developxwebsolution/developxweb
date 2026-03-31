"use client";

import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaShoppingCart,
  FaCode,
  FaRedo,
  FaSearch,
  FaMobileAlt,
  FaServer,
  FaPaintBrush,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Business Websites",
    desc: "High-converting business websites built to establish trust and generate leads.",
  },
  {
    icon: <FaShoppingCart />,
    title: "E-commerce Stores",
    desc: "Scalable online stores with seamless checkout and payment integration.",
    highlight: true,
  },
  {
    icon: <FaCode />,
    title: "Custom Web Apps",
    desc: "Powerful custom applications tailored to your business workflows.",
  },
  {
    icon: <FaRedo />,
    title: "Website Redesign",
    desc: "Modern redesigns that improve performance, UI, and conversions.",
  },
  {
    icon: <FaSearch />,
    title: "SEO Optimization",
    desc: "Rank higher on Google with technical SEO and content optimization.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    desc: "Pixel-perfect designs optimized for mobile, tablet, and desktop.",
  },
  {
    icon: <FaServer />,
    title: "Maintenance & Support",
    desc: "Ongoing updates, security, and performance monitoring.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    desc: "Clean, modern interfaces designed for maximum engagement.",
  },
];

export default function PremiumServices() {
  return (
    <section className="section-style2  md:px-[15px] md:py-[15px] ">
      <div className="max-w-7xl mx-auto text-center">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900"
        >
          Premium Digital Services by DevelopX Web
        </motion.h2>

        <p className="mt-5 text-black max-w-2xl mx-auto text-lg">
          We craft high-performance websites and digital experiences that help
          brands scale faster, convert better, and stand out in the market.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -12, scale: 1.05 }}
              className={`relative p-6 rounded-2xl text-left transition-all duration-500 
              ${service.highlight
                ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-2xl"
                : "bg-white border border-gray-100 shadow-md hover:shadow-2xl"
              }`}
            >
              {/* BADGE */}
              {service.highlight && (
                <span className="absolute top-4 right-4 text-xs bg-white text-blue-600 px-2 py-1 rounded-full font-semibold">
                  Most Popular
                </span>
              )}

              {/* ICON */}
              <div className={`text-3xl mb-4 ${service.highlight ? "text-white" : "text-blue-600"}`}>
                {service.icon}
              </div>

              {/* TITLE */}
              <h3 className={`text-xl font-semibold mb-2 ${service.highlight ? "text-white" : ""}`}>
                {service.title}
              </h3>

              {/* DESC */}
              <p className={`text-sm leading-relaxed ${service.highlight ? "text-gray-100" : "text-black"}`}>
                {service.desc}
              </p>

              {/* HOVER GLOW */}
              <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition duration-500 blur-xl bg-blue-200 -z-10"></div>
            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="view-all-btn inline-block"
          >
            🚀 Start Your Project
          </motion.div>
        </div>

      </div>
    </section>
  );
}