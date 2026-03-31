"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Users,
  Clock,
  Wrench,
  UserCheck,
  Building2,
} from "lucide-react";

const tabs = [
  {
    id: "market",   
    title: "Local Insight",
    icon: <MapPin size={22} />,
    image:
      "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&w=800&q=80",
    content:
      "A local web design company in Noida understands the city’s business environment, audience preferences, and digital trends. This insight helps create websites that appeal directly to local customers — blending cultural relevance with effective design strategies.",
  },
  {
    id: "collaboration",
    title: "Face-to-Face",
    icon: <Users size={22} />,
    image:
      "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=800&q=80",
    content:
      "Working with a local team allows you to hold in-person meetings and brainstorming sessions. This builds stronger communication, faster feedback loops, and a more collaborative design process — resulting in a website that truly represents your vision.",
  },
  {
    id: "turnaround",
    title: "Faster Turnaround",
    icon: <Clock size={22} />,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    content:
      "With no time zone barriers or long-distance communication gaps, a nearby design company can execute revisions and updates much faster. This ensures your project is completed efficiently — without unnecessary delays.",
  },
  {
    id: "support",
    title: "Local Support",
    icon: <Wrench size={22} />,
    image:
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80",
    content:
      "Post-launch maintenance becomes easier with a local partner who can respond quickly to technical issues, updates, or new feature requests. You get hands-on support whenever you need it, ensuring your website remains secure and updated.",
  },
  {
    id: "personalized",
    title: "Personalized Service",
    icon: <UserCheck size={22} />,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    content:
      "Unlike large agencies that treat every project the same, local design companies provide personalized attention. They take time to understand your goals, brand story, and audience — resulting in a more tailored and meaningful digital experience.",
  },
  {
    id: "economy",
    title: "Supporting Local Economy",
    icon: <Building2 size={22} />,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    content:
      "Choosing a Noida-based web design agency means investing in your own community. It supports local talent, fosters innovation, and contributes to the region’s growing digital ecosystem — strengthening businesses collectively.",
  },
];


export default function LocalDesignTabs() {
  const [active, setActive] = useState("market");
  const activeTab = tabs.find((tab) => tab.id === active);

  return (
    <section className="pb-20  px-[15px] md:px-[60px] " id="local-design-tabs">
      <div className="max-w-6xl mx-auto ">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="heading-second text-[32px] md:text-[40px] font-normal leading-[120%] text-center  mb-10"
        >
          Benefits of Local Design Company in{" "}
          <span className="text-[#5E9ED5]">Noida</span>
        </motion.h2>
 
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all text-sm font-medium ${
                active === tab.id
                  ? "bg-white text-black border-none shadow-[0_2px_10px_rgb(94_158_213_/_50%)]"
                  : "bg-[#5E9ED5] text-white border-none  hover:border-[#5E9ED5]"
              }`}
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
              className="grid md:grid-cols-2 gap-6 items-center"
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

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-black mb-3 flex items-center gap-2">
                  {activeTab?.icon}
                  {activeTab?.title}
                </h3>
                <p className="text-black leading-relaxed">
                  {activeTab?.content}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
