"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
interface PortfolioItem {
  title: string;
  image: string;
  tags: string[];

  tech: string[];
  link: string;
  flag: string;
}

const portfolioData: PortfolioItem[] = [
  {
    title: "nitrd.nic.in",
    image: "/images/portfolio/1nitrd-portfolio-India.webp",
    tags: ["Government", "HealthCare"],

    tech: ["Html", "CSS", "JavaScript", "Wordpress", "Php"],
    flag: "🇮🇳",
    link: "https://nitrd.nic.in/",
  },
  {
    title: "Group Colleges Australia",
    image: "/images/portfolio/5GCA-Austrelia.webp",
    tags: ["Education"],

    tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇦🇺",
    link: "https://gca.edu.au/",
  },
  {
    title: "Intraglobe",
    image: "/images/portfolio/4intraglobe-Saudi-Arabia.webp",
    tags: ["Consulting"],
    tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇦🇪",
    link: "https://intraglobehr.com/",
  },
  {
    title: "Cut1 Media Agency",
    image: "/images/portfolio/2cut1-agency-UK.webp",
    tags: ["Advertising"],

    tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇬🇧",
    link: "https://cut1.agency",
  },
  {
    title: "Snowy Vacation Home",
    image: "/images/portfolio/3snowy-vacation-home-dubai.webp",
    tags: ["Real Estate"],

    tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇦🇪",
    link: "https://snowyvacationhomes.com",
  },
  {
    title: "Philanzel India",
    image: "/images/portfolio/9philanzel-portfolio-India.webp",
    tags: ["Finance"],

    tech: ["Html", "CSS", "JavaScript", "Php"],
    flag: "🇮🇳",
    link: "https://philanzel.com/",
  },

  {
    title: "Evolv3 AI",
    image: "/images/portfolio/6evolv3ai-USA.webp",
    tags: ["IT & Technology"],
    tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇺🇸",
    link: "https://aievolv3.com/",
  },
];

export default function PortfolioSlider() {
  return (
    <section className="relative section-style text-center">
      {/* Heading */}

      <div className="heading flex flex-col md:flex-row justify-between items-center gap-4 mb-5 md:mb-10 ">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="heading-second2"
        >
          Work That Speaks
        </motion.h2>
        <Link
          href="/portfolio"
          className="view-all-btn hidden md:inline-block "
        >
          View All
        </Link>
      </div>
      <div className="relative">
        {/* SAME ARROWS STYLE */}
        <div className="flex justify-between absolute top-1/2 -translate-y-1/2 z-10 w-full px-2">
          <div className="portfolio-swiper-prev cursor-pointer text-black shadow-[0_2px_10px_rgb(94_158_213_/_50%)] bg-white hover:bg-blue-100 transition-all duration-500 p-2 rounded-full">
            <ArrowLeft size={16} />
          </div>
          <div className="portfolio-swiper-next cursor-pointer bg-white shadow-[0_2px_10px_rgb(94_158_213_/_50%)]  transition-all duration-500 text-black p-2 rounded-full hover:bg-blue-100">
            <ArrowRight size={16} />
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".portfolio-swiper-next",
            prevEl: ".portfolio-swiper-prev",
          }}
          loop
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 0 },
            768: { slidesPerView: 2, spaceBetween: 0 },
          }}
          className="pb-12 mr-0"
        >
          {portfolioData.map((item, idx) => (
            <SwiperSlide key={idx}>
              <Link
                href={item.link}
                target="_blank"
                className="block h-full cursor-pointer"
              >
                <div className="group m-3 rounded-xl text-black flex flex-col justify-between h-full shadow-md transition-all duration-500">
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-tl-xl rounded-tr-xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={800}
                      height={450}
                      className="w-full h-[200px] md:h-[350px] object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:brightness-75"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>

                  {/* Content */}
                  <div className="p-4 relative flex flex-col h-full">
                    <h4 className="text-left font-bold mb-2 group-hover:text-[#5e9ed5] transition-colors duration-500">
                      {item.title}
                    </h4>

                    <div className="flex gap-2 flex-wrap mb-3">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex gap-2 flex-wrap">
                        {item.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1 rounded-full border border-gray-300 text-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <span className="text-xl">{item.flag}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="text-center inline-block md:hidden mt-[20px] ">
        <Link href="/portfolio" className="view-all-btn-mobile ">
          View All
        </Link>
      </div>
    </section>
  );
}
