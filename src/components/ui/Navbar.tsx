// import React, { useState } from 'react';
// import Logo from "@assets/Images/logo.png"

const Navbar: React.FC = () => {

  return (
    <nav className="bg-black shadow-lg">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-28">
          <div className="flex ">
            <div className="flex-shrink-0 mr-5 flex items-center ">
              <span> <img src ="/assets/Images/khatra tech color white.png" alt="Company Logo" className="h-24 w-auto ml-5 " /> </span>
            </div>

            <div className=" 2xl:ml-60 sm:flex space-x-8 font-extrabold">
              <a href="#" className=" ml-5 border-b-2 border-transparent text-gray-100 hover:border-[#3498db] hover:text-white inline-flex items-center px-1 pt-1 text-xl font-medium">
                Home
              </a>
              <a href="#" className="border-b-2 border-transparent text-gray-100 hover:border-[#3498db] hover:text-white inline-flex items-center px-1 pt-1 text-xl font-medium">
                About
              </a>
              <a href="#" className="border-b-2 border-transparent text-gray-100 hover:border-[#3498db] hover:text-white inline-flex items-center px-1 pt-1 text-xl font-medium">
                Services
              </a>
              <a href="#" className="border-b-2 border-transparent text-gray-100 hover:border-[#3498db] hover:text-white inline-flex items-center px-1 pt-1 text-xl font-medium">
                Career
              </a>
                <a href="#" className="border-b-2 border-transparent text-gray-100 hover:border-[#3498db] hover:text-white inline-flex items-center px-1 pt-1 text-xl font-medium">
                Our Work
              </a>
                <a href="#" className="border-b-2 border-transparent text-gray-100 hover:border-[#3498db] hover:text-white inline-flex items-center px-1 pt-1 text-xl font-medium">
                    Contact
                    </a>


              
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
           <button className="bg-gray-100 border-[#3498db] hover:border-1 rounded-4xl  hover:border-white hover:text-white  font-bold py-2 px-4  cursor-pointer hover:bg-[#3498db]">
            Get in Touch

          </button>
          </div>

          
        </div>
      </div>

     
    </nav>
  );
};

export default Navbar;