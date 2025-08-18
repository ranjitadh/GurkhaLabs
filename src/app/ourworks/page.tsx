import React from 'react'
import Image from 'next/image'
import Works from '@/components/ui/Works'
import LogoMarquee from '@/components/ui/WorkMarquee'

const page = () => {
  return (
   <>



     <p className="mt-4 font-extrabold text-white  flex justify-center items-center underline decoration-3 decoration-[#3498db] text-5xl">Some of our recent projects</p>
     <div className="relative w-screen h-screen">
      {/* Background wave (z-0) */}
      <Image
        src="/assets/SVG/wave.svg"
        alt="Wave"
        fill
        className="object-cover rounded-lg z-0"
        priority
      />

      {/* Foreground image (z-10) */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <Image
          src="/assets/SVG/team-work-animate.svg"
          alt="TeamWork"
          width={1000}
          height={1000}
          className="object-cover rounded-lg"
        />
      </div>
      </div>


      <Works/>
<LogoMarquee/>
      


   </>
  )
}

export default page
