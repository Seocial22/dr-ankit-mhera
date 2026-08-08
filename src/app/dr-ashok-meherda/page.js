import Image from 'next/image';
import React from 'react';

export const metadata = {
  title: "Meet Dr. Ashok Meherda - Expert Dermatologist in Ajmer",
  description:
    "Discover the expertise of Dr. Ashok Meherda in dermatology and aesthetic treatments. Dedicated to providing exceptional care and results.",
  keywords: [
    "Dr Ashok Meherda dermatologist",
    "best dermatologist Ajmer",
    "skin specialist Ajmer",
    "aesthetic treatments Ajmer",
    "dermatology expert Ajmer",
    "skin care specialist Ajmer",
    "hair treatment specialist Ajmer",
    "cosmetic dermatologist Ajmer",
    "laser treatments Ajmer",
    "skin clinic Ajmer"
  ],
  openGraph: {
    title: "Meet Dr. Ashok Meherda - Expert Dermatologist in Ajmer",
    description:
      "Discover the expertise of Dr. Ashok Meherda in dermatology and aesthetic treatments. Dedicated to providing exceptional care and results.",
    images: [
      {
        url: "/images/home/dr-ashok-meherda.webp", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "Dr. Ashok Meherda - Dermatology Specialist in Ajmer",
      },
    ],
    type: "article",
    url: "https://drankitmehra.com/dr-ashok-meherda/",
    siteName: "Dr. Ankit Mehra | Dermatologist in Ajmer",
  },
  alternates: {
    canonical: "https://drankitmehra.com/dr-ashok-meherda/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Dr. Ashok Meherda - Expert Dermatologist in Ajmer",
    description:
      "Discover the expertise of Dr. Ashok Meherda in dermatology and aesthetic treatments. Dedicated to providing exceptional care and results.",
    images: ["/images/home/dr-ashok-meherda.webp"], // Replace with actual path
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
    "application-name": "Dr. Ankit Mehra - Skin & Hair Specialist",
    author: "Dr. Ashok Meherda",
    publisher: "Dr. Ankit Mehra Clinic",
    "publisher-url": "https://drankitmehra.com",
    generator: "WordPress",
    "theme-color": "#ffffff",
  },
};

const DoctorProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-md overflow-hidden">
        {/* Doctor image section at the top */}
        <div className="bg-gray-100 p-6 flex flex-col items-center justify-center">
           
             <Image
                      src="/images/home/ashok-meherda.webp" // Replace with actual image path
                      alt="Dr. Ashok Meherda"
                      width={650}
                      height={650}
                      priority
                      className="w-full max-w-[400px] rounded-2xl h-auto max-h-[300px]"
                    />
          
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-800">Best Dermatology Doctor In Ajmer</h2>
            <h2 className="text-xl font-bold text-gray-800">Dr Ashok Meherda</h2>
            <p className="text-gray-600">Former Senior Professor and HOD, Skin Department, JLN Medical College, Ajmer</p>
          </div>
        </div>
        
        {/* Information section below the image */}
        <div className="p-6">
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-800">Dr Ashok Meherda</h1>
            <p className="text-gray-700">Former Senior Professor and HOD, Skin Department, JLN Medical College, Ajmer</p>
          </div>
          
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">About</h2>
            <p className="text-gray-600">Dr. Ashok Meherda is a pioneer in the fields of Dermatology, Cosmetology, STDs, and HIV/AIDS. Dr Ashok Meherda is a widely respected and well known authority in the field of dermatology.</p>
          </div>
          
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Memberships</h2>
            <p className="text-gray-600">IADVL, IMA, Cosmetic society of India, nail society of India, construction cosmatitis society of India.</p>
          </div>
          
          
           
        </div>
      </div>
    </div>
  );
};
export default DoctorProfile;