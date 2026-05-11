// components/ui/SkeletonLoader.tsx
"use client"
import React from "react";



function SkeletonLoader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white via-[#f6fbff] to-[#edf6ff] text-gray-900">
      <div className="animate-pulse space-y-4">
        <div className="h-8 w-64 bg-gray-200 rounded"></div>
        <div className="h-6 w-48 bg-gray-200 rounded"></div>
        <div className="h-6 w-72 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}
export default SkeletonLoader;
