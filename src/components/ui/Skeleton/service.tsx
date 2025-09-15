"use client";
import React from "react";

const ServiceSkeleton = () => {
  return (
    <>
      {/* Hero Section Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 bg-transparent text-white">
        <div className="flex flex-col justify-center p-6 sm:p-12 md:p-20 lg:p-28">
          <div className="space-y-4">
            <div className="h-10 w-3/4 bg-gray-700 rounded animate-pulse"></div>
            <div className="h-10 w-2/3 bg-gray-700 rounded animate-pulse"></div>
            <div className="h-10 w-1/2 bg-gray-700 rounded animate-pulse"></div>
            <div className="h-1 w-48 sm:w-64 bg-gray-700 mt-6 rounded-full animate-pulse"></div>
          </div>
        </div>
        <div className="flex justify-center items-center p-6">
          <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-[400px] bg-gray-700 rounded animate-pulse"></div>
        </div>
      </div>

      {/* Marquee Section Skeleton */}
      <div className="bg-transparent text-white text-center py-10 sm:py-16">
        <div className="h-8 w-1/2 mx-auto bg-gray-700 rounded mb-8 animate-pulse"></div>
        <div className="flex justify-center space-x-4">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="h-12 w-24 bg-gray-700 rounded animate-pulse"></div>
          ))}
        </div>
      </div>

      {/* Workflow Section Skeleton */}
      <div className="py-10 sm:py-16">
        <div className="px-6 sm:px-12 md:px-20 lg:px-28">
          <div className="h-8 w-1/3 mx-auto bg-gray-700 rounded mb-8 animate-pulse"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-2xl shadow-lg animate-pulse">
                <div className="h-6 w-3/4 bg-gray-700 rounded mb-4"></div>
                <div className="h-4 w-full bg-gray-700 rounded mb-2"></div>
                <div className="h-4 w-5/6 bg-gray-700 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ServiceBox Section Skeleton */}
      <div className="py-10 sm:py-16">
        <div className="px-6 sm:px-12 md:px-20 lg:px-28">
          <div className="h-8 w-1/3 mx-auto bg-gray-700 rounded mb-8 animate-pulse"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-2xl shadow-lg animate-pulse">
                <div className="h-32 w-32 mx-auto bg-gray-700 rounded-full mb-4"></div>
                <div className="h-6 w-1/2 mx-auto bg-gray-700 rounded mb-2"></div>
                <div className="h-4 w-3/4 mx-auto bg-gray-700 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSkeleton;