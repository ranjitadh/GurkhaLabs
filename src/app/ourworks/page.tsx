import React from 'react'
import Image from 'next/image'
import Works from '@/components/ui/Works'
import LogoMarquee from '@/components/ui/WorkMarquee'

const page = () => {
  return (
   <>


<div className="custom-bg-gradient">


     <p className="mt-4 font-extrabold text-white  flex justify-center items-center underline decoration-3 decoration-[#3498db] text-5xl">Some of our recent&nbsp;<span className="text-white underline decoration-3 decoration-amber-500">projects</span></p>
     <div className="relative w-screen h-screen">
  

      {/* Foreground image (z-10) */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <Image
          src="/assets/SVG/team-work-animate.svg"
          alt="TeamWork"
          width={800}
          height={800}
    
          className=""
        />
      </div>
      </div>


      <Works/>
      <LogoMarquee/>
      </div>


   </>
  )
}

export default page


