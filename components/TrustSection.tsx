"use client";

import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useRef } from "react";

// Stat item type
type StatItemData = {
  end: number;
  suffix: string;
  label: string;
  color: string;
};

// Props type
type TrustSectionProps = {
  content: {
    heading: string;
    description: string;
    stats: StatItemData[];
  };
};

export default function TrustSection({ content }: TrustSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative section-style bg-[#0f1115] overflow-hidden">
      <div className="absolute inset-0 bg-black/60" />

      <div ref={ref} className="relative z-10 mx-auto mt-0 pb-15">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-second our-trust-heading text-white mb-6">{content.heading}</h2>
            <p className="text-white max-w-md">{content.description}</p>
          </motion.div>

          {/* RIGHT STATS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* DESKTOP GRID */}
            <div className="hidden lg:block relative">
              <div className="grid grid-cols-3 gap-10 relative pb-12">
                <span className="absolute left-1/3 top-0 bottom-0 w-px bg-white/30" />
                <span className="absolute left-2/3 top-0 bottom-0 w-px bg-white/30" />
                <span className="absolute left-0 right-0 bottom-0 h-px bg-white/30" />

                {content.stats.slice(0, 3).map((item, i) => (
                  <StatItem key={i} item={item} isInView={isInView} />
                ))}
              </div>

              <div className="grid grid-cols-2 gap-10 relative max-w-md mx-auto">
                <span className="absolute left-1/2 top-0 bottom-0 w-px bg-white/30" />

                {content.stats.slice(3).map((item, i) => (
                  <StatItem key={i} item={item} isInView={isInView} />
                ))}
              </div>
            </div>

            {/* MOBILE STACK */}
            <div className="relative grid grid-cols-2 gap-8 lg:hidden pt-6">
              <span className="absolute left-1/2 top-0 bottom-0 w-px bg-white/30" />
              <span className="absolute left-0 right-0 top-1/3 h-px bg-white/30" />
              <span className="absolute left-0 right-0 top-2/3 h-px bg-white/30" />

              {content.stats.map((item, i) => (
                <StatItem key={i} item={item} isInView={isInView} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Reusable Stat Item ---------- */
function StatItem({ item, isInView }: { item: StatItemData; isInView: boolean }) {
  return (
    <div className="text-center mb-12 md:mb-0">
      <h3 className={`text-4xl md:mt-12 font-bold mb-2 ${item.color}`}>
        {isInView && <CountUp start={0} end={item.end} duration={2} />}
        {item.suffix}
      </h3>
      <p className="text-white whitespace-pre-line">{item.label}</p>
    </div>
  );
}
