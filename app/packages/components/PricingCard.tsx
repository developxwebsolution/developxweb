"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { PricingPlan } from "@/data/pricingData";
// import { Link } from "lucide-react";
import Link from "next/link";
export default function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className={clsx(
        "relative rounded-2xl p-7 backdrop-blur-xl border",
        "bg-white/70 shadow-[5px_7px_12.09px_-5.09px_rgba(0,0,0,0.2)] hover:shadow-[5px_7px_12.09px_-5.09px_rgba(0,0,0,0.4)]",
        plan.popular
          ? "border-[#5E9ED5] border-2"
          : "border-gray-200"
      )}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#5E9ED5] text-white  font-semibold px-4 py-1 rounded-full shadow-md">
          Most Popular
        </span>
      )}

      {/* Header */}
     <div className="flex justify-between align-middle mb-2  items-center">
       <h3 className=" text-[18px] font-semibold items-start">{plan.title}</h3>
       <span className="bg-[#dddddd80] p-2 text-[12px]  rounded-xl text-center text-black">{plan.pages}</span>
    
     </div>
      <span className=" text-black text-[16px] mb-3">{plan.description}</span>

      {/* Price */}
      <div className="mb-4 mt-4">
        <h2 className="text-4xl font-extrabold bg-[#5E9ED5] bg-clip-text text-transparent [text-shadow:5px_7px_12.09px_-5.09px_rgba(0,0,0,0.2)]">
          <small className="bg-[gray] text-[16px] bg-clip-text">₹ </small>{plan.price} <span className="bg-[gray] text-[16px] bg-clip-text"><small> +18% GST</small></span>
        </h2>
       
      </div>

      {/* Technologies */}
      <div className="mb-3 pt-2 border-t-1 border-[#bdbdbd]">
        <p className=" font-semibold text-black mb-2">
          Technology
        </p>
        <div className="flex flex-wrap gap-2">
          {plan.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-[12px] rounded-full bg-gray-100 border-[#5E9ED5] border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Reference Websites */}
      <div className="mb-3 pt-2 border-t-1 border-[#bdbdbd]">
        <p className=" font-semibold text-black mb-2">
          Reference Websites
        </p>
        <div className="flex flex-wrap gap-2">
          {plan.references.map((ref) => (
            <Link
            target="_blank"
            href={ref.link}
              key={ref.label}
              className="px-2 py-1 text-[12px] rounded-full bg-white border border-[#5E9ED5] shadow-sm"
            >
              {ref.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Demo Links */}
      {/* <div className="mb-3 pt-2 border-t-1 border-[#bdbdbd]">
        <p className="text-[16px] font-semibold text-black mb-2">
          Demo Links
        </p>
        <div className="flex flex-wrap gap-2">
          {plan.demos.map((demo) => (
            <Link
            href={demo.link}
              key={demo.label}
              className="px-2 py-1 text-[12px] cursor-pointer rounded-full border border-[#5E9ED5] bg-gray-50 hover:bg-gray-100 transition"
            >
              {demo.label}
            </Link>
          ))}
        </div>
      </div> */}

      {/* CTA */}
    <Link
  href="/contact"
  className="w-full view-all-btn mb-3 mt-3 inline-block text-center"
>
  Order Now
</Link>


      {/* Features */}
      {/* <ul className="space-y-3  text-sm text-black">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <span className="h-2 w-2 mt-2 rounded-full bg-[#5E9ED5]" />
            {feature}
          </li>
        ))}
      </ul> */}
      <ul className="space-y-2 text-sm text-black max-h-[220px] overflow-y-auto pr-2">
  {plan.features.map((feature) => (
    <li key={feature} className="flex gap-3">
      <span className="h-2 w-2 mt-2 rounded-full bg-[#5E9ED5] shrink-0" />
      <span className="leading-relaxed">{feature}</span>
    </li>
  ))}
</ul>

    </motion.div>
  );
}
