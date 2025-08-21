"use client"

import React from "react";
import Teams from "@/components/ui/Teams";
import TestiMonials from "@/components/ui/TestiMonials";
import Faq from "@/components/ui/Faq";
import { Laptop } from "lucide-react";
import Image from "next/image";
import FlipCard from "@/components/animata/container/Flipcard";
import { FaFigma, FaAppStoreIos } from "react-icons/fa";
import SwipeButton from "@/components/animata/button/swipe-button";
import JumpingTextInstagram from "@/components/animata/text/staggered-letter";
import { motion } from "framer-motion";
import QuoteHeading from "@/components/Quote/QuoteHeading";
import HomeSkeleton from "@/components/ui/Skeleton/home";
import { Suspense } from "react";



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
      <Suspense fallback={<HomeSkeleton />}></Suspense>

      {/* Hero Section */}
    <motion.div
  suppressHydrationWarning
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="bg-transparent grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 py-12 md:py-16 text-white font-bold leading-tight"
>
  {/* Left Column: Text */}
  <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left gap-4">
    <QuoteHeading
      text={
        <JumpingTextInstagram
          text="Service"
          className="text-9xl sm:text-6xl lg:text-7xl"
        />
      }
    />
    
    <JumpingTextInstagram
      text="That Sparks"
      className="text-9xl sm:text-6xl lg:text-7xl"
    />
    <JumpingTextInstagram
      text="Growth"
      className="text-9xl sm:text-6xl lg:text-7xl"
    />
  </div>

  {/* Right Column: Image */}
  <div className="flex justify-center md:justify-end">
    <Image
      src="/assets/SVG/data-extraction-animate.svg"
      alt="computer AI"
      height={1000}
      width={1000}
    
    />
  </div>
</motion.div>



      {/* Our Services */}
    <motion.h1

  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  className="mt-20 flex items-center justify-center gap-3 text-white text-3xl md:text-5xl font-bold underline decoration-4 decoration-[#3498db]"
>

</motion.h1>
<QuoteHeading className="text-5xl md:text-5xl font-bold text-center mb-10" text="Our Services" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1 }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-12 text-white font-semibold"
      >
        {[
          { icon: <Laptop className="h-6 w-6" />, label: "Web Development" },
          { icon: <FaFigma className="h-6 w-6" />, label: "Web Design" },
          {
            icon: (
              <Image
                src="/assets/Images/Graphics_design.png"
                width={24}
                height={24}
                alt="Graphics Design"
              />
            ),
            label: "Graphics Design",
          },
          { icon: <FaAppStoreIos className="h-6 w-6" />, label: "App Development" },
          {
            icon: (
              <Image
                src="/assets/Images/technical-support.png"
                width={24}
                height={24}
                alt="IT Consultant"
              />
            ),
            label: "IT Consultant",
          },
          {
            icon: (
              <Image
                src="/assets/Images/technology.png"
                width={24}
                height={24}
                alt="Digital Marketing"
              />
            ),
            label: "Digital Marketing",
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-2 cursor-pointer hover:text-[#3498db]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {service.icon}
            <span>{service.label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Enhance Productivity Section */}
  <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="bg-transparent text-white px-4 py-16"
>
  {/* Quote Heading already handles h1 */}
  <QuoteHeading text="Enhance your" />

  <p className="text-2xl sm:text-4xl font-bold text-center mb-6">
    <span className="underline decoration-[#3294db]">productivity</span> with our expert solutions.
  </p>
</motion.div>

        
        

        {/* Flip Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-6 mt-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <FlipCard
                image={section.image}
                title={section.title}
                subtitle={section.subtitle}
                description={section.content}
                rotate="y"
                className="h-60 w-full max-w-md mx-auto"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="flex font-bold text-white justify-center items-center text-2xl sm:text-4xl gap-4">
            <Image
              src="/assets/Images/customer-service.png"
              height={50}
              width={50}
              alt="customer service"
            />
            <span className="font-bold text-white">Get in Touch</span>
          </div>
          <p className="mt-4 font-bold text-lg text-white">Let&apos;s Discuss Your Need</p>

          <div className="mt-6 flex justify-center">
            <a href="/contact">
              <SwipeButton
                className="cursor-pointer"
                firstClass="bg-white text-black rounded"
                firstText="Contact us"
                secondClass="bg-transparent text-white border border-white"
                secondText="Contact us"
              />
            </a>
          </div>
        </motion.div>

        {/* Additional Sections */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <Teams />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <TestiMonials />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <Faq />
        </motion.div>

    </>
  );
};

export default page;
