"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import Link from "@/app/pages/about/About"

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black shadow-lg   z-10 ">
      <div className="min-w-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-18">
          <div className="flex">
            <div className="flex-shrink-0 mr-5 flex items-center">
              <span>
                <img
                  src="/assets/Images/khatra tech color white.png"
                  alt="Company Logo"
                  className="h-24 w-auto ml-5"
                />
              </span>
            </div>

            <div className="2xl:ml-60 ml-20 sm:flex space-x-8 font-extrabold">
              <Link
                href="/"
                className="ml-5 border-b-2 border-transparent text-gray-100 hover:border-[#3498db] hover:text-white inline-flex items-center px-1 pt-1 text-xl font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="border-b-2 border-transparent text-gray-100 hover:border-[#3498db] hover:text-white inline-flex items-center px-1 pt-1 text-xl font-medium"
              >
                About
              </Link>
              <Link
                href="/services"
                className="border-b-2 border-transparent text-gray-100 hover:border-[#3498db] hover:text-white inline-flex items-center px-1 pt-1 text-xl font-medium"
              >
                Services
              </Link>
             
              <Link
                href="/features"
                className="border-b-2 border-transparent text-gray-100 hover:border-[#3498db] hover:text-white inline-flex items-center px-1 pt-1 text-xl font-medium"
              >
                Features
              </Link>
              <Link
                href="/contact"
                className="border-b-2 border-transparent text-gray-100 hover:border-[#3498db] hover:text-white inline-flex items-center px-1 pt-1 text-xl font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
  {/* <Image
      src="/assets/Images/phone.gif"
      width={80}
      height={20}
      alt="Picture of the author"
    /> */}
        


          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link href="/contact">
              <button className="border border-white bg-black text-white hover:border-1 rounded-4xl hover:border-[#3498db] hover:text-white font-bold py-2 px-4 cursor-pointer">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar