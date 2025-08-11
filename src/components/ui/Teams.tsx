"use client";
import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Member = [
  {
    name: "Aayush Pandeya",
    photo: "/assets/Images/aayush.jpg",
    role: "CEO",
    linkedin: "https://www.linkedin.com/in/aayush-pandeya-51a7352b3/",
    facebook: "https://www.facebook.com/aayush.pandeya.77",
    instagram: "https://www.instagram.com/aayush_pandeya/",
  },

  {
    name: "Aayush Pandeya",
    photo: "/assets/Images/aayush.jpg",
    role: "CEO",
    linkedin: "https://www.linkedin.com/in/aayush-pandeya-51a7352b3/",
    facebook: "https://www.facebook.com/aayush.pandeya.77",
    instagram: "https://www.instagram.com/aayush_pandeya/",
  },
  {
    name: "Aayush Pandeya",
    photo: "/assets/Images/aayush.jpg",
    role: "CEO",
    linkedin: "https://www.linkedin.com/in/aayush-pandeya-51a7352b3/",
    facebook: "https://www.facebook.com/aayush.pandeya.77",
    instagram: "https://www.instagram.com/aayush_pandeya/",
  },
  {
    name: "Aayush Pandeya",
    photo: "/assets/Images/aayush.jpg",
    role: "CEO",
    linkedin: "https://www.linkedin.com/in/aayush-pandeya-51a7352b3/",
    facebook: "https://www.facebook.com/aayush.pandeya.77",
    instagram: "https://www.instagram.com/aayush_pandeya/",
  },
  {
    name: "Aayush Pandeya",
    photo: "/assets/Images/aayush.jpg",
    role: "CEO",
    linkedin: "https://www.linkedin.com/in/aayush-pandeya-51a7352b3/",
    facebook: "https://www.facebook.com/aayush.pandeya.77",
    instagram: "https://www.instagram.com/aayush_pandeya/",
  },
];

const Teams = () => {
  return (
    <div className="text-white mt-16 px-4 md:px-10 lg:px-28 flex flex-col items-center">
      <h1 className="font-bold text-3xl md:text-5xl mb-10 text-center">
        Check out our amazing <span className="text-[#3498db]">team</span>
      </h1>

      <div className="w-full overflow-hidden">
        <Marquee
          speed={60}
          gradient={true}
          gradientColor="black"
          pauseOnHover={true}
          direction="right" 
        >
          {[...Member, ...Member].map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl 
                backdrop-blur-md bg-white/10 border border-white/20 shadow-xl 
                transition-transform transform hover:scale-90 duration-300 w-80 mx-6"
            >
              <div className="overflow-hidden mb-4 rounded-full w-32 h-32">
                <Image
                  width={128}
                  height={128}
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-105"
                />
              </div>

              <h2 className="text-xl font-semibold mb-1">{member.name}</h2>
              <p className="text-sm font-light mb-3">{member.role}</p>

              <div className="flex justify-center space-x-4 mt-2">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin className="text-blue-500 hover:text-blue-400 transition duration-300 text-2xl" />
                </a>
                <a href={member.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook className="text-blue-700 hover:text-blue-500 transition duration-300 text-2xl" />
                </a>
                <a href={member.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram className="text-pink-500 hover:text-pink-400 transition duration-300 text-2xl" />
                </a>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Teams;
