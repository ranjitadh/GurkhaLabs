import React from "react";
import Marquee from "react-fast-marquee";

const testimonials = [
  {
    text: "The graphic design team at KhatraTech brought our brand to life with stunning visuals and cohesive branding materials.",
    name: "Tara Karki",
    icon: "https://www.khatratech.com/assets/img/associated/Tara%20Global%20Logo.png",
    user: "Tara Global, Owner",
  },
  {
    text: "KhatraTech's digital marketing services have been a game-changer for our business. Their targeted campaigns and innovative strategies have significantly boosted our online presence. ",
    name: "Aadarsh Bhattarai",
    icon: "https://cdn.bootstrapstudio.io/placeholders/1400x800.png",
    user: "User",
  },
  {
    text: "KhatraTech transformed our outdated website into a modern, user-friendly platform. Their team’s attention to detail and commitment to our vision was exceptional.",
    name: "Anjan",
    icon: "https://www.khatratech.com/assets/img/associated/helios.jpg",
    user: "Helios Nepal, CEO",
  },
];

const TestiMonials = () => {
  return (
    <div className="text-white mt-10 flex flex-col items-center px-4">
      <h1 className="text-4xl font-bold tracking-tight">Testimonials</h1>
      <div className="bg-[#3498db] h-1 w-64 inline-block mb-10 border-2 rounded-full"></div>

      <Marquee speed={80} gradient={true} gradientColor="black" pauseOnHover={false} className="w-full">
        <div className="flex gap-6 px-4">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800  p-6 rounded-xl shadow-lg flex flex-col justify-between h-[300px] min-w-[320px] mx-2 transition-transform transform hover:scale-90 hover:shadow-xl border border-gray-700"
            >
              <p className="text-sm text-gray-200 mb-4 flex justify-center w-40 italic line-clamp-6">"{item.text}"</p>
              <div className="mt-auto flex items-center gap-4">
                {item.icon && (
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-12 h-12 rounded-full border-2 border-[#3498db] object-cover"
                  />
                )}
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                  <p className="text-xs text-gray-400">{item.user}</p>
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