"use client";

import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import MapEmbed from "@/components/ui/MapEmbed";
import SwipeButton from "@/components/animata/button/swipe-button";
import { motion } from "framer-motion";

const Faq = dynamic(() => import("@/components/ui/Faq"), { ssr: false });
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ContactFormSchema,
  ContactFormData,
  InquiryType,
  ServiceType,
} from "@/types/contact";
import { Toaster, toast } from "sonner";
import Image from "next/image"
import { div } from "framer-motion/client";
import QuoteHeading from "@/components/Quote/QuoteHeading";
import ContactSkeleton from "@/components/ui/Skeleton/contact";

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
        toast.success("Message sent successfully!");
        reset();
      } else {
        const { error } = await res.json();
        toast.error("Unable to send message, please try again later.");
      }
    } catch (err) {
      toast.error("Unable to send message, please try again later.");
      console.error(err);
    }
  };

  return (
    <Suspense fallback={<ContactSkeleton />}>
      <div className="relative bg-gradient-to-br from-[#103045] via-gray-900 to-black min-h-screen flex flex-col items-center p-6 space-y-10 text-white font-bold overflow-hidden pt-24">
        <Toaster position="top-center" />


        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl text-center"
        >
          Got any questions?
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-md text-sm sm:text-lg text-gray-200 mx-auto"
        >
          <QuoteHeading text="Our team is always here to help." className="text-lg md:text-xl mt-4" />
          <p>
            Send us a message or directly call us and we&apos;ll get back to you shortly.
          </p>
        </motion.div>


        {/* Animated Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-6"
        >
          <SwipeButton
            className="cursor-pointer"
            firstClass="bg-white text-black px-8 py-3 font-bold shadow-lg"
            firstText="Contact us"
            secondClass="bg-transparent text-white border px-8 py-3 font-bold  transition-all duration-300"
            secondText="Contact us"
          />
        </motion.div>

        {/* Form + Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full max-w-5xl">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col space-y-4 bg-white/5 p-6 rounded-3xl backdrop-blur-md shadow-xl"
          >
            <input
              type="text"
              placeholder="Name"
              {...register("name")}
              className="border border-white/50 bg-transparent text-white hover:border-[#3498db] font-semibold py-3 px-4 rounded-2xl text-sm sm:text-lg placeholder:text-gray-300 transition-all"
            />
            {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}

            <select
              {...register("inquryType")}
              defaultValue=""
              className="border border-white/50 bg-transparent text-white hover:border-[#3498db] font-semibold py-3 px-4 rounded-2xl text-sm sm:text-lg transition-all"
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
            {errors.inquryType && <p className="text-red-400 text-sm">{errors.inquryType.message}</p>}

            <select
              {...register("serviceRequired")}
              defaultValue=""
              className="border border-white/50 bg-transparent text-white hover:border-[#3498db] font-semibold py-3 px-4 rounded-2xl text-sm sm:text-lg transition-all"
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
            {errors.serviceRequired && <p className="text-red-400 text-sm">{errors.serviceRequired.message}</p>}

            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="border border-white/50 bg-transparent text-white hover:border-[#3498db] font-semibold py-3 px-4 rounded-2xl text-sm sm:text-lg placeholder:text-gray-300 transition-all"
            />
            {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}

            <textarea
              placeholder="Message"
              {...register("message")}
              className="border border-white/50 bg-transparent text-white hover:border-[#3498db] font-semibold py-3 px-4 rounded-2xl text-sm sm:text-lg placeholder:text-gray-300 min-h-[120px] transition-all"
            />
            {errors.message && <p className="text-red-400 text-sm">{errors.message.message}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="border border-white bg-transparent text-white hover:bg-white hover:text-black font-bold py-3 px-6 rounded-2xl transition-all duration-300"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>





          </motion.form>


          {/* Contact Info */}



          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8 ml-10 sm:ml-0"
          >
            <Image
              src="/assets/SVG/online-world-animate.svg"
              alt="Online world"
              width={300}
              height={300}
              className="object-contain"
            />
            {[{
              icon: <Phone className="text-3xl sm:text-4xl hover:text-[#3498db] cursor-pointer" />,
              title: "Phone",
              value: "977-9800000098"
            }, {
              icon: <Mail className="text-3xl sm:text-4xl hover:text-[#3498db] cursor-pointer" />,
              title: "Email",
              value: "admin@admin.com"
            }, {
              icon: <MapPin className="text-3xl sm:text-4xl hover:text-[#3498db] cursor-pointer" />,
              title: "Location",
              value: "Satdobato, Lalitpur, Nepal"
            }].map((item, idx) => (




              <div key={idx} className="flex items-center space-x-4">


                {item.icon}
                <div>
                  <p className="text-sm sm:text-lg font-semibold">{item.title}</p>
                  <p className="text-sm sm:text-base hover:text-[#3498db] cursor-pointer">{item.value}</p>
                </div>
              </div>

            ))}



          </motion.div>



        </div>



        {/* Location + Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center w-full max-w-5xl space-y-4"
        >
          <h2 className="text-2xl sm:text-4xl font-bold">Our Location</h2>
          <p className="text-base sm:text-lg font-medium text-gray-200">Visit us at our office in Satdobato, Lalitpur</p>
          <MapEmbed location="27.658, 85.323" />
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-5xl"
        >
          <Faq />
        </motion.div>
      </div>
    </Suspense>
  );
};

export default Contact;
