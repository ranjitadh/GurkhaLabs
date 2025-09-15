"use client";
import React from "react";

const FeatureSkeleton = () => {
  return (
    <div className="bg-transparent text-white w-full overflow-hidden">
      {/* Hero Section Skeleton */}
      <div className="flex flex-col lg:flex-row w-full">
        <div className="flex flex-col justify-center items-center lg:items-start w-full px-6 md:px-20 py-20 text-center lg:text-left">
          <div className="space-y-4">
            <div className="h-10 w-3/4 bg-gray-700 rounded animate-pulse"></div>
            <div className="h-10 w-2/3 bg-gray-700 rounded animate-pulse"></div>
            <div className="h-10 w-1/2 bg-gray-700 rounded animate-pulse"></div>
            <div className="h-12 w-32 bg-gray-700 rounded mt-8 animate-pulse"></div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full px-4 py-10">
          <div className="w-full max-w-[400px] h-[400px] bg-gray-700 rounded animate-pulse"></div>
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

      {/* Manage Data Section Skeleton */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center py-16 px-4 md:px-20 space-y-10 md:space-y-0 bg-transparent text-white">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-[400px] h-[400px] bg-gray-700 rounded animate-pulse"></div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="h-8 w-1/2 bg-gray-700 rounded mb-4 animate-pulse"></div>
          <div className="h-6 w-1/3 bg-gray-700 rounded mb-6 animate-pulse"></div>
          <div className="flex justify-center md:justify-start space-x-6">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="h-8 w-8 bg-gray-700 rounded-full animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Develop Application Section Skeleton */}
      <div className="flex flex-col md:flex-row items-center justify-center py-16 px-4 md:px-20 space-y-10 md:space-y-0 bg-transparent text-white">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="h-8 w-1/2 bg-gray-700 rounded mb-4 animate-pulse"></div>
          <div className="h-6 w-1/3 bg-gray-700 rounded mb-6 animate-pulse"></div>
          <div className="flex justify-center md:justify-start space-x-6">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="h-8 w-8 bg-gray-700 rounded-full animate-pulse"></div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-[400px] h-[400px] bg-gray-700 rounded animate-pulse"></div>
        </div>
      </div>

      {/* Marketing Section Skeleton */}
      <div className="flex flex-col md:flex-row items-center justify-center py-16 px-4 md:px-20 space-y-10 md:space-y-0 bg-transparent text-white">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-[400px] h-[400px] bg-gray-700 rounded animate-pulse"></div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="h-8 w-1/2 bg-gray-700 rounded mb-4 animate-pulse"></div>
          <div className="h-6 w-1/3 bg-gray-700 rounded mb-6 animate-pulse"></div>
          <div className="flex justify-center md:justify-start space-x-6">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="h-8 w-8 bg-gray-700 rounded-full animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSkeleton;