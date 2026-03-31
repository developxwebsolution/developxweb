"use client";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import { useState, useEffect } from "react";

import TableOfContents from "@/components/TableOfContents";

import CTASection from "@/components/CTASection";

import ModalForm from "@/components/ModalForm";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Layers, Gauge, MessagesSquare, ShieldCheck } from "lucide-react";
// import TableOfContent from "@/components/TableOfContents";
import WhatWeDeliver from "@/components/WhatWeDeliver";
import { Home, ChevronRight, Info } from "lucide-react";
import { Target, Eye } from "lucide-react";
import OurApproach from "@/components/WhoWeWorkWith";
import { HeaderForm } from "@/components/HeaderForm";
const counterData = [
  {
    value: 7,
    // suffix: "+ Years",
    label: "Years Experience",
    bg: "#F4F4F4",
    image: "/images/icons/counter1.webp",
    imageW: 113,
    imageH: 120,
    symbol: "+",
  },
  {
    value: 3000,
    label: "Happy Customers",
    bg: "#F4F4F4",
    image: "/images/icons/counter2.webp",
    imageW: 75,
    imageH: 100,
    symbol: "+",
  },
  {
    value: 99,
    label: "Client Satisfaction",
    bg: "#F4F4F4",
    image: "/images/icons/counter3.webp",
    imageW: 90,
    imageH: 100,
    symbol: "%",
  },
  {
    value: 500,
    label: "Total Reviews",
    bg: "#F4F4F4",
    image: "/images/icons/counter4.webp",
    imageW: 75,
    imageH: 100,
    symbol: "+",
  },
];

const Service_Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // for website services offers section
  // table of content items (id must match target section ids below)

  const tocItems = [
    {
      id: "about-us",
      label: "About Laser Web Maker - Leading Web Development Company in Noida",
    },

    {
      id: "web-development-services",
      label: "Comprehensive Web Development Services We Offer",
    },

    {
      id: "additional-services",
      label: "End-to-End Website & Hosting Solutions",
    },

    {
      id: "why-choose-us",
      label: "Why Choose Laser Web Maker for Your Website?",
    },

    {
      id: "local-advantages",
      label: "Why Choose a Noida-Based Web Development Company?",
    },
    { id: "cta", label: "Start Your Website Project Today" },

    { id: "pricing", label: "Affordable Website Development Packages" },

    { id: "testimonials", label: "What Our Clients Say" },

    { id: "blogs", label: "Latest Blogs & Web Development Insights" },

    {
      id: "top-companies-noida",
      label: "Top 10 Website Designing Companies in Noida (2025 List)",
    },

    { id: "faqs", label: "Frequently Asked Questions (FAQs)" },

    { id: "technologies", label: "Modern Technologies We Work With" },

    {
      id: "cities-we-serve",
      label: "Our Web Development Services Across Cities",
    },
  ];

  // table of content section end

  // why chose us data

  const features = [
    {
      icon: <Layers size={32} className="text-[#5e9ed5]" />,
      title: "Tailored Solutions for Every Business",
      desc: "We don't believe in one-size-fits-all websites. Every project is planned around your goals, industry, and audience, ensuring your website truly represents your brand and drives measurable growth.",
    },
    {
      icon: <Gauge size={32} className="text-[#5e9ed5]" />,
      title: "Strong Focus on Quality & Performance",
      desc: "Our team builds websites that are fast, secure, mobile-responsive, and SEO-ready from day one. Every detail—from page speed to user experience—is refined to give your customers a smooth browsing experience.",
    },
    {
      icon: <MessagesSquare size={32} className="text-[#5e9ed5]" />,
      title: "Clear Communication & Dedicated Support",
      desc: "You always stay in the loop. With transparent communication and a dedicated project manager, you get timely updates and complete clarity throughout the development process.",
    },
    {
      icon: <ShieldCheck size={32} className="text-[#5e9ed5]" />,
      title: "Proven Expertise & Long-Term Reliability",
      desc: "With years of experience and a high client retention rate, we've earned the trust of businesses across multiple industries. We don't just deliver a website—we stay with you for updates, improvements, and long-term growth.",
    },
  ];
  // why chose us data end

  // our mission and vision section

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  // our mission and vision section end

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [hasViewed, setHasViewed] = useState(false);

  useEffect(() => {
    if (inView) setHasViewed(true);
  }, [inView]);

  return (
    <>
      <div>
        <div
          className="relative w-full bg-[url('/images/bg/about-us-banner.jpg')] 
             bg-cover bg-center
             h-[200px] sm:h-[300px] md:h-[550px] flex items-center"
        >
          {/* Content Container */}
          <div className="relative container-width px-[15px] md:px-[60px] w-full flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start mx-auto h-full">
            {/* Text Section */}
            <div className="md:flex-[2] flex flex-col gap-4 justify-center items-start h-full">
              <div className="flex flex-col justify-center items-start h-full">
                <h1 className="main-heading text-white text-left">
                  Company Overview
                </h1>
                <p className="mt-[10px] leading-[140%] text-white text-left">
                  Who we are, our mission, and how we work with you.
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
            <Info size={14} className="md:size-{16}" />
            <span className="truncate max-w-[120px] md:max-w-none">
              Company Overview
            </span>
          </div>
        </div>
      </div>
      {/* MODAL — always included */}
      <ModalForm isOpen={isModalOpen} setIsOpen={setIsModalOpen} />

      {/* about us section start */}

      <section id="about-us">
        <div className="section-style grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          <div className="content-about flex items-center">
            <div>
              <p className="mb-[16px]">
                At Laser Web Maker, We don’t just design websites, we create the
                environment in which your business can grow and connect with
                your audience. From the start, we have been on a mission: to
                make your online experience faster, easier and more efficient.
              </p>
              <p className="mb-[16px]">
                As a privately-owned and financially secure company, we provide
                the reassurance that only a long-term committed partner can. We
                are an in-house team of web designers, developers and strategic
                thinkers that create high performing and creative digital
                solutions, tailored to meet your goals – whatever the size or
                budget.
              </p>

              <p>
                We provide full range of services from design the professional
                website and develop strategy to fast, reliable hosting. Be it a
                beautiful e-commerce site, powerful WordPress CMS website or a
                compelling brand identity including logo and catalog design we
                do things in the best way that make sense – Simple, Fast
                Aesthetically pleasing.
              </p>
            </div>
          </div>
          <div className="counter-div">
            <div
              ref={ref}
              className="grid grid-cols-2 md:grid-cols-2 gap-[20px] "
            >
              {counterData.map((item, index) => (
                <div
                  key={index}
                  className=" rounded-lg h-full"
                  style={{ backgroundColor: item.bg }}
                >
                  <div className="inner  md:items-center flex gap-4 md:gap-0 flex-col md:flex-row justify-center px-3  pt-[6px] md:justify-between">
                    <div className="counter">
                      {/* <h2 className="text-black text-[28px] font-bold leading-[36px]">
                          {hasViewed ? <CountUp start={0} end={item.value} duration={2} /> : 0}
                            {item.suffix ? ` ${item.suffix}` : "+"}
                        </h2> */}
                      <h2 className="text-black text-[28px] font-normal leading-[36px] items-start">
                        {hasViewed ? (
                          <CountUp start={0} end={item.value} duration={2} />
                        ) : (
                          0
                        )}
                        {item.symbol}
                      </h2>

                      <p className="text-[#000000] text-[14px] font-normal leading-[18px] md:leading[120%]">
                        {item.label}
                      </p>
                    </div>
                    <div>
                      <Image
                        src={item.image}
                        alt={item.label}
                        width={item.imageW}
                        height={item.imageH}
                        loading="lazy"
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <p className=" mt-5 mb-2 ">Trusted by Over 5,000 Global Clients 4.9 ★★★★☆ Customer Satisfaction</p> */}
            <div className=" mt-5 mb-2 flex items-center md:items-end gap-1 md:gap-2 ">
              <p className=" z-10 md:text-sm text-[10px] font-semibold">
                Trusted by Over 5,000 Global Clients
              </p>
              <p className=" md:text-sm text-[10px] z-10 font-normal ">
                ( 4.9 rating
              </p>

              <div className="flex items-start md:items-end gap-1 text-[10px] pb-0 md:pb-1 z-10 font-normal md:text-sm">
                {/* 4 full yellow stars */}
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="relative w-[5.94px] h-[5.66px] md:w-[9.24px] md:h-[8.73px]"
                  >
                    <Image
                      src="/images/icons/full-star.svg"
                      alt="Full Star"
                      fill
                      loading="lazy"
                      className="object-contain"
                    />
                  </div>
                ))}

                {/* Half star */}
                {/* Half star as static image using Next.js Image */}
                <div className="relative w-[5.94px] h-[5.66px] md:w-[9.24px] md:h-[8.73px]">
                  <Image
                    src="/images/icons/half_star.svg"
                    alt="Half Star"
                    fill
                    loading="lazy"
                    className="object-contain"
                  />
                </div>
              </div>

              <p className="md:text-sm text-[7.48px] z-10 font-normal ">)</p>
            </div>
            <div className="left-logos grid grid-cols-2 md:grid-cols-4 gap-[20px] items-center p-10 bg-gray-200 shadow-sm rounded-xl">
              <span className="">
                <svg
                  className="w-auto h-[29.78px] "
                  viewBox="0 0 113 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_179_33841)">
                    <path
                      d="M109.335 23.6155L112.466 25.7026C111.45 27.1991 109.019 29.7669 104.818 29.7669C99.6001 29.7669 95.7145 25.7301 95.7145 20.5948C95.7145 15.1302 99.6413 11.4229 104.378 11.4229C109.143 11.4229 111.477 15.2124 112.232 17.2582L112.644 18.3019L100.369 23.3821C101.303 25.2221 102.758 26.1557 104.818 26.1557C106.877 26.1557 108.305 25.1396 109.335 23.6155ZM99.7101 20.3067L107.907 16.9014C107.454 15.7618 106.109 14.9518 104.502 14.9518C102.456 14.9518 99.614 16.7643 99.7101 20.3067Z"
                      fill="#FF302F"
                    />
                    <path
                      d="M89.7968 2.07239H93.751V28.9294H89.7968V2.07239Z"
                      fill="#20B15A"
                    />
                    <path
                      d="M83.5632 12.1368H87.3803V28.4486C87.3803 35.2177 83.3847 38.005 78.6613 38.005C74.2127 38.005 71.5354 35.0118 70.533 32.5816L74.0342 31.126C74.6657 32.6226 76.1898 34.394 78.6613 34.394C81.6957 34.394 83.5632 32.5128 83.5632 28.9979V27.6799H83.4259C82.5196 28.7782 80.7896 29.7667 78.5927 29.7667C74.0067 29.7667 69.805 25.7711 69.805 20.6223C69.805 15.4458 74.0067 11.4092 78.5927 11.4092C80.7759 11.4092 82.5196 12.3841 83.4259 13.455H83.5632V12.1368ZM83.8376 20.6223C83.8376 17.3819 81.682 15.0202 78.9359 15.0202C76.1623 15.0202 73.8281 17.3819 73.8281 20.6223C73.8281 23.8214 76.1623 26.1418 78.9359 26.1418C81.6822 26.1557 83.8378 23.8214 83.8378 20.6223"
                      fill="#3686F7"
                    />
                    <path
                      d="M48.097 20.5535C48.097 25.8398 43.9779 29.7254 38.925 29.7254C33.8724 29.7254 29.7531 25.8262 29.7531 20.5535C29.7531 15.2399 33.8724 11.3679 38.925 11.3679C43.9779 11.3679 48.097 15.2399 48.097 20.5535ZM44.0877 20.5535C44.0877 17.2584 41.6985 14.9926 38.925 14.9926C36.1516 14.9926 33.7624 17.2584 33.7624 20.5535C33.7624 23.8213 36.1516 26.1145 38.925 26.1145C41.6987 26.1145 44.0877 23.8213 44.0877 20.5535Z"
                      fill="#FF302F"
                    />
                    <path
                      d="M68.1299 20.5948C68.1299 25.8811 64.0107 29.7667 58.958 29.7667C53.9051 29.7667 49.786 25.8809 49.786 20.5948C49.786 15.2811 53.9051 11.4229 58.958 11.4229C64.0107 11.4229 68.1299 15.2675 68.1299 20.5948ZM64.1068 20.5948C64.1068 17.2996 61.7177 15.0338 58.9441 15.0338C56.1704 15.0338 53.7814 17.2996 53.7814 20.5948C53.7814 23.8626 56.1707 26.1557 58.9441 26.1557C61.7314 26.1557 64.1068 23.8489 64.1068 20.5948Z"
                      fill="#FFBA40"
                    />
                    <path
                      d="M14.6771 25.7437C8.92394 25.7437 4.42052 21.1028 4.42052 15.3496C4.42052 9.59669 8.92394 4.95574 14.6771 4.95574C17.7802 4.95574 20.0456 6.17769 21.7207 7.74305L24.4807 4.98329C22.1466 2.74525 19.0297 1.04236 14.6771 1.04236C6.79588 1.04258 0.163956 7.46864 0.163956 15.3496C0.163956 23.2306 6.79588 29.6569 14.6771 29.6569C18.9336 29.6569 22.1466 28.2564 24.6592 25.6476C27.2405 23.0662 28.0368 19.4413 28.0368 16.503C28.0368 15.583 27.927 14.6357 27.8034 13.9355H14.6771V17.7525H24.0275C23.7529 20.1418 22.9978 21.7757 21.8856 22.8876C20.54 24.2471 18.4119 25.7437 14.6771 25.7437Z"
                      fill="#3686F7"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_179_33841">
                      <rect
                        width="112.85"
                        height="37.3"
                        fill="white"
                        transform="translate(0 0.985535)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>

              <span className="">
                <Image
                  src="/images/icons/trustpilpt.png"
                  alt="trustpilpt"
                  width={138.75}
                  height={40}
                  loading="lazy"
                  className="w-auto h-[29.77px]  "
                />
              </span>
              <span className="">
                <Image
                  src="/images/icons/clutch.png"
                  alt="clutch"
                  width={112.85}
                  height={37.14}
                  loading="lazy"
                  className="w-auto h-[29.84px] "
                />
              </span>
              <span className="">
                <Image
                  src="/images/icons/goodfirms.png"
                  alt="goodfirms"
                  width={162.8}
                  height={36.9}
                  loading="lazy"
                  className="w-auto h-[29.72px] "
                />
              </span>
            </div>
          </div>
        </div>
        <div className="mt-[16px] px-[15px] md:px-15   pb-0 md:pb-0">
          <p className="mb-5  md:mb-10">
            {" "}
            Out team never makes false promises at the time of project
            discussion . Building long-term relationships with our clients is
            Laser Web Maker’s No.1 priority. 95% of our customers return to us
            with new projects because they enjoy the quality of the websites
            that we create .
          </p>
        </div>
      </section>
      {/* about us section end */}

      {/* why chose us  */}

      <section className="why-choose-us section-style2">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="heading-second text-center mb-10"
        >
          Why Choose Us ?
        </motion.h2>
        {/* Heading */}

        {/* GRID CONTAINER */}
        <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* LEFT SIDE (spans 2 columns on md) */}
          <motion.div
            className="md:col-span-2 order-2 md:order-none"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  className="backdrop-blur-md shadow-md rounded-xl p-4 flex gap-4 border border-gray-100"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="rounded-lg flex items-start justify-center">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="text-md font-semibold">{item.title}</h4>
                    <p className="text-sm mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE Image (1 column) */}
          <motion.div
            className="md:col-span-1 order-1 md:order-none relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="overflow-hidden">
              <Image
                src="/images/about-us/about-us.webp"
                alt="Dentist with patient"
                width={450}
                height={510}
                className="object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* why chose us end  */}

      {/* our mission and our vission sectioin start */}

      <section id="mission-vision" className="section-style2">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="heading-second text-center mb-10"
        >
          Our Commitment & Future Outlook
        </motion.h2>
        <div className=" mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div
              variants={cardVariants}
              className="border border-gray-100  rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <Target size={32} className="text-[#5e9ed5] mr-3" />
                <h2 className="text-[32px] md:text-[40px]  leading-[120%]">
                  Our Mission
                </h2>
              </div>
              <p className="leading-relaxed">
                Our mission is to empower individuals and businesses with
                innovative solutions that drive growth, sustainability, and
                positive change. We deliver exceptional value through
                cutting-edge technology and unwavering commitment to excellence.
              </p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              className="border border-gray-100  rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <Eye size={32} className="text-[#5e9ed5] mr-3" />
                <h2 className="text-[32px] md:text-[40px]  leading-[120%]">
                  Our Vision
                </h2>
              </div>
              <p className="leading-relaxed">
                Our vision is to be a global leader in transformative
                innovation, fostering a future where technology seamlessly
                integrates with human potential, creating a more connected,
                equitable, and prosperous society for all.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* our mission and our vission sectioin end */}

      {/* what we deliver start */}
      <section className="what-we-deliver">
        <WhatWeDeliver />
      </section>
      {/* what we deliver end */}

      {/* cta section start  */}

      <CTASection />

      {/*  cta section end  */}

      {/* our approach start  */}

      <OurApproach />

      {/* our approach end  */}
    </>
  );
};

export default Service_Page;
