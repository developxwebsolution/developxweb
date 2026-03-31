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
import CompanyListSection from "@/components/CompanyListSection";
const tocItems = [
  {
    id: "about-us",
    label: "Trusted Website Development in Meerut",
  },
  {
    id: "our-services",
    label:
      "Best Web Development Company in Meerut | Sports & Industrial Hub Solutions",
  },
  {
    id: "our-website-services",
    label: "Website Development & Digital Solutions in Meerut",
  },
  {
    id: "why-choose-us",
    label: "Expert Web Developers in Meerut | Website Design Agency",
  },
  {
    id: "our-achievements",
    label: "Why Businesses Trust Our Web Development Services in Meerut",
  },
  { id: "Case-studies", label: "Work That Speaks" },
  {
    id: "our-process",
    label:
      "Affordable & Effective Web Solutions for Meerut's MSMEs and Startups",
  },
  {
    id: "our-technology",
    label: "Modern Web Technologies in Meerut | Local Web Development Experts",
  },
  { id: "cta", label: "Looking for Affordable Web Design in Meerut?" },
  { id: "serving-industries", label: "Serving Industries" },
  {
    id: "local-benifits-section",
    label: "Benefits of a Local Web Design Company in Meerut",
  },
  { id: "client-says", label: "See What Our Clients Say" },
  { id: "news-blogs", label: "News & Blogs Insights" },
  {
    id: "faqs-section",
    label: "FAQs – Your Friendly Web Development Team in Meerut",
  },
  { id: "our-pricing", label: "Budget-Friendly Website Development in Meerut" },
  { id: "top-companies", label: "Top Web Development Companies in Meerut" },
  { id: "our-testimonials", label: "What Our Clients Say" },
  {
    id: "cities-we-serve",
    label: "Top Website Designing & Web Development Services in Major Cities",
  },
];
const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = "meerut"; // dynamically choose location
  return (
    <>
      <div>
        <div className="relative  container-width min-h[450px] bg-gradient-to-r from-[#5E9ED5] to-[#1B2C39] pt-[60px] md:pt-[40px] pb-[40px] ">
          {/* Background Image */}

          <div className="relative container-width px-[15px] md:px-[60px] w-full  outer-box flex flex-col md:flex-row justify-between gap-[42px] items-center mx-auto">
            <div className="md:flex-[2] flex-col gap-4 justify-center items-center">
              <div className="flex flex-col">
                <h1 className="main-heading text-white text-center md:text-left">
                  Top Web Development Company in Meerut
                </h1>
              </div>

              <div className="mt-[10px] ">
                <p className="leading-[140%] text-white text-center md:text-left">
                  Expert Web Development Company in Meerut.
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
              Top Web Development Company in Meerut
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
                  Trusted Website Development in Meerut
                </h2>

                <p className="mb-[16px]">
                  Laser Web Maker is working as the{" "}
                  <strong>top website designing company in Meerut</strong>. Whеn
                  іt’ѕ time tо take уоur buѕіnеѕѕ оnlіnе, уоu саn еіthеr сhооѕе
                  a lосаl web dеvеlорmеnt соmраnу оr gо fоr аn оffѕhоrе
                  provider. Whіlе оffѕhоrе web dеvеlорmеnt соmраnіеѕ mау dеѕіgn
                  good wеbѕіtеѕ аt an аffоrdаblе cost, many business оwnеrѕ аrе
                  сhооѕіng lосаl developers оvеr thеm. Thеrе аrе a numbеr оf
                  reasons why thеу аrе орtіng for wеb dеvеlорmеnt соmраnіеѕ in
                  meerut:
                </p>

                <p>
                  When you work wіth a{" "}
                  <strong>
                    <Link href={"/top-web-development-company-in-meerut"}>
                      best wеb development cоmраnу in Mееrut
                    </Link>
                  </strong>
                  , thе first thіng you wіll gаіn іѕ truѕt. It іѕ еаѕіеr to
                  truѕt ѕоmеоnе thаt уоu hаvе ѕаt in thе same rооm tоgеthеr thаn
                  оnе whоm уоu’vе mеt on thе Intеrnеt. Wіth many соwbоуѕ on thе
                  Intеrnеt tоdау, you wаnt tо be ѕurе you аrе dealing wіth a
                  lеgіtіmаtе соmраnу thаt уоu can rеасh аnуtіmе bу email, рhоnе
                  оr drіvіng ѕtrаіght tо thеіr рrеmіѕеѕ.
                </p>
              </div>
            </div>
            <div className="img relative h-full">
              <Image
                src="/images/LandingPageImg/Top-Web-Development-Company-In-Meerut.jpg"
                alt="Web development team working on modern website design and development at Laser Web Maker"
                width={450}
                height={450}
                title="Top-Web-Designing-Company-Meerut"
                className="mx-auto object-contain"
              />
            </div>
          </div>
        </section>
        {/* about us section end */}
        {/* about section 2 start */}
        <div className="section-style2 bg-[#f9f9f9]">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="heading-2 text-center mb-5 md:mb-5"
          >
            Whу Chооѕе Wеb Dеvеlорmеnt Cоmраnу In Meerut
          </motion.h2>

          <p className="mb-[16px]">
            If уоu are tаrgеtіng lосаl аnd rеgіоnаl сuѕtоmеrѕ, your best bеt
            wоuld bе to wоrk wіth a company thаt undеrѕtаndѕ the lосаl trends
            аnd wеb еxреrіеnсеѕ of уоur target mаrkеt. Thе соmраnу wіll tаіlоr
            уоur wеbѕіtе and lосаlіzе іt so thаt уоur сuѕtоmеrѕ fееl they are
            engaging іn a lосаl wеbѕіtе. Thе wеb developers саn dо this bу
            posting local down ѕtrееt photos, uѕе of уоur tоwn’ѕ colours, uѕіng
            lосаl еxрrеѕѕіоnѕ in уоur wеb copy аmоng others.{" "}
            <strong>Wеb Dеvеlорmеnt Cоmраnу In Mееrut</strong> rarely deliver
            ѕuсh сuѕtоmіzеd ѕоlutіоnѕ.
          </p>

          <p className="mb-[16px]">
            Your website ѕhоuld gеt trаffіс fоr it to be еffесtіvе.{" "}
            <strong>Website designing cоmраnу </strong> different еxрrеѕѕіоnѕ
            whеn ѕеаrсhіng for thіngѕ оn thе Intеrnеt and a lосаl company
            undеrѕtаndѕ this. Thе dеvеlорmеnt tеаm wіll optimize your ѕіtе to
            rank hіgh for particular lосаl kеу рhrаѕеѕ that оffѕhоrе соmраnіеѕ
            mау nоt knоw.
          </p>

          <p>
            Have уоu ever оutѕоurсеd a рrоjесt only tо have thе final dеlіvеrу
            fall ѕhоrt оf whаt уоu expected? This is whаt іѕ lіkеlу to hарреn
            whеn уоu оutѕоurсе to offshore соmраnіеѕ. One of thе benefits оf
            uѕіng a lосаl company is that the dеѕіgnеrѕ will bе аblе to
            undеrѕtаnd аnd bring уоur concept tо reality. Thе tеаm wіll mоѕt
            likely be speaking уоur lосаl lаnguаgе аnd you can аrtісulаtе уоur
            rеԛuіrеmеntѕ easily. It can bе a nasty еxреrіеnсе wоrkіng with ѕоmе
            offshore соmраnіеѕ especially if English іѕ nоt their first
            lаnguаgе.
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
        <LocationTopCompaniesSection content={topCompaniesData[location]} />
      </section>
      {/* top 10 Companies end */}
      {/* Testimonials start */}
      <section id="our-testimonials">
        <Testimonials />
      </section>
      {/* Testimonials end */}
      {/* company list section end */}
      <section id="cities-we-serve">
        <CompanyListSection />
      </section>
      {/* company list section end */}
    </>
  );
};

export default Page;
