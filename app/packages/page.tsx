
"use client";

import ModalForm from "@/components/ModalForm";
import PricingSection from "./components/PricingSection";
import { useState } from "react";
import {
  Home,
  ChevronRight,
  Globe,
  Briefcase,
  Contact,
  Phone,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import MobileDropdown from "@/components/MobileDropdown";

const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // for website services offers section

  return (
    <>
        <div>
        <div
          className="relative w-full bg-[url('/images/bg/our-packages-banner.jpg')] 
             bg-cover bg-center
             h-[200px] sm:h-[300px] md:h-[550px] flex items-center"
        >
          {/* Content Container */}
          <div className="relative container-width px-[15px] md:px-[60px] w-full flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start mx-auto h-full">
            {/* Text Section */}
            <div className="md:flex-[2] flex flex-col gap-4 justify-center items-center md:items-start h-full">
              <div className="flex flex-col justify-center items-start h-full">
                <h1 className="main-heading text-white text-center md:text-left">
                  Packages
                </h1>
                <p className="mt-[10px] leading-[140%] text-white text-left">
                 Clear, tailored plans to match your goals and budget.
                </p>
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
              Packages
            </span>
          </div>
        </div>
      </div>
      {/* MODAL — always included */}
      <ModalForm isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      {/* Table of contents (sticky on larger screens) */}

      <section id="about-us " className="section-style2">
        <div className=" ">
         <PricingSection/>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
