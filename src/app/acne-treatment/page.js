import StickyInsideContainer from '@/components/StickyInsideContainer';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: "Best Acne Treatment in Ajmer | Dr. Ankit Mehra (MD in Skin & VD)",
  description:
    "Get rid of acne and prevent future breakouts with targeted treatments. Best Acne Treatment in Ajmer at Dr. Ankit Mehra's clinic.",
  keywords: [
    "best acne treatment in Ajmer",
    "acne treatment Ajmer",
    "pimple treatment Ajmer",
    "acne scar removal",
    "dermatologist for acne Ajmer",
    "skin doctor Ajmer",
    "acne prevention treatments",
    "advanced acne therapy",
    "Dr. Ankit Mehra acne treatment",
    "clear skin solutions Ajmer"
  ],
  openGraph: {
    title: "Best Acne Treatment in Ajmer | Dr. Ankit Mehra (MD in Skin & VD)",
    description:
      "Get rid of acne and prevent future breakouts with targeted treatments. Best Acne Treatment in Ajmer at Dr. Ankit Mehra's clinic.",
    images: [
      {
        url: "/images/person-dealing-with-rosacea-scaled.webp", // replace with actual path
        width: 2560,
        height: 1706,
        alt: "Acne Treatment at Dr. Ankit Mehra's Clinic",
      },
    ],
    type: "article",
    url: "https://drankitmehra.com/acne-treatment/",
    siteName: "Dr. Ankit Mehra | Dermatologist in Ajmer",
  },
  alternates: {
    canonical: "https://drankitmehra.com/acne-treatment/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Acne Treatment in Ajmer | Dr. Ankit Mehra (MD in Skin & VD)",
    description:
      "Get rid of acne and prevent future breakouts with targeted treatments. Best Acne Treatment in Ajmer at Dr. Ankit Mehra's clinic.",
    images: ["/images/person-dealing-with-rosacea-scaled.webp"], // replace with actual path
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
    "application-name": "Dr. Ankit Mehra - Acne Treatment",
    author: "Dr. Ankit Mehra",
    publisher: "Dr. Ankit Mehra",
    "publisher-url": "https://drankitmehra.com",
    generator: "WordPress",
    "theme-color": "#ffffff",
  },
};

const Acnetreatment = () =>
{
  const data = {
    images: [
      {
        src: "/images/home/person-dealing-with-rosacea-scaled.webp",
        alt: "Acne Treatment 1",
        showOnMobile: true,
      },
      {
        src: "/images/acne-scar-treatment-new.webp",
        alt: "Acne Treatment 2",
        showOnMobile: false,
      },
    ],
    services: [
      { name: "Anti-Aging", url: "/anti-aging-treatments" },
      { name: "Pigmentation", url: "/pigmentation-treatment" },
      { name: "Scar Reduction", url: "/scar-reduction" },
      { name: "Skin Rejuvenation", url: "/skin-rejuvenation" },
    ],
    treatment: {
      title: "Acne Treatment",
      breadcrumb: "Advanced Acne Treatments",
    },
    intro: [
      "Acne treatment focuses on reducing pimples, blackheads, and other issues caused by clogged pores. Methods include topical and oral medications, chemical peels, and laser therapy to effectively manage acne and improve skin health."
    ],
    sections: [
      {
        title: "Symptoms:",
        lists: [
          ["Red acne", "Blackheads", "Whiteheads", "Cysts", "Sensitive skin"]
        ]
      },
      {
        title: "Causes:",
        lists: [
          ["Hormonal changes", "Excess oil production", "Bacteria", "Genetics", "Specific medications"]
        ]
      },
      {
        title: "Risks:",
        lists: [
          ["Skin dryness", "Irritation", "Redness", "Possible scarring", "Pigmentation issues"]
        ]
      },
      {
        title: "Prevention:",
        lists: [
          [
            "Gentle skincare routine",
            "Avoid touching face",
            "Balanced diet",
            "Stress management",
            "Non-comedogenic products"
          ]
        ]
      },
    ],
    outro: [
      "With the right treatment plan, acne can be effectively managed to restore clear and healthy skin.",
      "Schedule your consultation to find the most suitable acne treatment tailored to your skin type."
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

export default Acnetreatment;
