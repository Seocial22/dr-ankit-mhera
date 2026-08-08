import React from 'react';
import Link from "next/link";
import Image from 'next/image';
export const metadata = {
  title: "Advanced Hair Treatments for All Hair Concerns | Dr. Ankit Mehra",
  description:
    "Get personalized hair treatments for hair loss, thinning, and more. Restore your hair health with cutting-edge techniques at Dr. Ankit Mehra's clinic.",
  keywords: [
    "hair treatment in Ajmer",
    "advanced hair treatments",
    "hair loss treatment Ajmer",
    "PRP hair therapy Ajmer",
    "hair fall solutions",
    "best dermatologist for hair Ajmer",
    "hair thinning treatment",
    "hair restoration techniques",
    "Dr. Ankit Mehra hair clinic",
    "hair regrowth therapy"
  ],
  openGraph: {
    title: "Advanced Hair Treatments for All Hair Concerns | Dr. Ankit Mehra",
    description:
      "Get personalized hair treatments for hair loss, thinning, and more. Restore your hair health with cutting-edge techniques at Dr. Ankit Mehra's clinic.",
    images: [
      {
        url: "/images/high-angle-woman-getting-scalp-prp-treatment-scaled.webp", // replace with actual path
        width: 1200,
        height: 630,
        alt: "Advanced Hair Treatment at Dr. Ankit Mehra's Clinic",
      },
    ],
    type: "article",
    url: "https://drankitmehra.com/hair-treatments-2/",
    siteName: "Dr. Ankit Mehra | Dermatologist in Ajmer",
  },
  alternates: {
    canonical: "https://drankitmehra.com/hair-treatments-2/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced Hair Treatments for All Hair Concerns | Dr. Ankit Mehra",
    description:
      "Get personalized hair treatments for hair loss, thinning, and more. Restore your hair health with cutting-edge techniques at Dr. Ankit Mehra's clinic.",
    images: ["/images/high-angle-woman-getting-scalp-prp-treatment-scaled.webp"], // replace with actual path
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
    "application-name": "Dr. Ankit Mehra - Hair Treatments",
    author: "Dr. Ankit Mehra",
    publisher: "Dr. Ankit Mehra",
    "publisher-url": "https://drankitmehra.com",
    generator: "WordPress",
    "theme-color": "#ffffff",
  },
};

const SkinTreatmentsPage = () => {
  const treatments = [
    {
      id: 1,
      title: "PRP Therapy",
      description: "Injecting your own platelet-rich plasma to promote follicle health and stimulate natural hair growth",
      image: "high-angle-woman-getting-scalp-prp-treatment-1536x1022.webp", // Placeholder - replace with actual image
      features: ["Follicle Health", "Natural Growth Stimulation", "Uses Your Own Plasma"],
      url: "/prp-therapy"
    },
    {
      id: 2,
      title: "Hair Loss Treatments",
      description: "Comprehensive approach using medications and therapies to slow hair loss, promote growth, and increase hair volume",
      image: "mature-man-going-through-follicular-unit-extraction-process-1536x1024.webp", // Placeholder - replace with actual image
      features: ["Slows Hair Loss", "Promotes Growth", "Increases Volume", "Medical Approach"],
      url: "/hair-loss-treatments"
    },
    {
      id: 3,
      title: "Scalp Micropigmentation",
      description: "Advanced cosmetic tattooing technique that simulates hair follicles to create the appearance of denser, fuller hair",
      image: "mature-man-going-through-follicular-unit-extraction-process-1-1-1536x1024.webp", // Placeholder - replace with actual image
      features: ["Cosmetic Tattooing", "Simulates Follicles", "Creates Fuller Appearance", "Non-surgical"],
      url: "/scalp-micropigmentation"
    }
  ];
  return (
    <div className="bg-[#FEF7F8] py-5">
      <h1 className="text-4xl md:text-5xl text-[#a86e54] text-center font-serif max-w-4xl mx-auto leading-snug mb-6">
        Comprehensive Hair Treatments Offered <br /> by Dr. Ankit Mehra
      </h1>

      <div className="flex justify-center w-full">
        <div className="grid max-w-7xl grid-cols-1 md:grid-cols-3 gap-8">
          {treatments.map((item) => (
            <div
              key={item.id}
              className="bg-[#F9F0EB] rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image */}
              <div className="h-48 bg-gradient-to-r from-blue-100 to-indigo-100">
                <Image
                  src={`/images/home/${item.image}`}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 text-justify">
                  {item.description}
                </p>

                <ul className="text-gray-600 space-y-2 mb-4">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href={item.url}>
                  <button className="text-blue-600 font-semibold flex items-center hover:text-blue-800 transition-colors duration-300">
                    Read More
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>)}
export default SkinTreatmentsPage;