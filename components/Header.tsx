"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MobileDropdown from "./MobileDropdown";
// import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktopSubOpen, setIsDesktopSubOpen] = useState(false); // For desktop dropdown
  const [isMobileSubOpen, setIsMobileSubOpen] = useState(false); // For mobile accordion
  const [isMobileSubOpen2, setIsMobileSubOpen2] = useState(false); // For mobile accordion
  const [isMobileSubOpen3, setIsMobileSubOpen3] = useState(false); // For mobile accordion

  const subMenuRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Close submenu on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        subMenuRef.current &&
        !subMenuRef.current.contains(event.target as Node)
      ) {
        setIsDesktopSubOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll hide/show logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowHeader(false); // Scrolling down
      } else {
        setShowHeader(true); // Scrolling up
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [servicesButtonOffset, setServicesButtonOffset] = useState(0);

  useEffect(() => {
    if (isClient && subMenuRef.current) {
      const rect = subMenuRef.current.getBoundingClientRect();
      setServicesButtonOffset(rect.left);
    }
  }, [isClient]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <header
      className={`bg-black  container-width sticky top-0 z-50 transition-transform duration-500 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto px-[15px] md:px-[60px] py-[20px] flex flex-nowrap justify-between items-center">
        {/* Left Side: Logo + Nav */}
        <div className="flex items-center space-x-10">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <Link href="/" passHref>
              <Image
                src="/images/logos/logo-icon.png"
                alt="DevelopX Web Logo"
                width={75}
                height={43}
                priority
                style={{ cursor: "pointer" }}
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className=" hidden show-on-1150 gap-[30px] items-center">
            <Link
              href="/"
              className="block text-white hover:text-[#5E9ED5]"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#"
              className="block text-white text-opacity-80 hover:text-[#5E9ED5]"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>

            <div className="relative" ref={subMenuRef}>
              <button
                className="flex items-center text-white hover:text-[#5E9ED5] transition-colors duration-200"
                onMouseEnter={() => isClient && setIsDesktopSubOpen(true)}
                onClick={() =>
                  isClient && setIsDesktopSubOpen(!isDesktopSubOpen)
                }
              >
                Services
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    isDesktopSubOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isClient && (
                <div
                  className={`
    absolute top-full pt-[29px]
    transition-all duration-300 ease-in-out z-50
    ${isDesktopSubOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"}
  `}
                  style={{
                    left: "0px",
                    transform: `translateX(calc(-${servicesButtonOffset}px))`,
                    width: "100vw",
                    // fixed site width
                    maxWidth: "100vw", // responsive
                    minWidth: "100vw",
                    overflowX: "hidden",
                  }}
                  onMouseLeave={() => setIsDesktopSubOpen(false)}
                >
                  <div className="bg-[#fff] dark:bg-[#fff]  shadow-lg px-[15px] md:px-15 py-6 grid grid-cols-4 gap-8 container-width ">
                    {/* Column 1 */}
                    <div>
                      <h5 className=" font-semibold text-[#000000] mb-4">
                        Designing Services
                      </h5>
                      <ul className="space-y-3">
                        {/* Item 1 */}
                        <li className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]">
                          <Link
                            href="#"
                            className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]"
                          >
                            <Image
                              src="/images/icons/web-designing-icon.svg"
                              width={35}
                              height={35}
                              alt="Next.js"
                              className="border border-[#42788A] rounded-xl p-1"
                            />
                            Website Designing
                            {/* <span className="text-blue-500 text-xs">Expert</span> */}
                          </Link>
                        </li>

                        {/* Item 2 */}
                        <li className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]">
                          <Link
                            href="#"
                            className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]"
                          >
                            <Image
                              src="/images/icons/catalog-designing-icon.svg"
                              width={35}
                              height={35}
                              alt="Next.js"
                              className="border border-[#344952] rounded-xl p-1"
                            />
                            Catalog Designing
                          </Link>
                        </li>

                        {/* Item 3 */}
                        <li className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]">
                          <Link
                            href="#"
                            className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]"
                          >
                            <Image
                              src="/images/icons/emailer-designing.svg"
                              width={35}
                              height={35}
                              alt="Next.js"
                              className="border border-[#246175] rounded-xl p-1"
                            />
                            E-mailer Designing
                          </Link>
                        </li>

                        {/* Item 4 */}
                        <li className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]">
                          <Link
                            href="#"
                            className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]"
                          >
                            <Image
                              src="/images/icons/psd-html-icon.svg"
                              width={35}
                              height={35}
                              alt="Next.js"
                              className="border border-[#005FAD] rounded-xl p-1"
                            />
                            PSD To HTML Designing
                          </Link>
                        </li>

                        {/* Item 5 */}
                        <li className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]">
                          <Link
                            href="#"
                            className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]"
                          >
                            <Image
                              src="/images/icons/logo-designing-icon.svg"
                              width={35}
                              height={35}
                              alt="Next.js"
                              className="border border-[#185F77] rounded-xl p-1"
                            />
                            Logo Designing
                          </Link>
                        </li>
                      </ul>

                      {/* <a
                        href="/contact"
                        className="text-center mt-4 inline-block text-[#5E9ED5] text-[13px] font-normal  leading-[150%]   hover:underline border-transparent  hover:text-[#5E9ED5] transition-all duration-500"
                      >
                        View All
                      </a> */}
                    </div>

                    {/* Column 2 */}
                    <div>
                      <h5 className="font-semibold text-[#000000] mb-4">
                        Website Development
                      </h5>
                      <ul className="space-y-3">
                        {/* Item 1 */}
                        <li className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]">
                          <Link
                            href="#"
                            className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]"
                          >
                            <Image
                              src="/images/icons/web-development-icon.svg"
                              width={35}
                              height={35}
                              alt="Next.js"
                              className="border border-[#3E6ADA] rounded-xl p-1"
                            />
                            Web Development
                            {/* <span className="text-blue-500 text-xs">New</span> */}
                          </Link>
                        </li>

                        {/* Item 2 */}
                        <li className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]">
                          <Link
                            href="#"
                            className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]"
                          >
                            <Image
                              src="/images/icons/php-icon.svg"
                              width={35}
                              height={35}
                              alt="Next.js"
                              className="border border-[#7385B8] rounded-xl p-1"
                            />
                            Core PHP
                          </Link>
                        </li>

                        {/* Item 3 */}
                        <li className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]">
                          <Link
                            href="#"
                            className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]"
                          >
                            <Image
                              src="/images/icons/wordpress-icon.svg"
                              width={35}
                              height={35}
                              alt="Next.js"
                              className="border border-[#4685CE] rounded-xl p-1"
                            />
                            Wordpress
                          </Link>
                        </li>

                        {/* Item 4 */}
                        <li className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]">
                          <Link
                            href="#"
                            className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]"
                          >
                            <div className="p-[1px] rounded-xl bg-[linear-gradient(90deg,#7AC043,#4F91CD,#F9AE41,#EE4035)]">
                              <Image
                                src="/images/icons/joomla-icon.svg"
                                width={35}
                                height={35}
                                alt="Joomla"
                                className="rounded-xl bg-white p-1"
                              />
                            </div>
                            Joomla!
                          </Link>
                        </li>

                        {/* Item 5 */}
                        <li className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]">
                          <Link
                            href="#"
                            className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]"
                          >
                            <Image
                              src="/images/icons/framework-icon.svg"
                              width={35}
                              height={35}
                              alt="Next.js"
                              className="border border-[#EE5622] rounded-xl p-1"
                            />
                            Framework
                          </Link>
                        </li>
                      </ul>
                      {/* <a
                        href="/contact"
                        className="text-center mt-4 inline-block text-[#5E9ED5] text-[13px] font-normal  leading-[150%]   hover:underline border-transparent  hover:text-[#5E9ED5] transition-all duration-500"
                      >
                        View All
                      </a> */}
                    </div>

                    {/* Column 3 */}
                    <div>
                      <h5 className="font-semibold text-[#000000] mb-4">
                        E-Commerce Website Development
                      </h5>
                      <ul className="space-y-3">
                        {/* Item 1 */}
                        <li className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]">
                          <Link
                            href="#"
                            className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]"
                          >
                            <Image
                              src="/images/icons/shopify-icon.svg"
                              width={35}
                              height={35}
                              alt="Next.js"
                              className="border border-[#81BF37] rounded-xl p-1"
                            />
                            Shopify
                            {/* <span className="text-blue-500 text-xs">Expert</span> */}
                          </Link>
                        </li>

                        {/* Item 2 */}
                        <li className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]">
                          <Link
                            href="#"
                            className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]"
                          >
                            <Image
                              src="/images/icons/woo-commerce-icon.svg"
                              width={35}
                              height={35}
                              alt="Next.js"
                              className="border border-[#873EFF] rounded-xl p-1"
                            />
                            WooCommerce
                          </Link>
                        </li>

                        {/* Item 3 */}
                        <li className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]">
                          <Link
                            href="#"
                            className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]"
                          >
                            <Image
                              src="/images/icons/magento-icon.svg"
                              width={35}
                              height={35}
                              alt="Next.js"
                              className="border border-[#F37B1F] rounded-xl p-1"
                            />
                            Magento
                          </Link>
                        </li>

                        {/* Item 4 */}
                        <li className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]">
                          <Link
                            href="#"
                            className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]"
                          >
                            <Image
                              src="/images/icons/prestashop-icon.svg"
                              width={35}
                              height={35}
                              alt="Next.js"
                              className="border border-[#A5DBE8] rounded-xl p-1"
                            />
                            Prestashop
                          </Link>
                        </li>
                        {/* Item 5 */}

                        <li className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]">
                          <Link
                            href="#"
                            className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]"
                          >
                            <Image
                              src="/images/icons/drupal-icon.svg"
                              width={35}
                              height={35}
                              alt="Next.js"
                              className="border border-[#009DDE] rounded-xl p-1"
                            />
                            Drupal
                          </Link>
                        </li>
                      </ul>
                      {/* <a
                        href="/contact"
                        className="text-center mt-4 inline-block text-[#5E9ED5] text-[13px] font-normal  leading-[150%]   hover:underline border-transparent  hover:text-[#5E9ED5] transition-all duration-500"
                      >
                        View All
                      </a> */}
                    </div>
                    {/* Column 4 */}
                    <div>
                      <h5 className="font-semibold text-[#000000] mb-4">
                        Hire Designer & Developer
                      </h5>
                      <ul className="space-y-3">
                        {/* Item 1 */}
                        <li className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]">
                          <Link
                            href="#"
                            className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]"
                          >
                            <Image
                              src="/images/icons/hire-website-designer-icon.svg"
                              width={35}
                              height={35}
                              alt="Next.js"
                              className="border border-[#378DA9] rounded-xl p-1"
                            />
                            Hire Website Designer
                          </Link>
                        </li>

                        {/* Item 2 */}
                        <li className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]">
                          <Link
                            href="#"
                            className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]"
                          >
                            <Image
                              src="/images/icons/hire-web-development-icon.svg"
                              width={35}
                              height={35}
                              alt="Next.js"
                              className="border border-[#378DA9] rounded-xl p-1"
                            />
                            Hire Website Developer
                          </Link>
                        </li>

                        {/* Item 3 */}
                        <li className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]">
                          <Link
                            href="#"
                            className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]"
                          >
                            <Image
                              src="/images/icons/hire-shopify-developer-icon.svg"
                              width={35}
                              height={35}
                              alt="Next.js"
                              className="border border-[#81BF37] rounded-xl p-1"
                            />
                            Hire Shopify Developer
                            <span className="text-blue-500 text-xs">New</span>
                          </Link>
                        </li>
                      </ul>

                      {/* Call to Action */}
                      <div className="bg-[#d3e8f7] text-black px-5 py-5 mt-2 rounded-xl">
                        <p>Explore Pricing</p>
                        <p>Talk to Sales</p>
                        <p>Contact Support</p>

                        <a
                          href="/contact"
                          className="hidden md:inline-block view-all-btn w-full text-center mt-2 py-3 text-white text-[15px] font-semibold rounded leading-[150%] bg-[#5E9ED5] border border-transparent hover:border-[#5E9ED5] hover:bg-transparent hover:text-[#5E9ED5] transition-all duration-500"
                        >
                          Get Started Free →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="#"
              className="text-white text-opacity-80 hover:text-[#5E9ED5]"
            >
              Portfolio
            </Link>
            <Link
              href="#"
              className="text-white text-opacity-80 hover:text-[#5E9ED5]"
            >
              Clients
            </Link>
            <Link
              href="#"
              className="text-white text-opacity-80 hover:text-[#5E9ED5]"
            >
              Packages
            </Link>
            <Link
              href="#"
              className="text-white text-opacity-80 hover:text-[#5E9ED5]"
            >
              Blogs
            </Link>
          </nav>
        </div>

        {/* Right Side: Button */}
        <div className="hidden show-on-1150 space-x-[30px] items-center">
          <Link
            href="/contact"
            className="text-white text-opacity-80 hover:text-[#5E9ED5]"
          >
            Join
          </Link>
          <Link
            href="/contact"
            className="text-white text-opacity-80 hover:text-[#5E9ED5]"
          >
            Contact
          </Link>

          <Link href="/contact" className="view-all-btn-header">
            Get a Quote
          </Link>

          {/* <ThemeToggle/> */}
        </div>

        {/* Mobile Menu Toggle */}
        {/* <div className="lg:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div> */}
        <div className="hide-on-1150 text-white flex justify-center gap-4">
          <Link href="/contact" className="view-all-btn-header">
            Get a Quote
          </Link>

          {/* <ThemeToggle/> */}
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={40} /> : <Menu size={40} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[80px] h-[calc(100vh-80px)] left-0 w-full  bg-[#F0F0F0] z-[99px] overflow-y-auto px-[15px] py-5 space-y-3"
          >
            <Link
              href="/"
              className="block text-black text-opacity-80 hover:text-[#5E9ED5]"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#"
              className="block text-black text-opacity-80 hover:text-[#5E9ED5]"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>

            <div>
             <button
  onClick={() => {
    setIsMobileSubOpen((prev) => {
      // Close others when opening this
      if (!prev) {
        setIsMobileSubOpen2(false);
        setIsMobileSubOpen3(false);
      }
      return !prev;
    });
  }}
                className="flex items-center justify-between w-full text-black hover:text-[#5E9ED5] transition-colors duration-200"
              >
                Services
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-500 text-black ${
                    isMobileSubOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isMobileSubOpen && (
                  <motion.div
                    key="mobile-submenu"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden mt-4 text-black"
                  >
                    {/* first row items */}
                    <ul className="space-y-3 mb-[12px]">
                      {/* Item 1 */}
                      <li className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]">
                        <Link
                          href="#"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]"
                        >
                          <Image
                            src="/images/icons/web-designing-icon.svg"
                            width={32}
                            height={32}
                            loading="lazy"
                            alt="web-designing"
                            className="border border-[#42788A] rounded-xl p-1"
                          />
                          Website Designing
                          {/* <span className="text-blue-500 text-xs">Expert</span> */}
                        </Link>
                      </li>

                      {/* Item 2 */}
                      <li className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]">
                        <Link
                          href="#"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]"
                        >
                          <Image
                            src="/images/icons/catalog-designing-icon.svg"
                            width={32}
                            height={32}
                            loading="lazy"
                            alt="catalog-designing"
                            className="border border-[#344952] rounded-xl p-1"
                          />
                          Catalog Designing
                        </Link>
                      </li>

                      {/* Item 3 */}
                      <li className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]">
                        <Link
                          href="#"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]"
                        >
                          <Image
                            src="/images/icons/emailer-designing.svg"
                            width={32}
                            height={32}
                            loading="lazy"
                            alt="e-mailer-designing"
                            className="border border-[#246175] rounded-xl p-1"
                          />
                          E-mailer Designing
                        </Link>
                      </li>

                      {/* Item 4 */}
                      <li className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]">
                        <Link
                          href="#"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]"
                        >
                          <Image
                            src="/images/icons/psd-html-icon.svg"
                            width={32}
                            height={32}
                            loading="lazy"
                            alt="psd-to-html"
                            className="border border-[#005FAD] rounded-xl p-1"
                          />
                          PSD To HTML Designing
                        </Link>
                      </li>

                      {/* Item 5 */}
                      <li className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]">
                        <Link
                          href="#"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]"
                        >
                          <Image
                            src="/images/icons/logo-designing-icon.svg"
                            width={32}
                            height={32}
                            loading="lazy"
                            alt="Logo-Designing"
                            className="border border-[#185F77] rounded-xl p-1"
                          />
                          Logo Designing
                        </Link>
                      </li>

                      {/* second row  */}
                      {/* Item 1 */}
                      <li className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]">
                        <Link
                          href="#"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]"
                        >
                          <Image
                            src="/images/icons/web-development-icon.svg"
                            width={32}
                            height={32}
                            loading="lazy"
                            alt="web-development"
                            className="border border-[#3E6ADA] rounded-xl p-1"
                          />
                          Web Development
                          {/* <span className="text-blue-500 text-xs">New</span> */}
                        </Link>
                      </li>

                      {/* Item 2 */}
                      <li className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]">
                        <Link
                          href="#"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]"
                        >
                          <Image
                            src="/images/icons/php-icon.svg"
                            width={32}
                            height={32}
                            loading="lazy"
                            alt="php-web-development"
                            className="border border-[#7385B8] rounded-xl p-1"
                          />
                          Core PHP
                        </Link>
                      </li>

                      {/* Item 3 */}
                      <li className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]">
                        <Link
                          href="#"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]"
                        >
                          <Image
                            src="/images/icons/wordpress-icon.svg"
                            width={32}
                            height={32}
                            loading="lazy"
                            alt="wordpress-development"
                            className="border border-[#4685CE] rounded-xl p-1"
                          />
                          Wordpress
                        </Link>
                      </li>

                      {/* Item 4 */}
                      <li className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]">
                        <Link
                          href="#"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]"
                        >
                          <div className="p-[1px] rounded-xl bg-[linear-gradient(90deg,#7AC043,#4F91CD,#F9AE41,#EE4035)]">
                            <Image
                              src="/images/icons/joomla-icon.svg"
                              width={32}
                              height={32}
                              loading="lazy"
                              alt="Joomla"
                              className="rounded-xl bg-white p-1"
                            />
                          </div>
                          Joomla!
                        </Link>
                      </li>

                      {/* Item 5 */}
                      <li className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]">
                        <Link
                          href="#"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]"
                        >
                          <Image
                            src="/images/icons/framework-icon.svg"
                            width={32}
                            height={32}
                            loading="lazy"
                            alt="Freamwork-development"
                            className="border border-[#EE5622] rounded-xl p-1"
                          />
                          Framework
                        </Link>
                      </li>
                    </ul>

                    {/* Your dropdown items */}
                    {/* <MobileDropdown
                     
                      title="Designing Services"
                      items={[
                        { label: "Web Development", href: "#" },
                        { label: "Catalog Designing", href: "/nextjs" },
                        { label: "E-mailer Designing", href: "/nextjs" },
                        { label: "PSD To HTML Designing", href: "/nextjs" },
                        { label: "Logo Designing", href: "/nextjs" },
                      ]}
                      setIsOpen={setIsOpen}
                    /> */}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* mobile eCommerce menu */}
            <div>
              <button
  onClick={() => {
    setIsMobileSubOpen2((prev) => {
      if (!prev) {
        setIsMobileSubOpen(false);
        setIsMobileSubOpen3(false);
      }
      return !prev;
    });
  }}
                className="flex items-center justify-between w-full text-black hover:text-[#5E9ED5] transition-colors duration-200"
              >
                eCommmerce
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-500 text-black ${
                    isMobileSubOpen2 ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isMobileSubOpen2 && (
                  <motion.div
                    key="mobile-submenu"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden mt-4 text-black"
                  >
                    {/* first row eCommerce items */}

                    {/* Your dropdown items */}
                    <ul className="space-y-3">
                      {/* Item 1 */}
                      <li className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]">
                        <Link
                          href="#"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]"
                        >
                          <Image
                            src="/images/icons/shopify-icon.svg"
                            width={35}
                            height={35}
                            loading="lazy"
                            alt="Shopify-development"
                            className="border border-[#81BF37] rounded-xl p-1"
                          />
                          Shopify
                          {/* <span className="text-blue-500 text-xs">Expert</span> */}
                        </Link>
                      </li>

                      {/* Item 2 */}
                      <li className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]">
                        <Link
                          href="#"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]"
                        >
                          <Image
                            src="/images/icons/woo-commerce-icon.svg"
                            width={35}
                            height={35}
                            loading="lazy"
                            alt="Woo-commerce-development"
                            className="border border-[#873EFF] rounded-xl p-1"
                          />
                          WooCommerce
                        </Link>
                      </li>

                      {/* Item 3 */}
                      <li className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]">
                        <Link
                          href="#"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]"
                        >
                          <Image
                            src="/images/icons/magento-icon.svg"
                            width={35}
                            height={35}
                            loading="lazy"
                            alt="Magento-development"
                            className="border border-[#F37B1F] rounded-xl p-1"
                          />
                          Magento
                        </Link>
                      </li>

                      {/* Item 4 */}
                      <li className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]">
                        <Link
                          href="#"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]"
                        >
                          <Image
                            src="/images/icons/prestashop-icon.svg"
                            width={35}
                            height={35}
                            loading="lazy"
                            alt="Prestashop-development"
                            className="border border-[#A5DBE8] rounded-xl p-1"
                          />
                          Prestashop
                        </Link>
                      </li>
                      {/* Item 5 */}

                      <li className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]">
                        <Link
                          href="#"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]"
                        >
                          <Image
                            src="/images/icons/drupal-icon.svg"
                            width={35}
                            height={35}
                            loading="lazy"
                            alt="Drupal-development"
                            className="border border-[#009DDE] rounded-xl p-1"
                          />
                          Drupal
                        </Link>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* hire developer */}
            <div>
              <button
  onClick={() => {
    setIsMobileSubOpen3((prev) => {
      if (!prev) {
        setIsMobileSubOpen(false);
        setIsMobileSubOpen2(false);
      }
      return !prev;
    });
  }}
                className="flex items-center justify-between w-full text-black hover:text-[#5E9ED5] transition-colors duration-200"
              >
                Hire Our Team
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-500 text-black ${
                    isMobileSubOpen3 ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isMobileSubOpen3 && (
                  <motion.div
                    key="mobile-submenu"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden mt-4 text-black"
                  >
                    {/* first row eCommerce items */}

                    {/* Your dropdown items */}
                    <ul className="space-y-3">
                      {/* Item 1 */}
                      <li className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]">
                        <Link
                          href="#"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]"
                        >
                          <Image
                            src="/images/icons/hire-website-designer-icon.svg"
                            width={35}
                            height={35}
                            loading="lazy"
                            alt="Hire-website-designer"
                            className="border border-[#378DA9] rounded-xl p-1"
                          />
                          Hire Website Designer
                        </Link>
                      </li>

                      {/* Item 2 */}
                      <li className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]">
                        <Link
                          href="#"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]"
                        >
                          <Image
                            src="/images/icons/hire-web-development-icon.svg"
                            width={35}
                            height={35}
                            loading="lazy"
                            alt="Hire-website-developer"
                            className="border border-[#378DA9] rounded-xl p-1"
                          />
                          Hire Website Developer
                        </Link>
                      </li>

                      {/* Item 3 */}
                      <li className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]">
                        <Link
                          href="#"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center text-black hover:text-[#5E9ED5] transition-colors duration-200 gap-2 text-[13px]"
                        >
                          <Image
                            src="/images/icons/hire-shopify-developer-icon.svg"
                            width={35}
                            height={35}
                            loading="lazy"
                            alt="Hire-Shopify-Developer"
                            className="border border-[#81BF37] rounded-xl p-1"
                          />
                          Hire Shopify Developer
                          <span className="text-blue-500 text-xs">New</span>
                        </Link>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="#"
              className="block text-black text-opacity-80 hover:text-[#5E9ED5]"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="#"
              className="block text-black text-opacity-80 hover:text-[#5E9ED5]"
              onClick={() => setIsOpen(false)}
            >
              Clients
            </Link>
            <Link
              href="#"
              className="block text-black text-opacity-80 hover:text-[#5E9ED5]"
              onClick={() => setIsOpen(false)}
            >
              Packages
            </Link>
            <Link
              href="#"
              className="block text-black text-opacity-80 hover:text-[#5E9ED5]"
              onClick={() => setIsOpen(false)}
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              className="block text-black text-opacity-80 hover:text-[#5E9ED5]"
              onClick={() => setIsOpen(false)}
            >
              Join
            </Link>
            <Link
              href="/contact"
              className="block text-black text-opacity-80 hover:text-[#5E9ED5]"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <Link
              href="/contact"
              className="inline-block view-all-btn btn-color text-white hover:bg-blue-700 mt-2"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
