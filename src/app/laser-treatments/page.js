import React from 'react';
import Link from "next/link";
import Image from 'next/image';
export const metadata = {
  title: "Advanced Laser Treatments for Skin and Hair | Dr. Ankit Mehra",
  description:
    "Explore cutting-edge laser treatments for hair removal, skin resurfacing, scar reduction, and more. Safe and effective solutions.",
  keywords: [
    "laser skin treatments Ajmer",
    "laser hair removal Ajmer",
    "laser scar removal",
    "laser skin resurfacing Ajmer",
    "acne scar laser treatment",
    "skin pigmentation laser",
    "permanent hair reduction Ajmer",
    "dermatology laser clinic Ajmer",
    "Dr. Ankit Mehra laser treatments",
    "skin rejuvenation laser therapy"
  ],
  openGraph: {
    title: "Advanced Laser Treatments for Skin and Hair | Dr. Ankit Mehra",
    description:
      "Explore cutting-edge laser treatments for hair removal, skin resurfacing, scar reduction, and more. Safe and effective solutions.",
    images: [
      {
        url: "/images/laser-epilation-hair-removal-therapy-scaled.webp", // replace with actual image path
        width: 1200,
        height: 630,
        alt: "Advanced Laser Treatments",
      },
    ],
    type: "article",
    url: "https://drankitmehra.com/laser-treatments/",
    siteName: "Dr. Ankit Mehra | Dermatologist in Ajmer",
  },
  alternates: {
    canonical: "https://drankitmehra.com/laser-treatments/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced Laser Treatments for Skin and Hair | Dr. Ankit Mehra",
    description:
      "Explore cutting-edge laser treatments for hair removal, skin resurfacing, scar reduction, and more. Safe and effective solutions.",
    images: ["/images/laser-epilation-hair-removal-therapy-scaled.webp"], // replace with actual image path
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
    "application-name": "Dr. Ankit Mehra - Laser Treatments",
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
      title: "Laser Hair Removal",
      description: "Target hair follicles to reduce unwanted hair with long-lasting results for multiple body areas",
      image: "leaser-hair-romover.webp", // Placeholder - replace with actual image
      features: ["Hair Reduction", "Long-term Results", "Multiple Body Areas"],
      url: "/laser-hair-removal"
    },
    {
      id: 2,
      title: "Laser Skin Resurfacing",
      description: "Remove damaged skin layers to treat wrinkles, uneven skin tone, and sun damage while promoting collagen growth",
      image: "laserSkinResurfacing.webp", // Placeholder - replace with actual image
      features: ["Wrinkle Treatment", "Skin Tone Correction", "Sun Damage Repair", "Collagen Stimulation"],
      url: "/laser-skin-resurfacing"
    },
    {
      id: 3,
      title: "Laser Tattoo Removal",
      description: "Break down tattoo pigment with laser technology, allowing your body to gradually eliminate the ink",
      image: "laserTattooRemoval.webp", // Placeholder - replace with actual image
      features: ["Pigment Breakdown", "Gradual Removal", "Non-invasive"],
      url: "/laser-tattoo-removal"
    }
  ];

  return (
    <div className="bg-[#FEF7F8] py-5">
      <h1 className="text-4xl md:text-5xl text-[#a86e54] text-center font-serif max-w-4xl mx-auto leading-snug mb-6">
        Comprehensive Laser Treatments Offered <br /> by Dr. Ankit Mehra
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
    </div>
  )}

export default SkinTreatmentsPage;