import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const AboutUsSection = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.6
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const badgeVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.4
            }
        }
    };

    return (
        <div className="bg-[#f9f0eb] min-h-screen flex items-center justify-center p-4 sm:p-6 font-serif">
            <motion.section 
                className="max-w-4xl w-full bg-[#f9f0eb] text-[#b97e63]"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
            >
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                    {/* Left Column - Content */}
                    <div className="flex-1 w-full">
                        <motion.h2 
                            className="text-3xl sm:text-4xl font-serif font-semibold mb-6 max-w-full leading-snug"
                            variants={itemVariants}
                        >
                            Welcome to Dr. Ankit Mehra's Dermatology Clinic in Ajmer
                        </motion.h2>
                        
                        <motion.p 
                            className="text-gray-900 text-justify mb-8 leading-relaxed text-sm sm:text-base font-sans"
                            variants={itemVariants}
                        >
                            Where expertise, innovation, and compassionate care unite to offer comprehensive solutions for all your skin and hair needs. Dr. Ankit Mehra brings over 12 years of experience in the field, with a background as a former Assistant Professor at JLN Medical College, Ajmer.
                        </motion.p>
                        
                        <motion.p 
                            className="text-gray-900 text-justify mb-8 leading-relaxed text-sm sm:text-base font-sans"
                            variants={itemVariants}
                        >
                            Having conducted over 8,000 consultations and performed more than 500 laser and skin treatments, Dr. Mehra is a trusted expert who combines clinical precision with a personalized approach to patient care.
                        </motion.p>
                        
                        <motion.p 
                            className="text-gray-900 text-justify mb-8 leading-relaxed text-sm sm:text-base font-sans"
                            variants={itemVariants}
                        >
                            Our clinic specializes in diagnosing, treating, and managing a wide range of dermatological concerns. We are dedicated to enhancing your skin and hair health by utilizing advanced technology and customized treatment plans designed to boost your confidence.
                        </motion.p>
                        
                        <div className="flex flex-col md:flex-row gap-8 mb-10">
                            <motion.ul 
                                className="space-y-3 text-[#6d6a6f] font-sans flex-1"
                                variants={itemVariants}
                            >
                                {[
                                    "Commitment to Excellence in Skin Health",
                                    "State-of-the-Art Facility and Technology",
                                    "Trusted by Thousands of Satisfied Patients"
                                ].map((text, index) => (
                                    <motion.li 
                                        key={index}
                                        className="flex items-center gap-3"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: false}}
                                        transition={{ 
                                            duration: 0.5, 
                                            delay: 0.6 + (index * 0.1),
                                            ease: "easeOut"
                                        }}
                                    >
                                        <Image
                                            src="/images/checkmark.webp"
                                            alt="check icone"
                                            width={20}
                                            height={20}
                                        />
                                        {text}
                                    </motion.li>
                                ))}
                            </motion.ul>

                            {/* Experience Badge */}
                            <div className="flex justify-center md:justify-end">
                                <motion.div 
                                    className="bg-[#b97e63] rounded-3xl flex flex-col items-center justify-center min-w-[180px] w-full max-w-[200px] px-4 py-6 text-white select-none"
                                    variants={badgeVariants}
                                >
                                    <Image
                                        src="/images/doctor.webp"
                                        alt="Doctor icone"
                                        width={60}
                                        height={60}
                                        className="object-contain"
                                    />
                                    <p className="text-5xl font-serif font-semibold leading-none tracking-tight select-text mb-1">12+</p>
                                    <p className="text-center text-xs font-sans font-semibold leading-snug" style={{ lineHeight: '1.2' }}>
                                        Years Of<br />Experience
                                    </p>
                                </motion.div>
                            </div>
                        </div>

                        <motion.div 
                            className="flex sm:justify-start justify-center flex-wrap gap-4 sm:gap-6"
                            variants={itemVariants}
                        >
                            <Link href={'/about-us'}>
                                <motion.button
                                    aria-label="Read More"
                                    className="bg-[#4D3B2C] hover:bg-[#684e39] transition-colors duration-300 inline-flex items-center gap-2 text-white px-6 sm:px-7 py-3 rounded-md font-medium text-sm"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Read More
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-4 h-4"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </motion.button>
                            </Link>
                            <Link href={'/contact-us'}>
                                <motion.button
                                    aria-label="Contact Us"
                                    className="border border-[#b97e63] text-[#b97e63] hover:bg-[#b97e63] hover:text-white transition-colors duration-300 rounded-md px-6 sm:px-7 py-3 font-medium text-sm"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Contact Us
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default AboutUsSection;