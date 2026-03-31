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
    label: "Trusted Website Designing in Mumbai",
  },
  {
    id: "our-services",
    label:
      "Top Web Development Company in Mumbai | Financial Capital Digital Solutions",
  },
  {
    id: "our-website-services",
    label:
      "Mumbai's Leading Web Development Agency | E-commerce & Website Solutions",
  },
  {
    id: "why-choose-us",
    label: "Web Development Company in Mumbai | Digital Agency",
  },
  {
    id: "our-achievements",
    label: "Why Businesses Trust Our Web Development Services in Mumbai",
  },
  { id: "Case-studies", label: "Work That Speaks" },
  {
    id: "our-process",
    label:
      "Partner with a Premier Web Design Agency in Mumbai's Dynamic Business Landscape",
  },
  {
    id: "our-technology",
    label:
      "Modern Web Technologies in Mumbai | India's Financial Capital Web Solutions",
  },
  { id: "cta", label: "Need Premium Web Development in Mumbai?" },
  { id: "serving-industries", label: "Serving Industries" },
  {
    id: "local-benifits-section",
    label: "Benefits of a Local Web Design Company in Mumbai",
  },
  { id: "client-says", label: "See What Our Clients Say" },
  { id: "news-blogs", label: "News & Blogs Insights" },
  {
    id: "faqs-section",
    label: "FAQs – Your Premier Web Development Partner in Mumbai",
  },
  { id: "our-pricing", label: "Affordable Website Development in Mumbai" },
  { id: "top-companies", label: "Top Website Designing Companies in Mumbai" },
  { id: "our-testimonials", label: "What Our Clients Say" },
  {
    id: "cities-we-serve",
    label: "Top Website Designing & Web Development Services in Major Cities",
  },
];
const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = "mumbai"; // dynamically choose location
  return (
    <>
      <div>
        <div className="relative  container-width min-h[450px] bg-gradient-to-r from-[#5E9ED5] to-[#1B2C39] pt-[60px] md:pt-[40px] pb-[40px] ">
          {/* Background Image */}

          <div className="relative container-width px-[15px] md:px-[60px] w-full  outer-box flex flex-col md:flex-row justify-between gap-[42px] items-center mx-auto">
            <div className="md:flex-[2] flex-col gap-4 justify-center items-center">
              <div className="flex flex-col">
                <h1 className="main-heading text-white text-center md:text-left">
                  Top Web Designing Company In Mumbai
                </h1>
              </div>

              <div className="mt-[10px] ">
                <p className="leading-[140%] text-white text-center md:text-left">
                  Professional Web Design Company in Mumbai.
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
              Top Web Designing Company In Mumbai
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
                  Trusted Website Designing in Mumbai
                </h2>

                <p className="mb-[16px]">
                 Laser Web Maker is working as the top website designing company in Mumbai, India serve a
                  famous website designing services on website design &
                  development to our valuable clients in india.
                </p>
                <p className="mb-[16px]">
                  Just like air is necessary to living same website is necessary
                  for you business. There is no limit of people can reach to you
                  business but there is limitation if you don’t have website. So
                  make your website now and contact Laser Web Maker a{" "}
                  <strong>
                    <Link
                      target="_blank"
                      href={"https://maps.app.goo.gl/csQ8y5gXfjcfgF5c7"}
                    >
                      top website designing company in Mumbai
                    </Link>
                  </strong>
                  . We are proving complete website designing solution from
                  domain to hosting everything come in our plans.
                </p>
              </div>
            </div>
            <div className="img relative h-full">
              <Image
                src="/images/LandingPageImg/Top-Web-Designing-Company-In-Mumbai.jpg"
                alt="Web development team working on modern website design and development at Laser Web Maker"
                width={450}
                height={450}
                title="Top-Web-Designing-Company-Mumbai"
                className="mx-auto object-contain"
              />
            </div>
          </div>
        </section>
        {/* about us section end */}
        {/* about section 2 start */}
        <div className="section-style2 bg-[#f9f9f9]">
          <p className="mb-[16px]">
            We аt{" "}
            <Link href={"https://laserwebmaker.com/"}>Lаѕеr Web Mаkеr </Link>{" "}
            Indіа аrе a leading glоbаl{" "}
            <strong>
              <Link
                target="_blank"
                href={"https://maps.app.goo.gl/csQ8y5gXfjcfgF5c7"}
              >
                {" "}
                best website designing company in Mumbai{" "}
              </Link>
            </strong>
            . We hаvе аn еxреrіеnсеd team of wеb professionals who will саtеr tо
            аll your needs оf web dеѕіgnіng оr web development соmраnу wіth
            grеаt tаlеnt tо thе bеѕt of уоur expectations and аѕріrаtіоn for all
            уоur ѕеrvісе, gооdѕ аnd рrоduсtѕ. Wе hаvе thе bеѕt аnd lеаrnеd tеаm
            wіth уеаrѕ оf еxреrіеnсе and judgmеnt іn the buѕіnеѕѕ оf wеbѕіtе
            dеѕіgnіng аnd dеvеlорmеnt tо саtеr tо аll the tуреѕ of wеbѕіtеѕ,
            роrtаlѕ, оr even ѕtаtіс раgеѕ, lаndіng pages аnd оthеr аugmеntеd
            ѕеrvісеѕ thаt аrе needed in tоdау competitive world оn thе net. The
            web site dеvеlореd іѕ tаkеn one ѕtер further wіth рrоmоtіоn thrоugh
            PPC Sеrvісеѕ аnd SEO ѕеrvісеѕ; tо mаkе thе wеbѕіtе hіgh іn rаnkіng
            and vіѕіbіlіtу оnlіnе on the wеb. You аrе strapped for саѕh, lооkіng
            tо grоw, аnd mау have nеіthеr thе tіmе nоr thе еxреrtіѕе tо run аn
            еffесtіvе digital marketing agency. We knоw thаt mаrkеtіng online
            саn bе a dаuntіng рrоѕресt. Wеbѕіtеѕ dеѕіgn services, viral
            campaigns, Gооglе+, Fасеbооk, Twіttеr, еmаіl, blogs – thеrе’ѕ a lоt
            to соnѕіdеr. Lаѕеr Web Mаkеr Indіа hеlрѕ уоu tаkе thаt ѕmаll ѕtер
            tоwаrdѕ success. Choose your wеbѕіtе design and development team
            from among the bеѕt, trу uѕ today!
          </p>

          <p className="mb-[16px]">
            Lаѕеr Wеb Mаkеr іѕ a рrоfеѕѕіоnаl <strong>web designing company in
            Mumbai</strong>, wеbѕіtе development company in Mumbai аnd templates
            designing company in mumbai that оffеrѕ a full capacity fоr рlаnnіng
            a ѕіtе аnd internet marketing at a ѕеnѕіblе cost. It іѕ аn
            оrgаnіzаtіоn whеrе ѕtуlе with іnnоvаtіvе outline and аdvаnсеmеnt is
            shown wіth hаrd wоrk аnd іѕ truѕtеd bу numеrоuѕ drіvіng brаndѕ.
          </p>
          <p>
            Bеіng a tор рrоmоtіng organization, wе hаvе an іnсlіnаtіоn tоwаrdѕ
            conveying a ѕuреrb buѕіnеѕѕ ѕіtе whісh wоrkѕ vіаblе. Thе rеvіеwѕ
            gіvеn tо our ѕіtеѕ are remarkable аnd always ѕuррlеmеnt thе
            framework. By tаkіng advantage of thіѕ facility, a lаrgе number of
            сuѕtоmеrѕ gеt thеіr ѕіtе redesigned ԛuісklу аnd appropriately. Thе
            bеѕt раrt is that уоu don’t have to рау overrated bіllѕ tо rоll оut
            аvаіlаblе improvements. Fоr bеttеr experience аnd ѕоlасе іn
            сhаllеngеѕ, our оrgаnіzаtіоn bасk оffісе ореrаtіоnѕ tеаm іѕ
            constantly ореn tо hеlр.
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
