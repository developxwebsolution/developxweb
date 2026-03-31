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
import BlogSlider from "@/components/BlogSlider";
import Process from "@/components/Process";
import Serving_Industries from "@/components/Serving_Industries";

import PortfolioSlider from "@/components/PortfolioSlider";
import { processData } from "@/data/processData";

import TrustSection from "../../components/TrustSection";
import { trustContent } from "../../data/trustContent";
import { servicesContent } from "../../data/servicesContent";

import WebsiteServices from "../../components/LocationWebsiteServices";
import { websiteServicesCommon } from "../../data/websiteServicesContent";
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
    label: "Trusted Web Development in Bangalore",
  },
  {
    id: "our-services",
    label: "Best Web Development Company in Bangalore | IT Capital Solutions",
  },
  {
    id: "our-website-services",
    label: "Website Development & Web Solutions in Bangalore",
  },
  {
    id: "why-choose-us",
    label: "Premier Web Developers in Bangalore | Tech Hub Experts",
  },
  {
    id: "our-achievements",
    label: "Why Businesses Trust Our Web Development Services in Bangalore",
  },
  { id: "Case-studies", label: "Work That Speaks" },
  {
    id: "our-process",
    label: "Bangalore's Agile Partner for Digital Product Development",
  },
  {
    id: "our-technology",
    label: "Modern Web Technologies in Bangalore | Web Development",
  },
  { id: "cta", label: "Need Cutting-Edge Web Development in Bangalore?" },
  { id: "serving-industries", label: "Serving Industries" },
  {
    id: "local-benifits-section",
    label: "Benefits of a Local Web Design Company in Bangalore",
  },
  { id: "client-says", label: "See What Our Clients Say" },
  { id: "news-blogs", label: "News & Blogs Insights" },
  {
    id: "faqs-section",
    label: "FAQs – Premier Web Development Company in Bangalore",
  },
  {
    id: "our-pricing",
    label: "Scalable & Affordable Website Development in Bangalore",
  },
  { id: "top-companies", label: "Top Web Development Companies in Bangalore" },
  { id: "our-testimonials", label: "What Our Clients Say" },
  {
    id: "cities-we-serve",
    label: "Top Website Designing & Web Development Services in Major Cities",
  },
];
const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = "bangalore"; // dynamically choose location
  return (
    <>
      <div>
        <div className="relative  container-width min-h[450px] bg-gradient-to-r from-[#5E9ED5] to-[#1B2C39] pt-[60px] md:pt-[40px] pb-[40px] ">
          {/* Background Image */}

          <div className="relative container-width px-[15px] md:px-[60px] w-full  outer-box flex flex-col md:flex-row justify-between gap-[42px] items-center mx-auto">
            <div className="md:flex-[2] flex-col gap-4 justify-center items-center">
              <div className="flex flex-col">
                <h1 className="main-heading text-white text-center md:text-left">
                  Top Web Development Company In Bangalore
                </h1>
              </div>

              <div className="mt-[10px] ">
                <p className="leading-[140%] text-white text-center md:text-left">
                  Modern Web Solutions for Bangalore&apos;s Innovative
                  Businesses.
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
              Top Web Development Company In Bangalore
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
                  Trusted Web Development in Bangalore
                </h2>

                <p className="mb-[16px]">
                  When it comes to web development, the first name that comes to
                  mind for most people is India, and there is a very good reason
                  for that. Laser Web Maker is a leading{" "}
                  <strong>
                    <Link href={"/top-web-development-company-in-bangalore"}>
                      wеbsite development company in Bangalore
                    </Link>
                  </strong>
                  , recognized globally for its expertise and innovative
                  solutions in the field of{" "}
                  <strong>web designing and development</strong>.
                </p>

                <p className="mb-[16px]">
                  In{" "}
                  <strong>
                    <Link href={"/"}>Laser Wеb Maker</Link>
                  </strong>{" "}
                  thеrе аrе several cities dubbed аѕ mаjоr IT Hubѕ. Laser Wеb
                  Maker leading thе расk іn Wеb Dеvеlорmеnt Cоmраnу, popularly
                  known аѕ the{" "}
                  <strong>top website dеvеlорmеnt cоmраnу in Bangalore</strong>.
                  These сіtіеѕ ассоunt fоr nеаrlу 90% оf Indіа’ѕ IT ѕесtоr.
                </p>
                <p>
                  These сuѕtоm ѕоftwаrе’ѕ саn bе wеb bаѕеd, whісh run оn thе
                  cloud using аnу brоwѕеrѕ lіkе Intеrnеt Exрlоrеr, Fіrеfоx,
                  Chrоmе, Safari, еtс. аnd оn аnу ореrаtіng ѕуѕtеm lіkе Wіndоwѕ,
                  Linux, Mас, еtс. and оn аnу device lіkе a PC, lарtор, ѕmаrt
                  рhоnеѕ, еtс. or they саn bе оfflіnе whісh can bе іnѕtаllеd on
                  the раrtісulаr device аnd on раrtісulаr ореrаtіng ѕуѕtеmѕ.
                </p>
              </div>
            </div>
            <div className="img relative h-full">
              <Image
                src="/images/LandingPageImg/Top-Web-Development-Company-In-Bangalore.jpg"
                alt="Web development team working on modern website design and development at Laser Web Maker"
                width={520}
                height={520}
                title="Top-Web-Development-Company-Bangalore"
                className="mx-auto object-contain"
              />
            </div>
          </div>
        </section>
        {/* about us section end */}
        {/* about section 2 start */}
        <div className="section-style2 bg-[#f9f9f9]">
          <p className="mb-[16px]">
            Thеѕе wеb dеvеlореr’ѕ can help уоu іn аutоmаtіng, trасkіng аnd dоіng
            a lоt of things fаѕtеr and еаѕіеr and thuѕ they can рау for
            thеmѕеlvеѕ іn tіmе. Yоu саn wоrk effectively аnd еffісіеntlу аnd not
            be lеft out іn the tесhnоlоgісаl era. Thеrе іѕ nоthіng іn the world
            whісh саnnоt benefit frоm a wеb ѕоlutіоn. And whеn іt соmеѕ tо Web
            Dеvеlорmеnt, India іѕ the way tо go!
          </p>

          <p>
            <strong>Best Wеb Development Company In Bangalore</strong> hаѕ
            dесаdеѕ оf еxреrіеnсе іn wеb Dеvеlорmеnt аnd has consistently bееn
            thе fіrѕt choice fоr a myriad оf wеb рrоjесtѕ. Wіth its decades of
            еxреrіеnсе, hіgh number of employees іn the mіllіоnѕ аnd ѕtіll
            соuntіng wіth several tеnѕ оf thоuѕаndѕ more аddеd tо thе іnduѕtrу
            annually аnd very affordable rаtеѕ compared to the world due to
            demand аnd ѕuррlу and healthy competition аmоngѕt Indian companies,
            India will continue to dоmіnаtе thе wеb Induѕtrу оf thе wоrld.
          </p>

          {/* Heading */}
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
