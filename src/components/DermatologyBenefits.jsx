'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const DermatologyBenefits = () => {
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
                staggerChildren: 0.1
            }
        }
    };

    const benefitItemVariant = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const rightBenefitItemVariant = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <div className='flex justify-center bg-[#FEF7F8]'>
            <div className='max-w-7xl rounded-[40]' style={{ backgroundColor: '#bf7f62', color: 'white', padding: '40px 20px', fontFamily: "'Georgia', serif" }}>
                <motion.div
                    style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={fadeInUp}
                >
                    <motion.h2
                        style={{ fontSize: '3rem', margin: '0 0 20px' }}
                        variants={fadeInUp}
                    >
                        Exceptional dermatology, every step of the way
                    </motion.h2>
                    <motion.p
                        style={{ fontSize: '1.15rem', fontWeight: '400', margin: '0' }}
                        variants={fadeInUp}
                    >
                        Experience personalized care, advanced treatments, and visible results with our expert dermatology services.
                    </motion.p>
                </motion.div>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '60px',
                        flexWrap: 'wrap',
                        maxWidth: '1200px',
                        margin: '0 auto',
                    }}
                >
                    {/* Left Benefits */}
                    <motion.div
                        style={{ flex: '1', minWidth: '250px' }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={staggerContainer}
                    >
                        <BenefitItem
                            icon={
                                <Image
                                    src="/images/946369-removebg-preview.webp"
                                    alt="Expert Dermatologist"
                                    width={30}
                                    height={30}
                                    className="object-contain"
                                />
                            }
                            title="Expert Dermatologist"
                            description="Care by Dr. Ankit Mehra, MD (Skin & VD), former Assistant Professor at JLN Medical College with 12+ years of expertise."
                            variant={benefitItemVariant}
                        />
                        <BenefitItem
                            icon={
                                <Image
                                    src="/images/icon-benefit-2.webp"
                                    alt="icon-benefit-2"
                                    width={30}
                                    height={30}
                                    className="object-contain"
                                />
                            }
                            title="Personalized Treatments"
                            description="Tailored solutions for acne, pigmentation, scars, hair loss, and cosmetic needs."
                            variant={benefitItemVariant}
                        />
                        <BenefitItem
                            icon={
                                <Image
                                    src="/images/personalized-treatments.webp"
                                    alt="personalized-treatments"
                                    width={30}
                                    height={30}
                                    className="object-contain"
                                />
                            }
                            title="Safe & Hygienic"
                            description="Modern clinic setup with top-tier hygiene, medical protocols & patient safety."
                            variant={benefitItemVariant}
                        />
                    </motion.div>

                    {/* Center Image */}
                    {/* Center Image */}
                    <motion.div
                        style={{
                            borderRadius: '40%',
                            overflow: 'hidden',
                            minWidth: '220px',
                            boxShadow: '0 0 20px rgba(0,0,0,0.2)',
                            position: 'relative',
                            width: '220px',
                            height: '300px'
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={fadeInUp}
                    >
                        <Image
                            src="/images/our-benefit-image.webp"
                            alt="Smiling woman"
                            fill
                            sizes="220px"
                            style={{ objectFit: 'cover' }}
                        />
                    </motion.div>

                    {/* Right Benefits */}
                    <motion.div
                        style={{ flex: '1', minWidth: '250px' }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={staggerContainer}
                    >
                        <BenefitItem
                            icon={
                                <Image
                                    src="/images/icon-benefit-4.webp"
                                    alt="icon-benefit-4"
                                    width={30}
                                    height={30}
                                    className="object-contain"
                                />
                            }
                            title="Complete Skin & Hair Care"
                            description="Comprehensive treatments including skin rejuvenation, acne, pigmentation, anti-aging, and PRP therapy for hair."
                            variant={rightBenefitItemVariant}
                        />
                        <BenefitItem
                            icon={
                                <Image
                                    src="/images/review1.webp"
                                    alt="review1"
                                    width={30}
                                    height={30}
                                    className="object-contain"
                                />
                            }
                            title="Positive Patient Reviews"
                            description="Trusted by patients with glowing reviews for exceptional care."
                            variant={rightBenefitItemVariant}
                        />
                        <BenefitItem
                            icon={
                                <Image
                                    src="/images/icon-benefit-6.webp"
                                    alt="icon-benefit-6"
                                    width={30}
                                    height={30}
                                    className="object-contain"
                                />
                            }
                            title="Advanced Technology"
                            description="Expert in PRP, microneedling & latest cosmetic dermatology techniques."
                            variant={rightBenefitItemVariant}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

const BenefitItem = ({ icon, title, description, variant }) => {
    return (
        <motion.div
            style={{ display: 'flex', alignItems: 'center', margin: '25px 0' }}
            variants={variant}
        >
            <div
                style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '15px',
                    color: '#bf7f62',
                    flexShrink: 0,
                }}
            >
                {icon}
            </div>
            <div style={{ fontSize: '1rem' }}>
                <h3 style={{ margin: '0 0 5px 0', fontWeight: '600' }}>{title}</h3>
                <p style={{ margin: 0, lineHeight: '1.4' }}>{description}</p>
            </div>
        </motion.div>
    );
};

export default DermatologyBenefits;