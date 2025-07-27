import React from "react";
import { Phone,Mail,MapPin } from 'lucide-react';
import { FaTwitter,FaLinkedin,FaSquareInstagram } from 'react-icons/fa6';
// import { Mail } from 'lucide-react';
// import { MapPin } from 'lucide-react';
// import { Twitter } from 'lucide-react';



const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 text-center p-6">
     
      <div className="container mx-auto">
       
       

        {/* Content Sections */}
{/* grid grid-cols-1 md:grid-cols-3 gap-8 mb-8  */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div>
            <br /><br />
            <h3 className="text-lg font-bold   mb-4">Our Services</h3>
            <ul className="space-y-2">
                
              <li>
                <a href="#" className="hover:text-gray-400">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  App Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Graphics Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  IT Consultation
                </a>
              </li>
            </ul>
          </div>

          <div>
             <br /><br />
            <h3 className="text-lg top-8 font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Vision
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Mission
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Team
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg top-8 font-bold mb-4 mt-12">Carrer</h3>
            <ul>

           
              <li>
                
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Job Openings
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Employee Success
                </a>
              </li>
               </ul>

          </div>

          <div className="relative w-full max-w-[1000] ">
            <img
              src="/assets/Images/nnneon.svg"
              alt="neon"
              className="w-96  h-auto"
            />

            <div className=" br-4 absolute top-8 left-4 p-4 text-white bg-transparent bg-opacity-50 rounded">
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
             <img
            src="/assets/Images/khatra tech color white.svg"
            alt="KhatraTech Logo"
            className="h-20 w-auto mt-4 ml-4"
          />
              
              <p className="mb-2">
               
                <a
                
                  href="mailto:khatratech@gmail.com"
                  className="hover:text-gray-400 transition-colors"
                >
                       <Mail className="inline mr-1" />

                  admin@admin.com
                   
                </a>
              </p>
              
              <p className="mb-2">
                <a
                  href="tel:+9779705970533"
                  className="hover:text-gray-400 transition-colors"
                >
                    <Phone className="inline mr-1" />
                  +977 9705970533
                </a>
              </p>
              <p className="mb-2">
                  <MapPin className="inline mr-1" />
                Sankhamul ,Lalitpur, Nepal</p>
              
            </div>
          </div>
        </div>



        {/* Logo */}
         <div className="flex-shrink-0 flex justify-center items-center mb-6">
          <img
            src="/assets/Images/khatra tech color white.svg"
            alt="KhatraTech Logo"
            className="h-32 w-auto"
          />
        </div>






        <div className="border-t border-gray-700 pt-4">
          <div className="mb-4">
            <a href="#" className="text-gray-100 hover:text-gray-400 mx-2">
              Privacy Policy
            </a>
            <br />
            <a href="#" className="text-gray-100 hover:text-gray-400 mx-2">
              Terms of Service
            </a>
          </div>
          <p className="mb-0">© 2025 KhatraTech. All rights reserved.</p>
        </div>
        <div className="cursor-pointer space-x-4">

      
     <FaTwitter  className="inline mr-1" />
<FaLinkedin  className="inline mr-1" />
<FaSquareInstagram  className="inline mr-1" />
     </div>
      </div>
    </footer>
  );
};

export default Footer;
