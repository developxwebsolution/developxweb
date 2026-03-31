"use client";
import Link from "next/link";
import Image from "next/image";
// import "swiper/css";
import { useState } from "react";
import CTASection from "@/components/CTASection";
import ModalForm from "@/components/ModalForm";
import { Home, ChevronRight, Globe, Briefcase } from "lucide-react";
import Faq from "./components/Faq";
import Testimonials from "@/components/Testimonials";
import { Services } from "./components/Services";
import ClientFeedback from "@/components/ClientFeedback";
import { HeaderForm } from "@/components/HeaderForm";
import TechnologyTabs from "@/components/TechnologyTabs";
import { WhyChoose } from "../../components/WhyChoose";
import BlogSlider from "@/components/BlogSlider";
import Process from "@/components/Process";
import Serving_Industries from "@/components/Serving_Industries";
import TrustSection from "@/components/TrustSection";
import PortfolioSlider from "@/components/PortfolioSlider";

import { trustContent } from "../../data/trustContent";
import { processData } from "@/data/processData";
import { technologyContent } from "@/data/technologyData";
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
                <h1 className="main-heading text-white text-center md:text-left">
                  Magento Website Development
                </h1>
              </div>

              <div className="mt-[10px] ">
                <p className="leading-[140%] text-white text-center md:text-left">
                  Enterprise-level ecommerce solutions with Magento.
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

          <ChevronRight size={12} className="text-gray-400 md:size-{16}" />

          <div className="flex items-center space-x-1 text-[#5E9ED5]">
            <Globe size={14} className="md:size-{16}" />
            <span className="truncate max-w-[120px] md:max-w-none">
              Magento Website Development
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
                There is more to e-commerce than just uninteresting monetary
                data that makes your eyes glaze over. A website committed to
                e-commerce desires to know what its customers are questioning,
                and Magento can do that through its <strong>Magento</strong>{" "}
                mobile carrier.
              </p>

              <p>
                With Magento Mobile, your commercial enterprise will be able to
                expand your personal apps that could work hand in hand with your
                online retail operations. So what does that suggest? It&apos;s
                the way those local apps can assist your clients in benefiting
                from a higher <strong><Link href={"/magento-website-development"}>online e-commerce</Link></strong> experience
                while you get extra statistics on what clients are shopping for
                and what is being ignored. You could create retail commercial
                enterprise apps with the intention to run on Android devices, in
                addition to iPads and iPhones. This is a big gain in case you
                need to shave off dropping merchandise and stick to merchandise
                that you recognize your customers are inclined to pay for.
              </p>
            </div>
          </div>
          <div className="img relative h-full">
            <Image
              src="/images/magento-web-development/magento-website-development-about-us.webp"
              alt="Web development team working on modern website design and development at Laser Web Maker"
              width={500}
              height={500}
              title="Laser Web Maker - Professional Magento Web Development Services"
              className="mx-auto object-contain"
            />
          </div>
        </div>
      </section>
      {/* about us section end */}

      {/* Our Web Development Services */}

      <Services />
      {/* Our Web Development Services end */}

      {/* why business choose  */}

      <WhyChoose />

      {/* why business choose  end */}
      {/* truested  */}

      <TrustSection content={trustContent.default} />
      {/* truested end */}

      {/* clientstudies start */}

      <PortfolioSlider />
      {/* clientstudies end */}

      {/* our process  */}

      <Process content={processData.default} />

      {/* <our process Timeline/> */}

      {/* TechnologyTabs start */}
      <TechnologyTabs content={technologyContent.default} />
      {/* TechnologyTabs end */}
      {/* cta section start  */}

      <CTASection />

      {/*  cta section end  */}

      {/* services we offers */}
      <Serving_Industries />
      {/* services we offers end */}

      {/* client feedback */}
      <ClientFeedback />
      {/* client feedback end */}

      {/* blog  */}

      <BlogSlider />
      {/* blog end */}
      {/* faq */}
      <Faq />
      {/* faq end */}

      {/* Testimonials start */}
      <Testimonials />
      {/* Testimonials end */}
    </>
  );
};

export default Page;
