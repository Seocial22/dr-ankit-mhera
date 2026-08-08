import StickyInsideContainer from '@/components/StickyInsideContainer';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: "PRP Therapy for Hair Restoration and Skin | Dr. Ankit Mehra",
  description:
    "Revitalize your skin and hair with PRP therapy. Natural and effective treatments for hair growth and glowing, youthful skin.",
  keywords: [
    "PRP therapy in Ajmer",
    "PRP hair treatment Ajmer",
    "PRP skin rejuvenation Ajmer",
    "platelet rich plasma therapy",
    "hair restoration Ajmer",
    "PRP facial Ajmer",
    "best PRP clinic in Ajmer",
    "Dr. Ankit Mehra PRP therapy",
    "natural hair regrowth treatment",
    "youthful skin treatment"
  ],
  openGraph: {
    title: "PRP Therapy for Hair Restoration and Skin | Dr. Ankit Mehra",
    description:
      "Revitalize your skin and hair with PRP therapy. Natural and effective treatments for hair growth and glowing, youthful skin.",
    images: [
      {
        url: "/images/high-angle-woman-getting-scalp-prp-treatment-scaled.webp",
        width: 1200,
        height: 630,
        alt: "PRP Therapy for Hair and Skin",
      },
    ],
    type: "article",
    url: "https://drankitmehra.com/prp-therapy/",
    siteName: "Dr. Ankit Mehra | Dermatologist in Ajmer",
  },
  alternates: {
    canonical: "https://drankitmehra.com/prp-therapy/",
  },
  twitter: {
    card: "summary_large_image",
    title: "PRP Therapy for Hair Restoration and Skin | Dr. Ankit Mehra",
    description:
      "Revitalize your skin and hair with PRP therapy. Natural and effective treatments for hair growth and glowing, youthful skin.",
    images: ["/images/high-angle-woman-getting-scalp-prp-treatment-scaled.webp"],
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
    "application-name": "Dr. Ankit Mehra - PRP Therapy",
    author: "Dr. Ankit Mehra",
    publisher: "Dr. Ankit Mehra",
    "publisher-url": "https://drankitmehra.com",
    generator: "WordPress",
    "theme-color": "#ffffff",
  },
};

const PRPTherapy = () =>
{
  const data = {
    images: [
      {
        src: "/images/home/high-angle-woman-getting-scalp-prp-treatment-1536x1022.webp",
        alt: "PRP Therapy 1",
        showOnMobile: true,
      },
      {
        src: "/images/PRP-result-4-final.webp",
        alt: "PRP Therapy 2",
        showOnMobile: false,
      },
    ],
    services: [
      { name: "Hair Loss", url: "/hair-loss-treatments" },
      { name: "Scalp Micropigmentation", url: "/scalp-micropigmentation" },
     
    ],
    treatment: {
      title: "PRP Therapy (Platelet-Rich Plasma)",
      breadcrumb: "Advanced Hair Restoration Therapy",
    },
    intro: [
      "This therapy involves injecting the patient's own platelet-rich plasma into the scalp to promote hair growth and enhance follicle health."
    ],
    sections: [
      {
        title: "Symptoms:",
        lists: [
          ["Thinning hair", "Hair loss", "Receding hairline"]
        ]
      },
      {
        title: "Causes:",
        lists: [
          ["Genetics", "Hormonal changes", "Stress", "Medical conditions"]
        ]
      },
      {
        title: "Risks:",
        lists: [
          ["Infection", "Scalp tenderness", "Bruising", "Mild discomfort", "Rare allergic reactions"]
        ]
      },
      {
        title: "Prevention:",
        lists: [
          ["Early intervention", "Healthy diet", "Avoid smoking", "Manage stress levels"]
        ]
      },
    ],
    outro: [
      "PRP therapy is a natural and effective solution to restore hair growth and improve scalp health.",
      "Consult with our experts to discover if PRP therapy is right for you."
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

export default PRPTherapy;
