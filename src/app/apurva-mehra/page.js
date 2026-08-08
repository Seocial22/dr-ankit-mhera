import Image from 'next/image';
import React from 'react';
export const metadata = {
  title: "Meet Apurva Mehra - Best Skin and Hair Specialist",
  description:
    "Learn about Apurva Mehra's expertise in skin and hair treatments. Dedicated to providing personalized care and effective solutions.",
  keywords: [
    "Apurva Mehra skin specialist",
    "Apurva Mehra hair specialist",
    "best skin specialist Ajmer",
    "best hair specialist Ajmer",
    "skin and hair expert Ajmer",
    "dermatology expert Ajmer",
    "personalized skin care Ajmer",
    "hair treatment specialist Ajmer",
    "skin care solutions Ajmer",
    "hair care solutions Ajmer"
  ],
  openGraph: {
    title: "Meet Apurva Mehra - Best Skin and Hair Specialist",
    description:
      "Learn about Apurva Mehra's expertise in skin and hair treatments. Dedicated to providing personalized care and effective solutions.",
    images: [
      {
        url: "/images/WhatsApp-Image-2024-11-12-at-10.27.40-1024x753.webp", // Replace with actual image path
        width: 1200,
        height: 630,
        alt: "Apurva Mehra Skin and Hair Specialist in Ajmer",
      },
    ],
    type: "article",
    url: "https://drankitmehra.com/apurva-mehra/",
    siteName: "Dr. Ankit Mehra | Dermatologist in Ajmer",
  },
  alternates: {
    canonical: "https://drankitmehra.com/apurva-mehra/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Apurva Mehra - Best Skin and Hair Specialist",
    description:
      "Learn about Apurva Mehra's expertise in skin and hair treatments. Dedicated to providing personalized care and effective solutions.",
    images: ["/images/WhatsApp-Image-2024-11-12-at-10.27.40-1024x753.webp"], // Replace with actual path
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
    author: "Apurva Mehra",
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
                      src="/images/home/apurva-mehra.webp" // Replace with actual image path
                      alt=""
                      width={650}
                      height={650}
                      priority
                      className="w-full max-w-[400px] rounded-2xl h-auto max-h-[300px]"
                    />
          
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-800">Dr. Apurva Mehra</h2>
            <p className="text-gray-600">MBBS, MD (Neuropsychiatry)</p>
          </div>
        </div>
        
        {/* Information section below the image */}
        <div className="p-6">
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-800">Dr. Apurva Mehra</h1>
            <p className="text-gray-700">MBBS, MD ( Neuropsychiatry)</p>
            <p className="text-gray-700">Experience: 3years+ 3 years Residency</p>
            <p className="text-gray-700">( Ex Senior Resident JLN Medical College,Ajmer )</p>
          </div>
          
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Specializes in diagnosing and treating a range of mental, emotional, and behavioral problems including the following conditions:</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Facility for care and stay of acute cases (emergency cases)</li>
              <li>Chronic psychiatry care facility</li>
              <li>Schizophrenia and other psychotic disorders</li>
              <li>Mood disorders (depression, mania, etc.)</li>
              <li>Anxiety disorders (obsession, phobia, PTSD, etc.)</li>
              <li>Geriatric psychiatric disorders</li>
              <li>De-addiction services</li>
              <li>Psychosexual disorders</li>
              <li>Personality disorders</li>
              <li>Dissociative disorders, migraine, etc</li>
              <li>Relationship and sexual problems</li>
              <li>Common childhood and adolescent mental disorders include depression, anxiety, ADHD, poor scholastic performance, etc.</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Therapies Offered:</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Pharmacotherapy</li>
              <li>Behavior therapy</li>
              <li>Couples therapy</li>
              <li>Family therapy</li>
            </ul>
          </div>
          
          
           
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;