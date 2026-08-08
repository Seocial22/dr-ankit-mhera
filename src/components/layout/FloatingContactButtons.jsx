import Image from 'next/image';
import React from 'react';

const FloatingContactButtons = () =>
{
  return (
    <>
      {/* WhatsApp button - bottom left */}
      <a
        href="https://wa.me/+919697041111"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 left-4 flex items-center justify-center w-12 h-12 rounded-full bg-[#18e60a] shadow-md hover:opacity-90 transition-all z-50"
        aria-label="Chat on WhatsApp"
      >
        <Image
          src="/images/home/whatsapp.webp"
          alt="WhatsApp"
          width={28}
          height={28}
          className="w-7 h-7"
        />
      </a>

      {/* Phone button - bottom right */}
      <a
        href="tel:+919697041111"
        className="fixed bottom-4 right-4 flex items-center justify-center w-12 h-12 rounded-full bg-[#1a5aee] shadow-md hover:opacity-90 transition-all z-50"
        aria-label="Call us"
      >
        <Image
          src="/images/home/phone.webp"
          alt="Phone"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      </a>
    </>
  );
};

export default FloatingContactButtons;
