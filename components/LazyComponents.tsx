"use client"; // ⚠️ This makes it a Client Component

import dynamic from "next/dynamic";
import { technologyContent } from "@/data/technologyData";
import OurPatners from "./OurPatners";
import Our_Process from "./Our_Process";

// Lazy-load heavy components only on the client
const PortfolioSlider = dynamic(() => import("./PortfolioSlider"), { ssr: false });
const ClientFeedback = dynamic(() => import("./ClientFeedback"), { ssr: false });
const TechnologyTabs = dynamic(() => import("./TechnologyTabs"), { ssr: false });
const BlogSlider = dynamic(() => import("./BlogSlider"), { ssr: false });
const Testimonials = dynamic(() => import("./Testimonials"), { ssr: false });

export default function LazyComponents() {
  return (
    <>
      <section className="pb-10 md:pb-15">
        {/* <PortfolioSlider /> */}
      </section>

      {/* <ClientFeedback /> */}

      <section>
        {/* <TechnologyTabs content={technologyContent.default} /> */}
        {/* <BlogSlider /> */}
      </section>
   {/* <Our_Process /> */}
      {/* <OurPatners /> */}
      {/* <Testimonials /> */}
      
    </>
  );
}
