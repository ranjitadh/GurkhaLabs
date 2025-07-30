import Faq from "@/components/ui/Faq";
import Teams from "@/components/ui/Teams";
import TestiMonials from "@/components/ui/TestiMonials";
import React from "react";

const About = () => {
  return (
    < div className="bg-black">
      <div className="">
        <h1 className="text-4xl font-bold flex justify-center items-center bg-black text-white ">Company</h1>
        <span className="text-white font-extrabold"> KhatraTech, </span>
        
        
        <span className="text-white "> where innovation meets excellence. Founded
        with a passion for technology and a commitment to quality. We specialize
        in providing best and comprehensive tech solutions to businesses of all
        sizes. Our team of experienced professionals excels in web design, web
        development, app development, digital marketing, IT consultation, and
        graphics design. We pride ourselves on delivering top-notch services
        that drive growth, enhance efficiency, and create lasting value for our
        clients.
        </span>
      </div>

      <h1 className="text-4xl font-bold  flex justify-center items-center bg-black text-white">Vision</h1>

      <div className="text-white">
        Our vision is to be one of a kind in technology solutions, recognized
        for our creativity, innovation, and unwavering dedication to excellence.
        We strive to empower businesses by providing cutting-edge technology
        services that enable them to thrive in an ever-evolving digital
        landscape. We aim to build long-lasting relationships with our clients,
        based on trust, transparency, and mutual success.
      </div>
      <h1 className="text-4xl font-bold  flex justify-center items-center bg-black text-white ">Mission</h1>
      <div className=" text-white">
        Our mission is to deliver innovative and customized tech solutions that
        meet the unique needs of each client. We are dedicated to providing
        exceptional service and achieving outstanding results. Our approach
        combines technical expertise, creativity, and a deep understanding of
        our clients' goals. By staying ahead of industry trends and continually
        improving our skills, we ensure our clients receive the best possible
        solutions to achieve their business objectives. At KhatraTech, we are
        committed to making technology work for you.
      </div>
      <Teams/>
      <TestiMonials/>
      <Faq/>
      <div className="bg-black text-white rounded-t-4xl flex justify-center text-5xl items-center max-w-screen font-bold h-40">Not sure which service suits you?
<br />
 </div>
<p className="text-2xl  font-medium flex justify-center items-start bg-black text-white rounded-b-4xl">Get in touch with our team, We are always happy to help you.</p>

 <div className="flex justify-end">
  <a href="/contact" className="border border-white bg-black text-white hover:border-[#3498db] hover:text-white font-bold py-2 px-4 cursor-pointer rounded-4xl text-5xl w-auto">
    Contact Us
  </a>

</div>

     





    </div>
  );
};

export default About;
