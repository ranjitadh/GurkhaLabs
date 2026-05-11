import React from "react";
import Marquee from "react-fast-marquee";

const testimonials = [
  {
    text: "The graphic design team at GurkhasLabs brought our brand to life with stunning visuals and cohesive branding materials.",
    name: "Tara Karki",
    icon: "/assets/Images/Tara Global Logo.png",
    user: "Tara Global, Owner",
  },
  {
    text: "GurkhasLabs's digital marketing services have been a game-changer for our business. Their targeted campaigns and innovative strategies have significantly boosted our online presence.",
    name: "Aadarsh Bhattarai",
    icon: "/assets/Images/aayush.jpg",
    user: "Marketing Partner",
  },
  {
    text: "GurkhasLabs transformed our outdated website into a modern, user-friendly platform. Their team’s attention to detail and commitment to our vision was exceptional.",
    name: "Anjan",
    icon: "/assets/Images/helios.jpg",
    user: "Helios Nepal, CEO",
  },
  {
    text: "Working with GurkhasLabs was a seamless experience. They understood our technical requirements perfectly and delivered a robust mobile application.",
    name: "Sandeep Gupta",
    icon: "/assets/Images/application.png",
    user: "Tech Lead, Nakab",
  }
];

const TestiMonials = () => {
  return (
    <div className="text-gray-900 mt-10 flex flex-col items-center px-4">
      <h1 className="text-4xl mb-10 font-bold underline decoration-[#3498db] tracking-tight text-gray-900">
        Testimonials
      </h1>

      <Marquee
        speed={80}
        gradient={true}
        gradientColor={[248, 250, 252]}
        pauseOnHover={true}
        loop={0}
      >
        <div className="flex">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between h-[300px] min-w-[320px] mx-2 transition-transform transform hover:scale-95 hover:shadow-lg border border-gray-100 flex-shrink-0"
            >
              <p className="text-sm text-gray-700 mb-4 flex justify-center w-full italic line-clamp-6">
                "{item.text}"
              </p>
              <div className="mt-auto flex items-center gap-4">
                {item.icon && (
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-12 h-12 rounded-full border-2 border-[#3498db] object-cover"
                  />
                )}
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                  <p className="text-xs text-gray-500 font-medium">{item.user}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default TestiMonials;
