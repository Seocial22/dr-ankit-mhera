'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
const DermatologyGallery = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Start with second image as active
  
  // Array of image URLs
  const images = [
    "/images/diseases/a1.webp",
    "/images/diseases/a2.webp",
    // "/images/diseases/a1.webp",
    "/images/diseases/a3.webp",
    // "/images/diseases/a4.webp",
    "/images/diseases/a5.webp",
    "/images/diseases/a6.webp",
    "/images/diseases/a7.webp",
    "/images/diseases/a8.webp",
    "/images/diseases/a9.webp",
    "/images/diseases/a10.webp"
  ];
  
  // Function to go to the next slide
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  // Function to go to the previous slide
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  // Function to go to a specific slide
  const goToSlide = (index) => {
    setActiveIndex(index);
  };
  
  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="py-12 bg-[#FEF7F8] font-serif">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#BF7F62] mb-4">Treatment Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our state-of-the-art facilities and the range of advanced dermatological treatments we offer at Dr. Mehra's clinic.
          </p>
        </div>
        
        {/* Gallery Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div id="dermatology-gallery" className="relative w-full" data-carousel="slide">
            
            {/* Carousel wrapper */}
            <div className="relative h-64 md:h-96 overflow-hidden">
              {images.map((image, index) => {
                // Calculate position for each slide
                let positionClass = '';
                if (index === activeIndex) {
                  positionClass = 'translate-x-0 opacity-100';
                } else if (index < activeIndex) {
                  positionClass = '-translate-x-full opacity-0';
                } else {
                  positionClass = 'translate-x-full opacity-0';
                }
                
                return (
                  <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${positionClass}`}
                    data-carousel-item={index === activeIndex ? "active" : undefined}
                  >
                    <Image
                      src={image}
                      className="absolute block w-full h-full object-cover"
                      alt={`Dermatology treatment ${index + 1}`}
                      width={500}
                      height={500}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                      <p className="text-sm font-medium">Advanced Dermatological Treatment</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Custom controls */}
            <div className="flex justify-between items-center p-4  bg-[#F9F0EB]">
              <button
                type="button"
                className="flex items-center justify-center p-2 rounded-full bg-[#F9F0EB] shadow-md hover:bg-blue-50 transition-colors focus:outline-none"
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                </svg>
              </button>
              
              {/* Indicators */}
              <div className="flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                type="button"
                className="flex items-center justify-center p-2 rounded-full bg-[#F9F0EB] shadow-md hover:bg-blue-50 transition-colors focus:outline-none"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <svg className="w-5 h-5 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Gallery Info */}
          <div className="p-6 bg-[#F9F0EB]">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Advanced Treatments</h3>
            <h1 className="text-gray-600">
              Dr. Mehra specializes in cutting-edge dermatological procedures using the latest technology. With over 500 successful laser and skin treatments performed, our clinic offers personalized solutions for all your skin and hair concerns.
            </h1>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-4xl mx-auto">
          <div className="bg-[#F9F0EB] p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">12+</div>
            <div className="text-gray-700">Years Experience</div>
          </div>
          <div className="bg-[#F9F0EB] p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">8,000+</div>
            <div className="text-gray-700">Consultations</div>
          </div>
          <div className="bg-[#F9F0EB] p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-700">Laser Treatments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DermatologyGallery;