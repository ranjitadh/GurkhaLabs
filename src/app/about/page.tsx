"use client";
import React, { Suspense } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import QuoteHeading from "@/components/Quote/QuoteHeading";
import AboutSkeleton from "@/components/ui/Skeleton/about";

const Teams = dynamic(() => import("@/components/ui/Teams"), { ssr: false });
const TestiMonials = dynamic(() => import("@/components/ui/TestiMonials"), { ssr: false });
const Faq = dynamic(() => import("@/components/ui/Faq"), { ssr: false });

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const About = () => {
  return (
    <Suspense fallback={<AboutSkeleton />}>
      <div className="bg-transparent text-gray-900 overflow-hidden pt-24">

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="px-6 md:px-28 py-16 grid md:grid-cols-2 gap-10 items-center"
      >
        <div className="flex justify-center">
          <Image
            src="/assets/SVG/COMPANY.svg"
            alt="Company"
            height={400}
            width={500}
            className="rounded-2xl shadow-xl drop-shadow-[0_0_15px_rgba(52,152,219,0.1)]"
          />
        </div>

        <div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-[#3498db] transition-all duration-300">
          <QuoteHeading text="Our Company" className="text-3xl font-bold text-[#3498db] mb-4" />
          <p className="text-gray-700 leading-relaxed font-medium">
            <span className="font-extrabold text-[#3498db] tracking-wider">
              GurkhasLabs,
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
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="px-6 md:px-28 py-16 grid md:grid-cols-2 gap-10 items-center"
      >
        <div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-[#ff903e] transition-all duration-300 order-2 md:order-1">
          <QuoteHeading text="Our Vision" className="text-3xl font-bold text-[#ff903e] mb-4" />
          <p className="text-gray-700 leading-relaxed font-medium">
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
            className="rounded-2xl shadow-xl drop-shadow-[0_0_15px_rgba(255,144,62,0.1)]"
          />
        </div>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="px-6 md:px-28 py-16 grid md:grid-cols-2 gap-10 items-center"
      >
        <div className="flex justify-center">
          <Image
            src="/assets/SVG/MISSION.svg"
            alt="Mission"
            height={400}
            width={500}
            className="rounded-2xl shadow-xl drop-shadow-[0_0_15px_rgba(52,152,219,0.1)]"
          />
        </div>

        <div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-[#3498db] transition-all duration-300">
          <QuoteHeading text="Our Mission" className="text-3xl font-bold text-[#3498db] mb-4" />
          <p className="text-gray-700 leading-relaxed font-medium">
            Our mission is to deliver innovative and customized tech solutions
            that meet the unique needs of each client. We are dedicated to
            providing exceptional service and achieving outstanding results. Our
            approach combines technical expertise, creativity, and a deep
            understanding of our clients&apos; goals. By staying ahead of industry
            trends and continually improving our skills, we ensure our clients
            receive the best possible solutions to achieve their business
            objectives. At GurkhasLabs, we are committed to making technology work
            for you.
          </p>
        </div>
      </motion.div>

      <div className="mt-16">
        <Teams />
      </div>

      <div className="mt-16">
        <TestiMonials />
      </div>

      <div className="mt-16 mb-20">
        <Faq />
      </div>

      </div>
    </Suspense>
  );
};

export default About;
