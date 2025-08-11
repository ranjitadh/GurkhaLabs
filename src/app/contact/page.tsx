"use client";

import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Faq from "@/components/ui/Faq";
import MapEmbed from "@/components/ui/MapEmbed";
import SwipeButton from "@/components/animata/button/swipe-button";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ContactFormSchema,
  ContactFormData,
  InquiryType,
  ServiceType,
} from "@/types/contact";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        reset();
      } else {
        const { error } = await res.json();
        alert("Error: " + JSON.stringify(error));
      }
    } catch (err) {
      alert("Server error.");
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-white font-bold bg-black min-h-screen space-y-6 p-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xl sm:text-3xl md:text-4xl text-white bg-transparent text-center"
      >
        Got any questions?
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center max-w-md text-sm sm:text-lg"
      >
        Our team is always here to help. Send us a message or directly call us
        and we&apos;ll get back to you shortly.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mt-6 flex justify-center animate-pulse"
      >
        <a href="/contact">
          <SwipeButton
            className="cursor-pointer"
            firstClass="bg-white text-black rounded"
            firstText="Contact us"
            secondClass="bg-black text-white border border-white rounded"
            secondText="Contact us"
          />
        </a>
      </motion.div>

      <div className="grid grid-cols-1 gap-y-8 w-full max-w-3xl">
        {/* Form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col space-y-4"
        >
          <input
            type="text"
            placeholder="Name"
            {...register("name")}
            className="border border-white bg-black text-white hover:border-[#3498db] font-bold py-2 px-4 rounded-4xl text-sm sm:text-lg"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

          <select
            {...register("inquryType")}
            defaultValue=""
            className="border border-white bg-black text-white hover:border-[#3498db] font-bold py-2 px-4 rounded-4xl text-sm sm:text-lg"
          >
            <option value="" disabled hidden>
              Inquiry type
            </option>
            {Object.values(InquiryType).map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.inquryType && (
            <p className="text-red-500 text-sm">{errors.inquryType.message}</p>
          )}

          <select
            {...register("serviceRequired")}
            defaultValue=""
            className="border border-white bg-black text-white hover:border-[#3498db] font-bold py-2 px-4 rounded-4xl text-sm sm:text-lg"
          >
            <option value="" disabled hidden>
              Service Required
            </option>
            {Object.values(ServiceType).map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.serviceRequired && (
            <p className="text-red-500 text-sm">{errors.serviceRequired.message}</p>
          )}

          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="border border-white bg-black text-white hover:border-[#3498db] font-bold py-2 px-4 rounded-4xl text-sm sm:text-lg"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <textarea
            placeholder="Message"
            {...register("message")}
            className="border border-white bg-black text-white hover:border-[#3498db] font-bold py-2 px-4 rounded-4xl text-sm sm:text-lg min-h-[100px]"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="cursor-pointer border border-white bg-black text-white hover:border-[#3498db] font-bold py-2 px-4 rounded-4xl text-sm sm:text-lg"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6 text-white items-start"
        >
          <div className="flex items-center space-x-4 w-full">
            <Phone className="text-2xl sm:text-4xl hover:text-[#3498db] cursor-pointer flex-shrink-0" />
            <div>
              <p className="text-sm sm:text-lg">Phone</p>
              <p className="hover:text-[#3498db] cursor-pointer text-sm sm:text-base">
                977-9800000098
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 w-full">
            <Mail className="text-2xl sm:text-4xl hover:text-[#3498db] cursor-pointer flex-shrink-0" />
            <div>
              <p className="text-sm sm:text-lg">Email</p>
              <p className="hover:text-[#3498db] cursor-pointer text-sm sm:text-base">
                admin@admin.com
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 w-full">
            <MapPin className="text-2xl sm:text-4xl hover:text-[#3498db] cursor-pointer flex-shrink-0" />
            <div>
              <p className="text-sm sm:text-lg">Location</p>
              <p className="hover:text-[#3498db] cursor-pointer text-sm sm:text-base">
                Sankhamul Planning Cross 6, Lalitpur Nepal
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Location Info */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center text-white font-bold bg-black p-4"
      >
        <h1 className="text-xl sm:text-3xl md:text-4xl text-white bg-transparent">
          Our Location
        </h1>
        <br />
        <p className="text-base sm:text-xl font-medium text-white">
          Visit us at our office in Sankhamul, Lalitpur
        </p>
      </motion.div>

      {/* Map */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl"
      >
        <div className="w-full">
          <MapEmbed location="27.681649933434066, 85.3285974448767" />
        </div>
      </motion.div>

      {/* FAQ */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl"
      >
        <Faq />
      </motion.div>
    </div>
  );
};

export default Contact;