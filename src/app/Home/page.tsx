import React from "react";
import Teams from "@/components/ui/Teams";
import TestiMonials from "@/components/ui/TestiMonials";
import Faq from "@/components/ui/Faq";
import { Laptop } from "lucide-react";
import Image from "next/image";
import FlipCard from "@/components/animata/container/Flipcard";
import { FaFigma, FaAppStoreIos } from "react-icons/fa";
import SwipeButton from "@/components/animata/button/swipe-button";

const page = () => {
  const sections = [
    {
      title: "Brand Presence",
      subtitle: "Creative Impact",
      image:
        "https://images.unsplash.com/photo-1751257983922-a627088d4c21?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0",
      content:
        "Through compelling web design, robust apps, and impactful graphics that strengthen brand identity and visibility.",
    },
    {
      title: "Customer Engagement",
      subtitle: "User Experience",
      image:
        "https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.1.0",
      content:
        "With user-centric designs and intuitive interfaces that enhance user experience and encourage interaction.",
    },
    {
      title: "Business Growth",
      subtitle: "Revenue Focused",
      image:
        "https://images.unsplash.com/photo-1633158829875-e5316a358c6f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0",
      content:
        "By leveraging digital marketing strategies to attract, engage, and retain customers, ultimately boosting sales and revenue.",
    },
    {
      title: "Optimization",
      subtitle: "IT Alignment",
      image:
        "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0",
      content:
        "Through IT consultation that aligns technology investments with business objectives.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="bg-black flex flex-col justify-center items-center text-center px-4 py-16 text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
        <p>Service that</p>
        <p>Sparks Your</p>
        <p>Growth</p>
      </div>

      {/* Our Services */}
      <h1 className="mt-20 text-center text-white text-3xl md:text-5xl font-bold underline decoration-4 decoration-primary">
        Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-12 text-white font-semibold">
        <div className="flex items-center space-x-2 cursor-pointer hover:text-[#3498db]">
          <Laptop className="h-6 w-6" />
          <span>Web Development</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer hover:text-[#3498db]">
          <FaFigma className="h-6 w-6" />
          <span>Web Design</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer hover:text-[#3498db]">
          <Image
            src="/assets/Images/Graphics_design.png"
            width={24}
            height={24}
            alt="Graphics Design"
          />
          <span>Graphics Design</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer hover:text-[#3498db]">
          <FaAppStoreIos className="h-6 w-6" />
          <span>App Development</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer hover:text-[#3498db]">
          <Image
            src="/assets/Images/technical-support.png"
            width={24}
            height={24}
            alt="IT Consultant"
          />
          <span>IT Consultant</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer hover:text-[#3498db]">
          <Image
            src="/assets/Images/technology.png"
            width={24}
            height={24}
            alt="Digital Marketing"
          />
          <span>Digital Marketing</span>
        </div>
      </div>

      {/* Enhance Productivity Section */}
      <div className="bg-black text-white px-4 py-16">
        <h1 className="text-2xl sm:text-4xl font-bold text-center mb-6">
          Enhance your
          <span className="underline decoration-[#3294db]">
            {" "}
            productivity{" "}
          </span>
          with our expert solutions.
        </h1>

        <p className="max-w-3xl mx-auto text-center text-base sm:text-lg font-medium">
          Partnering with KhatraTech means providing your clients with the tools
          and strategies they need to thrive in a digital-first world, achieving
          measurable results and sustained success.
        </p>

        {/* Flip Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
          {sections.map((section, index) => (
            <FlipCard
              key={index}
              image={section.image}
              title={section.title}
              subtitle={section.subtitle}
              description={section.content}
              rotate="y"
              className="h-64 w-full max-w-md mx-auto"
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="flex justify-center items-center text-2xl sm:text-4xl gap-4">
            <Image
              src="/assets/Images/customer-service.png"
              height={50}
              width={50}
              alt="customer service"
            />
            <span>Get in Touch</span>
          </div>
          <p className="mt-4 font-bold text-lg">Let&apos;s Discuss Your Need</p>

          <div className="mt-6 flex justify-center">
            <a href="/contact">
              <SwipeButton
                         className=" cursor-pointer"
                         firstClass="bg-white text-black rounded"
                         firstText="Contact us"
                         secondClass="bg-black text-white border border-white"
                         secondText="Contact us"
                       />
            </a>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="mt-16">
          <Teams />
        </div>
        <div className="mt-16">
          <TestiMonials />
        </div>
        <div className="mt-16">
          <Faq />
        </div>
      </div>
    </>
  );
};

export default page;
