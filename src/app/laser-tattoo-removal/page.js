import StickyInsideContainer from '@/components/StickyInsideContainer';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: "Laser Tattoo Removal In Ajmer | Dr. Ankit Mehra",
  description:
    "Remove unwanted tattoos with advanced laser technology. Precise and effective treatment for all tattoo sizes and colors.",
  keywords: [
    "laser tattoo removal Ajmer",
    "tattoo removal clinic Ajmer",
    "permanent tattoo removal Ajmer",
    "best laser tattoo removal Ajmer",
    "unwanted tattoo removal Ajmer",
    "painless tattoo removal Ajmer",
    "tattoo removal treatment Ajmer",
    "dermatologist tattoo removal Ajmer",
    "safe tattoo removal Ajmer",
    "laser treatment for tattoo removal"
  ],
  openGraph: {
    title: "Laser Tattoo Removal In Ajmer | Dr. Ankit Mehra",
    description:
      "Remove unwanted tattoos with advanced laser technology. Precise and effective treatment for all tattoo sizes and colors.",
    images: [
      {
        url: "/images/2149445992-1024x683.webp", // Replace with actual image path
        width: 1200,
        height: 630,
        alt: "Laser Tattoo Removal Treatment in Ajmer",
      },
    ],
    type: "article",
    url: "https://drankitmehra.com/laser-tattoo-removal/",
    siteName: "Dr. Ankit Mehra | Dermatologist in Ajmer",
  },
  alternates: {
    canonical: "https://drankitmehra.com/laser-tattoo-removal/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laser Tattoo Removal In Ajmer | Dr. Ankit Mehra",
    description:
      "Remove unwanted tattoos with advanced laser technology. Precise and effective treatment for all tattoo sizes and colors.",
    images: ["/images/2149445992-1024x683.webp"], // Replace with actual path
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
    "application-name": "Dr. Ankit Mehra - Laser Tattoo Removal",
    author: "Dr. Ankit Mehra",
    publisher: "Dr. Ankit Mehra",
    "publisher-url": "https://drankitmehra.com",
    generator: "WordPress",
    "theme-color": "#ffffff",
  },
};

const LaserTattooRemoval = () =>
{
  const data = {
    images: [
      {
        src: "/images/home/laserTattooRemoval.webp",
        alt: "Laser Tattoo Removal 1",
        showOnMobile: true,
      },
      {
        src: "/images/unwanted-tattoo-2.webp",
        alt: "Laser Tattoo Removal 2",
        showOnMobile: false,
      },
    ],
    services: [
      
      { name: "Laser Hair Removal", url: "/laser-hair-removal" },
      { name: "Laser Skin Resurfacing", url: "/laser-skin-resurfacing" },
    ],
    treatment: {
      title: "Laser Tattoo Removal",
      breadcrumb: "Advanced Tattoo Removal Solutions",
    },
    intro: [
      "Laser tattoo removal uses targeted laser energy to break down tattoo pigments, which are then gradually cleared by the body's natural processes."
    ],
    sections: [
      {
        title: "Symptoms:",
        lists: [
          ["Unwanted tattoo visibility"]
        ]
      },
      {
        title: "Causes:",
        lists: [
          ["Old tattoos that are no longer wanted", "Unprofessional tattoos"]
        ]
      },
      {
        title: "Risks:",
        lists: [
          ["Blisters", "Scarring", "Redness", "Pigmentation changes", "Mild discomfort"]
        ]
      },
      {
        title: "Prevention:",
        lists: [
          [
            "Follow care instructions",
            "Avoid sun exposure",
            "Keep the area clean",
            "Do not pick at scabs"
          ]
        ]
      },
    ],
    outro: [
      "Laser Tattoo Removal helps you achieve clear skin by safely targeting and removing unwanted tattoos.",
      "Book your consultation today to discuss your tattoo removal options."
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

export default LaserTattooRemoval;
