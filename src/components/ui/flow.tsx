import React from 'react'
import Image from "next/image"

const workflow = () => {
  return (
    <>
    <div>

        <div className="bg-black text-white text-center py-10 sm:py-16">
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
                      title: "Drive Business Growth",
                      desc: "By leveraging digital marketing strategies to attract, engage, and retain customers, boosting sales and revenue.",
                    },
                  ].map((service, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                      <Image
                        src={service.src}
                        width={120}
                        height={120}
                        alt={service.title}
                        className="mb-4"
                      />
                      <h3 className="text-xl sm:text-2xl md:text-3xl text-[#3498db] font-bold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base leading-relaxed max-w-xs">
                        {service.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
      
    </div>
      <div className="bg-black text-white py-10 sm:py-16">
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
                <div key={index} className="flex flex-col items-center text-center">
                  <Image
                    src={service.src}
                    width={120}
                    height={120}
                    alt={service.alt}
                    className="mb-4"
                  />
                  <h3 className="text-xl sm:text-2xl md:text-3xl text-[#3498db] font-bold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed max-w-xs">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          </>
  )
}

export default workflow
