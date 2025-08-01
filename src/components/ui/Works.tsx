"use client";
import React from "react";
import Image from "next/image";

const ourwork = [
  {
    image: "/assets/Images/khatraDokan.png",
    header: "Khatra Dokan",
    text: "An online platform showcasing unique products and engaging user experience.",
  },
  {
    image: "/assets/Images/helios.jpg",
    header: "Helios Nepal",
    text:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolor, commodi minus tempore unde rerum ratione qui quibusdam ipsa? Tenetur molestiae amet ab magni, eligendi eum pariatur optio iusto corrupti.",
  },
  {
    image: "/assets/Images/Tara Global Logo.png",
    header: "Tara Global Pvt. Ltd.",
      text:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolor, commodi minus tempore unde rerum ratione qui quibusdam ipsa? Tenetur molestiae amet ab magni, eligendi eum pariatur optio iusto corrupti.",

  },
  {
    image: "/assets/Images/nakab.png",
    header: "Nakab",
       text:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolor, commodi minus tempore unde rerum ratione qui quibusdam ipsa? Tenetur molestiae amet ab magni, eligendi eum pariatur optio iusto corrupti.",

  },
];

const Works = () => {
  return (
    <div className="bg-black py-12 px-4 sm:px-10 text-white">
      
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
        Our <span className="text-[#3498db]">Works</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {ourwork.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl shadow-md hover:shadow-2xl p-4 transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.header}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#3498db] mb-2">
              {item.header}
            </h3>
            <p className="text-gray-300 text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
