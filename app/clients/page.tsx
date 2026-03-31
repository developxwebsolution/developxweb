"use client";
import Link from "next/link";
import Image from "next/image";
// import "swiper/css";

import React, { useEffect, useRef, useState } from "react";

import { Home, ChevronRight, Globe } from "lucide-react";

const logos: string[] = [
  "/images/icons/logo3.png",
  "/images/icons/logo2.png",
  "/images/icons/logo1.png",
  "/images/icons/logo4.png",
  "/images/icons/logo5.png",
  "/images/icons/logo6.png",
  "/images/icons/logo7.png",
  "/images/icons/logo8.png",
  "/images/icons/logo9.png",
  "/images/icons/logo10.png",
  "/images/icons/Hiranandani-logo.png",
  "/images/icons/hoarding-champ.png",
  "/images/icons/laser-job-work.png",
  "/images/icons/mm-logo.png",
  "/images/icons/printing-dial-logo.png",
  "/images/icons/stitch-monkey.png",
  "/images/icons/aeron-space-design.png",
  "/images/icons/Aditya-brightness.png",
  "/images/icons/Agency-digitas.png",
  "/images/icons/ai-stack-flow-logo.png",
  "/images/icons/Airport-Lost-Found-Logo.png",
  "/images/icons/Akraa-logo.png",
  "/images/icons/Analytics-with-mehboob.png",
  "/images/icons/ANKIT-UNIFORMS-LOGO.png",
  "/images/icons/anyon-logo.png",
  "/images/icons/apnaflat-logo.png",
  "/images/icons/APSK-production.png",
  "/images/icons/ardhnari-foundation-logo.png",
  "/images/icons/arise-solutions.png",
  "/images/icons/art-kitech-studeo.png",
  "/images/icons/aryan-laser.png",
  "/images/icons/ase-logo.png",
  "/images/icons/avj-engineering.png",
  "/images/icons/bamboo-scrub-logo.png",
  "/images/icons/Beehive_logo_Small.png",
  "/images/icons/bellotta_logo11.png",
  "/images/icons/bnb-logo.png",
  "/images/icons/bpas-publication.png",
  "/images/icons/broiden_logo.png",
  "/images/icons/buston-logo.png",
  "/images/icons/certera-logo.png",
  "/images/icons/cool-summer-logo.png",
  "/images/icons/cosmoanalytical-logo.png",
  "/images/icons/creative-logo.png",
  "/images/icons/cut-1-logo.png",
  "/images/icons/decolase.png",
  "/images/icons/dizipay-logo.png",
  "/images/icons/Dr-Darlie-Koshy.png",
  "/images/icons/dream-vacation-trip.png",
  "/images/icons/edupath-academy.png",
  "/images/icons/elegante-kids.png",
  "/images/icons/endure-electronics.png",
  "/images/icons/enp-logo.png",
  "/images/icons/eph-tech.png",
  "/images/icons/ever-trends.png",
  "/images/icons/evolv3-logo.png",
  "/images/icons/excellent-logo.png",
  "/images/icons/Felex-Electronic.png",
  "/images/icons/fuzones.png",
  "/images/icons/g-infotech.png",
  "/images/icons/gemma-india.png",
  "/images/icons/golden-willows.png",
  "/images/icons/graftcut-logo.png",
  "/images/icons/greet-choice-logo.png",
  "/images/icons/gst-legato.png",
  "/images/icons/h2power-system.png",
  "/images/icons/hardicon_logo.png",
  "/images/icons/hari-sewa-sansthan.png",
  "/images/icons/healthanza-logo.png",
  "/images/icons/healthy-smile.png",
  "/images/icons/heaven-greenza.png",
  "/images/icons/hind-aircon.png",
  "/images/icons/ibrainz-nri-services.png",
  "/images/icons/ignitedlogo.png",
  "/images/icons/jeewan-trust-logo.png",
  "/images/icons/life-boatrm.png",
  "/images/icons/lifeway-logo.png",
  "/images/icons/logo-tech-ai-final-1.png",
  "/images/icons/magicbirds.png",
  "/images/icons/margreat-voque.png",
  "/images/icons/Medpro.png",
  "/images/icons/Mehbel-logo.png",
  "/images/icons/mk-logo.png",
  "/images/icons/mon-gur.png",
  "/images/icons/mr-deliveryz.png",
  "/images/icons/my-dream-voyage-logo.png",
  "/images/icons/my-thrift-fashion.png",
  "/images/icons/mytss-logo.png",
  "/images/icons/NCR-Concrete.png",
  "/images/icons/neevh-logo.png",
  "/images/icons/new-india-repair-logo.png",
  "/images/icons/new-rvakv-logo.png",
  "/images/icons/noorkari.png",
  "/images/icons/nxt-gen-logo.png",
  "/images/icons/om-hospital-logo.png",
  "/images/icons/onsen-world-logo.png",
  "/images/icons/phoebus-laser.png",
  "/images/icons/PP-Hygien.png",
  "/images/icons/PSYGN-logo.png",
  "/images/icons/quick-diet.png",
  "/images/icons/RACS-Careerhit.png",
  "/images/icons/rajeev-chadha.png",
  "/images/icons/real-play-media.png",
  "/images/icons/recharge-wala-logo.png",
  "/images/icons/RiReTech_logo.png",
  "/images/icons/sdf-1-logo.png",
  "/images/icons/seerat-shop-logo.png",
  "/images/icons/sees-india-logo.png",
  "/images/icons/shaurya-enterprises.png",
  "/images/icons/simpli-logo-1.png",
  "/images/icons/Snowy-vacation-homes.png",
  "/images/icons/sr-fotoz-logo.png",
  "/images/icons/sr-logo.png",
  "/images/icons/srsalogo-logo.png",
  "/images/icons/Surolia-Enterprises-logo.png",
  "/images/icons/t-teg-logo.png",
  "/images/icons/takshay-engineering-WORKS.png",
  "/images/icons/techprismlogo.png",
  "/images/icons/the-nut-ville.png",
  "/images/icons/the-white-notebook-logo.png",
  "/images/icons/the-winceys-logo.png",
  "/images/icons/united-auto-tech-logo.png",
  "/images/icons/vega-technologies.png",
  "/images/icons/vishwakarma-ro-logo.png",
  "/images/icons/vitric-logo.png",
  "/images/icons/waterio-transteg.png",
  "/images/icons/Wonder-Waterpark22.png",
  "/images/icons/Yatisa-Logo.png",
  "/images/icons/YR-Technologies-logo.png",
  "/images/icons/zenith-logo.png",
];
const Page = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
  setVisible(true);
}, []);

  return (
    <>
      <div>
        <div
          className="relative w-full bg-[url('/images/bg/our-clients-banner.jpg')] 
             bg-cover bg-center
             h-[200px] sm:h-[300px] md:h-[550px] flex items-center"
        >
          {/* Content Container */}
          <div className="relative container-width px-[15px] md:px-[60px] w-full flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start mx-auto h-full">
            {/* Text Section */}
            <div className="md:flex-[2] flex flex-col gap-4 justify-center items-start h-full">
              <div className="flex flex-col justify-center items-start h-full">
                <h1 className="main-heading text-white text-left">
                  Our Clients
                </h1>
                <p className="mt-[10px] leading-[140%] text-white text-left">
                 The businesses we&apos;re proud to partner with.
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
            <Globe size={14} className="md:size-{16}" />
            <span className="truncate max-w-[120px] md:max-w-none">
              Our Clients
            </span>
          </div>
        </div>
      </div>

      {/* about us section start */}

      <section id="about-us">
        <div className="section-style2  gap-[10px]">
          <div className="">
            <div ref={containerRef} className="w-full">
              <div className="client-home-logos grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {logos.map((logo, index) => (
                  <div
                    key={index}
                    style={{ transitionDelay: `${index * 80}ms` }}
                    className={`w-full h-full flex items-center justify-center border border-[#C5C5C5] bg-white
              transform transition-all duration-700 ease-out
              ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
                  >
                    <Image
                      src={logo}
                      alt={`Company logo ${index + 1}`}
                      width={160}
                      height={120}
                      className="grayscale hover:grayscale-0 transition-all duration-300"
                      priority={index < 5}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
