import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaTwitter, FaLinkedin, FaSquareInstagram } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  const currentDate = new Date();

  return (
    <footer className="bg-gray-900 text-gray-100 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold ml-10 mb-4">Our Services</h3>
            <ul className="space-y-2 ml-10">
              {[
                "Web Design",
                "Web Development",
                "App Development",
                "Graphics Design",
                "Digital Marketing",
                "IT Consultation",
              ].map((service, index) => (
                <li key={index}>
                  <a href="/services" className="hover:text-gray-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4  ml-10">About</h3>
            <ul className="space-y-2  ml-10">
              {["Company", "Vision", "Mission", "Team"].map((item, index) => (
                <li key={index}>
                  <a href="about" className="hover:text-gray-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Career */}
          <div>
            <h3 className="text-lg font-bold mb-4  ml-10">Career</h3>
            <ul className="space-y-2  ml-10">
              {["Job Openings", "Employee Success", "Case Study"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href="contact"
                      className="hover:text-gray-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-4  ml-10">Contact Us</h3>
            <p className="mb-2 flex items-center  ml-10">
              <Mail className="mr-2 h-5 w-5" />
              <a
                href="mailto:info@gurkhaslabs.com"
                className="hover:text-gray-400 transition-colors"
              >
                info@gurkhaslabs.com
              </a>
            </p>
            <p className="mb-2 flex items-center ml-10">
              <Phone className="mr-2 h-5 w-5" />
              <a
                href="tel:+9779748723044"
                className="hover:text-gray-400 transition-colors"
              >
                +977 9748723044
              </a>
            </p>
            <p className="mb-2 flex items-center ml-10">
              <MapPin className="mr-2 h-5 w-5" />
              Satdobato, Lalitpur, Nepal
            </p>
          </div>
        </div>

        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <Image
            src="/assets/Images/gurkhaslabs_logo.svg"
            height={100}
            width={100}
            alt="GurkhasLabs Logo"
            className="object-contain"
          />
        </div>

        {/* Bottom Links */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4">
            <a href="about" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </a>
            <a href="about" className="hover:text-gray-400 transition-colors">
              Terms of Service
            </a>
          </div>

          {/* Socials */}
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://x.com/GurkhasLabs"
              className="hover:text-gray-400 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href="https://np.linkedin.com/company/gurkhaslabs"
              className="hover:text-gray-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/gurkhaslabs/"
              className="hover:text-gray-400 transition-colors"
              aria-label="Instagram"
            >
              <FaSquareInstagram className="h-6 w-6" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © {currentDate.getFullYear()} GurkhasLabs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
