"use client";
import React from "react";

const AboutSkeleton = () => {
  return (
    <div className="bg-gradient-to-br via-gray-900 from-[#103045] to-black text-white overflow-hidden">
      {/* Company Section Skeleton */}
      <div className="px-6 md:px-28 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <div className="w-[500px] h-[400px] bg-gray-700 rounded-2xl animate-pulse"></div>
        </div>
        <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-lg border border-gray-800">
          <div className="h-8 w-1/3 bg-gray-700 rounded mb-4 animate-pulse"></div>
          <div className="space-y-3">
            <div className="h-4 w-full bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 w-5/6 bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 w-4/5 bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 w-3/4 bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 w-2/3 bg-gray-700 rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Vision Section Skeleton */}
      <div className="px-6 md:px-28 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-lg border border-gray-800 order-2 md:order-1">
          <div className="h-8 w-1/3 bg-gray-700 rounded mb-4 animate-pulse"></div>
          <div className="space-y-3">
            <div className="h-4 w-full bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 w-5/6 bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 w-4/5 bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 w-3/4 bg-gray-700 rounded animate-pulse"></div>
          </div>
        </div>
        <div className="flex justify-center order-1 md:order-2">
          <div className="w-[500px] h-[400px] bg-gray-700 rounded-2xl animate-pulse"></div>
        </div>
      </div>

      {/* Mission Section Skeleton */}
      <div className="px-6 md:px-28 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <div className="w-[500px] h-[400px] bg-gray-700 rounded-2xl animate-pulse"></div>
        </div>
        <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-lg border border-gray-800">
          <div className="h-8 w-1/3 bg-gray-700 rounded mb-4 animate-pulse"></div>
          <div className="space-y-3">
            <div className="h-4 w-full bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 w-5/6 bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 w-4/5 bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 w-3/4 bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 w-2/3 bg-gray-700 rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Teams Section Skeleton */}
      <div className="px-6 md:px-28 py-16">
        <div className="h-8 w-1/4 bg-gray-700 rounded mb-8 mx-auto animate-pulse"></div>
        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-2xl shadow-lg animate-pulse">
              <div className="h-32 w-32 mx-auto bg-gray-700 rounded-full mb-4"></div>
              <div className="h-6 w-1/2 mx-auto bg-gray-700 rounded mb-2"></div>
              <div className="h-4 w-1/3 mx-auto bg-gray-700 rounded"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section Skeleton */}
      <div className="px-6 md:px-28 py-16">
        <div className="h-8 w-1/4 bg-gray-700 rounded mb-8 mx-auto animate-pulse"></div>
        <div className="grid md:grid-cols-2 gap-6">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-2xl shadow-lg animate-pulse">
              <div className="h-4 w-full bg-gray-700 rounded mb-2"></div>
              <div className="h-4 w-5/6 bg-gray-700 rounded mb-2"></div>
              <div className="h-4 w-4/5 bg-gray-700 rounded mb-4"></div>
              <div className="h-6 w-1/3 bg-gray-700 rounded"></div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section Skeleton */}
      <div className="px-6 md:px-28 py-16">
        <div className="h-8 w-1/4 bg-gray-700 rounded mb-8 mx-auto animate-pulse"></div>
        <div className="space-y-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-2xl animate-pulse">
              <div className="h-6 w-3/4 bg-gray-700 rounded mb-2"></div>
              <div className="h-4 w-full bg-gray-700 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSkeleton;