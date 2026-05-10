"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import SlideArrowButton from "@/components/animata/button/side-arrow-button";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Features", href: "/features" },
    { name: "Works", href: "/ourworks" },
    { name: "Contact", href: "/contact" },
  ];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Framer Motion variants
  const navVariants = {
    initial: { y: -80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
    scrolled: {
      backgroundColor: "transparent",
      backdropFilter: "blur(10px)",
      height: "64px",
      boxShadow: "none",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    top: {
      backgroundColor: "transparent",
      height: "80px",
      boxShadow: "none",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="initial"
      animate="visible"
      whileInView={scrolled ? "scrolled" : "top"}
      viewport={{ once: false }}
      className="fixed top-0 left-0 p-4 w-full z-50"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full">
          {/* Logo with animation */}
          <motion.div
            animate={{ scale: scrolled ? 0.85 : 1 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 flex items-center"
          >
            <Image
              src="/assets/Images/gurkhaslabs_logo.svg"
              alt="Company Logo"
              width={48}
              height={48}
              priority
              className="object-contain"
            />
          </motion.div>

          {/* Desktop Nav Links with staggered animation */}
          <motion.div
            className="hidden md:flex space-x-8 font-bold text-lg ml-10 items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          >
            {navLinks.map((link) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  className={clsx(
                    "text-gray-100 hover:text-[#3498db] px-1 transition duration-300",
                    pathname === link.href
                      ? "text-[#3498db]"
                      : ""
                  )}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Desktop Button */}
          <motion.div
            className="hidden md:flex items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/contact">
              <SlideArrowButton primaryColor="#103045" text="Get in Touch" />
            </Link>
          </motion.div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <FiX className="text-white text-3xl" />
              ) : (
                <FiMenu className="text-white text-3xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-[#103045] px-4 pb-4 pt-2 space-y-3 text-white font-semibold text-lg overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={clsx(
                  "block py-2 px-2 rounded transition duration-200",
                  pathname === link.href
                    ? "text-[#3498db] font-bold"
                    : "text-white hover:text-[#3498db]"
                )}
              >
                {link.name}
              </Link>
            ))}

            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              <button className="mt-4 w-full bg-white text-black hover:bg-[#3498db] hover:text-white font-bold py-2 px-4 rounded-full transition duration-300">
                Get in Touch
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;