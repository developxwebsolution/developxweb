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
    label: "Trusted Website Development in Dubai",
  },
  {
    id: "our-services",
    label:
      "Premium Web Development Company in Dubai | Global Business Hub Solutions",
  },
  {
    id: "our-website-services",
    label: "Website Development & Digital Solutions in Dubai, UAE",
  },
  {
    id: "why-choose-us",
    label: "Award-Winning Web Development in Dubai | UAE Digital Experts",
  },
  {
    id: "our-achievements",
    label: "Why Businesses Trust Our Web Development Services in Dubai UAE",
  },
  { id: "Case-studies", label: "Work That Speaks" },
  {
    id: "our-process",
    label:
      "Building Award-Winning Websites for Dubai's Competitive Digital Landscape",
  },
  {
    id: "our-technology",
    label: "Modern Web Technologies in Dubai | Global Standard Web Development",
  },
  { id: "cta", label: "Need World-Class Web Development in Dubai?" },
  { id: "serving-industries", label: "Serving Industries" },
  {
    id: "local-benifits-section",
    label: "Benefits of a Local Web Design Company in Dubai, UAE",
  },
  { id: "client-says", label: "See What Our Clients Say" },
  { id: "news-blogs", label: "News & Blogs Insights" },
  {
    id: "faqs-section",
    label: "FAQs – Your Award-Winning Web Development Agency in Dubai",
  },
  { id: "our-pricing", label: "Competitive Website Development in Dubai" },
  { id: "top-companies", label: "Top Web Designing Companies in Dubai" },
  { id: "our-testimonials", label: "What Our Clients Say" },
  {
    id: "cities-we-serve",
    label: "Top Website Designing & Web Development Services in Major Cities",
  },
];
const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = "dubaiUAE"; // dynamically choose location
  return (
    <>
      <div>
        <div className="relative  container-width min-h[450px] bg-gradient-to-r from-[#5E9ED5] to-[#1B2C39] pt-[60px] md:pt-[40px] pb-[40px] ">
          {/* Background Image */}

          <div className="relative container-width px-[15px] md:px-[60px] w-full  outer-box flex flex-col md:flex-row justify-between gap-[42px] items-center mx-auto">
            <div className="md:flex-[2] flex-col gap-4 justify-center items-center">
              <div className="flex flex-col">
                <h1 className="main-heading text-white text-center md:text-left">
                  Top Web Development Company in Dubai, UAE
                </h1>
              </div>

              <div className="mt-[10px] ">
                <p className="leading-[140%] text-white text-center md:text-left">
                  Expert Website Development Company in Dubai.
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
              Top Web Development Company in Dubai, UAE
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
                  Trusted Website Development in Dubai
                </h2>

                <p className="mb-[16px]">
                  Laser Web Maker is working as the{" "}
                  <strong>top website designing company in Dubai, UAE</strong>{" "}
                  іѕ a brоаd fіеld tо deal wіth. Thе more you mаkе уоur wеbѕіtе
                  аttrасtіvе and striking wіth gооd web, соntеnt and back links,
                  thе mоrе traffic will be engrossed іn іt. A gооd wеbѕіtе
                  should have аn арреаlіng and smart dеѕіgn wіth rich content іn
                  іt. Thе соntеnt іn уоur website ѕhоuld be wеll mаnаgеd іn
                  оrdеr tо vіеwеr’ѕ аttеntіоn. Nо wonder dеvеlоріng a wеbѕіtе іѕ
                  tіmе consuming but a сrеаtіvе аnd іntеrеѕtіng ѕkіll. Tо mаkе
                  an excellent wеbѕіtе wіth attractive features іn it, уоu muѕt
                  hire a{" "}
                  <strong>
                    <Link href={"/top-web-development-company-in-dubai-uae"}>
                      best website development cоmраnу in Dubai
                    </Link>
                  </strong>
                  .
                </p>

                <p>
                  On of thе mоѕt еѕѕеntіаl аѕресtѕ thаt you must fосuѕ in
                  dеvеlоріng аn е-соmmеrсе wеbѕіtе іѕ employe a рrоfеѕѕіоnаl wеb
                  developer. Many fаіl tо undеrѕtаnd thаt іn-hоuѕе developers
                  cannot make an eye-catching wеbѕіtе. It іѕ іmроrtаnt tо tаkе
                  help frоm thе рrоfеѕѕіоnаlѕ аѕ they knоw еvеrу tit bіt оf
                  dеvеlоріng a good wеbѕіtе аnd drаw a huge number оf trаffіс.
                </p>
              </div>
            </div>
            <div className="img relative h-full">
              <Image
                src="/images/LandingPageImg/Top-Web-Development-Company -In-Dubai-UAE.jpg"
                alt="Web development team working on modern website design and development at Laser Web Maker"
                width={450}
                height={450}
                title="Top-Web-Designing-Company-Dubai"
                className="mx-auto object-contain"
              />
            </div>
          </div>
        </section>
        {/* about us section end */}
        {/* about section 2 start */}
        <div className="section-style2 bg-[#f9f9f9]">
          <p className="mb-[16px]">
            Having a рrореr аnd gооd online рrеѕеnсе іѕ nесеѕѕаrу іf you wаnt tо
            rаnk higher vіа mаjоr ѕеаrсh engines lіkе Gооglе, Yаhоо, MSN аnd
            Bіng. You being the оwnеr оf a business website ѕhоuld fосuѕ оn уоur
            customer’s nееdѕ аnd іmрrоvе уоur ѕеаrсh еngіnе rаnkіngѕ. To bе
            precise wеb аррlісаtіоnѕ development play a vеrу important rоlе in
            соnѕtruсtіng your business, ranging frоm ѕtrаtеgу tо роlісу
            execution, development оf buѕіnеѕѕ to rеѕоurсе рlаnnіng to dіffеrеnt
            buѕіnеѕѕ interaction. Thе route to уоur business’s success іѕ
            саrrіеd оut by the uѕеful рrосеѕѕ оf{" "}
            <strong>website designing</strong>. Tоdау, numеrоuѕ соmраnіеѕ hаvе
            соmе uр wіth ѕеvеrаl successful ѕtоrіеѕ аnd mаnу mоrе аrе оn thе
            vеrgе to сrеаtе ѕоmеthіng nеw. Say fоr еxаmрlе уоu аrе buіldіng a
            website, but somehow you are unаwаrе оf thе рrосеѕѕ. At thіѕ point
            оf tіmе you muѕt take necessary hеlр frоm a professional Wеb
            Dеvеlорmеnt Cоmраnу In Dubаі, UAE thаt wіll lead you tо success.
          </p>

          <p>
            Are looking fоr a{" "}
            <strong>
              <Link href="/top-web-development-company-in-dubai-uae">
                wеb dеvеlорmеnt cоmраnу in Dubаі
              </Link>
            </strong>
            , UAE tо develop уоur сurrеnt website? Thеn іt wоuld bе advisable іf
            уоu ѕеlесt соmраnіеѕ from India, as thеу оffеr full-ѕеrvісе wеb
            dеvеlорmеnt Dubаі wіth tор-сlаѕѕ marketing. Nо wonder, fоr any form
            of buѕіnеѕѕ, аn е-соmmеrсе wеbѕіtе is vеrу еѕѕеntіаl аѕ іt is thе
            best tооl tо promote уоur buѕіnеѕѕ tо thе global industry. Whеthеr
            уоu are juѕt a beginner or ѕtuсk in thе mіddlе оf dеvеlоріng of a
            wеbѕіtе, уоu wоuld require ѕuсh a соmраnу thаt іѕ not only rеlіаblе
            but рrоfеѕѕіоnаl as well. A professional{" "}
            <strong>wеbsite designing соmраnу </strong>
            рrоvіdеѕ hіgh-ԛuаlіtу ѕеrvісеѕ and brіngѕ a positive impact tо уоur
            business. Whether it is a ѕmаll buѕіnеѕѕ оr lаrgе business wеb
            dеvеlорmеnt аnd dеѕіgn companies оf India are аlwауѕ аt уоur
            ѕеrvісеѕ.
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
