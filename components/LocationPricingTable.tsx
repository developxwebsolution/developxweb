"use client";

import { motion } from "framer-motion";
import { pricingContent, PricingContent } from "@/data/pricingContent";

/* =========================
   TYPES
========================= */
interface Service {
  name: string;
  pages: string;
  price: string;
  perPage: string;
}

/* =========================
   SERVICES DATA
========================= */
const services: Service[] = [
  { name: "Static Website", pages: "4-8", price: "₹21000 - ₹25000", perPage: "₹3000 - ₹4000" },
  { name: "Dynamic Website", pages: "4-8", price: "₹45000 - ₹65000", perPage: "₹6000 - ₹8000" },
  { name: "Corporate Website", pages: "12-20", price: "₹80000 - ₹160000", perPage: "₹5000 - ₹8000" },
  { name: "Customized Website", pages: "20-25", price: "₹160000 - ₹400000", perPage: "₹8000 - ₹12000" },
  { name: "Blogging Website", pages: "10", price: "₹40000 - ₹80000", perPage: "₹3000 - ₹8000" },
  { name: "Shopify Website", pages: "Dynamic", price: "₹100000 - ₹400000", perPage: "₹8000 - ₹10000" },
  { name: "Portal Development", pages: "Dynamic", price: "₹400000 - ₹2000000", perPage: "₹8000 - ₹10000" },
  { name: "WordPress Website", pages: "Dynamic", price: "₹40000 - ₹100000", perPage: "₹3000 - ₹8000" },
  { name: "Woo Commerce", pages: "Dynamic", price: "₹80000 - ₹140000", perPage: "₹6000 - ₹10000" },
  { name: "AWS Management", pages: "Support", price: "₹25000 - ₹42000", perPage: "Fix" },
  { name: "Domain Cost", pages: "Yearly", price: "₹10000 - ₹40000", perPage: "Fix" },
  { name: "Hosting", pages: "Yearly", price: "₹8000 - ₹40000", perPage: "Fix" },
  { name: "Business Email", pages: "Yearly", price: "₹Basic - ₹2400 | G-suite - ₹6000", perPage: "Fix" },
  { name: "SSL Certificate", pages: "Yearly", price: "₹4000", perPage: "Fix" },
];

/* =========================
   COMPONENT
========================= */
export default function PricingTable({
  content = pricingContent.default,
}: {
  content?: PricingContent;
}) {
  return (
    <div className="section-style min-h-screen">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-2 text-center mb-5 md:mb-5">
            {content.heading}
          </h2>
          <p className="second-heading-content text-center">
            {content.description}
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="rounded-2xl backdrop-blur-md bg-white/70 border border-gray-300 shadow-2xl overflow-hidden"
      >
        <div className="overflow-x-auto md:overflow-x-visible">
          <table className="w-full min-w-[600px] md:min-w-0 border-collapse table-fixed border border-gray-300">
            <thead className="bg-[#5d9ed5] text-white uppercase text-[15px] border-b border-gray-300">
              <tr>
                <th className="py-3 px-2 md:px-5 text-left w-[25%] border-r border-gray-300">
                  Service Name
                </th>
                <th className="py-3 px-2 md:px-5 text-left w-[15%] border-r border-gray-300">
                  Pages
                </th>
                <th className="py-3 px-2 md:px-5 text-left w-[25%] border-r border-gray-300">
                  Price
                </th>
                <th className="py-3 px-2 md:px-5 text-left w-[20%] border-r border-gray-300">
                  Per Page Price
                </th>
                <th className="py-3 px-2 md:px-5 text-center w-[15%]">
                  Order
                </th>
              </tr>
            </thead>

            <tbody>
              {services.map((item, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className={`group border-t border-gray-200 ${
                    index % 2 === 0 ? "bg-white/80" : "bg-blue-50/60"
                  } hover:bg-gradient-to-r hover:from-[#dfefff] hover:to-[#ebf7ff] text-[12px] transition-all duration-300`}
                >
                  <td className="py-2 px-2 md:px-5 text-black border-r border-gray-200 group-hover:text-[#2b6cb0] transition-colors">
                    {item.name}
                  </td>
                  <td className="py-2 px-2 md:px-5 text-black border-r border-gray-200">
                    {item.pages}
                  </td>
                  <td className="py-2 px-2 md:px-5 text-black border-r border-gray-200">
                    {item.price}
                  </td>
                  <td className="py-2 px-2 md:px-5 text-black border-r border-gray-200">
                    {item.perPage}
                  </td>
                  <td className="py-2 px-2 md:px-5 text-center whitespace-nowrap">
                    <motion.button
                      whileHover={{
                        scale: 1.08,
                        boxShadow: "0px 0px 6px #5d9ed5",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-black px-2 py-1 rounded-md text-[12px] shadow-[0_2px_10px_rgb(94_158_213_/_10%)] hover:bg-[#4b8ec8] hover:text-white transition-all"
                    >
                      Order Now
                    </motion.button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
