"use client";

import {
  ShieldCheck,
  Database,
  Eye,
  Share2,
  Lock,
  Cookie,
  FileText,
  RefreshCcw,
  Server,
  Users,
  Home,
  ChevronRight,
  RefreshCw ,
} from "lucide-react";
import { motion } from "framer-motion";
import ModalForm from "@/components/ModalForm";
// import PricingSection from "./components/PricingSection";
import { useState } from "react";
import Link from "next/link";
export default function PrivacyPolicyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // for website services offers section
  return (
    <>
       <div>
       <div>
        <div
          className="relative w-full bg-[url('/images/bg/privacy-policy-banner.webp')] 
             bg-cover bg-center
             h-[200px] sm:h-[300px] md:h-[550px] flex items-center"
        >
          {/* Content Container */}
          <div className="relative container-width px-[15px] md:px-[60px] w-full flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start mx-auto h-full">
            {/* Text Section */}
            <div className="md:flex-[2] flex flex-col gap-4 justify-center items-start h-full">
              <div className="flex flex-col justify-center items-start h-full">
                <h1 className="main-heading text-white text-left">
                  Privacy Policy
                </h1>
                <p className="mt-[10px] leading-[140%] text-white text-left">
                  How we protect and handle your personal information.
                </p>
              </div>
            </div>
          </div>
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
            {/* <Phone size={14} className="md:size-{16}" /> */}
            <span className="truncate max-w-[120px] md:max-w-none">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
      {/* MODAL — always included */}
      <ModalForm isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      {/* Table of contents (sticky on larger screens) */}

      <section className="px-[15px] md:px-[60px] py-20">
        <div className="mx-auto">
          {/* Header */}

          <div className="mx-auto mb-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-2  mb-5 md:mb-5">
                Privacy Policy
              </h2>
              <p className="second-heading-content ">
                {" "}
                Laser Web Maker – <Link href={"https://laserwebmaker.com/"}>Laser Web Maker</Link>
              </p>
            </motion.div>
          </div>

          <div className="space-y-10 text-black leading-relaxed">
            {/* Introduction */}
            <section>
              <p>
                At{" "}
                <strong>
                 <Link href={"https://laserwebmaker.com/"}>laserwebmaker.com</Link>
                </strong>
                , we are committed to safeguarding your privacy and ensuring the
                security of your personal information. This Privacy Policy
                outlines our practices regarding the collection, use, and
                protection of your data when you visit our website.
              </p>

              <p className="mt-3">
                The Privacy Policy explains and describes how we may collect and
                use the information pertaining to you through our website. If
                you have any queries regarding our Privacy Policies, please
                contact us.
              </p>

              <p className="mt-3">
                We respect your privacy and understand your privacy needs. The
                user should provide the information when asked for a specific
                purpose. These services shall be the user-requested services of
                the website.
              </p>

              <p className="mt-3">
                If you are using the services from{" "}
                <strong>laserwebmaker.com</strong>, you agree to the Privacy
                Policy and Terms and Conditions. In case you disagree with the
                Privacy Policy and Terms and Conditions, you should not use the
                website.
              </p>
            </section>

            {/* Information Collected */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-[#5e9ed5]" />
                <h2 className=" heading-2">
                  Information Collected
                </h2>
              </div>

              <h3 className="font-semibold mt-3">i) Personal Data</h3>
              <p className="mt-2">
                To avail of our services, you may be required to provide certain
                personally identifiable information that can be used to contact
                or identify you.
              </p>

              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, State, City, ZIP/Postal code</li>
              </ul>

              <p className="mt-2">
                Any information freely available in the public domain shall not
                be regarded as sensitive.
              </p>

              <p className="mt-2">
                You may choose not to provide personal information; however,
                doing so may limit your access to certain services. We shall not
                be liable for any denial of services due to insufficient
                information.
              </p>

              <h3 className="font-semibold mt-6">ii) Usage Data</h3>
              <p className="mt-2">
                Usage Data is collected automatically and may include IP
                address, browser type, browser version, pages visited, time
                spent, and diagnostic data.
              </p>

              <p className="mt-2">
                When accessing the service through mobile devices, we may
                collect device ID, operating system, and mobile browser details.
              </p>

              <h3 className="font-semibold mt-6">
                iii) Information Collected While Using the Application
              </h3>
              <p className="mt-2">
                With prior permission, we may collect images or media from your
                device camera or gallery to provide requested services.
              </p>

              <p className="mt-2">
                You may enable or disable access at any time through your device
                settings.
              </p>
            </section>

            {/* Use of Information */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="text-[#5e9ed5]" />
                <h2 className=" heading-2">
                  Use of Information
                </h2>
              </div>

              <ul className="list-decimal pl-6 space-y-2">
                <li>To provide and maintain our services</li>
                <li>To manage user registrations and accounts</li>
                <li>To fulfill contractual obligations</li>
                <li>
                  To communicate updates, service-related messages, and security
                  notifications
                </li>
                <li>
                  To send promotional emails (users can opt-out at any time)
                </li>
                <li>
                  To analyze usage trends and improve our services and marketing
                </li>
                <li>To handle mergers, restructuring, or transfer of assets</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Share2 className="text-[#5e9ed5]" />
                <h2 className=" heading-2">
                  Information Sharing
                </h2>
              </div>

              <p>
                We do not sell, trade, or rent users’ personal identification
                information. Information may be shared with trusted partners who
                assist in operating our website or conducting our business,
                under strict confidentiality agreements.
              </p>

              <p className="mt-2">
                We may disclose information if required by law or to protect our
                legal rights.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Server className="text-[#5e9ed5]" />
                <h2 className=" heading-2">
                  Data Retention
                </h2>
              </div>

              <p>
                We retain personal data only for as long as necessary to fulfill
                the purposes outlined in this Privacy Policy, unless a longer
                retention period is required by law.
              </p>
            </section>

            {/* Data Transfer */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-[#5e9ed5]" />
                <h2 className=" heading-2">
                  Transfer of Data
                </h2>
              </div>

              <p>
                Your information may be transferred to and maintained on servers
                located outside your jurisdiction. We ensure adequate data
                protection standards are applied.
              </p>
            </section>

            {/* Security */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="text-[#5e9ed5]" />
                <h2 className=" heading-2">
                  Information Security
                </h2>
              </div>

              <p>
                We implement appropriate technical and organizational security
                measures to protect your personal data. However, no method of
                transmission over the internet is 100% secure.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Cookie className="text-[#5e9ed5]" />
                <h2 className=" heading-2">
                  Cookies Policy
                </h2>
              </div>

              <p>
                We use cookies to enhance user experience and analyze website
                traffic. You can choose to disable cookies through your browser
                settings.
              </p>
            </section>

            {/* Changes */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <RefreshCcw className="text-[#5e9ed5]" />
                <h2 className=" heading-2">
                  Changes to This Privacy Policy
                </h2>
              </div>

              <p>
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with an updated effective date.
              </p>
            </section>

            {/* Consent */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="text-[#5e9ed5]" />
                <h2 className=" heading-2">Your Consent</h2>
              </div>

              <p>
                By using our website, you consent to our Privacy Policy and
                agree to its terms.
              </p>
            </section>

            {/* Update */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <RefreshCw className="text-[#5e9ed5]" />
                <h2 className=" heading-2">Update</h2>
              </div>
              <p>This Privacy Policy was last updated on: 26 January, 2026</p>
              <p>
                We may update or modify this Privacy Policy from time to time.
                Any changes will be posted on this page, and the updated version
                will become effective immediately upon publication.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
