"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Inter } from "next/font/google";

// import ScrollbarWatcher from "@/components/ScrollbarWatcher";
import ThemeToggle from "@/components/ThemeToggle";
import Loader from "@/components/Loader";
import "./process.css"
import "./globals.css";
import Footer from "@/components/Footer";
import FooterSection from "@/components/FooterSection";
import Header from "@/components/Header";
import TawkTo from "@/components/TawkTo";

// Fonts
const inter = Inter({ subsets: ["latin"], weight: ["400","700"], variable: "--font-inter", display: "swap" });

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    setLoading(true);
  }, [pathname]);

  useEffect(() => {
    if (loading) {
      const frame = requestAnimationFrame(() => setLoading(false));
      return () => cancelAnimationFrame(frame);
    }
  }, [loading, children]);

  return (
    <html
      lang="en"
      className={`${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="font-inter" suppressHydrationWarning>
        <Header/>

        {/* Loader with fade */}
        <AnimatePresence mode="wait" initial={false}>
          {loading && (
            <motion.div
              key="loader"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
            >
              <Loader />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        {/* <ScrollbarWatcher /> */}
        {children}
        <div className="fixed top-1/2 right-6 -translate-y-1/2 z-50">
          <ThemeToggle />
        </div>

        {/* <Footer/> */}
        <FooterSection/>
        <TawkTo/>
      </body>
    </html>
  );
}