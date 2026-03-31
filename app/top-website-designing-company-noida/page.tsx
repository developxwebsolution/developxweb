"use client";
import Link from "next/link";
import Image from "next/image";
// import "swiper/css";
import { useState } from "react";
import ModalForm from "@/components/ModalForm";
import { Home, ChevronRight, Globe } from "lucide-react";
import Faqs from "@/components/LocationFaqs";
import { faqContent } from "@/data/faqContent";

import Testimonials from "@/components/Testimonials";
import Services from "../../components/LocationServices";

import ClientFeedback from "@/components/ClientFeedback";
import { HeaderForm } from "@/components/HeaderForm";
import TechnologyTabs from "@/components/TechnologyTabs";
import { WhyChoose } from "../../components/LocationWhyChoose";
import { motion } from "framer-motion";
import BlogSlider from "@/components/BlogSlider";
import Process from "@/components/Process";
import Serving_Industries from "@/components/Serving_Industries";

import PortfolioSlider from "@/components/PortfolioSlider";
import { processData } from "@/data/processData";

import TrustSection from "../../components/TrustSection";
import { trustContent } from "../../data/trustContent";
import { servicesContent } from "../../data/servicesContent";

import WebsiteServices from "../../components/LocationWebsiteServices";
import { websiteServicesCommon } from "@/data/websiteServicesContent";
import { technologyContent } from "@/data/technologyData";
import BenefitsSection from "@/components/LocationBenefitsSection";
import { topCompaniesData } from "@/data/topCompaniesData";
import { benefitsData } from "@/data/benefitsData";
import TableOfContents from "@/components/TableOfContents";
import { whyChooseContent } from "@/data/whyChooseContent";

import LocationPricingTable from "@/components/LocationPricingTable";
import { pricingContent } from "@/data/pricingContent";

import LocationCTASection from "@/components/LocationCTASection";
import { ctaContent } from "@/data/ctaContent";
import LocationTopCompaniesSection from "@/components/LocationTopCompaniesSection";
const tocItems = [
  {
    id: "about-us",
    label: " Trusted Web Development in Noida",
  },
  {
    id: "our-services",
    label:
      "Top Website Designing Company in Noida | Creative Digital Solutions",
  },
  {
    id: "our-website-services",
    label:
      "We Design Beautiful Websites for Noida Businesses | Web Design Agency",
  },
  {
    id: "why-choose-us",
    label:
      "Top Website Designing Company in Noida | Creative Web Design Agency",
  },
  {
    id: "our-achievements",
    label:
      "Crafting Digital Experiences: Your Premier Web Design Partner in Noida",
  },
  { id: "Case-studies", label: "Work That Speaks" },
  {
    id: "our-process",
    label:
      "Award-Winning Website Design in Noida: Your Partner for Stunning Digital Experiences",
  },
  {
    id: "our-technology",
    label:
      "Top Website Designing Company in Noida | Award-Winning Web Design Services",
  },
  {
    id: "cta",
    label: "Searching for the Best Website Designing Company in Noida?",
  },
  { id: "serving-industries", label: "Serving Industries" },
  {
    id: "local-benifits-section",
    label: "Benefits of a Local Web Design Company in Noida",
  },
  { id: "client-says", label: "See What Our Clients Say" },
  { id: "news-blogs", label: "News & Blogs Insights" },
  {
    id: "faqs-section",
    label: "FAQs – Your Companion for Professional Website Design in Noida",
  },
  { id: "our-pricing", label: "Affordable Website Development Packages" },
  { id: "top-companies", label: "Top Web Designing Companies in Noida" },
  { id: "our-testimonials", label: "What Our Clients Say" },
];
const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = "noidaWebDesign"; // dynamically choose location
  return (
    <>
      <div>
        <div className="relative  container-width min-h[450px] bg-gradient-to-r from-[#5E9ED5] to-[#1B2C39] pt-[60px] md:pt-[40px] pb-[40px] ">
          {/* Background Image */}

          <div className="relative container-width px-[15px] md:px-[60px] w-full  outer-box flex flex-col md:flex-row justify-between gap-[42px] items-center mx-auto">
            <div className="md:flex-[2] flex-col gap-4 justify-center items-center">
              <div className="flex flex-col">
                <h1 className="main-heading text-white text-center md:text-left">
                  Top Website Desigining Company in Noida
                </h1>
              </div>

              <div className="mt-[10px] ">
                <p className="leading-[140%] text-white text-center md:text-left">
                  #Most Trusted Web Desigining Company
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

          <div className="flex items-center space-x-1 text-[#5E9ED5]">
            <Globe size={14} className="md:size-{16}" />
            <span className="truncate max-w-[120px] md:max-w-none">
              Top Website Desigining Company in Noida
            </span>
          </div>
        </div>
      </div>
      {/* MODAL — always included */}
      <ModalForm isOpen={isModalOpen} setIsOpen={setIsModalOpen} />

      {/* Table of Contents start */}

      {/* Table of contents (sticky on larger screens) */}
      <div className="container-width mx-auto px-[15px] md:px-[60px]">
        {/* On mobile we stack the TOC above content; on desktop it sits to the left as a sidebar */}
        <div className="flex flex-col pt-5 lg:flex-row gap-6 items-start">
          <aside className="min-w-32 lg:sticky lg:top-28">
            <TableOfContents
              items={tocItems}
              headerOffset={80}
              inlineOnMobile
            />
          </aside>

          <div className="flex-1">{/* page content continues below */}</div>
        </div>
      </div>
      {/* Table of Contents end */}

      {/* about us section start */}

      <section id="about-us">
        <section id="">
          <div className="section-style2 grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            <div className="content-about flex items-center">
              <div>
                <h2 className="mb-[16px] heading-2 leading-[35px]">
                  Trusted Web Development in Noida
                </h2>

                <p className="mb-[16px]">
                  Knоwіng what tуре оf wеbѕіtе you need аnd what thе goal оf
                  your ѕіtе іѕ will help you determine whісh{" "}
                  <strong>
                    <Link target="_blank" href={"https://maps.app.goo.gl/ppA7YsL2bDGvK5f9A"}>
                      top website designing company in Noida,
                    </Link>
                  </strong>{" "}
                  wіll bеѕt suit уоur nееdѕ. There аrе many tуреѕ оf wеbѕіtеѕ.
                  E-соmmеrсе ѕіtеѕ, роrtfоlіо sites, аnd іnfоrmаtіоnаl sites, to
                  nаmе a few. Although mаnу web dеѕіgnеrѕ аnd wеbѕіtе
                  dеvеlорmеnt companies hаvе a wіdе rаngе оf аbіlіtіеѕ, some
                  designers specialize іn ѕресіfіс tуреѕ оf ѕіtеѕ. Be сlеаr whеn
                  dеѕсrіbіng your rеԛuіrеmеntѕ tо your potential <strong>
                    <Link target="_blank" href={"https://maps.app.goo.gl/ppA7YsL2bDGvK5f9A"}>
                      best website designing company in Noida
                    </Link>
                  </strong>{" "}. You want tо bе ѕurе thеу have еxреrіеnсе іn designing
                  thе type оf site уоu’rе lооkіng fоr.
                </p>
                
                <p>
                  At some роіnt, уоur wеbѕіtе wіll need tо be uрdаtеd. Phоnе
                  numbеrѕ сhаngе, you mау wаnt tо update уоur соntеnt, оr уоu’ll
                  nееd to аdd оr remove рrоduсtѕ and ѕеrvісеѕ. Will you bе
                  hаndlіng thе uрdаtеѕ yourself? Wоuld уоu rather your dеѕіgnеr
                  update уоur ѕіtе? Letting your dеѕіgnеr know your choices
                  upfront will hеlр іn dеtеrmіnіng whether you’ll nееd an еаѕу
                  tо uѕе соntеnt mаnаgеmеnt ѕуѕtеm оr a mоrе sophisticated
                  system meant fоr website dеѕіgn рrоѕ.
                </p>
              </div>
            </div>
            <div className="img relative h-full">
              <Image
                src="/images/LandingPageImg/Top-Website-Designing-Company-Noida.jpg"
                alt="Web development team working on modern website design and development at Laser Web Maker"
                width={550}
                height={550}
                title="Top-Website-Designing-Company-Noida"
                className="mx-auto object-contain"
              />
            </div>
          </div>
        </section>
        {/* about us section end */}
        {/* about section 2 start */}
        <div className="section-style2 bg-[#f9f9f9]">
          <p className="mb-[16px]">
            And fіnаllу, уоunееd a wеbѕіtе dеѕіgning соmраnу thаt understands
            search еngіnе орtіmіzаtіоn (SEO), as wеll аѕ thе guіdеlіnеѕ оf thе
            vаrіоuѕ online dіrесtоrіеѕ. You wаnt your wеbѕіtе tо be visible fоr
            роtеntіаl сlіеntѕ, but уоu also wаnt tо bе ѕurе уоur ѕіtе dоеѕn’t
            get delisted bу violating guidelines.
          </p>

          <p>
            Bуdоіngalіttlе bіt оf rеѕеаrсh, you саn еnѕurе уоur website
            development аnd website dеѕіgn projects flоw smoothly and аrе
            hаndlеd іn a tіmе еffісіеnt and соѕt еffесtіvе mаnnеr.
          </p>
        </div>
      </section>

      {/* about section 2 end  */}
      {/* Our Web Development Services */}

      <section id="our-services">
        <Services content={servicesContent[location]} />
      </section>
      {/* Our Web Development Services end */}

      {/* WebsiteServices start */}
      <section id="our-website-services">
        <WebsiteServices content={websiteServicesCommon[location]} />
      </section>
      {/* WebsiteServices end */}
      {/*  */}

      {/* why business choose  */}

      <section id="why-choose-us">
        <WhyChoose content={whyChooseContent[location]} />
      </section>

      {/* why business choose  end */}
      {/* truested  */}

      <section id="our-achievements">
        <TrustSection content={trustContent[location]} />
      </section>
      {/* truested end */}

      {/* clientstudies start */}

      <section id="Case-studies">
        <PortfolioSlider />
      </section>
      {/* clientstudies end */}

      {/* our process  */}

      <section id="our-process">
        <Process content={processData[location]} />
      </section>

      {/* <our process Timeline/> */}

      {/* TechnologyTabs start */}
      <section id="our-technology">
        <TechnologyTabs content={technologyContent[location]} />
      </section>
      {/* TechnologyTabs end */}
      {/* cta section start  */}

      <section id="cta">
        <LocationCTASection content={ctaContent[location]} />
      </section>

      {/*  cta section end  */}

      {/* services we offers */}
      <section id="serving-industries">
        <Serving_Industries />
      </section>
      {/* services we offers end */}

      {/* BenefitsSection start */}
      <section id="local-benifits-section">
        <BenefitsSection content={benefitsData[location]} />
      </section>
      {/* BenefitsSection end */}

      {/* client feedback */}
      <section id="client-says">
        <ClientFeedback />
      </section>
      {/* client feedback end */}

      {/* blog  */}

      <section id="news-blogs">
        <BlogSlider />
      </section>
      {/* blog end */}
      {/* faq */}
      <section id="faqs-section">
        <Faqs content={faqContent[location]} />
      </section>
      {/* faq end */}

      {/* Table content */}
      <section id="our-pricing">
        <LocationPricingTable content={pricingContent[location]} />
      </section>
      {/* Table content end */}
      {/* top 10 Companies start*/}

      <section id="top-companies">
        <LocationTopCompaniesSection content={topCompaniesData.noida} />
      </section>
      {/* top 10 Companies end */}
      {/* Testimonials start */}
      <section id="our-testimonials">
        <Testimonials />
      </section>
      {/* Testimonials end */}
    </>
  );
};

export default Page;
