"use client";
import { motion } from "framer-motion";
import {
 Monitor,
  Clock,
  Search,
  Layout,
  Gauge,
  Activity,
  Brush,
  Puzzle,
  MousePointerClick,
  Globe,
  ShieldCheck,
  BarChart,
  FileText,
  Settings,
  TrendingUp,
  Lightbulb,
  Server,
  Recycle,
  Pointer,
  ChartLine,
} from "lucide-react";

const websiteStandard = [
{ icon: <Monitor size={28} />, title: "Responsive Design" },
  { icon: <Clock size={28} />, title: "Fast Loading Time" },
  { icon: <Search size={28} />, title: "SEO Friendly" },
  { icon: <Layout size={28} />, title: "Easy Navigation" },
  { icon: <Gauge size={28} />, title: "Performance Optimized" },
  { icon: <Activity size={28} />, title: "Google Speed Tested" },
  { icon: <Brush size={28} />, title: "Clean & Modern Design" },
  { icon: <Puzzle size={28} />, title: "Fully Functional" },
  { icon: <MousePointerClick size={28} />, title: "Strong Call-to-Action" },
  { icon: <Globe size={28} />, title: "Browser Support" },
  { icon: <ShieldCheck size={28} />, title: "Secured with HTTPS" },
  { icon: <BarChart size={28} />, title: "Google Analytics Ready" },
  { icon: <FileText size={28} />, title: "Optimized Content" },
  { icon: <Settings size={28} />, title: "Maintenance & Support" },
  { icon: <TrendingUp size={28} />, title: "Regular Updates" },
  { icon: <Lightbulb size={28} />, title: "Creative Approach" },
  { icon: <Server size={28} />, title: "Strong Infrastructure" },
  { icon: <Recycle size={28} />, title: "Efficient Workflow" },
  { icon: <Pointer size={28} />, title: "Better Engagement" },
  { icon: <ChartLine size={28} />, title: "Analytics Driven" },



];

export default function WebsiteFeatureGrid() {
  return (
    <section className=" px-[15px] md:px-[60px] py-20">
      <div className="container mx-auto">
        {/* Heading */}
      

           {/* Heading */}
                    <motion.h2
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="heading-second text-[32px] md:text-[40px] font-normal leading-[120%] text-center  mb-10"
                    >
                      Why Choose Laser Web Maker for{" "}
                      <span className="text-[#5E9ED5]">Your Website?</span>
                    </motion.h2>
                      {/* Heading */}

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5 justify-center">
          {websiteStandard.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.01,
                ease: "easeInOut",
              }}
              whileHover={{
                y: -5,
                scale: 1.05,
              }}
              className="group w-full  p-2 flex  items-center justify-center bg-white rounded-2xl shadow-sm border border-gray-100 transition-transform duration-300 hover:shadow-lg will-change-transform"
            >
              <motion.div
                className="text-[#5E9ED5] mr-2"
                whileHover={{ rotate: 8 }}
                transition={{ duration: 0.3 }}
              >
                {feature.icon}
              </motion.div>
              <p className="text-black font-medium text-center text-sm md:text-base">
                {feature.title}
              </p>

              {/* Subtle background highlight on hover */}
              <motion.div
                layoutId="highlight"
                className="absolute inset-0 bg-[#5E9ED5]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
