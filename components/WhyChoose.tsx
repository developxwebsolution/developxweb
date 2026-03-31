"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  UserCheck,
  Lightbulb,
  Headset,
  DollarSign,
  Trophy,
  Timer,
  TrendingUp,
  Smartphone,
  Cpu,
  Puzzle,
  LayoutDashboard,
  Eye,
  UserCircle,
  Wrench,
  ShoppingCart,
  PenSquare,
  Handshake,
  Layers,
  ShieldCheck,
  Gauge,
} from "lucide-react";

/* Color palette (auto repeat) */
const colors = [
  "#f05a29",
  "#8dc53e",
  "#662c91",
  "#b5041a",
  "#f8bd4a",
  "#27aae0",
];

const websiteStandard = [
  { icon: UserCheck, title: "Expert Team" },
  { icon: Lightbulb, title: "Creative Approach" },
  { icon: Headset, title: "Reliable Support" },
  { icon: DollarSign, title: "Affordable Pricing" },
  { icon: Trophy, title: "Proven Results" },
  { icon: Timer, title: "Fast Delivery" },
  { icon: TrendingUp, title: "SEO Optimized" },
  { icon: Smartphone, title: "Mobile-First Design" },
  { icon: ShieldCheck, title: "Secure Development" },
  { icon: Cpu, title: "Modern Technology" },
  { icon: Puzzle, title: "Custom Solutions" },
  { icon: LayoutDashboard, title: "User-Friendly UI/UX" },
  { icon: Layers, title: "Scalable Build" },
  { icon: Eye, title: "Transparent Process" },
  { icon: UserCircle, title: "Dedicated Manager" },
  { icon: Wrench, title: "Strong Maintenance" },
  { icon: Gauge, title: "High Performance" },
  { icon: ShoppingCart, title: "E-Commerce Experts" },
  { icon: PenSquare, title: "Content Support" },
  { icon: Handshake, title: "Client-First Mindset" },
];

export const WhyChoose = () => {
  return (
    <section className="why-choose-section-style web-dev-why bg-[#F6F7FA] ">
      <div className="container mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="heading-second text-center text-black mb-5 md:mb-10"
        >
          Why{" "}
          Choose Us
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6 md:gap-x-10">
          {websiteStandard.map((item, index) => {
            const Icon = item.icon;
            const color = colors[index % colors.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                className="flex items-center gap-2 md:gap-4 group"
              >
                {/* Icon Box */}
                <div
                  className="relative w-8 h-8 md:w-12 md:h-12 rounded-full bg-white shadow-md 
                             flex items-center justify-center 
                             overflow-hidden transition-all duration-300
                             group-hover:shadow-lg"
                  style={{ color }} 
                >
                  
                  <div
                    style={{ backgroundColor: color }}
                    className="absolute inset-0 rounded-full 
                               opacity-0 group-hover:opacity-100 
                               transition-opacity duration-300"
                  />

                  {/* Icon */}
                  <Icon className="relative z-10 w-4 h-4 md:w-[22px] md:h-[22px] transition-colors duration-300 group-hover:text-white" />
                </div>

                {/* Text */}
                <p className="text-black font-medium text-sm md:text-base">
                  {item.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
