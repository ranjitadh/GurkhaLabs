"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import SlideArrowButton from "@/components/animata/button/side-arrow-button";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Features", href: "/features" },
    { name: "Works", href: "/ourworks" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-[#103045]  shadow-lg z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Image
              src="/assets/Images/khatra tech color white.png"
              alt="Company Logo"
              width={120}
              height={80}
              className="object-contain"
            />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8 font-bold text-lg ml-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "text-gray-100 hover:text-[#3498db] border-b-2 px-1",
                  pathname === link.href
                    ? "border-[#3498db] text-[#3498db]"
                    : "border-transparent"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:flex items-center">
            <Link href="/contact">
              <SlideArrowButton primaryColor="#103045" text="Get in Touch" />
            </Link>
          </div>

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
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-transparent px-4 pb-4 pt-2 space-y-3 text-white font-semibold text-lg overflow-hidden"
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
              <button className="mt-4 w-full border border-white bg-transparent text-white hover:border-[#3498db] font-bold py-2 px-4 rounded-full transition duration-300">
                Get in Touch
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
