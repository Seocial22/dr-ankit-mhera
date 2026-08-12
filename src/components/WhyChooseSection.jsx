'use client';
import React from "react";
import { FaRegHeart, FaStarOfDavid } from "react-icons/fa";
import { motion } from 'framer-motion';
import Image from "next/image";

export default function WhyChooseSection() {
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
        staggerChildren: 0.15
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
    <section className="bg-[#FFF9F9] py-16 px-0 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Right Image (shows first on mobile, second on desktop) */}
        <motion.div
          className="flex justify-center order-1 md:order-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          <Image
            src="/images/all-solutions.webp"
            alt="Dr. Ankit Mehra"
            width={600}
            height={450}
            className="rounded-3xl shadow-md"
          />
        </motion.div>

        {/* Left Content */}
        <motion.div
          className="order-2 md:order-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.p
            className="text-[#B77A5D] font-medium mb-2"
            variants={fadeInUp}
          >
            • Why Choose
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#B77A5D] mb-6"
            style={{ fontFamily: "Butler, Georgia, serif" }}
            variants={fadeInUp}
          >
            Dr. Ankit Mehra
          </motion.h2>

          {/* Highlights */}
          <motion.div
            className="space-y-6 text-gray-700"
            variants={fadeInUp}
          >
            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                Experienced & Trusted Dermatologist
              </h3>
              <p className="text-justify">
                Dr. Ankit Mehra, MD (Skin & VD), is a former Assistant Professor at
                JLN Medical College, Ajmer, with 12+ years of experience and more
                than 8,000 successful consultations.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                Complete Skin, Hair & Aesthetic Solutions
              </h3>
              <p className="text-justify">
                From acne, pigmentation, and scars to advanced laser treatments,
                anti-aging, and PRP therapy — all your dermatology and cosmetic needs
                under one roof.
              </p>
            </div>
          </motion.div>

          {/* Cards */}
          <motion.div
            className="mt-10 space-y-0 sm:space-y-8"
            variants={staggerContainer}
          >
            {/* Card 1 */}
            <motion.div
              className="flex flex-col sm:flex-row items-start gap-4 border-t pt-6"
              variants={cardVariant}
            >
              <div className="sm:w-fit w-full flex sm:justify-start justify-center">
                <div className="bg-[#FDF1EC] max-w-fit p-4 rounded-xl">
                  <FaRegHeart className="text-2xl text-[#B77A5D]" />
                </div>
              </div>
              <div>
                <h4 className="text-[#B77A5D] font-semibold text-lg mb-1">
                  Personalized & Patient-Centered Care
                </h4>
                <p className="text-gray-600 text-justify">
                  Every patient is unique. Dr. Mehra takes time to understand your skin and
                  hair concerns, creating tailored treatment plans for effective results.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="flex flex-col sm:flex-row items-start gap-4 border-t pt-6"
              variants={cardVariant}
            >
              <div className="bg-[#FDF1EC] p-4 rounded-xl mx-auto sm:mx-0">
                <FaStarOfDavid className="text-2xl text-[#B77A5D]" />
              </div>
              <div>
                <h4 className="text-[#B77A5D] font-semibold text-lg mb-1 text-center sm:text-left">
                  Advanced Technology & Proven Results
                </h4>
                <p className="text-gray-600 text-justify">
                  Expert in lasers, microneedling, PRP, and the latest cosmetic techniques,
                  Dr. Mehra delivers safe, modern, and evidence-based treatments.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}