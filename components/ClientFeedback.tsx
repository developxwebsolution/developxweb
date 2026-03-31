"use client";

import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";
import Link from "next/link";

interface VideoItem {
  id: number;
  name: string;
  designation: string;
  thumbnail: string;
  videoSrc: string;

  type: "youtube" | "mp4";
}

const videoData: VideoItem[] = [
  {
    id: 1,
    name: "Marc",
    designation: "Founder of RealPlay - 🇬🇧",

    thumbnail: "/images/our-clients-img/client1.jpg",
    videoSrc: "https://www.youtube.com/watch?v=L3-IJEhqlTI",
    type: "youtube",
  },

  {
    id: 2,
    name: "Rajdeep Singh",
    designation: "Founder of Philanzel - 🇮🇳",

    thumbnail: "/images/our-clients-img/client2.jpg",
    videoSrc: "https://www.youtube.com/watch?v=sQuKEqqEAkM",
    type: "youtube",
  },
  {
    id: 3,
    name: "Marc",
    designation: "Founder of RealPlay - 🇬🇧",

    thumbnail: "/images/our-clients-img/client1.jpg",
    videoSrc: "https://www.youtube.com/watch?v=L3-IJEhqlTI",
    type: "youtube",
  },

  {
    id: 4,
    name: "Rajdeep Singh",
    designation: "Founder of Philanzel - 🇮🇳",

    thumbnail: "/images/our-clients-img/client2.jpg",
    videoSrc: "https://www.youtube.com/watch?v=sQuKEqqEAkM",
    type: "youtube",
  },
];

export default function VideoSlider() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

  const openModal = (index: number) => {
    setActiveVideoIndex(null);
    requestAnimationFrame(() => {
      setActiveVideoIndex(index);
      setModalIsOpen(true);
    });
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setActiveVideoIndex(null);
  };

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <div className=" section-style relative z-10">
      <div className="heading flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="heading-second text-center"
        >
          See What Our Clients Say
        </motion.h2>
        <a
          href="https://www.youtube.com/@laserwebmaker7037"
          target="_blank"
          className="view-all-btn hidden md:inline-block "
        >
          View All
        </a>
      </div>

      {/* 
    
    correct code remove below part
      <div className="relative">
    
        <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center z-20 px-2 pointer-events-none">
          <button
            onClick={handlePrev}
            className="pointer-events-auto bg-[#5E9ED5] hover:bg-[#CCE7C3] transition p-2 rounded-full text-white"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            className="pointer-events-auto bg-[#5E9ED5] hover:bg-[#CCE7C3] transition p-2 rounded-full text-white"
          >
            <ArrowRight size={18} />
          </button>
        </div>

        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop
          modules={[Pagination]}
          preventClicks={false}
          preventClicksPropagation={false}
          touchStartPreventDefault={false}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
        >
          {videoData.map((vid, index) => (
            <SwiperSlide key={vid.id}>
              <div
                role="button"
                tabIndex={0}
                onClickCapture={() => openModal(index)}
                className="relative cursor-pointer group overflow-hidden rounded-3xl shadow-lg"
              >
             
                <Image
                  src={vid.thumbnail}
                  alt={vid.name}
                  width={500}
                  height={400}
                  className="w-full h-[234px] md:h-[340px] object-cover"
                />

                <div className="absolute bottom-4 left-4 z-10">
                  <div>
                    <span className="text-white px-3 text-[30px]">
                      {vid.name}
                    </span>
                  </div>
                  <div>
                    <span className="text-white px-3 text-[15px] italic">
                      {vid.designation}
                    </span>
                  </div>
                  <span className="text-white px-3 text-[15px] py-0 mt-0 italic">
                    {vid.location}
                  </span>
                </div>

               
                <div className="absolute inset-0 bg-black/40 pointer-events-none" />

               
                <div
                  className="
        absolute top-4 right-4 z-10
        opacity-0 scale-75
        group-hover:opacity-100 group-hover:scale-100
        transition-all duration-300 ease-out
        pointer-events-none
      "
                >
                  <Image
                    src="/images/our-clients-img/play-button.svg"
                    alt="Play"
                    width={44}
                    height={44}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    
    
    */}

      {/* ================= MOBILE VIEW (NO SLIDER) ================= */}
      <div className="md:hidden grid grid-cols-1 gap-6">
        {videoData.slice(0, 2).map((vid, index) => (
          <div
            key={vid.id}
            onClickCapture={() => openModal(index)}
            className="relative cursor-pointer overflow-hidden rounded-3xl shadow-lg"
          >
            <Image
              src={vid.thumbnail}
              alt={vid.name}
              width={500}
              height={400}
              loading="lazy"
              className="w-full h-[234px] object-cover"
            />

            <div className="absolute bottom-4 pb-3 left-4 z-10">
              <span className="text-white text-[26px] block">{vid.name}</span>
              <span className="text-white text-[14px] italic block">
                {vid.designation}
              </span>
            </div>

            <div className="absolute inset-0 bg-black/40" />
            {/* Play Button – Top Right (Hover) */}
            <div
              className="
        absolute top-4 right-4 z-10
       
        
      "
            >
              <Image
                src="/images/our-clients-img/play-button.svg"
                alt="Play"
                width={44}
                height={44}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-5">
        <Link
          href="https://www.youtube.com/@laserwebmaker7037"
          target="_blank"
          className="view-all-btn-mobile inline-block md:hidden "
        >
          View All
        </Link>
      </div>

      {/* ================= DESKTOP SLIDER ================= */}
      <div className="hidden md:block relative">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop
          modules={[Pagination]}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
        >
          {videoData.map((vid, index) => (
            <SwiperSlide key={vid.id}>
              <SwiperSlide key={vid.id}>
                <div
                  role="button"
                  tabIndex={0}
                  onClickCapture={() => openModal(index)}
                  className="relative cursor-pointer group overflow-hidden rounded-3xl shadow-lg"
                >
                  {/* Thumbnail */}
                  <Image
                    src={vid.thumbnail}
                    alt={vid.name}
                    width={500}
                    height={400}
                    loading="lazy"
                    className="w-full h-[234px] md:h-[340px] object-cover"
                  />

                  {/* Client Name – Bottom Left */}
                  <div className="absolute bottom-4 pb-3 left-4 z-10">
                    <div>
                      <span className="text-white px-3 client-name ">
                        {vid.name}
                      </span>
                    </div>
                    <div>
                      <span className="text-white px-3 client-content">
                        {vid.designation}
                      </span>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 pointer-events-none" />

                  {/* Play Button – Top Right (Hover) */}
                  <div
                    className="
        absolute top-4 right-4 z-10
        opacity-0 scale-75
        group-hover:opacity-100 group-hover:scale-100
        transition-all duration-300 ease-out
        pointer-events-none
      "
                  >
                    <Image
                      src="/images/our-clients-img/play-button.svg"
                      alt="Play"
                      width={44}
                      height={44}
                      loading="lazy"
                    />
                  </div>
                </div>
              </SwiperSlide>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="relative mx-auto w-full max-w-5xl outline-none z-[9999]"
        overlayClassName="fixed inset-0 bg-black/80 flex items-center justify-center z-[9998]"
      >
        <div className="relative w-full bg-black rounded-lg p-4">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-0 right-0 text-white   p-2  text-2xl z-10"
          >
            ✖
          </button>

          {/* Video */}
          {activeVideoIndex !== null && (
            <>
              {videoData[activeVideoIndex].type === "youtube" ? (
                <iframe
                  key={videoData[activeVideoIndex].videoSrc}
                  className="w-full h-[30vh] md:h-[70vh] rounded-md"
                  src={`https://www.youtube.com/embed/${
                    videoData[activeVideoIndex].videoSrc.split("v=")[1]
                  }?autoplay=1&mute=1&rel=0`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              ) : (
                <video
                  key={videoData[activeVideoIndex].videoSrc}
                  src={videoData[activeVideoIndex].videoSrc}
                  className="w-full h-[30vh] md:h-[70vh] object-contain rounded-md"
                  autoPlay
                  controls
                />
              )}
            </>
          )}
        </div>
      </Modal>
    </div>
  );
}
