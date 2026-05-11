'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Laptop } from 'lucide-react';
import Image from 'next/image';
import { FaFigma, FaAppStoreIos } from 'react-icons/fa';
import { motion } from 'framer-motion';
import QuoteHeading from '@/components/Quote/QuoteHeading';
import HomeSkeleton from '@/components/ui/Skeleton/home';

// Dynamic imports for heavy components
const FlipCard = dynamic(() => import('@/components/animata/container/Flipcard'), { ssr: false });
const SwipeButton = dynamic(() => import('@/components/animata/button/swipe-button'), { ssr: false });
const StaggeredLetter = dynamic(() => import('@/components/animata/text/staggered-letter'), { ssr: false });

export default function Page() {

  const sections = [
    {
      title: 'Brand Presence',
      subtitle: 'Creative Impact',
      image:
        'https://images.unsplash.com/photo-1751257983922-a627088d4c21?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0',
      content:
        'Through compelling web design, robust apps, and impactful graphics that strengthen brand identity and visibility.',
    },
    {
      title: 'Customer Engagement',
      subtitle: 'User Experience',
      image:
        'https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.1.0',
      content:
        'With user-centric designs and intuitive interfaces that enhance user experience and encourage interaction.',
    },
    {
      title: 'Business Growth',
      subtitle: 'Revenue Focused',
      image:
        'https://images.unsplash.com/photo-1633158829875-e5316a358c6f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0',
      content:
        'By leveraging digital marketing strategies to attract, engage, and retain customers, ultimately boosting sales and revenue.',
    },
    {
      title: 'Optimization',
      subtitle: 'IT Alignment',
      image:
        'https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0',
      content:
        'Through IT consultation that aligns technology investments with business objectives.',
    },
  ];


  return (
    <Suspense fallback={<HomeSkeleton />}>
      <div className="pt-20" />
      {/* Hero Section */}
      <motion.div
        suppressHydrationWarning
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-transparent grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 py-12 md:py-16 text-gray-900 font-bold leading-tight"
      >
        {/* Left Column: Text */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left gap-4">
          <QuoteHeading
            text={
              <StaggeredLetter
                text="Service"
                className="text-5xl sm:text-6xl lg:text-7xl text-gray-900"
              />
            }
          />
          <StaggeredLetter
            text="That Sparks"
            className="text-5xl sm:text-6xl lg:text-7xl text-gray-900"
          />
          <StaggeredLetter
            text="Growth"
            className="text-5xl sm:text-6xl lg:text-7xl text-[#3498db]"
          />
        </div>
        {/* Right Column: Image with floating animation */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex justify-center md:justify-end"
        >
          <Image
            src="/assets/SVG/data-extraction-animate.svg"
            alt="computer AI"
            height={1000}
            width={1000}
            priority
            className="max-w-full h-auto drop-shadow-xl"
          />
        </motion.div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring" }}
        className="mt-20 flex items-center justify-center gap-3 text-gray-900 text-3xl md:text-5xl font-bold underline decoration-4 decoration-[#3498db]"
      >
        <QuoteHeading
          className="text-5xl md:text-5xl font-bold text-center mb-10 text-gray-900"
          text="Our Services"
        />
      </motion.h1>
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1 }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-12 text-gray-800 font-semibold"
      >
        {[
          { icon: <Laptop className="h-6 w-6" />, label: 'Web Development' },
          { icon: <FaFigma className="h-6 w-6" />, label: 'Web Design' },
          {
            icon: (
              <Image
                src="/assets/Images/Graphics_design.png"
                width={24}
                height={24}
                alt="Graphics Design"
              />
            ),
            label: 'Graphics Design',
          },
          { icon: <FaAppStoreIos className="h-6 w-6" />, label: 'App Development' },
          {
            icon: (
              <Image
                src="/assets/Images/technical-support.png"
                width={24}
                height={24}
                alt="IT Consultant"
              />
            ),
            label: 'IT Consultant',
          },
          {
            icon: (
              <Image
                src="/assets/Images/technology.png"
                width={24}
                height={24}
                alt="Digital Marketing"
              />
            ),
            label: 'Digital Marketing',
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-2 cursor-pointer hover:text-[#3498db] group transition-colors duration-300"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
            whileHover={{ scale: 1.05, x: 10 }}
          >
            <div className="group-hover:rotate-12 transition-transform duration-300 text-[#3498db]">
              {service.icon}
            </div>
            <span className="group-hover:tracking-wider transition-all duration-300">{service.label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Enhance Productivity Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-transparent text-gray-900 px-4 py-16 text-4xl"
      >
        <QuoteHeading text="Enhance your" className="text-gray-900" />
        <p className="text-2xl sm:text-4xl font-bold text-center mb-6">
          <motion.span 
            animate={{ color: ["#111", "#3294db", "#111"] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="underline decoration-[#3294db]"
          >
            productivity
          </motion.span> with our expert solutions.
        </p>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }
        }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-6 mt-12 px-6"
      >
        {sections.map((section, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            <FlipCard
              image={section.image}
              title={section.title}
              subtitle={section.subtitle}
              description={section.content}
              rotate="y"
              className="h-60 w-full max-w-[320px] sm:max-w-md mx-auto shadow-md hover:shadow-[0_0_30px_rgba(52,152,219,0.2)] transition-shadow duration-500"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-20"
      >
        <div className="flex font-bold text-gray-900 justify-center items-center text-2xl sm:text-4xl gap-4">
          <Image
            src="/assets/Images/customer-service.png"
            height={50}
            width={50}
            alt="customer service"
          />
          <span className="font-bold text-gray-900">Get in Touch</span>
        </div>
        <p className="mt-4 font-bold text-lg text-gray-700">Let&apos;s Discuss Your Need</p>
        <div className="mt-6 flex justify-center">
          <a href="/contact">
            <SwipeButton
              className="cursor-pointer"
              firstClass="bg-[#103045] text-white rounded shadow-lg"
              firstText="Contact us"
              secondClass="bg-white text-[#103045] border border-[#103045]"
              secondText="Contact us"
            />
          </a>
        </div>
      </motion.div>

    </Suspense>
  );
}
