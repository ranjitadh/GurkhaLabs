"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import SkeletonLoader from "./skeletonloader";
import Navbar from "./Navbar";
import Footer from "./Footer";

import ModernBackground from "./ModernBackground";
const ChatBotWrapper = dynamic(() => import("./SarathiBot"), { ssr: false });

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ModernBackground>
      <Navbar />
      <Suspense fallback={<SkeletonLoader />}>
        <main className="relative z-10">
          {children}
        </main>
      </Suspense>
      <Footer />
      <ChatBotWrapper />
    </ModernBackground>
  );
}
