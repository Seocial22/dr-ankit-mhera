"use client";
import CustomControlsGallery from "@/components/CustomControlsGallery";
import React, { useState, useEffect } from "react";
import Image from "next/image";
const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  // Array of image URLs
  const images = [
    "/images/diseases/m1.webp",
    "/images/diseases/m2.webp",
    "/images/diseases/m3.webp",
    "/images/diseases/m4.webp",
    "/images/diseases/m5.webp",
    "/images/diseases/m6.webp",
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    setDirection("next");
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setDirection("prev");
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Function to go to a specific slide
  const goToSlide = (index) => {
    setDirection(index > activeIndex ? "next" : "prev");
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
    <>
      <div className="bg-[#FEF7F8]">
     
      <CustomControlsGallery />
        <center>
          <div className="flex justify-center mb-5  max-w-4xl">
            <div
              id="default-carousel"
              className="relative w-full overflow-hidden"
              data-carousel="slide"
            >
              {/* Carousel wrapper */}
              <div className="relative h-80 rounded-lg md:h-220">
                {images.map((image, index) =>
                {
                  // Calculate position for each slide
                  let positionClass = "";
                  if (index === activeIndex)
                  {
                    positionClass = "translate-x-0 opacity-100";
                  } else if (
                    index ===
                    (activeIndex - 1 + images.length) % images.length
                  )
                  {
                    positionClass = "-translate-x-full opacity-0";
                  } else if (index === (activeIndex + 1) % images.length)
                  {
                    positionClass = "translate-x-full opacity-0";
                  } else
                  {
                    positionClass = "translate-x-full opacity-0";
                  }

                  return (
                    <div
                      key={index}
                      className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${positionClass}`}
                      data-carousel-item
                    >
                      <Image
                        src={image}
                        className="absolute block w-full h-full object-cover"
                        alt={`Slide ${index + 1}`}
                        width={500}
                        height={300}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Slider indicators */}
              <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === activeIndex
                        ? "bg-white"
                        : "bg-white/50 hover:bg-white/75"
                      }`}
                    aria-current={index === activeIndex ? "true" : "false"}
                    aria-label={`Slide ${index + 1}`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>

              {/* Slider controls */}
              <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={prevSlide}
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={nextSlide}
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
          </div>
        </center>
      </div>
    </>
  );
};

export default Carousel;
