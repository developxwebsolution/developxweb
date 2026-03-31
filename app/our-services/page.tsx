"use client";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import { useState } from "react";
import ModalForm from "@/components/ModalForm";
import { Home, ChevronRight, Briefcase } from "lucide-react";
import { HeaderForm } from "@/components/HeaderForm";


const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div>
        <div className="relative  container-width min-h[450px] bg-gradient-to-r from-[#5E9ED5] to-[#1B2C39] pt-[60px] md:pt-[40px] pb-[40px] ">
          {/* Background Image */}

          <div className="relative container-width px-[15px] md:px-[60px] w-full  outer-box flex flex-col md:flex-row justify-between gap-[42px] items-center mx-auto">
            <div className="md:flex-[2] flex-col gap-4 justify-center items-center">
              <div className="flex flex-col">
                <h1 className="main-heading text-center md:text-left ">
                 Our Services
                </h1>
              </div>

              <div className="mt-[10px] ">
                <p className="leading-[140%] text-white text-center md:text-left">
                  #Most Trusted Web Development Company
                </p>
              </div>
            </div>
            <HeaderForm />
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

          <Link
            href="/services"
            className="flex items-center space-x-1 hover:text-[#5E9ED5] transition-colors"
          >
            <Briefcase size={14} className="md:size-{16}" />
            <span>Services</span>
          </Link>

        
        </div>
      </div>
      {/* MODAL — always included */}
      <ModalForm isOpen={isModalOpen} setIsOpen={setIsModalOpen} />

 {/* sections starts */}

      <section id="section-one">
        <div className="section-style2 grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          <div className="content-about flex items-center order-2 md:order-1">
            <div>
              <h2 className="mb-[16px]">
               <span className="text-[#5E9ED5]">Web Development Services</span>
              </h2>

             <p className="">
                At Laser Web Maker, we help businesses turn basic and simple
                product information into clean, attractive, catalogs that drive
                result. Our goal is to <strong>design catalogs that build trust</strong>, catch
                attention, and present your brand in a professional way.
              </p>

              <p>
                We provide full <strong>catalog design services</strong>, starting from the
                initial concept and layout to final production and digital
                delivery. Our skilled in-house team of designers and
                photographers focuses on creating catalogs that look polished,
                organized, and easy to understand. Our approach covers creative
                direction, structured layouts, product photography, <strong>digital and
                e-catalog design</strong>, print-ready files, and e-commerce-friendly
                formats.{" "}
              </p>

                 <Link href="#" className="view-all-btn mt-4 inline-block ">
                              View All
                            </Link>
            </div>
          </div>
         
         <div className="relative w-full aspect-[4/3] order-1 md:order-2">
  <Image
    src="/images/website-development/web-dev-img.jpg"
    alt="Catalog design team working"
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover rounded-lg"
    priority
  />
</div>

        </div>
      </section>
    
 {/* sections starts */}


 <section id="section-one-our-services" className="bg-[#F6F7FA]">
        <div className="section-style grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          <div className="content-about flex items-center order-2 md:order-1">
            <div>
              <h2 className="mb-[16px]">
               <span className="text-[#5E9ED5]">Web Development Services</span>
              </h2>

             <p className="">
                At Laser Web Maker, we help businesses turn basic and simple
                product information into clean, attractive, catalogs that drive
                result. Our goal is to <strong>design catalogs that build trust</strong>, catch
                attention, and present your brand in a professional way.
              </p>

              <p>
                We provide full <strong>catalog design services</strong>, starting from the
                initial concept and layout to final production and digital
                delivery. Our skilled in-house team of designers and
                photographers focuses on creating catalogs that look polished,
                organized, and easy to understand. Our approach covers creative
                direction, structured layouts, product photography, <strong>digital and
                e-catalog design</strong>, print-ready files, and e-commerce-friendly
                formats.{" "}
              </p>

                 <Link href="#" className="view-all-btn mt-4 inline-block ">
                              View All
                            </Link>
            </div>
          </div>
         
         <div className="relative w-full aspect-[4/3] order-1 md:order-2">
  <Image
    src="/images/website-development/web-dev-img.jpg"
    alt="Catalog design team working"
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover rounded-lg"
    priority
  />
</div>

        </div>
      </section>


    </>
  );
};

export default Page;
