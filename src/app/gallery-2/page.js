import Carousel from "@/components/Carousel";

 

export const metadata = {
  title: "Before and After Gallery - Transformations | Dr. Ankit Mehra",
  description:
    "View stunning before-and-after results from real clients. See the transformative power of expert skin and hair treatments.",
  keywords: [
    "before and after skin treatments",
    "hair treatment results",
    "skin transformation gallery",
    "Dr. Ankit Mehra gallery",
    "cosmetic dermatology results",
    "skin rejuvenation before and after",
    "hair restoration results",
    "acne treatment before after",
    "laser treatment results",
    "skin care success stories",
  ],
  openGraph: {
    title: "Before and After Gallery - Transformations | Dr. Ankit Mehra",
    description:
      "View stunning before-and-after results from real clients. See the transformative power of expert skin and hair treatments.",
    images: [
      {
        url: "/images/2023-08-19-768x768.webp", // Replace with actual gallery image path
        width: 800,
        height: 800,
        alt: "Before and After Results - Dr. Ankit Mehra",
      },
    ],
    type: "article",
    url: "https://drankitmehra.com/gallery-2/",
    siteName: "Dr. Ankit Mehra | Dermatologist in Ajmer",
  },
  alternates: {
    canonical: "https://drankitmehra.com/gallery-2/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Before and After Gallery - Transformations | Dr. Ankit Mehra",
    description:
      "View stunning before-and-after results from real clients. See the transformative power of expert skin and hair treatments.",
    images: ["/images/2023-08-19-768x768.webp"], // Replace with actual image
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
    "application-name": "Dr. Ankit Mehra - Gallery",
    author: "Dr. Ankit Mehra",
    Publisher: "Dr. Ankit Mehra",
    "publisher-url": "https://drankitmehra.com",
    generator: "WordPress",
    "theme-color": "#ffffff",
  },
};


export default function GalleryPage() {
  return(
<>

<Carousel/>
</>

  );
}