import React from 'react';
import Image from 'next/image';
import Works from '@/components/ui/Works';
import LogoMarquee from '@/components/ui/WorkMarquee';

const Page = () => {
  return (
    <div className="bg-gradient-to-br from-[#103045] via-gray-900 to-black min-h-screen">

      {/* Heading */}
      <p className="mt-8 px-4 sm:px-8 font-extrabold text-white text-3xl sm:text-4xl md:text-5xl flex justify-center items-center text-center underline decoration-3 decoration-[#3498db]">
        Some of our&nbsp;
        <span className="text-white underline decoration-3 decoration-amber-500">
          projects
        </span>
      </p>

      {/* Animated Image */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-screen flex justify-center items-center my-8">
        <div className="absolute inset-0 flex justify-center items-center">
          <Image
            src="/assets/SVG/team-work-animate.svg"
            alt="TeamWork"
            width={800}
            height={800}
            className="w-[200px] sm:w-[400px] md:w-[600px] lg:w-[800px] h-auto"
          />
        </div>
      </div>

      {/* Works Section */}
      <div className="px-4 sm:px-8 md:px-16">
        <Works />
      </div>

      {/* Logo Marquee */}
      <div className="mt-16 px-4 sm:px-8 md:px-16">
        <LogoMarquee />
      </div>

    </div>
  );
};

export default Page;
