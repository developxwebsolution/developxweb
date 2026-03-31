"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import Image from "next/image";
import { TopCompaniesContent } from "@/data/topCompaniesData";

interface TopCompaniesSectionProps {
  content: TopCompaniesContent;
}

export default function TopCompaniesSection({ content }: TopCompaniesSectionProps) {
  const { heading, description, location, companies } = content;

  return (
    <motion.section
      className="relative section-style"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Heading */}
  
         {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 text-center mb-5 md:mb-5">{heading}</h2>
            <p className="second-heading-content text-center">{content.description}</p>
          </motion.div>
        </div>

      <div className="mx-auto flex flex-col md:flex-row gap-10">
        {/* LEFT SIDE Content */}
        <motion.div
          className="md:w-2/3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-5">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                className="p-3 border rounded-2xl border-[#5E9ED5] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-b-4 "
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-2">
                  <h3 className="text-[16px] font-[600] flex gap-2 items-center">
                    {index + 1}.{" "}
                    <Image
                      src={company.logoUrl}
                      alt={`${company.name} logo`}
                      width={70}
                      height={70}
                      className="mr-2 object-contain"
                    />{" "}
                    {company.name}
                  </h3>
                </div>
                <p className="text-[14px] leading-relaxed">{company.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/3 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="md:sticky md:top-24 border border-gray-200 p-4 rounded-2xl shadow-xl">
            <h2 className="font-bold mb-4">Let&apos;s Talk</h2>
            <p className="mb-6 text-sm leading-relaxed">
              Want a professional website for your brand?
              <br />
              Drop your details — we&apos;ll get in touch.
            </p>

            <ContactForm />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
