// components/WhoWeWorkWith.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  Plane,
  BookOpen,
  DollarSign,
  Package,
  HeartPulse,
  Coffee,
  Factory,
  Users,
  Building,
  Globe2,
  Home,
  ShoppingCart,
  MapPin,
  Layers,
  Store,
  Truck,
} from "lucide-react";

const WhoWeWorkWith: React.FC = () => {
  const clients = [
    { icon: Plane, title: "Aviation" },
    { icon: BookOpen, title: "Education" },
    { icon: DollarSign, title: "Finance" },
    { icon: Package, title: "FMCG" },
    { icon: HeartPulse, title: "Healthcare" },
    { icon: Coffee, title: "Hospitality" },
    { icon: Factory, title: "Manufacturing" },
    { icon: Users, title: "Outsource" },
    { icon: Building, title: "Governmental" },
    { icon: Globe2, title: "NGO's" },
    { icon: Home, title: "Real Estate" },
    { icon: ShoppingCart, title: "Retail" },
    { icon: MapPin, title: "Travel and Tourism" },
    { icon: Layers, title: "Interiors" },
    { icon: Store, title: "Mall" },
    { icon: Plane, title: "Logistics" },
    { icon: BookOpen, title: "Publishing" },
    { icon: Truck, title: "E-commerce" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // One by one animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="section-style2 pt-0  relative overflow-hidden">
      {/* Grid Background (Variation: Full Grid with Horizontal and Vertical Lines, Different Color and Spacing) */}
      <div className="absolute inset-0 z-0 opacity-4">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="fullGrid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#000"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#fullGrid)" />
        </svg>
      </div>
      <div className=" mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="heading-second text-[32px] md:text-[40px] font-normal leading-[120%] text-center mb-5"
        >
          Who We Work With
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto leading-relaxed text-center mb-10"
        >
          We proudly serve a diverse range of clients, from innovative startups
          to established enterprises. Our tailored solutions empower businesses
          of all sizes and sectors to thrive.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 justify-center"
        >
          {clients.map((client, index) => {
            const IconComponent = client.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white relative p-4 rounded-lg shadow-sm flex flex-col items-center text-center min-w-[120px] hover:shadow-md overflow-hidden client-box"
              >
                <svg
                  className="absolute top-0 left-0 w-full h-full pointer-events-none"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <rect
                    className="border-rect"
                    x="1"
                    y="1"
                    width="98"
                    height="98"
                    rx="4"
                    ry="4"
                    fill="none"
                    stroke="#5E9ED5"
                    strokeWidth="1"
                  />
                </svg>

                <IconComponent className="w-12 h-12 text-[#5E9ED5] mb-3 z-10" />
                <h3 className="text-lg font-medium text-black z-10">
                  {client.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
