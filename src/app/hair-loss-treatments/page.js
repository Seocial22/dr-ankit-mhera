
import React from "react"; 
import StickyInsideContainer from "@/components/StickyInsideContainer";
export const metadata = {
  title: "Effective Hair Loss Treatments for Healthy Hair | Dr. Ankit Mehra",
  description:
    "Combat hair loss with proven treatments and personalized care. Regain confidence with tailored solutions at Dr. Ankit Mehra's clinic.",
  keywords: [
    "hair loss treatment Ajmer",
    "best hair fall treatment",
    "hair restoration clinic Ajmer",
    "hair thinning solutions",
    "follicular unit extraction Ajmer",
    "hair transplant alternatives",
    "hair growth treatment Ajmer",
    "Dr. Ankit Mehra hair clinic",
    "effective hair fall treatment",
    "advanced hair care Ajmer",
  ],
  openGraph: {
    title: "Effective Hair Loss Treatments for Healthy Hair | Dr. Ankit Mehra",
    description:
      "Combat hair loss with proven treatments and personalized care. Regain confidence with tailored solutions at Dr. Ankit Mehra's clinic.",
    images: [
      {
        url: "/images/mature-man-going-through-follicular-unit-extraction-process-scaled.webp",
        width: 1200,
        height: 630,
        alt: "Hair Loss Treatment",
      },
    ],
    type: "article",
    url: "https://drankitmehra.com/hair-loss-treatments/",
    siteName: "Dr. Ankit Mehra | Dermatologist in Ajmer",
  },
  alternates: {
    canonical: "https://drankitmehra.com/hair-loss-treatments/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Effective Hair Loss Treatments for Healthy Hair | Dr. Ankit Mehra",
    description:
      "Combat hair loss with proven treatments and personalized care. Regain confidence with tailored solutions at Dr. Ankit Mehra's clinic.",
    images: [
      "/images/mature-man-going-through-follicular-unit-extraction-process-scaled.webp",
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
    "application-name": "Dr. Ankit Mehra - Hair Loss Treatments",
    author: "Dr. Ankit Mehra",
    publisher: "Dr. Ankit Mehra",
    "publisher-url": "https://drankitmehra.com",
    generator: "WordPress",
    "theme-color": "#ffffff",
  },
};

const HairLossTreatments = () =>
{
  const data = {
    images: [
      {
        src: "/images/home/mature-man-going-through-follicular-unit-extraction-process-1536x1024.webp",
        alt: "Hair Loss Treatment 1",
        showOnMobile: true,
      },
      {
        src: "/images/before-and-after-comparison-of-male-hair-regrowth-showcasing-the-effectiveness-of-a-hair-treatment-solution-photo.webp",
        alt: "Hair Loss Treatment 2",
        showOnMobile: false,
      },
    ],
    services: [
      { name: "Platelet-Rich Plasma", url: "/prp-therapy" },
      { name: "Scalp Micropigmentation", url: "/scalp-micropigmentation" },
      
    ],
    treatment: {
      title: "Hair Loss Treatments",
      breadcrumb: "Advanced Hair Loss Solutions",
    },
    intro: [
      "Hair loss treatments aim to slow down hair loss, promote new growth, and improve overall hair density through various methods including medications, topical treatments, and PRP therapy."
    ],
    sections: [
      {
        title: "Symptoms:",
        lists: [
          ["Sparse hair", "Receding hairline", "Visible scalp"]
        ]
      },
      {
        title: "Causes:",
        lists: [
          ["Genetics", "Hormonal imbalance", "Poor scalp health", "Stress"]
        ]
      },
      {
        title: "Risks:",
        lists: [
          ["Scalp irritation", "Drug side effects", "Allergic reactions"]
        ]
      },
      {
        title: "Prevention:",
        lists: [
          ["Healthy diet", "Early treatment", "Regular scalp massage", "Stress management"]
        ]
      },
    ],
    outro: [
      "Hair loss treatments can help restore confidence and improve hair density with the right approach.",
      "Book your consultation to explore personalized solutions for effective hair restoration."
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

export default HairLossTreatments;
