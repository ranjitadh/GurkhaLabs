import React from "react";
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaTwitter, FaLinkedin, FaSquareInstagram } from 'react-icons/fa6';
import Image from "next/image";





const Footer = () => {
  const currentDate = new Date();

  return (
    <footer className="bg-gray-900 text-gray-100 p-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  App Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Graphics Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  IT Consultation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Vision
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Mission
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Team
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Career</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Job Openings
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Employee Success
                </a>
              </li>
              <li>
                <a 
                href="#" className="hover:text-gray-400 transition-colors">
                  Case Study
                  


                </a>
              </li>
            </ul>
          </div>

          <div className="relative">
            {/* <Image
              src="/assets/Images/square(1).png"
              height={800}
              width={300}
              alt="square"
              className="w-full max-w-xs h-auto mx-auto lg:mx-0"
            /> */}
            <div className="absolute top-0 left-4  text-white bg-transparent bg-opacity-50  ">
              <h3 className="text-lg font-bold mb-2 ">Contact Us</h3>
             {/* <Image
  src="/assets/Images/khatra tech color white.svg"
  alt="KhatraTech Logo"
  width={160} 
  height={64} 
  className="h-16 w-auto mb-4"
/> */}
              <p className="mb-2 flex items-center">
                <Mail className="inline mr-2 h-5 w-5" />
                <a href="mailto:khatratech@gmail.com" className="hover:text-gray-400 transition-colors">
                  admin@admin.com
                </a>
              </p>
              <p className="mb-2 flex items-center">
                <Phone className="inline mr-2 h-5 w-5" />
                <a href="tel:+9779705970533" className="hover:text-gray-400 transition-colors">
                  +977 9705970533
                </a>
              </p>
              <p className="mb-2 flex items-center">
                <MapPin className="inline mr-2 h-5 w-5" />
                Sankhamul, Lalitpur, Nepal
              </p>
            </div>
          </div>
        </div>

         <div className="flex justify-center items-center">

         
         <Image
            src="/assets/Images/khatra tech color white.svg"
            height={150}
            width={150}
            alt="KhatraTech Logo"
            className="flex justify-center items-center  "
          />
           </div>
           

        <div className="border-t border-gray-700 pt-4 text-center grid grid-cols-1 justify-center items-center">
          
          <div className="mb-4 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            
            <a href="#" className="text-gray-100 hover:text-gray-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-100 hover:text-gray-400 transition-colors">
              Terms of Service
            </a>
          </div>
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://x.com/KhatraTech" className="text-gray-100 hover:text-gray-400 transition-colors">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="https://np.linkedin.com/company/khatra-tech" className="text-gray-100 hover:text-gray-400 transition-colors">
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com/khatratech/" className="text-gray-100 hover:text-gray-400 transition-colors">
              <FaSquareInstagram className="h-6 w-6" />
            </a>
          </div>
          
          
          
          <p className="mb-0">© {currentDate.getFullYear()} KhatraTech. All rights reserved.</p>


         
        
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;