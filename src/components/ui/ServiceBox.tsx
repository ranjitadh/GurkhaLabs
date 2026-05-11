"use client"

import * as React from "react"
import FlipCard from "../animata/container/Flipcard"

type Service = {
  title: string
  subtitle: string
  description: string
  image: string
  rotate?: "x" | "y"
}

const services: Service[] = [
  {
    title: "Website Development",
    subtitle: "Web Development",
    description: "We build responsive, user-friendly websites tailored to your brand and audience.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rotate: "x",
  },
  {
    title: "Digital Marketing",
    subtitle: "Digital Marketing",
    description: "Boost your brand’s online presence with targeted and effective digital marketing strategies.",
    image: "https://images.unsplash.com/photo-1555077292-22a4489e5897?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rotate: "x",
  },
  {
    title: "Graphics Designer",
    subtitle: "Graphics Designer",
    description: "Creative graphic designs that visually communicate your brand’s unique message effectively.",
    image: "https://images.unsplash.com/photo-1687930679761-66223bff307d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rotate: "x",
  },
  {
    title: "App development",
    subtitle: "App development",
    description: "Designing intuitive and responsive mobile apps tailored to enhance user experience.",
    image: "https://cdn.pixabay.com/photo/2023/11/10/10/21/mobile-app-development-company-8379091_1280.png",
    rotate: "x",
  },
  {
    title: "Web Design",
    subtitle: "Web Designer",
    description: "Crafting visually stunning, user-friendly websites that engage and convert visitors.",
    image: "https://images.unsplash.com/photo-1678690832311-bb6e361989ca?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZSUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww",
    rotate: "x",
  },
]

const ServiceBox: React.FC = () => {
  return (
    <section className="bg-transparent text-gray-900 py-10 sm:py-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 underline decoration-[#3294db]">
        We Offer Awesome{" "}
        <span className="text-[#3498db]">
          Services
        </span>
      </h2>

      <div className="max-w-7xl mx-auto space-y-16 px-4 sm:px-8 lg:px-12">
        {services.map((svc, idx) => {
          const isEven = idx % 2 === 0
          const delayClass = isEven ? "delay-200" : "delay-400"
          const slideAnim = isEven
            ? "animate-(--animate-slide-in-left)"
            : "animate-(--animate-slide-in-right)"

          return (
            <div
              key={idx}
              className={`flex flex-col md:flex-row ${!isEven ? "md:flex-row-reverse" : ""} items-center gap-8 md:gap-12 transition-all duration-700 animate-(--animate-fade-in-up) ${delayClass}`}
            >
              {/* Image/FlipCard */}
              <div className="w-full md:w-1/2 flex justify-center">
                <FlipCard
                
                  image={svc.image}
                  title={svc.title}
                  subtitle={svc.subtitle}
                  description={svc.description}
              
                  rotate="y"
                  className="w-[600px] h-[400px] rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold text-[#3498db] mb-4 ${slideAnim} transition duration-500`}>
                  {svc.title}
                </h3>
                <p className={`${slideAnim} transition duration-500 delay-100 text-sm sm:text-base text-gray-700 font-medium leading-relaxed`}>
                  {svc.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ServiceBox
