import fs from "fs";
import path from "path";
import ClientBlogPage from "./ClientBlogPage.jsx";

// Function to read blogs data
function getBlogs() {
  const filePath = path.join(process.cwd(), "public", "blogs.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const blogs = JSON.parse(fileData);
  return blogs;
}

export const metadata = {
  title: "Blog - Expert Skin and Hair Care Tips | Dr. Ankit Mehra",
  description:
    "Stay informed with the latest tips, trends, and expert advice on skin and hair care. Read insightful blogs from Dr. Ankit Mehra's team.",
  keywords: [
    "skin care tips",
    "hair care tips",
    "best dermatologist blog",
    "Dr. Ankit Mehra blog",
    "dermatology tips",
    "hair treatment advice",
    "skin care routine guide",
    "hair loss solutions Ajmer",
    "laser skin treatment blogs",
    "acne treatment tips",
  ],
  openGraph: {
    title: "Blog - Expert Skin and Hair Care Tips | Dr. Ankit Mehra",
    description:
      "Stay informed with the latest tips, trends, and expert advice on skin and hair care. Read insightful blogs from Dr. Ankit Mehra's team.",
    images: [
      {
        url: "/images/WhatsApp-Image-2024-11-02-at-20.46.06-1.webp", // Replace with actual blog page image
        width: 800,
        height: 600,
        alt: "Dr. Ankit Mehra - Skin and Hair Care Blog",
      },
    ],
    type: "article",
    url: "https://drankitmehra.com/blogs/",
    siteName: "Dr. Ankit Mehra | Dermatologist in Ajmer",
  },
  alternates: {
    canonical: "https://drankitmehra.com/blogs/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Expert Skin and Hair Care Tips | Dr. Ankit Mehra",
    description:
      "Stay informed with the latest tips, trends, and expert advice on skin and hair care. Read insightful blogs from Dr. Ankit Mehra's team.",
    images: ["/images/WhatsApp-Image-2024-11-02-at-20.46.06-1.webp"], // Replace with actual blog page image
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
    "application-name": "Dr. Ankit Mehra - Dermatology Blog",
    author: "Dr. Ankit Mehra",
    Publisher: "Dr. Ankit Mehra",
    "publisher-url": "https://drankitmehra.com",
    generator: "WordPress",
    "theme-color": "#ffffff",
  },
};


export default function BlogPage() {
  const blogs = getBlogs();
  return <ClientBlogPage blogs={blogs} />;
}
