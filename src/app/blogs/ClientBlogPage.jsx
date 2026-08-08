"use client";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Palette, Droplet, Camera, Scissors } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useMemo } from "react";

const ClientBlogPage = ({ blogs }) => {
  // Set up intersection observers for different sections
  const [badgeRef, badgeInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [descRef, descInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [tagsRef, tagsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [credentialsRef, credentialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [doctorInfoRef, doctorInfoInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [specialtiesRef, specialtiesInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [membershipsRef, membershipsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Sort blogs by date (latest first) using useMemo for performance
  const sortedBlogs = useMemo(() => {
    return [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [blogs]);

  const totalPages = Math.ceil(sortedBlogs.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const currentBlogs = sortedBlogs.slice(start, start + itemsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" }); // optional scroll to top
    }
  };

  return (
    <div className="min-h-screen bg-[#FEF7F8] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div>
          <h1 className="text-3xl md:text-5xl text-[#a86e54] text-center font-serif max-w-6xl mx-auto leading-snug mb-4">
            Welcome to Dr. Ankit Mehra's Dermatology Clinic
          </h1>
          <h2 className="text-center text-gray-700 font-serif text-base md:text-xl mb-7 max-w-4xl mx-auto px-4 md:px-0">
            Where expertise, innovation, and compassionate care unite to offer comprehensive solutions for all your skin and hair needs.
          </h2>
        </div>
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.map((blog, blogIndex) => (
            <article
              key={`${blog.id}-${blogIndex}`}
              className="bg-[#F9F0EB] rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl group"
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden">
                <Image
                  src={blog.image || "/images/dermatology-blog-placeholder.webp"}
                  alt={blog.alt || blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={blog.id <= 3}
                />
                {blog.tags?.[0] && (
                  <span className="absolute bottom-4 right-4 bg-[#A86E54]  text-white text-xs px-3 py-1 rounded-full">
                    {blog.tags[0]}
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3 text-sm text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>
                    {new Date(blog.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="">{blog.author}</span>
                </div>
                <h2 className="text-xl font-bold text-[#A86E54] mb-3 font-serif group-hover:text-gray-700 transition-colors duration-300">
                  <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                </h2>
                <p className="text-gray-700 mb-5 line-clamp-3 font-serif">
                  {blog.excerpt || blog.content?.substring(0, 150)}...
                </p>
                <div className="flex flex-wrap font-serif gap-2">
                  {blog.tags?.slice(1, 5).map((tag, tagIndex) => (
                    <span
                      key={`${tag}-${tagIndex}`}
                      className="text-gray-600 flex space-y-1   mb-1"
                    >
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>{tag}
                    </span>
                  ))}
                </div>
                <div className="flex font-serif justify-center">
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="text-[#A86E54] font-semibold flex items-center hover:text-[#A86E54] transition-colors duration-300"
                    aria-label={`Read more about ${blog.title}`}
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex flex-wrap justify-center items-center gap-2 mt-10">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className=" py-1 rounded bg-[#F9F0EB] text-[#A86E54] hover:bg-[#A86E54]/20 disabled:opacity-50"
            >
              Prev
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i + 1)}
                className={`p-1 rounded ${currentPage === i + 1
                  ? "bg-[#F9F0EB] text-[#A86E54] border font-bold"
                  : "bg-[#F9F0EB] text-[#A86E54] hover:bg-[#A86E54]/20"
                  }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded bg-[#F9F0EB] text-[#A86E54] hover:bg-[#A86E54]/20 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}

        {/* Doctor Info Section */}
        <div className="mt-20 bg-[#F9F0EB] rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <motion.div
              ref={doctorInfoRef}
              initial={{ opacity: 0, x: -50 }}
              animate={
                doctorInfoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/3 bg-[#B97A57] p-6 md:p-8 text-white relative"
            >
              <h3 className="text-2xl font-bold mb-4">
                About Dr. Ankit Mehra
              </h3>
              <p className="mb-6">
                Best Dermatologist in Ajmer with 12+ years of expertise in advanced skin, hair, and laser treatments.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold">Clinic Address </h4>
                    <p className="text-blue-100 text-wrap">
                      Dermatology Clinic, Ajmer
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold">Education</h4>
                    <p className="text-blue-100">MD Skin & VD</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold">Experience</h4>
                    <p className="text-blue-100">12+ years, Former Assistant Professor at JLN Medical College</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold">Achievements</h4>
                    <p className="text-blue-100">8,000+ consultations, 500+ laser and skin treatments</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="w-full md:w-2/3 p-6 md:p-8">
              <motion.div
                ref={specialtiesRef}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  specialtiesInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <h3 className="text-3xl font-serif  text-[#B97A57] mb-4">
                  Our Specialized Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-[#f4e5de] p-3 rounded-lg mr-4">
                      <Sparkles className="h-6 w-6 text-[#B97A57]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#B97A57] ">
                        Skin Rejuvenation
                      </h4>
                      <p className="text-gray-600">
                        Innovative treatments including chemical peels and laser therapy for fine lines, wrinkles, and dull skin
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#f4e5de] p-3 rounded-lg mr-4">
                      <Palette className="h-6 w-6 text-[#B97A57]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#B97A57] ">
                        Treatment for Pigmentation
                      </h4>
                      <p className="text-gray-600">
                        Advanced therapies for melasma, freckles, and dark spots to enhance your complexion
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#f4e5de] p-3 rounded-lg mr-4">
                      <Droplet className="h-6 w-6 text-[#B97A57]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#B97A57] ">
                        Scar Reduction and Acne Treatment
                      </h4>
                      <p className="text-gray-600">
                        Advanced techniques like microneedling and laser treatments to improve skin texture and treat acne
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#f4e5de] p-3 rounded-lg mr-4">
                      <Camera className="h-6 w-6 text-[#B97A57]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#B97A57] ">
                        Cosmetic Dermatology
                      </h4>
                      <p className="text-gray-600">
                        Non-surgical aesthetic treatments like lip fillers, PRP therapy, and skin lightening solutions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#f4e5de] p-3 rounded-lg mr-4">
                      <Scissors className="h-6 w-6 text-[#B97A57]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#B97A57] ">
                        Hair Loss and Sexual Health Treatments
                      </h4>
                      <p className="text-gray-600">
                        Proven treatments for hair thinning and loss, including PRP therapy and mesotherapy
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default ClientBlogPage;