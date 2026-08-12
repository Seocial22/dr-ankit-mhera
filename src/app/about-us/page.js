import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import AboutDoctorSection from "@/components/AboutDoctorSection";

// Dynamically imported (below-the-fold) components
const AboutDoctor = dynamic(() => import("@/components/AboutDoctor"));
const ExpertCards = dynamic(() => import("@/components/ExpertCards"));
const DermatologyBenefits = dynamic(() => import("@/components/DermatologyBenefits"));
const WhyChooseSection = dynamic(() => import("@/components/WhyChooseSection"));
const PatientReviews = dynamic(() => import("@/components/PatientReviews"));
const GallerySection = dynamic(() => import("@/components/GallerySection"));

export const metadata = {
  title: "Best Dermatologist in Ajmer | Dr. Ankit Mehra",
  description:
    "Dr. Ankit Mehra (MD Skin & VD) is a senior dermatologist in Ajmer, specializing in skin, hair, venereology, and cosmetology treatments. Book an appointment for acne, hair loss, laser therapy, and aesthetic procedures.",
  keywords: [
    "best dermatologist in Ajmer",
    "skin specialist Ajmer",
    "cosmetologist in Ajmer",
    "hair loss treatment Ajmer",
    "laser skin treatment Ajmer",
    "Dr. Ankit Mehra",
    "skin doctor Ajmer",
    "acne scar treatment Ajmer",
    "skin rejuvenation Ajmer",
    "venereologist Ajmer",
    "aesthetic dermatologist Ajmer",
    "botox and fillers Ajmer",
    "pigmentation treatment Ajmer",
    "tattoo removal Ajmer",
  ],
  openGraph: {
    title: "Dr. Ankit Mehra | Best Dermatologist, Cosmetologist & Skin Specialist in Ajmer",
    description:
      "Get advanced skin, hair, laser, and cosmetology treatments with Dr. Ankit Mehra, MD Skin & VD. Trusted by thousands of patients in Ajmer for dermatology and aesthetic care.",
    images: [
      {
        url: "/images/home/dr-ankitmehra.webp",
        width: 800,
        height: 600,
        alt: "Dr. Ankit Mehra - Dermatologist in Ajmer",
      },
    ],
    type: "website",
    url: "https://drankitmehra.com",
    siteName: "Dr. Ankit Mehra Skin & Cosmetology Clinic",
  },
  alternates: {
    canonical: "https://drankitmehra.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Dermatologist in Ajmer | Dr. Ankit Mehra",
    description:
      "Expert skin, hair, and cosmetology treatments by Dr. Ankit Mehra (MD Skin & VD) in Ajmer.",
    images: ["/images/dr-ankit-twitter-card.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  other: {
    "application-name": "Dr. Ankit Mehra - Dermatology & Cosmetology Clinic",
    author: "Dr. Ankit Mehra",
    Publisher: "Dr. Ankit Mehra",
    "publisher-url": "https://drankitmehra.com",
    generator: "Next.js",
    "theme-color": "#ffffff",
  },
};

// Schema.org structured data for Dr. Ankit Mehra (Dermatologist)
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalOrganization",
      "@id": "https://drankitmehra.com/#organization",
      name: "Dr. Ankit Mehra Skin & Cosmetology Clinic",
      url: "https://drankitmehra.com/",
      logo: {
        "@type": "ImageObject",
        url: "data:image/jpeg;base64,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",
        width: 800,
        height: 600,
      },
      sameAs: [
        "https://www.facebook.com",
        "https://www.instagram.com",
        "https://www.linkedin.com"
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9697041111",
        contactType: "customer service",
        availableLanguage: ["English", "Hindi"],
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "62, Lane no 2, Opp. Hotel Ambassador, Nagina Bagh, Muslim Mochi Mohalla",
        addressLocality: "Ajmer",
        addressRegion: "Rajasthan",
        postalCode: "305001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 26.4715641,
        longitude: 74.6352111,
      },
      medicalSpecialty: [
        "Dermatology",
        "Cosmetology",
        "Venereology",
        "Trichology"
      ],
      priceRange: "₹₹₹",
    },
    {
      "@type": "Physician",
      "@id": "https://drankitmehra.com/#physician",
      name: "Dr. Ankit Mehra",
      image: {
        "@type": "ImageObject",
        url: "https://drankitmehra.com/images/home/dr-ankitmehra.webp",
        width: 800,
        height: 600
      },
      givenName: "Ankit",
      familyName: "Mehra",
      honorificPrefix: "Dr.",
      jobTitle: "Dermatologist, Cosmetologist & Venereologist",
      medicalSpecialty: [
        "Dermatology",
        "Cosmetic Dermatology",
        "Venereology",
        "Hair Restoration"
      ],
      worksFor: {
        "@id": "https://drankitmehra.com/#organization",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "JLN Medical College, Ajmer",
      },
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "M.B.B.S.",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "M.D. Skin & VD",
        }
      ],
      knowsAbout: [
        "Acne & Scar Treatment",
        "Pigmentation Treatment",
        "Laser Skin Therapy",
        "Hair Loss Treatment",
        "PRP Therapy",
        "Botox & Fillers",
        "Tattoo Removal",
        "Venereal Diseases"
      ],
      telephone: "+91-82409-70287",
      address: {
        "@type": "PostalAddress",
        streetAddress: "62, Lane no 2, Opp. Hotel Ambassador, Nagina Bagh, Ajmer",
        addressLocality: "Ajmer",
        addressRegion: "Rajasthan",
        postalCode: "305001",
        addressCountry: "IN",
      },
      availableService: [
        {
          "@type": "MedicalProcedure",
          name: "Acne & Scar Reduction",
          description: "Advanced treatment for acne and scar removal using lasers and medication",
        },
        {
          "@type": "MedicalProcedure",
          name: "Hair Loss Treatment",
          description: "PRP therapy and advanced trichology solutions",
        },
        {
          "@type": "MedicalProcedure",
          name: "Laser Therapy",
          description: "Tattoo removal, hair removal, pigmentation treatment, skin rejuvenation",
        },
        {
          "@type": "MedicalProcedure",
          name: "Cosmetic Dermatology",
          description: "Botox, fillers, anti-aging, and skin contouring treatments",
        }
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://drankitmehra.com/#website",
      url: "https://drankitmehra.com",
      name: "Dr. Ankit Mehra Skin & Cosmetology Clinic",
      description:
        "Best dermatologist in Ajmer providing advanced skin, hair, laser, cosmetology and venereology treatments.",
      publisher: {
        "@id": "https://drankitmehra.com/#organization",
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "WebPage",
      "@id": "https://drankitmehra.com/#webpage",
      url: "https://drankitmehra.com",
      name: "Best Dermatologist in Ajmer | Dr. Ankit Mehra - Skin, Hair & Cosmetology Specialist",
      description:
        "Dr. Ankit Mehra (MD Skin & VD) is a senior skin specialist in Ajmer offering treatments for acne, hair loss, pigmentation, laser therapy, and cosmetic dermatology.",
      isPartOf: {
        "@id": "https://drankitmehra.com/#website",
      },
      about: {
        "@id": "https://drankitmehra.com/#physician",
      },
      mainEntity: {
        "@id": "https://drankitmehra.com/#physician",
      },
      inLanguage: "en-IN",
    },
  ],
};

export default function Home() {
  const slides = [
    {
      id: 1,
      image: '/images/home/woman-beauty-clinic-face-treatment-scaled.webp',
    },
    {
      id: 2,
      image: '/images/home/doctor-performing-laser-hair-removal-patient-skin-scaled.webp',
    },
    {
      id: 3,
      image: '/images/home/person-dealing-with-rosacea-scaled.webp',
    },
    {
      id: 4,
      image: '/images/blogs/head-leaning.webp',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <HeroSection slides={slides} />
      <AboutDoctorSection />
      <AboutDoctor />
      <ExpertCards />
      <DermatologyBenefits />
      <WhyChooseSection />
      <PatientReviews />
      <GallerySection />
    </>
  );
}