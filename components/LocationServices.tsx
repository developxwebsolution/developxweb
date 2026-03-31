"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
type ServiceItem = {
  id: string;
  title: string;
  desc: string;
  icon: LucideIcon;
};


type ServicesProps = {
  content: {
    heading: string;
    description: string;
    services: ServiceItem[];
  };
};

const colors = ["#f05a29", "#8dc53e", "#662c91", "#b5041a", "#f8bd4a", "#27aae0"];

export default function Services({ content }: ServicesProps) {
  return (
    <section className="section-style">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 text-center mb-5 md:mb-5">{content.heading}</h2>
            <p className="second-heading-content text-center">{content.description}</p>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {content.services.map((service, index) => {
            const Icon = service.icon;
            const color = colors[index];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-xl p-4 bg-[#f8f9fb] border transition-all duration-300"
                style={{ borderColor: "transparent" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = color)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "transparent")}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 mb-1 flex items-center justify-center rounded-lg transition-all duration-300 group-hover:text-white"
                  style={{ backgroundColor: color, color: "#ffffff" }}
                >
                  <Icon size={24} />
                </div>

                {/* Title */}
                <h3 className="text-[18px] font-semibold  mb-1">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-600 services-desc">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
