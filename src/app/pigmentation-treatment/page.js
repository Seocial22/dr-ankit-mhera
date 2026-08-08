
import StickyInsideContainer from '@/components/StickyInsideContainer';
 
import React from 'react';

export const metadata = {
  title: "Pigmentation Treatments for Even Skin Tone | Dr. Ankit Mehra",
  description:
    "Reduce pigmentation and achieve a balanced, glowing complexion. Advanced treatments for dark spots, melasma, and uneven skin tone.",
  keywords: [
    "pigmentation treatment",
    "melasma treatment",
    "dark spots removal",
    "skin brightening Ajmer",
    "hyperpigmentation treatment",
    "laser pigmentation removal",
    "chemical peels pigmentation",
    "even skin tone treatment",
    "Dr. Ankit Mehra pigmentation care",
    "glowing skin treatments"
  ],
  openGraph: {
    title: "Pigmentation Treatments for Even Skin Tone | Dr. Ankit Mehra",
    description:
      "Reduce pigmentation and achieve a balanced, glowing complexion. Advanced treatments for dark spots, melasma, and uneven skin tone.",
    images: [
      {
        url: "/images/woman-beauty-clinic-face-treatment-scaled.webp",
        width: 2560,
        height: 1707,
        alt: "Pigmentation Treatment - Dr. Ankit Mehra",
      },
    ],
    type: "article",
    url: "https://drankitmehra.com/pigmentation-treatment/",
    siteName: "Dr. Ankit Mehra | Dermatologist in Ajmer",
  },
  alternates: {
    canonical: "https://drankitmehra.com/pigmentation-treatment/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pigmentation Treatments for Even Skin Tone | Dr. Ankit Mehra",
    description:
      "Reduce pigmentation and achieve a balanced, glowing complexion. Advanced treatments for dark spots, melasma, and uneven skin tone.",
    images: ["/images/woman-beauty-clinic-face-treatment-scaled.webp"],
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
    "application-name": "Dr. Ankit Mehra - Pigmentation Treatments",
    author: "Dr. Ankit Mehra",
    publisher: "Dr. Ankit Mehra",
    "publisher-url": "https://drankitmehra.com",
    generator: "WordPress",
    "theme-color": "#ffffff",
  },
};

const SkinRejuvenationComponent = () =>
{
  const data = {
    images: [
      {
        src: "/images/home/woman-beauty-clinic-face-treatment-scaled.webp",
        alt: "pigmentation-treatment",
        showOnMobile: true,
      },
      {
        src: "/images/pigmentation-treatment.webp",
        alt: "good pigmentation-treatment",
        showOnMobile: false,
      },
    ],
    services: [
      { name: "Anti-Aging", url: "/anti-aging-treatments" },
      { name: "Skin Rejuvenation", url: "/skin-rejuvenation" },
      { name: "Scar Reduction", url: "/scar-reduction" },
      { name: "Acne", url: "/acne-treatment" },
    ],
    treatment: {
      title: "Pigmentation Treatment",
      breadcrumb: "Advanced Pigmentation Treatments",
    },
    intro: [
      "This treatment targets dark spots and uneven skin tone, often using chemical peels, laser therapy, and topical preparations."
    ],
    sections: [
      {
        title: "Symptoms:",
        lists: [
          ["Dark spots", "Melasma", "Sun spots", "Uneven skin tone"]
        ]
      },
      {
        title: "Causes:",
        lists: [
          ["Sun exposure", "Hormonal changes", "Aging"]
        ]
      },
      {
        title: "Risks:",
        lists: [
          ["Skin sensitivity", "Redness and swelling", "Post-treatment hyperpigmentation"]
        ]
      },
      {
        title: "Prevention:",
        lists: [
          ["Daily sun protection", "Avoid prolonged sun exposure", "Gentle skincare products", "Anti-inflammatory diet"]
        ]
      },
    ],
    outro: [
      "Regular pigmentation treatments help even out skin tone and reduce dark spots effectively.",
      "Consult with our specialists to choose the best treatment tailored to your skin type and concerns."
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

export default SkinRejuvenationComponent;
