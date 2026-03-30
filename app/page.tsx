"use client";

import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <motion.div
        className="p-10 bg-white rounded-2xl shadow-xl text-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <FaRocket className="text-4xl text-blue-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold">Next.js Setup Complete 🚀</h1>
      </motion.div>
    </div>
  );
}