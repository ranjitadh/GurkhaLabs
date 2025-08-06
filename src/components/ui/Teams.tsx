import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const Member = [
  {
    name: "Aayush  Pandeya",
    photo: "/assets/Images/aayush.jpg",
    role: "CEO",
    linkedin:
      "https://www.linkedin.com/authwall?trk=gf&trkInfo=AQHy8OX4C2OKnQAAAZhLj-vgG6CH5afvk2NFdQO3i5WAF0fA3rhFwH1-A5aaunLZDJBpjeQAbZCauKXzcaN8j_JD2kzyGbW4TKE5aqQFmUnOG6a39jvvgVh8ZkHg2Yr5WCGMP_Y=&original_referer=https://www.khatratech.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Faayush-pandeya-51a7352b3%2F",
    facebook: "https://www.facebook.com/aayush.pandeya.77",
    instagram: "https://www.instagram.com/aayush_pandeya/",
  },
  {
    name: "Aayush  Pandeya",
  photo: "/assets/Images/aayush.jpg",    role: "CEO",
    linkedin:
      "https://www.linkedin.com/authwall?trk=gf&trkInfo=AQHy8OX4C2OKnQAAAZhLj-vgG6CH5afvk2NFdQO3i5WAF0fA3rhFwH1-A5aaunLZDJBpjeQAbZCauKXzcaN8j_JD2kzyGbW4TKE5aqQFmUnOG6a39jvvgVh8ZkHg2Yr5WCGMP_Y=&original_referer=https://www.khatratech.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Faayush-pandeya-51a7352b3%2F",
    facebook: "https://www.facebook.com/aayush.pandeya.77",
    instagram: "https://www.instagram.com/aayush_pandeya/",
  },
  {
    name: "Aayush  Pandeya",
  photo: "/assets/Images/aayush.jpg",    role: "CEO",
    linkedin:
      "https://www.linkedin.com/authwall?trk=gf&trkInfo=AQHy8OX4C2OKnQAAAZhLj-vgG6CH5afvk2NFdQO3i5WAF0fA3rhFwH1-A5aaunLZDJBpjeQAbZCauKXzcaN8j_JD2kzyGbW4TKE5aqQFmUnOG6a39jvvgVh8ZkHg2Yr5WCGMP_Y=&original_referer=https://www.khatratech.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Faayush-pandeya-51a7352b3%2F",
    facebook: "https://www.facebook.com/aayush.pandeya.77",
    instagram: "https://www.instagram.com/aayush_pandeya/",
  },
  {
    name: "Aayush  Pandeya",
  photo: "/assets/Images/aayush.jpg",    role: "CEO",
    linkedin:
      "https://www.linkedin.com/authwall?trk=gf&trkInfo=AQHy8OX4C2OKnQAAAZhLj-vgG6CH5afvk2NFdQO3i5WAF0fA3rhFwH1-A5aaunLZDJBpjeQAbZCauKXzcaN8j_JD2kzyGbW4TKE5aqQFmUnOG6a39jvvgVh8ZkHg2Yr5WCGMP_Y=&original_referer=https://www.khatratech.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Faayush-pandeya-51a7352b3%2F",
    facebook: "https://www.facebook.com/aayush.pandeya.77",
    instagram: "https://www.instagram.com/aayush_pandeya/",
  },
  {
    name: "Aayush  Pandeya",
  photo: "/assets/Images/aayush.jpg",    role: "CEO",
    linkedin:
      "https://www.linkedin.com/authwall?trk=gf&trkInfo=AQHy8OX4C2OKnQAAAZhLj-vgG6CH5afvk2NFdQO3i5WAF0fA3rhFwH1-A5aaunLZDJBpjeQAbZCauKXzcaN8j_JD2kzyGbW4TKE5aqQFmUnOG6a39jvvgVh8ZkHg2Yr5WCGMP_Y=&original_referer=https://www.khatratech.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Faayush-pandeya-51a7352b3%2F",
    facebook: "https://www.facebook.com/aayush.pandeya.77",
    instagram: "https://www.instagram.com/aayush_pandeya/",
  },
  {
    name: "Aayush  Pandeya",
  photo: "/assets/Images/aayush.jpg",    role: "CEO",
    linkedin:
      "https://www.linkedin.com/authwall?trk=gf&trkInfo=AQHy8OX4C2OKnQAAAZhLj-vgG6CH5afvk2NFdQO3i5WAF0fA3rhFwH1-A5aaunLZDJBpjeQAbZCauKXzcaN8j_JD2kzyGbW4TKE5aqQFmUnOG6a39jvvgVh8ZkHg2Yr5WCGMP_Y=&original_referer=https://www.khatratech.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Faayush-pandeya-51a7352b3%2F",
    facebook: "https://www.facebook.com/aayush.pandeya.77",
    instagram: "https://www.instagram.com/aayush_pandeya/",
  },
];
const Teams = () => {
  return (
    <div className="text-white mt-10 flex flex-col items-center">
      <h1 className="font-bold text-5xl mb-10">Check out our amazing team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {Member.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <Image
         
              width={500}
              height={500}
              
              src={member.photo}
              alt={member.name}
              className="w-32 h-32 rounded-full mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
            <h2 className="text-sm font-thin  mb-2">{member.role}</h2>

            <div className="flex space-x-4 mt-2">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-blue-500 hover:text-blue-300 text-2xl" />
              </a>
              <a
                href={member.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-blue-700 hover:text-blue-500 text-2xl" />
              </a>
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-pink-500 hover:text-pink-400 text-2xl" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
