"use client"
import React from "react";
import Image from "next/image";
import ServiceBox from "@/components/ui/ServiceBox";
import Works from "@/components/ui/Works";
import Marquee from "@/components/ui/WorkMarquee";
import Workflow from "@/components/ui/flow";
import SplitText from "@/components/animata/text/split-text";
import { motion } from "motion/react"

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Page = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-black text-white">
        <motion.div
          className="flex flex-col justify-center p-6 sm:p-12 md:p-20 lg:p-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-6xl lg:text-4xl font-bold leading-tight">
            <br />
            <SplitText text="Everything " />
            <SplitText text="you " />
            <SplitText text="need " />
            <SplitText text="in " />
            <SplitText text="one " />
            <SplitText text="place " />
          </h1>
          <div className="h-1 w-48 sm:w-64 bg-[#3498db] mt-6 rounded-full" />
        </motion.div>

        <motion.div
          className="flex justify-center items-center p-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/assets/SVG/service.svg"
            width={400}
            height={400}
            alt="Settings illustration"
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]"
          />
        </motion.div>
      </div>

      <motion.div
        className="bg-black text-white text-center py-10 sm:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Used by some of the{" "}
          <span className="text-[#3498db]">best companies</span>
        </h2>
        <Marquee />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Workflow />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <ServiceBox />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Works />
      </motion.div>
    </>
  );
};

export default Page;
