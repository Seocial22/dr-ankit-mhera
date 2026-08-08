'use client';

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import ContactInfoSection from './ContactInfoSection';

// Memoize the ContactInfoSection to prevent unnecessary re-renders when slide changes
const MemoizedContactInfoSection = React.memo(ContactInfoSection);

export default function HeroSection({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);
  const slideInterval = 5000;
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Optimized resize handling using requestAnimationFrame to prevent layout thrashing
  useEffect(() => {
    let rAFId;
    const handleResize = () => {
      cancelAnimationFrame(rAFId);
      rAFId = requestAnimationFrame(() => {
        if (containerRef.current) {
          setContainerWidth(containerRef.current.clientWidth);
        }
        setIsMobile(window.innerWidth < 640);
      });
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(rAFId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle auto-slide declaratively. Cleans up and resets the timer on slide change or pause.
  useEffect(() => {
    if (containerWidth <= 0 || isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, slideInterval);

    return () => clearInterval(timer);
  }, [containerWidth, slides.length, isPaused, currentSlide]);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  // Keyboard navigation for better accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  // Touch handlers for mobile swipe
  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
    setIsPaused(true);
  }, []);

  const handleTouchMove = useCallback((e) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    setIsPaused(false);

    const touchDiff = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;

    if (touchDiff > swipeThreshold) {
      handleNext();
    } else if (touchDiff < -swipeThreshold) {
      handlePrev();
    }
  }, [handleNext, handlePrev]);

  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);

  // Memoize dynamic styles to prevent recalculations and object recreations on each render
  const sliderStyle = useMemo(() => ({
    transform: `translateX(-${currentSlide * containerWidth}px)`,
    transition: 'transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)',
    display: 'flex',
    width: `${slides.length * containerWidth}px`,
    height: '100%',
  }), [currentSlide, containerWidth, slides.length]);

  const slideStyle = useMemo(() => ({
    flexShrink: 0,
    width: containerWidth ? `${containerWidth}px` : '100%',
    height: '100%',
    position: 'relative',
  }), [containerWidth]);

  const progressBarStyle = useMemo(() => ({
    width: `${((currentSlide + 1) / slides.length) * 100}%`
  }), [currentSlide, slides.length]);

  return (
    <>
      <div className="flex justify-center bg-[#F1D3C0] w-full py-8">
        <section
          ref={containerRef}
          className="relative w-[90%] rounded-[10%] overflow-hidden h-[80vh] max-h-[800px]"
          aria-label="Hero Section"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Wrapper to maintain rounded corners during transition */}
          <div className="absolute inset-0 rounded-[100px] overflow-hidden">
            {containerWidth > 0 && (
              <div style={sliderStyle}>
                {slides.map((slide, index) => (
                  <div key={slide.id} style={slideStyle}>
                    <div className="relative w-full h-full">
                      {/* Background Image optimized with next/image */}
                      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                        <Image
                          src={slide.image}
                          alt={slide.title || "Hero Slide Background"}
                          fill
                          priority={index === 0}
                          sizes="(max-width: 640px) 100vw, 90vw"
                          className="object-cover object-center"
                        />
                      </div>
                      
                      {/* Optional: Add a subtle overlay for better text readability */}
                      <div className="absolute inset-0 z-10" />

                      {/* Slide content */}
                      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 z-20 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">{slide.title}</h2>
                        <p className="text-xl md:text-2xl max-w-2xl animate-fadeIn">{slide.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          {/* Large screens: center vertically */}
          <button
            onClick={handlePrev}
            className="hidden sm:flex absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-teal-400 group"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
          </button>
          <button
            onClick={handleNext}
            className="hidden sm:flex absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-teal-400 group"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
          </button>

          {/* Small screens: buttons at bottom */}
          <div className="flex sm:hidden absolute inset-x-0 bottom-16 justify-between px-6 z-20">
            <button
              onClick={handlePrev}
              className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 group"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
            </button>
            <button
              onClick={handleNext}
              className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 group"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
            <div
              className="h-full bg-gradient-to-r from-teal-400 to-blue-500 transition-all duration-800 ease-out"
              style={progressBarStyle}
            />
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <style jsx>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fadeIn {
              animation: fadeIn 1s ease-out;
            }
          `}</style>
        </section>
      </div>
      <MemoizedContactInfoSection />
    </>
  );
}