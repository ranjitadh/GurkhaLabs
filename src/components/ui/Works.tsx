"use client";
import React from "react";
import Image from "next/image";
import QuoteHeading from "@/components/Quote/QuoteHeading";

const ourwork = [
  {
    image: "/assets/Images/khatraDokan.png",
    header: "Khatra Dokan",
    text: "An online platform showcasing unique products and engaging user experience.",
  },
  {
    image: "/assets/Images/helios.jpg",
    header: "Helios Nepal",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolor, commodi minus tempore unde rerum ratione qui quibusdam ipsa?",
  },
  {
    image: "/assets/Images/Tara Global Logo.png",
    header: "Tara Global Pvt. Ltd.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolor, commodi minus tempore unde rerum ratione qui quibusdam ipsa?",
  },
  {
    image: "/assets/Images/nakab.png",
    header: "Nakab",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolor, commodi minus tempore unde rerum ratione qui quibusdam ipsa?",
  },
];

const Works = () => {
  return (
    <div className="bg-transparent py-10 px-4 sm:px-8 text-gray-900">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        <QuoteHeading text="Our Works" className="text-gray-900" />
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {ourwork.map((item, index) => (
          <div
            key={index}
            className="bg-white/60 backdrop-blur-md border border-gray-100 rounded-lg shadow-md p-4 
              transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer max-w-[280px] mx-auto"
          >
            <div className="flex items-start space-x-4 mb-4">
              <div className="relative w-12 h-12 flex-shrink-0 rounded-md overflow-hidden bg-gray-50">
                <Image
                  src={item.image}
                  alt={item.header}
                 fill
                 
                  className="rounded-md object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-[#3498db]">{item.header}</h3>
            </div>
            <p className="text-gray-700 text-sm font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
