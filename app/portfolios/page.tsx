"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
// import ModalForm from "@/components/ModalForm";
import { Home, ChevronRight } from "lucide-react";
import { FileText } from "lucide-react";

import type { LucideIcon } from "lucide-react";
import {
  LayoutGrid,
  ShoppingCart,
  Briefcase,
  Cpu,
  Factory,
  Building2,
  HeartPulse,
  GraduationCap,
  Plane,
  Landmark,
  HandHeart,
  Wallet,
  Megaphone,
} from "lucide-react";

/* =========================
   TYPES
========================= */
interface PortfolioItem {
  title: string;
  image: string;
  id: string[];
  tags: string[];
  tech: string[];
  link: string;
  flag: string;
}

/* =========================
   PORTFOLIO DATA
========================= */
const portfolioData: PortfolioItem[] = [
  {
    title: "nitrd.nic.in",
    image: "/images/portfolio/1nitrd-portfolio-India.webp",
    id: ["Top Projects"],
    tags: ["Government", "HealthCare"],
    tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://nitrd.nic.in/",
  },
   {
     title: "Group Colleges Australia",
    image: "/images/portfolio/5GCA-Austrelia.webp",
    id: ["Top Projects"],
     tags: ["Education"],
    tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇦🇺",
    link: "https://www.gca.edu.au/",
  },
   {
    title: "Intraglobe HR",
    image: "/images/portfolio/4intraglobe-Saudi-Arabia.webp",
    id: ["Top Projects"],
    tags: ["Corporate"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇸🇦",
    link: "https://intraglobehr.com/",
  },
  {
     title: "Snowy Vacation Homes",
    image: "/images/portfolio/3snowy-vacation-home-dubai.webp",
    id: ["Top Projects"],
     tags: ["Real Estate"],
    tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇦🇪",
    link: "https://snowyvacationhomes.com/",
  },
  {
    title: "Hardicon Limited",
    image: "/images/portfolio/top/itforcitizen.jpg",
    id: ["Top Projects"],
    tags: ["NGOs"],
    tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://itforcitizen.org/",
  },
  {
    title: "Bellotta",
    image: "/images/portfolio/top/billota.jpg",
    id: ["Top Projects"],
    tags: ["eCommerce"],
    tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://bellotta.in/",
  },
   {
    title: "Relieka Healthcare",
    image: "/images/portfolio/healthcare/relieka-health-care.jpg",
    id: ["Top Projects"],
    tags: ["Healthcare"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://reliekahealthcare.com/",
  },
{
    title: "Prabhu Shriram",
    image: "/images/portfolio/eCommerce/prabhu-shriram.jpg",
    id: ["Top Projects"],
    tags: ["eCommerce"],
   tech: ["Html", "CSS", "JavaScript",  "Php", "WooCommerce"],
    flag: "🇮🇳",
    link: "https://prabhushriram.com/",
  },
   {
    title: "Evolv3 AI",
    image: "/images/portfolio/6evolv3ai-USA.webp",
    id: ["Top Projects"],
    tags: ["IT & Technology"],
   tech: ["Html", "CSS", "JavaScript", "Php","WordPress"],
    flag: "🇺🇸",
    link: "https://aievolv3.com/",
  },
    {
    title: "Astra Edgex",
    image: "/images/portfolio/astra-edgex.webp",
    id: ["Top Projects"],
    tags: ["IT & Technology"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://astraedgex.com/",
  },
  {
    title: "Aeron Space Design",
    image: "/images/portfolio/top/Aeron-Space-Design.jpg",
    id: ["Top Projects"],
    tags: ["Real Estate"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://aeronspacedesign.com/",
  },
  {
    title: "Nisti Regd",
    image: "/images/portfolio/top/NISTI.jpg",
    id: ["Top Projects"],
    tags: ["Textile", "NGOs"],
    tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://nistiregd.in/",
  },
// end Top Projects items
// eductation
 {
     title: "Group Colleges Australia",
    image: "/images/portfolio/5GCA-Austrelia.webp",
    id: ["Education"],
     tags: ["Education"],
    tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇦🇺",
    link: "https://www.gca.edu.au/",
  },

  // 
 {
     title: "Be Cre8v",
    image: "/images/portfolio/education/Be-Cre8v.jpg",
    id: ["Education"],
     tags: ["Education"],
    tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://becre8v.com/",
  },

 {
     title: "CertEra",
    image: "/images/portfolio/education/cert-era.jpg",
    id: ["Education"],
     tags: ["Education"],
    tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://certera.co/",
  },
 {
     title: "Ignited Brainz",
    image: "/images/portfolio/education/Ignited-Brainz.jpg",
    id: ["Education"],
     tags: ["Education"],
    tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://ignitedbrainz.in/",
  },
 {
     title: "Analytics With Mehboob",
    image: "/images/portfolio/education/Analytics.jpg",
    id: ["Education"],
     tags: ["Education"],
    tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://analyticswithmehboob.com/",
  },
 {
     title: "Edupath Academy",
    image: "/images/portfolio/education/edupath-academy.jpg",
    id: ["Education"],
     tags: ["Education"],
    tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://edupathacademy.com/",
  },
 {
     title: "BPAS Publications",
    image: "/images/portfolio/education/BPAS.jpg",
    id: ["Education"],
     tags: ["Education"],
    tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://bpaspublications.com/",
  },
 {
     title: "The Excellent Solutions",
    image: "/images/portfolio/education/The-Excellent-Solutions.jpg",
    id: ["Education"],
     tags: ["Education"],
    tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://www.theexcellentsolutions.com/",
  },


  // travel 
 {
     title: "Dream Vacation Trip",
    image: "/images/portfolio/travel/Dream-vacation.jpg",
    id: ["Travel"],
     tags: ["Travel"],
    tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://dreamvacationtrip.com/",
  },
 {
     title: "Electric Enduro",
    image: "/images/portfolio/travel/Electric-Enduro.jpg",
    id: ["Travel"],
     tags: ["Travel"],
    tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇨🇾",
    link: "https://electricenduro.com/",
  },
 {
     title: "SR Destination",
    image: "/images/portfolio/travel/SR-Destination.jpg",
    id: ["Travel"],
     tags: ["Travel"],
    tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://www.srdestination.com/",
  },

  // Real Estate
 {
     title: "Snowy Vacation Homes",
    image: "/images/portfolio/3snowy-vacation-home-dubai.webp",
    id: ["Real Estate"],
     tags: ["Real Estate"],
    tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇦🇪",
    link: "https://snowyvacationhomes.com/",
  },
 {
     title: "NCR Concrete",
    image: "/images/portfolio/realestate/NCR-Concrete.jpg",
    id: ["Real Estate"],
     tags: ["Real Estate"],
    tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://ncrconcrete.com/",
  },
 {
     title: "Steel Detailing Firm",
    image: "/images/portfolio/realestate/SDF.jpg",
    id: ["Real Estate"],
     tags: ["Real Estate"],
    tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://steeldetailingfirm.com/",
  },
  {
    title: "Aeron Space Design",
    image: "/images/portfolio/top/Aeron-Space-Design.jpg",
   id: ["Real Estate"],
    tags: ["Real Estate"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://aeronspacedesign.com/",
  },
  {
    title: "ApnaFlat",
    image: "/images/portfolio/realestate/apna-flat.jpg",
    id: ["Real Estate"],
    tags: ["Real Estate"],
   tech: ["Html", "CSS", "JavaScript", "Php", ],
    flag: "🇮🇳",
    link: "https://apnaflat.com/",
  },
  {
    title: "SRSA Decor",
    image: "/images/portfolio/realestate/SRS-Decor.jpg",
   id: ["Real Estate"],
    tags: ["Real Estate"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://srsadecor.in/",
  },

  // IT & Technology
  {
    title: "Astra Edgex",
    image: "/images/portfolio/astra-edgex.webp",
    id: ["IT & Technology"],
    tags: ["IT & Technology"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://astraedgex.com/",
  },
  {
    title: "RiReTech",
    image: "/images/portfolio/it-technology/RiRetech.jpg",
    id: ["IT & Technology"],
    tags: ["IT & Technology"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://riretech.com/",
  },
  {
    title: "Fuzones",
    image: "/images/portfolio/it-technology/Fuzone.jpg",
    id: ["IT & Technology"],
    tags: ["IT & Technology"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://fuzones.com/",
  },
  {
    title: "Dizipay Group",
    image: "/images/portfolio/it-technology/Dizipay.jpg",
    id: ["IT & Technology"],
    tags: ["IT & Technology"],
   tech: ["Html", "CSS", "JavaScript", "Php",],
    flag: "🇮🇳",
    link: "https://dizipaygroup.in/",
  },
  {
    title: "Vega Technologies",
    image: "/images/portfolio/it-technology/Vega-technology.jpg",
    id: ["IT & Technology"],
    tags: ["IT & Technology"],
   tech: ["Html", "CSS", "JavaScript", "Php",],
    flag: "🇮🇳",
    link: "https://vegatechnologies.co.in/",
  },
  {
    title: "AI-TECH TIDE",
    image: "/images/portfolio/it-technology/AI-TECH-TIDE.jpg",
    id: ["IT & Technology"],
    tags: ["IT & Technology"],
   tech: ["Html", "CSS", "JavaScript", "Php","WordPress"],
    flag: "🇮🇳",
    link: "https://ai-techtide.com/",
  },
  {
    title: "MK Enterprises",
    image: "/images/portfolio/it-technology/MK-Enterprises.jpg",
    id: ["IT & Technology"],
    tags: ["IT & Technology"],
   tech: ["Html", "CSS", "JavaScript", "Php","WordPress"],
    flag: "🇮🇳",
    link: "https://enterprisesmk.in/",
  },
  {
    title: "Evolv3 AI",
    image: "/images/portfolio/6evolv3ai-USA.webp",
    id: ["IT & Technology"],
    tags: ["IT & Technology"],
   tech: ["Html", "CSS", "JavaScript", "Php","WordPress"],
    flag: "🇺🇸",
    link: "https://aievolv3.com/",
  },
  {
    title: "T-TEG",
    image: "/images/portfolio/it-technology/T-TEG.jpg",
    id: ["IT & Technology"],
    tags: ["IT & Technology"],
   tech: ["Html", "CSS", "JavaScript", "Php","WordPress"],
    flag: "🇮🇳",
    link: "https://t-teg.com/",
  },
  {
    title: "Zenith HK Ltd",
    image: "/images/portfolio/it-technology/Zenith.jpg",
    id: ["IT & Technology"],
    tags: ["IT & Technology"],
   tech: ["Html", "CSS", "JavaScript", "Php","WordPress"],
    flag: "🇮🇳",
    link: "https://zenithhkltd.com/",
  },

  // finance
  {
    title: "Philanzel India",
    image: "/images/portfolio/9philanzel-portfolio-India.webp",
    id: ["Finance"],
    tags: ["Finance"],
   tech: ["Html", "CSS", "JavaScript", "Php"],
    flag: "🇮🇳",
    link: "https://philanzel.com/",
  },
  {
    title: "TaxFin",
    image: "/images/portfolio/finance/taxfin.jpg",
    id: ["Finance"],
    tags: ["Finance"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://taxfin.co.in/",
  },
  {
    title: "Lifeboat RMS",
    image: "/images/portfolio/finance/life-boat.jpg",
    id: ["Finance"],
    tags: ["Finance"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://lifeboatrms.com/",
  },



// healthcare
  {
    title: "nitrd.nic.in",
    image: "/images/portfolio/1nitrd-portfolio-India.webp",
    id: ["Healthcare"],
    tags: ["Healthcare"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://nitrd.nic.in/",
  },
  {
    title: "Relieka Healthcare",
    image: "/images/portfolio/healthcare/relieka-health-care.jpg",
    id: ["Healthcare"],
    tags: ["Healthcare"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://reliekahealthcare.com/",
  },
  {
    title: "The Scrub Life",
    image: "/images/portfolio/healthcare/the-scrub-life.jpg",
    id: ["Healthcare"],
    tags: ["Healthcare"],
   tech: ["Html", "CSS", "JavaScript","Shopify"],
    flag: "🇮🇳",
    link: "https://shopthescrublife.com/",
  },
  {
    title: "Phoebus Laser",
    image: "/images/portfolio/healthcare/phoebus-laser.jpg",
    id: ["Healthcare"],
    tags: ["Healthcare"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://phoebuslaser.com/",
  },
  {
    title: "Healthanza",
    image: "/images/portfolio/healthcare/health-anza.jpg",
    id: ["Healthcare"],
    tags: ["Healthcare"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://healthanza.com/",
  },
  {
    title: "Uronic Drug",
    image: "/images/portfolio/healthcare/uronic-drugs.jpg",
    id: ["Healthcare"],
    tags: ["Healthcare"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://uronicdrug.com/",
  },
  {
    title: "MedPro Biotech",
    image: "/images/portfolio/healthcare/medpro-biotech.jpg",
    id: ["Healthcare"],
    tags: ["Healthcare"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://medprobiotech.com/",
  },

  // NGOs
  {
    title: "Hardicon Limited",
    image: "/images/portfolio/top/itforcitizen.jpg",
    id: ["NGOs"],
    tags: ["NGOs"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://itforcitizen.org/",
  },
  {
    title: "Ardhnari Foundation",
    image: "/images/portfolio/ngos/ardhnari-foundation.jpg",
    id: ["NGOs"],
    tags: ["NGOs"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://ardhnarifoundation.org/",
  },
  {
    title: "Nisti Regd",
    image: "/images/portfolio/top/NISTI.jpg",
    id: ["NGOs"],
    tags: ["NGOs"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://nistiregd.in/",
  },
  {
    title: "RVAKV",
    image: "/images/portfolio/ngos/r.v.a.k.jpg",
    id: ["NGOs"],
    tags: ["NGOs"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://rvakv.org/",
  },
  {
    title: "Jeevan Care Trust",
    image: "/images/portfolio/ngos/jeevan-care-trust.jpg",
    id: ["NGOs"],
    tags: ["NGOs"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://jeevancaretrust.org/",
  },
// Manufacturing 

  {
    title: "E & P Enterprises",
    image: "/images/portfolio/manufacturing/e-p.jpg",
    id: ["Manufacturing"],
    tags: ["Manufacturing"],
   tech: ["Html", "CSS", "JavaScript", "Php",],
    flag: "🇮🇳",
    link: "https://enp.co.in/",
  },
  {
    title: "Laser Job Work",
    image: "/images/portfolio/manufacturing/laser-job-work.jpg",
    id: ["Manufacturing"],
    tags: ["Manufacturing"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://www.laserjobwork.in/",
  },
  {
    title: "Modex Hardware",
    image: "/images/portfolio/manufacturing/modex-hardware.jpg",
    id: ["Manufacturing"],
    tags: ["Manufacturing"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://modexhardware.com/",
  },
  {
    title: "Modex Hardware",
    image: "/images/portfolio/manufacturing/modex-hardware.jpg",
    id: ["Manufacturing"],
    tags: ["Manufacturing"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://modexhardware.com/",
  },
  {
    title: "SVG International",
    image: "/images/portfolio/top/svg-international-Pvt-Ltd.jpg",
    id: ["Manufacturing"],
    tags: ["Manufacturing"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://svgintl.com/",
  },
  {
    title: "H2 Power System",
    image: "/images/portfolio/manufacturing/h2-power.jpg",
    id: ["Manufacturing"],
    tags: ["Manufacturing"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://h2powersystem.com/",
  },
  {
    title: "Waterio TransTech",
    image: "/images/portfolio/manufacturing/waterio-transtech.jpg",
    id: ["Manufacturing"],
    tags: ["Manufacturing"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://wateriotranstech.com/",
  },
  {
    title: "Surolia Enterprises",
    image: "/images/portfolio/manufacturing/surolia-enterprises.jpg",
    id: ["Manufacturing"],
    tags: ["Manufacturing"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://suroliaenterprises.com/",
  },
  {
    title: "AVJ Engineering",
    image: "/images/portfolio/manufacturing/avj.jpg",
    id: ["Manufacturing"],
    tags: ["Manufacturing"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://avjengg.com/",
  },
  {
    title: "Aryan Laser Cut Private Limited",
    image: "/images/portfolio/manufacturing/aryan-laser-cutting.jpg",
    id: ["Manufacturing"],
    tags: ["Manufacturing"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://metalcuttingnoida.com/",
  },
  {
    title: "Greet Choice",
    image: "/images/portfolio/manufacturing/greet-chice.jpg",
    id: ["Manufacturing"],
    tags: ["Manufacturing"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://greetchoice.com/",
  },
  {
    title: "Anyon",
    image: "/images/portfolio/manufacturing/anyon.jpg",
    id: ["Manufacturing"],
    tags: ["Manufacturing"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://anyon.co.in/",
  },
  {
    title: "Rotoflex Engineering ",
    image: "/images/portfolio/manufacturing/rotoflex-engineering.jpg",
    id: ["Manufacturing"],
    tags: ["Manufacturing"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://rotoflexengineering.com/",
  },

  // Advertising

 {
    title: "Hoarding Champ",
    image: "/images/portfolio/advertising/hoarding-champ.jpg",
    id: ["Advertising"],
    tags: ["Advertising"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://hoardingchamp.com/",
  },
 {
    title: "Cut1 Media Agency",
    image: "/images/portfolio/advertising/cut1.jpg",
    id: ["Advertising"],
    tags: ["Advertising"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇬🇧",
    link: "https://cut1.agency/",
  },
 {
    title: "Printing Dial",
    image: "/images/portfolio/advertising/printing-dial.jpg",
    id: ["Advertising"],
    tags: ["Advertising"],
   tech: ["Html", "CSS", "JavaScript", "Php",],
    flag: "🇮🇳",
    link: "https://printingdial.com/",
  },
 
 {
    title: "Electric Enduro",
    image: "/images/portfolio/travel/Electric-Enduro.jpg",
    id: ["Advertising"],
    tags: ["Advertising"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇨🇾",
    link: "https://electricenduro.com/",
  },
 {
    title: "Creative Print Media",
    image: "/images/portfolio/advertising/creative-print-media.jpg",
    id: ["Advertising"],
    tags: ["Advertising"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://creativeprintmedia.in/",
  },


  // corporate
 {
    title: "Intraglobe HR",
    image: "/images/portfolio/4intraglobe-Saudi-Arabia.webp",
    id: ["Corporate"],
    tags: ["Corporate"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇸🇦",
    link: "https://intraglobehr.com/",
  },
 {
    title: "Evolv3 AI",
    image: "/images/portfolio/6evolv3ai-USA.webp",
    id: ["Corporate"],
    tags: ["Corporate"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇺🇸",
    link: "https://aievolv3.com/",
  },
 {
    title: "SBM Bharti",
    image: "/images/portfolio/8sbm-bharti-portfolio.webp",
    id: ["Corporate"],
    tags: ["Corporate"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://sbmbharti.com/",
  },
 {
    title: "Lifeway Career",
    image: "/images/portfolio/corporate/life-way-career.jpg",
    id: ["Corporate"],
    tags: ["Corporate"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://lifewaycareer.com/",
  },
 {
    title: "COSMO Analytical Lab",
    image: "/images/portfolio/corporate/cosmo-analytical-lab.jpg",
    id: ["Corporate"],
    tags: ["Corporate"],
   tech: ["Html", "CSS", "JavaScript", "Php",],
    flag: "🇮🇳",
    link: "https://cosmoanalytical.com/",
  },
 {
    title: "Rajeev Chadda",
    image: "/images/portfolio/corporate/rajeev-chadda.jpg",
    id: ["Corporate"],
    tags: ["Corporate"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://rajeevchadha.com/",
  },
 {
    title: "Cool Summer Enterprises",
    image: "/images/portfolio/corporate/cool-summer-enterprises.jpg",
    id: ["Corporate"],
    tags: ["Corporate"],
   tech: ["Html", "CSS", "JavaScript", "Php"],
    flag: "🇮🇳",
    link: "https://coolsummerenterprises.com/",
  },
 {
    title: "I-Brainz NRI Services",
    image: "/images/portfolio/corporate/I-brainz-nri-services.jpg",
    id: ["Corporate"],
    tags: ["Corporate"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://ibrainznriservices.com/",
  },
 {
    title: "Buston Elevator",
    image: "/images/portfolio/corporate/buston-elivator.jpg",
    id: ["Corporate"],
    tags: ["Corporate"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://bustonelevator.com/",
  },
 {
    title: "NewIndiaServices",
    image: "/images/portfolio/corporate/new-india-services.jpg",
    id: ["Corporate"],
    tags: ["Corporate"],
   tech: ["Html", "CSS", "JavaScript", "Php"],
    flag: "🇮🇳",
    link: "https://newindiaservices.in/",
  },
 {
    title: "Vishwakarma RO",
    image: "/images/portfolio/corporate/vishkarma-ro.jpg",
    id: ["Corporate"],
    tags: ["Corporate"],
   tech: ["Html", "CSS", "JavaScript", "Php"],
    flag: "🇮🇳",
    link: "https://vishwakarmarofilter.com/",
  },
 {
    title: "Silex Solution",
    image: "/images/portfolio/corporate/silex-solutions.jpg",
    id: ["Corporate"],
    tags: ["Corporate"],
   tech: ["Html", "CSS", "JavaScript", "Php"],
    flag: "🇮🇳",
    link: "https://silexsolution.com/",
  },





  // textile
 {
    title: "Nisti Regd",
    image: "/images/portfolio/top/NISTI.jpg",
    id: ["Textile"],
    tags: ["Textile"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://nistiregd.in/",
  },
 {
    title: "Sylk Online Store",
    image: "/images/portfolio/textile/sylk.jpg",
    id: ["Textile"],
    tags: ["Textile"],
   tech: ["Html", "CSS", "JavaScript", "Shopify"],
    flag: "🇮🇳",
    link: "https://www.sylkonlinestore.com/",
  },
 {
    title: "The Scrub Life",
    image: "/images/portfolio/healthcare/the-scrub-life.jpg",
    id: ["Textile"],
    tags: ["Textile"],
   tech: ["Html", "CSS", "JavaScript", "Shopify"],
    flag: "🇮🇳",
    link: "https://shopthescrublife.com/",
  },
 {
    title: "Stitch Monkey",
    image: "/images/portfolio/textile/stitch-monkey.jpg",
    id: ["Textile"],
    tags: ["Textile"],
   tech: ["Html", "CSS", "JavaScript", "Shopify"],
    flag: "🇮🇳",
    link: "https://stitchmonkey.in/",
  },
 {
    title: "Hide Fashion",
    image: "/images/portfolio/textile/nxt-gen.jpg",
    id: ["Textile"],
    tags: ["Textile"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://hidefashion.com/",
  },
 {
    title: "Dr. Darlie Koshy",
    image: "/images/portfolio/textile/darlie-koshy.jpg",
    id: ["Textile"],
    tags: ["Textile"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://darliekoshy.com/",
  },
 {
    title: "Shaurya Enterprise",
    image: "/images/portfolio/textile/shaurya-enterprise.jpg",
    id: ["Textile"],
    tags: ["Textile"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress"],
    flag: "🇮🇳",
    link: "https://shauryaenterprise.co.in/",
  },
 {
    title: "Broiden",
    image: "/images/portfolio/textile/broiden.jpg",
    id: ["Textile"],
    tags: ["Textile"],
   tech: ["Html", "CSS", "JavaScript",  "Shopify"],
    flag: "🇮🇳",
    link: "https://broiden.com/",
  },
 {
    title: "Mehbel",
    image: "/images/portfolio/textile/mehbel.jpg",
    id: ["Textile"],
    tags: ["Textile"],
   tech: ["Html", "CSS", "JavaScript",  "Shopify"],
    flag: "🇮🇳",
    link: "https://mehbel.com/",
  },
 {
    title: "BNBE",
    image: "/images/portfolio/textile/bnbe.jpg",
    id: ["Textile"],
    tags: ["Textile"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress",],
    flag: "🇮🇳",
    link: "https://bnbe.in/",
  },
 {
    title: "Ankit Uniforms",
    image: "/images/portfolio/textile/ankit-uniform.jpg",
    id: ["Textile"],
    tags: ["Textile"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress",],
    flag: "🇮🇳",
    link: "https://ankituniforms.com/",
  },

  // eCommerce
 {
    title: "Sylk Online Store",
    image: "/images/portfolio/textile/sylk.jpg",
    id: ["eCommerce"],
    tags: ["eCommerce"],
   tech: ["Html", "CSS", "JavaScript", "Shopify"],
    flag: "🇮🇳",
    link: "https://www.sylkonlinestore.com/",
  },
 {
    title: "Cherish Box",
    image: "/images/portfolio/eCommerce/cherish-box.jpg",
    id: ["eCommerce"],
    tags: ["eCommerce"],
   tech: ["Html", "CSS", "JavaScript", "Shopify"],
    flag: "🇮🇳",
    link: "https://cherishbox.in/",
  },
    {
    title: "The Scrub Life",
    image: "/images/portfolio/healthcare/the-scrub-life.jpg",
    id: ["eCommerce"],
    tags: ["eCommerce"],
   tech: ["Html", "CSS", "JavaScript","Shopify"],
    flag: "🇮🇳",
    link: "https://shopthescrublife.com/",
  },
    {
    title: "Noorkari",
    image: "/images/portfolio/eCommerce/noorkari.jpg",
    id: ["eCommerce"],
    tags: ["eCommerce"],
   tech: ["Html", "CSS", "JavaScript","Shopify"],
    flag: "🇮🇳",
    link: "https://noorkari.com/",
  },
   {
    title: "Stitch Monkey",
    image: "/images/portfolio/textile/stitch-monkey.jpg",
    id: ["eCommerce"],
    tags: ["eCommerce"],
   tech: ["Html", "CSS", "JavaScript", "Shopify"],
    flag: "🇮🇳",
    link: "https://stitchmonkey.in/",
  },
   {
    title: "Bulk Ben",
    image: "/images/portfolio/eCommerce/bulkben.jpg",
    id: ["eCommerce"],
    tags: ["eCommerce"],
   tech: ["Html", "CSS", "JavaScript", "Shopify"],
    flag: "🇮🇳",
    link: "https://bulkben.com/",
  },
   {
    title: "Elegante Kids",
    image: "/images/portfolio/eCommerce/elegant.jpg",
    id: ["eCommerce"],
    tags: ["eCommerce"],
   tech: ["Html", "CSS", "JavaScript", "Shopify"],
    flag: "🇮🇳",
    link: "https://elegantekids.in/",
  },
   {
    title: "Takshay Engineering Works",
    image: "/images/portfolio/eCommerce/neon-pixel.jpg",
    id: ["eCommerce"],
    tags: ["eCommerce"],
   tech: ["Html", "CSS", "JavaScript", "Shopify"],
    flag: "🇮🇳",
    link: "https://neopixels.in/",
  },
   {
    title: "PSYGN",
    image: "/images/portfolio/eCommerce/psygn.jpg",
    id: ["eCommerce"],
    tags: ["eCommerce"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WooCommerce"],
    flag: "🇮🇳",
    link: "https://psygn.in/",
  },
   {
    title: "Broiden",
    image: "/images/portfolio/textile/broiden.jpg",
    id: ["eCommerce"],
    tags: ["eCommerce"],
   tech: ["Html", "CSS", "JavaScript",  "Shopify"],
    flag: "🇮🇳",
    link: "https://broiden.com/",
  },
{
    title: "Mehbel",
    image: "/images/portfolio/textile/mehbel.jpg",
    id: ["eCommerce"],
    tags: ["eCommerce"],
   tech: ["Html", "CSS", "JavaScript",  "Shopify"],
    flag: "🇮🇳",
    link: "https://mehbel.com/",
  },
{
    title: "Prabhu Shriram",
    image: "/images/portfolio/eCommerce/prabhu-shriram.jpg",
    id: ["eCommerce"],
    tags: ["eCommerce"],
   tech: ["Html", "CSS", "JavaScript",  "Php", "WooCommerce"],
    flag: "🇮🇳",
    link: "https://prabhushriram.com/",
  },
{
    title: "Seerat Shop",
    image: "/images/portfolio/eCommerce/seerat.jpg",
    id: ["eCommerce"],
    tags: ["eCommerce"],
   tech: ["Html", "CSS", "JavaScript",  "Php", "WooCommerce"],
    flag: "🇮🇳",
    link: "https://seerat.shop/",
  },
{
    title: "MedPro Biotech",
    image: "/images/portfolio/healthcare/medpro-biotech.jpg",
    id: ["eCommerce"],
    tags: ["eCommerce"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WooCommerce"],
    flag: "🇮🇳",
    link: "https://medprobiotech.com/",
  },
 {
    title: "BNBE",
    image: "/images/portfolio/textile/bnbe.jpg",
    id: ["eCommerce"],
    tags: ["eCommerce"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress",],
    flag: "🇮🇳",
    link: "https://bnbe.in/",
  },

 {
    title: "Ankit Uniforms",
    image: "/images/portfolio/textile/ankit-uniform.jpg",
    id: ["eCommerce"],
    tags: ["eCommerce"],
   tech: ["Html", "CSS", "JavaScript", "Php", "WordPress",],
    flag: "🇮🇳",
    link: "https://ankituniforms.com/",
  },

];

/* =========================
   TABS
========================= */
const portfolioTabs = [
  "Top Projects",
  "eCommerce",
  "Corporate",
  "IT & Technology",
  "Manufacturing",
  "Real Estate",
  "Healthcare",
  "Education",
  "Travel",
  
  "NGOs",
  "Finance",
  "Textile",
  "Advertising",
];

const tabIcons: Record<string, LucideIcon> = {
  "Top Projects": LayoutGrid,
  "eCommerce": ShoppingCart,
  Corporate: Briefcase,
  "IT & Technology": Cpu,
  Manufacturing: Factory,
  "Real Estate": Building2,
  Healthcare: HeartPulse,
  Education: GraduationCap,
  Travel: Plane,
 
  NGOs: HandHeart,
  Finance: Wallet,
  Textile: Briefcase,
  Advertising: Megaphone,
};

const tabIconColors: Record<string, string> = {
  "Top Projects": "#5E9ED5", // blue
  "eCommerce": "#F59E0B", // amber
  Corporate: "#10B981", // green
  "IT & Technology": "#8B5CF6", // purple
  Manufacturing: "#F43F5E", // pink/red
  "Real Estate": "#3B82F6", // sky blue
  Healthcare: "#EF4444", // red
  Education: "#FBBF24", // yellow
  Travel: "#06B6D4", // teal
 
  NGOs: "#EC4899", // pink
  Finance: "#14B8A6", // cyan/teal
  Textile: "#8B5CF6", // purple
  Advertising: "#F59E0B", // amber
};

/* =========================
   PAGE
========================= */
export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<string>("Top Projects");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  //   const handleTabClick = (tab: string) => {
  //   setActiveTab(tab);

  //   setTimeout(() => {
  //     portfolioRef.current?.scrollIntoView({
  //       behavior: "smooth",
  //       block: "center",
  //     });
  //   }, 100);
  // };

  // for show all on Top Projects tab
  // const filteredPortfolio =
  //   activeTab === "Top Projects"
  //     ? portfolioData
  //     : portfolioData.filter((item) => item.id.includes(activeTab));

  const filteredPortfolio = portfolioData.filter((item) =>
    item.id.includes(activeTab),
  );

  return (
    <>
      <div>
        <div
          className="relative w-full bg-[url('/images/bg/portfolio-banner.jpg')] 
             bg-cover bg-right md:bg-center
             h-[200px] sm:h-[300px] md:h-[550px] flex items-center"
        >
          {/* Content Container */}
          <div className="relative container-width px-[15px] md:px-[60px] w-full flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start mx-auto h-full">
            {/* Text Section */}
            <div className="md:flex-[2] flex flex-col gap-4 justify-center items-start h-full">
              <div className="flex flex-col justify-center items-start h-full">
                <h1 className="main-heading text-white text-left">
                  Portfolio
                </h1>
                <p className="mt-[10px] leading-[140%] text-white text-left">
                 
                  A collection of projects that define our expertise.
                </p>
              </div>
            </div>
            {/* <HeaderForm /> */}
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
            <FileText size={14} className="md:size-{16}" />
            <span className="truncate max-w-[120px] md:max-w-none">
              Portfolio
            </span>
          </div>
        </div>
      </div>
      {/* MODAL — always included */}
      {/* <ModalForm isOpen={isModalOpen} setIsOpen={setIsModalOpen} /> */}
      <section className="section-style2">
        {/* ================= TABS ================= */}
        <div className="mb-12 flex justify-center lg:pt-10">
          <div
            ref={scrollContainerRef}
            className="
            flex flex-wrap justify-start md:justify-center gap-3
          "
            role="tablist"
          >
            {/* {portfolioTabs.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => handleTabClick(tab)}
                className={`${
                  activeTab === tab
                    ? "bg-[#5E9ED5] text-white shadow-md"
                    : "bg-white text-gray-700 hover:text-[#5E9ED5]"
                }
  px-5 py-2 text-sm rounded-full
  border border-gray-200
  transition-all duration-300`}
              >
                <span className="flex items-center gap-2">
                  {tabIcons[tab] &&
                    (() => {
                      const Icon = tabIcons[tab];
                      return <Icon size={16} />;
                    })()}
                  {tab}
                </span>
              </button>
            ))} */}
            {/* active color white */}
            {portfolioTabs.map((tab) => {
              const Icon = tabIcons[tab];
              const iconColor =
                activeTab === tab ? "#FFFFFF" : tabIconColors[tab] || "#000";

              return (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={activeTab === tab}
                  onClick={() => handleTabClick(tab)}
                  className={`${
                    activeTab === tab
                      ? "bg-[#5E9ED5] text-white shadow-md"
                      : "bg-white text-gray-700 hover:text-[#5E9ED5]"
                  } px-5 w-[174px] lg:w-auto py-2 text-sm rounded-full border border-gray-200 transition-all duration-300`}
                >
                  <span className="flex items-center gap-2">
                    {Icon && <Icon size={16} color={iconColor} />}
                    {tab}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= GRID ================= */}
        <section className="">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-10">
            {filteredPortfolio.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                target="_blank"
                className="group bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={450}
                    className="w-full h-60 object-cover group-hover:scale-110 transition-all duration-500"
                  />
                </div>

                <div className="p-4 space-y-3">
                  <h4 className="font-semibold group-hover:text-[#5E9ED5]">
                    {item.title}
                  </h4>

                  <div className="flex gap-2 flex-wrap">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* <p className="text-sm text-gray-600 line-clamp-3">
                  {item.description}
                </p> */}

                  <div className="flex justify-between items-center pt-2">
                    <div className="flex gap-2 flex-wrap">
                      {item.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 border rounded-full text-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span className="text-xl">{item.flag}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
