import React from "react";
import Teams from "@/components/ui/Teams";
import TestiMonials from "@/components/ui/TestiMonials";
import Faq from "@/components/ui/Faq";
import { Laptop } from "lucide-react";
import Image from "next/image"
import FlipCard from "@/components/animata/container/Flipcard";

import { FaFigma, FaAppStoreIos } from "react-icons/fa";
import SwipeButton from "@/components/animata/button/swipe-button";


const page = () => {
const sections = [
  {
    title: "Brand Presence",
    subtitle: "Creative Impact",
    image: "https://images.unsplash.com/photo-1751257983922-a627088d4c21?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    content:
      "Through compelling web design, robust apps, and impactful graphics that strengthen brand identity and visibility.",
  },
  {
    title: "Customer Engagement",
    subtitle: "User Experience",
    image: "https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "With user-centric designs and intuitive interfaces that enhance user experience and encourage interaction.",
  },
  {
    title: "Business Growth",
    subtitle: "Revenue Focused",
    image: "https://images.unsplash.com/photo-1633158829875-e5316a358c6f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "By leveraging digital marketing strategies to attract, engage, and retain customers, ultimately boosting sales and revenue.",
  },
  {
    title: "Optimization",
    subtitle: "IT Alignment",
    image: "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "Through IT consultation that aligns technology investments with business objectives.",
  },
];


  return (
    <>
      {" "}
   
      {/* remove black after using vantajs and use bg-transparent*/}
      <div className="bg-black flex justify-center items-center  max-w-screen text-white text-8xl font-bold ">
        Service that
        <br />
        Sparks Your
        <br />
        Growth
      </div>


      <h1 className=" mt-72 font-bold mb-6  flex justify-center items-center underline decoration-4 decoration-primary  text-white text-5xl ">Our Services </h1>
      
      
      <div className="grid grid-cols-3 justify-center items-center mb-6 gap-16 font-bold  text-white ">
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

      <div className=" bg-black max-w-screen text-white  ">
        <h1 className="text-white text-4xl font-bold flex justify-center items-center">
          Enhance your<span className="underline decoration-[#3294db]"> &nbsp; productivity</span> &nbsp;with our expert solutions.
        </h1>
        <span className="inline-block w-96 h-full bg-white mt-0"></span>
        <p className="font-medium">
          Partnering with KhatraTech means providing your clients with the tools
          and strategies they need to thrive in a digital-first world, achieving
          measurable results and sustained success.
        </p>
        <br />
        <br />
       <div className="grid grid-cols-2 gap-6">

  {sections.map((section, index) => (
    <FlipCard
      key={index}
      image={section.image}
      title={section.title}
      subtitle={section.subtitle}
      description={section.content}
      rotate="y"
      className="h-64 w-full  max-w-md mx-auto"
    />
  ))}


</div>

      {/* remove black after using vantajs and use bg-transparent */}


        <span className="flex items-center mt-20 justify-center gap-4 bg-black text-white text-4xl max-w-screen">
         
         <Image
         src="/assets/Images/customer-service.png"
         height={50}
         width={50}
         alt="customer service"
         />
          <span className="">Get in Touch</span>
        </span>
        <br />
        <span className=" flex items-center justify-center font-bold">
          Lets Disscuss You need
        </span>
        <br />
        <br />
        <div className=" items-center justify-center hidden sm:ml-6 sm:flex sm:items-center">
          <a href="/contact">
                      <SwipeButton
                      
            className=" cursor-pointer"
            firstClass="bg-black text-white border border-white rounded"
            firstText="Contact us"
            secondClass="bg-[#3298db] text-white"
            secondText="Contact us"
          />
          </a>
        </div>
        <Teams />
        <TestiMonials />
        <Faq />
      </div>
    </>
  );
};

export default page;
