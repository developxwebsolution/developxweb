"use client";

import {
  Shield,
  CreditCard,
  AlertTriangle,
  Server,
  Ban,
  Code,
  Lock,
  Scale,
  RefreshCcw,
  Mail,
  Home,
  ChevronRight,
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
        <div
          className="relative w-full bg-[url('/images/bg/terms-and-conditions-banner.jpg')] 
             bg-cover bg-center
             h-[200px] sm:h-[300px] md:h-[550px] flex items-center"
        >
          {/* Content Container */}
          <div className="relative container-width px-[15px] md:px-[60px] w-full flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start mx-auto h-full">
            {/* Text Section */}
            <div className="md:flex-[2] flex flex-col gap-4 justify-center items-start h-full">
              <div className="flex flex-col justify-center items-start h-full">
                <h1 className="main-heading text-white text-left">
                  Terms and Conditions
                </h1>
                <p className="mt-[10px] leading-[140%] text-white text-left">
                  The rules of engagement for using our website and services.
                </p>
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
              Terms and Conditions
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

          {/* Header */}

          <div className="mx-auto mb-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-2  mb-5 md:mb-5">Terms & Conditions</h2>
              <p className="second-heading-content ">
                {" "}
                Governing the use of services provided by Laser Web Maker
              </p>
            </motion.div>
          </div>

          <div className="space-y-10 text-black leading-relaxed">
            {/* Introduction */}
            <section>
              <p>
                Laser Web Maker welcomes you. These Terms and Conditions define
                the rules, responsibilities, and obligations governing the use
                of our website, services, and solutions. Transparency, security,
                and trust remain our core principles.
              </p>

              <p className="mt-4">
                By accessing or using our services, you confirm that you have
                read, understood, and agreed to these terms. If you do not
                agree, you should discontinue use of our website and services
                immediately.
              </p>

              <p className="mt-4">
                Laser Web Maker reserves the right to revise or update these
                terms at any time without prior notice. Continued usage
                constitutes acceptance of updated terms.
              </p>
            </section>

            {/* Services Agreement */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="text-[#5e9ed5]" />
                <h2 className="heading-2 ">Service Agreement & Usage Policy</h2>
              </div>

              <p>
                All services offered by Laser Web Maker are subject to standard
                policies and operational guidelines. Clients must ensure
                compliance with applicable laws and ethical business practices
                while using our services.
              </p>

              <p className="mt-3">
                Account activation begins only after successful payment
                verification and internal validation. Any delay caused by
                incomplete or incorrect information provided by the client shall
                not be our responsibility.
              </p>
            </section>

            {/* Pricing */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="text-[#5e9ed5]" />
                <h2 className="heading-2 ">
                  Packages, Pricing & Modifications
                </h2>
              </div>

              <p>
                Laser Web Maker reserves the right to revise service packages,
                pricing, features, or inclusions at any time. Updated pricing
                will apply only to new orders.
              </p>

              <p className="mt-3">
                Orders confirmed before any price revision shall remain
                unaffected and billed as per the agreed amount at the time of
                purchase.
              </p>
            </section>

            {/* Payments */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="text-[#5e9ed5]" />
                <h2 className="heading-2 ">Payments & Non-Payment</h2>
              </div>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Accounts overdue beyond 7 days may face suspension of support.
                </li>
                <li>
                  Accounts overdue beyond 14 days may have services suspended.
                </li>
                <li>
                  Accounts overdue beyond 30 days may result in permanent data
                  deletion.
                </li>
                <li>
                  Reactivation of terminated accounts may incur administrative
                  charges.
                </li>
                <li>
                  Chargebacks or payment reversals will lead to immediate
                  account termination.
                </li>
              </ul>

              <p className="mt-3">
                Clients are responsible for maintaining accurate billing and
                contact details. Failure to receive notices due to outdated
                information shall not hold Laser Web Maker liable.
              </p>
            </section>

            {/* Spam */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Ban className="text-[#5e9ed5]" />
                <h2 className="heading-2 ">Anti-Spam Policy</h2>
              </div>

              <p>
                Laser Web Maker follows a strict zero-tolerance policy toward
                spam, unsolicited emails, and bulk mailing activities. Any
                violation may lead to immediate suspension or termination of
                services.
              </p>

              <p className="mt-3">
                Use of shared servers for mass mailing, phishing, or
                unauthorized promotions is strictly prohibited.
              </p>
            </section>

            {/* Prohibited Use */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-[#5e9ed5]" />
                <h2 className="heading-2 ">Prohibited Activities</h2>
              </div>

              <ul className="list-decimal pl-6 space-y-2">
                <li>Illegal content distribution or unlawful activities</li>
                <li>
                  Copyright, trademark, or intellectual property violations
                </li>
                <li>Malware, hacking attempts, or system exploitation</li>
                <li>
                  Excessive resource consumption impacting server stability
                </li>
                <li>Unauthorized scripts, bots, or automation tools</li>
              </ul>
            </section>

            {/* Data & Backup */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Server className="text-[#5e9ed5]" />
                <h2 className="heading-2 ">Data & Backup Responsibility</h2>
              </div>

              <p>
                Clients are solely responsible for maintaining backups of their
                website data. While periodic backups may be taken for internal
                recovery purposes, Laser Web Maker does not guarantee data
                restoration.
              </p>
            </section>

            {/* Ownership */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="text-[#5e9ed5]" />
                <h2 className="heading-2 ">Ownership & Intellectual Rights</h2>
              </div>

              <p>
                Clients own the final HTML, CSS, JavaScript, visual design, and
                written content upon full payment completion.
              </p>

              <p className="mt-3">
                Proprietary systems, CMS platforms, databases, backend logic,
                and hosting infrastructure remain the intellectual property of
                Laser Web Maker.
              </p>
            </section>

            {/* Disclaimer */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="text-[#5e9ed5]" />
                <h2 className="heading-2 ">Disclaimer & Limitation</h2>
              </div>

              <p>
                Services are provided “as is” without warranties of
                uninterrupted performance, accuracy, or suitability for a
                specific purpose.
              </p>

              <p className="mt-3">
                Laser Web Maker shall not be liable for any indirect,
                incidental, or consequential damages arising from service
                interruptions or data loss.
              </p>
            </section>

            {/* Support */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Mail className="text-[#5e9ed5]" />
                <h2 className="heading-2 ">Support & Communication</h2>
              </div>

              <p>
                Support is provided strictly through official email channels.
              </p>

              <ul className="mt-2 space-y-1">
                <li>Support: support@laserwebmaker.com</li>
                <li>Sales: sales@laserwebmaker.com</li>
              </ul>
            </section>

            {/* Law */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Scale className="text-[#5e9ed5]" />
                <h2 className="heading-2 ">Governing Law & Jurisdiction</h2>
              </div>

              <p>
                These Terms shall be governed by and interpreted in accordance
                with the laws of India. Any disputes shall fall under the
                exclusive jurisdiction of courts located in Delhi, India.
              </p>
            </section>

            {/* Updates */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <RefreshCcw className="text-[#5e9ed5]" />
                <h2 className="heading-2 ">Updates to Terms</h2>
              </div>

              <p>
                Laser Web Maker reserves the right to update these Terms and
                Conditions at any time. Continued usage of services implies
                acceptance of the revised terms.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
