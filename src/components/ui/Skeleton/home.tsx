'use client';

import React from 'react';

export default function HomeSkeleton() {
  return (
    <div role="status" className="animate-pulse">
      {/* Hero Section */}
      <div className="bg-transparent grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 py-12 md:py-16">
        {/* Left Column: Text */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left gap-4">
          <div className="h-16 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-16 w-1/2 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-16 w-2/3 bg-gray-200 dark:bg-gray-700 rounded" />
        </div>
        {/* Right Column: Image */}
        <div className="flex justify-center md:justify-end">
          <div className="h-[500px] w-[500px] bg-gray-200 dark:bg-gray-700 rounded-lg" />
        </div>
      </div>

      {/* Our Services */}
      <div className="mt-20 flex items-center justify-center gap-3">
        <div className="h-10 w-48 bg-gray-200 dark:bg-gray-700 rounded" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-12">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded-full" />
            <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
        ))}
      </div>

      {/* Enhance Productivity Section */}
      <div className="bg-transparent px-4 py-16">
        <div className="h-10 w-48 mx-auto bg-gray-200 dark:bg-gray-700 rounded" />
        <div className="h-8 w-64 mx-auto mt-4 bg-gray-200 dark:bg-gray-700 rounded" />
      </div>

      {/* Flip Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-6 mt-12 px-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="h-60 w-full max-w-md mx-auto bg-gray-200 dark:bg-gray-700 rounded-lg" />
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-20">
        <div className="flex justify-center items-center gap-4">
          <div className="h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded-full" />
          <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
        </div>
        <div className="h-6 w-48 mx-auto mt-4 bg-gray-200 dark:bg-gray-700 rounded" />
        <div className="h-10 w-32 mx-auto mt-6 bg-gray-200 dark:bg-gray-700 rounded" />
      </div>

      {/* Teams Section */}
      <div className="mt-16 px-6">
        <div className="h-8 w-48 mx-auto bg-gray-200 dark:bg-gray-700 rounded" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="h-48 w-full bg-gray-200 dark:bg-gray-700 rounded-lg" />
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-16 px-6">
        <div className="h-8 w-48 mx-auto bg-gray-200 dark:bg-gray-700 rounded" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="h-32 w-full bg-gray-200 dark:bg-gray-700 rounded-lg" />
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16 px-6">
        <div className="h-8 w-48 mx-auto bg-gray-200 dark:bg-gray-700 rounded" />
        <div className="space-y-4 mt-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="h-16 w-full bg-gray-200 dark:bg-gray-700 rounded" />
          ))}
        </div>
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
}