"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ElfsightWidget from './ElfsightGoogleReviews';

const PatientReviews = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  // Intersection Observer hooks
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [widgetRef, widgetInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="w-full px-4 py-8 md:py-12 lg:py-16 relative bg-[#FFF9F9]">
      <motion.div 
        className="text-center mb-8 md:mb-12 lg:mb-16 relative z-30"
        ref={titleRef}
        initial="hidden"
        animate={titleInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 lg:mb-6 text-[#BF7F62] font-serif leading-tight font-playfair"
          variants={itemVariants}
        >
          Patient Reviews
        </motion.h2>
        
        <motion.div 
          className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-3 md:mb-4"
          variants={itemVariants}
        />
        
       
        
        <motion.div
          ref={widgetRef}
          initial={{ opacity: 0, y: 50 }}
          animate={widgetInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {widgetInView && <ElfsightWidget/>}
        </motion.div>
      </motion.div>

      {/* Decorative animated elements */}
      <motion.div 
        className="absolute top-0 left-0 w-32 h-32 rounded-full bg-blue-100 opacity-20 -ml-16 -mt-16"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    
    </div>
  );
};

export default PatientReviews;