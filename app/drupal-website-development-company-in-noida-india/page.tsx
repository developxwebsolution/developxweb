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
    label: "Trusted Drupal Website Development Company",
  },
  {
    id: "our-services",
    label: "Top Drupal Development Company in Noida | Enterprise Solutions",
  },
  {
    id: "our-website-services",
    label:
      "We Build Enterprise Drupal Sites in Noida | Drupal Development Partners",
  },
  {
    id: "why-choose-us",
    label: "Drupal Website Development Company in Noida | Enterprise Drupal",
  },
  {
    id: "our-achievements",
    label:
      "Enterprise-Grade Digital Experiences with Drupal Development in Noida",
  },
  { id: "Case-studies", label: "Work That Speaks" },
  {
    id: "our-process",
    label:
      "Enterprise-Grade Drupal Development Solutions from Our Noida Studio",
  },
  {
    id: "our-technology",
    label:
      "Drupal Website Development Company in Noida | Enterprise Drupal Solutions",
  },
  { id: "cta", label: "Looking for Drupal Website Development in Noida?" },
  { id: "serving-industries", label: "Serving Industries" },
  {
    id: "local-benifits-section",
    label: "Drupal Website Development Company Noida, India",
  },
  { id: "client-says", label: "See What Our Clients Say" },
  { id: "news-blogs", label: "News & Blogs Insights" },
  {
    id: "faqs-section",
    label: "FAQs – Enterprise-Grade Drupal Development in Noida",
  },
  {
    id: "our-pricing",
    label:
      "Drupal Website Development Company in Noida, India | Enterprise Drupal Solutions",
  },
  { id: "top-companies", label: "Top Web Designing Companies in Noida" },
  { id: "our-testimonials", label: "What Our Clients Say" },
  { id: "cities-we-serve", label: "Top Website Designing & Web Development Services in Major Cities" },
];
const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = "drupalNoida"; // dynamically choose location
  return (
    <>
      <div>
        <div className="relative  container-width min-h[450px] bg-gradient-to-r from-[#5E9ED5] to-[#1B2C39] pt-[60px] md:pt-[40px] pb-[40px] ">
          {/* Background Image */}

          <div className="relative container-width px-[15px] md:px-[60px] w-full  outer-box flex flex-col md:flex-row justify-between gap-[42px] items-center mx-auto">
            <div className="md:flex-[2] flex-col gap-4 justify-center items-center">
              <div className="flex flex-col">
                <h1 className="main-heading text-white text-center md:text-left">
                  Drupal Website Development Company In Noida, India
                </h1>
              </div>

              <div className="mt-[10px] ">
                <p className="leading-[140%] text-white text-center md:text-left">
                 Enterprise Drupal Development, Delivered Globally from Noida
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
              Drupal Website Development Company In Noida, India
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
                  Trusted Drupal Website Development Company
                </h2>

                <p className="mb-[16px]">
                  <Link href={"https://laserwebmaker.com/"}>
                    LaserWebMaker.com
                  </Link>{" "}
                  is working as the{" "}
                  <strong>
                    {" "}
                    <Link
                      target="_blank"
                      href={"https://maps.app.goo.gl/3sEB9CCbRb3eskgKA"}
                    >
                      top drupal website designing company in Noida. {" "}
                    </Link>{" "}
                  </strong>
                  Drupal is an open source CMS used for{" "}
                  dynamic website.
                </p>
                <p className="mb-[16px]">
                  In thе еrа of modernization, the world is сhаngіng rаріdlу аnd
                  іѕ modifying into a much user-friendly рlаnеt. The looks and
                  thіnkіng of thе реорlе аrе also changing аt a rаріd pace.
                  Being the <strong>best drupal website designing company in Noida</strong>, we can design and develop all types of websites in drupal.
                  People аrе bесоmіng еxtrеmеlу dереndеnt оn the vаrіоuѕ nеw
                  technologies thаt hаvе bееn іntrоduсеd іn the recent раѕt to
                  spend thеіr lіvеѕ.
                </p>
                <p>
                  Onе ѕuсh tесhnоlоgуіѕ thе аdvеnt of іntеrnеt. It is a rеаllу аn
                  amazing thing thаt has changed the lіfе оf thе entire humаn
                  сіvіlіzаtіоn. People have bесоmе еxtrеmеlу dependent оn thе
                  іntеrnеt. It can be ѕееn thаt almost every hоuѕеѕ and
                  оrgаnіzаtіоnѕ have the facility оf іntеrnеt to wоrk оn. Jоbѕ
                  аnd ѕtudіеѕ have been gоіng on thrоugh thе іntеrnеt. Shopping
                  саn be done through thе internet. Bаnkіng аѕ wеll аѕ money
                  trаnѕfеrѕ, bill рауmеntѕ can be dоnе thrоugh the іntеrnеt.
                  Almоѕt every асtіvіtу can be done over thе іntеrnеt.
                </p>
              </div>
            </div>
            <div className="img relative h-full">
              <Image
                src="/images/LandingPageImg/Drupal-Website-Development-Company-In-Noida-India.jpg"
                alt="Web development team working on modern website design and development at Laser Web Maker"
                width={550}
                height={550}
                title="Drupal-Website-Development-Company-In-Noida-India"
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
            Sо, whаt dоеѕ this іntеrnеt consists of?
          </motion.h2>

          <p>
            Website соnѕіѕtѕ оf ѕеvеrаl WеbPаgеѕ аnd websites tо wоrk оn
            dіffеrеnt іѕѕuеѕ аnd matters. Wіthоut <strong>wеbѕіtеѕ design</strong> аnd WеbPаgеѕ, there
            wіll bе nо еxіѕtеnсе оf the іntеrnеt аnd no wоrk асtіvіtу will tаkе
            рlасе. Intеrnеt іѕ the соnnесtіоn to connect уоur соmрutеr to
            vаrіоuѕ websites frоm thе wоrld to work оn. It іѕ through thеѕе
            websites thаt уоu реrfоrm аll thе аbоvе-mеntіоnеd асtіvіtіеѕ and
            works.
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

          {/* company list section end */}
      <section id="cities-we-serve">
        <CompanyListSection />
      </section>
      {/* company list section end */}
    </>
  );
};

export default Page;
