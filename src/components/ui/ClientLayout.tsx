"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import SkeletonLoader from "./skeletonloader";
import Navbar from "./Navbar";
import Footer from "./Footer";

const VantaNetBackground = dynamic(() => import("./Vantabg"), { ssr: false });
const ChatBotWrapper = dynamic(() => import("./SarathiBot"), { ssr: false });

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <VantaNetBackground 
      options={{
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x3498db,
        backgroundColor: 0x103045,
        points: 10.00,
        maxDistance: 20.00,
        spacing: 15.00
      }}
    >
      <Navbar />
      <Suspense fallback={<SkeletonLoader />}>
        <main className="relative z-10">
          {children}
        </main>
      </Suspense>
      <Footer />
      <ChatBotWrapper />
    </VantaNetBackground>
  );
}
