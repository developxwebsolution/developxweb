import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function OurPatners() {
  return (
    <div className="container-width section-style">
      <div className="outer-box flex flex-col lg:flex-row ">
        <div className="content-box flex   bg-[#5E9ED5] px-[30px] py-[30px] lg:py-[20px] w-full lg:max-w-[380px]">
          <div className="flex flex-col justify-center gap-[10px] ">
            <div className="">
              <h3 className="text-[#F2E488] font-semibold mb-2 md:mb-0 text-[30px] md:text-[30px]  leading-[100%] ">
                Reach Your Business Goals
              </h3>
              <h3 className="text-[#fff] font-medium text-[20px] md:text-[25px]  leading-[120%] ">
                in 2025 with Laserwebmaker
              </h3>
            </div>
            <div className="content">
              <p className="text-[15px] text-white/80 font-normal leading-[120%]">
                Laserwebmaker has always worked hard to make sure that we’re
                getting what we need out of the partnership, not just what may
                seem like the best result.
              </p>
            </div>

            <Link
              href="/clients"
              className="px-[16px] py-3 w-full lg:w-[333px] text-[#057BC1] text-[16px] bg-[#fff] md:text-[20px]  rounded-full leading-[26px]  hover:bg-[#057BC1] hover:text-[#fff]  transition-all duration-500 font-semibold text-center shadow-[5px_7px_12.09px_-5.09px_rgba(0,_0,_0,_0.2)]"
            >
              View All
            </Link>
          </div>
        </div>
        <div className="client-home-logos flex-1 w-full  flex flex-col justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 w-full place-items-center border border-[#C5C5C5] border-b-0 last:border-r-0">
            {[
              "/images/icons/logo11.png",
              "/images/icons/logo1.png",
            
              "/images/icons/logo3.png",
              "/images/icons/Hiranandani-logo.png",
              "/images/icons/golden-willows.png",
              "/images/icons/mm-logo.png",
              "/images/icons/hardicon_logo.png",
              "/images/icons/bellotta_logo11.png",
              "/images/icons/logo16.png",
              "/images/icons/logo13.png",
              "/images/icons/logo17.png",
              "/images/icons/logo7.png",
              "/images/icons/Diyabati-logo.png",
              "/images/icons/logo5.png",
              "/images/icons/laser-job-work.png",
              "/images/icons/stitch-monkey.png",
              "/images/icons/logo15.png",
              "/images/icons/logo18.png",
            ].map((logo, index) => (
              <div
                key={index}
                className="aspect-[5/4] w-full  flex justify-center items-center border-r border-b border-[#C5C5C5]"
              >
                <Image
                  className="md:max-w-[160px] p-[10px]"
                  src={logo}
                  alt={`Company logo ${index}`}
                  width={150}
                  height={118}
                  
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
