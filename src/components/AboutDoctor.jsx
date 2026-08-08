'use client';
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SpecializedServices from "./SpecializedServices";
import { motion } from 'framer-motion';

export default function AboutDoctor() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-[#FEF7F8] py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-justify mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          <motion.h1 
            className="text-4xl md:text-5xl text-[#a86e54] text-center font-serif max-w-4xl mx-auto leading-snug mb-6"
            variants={fadeInUp}
          >
            Best Dermatologist in Ajmer <br></br> Dr. Ankit Mehra
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-6"
            variants={fadeInUp}
          >
            Your journey to radiant skin, healthy hair, and advanced laser
            treatments begins here! Dr. Ankit Mehra is a renowned dermatologist
            at Ajmer who specializes in offering tailored solutions to all your
            skin, hair, and cosmetic concerns. Whether you are looking for the
            Best Skin Care Treatments in Ajmer or advanced cosmetology services,
            we are committed to enhancing your natural beauty with cutting-edge
            technology and personalized care.
          </motion.p>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Dr. Ankit Mehra, MD Skin & VD, is widely regarded as the Best
            Dermatologist in Ajmer, offering exceptional care for skin, hair,
            and cosmetic concerns. His clinic is a one-stop destination for
            anyone seeking advanced and personalized treatments, including
            solutions for chronic skin conditions, anti-aging needs, and sexual
            health issues. If you're looking for the Best Skin Care Treatment in
            Ajmer, Dr. Mehra's expertise ensures visible and lasting results
            tailored to your specific needs.
          </motion.p>
        </motion.div>

        {/* Comprehensive Services Section */}
        <div>
          <motion.h2 
            className="text-4xl md:text-5xl text-[#a86e54] text-center font-serif max-w-4xl mx-auto leading-snug mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
          >
            Comprehensive Services Offered by<br></br> Dr. Ankit Mehra
          </motion.h2>
          
          <div className="flex justify-center w-full">
            <motion.div 
              className="grid max-w-7xl grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={staggerContainer}
            >
              {/* Skin Treatment Card */}
              <motion.div 
                className="bg-[#F9F0EB] rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
                variants={cardVariant}
              >
                <div className="h-48 bg-gradient-to-r from-blue-100 to-indigo-100">
                  <Image
                    src="/images/home/facial-contouring-injection.webp"
                    alt="Skin Treatment"
                    className="w-full h-full object-cover"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4">
                      <Image
                        src="/images/skin-care_4383086.webp"
                        alt="Hairstyle Icon"
                        width={100}
                        height={100}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Skin Treatment
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-justify">
                    Dr. Mehra provides a full spectrum of skin care treatments,
                    addressing conditions such as acne, eczema, psoriasis,
                    pigmentation, and more. Our clinic employs cutting-edge
                    technology and tailored treatment plans to give your skin a
                    healthy, rejuvenated appearance.
                  </p>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Comprehensive Skin Care
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Advanced Technology & Tailored Plans
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Expert Dermatological Care
                    </li>
                  </ul>
                  <Link href={"/skin-treatments"}>
                    <button className="text-blue-600 font-semibold flex items-center hover:text-blue-800 transition-colors duration-300">
                      Read More
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </motion.div>

              {/* Hair Treatments Card */}
              <motion.div 
                className="bg-[#F9F0EB] rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
                variants={cardVariant}
              >
                <div className="h-48 bg-gradient-to-r from-blue-100 to-indigo-100">
                  <Image
                    src="/images/home/woman-getting-hair-loss-treatment-clinic-1.webp"
                    alt="Skin Treatment"
                    className="w-full h-full object-cover"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4">
                      <Image
                        src="/images/hair_5498789.webp"
                        alt="Hairstyle Icon"
                        width={100}
                        height={100}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Hair Treatments
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-justify">
                    At Dr. Ankit Mehra's clinic, we offer advanced and
                    personalized hair treatment solutions tailored to your
                    specific needs. With years of experience in dermatology, Dr.
                    Mehra uses clinically proven techniques and the latest
                    technology to treat hair-related concerns effectively.
                  </p>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      PRP (Platelet-Rich Plasma) Therapy
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Dandruff and Scalp Infections Treatment
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Hair Fall Control Treatments
                    </li>
                  </ul>
                  <Link href={"/hair-treatments-2"}>
                    <button className="text-purple-600 font-semibold flex items-center hover:text-purple-800 transition-colors duration-300">
                      Read More
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </motion.div>

              {/* Laser Treatment Card */}
              <motion.div 
                className="bg-[#F9F0EB] rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
                variants={cardVariant}
              >
                <div className="h-48 bg-gradient-to-r from-blue-100 to-indigo-100">
                  <Image
                    src="/images/home/view-doctor-cosmetologist-doing-anti-aging-procedure-cosmetology-office-satisfied-woman.webp"
                    alt="Skin Treatment"
                    className="w-full h-full object-cover"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4">
                      <Image
                        src="/images/laser-surgery_2464617.webp"
                        alt="Hairstyle Icon"
                        width={100}
                        height={100}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Laser Treatments
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-justify">
                    Discover the power of advanced laser technology at Dr. Ankit
                    Mehra's dermatology clinic. Specializing in safe, effective,
                    and minimally invasive laser treatments, Dr. Mehra offers
                    personalized solutions for a wide range of skin and cosmetic
                    concerns. With a focus on precision and patient comfort, our
                    clinic ensures visible results with minimal downtime.
                  </p>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Laser Hair Removal (for face & body)
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Laser Treatment for Acne Scars
                    </li>
                  </ul>
                  <Link href={"/laser-treatments"}>
                    <button className="text-red-600 font-semibold flex items-center hover:text-red-800 transition-colors duration-300">
                      Read More
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <SpecializedServices/>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          <Link href={"/bookconsultation"}>
            <motion.button 
              className="bg-[#FAF2F0] border-[#BF7F62] border hover:text-white hover:bg-[#BF7F62] font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Consultation
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}