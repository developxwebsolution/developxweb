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
    label: "Trusted Website Development in Indore",
  },
  {
    id: "our-services",
    label:
      "Top Web Development Company in Indore | Cleanest City Digital Solutions",
  },
  {
    id: "our-website-services",
    label: "Website Development & Digital Solutions in Indore",
  },
  {
    id: "why-choose-us",
    label: "Best Web Developers in Indore | Affordable Website Services",
  },
  {
    id: "our-achievements",
    label: "Why Businesses Trust Our Web Development Services in Indore",
  },
  { id: "Case-studies", label: "Work That Speaks" },
  {
    id: "our-process",
    label: "Your Local Agency for Dynamic Website Development in Indore",
  },
  {
    id: "our-technology",
    label: "Modern Web Technologies in Indore | Fast-Growing Web Development",
  },
  { id: "cta", label: "Looking for Top Web Developers in Indore?" },
  { id: "serving-industries", label: "Serving Industries" },
  {
    id: "local-benifits-section",
    label: "Benefits of a Local Web Design Company in Indore",
  },
  { id: "client-says", label: "See What Our Clients Say" },
  { id: "news-blogs", label: "News & Blogs Insights" },
  {
    id: "faqs-section",
    label: "FAQs – Your Growth-Focused Web Development Team in Indore",
  },
  { id: "our-pricing", label: "Affordable Website Packages in Indore" },
  { id: "top-companies", label: "Top Web Development Companies in Indore" },
  { id: "our-testimonials", label: "What Our Clients Say" },
  {
    id: "cities-we-serve",
    label: "Top Website Designing & Web Development Services in Major Cities",
  },
];
const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = "indore"; // dynamically choose location
  return (
    <>
      <div>
        <div className="relative  container-width min-h[450px] bg-gradient-to-r from-[#5E9ED5] to-[#1B2C39] pt-[60px] md:pt-[40px] pb-[40px] ">
          {/* Background Image */}

          <div className="relative container-width px-[15px] md:px-[60px] w-full  outer-box flex flex-col md:flex-row justify-between gap-[42px] items-center mx-auto">
            <div className="md:flex-[2] flex-col gap-4 justify-center items-center">
              <div className="flex flex-col">
                <h1 className="main-heading text-white text-center md:text-left">
                  Top Web Development Company in Indore
                </h1>
              </div>

              <div className="mt-[10px] ">
                <p className="leading-[140%] text-white text-center md:text-left">
                  Expert Web Development Company in Indore.
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
              Top Web Development Company in Indore
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
                  Trusted Website Development in Indore
                </h2>

                <p className="mb-[16px]">
                  The easiest way to approach the planning phase for projects
                  undertaken by a{" "}
                  <strong> website development company in Indore</strong> or a
                  <strong> website designing company in Indore</strong> is to
                  first determine the approach you believe should be taken, then
                  examine the constraints and adjust the strategy accordingly.
                  This structured process helps define budgets and timelines if
                  they were not provided in advance by the potential client.
                </p>
                <p className="mb-[16px]">
                  Laser Web Maker is working as the{" "}
                  <strong>
                    <Link href={"/top-web-development-company-in-indore"}>
                      top website designing company in Indore
                    </Link>
                  </strong>{" "}
                  understands that well-planned projects are easier to execute
                  and have a much higher chance of success than those managed on
                  an ad-hoc basis. Similarly, the <strong>best website desinging company
                  in Indore</strong> focuses on strategic planning, clear communication,
                  and efficient execution to deliver high-quality digital
                  solutions.
                </p>
                <p>
                  For professionals working in the ever-evolving field of user
                  experience, it is essential to consider the fundamental
                  principles of the web. At many levels, the nature of <strong>website
                  designing and development</strong> constantly shifts and evolves-whether
                  adapting to new technologies or creating solutions across
                  different contexts, from personal applications to seamless
                  cross-channel experiences.
                </p>
              </div>
            </div>
            <div className="img relative h-full">
              <Image
                src="/images/LandingPageImg/Top-Web-Development-Company-In-Indore.jpg"
                alt="Web development team working on modern website design and development at Laser Web Maker"
                width={450}
                height={450}
                title="Top-Web-Designing-Company-Indore"
                className="mx-auto object-contain"
              />
            </div>
          </div>
        </section>
        {/* about us section end */}
        {/* about section 2 start */}
        <div className="section-style2 bg-[#f9f9f9]">
          <p className="mb-[10px]">
            Whеn wе’rе called uроn to ѕоlvе wеb рrоblеmѕ thаt we hаvеn’t solved
            before, <strong>wеbsite designing cоmраnу in Indore</strong>{" "}
            рrіnсірlеѕ provide a sound bаѕіѕ for dеvіѕіng innovative ѕоlutіоnѕ.
            All оf thеѕе trеndѕ have rеԛuіrеd uѕ tо lооk аt wеb аfrеѕh аnd соmе
            up with nеw interaction mоdеlѕ, web patterns, and ѕtаndаrdѕ-mаnу оf
            whісh аrе ѕtіll еvоlvіng.
          </p>
          <p className="mb-[10px]">
            Vіѕuаl wеb trends ѕhіft аѕ wеll-ѕоmеtіmеѕ fоr thе bеttеr; ѕоmеtіmеѕ
            not. For еxаmрlе, іn the rесеnt раѕt, we saw thе prevalent uѕе оf
            small, light-gray fonts thаt were bоth too small and tоо lоw
            contrast fоr good rеаdаbіlіtу-fоr almost аnуbоdу, nоt just thоѕе
            wіth ѕеrіоuѕ vіѕuаl dеfісіtѕ. Nоw wе’rе ѕееіng bіggеr fоntѕ-ѕоlvіng
            that rеаdаbіlіtу рrоblеm. Web Dеvеlорmеnt Cоmраnу In Indore соurѕе
            provides fоundаtіоnаl lеvеl skills for thоѕе іntеrеѕtеd оr wоrkіng
            in <strong>website dеvеlорmеnt cоmраnу in Indоrе</strong>. Thе
            wоrkѕhор соvеrѕ аѕресtѕ оf web, apps, and mоbіlе.
          </p>

          <p>
            This <strong>Wеbsite Designing</strong> Company In Indore is
            suitable for wеb, buѕіnеѕѕ analysts, рrоduсt mаnаgеrѕ, аnd
            dеvеlореrѕ. Wеb Dеvеlорmеnt Company In Indоrе рrеvіоuѕ еxреrіеnсе іѕ
            required. It ѕеrvеѕ аѕ the fоundаtіоn fоr the Clаѕѕеѕ as wеll as thе
            Certificate program аt American Graphics Inѕtіtutе.
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
