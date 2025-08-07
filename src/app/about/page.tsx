import SwipeButton from "@/components/animata/button/swipe-button";
import Faq from "@/components/ui/Faq";
import Teams from "@/components/ui/Teams";
import TestiMonials from "@/components/ui/TestiMonials";
import "./about.css"

const About = () => {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Company Section */}
      <div className="px-6 md:px-28 py-10 animate-fadeIn">
        <h1 className="text-4xl underline decoration-[#3498db] font-bold text-center mb-6">
          Company
        </h1>
        <p className="text-lg leading-relaxed">
          <span className="font-extrabold text-[#3498db] tracking-wider animate-pulse">
            KhatraTech,
          </span>{" "}
          where innovation meets excellence. Founded with a passion for technology and a
          commitment to quality. We specialize in providing best and comprehensive tech
          solutions to businesses of all sizes. Our team of experienced professionals excels
          in web design, web development, app development, digital marketing, IT consultation,
          and graphics design. We pride ourselves on delivering top-notch services that drive
          growth, enhance efficiency, and create lasting value for our clients.
        </p>
      </div>

      {/* Vision */}
      <div className="px-6 md:px-28 py-10 animate-slideInLeft">
        <h1 className="text-4xl font-bold text-center underline decoration-[#3498db] mb-4">
          Vision
        </h1>
        <p className="text-lg leading-relaxed">
          Our vision is to be one of a kind in technology solutions, recognized for our creativity,
          innovation, and unwavering dedication to excellence. We strive to empower businesses
          by providing cutting-edge technology services that enable them to thrive in an
          ever-evolving digital landscape. We aim to build long-lasting relationships with our clients,
          based on trust, transparency, and mutual success.
        </p>
      </div>

      {/* Mission */}
      <div className="px-6 md:px-28 py-10 animate-slideInRight">
        <h1 className="text-4xl font-bold text-center underline decoration-[#3498db] mb-4">
          Mission
        </h1>
        <p className="text-lg leading-relaxed">
          Our mission is to deliver innovative and customized tech solutions that meet the unique
          needs of each client. We are dedicated to providing exceptional service and achieving
          outstanding results. Our approach combines technical expertise, creativity, and a deep
          understanding of our clients&apos; goals. By staying ahead of industry trends and continually
          improving our skills, we ensure our clients receive the best possible solutions to achieve
          their business objectives. At KhatraTech, we are committed to making technology work for you.
        </p>
      </div>

      {/* Teams, Testimonials, FAQ */}
      <div className="animate-zoomIn">
        <Teams />
        <TestiMonials />
        <Faq />
      </div>

      {/* CTA Section */}
      <div className="bg-black text-white rounded-t-4xl text-center py-16 animate-fadeIn">
        <h2 className="text-5xl font-bold mb-4">
          Not sure which service suits you?
        </h2>
        <p className="text-2xl font-medium">
          Get in touch with our team, We are always happy to help you.
        </p>
        <div className="mt-8 flex justify-center  animate-pulse">
          <a href="/contact">
            <SwipeButton
              className="cursor-pointer"
              firstClass="bg-black text-white border border-white rounded  animate-pulse"
              firstText="Contact us"
              secondClass="bg-[#3298db] text-white"
              secondText="Contact us"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
