"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Phone,
  MapPin,

} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


import SkinTreatments from "../SkinTreatments";
import HairTreatments from "../HairTreatments";
import LaserTreatments from "../LaserTreatments";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSkinOpen, setIsSkinOpen] = useState(false);
  const [isHairOpen, setIsHairOpen] = useState(false);
  const [isLaserOpen, setIsLaserOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Treatment conditions arrays
  const skinConditions = [
    { label: "Skin Rejuvenation", slug: "skin-rejuvenation" },
    { label: "Anti-Aging Treatments", slug: "anti-aging-treatments" },
    { label: "Pigmentation Treatment", slug: "pigmentation-treatment" },
    { label: "Scar Reduction", slug: "scar-reduction" },
    { label: "Acne Treatment", slug: "acne-treatment" },
  ];

  const hairConditions = [
    { label: "PRP Therapy", slug: "prp-therapy" },
    { label: "Hair Loss Treatments", slug: "hair-loss-treatments" },
    { label: "Scalp Micropigmentation", slug: "scalp-micropigmentation" },
  ];

  const laserConditions = [
    { label: "Laser Hair Removal", slug: "laser-hair-removal" },
    { label: "Laser Skin Resurfacing", slug: "laser-skin-resurfacing" },
    { label: "Laser Tattoo Removal", slug: "laser-tattoo-removal" },
  ];

  return (
    <>


      {/* Main Navbar */}
      <div className="bg-[#F2C8A7] shadow-md py-4">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/">
              <div className="flex items-center">
                {/* Doctor logo image */}
                <Image
                  src="/images/logo.webp"
                  alt="Dr. Ankit Mehra Logo"
                  width={60}
                  height={60}
                  style={{
                    width: "60px",
                    height: "60px",
                  }}
                  className="mr-2"
                  priority
                />
                <span className="text-2xl font-bold">
                  <span className="text-[#0055A4]">Dr. </span>
                  <span className="text-[#0055A4] uppercase">
                    Ankit Mehra
                  </span>
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.div
              className="flex items-center space-x-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                staggerChildren: 0.1,
                delayChildren: 0.2,
              }}
            >
              <Link
                href="/"
                className="text-gray-700 font-medium hover:text-[#00796B] transition-colors"
              >
                Home
              </Link>
              <SkinTreatments />
              <HairTreatments />
              <LaserTreatments />
              <Link
                href="/about-us"
                className="text-gray-700 font-medium hover:text-[#00796B] transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/blogs"
                className="text-gray-700 font-medium hover:text-[#00796B] transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/gallery-2"
                className="text-gray-700 font-medium hover:text-[#00796B] transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/contact-us"
                className="text-gray-700 font-medium hover:text-[#00796B] transition-colors"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gray-800 p-1 rounded-md focus:outline-none"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
          >
            <Menu size={26} />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
          >
            {/* Menu Content */}
            <motion.div
              className="fixed top-0 left-0 h-full w-4/5 max-w-sm bg-[#FFF9F9] font-serif z-50 shadow-xl overflow-y-auto"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                {/* Close Button */}
                <div className="flex justify-between items-center mb-10">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link href="/">
                      <div className="flex items-center">
                        {/* Use Image component for logo in mobile menu */}
                        <Image
                          src="/images/logo.webp" // Make sure this path is correct
                          alt="Dr. Ankit Mehra Logo"
                          width={40}
                          height={40}
                          className="mr-2 rounded-full"
                        />
                        <span className="text-xl font-bold">
                          <span className="text-[#0055A4]">Dr.</span>
                          <span className="text-[#25D366]"> Ankit Mehra</span>
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                  <motion.button
                    onClick={toggleMenu}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-800 p-1 rounded-md hover:bg-gray-100"
                  >
                    <X size={24} />
                  </motion.button>
                </div>

                {/* Mobile Menu Links */}
                <div className="flex flex-col">
                  <motion.div
                    className="flex flex-col space-y-0"
                    initial="closed"
                    animate="open"
                    variants={{
                      open: {
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 0.2,
                        },
                      },
                      closed: {
                        transition: {
                          staggerChildren: 0.05,
                          staggerDirection: -1,
                        },
                      },
                    }}
                  >
                    {/* Home Link */}
                    <motion.div
                      variants={{
                        open: { opacity: 1, y: 0 },
                        closed: { opacity: 0, y: 20 },
                      }}
                    >
                      <Link
                        href={"/"}
                        className="text-gray-700 font-medium hover:text-[#0055A4] transition-colors py-3 border-b border-gray-100 block"
                        onClick={toggleMenu}
                      >
                        HOME
                      </Link>
                    </motion.div>

                    {/* Skin Treatments Dropdown */}
                    <motion.div
                      variants={{
                        open: { opacity: 1, y: 0 },
                        closed: { opacity: 0, y: 20 },
                      }}
                    >
                      <div className="py-3 border-b border-gray-100">
                        <div
                          className="text-gray-700 font-medium hover:text-[#0055A4] transition-colors flex justify-between items-center cursor-pointer"
                          onClick={() => setIsSkinOpen(!isSkinOpen)}
                        >
                          <span>Skin Treatments</span>
                          <Image
                            src="/images/chevron-down.webp"
                            alt="Toggle Dropdown"
                            height={4}
                            width={4}
                            className={`  transition-transform duration-300 ${isSkinOpen ? "rotate-180" : "rotate-0"}`}
                          />
                        </div>
                        {isSkinOpen && (
                          <div className="mt-2 ml-4">
                            {skinConditions.map((item) => (
                              <Link
                                key={item.slug}
                                href={`/${item.slug}`}
                                className="block py-2 text-gray-600 hover:text-[#0055A4] transition-colors"
                                onClick={toggleMenu}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>

                    {/* Hair Treatments Dropdown */}
                    <motion.div
                      variants={{
                        open: { opacity: 1, y: 0 },
                        closed: { opacity: 0, y: 20 },
                      }}
                    >
                      <div className="py-3 border-b border-gray-100">
                        <div
                          className="text-gray-700 font-medium hover:text-[#0055A4] transition-colors flex justify-between items-center cursor-pointer"
                          onClick={() => setIsHairOpen(!isHairOpen)}
                        >
                          <span>Hair Treatments</span>
                          <Image
                            src="/images/chevron-down.webp"
                            alt="Toggle Dropdown"
                            className={`w-4 h-4 transition-transform duration-300 ${isHairOpen ? "rotate-180" : "rotate-0"}`}
                            width={16}
                            height={16}
                          />
                        </div>
                        {isHairOpen && (
                          <div className="mt-2 ml-4">
                            {hairConditions.map((item) => (
                              <Link
                                key={item.slug}
                                href={`/${item.slug}`}
                                className="block py-2 text-gray-600 hover:text-[#0055A4] transition-colors"
                                onClick={toggleMenu}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>

                    {/* Laser Treatments Dropdown */}
                    <motion.div
                      variants={{
                        open: { opacity: 1, y: 0 },
                        closed: { opacity: 0, y: 20 },
                      }}
                    >
                      <div className="py-3 border-b border-gray-100">
                        <div
                          className="text-gray-700 font-medium hover:text-[#0055A4] transition-colors flex justify-between items-center cursor-pointer"
                          onClick={() => setIsLaserOpen(!isLaserOpen)}
                        >
                          <span>Laser Treatments</span>
                          <Image
                            src="/images/chevron-down.webp"
                            alt="Toggle Dropdown"
                            className={`w-4 h-4 transition-transform duration-300 ${isHairOpen ? "rotate-180" : "rotate-0"}`}
                            width={16}
                            height={16}
                          />
                        </div>
                        {isLaserOpen && (
                          <div className="mt-2 ml-4">
                            {laserConditions.map((item) => (
                              <Link
                                key={item.slug}
                                href={`/${item.slug}`}
                                className="block py-2 text-gray-600 hover:text-[#0055A4] transition-colors"
                                onClick={toggleMenu}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>

                    {/* About Us Link */}
                    <motion.div
                      variants={{
                        open: { opacity: 1, y: 0 },
                        closed: { opacity: 0, y: 20 },
                      }}
                    >
                      <Link
                        href={"/about-us"}
                        className="text-gray-700 font-medium hover:text-[#0055A4] transition-colors py-3 border-b border-gray-100 block"
                        onClick={toggleMenu}
                      >
                        ABOUT US
                      </Link>
                    </motion.div>

                    {/* Blog Link */}
                    <motion.div
                      variants={{
                        open: { opacity: 1, y: 0 },
                        closed: { opacity: 0, y: 20 },
                      }}
                    >
                      <Link
                        href={"/blogs"}
                        className="text-gray-700 font-medium hover:text-[#0055A4] transition-colors py-3 border-b border-gray-100 block"
                        onClick={toggleMenu}
                      >
                        BLOG
                      </Link>
                    </motion.div>

                    {/* Gallery Link */}
                    <motion.div
                      variants={{
                        open: { opacity: 1, y: 0 },
                        closed: { opacity: 0, y: 20 },
                      }}
                    >
                      <Link
                        href={"/gallery-2"}
                        className="text-gray-700 font-medium hover:text-[#0055A4] transition-colors py-3 border-b border-gray-100 block"
                        onClick={toggleMenu}
                      >
                        GALLERY
                      </Link>
                    </motion.div>

                    {/* Contact Us Link */}
                    <motion.div
                      variants={{
                        open: { opacity: 1, y: 0 },
                        closed: { opacity: 0, y: 20 },
                      }}
                    >
                      <Link
                        href={"/contact-us"}
                        className="text-gray-700 font-medium hover:text-[#0055A4] transition-colors py-3 border-b border-gray-100 block"
                        onClick={toggleMenu}
                      >
                        CONTACT US
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Contact Info in Mobile Menu - Using Lucide Icons */}
                <motion.div
                  className="mt-12 space-y-6 text-gray-700 border-t border-gray-100 pt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-start">
                    <div className="bg-[#0055A4] bg-opacity-10 p-2 rounded-full mr-3 flex-shrink-0">
                      <Phone size={18} className="text-white" />
                    </div>
                    <div>
                      <span className="font-medium">Emergency Helpline</span>
                      <a href="tel:+918240970287">
                        {" "}
                        <p className="text-sm">+91 96970 41111</p>
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#0055A4] bg-opacity-10 p-2 rounded-full mr-3 flex-shrink-0">
                      <MapPin size={18} className="text-white" />
                    </div>
                    <div>
                      <span className="font-medium">
                        62, Lane no 2, opp. Hotel Ambassador, Nagina Bagh,
                      </span>
                      <p className="text-sm">
                        {" "}
                        Muslim Mochi Mohalla, Ajmer, Rajasthan 305001
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
