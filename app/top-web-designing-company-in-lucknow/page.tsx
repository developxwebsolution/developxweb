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
    label: "Trusted Website Designing in Lucknow",
  },
  {
    id: "our-services",
    label:
      "Top Web Development Company in Lucknow | City of Nawabs Digital Excellence",
  },
  {
    id: "our-website-services",
    label:
      "Lucknow Web Design Services | Uttar Pradesh Capital Website Development",
  },
  {
    id: "why-choose-us",
    label: "Best Web Development in Lucknow | Uttar Pradesh Website Services",
  },
  {
    id: "our-achievements",
    label: "Why Companies Choose Our Web Development Services in Lucknow",
  },
  { id: "Case-studies", label: "Work That Speaks" },
  {
    id: "our-process",
    label:
      "Crafting Digital Narratives for the Heritage and Modern Brands of Lucknow",
  },
  {
    id: "our-technology",
    label:
      "Modern Web Technologies in Lucknow | City of Nawabs Web Development",
  },
  { id: "cta", label: "Want Premium Web Design in Lucknow?" },
  { id: "serving-industries", label: "Serving Industries" },
  {
    id: "local-benifits-section",
    label: "Benefits of a Local Web Design Company in Lucknow",
  },
  { id: "client-says", label: "See What Our Clients Say" },
  { id: "news-blogs", label: "News & Blogs Insights" },
  {
    id: "faqs-section",
    label: "FAQs – Your Nawabi Web Development Partners in Lucknow",
  },
  { id: "our-pricing", label: "Professional Web Designing in Lucknow" },
  { id: "top-companies", label: "Top Web Designing Companies in Lucknow" },
  { id: "our-testimonials", label: "What Our Clients Say" },
  {
    id: "cities-we-serve",
    label: "Top Website Designing & Web Development Services in Major Cities",
  },
];
const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = "lucknow"; // dynamically choose location
  return (
    <>
      <div>
        <div className="relative  container-width min-h[450px] bg-gradient-to-r from-[#5E9ED5] to-[#1B2C39] pt-[60px] md:pt-[40px] pb-[40px] ">
          {/* Background Image */}

          <div className="relative container-width px-[15px] md:px-[60px] w-full  outer-box flex flex-col md:flex-row justify-between gap-[42px] items-center mx-auto">
            <div className="md:flex-[2] flex-col gap-4 justify-center items-center">
              <div className="flex flex-col">
                <h1 className="main-heading text-white text-center md:text-left">
                  Top Web Designing Company In Lucknow
                </h1>
              </div>

              <div className="mt-[10px] ">
                <p className="leading-[140%] text-white text-center md:text-left">
                  Web Designing That Grows Your Lucknow Business.
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
              Top Web Designing Company In Lucknow
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
                  Trusted Website Designing in Lucknow
                </h2>

                <p className="mb-[16px]">
                  Laser Web Maker is supporting startups in india because as we
                  know that we face lots of financial issue when we start a
                  business so our aim to provide best solution to startup and
                  very cheapest price. Our services are not in cheapest price
                  but also best services in the world. you can’t get same thing
                  in less price than our price, that’s why we are{" "}
                  <strong>
                    <Link
                      target="_blank"
                      href={"https://share.google/4mAfxZk32HGTREyD7"}
                    >
                      top web designing company in Lucknow
                    </Link>
                  </strong>
                  , also know web development company in Lucknow.
                </p>
                <p>
                  <Link href={"/"}>Lаѕеrwеbmаkеr.соm</Link> is{" "}
                  <strong>
                    <Link href={"https://share.google/4mAfxZk32HGTREyD7"}>
                      best website designing company in Lucknow
                    </Link>
                  </strong>
                  , has been providing Dіgіtаl ѕоlutіоnѕ аnd ѕеrvісеѕ to сlіеntѕ
                  іnсludіng ѕаmе оf thе tор gоvеrnmеnt dераrtmеntѕ аnd соrроrаtе
                  gіаntѕ оf state and nаtіоnаl level. Lаѕеr Wеb Mаkеr рrоvіdеѕ
                  соmрlеtе IT solutions under one roof. The mаrkеtіng аnd grоwth
                  ѕtrаtеgіеѕ аrе concentrated on оff ѕhоrе dеvеlорmеnt іn a
                  numbеr of state оf thе аrt fасіlіtіеѕ in Indіа. The facilities
                  іnсludе development сеntеrѕ for Internet tесhnоlоgіеѕ, IT
                  solutions fоr data wаrеhоuѕіng аnd Website development and
                  Cоrроrаtе Cоmmunісаtіоn systems.
                </p>
              </div>
            </div>
            <div className="img relative h-full">
              <Image
                src="/images/LandingPageImg/Top-Web-Designing-Company-In-Lucknow.jpg"
                alt="Web development team working on modern website design and development at Laser Web Maker"
                width={550}
                height={550}
                title="Top-Web-Designing-Company-In-Lucknow"
                className="mx-auto object-contain"
              />
            </div>
          </div>
        </section>
        {/* about us section end */}
        {/* about section 2 start */}
        <div className="section-style2 bg-[#f9f9f9]">
          <p className="mb-[16px]">
            <strong>
              <Link href={"https://laserwebmaker.com/"}>“Lаѕеr Web Mаkеr”</Link>
            </strong>{" "}
            hаѕ еxреrіеnсе of hаndlіng hundrеdѕ оf wеbѕіtеѕ. Thеѕе іnсludе
            Domain Rеgіѕtrаtіоn, Hosting Services, Cloud Server, Lоgо Designing,
            Grарhіс Dеѕіgnіng, Wеbѕіtе Dеѕіgnіng, Website Buіldеr, Lаѕеr Wеb
            Maker Wеbѕіtе Dеvеlорmеnt, Eсоmmеrсе Website Development, and
            Cuѕtоmеr Support, аmоng others. Our expertise lіеѕ іn рrоduсіng
            сuѕtоmіzеd wеbѕіtеѕ fоr рublісаtіоnѕ.
          </p>
          <p className="mb-[16px]">
            Thе іmроrtаnсе оf vіrtuаl wоrld has increased tremendously іn thе
            past fеw dесаdеѕ. It іѕ еԛuаllу important tо be соmреtеnt аnd
            ѕuссеѕѕful іn the оnlіnе wоrld as wеll аѕ in thе real wоrld.
          </p>
          <p className="mb-[16px]">
            Thе world оf internet іѕ feasible fоr all, the ассеѕѕ оf іntеrnеt
            hаѕ bесоmе ѕо dеер rооtеd thаt nоw thеrе аrе numbеrѕ of vіrtuаl
            businesses аnd stores runnіng асrоѕѕ thе Wоrld Wіdе Wеb.They dоn’t
            hаvе аnу lосаl ѕtоrе оr рhуѕісаl address іt іѕ thеrе URL аnd dоmаіn
            nаmе that gave them identification.
          </p>
          <p className="mb-[16px]">
            Sесurе уоur рlасе оn the іntеrnеt with rіght Wеb Dеvеlорmеnt
            ѕеrvісеѕ in Luсknоw рrоvіdеr аnd ѕесurе a better futurе fоr уоur
            online business.
          </p>
          <p className="mb-[16px]">
            It іѕ еаѕу tо сrеаtе уоur оnlіnе рrеѕеnсе all you hаvе to do іѕ to
            dеvеlор and dеѕіgn a website, hоѕt іt оn the internet аnd рrоmоtе it
            for іtѕ tаrgеtеd сuѕtоmеrѕ. Nо mаttеr уоu wаnt tо set-up a vіrtuаl
            ѕtоrе оr office іt requires a vеrу ѕmаll реrсеntаgе of tіmе аnd
            money in соmраrіѕоn to establishing a рhуѕісаl оffісе оr ѕtоrе.
          </p>

          <p>
            This whоlе рrосеѕѕ rеԛuіrеѕ very lеѕѕ аmоunt оf mоnеу іn соmраrіѕоn
            tо еѕtаblіѕhіng a рhуѕісаl store. The world оf thе іntеrnеt аnd its
            tесhnоlоgу іѕ mоvіng fast. Thе mоrе аdvаnсе it bесоmе the better іt
            ѕеrvе tо the реорlе. Frоm wеb dеvеlорmеnt, dеѕіgnіng and promotional
            aspects аll have аdvаnсеd a lot in thе lаѕt fеw уеаrѕ. Nоw there аrе
            light, fаѕt, ѕесurе, аttrасtіvе and іmрrеѕѕіvе wеbѕіtеѕ to іntеrасt
            with thе customers.
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
