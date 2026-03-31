"use client";

import { motion } from "framer-motion";
import { FaLightbulb, FaProjectDiagram, FaCode, FaRocket } from "react-icons/fa";

const steps = [
  { icon: <FaLightbulb />, title: "Discovery", desc: "Understand your business, audience, and goals with deep research." },
  { icon: <FaProjectDiagram />, title: "Planning", desc: "Strategize with wireframes, timelines, and a clear roadmap." },
  { icon: <FaCode />, title: "Development", desc: "Build fast, responsive, and modern websites with latest tech." },
  { icon: <FaRocket />, title: "Launch", desc: "Deploy your website with performance, SEO, and security in mind." },
];

export default function UltraPremiumProcess() {
  return (
    <section className="section-style2  md:px-[15px] md:py-[15px]   bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-gray-900">
          How We Bring Your Vision to Life
        </h2>
        <p className="mt-4 text-black max-w-2xl mx-auto text-lg">
          A seamless process designed to deliver stunning websites that convert visitors into customers.
        </p>

        {/* Horizontal Timeline */}
        <div className="mt-20 flex flex-col md:flex-row justify-between relative items-center gap-12">
          
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-blue-200 z-0"></div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative flex flex-col items-center z-10"
            >
              {/* Glowing Step Circle */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white text-3xl shadow-2xl">
                {step.icon}
              </div>

              {/* Step Card */}
              <div className="mt-6 bg-white p-6 rounded-2xl shadow-xl w-64 text-center">
                <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="text-black mt-2">{step.desc}</p>
              </div>

              {/* Animated Dot Connector for Mobile */}
              {i < steps.length - 1 && (
                <div className="md:hidden h-12 w-1 bg-blue-200 mt-6"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}