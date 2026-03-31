// app/page.tsx
import HomeComponent from "@/components/Home";
import About_section from "@/components/About_section";
import Services_faqs from "@/components/Services_faqs";
import ServicesSection from "@/components/ServicesSection";
import Serving_Industries from "@/components/Serving_Industries";
import ProcessSection from "@/components/ProcessSection";
import HomeBanner from "@/components/HomeBanner";

// Lazy-loaded section (Client Component)
import LazyComponents from "@/components/LazyComponents";

export default function Home() {
  return (
    <>
      {/* <HomeComponent /> */}
      <HomeBanner/>
      <About_section />
      {/* <Services_faqs /> */}
      <ServicesSection/>
      <ProcessSection/>
      <section>
        {/* <Serving_Industries /> */}
      </section>

      {/* Lazy-loaded heavy components */}
      <LazyComponents />

   
    </>
  );
}
























// // app/page.js (or app/home/page.js depending on your routing structure)

// // import Header from "@/components/Header";
// import HomeComponent from "@/components/Home";
// import About_section from "@/components/About_section";
// import Services_faqs from "@/components/Services_faqs";
// import Serving_Industries from "@/components/Serving_Industries";
// import Testimonials from "@/components/Testimonials";
// import Our_Process from "@/components/Our_Process";
// // import ClientFeedback from "@/components/ClientFeedback";
// import OurPatners from "@/components/OurPatners";
// import TechnologyTabs from "@/components/TechnologyTabs";
// import BlogSlider from "@/components/BlogSlider";
// import ClientFeedback from "@/components/ClientFeedback";
// import { technologyContent } from "@/data/technologyData";
// import PortfolioSlider from "@/components/PortfolioSlider";
// // import Footer from "@/components/Footer";

// export default function Home() {
//   // console.log("Home page rendered");
//   return (
//     <>
//       {/* <Header /> */}
//       <HomeComponent />
//       <About_section />
//       <Services_faqs />
     
//       <section className="">
//         <Serving_Industries />
//       </section>
//        <section className="pb-10 md:pb-15">
//         <PortfolioSlider/>
//        </section>
//       <Our_Process />
//       {/* <ClientFeedback /> */}
//       <OurPatners />
//    <ClientFeedback />
//       <section className="">
//         <TechnologyTabs content={technologyContent.default} />

//         <BlogSlider />
//       </section>
//        <Testimonials />
//       {/* <Footer /> */}
//     </>
//   );
// }
