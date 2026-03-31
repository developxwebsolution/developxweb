"use client";

import {
 
  Home,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import ModalForm from "@/components/ModalForm";
// import PricingSection from "./components/PricingSection";
import { useState } from "react";
import Link from "next/link";
export default function PrivacyPolicyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // for website services offers section
  return (
    <>
      <div>
       <div>
        <div
          className="relative w-full bg-[url('/images/bg/refund-policy-banner.jpg')] 
             bg-cover bg-center
             h-[200px] sm:h-[300px] md:h-[550px] flex items-center"
        >
          {/* Content Container */}
          <div className="relative container-width px-[15px] md:px-[60px] w-full flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start mx-auto h-full">
            {/* Text Section */}
            <div className="md:flex-[2] flex flex-col gap-4 justify-center items-start h-full">
              <div className="flex flex-col justify-center items-start h-full">
                <h1 className="main-heading text-white text-left">
                  Refund Policy
                </h1>
                <p className="mt-[10px] leading-[140%] text-white text-left">
                  Our fair and straightforward guarantee for your peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div>
        <div className="bg-[#d8ebe0] py-2 text-left flex items-center justify-start px-4 space-x-1  text-xs  md:px-[60px] md:space-x-2 md:text-base ">
          <Link
            href="/"
            className="flex items-center space-x-1 hover:text-[#5E9ED5] transition-colors"
          >
            <Home size={14} className="md:size{16}" />
            <span>Home</span>
          </Link>

          <ChevronRight size={12} className="text-gray-400 md:size-{16}" />

          <div className="flex items-center space-x-1 text-[#5E9ED5]">
            {/* <Phone size={14} className="md:size-{16}" /> */}
            <span className="truncate max-w-[120px] md:max-w-none">
              Refund Policy
            </span>
          </div>
        </div>
      </div>
      {/* MODAL — always included */}
      <ModalForm isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      {/* Table of contents (sticky on larger screens) */}

      <section className="px-[15px] md:px-[60px] py-20">
        <div className="mx-auto">
          {/* Header */}

          <div className=" mx-auto mb-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-2  mb-5 md:mb-5">Refund Policy</h2>
              <p className="second-heading-content ">
                {" "}
                Laser Web Maker – <Link href={"https://laserwebmaker.com/"}>Laser Web Maker</Link>
              </p>
            </motion.div>
          </div>

          {/* Refund Policy */}
          <section>
            <p className="mt-2">
              At <Link href={"https://laserwebmaker.com/"}>Laser Web Maker</Link>, we
              are committed to providing excellent service and ensuring your
              satisfaction with every purchase. To further clarify our policies
              and ensure transparency, we are updating our Refund Policy,
              effective [26 January 2026], which will be reflected on our
              website. Below are the key points of our updated policy: We Have
              not Refund Policy once project started Refund can not be initiated
              in any condition. .
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
