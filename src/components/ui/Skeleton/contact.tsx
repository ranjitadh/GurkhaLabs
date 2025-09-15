"use client";
import React from "react";

const ContactSkeleton = () => {
  return (
    <>
  <div className="relative bg-gradient-to-br from-[#103045] via-gray-900 to-black min-h-screen items-center justify-center p-6 space-y-8 text-white font-bold overflow-hidden">
      {/* Heading Skeleton */}
      <div className="px-4 sm:px-8 py-8 flex justify-center items-center">
        <div className="h-10 sm:h-12 md:h-14 w-3/4 max-w-[600px] bg-gray-700 rounded animate-pulse"></div>
      </div>



    <div className="relative bg-gradient-to-br from-[#103045] via-gray-900 to-black min-h-screen flex flex-col items-center justify-center p-6 space-y-8 text-white font-bold overflow-hidden">
      {/* Header Skeleton */}

      
      <div className="text-center">
        <div className="h-12 w-3/4 max-w-[400px] bg-gray-700 rounded animate-pulse"></div>
      </div>

      {/* Subtext Skeleton */}
      <div className="text-center max-w-md">
        <div className="h-4 w-2/3 mx-auto bg-gray-700 rounded mb-2 animate-pulse"></div>
        <div className="h-4 w-full mx-auto bg-gray-700 rounded animate-pulse"></div>
      </div>

      {/* Button Skeleton */}
      <div className="mt-6">
        <div className="h-10 w-32 bg-gray-700 rounded animate-pulse"></div>
      </div>

      {/* Form Skeleton */}
      <div className="w-full max-w-sm space-y-4">
        <div className="h-10 w-full bg-gray-700 rounded-lg animate-pulse"></div>
        <div className="h-10 w-full bg-gray-700 rounded-lg animate-pulse"></div>
      </div>

      {/* Image Skeleton */}
      <div className="relative w-full max-w-xs h-48 flex justify-center items-center mt-8">
        <div className="w-full h-full bg-gray-700 rounded animate-pulse"></div>
      </div>
    </div>
    </div>
    </>
  );
};

export default ContactSkeleton;