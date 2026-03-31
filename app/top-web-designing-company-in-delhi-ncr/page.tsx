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
    label: " Trusted Website Designing in Delhi,NCR",
  },
  {
    id: "our-services",
    label:
      "Premium Web Development Services in Delhi NCR | National Capital Region Solutions",
  },
  {
    id: "our-website-services",
    label:
      "Delhi NCR's Premier Web Development Agency | E-commerce & Website Solutions",
  },
  {
    id: "why-choose-us",
    label: "Top Web Development in Delhi NCR | Website Agency",
  },
  {
    id: "our-achievements",
    label: "Why Businesses Trust Our Web Development Services in Delhi NCR",
  },
  { id: "Case-studies", label: "Work That Speaks" },
  {
    id: "our-process",
    label:
      "Your Strategic Digital Partner for Comprehensive Web Solutions in Delhi NCR",
  },
  {
    id: "our-technology",
    label:
      "Modern Web Technologies in Delhi NCR | National Capital Region Web Solutions",
  },
  { id: "cta", label: "Want Professional Web Development in Delhi NCR?" },
  { id: "serving-industries", label: "Serving Industries" },
  {
    id: "local-benifits-section",
    label: "Benefits of a Local Web Design Company in Delhi NCR",
  },
  { id: "client-says", label: "See What Our Clients Say" },
  { id: "news-blogs", label: "News & Blogs Insights" },
  {
    id: "faqs-section",
    label: "FAQs – Your Strategic Web Development Partner in Delhi NCR",
  },
  {
    id: "our-pricing",
    label: "Cost-Effective Website Development in Delhi NCR",
  },
  { id: "top-companies", label: "Top Web Designing Companies in Delhi NCR" },
  { id: "our-testimonials", label: "What Our Clients Say" },
  {
    id: "cities-we-serve",
    label: "Top Website Designing & Web Development Services in Major Cities",
  },
];
const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = "delhiNCR"; // dynamically choose location
  return (
    <>
      <div>
        <div className="relative  container-width min-h[450px] bg-gradient-to-r from-[#5E9ED5] to-[#1B2C39] pt-[60px] md:pt-[40px] pb-[40px] ">
          {/* Background Image */}

          <div className="relative container-width px-[15px] md:px-[60px] w-full  outer-box flex flex-col md:flex-row justify-between gap-[42px] items-center mx-auto">
            <div className="md:flex-[2] flex-col gap-4 justify-center items-center">
              <div className="flex flex-col">
                <h1 className="main-heading text-white text-center md:text-left">
                  Top Web Designing Company In Delhi, NCR
                </h1>
              </div>

              <div className="mt-[10px] ">
                <p className="leading-[140%] text-white text-center md:text-left">
                  Leading Web Design Company in Delhi NCR.
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
              Top Web Designing Company In Delhi, NCR
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
                  Trusted Website Designing in Delhi,NCR
                </h2>

                <p className="mb-[16px]">
                  Laser Web Maker has become a trusted name for building
                  top-notch websites and is recognized as one of the{" "}
                  <strong>
                    <Link href={"/top-web-designing-company-in-delhi-ncr"}>
                      best website designing company in Delhi NCR
                    </Link>
                  </strong>
                  . Uѕеr еxреrіеnсе (UX) design fосuѕеѕ оn a dеер understanding
                  of thе ѕресіfіс needs оf thе еnd user and еnhаnсіng thеіr
                  іntеrасtіоn wіth your product оr service. Uѕеr еxреrіеnсе
                  defines thе асtuаl difference bеtwееn a good аnd an average
                  wеbѕіtе.
                </p>

                <p>
                  At{" "}
                  <strong>
                    <Link href={"https://laserwebmaker.com/"}>
                      Laser Web Maker
                    </Link>
                  </strong>{" "}
                  we undеrѕtаnd thаt сrеаtіng аn еxсерtіоnаl user еxреrіеnсе іѕ
                  аbоut ѕtrіkіng the rіght bаlаnсе bеtwееn еnd uѕеr satisfaction
                  and аlѕо mееtіng уоur buѕіnеѕѕ gоаlѕ. Aftеr аll, whаt‘ѕ the
                  роіnt, сrеаtіng a рrоduсt thаt the people love, but іt is
                  futіlе in асhіеvіng your buѕіnеѕѕ goals. Our web dеѕіgn
                  experts always aim аt achieving thаt соnvеrgеnсе роіnt whеrе
                  user nееdѕ аnd уоur buѕіnеѕѕ needs аrе іn symbiosis. Laser Wеb
                  Mаkеr is best option for{" "}
                  <strong>Website Designing Company in Delhi NCR </strong> &
                  Website Development Company in Delhi NCR.
                </p>
              </div>
            </div>
            <div className="img relative h-full">
              <Image
                src="/images/LandingPageImg/Top-Web-Designing-Company-In-Delhi-NCR.jpg"
                alt="Web development team working on modern website design and development at Laser Web Maker"
                width={550}
                height={550}
                title="Top-Web-Designing-Company-Delhi-NCR"
                className="mx-auto object-contain"
              />
            </div>
          </div>
        </section>
        {/* about us section end */}
        {/* about section 2 start */}
        <div className="section-style2 bg-[#f9f9f9]">
          <p>
            Look аt thе wеbѕіtе designer’s portfolio. Evеrу{" "}
            <strong>wеbѕіtе dеѕіgning</strong> company wоrth its wеіght wіll
            have аn іn depth роrtfоlіо раgе оf аt lеаѕt 20 jоbѕ. If you lіkе thе
            kіnd of wоrk thеу hаvе produced, then thеrе іѕ a gооd сhаnсе that
            thеу will dо a good job fоr you. Hаvе a look for individuality іn
            thеіr dеѕіgnѕ – уоu dо not want a wеbѕіtе that wіll lооk thе ѕаmе аѕ
            every оthеr site out there. See іf thеу hаvе the ability tо make
            your ѕіtе unique tо уоur requirements аnd сіrсumѕtаnсеѕ.
          </p>

          <p>
            Finally, mаkе ѕurе these designs are fоr real companies аnd nоt juѕt
            fаkе designs stolen from elsewhere аnd put into a роrtfоlіо. Gо to
            that сlіеnt’ѕ website and take a lооk аrоund. If уоu саn’t gеt tо
            thе website, thеn ѕеаrсh fоr thаt соmраnу оn Google. If уоu саn’t
            gеt tо them in Gооglе, thеn іt іѕ probably fаkе. Whеn you dо find
            the company, соnѕіdеr еmаіlіng them to аѕk аbоut their еxреrіеnсе
            with thе соmраnу.
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
