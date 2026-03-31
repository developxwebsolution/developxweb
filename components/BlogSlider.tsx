"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, UserCircle } from "lucide-react";
import Link from "next/link";
// import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

interface Blog {
  title: string;
  // desc: string;
  img: string;
  date: string;
  link: string;
  author: string;
}

const blogs: Blog[] = [
  {
    title: "Myths About Web Development Your Business Needs To Know",
    author: "Lаѕеr Web Mаkеr",
    img: "/images/blogs/webdevelopment.webp",
    date: "Dec 18, 2019",
    link: "https://www.laserwebmaker.com/blogs/myths-about-web-development-your-business-needs-to-know/",
  },
  {
    title: "Why WordPress Website is Best For Small Business",
    author: "Lаѕеr Web Mаkеr",
    img: "/images/blogs/wordpresswebsite.webp",
    date: "Jan 03, 2020",
    link: "https://www.laserwebmaker.com/blogs/website-for-small-business/",
  },
  {
    title: "How To Impress Your Client With Web Development Tips?",
    author: "Lаѕеr Web Mаkеr",
    img: "/images/blogs/How-To-Impress-Your-Client-With-Web-Development-Tips.webp",
    date: "Nov 25, 2019",
    link: "https://www.laserwebmaker.com/blogs/how-to-impress-your-client-with-web-development-tips/",
  },
  {
    title: "4 Tips To Keep In Mind While Web Development",
    author: "Lаѕеr Web Mаkеr",
    img: "/images/blogs/4Tips-To-Keep-In-Mind-During-Website-Designing.webp",
    date: "Dec 21, 2019",
    link: "https://www.laserwebmaker.com/blogs/4-tips-to-keep-in-mind-while-web-development/",
  },
  {
    title: "6 Web-Tested Tips For A Successful Web Development Career",
    author: "Lаѕеr Web Mаkеr",
    img: "/images/blogs/6-Web-Tested-Tips-For-A-Successful-Web-Development-Career.webp",
    date: "Dec 11, 2019",
    link: "https://www.laserwebmaker.com/blogs/6-web-tested-tips-for-a-successful-web-development-career/",
  },
  {
    title: "What is Conversion Rate and How to Calculate It?",
    author: "Lаѕеr Web Mаkеr",
    img: "/images/blogs/What-is-Conversion-Rate-and-How-to-Calculate-It.webp",
    date: "Nov 22, 2019",
    link: "https://www.laserwebmaker.com/blogs/what-is-conversion-rate-and-how-to-calculate-it/",
  },
];

export default function BlogSlider() {
  return (
    <section className="relative blog-section text-center w-full section-style bg-[#FAFAFA]">
      {/* Heading */}

      {/* Heading */}

      <div className="heading flex flex-col md:flex-row justify-between items-center gap-4 mb-5">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="heading-second"
        >
          News & Blogs Insights
        </motion.h2>
        <Link
          href="https://www.laserwebmaker.com/blogs/"
          className="view-all-btn hidden md:inline-block "
        >
          View All
        </Link>
      </div>

      <div className="relative">
        {/* Desktop Arrows */}
        <div className="flex justify-between absolute top-1/2 -translate-y-1/2 z-10 w-full px-2">
          <div className="swiper-button-prev-custom cursor-pointer text-black shadow-[0_2px_10px_rgb(94_158_213_/_50%)] bg-white hover:bg-blue-100 transition-all duration-500  p-2 rounded-full">
            <ArrowLeft size={16} />
          </div>
          <div className="swiper-button-next-custom cursor-pointer bg-white shadow-[0_2px_10px_rgb(94_158_213_/_50%)]  hover:bg-blue-100 transition-all duration-500 text-black p-2 rounded-full">
            <ArrowRight size={16} />
          </div>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 0 }, // pehle 30 tha, ab 15
            768: { slidesPerView: 3, spaceBetween: 0 }, // pehle 30 tha, ab 15
          }}
          className="pb-12 mr-0"
        >
          {blogs.map((blog, idx) => (
            <SwiperSlide key={idx}>
              <Link
                href={blog.link}
                target="_blank"
                className="block h-full cursor-pointer"
              >
                <div className="group relative overflow-hidden bg-white m-3  rounded-xl text-black flex flex-col justify-between h-full shadow-md transition-all duration-500">
                  <div className="relative overflow-hidden rounded-tl-xl rounded-tr-xl mb-1">
                    <Image
                      src={blog.img}
                      alt={blog.title}
                      width={800}
                      height={450}
                      className="w-full h-55 object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:brightness-75"
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    {/* Floating icon on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700">
                      {/* <div className="bg-white/80 p-3 rounded-full shadow-lg backdrop-blur-sm transform scale-90 group-hover:scale-100">
                      <CalendarDays className="w-5 h-5 text-[#5e9ed5]" />
                    </div> */}
                    </div>
                  </div>

                  <div className="p-3 relative">
                    <div className="flex items-center justify-between text-gray-500 text-sm mb-2">
                      <div className="flex items-center">
                        <CalendarDays className="w-4 h-4 mr-2 text-gray-400" />
                        {blog.date}
                      </div>
                      <div className="flex items-center">
                        <UserCircle className="w-4 h-4 mr-2 text-gray-400" />
                        {blog.author}
                      </div>
                    </div>

                    <h4 className="text-left text-lg font-semibold text-black mb-2 line-clamp-2 group-hover:text-[#5e9ed5] transition-colors duration-500">
                      {blog.title}
                    </h4>

                    {/* <p className="text-black leading-[140%] text-[14px] font-normal line-clamp-3 mb-3">
                    {blog.desc}
                  </p> */}

                    <div
                      className="absolute inset-x-0 bottom-0 h-[4px] bg-[#5e9ed5]
  transform scale-x-0
  origin-left
  group-hover:scale-x-100
  transition-transform
  duration-700
  ease-out"
                    ></div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="text-center inline-block md:hidden  mt-5">
        <Link
          href="https://www.laserwebmaker.com/blogs/"
          target="_blank"
          className="view-all-btn-mobile text-center "
        >
          View All
        </Link>
      </div>
    </section>
  );
}
