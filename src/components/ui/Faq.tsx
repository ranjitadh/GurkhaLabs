"use client"
import React,{useState} from 'react'

const Faq: React.FC = () => {
const[isOpen,setIsOpen]=useState(false);
const toggleAnswer =() =>
{
    setIsOpen(!isOpen)
}


  return (
   <div className="text-white mt-10 flex flex-col items-center px-4">
      <h1 className="text-4xl font-bold mb-4">FAQ</h1>

      <div className="w-full max-w-xl">
        <button
          onClick={toggleAnswer}
          className="w-full text-left text-lg font-semibold bg-white text-black px-4 py-3 rounded shadow mb-2"
        >
          What services do you offer?
        </button>

        {isOpen && (
          <p className="bg-white text-black px-4 py-3 rounded shadow">
            We offer a wide range of services including web design, web development, app development,
            digital marketing, IT consultation, and graphics design.
          </p>
        )}
      </div>
    </div>
  
  )
}

export default Faq
