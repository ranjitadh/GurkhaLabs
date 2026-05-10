"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook, FaInstagram, FaUserCircle } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const Member = [
  {
    name: "Mr CEO",
    role: "CEO",
    linkedin: "#",
    facebook: "#",
    instagram: "#",
  },
  {
    name: "Mr CEO",
    role: "CEO",
    linkedin: "#",
    facebook: "#",
    instagram: "#",
  },
  {
    name: "Mr CEO",
    role: "CEO",
    linkedin: "#",
    facebook: "#",
    instagram: "#",
  },
  {
    name: "Mr CEO",
    role: "CEO",
    linkedin: "#",
    facebook: "#",
    instagram: "#",
  },
  {
    name: "Mr CEO",
    role: "CEO",
    linkedin: "#",
    facebook: "#",
    instagram: "#",
  },
];

const Teams = () => {
  return (
    <div className="text-white mt-16 px-4 md:px-10 lg:px-28 flex flex-col items-center">
      <h1 className="font-bold text-3xl md:text-5xl mb-10 text-center">
        Check out our amazing <span className="text-[#3498db]">team</span>
      </h1>

      <div className="w-full overflow-visible py-20">
        <Marquee
          speed={60}
          pauseOnHover={true}
          direction="right" 
        >
          {Member.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-xl 
                backdrop-blur-md bg-white/10 border border-white/20 shadow-xl 
              transition-all transform hover:scale-105 hover:border-[#3498db]/50 hover:shadow-[0_0_20px_rgba(52,152,219,0.3)] duration-300 w-72 mx-10"
            >
              <div className="mb-4 flex items-center justify-center">
                <FaUserCircle className="w-32 h-32 text-gray-300 transition-transform duration-500 hover:scale-105" />
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
            </motion.div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Teams;
