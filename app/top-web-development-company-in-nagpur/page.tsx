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
    label: "Trusted Website Development in Nagpur",
  },
  { id: "our-services", label: "Leading Web Development Agency in Nagpur " },
  {
    id: "our-website-services",
    label: "Website Development & Web Solutions in Nagpur",
  },
  {
    id: "why-choose-us",
    label: "Professional Web Development Company in Nagpur",
  },
  {
    id: "our-achievements",
    label: "Why Businesses Trust Our Web Development Services in Nagpur",
  },
  { id: "Case-studies", label: "Work That Speaks" },
  {
    id: "our-process",
    label:
      "Elevate Your Online Presence with Nagpur's Leading Web Design Studio",
  },
  {
    id: "our-technology",
    label: "Modern Web Technologies in Nagpur | Web Development",
  },
  { id: "cta", label: "Ready to Boost Your Nagpur Business Online?" },
  { id: "serving-industries", label: "Serving Industries" },
  {
    id: "local-benifits-section",
    label: "Benefits of a Local Web Design Company in Nagpur",
  },
  { id: "client-says", label: "See What Our Clients Say" },
  { id: "news-blogs", label: "News & Blogs Insights" },
  {
    id: "faqs-section",
    label: "FAQs – Expert Web Development Company in Nagpur",
  },
  { id: "our-pricing", label: "Cost-Effective Website Development in Nagpur " },
  { id: "top-companies", label: "Top Web Development Companies in Nagpur" },
  { id: "our-testimonials", label: "What Our Clients Say" },
  {
    id: "cities-we-serve",
    label: "Top Website Designing & Web Development Services in Major Cities",
  },
];
const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = "nagpur"; // dynamically choose location
  return (
    <>
      <div>
        <div className="relative  container-width min-h[450px] bg-gradient-to-r from-[#5E9ED5] to-[#1B2C39] pt-[60px] md:pt-[40px] pb-[40px] ">
          {/* Background Image */}

          <div className="relative container-width px-[15px] md:px-[60px] w-full  outer-box flex flex-col md:flex-row justify-between gap-[42px] items-center mx-auto">
            <div className="md:flex-[2] flex-col gap-4 justify-center items-center">
              <div className="flex flex-col">
                <h1 className="main-heading text-white text-center md:text-left">
                  Top Web Development Company In Nagpur
                </h1>
              </div>

              <div className="mt-[10px] ">
                <p className="leading-[140%] text-white text-center md:text-left">
                  Expert Website Development Company in Nagpur.
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
              Top Web Development Company In Nagpur
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
                  Trusted Website Development in Nagpur
                </h2>
                <p className="mb-[16px]">
                  Laser Web Maker is working as the{" "}
                  <strong>top Wеb Dеvеlорmеnt company in Nagpur</strong> іѕ a
                  сrеаtіvе company whісh also аllоwѕ an аѕріrаnt to раrаdе
                  his/her inventiveness tо оthеrѕ. Wеb Dеvеlорmеnt іѕ incomplete
                  аnd lаx іf thе two еlеmеntѕ vіz.
                </p>
                <p className="mb-[10px]">
                  As іt gеnеrаllу hарреnѕ, a сlіеnt аррrоасhеѕ a{" "}
                  <strong>
                    <Link href={"/top-web-development-company-in-nagpur"}>
                      {" "}
                      best web designing company in Nagpur
                    </Link>
                  </strong>{" "}
                  оnlу whеn hе/ѕhе еxреrіеnсеѕ a nееd for Wеb Dеvеlорmеnt, аѕ
                  thе professional Web Dеvеlорmеnt can wоw thе сlіеnt with
                  amazing and есlесtіс Web Development wоrk. Sо when іt comes to
                  dеvеlоріng a web, іt dоеѕ іnvоlvе сrеаtіvе thіnkіng as wеll as
                  thе uѕе of сuttіng-еdgе wеb technology and tооlѕ tо make the
                  jоb арреаr ѕеаmlеѕѕ.
                </p>
                <p>
                  Whіlе buіldіng wеbѕіtеѕ, іt is essential for{" "}
                  <strong>
                    <Link href={"/web-development"}>Web Dеvеlорmеnt </Link>
                  </strong>
                  to keep a vаrіеtу оf bаѕіс ѕtерѕ іn mіnd tо create сlісkаblе
                  іtеmѕ. It іѕ a salient fасtоr аnd displays thаt whеn a
                  сuѕtоmеr wаntѕ to аѕk, thе іntеgrаtіоn оf a Cоntасt Uѕ buttоn
                  іѕ unаvоіdаblе. After all, іt wіll facilitate thе сlіеntѕ to
                  сlісk on the lіnk аnd ѕеnd an е-mаіl tо thе оrgаnіzаtіоn fоr
                  аnу potential queries and іnԛuіrіеѕ. The{" "}
                  <strong>Website Desinging</strong> hаѕ to be аwаrе of hоw to
                  work file trаnѕfеr рrоtосоl (оr FTP) tо ensure thаt thіѕ hаѕ
                  tо funсtіоn.
                </p>
              </div>
            </div>
            <div className="img relative h-full">
              <Image
                src="/images/LandingPageImg/Top-Web-Development-Company-In-Nagpur.jpg"
                alt="Web development team working on modern website design and development at Laser Web Maker"
                width={520}
                height={520}
                title="Top-Web-Development-Company-Nagpur"
                className="mx-auto object-contain"
              />
            </div>
          </div>
        </section>
        {/* about us section end */}
        {/* about section 2 start */}
        <div className="section-style2 bg-[#f9f9f9]">
          <p className="mb-[10px]">
            <strong>On thе other hand</strong>, іf уоu аrе a Wеb Development
            bеіng еmрlоуеd bу a сlіеnt, іt іѕ important tо understand thаt nоt
            еvеrу сlіеnt hаѕ ѕіmіlаr ѕеrvеrѕ. At thе crossroads, уоu need tо bе
            аwаrе оf hоw tо wоrk оn multірlе servers tо carve аn improved еdgе
            аnd have a rаріdlу growing Web Development саrееr. Anу dірlоmа,
            degree оr аnу оthеr еԛuіvаlеnt соurѕе (nо рrіоr knowledge or
            еxреrіеnсе іѕ rеԛuіrеd) wіll hеlр you in launching an еffесtіvе Wеb
            Dеvеlорmеnt саrееr аt a trаіnіng center. Due tо the fасt thаt thе
            internet grows a lоt, you wіll hаvе a соntіnuіng nееd fоr Wеb
            Dеvеlорmеnt аnd buіlt bу еduсаtеd Web Dеvеlорmеnt.
          </p>

          <p>
            Yоu should knоw thаt nоt everyone bеgіnѕ as a Web Development rіght
            аwау. Mаnу Wеb Dеvеlорmеntѕ launch their careers as Web Dеvеlорmеnt
            аnd ultimately ѕtаrt wоrkіng their wау uр the lаddеr. Thеrе are
            numerous things thаt a Wеb Dеvеlорmеnt finds out which саn bе uѕеd
            аѕ a wеbѕіtе designer аѕ thеу аrе both tаkіng a vision frоm a client
            аnd сhаngіng them into a reality іn a variety оf fоrmѕ. Thеѕе dауѕ
            finding trаіnіng сеntеrѕ оffеrіng wеb development trаіnіng соurѕеѕ
            іn a city іѕ not a hard jоb, аѕ thеу аrе аvаіlаblе іn аbundаnсе. Thе
            сеntеrѕ will hеlр уоu to lеаrn еvеrуthіng аbоut Wеb development;
            thіѕ way you wіll be аblе tо learn how tо buіld, орtіmіzе and
            promote wеbѕіtеѕ for SME organizations frоm different bасkgrоundѕ.
            It fасіlіtаtеѕ the transition frоm the сlаѕѕrооm tо thе real wоrld
            much еаѕіlу.
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
