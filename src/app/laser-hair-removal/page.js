import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import StickyInsideContainer from '@/components/StickyInsideContainer';

export const metadata = {
  title: "Laser Hair Removal in Ajmer - Hair-Free Skin | Dr. Ankit Mehra",
  description:
    "Achieve long-lasting smooth skin with laser hair removal in Ajmer. Safe, effective, and suitable for all skin types at Dr. Ankit Mehra's clinic.",
  keywords: [
    "laser hair removal Ajmer",
    "permanent hair removal Ajmer",
    "full body laser hair removal",
    "facial hair laser treatment Ajmer",
    "safe laser hair removal",
    "affordable laser hair removal Ajmer",
    "best laser hair removal clinic Ajmer",
    "dermatologist laser hair removal",
    "hair-free skin treatments Ajmer",
    "unwanted hair removal Ajmer"
  ],
  openGraph: {
    title: "Laser Hair Removal in Ajmer - Hair-Free Skin | Dr. Ankit Mehra",
    description:
      "Achieve long-lasting smooth skin with laser hair removal in Ajmer. Safe, effective, and suitable for all skin types at Dr. Ankit Mehra's clinic.",
    images: [
      {
        url: "/images/7588.webp",
        width: 1200,
        height: 630,
        alt: "Laser Hair Removal in Ajmer",
      },
    ],
    type: "article",
    url: "https://drankitmehra.com/laser-hair-removal/",
    siteName: "Dr. Ankit Mehra | Dermatologist in Ajmer",
  },
  alternates: {
    canonical: "https://drankitmehra.com/laser-hair-removal/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laser Hair Removal in Ajmer - Hair-Free Skin | Dr. Ankit Mehra",
    description:
      "Achieve long-lasting smooth skin with laser hair removal in Ajmer. Safe, effective, and suitable for all skin types at Dr. Ankit Mehra's clinic.",
    images: ["/images/7588.webp"],
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
    "application-name": "Dr. Ankit Mehra - Laser Hair Removal",
    author: "Dr. Ankit Mehra",
    publisher: "Dr. Ankit Mehra",
    "publisher-url": "https://drankitmehra.com",
    generator: "WordPress",
    "theme-color": "#ffffff",
  },
};

const LaserHairRemoval = () =>
{
  const data = {
    images: [
      {
        src: "/images/home/leaser-hair-romover.webp",
        alt: "Laser Hair Removal 1",
        showOnMobile: true,
      },
      {
        src: "/images/hair-remover.webp",
        alt: "Laser Hair Removal 2",
        showOnMobile: false,
      },
    ],
    services: [
      { name: "Laser Skin Resurfacing", url: "/laser-skin-resurfacing" },
      { name: "Laser Tattoo Removal", url: "/laser-tattoo-removal" },
     
    ],
    treatment: {
      title: "Laser Hair Removal",
      breadcrumb: "Advanced Hair Removal Solutions",
    },
    intro: [
      "This technology targets hair follicles to reduce unwanted hair growth, providing long-term results for various body areas."
    ],
    sections: [
      {
        title: "Symptoms:",
        lists: [
          [
            "Dense and excess hair on face",
            "Excess hair on arms",
            "Excess hair on legs",
            "Unwanted hair in various body areas"
          ]
        ]
      },
      {
        title: "Causes:",
        lists: [
          ["Genetic factors", "Hormonal factors", "Specific medical conditions"]
        ]
      },
      {
        title: "Risks:",
        lists: [
          ["Redness", "Skin irritation", "Pigmentation issues", "Temporary discomfort"]
        ]
      },
      {
        title: "Prevention:",
        lists: [
          [
            "Avoid sun exposure before and after treatment",
            "Proper aftercare",
            "Avoid sunscreen before treatment"
          ]
        ]
      },
    ],
    outro: [
      "Laser Hair Removal provides long-lasting smoothness and reduces the need for traditional hair removal methods.",
      "Book your consultation today to achieve hassle-free, silky skin."
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

export default LaserHairRemoval;
