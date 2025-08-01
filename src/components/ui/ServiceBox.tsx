import React from "react";
import Image from "next/image";

const ServiceBox = () => {
  const services = [
    {
      src: "/assets/Images/programming(1).png",
      alt: "Web Design",
      width: 300,
      height: 180,
      header: "Web Design",
      text: "Our web design services focus on developing visually appealing, user-friendly websites tailored to your brand and audience. We prioritize responsive design and collaborate closely with you to turn your vision into a standout online presence, ensuring your website looks great on all devices.",
    },
    {
      src: "/assets/Images/application.png",
      alt: "Web Development",
      width: 300,
      height: 180,
      header: "Web Development",
      text: "We develop responsive and high-performance web apps tailored to business needs, ensuring seamless UX and scalability across platforms.",
    },
    {
      src: "/assets/Images/appdev.png",
      alt: "App Development",
      width: 300,
      height: 180,
      header: "App Development",
      text: "We build robust, scalable mobile and web applications customized to your business needs. Our apps feature intuitive interfaces and seamless performance, designed to engage users and drive business growth.",
    },
    {
      src: "/assets/Images/Digital-Marketing.png",
      alt: "Digital Marketing",
      width: 300,
      height: 180,
      header: "Digital Marketing",
      text: "Our digital marketing strategies leverage SEO, social media, and targeted campaigns to boost your brand’s visibility and customer reach.",
    },
    {
      src: "/assets/Images/graphic-design.png",
      alt: "Graphics Design",
      width: 300,
      height: 180,
      header: "Graphics Design",
      text: "We create visually compelling designs that align with your brand identity, from logos to marketing materials, ensuring memorable impressions.",
    },
    {
      src: "/assets/Images/consultant.png",
      alt: "IT Consultant",
      width: 300,
      height: 180,
      header: "IT Consultant",
      text: "We offer strategic technology consulting to help businesses scale, optimize infrastructure, and implement smart digital solutions efficiently.",
    },
  ];

  return (
    <div className="bg-black text-white py-10 sm:py-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 underline decoration-[#3294db] animate-fade-in-down">
        We Offer Awesome <span className="text-[#3498db] underline decoration-amber-50">Services</span>
      </h2>

      <div className="space-y-16 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                isEven ? "" : "md:flex-row-reverse"
              } items-center gap-8 md:gap-12 animate-fade-in-up transition-all duration-700 delay-${index * 200}`}
            >
              <div className="w-full md:w-1/2 flex justify-center">
                <Image
                  src={service.src}
                  alt={service.alt}
                  width={service.width}
                  height={service.height}
                  className="rounded-lg object-contain max-h-[250px] shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold text-[#3498db] mb-4 animate-slide-in-${isEven ? 'left' : 'right'} transition-all duration-500`}>
                  {service.header}
                </h3>
                <p className={`text-sm sm:text-base text-gray-300 leading-relaxed animate-slide-in-${isEven ? 'left' : 'right'} transition-all duration-500 delay-100`}>
                  {service.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceBox;