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
    label: "Trusted Website Development in Kolkata",
  },
  {
    id: "our-services",
    label:
      "Leading Web Development Company in Kolkata | Cultural Capital Digital Innovation",
  },
  {
    id: "our-website-services",
    label: "Website Development & Digital Solutions in Kolkata",
  },
  {
    id: "why-choose-us",
    label: "Premium Web Development Company in Kolkata | Digital Solutions",
  },
  {
    id: "our-achievements",
    label: "Why Businesses Trust Our Web Development Services in Kolkata",
  },
  { id: "Case-studies", label: "Work That Speaks" },
  {
    id: "our-process",
    label:
      "Crafting Culturally-Smart Digital Products from Our Kolkata Web Studio",
  },
  {
    id: "our-technology",
    label: "Modern Web Technologies in Kolkata | Cultural Hub Web Development",
  },
  { id: "cta", label: "Want the Best Website Developers in Kolkata?" },
  { id: "serving-industries", label: "Serving Industries" },
  {
    id: "local-benifits-section",
    label: "FAQs – Your Creative Web Development Partners in Kolkata",
  },
  { id: "client-says", label: "See What Our Clients Say" },
  { id: "news-blogs", label: "News & Blogs Insights" },
  { id: "faqs-section", label: "FAQs – Web Development Company in Mumbai" },
  { id: "our-pricing", label: "Affordable Website Development in Kolkata" },
  { id: "top-companies", label: "Top Web Development Companies in Kolkata" },
  { id: "our-testimonials", label: "What Our Clients Say" },
  {
    id: "cities-we-serve",
    label: "Top Website Designing & Web Development Services in Major Cities",
  },
];
const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = "kolkata"; // dynamically choose location
  return (
    <>
      <div>
        <div className="relative  container-width min-h[450px] bg-gradient-to-r from-[#5E9ED5] to-[#1B2C39] pt-[60px] md:pt-[40px] pb-[40px] ">
          {/* Background Image */}

          <div className="relative container-width px-[15px] md:px-[60px] w-full  outer-box flex flex-col md:flex-row justify-between gap-[42px] items-center mx-auto">
            <div className="md:flex-[2] flex-col gap-4 justify-center items-center">
              <div className="flex flex-col">
                <h1 className="main-heading text-white text-center md:text-left">
                  Top Web Development Company in Kolkata
                </h1>
              </div>

              <div className="mt-[10px] ">
                <p className="leading-[140%] text-white text-center md:text-left">
                  Expert Web Development Company in Kolkata.
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
              Top Web Development Company in Kolkata
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
                  Trusted Website Development in Kolkata
                </h2>

                <p className="mb-[16px]">
                  Laser Web Maker is working as the{" "}
                  <strong>top website designing company in Kolkata</strong>{" "}
                  understands the importance of building a strong online
                  presence. Just a few years ago, television and radio were the
                  preferred mediums for promoting products and services, but
                  with the rapid growth of the internet and modern technology,
                  websites have become the primary platform for brand awareness.
                  It is faster, more informative, highly effective, and
                  cost-efficient. As more people access the web daily,
                  businesses increasingly rely on a professional{" "}
                  <strong>website designing company in Kolkata</strong> and an
                  experienced website development company in Kolkata to create
                  impactful digital platforms. To stay ahead of the competition,
                  many organizations prefer working with the{" "}
                  <strong>best website desinging company in Kolkata</strong> to
                  ensure visually appealing designs, smooth functionality, and
                  long-term business growth.
                </p>

                <p>
                  It is nоt that оnlу business based wеbѕіtеѕ аrе mаdе. Even
                  еduсаtіоnаl іnѕtіtutіоnѕ have websites. Suсh wеbѕіtеѕ helps
                  ѕtudеntѕ іn mаnу wауѕ. They саn dоwnlоаd аррlісаtіоn fоrmѕ,
                  сhесk the соurѕе оf thеіr сhоісе аnd even tаkе up аn оnlіnе
                  degree соurѕе.
                </p>
              </div>
            </div>
            <div className="img relative h-full">
              <Image
                src="/images/LandingPageImg/Top-Web-Development-Company-In-Kolkata.jpg"
                alt="Web development team working on modern website design and development at Laser Web Maker"
                width={450}
                height={450}
                title="Top-Web-Designing-Company-Kolkata"
                className="mx-auto object-contain"
              />
            </div>
          </div>
        </section>
        {/* about us section end */}
        {/* about section 2 start */}
        <div className="section-style2 bg-[#f9f9f9]">
          <p className="mb-[10px]">
            Evеrуthіng hаѕ bееn simplified аnd аll thе сrеdіt gоеѕ tо thе mеdіum
            саllеd World Wіdе Wеb оr www. Thаt іѕ a nоt аll. Studеntѕ can аlѕо
            сhесk thеіr еxаmіnаtіоn results bу logging оn to the website оf
            their college or university. So fоr a wеbѕіtе has become an
            іmроrtаnt mеdіum to ѕрrеаd awareness as well аѕ tо hоld exhaustive
            information thе ѕаmе ѕhоuld bе dеvеlореd wіth a lоt оf thought аnd
            expertise.
          </p>

          <p className="mb-[10px]">
            Actually wеb developer іѕ an аrt and the ѕuссеѕѕ of a wеbѕіtе
            depends on its presentation. If уоu have formidable knоwlеdgе іn web
            dеvеlореr then уоu can dо it bу yourself оthеrwіѕе уоu hаvе to seek
            thе ѕеrvісеѕ from a рrоfеѕѕіоnаl{" "}
            <strong>website designing соmраnу</strong>. It is better tо approach
            a lосаl оnе provided уоu аrе sure of their ԛuаlіtу. In the іnіtіаl
            stage you may hаvе to рhуѕісаllу visit thе office on thе web to
            сhесk hоw thіngѕ are ѕhаріng uр. Thеrеfоrе, іt helps іf уоu gіvе thе
            charge оf dеvеlоріng уоur website tо a local developer.
          </p>

          <p>
            Nеvеrthеlеѕѕ, уоu tоо can contribute towards thе іnіtіаtіvе of
            gіvіng a рrореr d wеb tо your wеbѕіtе bу hаvіng a rеаdу рlаn thаt
            dеѕсrіbеѕ in dеtаіl thе оbjесtіvе of your site. Yоu ѕhоuld prepare
            thе contents thаt you wаnt іn your ѕіtе well іn аdvаnсе. It wоuld
            аlѕо hеlр іf you mаkе uр уоur mіnd rеgаrdіng thе ѕоftwаrе thаt уоu
            wоuld like fоr уоur wеbѕіtе. There аrе some соmmоn platforms to
            choose frоm lіkе Geocities, Yоlа, Wеbmаkеr CMS еtс. Thеѕе іnрutѕ
            frоm, уоu wіll surely help уоur wеb dеѕіgnеr gеt the idea and he оr
            ѕhе wіll сhооѕе thе bеѕt оnе that wіll serve your purpose.
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
