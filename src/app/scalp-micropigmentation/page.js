import StickyInsideContainer from '@/components/StickyInsideContainer';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: "Scalp Micropigmentation In Ajmer | Dr. Ankit Mehra",
  description:
    "Enhance your hairline and create a fuller look with scalp micropigmentation in Ajmer. Safe and effective treatment for thinning hair and baldness.",
  keywords: [
    "scalp micropigmentation Ajmer",
    "hair tattoo treatment",
    "SMP Ajmer",
    "hairline restoration Ajmer",
    "baldness solution Ajmer",
    "non-surgical hair treatment",
    "hair density enhancement",
    "Dr. Ankit Mehra SMP",
    "permanent hair shading Ajmer",
    "hair loss camouflage"
  ],
  openGraph: {
    title: "Scalp Micropigmentation In Ajmer | Dr. Ankit Mehra",
    description:
      "Enhance your hairline and create a fuller look with scalp micropigmentation in Ajmer. Safe and effective treatment for thinning hair and baldness.",
    images: [
      {
        url: "/images/mature-man-going-through-follicular-unit-extraction-process-1-1-1024x683.webp",
        width: 1200,
        height: 630,
        alt: "Scalp Micropigmentation Treatment",
      },
    ],
    type: "article",
    url: "https://drankitmehra.com/scalp-micropigmentation/",
    siteName: "Dr. Ankit Mehra | Dermatologist in Ajmer",
  },
  alternates: {
    canonical: "https://drankitmehra.com/scalp-micropigmentation/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scalp Micropigmentation In Ajmer | Dr. Ankit Mehra",
    description:
      "Enhance your hairline and create a fuller look with scalp micropigmentation in Ajmer. Safe and effective treatment for thinning hair and baldness.",
    images: [
      "/images/mature-man-going-through-follicular-unit-extraction-process-1-1-1024x683.webp",
    ],
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
    "application-name": "Dr. Ankit Mehra - Scalp Micropigmentation",
    author: "Dr. Ankit Mehra",
    publisher: "Dr. Ankit Mehra",
    "publisher-url": "https://drankitmehra.com",
    generator: "WordPress",
    "theme-color": "#ffffff",
  },
};

const ScalpMicropigmentation = () =>
{
  const data = {
    images: [
      {
        src: "/images/home/mature-man-going-through-follicular-unit-extraction-process-1-1-1536x1024.webp",
        alt: "Scalp Micropigmentation 1",
        showOnMobile: true,
      },
      {
        src: "/images/organic-scalp-pigmentation.webp",
        alt: "Scalp Micropigmentation 2",
        showOnMobile: false,
      },
    ],
    services: [
      { name: "Hair Loss", url: "/hair-loss-treatments" },
      { name: "Platelet-Rich Plasma", url: "/prp-therapy" },
     
    ],
    treatment: {
      title: "Scalp Micropigmentation",
      breadcrumb: "Advanced Hair Density Solutions",
    },
    intro: [
      "Scalp Micropigmentation is a cosmetic tattooing technique that simulates hair follicles to create the appearance of a fuller head of hair."
    ],
    sections: [
      {
        title: "Symptoms:",
        lists: [
          ["Thinning hair", "Visible scalp"]
        ]
      },
      {
        title: "Causes:",
        lists: [
          ["Genetics", "Alopecia", "Scarring"]
        ]
      },
      {
        title: "Risks:",
        lists: [
          ["Skin sensitivity", "Pigment allergies", "Possible fading", "Scalp infections"]
        ]
      },
      {
        title: "Prevention:",
        lists: [
          ["Pre-treatment patch testing", "Post-treatment cleanliness", "Avoiding direct sunlight", "Following aftercare instructions"]
        ]
      },
    ],
    outro: [
      "Scalp Micropigmentation offers a safe and effective way to restore the look of natural hair density.",
      "Book your consultation to see how this treatment can transform your appearance."
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

export default ScalpMicropigmentation;
