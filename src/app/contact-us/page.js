 
import ContactPage from "@/components/ContactPage";

 export const metadata = {
  title: "Contact | Dr. Ankit Mehra - Book Your Appointment Today",
  description:
    "Get in touch with Dr. Ankit Mehra's clinic for expert skin and hair treatments. Schedule your consultation today for personalized care.",
  keywords: [
    "contact Dr. Ankit Mehra",
    "book appointment dermatologist Ajmer",
    "skin care consultation",
    "hair treatment appointment",
    "dermatology clinic contact",
    "Dr. Ankit Mehra contact details",
    "laser treatment booking",
    "dermatologist near me Ajmer",
    "hair restoration consultation",
    "cosmetic skin clinic contact",
  ],
  openGraph: {
    title: "Contact | Dr. Ankit Mehra - Book Your Appointment Today",
    description:
      "Get in touch with Dr. Ankit Mehra's clinic for expert skin and hair treatments. Schedule your consultation today for personalized care.",
    images: [
      {
        url: "/images/cropped-WhatsApp-Image-2024-11-02-at-20.46.06-1-192x192.webp", // Replace with actual contact page image
        width: 192,
        height: 192,
        alt: "Contact Dr. Ankit Mehra",
      },
    ],
    type: "article",
    url: "https://drankitmehra.com/contact-us/",
    siteName: "Dr. Ankit Mehra | Dermatologist in Ajmer",
  },
  alternates: {
    canonical: "https://drankitmehra.com/contact-us/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Dr. Ankit Mehra - Book Your Appointment Today",
    description:
      "Get in touch with Dr. Ankit Mehra's clinic for expert skin and hair treatments. Schedule your consultation today for personalized care.",
    images: ["/images/cropped-WhatsApp-Image-2024-11-02-at-20.46.06-1-192x192.webp"], // Replace with actual image
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
    "application-name": "Dr. Ankit Mehra - Contact Page",
    author: "Dr. Ankit Mehra",
    Publisher: "Dr. Ankit Mehra",
    "publisher-url": "https://drankitmehra.com",
    generator: "WordPress",
    "theme-color": "#ffffff",
  },
};


export default function Contact() { 
    return ( 
        <>
      
      <ContactPage/>
        </>
    )
}