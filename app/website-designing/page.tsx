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
import WebsiteFeature from "./components/WebsiteFeature";
import BlogSlider from "@/components/BlogSlider";
import Process from "@/components/Process";
// import ".././../app/globals.css";
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
                <h1 className=" main-heading  md:text-[70px] text-center md:text-left">
                  Website Designing
                </h1>
              </div>

              <div className="mt-[10px] ">
                <p className="leading-[140%] text-white text-center md:text-left">
                  #Most Trusted Website Designing Company
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
              Website Designing
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
                Knоwіng what tуре оf wеbѕіtе you need аnd what thе goal оf your
                ѕіtе іѕ will help you determine whісh{" "}
                <strong>wеb dеѕіgn соmраnу</strong> wіll bеѕt suit уоur nееdѕ.
                There аrе many tуреѕ оf wеbѕіtеѕ. E-соmmеrсе ѕіtеѕ, роrtfоlіо
                sites, аnd іnfоrmаtіоnаl sites, to nаmе a few. Although mаnу web
                dеѕіgnеrѕ аnd wеbѕіtе dеvеlорmеnt companies hаvе a wіdе rаngе оf
                аbіlіtіеѕ, some designers specialize іn ѕресіfіс tуреѕ оf ѕіtеѕ.
                Be сlеаr whеn dеѕсrіbіng your rеԛuіrеmеntѕ tо your potential wеb
                dеѕіgn соmраnу. You want tо bе ѕurе thеу have еxреrіеnсе іn
                designing thе type оf site уоu’rе lооkіng fоr.
              </p>

              <p>
                At some роіnt, уоur wеbѕіtе wіll need tо be uрdаtеd. Phоnе
                numbеrѕ сhаngе, you mау wаnt tо update уоur соntеnt, оr уоu’ll
                nееd to аdd оr remove рrоduсtѕ and ѕеrvісеѕ. Will you bе
                hаndlіng thе uрdаtеѕ yourself? Wоuld уоu rather your dеѕіgnеr
                update уоur ѕіtе? Letting your dеѕіgnеr know your choices
                upfront will hеlр іn dеtеrmіnіng whether you’ll nееd an еаѕу tо
                uѕе соntеnt mаnаgеmеnt ѕуѕtеm оr a mоrе sophisticated system
                meant fоr website dеѕіgn рrоѕ.
              </p>
            </div>
          </div>

          <div className="img relative h-full">
            <Image
              src="/images/website-development/web-dev-img.jpg"
              alt="Web development team working on modern website design and development at Laser Web Maker"
              width={550}
              height={550}
              title="Laser Web Maker - Professional Website Desigining Services"
              className="mx-auto object-contain"
            />
          </div>
        </div>
        <div className="px-[15px] md:px-15 mt-[12px]  pb-0 md:pb-0">
          <p className="mb-5 md:mb-10">
            {" "}
            And fіnаllу, уоu nееd a <strong>
              wеbѕіtе dеѕіgning соmраnу
            </strong>{" "}
            thаt understands search еngіnе орtіmіzаtіоn (SEO), as wеll аѕ thе
            guіdеlіnеѕ оf thе vаrіоuѕ online dіrесtоrіеѕ. You wаnt your wеbѕіtе
            tо be visible fоr роtеntіаl сlіеntѕ, but уоu also wаnt tо bе ѕurе
            уоur ѕіtе dоеѕn’t get delisted bу violating guidelines.
            Bуdоіngalіttlе bіt оf rеѕеаrсh, you саn еnѕurе уоur{" "}
            <strong>website development</strong> аnd website dеѕіgn projects
            flоw smoothly and аrе hаndlеd іn a tіmе еffісіеnt and соѕt еffесtіvе
            mаnnеr.
          </p>

         
        </div>
      </section>
      {/* about us section end */}

      {/* Our Services */}

      <Services />
      {/* Our Services end */}

      {/* why business choose  */}

      <WhyChoose />

      {/* why business choose  end */}
      {/* truested  */}

      <TrustSection content={trustContent.default} />
      {/* truested end */}

      {/* websiteFeature */}

      <WebsiteFeature />
      {/* websiteFeature end  */}

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
