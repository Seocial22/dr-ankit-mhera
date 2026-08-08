import React from "react";
import Link from "next/link";
import Image from "next/image";
export const metadata = {
  title: "Comprehensive Skin Treatments for Radiant Skin | Dr. Ankit Mehra",
  description:
    "Explore skin treatments for acne, pigmentation, scars, and more. Achieve healthy, glowing skin with expert care at Dr. Ankit Mehra's clinic.",
  keywords: [
    "skin treatments",
    "acne treatment Ajmer",
    "pigmentation removal",
    "scar reduction",
    "glowing skin care",
    "Dr. Ankit Mehra skin clinic",
    "laser skin treatment",
    "dermatologist for acne",
    "skin rejuvenation Ajmer",
    "dermatology services Rajasthan",
  ],
  openGraph: {
    title: "Comprehensive Skin Treatments for Radiant Skin | Dr. Ankit Mehra",
    description:
      "Explore skin treatments for acne, pigmentation, scars, and more. Achieve healthy, glowing skin with expert care at Dr. Ankit Mehra's clinic.",
    images: [
      {
        url: "/images/freepik__expand__4159-qwlpkxdugmq9yrcq0grvg0fqvkvxehzrlpoigcnrks.webp", // Replace with actual image path
        width: 1200,
        height: 630,
        alt: "Skin Treatments - Dr. Ankit Mehra",
      },
    ],
    type: "article",
    url: "https://drankitmehra.com/skin-treatments/",
    siteName: "Dr. Ankit Mehra | Dermatologist in Ajmer",
  },
  alternates: {
    canonical: "https://drankitmehra.com/skin-treatments/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comprehensive Skin Treatments for Radiant Skin | Dr. Ankit Mehra",
    description:
      "Explore skin treatments for acne, pigmentation, scars, and more. Achieve healthy, glowing skin with expert care at Dr. Ankit Mehra's clinic.",
    images: [
      "/images/freepik__expand__4159-qwlpkxdugmq9yrcq0grvg0fqvkvxehzrlpoigcnrks.webp",
    ], // Replace with actual image path
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
    "application-name": "Dr. Ankit Mehra - Skin Treatments",
    author: "Dr. Ankit Mehra",
    Publisher: "Dr. Ankit Mehra",
    "publisher-url": "https://drankitmehra.com",
    generator: "WordPress",
    "theme-color": "#ffffff",
  },
};

const SkinTreatmentsPage = () => {
  const treatments = [
    {
      id: 1,
      title: "Skin Rejuvenation",
      description:
        "Enhance your skin texture and radiance with advanced chemical peels and innovative treatments",
      image:
        "young-beautiful-girl-lies-beautician-s-table-receives-procedures-scaled.webp",
      features: ["Chemical Peels", "Texture Improvement", "Radiance Boost"],
      url: "/skin-rejuvenation",
    },
    {
      id: 2,
      title: "Anti-Aging Treatments",
      description:
        "Combat wrinkles and fine lines with cutting-edge laser therapies and age-defying solutions",
      image: "head-leaning.webp",
      features: ["Laser Therapy", "Wrinkle Reduction", "Age Defying"],
      url: "/anti-aging-treatments",
    },
    {
      id: 3,
      title: "Pigmentation Treatment",
      description:
        "Effectively treat dark spots and uneven skin tone with specialized chemical treatments",
      image: "woman-beauty-clinic-face-treatment-scaled.webp",
      features: ["Dark Spot Removal", "Even Tone", "Chemical Solutions"],
      url: "/pigmentation-treatment",
    },
    {
      id: 4,
      title: "Scar Reduction",
      description:
        "Minimize appearance of scars using advanced microneedling and targeted therapies",
      image:
        "surgeon-drawing-lines-womans-abdomen-liposuction-cellulite-removal-scaled-qwlnjz4s1iv4w9bhzxk8xf5v50ge06dq8mxvl8tqho.webp",
      features: ["Microneedling", "Scar Minimization", "Skin Renewal"],
      url: "/scar-reduction",
    },
    {
      id: 5,
      title: "Acne Treatment",
      description:
        "Clear your skin with effective medications and specialized acne-fighting treatments",
      image: "person-dealing-with-rosacea-scaled.webp",
      features: ["Medication", "Acne Control", "Clear Skin"],
      url: "/acne-treatment",
    },
  ];
  
  return (
    <div className="bg-[#FEF7F8] py-5">
      <h1 className="text-4xl md:text-5xl text-[#a86e54] text-center font-serif max-w-4xl mx-auto leading-snug mb-6">
        Comprehensive Skin Treatments Offered <br /> by Dr. Ankit Mehra
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

                <p className="text-gray-600 mb-4 ">
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
  );
};

 

export default SkinTreatmentsPage;
