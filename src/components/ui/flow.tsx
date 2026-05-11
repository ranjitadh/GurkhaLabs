"use client";
import React from "react";
import Image from "next/image";

const workflow = () => {
  return (
    <>
      <div className="bg-transparent text-gray-900 text-center py-10 sm:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-4">
          Services that make your workflow{" "}
          <span className="text-[#3498db]">easier.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 lg:px-12 mt-10 max-w-7xl mx-auto">
          {[
            {
              src: "/assets/Images/product-development.png",
              title: "Improve Customer Engagement",
              desc: "With user-centric designs and intuitive interfaces that enhance user experience and encourage interaction.",
            },
            {
              src: "/assets/Images/public-relation.png",
              title: "Enhance Brand Presence",
              desc: "Through compelling web design, robust apps, and impactful graphics that strengthen brand identity and visibility.",
            },
            {
              src: "/assets/Images/promotion.png",
              title: "Drive Business  Growth",
              desc: "By strategically leveraging a wide range of digital marketing techniques—including content marketing, SEO, social media engagement, email campaigns.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center backdrop-blur-md bg-white/60 border border-gray-100 rounded-xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="overflow-hidden mb-4">
                <Image
                  src={service.src}
                  width={120}
                  height={120}
                  alt={service.title}
                  className="transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl text-[#3498db] font-bold mb-2">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed max-w-xs text-gray-700 font-medium">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-transparent text-gray-900 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          {[
            {
              src: "/assets/Images/resource-allocation.png",
              title: "Optimize Operations",
              desc: "Through IT consultation that aligns technology investments with business objectives, improving efficiency and reducing costs.",
              alt: "Optimization illustration",
            },
            {
              src: "/assets/Images/go.png",
              title: "Stay Ahead of Competition",
              desc: "By adopting innovative technologies and staying updated with digital trends, ensuring long-term competitiveness and growth.",
              alt: "Stay ahead illustration",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center backdrop-blur-md bg-white/60 border border-gray-100 rounded-xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="overflow-hidden mb-4">
                <Image
                  src={service.src}
                  width={120}
                  height={120}
                  alt={service.alt}
                  className="transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl text-[#3498db] font-bold mb-2">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed max-w-xs text-gray-700 font-medium">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default workflow;
