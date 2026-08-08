import AboutDoctor from "@/components/AboutDoctor";
import AboutDoctorSection from "@/components/AboutDoctorSection";
import PatientReviews from "@/components/PatientReviews";

export const metadata = {
  title: "About - Best dermatology clinic in Ajmer | Dr. Ankit Mehra",
  description:
    "Learn about Dr. Ankit Mehra's expertise, team, and advanced treatments. Committed to providing exceptional care for your skin and hair.",
  keywords: [
    "dermatology clinic Ajmer",
    "best skin specialist Ajmer",
    "Dr. Ankit Mehra",
    "cosmetic treatments Ajmer",
    "hair fall treatment Ajmer",
    "skin care expert Ajmer",
    "advanced dermatology services Ajmer",
  ],
  openGraph: {
    title: "About - Best dermatology clinic in Ajmer | Dr. Ankit Mehra",
    description:
      "Learn about Dr. Ankit Mehra's expertise, team, and advanced treatments. Committed to providing exceptional care for your skin and hair.",
    images: [
      {
        url: "/images/WhatsApp-Image-2024-11-22-at-10.36.42-e1746422645483.webp", // Replace with actual image path
        width: 800,
        height: 600,
        alt: "Dr. Ankit Mehra - Dermatologist in Ajmer",
      },
    ],
    type: "article",
    url: "https://drankitmehra.com/about-us/",
    siteName: "Dr. Ankit Mehra | Dermatologist in Ajmer",
  },
  alternates: {
    canonical: "https://drankitmehra.com/about-us/",
  },
  twitter: {
    card: "summary_large_image",
    title: "About - Best dermatology clinic in Ajmer | Dr. Ankit Mehra",
    description:
      "Learn about Dr. Ankit Mehra's expertise, team, and advanced treatments. Committed to providing exceptional care for your skin and hair.",
    images: [
      "/images/WhatsApp-Image-2024-11-22-at-10.36.42-e1746422645483.webp",
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
    "application-name": "Dr. Ankit Mehra - Dermatology Clinic",
    author: "Dr. Ankit Mehra",
    Publisher: "Dr. Ankit Mehra",
    "publisher-url": "https://drankitmehra.com",
    generator: "WordPress",
    "theme-color": "#ffffff",
  },
};

export default function About() {
  return (
    <>
      <AboutDoctorSection />
      <AboutDoctor />
      <PatientReviews />
    </>
  );
}
