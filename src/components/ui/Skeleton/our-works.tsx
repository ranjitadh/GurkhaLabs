"use client";
import React from "react";

const OurWorksSkeleton = () => {
  return (
    <div className="bg-gradient-to-br from-[#103045] via-gray-900 to-black min-h-screen">
      {/* Heading Skeleton */}
      <div className="px-4 sm:px-8 py-8 flex justify-center items-center">
        <div className="h-10 sm:h-12 md:h-14 w-3/4 max-w-[600px] bg-gray-700 rounded animate-pulse"></div>
      </div>

      {/* Animated Image Skeleton */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-screen flex justify-center items-center my-8">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[200px] sm:w-[400px] md:w-[600px] lg:w-[800px] h-[200px] sm:h-[400px] md:h-[600px] lg:h-[800px] bg-gray-700 rounded animate-pulse"></div>
        </div>
      </div>

      {/* Works Section Skeleton */}
      <div className="px-4 sm:px-8 md:px-16 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-2xl shadow-lg animate-pulse">
              <div className="h-48 w-full bg-gray-700 rounded mb-4"></div>
              <div className="h-6 w-3/4 bg-gray-700 rounded mb-2"></div>
              <div className="h-4 w-full bg-gray-700 rounded mb-2"></div>
              <div className="h-4 w-5/6 bg-gray-700 rounded"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Logo Marquee Skeleton */}
      <div className="mt-16 px-4 sm:px-8 md:px-16 py-8">
        <div className="flex justify-center space-x-4 overflow-hidden">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="h-12 w-24 bg-gray-700 rounded animate-pulse"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWorksSkeleton;