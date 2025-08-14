"use client";

import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Floating glowing gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 from-orange-500 to-[#3498db] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72from-orange-500 to-[#3498db] rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Animated 404 */}
      <motion.h1
        className="text-[8rem] font-extrabold tracking-widest drop-shadow-lg"
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        404
      </motion.h1>

      {/* Subtitle animation */}
      <motion.p
        className="mt-4 text-lg text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Oops! This page could not be found.
      </motion.p>

      {/* Button with hover animation */}
      <motion.a
        href="/"
        className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-[#3498db] text-white font-semibold shadow-lg hover:scale-105 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Go Home
      </motion.a>
    </div>
  );
}
