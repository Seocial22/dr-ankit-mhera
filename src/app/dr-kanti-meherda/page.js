import React from 'react';
import Image from 'next/image'; 
export const metadata = {
  title: "Dr. Kanti Meherda | Senior Gynecologist in Ajmer | Janana Hospital",
  description:
    "Dr. Kanti Meherda, MS in Gynecology, is a Senior Professor and Unit Head at Janana Hospital, Ajmer. Specializing in antenatal care, normal and cesarean deliveries, gynecological surgeries, fertility counseling, and preventive women's health checkups.",
  keywords:
    "Dr. Kanti Meherda, Gynecologist in Ajmer, MS Gynecology, Janana Hospital Ajmer, Antenatal Care, Normal Delivery, Cesarean Delivery, Gynecological Surgeries, Fertility Counseling, Women's Health Checkups",
  author: "Dr. Kanti Meherda",
  openGraph: {
    title: "Dr. Kanti Meherda | Gynecology Specialist in Ajmer",
    description:
      "Experienced gynecologist providing antenatal care, safe deliveries, fertility counseling, and women's health services at Janana Hospital, Ajmer.",
    url: "https://yourwebsite.com",
    type: "website",
    locale: "en_IN",
    siteName: "Dr. Kanti Meherda - Gynecology Expert",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Kanti Meherda | Senior Gynecologist in Ajmer",
    description:
      "Specialist in antenatal care, gynecological surgeries, and fertility counseling at Janana Hospital, Ajmer.",
    image: "https://yourwebsite.com/og-image.webp",
  },
};

const DoctorProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-md overflow-hidden">
        {/* Doctor image section at the top */}
        <div className="bg-gray-100 p-6 flex flex-col items-center justify-center">
          <Image
            src="/images/home/kanti-meherda.webp" // Replace with actual image path
            alt="Dr. Kanti Meherda"
            width={650}
            height={650}
            priority
          />
                 
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-800">Dr. Kanti Meherda</h2>
            <p className="text-gray-600">MS Gynecology</p>
          </div>
        </div>
        
        {/* Information section below the image */}
        <div className="p-6">
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-800">Dr. Kanti Meherda</h1>
            <p className="text-gray-700">MS Gynecology</p>
            <p className="text-gray-700">Senior Professor & Unit Head</p>
            <p className="text-gray-700">Janana Hospital, Ajmer</p>
          </div>
        
          
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Services Offered</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Antenatal Care</li>
              <li>Normal and Cesarean Deliveries</li>
              <li>Gynecological Surgeries</li>
              <li>Fertility Counseling</li>
              <li>Preventive Women's Health Checkups</li>
            </ul>
          </div>
          
          
           
        </div>
      </div>
    </div>
  );
};
export default DoctorProfile;