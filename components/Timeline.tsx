"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { Mouse } from "lucide-react";

interface TimelineEntry {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface TimelineItemProps {
  item: TimelineEntry;
  index: number;
  colorClass: string;
}

const timelineData: TimelineEntry[] = [
  {
    id: "Ep.1",
    title: "Requirement Gathering",
    description:
      "We start by understanding your business goals, target audience, and unique needs to create a clear project roadmap.",
    image: "/images/web-dev/gathering-requirement-img.jpg",
  },
  {
    id: "Ep.2",
    title: "Design & Planning",
    description:
      "Our creative team designs an engaging, user-friendly layout and plans the website structure for smooth navigation and functionality.",
    image: "/images/web-dev/design-and-planning.jpg",
  },
  {
    id: "Ep.3",
    title: "Development & Testing",
    description:
      "Using modern technologies, we develop your website with precision and rigorously test it to ensure performance, security, and responsiveness.",
    image: "/images/web-dev/dev-testing-img.jpg",
  },
  {
    id: "Ep.4",
    title: "Launch & Support",
    description:
      "After final approvals, we launch your website and provide continuous support, updates, and maintenance to keep it running seamlessly.",
    image: "https://placehold.co/600x400",
  },
];

const colors = ["bg-red-600", "bg-green-600", "bg-blue-600", "bg-yellow-600"];

function TimelineItem({ item, index, colorClass }: TimelineItemProps) {
  const ref = useRef<HTMLLIElement | null>(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <li
      ref={ref}
      className={`relative flex flex-col md:flex-row items-center justify-center px-[15px] lg:gap-30 gap-10 ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Step Number */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 z-20">
        <div
          className={`${colorClass} text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg`}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Image */}
      <motion.img
        src={item.image}
        alt={item.title}
        className="lg:w-[40%] w-full rounded"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* Description */}
      <motion.div
        className="lg:w-[40%] w-full rounded p-3 bg-gradient-to-r from-[#a1c4fd] to-[#c2e9fb] md:w-1/2"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <h3 className="text-xl font-bold">{item.title}</h3>
        <p className="mt-2">{item.description}</p>
      </motion.div>
    </li>
  );
}

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const arrowY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const springFill = useSpring(fillHeight, { stiffness: 100, damping: 20 });
  const springArrowY = useSpring(arrowY, { stiffness: 100, damping: 20 });

  return (
    <div ref={containerRef} className="relative mx-auto py-16  ">
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 w-1 h-full bg-gray-700 transform -translate-x-1/2 z-10">
        <motion.div
          className="absolute left-0 top-0 w-full bg-blue-500"
          style={{ height: springFill }}
        />
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 z-30 text-white"
          style={{
            top: springArrowY,
            translateY: "-60%",
            filter: "drop-shadow(0 0 4px rgba(0,0,0,0.7))",
            width: 30,
            height: 30,
          }}
        >
          <Mouse size={30} />
        </motion.div>
      </div>

      {/* Timeline items */}
      <ol className="space-y-32 relative z-20">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            index={index}
            colorClass={colors[index] || "bg-gray-600"}
          />
        ))}
      </ol>
    </div>
  );
}
