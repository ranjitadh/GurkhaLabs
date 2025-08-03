import React from "react";
import Teams from "@/components/ui/Teams";
import TestiMonials from "@/components/ui/TestiMonials";
import Faq from "@/components/ui/Faq";
import { Laptop } from "lucide-react";
import Image from "next/image"

import { FaFigma, FaAppStoreIos } from "react-icons/fa";


const page = () => {
  const sections = [
    {
      title: "Brand Presence",
      content:
        " Through compelling web design, robust apps, and impactful graphics that strengthen brand identity and visibility.",
    },
    {
      title: "Customer Engagement",
      content:
        "With user-centric designs and intuitive interfaces that enhance user experience and encourage interaction.",
    },
    {
      title: "Business Growth",
      content:
        "By leveraging digital marketing strategies to attract, engage, and retain customers, ultimately boosting sales and revenue.",
    },
    {
      title: "Optimization",
      content:
        "Through IT consultation that aligns technology investments with business objectives",
    },
  ];

  return (
    <>
      {" "}
   
      {/* remove black after using vantajs and use bg-transparent*/}
      <div className="bg-black  max-w-screen text-white text-8xl mt-64 font-bold ">
        Service that
        <br />
        Sparks Your
        <br />
        Growth
      </div>
      <h1 className=" mt-72 font-bold  text-white text-5xl ">Our Services </h1>
      <span className="inline-block w-96 h-1 bg-[#3498db]  text-[#3498db]  mt-0"></span>
      
      <div className="grid grid-cols-3 gap-16 font-bold  text-white ">
        <div className="gap-16 mb-8 card text-white cursor-pointer hover:text-[#3498db] ">
          <Laptop className="inline" /> Web Development
        </div>
        <div className="gap-16 mb-8 card text-white cursor-pointer hover:text-[#3498db] ">
          <FaFigma className=" inline" />
          Web Design
        </div>
        <div className="cursor-pointer hover:text-[#3498db] ">
          <Image
            src="/assets/Images/Graphics_design.png"
            width={20}
            height={50}
            alt=""
            className="inline h-5"
            />{" "}
          Graphics Design
        </div>
        <div className="cursor-pointer hover:text-[#3498db] ">
          <FaAppStoreIos className="inline cursor-pointer" /> App Development
        </div>
        <div className="cursor-pointer hover:text-[#3498db] ">
          <Image
            className="inline h-5"
            width={20}
            height={50}
            src="/assets/Images/technical-support.png"
            alt=""
          />{" "}
          It Consultant
        </div>
        <div className="gap-4 s  card text-white cursor-pointer hover:text-[#3498db] ">
          <Image
            className="inline h-5"
            width={20}
            height={50}
            src="/assets/Images/technology.png"
            alt=""
          />{" "}
          Digital Marketing
        </div>
      </div>
      {/* remove black after using vantajs and use bg-transparent*/}

      <div className=" bg-black  max-w-screen text-white  ">
        <h1 className="text-white text-4xl font-bold">
          Enhance your<span className="underline decoration-[#3294db]"> productivity</span> with our expert solutions.
        </h1>
        <span className="inline-block w-96 h-full bg-white mt-0"></span>
        <p className="font-medium">
          Partnering with KhatraTech means providing your clients with the tools
          and strategies they need to thrive in a digital-first world, achieving
          measurable results and sustained success.
        </p>
        <br />
        <br />
        <div className="grid  grid-cols-2 card space-x-6 space-y-4">
          {sections.map((section, index) => (
            <div className="  text-black bg-white p-4 rounded-3xl" key={index}>
              <h3 className="text-white bg-black p-4 rounded-3xl ">
                {section.title}
              </h3>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      {/* remove black after using vantajs and use bg-transparent */}


        <span className="flex items-center justify-center gap-4 bg-black text-white text-4xl max-w-screen">
         
         <Image
         src="/assets/Images/customer-service.png"
         height={50}
         width={50}
         alt="customer service"
         />
          <span>Get in Touch</span>
        </span>
        <br />
        <span className=" flex items-center justify-center font-bold">
          Lets Disscuss You need
        </span>
        <br />
        <br />
        <div className=" items-center justify-center hidden sm:ml-6 sm:flex sm:items-center">
          <button className="bg-white  hover:border-1 rounded-4xl  hover:border-white hover:text-white text-black  font-bold py-2 px-4  cursor-pointer hover:bg-[#3498db]">
            Contacts
          </button>
        </div>
        <Teams />
        <TestiMonials />
        <Faq />
      </div>
    </>
  );
};

export default page;
