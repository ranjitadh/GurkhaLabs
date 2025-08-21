// components/ui/PageSkeleton.tsx
"use client";

export default function HomeSkeleton() {
  return (
    <div className="animate-pulse bg-gradient-to-br via-gray-900 from-[#103045] to-black text-white min-h-screen p-4 space-y-12">
      
      {/* Hero Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <div className="h-12 w-48 bg-gray-700 rounded"></div>
          <div className="h-12 w-64 bg-gray-700 rounded"></div>
          <div className="h-12 w-56 bg-gray-700 rounded"></div>
        </div>
        <div className="h-64 w-full md:max-w-md bg-gray-700 rounded"></div>
      </div>

      {/* Services Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className="h-20 bg-gray-700 rounded flex items-center justify-center"></div>
        ))}
      </div>

      {/* FlipCards Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div key={idx} className="h-60 w-full max-w-md bg-gray-700 rounded mx-auto"></div>
        ))}
      </div>

      {/* CTA Skeleton */}
      <div className="flex flex-col items-center space-y-4">
        <div className="h-12 w-48 bg-gray-700 rounded"></div>
        <div className="h-6 w-64 bg-gray-700 rounded"></div>
        <div className="h-12 w-32 bg-gray-700 rounded"></div>
      </div>

      {/* Teams/Testi/FAQ Skeleton */}
      <div className="space-y-6">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div key={idx} className="h-40 bg-gray-700 rounded w-full md:max-w-3xl mx-auto"></div>
        ))}
      </div>
    </div>
  );
}
