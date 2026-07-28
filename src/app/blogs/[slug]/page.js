import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";

const SITE_URL = "https://drankitmehra.com";
const PUBLISHER_NAME = "Dr. Ankit Mehra";
const PUBLISHER_LOGO = "https://drankitmehra.com/images/logo.jpeg";
const DEFAULT_IMAGE = "/images/placeholder.jpg";

// Function to read blogs data
function getBlogs() {
  const filePath = path.join(process.cwd(), "public", "blogs.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const blogs = JSON.parse(fileData);
  return blogs;
}

// Helper: turn a relative or absolute image path into a guaranteed absolute URL
function toAbsoluteUrl(url) {
  if (!url) return `${SITE_URL}${DEFAULT_IMAGE}`;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `${SITE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
}

// Generate metadata for each blog page
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const blogs = getBlogs();
  const blog = blogs.find((blog) => blog.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  const description =
    blog.metaDescription || blog.excerpt || blog.content.substring(0, 160);
  const absoluteImage = toAbsoluteUrl(blog.image);
  const canonicalUrl = blog.canonicalUrl || `${SITE_URL}/blogs/${blog.slug}`;

  return {
    title: `${blog.title}`,
    description,
    keywords: blog.tags,

    openGraph: {
      title: blog.title,
      description,
      type: "article",
      url: `${SITE_URL}/blogs/${blog.slug}`,
      publishedTime: blog.date,
      modifiedTime: blog.updatedAt || blog.date,
      authors: [blog.author || "Dr. Ankit Mehra"],
      images: [
        {
          url: absoluteImage,
          width: 1200,
          height: 630,
          alt: blog.alt || blog.title,
        },
      ],
    },
    alternates: {
      canonical: canonicalUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description,
      images: [absoluteImage],
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
      "application-name": PUBLISHER_NAME,
      author: PUBLISHER_NAME,
      Publisher: PUBLISHER_NAME,
      "publisher-url": SITE_URL,
      generator: "Next.js",
      "theme-color": "#ffffff",
    },
  };
}

// Custom blog content renderer component
function BlogContent({ content }) {
  const customStyles = `
    .blog-content h2 {
      font-size: 1.875rem;
      font-weight: 700;
      margin-top: 2rem;
      margin-bottom: 1rem;
      color: #B97E63;
      font-family: serif;
      line-height: 1.2;
    }
    
    .blog-content h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-top: 1.5rem;
      margin-bottom: 0.75rem;
      color: #BF7F62;
      line-height: 1.3;
    }
    
    .blog-content p {
      margin-bottom: 1rem;
      line-height: 1.7;
      color: #1f2937;
    }

    .blog-content {
      color: #1f2937;
    }
    
    .blog-content a {
      color: #0ea5e9;
      text-decoration: underline;
      text-underline-offset: 2px;
      transition: all 0.2s ease;
    }
    
    .blog-content a:hover {
      color:rgb(12, 40, 56);
    }
    
    .blog-content ul, .blog-content ol {
      margin-left: 1.5rem;
      margin-bottom: 1.5rem;
    }
    
    .blog-content ul li, .blog-content ol li {
      margin-bottom: 0.5rem;
    }
    
    .blog-content blockquote {
      border-left: 4px solid #0ea5e9;
      padding-left: 1rem;
      font-style: italic;
      margin: 1.5rem 0;
      background-color: #f0f9ff;
      padding: 1rem;
      border-radius: 0.375rem;
    }
  `;

  return (
    <div className="blog-content">
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default async function SingleBlogPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const blogs = getBlogs();
  const blog = blogs.find((blog) => blog.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-teal-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 border border-blue-100">
            <h1 className="text-4xl font-bold bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 bg-clip-text text-transparent mb-4">
              Blog Not Found
            </h1>
            <p className="text-gray-700 mb-4">
              Could not find blog with slug: {slug}
            </p>
            <Link
              href="/blogs"
              className="inline-block bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition duration-300"
            >
              Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // ---- Article JSON-LD (Schema.org) ----
  const absoluteImageUrl = toAbsoluteUrl(blog.image);
  const canonicalUrl = blog.canonicalUrl || `${SITE_URL}/blogs/${blog.slug}`;
  const description =
    blog.metaDescription || blog.excerpt || blog.content.substring(0, 160);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}/blogs/${blog.slug}#article`,
    headline: blog.title,
    description,
    image: [absoluteImageUrl],
    author: {
      "@type": "Person",
      name: blog.author,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: PUBLISHER_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: PUBLISHER_LOGO,
      },
    },
    datePublished: blog.date,
    dateModified: blog.updatedAt || blog.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    inLanguage: "en",
  };

  return (
    <article className="min-h-screen bg-gradient-to-b from-blue-50 to-teal-50 lg:pt-5 pt-5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative mt-6 lg:mt-0 aspect-[3/2] w-full">
          <Image
            src={blog.image || "/images/home/dermatologist-blog-hero.jpg"}
            alt={blog.alt || blog.title}
            fill
            priority
            className="object-cover rounded-lg shadow-lg"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-[#B97A57] to-transparent opacity-70 rounded-lg"></div> */}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden p-5 sm:p-6 md:p-10 border border-blue-100">
          <div className="flex items-center mb-8 pb-4 border-b border-blue-100">
            <div className="flex items-center">
              <div className="mr-4">
                <div className="w-12 h-12 bg-[#B97A57] rounded-full flex items-center justify-center text-white font-bold shadow-md">
                  {blog.author.charAt(0)}
                </div>
              </div>
              <div>
                <p className="font-medium text-gray-900"> {blog.author}</p>
                <p className="text-sm text-gray-500">
                  Published on {formattedDate}
                </p>
              </div>
            </div>
          </div>

          {blog.tags && (
            <div className="flex flex-wrap gap-2 mb-6">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-[#F9F0EB]    text-[#B97E63] text-xs px-3 py-1 rounded-full border border-blue-200 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}



          <BlogContent content={blog.content} />
          <div>
            <Link
              href="/bookconsultation"
              className="bg-[#FAF2F0]  border-[#BF7F62] border hover:text-white  hover:bg-[#BF7F62]  font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Book an Consultation
            </Link></div>
          <div className="mt-10 pt-6 border-t border-blue-100">
            <Link
              href="/blogs"
              className="bg-[#B97A57] hover:bg-[#684e39] transition-colors duration-300 inline-flex items-center gap-2 text-white px-6 sm:px-7 py-3 rounded-md font-medium text-sm"
            >
              ← Back to All Dermatologist Blogs
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  const blogs = getBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}