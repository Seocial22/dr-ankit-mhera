 
import React from "react";
 
import StickyInsideContainer from "@/components/StickyInsideContainer";

export const metadata = {
  title: "Anti-Aging Treatments for Youthful Appearance | Dr. Ankit Mehra",
  description:
    "Reverse signs of aging with customized anti-aging treatments. Reduce wrinkles, fine lines, and sagging skin for a refreshed look.",
  keywords: [
    "anti-aging treatments",
    "wrinkle reduction",
    "fine lines treatment",
    "sagging skin treatment",
    "botox treatment Ajmer",
    "dermal fillers",
    "skin tightening",
    "non-surgical facelift",
    "Dr. Ankit Mehra anti-aging solutions",
    "youthful skin care Ajmer",
  ],
  openGraph: {
    title: "Anti-Aging Treatments for Youthful Appearance | Dr. Ankit Mehra",
    description:
      "Reverse signs of aging with customized anti-aging treatments. Reduce wrinkles, fine lines, and sagging skin for a refreshed look.",
    images: [
      {
        url: "/images/freepik-export-20241105082539mxHQ-scaled.webp",
        width: 2560,
        height: 1451,
        alt: "Anti-Aging Treatments - Dr. Ankit Mehra",
      },
    ],
    type: "article",
    url: "https://drankitmehra.com/anti-aging-treatments/",
    siteName: "Dr. Ankit Mehra | Dermatologist in Ajmer",
  },
  alternates: {
    canonical: "https://drankitmehra.com/anti-aging-treatments/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anti-Aging Treatments for Youthful Appearance | Dr. Ankit Mehra",
    description:
      "Reverse signs of aging with customized anti-aging treatments. Reduce wrinkles, fine lines, and sagging skin for a refreshed look.",
    images: ["/images/freepik-export-20241105082539mxHQ-scaled.webp"],
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
    "application-name": "Dr. Ankit Mehra - Anti-Aging Treatments",
    author: "Dr. Ankit Mehra",
    Publisher: "Dr. Ankit Mehra",
    "publisher-url": "https://drankitmehra.com",
    generator: "WordPress",
    "theme-color": "#ffffff",
  },
};

const AntiAgingTreatmentComponent = () =>
{
  const data = {
    images: [
      {
        src: "/images/blogs/head-leaning.webp",
        alt: "anti-agingtreatment",
        showOnMobile: true,
      },
      {
        src: "/images/anti-agingtreatment.webp",
        alt: "anti-agingtreatment2",
        showOnMobile: false,
      },
    ],
    services: [
      { name: "Skin Rejuvenation", url: "/skin-rejuvenation" },
      { name: "Pigmentation", url: "/pigmentation-treatment" },
      { name: "Scar Reduction", url: "/scar-reduction" },
      { name: "Acne", url: "/acne-treatment" },
    ],
    treatment: {
      title: "Anti-Aging Treatments",
      breadcrumb: "Advanced Anti-Aging Solutions",
    },
    intro: [
      "Anti-aging treatments are designed to combat the visible signs of aging, such as wrinkles, fine lines, and loss of skin elasticity. These procedures range from non-invasive techniques like injectables and laser therapy to more comprehensive surgical options, all aimed at restoring a more youthful appearance.",
    ],
    sections: [
      {
        title: "Symptoms:",
        lists: [
          [
            "Wrinkles and fine lines",
            "Loss of skin elasticity",
            "Age spots and pigmentation",
            "Sagging skin",
            "Dull complexion",
            "Uneven skin texture",
          ],
        ],
      },
      {
        title: "Causes:",
        lists: [
          [
            "Aging process",
            "Sun exposure (photoaging)",
            "Genetic factors",
            "Lifestyle choices (smoking, diet)",
            "Environmental pollutants",
          ],
        ],
      },
      {
        title: "Risks:",
        lists: [
          [
            "Bruising and swelling",
            "Temporary redness",
            "Sensitivity to sunlight",
            "Possible infection",
            "Allergic reactions",
            "Unsatisfactory results",
          ],
        ],
      },
      {
        title: "Prevention:",
        lists: [
          [
            "Daily sunscreen application",
            "Healthy diet rich in antioxidants",
            "Adequate hydration",
            "Regular skincare routine",
            "Avoiding smoking and excessive alcohol",
            "Getting enough sleep",
          ],
        ],
      },
    ],
    outro: [
      "Regular anti-aging treatments help reduce wrinkles, restore skin elasticity, and maintain a youthful, healthy appearance.",
      "Schedule your consultation today to select the most effective treatment tailored to your skin and anti-aging goals.",
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

export default AntiAgingTreatmentComponent;
