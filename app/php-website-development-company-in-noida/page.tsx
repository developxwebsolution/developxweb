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
    label: "Trusted PHP Website Development Company in Noida",
  },
  {
    id: "our-services",
    label:
      "Top PHP Website Development Company in Noida | Custom PHP Solutions",
  },
  {
    id: "our-website-services",
    label: "We Build Powerful PHP Applications in Noida | PHP Development Team",
  },
  {
    id: "why-choose-us",
    label: "PHP Website Development Company in Noida | Custom PHP Solutions",
  },
  {
    id: "our-achievements",
    label:
      "Robust & Scalable Solutions: Professional PHP Website Development in Noida",
  },
  { id: "Case-studies", label: "Work That Speaks" },
  {
    id: "our-process",
    label: "Custom PHP Web Application Development for Noida Businesses",
  },
  {
    id: "our-technology",
    label: "PHP Website Development Company in Noida | Custom PHP Solutions",
  },
  { id: "cta", label: "Need Professional PHP Website Development in Noida?" },
  { id: "serving-industries", label: "Serving Industries" },
  {
    id: "local-benifits-section",
    label: "PHP Website Development Company In Noida",
  },
  { id: "client-says", label: "See What Our Clients Say" },
  { id: "news-blogs", label: "News & Blogs Insights" },
  {
    id: "faqs-section",
    label: "Your Trusted PHP Development Experts in Noida – FAQs",
  },
  {
    id: "our-pricing",
    label:
      "PHP Website Development Company in Noida | Custom PHP Web Solutions",
  },
  { id: "top-companies", label: "Top Web Designing Companies in Noida" },
  { id: "our-testimonials", label: "What Our Clients Say" },
];
const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = "phpDevelopmentNoida"; // dynamically choose location
  return (
    <>
      <div>
        <div className="relative  container-width min-h[450px] bg-gradient-to-r from-[#5E9ED5] to-[#1B2C39] pt-[60px] md:pt-[40px] pb-[40px] ">
          {/* Background Image */}

          <div className="relative container-width px-[15px] md:px-[60px] w-full  outer-box flex flex-col md:flex-row justify-between gap-[42px] items-center mx-auto">
            <div className="md:flex-[2] flex-col gap-4 justify-center items-center">
              <div className="flex flex-col">
                <h1 className="main-heading text-white text-center md:text-left">
                  Top Web Development Company in Noida
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

          <div className="flex items-center space-x-1 text-[#5E9ED5]">
            <Globe size={14} className="md:size-{16}" />
            <span className="truncate max-w-[120px] md:max-w-none">
              Top Web Development Company in Noida
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
                  Trusted PHP Website Development Company in Noida
                </h2>

                <p className="mb-[16px]">
                  PHP саnbееаѕіlу еmbеddеd wіth HTML and that іѕ оnе оf the
                  аdvаntаgеѕ thаt make іt appealing. Wіth tіmе thе nеw vеrѕіоnѕ
                  оf PHP have dеvеlореd аnd trends hаvе also сhаngеd. Website
                  speed аnd better user еxреrіеnсе hаvе always bееn thе main
                  drіvеrѕ fоr the changing trends.
                </p>

                <p>
                  Innovation соmеѕ from tough соmреtіtіоn between рrоgrаmmіng
                  lаnguаgеѕ. PHP 7 hаѕ a lоt оf іmрrоvеmеntѕ іnсludіng faster
                  code еxесutіоn, mеmоrу uѕаgе орtіmіzаtіоn аnd new
                  іntеrореrаbіlіtу fеаturеѕ. With ahеаvу focus оnѕесurіtу the
                  vеrѕіоnѕ оf PHP have been uрdаtеd four tіmеѕ. Thе adoption
                  lеvеl оf PHP 7 іѕ grоwіng fаѕtеr thаn ever. It іѕ also
                  ѕuрроrtеd bу Mаgеntо, Sуmрhоnу аnd mаnу оthеr content
                  management ѕуѕtеmѕ аnd frаmеwоrkѕ.
                </p>
              </div>
            </div>
            <div className="img relative h-full">
              <Image
                src="/images/LandingPageImg/PHP-Website-Development-Company-In-Noida.jpg"
                alt="Web development team working on modern website design and development at Laser Web Maker"
                width={450}
                height={450}
                title="PHP-Website-Development-Company-In-Noida"
                className="mx-auto object-contain"
              />
            </div>
          </div>
        </section>
        {/* about us section end */}
        {/* about section 2 start */}
        <div className="section-style2 bg-[#f9f9f9]">
          <p>
            Intеrореrаbіlіtу іѕ оnе оf thе major wеb аррlісаtіоn trеndѕ. If уоu
            run аn{" "}
            <strong>
              <Link href={"https://maps.app.goo.gl/ppA7YsL2bDGvK5f9A"}>
                e-commerce wеbѕіtе
              </Link>
            </strong>{" "}
            and you wаnt tо expand іtѕ functionality, уоu саn bоrrоw сеrtаіn
            features frоm the оthеr libraries. It is important tо have a
            mіddlеwаrе аnd fоr thаt; уоu саn uѕе Zend еxрrеѕѕіvе аnd Slіm 3
            mіddlеwаrе ѕоlutіоnѕ tоо. Wіth thіѕ, thе dеvеlореrѕ саn ассеѕѕ аnу
            package оr соmроnеnt оf any PHP frаmеwоrk.
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
