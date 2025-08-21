"use client";
import React from "react";
import SwipeButton from "@/components/animata/button/swipe-button";
import Faq from "@/components/ui/Faq";
import Teams from "@/components/ui/Teams";
import TestiMonials from "@/components/ui/TestiMonials";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-gradient-to-br via-gray-900 from-[#103045] to-black  text-white overflow-hidden">

      <div className="px-6 md:px-28 py-16 grid md:grid-cols-2 gap-10 items-center">
   
        <div className="flex justify-center">
          <Image
            src="/assets/SVG/COMPANY.svg"
            alt="Company"
            height={400}
            width={500}
            className="rounded-2xl shadow-lg"
          />
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-[#3498db] transition-all duration-300">
          <h2 className="text-3xl font-bold text-[#3498db] mb-4"> Company</h2>
          <p className="text-gray-300 leading-relaxed">
            <span className="font-extrabold text-[#3498db] tracking-wider">
              KhatraTech,
            </span>{" "}
            where innovation meets excellence. Founded with a passion for
            technology and a commitment to quality. We specialize in providing
            best and comprehensive tech solutions to businesses of all sizes. Our
            team of experienced professionals excels in web design, web
            development, app development, digital marketing, IT consultation, and
            graphics design. We pride ourselves on delivering top-notch services
            that drive growth, enhance efficiency, and create lasting value for
            our clients.
          </p>
        </div>
      </div>

  
      <div className="px-6 md:px-28 py-16 grid md:grid-cols-2 gap-10 items-center">
       
        <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-[#ff903e] transition-all duration-300 order-2 md:order-1">
          <h2 className="text-3xl font-bold text-[#ff903e] mb-4">Vision</h2>
          <p className="text-gray-300 leading-relaxed">
            Our vision is to be one of a kind in technology solutions, recognized
            for our creativity, innovation, and unwavering dedication to
            excellence. We strive to empower businesses by providing cutting-edge
            technology services that enable them to thrive in an ever-evolving
            digital landscape. We aim to build long-lasting relationships with our
            clients, based on trust, transparency, and mutual success.
          </p>
        </div>
  
        <div className="flex justify-center order-1 md:order-2">
          <Image
            src="/assets/SVG/vision.svg"
            alt="Vision"
            height={400}
            width={500}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>

      
      <div className="px-6 md:px-28 py-16 grid md:grid-cols-2 gap-10 items-center">
      
        <div className="flex justify-center">
          <Image
            src="/assets/SVG/MISSION.svg"
            alt="Mission"
            height={400}
            width={500}
            className="rounded-2xl shadow-lg"
          />
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-[#3498db] transition-all duration-300">
          <h2 className="text-3xl font-bold text-[#3498db] mb-4">Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            Our mission is to deliver innovative and customized tech solutions
            that meet the unique needs of each client. We are dedicated to
            providing exceptional service and achieving outstanding results. Our
            approach combines technical expertise, creativity, and a deep
            understanding of our clients&apos; goals. By staying ahead of industry
            trends and continually improving our skills, we ensure our clients
            receive the best possible solutions to achieve their business
            objectives. At KhatraTech, we are committed to making technology work
            for you.
          </p>
        </div>
      </div>

  
      <Teams />

  
      <TestiMonials />


      <Faq />

    </div>
  );
};

export default About;
