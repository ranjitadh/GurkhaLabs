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
import * as motion from "motion/react-client"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.1, ease: "easeInOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.1, ease: "easeInOut" } },
};

const page = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row bg-black text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col justify-center items-start px-6 md:px-20 py-20 text-4xl sm:text-5xl lg:text-7xl font-bold"
        >
          Skyrocket your
          <br />
          productivity
          <br />
          with us.
          <div className="mt-8">
            <a href="/contact">
              <SwipeButton
                className="cursor-pointer"
                firstClass="bg-white text-black rounded"
                firstText="Contact us"
                secondClass="bg-black text-white border border-white"
                secondText="Contact us"
              />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
          className="flex justify-center items-center py-10 px-4"
        >
          <Image
            src="/assets/Images/feature.jpg"
            width={400}
            height={400}
            alt="feature"
            className="transition-all duration-300 ease-in-out hover:scale-110"
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
        className="flex flex-col-reverse md:flex-row justify-center items-center py-16 px-6 bg-black text-white"
      >
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <Image
            src="/assets/Images/Master-Data-Management.png"
            width={500}
            height={500}
            alt="feature"
            className="transition-all duration-300 ease-in-out hover:scale-105"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">Manage your Data</h1>
          <Link href="/services">
            <span className="text-[#3498db] text-xl inline-block mt-4">
              Browse Our Services{" "}
              <ArrowBigRightDash className="inline text-white" />
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
        className="flex flex-col md:flex-row justify-center items-center py-16 px-6 bg-black text-white"
      >
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">
            Develop your Application
          </h1>
          <Link href="/services">
            <span className="text-[#3498db] text-xl inline-block mt-4">
              Browse Our Services{" "}
              <ArrowBigRightDash className="inline text-white" />
            </span>
          </Link>
          <div className="mt-6 flex justify-center md:justify-start space-x-6 text-3xl">
            <FaAppStoreIos className="hover:text-[#3498db]" />
            <GiProcessor className="hover:text-[#3498db]" />
            <BiLogoPlayStore className="hover:text-[#3498db]" />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <Image
            src="/assets/Images/Revolut.jpg"
            width={500}
            height={500}
            alt="feature"
            className="transition-all duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </motion.div>

      {/* Marketing Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInRight}
        className="flex flex-col md:flex-row justify-center items-center py-16 px-6 bg-black text-white"
      >
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/Images/B2B-digital-marketing.png"
            width={500}
            height={500}
            alt="feature"
            className="transition-all duration-300 ease-in-out hover:scale-105"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl md:text-4xl font-bold">
            Marketing and Advertisement
          </h1>
          <Link href="/services">
            <span className="text-[#3498db] text-xl inline-block mt-4">
              Browse Our Services{" "}
              <ArrowBigRightDash className="inline text-white" />
            </span>
          </Link>
          <div className="mt-6 flex justify-center md:justify-start space-x-6 text-3xl">
            <FaAppStoreIos className="hover:text-[#3498db]" />
            <GiProcessor className="hover:text-[#3498db]" />
            <BiLogoPlayStore className="hover:text-[#3498db]" />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default page;
