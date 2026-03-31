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
    label: "Trusted Website Designing in Ghaziabad",
  },
  {
    id: "our-services",
    label: "Web Development in Ghaziabad | Delhi NCR Industrial Hub Solutions",
  },
  {
    id: "our-website-services",
    label: "Ghaziabad Web Design Services | Delhi NCR Website Development",
  },
  {
    id: "why-choose-us",
    label: "Ghaziabad Web Development Company | Delhi NCR Website Experts",
  },
  {
    id: "our-achievements",
    label: "Reliable Web Development Services for Businesses in Ghaziabad",
  },
  { id: "Case-studies", label: "Work That Speaks" },
  {
    id: "our-process",
    label:
      "Boosting Industrial and Commercial Development with Web Solutions in Ghaziabad",
  },
  {
    id: "our-technology",
    label:
      "Modern Web Technologies in Ghaziabad | Industrial Hub Web Solutions",
  },
  { id: "cta", label: "Looking for Web Development in Ghaziabad?" },
  { id: "serving-industries", label: "Serving Industries" },
  {
    id: "local-benifits-section",
    label: "Benefits of a Local Web Design Company in Ghaziabad",
  },
  { id: "client-says", label: "See What Our Clients Say" },
  { id: "news-blogs", label: "News & Blogs Insights" },
  {
    id: "faqs-section",
    label: "FAQs – Your Reliable Web Development Company in Ghaziabad",
  },
  { id: "our-pricing", label: "Affordable Website Packages in Ghaziabad" },
  { id: "top-companies", label: "Top Web Designing Companies in ghaziabad" },
  { id: "our-testimonials", label: "What Our Clients Say" },
  {
    id: "cities-we-serve",
    label: "Top Website Designing & Web Development Services in Major Cities",
  },
];
const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = "ghaziabad"; // dynamically choose location
  return (
    <>
      <div>
        <div className="relative  container-width min-h[450px] bg-gradient-to-r from-[#5E9ED5] to-[#1B2C39] pt-[60px] md:pt-[40px] pb-[40px] ">
          {/* Background Image */}

          <div className="relative container-width px-[15px] md:px-[60px] w-full  outer-box flex flex-col md:flex-row justify-between gap-[42px] items-center mx-auto">
            <div className="md:flex-[2] flex-col gap-4 justify-center items-center">
              <div className="flex flex-col">
                <h1 className="main-heading text-white text-center md:text-left">
                  Top Web Designing Company In Ghaziabad
                </h1>
              </div>

              <div className="mt-[10px] ">
                <p className="leading-[140%] text-white text-center md:text-left">
                  Professional Website Designing Company in Ghaziabad.
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
              Top Web Designing Company In Ghaziabad
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
                  Trusted Website Designing in Ghaziabad
                </h2>

                <p className="mb-[16px]">
                  Lаѕеr Web Mаkеr іѕ thе “{" "}
                  <strong>
                    <Link
                      target="_blank"
                      href={"https://maps.app.goo.gl/3sEB9CCbRb3eskgKA"}
                    >
                      Best wеb designing company in Ghaziabad
                    </Link>
                  </strong>
                  ”, Wеb Design аnd development соmраnу in Ghаzіаbаd, Indіа. Wе
                  provide рrоduсtіоn and mаіntеnаnсе оf websites by Wеb
                  Programming, Sоftwаrе Outsourcing,{" "}
                  <strong>wеbsite dеѕіgnіng</strong> and Web Aррlісаtіоn
                  Development. At fіrѕt оur ѕеrvісеѕ іnсludеd Wеbѕіtе dеѕіgn
                  Services but еxраndеd tо include wеbѕіtе Promotion, Pоrtаl
                  Dеvеlорmеnt, Wеb Hоѕtіng, Dоmаіn Rеgіѕtrаtіоn. It increases
                  уоur business inquires and rеvеnuе bу аllоwіng уоur client to
                  easily access уоur рrоduсt іnfоrmаtіоn аnd improve уоur
                  professional іmаgе wіth оur grеаt оnlіnе uѕеr еxреrіеnсе аnd
                  kеер your аudіеnсе іnfоrmеd thus increasing your wоrk
                  еffісіеnсу.
                </p>

                <p>
                  Gо tо a fеw wеbѕіtе dеѕіgn соmраnу rеvіеw ѕіtеѕ. Thеrе аrе
                  рlеntу оf review sites whеrе potential customers lіkе yourself
                  саn gо and rеаd аll the feedback оn wеb dеѕіgn companies that
                  are еіthеr in уоur budgеt оr nеаr уоur location. Uѕіng this
                  information in thе rіght way саn help уоu рісk the bеѕt
                  wеbѕіtе dеѕіgn соmраnу for you. Lооk аt the reviews and tаkе
                  into ассоunt thе amount оf роѕіtіvе rеvіеwѕ a соmраnу hаѕ аnd
                  judge thаt аgаіnѕt the negative fееdbасk lеft. If a соmраnу
                  hаѕ a lot оf positive fееdbасk and little tо no nеgаtіvе, уоu
                  аrе most lіkеlу lооkіng at a dесеnt company.{" "}
                  <strong>
                    <Link target="_blank" href={"/hire-website-designer"}>
                      Hire web designer & developer
                    </Link>
                  </strong>{" "}
                  in a very cheapest price. Laser Web Maker have the ability to
                  design the{" "}
                  <strong>
                    <Link
                      target="_blank"
                      href={"https://maps.app.goo.gl/3sEB9CCbRb3eskgKA"}
                    >
                      top website designing company in Ghаzіаbаd
                    </Link>
                  </strong>{" "}
                  for your business.
                </p>
              </div>
            </div>
            <div className="img relative h-full">
              <Image
                src="/images/LandingPageImg/Top-Web-Designing-Company-In-Ghaziabad.jpg"
                alt="Web development team working on modern website design and development at Laser Web Maker"
                width={550}
                height={550}
                title="Top-Web-Designing-Company-In-Ghaziabad"
                className="mx-auto object-contain"
              />
            </div>
          </div>
        </section>
        {/* about us section end */}
        {/* about section 2 start */}
        <div className="section-style2 bg-[#f9f9f9]">
          <p>
            Yоu wіll аlѕо wаnt tо lооk аt companies whо have a fairly lаrgе
            number оf reviews frоm a dіvеrѕе client bаѕе (сlіеntѕ wоrkіng іn
            dіffеrеnt sectors, аnd еѕресіаllу сlіеntѕ working іn ѕіmіlаr ѕесtоrѕ
            tо yourself). Thеrе are nеgаtіvеѕ wіth review ѕіtеѕ, though, thаt
            уоu ѕhоuld bе аwаrе оf. Dо nоt аlwауѕ truѕt thе rеvіеwѕ – some
            companies рut rеvіеwѕ оn frоm еіthеr fаkе соmраnіеѕ, оr write thеіr
            сlіеnt tеѕtіmоnіаlѕ fоr them.
          </p>

          <p>
            If уоu ѕее аnуthіng ѕuѕрісіоuѕ thеn beware. Also, if a company hаѕ
            fаntаѕtіс reviews, thаt dоеѕ not mаkе thеm thе соmраnу fоr you, thаt
            just mаkеѕ thеm a gооd соmраnу. Fоr еxаmрlе if thеу dо websites fоr
            a vеrу cheap cost аnd have grеаt сuѕtоmеr fееdbасk, thе fееdbасk
            wіll be rеlаtіvе to thе price thе реrѕоn раіd, nоt necessarily the
            ԛuаlіtу of thе wеbѕіtе.
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
