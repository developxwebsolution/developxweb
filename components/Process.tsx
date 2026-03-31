"use client";

import { motion } from "framer-motion";
import Link from "next/link";
export interface Step {
  step: string;
  position: "left" | "right";
  title: string;
  description: string;
}

export interface LocationProcess {
  heading: string;
  subheading: string;
  themeColor: string;
  steps: Step[];
}

interface ProcessProps {
  content: LocationProcess;
}

export default function Process({ content }: ProcessProps) {
  const { heading, subheading, themeColor, steps } = content;

  return (
    <section className="process-section-style bg-[#cecececc]">
     

       {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-second text-center mb-5 md:mb-5"> {heading}</h2>
            <p className="second-heading-content text-center">{subheading}</p>
          </motion.div>
        </div>

      <div className="max-w-6xl mx-auto px-0 md:px-4">
        {steps.map((step, index) => (
          <Row
            key={index}
            step={step.step}
            position={step.position}
            title={step.title}
            description={step.description}
            last={index === steps.length - 1}
          />
        ))}
      </div>

      <div className="text-center mt-2 md:mt-[40px] pb-[40px] md:pb-5 "><Link className="process-btn" href="/contact">Get Started</Link></div>
    </section>
  );
}

interface RowProps {
  step: string;
  position: "left" | "right";
  last?: boolean;
  title?: string;
  description?: string;
}

function Row({ step, position, last, title, description }: RowProps) {
  const isLeft = position === "left";

  return (
    <div className="grid grid-cols-12 items-center pb-10 md:pb-0 mb-0 relative">
      {/* LEFT */}
      <div className="col-span-12 md:col-span-5 px-4 relative">
        {isLeft && (
          <>
            <ProcessBox step={step} left title={title} description={description} />
            <div className="process-line-l hidden md:block" />
          </>
        )}
      </div>

      {/* CENTER */}
      <div className="col-span-2 px-4 hidden md:flex justify-center relative">
        <div className={`process-point-${isLeft ? "right" : "left"} ${last ? "process-last" : ""}`} />
      </div>

      {/* RIGHT */}
      <div className="col-span-12 md:col-span-5 px-4 relative">
        {!isLeft && (
          <>
            <ProcessBox step={step} title={title} description={description} />
            <div className="process-line-r hidden md:block" />
          </>
        )}
      </div>
    </div>
  );
}

interface ProcessBoxProps {
  step: string;
  left?: boolean;
  title?: string;
  description?: string;
}

function ProcessBox({ step, left, title, description }: ProcessBoxProps) {
  return (
    <motion.div
      className={`process-box ${left ? "process-left" : "process-right"}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="grid grid-cols-12">
        <div className="col-span-5">
          <div className="process-step">
            <p>Step</p>
            <h2>{step}</h2>
          </div>
        </div>
        <div className="col-span-7 pt-3 pb-[10px] md:pb-[5px]">
          <h4 className="step-process-heading">{title || "What is Lorem Ipsum?"}</h4>
          <p className="step-process-content">
            {description || "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
