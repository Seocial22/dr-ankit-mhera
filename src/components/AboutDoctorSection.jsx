"use client";

import React, { useEffect, useRef } from "react";
 
import Image from "next/image";
 
import AboutUsSection from "./AboutUsSection";
import StatsSection from "./StatsSection";

const AboutDoctorSection = () => {
  const statsRef = useRef([]);

  useEffect(() => {
    // Add smooth scroll behavior
    const handleScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    // Add event listeners to anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((anchor) => {
      anchor.addEventListener("click", handleScroll);
    });

    // Add animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    if (statsRef.current) {
      statsRef.current.forEach((el) => {
        if (el) {
          el.style.opacity = "0";
          el.style.transform = "translateY(20px)";
          el.style.transition = "all 0.6s ease";
          observer.observe(el);
        }
      });
    }

    // Cleanup event listeners
    return () => {
      anchorLinks.forEach((anchor) => {
        anchor.removeEventListener("click", handleScroll);
      });
      if (statsRef.current) {
        statsRef.current.forEach((el) => {
          if (el) observer.unobserve(el);
        });
      }
    };
  }, []);

  return (
    <>
      <div className=" bg-[#FEF7F8]">
        {/* Main Content */}
        <main className="container mx-auto px-6 py-12">
          <div className="  rounded-2xl bg-[#F9F0EB] shadow overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side - Doctor's Photo and Info */}
              <div className="  p-8 md:p-12 flex flex-col items-center justify-center">
                <div className="relative mb-6 group overflow-hidden rounded-lg max-w-sm mx-auto">
                  <Image
                    src="/images/home/dr-ankitmehra.webp"
                    alt="Dr. Ankit Mehra"
                    className="w-full aspect-square object-cover border-8 border-[#F2C8A7] shadow-2xl transform transition-transform duration-500 group-hover:scale-110"
                    width={500}
                    height={500}
                  />
                </div>

                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Dr. Ankit Mehra
                  </h2>
                  <p className="text-lg text-gray-600 font-medium">
                    MD (Skin & VD)
                  </p>
                  <p className="text-sm text-gray-500 mt-2 px-4">
                    Venereology and Dermatology Specialist
                  </p>
                </div>
              </div>

              {/* Right Side - Clinic Information */}
              
                
                
                <AboutUsSection/>
               

                

             
            
            </div>
            <div className="  flex justify-center">
              <StatsSection /></div>
          </div>
        </main>
      </div>

      <style jsx global>{`
        body {
          font-family: "Inter", sans-serif;
        }
        .gradient-bg {
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }
        .hover-lift {
          transition: all 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </>
  );
};

export default AboutDoctorSection;
