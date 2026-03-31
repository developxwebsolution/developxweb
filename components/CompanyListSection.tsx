"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const listItems = [
  [
    "Top Web Designing Company In Noida",
    "Top Web Designing Company In Delhi",
    "Top Web Designing Company In Ghaziabad",
    "Top Web Designing Company In Faridabad",
    "Top Web Designing Company In Gurugram",
    "Top Web Designing Company In Rohini Delhi",
    "Top Web Designing Company In West Delhi",
    "Top Web Designing Company In Delhi NCR",
    "Top Web Designing Company In Andheri Mumbai",
    "Top Web Designing Company In Mumbai",
  ],
  [
    "Top Web Designing Company In Agra",
    "Top Web Designing Company In Ahmedabad",
    "Top Web Designing Company In Surat",
    "Top Web Designing Company In Kanpur",
    "Top Web Designing Company In Lucknow",
    "Top Web Development Company In Bangalore",
    "Top Web Development Company In Chennai",
    "Top Web Development Company In Hyderabad",
    "Top Web Development Company In Kolkata",
    "Top Web Development Company In Pune",
  ],
  [
    "Top Web Development Company In Jaipur",
    "Top Web Development Company In Indore",
    "Top Web Development Company In Bhopal",
    "Top Web Development Company In Chandigarh",
    "Top Web Development Company In Nagpur",
    "Top Web Development Company In Patna",
    "Top Web Development Company In Ranchi",
    "Top Web Development Company In Meerut",
    "Top Web Development Company In Gonda",
    
  ],
  [
    "Top Web Development Company In Thane Mumbai",
    "Top Web Designing Company In Abu Dhabi UAE",
    "Top Web Development Company In Dubai UAE",
    "Top Web Development Company In Sharjah UAE",
    "Top Web Development Company In Doha Qatar",
    "Top Web Development Company In Kuwait City",
    "Top Web Development Company In London UK",
    "Top Web Development Company In Amsterdam",
    "Top Web Development Company In New York US",
  ],
];

// Slug Generator
const slugify = (text: string) => "/" + text.toLowerCase().replace(/ /g, "-");

export default function CompanyListSection() {
  return (
    <section className="px-[15px] md:px-15 pb-20">
      <div className=" mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 text-center mb-5 md:mb-5">
              Top Website Designing & Web Development Services in Major Cities
            </h2>

            <p className="second-heading-content text-center">
             Serving top cities with reliable, scalable website designing and web development solutions.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6
            rounded-2xl p-5 border border-[#5E9ED5]/40
            shadow-lg shadow-[#5E9ED5]/10 backdrop-blur-md
          "
        >
          {listItems.map((column, colIndex) => (
            <motion.ul
              key={colIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.04 },
                },
              }}
              className="space-y-2"
            >
              {column.map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={slugify(item)}
                    className="
                      group relative flex items-center gap-2 text-[14px]
                      py-1 px-2 rounded-md transition-all duration-300
                      hover:bg-[#eaf4ff] hover:text-[#5E9ED5]
                      overflow-hidden
                    "
                  >
                    {/* Arrow Icon */}
                    <ArrowRight
                      size={14}
                      className="
                        text-[#5E9ED5] 
                        transition-transform duration-300
                        group-hover:translate-x-1
                      "
                    />

                    {/* Item Text */}
                    <span className="transition-all group-hover:font-medium">
                      {item}
                    </span>

                    {/* Underline – FIXED */}
                    <span
                      className="
                        absolute bottom-0 left-0 h-[2px]
                        w-0 bg-gradient-to-r from-[#5E9ED5] to-[#5E9ED5]
                        rounded-full group-hover:w-full
                        transition-all duration-300
                        pointer-events-none
                      "
                    ></span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
