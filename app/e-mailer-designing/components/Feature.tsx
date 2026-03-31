"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock3, TrendingUp, BadgeCheck, Shield } from "lucide-react";

const tabs = [
  {
    id: "market",
    title: "Fast & Effective Communication",
    icon: <Clock3 size={22} />,
    image: "/images/E-mailerDesigning/Fast-Effective-Communication.jpg",
    content:
      "Our emailers are designed to communicate your message instantly and with maximum clarity. Whether you're announcing a sale, a new service, or an upcoming event, your audience receives the information quickly and in a way that grabs attention at the right moment.",
  },
  {
    id: "High-Conversion-Design",
    title: "High Conversion Design",
    icon: <TrendingUp size={22} />,
    image: "/images/E-mailerDesigning/High-Conversion-Design.jpg",
    content:
      "Every emailer layout follows a strategic structure built around user psychology. From clear call-to-action buttons to organized content flow and eye-catching visuals, each element works together to encourage more clicks, higher engagement, and better results.",
  },

  {
    id: "Brand-Focused-Visuals",
    title: "Brand-Focused Visuals",
    icon: <BadgeCheck size={22} />,
    image: "/images/E-mailerDesigning/Brand-Focused-Visuals.jpg",
    content:
      "Consistency builds trust. We make sure every emailer reflects your brand identity — from color schemes and fonts to tone and imagery. Your audience instantly recognizes who the message is from, enhancing professionalism and brand recall.",
  },

  {
    id: "Spam-Safe-Deliverability-Friendly",
    title: "Spam-Safe & Deliverability-Friendly",
    icon: <Shield size={22} />,
    image: "/images/E-mailerDesigning/Spam-Safe-Deliverability-Friendly.jpg",
    content:
      "Our designs follow industry-standard guidelines to reduce the chance of emails landing in spam. From optimized text-to-image ratios to proper formatting, we make sure your campaign reaches your audience’s inbox — not their spam folder.",
  },
];

export default function Feature() {
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
