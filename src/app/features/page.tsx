"use client";

import Workflow from "../../components/ui/flow";
import Image from "next/image";
import {
  FaDatabase,
  FaCloud,
  FaMobileAlt,
  FaAppStoreIos,
} from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import { GiProcessor } from "react-icons/gi";
import Link from "next/link";
import React from "react";
import { ArrowBigRightDash } from "lucide-react";
import SwipeButton from "@/components/animata/button/swipe-button";
import * as motion from "motion/react-client";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const Page = () => {
  return (
    <div className="bg-transparent text-white w-full overflow-hidden">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col justify-center items-center lg:items-start w-full px-6 md:px-20 py-20 text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Skyrocket your <br />
            productivity <br />
            with us.
          </h1>
          <div className="mt-8">
            <Link href="/contact">
              <SwipeButton
                className="cursor-pointer"
                firstClass="bg-white text-black rounded"
                firstText="Contact us"
                secondClass="bg-transparent text-white border border-white"
                secondText="Contact us"
              />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
          className="flex justify-center items-center w-full px-4 py-10"
        >
          <Image
            src="/assets/SVG/Features.svg"
            width={400}
            height={400}
            alt="feature"
            className="w-full max-w-[400px] h-auto transition-all duration-300 ease-in-out hover:scale-110"
          />
        </motion.div>
      </div>

      <Workflow />

      {/* Manage Data Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="flex flex-col-reverse md:flex-row items-center justify-center py-16 px-4 md:px-20 space-y-10 md:space-y-0 bg-transparent text-white"
      >
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/Images/Master-Data-Management.png"
            width={500}
            height={500}
            alt="Manage Data"
            className="w-full max-w-[400px] h-auto transition-all duration-300 ease-in-out hover:scale-105"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">Manage your Data</h2>
          <Link href="/services">
            <span className="text-[#3498db] text-xl inline-block mt-4">
              Browse Our Services <ArrowBigRightDash className="inline text-white" />
            </span>
          </Link>
          <div className="mt-6 flex justify-center md:justify-start space-x-6 text-3xl">
            <FaDatabase className="hover:text-[#3498db]" />
            <FaCloud className="hover:text-[#3498db]" />
            <FaMobileAlt className="hover:text-[#3498db]" />
          </div>
        </div>
      </motion.div>

      {/* Develop Application Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="flex flex-col md:flex-row items-center justify-center py-16 px-4 md:px-20 space-y-10 md:space-y-0 bg-transparent text-white"
      >
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">
            Develop your Application
          </h2>
          <Link href="/services">
            <span className="text-[#3498db] text-xl inline-block mt-4">
              Browse Our Services <ArrowBigRightDash className="inline text-white" />
            </span>
          </Link>
          <div className="mt-6 flex justify-center md:justify-start space-x-6 text-3xl">
            <FaAppStoreIos className="hover:text-[#3498db]" />
            <GiProcessor className="hover:text-[#3498db]" />
            <BiLogoPlayStore className="hover:text-[#3498db]" />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/Images/Revolut.jpg"
            width={500}
            height={500}
            alt="Develop App"
            className="w-full max-w-[400px] h-auto transition-all duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </motion.div>

      {/* Marketing Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInRight}
        className="flex flex-col md:flex-row items-center justify-center py-16 px-4 md:px-20 space-y-10 md:space-y-0 bg-transparent text-white"
      >
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/Images/B2B-digital-marketing.png"
            width={500}
            height={500}
            alt="Marketing"
            className="w-full max-w-[400px] h-auto transition-all duration-300 ease-in-out hover:scale-105"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">
            Marketing and Advertisement
          </h2>
          <Link href="/services">
            <span className="text-[#3498db] text-xl inline-block mt-4">
              Browse Our Services <ArrowBigRightDash className="inline text-white" />
            </span>
          </Link>
          <div className="mt-6 flex justify-center md:justify-start space-x-6 text-3xl">
            <FaAppStoreIos className="hover:text-[#3498db]" />
            <GiProcessor className="hover:text-[#3498db]" />
            <BiLogoPlayStore className="hover:text-[#3498db]" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Page;
