import StickyInsideContainer from '@/components/StickyInsideContainer';
 
import React from 'react';

export const metadata = {
  title: "Effective Scar Reduction Treatments - Clear Skin | Dr. Ankit Mehra",
  description:
    "Minimize scars and restore smooth skin with advanced scar reduction therapies. Proven techniques for acne scars, injury scars, and more.",
  keywords: [
    "scar reduction treatment",
    "acne scar removal",
    "injury scar treatment",
    "scar removal Ajmer",
    "laser scar treatment",
    "dermatologist scar treatment",
    "skin resurfacing for scars",
    "advanced scar therapies",
    "Dr. Ankit Mehra scar treatment",
    "smooth skin treatments"
  ],
  openGraph: {
    title:
      "Effective Scar Reduction Treatments - Clear Skin | Dr. Ankit Mehra",
    description:
      "Minimize scars and restore smooth skin with advanced scar reduction therapies. Proven techniques for acne scars, injury scars, and more.",
    images: [
      {
        url: "/images/before-after-portrait-woman-retouched-scaled.webp",
        width: 2560,
        height: 1707,
        alt: "Scar Reduction Treatment - Before and After",
      },
    ],
    type: "article",
    url: "https://drankitmehra.com/scar-reduction/",
    siteName: "Dr. Ankit Mehra | Dermatologist in Ajmer",
  },
  alternates: {
    canonical: "https://drankitmehra.com/scar-reduction/",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Effective Scar Reduction Treatments - Clear Skin | Dr. Ankit Mehra",
    description:
      "Minimize scars and restore smooth skin with advanced scar reduction therapies. Proven techniques for acne scars, injury scars, and more.",
    images: ["/images/before-after-portrait-woman-retouched-scaled.webp"],
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
    "application-name": "Dr. Ankit Mehra - Scar Reduction Treatments",
    author: "Dr. Ankit Mehra",
    publisher: "Dr. Ankit Mehra",
    "publisher-url": "https://drankitmehra.com",
    generator: "WordPress",
    "theme-color": "#ffffff",
  },
};

const ScarReduction = () =>
{
  const data = {
    images: [
      {
        src: "/images/home/before-after-portrait-woman-retouched-760x428.webp",
        alt: "Scar Reduction 1",
        showOnMobile: true,
      },
      {
        src: "/images/scar-revision-before-after.webp",
        alt: "Scar Reduction 2",
        showOnMobile: false,
      },
    ],
    services: [
      { name: "Anti-Aging", url: "/anti-aging-treatments" },
      { name: "Pigmentation", url: "/pigmentation-treatment" },
      { name: "Skin Rejuvenation", url: "/skin-rejuvenation" },
      { name: "Acne", url: "/acne-treatment" },
    ],
    treatment: {
      title: "Scar Reduction",
      breadcrumb: "Advanced Scar Reduction Treatments",
    },
    intro: [
      "Scar Reduction treatments can minimize scars from acne, injuries, or surgery. Methods include microneedling, laser therapy, and dermal fillers."
    ],
    sections: [
      {
        title: "Symptoms:",
        lists: [
          ["Raised or depressed scars", "Discoloration", "Rough texture"]
        ]
      },
      {
        title: "Causes:",
        lists: [
          ["Skin trauma", "Inflammation", "Improper wound care", "Genetics"]
        ]
      },
      {
        title: "Risks:",
        lists: [
          ["Skin sensitivity", "Irritation", "Redness", "Rare infection risk"]
        ]
      },
      {
        title: "Prevention:",
        lists: [
          [
            "Avoid picking at wounds",
            "Maintain proper wound care",
            "Use sunscreen on healing scars",
            "Keep skin moisturized"
          ]
        ]
      },
    ],
    outro: [
      "Scar reduction treatments can significantly improve skin texture and appearance over time.",
      "Book your consultation to explore the most effective scar reduction methods for your needs."
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

export default ScarReduction;
