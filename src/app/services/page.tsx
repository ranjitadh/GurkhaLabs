import React from "react";
import Image from "next/image";
import ServiceBox from "@/components/ui/ServiceBox";
import Works from "@/components/ui/Works";
import Marquee from  "@/components/ui/WorkMarquee"
import Workflow from "@/components/ui/flow"



const Page = () => {
  return (
    <>
   
      <div className="grid grid-cols-1 md:grid-cols-2 bg-black text-white">
        <div className="flex flex-col justify-center p-6 sm:p-12 md:p-20 lg:p-28">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Everything you <br />
            need in one <br />
            place.
          </h1>
          <div className="h-1 w-48 sm:w-64 bg-[#3498db] mt-6 rounded-full" />
        </div>
        <div className="flex justify-center items-center p-6">
          <Image
            src="/assets/Images/settings.png"
            width={400}
            height={400}
            alt="Settings illustration"
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]"
          />
        </div>
      </div>

    
      <div className="bg-black text-white text-center py-10 sm:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Used by some of the{" "}
          <span className="text-[#3498db]">best companies</span>
        </h2>

        <Marquee/>
        
      </div>


      <Workflow/>

      <ServiceBox/>
      <Works/>





    </>
  );
};

export default Page;