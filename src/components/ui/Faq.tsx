'use client'
import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a wide range of services including web design, web development, app development, digital marketing, IT consultation, and graphics design."
  },
  {
    question: "How long does it take to complete a project?",
    answer: "The timeline for each project depends on its complexity and requirements. On average, web design and development projects can take 4–8 weeks, app development 8–12 weeks, and digital marketing campaigns are ongoing. We provide detailed timelines during the project planning phase."
  },
  {
    question: "Can you help improve my existing website/app?",
    answer: "Yes, we offer redesign and improvement services for existing websites and apps. We can enhance the design, functionality, and performance to better meet your business goals."
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes, we provide ongoing support and maintenance services to ensure your website, app, or IT systems continue to perform optimally. This includes updates, security checks, and troubleshooting."
  },
  {
    question: "What platforms and technologies do you use?",
    answer: "We work with a variety of platforms and technologies including HTML, CSS, JavaScript, React, Node.js, Python, PHP, Android, and more. We select the best tools to meet your project’s specific needs."
  },
  {
    question: "How do you approach digital marketing?",
    answer: "Our digital marketing approach is data-driven and tailored to your business. We use a combination of SEO, social media marketing, PPC campaigns, content marketing, and analytics to drive traffic and achieve measurable results."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We work with clients from various industries including e-commerce, healthcare, finance, education, technology, and more. Our solutions are customized to meet the unique needs of each industry."
  }
]

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="text-gray-900 mt-12 flex flex-col items-center px-4 sm:px-6 lg:px-8 mb-8">
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center">
        FAQ
      </h1>
      <div className="bg-[#3498db] h-1 w-20 sm:w-28 md:w-32 mb-8 rounded-full" />

      <div className="w-full max-w-md sm:max-w-xl md:max-w-2xl space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="transition-all duration-300">
            <button
              onClick={() => toggleAnswer(index)}
              className={`w-full text-left text-sm sm:text-base md:text-lg font-bold 
                px-4 py-4 shadow-sm flex justify-between items-center border border-gray-100 rounded-xl
                backdrop-blur-md bg-white/60 text-gray-900 hover:bg-white/80
                transition-all duration-300`}
            >
              <span className="flex-1 pr-4">{faq.question}</span>
              <ChevronDown
                className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-[#3498db]' : ''}`}
                size={24}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out
                ${openIndex === index ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'}
              `}
            >
              <p className="backdrop-blur-lg bg-white/40 text-gray-700 font-medium text-sm sm:text-base px-4 py-4 shadow-inner border border-gray-100 rounded-xl">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Faq
