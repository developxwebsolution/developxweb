"use client";

import ContactForm from "@/components/ContactForm";
import ModalForm from "@/components/ModalForm";
import { useState } from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
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
          className="relative w-full bg-[url('/images/bg/contact-us-banner.jpg')] 
             bg-cover bg-top
             h-[200px] sm:h-[300px] md:h-[450px] flex items-center"
        >
          {/* Content Container */}
          <div className="relative container-width px-[15px] md:px-[60px] w-full flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start mx-auto h-full">
            {/* Text Section */}
            <div className="md:flex-[2] flex flex-col gap-4 justify-center items-center md:items-start h-full">
              <div className="flex  justify-center items-center md:items-center h-full">
                <h1 className="main-heading text-white text-center md:text-center">
                  Contact Us
                </h1>
                {/* <p className="mt-[10px] leading-[140%] text-white text-center md:text-left">
                  We’re here to help. Let’s discuss your project.
                </p> */}
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
            <Phone size={14} className="md:size-{16}" />
            <span className="truncate max-w-[120px] md:max-w-none">
              Contact Us
            </span>
          </div>
        </div>
      </div>
      {/* MODAL — always included */}
      <ModalForm isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      {/* Table of contents (sticky on larger screens) */}

       <section className=" text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:space-x-12 space-y-12 md:space-y-0">

        {/* CONTACT INFO */}
        <div className="flex-1 bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6 tracking-wide" style={{color:"white"}}>
            Get in Touch
          </h2>
          <p className="text-white mb-6">
            We’d love to hear from you! Reach out for any inquiries or project discussion. Our team is ready to help your business grow online.
          </p>

          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <MdEmail className="text-green-500 text-xl" />
              <span>info@developxweb.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MdPhone className="text-green-500 text-xl" />
              <span>+91 96251 48434</span>
            </div>
            {/* <div className="flex items-center gap-3">
              <MdLocationOn className="text-green-500 text-xl" />
              <span>123 Web Street, Bangalore, India</span>
            </div> */}
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex gap-4">
              <a className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-500 transition-shadow shadow-lg">
                          <FaFacebookF />
                        </a>
                        <a className="bg-pink-500 text-white p-3 rounded-full hover:bg-pink-400 transition-shadow shadow-lg">
                          <FaInstagram />
                        </a>
                        <a className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-400 transition-shadow shadow-lg">
                          <FaLinkedinIn />
                        </a>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="flex-1 bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6 tracking-wide" style={{color:"white"}}>
            Send a Message
          </h2>
         
  <ContactForm />
        </div>

      </div>
    </section>
    </>
  );
};

export default ContactUs;


