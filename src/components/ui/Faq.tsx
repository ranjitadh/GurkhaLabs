"use client"
import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'



const Faq: React.FC = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a wide range of services including web design, web development, app development, digital marketing, IT consultation, and graphics design."
    },
    {
      question: "How long does it take to complete a project ?",
      answer: "The timeline for each project depends on its complexity and requirements. On average, web design and development projects can take 4-8 weeks, app development 8-12 weeks, and digital marketing campaigns are ongoing. We provide detailed timelines during the project planning phase."
    },
    {
      question: " Can you help improve my existing website/app?",
      answer: "Yes, we offer redesign and improvement services for existing websites and apps. We can enhance the design, functionality, and performance to better meet your business goals."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes we provide ongoing support and maintenance services to ensure your website, app, or IT systems continue to perform optimally. This includes updates, security checks, and troubleshooting."
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

  // State to track which FAQ is open (using index)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // Toggle function for each FAQ
  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="text-white mt-10 flex flex-col items-center px-4">
      <h1 className="text-4xl font-bold mb-4">FAQ</h1>
      <div className='bg-white h-6 w-32 inline-block   mb-10 border rounded-4xl"'></div>
       

      <div className="w-full max-w-xl space-y-2 ">
        
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full text-left text-lg font-semibold bg-white text-black px-4 py-3  shadow flex justify-between items-center border rounded-4xl"
            >
              <span>{faq.question}</span>
              <ChevronDown 
                className={`transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
              />
            </button>

            {openIndex === index && (
              <p className="bg-white text-black px-4 py-3  shadow mt-1 border rounded-4xl">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faq