
import React from 'react';

import StickyInsideContainer from '@/components/StickyInsideContainer';

const data = {
  images: [
    {
      src: "/images/home/young-beautiful-girl-lies-beautician-s-table-receives-procedures-scaled.webp",
      alt: "Skin Rejuvenation 1",
      showOnMobile: true,
    },
    {
      src: "/images/face_rejuvenatio.webp",
      alt: "Skin Rejuvenation 2",
      showOnMobile: false,
    },
  ],
  services: [
    { name: "Anti-Aging", url: "/anti-aging-treatments" },
    { name: "Pigmentation", url: "/pigmentation-treatment" },
    { name: "Scar Reduction", url: "/scar-reduction" },
    { name: "Acne", url: "/acne-treatment" },
  ],
  treatment: {
    title: "Skin Rejuvenation",
    breadcrumb: "Advanced Skin Rejuvenation Treatments",
  },
  intro: [
    "Skin rejuvenation refers to treatments that restore a youthful appearance by addressing wrinkles, fine lines, uneven texture, and pigmentation. Techniques include chemical peels, laser therapy, and other advanced methods to enhance skin quality and radiance.",
  ],
  sections: [

    {
      title: "Symptoms:",
      lists: [
        [
          "Fine lines and wrinkles",
          "Uneven skin texture",
          "Hyperpigmentation",
          "Dull complexion",
          "Loss of elasticity",
        ],
      ],
    },
    {
      title: "Causes:",
      lists: [
        [
          "Aging process",
          "Sun exposure",
          "Environmental factors",
          "Genetics",
          "Lifestyle habits",
        ],
      ],
    },
    {
      title: "Risks:",
      lists: [
        [
          "Temporary redness",
          "Mild swelling",
          "Sensitivity to sun",
          "Possible peeling",
          "Rare: infection or scarring",
        ],
      ],
    },
    {
      title: "Prevention:",
      lists: [
        [
          "Daily sunscreen use",
          "Proper skincare routine",
          "Healthy diet",
          "Adequate hydration",
          "Avoid smoking",
        ],
      ],
    },
  ],
  outro: [
    "Regular skin rejuvenation treatments help maintain a youthful, radiant, and healthy appearance while addressing common skin concerns.",
    "Schedule your consultation today to choose the most suitable treatment for your skin type and goals.",
  ],
  button: {
    text: "Book Appointment",
  },
};

export const metadata = {
  title: "Top Skin Rejuvenation in Ajmer | Dr. Ankit Mehra",
  description:
    "Restore youthful, radiant skin with advanced skin rejuvenation treatments in Ajmer. Effective solutions for wrinkles, fine lines, uneven texture, and pigmentation.",
  keywords: [
    "skin rejuvenation Ajmer",
    "anti-aging treatment Ajmer",
    "wrinkle removal Ajmer",
    "best skin rejuvenation clinic Ajmer",
    "laser skin rejuvenation Ajmer",
    "dermatologist skin rejuvenation Ajmer",
    "skin tightening Ajmer",
    "hyperpigmentation treatment Ajmer",
    "youthful skin treatment Ajmer",
    "glowing skin treatment Ajmer"
  ],
  openGraph: {
    title: "Skin Rejuvenation in Ajmer | Dr. Ankit Mehra",
    description:
      "Restore youthful, radiant skin with advanced skin rejuvenation treatments in Ajmer. Effective solutions for wrinkles, fine lines, uneven texture, and pigmentation.",
    images: [
      {
        url: "/images/skin-rejuvenation-treatment.webp", // Replace with actual image path
        width: 1200,
        height: 630,
        alt: "Skin Rejuvenation Treatment in Ajmer",
      },
    ],
    type: "article",
    url: "https://drankitmehra.com/skin-rejuvenation/",
    siteName: "Dr. Ankit Mehra | Dermatologist in Ajmer",
  },
  alternates: {
    canonical: "https://drankitmehra.com/skin-rejuvenation/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skin Rejuvenation in Ajmer | Dr. Ankit Mehra",
    description:
      "Restore youthful, radiant skin with advanced skin rejuvenation treatments in Ajmer. Effective solutions for wrinkles, fine lines, uneven texture, and pigmentation.",
    images: ["/images/skin-rejuvenation-treatment.webp"], // Replace with actual path
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
    "application-name": "Dr. Ankit Mehra - Skin Rejuvenation",
    author: "Dr. Ankit Mehra",
    publisher: "Dr. Ankit Mehra",
    "publisher-url": "https://drankitmehra.com",
    generator: "WordPress",
    "theme-color": "#ffffff",
  },
};




const SkinRejuvenationComponent = () =>
{

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-2 sm:px-6 lg:px-8">
      <StickyInsideContainer data={data} />

    </div>
  );
};

export default SkinRejuvenationComponent;
