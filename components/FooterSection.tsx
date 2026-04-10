"use client";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 text-gray-300 pt-16 pb-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:space-x-10 space-y-10 md:space-y-0">
        {/* ABOUT */}
        <div className="flex-2">
          <div>
            <Image
              src="/images/logos/logo-icon.png"
              alt="Logo"
              width={75}
              height={43}
              
            />
          </div>
          <p className="text-sm leading-relaxed text-gray-300">
            Trusted website developer in India offering modern and affordable
            web design and development services. Build SEO-friendly websites
            that attract customers and grow online.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-6">
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

        {/* QUICK LINKS */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-4 tracking-wide">
            Quick Links
          </h3>
          <ul className="flex flex-col space-y-3 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-white transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-4 tracking-wide">
            Our Services
          </h3>
          <ul className="flex flex-col space-y-3 text-sm">
            <li className="hover:text-white transition-colors cursor-pointer">
              Business Website Development
            </li>
            <li className="hover:text-white transition-colors cursor-pointer">
              Landing Page Design
            </li>
            <li className="hover:text-white transition-colors cursor-pointer">
              E-commerce Website Development
            </li>
            <li className="hover:text-white transition-colors cursor-pointer">
              Website Redesign
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-4 tracking-wide">
            Contact Us
          </h3>
          <div className="flex items-center gap-2 text-sm mb-3 hover:text-white transition-colors">
            <MdEmail /> info@developxweb.com
          </div>
          <div className="flex items-center gap-2 text-sm mb-3 hover:text-white transition-colors">
            <MdPhone /> +91 96251 48434
          </div>
          <p className="text-sm mt-3 text-gray-400">
            Leading web development company in India offering affordable web
            design solutions for startups and businesses.
          </p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} DevelopX Web. All rights reserved.
      </div>

      {/* WhatsApp icon */}
      <section className="whatsapp">
        <Link
          href="https://wa.me/+9625148434?text=I'm%20interested%20in%20your%20services"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="whatsapp-content">
            <Image
              width={35}
              height={35}
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="whatsapp-icon"
            />
          </div>
        </Link>
      </section>
    </footer>
  );
}
