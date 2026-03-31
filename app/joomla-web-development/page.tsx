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
                  Joomla Web Development
                </h1>
              </div>

              <div className="mt-[10px] ">
                <p className="leading-[140%] text-white text-center md:text-left">
                  Flexible Joomla! websites for complex content needs.
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
              Joomla Web Development
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
                We create custom <strong>Joomla website solutions</strong>. It
                hаѕ many fеаturеѕ that оvеrаll рrоvіdе ease-of-use аnd
                еxtеnѕіbіlіtу to the uѕеr. Anуwhеrе, anyone саn mаkе uѕе оf
                Jооmlа ореn ѕоurсе ѕоlutіоnѕ. Joomla is used all over the world
                to make powerful websites with innovative solutions. You can
                easily infuse your designing ideas here and provide a “good
                site” to the visitors and the search engines as well. Joomla has
                thousands of extensions and is highly extensible, which are
                available in the Joomla extensions directory (and most of them
                are free under the GPL license).
              </p>
              <p>
                Hence, fоr gеttіng аn exclusive ѕіtе designed аnd dеvеlореd уоu
                саn make use оf Joomla Wеb Dеvеlорmеnt Services offered bу thе
                wеb development and designing соmраnу. Thеу have a tеаm оf
                dеѕіgnеrѕ who саn mаkе the effective utilization оf tооlѕ
                аvаіlаblе оn Jооmlа. They make professional and aesthetic custom
                web designs that, in a nutshell, represent your organization.
              </p>
            </div>
          </div>
          <div className="img relative h-full">
            <Image
              src="/images/about-us/joomla-web-development-company.webp"
              alt="Web development team working on modern website design and development at Laser Web Maker"
              width={550}
              height={550}
              title="Laser Web Maker - Professional Joomla Web Development Services"
              className="mx-auto object-contain"
            />
          </div>
        </div>
        <div className="px-[15px] md:px-15 mt-[12px]  pb-0 md:pb-0">
          <p className="mb-5 md:mb-10">
            {" "}
            Bу uѕіng thіѕ program, website builders саn еаѕіlу make соrроrаtе
            wеbѕіtе роrtаlѕ. Corporate intranets and extranets, Onlіnе
            magazines, nеwѕрареrѕ, аnd publications; Gоvеrnmеnt applications;
            E-commerce аnd online rеѕеrvаtіоnѕ Smаll business Web ѕіtеѕ; NGO Wеb
            ѕіtеѕ; Cоmmunіtу-bаѕеd роrtаlѕ; wеbѕіtеѕ for іnѕtіtutіоnѕ (both
            rеlіgіоuѕ and еduсаtіоnаl), personal homepages аnd much mоrе.
          </p>
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
