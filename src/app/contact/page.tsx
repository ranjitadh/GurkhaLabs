import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Faq from "@/components/ui/Faq";
import MapEmbed from "@/components/ui/MapEmbed";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white font-bold bg-black min-h-screen space-y-6 p-4 sm:p-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-white bg-transparent text-center">
        Got any questions?
      </h1>

      <p className="text-center max-w-xl text-base sm:text-lg">
        Our team is always here to help. Send us a message or directly call us
        and we'll get back to you shortly.
      </p>

      <div>
        <a
          href="/contact"
          className="border border-white bg-black text-white hover:border-[#3498db] hover:text-white font-bold py-2 px-4 sm:px-6 rounded-4xl text-lg sm:text-xl"
        >
          Contact Us
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-64 w-full max-w-6xl">
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="border border-white bg-black text-white hover:border-[#3498db] hover:text-white font-bold py-2 px-4 rounded-4xl text-base sm:text-lg"
          />
          <select
            name="text"
            defaultValue=""
            className="border border-white bg-black text-white hover:border-[#3498db] hover:text-white font-bold py-2 px-4 rounded-4xl text-base sm:text-lg"
          >
            <option value="" disabled hidden>
              Inquiry type
            </option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Quotation">Quotation</option>
            <option value="Support">Support</option>
            <option value="Other">Other</option>
          </select>

          <select
            name="service"
            className="border border-white bg-black text-white hover:border-[#3498db] hover:text-white font-bold py-2 px-4 rounded-4xl text-base sm:text-lg"
          >
            <option value="" disabled selected hidden>
              Service Required
            </option>
            <option value="Web Design">Web Design</option>
            <option value="Web Development">Web Development</option>
            <option value="Graphics Design">Graphics Design</option>
            <option value="App Development">App Development</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="IT Consulting">IT Consulting</option>
            <option value="Other">Other</option>
          </select>

          <input
            type="email"
            placeholder="Email"
            className="border border-white bg-black text-white hover:border-[#3498db] hover:text-white font-bold py-2 px-4 rounded-4xl text-base sm:text-lg"
          />
          <textarea
            placeholder="Message (optional)"
            className="border border-white bg-black text-white hover:border-[#3498db] hover:text-white font-bold py-2 px-4 rounded-4xl text-base sm:text-lg min-h-[120px]"
          />
          <button className=" cursor-pointer border border-white bg-black text-white hover:border-[#3498db] hover:text-white font-bold py-2 px-4 rounded-4xl text-base sm:text-lg ">
            Send
          </button>
        </div>

        <div className="flex flex-col space-y-6 text-white items-start">
          {/* Phone Section */}
          <div className="flex items-center space-x-4 w-full">
            <Phone className="text-3xl sm:text-4xl hover:text-[#3498db] cursor-pointer flex-shrink-0" />
            <div>
              <p className="text-base sm:text-lg">Phone</p>
              <p className="hover:text-[#3498db] cursor-pointer">
                977-9800000098
              </p>
            </div>
          </div>

          {/* Email Section */}
          <div className="flex items-center space-x-4 w-full">
            <Mail className="text-3xl sm:text-4xl hover:text-[#3498db] cursor-pointer flex-shrink-0" />
            <div>
              <p className="text-base sm:text-lg">Email</p>
              <p className="hover:text-[#3498db] cursor-pointer">
                admin@admin.com
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 w-full">
            <Mail className="text-3xl sm:text-4xl hover:text-[#3498db] cursor-pointer flex-shrink-0" />
            <div>
              <p className="text-base sm:text-lg">Email</p>
              <p className="hover:text-[#3498db] cursor-pointer">
                admin@admin.com
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-4 w-full">
            <MapPin className="text-3xl sm:text-4xl hover:text-[#3498db] cursor-pointer flex-shrink-0" />
            <div>
              <p className="text-base sm:text-lg">Location</p>
              <p className="hover:text-[#3498db] cursor-pointer">
                Sankhamul Planning Cross 6, Lalitpur Nepal
              </p>
            </div>
          </div>
        </div>

        
      </div>

      <div className="flex flex-col items-center justify-center text-white font-bold bg-black sm:p-8">
          <h1 className=" text-2xl sm:text-3xl md:text-4xl text-white bg-transparent">
            Our Location
          </h1>
          <br />
          <p className="text-xl font-medium text-white">Visit us at our office in Sankhamul, Lalitpur</p>
        </div>

        {/* Map */}

        <MapEmbed location="27.681649933434066, 85.3285974448767"/>

     

<Faq/>










    </div>
  );
};

export default Contact;
