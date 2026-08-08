'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const SpecializedServices = () =>
{
  const [showAll, setShowAll] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (index) =>
  {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  const carouselItems = [
    {
      img: '/images/skin-rejuvenation-1.webp',
      title: 'Skin Rejuvenation',
      text: 'Skin rejuvenation treatments like chemical peels and lasers reduce wrinkles, dullness, and pigmentation. While mild side effects may occur, preventive care with sunscreen, hydration, and healthy habits helps maintain radiant, youthful skin.',
      url: '/skin-rejuvenation',
    },
    {
      img: '/images/antiaging.webp',
      title: 'Anti-Aging Treatments',
      text: 'Anti-aging treatments address wrinkles, fine lines, and skin elasticity loss through non-invasive methods like injectables and lasers or surgical options, all focused on restoring youthful appearance and improving skin quality.',
      url: '/anti-aging-treatments',
    },
    {
      img: '/images/images_Post-Inflammatory Marks .webp',
      title: 'Pigmentation Treatment',
      text: 'This treatment improves uneven skin tone and reduces dark spots using chemical peels, laser therapy, and topical solutions, helping restore clearer, brighter, and healthier-looking skin with enhanced radiance and smoothness.',
      url: '/pigmentation-treatment',
    },
    {
      img: '/images/scar-revision-before-after.webp',
      title: 'Scar Reduction',
      text: 'Scar reduction treatments help minimize scars from acne, injuries, or surgery. Techniques like microneedling, laser therapy, and dermal fillers improve skin texture, smoothness, and appearance, restoring clearer and healthier skin overall.',
      url: '/scar-reduction',
    },
    {
      img: '/images/acne-scar-treatment-new.webp',
      title: 'Acne Treatment',
      text: 'Acne treatments address pimples, blackheads, and clogged pores using topical or oral medications, chemical peels, and laser therapy, aiming to control breakouts, reduce inflammation, and improve overall skin health and clarity.',
      url: '/acne-treatment',
    },
    {
      img: '/images/PRP-result-4-final.webp',
      title: 'Platelet - Rich Plasma',
      text: "Platelet - rich plasma(PRP) therapy involves injecting the patient's own plasma into the scalp, stimulating hair growth, strengthening follicles, and improving scalp health for natural, effective, and long- lasting hair restoration results.",
      url: '/prp-therapy',
    },
    {
      img: '/images/before-and-after-comparison-of-male-hair-regrowth-showcasing-the-effectiveness-of-a-hair-treatment-solution-photo.webp',
      title: 'Hair Loss Treatments',
      text: 'Hair loss treatments focus on slowing hair thinning, encouraging regrowth, and boosting density. Options include medications, topical solutions, and PRP therapy, all designed to restore healthier, fuller, and stronger hair naturally.',
      url: '/hair-loss-treatments',
    },
    {
      img: '/images/organic-scalp-pigmentation.webp',
      title: 'Scalp Micropigmentation',
      text: 'Scalp Micropigmentation is a cosmetic tattooing method that replicates tiny hair follicles, creating the illusion of thicker, fuller hair and providing a natural-looking solution for hair loss or thinning.',
      url: '/scalp-micropigmentation',
    },
    {
      img: '/images/hair-remover.webp',
      title: 'Laser Hair Removal',
      text: 'Laser hair removal targets hair follicles to slow or stop unwanted growth, offering long-term results across multiple body areas while enhancing smoothness, confidence, and convenience with minimal maintenance required.',
      url: '/laser-hair-removal',
    },
    {
      img: '/images/Unlocking-the-Basics-of-CO2-Laser-Skin-Resurfacing.webp',
      title: 'Laser Skin Resurfacing',
      text: 'Skin resurfacing treatments remove damaged layers to reduce wrinkles, sun damage, and uneven tone, while stimulating collagen production, improving texture, and restoring smoother, healthier, and more youthful-looking skin overall.',
      url: '/laser-skin-resurfacing',
    },
    {
      img: '/images/unwanted-tattoo-2.webp',
      title: 'Laser Tattoo Removal',
      text: 'Laser tattoo removal applies focused energy to break down ink pigments, which the body gradually clears, effectively fading unwanted tattoos and restoring natural skin appearance with minimal risk or scarring.',
      url: '/laser-tattoo-removal',
    },
  ];

  const itemsToShow = showAll ? carouselItems : carouselItems.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h2 className="text-4xl md:text-5xl text-[#a86e54] text-center font-serif pb-10">
        Our Specialized Services
      </h2>

      {/* Mobile Grid */}
      <div className="w-full max-w-6xl md:hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {itemsToShow.map((item, index) => (
            <article
              key={index}
              className="flex flex-col border border-black/10 rounded-lg bg-[#F9F0EB] text-slate-800 overflow-hidden"
            >
              <div className="relative w-full h-52 bg-gray-100">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onLoad={() => handleImageLoad(index)} // ✅ correct way in next/image
                  className={`object-cover transition-opacity duration-300 ${loadedImages[index] ? "opacity-100" : "opacity-0"
                    }`}
                />
                {!loadedImages[index] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500">
                    Loading...
                  </div>
                )}
              </div>
              <div className="flex flex-col flex-grow p-4 text-black">
                <h2 className="text-lg font-light mb-2">{item.title}</h2>
                <p className="text-sm mb-4 flex-grow">{item.text}</p>
                <Link
                  href={item.url}
                  className="  w-fit text-[#684E39] font-bold  rounded px-2 py-1 text-sm hover:bg-sky-600 hover:text-white transition"
                >
                  Read more &#8811;
                </Link>
              </div>
            </article>
          ))}
        </div>

        {carouselItems.length > 4 && (
          <div className="flex justify-center">
            <button
              className="bg-[#FEF7F8] text-[#BF7F62] border border-[#BF7F62] rounded-md px-6 py-2 hover:bg-[#BF7F62] hover:text-white transition"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'View Less Services' : 'View More Services'}
            </button>
          </div>
        )}
      </div>

      {/* Desktop Carousel */}
      <div className="hidden md:block w-full max-w-6xl overflow-hidden relative h-[450px]">
        <div className="flex absolute top-0 left-0 h-full animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
          {carouselItems.map((item, index) => (
            <article
              key={index}
              className="flex flex-col flex-none w-72 mr-8 border border-black/10 rounded-lg bg-white text-slate-800 h-[450px] overflow-hidden"
            >
              <div className="relative w-full h-52 bg-gray-100">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onLoad={() => handleImageLoad(index)} // ✅ correct way in next/image
                  className={`object-cover transition-opacity duration-300 ${loadedImages[index] ? "opacity-100" : "opacity-0"
                    }`}
                />
                {!loadedImages[index] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500">
                    Loading...
                  </div>
                )}
              </div>

              <div className="flex flex-col flex-grow sm:p-4 p-0">
                <h2 className="text-lg font-light mb-2">{item.title}</h2>
                <p className="text-sm text-justify   mb-4 flex-grow overflow-hidden">
                  {item.text}
                </p>
                <Link
                  href={item.url}
                  className="   w-fit  text-[#684E39] font-bold rounded px-2 py-1 text-sm   transition"
                >
                  <span className='hover:text-gray-900'>
                    Read more &#8811; </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Tailwind Keyframes */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-1 * (280px + 2rem) * 6));
          }
        }
      `}</style>
    </div>
  );
};

export default SpecializedServices;
