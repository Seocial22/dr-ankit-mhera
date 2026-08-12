'use client'
import React, { useState } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CardGrid = () => {
    const [activeCard, setActiveCard] = useState(null);

    const cards = [
        {
            title: 'Dr. Apurva Mehra',
            img: '/images/home/apurva-mehra.webp',
            text: [
                { label: "Qualifications:", value: "MBBS, MD (Neuropsychiatry)" },
                { label: "Experience:", value: "3+3 Years Residency Experience" },
                { label: "Position:", value: "Former Resident at JLN Medical College, Ajmer" }
            ],
            url: '/apurva-mehra',
        },
        {
            title: 'Dr. Anju Depan',
            img: '/images/home/anju-depan.webp',
            text: [
                { label: "Qualifications:", value: "MBBS, MS (Obstetrics & Gynaecology)" },
                { label: "Education:", value: "MBBS – 2006, MS – 2013, SN Medical College" },
                { label: "Speciality :", value: "Laparoscopic surgery" },
                { label: "Experience:", value: "Ex-Senior Resident & Ex-Assistant Professor" },
                { label: "Position:", value: "Janana Hospital, Ajmer" }
            ],
            url: '/dr-anju-depan',
        },
        {
            title: 'Dr. Kanti Meherda',
            img: '/images/home/kanti-meherda.webp',
            text: [
                { label: "Qualifications:", value: "MS Gynecology" },
                { label: "Experience:", value: "Senior Professor & Unit Head" },
                { label: "Position:", value: "Janana Hospital, Ajmer" }
            ],
            url: '/dr-kanti-meherda',
        },
        {
            title: 'Dr. Ashok Meherda',
            img: '/images/home/ashok-meherda.webp',
            text: [
                { label: "Qualifications:", value: "MD, Skin & VD" },
                { label: "Experience:", value: "Senior Professor & Head" },
                { label: "Position:", value: "Department of Skin, JLN Medical College, Ajmer" }
            ],
            url: '/dr-ashok-meherda',
        },
    ];

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
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
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <>
            <motion.div
                className='flex justify-center text-[#B97E63]'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeInUp}
            >
                <div style={{ padding: '40px 20px', fontFamily: "'Georgia', serif" }}>
                    <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 40px' }}>
                        <motion.h2
                            style={{ fontSize: '3rem', margin: '0 0 20px' }}
                            variants={fadeInUp}
                        >
                            Our Expert Care Team
                        </motion.h2>
                        <motion.p
                            style={{ fontSize: '1.15rem', fontWeight: '400', margin: '0' }}
                            variants={fadeInUp}
                        >
                            Meet our distinguished team of medical professionals dedicated to providing exceptional healthcare services
                        </motion.p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="pb-25 flex justify-center items-center font-mono"
                style={{ fontFamily: "'Georgia', serif" }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={staggerContainer}
            >
                <div className="container w-[95%] max-w-[1600px] flex flex-wrap align-center justify-center gap-5 xl:justify-between">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            className="relative w-[350px] xl:w-[23%] xl:min-w-[320px] h-[400px] overflow-hidden rounded-lg cursor-pointer group"
                            onClick={() => setActiveCard(index)}
                            variants={cardVariant}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Face 1 */}
                            <div
                                className={`absolute w-full h-full flex justify-center items-center transition-transform duration-500 
                ${activeCard === index ? '-translate-y-full' : 'translate-y-0 group-hover:-translate-y-full max-[768px]:group-hover:translate-y-0'}`}
                            >
                                <div className="w-full h-full relative">
                                    <Image
                                        src={card.img}
                                        alt={card.title}
                                        fill
                                        sizes="(max-width: 768px) 350px, 320px"
                                        className="object-cover"
                                    />
                                    <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-1 rounded text-lg">
                                        {card.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Face 2 */}
                            <div
                                className={`absolute w-full h-full bg-[#B9826C] p-6 flex flex-col justify-between items-center text-center rounded-xl shadow-2xl transition-transform duration-500
                ${activeCard === index ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0 max-[768px]:group-hover:translate-y-full'}`}
                            >
                                {/* Close Button (mobile only) */}
                                {activeCard === index && (
                                    <motion.button
                                        className="absolute top-3 right-3 bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow-md md:hidden"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setActiveCard(null);
                                        }}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <X size={18} className="text-gray-700" />
                                    </motion.button>
                                )}

                                {/* Content */}
                                <div className="flex-1 flex flex-col justify-center items-start w-full text-left space-y-3">
                                    <h3 className="text-center w-full text-xl pb-2 bg-gray-200 rounded-2xl">
                                        {card.title}
                                    </h3>
                                    {card.text.map((item, idx) => (
                                        <div key={idx} className="flex text-white text-sm">
                                            <span className="font-semibold w-24 flex-shrink-0 mr-2">{item.label}</span>
                                            <span className="pl-3 flex-1">{item.value}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Button */}
                                <Link
                                    href={card.url}
                                    className="mt-4 inline-block border border-gray-800 px-4 py-2 rounded-lg font-semibold text-gray-800 hover:bg-[#5A4232] hover:text-white transition-colors duration-300 text-sm"
                                >
                                    Read More
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </>
    );
};

export default CardGrid;