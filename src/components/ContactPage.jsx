"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PatientReviews from './PatientReviews';
import AppointmentForm from './AppointmentForm'
import ExpertCards from "@/components/ExpertCards";
import
{
 

  FaPhoneAlt,
} from "react-icons/fa";
import WhyChooseSection from './WhyChooseSection';
import ContactInfoSection from './ContactInfoSection';
// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const scaleUpVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
};

const slideInFromLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
};

const slideInFromRight = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
};

const AnimatedSection = ({ children, variants, className = "" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    reason: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your appointment request! We will contact you shortly to confirm.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      reason: ''
    });
  };

  return (
    
    <div className="min-h-screen   w-full   bg-gray-50">
      {/* Main Content */}
      <main className="container   mx-auto py-12 px-4">
        <div className="flex flex-col w-full   justify-center items-center">
          <div className="max-w-7xl w-full mx-auto">
            {/* Banner with Gradient Text instead of Gradient Background */}
            <AnimatedSection variants={containerVariants}>
              <motion.div
                className="bg-[#F9F0EB] rounded-xl overflow-hidden mb-12"
                variants={scaleUpVariants}
              >
                <div className="md:flex items-center justify-center">
                  {/* Left Section */}
                  <motion.div
                    className="md:w-1/2 p-0 sm:p-8  text-justify md:text-left"
                    variants={slideInFromLeft}
                  >
                    <h1 className="text-3xl font-serif font-bold mb-4 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-[#B97E63] bg-clip-text">
                      Welcome to Dr. Ankit Mehra's Dermatology Clinic in Ajmer
                    </h1>
                    <motion.p
                      className="text-xl font-serif text-black mb-6"
                      variants={itemVariants}
                    >
                      Where expertise, innovation, and compassionate care unite to
                      offer comprehensive solutions for all your skin and hair needs.
                    </motion.p>

                    {/* Phone */}
                    <motion.div
                      className="flex items-center justify-center lg:justify-start space-x-2 mb-4"
                      variants={itemVariants}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="bg-white text-[#b97a57] p-2 rounded-lg">
                          <FaPhoneAlt />
                        </div>
                      </div>
                      <span className="text-lg font-medium text-black">
                        <a href="tel:+919697041111">+91 96970 41111</a>
                      </span>
                    </motion.div>

                    {/* Button */}
                    <motion.div
                      className="flex justify-center lg:justify-start"
                      variants={itemVariants}
                    >
                      <Link href={"/bookconsultation"}>
                        <button className="bg-[#FAF2F0] border-[#BF7F62] border hover:text-white hover:bg-[#BF7F62] font-serif font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
                          Book Your Consultation
                        </button>
                      </Link>
                    </motion.div>
                  </motion.div>

                  {/* Right Section */}
                  <motion.div
                    className="md:w-1/2 flex items-center justify-center p-6"
                    variants={slideInFromRight}
                  >
                    <div className="rounded-3xl overflow-hidden">
                      <div className="relative   w-full max-h-[500px]">
                       <Image
                                           src="/images/home/dr-ankitmehra.webp" 
                                           alt="Dr. Ankit Mehra"
                                           className="w-full aspect-square object-cover border-8 border-[#F2C8A7] shadow-2xl transform transition-transform duration-500 rounded-3xl group-hover:scale-110"
                                           width={200}
                                           height={200}
 />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* About Section */}
            <AnimatedSection variants={containerVariants}>
              <motion.div
                className="bg-[#F9F0EB] rounded-xl overflow-hidden mb-12 text-center md:text-left"
                variants={scaleUpVariants}
              >
                <div className="p-8">
                  <h2 className="text-2xl font-serif text-[#B97E63] font-bold mb-4">
                    Best Dermatologist in Ajmer
                  </h2>
                  <motion.p
                    className="text-gray-600 text-justify mb-4 font-serif"
                    variants={itemVariants}
                  >
                    Dr. Ankit Mehra, MD Skin & VD, is widely regarded as the Best
                    Dermatologist in Ajmer, offering exceptional care for skin, hair,
                    and cosmetic concerns.
                  </motion.p>
                  <motion.p
                    className="text-gray-600 text-justify font-serif"
                    variants={itemVariants}
                  >
                    Having conducted over 8,000 consultations and performed more than
                    500 laser and skin treatments, Dr. Mehra is a trusted expert who
                    combines clinical precision with a personalized approach to patient
                    care.
                  </motion.p>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Specialized Services */}
            <AnimatedSection variants={containerVariants}>
              <motion.div
                className="rounded-xl bg-[#F9F0EB] overflow-hidden mb-12 text-center md:text-left"
                variants={scaleUpVariants}
              >
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-[#B97E63]">
                    Our Specialized Services
                  </h2>
                  <motion.div
                    className="space-y-6"
                    variants={containerVariants}
                  >
                    {[
                      {
                        title: "Skin Rejuvenation",
                        description:
                          "Dr. Mehra provides innovative skin rejuvenation treatments, such as chemical peels and laser therapy, to address fine lines, wrinkles, and dull skin.",
                      },
                      {
                        title: "Treatment for Pigmentation",
                        description:
                          "For concerns like melasma, freckles, or dark spots, Dr. Mehra offers cutting-edge pigmentation therapies designed to enhance your complexion.",
                      },
                      {
                        title: "Scar Reduction and Acne Treatment",
                        description:
                          "Whether it's acne scars or other types of marks, Dr. Mehra employs advanced techniques such as microneedling and laser treatments to improve skin texture.",
                      },
                      {
                        title: "Cosmetic Dermatology",
                        description:
                          "Dr. Mehra is also recognized as the Best Cosmetologist in Ajmer, offering a wide range of non-surgical aesthetic treatments like lip fillers, PRP therapy, and skin lightening solutions.",
                      },
                      {
                        title: "Hair Loss and Sexual Health Treatments",
                        description:
                          "Dr. Mehra provides proven treatments for hair thinning and loss, such as PRP therapy and mesotherapy. Additionally, his expertise in venereal diseases ensures confidential and effective care.",
                      },
                    ].map((service, index) => (
                      <motion.div
                        key={index}
                        className="flex flex-col md:flex-row items-center md:items-start"
                        variants={itemVariants}
                      >
                        <div className="p-2 rounded-full mb-4 md:mb-0 md:mr-4 flex-shrink-0">
                          <Image
                            src="/images/checkmark.webp"
                            alt="check icon"
                            width={25}
                            height={25}
                          />
                        </div>
                        <div className="text-center md:text-left">
                          <h3 className="text-lg text-gray-800">{service.title}</h3>
                          <p className="text-gray-600 mt-1 text-justify">
                            {service.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatedSection>

            <PatientReviews />
          </div>
        </div>

        {/* Map Section */}
        <AnimatedSection variants={containerVariants}>
          <motion.div 
            className="  rounded-xl   overflow-hidden mb-12"
            variants={scaleUpVariants}
          >
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-6 font-serif  text-[#B97E63] text-center">
                Find Us on Map
              </h2>
              <motion.div 
                className="w-full h-80 rounded-lg overflow-hidden shadow-md"
                variants={fadeInVariants}
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1501.6345985601388!2d74.63457247447309!3d26.471548361953225!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be7ec6b89ce17%3A0x9014bae9b1d9ff78!2zRHIgQW5raXQgTWVocmEoTUQgU2tpbiAmIFZEKSDgpJrgpLDgpY3gpK7gpLDgpYvgpJcs4KSv4KWM4KSo4KSw4KWL4KSXIOCkj-CkteCkgiDgpLjgpYzgpKjgpY3gpKbgpLDgpY3gpK_gpLDgpYvgpJcg4KS14KS_4KS24KWH4KS34KSc4KWN4KSeKFNlbmlvciBTa2luIFNwZWNpYWxpc3QgRGVybWF0b2xvZ2lzdCAmIENvc21ldG9sb2dpc3Qp!5e0!3m2!1sen!2sus!4v1756189343393!5m2!1sen!2sus" 
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dr. Ankit Mehra Dermatology Clinic Location"
                ></iframe>
              </motion.div>
              <motion.div 
                className="mt-6 text-center"
                variants={itemVariants}
              >
                <p className="text-gray-600">
                  <span className="font-semibold">Address:</span> 62, Lane no 2, opp. Hotel Ambassador, Nagina Bagh,
                  Muslim Mochi Mohalla, Ajmer, Rajasthan 305001
                </p>
                <p className="text-gray-600 mt-2">
                  <span className="font-semibold">Phone:</span> <a href="tel:+919697041111" className="  hover:underline">+91 96970 41111</a>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Contact Form Section */}
         <AppointmentForm/>

        <AnimatedSection variants={containerVariants}>
          <div className=" ">
            {/* Contact Information Card */}
            <motion.div 
              className="  rounded-xl   overflow-hidden"
              variants={slideInFromLeft}
            >
            <ContactInfoSection/>   
         
            </motion.div>
            
            
          </div>
        </AnimatedSection>
        <WhyChooseSection />
        {/* Expert Care Team */}
        <AnimatedSection variants={containerVariants}>
          <motion.div 
            className=" rounded-xl px-0   overflow-hidden  "
            variants={scaleUpVariants}
          >
             <ExpertCards />
          </motion.div>
        </AnimatedSection>
      </main>
    </div>
    
  );
};

export default ContactPage;