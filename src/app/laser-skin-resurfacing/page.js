import StickyInsideContainer from '@/components/StickyInsideContainer';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: "Laser Skin Resurfacing Treatments in Ajmer | Dr. Ankit Mehra",
  description:
    "Rejuvenate your skin with advanced laser skin resurfacing. Reduce wrinkles, scars, and blemishes with precise and effective laser technology.",
  keywords: [
    "laser skin resurfacing Ajmer",
    "skin rejuvenation Ajmer",
    "wrinkle removal laser Ajmer",
    "acne scar treatment Ajmer",
    "blemish removal laser Ajmer",
    "laser facial resurfacing",
    "dermatologist laser treatments Ajmer",
    "anti-aging laser treatment",
    "best laser skin clinic Ajmer",
    "laser treatment for scars"
  ],
  openGraph: {
    title: "Laser Skin Resurfacing Treatments in Ajmer | Dr. Ankit Mehra",
    description:
      "Rejuvenate your skin with advanced laser skin resurfacing. Reduce wrinkles, scars, and blemishes with precise and effective laser technology.",
    images: [
      {
        url: "/images/23487-1024x683.webp",
        width: 1200,
        height: 630,
        alt: "Laser Skin Resurfacing Treatment in Ajmer",
      },
    ],
    type: "article",
    url: "https://drankitmehra.com/laser-skin-resurfacing/",
    siteName: "Dr. Ankit Mehra | Dermatologist in Ajmer",
  },
  alternates: {
    canonical: "https://drankitmehra.com/laser-skin-resurfacing/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laser Skin Resurfacing Treatments in Ajmer | Dr. Ankit Mehra",
    description:
      "Rejuvenate your skin with advanced laser skin resurfacing. Reduce wrinkles, scars, and blemishes with precise and effective laser technology.",
    images: ["/images/23487-1024x683.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": "-1",
      "max-video-preview": "-1",
    },
  },
  other: {
    "application-name": "Dr. Ankit Mehra - Laser Skin Resurfacing",
    author: "Dr. Ankit Mehra",
    publisher: "Dr. Ankit Mehra",
    "publisher-url": "https://drankitmehra.com",
    generator: "WordPress",
    "theme-color": "#ffffff",
  },
};

const LaserSkinResurfacing = () =>
{
  const data = {
    images: [
      {
        src: "/images/home/laserSkinResurfacing.webp",
        alt: "Laser Skin Resurfacing 1",
        showOnMobile: true,
      },
      {
        src: "/images/Unlocking-the-Basics-of-CO2-Laser-Skin-Resurfacing.webp",
        alt: "Laser Skin Resurfacing 2",
        showOnMobile: false,
      },
    ],
    services: [
      
      { name: "Laser Hair Removal", url: "/laser-hair-removal" },
      { name: "Laser Tattoo Removal", url: "/laser-tattoo-removal" },
    ],
    treatment: {
      title: "Laser Skin Resurfacing",
      breadcrumb: "Advanced Skin Resurfacing Solutions",
    },
    intro: [
      "This treatment removes damaged skin layers to treat wrinkles, uneven skin tone, and sun damage while promoting collagen growth."
    ],
    sections: [
      {
        title: "Symptoms:",
        lists: [
          ["Wrinkles", "Fine lines", "Uneven texture", "Age spots"]
        ]
      },
      {
        title: "Causes:",
        lists: [
          ["Sun damage", "Aging", "Environmental factors"]
        ]
      },
      {
        title: "Risks:",
        lists: [
          ["Scarring", "Redness", "Pigmentation changes", "Potential skin infection"]
        ]
      },
      {
        title: "Prevention:",
        lists: [
          [
            "Use sunscreen after treatment",
            "Avoid harsh skincare products",
            "Moisturize the skin",
            "Limit sun exposure"
          ]
        ]
      },
    ],
    outro: [
      "Laser Skin Resurfacing helps achieve smoother, more youthful-looking skin by targeting damage and imperfections.",
      "Book your consultation today to explore how this treatment can enhance your skin’s health and appearance."
    ],
    button: {
      text: "Book Appointment",
    },
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <StickyInsideContainer data={data} />
       
    </div>
  );
};

export default LaserSkinResurfacing;
