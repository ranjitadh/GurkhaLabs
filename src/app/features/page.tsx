// "use client"


import Workflow from "../../components/ui/flow"
import Image from "next/image"
import { FaDatabase ,FaCloud,FaMobileAlt, } from "react-icons/fa";



import Link from 'next/link'
import React from "react";
import { ArrowBigRightDash } from "lucide-react";

const page = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="bg-black  max-w-screen text-white text-8xl  p-28 font-bold ">
          Skyrocket your
          <br />
          productivity
          <br />
          with us.
          <span className="flex justify-start">
            <a
              href="/contact"
              className="border border-white bg-black text-white hover:border-[#3498db] hover:text-white font-bold py-1 px-4 cursor-pointer rounded-4xl text-5xl w-auto"
            >
              Contact Us
            </a>
          </span>
          {/* <span className="flex justify-end">
  <a href="/about" className="border border-white bg-black text-white hover:border-[#3498db] hover:text-white font-bold py-1 px-4 cursor-pointer rounded-4xl text-5xl w-auto">
   Know More
  </a>

</span> */}
        </div>

        <div className="bg-black text-white mt-28 ml-18  max-w-screen justify-center items-center">
<Image
  src="/assets/Images/features.png"
  width={400}
  height={400}
  alt="feature"
  className="transition-all duration-300 ease-in-out hover:scale-110"
/>

  



        </div>
      </div>
<Workflow/>


<div className="grid grid-cols-2 justify-center items-center ">

<Image
  src="/assets/Images/aggregate.png"
  width={350}
  height={350}
  alt="feature"
  className="transition-all duration-300 ease-in-out hover:scale-105"
/>
<h1 className= "text-white font-bold text-3xl mt-28">

Manage your Data
<br />

<Link 
href="/services">
<span className="text-[#3498db]">

Browse Our Services <ArrowBigRightDash className="inline text-white"/>
</span>
</Link>
<div className="h-40">
<FaDatabase className="inline"/>
<FaCloud className="inline" />
<FaMobileAlt className="inline"  />
</div>



</h1>


</div>



    </>
  );
};

export default page;
