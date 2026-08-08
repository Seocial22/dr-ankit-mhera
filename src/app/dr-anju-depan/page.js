import Image from 'next/image';
import React from 'react';
export const metadata = {
  title: "Best Gynecologist and Obstetrician in Ajmer | Dr. Anju Depan",
  description:
    "Consult Dr. Anju Depan, best gynecologist and obstetrician in Ajmer for pregnancy care, women’s health, infertility treatment, delivery, and expert gyne care.",
  keywords: [
    "Dr. Anju Depan gynecologist",
    "Dr. Anju Depan obstetrician",
    "best gynecologist Ajmer",
    "best obstetrician Ajmer",
    "women's health specialist Ajmer",
    "gynecology expert Ajmer",
    "maternity care Ajmer",
    "pregnancy specialist Ajmer",
    "women's healthcare Ajmer",
    "obstetrics specialist Ajmer"
  ],
  openGraph: {
    title: "Best Gynecologist and Obstetrician in Ajmer | Dr. Anju Depan",
    description:
      "Consult Dr. Anju Depan, best gynecologist and obstetrician in Ajmer for pregnancy care, women’s health, infertility treatment, delivery, and expert gyne care.",
    images: [
      {
        url: "/images/home/anju-depan.webp", // Replace with actual image path
        width: 1200,
        height: 630,
        alt: "Dr. Anju Depan Gynecologist and Obstetrician in Ajmer",
      },
    ],
    type: "article",
    url: "https://drankitmehra.com/dr-anju-depan/",
    siteName: "Dr. Ankit Mehra | Dermatologist in Ajmer",
  },
  alternates: {
    canonical: "https://drankitmehra.com/dr-anju-depan/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Gynecologist and Obstetrician in Ajmer | Dr. Anju Depan",
    description:
      "Consult Dr. Anju Depan, best gynecologist and obstetrician in Ajmer for pregnancy care, women’s health, infertility treatment, delivery, and expert gyne care.",
    images: ["/images/home/anju-depan.webp"], // Replace with actual path
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
    author: "Dr. Anju Depan",
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
                      src="/images/home/anju-depan.webp" // Replace with actual image path
                      alt=""
                      width={650}
                      height={650}
                      priority
                      className="w-full max-w-[400px] rounded-2xl h-auto max-h-[300px]"
                    />
          
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-800">Dr. Anju Depan</h2>
            <p className="text-gray-600">MBBS, MS (Obstetrics & Gynaecology)</p>
          </div>
        </div>
        
        {/* Information section below the image */}
        <div className="p-6">
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-800">Dr. Anju Depan</h1>
            <p className="text-gray-700">MBBS, MS (Obstetrics & Gynaecology)</p>
            <p className="text-gray-700">MBBS – 2006, SN Medical College, Jodhpur</p>
            <p className="text-gray-700">MS (Obstetrics & Gynaecology) – 2013, SN Medical College, Jodhpur</p>
            <p className="text-gray-700">Ex-Senior Resident & Ex-Assistant Professor, Janana Hospital, Ajmer</p>
          </div>
          
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Fellowships & Training:</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Fellowship in FAMS, Bhandari Hospital, Jaipur</li>
              <li>Fellowship (Short Course) in Ultrasonography</li>
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Professional Experience:</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Ex-Senior Resident, Janana Hospital, Ajmer</li>
              <li>Ex-Assistant Professor, Janana Hospital, Ajmer</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Specializes in comprehensive women's healthcare including:</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>Laparoscopic surgery</li>
              <li>Antenatal care and pregnancy management</li>
              <li>High-risk pregnancy management</li>
              <li>Normal and cesarean deliveries</li>
              <li>Gynecological surgeries and procedures</li>
              <li>Menstrual disorders and hormonal imbalances</li>
              <li>Infertility evaluation and treatment</li>
              <li>Family planning and contraceptive counseling</li>
              <li>Menopausal care and hormone therapy</li>
              <li>Gynecological infections and STD management</li>
              <li>Cervical cancer screening and prevention</li>
              <li>Breast health and screening</li>
              <li>Adolescent gynecology</li>
              <li>Ultrasonography for obstetric and gynecologic conditions</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Services Offered:</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Comprehensive obstetric care</li>
              <li>Gynecological consultations</li>
              <li>Ultrasound examinations</li>
              <li>Pre-conception counseling</li>
              <li>Post-natal care</li>
              <li>Minimally invasive gynecological procedures</li>
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Achievements:</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Published multiple papers in national and international journals</li>
              <li>Extensive experience in obstetrics and gynecology</li>
              <li>Recognized expertise in ultrasonography</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;