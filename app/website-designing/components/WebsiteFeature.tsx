"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Zap,
  Search,
  Smartphone,
  ShieldCheck,
  Compass,
  Layers,
} from "lucide-react";

const tabs = [
  {
    id: "market",
    title: "Fast Loading Speed",
    icon: <Zap size={22} />,
    image: "/images/website-development/Fast-Loading-Speed.jpg",
    content:
      "Our websites are built to load quickly and smoothly. This way, users never have to wait. A faster site reduces bounce rates, keeps visitors engaged, and improves overall user satisfaction. Website speed isn’t just a feature; it’s essential for a smooth browsing experience.",
  },
  {
    id: "SEO-Optimized-Structure",
    title: "SEO-Optimized Structure",
    icon: <Search size={22} />,
    image: "/images/website-development/seo-optimized-structure.jpg",
    content:
      "We follow clean coding practices, proper heading hierarchy, and search-engine-friendly architecture so your website naturally ranks higher. This helps your business get discovered easily and stand ahead of competitors in search results.",
  },
  {
    id: "Mobile-Friendly-Design",
    title: "Mobile-Friendly Design",
    icon: <Smartphone size={22} />,
    image: "/images/website-development/Mobile-Friendly-Design.jpg",
    content:
      "Every website we build is fully responsive. Whether someone opens your site on a mobile, tablet, or desktop, it adapts perfectly and delivers the same smooth experience. No pinching, no zooming — just seamless browsing.",
  },
  {
    id: "Secure-Protected",
    title: "Secure & Protected",
    icon: <ShieldCheck size={22} />,
    image: "/images/website-development/secure-protected.jpg",
    content:
      "Security is a top priority. We implement SSL, safe coding practices, firewall layers, and regular updates to ensure that your website and user data remain protected from malware, hacking attempts, and online threats.",
  },
  {
    id: "Easy-Navigation",
    title: "Easy Users Navigation",
    icon: <Compass size={22} />,
    image: "/images/website-development/Easy-Navigation.jpg",
    content:
      "We design websites with simple, intuitive navigation so visitors can find what they need without confusion. Smooth menus, clear sections, and user-friendly layouts contribute to longer visits and higher engagement.",
  },
  {
    id: "Customizable-Scalable",
    title: "Customizable & Scalable",
    icon: <Layers size={22} />,
    image: "/images/website-development/Customizable-Scalable.jpg",
    content:
      "Your business grows — and your website should grow with it. Our sites are built with flexibility, allowing easy expansion of pages, features, and functionalities whenever needed. No limits, just future-ready scalability.",
  },
];

export default function WebsiteFeature() {
  const [active, setActive] = useState("market");
  const activeTab = tabs.find((tab) => tab.id === active);
  const tabsRef = useRef<HTMLDivElement>(null);

  return (
    <section className="section-style" id="local-design-tabs">
      <div className="max-w-6xl mx-auto ">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="heading-second text-center mb-5 md:mb-10"
        >
          Outstanding Features of Our Websites
        </motion.h2>

        {/* Tabs */}
        <div
          ref={tabsRef}
          className="flex md:flex-wrap flex-nowrap md:justify-center gap-3 mb-5 md:mb-10 overflow-x-auto md:overflow-visible pb-4 px-4"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => {
                setActive(tab.id);

                // Only scroll on mobile (screen width < 768px)
                if (window.innerWidth < 768 && tabsRef.current) {
                  const tabElement = document.getElementById(tab.id);
                  if (tabElement) {
                    // Scroll horizontally only inside the tabs container
                    const container = tabsRef.current;
                    const containerRect = container.getBoundingClientRect();
                    const tabRect = tabElement.getBoundingClientRect();

                    // Calculate how much to scroll to center the tab
                    const scrollLeft =
                      tabElement.offsetLeft -
                      container.offsetLeft -
                      container.clientWidth / 2 +
                      tabElement.clientWidth / 2;

                    container.scrollTo({
                      left: scrollLeft,
                      behavior: "smooth",
                    });
                  }
                }
              }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 tabing-heading rounded-full border transition-all whitespace-nowrap shrink-0 ${
                active === tab.id
                  ? "bg-[#5E9ED5] text-white border-none hover:border-[#5E9ED5]"
                  : "bg-[#ffffff] text-black border-none shadow-[0_2px_10px_rgb(201_201_201_/_45%)]"
              }`}
              id={tab.id}
            >
              {tab.icon}
              {tab.title}
            </motion.button>
          ))}
        </div>

        {/* Content Area */}
        <div className="relative overflow-hidden bg-white shadow-xl rounded-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab?.id}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 md:gap-6 gap-0 items-center"
            >
              {/* ✅ FIXED IMAGE RENDERING */}
              <motion.img
                key={activeTab?.image}
                src={activeTab?.image}
                alt={activeTab?.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full h-64 md:h-96 object-cover rounded-t-2xl md:rounded-t-none md:rounded-l-2xl"
              />

              <div className="p-6 ">
                {/* <h3 className="text-2xl font-semibold text-black mb-3 flex items-center gap-2">
                  {activeTab?.icon}
                  {activeTab?.title}
                </h3> */}
                <p className="text-black">{activeTab?.content}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
