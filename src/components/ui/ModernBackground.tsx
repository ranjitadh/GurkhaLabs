"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ModernBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#f8fafc] text-gray-900">
      {/* Mesh Gradient Blobs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-[5%] -top-[5%] h-[500px] w-[500px] rounded-full bg-[#dbeafe] opacity-40 blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-[5%] top-[15%] h-[600px] w-[600px] rounded-full bg-[#e0f2fe] opacity-30 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -80, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[15%] left-[15%] h-[400px] w-[400px] rounded-full bg-[#eff6ff] opacity-40 blur-[90px]"
        />
      </div>

      {/* Noise Texture */}
      <div className="pointer-events-none fixed inset-0 z-[1] opacity-[0.05] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Grid Pattern */}
      <div 
        className="pointer-events-none fixed inset-0 z-[1]" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.03) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} 
      />

      {/* Content Wrapper */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
