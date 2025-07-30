import React from 'react';

const testimonials = [
  {
    text: "The graphic design team at KhatraTech brought our brand to life with stunning visuals and cohesive branding materials. Their creativity and professionalism made the entire process seamless and enjoyable. Our brand now stands out more than ever.",
    name: "Tara Karki",
    icon: "https://www.khatratech.com/assets/img/associated/Tara%20Global%20Logo.png", 
    user: "Tara Global, Owner",
  },
  {
    text: "KhatraTech's digital marketing services have been a game-changer for our business. Their targeted campaigns and innovative strategies have significantly boosted our online presence and engagement. We've seen a marked increase in conversions thanks to their efforts.",
    name: "Aadarsh Bhattarai",
    icon: "https://cdn.bootstrapstudio.io/placeholders/1400x800.png",
    user: "User",
  },
  {
    text: "KhatraTech transformed our outdated website into a modern, user-friendly platform. Their team’s attention to detail and commitment to our vision was exceptional. Our online traffic has increased significantly, and we couldn't be happier with the results.",
    name: "Anjan",
    icon: "https://www.khatratech.com/assets/img/associated/helios.jpg",
    user: "Helios Nepal, CEO",
  },
];

const TestiMonials = () => {
  return (
    <div className="text-white mt-10 flex flex-col items-center px-4">
      <h1 className="text-4xl font-bold">Testimonials</h1>
      <div className='bg-white h-6 w-64 inline-block   mb-10 border-2 rounded-4xl"'></div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col justify-between h-full"
          >
           
            <p className="text-sm text-gray-300 mb-6">"{item.text}"</p>
            <div className="mt-auto">
              <h3 className="text-lg font-semibold">{item.name}</h3>
             {item.icon && <img src={item.icon} alt={item.name} className="w-10 h-10 rounded-full mb-4" />}

              <p className="text-sm text-gray-400">{item.user}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestiMonials;
