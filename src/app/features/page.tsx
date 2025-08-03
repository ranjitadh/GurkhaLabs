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

const page = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row bg-black text-white">
        <div className="flex flex-col justify-center items-start px-6 md:px-20 py-20 text-4xl sm:text-5xl lg:text-7xl font-bold">
          Skyrocket your
          <br />
          productivity
          <br />
          with us.
          <div className="mt-8">
            <a
              href="/contact"
              className="border border-white bg-black text-white hover:border-[#3498db] hover:text-white font-bold py-2 px-6 rounded-3xl text-2xl"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center py-10 px-4">
          <Image
            src="/assets/Images/features.png"
            width={400}
            height={400}
            alt="feature"
            className="transition-all duration-300 ease-in-out hover:scale-110"
          />
        </div>
      </div>

      <Workflow />

      {/* Manage Data Section */}
      <div className="flex flex-col-reverse md:flex-row justify-center items-center py-16 px-6 bg-black text-white">
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <Image
            src="/assets/Images/aggregate.png"
            width={350}
            height={350}
            alt="feature"
            className="transition-all duration-300 ease-in-out hover:scale-105"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">
            Manage your Data
          </h1>
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
      </div>

      {/* Develop Application Section */}
      <div className="flex flex-col md:flex-row justify-center items-center py-16 px-6 bg-black text-white">
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
            src="/assets/Images/application.png"
            width={350}
            height={350}
            alt="feature"
            className="transition-all duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>

      {/* Marketing Section */}
      <div className="flex flex-col md:flex-row justify-center items-center py-16 px-6 bg-black text-white">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/Images/bullhorn.png"
            width={350}
            height={350}
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
      </div>
    </>
  );
};

export default page;
